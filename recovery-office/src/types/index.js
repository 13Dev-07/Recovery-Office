"use strict";
/**
 * Type Definitions
 *
 * This file exports all types used throughout the application
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.canProceedToNextStep = exports.isStepComplete = exports.bookingClientInfoSchema = exports.confirmationSchema = exports.dateSelectionSchema = exports.serviceSelectionSchema = exports.BookingActionType = exports.BookingStepId = exports.apiClientInfoSchema = exports.isPaginatedResponse = exports.isApiSuccessResponse = exports.isApiErrorResponse = exports.ApiError = exports.Specialization = exports.ServiceType = exports.BookingStatus = exports.ApiErrorCode = exports.HttpStatusCode = void 0;
// Export common types
__exportStar(require("./general.types"), exports);
// Import API types with renamed schemas
var api_types_1 = require("./api.types");
Object.defineProperty(exports, "HttpStatusCode", { enumerable: true, get: function () { return 
    // Enums (these should be regular exports)
    api_types_1.HttpStatusCode; } });
Object.defineProperty(exports, "ApiErrorCode", { enumerable: true, get: function () { return api_types_1.ApiErrorCode; } });
Object.defineProperty(exports, "BookingStatus", { enumerable: true, get: function () { return api_types_1.BookingStatus; } });
Object.defineProperty(exports, "ServiceType", { enumerable: true, get: function () { return api_types_1.ServiceType; } });
Object.defineProperty(exports, "Specialization", { enumerable: true, get: function () { return api_types_1.Specialization; } });
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return 
    // Value exports
    api_types_1.ApiError; } });
Object.defineProperty(exports, "isApiErrorResponse", { enumerable: true, get: function () { return api_types_1.isApiErrorResponse; } });
Object.defineProperty(exports, "isApiSuccessResponse", { enumerable: true, get: function () { return api_types_1.isApiSuccessResponse; } });
Object.defineProperty(exports, "isPaginatedResponse", { enumerable: true, get: function () { return api_types_1.isPaginatedResponse; } });
Object.defineProperty(exports, "apiClientInfoSchema", { enumerable: true, get: function () { return api_types_1.clientInfoSchema; } });
// Import booking types with renamed schema
var booking_types_1 = require("./booking.types");
Object.defineProperty(exports, "BookingStepId", { enumerable: true, get: function () { return 
    // Enums (these should be regular exports)
    booking_types_1.BookingStepId; } });
Object.defineProperty(exports, "BookingActionType", { enumerable: true, get: function () { return booking_types_1.BookingActionType; } });
Object.defineProperty(exports, "serviceSelectionSchema", { enumerable: true, get: function () { return 
    // Value exports
    booking_types_1.serviceSelectionSchema; } });
Object.defineProperty(exports, "dateSelectionSchema", { enumerable: true, get: function () { return booking_types_1.dateSelectionSchema; } });
Object.defineProperty(exports, "confirmationSchema", { enumerable: true, get: function () { return booking_types_1.confirmationSchema; } });
Object.defineProperty(exports, "bookingClientInfoSchema", { enumerable: true, get: function () { return booking_types_1.clientInfoSchema; } });
Object.defineProperty(exports, "isStepComplete", { enumerable: true, get: function () { return booking_types_1.isStepComplete; } });
Object.defineProperty(exports, "canProceedToNextStep", { enumerable: true, get: function () { return booking_types_1.canProceedToNextStep; } });
// Additional type exports will be added as they are implemented
// export * from './booking.types'; 
