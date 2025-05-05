"use strict";
/**
 * Newsletter Service
 *
 * Provides API calls and utilities for the newsletter system.
 * Implements sacred geometry principles for timing and data structures.
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
exports.subscribeToNewsletter = subscribeToNewsletter;
exports.unsubscribeFromNewsletter = unsubscribeFromNewsletter;
exports.confirmSubscription = confirmSubscription;
exports.updateNewsletterPreferences = updateNewsletterPreferences;
exports.getSubscriptionByEmail = getSubscriptionByEmail;
exports.getNewsletterAnalytics = getNewsletterAnalytics;
exports.calculateOptimalSendingTime = calculateOptimalSendingTime;
exports.generateSubjectVariations = generateSubjectVariations;
var api_types_1 = require("../types/api.types");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var api_1 = require("./api");
// API Endpoints
var ENDPOINTS = {
    SUBSCRIBE: '/newsletter/subscribe',
    UNSUBSCRIBE: '/newsletter/unsubscribe',
    CONFIRM: '/newsletter/confirm',
    UPDATE_PREFERENCES: '/newsletter/preferences',
    GET_SUBSCRIPTION: function (email) { return "/newsletter/subscription/".concat(encodeURIComponent(email)); },
    GET_ANALYTICS: '/newsletter/analytics',
};
/**
 * Subscribe to the newsletter
 * @param subscriptionData The newsletter subscription data
 * @returns The subscription response with confirmation details
 */
function subscribeToNewsletter(subscriptionData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post(ENDPOINTS.SUBSCRIBE, subscriptionData)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof api_types_1.ApiError) {
                        throw error_1;
                    }
                    // Handle validation errors
                    if ((0, api_types_1.isApiErrorResponse)(error_1) && error_1.error.code === api_types_1.ApiErrorCode.VALIDATION_ERROR) {
                        throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Please check your subscription information and try again', api_types_1.HttpStatusCode.UNPROCESSABLE_ENTITY, error_1.error.details);
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to process newsletter subscription at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Unsubscribe from the newsletter
 * @param email Email address to unsubscribe
 * @param token Optional unsubscribe token for verification
 * @returns Confirmation of unsubscription
 */
function unsubscribeFromNewsletter(email, token) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post(ENDPOINTS.UNSUBSCRIBE, { email: email, token: token })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_2 = _a.sent();
                    if (error_2 instanceof api_types_1.ApiError) {
                        throw error_2;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to process unsubscription at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Confirm newsletter subscription with token
 * @param token Confirmation token received via email
 * @returns Confirmed subscription details
 */
function confirmSubscription(token) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post(ENDPOINTS.CONFIRM, { token: token })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_3 = _a.sent();
                    if (error_3 instanceof api_types_1.ApiError) {
                        throw error_3;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid or expired confirmation token', api_types_1.HttpStatusCode.BAD_REQUEST);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Update newsletter preferences
 * @param updateData Preference update data including email and preferences
 * @returns Updated subscription details
 */
function updateNewsletterPreferences(updateData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.put(ENDPOINTS.UPDATE_PREFERENCES, updateData)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_4 = _a.sent();
                    if (error_4 instanceof api_types_1.ApiError) {
                        throw error_4;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to update newsletter preferences at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get subscription information by email
 * @param email Email address to look up
 * @returns Subscription details if found
 */
function getSubscriptionByEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.get(ENDPOINTS.GET_SUBSCRIPTION(email))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_5 = _a.sent();
                    if (error_5 instanceof api_types_1.ApiError) {
                        throw error_5;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.RESOURCE_NOT_FOUND, 'Subscription not found for this email address', api_types_1.HttpStatusCode.NOT_FOUND);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get newsletter analytics data (for admin use)
 * @returns Analytics data including subscription metrics
 */
function getNewsletterAnalytics() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.get(ENDPOINTS.GET_ANALYTICS)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_6 = _a.sent();
                    if (error_6 instanceof api_types_1.ApiError) {
                        throw error_6;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to retrieve newsletter analytics at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Calculate optimal newsletter sending times based on sacred principles
 * @param baseTime Base time (hour 0-23)
 * @returns Optimized sending time following golden ratio
 */
function calculateOptimalSendingTime(baseTime) {
    // Apply golden ratio to determine harmonic sending time
    // We use PHI_INVERSE (0.618) to create a natural progression through the day
    var optimalHour = (baseTime + 24 * sacred_geometry_1.PHI) % 24;
    // Round to nearest hour
    return Math.round(optimalHour);
}
/**
 * Generate subject line variations based on Fibonacci spacing
 * @param baseSubject The base subject line
 * @returns Array of subject line variations
 */
function generateSubjectVariations(baseSubject) {
    // Use first few Fibonacci numbers for word spacing/replacement
    var fibPositions = [1, 2, 3, 5, 8, 13];
    var words = baseSubject.split(' ');
    var variations = [baseSubject];
    // Generate variations by emphasizing words at Fibonacci positions
    fibPositions.forEach(function (pos) {
        var _a, _b;
        if (pos < words.length) {
            var emphasizedWords = __spreadArray([], words, true);
            var wordAtPosition = (_a = emphasizedWords[pos]) !== null && _a !== void 0 ? _a : 1;
            if (wordAtPosition) {
                (_b = emphasizedWords[pos]) !== null && _b !== void 0 ? _b : 1;
                wordAtPosition.toUpperCase();
                variations.push(emphasizedWords.join(' '));
            }
        }
    });
    return variations;
}
