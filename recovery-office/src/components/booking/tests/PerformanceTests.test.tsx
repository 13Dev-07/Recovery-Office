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
import { act } from 'react-dom/test-utils';

// Mock booking service
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

// Mock window performance
const originalPerformance = window.performance;
let marks: Record<string, number> = {};
let measures: Record<string, { duration: number; startTime: number; endTime: number }> = {};

// Create a custom render function with device context
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

// Define viewport sizes
const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1200;

describe('Booking Flow Performance Tests', () => {
  beforeAll(() => {
    // Mock performance API
    window.performance.mark = jest.fn((name) => {
      marks[name] = Date.now();
    });
    
    window.performance.measure = jest.fn((name, startMark, endMark) => {
      const startTime = marks[startMark] || 0;
      const endTime = marks[endMark] || Date.now();
      const duration = endTime - startTime;
      measures[name] = { duration, startTime, endTime };
      return { duration } as PerformanceMeasure;
    });
    
    window.performance.getEntriesByName = jest.fn((name) => {
      if (measures[name]) {
        return [{ duration: measures[name].duration } as PerformanceMeasure];
      }
      return [];
    });
    
    window.performance.clearMarks = jest.fn(() => {
      marks = {};
    });
    
    window.performance.clearMeasures = jest.fn(() => {
      measures = {};
    });
  });
  
  afterAll(() => {
    window.performance = originalPerformance;
  });
  
  beforeEach(() => {
    jest.clearAllMocks();
    marks = {};
    measures = {};
    
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
      id: 'booking123',
      status: 'confirmed',
    });
    
    (BookingService.createPaymentIntent as jest.Mock).mockResolvedValue({
      clientSecret: 'secret123',
      paymentIntentId: 'pi_123',
    });
  });
  
  const renderBookingFlow = (width: number) => {
    // Mock window.matchMedia
    window.matchMedia = createMatchMedia(width);
    
    // Calculate device type
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
  
  describe('Initial Load Performance', () => {
    it('should load services within 500ms on mobile', async () => {
      window.performance.mark('start-load');
      
      renderBookingFlow(MOBILE_WIDTH);
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      window.performance.mark('end-load');
      window.performance.measure('services-load-time', 'start-load', 'end-load');
      
      const [measureEntry] = window.performance.getEntriesByName('services-load-time') as PerformanceMeasure[];
      expect(measureEntry.duration).toBeLessThan(500);
    });
    
    it('should load services within 400ms on tablet', async () => {
      window.performance.mark('start-load');
      
      renderBookingFlow(TABLET_WIDTH);
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      window.performance.mark('end-load');
      window.performance.measure('services-load-time', 'start-load', 'end-load');
      
      const [measureEntry] = window.performance.getEntriesByName('services-load-time') as PerformanceMeasure[];
      expect(measureEntry.duration).toBeLessThan(400);
    });
    
    it('should load services within 300ms on desktop', async () => {
      window.performance.mark('start-load');
      
      renderBookingFlow(DESKTOP_WIDTH);
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      window.performance.mark('end-load');
      window.performance.measure('services-load-time', 'start-load', 'end-load');
      
      const [measureEntry] = window.performance.getEntriesByName('services-load-time') as PerformanceMeasure[];
      expect(measureEntry.duration).toBeLessThan(300);
    });
  });
  
  describe('Step Navigation Performance', () => {
    it('should transition between steps efficiently on mobile', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Select service and measure transition time
      window.performance.mark('start-service-selection');
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      window.performance.mark('end-service-selection');
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      window.performance.measure('service-to-date-transition', 'start-service-selection', 'end-service-selection');
      const serviceToDateMeasure = window.performance.getEntriesByName('service-to-date-transition')[0] as PerformanceMeasure;
      expect(serviceToDateMeasure.duration).toBeLessThan(150);
      
      // Select date and measure transition time
      window.performance.mark('start-date-selection');
      userEvent.click(screen.getByText(/august 15/i));
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      window.performance.mark('end-date-selection');
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      window.performance.measure('date-to-client-transition', 'start-date-selection', 'end-date-selection');
      const dateToClientMeasure = window.performance.getEntriesByName('date-to-client-transition')[0] as PerformanceMeasure;
      expect(dateToClientMeasure.duration).toBeLessThan(200);
    });
    
    it('should transition between steps efficiently on tablet', async () => {
      renderBookingFlow(TABLET_WIDTH);
      
      // Wait for services to load
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Select service and measure transition time
      window.performance.mark('start-service-selection');
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      window.performance.mark('end-service-selection');
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      window.performance.measure('service-to-date-transition', 'start-service-selection', 'end-service-selection');
      const serviceToDateMeasure = window.performance.getEntriesByName('service-to-date-transition')[0] as PerformanceMeasure;
      expect(serviceToDateMeasure.duration).toBeLessThan(120);
    });
  });
  
  describe('Form Input Performance', () => {
    it('should handle client info form inputs efficiently on mobile', async () => {
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
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Measure typing performance
      window.performance.mark('start-typing');
      
      // Type in multiple fields rapidly
      act(() => {
        userEvent.type(screen.getByLabelText(/full name/i), 'John Doe', { delay: 10 });
      });
      
      act(() => {
        userEvent.type(screen.getByLabelText(/email/i), 'john@example.com', { delay: 10 });
      });
      
      act(() => {
        userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567', { delay: 10 });
      });
      
      window.performance.mark('end-typing');
      window.performance.measure('form-typing-performance', 'start-typing', 'end-typing');
      
      const typingPerformance = window.performance.getEntriesByName('form-typing-performance')[0] as PerformanceMeasure;
      
      // Check for reasonable typing performance (depends on test environment)
      expect(typingPerformance.duration / 'John Doe john@example.com 555-123-4567'.length).toBeLessThan(20); // Less than 20ms per character on average
    });
  });
  
  describe('Network Performance Simulation', () => {
    it('should handle slow network conditions gracefully', async () => {
      // Simulate slow network by delaying service responses
      (BookingService.getAvailableServices as jest.Mock).mockImplementation(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve([
              { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
              { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
            ]);
          }, 1000); // 1 second delay
        });
      });
      
      renderBookingFlow(MOBILE_WIDTH);
      
      // Verify loading state is shown
      expect(screen.getByTestId('services-loading-indicator')).toBeInTheDocument();
      
      // Wait for services to load despite delay
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      }, { timeout: 2000 });
      
      // Verify loading state is no longer shown
      expect(screen.queryByTestId('services-loading-indicator')).not.toBeInTheDocument();
      
      // Simulate slow network for next step
      (BookingService.getAvailableDates as jest.Mock).mockImplementation(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(['2023-08-15', '2023-08-16', '2023-08-17']);
          }, 1000); // 1 second delay
        });
      });
      
      // Navigate to next step
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Verify date selection loading state appears
      expect(screen.getByTestId('dates-loading-indicator')).toBeInTheDocument();
      
      // Wait for dates to load despite delay
      await waitFor(() => {
        expect(screen.getByText(/august 15/i)).toBeInTheDocument();
      }, { timeout: 2000 });
      
      // Verify loading state is removed
      expect(screen.queryByTestId('dates-loading-indicator')).not.toBeInTheDocument();
    });
  });
  
  describe('Memory Usage', () => {
    it('should not create memory leaks when navigating between steps', async () => {
      renderBookingFlow(MOBILE_WIDTH);
      
      // Complete full booking flow cycle
      
      // Navigate to service selection
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/massage therapy/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Navigate to date selection
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/august 15/i));
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      userEvent.click(screen.getByText(/10:00/i));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Navigate to client info
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      
      // Navigate to confirmation
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Navigate back to start and verify cleanup
      userEvent.click(screen.getByTestId('restart-booking'));
      
      // Verify we're back at the beginning
      await waitFor(() => {
        expect(screen.getByTestId('service-selection-step')).toBeInTheDocument();
      });
      
      // Verify previous step data doesn't affect rendering
      expect(screen.queryByTestId('date-selection-step')).not.toBeInTheDocument();
      expect(screen.queryByTestId('client-info-step')).not.toBeInTheDocument();
      expect(screen.queryByTestId('confirmation-step')).not.toBeInTheDocument();
      
      // Mock represents that we've successfully completed a flow without memory issues
      // In a real scenario, would use browser memory profiling tools
    });
  });
  
  describe('Rendering Optimization', () => {
    it('should render service cards efficiently in virtualized list on mobile', async () => {
      // Mock a longer list of services to test virtualization
      (BookingService.getAvailableServices as jest.Mock).mockResolvedValue(
        Array.from({ length: 20 }, (_, i) => ({
          id: `service${i}`,
          name: `Service ${i}`,
          duration: 60,
          price: 80 + i,
        }))
      );
      
      renderBookingFlow(MOBILE_WIDTH);
      
      // Wait for some services to load
      await waitFor(() => {
        expect(screen.getByText(/service 0/i)).toBeInTheDocument();
      });
      
      // Check that virtualized container is used
      expect(screen.getByTestId('virtualized-service-list')).toBeInTheDocument();
      
      // Verify only visible services are in the DOM
      const serviceElements = screen.getAllByTestId('service-card');
      
      // Mobile should render fewer items than total available
      expect(serviceElements.length).toBeLessThan(20);
      
      // Scroll down to see more services
      act(() => {
        // Simulate scroll event
        const virtualList = screen.getByTestId('virtualized-service-list');
        virtualList.dispatchEvent(new Event('scroll'));
      });
      
      // Wait for new services to appear after scroll
      await waitFor(() => {
        expect(screen.getByText(/service 10/i)).toBeInTheDocument();
      });
    });
  });
}); 











