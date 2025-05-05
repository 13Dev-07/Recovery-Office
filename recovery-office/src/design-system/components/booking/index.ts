/**
 * Booking System Components
 * 
 * This module exports booking components that follow sacred geometry principles.
 * These components create a complete, multi-step booking experience with proper validation.
 */

// Main components
export { default as BookingInterface } from './BookingInterface';
export { default as BookingControls } from './BookingControls';
export { default as ProgressIndicator } from './ProgressIndicator';
export { default as MobileCalendarModal } from './MobileCalendarModal';

// Step components
export { default as ServiceSelection } from './steps/ServiceSelection';
export { default as DateSelection } from './steps/DateSelection';
export { default as CustomerInfo } from './steps/CustomerInfo';
export { default as BookingSummary } from './steps/BookingSummary';
export { default as BookingConfirmation } from './steps/BookingConfirmation';

// State management
export { 
  BookingContext, 
  bookingReducer, 
  initialBookingState,
  getMockTimeSlots,
  useBookingContext
} from './state';

// Validation
export {
  isStepValid,
  getStepErrors,
  validateAllSteps,
  serviceSelectionSchema,
  dateSelectionSchema,
  clientInfoSchema,
  confirmationSchema
} from './validation';

// Type exports
export type { BookingState, BookingAction } from './state';
export type { 
  BookingInterfaceProps
} from './BookingInterface';
export type { 
  BookingControlsProps
} from './BookingControls';
export type { 
  ProgressIndicatorProps
} from './ProgressIndicator';
export type {
  MobileCalendarModalProps
} from './MobileCalendarModal'; 





