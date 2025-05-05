import * as React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { ToastProvider } from '../../../context/ToastContext';
import { BookingService } from '../../../services/booking.service';

// Mock the booking service
jest.mock('../../../services/booking.service', () => ({
  BookingService: {
    getAvailableServices: jest.fn(),
    getAvailableDates: jest.fn(),
    getAvailableTimeSlots: jest.fn(),
    submitBooking: jest.fn(),
    cancelBooking: jest.fn(),
    rescheduleBooking: jest.fn(),
    createPaymentIntent: jest.fn(),
  },
}));

describe('Booking Error Handling Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
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
    
    (BookingService.submitBooking as jest.Mock).mockResolvedValue({
      bookingId: 'booking123',
      status: 'confirmed',
    });
    
    (BookingService.createPaymentIntent as jest.Mock).mockResolvedValue({
      clientSecret: 'pi_secret_123',
      paymentIntentId: 'pi_123',
    });
  });

  describe('Service Loading Errors', () => {
    it('should show an error message when services fail to load', async () => {
      // Setup service loading failure
      (BookingService.getAvailableServices as jest.Mock).mockRejectedValue(
        new Error('Failed to load services')
      );

      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Wait for error state
      await waitFor(() => {
        expect(screen.getByText(/unable to load services/i)).toBeInTheDocument();
      });
      
      // Should show retry button
      const retryButton = screen.getByRole('button', { name: /retry/i });
      expect(retryButton).toBeInTheDocument();
      
      // Clicking retry should call the service again
      (BookingService.getAvailableServices as jest.Mock).mockResolvedValueOnce([
        { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
      ]);
      
      userEvent.click(retryButton);
      
      // Should eventually show services
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Service should have been called twice (initial + retry)
      expect(BookingService.getAvailableServices).toHaveBeenCalledTimes(2);
    });
  });

  describe('Date Loading Errors', () => {
    it('should show an error message when dates fail to load', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Select a service and navigate to date selection
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      // Set up date loading failure before clicking next
      (BookingService.getAvailableDates as jest.Mock).mockRejectedValueOnce(
        new Error('Failed to load dates')
      );
      
      userEvent.click(nextButton);
      
      // Wait for error state
      await waitFor(() => {
        expect(screen.getByText(/unable to load available dates/i)).toBeInTheDocument();
      });
      
      // Should show retry button
      const retryButton = screen.getByRole('button', { name: /retry/i });
      expect(retryButton).toBeInTheDocument();
      
      // Clicking retry should call the service again
      userEvent.click(retryButton);
      
      // Should eventually show dates
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
    });
  });

  describe('Time Slot Loading Errors', () => {
    it('should show an error message when time slots fail to load', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Wait for services to load and navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      // Wait for dates to load
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      // Set up time slot loading failure
      (BookingService.getAvailableTimeSlots as jest.Mock).mockRejectedValueOnce(
        new Error('Failed to load time slots')
      );
      
      // Select a date
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      // Wait for error state
      await waitFor(() => {
        expect(screen.getByText(/unable to load time slots/i)).toBeInTheDocument();
      });
      
      // Should show retry button
      const retryButton = screen.getByRole('button', { name: /retry for this date/i });
      expect(retryButton).toBeInTheDocument();
      
      // Clicking retry should call the service again
      userEvent.click(retryButton);
      
      // Should eventually show time slots
      await waitFor(() => {
        expect(screen.getByText(/10:00/i)).toBeInTheDocument();
      });
    });
  });

  describe('Form Validation Errors', () => {
    it('should display validation errors when submitting empty client info form', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to client info step
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      await waitFor(() => {
        expect(screen.getByText(/10:00/i)).toBeInTheDocument();
      });
      
      const timeSlot = screen.getByText(/10:00/i);
      userEvent.click(timeSlot);
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      // Wait for client info step to load
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Try to submit empty form
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      // Should display validation errors
      await waitFor(() => {
        expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
        expect(screen.getByText(/you must agree to the terms/i)).toBeInTheDocument();
      });
    });

    it('should validate email format in client info form', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to client info step
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      await waitFor(() => {
        expect(screen.getByText(/10:00/i)).toBeInTheDocument();
      });
      
      const timeSlot = screen.getByText(/10:00/i);
      userEvent.click(timeSlot);
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      // Wait for client info step to load
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Fill form with invalid email
      const nameInput = screen.getByLabelText(/full name/i);
      userEvent.type(nameInput, 'John Doe');
      
      const emailInput = screen.getByLabelText(/email/i);
      userEvent.type(emailInput, 'invalid-email');
      
      const phoneInput = screen.getByLabelText(/phone/i);
      userEvent.type(phoneInput, '1234567890');
      
      const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to terms/i });
      userEvent.click(termsCheckbox);
      
      // Try to submit with invalid email
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      // Should display email validation error
      await waitFor(() => {
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      });
      
      // Fix email and try again
      userEvent.clear(emailInput);
      userEvent.type(emailInput, 'john@example.com');
      userEvent.click(nextButton3);
      
      // Should proceed to confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
    });
  });

  describe('Booking Submission Errors', () => {
    it('should handle payment intent creation failures', async () => {
      // Complete booking flow up to confirmation
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate through all steps to confirmation
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      await waitFor(() => {
        expect(screen.getByText(/10:00/i)).toBeInTheDocument();
      });
      
      const timeSlot = screen.getByText(/10:00/i);
      userEvent.click(timeSlot);
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      // Fill client info form
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      const nameInput = screen.getByLabelText(/full name/i);
      userEvent.type(nameInput, 'John Doe');
      
      const emailInput = screen.getByLabelText(/email/i);
      userEvent.type(emailInput, 'john@example.com');
      
      const phoneInput = screen.getByLabelText(/phone/i);
      userEvent.type(phoneInput, '1234567890');
      
      const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to terms/i });
      userEvent.click(termsCheckbox);
      
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      // Wait for confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Set up payment intent failure
      (BookingService.createPaymentIntent as jest.Mock).mockRejectedValue(
        new Error('Payment processing error')
      );
      
      // Select payment method and confirm
      const paymentMethod = screen.getByLabelText(/credit card/i);
      userEvent.click(paymentMethod);
      
      const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
      userEvent.click(confirmButton);
      
      // Should display payment error
      await waitFor(() => {
        expect(screen.getByText(/unable to process payment/i)).toBeInTheDocument();
      });
      
      // Should show retry button
      const retryButton = screen.getByRole('button', { name: /retry payment/i });
      expect(retryButton).toBeInTheDocument();
    });

    it('should handle booking submission failures', async () => {
      // Complete booking flow up to confirmation with successful payment intent
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate through all steps to confirmation
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      });
      
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      await waitFor(() => {
        expect(screen.getByText(/10:00/i)).toBeInTheDocument();
      });
      
      const timeSlot = screen.getByText(/10:00/i);
      userEvent.click(timeSlot);
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      // Fill client info form
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      const nameInput = screen.getByLabelText(/full name/i);
      userEvent.type(nameInput, 'John Doe');
      
      const emailInput = screen.getByLabelText(/email/i);
      userEvent.type(emailInput, 'john@example.com');
      
      const phoneInput = screen.getByLabelText(/phone/i);
      userEvent.type(phoneInput, '1234567890');
      
      const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to terms/i });
      userEvent.click(termsCheckbox);
      
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      // Wait for confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Payment intent succeeds but booking submission fails
      (BookingService.submitBooking as jest.Mock).mockRejectedValue(
        new Error('Booking submission failed')
      );
      
      // Select payment method and confirm
      const paymentMethod = screen.getByLabelText(/credit card/i);
      userEvent.click(paymentMethod);
      
      const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
      userEvent.click(confirmButton);
      
      // Should display booking error
      await waitFor(() => {
        expect(screen.getByText(/unable to complete booking/i)).toBeInTheDocument();
      });
      
      // Should show retry button
      const retryButton = screen.getByRole('button', { name: /retry booking/i });
      expect(retryButton).toBeInTheDocument();
      
      // Reset mock and retry
      (BookingService.submitBooking as jest.Mock).mockResolvedValue({
        bookingId: 'booking123',
        status: 'confirmed',
      });
      
      userEvent.click(retryButton);
      
      // Should show success message
      await waitFor(() => {
        expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
      });
    });
  });

  describe('Network Error Handling', () => {
    it('should gracefully handle network disconnection', async () => {
      // Mock window.navigator.onLine to simulate offline state
      const originalNavigator = { ...window.navigator };
      Object.defineProperty(window, 'navigator', {
        value: {
          ...originalNavigator,
          onLine: false
        },
        writable: true,
        configurable: true
      });
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Should display network error
      await waitFor(() => {
        expect(screen.getByText(/no internet connection/i)).toBeInTheDocument();
      });
      
      // Simulate coming back online
      Object.defineProperty(window, 'navigator', {
        value: {
          ...originalNavigator,
          onLine: true
        },
        writable: true,
        configurable: true
      });
      
      // Manually trigger online event since jsdom doesn't support it
      act(() => {
        window.dispatchEvent(new Event('online'));
      });
      
      // Service should be called again after coming online
      await waitFor(() => {
        expect(BookingService.getAvailableServices).toHaveBeenCalled();
      });
      
      // Reset navigator to original state
      Object.defineProperty(window, 'navigator', {
        value: originalNavigator,
        writable: true,
        configurable: true
      });
    });
  });
}); 












