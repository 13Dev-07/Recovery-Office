import * as React from 'react';;
import { useState, useCallback, useEffect } from 'react';
import { Box } from '@design-system/components/layout/Box';
import { Flex } from '@design-system/components/layout/Flex';
import { Stack as VStack } from '@design-system/components/layout/Stack';
import { Stack as HStack } from '@design-system/components/layout/Stack';
import { Divider } from '@design-system/components/layout/Divider';

import { Text } from '@design-system/components/typography/Text';
import { Checkbox } from '@design-system/components/form/Checkbox';
import { useBooking } from '@context/BookingContext';
import { RadioGroup, Radio } from '@design-system/components/form/RadioGroup';
import { Card } from '@design-system/components/data-display/Card';
import { formatCurrency } from '@utils/formatters';

import { BotanicalIcon } from '@design-system/botanical/BotanicalIcon';
import { Button } from '@design-system/components/button/Button';
import { BookingStepId } from '@types/booking.types';
import { useBookingStepValidation } from '@hooks/useBookingStepValidation';
import { confirmationStepSchema } from '../validation/confirmationStep.schema';
import { LoadingOverlay } from '@design-system/components/feedback/LoadingOverlay';
import { ErrorDisplay } from '@design-system/components/feedback/ErrorDisplay';
import { format } from 'date-fns';
import { CreditCardPaymentForm } from '../payment/CreditCardPaymentForm';
import { InsurancePaymentForm } from '../payment/InsurancePaymentForm';
import { Alert } from '@design-system/components/feedback/Alert';
import { useBreakpointValue } from '@hooks/useBreakpointValue';
import { VisuallyHidden } from '@design-system/components/utils/VisuallyHidden';


// Define PaymentMethodType that's missing from booking.types
type PaymentMethodType = 'creditCard' | 'insurance' | 'payLater';

// Props for the component
interface ConfirmationStepProps {
  isSummaryOnly?: boolean; // When true, only renders the booking summary
  isPaymentOnly?: boolean; // When true, only renders the payment form
  onSubmit?: (data: unknown) => void;
  onBack?: () => void;
}

