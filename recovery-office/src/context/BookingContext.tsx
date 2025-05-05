/**
 * Booking Context
 * 
 * Provides booking state management for the entire application.
 * Implements sacred geometry principles for timing and animations.
 */

import * as React from 'react';
import { 
  createContext, 
  useContext, 
  useReducer, 
  ReactNode, 
  useMemo, 
  useCallback, 
  useState, 
  useEffect 
} from 'react';
import { 
  BookingFormState, 
  BookingAction, 
  BookingActionType,
  BookingStepId,
  ServiceOption,
  BookingTimeSlot,
  ClientInformation,
  BookingDate,
  CompleteBookingData,
  canProceedToNextStep,
  isStepComplete,
  ExtendedBookingAction,
  Service
} from '../types/booking.types';

import { bookingService, ServiceDetails } from '../services/booking';
import { ApiError, ApiErrorCode, TimeSlot, ServiceType } from '../types/api.types';
import { formatErrorMessage, categorizeError } from '../utils/apiUtils';
import { useToast } from '../hooks/useToast';
import { debounce } from '../utils/functionUtils';
import { BookingService } from '../services/booking.service';
import { ClientInformationData } from '../components/booking/validation/clientInformation.schema';
import { ServiceSelectionData } from '../components/booking/validation/serviceSelection.schema';
import { ConfirmationStepData } from '../components/booking/validation/confirmationStep.schema';

// More specific loading state tracking
interface LoadingState {
  services: boolean;
  dates: boolean;
  timeSlots: boolean;
  booking: boolean;
  cancellation: boolean;
  rescheduling: boolean;
  paymentIntent: boolean;
}

// Extended state to track API errors
interface ApiErrorState {
  code?: string;
  message?: string;
  details?: Record<string, any>;
  resource?: string;
}

// Extended action types for more specific API state management
enum ExtendedBookingActionType {
  SET_AVAILABLE_SERVICES = 'SET_AVAILABLE_SERVICES',
  SET_AVAILABLE_TIME_SLOTS = 'SET_AVAILABLE_TIME_SLOTS',
  SET_API_ERROR = 'SET_API_ERROR',
  CLEAR_API_ERROR = 'CLEAR_API_ERROR',
  SET_LOADING_RESOURCE = 'SET_LOADING_RESOURCE',
}

// Extended action type that includes API-specific actions
type ContextBookingAction = BookingAction | {
  type: ExtendedBookingActionType.SET_AVAILABLE_SERVICES;
  payload: ServiceOption[];
} | {
  type: ExtendedBookingActionType.SET_AVAILABLE_TIME_SLOTS;
  payload: TimeSlot[];
} | {
  type: ExtendedBookingActionType.SET_API_ERROR;
  payload: ApiErrorState;
} | {
  type: ExtendedBookingActionType.CLEAR_API_ERROR;
} | {
  type: ExtendedBookingActionType.SET_LOADING_RESOURCE;
  payload: {
    resource: keyof LoadingState;
    isLoading: boolean;
  };
};

// Extended form state with API-specific states
interface ExtendedBookingFormState extends BookingFormState {
  availableServices: ServiceOption[];
  availableTimeSlots: TimeSlot[];
  loadingState: LoadingState;
  apiError: ApiErrorState | null;
  bookingComplete: boolean;
  bookingReference?: string;
  selectedService?: ServiceOption;
  selectedDate?: string;
  selectedTime?: string;
  customerInfo?: ClientInformation;
}

// Initial state for the booking context
const initialBookingState: ExtendedBookingFormState = {
  currentStep: BookingStepId.SERVICE_SELECTION,
  loading: false,
  availableDates: [],
  availableServices: [],
  availableTimeSlots: [],
  completedSteps: new Set(),
  loadingState: {
    services: false,
    dates: false,
    timeSlots: false,
    booking: false,
    cancellation: false,
    rescheduling: false,
    paymentIntent: false,
  },
  apiError: null,
  bookingComplete: false,
};

