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
  },
}));

describe('Booking Flow Keyboard Accessibility Tests', () => {
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

  describe('Service Selection Step', () => {
    it('should allow keyboard navigation between service options', async () => {
      renderBookingFlow();
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Get all service option elements
      const serviceOptions = screen.getAllByRole('radio', { name: /massage|acupuncture/i });
      expect(serviceOptions.length).toBe(2);
      
      // Check initial focus
      const firstOption = serviceOptions[0];
      firstOption.focus();
      expect(document.activeElement).toBe(firstOption);
      
      // Move focus with keyboard
      userEvent.tab();
      expect(document.activeElement).toBe(serviceOptions[1]);
      
      // Select with Space key
      userEvent.keyboard(' ');
      expect(serviceOptions[1]).toBeChecked();
      
      // Navigate to next button
      userEvent.tab();
      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(document.activeElement).toBe(nextButton);
      
      // Activate button with Enter key
      userEvent.keyboard('{Enter}');
      
      // Should navigate to date selection
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
    });
    
    it('should provide keyboard navigation for mobile service accordion', async () => {
      // Set viewport to mobile size
      Object.defineProperty(window, 'innerWidth', { writable: true, value: 375 });
      window.dispatchEvent(new Event('resize'));
      
      renderBookingFlow();
      
      await waitFor(() => {
        expect(screen.getByText(/services/i)).toBeInTheDocument();
      });
      
      // Find the accordion buttons
      const accordionButtons = screen.getAllByRole('button', { name: /massage|acupuncture/i });
      
      // Focus first accordion button
      accordionButtons[0].focus();
      expect(document.activeElement).toBe(accordionButtons[0]);
      
      // Activate with Enter key
      userEvent.keyboard('{Enter}');
      
      // Accordion should expand
      const expandedContent = screen.getByTestId('service-details-service1');
      expect(expandedContent).toBeVisible();
      
      // Tab to the select button
      userEvent.tab();
      const selectButton = screen.getByRole('button', { name: /select this service/i });
      expect(document.activeElement).toBe(selectButton);
      
      // Activate select button
      userEvent.keyboard('{Enter}');
      
      // Service should be selected
      expect(screen.getByTestId('service-option-service1')).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Date Selection Step', () => {
    // Helper to navigate to date selection step
    const navigateToDateSelection = async () => {
      renderBookingFlow();
      
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
    };
    
    it('should allow keyboard navigation in calendar', async () => {
      await navigateToDateSelection();
      
      // Focus the first available date
      const dateButtons = screen.getAllByRole('button', { name: /august \d+/i });
      dateButtons[0].focus();
      expect(document.activeElement).toBe(dateButtons[0]);
      
      // Move with arrow keys
      userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(dateButtons[1]);
      
      userEvent.keyboard('{ArrowDown}');
      // Should move to a date in the next week
      expect(document.activeElement).not.toBe(dateButtons[1]);
      
      // Select date with Space
      userEvent.keyboard(' ');
      expect(document.activeElement).toHaveAttribute('aria-selected', 'true');
      
      // Tab to next button
      userEvent.tab();
      userEvent.tab(); // May need multiple tabs depending on focus order
      
      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(document.activeElement).toBe(nextButton);
    });
    
    it('should make month navigation controls accessible via keyboard', async () => {
      await navigateToDateSelection();
      
      // Find month navigation controls
      const prevMonthButton = screen.getByRole('button', { name: /previous month/i });
      const nextMonthButton = screen.getByRole('button', { name: /next month/i });
      
      // Check that they're reachable via Tab
      prevMonthButton.focus();
      expect(document.activeElement).toBe(prevMonthButton);
      
      userEvent.tab();
      expect(document.activeElement).not.toBe(prevMonthButton);
      
      nextMonthButton.focus();
      expect(document.activeElement).toBe(nextMonthButton);
      
      // Activate with Enter key
      userEvent.keyboard('{Enter}');
      
      // Should navigate to next month
      await waitFor(() => {
        const monthDisplay = screen.getByTestId('calendar-month-display');
        expect(monthDisplay).toHaveTextContent(/september/i);
      });
    });
  });

  describe('Time Slot Selection Step', () => {
    // Helper to navigate to time slot selection
    const navigateToTimeSlotSelection = async () => {
      renderBookingFlow();
      
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
      
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
    };
    
    it('should allow keyboard navigation between time slots', async () => {
      await navigateToTimeSlotSelection();
      
      // Find time slot buttons
      const timeSlots = screen.getAllByRole('radio', { name: /\d+:\d+/i });
      expect(timeSlots.length).toBe(3);
      
      // First time slot should be focusable
      timeSlots[0].focus();
      expect(document.activeElement).toBe(timeSlots[0]);
      
      // Tab to next time slot
      userEvent.tab();
      expect(document.activeElement).toBe(timeSlots[1]);
      
      // Select with Space
      userEvent.keyboard(' ');
      expect(timeSlots[1]).toBeChecked();
      
      // Tab to next button
      const nextButton = screen.getByRole('button', { name: /next/i });
      nextButton.focus();
      expect(document.activeElement).toBe(nextButton);
      
      // Activate with Enter
      userEvent.keyboard('{Enter}');
      
      // Should navigate to client info step
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
    });
    
    it('should have proper ARIA attributes for time slot availability', async () => {
      // Mock some time slots as unavailable
      (BookingService.getAvailableTimeSlots as jest.Mock).mockResolvedValue([
        { time: '10:00', available: true },
        { time: '11:00', available: false },
        { time: '12:00', available: true },
      ]);
      
      await navigateToTimeSlotSelection();
      
      // Check ARIA attributes
      const timeSlots = screen.getAllByRole('radio', { name: /\d+:\d+/i });
      
      // Available time slots
      expect(timeSlots[0]).not.toHaveAttribute('aria-disabled', 'true');
      expect(timeSlots[0]).toHaveAttribute('aria-label', expect.stringMatching(/10:00.*available/i));
      
      // Unavailable time slot
      expect(timeSlots[1]).toHaveAttribute('aria-disabled', 'true');
      expect(timeSlots[1]).toHaveAttribute('aria-label', expect.stringMatching(/11:00.*unavailable/i));
    });
  });

  describe('Client Information Step', () => {
    // Helper to navigate to client info step
    const navigateToClientInfoStep = async () => {
      renderBookingFlow();
      
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
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
    };
    
    it('should allow keyboard navigation through form fields', async () => {
      await navigateToClientInfoStep();
      
      // Focus should start on first form field
      const nameInput = screen.getByLabelText(/full name/i);
      nameInput.focus();
      expect(document.activeElement).toBe(nameInput);
      
      // Fill form using keyboard
      userEvent.type(nameInput, 'John Doe');
      
      // Tab to next field
      userEvent.tab();
      const emailInput = screen.getByLabelText(/email/i);
      expect(document.activeElement).toBe(emailInput);
      userEvent.type(emailInput, 'john@example.com');
      
      // Tab to next field
      userEvent.tab();
      const phoneInput = screen.getByLabelText(/phone/i);
      expect(document.activeElement).toBe(phoneInput);
      userEvent.type(phoneInput, '555-123-4567');
      
      // Tab to checkbox for terms and conditions
      userEvent.tab();
      userEvent.tab();
      const termsCheckbox = screen.getByRole('checkbox', { name: /terms/i });
      expect(document.activeElement).toBe(termsCheckbox);
      
      // Check the box with Space
      userEvent.keyboard(' ');
      expect(termsCheckbox).toBeChecked();
      
      // Tab to next button
      userEvent.tab();
      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(document.activeElement).toBe(nextButton);
      
      // Press Enter to continue
      userEvent.keyboard('{Enter}');
      
      // Should navigate to confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
    });
    
    it('should properly link labels and form fields', async () => {
      await navigateToClientInfoStep();
      
      // Check for proper label/input association
      const nameLabel = screen.getByText(/full name/i);
      const nameInput = screen.getByLabelText(/full name/i);
      
      expect(nameLabel).toHaveAttribute('for', nameInput.id);
      
      // Check that clicking on label focuses input
      userEvent.click(nameLabel);
      expect(document.activeElement).toBe(nameInput);
    });
    
    it('should announce validation errors to screen readers', async () => {
      await navigateToClientInfoStep();
      
      // Get the name input but don't fill it in
      const nameInput = screen.getByLabelText(/full name/i);
      nameInput.focus();
      
      // Tab away to trigger validation
      userEvent.tab();
      
      // Check that error message is properly associated with input
      await waitFor(() => {
        const errorMessage = screen.getByText(/name is required/i);
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveAttribute('id', expect.stringMatching(/error/i));
        expect(nameInput).toHaveAttribute('aria-describedby', errorMessage.id);
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
      });
    });
  });

  describe('Confirmation Step', () => {
    // Helper to navigate to confirmation step
    const navigateToConfirmationStep = async () => {
      renderBookingFlow();
      
      // Select service
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      const serviceOption = screen.getByText(/massage therapy/i);
      userEvent.click(serviceOption);
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      // Select date
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      const dateOption = screen.getByText(/august 15/i);
      userEvent.click(dateOption);
      
      // Select time
      await waitFor(() => {
        expect(screen.getByTestId('time-slot-selection')).toBeInTheDocument();
      });
      const timeSlot = screen.getByText(/10:00/i);
      userEvent.click(timeSlot);
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      // Fill client info
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
      userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      userEvent.type(screen.getByLabelText(/phone/i), '555-123-4567');
      userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));
      
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
    };
    
    it('should allow keyboard navigation through payment options', async () => {
      await navigateToConfirmationStep();
      
      // Find payment method radio buttons
      const paymentOptions = screen.getAllByRole('radio', { name: /credit card|pay later/i });
      expect(paymentOptions.length).toBeGreaterThan(0);
      
      // Focus first option
      paymentOptions[0].focus();
      expect(document.activeElement).toBe(paymentOptions[0]);
      
      // Select with Space
      userEvent.keyboard(' ');
      expect(paymentOptions[0]).toBeChecked();
      
      // Tab to cancel policy checkbox
      userEvent.tab();
      userEvent.tab();
      userEvent.tab();
      const cancelCheckbox = screen.getByRole('checkbox', { name: /cancellation policy/i });
      expect(document.activeElement).toBe(cancelCheckbox);
      
      // Check it with Space
      userEvent.keyboard(' ');
      expect(cancelCheckbox).toBeChecked();
      
      // Tab to confirm button
      userEvent.tab();
      const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
      expect(document.activeElement).toBe(confirmButton);
    });
    
    it('should make booking summary accessible via keyboard', async () => {
      await navigateToConfirmationStep();
      
      // Check summary is accessible
      const summary = screen.getByTestId('booking-summary');
      expect(summary).toHaveAttribute('tabIndex', '0');
      
      // Should be focusable
      summary.focus();
      expect(document.activeElement).toBe(summary);
    });
    
    it('should have properly structured headings for screen readers', async () => {
      await navigateToConfirmationStep();
      
      // Check heading structure
      const mainHeading = screen.getByRole('heading', { name: /confirmation/i, level: 2 });
      expect(mainHeading).toBeInTheDocument();
      
      // Subheadings should be h3
      const subHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(subHeadings.length).toBeGreaterThan(0);
      
      // Summary heading
      const summaryHeading = screen.getByRole('heading', { name: /booking summary/i });
      expect(summaryHeading).toBeInTheDocument();
      
      // Payment heading
      const paymentHeading = screen.getByRole('heading', { name: /payment method/i });
      expect(paymentHeading).toBeInTheDocument();
    });
  });

  describe('Global Keyboard Navigation', () => {
    it('should handle Escape key to close error messages', async () => {
      renderBookingFlow();
      
      // Force an error
      (BookingService.getAvailableServices as jest.Mock).mockRejectedValueOnce(
        new Error('Failed to load services')
      );
      
      await waitFor(() => {
        expect(screen.getByText(/failed to load services/i)).toBeInTheDocument();
      });
      
      // Error message should have focus
      const errorMessage = screen.getByTestId('error-message');
      expect(errorMessage).toBeInTheDocument();
      
      // Press Escape
      userEvent.keyboard('{Escape}');
      
      // Error should be dismissed
      await waitFor(() => {
        expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
      });
    });
    
    it('should provide skip link for keyboard users', async () => {
      renderBookingFlow();
      
      // Tab should first hit skip link
      userEvent.tab();
      const skipLink = screen.getByText(/skip to main content/i);
      expect(document.activeElement).toBe(skipLink);
      
      // Activate it
      userEvent.keyboard('{Enter}');
      
      // Focus should move to main content
      const mainContent = screen.getByRole('main');
      expect(document.activeElement).toBe(mainContent);
    });
    
    it('should have logical tab order through the entire flow', async () => {
      renderBookingFlow();
      
      await waitFor(() => {
        expect(screen.getByText(/massage therapy/i)).toBeInTheDocument();
      });
      
      // Start tabbing and track elements that receive focus
      const focusedElements: Element[] = [];
      
      // Set up focus tracking
      const originalFocus = HTMLElement.prototype.focus;
      HTMLElement.prototype.focus = function() {
        focusedElements.push(this);
        return originalFocus.apply(this);
      };
      
      // Press tab multiple times
      userEvent.tab(); // Skip link
      userEvent.tab(); // Header element
      userEvent.tab(); // Step indicator
      userEvent.tab(); // First service option
      userEvent.tab(); // Second service option
      userEvent.tab(); // Back button
      userEvent.tab(); // Next button
      
      // Restore original focus method
      HTMLElement.prototype.focus = originalFocus;
      
      // Verify tab order - elements should include critical navigation components
      expect(focusedElements.some(el => el.textContent?.includes('Skip'))).toBe(true);
      expect(focusedElements.some(el => el.getAttribute('role') === 'radio')).toBe(true);
      expect(focusedElements.some(el => el.textContent?.includes('Next'))).toBe(true);
      
      // Check that the tab order followed a logical sequence (top to bottom, left to right)
      const isInLogicalOrder = focusedElements.every((el, i) => {
        if (i === 0) return true;
        const prevRect = focusedElements[i-1].getBoundingClientRect();
        const currRect = el.getBoundingClientRect();
        
        // Either below or to the right of the previous element
        return currRect.top >= prevRect.top || 
               (currRect.top === prevRect.top && currRect.left >= prevRect.left);
      });
      
      expect(isInLogicalOrder).toBe(true);
    });
  });
}); 