/**
 * ConfirmationStep Component
 * 
 * Final step in the booking process that shows booking summary and handles payment
 * Provides split view rendering for tablets with summary on one side and payment on the other
 * Implements sacred geometry principles for layout and spacing
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  isSummaryOnly = false,
  isPaymentOnly = false
}) => {
  const { 
    state, 
    selectPaymentMethod,
    setClientPreferences,
    setCancellationPolicyAccepted,
    setDetailsReviewed,
    createPaymentIntent,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource,
    goToStep,
    updateBookingData
  } = useBooking();
  
  // Get validation helpers
  const { validateField, errors, resetErrors } = useBookingStepValidation(
    BookingStepId.CONFIRMATION,
    confirmationStepSchema
  );
  
  // Get breakpoint-specific values
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  
  // Extract values from context state
  const { 
    selectedService, 
    selectedDate,
    selectedTimeSlot,
    selectedPaymentMethod = 'creditCard',
    detailsReviewed = false,
    emailNotifications = true,
    textNotifications = false,
    cancellationPolicyAccepted = false,
    paymentIntentId,
    clientInfo
  } = state;
  
  // Status announcements for screen readers
  const [statusAnnouncement, setStatusAnnouncement] = React.useState('');
  
  // Get loading states
  const isLoadingPaymentIntent = isResourceLoading('paymentIntent');
  
  // Get errors
  const paymentIntentError = getApiErrorForResource('paymentIntent');
  
  // Handle payment method selection
  const handlePaymentMethodChange = (value: PaymentMethodType) => {
    selectPaymentMethod(value);
    validateField('paymentMethod', value);
    
    // Announce payment method change to screen readers
    setStatusAnnouncement(`Payment method changed to ${getPaymentMethodLabel(value)}`);
  };
  
  // Get human-readable payment method label
  const getPaymentMethodLabel = (method: PaymentMethodType): string => {
    switch (method) {
      case 'creditCard': 
        return 'Credit Card';
      case 'insurance': 
        return 'Insurance';
      case 'payLater': 
        return 'Pay at Appointment';
      default: 
        return method;
    }
  };
  
  // Handle checkbox changes for user preferences
  const handleEmailNotificationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPreferences({
      emailNotifications: e.target.checked,
      textNotifications
    });
    setStatusAnnouncement(`Email notifications ${e.target.checked ? 'enabled' : 'disabled'}`);
  };
  
  const handleTextNotificationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPreferences({
      emailNotifications,
      textNotifications: e.target.checked
    });
    setStatusAnnouncement(`Text notifications ${e.target.checked ? 'enabled' : 'disabled'}`);
  };
  
  const handleDetailsReviewedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailsReviewed(e.target.checked);
    validateField('detailsConfirmed', e.target.checked);
    setStatusAnnouncement(`Booking details ${e.target.checked ? 'confirmed' : 'unconfirmed'}`);
  };
  
  const handleCancellationPolicyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCancellationPolicyAccepted(e.target.checked);
    validateField('cancellationPolicyAgreed', e.target.checked);
    setStatusAnnouncement(`Cancellation policy ${e.target.checked ? 'accepted' : 'not accepted'}`);
  };
  
  // Create payment intent when component mounts or payment method changes
  React.useEffect(() => {
    if (selectedService && selectedPaymentMethod === 'creditCard' && !paymentIntentId) {
      const serviceType = selectedService.type || 'standard';
      const duration = selectedService.duration || 60;
      createPaymentIntent(serviceType, duration);
    }
  }, [selectedService, selectedPaymentMethod, paymentIntentId, createPaymentIntent]);
  
  // Calculate booking total price
  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const basePrice = selectedService.price || 0;
    // Add any additional charges here
    
    return basePrice;
  };
  
  // Format the selected date and time for display
  const getFormattedDateTime = () => {
    if (!selectedDate || !selectedTimeSlot) return 'No date selected';
    
    const selectedDateObj = new Date(selectedDate);
    const dateStr = format(selectedDateObj, 'EEEE, MMMM d, yyyy');
    
    return `${dateStr} at ${selectedTimeSlot.startTime}`;
  };
  
  // Handle edit button clicks for different sections
  const handleEditService = () => {
    goToStep(BookingStepId.SERVICE_SELECTION);
    setStatusAnnouncement('Navigating to edit service selection');
  };
  
  const handleEditDate = () => {
    goToStep(BookingStepId.DATE_SELECTION);
    setStatusAnnouncement('Navigating to edit date selection');
  };
  
  const handleEditClientInfo = () => {
    goToStep(BookingStepId.CLIENT_INFORMATION);
    setStatusAnnouncement('Navigating to edit client information');
  };
  
  // Render the booking summary section
  const renderBookingSummary = () => (
    <Card 
      variant="outline" 
      p={SACRED_SPACING.sm}
      mb={isSummaryOnly ? 0 : SACRED_SPACING.md}
      role="region"
      aria-labelledby="booking-summary-heading"
    >
      <VStack spacing={SACRED_SPACING.sm} align="stretch">
        {!isSummaryOnly && (
          <Heading as="h3" fontfontSize="md" id="booking-summary-heading">
            Booking Summary
          </Heading>
        )}
        
        {/* Service details */}
        <Box>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="service-details-heading">
              Service
            </Heading>
            {!isPaymentOnly && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditService}
                aria-label="Edit service selection"
              >
                Edit
              </Button>
            )}
          </Flex>
          
          <Text fontWeight="medium" aria-labelledby="service-details-heading">
            {selectedService?.name || 'No service selected'}
          </Text>
          {selectedService?.duration && (
            <Text color="text.secondary" aria-labelledby="service-details-heading">
              {selectedService.duration} min
            </Text>
          )}
        </Box>
        
        <Divider aria-hidden="true" />
        
        {/* Date and time details */}
        <Box>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="date-time-details-heading">
              Date & Time
            </Heading>
            {!isPaymentOnly && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditDate}
                aria-label="Edit date and time selection"
              >
                Edit
              </Button>
            )}
          </Flex>
          
          <Text fontWeight="medium" aria-labelledby="date-time-details-heading">
            {getFormattedDateTime()}
          </Text>
        </Box>
        
        <Divider aria-hidden="true" />
        
        {/* Client information */}
        <Box>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="client-info-heading">
              Your Information
            </Heading>
            {!isPaymentOnly && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditClientInfo}
                aria-label="Edit your personal information"
              >
                Edit
              </Button>
            )}
          </Flex>
          
          <Text fontWeight="medium" aria-labelledby="client-info-heading">
            {clientInfo?.firstName} {clientInfo?.lastName}
          </Text>
          <Text color="text.secondary" aria-labelledby="client-info-heading">
            {clientInfo?.email}
          </Text>
          {clientInfo?.phone && (
            <Text color="text.secondary" aria-labelledby="client-info-heading">
              {clientInfo.phone}
            </Text>
          )}
        </Box>
        
        <Divider aria-hidden="true" />
        
        {/* Pricing */}
        <Box>
          <Heading as="h4" fontfontSize="sm" mb={SACRED_SPACING.xxs} id="price-details-heading">
            Price Details
          </Heading>
          
          <Flex justifyContent="space-between" mb={1} aria-labelledby="price-details-heading">
            <Text>Service fee</Text>
            <Text>{formatCurrency(calculateTotal())}</Text>
          </Flex>
          
          {/* Add any additional fees here */}
          
          <Divider my={SACRED_SPACING.xxs} aria-hidden="true" />
          
          <Flex
            justifyContent="space-between"
            fontWeight="bold"
            aria-labelledby="price-details-heading"
          >
            <Text>Total</Text>
            <Text>{formatCurrency(calculateTotal())}</Text>
          </Flex>
        </Box>
      </VStack>
    </Card>
  );
  
  // Render the payment section
  const renderPaymentSection = () => (
    <Box
      position="relative"
      role="region"
      aria-labelledby={isPaymentOnly ? undefined : "payment-heading"}
      aria-label={isPaymentOnly ? "Payment information" : undefined}
    >
      {isLoadingPaymentIntent && (
        <LoadingOverlay isOpen={true} message="Preparing payment..." />
      )}
      
      {hasApiError() && paymentIntentError ? (
        <ErrorDisplay
          title="Payment Error"
          message={paymentIntentError}
          actionItems={[{
            label: "Try Again",
            onClick: () => {
              resetErrors();
              createPaymentIntent(true);
              setStatusAnnouncement('Retrying payment setup');
            },
            primary: true
          }]}
        />
      ) : (
        <VStack spacing={SACRED_SPACING.sm} align="stretch">
          {!isPaymentOnly && (
            <Heading as="h3" fontfontSize="md" id="payment-heading">
              Payment
            </Heading>
          )}
          
          <Box role="group" aria-labelledby="payment-method-heading">
            <Text fontWeight="medium" mb={SACRED_SPACING.xxs} id="payment-method-heading">
              Payment Method
            </Text>
            
            <RadioGroup
              name="paymentMethod"
              value={selectedPaymentMethod}
              onChange={handlePaymentMethodChange}
              error={errors?.paymentMethod}
              aria-required="true"
              aria-describedby={errors?.paymentMethod ? "payment-method-error" : undefined}
            >
              <VStack spacing={SACRED_SPACING.xxs} align="stretch">
                <Radio value="creditCard">
                  <HStack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon name="creditCard" size="sm" aria-hidden="true" />
                    <Text>Credit Card</Text>
                  </HStack>
                </Radio>
                
                <Radio value="insurance">
                  <HStack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon name="shield" size="sm" aria-hidden="true" />
                    <Text>Insurance</Text>
                  </HStack>
                </Radio>
                
                <Radio value="payLater">
                  <HStack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon name="clock" size="sm" aria-hidden="true" />
                    <Text>Pay at Appointment</Text>
                  </HStack>
                </Radio>
              </VStack>
            </RadioGroup>
            
            {errors?.paymentMethod && (
              <Text
                color="error.500"
                fontSize="sm"
                mt={1}
                id="payment-method-error"
                role="alert"
              >
                {errors.paymentMethod}
              </Text>
            )}
          </Box>
          
          {/* Payment form based on selected method */}
          <Box mt={SACRED_SPACING.xxs} role="group" aria-labelledby="payment-details-heading">
            <VisuallyHidden>
              <Heading as="h4" fontfontSize="sm" id="payment-details-heading">
                Payment Details
              </Heading>
            </VisuallyHidden>
            
            {selectedPaymentMethod === 'creditCard' && (
              <CreditCardPaymentForm
                paymentIntentId={paymentIntentId}
                amount={calculateTotal()}
                onPaymentComplete={(id) => {
                  updateBookingData({ paymentIntentId: id });
                  validateField('paymentIntentId', id);
                  setStatusAnnouncement('Payment information completed');
                }}
                error={errors?.paymentIntentId}
              />
            )}
            
            {selectedPaymentMethod === 'insurance' && (
              <InsurancePaymentForm
                onInsuranceInfoUpdate={(provider, policyNumber) => {
                  updateBookingData({
                    insuranceProvider: provider,
                    insurancePolicyNumber: policyNumber
                  });
                  validateField('insuranceProvider', provider);
                  validateField('insurancePolicyNumber', policyNumber);
                  setStatusAnnouncement('Insurance information updated');
                }}
                errors={{
                  provider: errors?.insuranceProvider,
                  policyNumber: errors?.insurancePolicyNumber
                }}
              />
            )}
            
            {selectedPaymentMethod === 'payLater' && (
              <Alert
                status="info"
                title="Pay at Your Appointment"
                description="You've selected to pay at your appointment. Please bring a valid form of payment (credit card, cash, or check)."
              />
            )}
          </Box>
          
          {/* Notifications preferences */}
          <Box mt={SACRED_SPACING.xxs} role="group" aria-labelledby="notifications-heading">
            <Text fontWeight="medium" mb={SACRED_SPACING.xxs} id="notifications-heading">
              Notifications
            </Text>
            
            <VStack spacing={SACRED_SPACING.xxs} align="stretch">
              <Checkbox
                isChecked={emailNotifications}
                onChange={handleEmailNotificationsChange}
                label="Email me appointment reminders and updates"
                id="email-notifications"
                aria-describedby="notifications-heading"
              />
              
              <Checkbox
                isChecked={textNotifications}
                onChange={handleTextNotificationsChange}
                label="Send text message reminders (standard rates apply)"
                id="text-notifications"
                aria-describedby="notifications-heading"
              />
            </VStack>
          </Box>
          
          {/* Agreement checkboxes */}
          <Box mt={SACRED_SPACING.sm} role="group" aria-labelledby="agreements-heading">
            <VisuallyHidden>
              <Heading as="h4" fontfontSize="sm" id="agreements-heading">
                Required Agreements
              </Heading>
            </VisuallyHidden>
            
            <VStack spacing={SACRED_SPACING.xs} align="stretch">
              <Checkbox
                isChecked={detailsReviewed}
                onChange={handleDetailsReviewedChange}
                label="I have reviewed and confirmed all booking details are correct"
                error={errors?.detailsConfirmed}
                id="details-reviewed"
                aria-required="true"
                aria-invalid={errors?.detailsConfirmed ? "true" : "false"}
              />
              
              <Checkbox
                isChecked={cancellationPolicyAccepted}
                onChange={handleCancellationPolicyChange}
                label="I agree to the cancellation policy (24 hours notice required)"
                error={errors?.cancellationPolicyAgreed}
                id="cancellation-policy"
                aria-required="true"
                aria-invalid={errors?.cancellationPolicyAgreed ? "true" : "false"}
              />
            </VStack>
          </Box>
        </VStack>
      )}
    </Box>
  );
  
  // For tablet split view, we render either just the summary or just the payment
  if (isSummaryOnly) {
    return renderBookingSummary();
  }
  
  if (isPaymentOnly) {
    return renderPaymentSection();
  }
  
  // For mobile or desktop, we render the complete view
  return (
    <VStack spacing={SACRED_SPACING.md} align="stretch" width="100%">
      {/* Visually hidden live region for status announcements */}
      <VisuallyHidden aria-live="polite" aria-atomic="true">
        {statusAnnouncement}
      </VisuallyHidden>
      
      <Box>
        <Heading as="h2" fontfontSize="lg" mb={SACRED_SPACING.xxs} id="confirmation-heading">
          Review and Confirm
        </Heading>
        <Text color="text.subtle">
          Please review your booking details and complete payment to confirm your appointment.
        </Text>
      </Box>
      
      {renderBookingSummary()}
      {renderPaymentSection()}
    </VStack>
  );
}; 

















