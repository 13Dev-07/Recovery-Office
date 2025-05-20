import * as React from 'react';
import Flex from '../../design-system/components/layout/Flex';
import { Box } from '../../design-system/components/layout/Box';
import { Button } from '../../design-system/components/button/Button';
import { useBooking } from '../../context/BookingContext';
import { BookingStepId } from '../../types/booking.types';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SACRED_SPACING } from '../../constants/sacred-geometry';
import { useBookingStepValidation } from '../../hooks/useBookingStepValidation';

interface BookingNavigationProps {
  currentStepId: BookingStepId;
}

/**
 * BookingNavigation component
 * Handles navigation between booking steps with built-in validation
 * Follows the sacred geometry principles for spacing and layout
 */
export const BookingNavigation: React.FC<BookingNavigationProps> = ({ currentStepId }) => {
  const bookingContext = useBooking();
  const { goToStep, goToNextStep, goToPreviousStep, state } = bookingContext;
  const { isCurrentStepValid, validateCurrentStep } = useBookingStepValidation();
  
  // Use loadingState from the context
  const isLoading = (resource: string): boolean => 
    bookingContext.isResourceLoading(resource as any);
  
  // Determine if we can go to next step
  const canGoToNextStep = isCurrentStepValid();
  
  // Determine if next button should be disabled
  const isNextButtonDisabled = !canGoToNextStep;
  
  // Determine if next button should show loading state
  const isNextButtonLoading = 
    (currentStepId === BookingStepId.SERVICE_SELECTION && isLoading('dates')) ||
    (currentStepId === BookingStepId.DATE_SELECTION && isLoading('timeSlots')) ||
    (currentStepId === BookingStepId.CONFIRMATION && (isLoading('paymentIntent') || isLoading('booking')));
  
  // Get next button text based on current step
  const getNextButtonText = () => {
    switch (currentStepId) {
      case BookingStepId.SERVICE_SELECTION:
        return 'Select Date';
      case BookingStepId.DATE_SELECTION:
        return 'Continue to Details';
      case BookingStepId.CLIENT_INFORMATION:
        return 'Review & Confirm';
      case BookingStepId.CONFIRMATION:
        return 'Complete Booking';
      default:
        return 'Next';
    }
  };
  
  // Handle next button click
  const handleNextClick = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      goToNextStep();
    }
  };
  
  // Handle back button click
  const handleBackClick = () => {
    goToPreviousStep();
  };
  
  // Determine if we should show the back button
  const showBackButton = currentStepId !== BookingStepId.SERVICE_SELECTION;
  
  return (
    <Flex 
      width="100%" 
      justifyContent="space-between"
      style={{
        marginTop: `${SACRED_SPACING.xl}px`,
        paddingLeft: `${SACRED_SPACING.md}px`,
        paddingRight: `${SACRED_SPACING.md}px`
      }}
    >
      <Box>
        {showBackButton && (
          <Button
            variant="outline"
            leftIcon={<FiArrowLeft />}
            onClick={handleBackClick}
            disabled={isNextButtonLoading}
          >
            Back
          </Button>
        )}
      </Box>
      
      <Button
        rightIcon={<FiArrowRight />}
        onClick={handleNextClick}
        isLoading={isNextButtonLoading}
        disabled={isNextButtonDisabled || isNextButtonLoading}
      >
        {getNextButtonText()}
      </Button>
    </Flex>
  );
}; 













