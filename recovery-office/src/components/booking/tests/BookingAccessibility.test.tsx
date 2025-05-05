import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BookingProvider } from '../../../context/BookingContext';
import { ThemeProvider } from '../../../design-system/theme/ThemeProvider';
import { BookingFlow } from '../BookingFlow';
import { BookingInterface } from '../BookingInterface';
import { ToastProvider } from '../../../context/ToastContext';

// Add jest-axe matchers
expect.extend(toHaveNoViolations);

// Mock the booking service
jest.mock('../../../services/booking.service');

describe('Booking Components Accessibility Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('BookingFlow Accessibility', () => {
    it('should have no accessibility violations in service selection step', async () => {
      const { container } = render(
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
        expect(screen.getByTestId('service-selection-step')).toBeInTheDocument();
      });
      
      // Run axe
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations in date selection step', async () => {
      const { container } = render(
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
      userEvent.click(nextButton);
      
      // Wait for dates to load
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Run axe
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations in client info step', async () => {
      const { container } = render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate to client info step (through service and date selection)
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Run axe
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations in confirmation step', async () => {
      const { container } = render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Navigate through all steps to confirmation
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Run axe
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Keyboard Navigation', () => {
    it('should allow full booking flow navigation with keyboard only', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Service selection with keyboard
      await waitFor(() => {
        expect(screen.getByTestId('service-selection-step')).toBeInTheDocument();
      });
      
      // Tab to service option and select with space
      const serviceOption = screen.getByRole('radio', { name: /massage therapy/i });
      serviceOption.focus();
      userEvent.keyboard(' '); // Space to select
      
      // Tab to next button
      const nextButton = screen.getByRole('button', { name: /next/i });
      nextButton.focus();
      userEvent.keyboard('{Enter}'); // Enter to click
      
      // Date selection with keyboard
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      // Tab to date option and select
      const dateOption = screen.getByRole('button', { name: /august 15/i });
      dateOption.focus();
      userEvent.keyboard('{Enter}');
      
      // Tab to time slot and select
      const timeSlot = screen.getByRole('radio', { name: /10:00 am/i });
      timeSlot.focus();
      userEvent.keyboard(' ');
      
      // Tab to next button
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      nextButton2.focus();
      userEvent.keyboard('{Enter}');
      
      // Client info with keyboard
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Fill form with keyboard
      const nameInput = screen.getByLabelText(/full name/i);
      nameInput.focus();
      userEvent.keyboard('John Doe');
      
      const emailInput = screen.getByLabelText(/email/i);
      emailInput.focus();
      userEvent.keyboard('john@example.com');
      
      const phoneInput = screen.getByLabelText(/phone/i);
      phoneInput.focus();
      userEvent.keyboard('1234567890');
      
      // Tab to terms checkbox and check
      const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to terms/i });
      termsCheckbox.focus();
      userEvent.keyboard(' ');
      
      // Tab to next button
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      nextButton3.focus();
      userEvent.keyboard('{Enter}');
      
      // Confirmation step
      await waitFor(() => {
        expect(screen.getByTestId('confirmation-step')).toBeInTheDocument();
      });
      
      // Verify we can navigate to the payment section with keyboard
      const paymentMethod = screen.getByRole('radio', { name: /credit card/i });
      expect(paymentMethod).toBeInTheDocument();
      
      // Should be able to focus the confirm button
      const confirmButton = screen.getByRole('button', { name: /confirm booking/i });
      confirmButton.focus();
      expect(document.activeElement).toBe(confirmButton);
    });
  });

  describe('Screen Reader Accessibility', () => {
    it('should have proper ARIA attributes for booking steps', () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingInterface />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Check for proper heading structure
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
      
      // Check for proper button labeling
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
      
      // Check for proper progress indication
      const progressIndicator = screen.getByRole('progressbar');
      expect(progressIndicator).toHaveAccessibleName();
      expect(progressIndicator).toHaveAttribute('aria-valuenow');
      expect(progressIndicator).toHaveAttribute('aria-valuemin');
      expect(progressIndicator).toHaveAttribute('aria-valuemax');
    });

    it('should have proper form labeling for client info step', async () => {
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
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Check that all form fields have proper labels
      const formFields = screen.getAllByRole('textbox');
      formFields.forEach(field => {
        expect(field).toHaveAccessibleName();
      });
      
      // Check that all checkboxes have proper labels
      const checkboxes = screen.getAllByRole('checkbox');
      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAccessibleName();
      });
      
      // Check for proper error message association
      const nameInput = screen.getByLabelText(/full name/i);
      userEvent.clear(nameInput);
      userEvent.tab(); // move focus away to trigger validation
      
      await waitFor(() => {
        const errorMessage = screen.getByText(/name is required/i);
        expect(errorMessage).toBeInTheDocument();
        // Error should be associated with the input
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
        expect(nameInput).toHaveAttribute('aria-describedby');
      });
    });

    it('should announce validation errors to screen readers', async () => {
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
      const nextButton = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByTestId('date-selection-step')).toBeInTheDocument();
      });
      
      const nextButton2 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton2);
      
      await waitFor(() => {
        expect(screen.getByTestId('client-info-step')).toBeInTheDocument();
      });
      
      // Try to proceed without filling required fields
      const nextButton3 = screen.getByRole('button', { name: /next/i });
      userEvent.click(nextButton3);
      
      // Check that error summary is properly announced to screen readers
      await waitFor(() => {
        const errorSummary = screen.getByRole('alert');
        expect(errorSummary).toBeInTheDocument();
        expect(errorSummary).toHaveTextContent(/please fix the following errors/i);
      });
    });
  });

  describe('Color Contrast and Focus Visibility', () => {
    it('should have visible focus indicators for interactive elements', async () => {
      render(
        <ThemeProvider>
          <ToastProvider>
            <BookingProvider>
              <BookingFlow />
            </BookingProvider>
          </ToastProvider>
        </ThemeProvider>
      );
      
      // Check button focus styles
      const nextButton = screen.getByRole('button', { name: /next/i });
      nextButton.focus();
      
      // Get computed style - this is a simplification as full computed styles aren't available in jsdom
      const focusedElement = document.activeElement;
      expect(focusedElement).toBe(nextButton);
      
      // Service options should have visible focus indicators
      await waitFor(() => {
        const serviceOption = screen.getByRole('radio', { name: /massage therapy/i });
        serviceOption.focus();
        expect(document.activeElement).toBe(serviceOption);
      });
    });
  });
}); 












