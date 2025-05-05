import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { ToastProvider } from '../../../context/ToastContext';
import { BookingService } from '../../../services/booking.service';
import { DeviceContext } from '../../../context/DeviceContext';
import mediaQuery from 'css-mediaquery';

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

// Create a custom render function that includes the device size context
function createMatchMedia(width: number) {
  return (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, { width }),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
}

// Define common viewport sizes
const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1200;

describe('Booking Flow Mobile Responsiveness Tests', () => {
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
  });

  const renderBookingFlow = (width: number) => {
    // Mock the window.matchMedia
    window.matchMedia = createMatchMedia(width);
    
    // Calculate device type based on width
    const deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    
    return render(
      <ThemeProvider>
        <ToastProvider>
          <DeviceContext.Provider value={{ deviceType, isMobile: deviceType === 'mobile', isTablet: deviceType === 'tablet', isDesktop: deviceType === 'desktop' }}>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </DeviceContext.Provider>
        </ToastProvider>
      </ThemeProvider>
    );
  };

  describe('Mobile Layout Tests', () => {
    it('should display the mobile accordion layout for services on small screens', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check for mobile-specific elements
      expect(screen.getByTestId('mobile-service-accordion')).toBeInTheDocument();
      
      // Should not have desktop grid layout
      expect(screen.queryByTestId('desktop-service-grid')).not.toBeInTheDocument();
      
      // Mobile header should be visible
      expect(screen.getByTestId('mobile-booking-header')).toBeInTheDocument();
      
      // Mobile navigation controls should be fixed to bottom
      const navControls = screen.getByTestId('booking-nav-controls');
      expect(navControls).toHaveClass('fixed-bottom');
    });
    
    it('should use full-width buttons on mobile screens', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Navigation buttons should be full width
      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(nextButton).toHaveClass('full-width');
      
      // Service cards should be full width
      const serviceCards = screen.getAllByTestId('service-card');
      serviceCards.forEach(card => {
        expect(card).toHaveClass('mobile-width');
      });
    });
    
    it('should use a compact date picker on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Check for mobile-specific calendar
      await waitFor(() => {
        expect(screen.getByTestId('mobile-calendar')).toBeInTheDocument();
      });
      
      // Should not show desktop calendar
      expect(screen.queryByTestId('desktop-calendar')).not.toBeInTheDocument();
      
      // Mobile calendar should have single-month view
      expect(screen.getByTestId('single-month-view')).toBeInTheDocument();
    });
    
    it('should use stacked layout for time slots on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Navigate to date selection and select a date
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      // Time slots should be in vertical layout
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('mobile-time-slots')).toBeInTheDocument();
      expect(screen.queryByTestId('desktop-time-slots')).not.toBeInTheDocument();
      
      // Time slots should be stacked
      const timeSlots = screen.getAllByTestId('time-slot-button');
      expect(timeSlots[0]).toHaveClass('vertical-layout');
    });
    
    it('should use single-column form layout on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
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
      
      // Check for mobile form layout
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('mobile-form-layout')).toBeInTheDocument();
      expect(screen.queryByTestId('desktop-form-layout')).not.toBeInTheDocument();
      
      // Form fields should be full width
      const formFields = screen.getAllByTestId('form-field');
      formFields.forEach(field => {
        expect(field).toHaveClass('full-width');
      });
    });
  });

  describe('Tablet Layout Tests', () => {
    it('should display a grid layout for services on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check for tablet-specific elements
      expect(screen.getByTestId('tablet-service-grid')).toBeInTheDocument();
      
      // Should not have mobile accordion
      expect(screen.queryByTestId('mobile-service-accordion')).not.toBeInTheDocument();
      
      // Service cards should be in grid layout
      const serviceCards = screen.getAllByTestId('service-card');
      serviceCards.forEach(card => {
        expect(card).toHaveClass('tablet-width');
      });
    });
    
    it('should use side-by-side layout for booking controls on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Navigation controls should have side-by-side layout
      const navControls = screen.getByTestId('booking-nav-controls');
      expect(navControls).toHaveClass('flex-row');
      
      // Back and next buttons should be displayed inline
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toHaveClass('tablet-button');
      expect(nextButton).toHaveClass('tablet-button');
    });
    
    it('should use a two-month calendar view on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Check for tablet-specific calendar
      await waitFor(() => {
        expect(screen.getByTestId('tablet-calendar')).toBeInTheDocument();
      });
      
      // Should show two-month view
      expect(screen.getByTestId('two-month-view')).toBeInTheDocument();
      
      // Should not show mobile calendar
      expect(screen.queryByTestId('mobile-calendar')).not.toBeInTheDocument();
    });
    
    it('should use grid layout for time slots on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
      // Navigate to date selection and select a date
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      // Time slots should be in grid layout
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('tablet-time-slots')).toBeInTheDocument();
      
      // Time slots should be in grid
      const timeSlotContainer = screen.getByTestId('time-slot-grid');
      expect(timeSlotContainer).toHaveClass('grid-layout');
    });
    
    it('should use two-column form layout on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
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
      
      // Check for tablet form layout
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('tablet-form-layout')).toBeInTheDocument();
      
      // Form should have two columns
      const formContainer = screen.getByTestId('form-container');
      expect(formContainer).toHaveClass('two-column-grid');
    });
  });

  describe('Responsive Adaptations', () => {
    it('should adapt booking summary based on screen size', async () => {
      // Test on mobile
      renderBookingFlow(MOBILE_WIDTH);
      
      // Navigate to confirmation step
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
      
      // Check booking summary on mobile
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('mobile-booking-summary')).toBeInTheDocument();
      expect(screen.queryByTestId('desktop-booking-summary')).not.toBeInTheDocument();
      
      // Recreate with tablet
      const { unmount } = screen;
      unmount();
      
      renderBookingFlow(TABLET_WIDTH);
      
      // Navigate to confirmation step again
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
      
      // Check booking summary on tablet
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('tablet-booking-summary')).toBeInTheDocument();
      expect(screen.queryByTestId('mobile-booking-summary')).not.toBeInTheDocument();
    });
    
    it('should adapt step indicator based on screen size', async () => {
      // Test on mobile
      renderBookingFlow(MOBILE_WIDTH);
      
      // Check step indicator on mobile
      await waitFor(() => {
        expect(screen.getByTestId('step-indicator')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('mobile-step-dots')).toBeInTheDocument();
      expect(screen.queryByTestId('desktop-step-labels')).not.toBeInTheDocument();
      
      // Recreate with desktop
      const { unmount } = screen;
      unmount();
      
      renderBookingFlow(DESKTOP_WIDTH);
      
      // Check step indicator on desktop
      await waitFor(() => {
        expect(screen.getByTestId('step-indicator')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('desktop-step-labels')).toBeInTheDocument();
      expect(screen.queryByTestId('mobile-step-dots')).not.toBeInTheDocument();
    });
    
    it('should use horizontal layout for payment options on larger screens', async () => {
      // Test on mobile first
      renderBookingFlow(MOBILE_WIDTH);
      
      // Navigate to confirmation step
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
      
      // Check payment options layout on mobile
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('payment-options')).toBeInTheDocument();
      expect(screen.getByTestId('payment-options')).toHaveClass('vertical-layout');
      
      // Recreate with desktop
      const { unmount } = screen;
      unmount();
      
      renderBookingFlow(DESKTOP_WIDTH);
      
      // Navigate to confirmation step again
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
      
      // Check payment options layout on desktop
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('payment-options')).toBeInTheDocument();
      expect(screen.getByTestId('payment-options')).toHaveClass('horizontal-layout');
    });
  });

  describe('Touch-specific Interactions', () => {
    it('should implement swipe navigation on mobile for date selection', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Check for touch-specific elements
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Should have swipeable calendar
      expect(screen.getByTestId('swipeable-calendar')).toBeInTheDocument();
      
      // Should have touch indicators
      expect(screen.getByTestId('swipe-indicator-left')).toBeInTheDocument();
      expect(screen.getByTestId('swipe-indicator-right')).toBeInTheDocument();
    });
    
    it('should use larger touch targets on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Navigation buttons should have larger touch targets
      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(nextButton).toHaveClass('touch-target-large');
      
      // Service cards should have larger touch areas
      const serviceCards = screen.getAllByTestId('service-card');
      serviceCards.forEach(card => {
        expect(card).toHaveClass('touch-friendly');
      });
    });
    
    it('should implement pull-to-refresh on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Check for pull-to-refresh indicator
      await waitFor(() => {
        expect(screen.getByTestId('booking-container')).toBeInTheDocument();
      });
      
      expect(screen.getByTestId('pull-to-refresh')).toBeInTheDocument();
      
      // Pull-to-refresh should not be present on larger screens
      const { unmount } = screen;
      unmount();
      
      renderBookingFlow(DESKTOP_WIDTH);
      
      await waitFor(() => {
        expect(screen.getByTestId('booking-container')).toBeInTheDocument();
      });
      
      expect(screen.queryByTestId('pull-to-refresh')).not.toBeInTheDocument();
    });
  });
}); 











