/**
 * BookingExample
 * 
 * This example showcases the booking system components and their usage.
 * The booking system follows sacred geometry principles throughout its design.
 */

import * as React from 'react';
import styled from 'styled-components';
import { PHI, PHI_INVERSE, FIBONACCI } from '../constants/sacred-geometry';
import { BookingInterface } from '../design-system/components/booking/BookingInterface';
import { Text } from '../design-system/components/typography/Text';
import { Section } from '../design-system/components/layout/Section';
import { BotanicalElement } from '../design-system/components/botanical/BotanicalElement';
import { theme } from '../design-system/theme';
import { Card } from '../design-system/components/data-display/Card';

/**
 * BookingExample component that demonstrates the booking system
 */
const BookingExample: React.FC = () => {
  const handleBookingComplete = (bookingData: any) => {
    console.log('Booking completed:', bookingData);
    // In a real application, this would submit the booking to a backend API
  };

  return (
    <Container>
      <Section
        variant="light"
        fullWidth={false}
        hasPadding={true}
        textAlign="center"
        botanicalPosition="top-right"
        botanicalElement={
          <BotanicalElement 
            type="oliveBranch" 
            size="large" 
            color={theme.colors.primary.light} 
            rotation={45}
          />
        }
      >
        <HeaderContainer>
          <Text as="h1" variant="h3">Book Your Recovery Session</Text>
          <Text variant="body1" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
            Our booking system is designed with sacred geometry principles that guide you through 
            a harmonious and intuitive booking experience.
          </Text>
        </HeaderContainer>

        <ExplanationContainer>
          <Card elevated>
            <ComponentList>
              <ComponentItem>
                <ComponentName variant="h6">BookingInterface</ComponentName>
                <ComponentDescription variant="body2">
                  The main container component that manages the multi-step workflow and state.
                  Uses sacred geometry for layout spacing and animations.
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">ProgressIndicator</ComponentName>
                <ComponentDescription variant="body2">
                  Shows the current step in the booking process with Fibonacci-based spacing
                  and golden ratio proportions.
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">Booking Steps</ComponentName>
                <ComponentDescription variant="body2">
                  1. ServiceSelection: Choose your recovery service
                  2. DateSelection: Pick date and time with calendar (mobile-optimized)
                  3. CustomerInfo: Enter your personal details
                  4. BookingSummary: Review your booking
                  5. BookingConfirmation: Success confirmation with next steps
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">Validation System</ComponentName>
                <ComponentDescription variant="body2">
                  Type-safe Zod schemas ensure all booking information is validated properly
                  at each step, with appropriate error messages.
                </ComponentDescription>
              </ComponentItem>
            </ComponentList>
          </Card>
        </ExplanationContainer>

        <DemoContainer>
          <BookingInterface 
            onComplete={handleBookingComplete}
            withBotanical={true}
          />
        </DemoContainer>

        <AdditionalNotes>
          <Text as="h3" variant="h5">Implementation Notes</Text>
          <Text variant="body2">
            The booking system is built with a focus on sacred geometry, using the golden ratio (PHI = 1.618...)
            and Fibonacci sequence for all spacing, sizing, and animations. All form fields and buttons
            follow these principles to create a harmonious user experience.
          </Text>
          <Text variant="body2" style={{ marginTop: `${getFibonacciByIndex(6)}px` }}>
            The state management uses React Context with a reducer pattern for type-safe updates.
            The MobileCalendarModal provides a responsive experience on smaller screens.
          </Text>
        </AdditionalNotes>
      </Section>
    </Container>
  );
};

// Styled components with sacred geometry principles
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${getFibonacciByIndex(8)}px; // 21px
`;

const HeaderContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(9)}px; // 34px
`;

const ExplanationContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  max-width: ${getFibonacciByIndex(13) * 2}px; // ~754px
  margin-left: auto;
  margin-right: auto;
`;

const ComponentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(7)}px; // 13px
`;

const ComponentItem = styled.div`
  padding-bottom: ${getFibonacciByIndex(6)}px; // 8px
  
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.gray[200] ?? 1};
  }
`;

const ComponentName = styled(Text)`
  margin-bottom: ${getFibonacciByIndex(4)}px; // 3px
  color: ${theme.colors.primary.main};
`;

const ComponentDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
`;

const DemoContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(9)}px; // 34px
  border-radius: ${getFibonacciByIndex(6)}px; // 8px
  background-color: ${theme.colors.background.paper};
  box-shadow: 0 ${getFibonacciByIndex(5)}px ${getFibonacciByIndex(8)}px rgba(0, 0, 0, 0.08);
  padding: ${getFibonacciByIndex(7)}px; // 13px
`;

const AdditionalNotes = styled.div`
  max-width: ${getFibonacciByIndex(13) * 1.5}px; // ~565px
  margin: 0 auto;
  text-align: left;
  padding: ${getFibonacciByIndex(8)}px; // 21px
  background-color: ${theme.colors.gray[50] ?? 1};
  border-radius: ${getFibonacciByIndex(6)}px; // 8px
  border-left: ${getFibonacciByIndex(3)}px solid ${theme.colors.primary.light}; // 2px
  
  h3 {
    margin-bottom: ${getFibonacciByIndex(6)}px; // 8px
    color: ${theme.colors.primary.dark};
  }
`;

export default BookingExample; 






