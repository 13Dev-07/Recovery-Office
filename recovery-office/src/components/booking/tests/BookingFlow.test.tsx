import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { BookingService } from '../../../services/booking.service';
import { ToastProvider } from '../../../context/ToastContext';

// Mock the booking service
jest.mock('../../../services/booking.service');
const mockedBookingService = BookingService as jest.Mocked<typeof BookingService>;

// Mock window.matchMedia for responsive design tests
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false, // Default to desktop
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

// Mock resize observer
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('BookingFlow End-to-End Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock API responses
    mockedBookingService.getAvailableServices.mockResolvedValue([
      { id: 'service-1', name: 'Massage Therapy', description: 'Relaxing massage', price: 80, durationMinutes: 60 },
      { id: 'service-2', name: 'Acupuncture', description: 'Traditional treatment', price: 95, durationMinutes: 45 }
    ]);
    
    mockedBookingService.getAvailableDates.mockResolvedValue([
      { date: '2023-05-15', hasAvailability: true },
      { date: '2023-05-16', hasAvailability: true },
      { date: '2023-05-17', hasAvailability: false }
    ]);
    
    mockedBookingService.getAvailableTimeSlots.mockResolvedValue([
      { id: 'slot-1', startTime: '10:00', endTime: '11:00', isAvailable: true },
      { id: 'slot-2', startTime: '11:30', endTime: '12:30', isAvailable: true },
      { id: 'slot-3', startTime: '14:00', endTime: '15:00', isAvailable: false }
    ]);
    
    mockedBookingService.submitBooking.mockResolvedValue({
      id: 'booking-123',
      status: 'confirmed',
      confirmationCode: 'ABC123'
    });
    
    mockedBookingService.createPaymentIntent.mockResolvedValue({
      paymentIntentId: 'pi_123456789',
      clientSecret: 'secret_987654321'
    });
  });

  it('should complete the entire booking flow successfully', async () => {
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
    await waitFor(() => expect(mockedBookingService.getAvailableServices).toHaveBeenCalled());
    
    // Step 1: Service Selection
    await waitFor(() => {
      expect(screen.getByText('Choose a Service')).toBeInTheDocument();
    });
    
    // Select a service
    const massageService = await screen.findByText('Massage Therapy');
    await userEvent.click(massageService);
    
    // Move to next step
    const nextButtonStep1 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep1);
    
    // Step 2: Date Selection
    await waitFor(() => {
      expect(screen.getByText('Select Date & Time')).toBeInTheDocument();
    });
    
    // Wait for available dates to load
    await waitFor(() => expect(mockedBookingService.getAvailableDates).toHaveBeenCalled());
    
    // Select a date (May 15)
    const dateCell = await screen.findByText('15');
    await userEvent.click(dateCell);
    
    // Wait for time slots to load
    await waitFor(() => expect(mockedBookingService.getAvailableTimeSlots).toHaveBeenCalled());
    
    // Select a time slot
    const timeSlot = await screen.findByText('10:00 - 11:00');
    await userEvent.click(timeSlot);
    
    // Move to next step
    const nextButtonStep2 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep2);
    
    // Step 3: Client Information
    await waitFor(() => {
      expect(screen.getByText('Your Information')).toBeInTheDocument();
    });
    
    // Fill in the client information form
    await userEvent.type(screen.getByLabelText(/first name/i), 'John');
    await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@example.com');
    await userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
    
    // Accept terms
    const termsCheckbox = screen.getByLabelText(/terms and conditions/i);
    await userEvent.click(termsCheckbox);
    
    // Move to next step
    const nextButtonStep3 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep3);
    
    // Step 4: Confirmation
    await waitFor(() => {
      expect(screen.getByText('Confirm Booking')).toBeInTheDocument();
    });
    
    // Verify booking details are displayed
    expect(screen.getByText('Massage Therapy')).toBeInTheDocument();
    expect(screen.getByText('$80.00')).toBeInTheDocument();
    expect(screen.getByText('May 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('10:00 - 11:00')).toBeInTheDocument();
    
    // Select payment method
    const payAtAppointmentOption = screen.getByLabelText(/pay at appointment/i);
    await userEvent.click(payAtAppointmentOption);
    
    // Accept cancellation policy
    const cancellationCheckbox = screen.getByLabelText(/cancellation policy/i);
    await userEvent.click(cancellationCheckbox);
    
    // Submit the booking
    const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
    await userEvent.click(confirmButton);
    
    // Wait for booking submission
    await waitFor(() => expect(mockedBookingService.submitBooking).toHaveBeenCalled());
    
    // Check confirmation message
    await waitFor(() => {
      expect(screen.getByText('Booking Confirmed!')).toBeInTheDocument();
      expect(screen.getByText('ABC123')).toBeInTheDocument();
    });
  });
  
  it('should handle payment with credit card', async () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <BookingProvider>
            <BookingFlow />
          </BookingProvider>
        </ToastProvider>
      </ThemeProvider>
    );

    // Steps 1-3 (abbreviated for brevity)
    await waitFor(() => expect(screen.getByText('Choose a Service')).toBeInTheDocument());
    const massageService = await screen.findByText('Massage Therapy');
    await userEvent.click(massageService);
    const nextButtonStep1 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep1);
    
    await waitFor(() => expect(screen.getByText('Select Date & Time')).toBeInTheDocument());
    const dateCell = await screen.findByText('15');
    await userEvent.click(dateCell);
    const timeSlot = await screen.findByText('10:00 - 11:00');
    await userEvent.click(timeSlot);
    const nextButtonStep2 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep2);
    
    await waitFor(() => expect(screen.getByText('Your Information')).toBeInTheDocument());
    await userEvent.type(screen.getByLabelText(/first name/i), 'John');
    await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@example.com');
    await userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
    const termsCheckbox = screen.getByLabelText(/terms and conditions/i);
    await userEvent.click(termsCheckbox);
    const nextButtonStep3 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep3);
    
    // Step 4: Confirmation with credit card payment
    await waitFor(() => expect(screen.getByText('Confirm Booking')).toBeInTheDocument());
    
    // Select credit card payment
    const creditCardOption = screen.getByLabelText(/credit card/i);
    await userEvent.click(creditCardOption);
    
    // This should trigger the payment intent creation
    await waitFor(() => expect(mockedBookingService.createPaymentIntent).toHaveBeenCalled());
    
    // Accept cancellation policy
    const cancellationCheckbox = screen.getByLabelText(/cancellation policy/i);
    await userEvent.click(cancellationCheckbox);
    
    // Submit the booking
    const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
    await userEvent.click(confirmButton);
    
    // Verify the booking was submitted with payment intent ID
    await waitFor(() => {
      expect(mockedBookingService.submitBooking).toHaveBeenCalledWith(
        expect.objectContaining({
          paymentMethod: 'credit_card',
          paymentIntentId: 'pi_123456789'
        })
      );
    });
  });
  
  it('should handle errors in the booking flow', async () => {
    // Set up error for available services
    mockedBookingService.getAvailableServices.mockRejectedValueOnce(new Error('Failed to fetch services'));
    
    render(
      <ThemeProvider>
        <ToastProvider>
          <BookingProvider>
            <BookingFlow />
          </BookingProvider>
        </ToastProvider>
      </ThemeProvider>
    );

    // Wait for services loading to fail
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
      expect(screen.getByText(/failed to fetch services/i)).toBeInTheDocument();
    });
    
    // Retry button should be visible
    const retryButton = screen.getByRole('button', { name: /try again/i });
    expect(retryButton).toBeInTheDocument();
    
    // Reset the mock to succeed on retry
    mockedBookingService.getAvailableServices.mockResolvedValueOnce([
      { id: 'service-1', name: 'Massage Therapy', description: 'Relaxing massage', price: 80, durationMinutes: 60 }
    ]);
    
    // Click retry
    await userEvent.click(retryButton);
    
    // Services should load successfully
    await waitFor(() => {
      expect(screen.getByText('Massage Therapy')).toBeInTheDocument();
    });
  });
  
  it('should allow navigating back through steps', async () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <BookingProvider>
            <BookingFlow />
          </BookingProvider>
        </ToastProvider>
      </ThemeProvider>
    );

    // Go to step 2
    await waitFor(() => expect(screen.getByText('Choose a Service')).toBeInTheDocument());
    const massageService = await screen.findByText('Massage Therapy');
    await userEvent.click(massageService);
    const nextButtonStep1 = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButtonStep1);
    
    // Verify we're on step 2
    await waitFor(() => expect(screen.getByText('Select Date & Time')).toBeInTheDocument());
    
    // Go back to step 1
    const backButton = screen.getByRole('button', { name: /back/i });
    await userEvent.click(backButton);
    
    // Verify we're back on step 1
    await waitFor(() => expect(screen.getByText('Choose a Service')).toBeInTheDocument());
    
    // Verify our selection is still there
    const selectedService = screen.getByText('Massage Therapy');
    expect(selectedService.closest('[data-selected="true"]')).not.toBeNull();
  });
}); 











