/**
 * BookingConfirmation Component
 * 
 * Final confirmation screen after booking submission.
 * Uses sacred geometry principles for layout proportions and spacing.
 */

import * as React from 'react';
import { useMemo, useContext } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { format } from 'date-fns';
import { BookingContext } from '../state';


import { Text } from '../../typography/Text';
import { Button } from '../../button/Button';
import { BotanicalElement } from '../../botanical/BotanicalElement';
import { FlowerOfLife } from '../../botanical/FlowerOfLife';

// Function to generate a pseudo-random booking reference
const generateBookingReference = () => {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Omitting similar looking characters
  let result = '';
  
  // Use PHI to determine reference length - convert to integer between 6-8
  const refLength = Math.floor(PHI * 4) + 2; 
  
  for (let i = 0; i < refLength; i++) {
    // Use PHI-based index selection
    const randomIndex = Math.floor((Math.sin(i * PHI) * 0.5 + 0.5) * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  return result;
};

/**
 * BookingConfirmation component that displays after successful booking
 */
export const BookingConfirmation: React.FC = () => {
  const { state } = useContext(BookingContext);
  const { selectedService, selectedDate, selectedTimeSlot, customerInfo } = state;
  
  // Generate a booking reference using sacred geometry principles
  const bookingReference = useMemo(() => generateBookingReference(), []);
  
  // Format date for display
  const formattedDate = selectedDate 
    ? format(new Date(selectedDate), 'EEEE, MMMM do, yyyy')
    : 'No date selected';
    
  // Get calendar links
  const getGoogleCalendarLink = () => {
    if (!selectedDate || !selectedTimeSlot || !selectedService) return '#';
    
    const dateObj = new Date(selectedDate);
    const [hours, minutes] = selectedTimeSlot.split(':').map(Number);
    dateObj.setHours(hours, minutes);
    
    const endDate = new Date(dateObj);
    endDate.setMinutes(endDate.getMinutes() + (selectedService.duration || 60));
    
    const startTime = dateObj.toISOString().replace(/-|:|\.\d+/g, '');
    const endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${selectedService.name} at Recovery Office`)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(`Your appointment for ${selectedService.name}\n\nReference: ${bookingReference}`)}&location=${encodeURIComponent('Recovery Office')}&sf=true&output=xml`;
  };
  
  // Get Apple Calendar link (ics file format)
  const getAppleCalendarLink = () => {
    // This would typically generate an .ics file
    // For simplicity, we're using a placeholder link
    return '#';
  };
  
  return (
    <ConfirmationContainer>
      <ConfirmationHeader>
        <SuccessIcon>
          <FlowerOfLife 
            size={getFibonacciByIndex(9)} // 34px
            color="var(--color-success-500)"
            rotation={0}
          />
        </SuccessIcon>
        <Text as="h3" variant="h4" style={{ color: 'var(--color-success-700)' }}>
          Booking Confirmed!
        </Text>
        <Text variant="subtitle1" style={{ opacity: 0.8, textAlign: 'center' }}>
          Your appointment has been successfully scheduled
        </Text>
      </ConfirmationHeader>
      
      <ReferenceContainer>
        <Text variant="body2">Booking Reference</Text>
        <ReferenceCode>{bookingReference}</ReferenceCode>
        <Text variant="caption" style={{ opacity: 0.7 }}>
          Please save this reference number for your records
        </Text>
      </ReferenceContainer>
      
      <DetailsContainer>
        <DetailsRow>
          <DetailLabel variant="body2">Service:</DetailLabel>
          <DetailValue variant="body2">{selectedService?.name}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Date:</DetailLabel>
          <DetailValue variant="body2">{formattedDate}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Time:</DetailLabel>
          <DetailValue variant="body2">{selectedTimeSlot}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Duration:</DetailLabel>
          <DetailValue variant="body2">{selectedService?.duration} minutes</DetailValue>
        </DetailsRow>
      </DetailsContainer>
      
      <CalendarContainer>
        <Text variant="subtitle2">Add to Calendar</Text>
        <CalendarLinks>
          <CalendarButton 
            as="a" 
            href={getGoogleCalendarLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="outlined"
            color="secondary"
            size="small"
          >
            Google Calendar
          </CalendarButton>
          <CalendarButton 
            as="a" 
            href={getAppleCalendarLink()}
            download="recovery-office-appointment.ics"
            variant="outlined"
            color="secondary"
            size="small"
          >
            Apple Calendar
          </CalendarButton>
        </CalendarLinks>
      </CalendarContainer>
      
      <InstructionsContainer>
        <InstructionsHeader variant="subtitle2">What's Next?</InstructionsHeader>
        <InstructionsList>
          <InstructionItem>
            <InstructionNumber>1</InstructionNumber>
            <Text variant="body2">
              You'll receive a confirmation email at {customerInfo?.email} with your booking details.
            </Text>
          </InstructionItem>
          <InstructionItem>
            <InstructionNumber>2</InstructionNumber>
            <Text variant="body2">
              We recommend arriving 10 minutes before your appointment time.
            </Text>
          </InstructionItem>
          <InstructionItem>
            <InstructionNumber>3</InstructionNumber>
            <Text variant="body2">
              If you need to reschedule, please contact us at least 24 hours in advance.
            </Text>
          </InstructionItem>
        </InstructionsList>
      </InstructionsContainer>
      
      <ButtonsContainer>
        <ActionButton 
          variant="contained"
          color="primary"
          fullWidth
          href="/"
        >
          Return to Home
        </ActionButton>
        
        <ActionButton 
          variant="outlined"
          color="secondary"
          fullWidth
          href="/services"
        >
          Browse More Services
        </ActionButton>
      </ButtonsContainer>
      
      <BotanicalDecoration position="topRight">
        <BotanicalElement 
          type="leaf" 
          size="large" 
          color="var(--color-success-300)" 
          rotation={45}
        />
      </BotanicalDecoration>
      
      <BotanicalDecoration position="bottomLeft">
        <BotanicalElement 
          type="spiral" 
          size="medium" 
          color="var(--color-primary-300)" 
          rotation={180}
        />
      </BotanicalDecoration>
    </ConfirmationContainer>
  );
};

// Styled components with sacred geometry principles
const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${getFibonacciByIndex(13)}px; // 377px
  margin: 0 auto;
  padding: ${getFibonacciByIndex(8)}px; // 21px
  position: relative;
  overflow: hidden;
`;

const ConfirmationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${getFibonacciByIndex(6)}px; // 8px
  margin-bottom: ${getFibonacciByIndex(9)}px; // 34px
  text-align: center;
`;

const SuccessIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${getFibonacciByIndex(11)}px; // 89px
  height: ${getFibonacciByIndex(11)}px; // 89px
  border-radius: 50%;
  background-color: ${props => props.theme.colors.success[50] ?? 1};
  margin-bottom: ${getFibonacciByIndex(5)}px; // 5px
`;

const ReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${getFibonacciByIndex(7)}px; // 13px
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  background-color: ${props => props.theme.colors.primary[50] ?? 1};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  text-align: center;
`;

const ReferenceCode = styled.div`
  font-family: monospace;
  font-size: ${getFibonacciByIndex(9)}px; // 34px
  font-weight: 700;
  letter-spacing: ${getFibonacciByIndex(3)}px; // 2px
  color: ${props => props.theme.colors.primary[700] ?? 1};
  margin: ${getFibonacciByIndex(4)}px 0; // 3px 0
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(5)}px; // 5px
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  padding: ${getFibonacciByIndex(7)}px; // 13px
  border: 1px solid ${props => props.theme.colors.gray[200] ?? 1};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  background-color: ${props => props.theme.colors.background.paper};
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.text.secondary};
`;

const DetailValue = styled(Text)`
  text-align: right;
  color: ${props => props.theme.colors.text.primary};
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(6)}px; // 8px
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
`;

const CalendarLinks = styled.div`
  display: flex;
  gap: ${getFibonacciByIndex(6)}px; // 8px
`;

const CalendarButton = styled(Button)`
  flex: 1;
`;

const InstructionsContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(9)}px; // 34px
`;

const InstructionsHeader = styled(Text)`
  margin-bottom: ${getFibonacciByIndex(6)}px; // 8px
  font-weight: 600;
`;

const InstructionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(7)}px; // 13px
`;

const InstructionItem = styled.div`
  display: flex;
  gap: ${getFibonacciByIndex(6)}px; // 8px
  align-items: flex-start;
`;

const InstructionNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${getFibonacciByIndex(7) * PHI_INVERSE}px; // ~8px
  height: ${getFibonacciByIndex(7) * PHI_INVERSE}px; // ~8px
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.common.white};
  font-size: ${getFibonacciByIndex(5)}px; // 5px
  font-weight: 600;
  flex-shrink: 0;
  padding: ${getFibonacciByIndex(5)}px; // 5px
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(7)}px; // 13px
`;

const ActionButton = styled(Button)`
  height: ${getFibonacciByIndex(9)}px; // 34px
`;

interface BotanicalDecorationProps {
  position: 'topRight' | 'bottomLeft' | 'topLeft' | 'bottomRight';
}

const BotanicalDecoration = styled.div<BotanicalDecorationProps>`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  opacity: 0.15;
  
  ${({ position }) => {
    switch (position) {
      case 'topRight':
        return `
          top: -${getFibonacciByIndex(8)}px; // 21px
          right: -${getFibonacciByIndex(8)}px; // 21px
          transform: rotate(45deg);
        `;
      case 'bottomLeft':
        return `
          bottom: -${getFibonacciByIndex(8)}px; // 21px
          left: -${getFibonacciByIndex(9)}px; // 34px
          transform: rotate(180deg);
        `;
      case 'topLeft':
        return `
          top: -${getFibonacciByIndex(8)}px; // 21px
          left: -${getFibonacciByIndex(8)}px; // 21px
          transform: rotate(-45deg);
        `;
      case 'bottomRight':
        return `
          bottom: -${getFibonacciByIndex(8)}px; // 21px
          right: -${getFibonacciByIndex(9)}px; // 34px
          transform: rotate(225deg);
        `;
      default:
        return '';
    }
  }}
`;

 










