/**
 * Booking Service
 * 
 * Provides API calls and utilities for the booking system.
 * Implements sacred geometry principles for timing and data structures.
 */

import { 
  CreateBookingRequest, 
  BookingResponse,
  ServiceType,
  BookingStatus,
  ApiResponse,
  ApiError,
  ApiErrorCode,
  HttpStatusCode,
  TimeSlot,
  isApiErrorResponse,
  AvailableSlotsRequest,
  createBookingRequestSchema,
  availableSlotsRequestSchema
} from '../types/api.types';

import { PHI, FIBONACCI, SACRED_TIMING } from '../constants/sacred-geometry';
import { api, getWithRetry } from './api';
import { retryWithFibonacci, categorizeError } from '../utils/apiUtils';

// API Endpoints
const ENDPOINTS = {
  AVAILABLE_DATES: '/booking/available-dates',
  AVAILABLE_SLOTS: '/booking/available-slots',
  AVAILABLE_SERVICES: '/booking/services',
  CREATE_BOOKING: '/booking/create',
  GET_BOOKING: (id: string) => `/booking/${id}`,
  CANCEL_BOOKING: (id: string) => `/booking/${id}/cancel`,
  RESCHEDULE_BOOKING: (id: string) => `/booking/${id}/reschedule`,
  UPDATE_BOOKING: (id: string) => `/booking/${id}`,
};

// Service details interface
export interface ServiceDetails {
  type: ServiceType;
  name: string;
  description: string;
  duration: number;
  price: number;
  availableForNewClients: boolean;
}

/**
 * Booking Service API
 * Contains all methods for interacting with the booking API
 */
export const bookingService = {
  /**
   * Get available dates for booking within a specified range
   * @param startDate Start date of the range (YYYY-MM-DD)
   * @param endDate End date of the range (YYYY-MM-DD)
   * @param serviceType Optional service type to filter availability
   * @returns Array of available dates with availability count
   */
  getAvailableDates: async (
    startDate: string,
    endDate: string,
    serviceType?: ServiceType
  ): Promise<Array<{ date: string; availableSlots: number }>> => {
    return retryWithFibonacci(async () => {
      try {
        const response = await api.get<ApiResponse<Array<{ date: string; availableSlots: number }>>>(
          ENDPOINTS.AVAILABLE_DATES,
          {
            params: {
              startDate,
              endDate,
              serviceType
            }
          }
        );
        
        return response.data.data;
      } catch (error) {
        throw categorizeError(error);
      }
    }, 'Get available dates');
  },

  /**
   * Get available time slots for a specific date
   * @param request Request object with date, service type, and optional duration
   * @returns Array of time slots with availability status
   */
  getAvailableSlots: async (
    request: AvailableSlotsRequest
  ): Promise<TimeSlot[]> => {
    // Validate request with Zod schema
    try {
      availableSlotsRequestSchema.parse(request);
    } catch (error) {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid request format for available slots',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.get<ApiResponse<TimeSlot[]>>(
          ENDPOINTS.AVAILABLE_SLOTS,
          {
            params: request
          }
        );
        
        return response.data.data;
      } catch (error) {
        throw categorizeError(error);
      }
    }, 'Get available time slots');
  },

  /**
   * Get list of available services with details
   * @returns Array of available services with details
   */
  getAvailableServices: async (): Promise<ServiceDetails[]> => {
    return retryWithFibonacci(async () => {
      try {
        const response = await api.get<ApiResponse<ServiceDetails[]>>(
          ENDPOINTS.AVAILABLE_SERVICES
        );
        
        return response.data.data;
      } catch (error) {
        throw categorizeError(error);
      }
    }, 'Get available services');
  },

  /**
   * Create a new booking
   * @param bookingData Booking request data
   * @returns Created booking response with confirmation details
   */
  createBooking: async (
    bookingData: CreateBookingRequest
  ): Promise<BookingResponse> => {
    // Validate with Zod schema
    try {
      createBookingRequestSchema.parse(bookingData);
    } catch (error) {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid booking request data',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.post<ApiResponse<BookingResponse>>(
          ENDPOINTS.CREATE_BOOKING,
          bookingData
        );
        
        return response.data.data;
      } catch (error) {
        const apiError = categorizeError(error);
        
        // Special handling for validation errors
        if (apiError.code === ApiErrorCode.VALIDATION_ERROR) {
          throw new ApiError(
            ApiErrorCode.VALIDATION_ERROR,
            'Please check your booking information and try again',
            HttpStatusCode.UNPROCESSABLE_ENTITY,
            apiError.details
          );
        }
        
        // Special handling for booking conflicts
        if (apiError.code === ApiErrorCode.BOOKING_CONFLICT) {
          throw new ApiError(
            ApiErrorCode.BOOKING_CONFLICT,
            'This time slot is no longer available. Please select another time.',
            HttpStatusCode.CONFLICT
          );
        }
        
        throw apiError;
      }
    }, 'Create booking');
  },

  /**
   * Get booking details by ID
   * @param bookingId The booking ID to retrieve
   * @returns The booking details
   */
  getBookingById: async (
    bookingId: string
  ): Promise<BookingResponse> => {
    if (!bookingId || typeof bookingId !== 'string') {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid booking ID',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.get<ApiResponse<BookingResponse>>(
          ENDPOINTS.GET_BOOKING(bookingId)
        );
        
        return response.data.data;
      } catch (error) {
        const apiError = categorizeError(error);
        
        // Special handling for booking not found
        if (apiError.code === ApiErrorCode.RESOURCE_NOT_FOUND) {
          throw new ApiError(
            ApiErrorCode.RESOURCE_NOT_FOUND,
            'Booking not found',
            HttpStatusCode.NOT_FOUND
          );
        }
        
        throw apiError;
      }
    }, 'Get booking by ID');
  },

  /**
   * Cancel an existing booking
   * @param bookingId The booking ID to cancel
   * @param reason Optional reason for cancellation
   * @returns Updated booking with cancelled status
   */
  cancelBooking: async (
    bookingId: string,
    reason?: string
  ): Promise<BookingResponse> => {
    if (!bookingId || typeof bookingId !== 'string') {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid booking ID',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.post<ApiResponse<BookingResponse>>(
          ENDPOINTS.CANCEL_BOOKING(bookingId),
          { reason }
        );
        
        return response.data.data;
      } catch (error) {
        throw categorizeError(error);
      }
    }, 'Cancel booking');
  },

  /**
   * Reschedule an existing booking
   * @param bookingId The booking ID to reschedule
   * @param newStartTime New start time for the booking (ISO datetime)
   * @param newEndTime New end time for the booking (ISO datetime)
   * @returns Updated booking with new schedule
   */
  rescheduleBooking: async (
    bookingId: string,
    newStartTime: string,
    newEndTime: string
  ): Promise<BookingResponse> => {
    // Validate input parameters
    if (!bookingId || typeof bookingId !== 'string') {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid booking ID',
        HttpStatusCode.BAD_REQUEST
      );
    }

    if (!newStartTime || !newEndTime || typeof newStartTime !== 'string' || typeof newEndTime !== 'string') {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid start or end time',
        HttpStatusCode.BAD_REQUEST
      );
    }

    // Validate that start time is before end time
    if (new Date(newStartTime) >= new Date(newEndTime)) {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Start time must be before end time',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.post<ApiResponse<BookingResponse>>(
          ENDPOINTS.RESCHEDULE_BOOKING(bookingId),
          { 
            startTime: newStartTime,
            endTime: newEndTime
          }
        );
        
        return response.data.data;
      } catch (error) {
        const apiError = categorizeError(error);
        
        // Handle booking conflicts for reschedule
        if (apiError.code === ApiErrorCode.BOOKING_CONFLICT) {
          throw new ApiError(
            ApiErrorCode.BOOKING_CONFLICT,
            'The requested time slot is not available for rescheduling',
            HttpStatusCode.CONFLICT
          );
        }
        
        throw apiError;
      }
    }, 'Reschedule booking');
  },

  /**
   * Update booking information
   * @param bookingId The booking ID to update
   * @param data Partial booking data to update
   * @returns Updated booking with new information
   */
  updateBooking: async (
    bookingId: string, 
    data: Partial<CreateBookingRequest>
  ): Promise<BookingResponse> => {
    if (!bookingId || typeof bookingId !== 'string') {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Invalid booking ID',
        HttpStatusCode.BAD_REQUEST
      );
    }

    return retryWithFibonacci(async () => {
      try {
        const response = await api.patch<ApiResponse<BookingResponse>>(
          ENDPOINTS.UPDATE_BOOKING(bookingId),
          data
        );
        
        return response.data.data;
      } catch (error) {
        const apiError = categorizeError(error);
        
        // Handle validation errors
        if (apiError.code === ApiErrorCode.VALIDATION_ERROR) {
          throw new ApiError(
            ApiErrorCode.VALIDATION_ERROR,
            'Please check your booking information and try again',
            HttpStatusCode.UNPROCESSABLE_ENTITY,
            apiError.details
          );
        }
        
        throw apiError;
      }
    }, 'Update booking');
  }
};

