import * as React from 'react';;
import { useRef, useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { PHI, SACRED_SPACING, FIBONACCI, SACRED_RADIUS } from '@constants/sacred-geometry';
import { Box } from '@design-system/components/layout/Box';
import { Flex } from '@design-system/components/layout/Flex';
import { Grid, GridItem } from '@design-system/components/layout/Grid';
import { BookingStepId } from '@types/booking.types';
import { useBooking } from '@context/BookingContext';
import { BookingStepper } from './BookingStepper';
import { BookingNavigation } from './BookingNavigation';
import { LoadingOverlay } from '@design-system/components/feedback/LoadingOverlay';
import { ErrorDisplay } from '@design-system/components/feedback/ErrorDisplay';
import { ServiceSelectionStep } from './steps/ServiceSelectionStep';
import { DateSelectionStep } from './steps/DateSelectionStep';
import { ClientInfoStep } from './steps/ClientInfoStep';
import { ConfirmationStep } from './steps/ConfirmationStep';
import { BOOKING_STEPS } from '@constants/booking.constants';
import { BotanicalBackground } from '@design-system/botanical/BotanicalBackground';
import { useBreakpointValue } from '@hooks/useBreakpointValue';
import { ErrorMessage } from '@design-system/components/feedback/ErrorMessage';
import { BookingNavControls } from './BookingNavControls';
import { Global, css } from '@emotion/react';
import { VisuallyHidden } from '@design-system/components/utils/VisuallyHidden';
import { getFibonacciByIndex } from '@utils/getFibonacciByIndex';

// Import validation schemas
import {
  validateServiceSelection,
  ServiceSelectionData,
  serviceSelectionDefaultValues,
  validateDateSelection,
  DateSelectionData,
  dateSelectionDefaultValues,
  validateClientInfo,
  ClientInfoData,
  clientInfoDefaultValues
} from './validation';

// Import UI components
import { BookingControls } from './BookingControls';
import { ProgressIndicator } from './ProgressIndicator';

/**
 * Available services
 * This would normally come from an API
 */
const SERVICES = [
  {
    id: 'investment-fraud',
    title: 'Investment Fraud Recovery',
    description: 'Recovery assistance for victims of investment scams, Ponzi schemes, and securities fraud.',
    duration: '60 min',
  },
  {
    id: 'financial-misconduct',
    title: 'Financial Misconduct',
    description: 'Expert guidance for recovery from financial advisor misconduct and breach of fiduciary duty.',
    duration: '60 min',
  },
  {
    id: 'crypto-recovery',
    title: 'Cryptocurrency Recovery',
    description: 'Specialized recovery services for cryptocurrency theft, scams and fraudulent exchanges.',
    duration: '90 min',
  },
  {
    id: 'regulatory-complaint',
    title: 'Regulatory Complaint Assistance',
    description: 'Help with filing complaints to financial regulatory bodies like the FCA, BaFin, or SEC.',
    duration: '45 min',
  },
];

/**
 * Time slots generator function
 * This would normally come from an API
 * 
 * @param date The date to generate time slots for
 * @returns Array of time slots
 */
const getTimeSlots = (date: Date) => {
  // Simulate API call
  // In a real app, this would call an API to get available time slots
  const day = date.getDay();
  
  // No slots on weekends
  if (day === 0 || day === 6) {
    return [];
  }
  
  // Generate slots from 9 AM to 5 PM
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    // Create 2 slots per hour (top and bottom of the hour)
    ['00', '30'].forEach((minutes, index) => {
      slots.push({
        id: `${date.toDateString()}-${hour}-${minutes}`,
        time: `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`,
        // Simulate some slots being unavailable
        available: Math.random() > 0.3,
      });
    });
  }
  
  return slots;
};

/**
 * Booking step names
 */
enum BookingStep {
  SERVICE_SELECTION = 0,
  DATE_SELECTION = 1,
  CLIENT_INFO = 2,
  CONFIRMATION = 3,
}

/**
 * Interface for all booking form data
 */
interface BookingFormData {
  serviceSelection: ServiceSelectionData;
  dateSelection: DateSelectionData;
  clientInfo: ClientInfoData;
}

/**
 * Props for the BookingInterface component
 */
interface BookingInterfaceProps {
  onSubmit?: (data: BookingFormData) => void;
}

// Styled components for the booking interface
interface BookingContainerProps {
  maxWidth?: string | number;
  theme?: any;
}

const BookingContainer = styled(Box)<BookingContainerProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || '100%'};
  margin: 0 auto;
  position: relative;
