"use strict";
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
exports.api = exports.requestWithRetry = exports.apiClient = void 0;
var axios_1 = require("axios");
var api_types_1 = require("../types/api.types");
// Environment-specific API configuration
var API_CONFIG = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 15000, // 15 seconds default timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};
/**
 * Creates and configures an Axios instance for API requests
 * Includes request/response interceptors for consistent handling
 * @returns Configured Axios instance
 */
var createApiClient = function () {
    var instance = axios_1.default.create(API_CONFIG);
    // Add a request interceptor
    instance.interceptors.request.use(function (config) {
        // Add authentication token if available
        var token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = "Bearer ".concat(token);
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
        // Transform successful responses to our ApiResponse format
        var apiResponse = {
            success: true,
            data: response.data,
            timestamp: new Date().toISOString()
        };
        // Return the modified response
        response.data = apiResponse;
        return response;
    }, function (error) {
        var _a, _b, _c;
        // Handle errors
        var errorCode = api_types_1.ApiErrorCode.UNEXPECTED_ERROR;
        var message = 'An unexpected error occurred';
        var statusCode = api_types_1.HttpStatusCode.INTERNAL_SERVER_ERROR;
        var details = undefined;
        if (error.response) {
            // Server returned an error response
            statusCode = error.response.status;
            message = ((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message) || "HTTP Error: ".concat(statusCode);
            errorCode = ((_b = error.response.data) === null || _b === void 0 ? void 0 : _b.code) || mapStatusCodeToErrorCode(statusCode);
            details = (_c = error.response.data) === null || _c === void 0 ? void 0 : _c.details;
        }
        else if (error.request) {
            // Request was made but no response was received
            errorCode = api_types_1.ApiErrorCode.NETWORK_ERROR;
            message = 'No response received from server';
            statusCode = 0;
        }
        // Create ApiError instance
        var apiError = new api_types_1.ApiError(errorCode, message, statusCode, details);
        return Promise.reject(apiError);
    });
    return instance;
};
/**
 * Maps HTTP status codes to ApiErrorCode values
 * @param statusCode HTTP status code
 * @returns Appropriate ApiErrorCode
 */
var mapStatusCodeToErrorCode = function (statusCode) {
    switch (statusCode) {
        case api_types_1.HttpStatusCode.BAD_REQUEST:
            return api_types_1.ApiErrorCode.VALIDATION_ERROR;
        case api_types_1.HttpStatusCode.UNAUTHORIZED:
            return api_types_1.ApiErrorCode.AUTH_INVALID_CREDENTIALS;
        case api_types_1.HttpStatusCode.FORBIDDEN:
            return api_types_1.ApiErrorCode.AUTH_TOKEN_INVALID;
        case api_types_1.HttpStatusCode.NOT_FOUND:
            return api_types_1.ApiErrorCode.RESOURCE_NOT_FOUND;
        case api_types_1.HttpStatusCode.CONFLICT:
            return api_types_1.ApiErrorCode.RESOURCE_CONFLICT;
        case api_types_1.HttpStatusCode.UNPROCESSABLE_ENTITY:
            return api_types_1.ApiErrorCode.VALIDATION_ERROR;
        case api_types_1.HttpStatusCode.TOO_MANY_REQUESTS:
            return api_types_1.ApiErrorCode.TOO_MANY_REQUESTS;
        case api_types_1.HttpStatusCode.INTERNAL_SERVER_ERROR:
            return api_types_1.ApiErrorCode.SERVER_ERROR;
        case api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE:
            return api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE;
        default:
            return api_types_1.ApiErrorCode.UNEXPECTED_ERROR;
    }
};
// Create and export the configured API client
exports.apiClient = createApiClient();
/**
 * Makes an API request with automatic retries for specified error codes
 * @param method The HTTP method to use
 * @param url The URL to request
 * @param data Optional data payload
 * @param retryConfig Optional retry configuration
 * @returns Promise with API response
 */
var requestWithRetry = function (method, url, data, retryConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, maxRetries, _c, retryDelay, _d, retryStatusCodes, retries, response, _e, error_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = retryConfig || {}, _b = _a.maxRetries, maxRetries = _b === void 0 ? 3 : _b, _c = _a.retryDelay, retryDelay = _c === void 0 ? 1000 : _c, _d = _a.retryStatusCodes, retryStatusCodes = _d === void 0 ? [408, 429, 500, 502, 503, 504] : _d;
                retries = 0;
                _f.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 16];
                _f.label = 2;
            case 2:
                _f.trys.push([2, 12, , 15]);
                response = void 0;
                _e = method;
                switch (_e) {
                    case 'get': return [3 /*break*/, 3];
                    case 'post': return [3 /*break*/, 5];
                    case 'put': return [3 /*break*/, 7];
                    case 'delete': return [3 /*break*/, 9];
                }
                return [3 /*break*/, 11];
            case 3: return [4 /*yield*/, exports.apiClient.get(url)];
            case 4:
                response = _f.sent();
                return [3 /*break*/, 11];
            case 5: return [4 /*yield*/, exports.apiClient.post(url, data)];
            case 6:
                response = _f.sent();
                return [3 /*break*/, 11];
            case 7: return [4 /*yield*/, exports.apiClient.put(url, data)];
            case 8:
                response = _f.sent();
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, exports.apiClient.delete(url)];
            case 10:
                response = _f.sent();
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/, response.data];
            case 12:
                error_1 = _f.sent();
                if (!(error_1 instanceof api_types_1.ApiError &&
                    retryStatusCodes.includes(error_1.statusCode) &&
                    retries < maxRetries)) return [3 /*break*/, 14];
                retries++;
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, retryDelay * retries); })];
            case 13:
                _f.sent();
                return [3 /*break*/, 1];
            case 14: throw error_1;
            case 15: return [3 /*break*/, 1];
            case 16: return [2 /*return*/];
        }
    });
}); };
exports.requestWithRetry = requestWithRetry;
// Convenience methods for common API operations
exports.api = {
    get: function (url, config) { return exports.apiClient.get(url, config); },
    post: function (url, data, config) { return exports.apiClient.post(url, data, config); },
    put: function (url, data, config) { return exports.apiClient.put(url, data, config); },
    delete: function (url, config) { return exports.apiClient.delete(url, config); },
    patch: function (url, data, config) { return exports.apiClient.patch(url, data, config); }
};
