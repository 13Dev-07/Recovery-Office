/**
 * BookingSummary Component
 * 
 * Final step in the booking process showing a summary of all selected options.
 * Uses sacred geometry principles for layout proportions and spacing.
 */

import * as React from 'react';
import { useEffect, useContext } from 'react';;
import styled from 'styled-components';
import { format } from 'date-fns';

import { BookingContext } from '../state';



import { Text } from '../../typography/Text';
import { theme } from '../../../theme';
import { Button } from '../../button/Button';
import { BotanicalElement } from '../../botanical/BotanicalElement';
import { Divider } from '../../data-display/Divider';

/**
 * BookingSummary component for the final step in the booking process
 */
export const BookingSummary: React.FC = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { selectedService, selectedDate, timeSlot, clientName, clientEmail, clientPhone, clientMessage } = state;
  
  // Format date for display
  const formattedDate = selectedDate 
    ? format(new Date(selectedDate), 'EEEE, MMMM do, yyyy')
    : 'No date selected';
    
  // Format time for display
  const formattedTime = timeSlot || 'No time selected';
  
  // Calculate estimated price based on selected service
  // Since selectedService is a string in the state, we need to get the actual service details
  // For now, using placeholder values
  const serviceCost = 150; // Placeholder price
  const taxRate = 0.0825; // Example tax rate (8.25%)
  const taxes = serviceCost * taxRate;
  const totalCost = serviceCost + taxes;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  // Set step validity
  useEffect(() => {
    // This step is automatically valid if we reach it
    dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
  }, [dispatch]);
  
  if (!selectedService || !selectedDate || !timeSlot) {
    return (
      <StepContainer>
        <ErrorMessage>
          <Text variant="h5" style={{ color: theme.colors.error.main }}>
            Incomplete Booking Information
          </Text>
          <Text variant="body2">
            Please go back and complete all required booking information.
          </Text>
        </ErrorMessage>
      </StepContainer>
    );
  }
  
  // Use placeholders for service information
  const serviceInfo = {
    name: selectedService,
    description: "Your selected therapeutic service",
    duration: "60"
  };
  
  return (
    <StepContainer>
      <StepHeader>
        <Text as="h3" variant="h5">
          Booking Summary
        </Text>
        <Text variant="body2" style={{ opacity: 0.8 }}>
          Please review your booking details before confirming
        </Text>
      </StepHeader>
      
      <SummaryContainer>
        <SummarySection>
          <SectionTitle variant="h6">Selected Service</SectionTitle>
          <ServiceDetails>
            <ServiceName>{serviceInfo.name}</ServiceName>
            <Text variant="body2">{serviceInfo.description}</Text>
            <ServiceDuration>
              <DurationIcon />
              <Text variant="body2">{serviceInfo.duration} minutes</Text>
            </ServiceDuration>
          </ServiceDetails>
        </SummarySection>
        
        <Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Date & Time</SectionTitle>
          <DateTimeContainer>
            <DateBlock>
              <CalendarIcon />
              <Text variant="body1">{formattedDate}</Text>
            </DateBlock>
            <TimeBlock>
              <ClockIcon />
              <Text variant="body1">{formattedTime}</Text>
            </TimeBlock>
          </DateTimeContainer>
        </SummarySection>
        
        <Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Your Information</SectionTitle>
          <CustomerDetails>
            <Text variant="body1">{clientName}</Text>
            <Text variant="body2">{clientEmail}</Text>
            <Text variant="body2">{clientPhone}</Text>
          </CustomerDetails>
          
          {clientMessage && (
            <NotesContainer>
              <Text variant="subtitle2">Additional Notes:</Text>
              <Text variant="body2">{clientMessage}</Text>
            </NotesContainer>
          )}
        </SummarySection>
        
        <Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Payment Details</SectionTitle>
          <PriceBreakdown>
            <PriceRow>
              <Text variant="body2">Service Fee</Text>
              <Text variant="body2">{formatCurrency(serviceCost)}</Text>
            </PriceRow>
            <PriceRow>
              <Text variant="body2">Taxes & Fees</Text>
              <Text variant="body2">{formatCurrency(taxes)}</Text>
            </PriceRow>
            <TotalRow>
              <Text variant="subtitle1">Total</Text>
              <TotalPrice>{formatCurrency(totalCost)}</TotalPrice>
            </TotalRow>
          </PriceBreakdown>
          <PaymentNote>
            <Text variant="caption">
              Payment will be collected at the time of service.
            </Text>
          </PaymentNote>
        </SummarySection>
        
        <BotanicalContainer>
          <BotanicalElement 
            type="leaf" 
            size="medium" 
            color={theme.colors.primary.light} 
            rotation={45}
          />
        </BotanicalContainer>
      </SummaryContainer>
      
      <CancellationPolicy>
        <Text variant="caption">
          Cancellation Policy: Free cancellation up to 24 hours before your appointment.
          Late cancellations may be subject to a fee of 50% of the service cost.
        </Text>
      </CancellationPolicy>
    </StepContainer>
  );
};

