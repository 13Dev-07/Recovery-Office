// TODO: This file contains direct window access without SSR checks
/**
 * API Service
 * 
 * Provides base HTTP functionality and configuration for API calls.
 * Handles authentication, error transformation, and request/response interceptors.
 */

import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { 
  ApiResponse, 
  ApiError, 
  ApiErrorResponse, 
  HttpStatusCode,
  ApiErrorCode,
  isApiErrorResponse
} from '../types/api.types';
import { ANIMATION_TIMING } from '../constants/sacred-geometry';

// API configuration
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.recoveryoffice.com/v1',
  TIMEOUT: ANIMATION_TIMING.slow * 1000, // Convert seconds to milliseconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: ANIMATION_TIMING.standard * 1000, // Convert seconds to milliseconds
};

/**
 * Create and configure the Axios instance
 */
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  // Request interceptor
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Get auth token from storage if available
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: unknown) => Promise.reject(error)
  );

  // Response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: unknown) => {
      const axiosError = error as AxiosError;
      const originalRequest = axiosError.config as AxiosRequestConfig & { _retry?: boolean };
      
      // Handle token expiration
      if (
        axiosError.response?.status === HttpStatusCode.UNAUTHORIZED &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        
        try {
          // Refresh token logic would go here
          const refreshToken = localStorage.getItem('refresh_token');
          if (refreshToken) {
            // For now, just handle token refresh failure
            // In a real implementation, would call refresh token endpoint
            localStorage.removeItem('auth_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login'; // Redirect to login
          }
        } catch (refreshError) {
          // Clear tokens and redirect to login
          localStorage.removeItem('auth_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }

      // Transform error to standardized API error
      return Promise.reject(handleApiError(axiosError));
    }
  );

  return client;
};

/**
 * Transform Axios error to standardized API error
 */
const handleApiError = (error: AxiosError): ApiError => {
  // If the error is from the API and follows the expected structure
  if (error.response && error.response.data) {
    const errorData = error.response.data as ApiErrorResponse;
    
    if (isApiErrorResponse(errorData)) {
      return new ApiError(
        errorData.error.code as ApiErrorCode,
        errorData.error.message,
        error.response.status as HttpStatusCode,
        errorData.error.details
      );
    }
  }

  // Default error handling for unexpected errors
  if (error.response) {
    // The request was made and the server responded with a status code
    // outside the 2xx range
    return new ApiError(
      ApiErrorCode.SERVER_ERROR,
      error.message || 'An unexpected error occurred',
      error.response.status as HttpStatusCode
    );
  } else if (error.request) {
    // The request was made but no response was received
    return new ApiError(
      ApiErrorCode.NETWORK_ERROR,
      'Network error. Please check your connection.',
      HttpStatusCode.SERVICE_UNAVAILABLE
    );
  } else {
    // Something happened in setting up the request that triggered an Error
    return new ApiError(
      ApiErrorCode.CLIENT_ERROR,
      'An error occurred while processing your request.',
      HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};

/**
 * API client instance
 */
export const api = createApiClient();

/**
 * Make a GET request with retries
 */
export async function getWithRetry<T>(
  url: string, 
  config?: AxiosRequestConfig,
  maxRetries = API_CONFIG.RETRY_ATTEMPTS
): Promise<AxiosResponse<T>> {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      return await api.get<T>(url, config);
    } catch (error) {
      const apiError = error as ApiError;
      
      if (
        apiError instanceof ApiError && 
        [
          HttpStatusCode.SERVICE_UNAVAILABLE,
          HttpStatusCode.TOO_MANY_REQUESTS,
          HttpStatusCode.GATEWAY_TIMEOUT
        ].includes(apiError.statusCode) &&
        retries < maxRetries - 1
      ) {
        // Exponential backoff with jitter based on sacred timing
        const delay = API_CONFIG.RETRY_DELAY * Math.pow(2, retries) + 
          Math.floor(Math.random() * 100);
        
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
        continue;
      }
      
      throw error;
    }
  }
  
  throw new ApiError(
    ApiErrorCode.NETWORK_ERROR,
    'Maximum retry attempts reached',
    HttpStatusCode.SERVICE_UNAVAILABLE
  );
} 