// Context type with state and actions
interface BookingContextType {
  state: ExtendedBookingFormState;
  // Navigation actions
  goToStep: (stepId: BookingStepId) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  // Data actions
  selectService: (service: ServiceOption) => void;
  selectDate: (date: string) => void;
  selectTimeSlot: (timeSlot: BookingTimeSlot) => void;
  setClientInfo: (clientInfo: ClientInformation) => void;
  // State management
  setAvailableDates: (dates: BookingDate[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  clearError: () => void;
  completeStep: (stepId: BookingStepId) => void;
  setBookingReference: (reference: string) => void;
  resetForm: () => void;
  // API actions
  fetchAvailableServices: (forceRefresh?: boolean) => Promise<void>;
  fetchAvailableDates: (startDate: string, endDate: string, serviceType?: string, forceRefresh?: boolean) => Promise<void>;
  fetchAvailableTimeSlots: (date: string, serviceType: string, forceRefresh?: boolean) => Promise<void>;
  submitBooking: (
    serviceData: ServiceSelectionData,
    clientData: ClientInformationData,
    confirmationData: ConfirmationStepData
  ) => Promise<string>;
  cancelBooking: (bookingId: string, reason?: string) => Promise<void>;
  rescheduleBooking: (bookingId: string, newDate: string, newTimeSlot: string) => Promise<void>;
  createPaymentIntent: (serviceType: ServiceType, duration: number) => Promise<{ clientSecret: string, paymentIntentId: string }>;
  // Helper methods
  canProceedToStep: (stepId: BookingStepId) => boolean;
  getCompleteBookingData: () => CompleteBookingData | null;
  isResourceLoading: (resource: keyof LoadingState) => boolean;
  hasApiError: () => boolean;
  getApiErrorForResource: (resource: string) => string | null;
  // Backward compatibility properties for components that use old pattern
  currentStep: BookingStepId;
  nextStep: () => void;
  previousStep: () => void;
  selectedServices: ServiceOption[];
  selectedService: ServiceOption | undefined;
  setSelectedService: (service: ServiceOption) => void;
  selectedDate: string | undefined;
  setSelectedDate: (date: string) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string) => void;
  setCurrentStep: (step: BookingStepId) => void;
  customerInfo: ClientInformation | undefined;
  setCustomerInfo: (info: ClientInformation) => void;
  completeBooking: () => Promise<void>;
  bookingComplete: boolean;
  bookingReference: string | undefined;
  updateFormData: (data: unknown) => void;
}

// Create the context with undefined initial value
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Enhanced reducer for booking state
function bookingReducer(state: ExtendedBookingFormState, action: ContextBookingAction): ExtendedBookingFormState {
  switch (action.type) {
    case BookingActionType.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    
    case BookingActionType.SELECT_SERVICE:
      return {
        ...state,
        selectedService: action.payload,
        completedSteps: new Set(Array.from(state.completedSteps).concat([BookingStepId.SERVICE_SELECTION])),
      };
    
    case BookingActionType.SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        // Don't mark as complete until time slot is also selected
      };
    
    case BookingActionType.SELECT_TIME_SLOT:
      return {
        ...state,
        selectedTimeSlot: action.payload,
        selectedTime: action.payload.startTime, // Add for backward compatibility
        completedSteps: new Set(Array.from(state.completedSteps).concat([BookingStepId.DATE_SELECTION])),
      };
    
    case BookingActionType.SET_CLIENT_INFO:
      return {
        ...state,
        clientInfo: action.payload,
        customerInfo: action.payload, // Add for backward compatibility
        completedSteps: new Set(Array.from(state.completedSteps).concat([BookingStepId.CLIENT_INFORMATION])),
      };
    
    case BookingActionType.SET_AVAILABLE_DATES:
      return {
        ...state,
        availableDates: action.payload,
      };
    
    case BookingActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    
    case BookingActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    
    case BookingActionType.CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      };
    
    case BookingActionType.COMPLETE_STEP:
      return {
        ...state,
        completedSteps: new Set(Array.from(state.completedSteps).concat([action.payload])),
      };

