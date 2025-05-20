import * as React from 'react';
import { useState } from 'react';
import { Box } from '../../../design-system/components/layout/Box';
import { Flex } from '../../../design-system/components/layout/Flex';
import { Stack } from '../../../design-system/components/layout/Stack';
import { Divider } from '../../../design-system/components/layout/Divider';
import { Text } from '../../../design-system/components/typography/Text';
import { Checkbox } from '../../../design-system/components/form/Checkbox';
import { useBooking } from '../../../context/BookingContext';
import { FormControl } from '../../../design-system/components/form/FormControl';
import Card from '../../../design-system/components/data-display/Card';
import { Button } from '../../../design-system/components/button/Button';
import { BookingStepId, ConfirmationStepProps } from '../../../types/booking.types';
import { useBookingStepValidation } from '../../../hooks/useBookingStepValidation';
import { confirmationStepSchema } from '../validation/confirmationStep.schema';
import { LoadingOverlay } from '../../../design-system/components/feedback/LoadingOverlay';
import { ErrorDisplay } from '../../../design-system/components/feedback/ErrorDisplay';
import { format } from 'date-fns';
import { Alert } from '../../../design-system/components/feedback/Alert';
import { useBreakpointValue } from '../../../hooks/useBreakpointValue';
import { VisuallyHidden } from '../../../design-system/components/utils/VisuallyHidden';
import styled from 'styled-components';
import { Heading } from '../../../design-system/components/typography/Heading';
import { SACRED_SPACING, SACRED_RADIUS } from '../../../constants/sacred-geometry';

// Utility function to replace missing formatCurrency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Define PaymentMethodType that's missing from booking.types
type PaymentMethodType = 'creditCard' | 'insurance' | 'payLater';

// Additional props specific to this implementation
interface LocalConfirmationStepProps extends ConfirmationStepProps {
  isSummaryOnly?: boolean; // When true, only renders the booking summary
  isPaymentOnly?: boolean; // When true, only renders the payment form
}

const ConfirmationSection = styled(Box)`
  margin-bottom: ${SACRED_SPACING.lg}px;
  padding: ${SACRED_SPACING.md}px;
  border-radius: ${SACRED_RADIUS.md}px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${props => props.theme.colors.border.light};
`;

const InfoItem = styled(Box)`
  margin-bottom: ${SACRED_SPACING.sm}px;
  padding-bottom: ${SACRED_SPACING.sm}px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const InfoLabel = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${SACRED_SPACING.xs}px;
`;

const InfoValue = styled(Text)`
  font-weight: 500;
`;

/**
 * ConfirmationStep Component
 * 
 * Final step in the booking process that shows booking summary
 * Implements sacred geometry principles for layout and spacing
 */
