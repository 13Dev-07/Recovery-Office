import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { BookingNavControls } from '../BookingNavControls';
import { BookingInterface } from '../BookingInterface';
import { ToastProvider } from '../../../context/ToastContext';
import { BookingService } from '../../../services/booking.service';
import { act } from 'react-dom/test-utils';

// Mock the booking service
jest.mock('../../../services/booking.service', () => ({
  BookingService: {
    getAvailableServices: jest.fn(),
    getAvailableDates: jest.fn(),
    getAvailableTimeSlots: jest.fn(),
    submitBooking: jest.fn(),
    createPaymentIntent: jest.fn(),
  },
}));

// Mock resize observer
beforeAll(() => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

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

describe('Booking Components Responsive Tests', () => {
  const setMediaMatches = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  describe('BookingNavControls', () => {
    const mockProps = {
      currentStep: 1,
      totalSteps: 4,
      onNext: jest.fn(),
      onBack: jest.fn(),
      isNextDisabled: false,
      isBackDisabled: false,
      confirmationText: 'Confirm',
      isConfirmStep: false,
    };

    it('should render with desktop styling by default', () => {
      setMediaMatches(false); // Desktop
      
      render(
        <ThemeProvider>
          <BookingNavControls {...mockProps} />
        </ThemeProvider>
      );
      
      const navContainer = screen.getByTestId('booking-nav-controls');
      expect(navContainer).toHaveStyle({
        display: 'flex',
        justifyContent: 'space-between'
      });
      
      // Should have desktop-sized buttons
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should render with tablet styling on tablets', () => {
      // Set tablet media query match
      setMediaMatches(true);
      
      render(
        <ThemeProvider>
          <BookingNavControls {...mockProps} deviceType="tablet" />
        </ThemeProvider>
      );
      
      const navContainer = screen.getByTestId('booking-nav-controls');
      expect(navContainer).toHaveStyle({
        position: 'fixed',
        bottom: '0'
      });
      
      // Should have tablet-optimized buttons
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should render with mobile styling on mobile', () => {
      // Set mobile media query match
      setMediaMatches(true);
      
      render(
        <ThemeProvider>
          <BookingNavControls {...mockProps} deviceType="mobile" />
        </ThemeProvider>
      );
      
      const navContainer = screen.getByTestId('booking-nav-controls');
      expect(navContainer).toHaveStyle({
        position: 'fixed',
        bottom: '0',
        width: '100%',
        padding: expect.any(String)
      });
      
      // Should have mobile-sized buttons
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should disable buttons when specified', () => {
      render(
        <ThemeProvider>
          <BookingNavControls 
            {...mockProps} 
            isNextDisabled={true}
            isBackDisabled={true}
          />
        </ThemeProvider>
      );
      
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it('should show confirmation text on final step', () => {
      render(
        <ThemeProvider>
          <BookingNavControls 
            {...mockProps} 
            isConfirmStep={true}
            confirmationText="Complete Booking"
          />
        </ThemeProvider>
      );
      
      const confirmButton = screen.getByRole('button', { name: /complete booking/i });
      expect(confirmButton).toBeInTheDocument();
    });
  });

  describe('BookingInterface', () => {
    it('should render with desktop layout by default', () => {
      setMediaMatches(false); // Desktop
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingInterface />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      const bookingInterface = screen.getByTestId('booking-interface');
      expect(bookingInterface).toBeInTheDocument();
      
      // Desktop layout has a sidebar
      const sidebar = screen.getByTestId('booking-sidebar');
      expect(sidebar).toBeInTheDocument();
      
      // Desktop layout has the flow and sidebar side by side
      expect(bookingInterface).toHaveStyle({
        display: 'grid',
        gridTemplateColumns: expect.stringContaining('1fr')
      });
    });

    it('should render with tablet layout on tablets', () => {
      // Set tablet media query match
      setMediaMatches(true);
      
      // Mock the useMediaQuery hook to return tablet
      jest.mock('../../../hooks/useMediaQuery', () => ({
        useMediaQuery: () => true,
        useDeviceType: () => 'tablet'
      }));
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingInterface />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      const bookingInterface = screen.getByTestId('booking-interface');
      expect(bookingInterface).toBeInTheDocument();
      
      // Tablet layout stacks the sidebar and flow
      expect(bookingInterface).toHaveStyle({
        display: 'flex',
        flexDirection: 'column'
      });
    });

    it('should render with mobile layout on mobile', () => {
      // Set mobile media query match
      setMediaMatches(true);
      
      // Mock the useMediaQuery hook to return mobile
      jest.mock('../../../hooks/useMediaQuery', () => ({
        useMediaQuery: () => true,
        useDeviceType: () => 'mobile'
      }));
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingInterface />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      const bookingInterface = screen.getByTestId('booking-interface');
      expect(bookingInterface).toBeInTheDocument();
      
      // Mobile layout has collapsed sidebar
      const sidebar = screen.queryByTestId('booking-sidebar-expanded');
      expect(sidebar).not.toBeInTheDocument();
      
      // Should have a toggle button for the sidebar
      const toggleButton = screen.getByRole('button', { name: /view summary/i });
      expect(toggleButton).toBeInTheDocument();
    });
  });

  describe('BookingFlow Responsive Behavior', () => {
    it('should adapt calendar display for desktop', () => {
      setMediaMatches(false); // Desktop
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to date selection step
      const nextButton = screen.getByRole('button', { name: /next/i });
      nextButton.click();
      
      // Calendar should display inline
      const calendar = screen.getByTestId('date-selection-calendar');
      expect(calendar).toHaveStyle({
        display: 'grid'
      });
    });

    it('should use modal calendar for mobile', () => {
      // Set mobile media query match
      setMediaMatches(true);
      
      // Mock the useMediaQuery hook to return mobile
      jest.mock('../../../hooks/useMediaQuery', () => ({
        useMediaQuery: () => true,
        useDeviceType: () => 'mobile'
      }));
      
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to date selection step
      const nextButton = screen.getByRole('button', { name: /next/i });
      nextButton.click();
      
      // Should have a button to open calendar modal
      const openCalendarButton = screen.getByRole('button', { name: /select date/i });
      expect(openCalendarButton).toBeInTheDocument();
      
      // Calendar should initially be hidden
      const calendarModal = screen.queryByTestId('mobile-calendar-modal');
      expect(calendarModal).not.toBeVisible();
      
      // Click to open calendar
      openCalendarButton.click();
      
      // Modal should be visible
      expect(screen.getByTestId('mobile-calendar-modal')).toBeVisible();
    });
  });
});

// Match media mock
function setupMatchMedia(width: number) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query.includes('max-width') 
        ? width <= parseInt(query.match(/\d+/)?.[0] || '0')
        : width >= parseInt(query.match(/\d+/)?.[0] || '0'),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

// Mock window resize
function mockWindowResize(width: number, height: number) {
  Object.defineProperty(window, 'innerWidth', { writable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { writable: true, value: height });
  setupMatchMedia(width);
  window.dispatchEvent(new Event('resize'));
}

describe('Booking Responsive Layout Tests', () => {
  describe('Mobile Layout (< 768px)', () => {
    beforeEach(() => {
      mockWindowResize(375, 667); // iPhone 8 dimensions
    });

    it('should display a single column layout on mobile', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check for mobile layout
      const container = screen.getByTestId('booking-container');
      expect(container).toHaveClass('mobileLayout');
      expect(container).not.toHaveClass('tabletLayout');
      expect(container).not.toHaveClass('desktopLayout');
      
      // Verify stepper shows current step
      const stepper = screen.getByTestId('booking-stepper');
      expect(stepper).toBeInTheDocument();
      expect(stepper).toHaveClass('mobileStepper');
      
      // Check that nav controls are at the bottom on mobile
      const navControls = screen.getByTestId('booking-nav-controls');
      expect(navControls).toHaveClass('mobileNavControls');
    });

    it('should show mobile optimized calendar for date selection on small screens', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Verify mobile calendar is shown
      const calendar = screen.getByTestId('date-calendar');
      expect(calendar).toHaveClass('mobileCalendar');
      expect(calendar).not.toHaveClass('desktopCalendar');
    });

    it('should use full width form fields on mobile', async () => {
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
      
      // Check form field layout
      const formContainer = screen.getByTestId('client-info-form');
      expect(formContainer).toHaveClass('mobileForm');
      
      // Verify form fields use full width
      const nameField = screen.getByTestId('full-name-field');
      expect(nameField).toHaveClass('fullWidthField');
    });
  });

  describe('Tablet Layout (768px - 1023px)', () => {
    beforeEach(() => {
      mockWindowResize(768, 1024); // iPad dimensions
    });

    it('should display a two-column layout on tablet', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check for tablet layout
      const container = screen.getByTestId('booking-container');
      expect(container).toHaveClass('tabletLayout');
      expect(container).not.toHaveClass('mobileLayout');
      expect(container).not.toHaveClass('desktopLayout');
      
      // Verify stepper remains visible
      const stepper = screen.getByTestId('booking-stepper');
      expect(stepper).toBeInTheDocument();
      expect(stepper).toHaveClass('tabletStepper');
      
      // Check sidebar placement
      const sidebar = screen.getByTestId('booking-sidebar');
      expect(sidebar).toBeInTheDocument();
      expect(sidebar).toHaveClass('tabletSidebar');
    });

    it('should use tablet-optimized nav controls', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check nav controls
      const navControls = screen.getByTestId('booking-nav-controls');
      expect(navControls).toBeInTheDocument();
      expect(navControls).toHaveClass('tabletNavControls');
      
      // Verify nav buttons have tablet sizes
      const backButton = screen.getByRole('button', { name: /back/i });
      const nextButton = screen.getByRole('button', { name: /next/i });
      
      expect(backButton).toHaveClass('tabletButton');
      expect(nextButton).toHaveClass('tabletButton');
    });
  });

  describe('Desktop Layout (≥ 1024px)', () => {
    beforeEach(() => {
      mockWindowResize(1440, 900); // Common desktop resolution
    });

    it('should display a two-column wider layout on desktop', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Check for desktop layout
      const container = screen.getByTestId('booking-container');
      expect(container).toHaveClass('desktopLayout');
      expect(container).not.toHaveClass('mobileLayout');
      expect(container).not.toHaveClass('tabletLayout');
      
      // Verify stepper has desktop styling
      const stepper = screen.getByTestId('booking-stepper');
      expect(stepper).toBeInTheDocument();
      expect(stepper).toHaveClass('desktopStepper');
      
      // Check sidebar placement
      const sidebar = screen.getByTestId('booking-sidebar');
      expect(sidebar).toBeInTheDocument();
      expect(sidebar).toHaveClass('desktopSidebar');
    });

    it('should use desktop-optimized calendar for date selection', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Verify desktop calendar is shown
      const calendar = screen.getByTestId('date-calendar');
      expect(calendar).toHaveClass('desktopCalendar');
      expect(calendar).not.toHaveClass('mobileCalendar');
    });
  });

  describe('Responsive Behavior on Resize', () => {
    it('should adapt layout when resizing from desktop to mobile', async () => {
      // Start with desktop size
      mockWindowResize(1440, 900);
      
      const { rerender } = render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Verify desktop layout
      expect(screen.getByTestId('booking-container')).toHaveClass('desktopLayout');
      
      // Change to mobile size
      act(() => {
        mockWindowResize(375, 667);
      });
      
      // Force re-render
      rerender(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Should now have mobile layout
      await waitFor(() => {
        expect(screen.getByTestId('booking-container')).toHaveClass('mobileLayout');
        expect(screen.getByTestId('booking-container')).not.toHaveClass('desktopLayout');
      });
    });

    it('should adapt layout when resizing from mobile to tablet', async () => {
      // Start with mobile size
      mockWindowResize(375, 667);
      
      const { rerender } = render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Verify mobile layout
      expect(screen.getByTestId('booking-container')).toHaveClass('mobileLayout');
      
      // Change to tablet size
      act(() => {
        mockWindowResize(768, 1024);
      });
      
      // Force re-render
      rerender(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Should now have tablet layout
      await waitFor(() => {
        expect(screen.getByTestId('booking-container')).toHaveClass('tabletLayout');
        expect(screen.getByTestId('booking-container')).not.toHaveClass('mobileLayout');
      });
    });
  });

  describe('Touch Interaction Tests', () => {
    beforeEach(() => {
      mockWindowResize(768, 1024); // Tablet dimensions
    });

    it('should support touch gestures for date selection', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Verify swipe zone is present
      const calendar = screen.getByTestId('date-calendar');
      expect(calendar).toHaveAttribute('data-swipeable', 'true');
      
      // Simulate swipe gesture
      const calendarSwipeZone = screen.getByTestId('calendar-swipe-zone');
      expect(calendarSwipeZone).toBeInTheDocument();
      
      // Test that touch events are registered
      let touchStartCalled = false;
      let touchMoveCalled = false;
      let touchEndCalled = false;
      
      const originalAddEventListener = calendarSwipeZone.addEventListener;
      calendarSwipeZone.addEventListener = jest.fn(
        (event, handler) => {
          if (event === 'touchstart') touchStartCalled = true;
          if (event === 'touchmove') touchMoveCalled = true;
          if (event === 'touchend') touchEndCalled = true;
          return originalAddEventListener.call(calendarSwipeZone, event, handler);
        }
      );
      
      // Trigger touch events
      fireTouch(calendarSwipeZone, 'touchstart', 300, 200);
      fireTouch(calendarSwipeZone, 'touchmove', 200, 200);
      fireTouch(calendarSwipeZone, 'touchend', 150, 200);
      
      expect(touchStartCalled).toBe(true);
      expect(touchMoveCalled).toBe(true);
      expect(touchEndCalled).toBe(true);
    });
  });
});

// Helper function to fire touch events
function fireTouch(element: Element, eventType: string, x: number, y: number) {
  const touchObj = new Touch({
    identifier: Date.now(),
    target: element,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5,
  });

  const touchEvent = new TouchEvent(eventType, {
    cancelable: true,
    bubbles: true,
    touches: [touchObj],
    targetTouches: [touchObj],
    changedTouches: [touchObj],
    shiftKey: false,
  });

  element.dispatchEvent(touchEvent);
} 











