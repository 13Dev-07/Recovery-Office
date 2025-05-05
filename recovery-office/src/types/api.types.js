"use strict";
/**
 * API Type Definitions
 *
 * This file contains TypeScript interfaces and types for all API interactions.
 * It provides strong typing for requests, responses, and error handling
 * based on the Recovery Office API structure.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialization = exports.contactFormSchema = exports.newsletterSubscriptionSchema = exports.availableSlotsRequestSchema = exports.createBookingRequestSchema = exports.clientInfoSchema = exports.ServiceType = exports.BookingStatus = exports.ApiError = exports.ApiErrorCode = exports.HttpStatusCode = void 0;
exports.isApiErrorResponse = isApiErrorResponse;
exports.isApiSuccessResponse = isApiSuccessResponse;
exports.isPaginatedResponse = isPaginatedResponse;
var zod_1 = require("zod");
/**
 * Common HTTP Status Codes
 */
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusCode[HttpStatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCode[HttpStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
})(HttpStatusCode || (exports.HttpStatusCode = HttpStatusCode = {}));
/**
 * API Error Codes
 */
var ApiErrorCode;
(function (ApiErrorCode) {
    // Authentication errors
    ApiErrorCode["AUTH_INVALID_CREDENTIALS"] = "AUTH_INVALID_CREDENTIALS";
    ApiErrorCode["AUTH_TOKEN_EXPIRED"] = "AUTH_TOKEN_EXPIRED";
    ApiErrorCode["AUTH_TOKEN_INVALID"] = "AUTH_TOKEN_INVALID";
    // Validation errors
    ApiErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ApiErrorCode["INVALID_REQUEST_FORMAT"] = "INVALID_REQUEST_FORMAT";
    // Resource errors
    ApiErrorCode["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
    ApiErrorCode["RESOURCE_ALREADY_EXISTS"] = "RESOURCE_ALREADY_EXISTS";
    ApiErrorCode["RESOURCE_CONFLICT"] = "RESOURCE_CONFLICT";
    // Server errors
    ApiErrorCode["SERVER_ERROR"] = "SERVER_ERROR";
    ApiErrorCode["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    // Business logic errors
    ApiErrorCode["BUSINESS_RULE_VIOLATION"] = "BUSINESS_RULE_VIOLATION";
    ApiErrorCode["BOOKING_CONFLICT"] = "BOOKING_CONFLICT";
    ApiErrorCode["BOOKING_UNAVAILABLE"] = "BOOKING_UNAVAILABLE";
    // Network and client errors
    ApiErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
    ApiErrorCode["CLIENT_ERROR"] = "CLIENT_ERROR";
    ApiErrorCode["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
    ApiErrorCode["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    ApiErrorCode["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
})(ApiErrorCode || (exports.ApiErrorCode = ApiErrorCode = {}));
/**
 * API Error class for consistent error handling
 */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(code, message, statusCode, details) {
        if (statusCode === void 0) { statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR; }
        var _this = _super.call(this, message) || this;
        _this.name = 'ApiError';
        _this.code = code;
        _this.statusCode = statusCode;
        // Only assign details if it's not undefined
        if (details !== undefined) {
            _this.details = details;
        }
        // This is needed to properly extend Error in TypeScript
        Object.setPrototypeOf(_this, ApiError.prototype);
        return _this;
    }
    /**
     * Create an ApiError from an error response
     */
    ApiError.fromResponse = function (response, statusCode) {
        return new ApiError(response.error.code, response.error.message, statusCode, response.error.details);
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;
// ======================================================================
// Service Specific Types
// ======================================================================
/**
 * Booking API Types
 */
// Booking Status
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["PENDING"] = "pending";
    BookingStatus["CONFIRMED"] = "confirmed";
    BookingStatus["COMPLETED"] = "completed";
    BookingStatus["CANCELLED"] = "cancelled";
    BookingStatus["RESCHEDULED"] = "rescheduled";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
// Service Type
var ServiceType;
(function (ServiceType) {
    ServiceType["INITIAL_CONSULTATION"] = "initial_consultation";
    ServiceType["FOLLOW_UP"] = "follow_up";
    ServiceType["COMPREHENSIVE_ASSESSMENT"] = "comprehensive_assessment";
    ServiceType["SPECIALIZED_TREATMENT"] = "specialized_treatment";
    ServiceType["EMERGENCY_SESSION"] = "emergency_session";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
// Client Information Schema
exports.clientInfoSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    email: zod_1.z.string().email('Please enter a valid email address'),
    phone: zod_1.z.string().min(10, 'Please enter a valid phone number'),
    dateOfBirth: zod_1.z.string().optional(),
    preferredContactMethod: zod_1.z.enum(['email', 'phone', 'text']),
    additionalNotes: zod_1.z.string().optional(),
});
// Create Booking Request
exports.createBookingRequestSchema = zod_1.z.object({
    serviceType: zod_1.z.nativeEnum(ServiceType),
    startTime: zod_1.z.string().datetime({ offset: true }),
    endTime: zod_1.z.string().datetime({ offset: true }),
    clientInfo: exports.clientInfoSchema,
    isNewClient: zod_1.z.boolean(),
});
// Get Available Slots Request
exports.availableSlotsRequestSchema = zod_1.z.object({
    serviceType: zod_1.z.nativeEnum(ServiceType),
    date: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    duration: zod_1.z.number().min(15).max(120).optional(),
});
/**
 * Newsletter API Types
 */
// Newsletter Subscription Request
exports.newsletterSubscriptionSchema = zod_1.z.object({
    email: zod_1.z.string().email('Please enter a valid email address'),
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters').optional(),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters').optional(),
    interests: zod_1.z.array(zod_1.z.string()).optional(),
    consent: zod_1.z.boolean().refine(function (val) { return val === true; }, 'You must consent to receive emails'),
});
/**
 * Contact API Types
 */
// Contact Form Submission
exports.contactFormSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    email: zod_1.z.string().email('Please enter a valid email address'),
    phone: zod_1.z.string().optional(),
    subject: zod_1.z.string().min(5, 'Subject must be at least 5 characters'),
    message: zod_1.z.string().min(20, 'Message must be at least 20 characters'),
    serviceInterest: zod_1.z.string().optional(),
    referralSource: zod_1.z.string().optional(),
    consent: zod_1.z.boolean().refine(function (val) { return val === true; }, 'You must consent to our privacy policy'),
});
/**
 * Team Member API Types
 */
// Specialization
var Specialization;
(function (Specialization) {
    Specialization["PHYSICAL_THERAPY"] = "physical_therapy";
    Specialization["HOLISTIC_HEALING"] = "holistic_healing";
    Specialization["REHABILITATION"] = "rehabilitation";
    Specialization["SPORTS_MEDICINE"] = "sports_medicine";
    Specialization["NUTRITIONAL_COUNSELING"] = "nutritional_counseling";
    Specialization["MASSAGE_THERAPY"] = "massage_therapy";
    Specialization["ACUPUNCTURE"] = "acupuncture";
})(Specialization || (exports.Specialization = Specialization = {}));
/**
 * Type guard functions
 */
/**
 * Type guard to check if a response is an error response
 */
function isApiErrorResponse(response) {
    return (response &&
        response.success === false &&
        typeof response.error === 'object' &&
        typeof response.error.code === 'string' &&
        typeof response.error.message === 'string');
}
/**
 * Type guard to check if a response is a successful response
 */
function isApiSuccessResponse(response) {
    return (response &&
        response.success === true &&
        'data' in response &&
        typeof response.timestamp === 'string');
}
/**
 * Type guard to check if a response is paginated
 */
function isPaginatedResponse(response) {
    return (response &&
        Array.isArray(response.items) &&
        typeof response.total === 'number' &&
        typeof response.page === 'number' &&
        typeof response.limit === 'number' &&
        typeof response.totalPages === 'number' &&
        typeof response.hasNextPage === 'boolean' &&
        typeof response.hasPrevPage === 'boolean');
}