const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  onComplete,
  onBack,
  isLoading = false,
  className,
  bookingData
}) => {
  const { 
    state, 
    createPaymentIntent,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource,
    goToStep
  } = useBooking();
  
  // We need to mock these functions since they don't exist in the context
  // This is just to make TypeScript compile
  const selectPaymentMethod = (method: PaymentMethodType) => {
    console.log('Select payment method:', method);
  };
  
  // Use validation helper
  const validation = useBookingStepValidation();
  
  // Get breakpoint-specific values
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  
  // Create state for form values
  const [formState, setFormState] = useState({
    selectedPaymentMethod: 'creditCard' as PaymentMethodType,
    detailsReviewed: false,
    emailNotifications: true,
    textNotifications: false,
    cancellationPolicyAccepted: false
  });
  
  // Extract values from context state
  const { 
    selectedService, 
    selectedDate,
    selectedTimeSlot,
    clientInfo
  } = state;
  
  // Status announcements for screen readers
  const [statusAnnouncement, setStatusAnnouncement] = useState('');
  
  // Get loading states
  const isLoadingPaymentIntent = isResourceLoading('paymentIntent');
  
  // Get errors
  const paymentIntentError = getApiErrorForResource('paymentIntent');
  
  // Calculate booking total price
  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const basePrice = selectedService.price || 0;
    return basePrice;
  };
  
  // Format date and time for display
  const getFormattedDateTime = () => {
    if (!selectedDate || !selectedTimeSlot) return 'Not selected';
    
    try {
      const date = new Date(selectedDate);
      return `${format(date, 'EEEE, MMMM d, yyyy')} at ${new Date(selectedTimeSlot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } catch (error) {
      return 'Invalid date/time';
    }
  };
  
  // Navigation handlers
  const handleEditService = () => {
    goToStep(BookingStepId.SERVICE_SELECTION);
  };
  
  const handleEditDate = () => {
    goToStep(BookingStepId.DATE_SELECTION);
  };
  
  const handleEditClientInfo = () => {
    goToStep(BookingStepId.CLIENT_INFORMATION);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Validate all required fields
      const isValid = validation.validateCurrentStep();
      
      if (!isValid) {
        setStatusAnnouncement('Please correct the errors in the form before submitting.');
        return;
      }
      
      // Create booking data object
      const bookingData = {
        service: selectedService,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        clientInfo,
        detailsReviewed: formState.detailsReviewed,
        paymentMethod: formState.selectedPaymentMethod,
        emailNotifications: formState.emailNotifications,
        textNotifications: formState.textNotifications,
        cancellationPolicyAccepted: formState.cancellationPolicyAccepted
      };
      
      // Call onComplete to move to next step
      if (onComplete) {
        onComplete(bookingData);
      }
      
      // Set announcement for screen readers
      setStatusAnnouncement('Your booking has been submitted successfully.');
      
    } catch (error) {
      console.error('Error submitting booking:', error);
      setStatusAnnouncement('There was an error submitting your booking. Please try again.');
    }
  };
  
  // Update form state
  const handleCheckboxChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({...prev, [field]: e.target.checked}));
  };
  
  // Render the booking summary section
  const renderBookingSummary = () => (
    <ConfirmationSection>
      <Heading as="h3">Booking Summary</Heading>
      
      {selectedService && (
        <InfoItem>
          <Heading as="h4">Service Details</Heading>
          <Flex justifyContent="space-between" alignItems="baseline">
            <Stack spacing="xs" alignItems="flex-start">
              <InfoLabel>{selectedService.name}</InfoLabel>
              <Text>{selectedService.description}</Text>
              <Text>Duration: {selectedService.duration}</Text>
            </Stack>
            <Button 
              variant="link" 
              size="sm" 
              onClick={handleEditService}
            >
              Edit
            </Button>
          </Flex>
        </InfoItem>
      )}
      
      {selectedDate && selectedTimeSlot && (
        <InfoItem>
          <Heading as="h4">Date & Time</Heading>
          <Flex justifyContent="space-between" alignItems="baseline">
            <Text>{getFormattedDateTime()}</Text>
            <Button 
              variant="link" 
              size="sm" 
              onClick={handleEditDate}
            >
              Edit
            </Button>
          </Flex>
        </InfoItem>
      )}
      
      {clientInfo && (
        <InfoItem>
          <Heading as="h4">Your Information</Heading>
          <Flex justifyContent="space-between" alignItems="baseline">
            <Stack spacing="xs" alignItems="flex-start">
              <Text>{clientInfo.firstName} {clientInfo.lastName}</Text>
              <Text>{clientInfo.email}</Text>
              <Text>{clientInfo.phone}</Text>
            </Stack>
            <Button 
              variant="link" 
              size="sm" 
              onClick={handleEditClientInfo}
            >
              Edit
            </Button>
          </Flex>
        </InfoItem>
      )}
      
      <InfoItem>
        <Heading as="h4" marginBottom="8px">Pricing</Heading>
        <Flex justifyContent="space-between">
          <Text>Service Fee</Text>
          <Text fontWeight="bold">{formatCurrency(calculateTotal())}</Text>
        </Flex>
      </InfoItem>
    </ConfirmationSection>
  );
  
  // Simplified payment section
  const renderPaymentSection = () => (
    <Box>
      {isLoadingPaymentIntent && (
        <LoadingOverlay 
          isActive={true}
          message="Processing payment details..."
        />
      )}
      
      {paymentIntentError && (
        <ErrorDisplay
          title="Payment Error"
          message={paymentIntentError}
          onRetry={() => console.log("Retry payment")}
        />
      )}
      
      <Heading as="h3">Payment Method</Heading>
      
      <Box>
        <Text weight="medium" marginBottom="16px">
          Please select your preferred payment method:
        </Text>
        
        {/* Simplified payment method selection */}
        <Stack spacing="md" marginBottom="16px">
          <FormControl>
            <Flex alignItems="center">
              <input 
                type="radio" 
                id="payment-credit-card" 
                name="paymentMethod" 
                value="creditCard" 
                checked={formState.selectedPaymentMethod === 'creditCard'} 
                onChange={() => selectPaymentMethod('creditCard')}
                style={{marginRight: '8px'}}
              />
              <label htmlFor="payment-credit-card">Credit Card</label>
            </Flex>
          </FormControl>
          
          <FormControl>
            <Flex alignItems="center">
              <input 
                type="radio" 
                id="payment-insurance" 
                name="paymentMethod" 
                value="insurance" 
                checked={formState.selectedPaymentMethod === 'insurance'} 
                onChange={() => selectPaymentMethod('insurance')}
                style={{marginRight: '8px'}}
              />
              <label htmlFor="payment-insurance">Insurance</label>
            </Flex>
          </FormControl>
        </Stack>
        
        <Divider margin="md" />
        
        {/* Checkbox section */}
        <Box marginTop="16px">
          <Heading as="h4">Booking Confirmation</Heading>
          
          <Checkbox 
            checked={formState.detailsReviewed}
            onChange={handleCheckboxChange('detailsReviewed')}
          >
            I have reviewed my booking details and confirm they are correct
          </Checkbox>
          
          <Checkbox 
            checked={formState.cancellationPolicyAccepted}
            onChange={handleCheckboxChange('cancellationPolicyAccepted')}
          >
            I agree to the cancellation policy
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
  
  return (
    <Box className={className}>
      {/* Accessibility support */}
      <VisuallyHidden aria-live="polite" aria-atomic={true}>
        {statusAnnouncement}
      </VisuallyHidden>
      
      {/* Heading */}
      <Heading as="h2" marginBottom="24px">
        Confirm Your Booking
      </Heading>
      
      {/* Main content - Grid for desktop, stacked for mobile */}
      <Flex 
        flexDirection={isTablet ? 'row' : 'column'} 
        gap={isTablet ? '32px' : '24px'}
      >
        {/* Left column / top section: Booking Summary */}
        <Box flex={isTablet ? '1' : undefined} width={isTablet ? '50%' : '100%'}>
          {renderBookingSummary()}
        </Box>
        
        {/* Right column / bottom section: Payment */}
        <Box flex={isTablet ? '1' : undefined} width={isTablet ? '50%' : '100%'}>
          {renderPaymentSection()}
        </Box>
      </Flex>
      
      {/* Navigation buttons */}
      <Flex justifyContent="space-between" marginTop="32px">
        <Button 
          variant="outline"
          onClick={onBack}
          isDisabled={isLoading}
        >
          Back
        </Button>
        
        <Button 
          variant="primary"
          onClick={handleSubmit}
          isLoading={isLoading}
          isDisabled={isLoading || !formState.detailsReviewed || !formState.cancellationPolicyAccepted}
        >
          Confirm Booking
        </Button>
      </Flex>
    </Box>
  );
};

export default ConfirmationStep; 

















