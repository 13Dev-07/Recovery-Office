/**
 * ServiceSelectionStep Component
 * 
 * The first step in the booking flow where users select the service they want to book.
 * Uses sacred geometry principles for layout and spacing.
 */

import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Box } from '../../../design-system/components/layout/Box';
import { Flex } from '../../../design-system/components/layout/Flex';
import { Grid } from '../../../design-system/components/layout/Grid';
import { Text } from '../../../design-system/components/typography/Text';
import { Heading } from '../../../design-system/components/typography/Heading';
import { Button } from '../../../design-system/components/button/Button';
import { ErrorMessage } from '../../../design-system/components/feedback/ErrorMessage';
import { useBooking } from '../../../context/BookingContext';
import { validateServiceSelection } from '../validation/serviceSelection.schema';
import { PHI, SACRED_SPACING, SACRED_RADIUS } from '../../../constants/sacred-geometry';
import { ServiceSelectionStepProps, ServiceOption } from '../../../types/booking.types';

// Create a styled HTML div for the service card that can accept events
const ServiceCardWrapper = styled.div<{ $isSelected?: boolean }>`
  padding: ${SACRED_SPACING.md}px;
  border-radius: ${SACRED_RADIUS.md}px;
  border: 1px solid ${props => props.$isSelected 
    ? props.theme.colors.primary[500] 
    : props.theme.colors.border.light};
  background-color: ${props => props.$isSelected 
    ? props.theme.colors.primary[50] 
    : 'white'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary[400]};
    box-shadow: 0 ${SACRED_SPACING.xs}px ${SACRED_SPACING.md}px rgba(0, 0, 0, 0.05);
  }
`;

/**
 * ServiceSelectionStep Component
 */
export const ServiceSelectionStep: React.FC<ServiceSelectionStepProps> = ({ 
  onComplete, 
  onBack, 
  isLoading = false,
  className,
  initialData
}) => {
  const { state } = useBooking();
  // Until we update the BookingContext, we'll use the state here
  const availableServices = state.availableServices || [];
  
  const [selectedService, setSelectedService] = useState<ServiceOption | undefined>(
    initialData?.selectedService
  );
  const [validationError, setValidationError] = useState('');
  
  // Handle service selection
  const handleServiceSelect = (serviceId: string) => {
    const service = availableServices.find((s: ServiceOption) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      setValidationError('');
    }
  };
  
  // Handle proceeding to next step
  const handleContinue = () => {
    try {
      if (!selectedService) {
        setValidationError('Please select a service to continue.');
        return;
      }
      
      // Validate the service selection
      validateServiceSelection({
        serviceId: selectedService.id,
        isRecurring: false
      });
      
      // Proceed to next step with the selected service data
      if (onComplete) {
        onComplete({ selectedService });
      }
    } catch (error: any) {
      setValidationError(error.message || 'Please select a service to continue.');
    }
  };
  
  return (
    <Box className={className}>
      <Heading as="h2" textAlign="center" marginBottom={`${SACRED_SPACING.md}px`}>
        Select a Service
      </Heading>
      
      <Text textAlign="center" marginBottom={`${SACRED_SPACING.lg}px`}>
        Choose the service that best fits your needs. Our consultation services are designed to help you recover your financial assets.
      </Text>
      
      {validationError && (
        <Box marginBottom={`${SACRED_SPACING.md}px`}>
          <ErrorMessage>{validationError}</ErrorMessage>
        </Box>
      )}
      
      <Grid 
        gap={SACRED_SPACING.md} 
        templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        marginBottom={`${SACRED_SPACING.lg}px`}
      >
        {availableServices.map((service: ServiceOption) => (
          <ServiceCardWrapper
            key={service.id}
            $isSelected={selectedService?.id === service.id}
            onClick={() => handleServiceSelect(service.id)}
            role="button"
            aria-pressed={selectedService?.id === service.id}
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleServiceSelect(service.id);
              }
            }}
            data-testid={`service-card-${service.id}`}
          >
            <Heading as="h3" marginBottom={`${SACRED_SPACING.xs}px`}>
              {service.name}
            </Heading>
            
            <Text size="sm" marginBottom={`${SACRED_SPACING.sm}px`}>
              {service.description}
            </Text>
            
            <Flex justifyContent="space-between" alignItems="center">
              <Text weight="bold" color="primary.600">
                {service.duration} minutes
              </Text>
              
              {selectedService?.id === service.id && (
                <Text color="success.main" weight="bold">
                  ✓ Selected
                </Text>
              )}
            </Flex>
          </ServiceCardWrapper>
        ))}
      </Grid>
      
      <Flex justifyContent="center">
        <Button
          variant="primary"
          size="lg"
          onClick={handleContinue}
          disabled={!selectedService || isLoading}
          isLoading={isLoading}
          data-testid="continue-button"
        >
          Continue
        </Button>
      </Flex>
    </Box>
  );
};

export default ServiceSelectionStep; 