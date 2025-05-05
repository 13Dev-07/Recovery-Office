"use strict";
/**
 * API Utilities
 *
 * Helper functions for API interactions that incorporate sacred geometry principles
 * for timing, retries, and error handling.
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatErrorMessage = exports.categorizeError = exports.retryWithFibonacci = void 0;
var sacred_geometry_1 = require("../constants/sacred-geometry");
var api_types_1 = require("../types/api.types");
/**
 * Retry a function with exponential backoff based on Fibonacci sequence
 *
 * @param fn - Async function to retry
 * @param operationName - Name of the operation being retried (for logging)
 * @param maxRetries - Maximum number of retry attempts (default: 3)
 * @param initialBackoffIndex - Initial Fibonacci index for backoff timing (default: 8, which is 21)
 * @returns Promise that resolves with the function result or rejects with the last error
 */
var retryWithFibonacci = function (fn_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([fn_1], args_1, true), void 0, function (fn, operationName, maxRetries, initialBackoffIndex) {
        var retryCount, lastError, _loop_1, state_1;
        if (operationName === void 0) { operationName = 'API operation'; }
        if (maxRetries === void 0) { maxRetries = 3; }
        if (initialBackoffIndex === void 0) { initialBackoffIndex = 8; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retryCount = 0;
                    _loop_1 = function () {
                        var _b, error_1, statusCode, isClientError, isRetryableError, waitTime, jitter, totalWaitTime_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 2, , 4]);
                                    _b = {};
                                    return [4 /*yield*/, fn()];
                                case 1: return [2 /*return*/, (_b.value = _c.sent(), _b)];
                                case 2:
                                    error_1 = _c.sent();
                                    lastError = error_1;
                                    // Log the error with operation details
                                    console.error("".concat(operationName, " failed (attempt ").concat(retryCount + 1, "/").concat(maxRetries + 1, "):"), error_1);
                                    // Don't retry if this is a client error (4xx except for specific retryable errors)
                                    if (error_1 instanceof api_types_1.ApiError) {
                                        statusCode = error_1.statusCode;
                                        isClientError = statusCode >= 400 && statusCode < 500;
                                        isRetryableError = statusCode === api_types_1.HttpStatusCode.TOO_MANY_REQUESTS ||
                                            statusCode === api_types_1.HttpStatusCode.GATEWAY_TIMEOUT;
                                        if (isClientError && !isRetryableError) {
                                            console.log("".concat(operationName, " failed with non-retryable error (").concat(error_1.code, "). Not retrying."));
                                            throw error_1;
                                        }
                                    }
                                    retryCount++;
                                    if (retryCount > maxRetries) {
                                        console.warn("".concat(operationName, " exceeded maximum retry attempts (").concat(maxRetries, ")"));
                                        return [2 /*return*/, "break"];
                                    }
                                    waitTime = (0, sacred_geometry_1.getFibonacciByIndex)(initialBackoffIndex + retryCount) * 10;
                                    jitter = Math.random() * sacred_geometry_1.PHI * 10;
                                    totalWaitTime_1 = waitTime + jitter;
                                    console.log("".concat(operationName, " retrying in ").concat(Math.round(totalWaitTime_1), "ms (retry ").concat(retryCount, "/").concat(maxRetries, ")"));
                                    // Wait before next retry
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, totalWaitTime_1); })];
                                case 3:
                                    // Wait before next retry
                                    _c.sent();
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!(retryCount <= maxRetries)) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    if (state_1 === "break")
                        return [3 /*break*/, 3];
                    return [3 /*break*/, 1];
                case 3: throw lastError instanceof api_types_1.ApiError ? lastError : new api_types_1.ApiError(api_types_1.ApiErrorCode.UNEXPECTED_ERROR, typeof lastError === 'object' && lastError !== null && 'message' in lastError
                    ? String(lastError.message)
                    : 'Maximum retries exceeded', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
            }
        });
    });
};
exports.retryWithFibonacci = retryWithFibonacci;
/**
 * Categorize and format API errors for consistent handling
 *
 * @param error - The error object to categorize
 * @returns A properly typed ApiError
 */
var categorizeError = function (error) {
    // If it's already an ApiError, return it
    if (error instanceof api_types_1.ApiError) {
        return error;
    }
    // Cast to error with message interface to avoid using 'any'
    var errorWithMessage = error;
    // Network errors
    if (error instanceof TypeError && errorWithMessage.message.includes('Network')) {
        return new api_types_1.ApiError(api_types_1.ApiErrorCode.NETWORK_ERROR, 'Unable to connect to the server. Please check your internet connection.', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
    }
    // Timeout errors
    if (errorWithMessage.message && errorWithMessage.message.includes('timeout')) {
        return new api_types_1.ApiError(api_types_1.ApiErrorCode.GATEWAY_TIMEOUT, 'The request timed out. Please try again later.', api_types_1.HttpStatusCode.GATEWAY_TIMEOUT);
    }
    // Parse errors from API responses
    if (errorWithMessage.response && errorWithMessage.response.data) {
        var data = errorWithMessage.response.data;
        if ((0, api_types_1.isApiErrorResponse)(data)) {
            return new api_types_1.ApiError(data.error.code, data.error.message || 'An error occurred', errorWithMessage.response.status || api_types_1.HttpStatusCode.INTERNAL_SERVER_ERROR, data.error.details);
        }
    }
    // Default to unexpected error
    return new api_types_1.ApiError(api_types_1.ApiErrorCode.UNEXPECTED_ERROR, errorWithMessage.message || 'An unexpected error occurred', api_types_1.HttpStatusCode.INTERNAL_SERVER_ERROR);
};
exports.categorizeError = categorizeError;
/**
 * Format error message for user display
 *
 * @param error - The error to format
 * @returns A user-friendly error message
 */
var formatErrorMessage = function (error) {
    var apiError = (0, exports.categorizeError)(error);
    // Return the error message with optional details
    return apiError.message;
};
exports.formatErrorMessage = formatErrorMessage;
