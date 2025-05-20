import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiError, ApiErrorCode, ApiResponse, ApiErrorResponse, HttpStatusCode } from '../types/api.types';

// Environment-specific API configuration
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 15000, // 15 seconds default timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

/**
 * Creates and configures an Axios instance for API requests
 * Includes request/response interceptors for consistent handling
 * @returns Configured Axios instance
 */
const createApiClient = (): AxiosInstance => {
  const instance = axios.create(API_CONFIG);
  
  // Add a request interceptor
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Add authentication token if available
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Transform successful responses to our ApiResponse format
      const apiResponse: ApiResponse<unknown> = {
        success: true,
        data: response.data,
        timestamp: new Date().toISOString()
      };
      
      // Return the modified response
      response.data = apiResponse;
      return response;
    },
    (error) => {
      // Handle errors
      let errorCode: ApiErrorCode = ApiErrorCode.UNEXPECTED_ERROR;
      let message = 'An unexpected error occurred';
      let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
      let details: Record<string, unknown> | undefined = undefined;
      
      if (error.response) {
        // Server returned an error response
        statusCode = error.response.status;
        message = error.response.data?.message || `HTTP Error: ${statusCode}`;
        errorCode = error.response.data?.code || mapStatusCodeToErrorCode(statusCode);
        details = error.response.data?.details;
      } else if (error.request) {
        // Request was made but no response was received
        errorCode = ApiErrorCode.NETWORK_ERROR;
        message = 'No response received from server';
        statusCode = HttpStatusCode.SERVICE_UNAVAILABLE; // Use SERVICE_UNAVAILABLE instead of 0
      }
      
      // Create ApiError instance
      const apiError = new ApiError(errorCode, message, statusCode, details);
      
      return Promise.reject(apiError);
    }
  );
  
  return instance;
};

/**
 * Maps HTTP status codes to ApiErrorCode values
 * @param statusCode HTTP status code
 * @returns Appropriate ApiErrorCode
 */
const mapStatusCodeToErrorCode = (statusCode: number): ApiErrorCode => {
  switch (statusCode) {
    case HttpStatusCode.BAD_REQUEST:
      return ApiErrorCode.VALIDATION_ERROR;
    case HttpStatusCode.UNAUTHORIZED:
      return ApiErrorCode.AUTH_INVALID_CREDENTIALS;
    case HttpStatusCode.FORBIDDEN:
      return ApiErrorCode.AUTH_TOKEN_INVALID;
    case HttpStatusCode.NOT_FOUND:
      return ApiErrorCode.RESOURCE_NOT_FOUND;
    case HttpStatusCode.CONFLICT:
      return ApiErrorCode.RESOURCE_CONFLICT;
    case HttpStatusCode.UNPROCESSABLE_ENTITY:
      return ApiErrorCode.VALIDATION_ERROR;
    case HttpStatusCode.TOO_MANY_REQUESTS:
      return ApiErrorCode.TOO_MANY_REQUESTS;
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      return ApiErrorCode.SERVER_ERROR;
    case HttpStatusCode.SERVICE_UNAVAILABLE:
      return ApiErrorCode.SERVICE_UNAVAILABLE;
    default:
      return ApiErrorCode.UNEXPECTED_ERROR;
  }
};

// Create and export the configured API client
export const apiClient = createApiClient();

/**
 * Makes an API request with automatic retries for specified error codes
 * @param method The HTTP method to use
 * @param url The URL to request
 * @param data Optional data payload
 * @param retryConfig Optional retry configuration
 * @returns Promise with API response
 */
export const requestWithRetry = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: unknown,
  retryConfig?: {
    maxRetries?: number;
    retryDelay?: number;
    retryStatusCodes?: number[];
  }
): Promise<ApiResponse<T>> => {
  const { 
    maxRetries = 3, 
    retryDelay = 1000, 
    retryStatusCodes = [408, 429, 500, 502, 503, 504] 
  } = retryConfig || {};
  
  let retries = 0;
  
  while (true) {
    try {
      let response: AxiosResponse<ApiResponse<T>>;
      
      switch (method) {
        case 'get':
          response = await apiClient.get<ApiResponse<T>>(url);
          break;
        case 'post':
          response = await apiClient.post<ApiResponse<T>>(url, data);
          break;
        case 'put':
          response = await apiClient.put<ApiResponse<T>>(url, data);
          break;
        case 'delete':
          response = await apiClient.delete<ApiResponse<T>>(url);
          break;
      }
      
      return response.data;
    } catch (error) {
      if (
        error instanceof ApiError && 
        retryStatusCodes.includes(error.statusCode) && 
        retries < maxRetries
      ) {
        retries++;
        await new Promise(resolve => setTimeout(resolve, retryDelay * retries));
        continue;
      }
      
      throw error;
    }
  }
};

// Convenience methods for common API operations
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) => apiClient.get<ApiResponse<T>>(url, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => apiClient.post<ApiResponse<T>>(url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => apiClient.put<ApiResponse<T>>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig) => apiClient.delete<ApiResponse<T>>(url, config),
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => apiClient.patch<ApiResponse<T>>(url, data, config)
}; 





