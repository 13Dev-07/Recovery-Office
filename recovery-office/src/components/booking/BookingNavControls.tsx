import * as React from 'react';
import { Box, Flex } from '@design-system/components/layout/Box';
import { Button } from '@design-system/components/button/Button';
import { BookingStepId } from '@types/booking.types';

import { BotanicalIcon } from '@design-system/botanical/BotanicalIcon';
import { useBreakpointValue } from '@hooks/useBreakpointValue';

interface BookingNavControlsProps {
  currentStep: BookingStepId;
  canGoBack: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

/**
 * BookingNavControls Component
 * 
 * Provides navigation controls for moving between booking steps
 * Adapts buttons and layout based on device size and current step
 * Implements responsive design with optimal UX for each breakpoint
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
export const BookingNavControls: React.FC<BookingNavControlsProps> = ({
  currentStep,
  canGoBack,
  canGoNext,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting
}) => {
  // Get responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const spacing = useBreakpointValue({ 
    base: SACRED_SPACING.md, 
    md: SACRED_SPACING.lg 
  });
  
  // Determine if this is the final step
  const isFinalStep = currentStep === BookingStepId.CONFIRMATION;
  
  // Get button text based on current step
  const getNextButtonText = () => {
    if (isFinalStep) {
      return 'Confirm Booking';
    }
    
    switch (currentStep) {
      case BookingStepId.SERVICE_SELECTION:
        return 'Select Date & Time';
      case BookingStepId.DATE_SELECTION:
        return 'Enter Your Information';
      case BookingStepId.CLIENT_INFORMATION:
        return 'Review & Pay';
      default:
        return 'Next';
    }
  };
  
  // Get back button text
  const getBackButtonText = () => {
    switch (currentStep) {
      case BookingStepId.DATE_SELECTION:
        return 'Change Service';
      case BookingStepId.CLIENT_INFORMATION:
        return 'Change Date & Time';
      case BookingStepId.CONFIRMATION:
        return 'Edit Information';
      default:
        return 'Back';
    }
  };
  
  // Get ARIA labels for buttons to improve screen reader experience
  const getNextButtonAriaLabel = () => {
    if (isFinalStep) {
      return 'Confirm booking and complete reservation';
    }
    
    switch (currentStep) {
      case BookingStepId.SERVICE_SELECTION:
        return 'Continue to date and time selection';
      case BookingStepId.DATE_SELECTION:
        return 'Continue to enter your personal information';
      case BookingStepId.CLIENT_INFORMATION:
        return 'Continue to review booking and payment';
      default:
        return 'Continue to next step';
    }
  };
  
  const getBackButtonAriaLabel = () => {
    switch (currentStep) {
      case BookingStepId.DATE_SELECTION:
        return 'Go back to service selection';
      case BookingStepId.CLIENT_INFORMATION:
        return 'Go back to date and time selection';
      case BookingStepId.CONFIRMATION:
        return 'Go back to edit your information';
      default:
        return 'Go back to previous step';
    }
  };
  
  // Handle next button click
  const handleNextClick = () => {
    if (isFinalStep) {
      onSubmit();
    } else {
      onNext();
    }
  };
  
  return (
    <Box 
      pt={SACRED_SPACING.lg} 
      borderTop={`${1}px solid`} 
      borderTopColor="divider"
      role="navigation"
      aria-label="Booking navigation controls"
    >
      <Flex 
        justifyContent="space-between" 
        alignItems="center"
        flexDirection={isMobile ? 'column' : 'row'}
        gap={spacing}
      >
        {/* Back button */}
        {canGoBack ? (
          <Button
            variant="outline"
            size={buttonSize}
            onClick={onPrevious}
            leftIcon={<BotanicalIcon name="arrowLeft" size="sm" />}
            width={isMobile ? '100%' : 'auto'}
            order={isMobile ? 2 : 1}
            aria-label={getBackButtonAriaLabel()}
          >
            {getBackButtonText()}
          </Button>
        ) : (
          <Box aria-hidden="true" /> // Empty spacer for layout when back button is hidden
        )}
        
        {/* Next/Submit button */}
        <Button
          variant="primary"
          size={buttonSize}
          onClick={handleNextClick}
          isDisabled={!canGoNext}
          isLoading={isFinalStep && isSubmitting}
          loadingText="Processing..."
          rightIcon={!isFinalStep && <BotanicalIcon name="arrowRight" size="sm" />}
          width={isMobile ? '100%' : 'auto'}
          order={isMobile ? 1 : 2}
          aria-label={getNextButtonAriaLabel()}
        >
          {getNextButtonText()}
        </Button>
      </Flex>
    </Box>
  );
}; 