`;

interface BookingHeaderProps {
  theme: DefaultTheme;
}

const BookingHeader = styled(Box)<BookingHeaderProps>`
  padding: ${SACRED_SPACING.lg}px ${SACRED_SPACING.md}px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-bottom: 1px solid ${(props) => props.theme.colors.border.light};
`;

interface BookingContentProps {
  padding?: number;
  theme: DefaultTheme;
}

const BookingContent = styled(Box)<BookingContentProps>`
  padding: ${(props) => props.padding || SACRED_SPACING.md}px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: ${SACRED_RADIUS.md}px;
  position: relative;
  overflow: hidden;
`;

const StepTransition = styled(motion.div)`
  width: 100%;
`;

// Transition variants for step animations
const stepTransitionVariants = {
  initial: { 
    opacity: 0,
    x: 20,
    transition: { 
      duration: FIBONACCI[5] / 100, // 0.05s
      ease: [0, 0, 0.58, 1] // Sacred easing based on Golden Ratio
    }
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: FIBONACCI[7] / 100, // 0.13s
      ease: [0, 0, 0.58, 1]
    }
  },
  exit: { 
    opacity: 0,
    x: -20,
    transition: { 
      duration: FIBONACCI[6] / 100, // 0.08s
      ease: [0.42, 0, 1, 1]
    }
  }
};

// Global styles to prevent body scrolling when modal is open
const GlobalStyles = css`
  body.booking-modal-open {
    overflow: hidden;
  }