// Icons (simplified for this implementation)
const CalendarIcon = styled.div`
  width: ${getFibonacciByIndex(6)}px; // 8px
  height: ${getFibonacciByIndex(6)}px; // 8px
  background-color: ${theme.colors.primary.main};
  border-radius: 2px;
`;

const ClockIcon = styled.div`
  width: ${getFibonacciByIndex(6)}px; // 8px
  height: ${getFibonacciByIndex(6)}px; // 8px
  background-color: ${theme.colors.primary.main};
  border-radius: 50%;
`;

const DurationIcon = styled.div`
  width: ${getFibonacciByIndex(6)}px; // 8px
  height: ${getFibonacciByIndex(6)}px; // 8px
  background-color: ${theme.colors.primary.main};
  border-radius: 2px;
`;

// Styled components with sacred geometry principles
const StepContainer = styled.div`
  width: 100%;
`;

const StepHeader = styled.div`
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  text-align: center;
  
  & > * + * {
    margin-top: ${getFibonacciByIndex(3)}px; // 2px
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(7)}px; // 13px
  width: 100%;
  background-color: ${theme.colors.background.paper};
  border-radius: ${getFibonacciByIndex(6)}px; // 8px
  padding: ${getFibonacciByIndex(8)}px; // 21px
  box-shadow: 0 ${getFibonacciByIndex(4)}px ${getFibonacciByIndex(6)}px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
`;

const SummarySection = styled.div`
  margin-bottom: ${getFibonacciByIndex(7)}px; // 13px
`;

const SectionTitle = styled(Text)`
  margin-bottom: ${getFibonacciByIndex(5)}px; // 5px
  color: ${theme.colors.text.primary};
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${getFibonacciByIndex(3)}px; // 2px
    left: 0;
    width: ${getFibonacciByIndex(9) * PHI_INVERSE}px; // ~21px
    height: 2px;
    background-color: ${theme.colors.primary.light};
  }
`;

const ServiceDetails = styled.div`
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
`;

const ServiceName = styled(Text).attrs({ variant: 'subtitle1' })`
  color: ${theme.colors.primary.dark};
  font-weight: 600;
  margin-bottom: ${getFibonacciByIndex(4)}px; // 3px
`;

const ServiceDuration = styled.div`
  display: flex;
  align-items: center;
  gap: ${getFibonacciByIndex(5)}px; // 5px
  margin-top: ${getFibonacciByIndex(5)}px; // 5px
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(6)}px; // 8px
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
  
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    gap: ${getFibonacciByIndex(8)}px; // 21px
  }
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

const CustomerDetails = styled.div`
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(3)}px; // 2px
`;

const NotesContainer = styled.div`
  margin-top: ${getFibonacciByIndex(7)}px; // 13px
  padding: ${getFibonacciByIndex(6)}px; // 8px
  background-color: ${theme.colors.background.default};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  border-left: 3px solid ${theme.colors.primary.light};
`;

const PriceBreakdown = styled.div`
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalRow = styled(PriceRow)`
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
  padding-top: ${getFibonacciByIndex(6)}px; // 8px
  border-top: 1px solid ${theme.colors.divider};
  font-weight: 600;
`;

const TotalPrice = styled(Text).attrs({ variant: 'subtitle1' })`
  color: ${theme.colors.primary.dark};
  font-weight: 700;
`;

const PaymentNote = styled.div`
  margin-top: ${getFibonacciByIndex(6)}px; // 8px
  opacity: 0.7;
`;

const CancellationPolicy = styled.div`
  margin-top: ${getFibonacciByIndex(7)}px; // 13px
  padding: ${getFibonacciByIndex(5)}px; // 5px
  background-color: ${theme.colors.background.default};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  text-align: center;
`;

const BotanicalContainer = styled.div`
  position: absolute;
  top: -${getFibonacciByIndex(7)}px; // 13px
  right: -${getFibonacciByIndex(8)}px; // 21px
  opacity: 0.15;
  transform: rotate(15deg);
  z-index: 0;
  pointer-events: none;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: ${getFibonacciByIndex(8)}px; // 21px
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(6)}px; // 8px
`;

export default BookingSummary; 











