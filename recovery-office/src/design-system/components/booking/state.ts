/**
 * Booking State Management
 * 
 * This module provides state management for the booking process using React Context.
 * It includes the BookingState interface, actions, reducer, and context.
 */

import { createContext } from 'react';

/**
 * Booking state interface
 */
export interface BookingState {
  /** Currently selected service */
  selectedService: string | null;
  
  /** Selected appointment date */
  selectedDate: Date | null;
  
  /** Selected time slot */
  timeSlot: string | null;
  
  /** Available time slots for selected date */
  availableTimeSlots: string[];
  
  /** Client's name */
  clientName: string;
  
  /** Client's email */
  clientEmail: string;
  
  /** Client's phone number */
  clientPhone: string;
  
  /** Client's message or notes */
  clientMessage: string;
  
  /** Whether the client has agreed to terms */
  agreedToTerms: boolean;
  
  /** Current step index */
  currentStep: number;
  
  /** Whether the form is currently submitting */
  isSubmitting: boolean;
  
  /** Whether the form has been successfully submitted */
  isSubmitted: boolean;
  
  /** Error message if submission fails */
  error: string | null;
}

/**
 * Initial booking state
 */
export const initialBookingState: BookingState = {
  selectedService: null,
  selectedDate: null,
  timeSlot: null,
  availableTimeSlots: [],
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  clientMessage: '',
  agreedToTerms: false,
  currentStep: 0,
  isSubmitting: false,
  isSubmitted: false,
  error: null
};

/**
 * Booking action types
 */
export type BookingAction =
  | { type: 'SET_SERVICE'; payload: string }
  | { type: 'SET_DATE'; payload: Date }
  | { type: 'SET_AVAILABLE_TIME_SLOTS'; payload: string[] }
  | { type: 'SET_TIME_SLOT'; payload: string }
  | { type: 'SET_CLIENT_NAME'; payload: string }
  | { type: 'SET_CLIENT_EMAIL'; payload: string }
  | { type: 'SET_CLIENT_PHONE'; payload: string }
  | { type: 'SET_CLIENT_MESSAGE'; payload: string }
  | { type: 'SET_AGREED_TO_TERMS'; payload: boolean }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'SET_SUBMITTING'; payload: boolean }
  | { type: 'SET_SUBMITTED'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_FORM' };

/**
 * Booking state reducer
 */
export const bookingReducer = (
  state: BookingState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case 'SET_SERVICE':
      return { ...state, selectedService: action.payload };
    
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload };
    
    case 'SET_AVAILABLE_TIME_SLOTS':
      return { ...state, availableTimeSlots: action.payload };
    
    case 'SET_TIME_SLOT':
      return { ...state, timeSlot: action.payload };
    
    case 'SET_CLIENT_NAME':
      return { ...state, clientName: action.payload };
    
    case 'SET_CLIENT_EMAIL':
      return { ...state, clientEmail: action.payload };
    
    case 'SET_CLIENT_PHONE':
      return { ...state, clientPhone: action.payload };
    
    case 'SET_CLIENT_MESSAGE':
      return { ...state, clientMessage: action.payload };
    
    case 'SET_AGREED_TO_TERMS':
      return { ...state, agreedToTerms: action.payload };
    
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.payload };
    
    case 'SET_SUBMITTED':
      return { ...state, isSubmitted: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'RESET_FORM':
      return initialBookingState;
    
    default:
      return state;
  }
};

/**
 * Booking context interface
 */
interface BookingContextType {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}

/**
 * Booking context with default values
 */
export const BookingContext = createContext<BookingContextType>({
  state: initialBookingState,
  dispatch: () => null
});

/**
 * Custom hook for accessing the booking context
 */
export const useBookingContext = () => {
  return createContext(BookingContext);
};

/**
 * Returns mock time slots for a given date based on sacred geometry principles
 */
export const getMockTimeSlots = (date: Date): string[] => {
  if (!date) return [];
  
  // Use the day of month to seed the time slot generation
  // This creates a consistent but varying pattern for different days
  const day = date.getDate();
  
  // Base time slots from 9am to 5pm
  const baseSlots = [
    '9:00 AM', '9:30 AM', 
    '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];
  
  // Generate "available" slots in a pattern based on day number
  // This uses a pseudo-random but consistent pattern
  return baseSlots.filter((_, index) => {
    // Use a formula based on the golden ratio to determine availability
    const isAvailable = (index * 1.618 + day) % 3 < 2;
    return isAvailable;
  });
}; 





