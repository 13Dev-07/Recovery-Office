import * as React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { ToastProvider } from '../../../context/ToastContext';
import { BookingService } from '../../../services/booking.service';
import { ApiError } from '../../../types/api.types';

// Mock the booking service
jest.mock('../../../services/booking.service', () => ({
  BookingService: {
    getAvailableServices: jest.fn(),
    getAvailableDates: jest.fn(),
    getAvailableTimeSlots: jest.fn(),
    submitBooking: jest.fn(),
    createPaymentIntent: jest.fn(),
    cancelBooking: jest.fn(),
    rescheduleBooking: jest.fn(),
  },
}));

describe('Booking Flow Error Handling Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    
    // Default success responses
    (BookingService.getAvailableServices as jest.Mock).mockResolvedValue([
      { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
      { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
    ]);
    
    (BookingService.getAvailableDates as jest.Mock).mockResolvedValue([
      '2023-08-15', '2023-08-16', '2023-08-17'
    ]);
    
    (BookingService.getAvailableTimeSlots as jest.Mock).mockResolvedValue([
      { time: '10:00', available: true },
      { time: '11:00', available: true },
      { time: '12:00', available: true },
    ]);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const renderBookingFlow = () => {
    return render(
      <ThemeProvider>
        <ToastProvider>
          <BookingProvider>
            <BookingFlow />
          </BookingProvider>
        </ToastProvider>
      </ThemeProvider>
    );
  };

  describe('Network Error Handling', () => {
    it('should display error toast when services fetch fails', async () => {
      // Mock network error
      const networkError = new Error('Network Error');
      (BookingService.getAvailableServices as jest.Mock).mockRejectedValueOnce(networkError);
      
      renderBookingFlow();
      
      // Wait for error to be displayed
      await waitFor(() => {
        expect(screen.getByText(/failed to load services/i)).toBeInTheDocument();
      });
      
      // Error message should include retry option
      expect(screen.getByText(/please try again/i)).toBeInTheDocument();
      
      // Should have retry button
      const retryButton = screen.getByRole('button', { name: /retry/i });
      expect(retryButton).toBeInTheDocument();
      
      // Reset mock to success for retry
      (BookingService.getAvailableServices as jest.Mock).mockResolvedValueOnce([
        { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
      ]);
      
      // Click retry
      userEvent.click(retryButton);
      
      // Should load successfully now
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Error message should be gone
      expect(screen.queryByText(/failed to load services/i)).not.toBeInTheDocument();
    });

    it('should handle API errors with error codes', async () => {
      // Mock API error with error code
      const apiError = new ApiError(
        'Service unavailable',
        503,
        'SERVICE_UNAVAILABLE'
      );
      
      (BookingService.getAvailableServices as jest.Mock).mockRejectedValueOnce(apiError);
      
      renderBookingFlow();
      
      // Wait for error to be displayed with specific error code message
      await waitFor(() => {
        expect(screen.getByText(/service unavailable/i)).toBeInTheDocument();
      });
      
      expect(screen.getByText(/503/i)).toBeInTheDocument();
    });

    it('should display error when date selection fails', async () => {
      renderBookingFlow();
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Select a service
      userEvent.click(screen.getByText(/massage therapy/i));
      
      // Navigate to date selection
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Mock date fetch error
      const dateError = new Error('Failed to fetch available dates');
      (BookingService.getAvailableDates as jest.Mock).mockRejectedValueOnce(dateError);
      
      // Wait for error to be displayed
      await waitFor(() => {
        expect(screen.getByText(/failed to fetch available dates/i)).toBeInTheDocument();
      });
      
      // Error should be dismissable
      const dismissButton = screen.getByRole('button', { name: /close/i });
      userEvent.click(dismissButton);
      
      // Error should be gone after dismissing
      await waitFor(() => {
        expect(screen.queryByText(/failed to fetch available dates/i)).not.toBeInTheDocument();
      });
    });
  });

  describe('Validation Error Handling', () => {
    it('should display field validation errors in client info step', async () => {
      // Navigate to client info step
      renderBookingFlow();
      
      // Wait for services to load and select one
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Select date
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      // Select time slot
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Now on client info step, attempt to proceed without filling form
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Try to move to next step without filling required fields
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Should display validation errors
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
        expect(screen.getByText(/you must accept the terms/i)).toBeInTheDocument();
      });
      
      // Fill out form partially with invalid email
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
      
      // Try to proceed again
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Should display email format error
      await waitFor(() => {
        expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
      });
      
      // Name error should be gone
      expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
      
      // Fix the email and complete the form
      userEvent.clear(screen.getByLabelText(/email/i));
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      
      // Try to proceed
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Should proceed to confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // No validation errors should remain
      expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
    });
    
    it('should validate payment information in confirmation step', async () => {
      // Helper to navigate to confirmation step
      const navigateToConfirmationStep = async () => {
        renderBookingFlow();
        
        // Select service
        await waitFor(() => {
          expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
        });
        userEvent.click(screen.getByText(/massage therapy/i));
        userEvent.click(screen.getByRole('button', { name: /next/i }));
        
        // Select date
        await waitFor(() => {
          expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
        });
        userEvent.click(screen.getByText(/august 15/i));
        
        // Select time
        await waitFor(() => {
          expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
        });
        userEvent.click(screen.getByText(/10:00/i));
        userEvent.click(screen.getByRole('button', { name: /next/i }));
        
        // Fill client info
        await waitFor(() => {
          expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
        });
        userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
        userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
        userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
        userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
        
        userEvent.click(screen.getByRole('button', { name: /next/i }));
        
        await waitFor(() => {
          expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
        });
      };
      
      await navigateToConfirmationStep();
      
      // Attempt to confirm without selecting payment method or accepting cancellation policy
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should display validation errors
      await waitFor(() => {
        expect(screen.getByText(/payment method is required/i)).toBeInTheDocument();
        expect(screen.getByText(/you must accept the cancellation policy/i)).toBeInTheDocument();
      });
      
      // Select payment method but still don't accept policy
      userEvent.click(screen.getByLabelText(/credit card/i));
      
      // Try to confirm again
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Only policy error should remain
      await waitFor(() => {
        expect(screen.queryByText(/payment method is required/i)).not.toBeInTheDocument();
        expect(screen.getByText(/you must accept the cancellation policy/i)).toBeInTheDocument();
      });
      
      // Accept policy
      userEvent.click(screen.getByRole('checkbox', { name: /cancellation policy/i }));
      
      // Mock successful payment intent creation
      (BookingService.createPaymentIntent as jest.Mock).mockResolvedValueOnce({
        clientSecret: 'test_client_secret',
        paymentIntentId: 'pi_test123'
      });
      
      // Mock successful booking
      (BookingService.submitBooking as jest.Mock).mockResolvedValueOnce({
        bookingId: 'booking123',
        confirmation: 'CONF-123456'
      });
      
      // Try to confirm again
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should proceed to success screen
      await waitFor(() => {
        expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
      });
    });
  });

  describe('Payment Error Handling', () => {
    // Helper to navigate to confirmation step with payment method selected
    const setupForPayment = async () => {
      renderBookingFlow();
      
      // Navigate through steps
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Select credit card payment
      userEvent.click(screen.getByLabelText(/credit card/i));
      
      // Accept cancellation policy
      userEvent.click(screen.getByRole('checkbox', { name: /cancellation policy/i }));
    };
    
    it('should handle payment intent creation failure', async () => {
      await setupForPayment();
      
      // Mock payment intent creation failure
      const paymentError = new Error('Failed to create payment intent');
      (BookingService.createPaymentIntent as jest.Mock).mockRejectedValueOnce(paymentError);
      
      // Attempt to confirm booking
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should show payment error
      await waitFor(() => {
        expect(screen.getByText(/failed to create payment intent/i)).toBeInTheDocument();
      });
      
      // Loading indicator should be gone
      expect(screen.queryByText(/processing payment/i)).not.toBeInTheDocument();
      
      // Button should be enabled again for retry
      expect(screen.getByRole('button', { name: /confirm booking/i })).toBeEnabled();
    });
    
    it('should handle booking submission failure', async () => {
      await setupForPayment();
      
      // Mock successful payment intent creation
      (BookingService.createPaymentIntent as jest.Mock).mockResolvedValueOnce({
        clientSecret: 'test_client_secret',
        paymentIntentId: 'pi_test123'
      });
      
      // But mock booking submission failure
      const bookingError = new Error('Failed to create booking');
      (BookingService.submitBooking as jest.Mock).mockRejectedValueOnce(bookingError);
      
      // Attempt to confirm booking
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should show booking error
      await waitFor(() => {
        expect(screen.getByText(/failed to create booking/i)).toBeInTheDocument();
      });
    });
    
    it('should handle specific payment processor errors', async () => {
      await setupForPayment();
      
      // Mock payment processor error with specific code
      const paymentProcessorError = new ApiError(
        'Your card was declined',
        400,
        'PAYMENT_DECLINED',
        { code: 'card_declined', decline_code: 'insufficient_funds' }
      );
      
      (BookingService.createPaymentIntent as jest.Mock).mockRejectedValueOnce(paymentProcessorError);
      
      // Attempt to confirm booking
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should show specific payment error message
      await waitFor(() => {
        expect(screen.getByText(/your card was declined/i)).toBeInTheDocument();
        expect(screen.getByText(/insufficient funds/i)).toBeInTheDocument();
      });
      
      // Should suggest trying another payment method
      expect(screen.getByText(/try another payment method/i)).toBeInTheDocument();
    });
  });

  describe('Booking Cancellation Error Handling', () => {
    it('should handle cancellation errors', async () => {
      // Mock successful booking first
      (BookingService.submitBooking as jest.Mock).mockResolvedValueOnce({
        bookingId: 'booking123',
        confirmation: 'CONF-123456'
      });
      
      // Navigate through entire booking flow
      renderBookingFlow();
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Select pay later and accept policy
      userEvent.click(screen.getByLabelText(/pay later/i));
      userEvent.click(screen.getByRole('checkbox', { name: /cancellation policy/i }));
      
      // Confirm booking
      userEvent.click(screen.getByRole('button', { name: /confirm booking/i }));
      
      // Should reach success screen
      await waitFor(() => {
        expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
      });
      
      // Now try to cancel but mock error
      const cancelError = new ApiError(
        'Cannot cancel booking',
        400,
        'CANCELLATION_WINDOW_EXPIRED'
      );
      
      (BookingService.cancelBooking as jest.Mock).mockRejectedValueOnce(cancelError);
      
      // Find and click cancel button
      const cancelButton = screen.getByRole('button', { name: /cancel booking/i });
      userEvent.click(cancelButton);
      
      // Should show cancellation error
      await waitFor(() => {
        expect(screen.getByText(/cannot cancel booking/i)).toBeInTheDocument();
        expect(screen.getByText(/cancellation window expired/i)).toBeInTheDocument();
      });
      
      // Error message should explain the issue
      expect(screen.getByText(/cancellation is no longer available/i)).toBeInTheDocument();
    });
  });

  describe('Timeout Error Handling', () => {
    it('should handle request timeouts gracefully', async () => {
      // Mock a timeout error
      const timeoutError = new Error('Request timed out');
      timeoutError.name = 'TimeoutError';
      
      (BookingService.getAvailableServices as jest.Mock).mockRejectedValueOnce(timeoutError);
      
      renderBookingFlow();
      
      // Should show specific timeout message
      await waitFor(() => {
        expect(screen.getByText(/request timed out/i)).toBeInTheDocument();
      });
      
      // Should suggest checking connection
      expect(screen.getByText(/check your internet connection/i)).toBeInTheDocument();
      
      // Mock success response for retry
      (BookingService.getAvailableServices as jest.Mock).mockResolvedValueOnce([
        { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
      ]);
      
      // Click retry button
      userEvent.click(screen.getByRole('button', { name: /retry/i }));
      
      // Should load successfully now
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
    });
    
    it('should handle slow responses with loading indicators', async () => {
      // Create a delayed promise that resolves after some time
      let resolveServices: (value: any) => void;
      const servicesPromise = new Promise((resolve) => {
        resolveServices = resolve;
      });
      
      (BookingService.getAvailableServices as jest.Mock).mockReturnValueOnce(servicesPromise);
      
      renderBookingFlow();
      
      // Should show loading indicator
      expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
      expect(screen.getByText(/loading services/i)).toBeInTheDocument();
      
      // After 5 seconds, should show "taking longer than usual" message
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      
      expect(screen.getByText(/taking longer than usual/i)).toBeInTheDocument();
      
      // Now resolve the promise
      act(() => {
        resolveServices([
          { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
        ]);
      });
      
      // Loading indicator should disappear and content should show
      await waitFor(() => {
        expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
    });
  });

  describe('Error Recovery', () => {
    it('should recover and resume booking flow after errors', async () => {
      renderBookingFlow();
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Select service and proceed
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Mock date fetch error
      const dateError = new Error('Failed to fetch available dates');
      (BookingService.getAvailableDates as jest.Mock).mockRejectedValueOnce(dateError);
      
      // Wait for error to be displayed
      await waitFor(() => {
        expect(screen.getByText(/failed to fetch available dates/i)).toBeInTheDocument();
      });
      
      // Now mock success for retry
      (BookingService.getAvailableDates as jest.Mock).mockResolvedValueOnce([
        '2023-08-15', '2023-08-16', '2023-08-17'
      ]);
      
      // Click retry
      userEvent.click(screen.getByRole('button', { name: /retry/i }));
      
      // Should load dates successfully
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      // Continue with flow
      userEvent.click(screen.getByText(/august 15/i));
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      
      // Flow should continue normally
      expect(screen.getByText(/10:00/i)).toBeInTheDocument();
    });
    
    it('should maintain form data after validation errors', async () => {
      renderBookingFlow();
      
      // Navigate to client info step
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Fill out form partially
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
      
      // Try to proceed
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Should display validation errors
      await waitFor(() => {
        expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
      });
      
      // Form data should be preserved
      expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe');
      expect(screen.getByLabelText(/email/i)).toHaveValue('invalid-email');
      
      // Fix the email
      userEvent.clear(screen.getByLabelText(/email/i));
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      
      // Complete the form
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      
      // Try to proceed again
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Should proceed to confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Going back should preserve the form data
      userEvent.click(screen.getByRole('button', { name: /back/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Data should still be there
      expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe');
      expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
      expect(screen.getByLabelText(/phone/i)).toHaveValue('555-123-4567');
      expect(screen.getByRole('checkbox', { name: /terms/i })).toBeChecked();
    });
  });
}); 











