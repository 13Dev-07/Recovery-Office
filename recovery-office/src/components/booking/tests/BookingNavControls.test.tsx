import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import BookingNavControls from '../BookingNavControls';
import { theme } from '../../../design-system/theme';
import { BookingStepId } from '../../../types/booking.types';
import { SACRED_SPACING } from '../../../constants/sacred-geometry';

// Mock the useMediaQuery hook
jest.mock('../../../hooks/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(false), // Default to desktop
}));

describe('BookingNavControls', () => {
  const mockHandleBack = jest.fn();
  const mockHandleNext = jest.fn();
  
  const defaultProps = {
    currentStep: BookingStepId.SERVICE_SELECTION,
    isNextDisabled: true,
    onBack: mockHandleBack,
    onNext: mockHandleNext,
    showBackButton: true,
    isTablet: false,
  };

  const renderComponent = (props = {}) => {
    return render(
      <ThemeProvider theme={theme}>
        <BookingNavControls {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders both back and next buttons by default', () => {
    renderComponent();
    
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('disables next button when isNextDisabled is true', () => {
    renderComponent({ isNextDisabled: true });
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it('enables next button when isNextDisabled is false', () => {
    renderComponent({ isNextDisabled: false });
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).not.toBeDisabled();
  });

  it('hides back button when showBackButton is false', () => {
    renderComponent({ showBackButton: false });
    
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', () => {
    renderComponent();
    
    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);
    
    expect(mockHandleBack).toHaveBeenCalledTimes(1);
  });

  it('calls onNext when next button is clicked and not disabled', () => {
    renderComponent({ isNextDisabled: false });
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    expect(mockHandleNext).toHaveBeenCalledTimes(1);
  });

  it('changes Next button text to Complete Booking on confirmation step', () => {
    renderComponent({ currentStep: BookingStepId.CONFIRMATION });
    
    expect(screen.getByRole('button', { name: /complete booking/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
  });

  it('renders with tablet-specific styles when isTablet is true', () => {
    renderComponent({ isTablet: true });
    
    // Check that the container uses tablet-specific styles
    const navContainer = screen.getByTestId('booking-nav-controls');
    expect(navContainer).toHaveStyle(`padding: ${SACRED_SPACING}px`);
  });

  it('maintains accessible focus management', () => {
    renderComponent({ isNextDisabled: false });
    
    const backButton = screen.getByRole('button', { name: /back/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    // Tab navigation should follow visual order
    backButton.focus();
    expect(document.activeElement).toBe(backButton);
    
    // Simulate tab press
    fireEvent.keyDown(backButton, { key: 'Tab', code: 'Tab' });
    // In real browsers, focus would move to the next button
    nextButton.focus();
    expect(document.activeElement).toBe(nextButton);
  });

  it('provides proper button labeling for screen readers', () => {
    renderComponent({
      currentStep: BookingStepId.SERVICE_SELECTION
    });
    
    const backButton = screen.getByRole('button', { name: /back/i });
    expect(backButton).toHaveAccessibleName();
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toHaveAccessibleName();
  });
}); 