`;

/**
 * BookingInterface component
 * Main container for the booking flow
 * Handles responsive layout across device sizes with special attention to tablets
 * Ensures proper accessibility with focus management and screen reader announcements
 */
export const BookingInterface: React.FC = () => {
  const { 
    state, 
    goToStep, 
    goToNextStep,
    goToPreviousStep,
    fetchAvailableServices,
    resetForm,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource,
    submitBooking,
    selectedService,
    selectedDate,
    selectedTimeSlot,
    clientInfo,
    bookingComplete,
    bookingReference
  } = useBooking();
  
  const { currentStep } = state;
  
  // Ref for the main content area for focus management
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Screen reader announcements
  const [stepChangeAnnouncement, setStepChangeAnnouncement] = useState<string>('');
  
  // Get responsive values based on screen size
  const containerMaxWidth = useBreakpointValue({
    base: '100%',
    sm: '100%',
    md: `${PHI * 800}px`,
    lg: `${PHI * 900}px`,
    xl: `${PHI * 1000}px`
  });
  
  const contentPadding = useBreakpointValue({
    base: SACRED_SPACING.xs,
    sm: SACRED_SPACING.sm,
    md: SACRED_SPACING.md,
    lg: SACRED_SPACING.lg
  });
  
  // Use a special layout for tablets to prevent common layout issues
  const isTablet = useBreakpointValue({
    base: false,
    sm: true,
    lg: false
  });
  
  // Determine column layout based on screen size and step
  const useMultiColumnLayout = useBreakpointValue({
    base: false,
    md: currentStep === BookingStepId.DATE_SELECTION || currentStep === BookingStepId.CONFIRMATION,
    lg: currentStep !== BookingStepId.SUCCESS
  });
  
  // Initial data fetching
  React.useEffect(() => {
    fetchAvailableServices();
  }, [fetchAvailableServices]);
  
  // Handle retry after error
  const handleRetry = () => {
    fetchAvailableServices(true); // Force refresh
  };
  
  // Handle step navigation
  const handleNext = React.useCallback(() => {
    goToNextStep();
    
    // Set announcement for screen readers
    const nextStep = BOOKING_STEPS[currentStep + 1];
    if (nextStep) {
      setStepChangeAnnouncement(`Proceeding to ${nextStep.label} step`);
    }
    
    // Focus the main content area
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();
      }
    }, FIBONACCI[7]); // Small delay for animation
  }, [currentStep, goToNextStep]);
  
  const handleBack = React.useCallback(() => {
    goToPreviousStep();
    
    // Set announcement for screen readers
    const prevStep = BOOKING_STEPS[currentStep - 1];
    if (prevStep) {
      setStepChangeAnnouncement(`Returning to ${prevStep.label} step`);
    }
    
    // Focus the main content area
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();
      }
    }, FIBONACCI[7]); // Small delay for animation
  }, [currentStep, goToPreviousStep]);
  
  // Handle form submission
  const handleSubmit = React.useCallback(async (formData: any) => {
    if (currentStep === BookingStepId.CONFIRMATION) {
      try {
        // We should have service, date, time, and client info at this point
        if (selectedService && selectedDate && selectedTimeSlot && clientInfo) {
          // Create combined data for submission
          const serviceData = {
            serviceId: selectedService.id,
            date: selectedDate
          };
          
          // Submit the booking
          await submitBooking(serviceData, clientInfo, formData);
          
          // Announce completion for screen readers
          setStepChangeAnnouncement('Booking completed successfully');
        }
      } catch (error) {
        console.error('Booking submission failed:', error);
      }
    }
  }, [currentStep, selectedService, selectedDate, selectedTimeSlot, clientInfo, submitBooking]);
  
  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case BookingStepId.SERVICE_SELECTION:
        return <ServiceSelectionStep onNext={handleNext} />;
      
      case BookingStepId.DATE_SELECTION:
        return <DateSelectionStep onNext={handleNext} onBack={handleBack} />;
      
      case BookingStepId.CLIENT_INFORMATION:
        return <ClientInfoStep onNext={handleNext} onBack={handleBack} />;
      
      case BookingStepId.CONFIRMATION:
        return <ConfirmationStep onSubmit={handleSubmit} onBack={handleBack} />;
      
      case BookingStepId.SUCCESS:
        return (
          <Box textAlign="center">
            <h2>Booking Successful!</h2>
            <p>Your booking has been confirmed. Reference: {bookingReference}</p>
            {/* Add additional confirmation details here */}
          </Box>
        );
      
      default:
        return <div>Unknown step</div>;
    }
  };
  
  // Determine if we have any API errors
  const hasAnyApiError = hasApiError();
  const serviceError = getApiErrorForResource('services');
  const isLoadingServices = isResourceLoading('services');
  
  return (
    <>
      <Global styles={GlobalStyles} />
      <BookingContainer maxWidth={containerMaxWidth}>
        {/* Screen reader announcements */}
        <VisuallyHidden aria-live="polite" aria-atomic="true">
          {stepChangeAnnouncement}
        </VisuallyHidden>
        
        {/* Background botanical elements */}
        <BotanicalBackground />
        
        {/* Booking header with steps */}
        <BookingHeader>
          <BookingStepper 
            currentStep={currentStep} 
            steps={Object.values(BOOKING_STEPS)} 
            completedSteps={state.completedSteps}
          />
        </BookingHeader>
        
        {/* Main content area */}
        <BookingContent 
          padding={contentPadding} 
          role="main" 
          aria-label="Booking form" 
          tabIndex={-1}
          ref={contentRef}
        >
          {/* Loading and error states */}
          {isLoadingServices && !hasAnyApiError && (
            <LoadingOverlay message="Loading services..." />
          )}
          
          {hasAnyApiError && (
            <ErrorDisplay
              title="Error loading booking data"
              message={serviceError || "There was a problem loading the booking system."}
              onRetry={handleRetry}
            />
          )}
          
          {/* Step content with transitions */}
          {!hasAnyApiError && !isLoadingServices && (
            <Grid 
              templateColumns={useMultiColumnLayout ? 'repeat(2, 1fr)' : '1fr'} 
              gap={SACRED_SPACING.lg}
            >
              <GridItem colSpan={useMultiColumnLayout ? 1 : 2}>
                <AnimatePresence mode="wait">
                  <StepTransition 
                    key={`step-${currentStep}`}
                    variants={stepTransitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {renderStepContent()}
                  </StepTransition>
                </AnimatePresence>
              </GridItem>
              
              {useMultiColumnLayout && (
                <GridItem colSpan={1}>
                  {/* Additional content for larger screens */}
                  {/* This could be a summary, help text, etc. */}
                  <Box 
                    padding={SACRED_SPACING.md} 
                    backgroundColor="rgba(255, 255, 255, 0.5)"
                    borderRadius={SACRED_RADIUS.md}
                  >
                    <h3>Booking Summary</h3>
                    {selectedService && (
                      <p>Service: {selectedService.name}</p>
                    )}
                    {selectedDate && (
                      <p>Date: {new Date(selectedDate).toLocaleDateString()}</p>
                    )}
                    {selectedTimeSlot && (
                      <p>Time: {new Date(selectedTimeSlot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    )}
                    {/* Add more summary items here */}
                  </Box>
                </GridItem>
              )}
            </Grid>
          )}
        </BookingContent>
        
        {/* Bottom navigation controls */}
        {!hasAnyApiError && !isLoadingServices && !bookingComplete && (
          <BookingNavigation currentStepId={currentStep} />
        )}
      </BookingContainer>
    </>
  );
};

export default BookingInterface; 
















