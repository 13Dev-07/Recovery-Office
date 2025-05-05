import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
    createPaymentIntent: jest.fn(),
    cancelBooking: jest.fn(),
  },
}));

describe('Booking Flow Accessibility Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default mock responses
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

  it('should have proper ARIA attributes on service cards', async () => {
    renderBookingFlow();
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
    });
    
    // Get service cards
    const serviceCards = screen.getAllByTestId('service-card');
    
    // Check for proper ARIA attributes
    expect(serviceCards[0]).toHaveAttribute('aria-label', 'Massage Therapy, 60 minutes, $80');
    expect(serviceCards[0]).toHaveAttribute('role', 'button');
    expect(serviceCards[0]).toHaveAttribute('aria-selected', 'false');
    
    // Select a service
    userEvent.click(serviceCards[0]);
    
    // Selected state should be properly communicated
    expect(serviceCards[0]).toHaveAttribute('aria-selected', 'true');
  });
  
  it('should allow keyboard navigation through booking steps', async () => {
    renderBookingFlow();
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
    });
    
    // Get all service cards and focus on first one
    const serviceCards = screen.getAllByTestId('service-card');
    serviceCards[0].focus();
    
    // Press Space to select
    userEvent.keyboard(' ');
    expect(serviceCards[0]).toHaveClass('selected');
    
    // Tab to Next button and press Enter
    userEvent.tab();
    expect(document.activeElement).toHaveAttribute('aria-label', 'Next');
    userEvent.keyboard('{Enter}');
    
    // Should navigate to next step
    await waitFor(() => {
      expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
    });
  });
  
  it('should announce loading states to screen readers', async () => {
    // Simulate delayed API response
    (BookingService.getAvailableServices as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
            { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
          ]);
        }, 100);
      });
    });
    
    renderBookingFlow();
    
    // Loading indicator should be properly labeled for screen readers
    const loadingIndicator = screen.getByTestId('services-loading-indicator');
    expect(loadingIndicator).toHaveAttribute('aria-live', 'polite');
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
    });
  });
}); 











