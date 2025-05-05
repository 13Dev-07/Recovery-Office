"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * API Service
 *
 * Provides base HTTP functionality and configuration for API calls.
 * Handles authentication, error transformation, and request/response interceptors.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
exports.getWithRetry = getWithRetry;
var axios_1 = require("axios");
var api_types_1 = require("../types/api.types");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// API configuration
var API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_URL || 'https://api.recoveryoffice.com/v1',
    TIMEOUT: sacred_geometry_1.ANIMATION_TIMING.slow * 1000, // Convert seconds to milliseconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: sacred_geometry_1.ANIMATION_TIMING.standard * 1000, // Convert seconds to milliseconds
};
/**
 * Create and configure the Axios instance
 */
var createApiClient = function () {
    var client = axios_1.default.create({
        baseURL: API_CONFIG.BASE_URL,
        timeout: API_CONFIG.TIMEOUT,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    // Request interceptor
    client.interceptors.request.use(function (config) {
        // Get auth token from storage if available
        var token = localStorage.getItem('auth_token');
        if (token && config.headers) {
            config.headers.Authorization = "Bearer ".concat(token);
        }
        return config;
    }, function (error) { return Promise.reject(error); });
    // Response interceptor
    client.interceptors.response.use(function (response) { return response; }, function (error) { return __awaiter(void 0, void 0, void 0, function () {
        var axiosError, originalRequest, refreshToken;
        var _a;
        return __generator(this, function (_b) {
            axiosError = error;
            originalRequest = axiosError.config;
            // Handle token expiration
            if (((_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.status) === api_types_1.HttpStatusCode.UNAUTHORIZED &&
                !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    refreshToken = localStorage.getItem('refresh_token');
                    if (refreshToken) {
                        // For now, just handle token refresh failure
                        // In a real implementation, would call refresh token endpoint
                        localStorage.removeItem('auth_token');
                        localStorage.removeItem('refresh_token');
                        window.location.href = '/login'; // Redirect to login
                    }
                }
                catch (refreshError) {
                    // Clear tokens and redirect to login
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login';
                    return [2 /*return*/, Promise.reject(refreshError)];
                }
            }
            // Transform error to standardized API error
            return [2 /*return*/, Promise.reject(handleApiError(axiosError))];
        });
    }); });
    return client;
};
/**
 * Transform Axios error to standardized API error
 */
var handleApiError = function (error) {
    // If the error is from the API and follows the expected structure
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if ((0, api_types_1.isApiErrorResponse)(errorData)) {
            return new api_types_1.ApiError(errorData.error.code, errorData.error.message, error.response.status, errorData.error.details);
        }
    }
    // Default error handling for unexpected errors
    if (error.response) {
        // The request was made and the server responded with a status code
        // outside the 2xx range
        return new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVER_ERROR, error.message || 'An unexpected error occurred', error.response.status);
    }
    else if (error.request) {
        // The request was made but no response was received
        return new api_types_1.ApiError(api_types_1.ApiErrorCode.NETWORK_ERROR, 'Network error. Please check your connection.', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
    }
    else {
        // Something happened in setting up the request that triggered an Error
        return new api_types_1.ApiError(api_types_1.ApiErrorCode.CLIENT_ERROR, 'An error occurred while processing your request.', api_types_1.HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
};
/**
 * API client instance
 */
exports.api = createApiClient();
/**
 * Make a GET request with retries
 */
function getWithRetry(url_1, config_1) {
    return __awaiter(this, arguments, void 0, function (url, config, maxRetries) {
        var retries, _loop_1, state_1;
        if (maxRetries === void 0) { maxRetries = API_CONFIG.RETRY_ATTEMPTS; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retries = 0;
                    _loop_1 = function () {
                        var _b, error_1, apiError, delay_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 2, , 5]);
                                    _b = {};
                                    return [4 /*yield*/, exports.api.get(url, config)];
                                case 1: return [2 /*return*/, (_b.value = _c.sent(), _b)];
                                case 2:
                                    error_1 = _c.sent();
                                    apiError = error_1;
                                    if (!(apiError instanceof api_types_1.ApiError &&
                                        [
                                            api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE,
                                            api_types_1.HttpStatusCode.TOO_MANY_REQUESTS,
                                            api_types_1.HttpStatusCode.GATEWAY_TIMEOUT
                                        ].includes(apiError.statusCode) &&
                                        retries < maxRetries - 1)) return [3 /*break*/, 4];
                                    delay_1 = API_CONFIG.RETRY_DELAY * Math.pow(2, retries) +
                                        Math.floor(Math.random() * 100);
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                                case 3:
                                    _c.sent();
                                    retries++;
                                    return [2 /*return*/, "continue"];
                                case 4: throw error_1;
                                case 5: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!(retries < maxRetries)) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    return [3 /*break*/, 1];
                case 3: throw new api_types_1.ApiError(api_types_1.ApiErrorCode.NETWORK_ERROR, 'Maximum retry attempts reached', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
            }
        });
    });
}
