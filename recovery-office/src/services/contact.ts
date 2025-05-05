/**
 * Contact Service
 * 
 * Provides API calls and utilities for the contact form system.
 * Implements sacred geometry principles for timing and data structures.
 */

import { 
  ContactFormRequest, 
  ContactFormResponse,
  ApiResponse,
  ApiError,
  ApiErrorCode,
  HttpStatusCode,
  isApiErrorResponse
} from '../types/api.types';

import { PHI, FIBONACCI } from '../constants/sacred-geometry';
import { getFibonacciByIndex } from '../utils/getFibonacciByIndex';
import { api, getWithRetry } from './api';

// API Endpoints
const ENDPOINTS = {
  SUBMIT_CONTACT: '/contact/submit',
  GET_SUBMISSION: (id: string) => `/contact/submission/${id}`,
  GET_SUBMISSIONS: '/contact/submissions',
  FEEDBACK: '/contact/feedback',
};

/**
 * Submit a contact form
 * @param contactData The contact form data
 * @returns The contact form response with confirmation
 */
export async function submitContactForm(
  contactData: ContactFormRequest
): Promise<ContactFormResponse> {
  try {
    const response = await api.post<ApiResponse<ContactFormResponse>>(
      ENDPOINTS.SUBMIT_CONTACT,
      contactData
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Handle validation errors
    if (isApiErrorResponse(error) && error.error.code === ApiErrorCode.VALIDATION_ERROR) {
      throw new ApiError(
        ApiErrorCode.VALIDATION_ERROR,
        'Please check your contact information and try again',
        HttpStatusCode.UNPROCESSABLE_ENTITY,
        error.error.details
      );
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to submit contact form at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Get a contact submission by ID
 * @param submissionId The submission ID to retrieve
 * @returns The contact submission details
 */
export async function getContactSubmission(
  submissionId: string
): Promise<ContactFormResponse> {
  try {
    const response = await getWithRetry<ApiResponse<ContactFormResponse>>(
      ENDPOINTS.GET_SUBMISSION(submissionId)
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.RESOURCE_NOT_FOUND,
      'Contact submission not found',
      HttpStatusCode.NOT_FOUND
    );
  }
}

/**
 * Get all contact submissions for the authenticated user
 * @param page Page number for pagination
 * @param limit Number of items per page, follows Fibonacci sequence
 * @returns List of contact form submissions
 */
export async function getContactSubmissions(
  page: number = 1,
  limit: number = getFibonacciByIndex(8) // 21 items per page
): Promise<ContactFormResponse[]> {
  try {
    const response = await api.get<ApiResponse<ContactFormResponse[]>>(
      ENDPOINTS.GET_SUBMISSIONS,
      {
        params: {
          page,
          limit
        }
      }
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to retrieve contact submissions',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Submit feedback for a contact submission
 * @param submissionId The ID of the contact submission
 * @param feedback Feedback text
 * @param rating Optional rating (1-5)
 * @returns Updated contact submission with feedback
 */
export async function submitFeedback(
  submissionId: string,
  feedback: string,
  rating?: number
): Promise<ContactFormResponse> {
  try {
    const response = await api.post<ApiResponse<ContactFormResponse>>(
      ENDPOINTS.FEEDBACK,
      {
        submissionId,
        feedback,
        rating
      }
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to submit feedback at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Calculate estimated response time based on Golden Ratio
 * @param baseHours Base hours for standard response time
 * @returns Optimized response time following sacred geometry
 */
export function calculateEstimatedResponseTime(baseHours: number): number {
  // Find the closest Fibonacci number
  const fibValues = Object.values(FIBONACCI);
  
  // Find the closest Fibonacci value
  const closestFib = fibValues.reduce((prev, curr) => 
    Math.abs(curr - baseHours) < Math.abs(prev - baseHours) ? curr : prev
  );
  
  // Apply PHI for a natural, harmonious response time
  return Math.round(closestFib * PHI);
}

/**
 * Determine priority level based on subject and content
 * @param subject Email subject
 * @param message Email content
 * @returns Priority level (1-5)
 */
export function determinePriority(subject: string, message: string): number {
  // Start with base priority
  let basePriority = 3;
  
  // Priority keywords that might indicate urgency
  const highPriorityKeywords = ['urgent', 'emergency', 'immediate', 'critical'];
  const mediumPriorityKeywords = ['important', 'help', 'issue', 'problem'];
  
  // Check subject and message for priority keywords
  const combinedText = `${subject.toLowerCase()} ${message.toLowerCase()}`;
  
  if (highPriorityKeywords.some(keyword => combinedText.includes(keyword))) {
    basePriority = 5;
  } else if (mediumPriorityKeywords.some(keyword => combinedText.includes(keyword))) {
    basePriority = 4;
  }
  
  return basePriority;
} 