    case BookingActionType.SET_BOOKING_REFERENCE:
      return {
        ...state,
        bookingReference: action.payload,
        bookingComplete: true,
      };
    
    case BookingActionType.RESET_FORM:
      return {
        ...initialBookingState,
      };
    
    case ExtendedBookingActionType.SET_AVAILABLE_SERVICES:
      return {
        ...state,
        availableServices: action.payload,
      };
    
    case ExtendedBookingActionType.SET_AVAILABLE_TIME_SLOTS:
      return {
        ...state,
        availableTimeSlots: action.payload,
      };
    
    case ExtendedBookingActionType.SET_API_ERROR:
      return {
        ...state,
        apiError: action.payload,
      };
    
    case ExtendedBookingActionType.CLEAR_API_ERROR:
      return {
        ...state,
        apiError: null,
      };
    
    case ExtendedBookingActionType.SET_LOADING_RESOURCE:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.payload.resource]: action.payload.isLoading,
        },
      };
    
    default:
      return state;
  }
}

interface BookingProviderProps {
  children: ReactNode;
}

// Provider component for the booking context
export const BookingProvider: React.FC<BookingProviderProps> = ({ 
  children 
}) => {
  const { showToast, errorToast, successToast } = useToast();
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  
  // Step navigation methods
  const goToStep = useCallback((stepId: BookingStepId) => {
    dispatch({ type: BookingActionType.SET_STEP, payload: stepId });
  }, []);
  
  const goToNextStep = useCallback(() => {
    const { currentStep } = state;
    const nextStepId = currentStep + 1;
    
    // Validate that next step is valid
    if (nextStepId <= BookingStepId.SUCCESS) {
      goToStep(nextStepId as BookingStepId);
    }
  }, [state, goToStep]);
  
  const goToPreviousStep = useCallback(() => {
    const { currentStep } = state;
    const prevStepId = currentStep - 1;
    
    // Validate that previous step is valid
    if (prevStepId >= BookingStepId.SERVICE_SELECTION) {
      goToStep(prevStepId as BookingStepId);
    }
  }, [state, goToStep]);
  
  // Data action methods
  const selectService = useCallback((service: ServiceOption) => {
    dispatch({ type: BookingActionType.SELECT_SERVICE, payload: service });
  }, []);
  
  const selectDate = useCallback((date: string) => {
    dispatch({ type: BookingActionType.SELECT_DATE, payload: date });
  }, []);
  
  const selectTimeSlot = useCallback((timeSlot: BookingTimeSlot) => {
    dispatch({ type: BookingActionType.SELECT_TIME_SLOT, payload: timeSlot });
  }, []);
  
  const setClientInfo = useCallback((clientInfo: ClientInformation) => {
    dispatch({ type: BookingActionType.SET_CLIENT_INFO, payload: clientInfo });
  }, []);

  // State management methods
  const setAvailableDates = useCallback((dates: BookingDate[]) => {
    dispatch({ type: BookingActionType.SET_AVAILABLE_DATES, payload: dates });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: BookingActionType.SET_LOADING, payload: loading });
  }, []);

  const setError = useCallback((error: string) => {
    dispatch({ type: BookingActionType.SET_ERROR, payload: error });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: BookingActionType.CLEAR_ERROR });
  }, []);

  const completeStep = useCallback((stepId: BookingStepId) => {
    dispatch({ type: BookingActionType.COMPLETE_STEP, payload: stepId });
  }, []);

  const setBookingReference = useCallback((reference: string) => {
    dispatch({ type: BookingActionType.SET_BOOKING_REFERENCE, payload: reference });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({ type: BookingActionType.RESET_FORM });
  }, []);

  // API-related actions
  const setAvailableTimeSlots = useCallback((slots: TimeSlot[]) => {
    dispatch({ type: ExtendedBookingActionType.SET_AVAILABLE_TIME_SLOTS, payload: slots });
  }, []);

  const setAvailableServices = useCallback((services: ServiceOption[]) => {
    dispatch({ type: ExtendedBookingActionType.SET_AVAILABLE_SERVICES, payload: services });
  }, []);

  const setApiError = useCallback((error: ApiErrorState) => {
    dispatch({ type: ExtendedBookingActionType.SET_API_ERROR, payload: error });
    
    if (error.message) {
      errorToast(error.message);
    }
  }, [errorToast]);

  const clearApiError = useCallback(() => {
    dispatch({ type: ExtendedBookingActionType.CLEAR_API_ERROR });
  }, []);

  const setResourceLoading = useCallback((resource: keyof LoadingState, isLoading: boolean) => {
    dispatch({
      type: ExtendedBookingActionType.SET_LOADING_RESOURCE,
      payload: { resource, isLoading }
    });
  }, []);

  // Helper methods
  const canProceedToStep = useCallback((stepId: BookingStepId): boolean => {
    return canProceedToNextStep(state, stepId);
  }, [state]);

  const getCompleteBookingData = useCallback((): CompleteBookingData | null => {
    const { selectedService, selectedDate, selectedTimeSlot, clientInfo } = state;
    
    // Check if all required data is present
    if (!selectedService || !selectedDate || !selectedTimeSlot || !clientInfo) {
      return null;
    }
    
    return {
      service: selectedService,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      clientInfo: clientInfo,
    };
  }, [state]);
  
  const isResourceLoading = useCallback((resource: keyof LoadingState): boolean => {
    return state.loadingState[resource] ?? 1;
  }, [state.loadingState]);
  
  const hasApiError = useCallback((): boolean => {
    return state.apiError !== null;
  }, [state.apiError]);
  
  const getApiErrorForResource = useCallback((resource: string): string | null => {
    if (state.apiError && state.apiError.resource === resource) {
      return state.apiError.message || null;
    }
    return null;
  }, [state.apiError]);

  // Backward compatibility methods
  const nextStep = useCallback(() => {
    goToNextStep();
  }, [goToNextStep]);

  const previousStep = useCallback(() => {
    goToPreviousStep();
  }, [goToPreviousStep]);

  const setSelectedService = useCallback((service: ServiceOption) => {
    selectService(service);
  }, [selectService]);

  const setSelectedDate = useCallback((date: string) => {
    selectDate(date);
  }, [selectDate]);

  const setSelectedTime = useCallback((time: string) => {
    // Create a minimal time slot object for compatibility
    const timeSlot: BookingTimeSlot = {
      id: time,
      startTime: time,
      endTime: '',
      duration: 0,
      available: true
    };
    selectTimeSlot(timeSlot);
  }, [selectTimeSlot]);

  const setCurrentStep = useCallback((step: BookingStepId) => {
    goToStep(step);
  }, [goToStep]);

  const setCustomerInfo = useCallback((info: ClientInformation) => {
    setClientInfo(info);
  }, [setClientInfo]);

  // For backward compatibility with older components
  const completeBooking = useCallback(async () => {
    // Implementation would depend on the complete booking process
    // This is a placeholder for backward compatibility
    return Promise.resolve();
  }, []);
  
  const updateFormData = useCallback((data: unknown) => {
    // Implementation would depend on what data needs to be updated
    // This is a placeholder for backward compatibility
    if (data.serviceId && state.availableServices.length > 0) {
      const service = state.availableServices.find(s => s.id === data.serviceId);
      if (service) {
        selectService(service);
      }
    }
    
    if (data.date) {
      selectDate(data.date);
    }
    
    if (data.timeSlot) {
      setSelectedTime(data.timeSlot);
    }
    
    if (data.firstName || data.lastName || data.email || data.phone) {
      const clientInfo: ClientInformation = {
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || '',
        phone: data.phone || '',
        preferredContactMethod: data.preferredContactMethod || 'email',
        isNewClient: data.isNewClient || false
      };
      setClientInfo(clientInfo);
    }
  }, [state.availableServices, selectService, selectDate, setSelectedTime, setClientInfo]);

  // API action implementations
  const fetchAvailableServices = useCallback(async (forceRefresh = false) => {
    try {
      setResourceLoading('services', true);
      clearApiError();
      
      // Call the BookingService to get available services
      const response = await BookingService.getInstance().getServices(forceRefresh);
      setAvailableServices(response.data);
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'services'
      });
    } finally {
      setResourceLoading('services', false);
    }
  }, [setResourceLoading, clearApiError, setAvailableServices, setApiError]);

  const fetchAvailableDates = useCallback(async (
    startDate: string,
    endDate: string,
    serviceType?: string,
    forceRefresh = false
  ) => {
    if (!serviceType && !state.selectedService) {
      setApiError({
        code: 'VALIDATION_ERROR',
        message: 'Service type is required to fetch available dates',
        resource: 'dates'
      });
      return;
    }
    
    try {
      setResourceLoading('dates', true);
      clearApiError();
      
      const serviceId = serviceType || (state.selectedService ? state.selectedService.id : '');
      
      // Call the BookingService to get available dates
      const response = await BookingService.getInstance().getAvailableDates(serviceId, undefined, forceRefresh);
      
      // Transform API response to our expected format
      const bookingDates: BookingDate[] = response.data.dates.map(d => ({
        date: d.date,
        dayOfWeek: new Date(d.date).getDay(),
        available: d.hasAvailability,
        slots: []
      }));
      
      setAvailableDates(bookingDates);
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'dates'
      });
    } finally {
      setResourceLoading('dates', false);
    }
  }, [
    state.selectedService,
    setResourceLoading,
    clearApiError,
    setAvailableDates,
    setApiError
  ]);

  const fetchAvailableTimeSlots = useCallback(async (
    date: string,
    serviceType: string,
    forceRefresh = false
  ) => {
    try {
      setResourceLoading('timeSlots', true);
      clearApiError();
      
      // Call the BookingService to get available time slots
      const response = await BookingService.getInstance().getAvailableTimeSlots(
        serviceType,
        date,
        undefined,
        forceRefresh
      );
      
      setAvailableTimeSlots(response.data);
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'timeSlots'
      });
    } finally {
      setResourceLoading('timeSlots', false);
    }
  }, [setResourceLoading, clearApiError, setAvailableTimeSlots, setApiError]);

  const submitBooking = useCallback(async (
    serviceData: ServiceSelectionData,
    clientData: ClientInformationData,
    confirmationData: ConfirmationStepData
  ): Promise<string> => {
    try {
      setResourceLoading('booking', true);
      clearApiError();
      
      // Call the BookingService to submit the booking
      const response = await BookingService.createBooking(
        serviceData,
        clientData,
        confirmationData
      );
      
      // Store the booking reference
      const bookingReference = response.data.confirmationCode;
      setBookingReference(bookingReference);
      
      // Show success toast
      successToast("Booking Confirmed", `Your booking has been confirmed. Reference: ${bookingReference}`, ANIMATION_TIMING.standard);
      
      return bookingReference;
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'booking'
      });
      throw apiError;
    } finally {
      setResourceLoading('booking', false);
    }
  }, [setResourceLoading, clearApiError, setBookingReference, successToast, setApiError]);

  const cancelBooking = useCallback(async (
    bookingId: string,
    reason?: string
  ): Promise<void> => {
    try {
      setResourceLoading('cancellation', true);
      clearApiError();
      
      // Call the BookingService to cancel the booking
      await BookingService.cancelBooking(bookingId, reason);
      
      // Show success toast
      successToast("Booking Cancelled", "Your booking has been cancelled successfully.", ANIMATION_TIMING.standard);
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'cancellation'
      });
      throw apiError;
    } finally {
      setResourceLoading('cancellation', false);
    }
  }, [setResourceLoading, clearApiError, successToast, setApiError]);

  const rescheduleBooking = useCallback(async (
    bookingId: string,
    newDate: string,
    newTimeSlot: string
  ): Promise<void> => {
    try {
      setResourceLoading('rescheduling', true);
      clearApiError();
      
      // Call the BookingService to reschedule the booking
      await BookingService.rescheduleBooking(bookingId, newDate, newTimeSlot);
      
      // Show success toast
      successToast("Booking Rescheduled", "Your booking has been rescheduled successfully.", ANIMATION_TIMING.standard);
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'rescheduling'
      });
      throw apiError;
    } finally {
      setResourceLoading('rescheduling', false);
    }
  }, [setResourceLoading, clearApiError, successToast, setApiError]);

  const createPaymentIntent = useCallback(async (
    serviceType: ServiceType,
    duration: number
  ): Promise<{ clientSecret: string, paymentIntentId: string }> => {
    try {
      setResourceLoading('paymentIntent', true);
      clearApiError();
      
      // Calculate amount based on service type and duration
      const amount = duration * 100; // Simple calculation for example purposes
      
      // Call the BookingService to create a payment intent
      const response = await BookingService.createPaymentIntent(amount);
      
      return {
        clientSecret: response.data.clientSecret,
        paymentIntentId: response.data.paymentIntentId
      };
    } catch (error) {
      const apiError = categorizeError(error);
      setApiError({
        code: apiError.code,
        message: apiError.message,
        details: apiError.details,
        resource: 'paymentIntent'
      });
      throw apiError;
    } finally {
      setResourceLoading('paymentIntent', false);
    }
  }, [setResourceLoading, clearApiError, setApiError]);

  // Load available services when the context is first initialized
  useEffect(() => {
    fetchAvailableServices();
  }, [fetchAvailableServices]);

  // Context value
  const contextValue = useMemo<BookingContextType>(() => ({
    state,
    // Navigation actions
    goToStep,
    goToNextStep,
    goToPreviousStep,
    // Data actions
    selectService,
    selectDate,
    selectTimeSlot,
    setClientInfo,
    // State management
    setAvailableDates,
    setLoading,
    setError,
    clearError,
    completeStep,
    setBookingReference,
    resetForm,
    // API actions
    fetchAvailableServices,
    fetchAvailableDates,
    fetchAvailableTimeSlots,
    submitBooking,
    cancelBooking,
    rescheduleBooking,
    createPaymentIntent,
    // Helper methods
    canProceedToStep,
    getCompleteBookingData,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource,
    // Backward compatibility properties
    currentStep: state.currentStep,
    nextStep,
    previousStep,
    selectedServices: state.availableServices,
    selectedService: state.selectedService,
    setSelectedService,
    selectedDate: state.selectedDate,
    setSelectedDate,
    selectedTime: state.selectedTime,
    setSelectedTime,
    setCurrentStep,
    customerInfo: state.customerInfo,
    setCustomerInfo,
    completeBooking,
    bookingComplete: state.bookingComplete,
    bookingReference: state.bookingReference,
    updateFormData
  }), [
    state,
    goToStep,
    goToNextStep,
    goToPreviousStep,
    selectService,
    selectDate,
    selectTimeSlot,
    setClientInfo,
    setAvailableDates,
    setLoading,
    setError,
    clearError,
    completeStep,
    setBookingReference,
    resetForm,
    fetchAvailableServices,
    fetchAvailableDates,
    fetchAvailableTimeSlots,
    submitBooking,
    cancelBooking,
    rescheduleBooking,
    createPaymentIntent,
    canProceedToStep,
    getCompleteBookingData,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource,
    nextStep,
    previousStep,
    setSelectedService,
    setSelectedDate,
    setSelectedTime,
    setCurrentStep,
    setCustomerInfo,
    completeBooking,
    updateFormData
  ]);

  return React.createElement(
    BookingContext.Provider,
    { value: contextValue },
    children
  );
};

/**
 * Custom hook to use the booking context
 * @returns The booking context
 * @throws Error if used outside a BookingProvider
 */
export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  
  return context;
};

export default BookingContext; 







