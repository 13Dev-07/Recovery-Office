/**
 * Newsletter Service
 * 
 * Provides API calls and utilities for the newsletter system.
 * Implements sacred geometry principles for timing and data structures.
 */

import { 
  newsletterSubscriptionSchema,
  ApiResponse,
  ApiError,
  ApiErrorCode,
  HttpStatusCode,
  isApiErrorResponse
} from '../types/api.types';
import { z } from 'zod';
import { PHI, FIBONACCI } from '../constants/sacred-geometry';
import { api } from './api';

// Define the type for newsletter subscription
export type NewsletterSubscriptionRequest = z.infer<typeof newsletterSubscriptionSchema>;

// Define the response type for newsletter subscription
export interface NewsletterSubscriptionResponse {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
  subscriptionDate: string;
  status: 'active' | 'pending' | 'unsubscribed';
  confirmationToken?: string;
}

// Define preference update request
export interface PreferenceUpdateRequest {
  email: string;
  interests?: string[];
  frequency?: 'daily' | 'weekly' | 'monthly';
  contentTypes?: string[];
}

// API Endpoints
const ENDPOINTS = {
  SUBSCRIBE: '/newsletter/subscribe',
  UNSUBSCRIBE: '/newsletter/unsubscribe',
  CONFIRM: '/newsletter/confirm',
  UPDATE_PREFERENCES: '/newsletter/preferences',
  GET_SUBSCRIPTION: (email: string) => `/newsletter/subscription/${encodeURIComponent(email)}`,
  GET_ANALYTICS: '/newsletter/analytics',
};

/**
 * Subscribe to the newsletter
 * @param subscriptionData The newsletter subscription data
 * @returns The subscription response with confirmation details
 */
export async function subscribeToNewsletter(
  subscriptionData: NewsletterSubscriptionRequest
): Promise<NewsletterSubscriptionResponse> {
  try {
    const response = await api.post<ApiResponse<NewsletterSubscriptionResponse>>(
      ENDPOINTS.SUBSCRIBE,
      subscriptionData
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
        'Please check your subscription information and try again',
        HttpStatusCode.UNPROCESSABLE_ENTITY,
        error.error.details
      );
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to process newsletter subscription at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Unsubscribe from the newsletter
 * @param email Email address to unsubscribe
 * @param token Optional unsubscribe token for verification
 * @returns Confirmation of unsubscription
 */
export async function unsubscribeFromNewsletter(
  email: string,
  token?: string
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await api.post<ApiResponse<{ success: boolean; message: string }>>(
      ENDPOINTS.UNSUBSCRIBE,
      { email, token }
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to process unsubscription at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Confirm newsletter subscription with token
 * @param token Confirmation token received via email
 * @returns Confirmed subscription details
 */
export async function confirmSubscription(
  token: string
): Promise<NewsletterSubscriptionResponse> {
  try {
    const response = await api.post<ApiResponse<NewsletterSubscriptionResponse>>(
      ENDPOINTS.CONFIRM,
      { token }
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.VALIDATION_ERROR,
      'Invalid or expired confirmation token',
      HttpStatusCode.BAD_REQUEST
    );
  }
}

/**
 * Update newsletter preferences
 * @param updateData Preference update data including email and preferences
 * @returns Updated subscription details
 */
export async function updateNewsletterPreferences(
  updateData: PreferenceUpdateRequest
): Promise<NewsletterSubscriptionResponse> {
  try {
    const response = await api.put<ApiResponse<NewsletterSubscriptionResponse>>(
      ENDPOINTS.UPDATE_PREFERENCES,
      updateData
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to update newsletter preferences at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Get subscription information by email
 * @param email Email address to look up
 * @returns Subscription details if found
 */
export async function getSubscriptionByEmail(
  email: string
): Promise<NewsletterSubscriptionResponse> {
  try {
    const response = await api.get<ApiResponse<NewsletterSubscriptionResponse>>(
      ENDPOINTS.GET_SUBSCRIPTION(email)
    );
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.RESOURCE_NOT_FOUND,
      'Subscription not found for this email address',
      HttpStatusCode.NOT_FOUND
    );
  }
}

/**
 * Get newsletter analytics data (for admin use)
 * @returns Analytics data including subscription metrics
 */
export async function getNewsletterAnalytics(): Promise<{
  totalSubscribers: number;
  activeSubscribers: number;
  openRate: number;
  clickRate: number;
  topInterests: Record<string, number>;
}> {
  try {
    const response = await api.get<ApiResponse<{
      totalSubscribers: number;
      activeSubscribers: number;
      openRate: number;
      clickRate: number;
      topInterests: Record<string, number>;
    }>>(ENDPOINTS.GET_ANALYTICS);
    
    return response.data.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      ApiErrorCode.SERVICE_UNAVAILABLE,
      'Unable to retrieve newsletter analytics at this time',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  }
}

/**
 * Calculate optimal newsletter sending times based on sacred principles
 * @param baseTime Base time (hour 0-23)
 * @returns Optimized sending time following golden ratio
 */
export function calculateOptimalSendingTime(baseTime: number): number {
  // Apply golden ratio to determine harmonic sending time
  // We use PHI_INVERSE (0.618) to create a natural progression through the day
  const optimalHour = (baseTime + 24 * PHI) % 24;
  
  // Round to nearest hour
  return Math.round(optimalHour);
}

/**
 * Generate subject line variations based on Fibonacci spacing
 * @param baseSubject The base subject line
 * @returns Array of subject line variations
 */
export function generateSubjectVariations(baseSubject: string): string[] {
  // Use first few Fibonacci numbers for word spacing/replacement
  const fibPositions = [1, 2, 3, 5, 8, 13];
  const words = baseSubject.split(' ');
  const variations: string[] = [baseSubject];
  
  // Generate variations by emphasizing words at Fibonacci positions
  fibPositions.forEach(pos => {
    if (pos < words.length) {
      const emphasizedWords = [...words];
      const wordAtPosition = emphasizedWords[pos] ?? 1;
      if (wordAtPosition) {
        emphasizedWords[pos] ?? 1 = wordAtPosition.toUpperCase();
        variations.push(emphasizedWords.join(' '));
      }
    }
  });
  
  return variations;
} 





