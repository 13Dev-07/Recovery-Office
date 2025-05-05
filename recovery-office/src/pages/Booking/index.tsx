import * as React from 'react';
import { useEffect } from 'react';;
import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading, Text, VStack } from '../design-system/components/layout/Box';
import { useBookingContext } from '../context/BookingContext';
import { BookingStepId } from '../types/booking.types';
import { ServiceSelectionStep } from "@components/booking/steps/ServiceSelectionStep";
import { DateSelectionStep } from "@components/booking/steps/DateSelectionStep";
import { ClientInformationStep } from "@components/booking/steps/ClientInformationStep";
import { ConfirmationStep } from "@components/booking/steps/ConfirmationStep";
import { SuccessStep } from "@components/booking/steps/SuccessStep";
import { BookingNavigation } from "@components/booking/BookingNavigation";
import { LoadingOverlay } from '../design-system/components/feedback/LoadingOverlay';
import { BookingStepper } from "@components/booking/BookingStepper";
import { BOOKING_STEPS } from "@constants/booking.constants";
import { SACRED_TIMING, PHI } from '../constants/sacred-geometry';
import { BotanicalBackground } from '../design-system/botanical/BotanicalBackground';
import { ErrorBoundary } from "@components/common/ErrorBoundary";
import { Button } from '../design-system/components/button/Button';
import { ErrorDisplay } from '../design-system/components/feedback/ErrorDisplay';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * BookingPage component
 * Primary booking interface that manages the booking flow
 * Integrates with BookingContext to handle state and API interactions
 */
const BookingPage: React.FC = () => {
  const { 
    state, 
    goToStep, 
    fetchAvailableServices,
    resetForm,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource
  } = useBookingContext();
  
  const router = useRouter();
  const { currentStep, loading } = state;
  
  // Initial data fetching
  useEffect(() => {
    // Fetch available services when the page loads
    fetchAvailableServices();
    
    // If there's a query parameter for step, go to that step
    const { step } = router.query;
    if (step && typeof step === 'string') {
      const stepId = parseInt(step, 10);
      if (!isNaN(stepId) && Object.values(BookingStepId).includes(stepId)) {
        goToStep(stepId as BookingStepId);
      }
    }
    
    // Clean up on unmount
    return () => {
      // Optional cleanup if needed when navigating away
    };
  }, [fetchAvailableServices, goToStep, router.query]);
  
  // Get active step data
  const activeStep = BOOKING_STEPS.find(step => step.id === currentStep);
  
  // Check if we're loading services
  const isServicesLoading = isResourceLoading('services');
  
  // Get API errors
  const serviceError = getApiErrorForResource('services');
  
  // Handle back to home
  const handleBackToHome = () => {
    router.push('/');
  };
  
  // Handle retry after error
  const handleRetry = () => {
    fetchAvailableServices(true); // Force refresh
  };
  
  // Handle reset booking
  const handleResetBooking = () => {
    resetForm();
    goToStep(BookingStepId.SERVICE_SELECTION);
  };
  
  // Determine which step component to render
  const renderStepComponent = () => {
    switch (currentStep) {
      case BookingStepId.SERVICE_SELECTION:
        return <ServiceSelectionStep />;
      case BookingStepId.DATE_SELECTION:
        return <DateSelectionStep />;
      case BookingStepId.CLIENT_INFORMATION:
        return <ClientInformationStep />;
      case BookingStepId.CONFIRMATION:
        return <ConfirmationStep />;
      case BookingStepId.SUCCESS:
        return <SuccessStep />;
      default:
        return <Text>Invalid step</Text>;
    }
  };

  return (
    <Box position="relative" minHeight="100vh" bg="background.page" overflow="hidden">
      {/* Botanical background with subtle animation */}
      <BotanicalBackground variant="light" animationSpeed={SACRED_TIMING.slow} />
      
      <Container 
        maxWidth={`${PHI * 800}px`} 
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 6 }}
      >
        <VStack spacing={8} width="100%">
          {/* Header */}
          <Box textAlign="center" width="100%">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="playfair"
              mb={4}
            >
              Book Your Appointment
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxWidth="800px" mx="auto">
              Find the healing you deserve with our expert practitioners.
              Each session is tailored to your unique needs.
            </Text>
          </Box>
          
          {/* Stepper - only show if not on success page */}
          {currentStep !== BookingStepId.SUCCESS && (
            <BookingStepper 
              steps={BOOKING_STEPS} 
              currentStepId={currentStep}
              onStepClick={goToStep}
            />
          )}
          
          {/* Main content */}
          <Box 
            width="100%" 
            bg="white" 
            borderRadius="md" 
            boxShadow="sm"
            p={{ base: 4, md: 8 }}
            position="relative"
          >
            {/* Show loading overlay when loading services */}
            {isServicesLoading && (
              <LoadingOverlay 
                message="Loading available services..." 
                isOpen={true}
              />
            )}
            
            {/* Display error message if API error occurred */}
            {hasApiError() && serviceError && (
              <ErrorDisplay
                title="Unable to load booking services"
                message={serviceError}
                actionItems={[
                  {
                    label: "Try Again",
                    onClick: handleRetry,
                    primary: true
                  },
                  {
                    label: "Return Home",
                    onClick: handleBackToHome,
                    primary: false
                  }
                ]}
              />
            )}
            
            {/* Show step content if no loading or error */}
            {!isServicesLoading && !hasApiError() && (
              <ErrorBoundary
                fallback={
                  <VStack spacing={6} my={8} textAlign="center">
                    <Text>We encountered an error. Please try again.</Text>
                    <Button onClick={handleResetBooking}>Restart Booking</Button>
                  </VStack>
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: SACRED_TIMING.fast / 1000,
                      ease: [0.25, 0.1, 0.25, 1.0] // Easing function based on sacred curves
                    }}
                    style={{ width: '100%' }}
                  >
                    {renderStepComponent()}
                  </motion.div>
                </AnimatePresence>
              </ErrorBoundary>
            )}
          </Box>
          
          {/* Navigation - only show if not loading and no error and not on success page */}
          {!isServicesLoading && !hasApiError() && currentStep !== BookingStepId.SUCCESS && (
            <BookingNavigation currentStepId={currentStep} />
          )}
          
          {/* Back to home button - only show on success page */}
          {currentStep === BookingStepId.SUCCESS && (
            <Button variant="outline" onClick={handleBackToHome}>
              Return to Home
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default BookingPage; 