/**
 * Calculate optimal session duration based on sacred geometry principles
 * @param requestedMinutes Requested session duration in minutes
 * @returns Optimized session duration following Fibonacci sequence
 */
export function calculateOptimalSessionDuration(requestedMinutes: number): number {
  // Convert requested duration to the nearest Fibonacci number
  const fibValues = Object.values(FIBONACCI);
  
  // Find the closest Fibonacci value (minimum 30 minutes, maximum 120 minutes)
  const validFibValues = fibValues.filter(v => v >= 30 && v <= 120);
  
  const closestFib = validFibValues.reduce((prev, curr) => 
    Math.abs(curr - requestedMinutes) < Math.abs(prev - requestedMinutes) ? curr : prev
  );
  
  return closestFib;
}

/**
 * Calculate price based on duration following golden ratio principles
 * @param durationMinutes Session duration in minutes
 * @param basePrice Base price for the standard session
 * @returns Calculated price
 */
export function calculatePriceFromDuration(durationMinutes: number, basePrice: number = 75): number {
  // Standard session is 50 minutes at base price
  const standardDuration = 50;
  
  // Apply golden ratio to calculate the price proportionally
  const priceRatio = (durationMinutes / standardDuration) * PHI;
  
  // Round to nearest whole dollar
  return Math.round(basePrice * priceRatio);
}

/**
 * Recommend optimal booking times based on sacred geometry principles
 * @param availableSlots Array of available time slots
 * @param count Number of recommendations to return
 * @returns Array of recommended time slots
 */
export function recommendOptimalBookingTimes(availableSlots: TimeSlot[], count: number = 3): TimeSlot[] {
  // Filter to only available slots
  const availableOnly = availableSlots.filter(slot => slot.isAvailable);
  
  if (availableOnly.length <= count) {
    return availableOnly;
  }
  
  // Get slots at golden ratio positions through the day
  const totalSlots = availableOnly.length;
  const recommendations: TimeSlot[] = [];
  
  // Get slots at golden ratio intervals
  for (let i = 0; i < count; i++) {
    // Calculate position using golden ratio to spread throughout the day
    const position = Math.floor((i * PHI) % 1 * totalSlots);
    if (position >= 0 && position < availableOnly.length) {
      recommendations.push(availableOnly[position]);
    }
  }
  
  return recommendations;
} 






