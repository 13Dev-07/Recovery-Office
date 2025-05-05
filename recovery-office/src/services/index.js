"use strict";
/**
 * Services Index
 *
 * This file exports all service functions for API, booking, contact, and newsletter services.
 * All services implement sacred geometry principles for timing and data structures.
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
exports.generateSubjectVariations = exports.calculateOptimalSendingTime = exports.getNewsletterAnalytics = exports.getSubscriptionByEmail = exports.updateNewsletterPreferences = exports.confirmSubscription = exports.unsubscribeFromNewsletter = exports.subscribeToNewsletter = exports.determinePriority = exports.calculateEstimatedResponseTime = exports.submitFeedback = exports.getContactSubmissions = exports.getContactSubmission = exports.submitContactForm = exports.cancelBooking = exports.getBookingById = exports.createBooking = exports.getAvailableServices = exports.getAvailableSlots = exports.getAvailableDates = exports.bookingService = exports.BookingService = exports.getWithRetry = exports.apiClient = exports.api = void 0;
// Export API service
var api_client_1 = require("./api.client");
Object.defineProperty(exports, "api", { enumerable: true, get: function () { return api_client_1.api; } });
Object.defineProperty(exports, "apiClient", { enumerable: true, get: function () { return api_client_1.apiClient; } });
Object.defineProperty(exports, "getWithRetry", { enumerable: true, get: function () { return api_client_1.requestWithRetry; } });
// Import the BookingService first since we use it below
var booking_service_1 = require("./booking.service");
Object.defineProperty(exports, "BookingService", { enumerable: true, get: function () { return booking_service_1.BookingService; } });
Object.defineProperty(exports, "bookingService", { enumerable: true, get: function () { return booking_service_1.bookingService; } });
// Re-export static methods for backward compatibility
exports.getAvailableDates = booking_service_1.BookingService.getAvailableDates;
exports.getAvailableSlots = booking_service_1.BookingService.getAvailableTimeSlots;
exports.getAvailableServices = booking_service_1.BookingService.getAvailableServices;
exports.createBooking = booking_service_1.BookingService.submitBooking;
exports.getBookingById = booking_service_1.BookingService.prototype.getBooking;
exports.cancelBooking = booking_service_1.BookingService.cancelBooking;
// Export Contact service
var contact_1 = require("./contact");
Object.defineProperty(exports, "submitContactForm", { enumerable: true, get: function () { return contact_1.submitContactForm; } });
Object.defineProperty(exports, "getContactSubmission", { enumerable: true, get: function () { return contact_1.getContactSubmission; } });
Object.defineProperty(exports, "getContactSubmissions", { enumerable: true, get: function () { return contact_1.getContactSubmissions; } });
Object.defineProperty(exports, "submitFeedback", { enumerable: true, get: function () { return contact_1.submitFeedback; } });
Object.defineProperty(exports, "calculateEstimatedResponseTime", { enumerable: true, get: function () { return contact_1.calculateEstimatedResponseTime; } });
Object.defineProperty(exports, "determinePriority", { enumerable: true, get: function () { return contact_1.determinePriority; } });
// Export Newsletter service
var newsletter_1 = require("./newsletter");
Object.defineProperty(exports, "subscribeToNewsletter", { enumerable: true, get: function () { return newsletter_1.subscribeToNewsletter; } });
Object.defineProperty(exports, "unsubscribeFromNewsletter", { enumerable: true, get: function () { return newsletter_1.unsubscribeFromNewsletter; } });
Object.defineProperty(exports, "confirmSubscription", { enumerable: true, get: function () { return newsletter_1.confirmSubscription; } });
Object.defineProperty(exports, "updateNewsletterPreferences", { enumerable: true, get: function () { return newsletter_1.updateNewsletterPreferences; } });
Object.defineProperty(exports, "getSubscriptionByEmail", { enumerable: true, get: function () { return newsletter_1.getSubscriptionByEmail; } });
Object.defineProperty(exports, "getNewsletterAnalytics", { enumerable: true, get: function () { return newsletter_1.getNewsletterAnalytics; } });
Object.defineProperty(exports, "calculateOptimalSendingTime", { enumerable: true, get: function () { return newsletter_1.calculateOptimalSendingTime; } });
Object.defineProperty(exports, "generateSubjectVariations", { enumerable: true, get: function () { return newsletter_1.generateSubjectVariations; } });
// Export re-export all booking service types
__exportStar(require("./booking.service"), exports);
// Additional services will be exported as they are implemented
// export * from './booking';
// export * from './newsletter';
// export * from './contact'; 
