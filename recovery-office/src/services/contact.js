"use strict";
/**
 * Contact Service
 *
 * Provides API calls and utilities for the contact form system.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContactForm = submitContactForm;
exports.getContactSubmission = getContactSubmission;
exports.getContactSubmissions = getContactSubmissions;
exports.submitFeedback = submitFeedback;
exports.calculateEstimatedResponseTime = calculateEstimatedResponseTime;
exports.determinePriority = determinePriority;
var api_types_1 = require("../types/api.types");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../utils/getFibonacciByIndex");
var api_1 = require("./api");
// API Endpoints
var ENDPOINTS = {
    SUBMIT_CONTACT: '/contact/submit',
    GET_SUBMISSION: function (id) { return "/contact/submission/".concat(id); },
    GET_SUBMISSIONS: '/contact/submissions',
    FEEDBACK: '/contact/feedback',
};
/**
 * Submit a contact form
 * @param contactData The contact form data
 * @returns The contact form response with confirmation
 */
function submitContactForm(contactData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post(ENDPOINTS.SUBMIT_CONTACT, contactData)];
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
                        throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Please check your contact information and try again', api_types_1.HttpStatusCode.UNPROCESSABLE_ENTITY, error_1.error.details);
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to submit contact form at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get a contact submission by ID
 * @param submissionId The submission ID to retrieve
 * @returns The contact submission details
 */
function getContactSubmission(submissionId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, api_1.getWithRetry)(ENDPOINTS.GET_SUBMISSION(submissionId))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_2 = _a.sent();
                    if (error_2 instanceof api_types_1.ApiError) {
                        throw error_2;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.RESOURCE_NOT_FOUND, 'Contact submission not found', api_types_1.HttpStatusCode.NOT_FOUND);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get all contact submissions for the authenticated user
 * @param page Page number for pagination
 * @param limit Number of items per page, follows Fibonacci sequence
 * @returns List of contact form submissions
 */
function getContactSubmissions() {
    return __awaiter(this, arguments, void 0, function (page, limit // 21 items per page
    ) {
        var response, error_3;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = (0, getFibonacciByIndex_1.getFibonacciByIndex)(8); }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.get(ENDPOINTS.GET_SUBMISSIONS, {
                            params: {
                                page: page,
                                limit: limit
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_3 = _a.sent();
                    if (error_3 instanceof api_types_1.ApiError) {
                        throw error_3;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to retrieve contact submissions', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Submit feedback for a contact submission
 * @param submissionId The ID of the contact submission
 * @param feedback Feedback text
 * @param rating Optional rating (1-5)
 * @returns Updated contact submission with feedback
 */
function submitFeedback(submissionId, feedback, rating) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post(ENDPOINTS.FEEDBACK, {
                            submissionId: submissionId,
                            feedback: feedback,
                            rating: rating
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_4 = _a.sent();
                    if (error_4 instanceof api_types_1.ApiError) {
                        throw error_4;
                    }
                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.SERVICE_UNAVAILABLE, 'Unable to submit feedback at this time', api_types_1.HttpStatusCode.SERVICE_UNAVAILABLE);
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Calculate estimated response time based on Golden Ratio
 * @param baseHours Base hours for standard response time
 * @returns Optimized response time following sacred geometry
 */
function calculateEstimatedResponseTime(baseHours) {
    // Find the closest Fibonacci number
    var fibValues = Object.values(sacred_geometry_1.FIBONACCI);
    // Find the closest Fibonacci value
    var closestFib = fibValues.reduce(function (prev, curr) {
        return Math.abs(curr - baseHours) < Math.abs(prev - baseHours) ? curr : prev;
    });
    // Apply PHI for a natural, harmonious response time
    return Math.round(closestFib * sacred_geometry_1.PHI);
}
/**
 * Determine priority level based on subject and content
 * @param subject Email subject
 * @param message Email content
 * @returns Priority level (1-5)
 */
function determinePriority(subject, message) {
    // Start with base priority
    var basePriority = 3;
    // Priority keywords that might indicate urgency
    var highPriorityKeywords = ['urgent', 'emergency', 'immediate', 'critical'];
    var mediumPriorityKeywords = ['important', 'help', 'issue', 'problem'];
    // Check subject and message for priority keywords
    var combinedText = "".concat(subject.toLowerCase(), " ").concat(message.toLowerCase());
    if (highPriorityKeywords.some(function (keyword) { return combinedText.includes(keyword); })) {
        basePriority = 5;
    }
    else if (mediumPriorityKeywords.some(function (keyword) { return combinedText.includes(keyword); })) {
        basePriority = 4;
    }
    return basePriority;
}
