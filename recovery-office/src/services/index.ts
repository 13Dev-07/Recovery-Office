/**
 * Services Index
 * 
 * This file exports all service functions for API, booking, contact, and newsletter services.
 * All services implement sacred geometry principles for timing and data structures.
 */

// Export API service
export { api, apiClient, requestWithRetry as getWithRetry } from './api.client';

// Import the BookingService first since we use it below
import { BookingService, bookingService } from './booking.service';

// Export Booking service
export { BookingService, bookingService };

// Re-export static methods for backward compatibility
export const getAvailableDates = BookingService.getAvailableDates;
export const getAvailableSlots = BookingService.getAvailableTimeSlots;
export const getAvailableServices = BookingService.getAvailableServices;
export const createBooking = BookingService.submitBooking;
export const getBookingById = BookingService.prototype.getBooking;
export const cancelBooking = BookingService.cancelBooking;

// Export Contact service
export {
  submitContactForm,
  getContactSubmission,
  getContactSubmissions,
  submitFeedback,
  calculateEstimatedResponseTime,
  determinePriority
} from './contact';

// Export Newsletter service
export {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  confirmSubscription,
  updateNewsletterPreferences,
  getSubscriptionByEmail,
  getNewsletterAnalytics,
  calculateOptimalSendingTime,
  generateSubjectVariations
} from './newsletter';

// Export types
export type { 
  NewsletterSubscriptionRequest,
  NewsletterSubscriptionResponse,
  PreferenceUpdateRequest
} from './newsletter';

// Export re-export all booking service types
export * from './booking.service';

// Additional services will be exported as they are implemented
// export * from './booking';
// export * from './newsletter';
// export * from './contact'; 





