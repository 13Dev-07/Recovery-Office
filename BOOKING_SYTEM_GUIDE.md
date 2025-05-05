# Booking System Implementation Guide

## Introduction

The booking system is a critical component of the Recovery Office website, enabling potential clients to schedule consultations with financial recovery experts. This guide provides detailed instructions for implementing the booking system when rebuilding the project, ensuring it follows sacred geometry principles and maintains a trustworthy, professional experience.

## System Overview

The booking system consists of a multi-step form that guides users through the consultation scheduling process. Each step is designed to collect specific information while maintaining a clean, focused interface that inspires trust and confidence.

## Core Components

The booking system is built around these key components:

1. **BookingInterface**: Main container component that manages the overall booking flow
2. **ProgressIndicator**: Visual indicator showing progress through the booking steps
3. **BookingControls**: Navigation buttons (Previous/Next/Submit) for moving between steps
4. **Step Components**: Individual form steps (ServiceSelection, DateSelection, ClientInfo, etc.)
5. **MobileCalendarModal**: Mobile-optimized calendar view for date selection
6. **ValidationSystem**: Form validation using Zod schema validation

## Architecture & State Management

The booking system uses a step-based architecture with centralized state management:

```typescript
// Booking state interface
interface BookingState {
  selectedService: string | null;
  selectedDate: Date | null;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientMessage: string;
  timeSlot: string | null;
  agreedToTerms: boolean;
  currentStep: number;
}

// Initial state
const initialBookingState: BookingState = {
  selectedService: null,
  selectedDate: null,
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  clientMessage: '',
  timeSlot: null,
  agreedToTerms: false,
  currentStep: 0,
};

// Booking context creator
const BookingContext = createContext<{
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}>({
  state: initialBookingState,
  dispatch: () => null,
});
```

## Sacred Geometry Implementation

The booking system incorporates sacred geometry principles throughout:

1. **Layout Proportions**: Form elements maintain Golden Ratio proportions
2. **Progress Steps**: Progress indicator uses Fibonacci-based spacing
3. **Animation Timing**: Transitions between steps use sacred easing curves
4. **Visual Elements**: Botanical elements reinforce trust at key decision points

## Example Component: BookingInterface

```typescript
import React, { useReducer } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { PHI, PHI_INVERSE, FIBONACCI, SACRED_EASINGS } from '../../constants/sacred-geometry';
import { BookingContext, bookingReducer, initialBookingState } from './state';
import { ProgressIndicator } from './ProgressIndicator';
import { BookingControls } from './BookingControls';
import { ServiceSelection, DateSelection, ClientInfo, Confirmation } from './steps';
import { BotanicalElement } from '../../design-system/botanical';

// Step components array
const BOOKING_STEPS = [
  ServiceSelection,
  DateSelection, 
  ClientInfo,
  Confirmation
];

export const BookingInterface: React.FC = () => {
  // State management with reducer
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  
  // Get current step component
  const CurrentStep = BOOKING_STEPS[state.currentStep];
  
  // Handle next step navigation
  const handleNext = () => {
    if (state.currentStep < BOOKING_STEPS.length - 1) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep + 1 });
    }
  };
  
  // Handle previous step navigation
  const handlePrevious = () => {
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep - 1 });
    }
  };
  
  // Handle form submission
  const handleSubmit = async () => {
    // Form submission logic
  };
  
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      <BookingContainer>
        <BookingHeader>
          <h2>Schedule a Consultation</h2>
          <p>Our experts are ready to help you recover your assets</p>
        </BookingHeader>
        
        <ProgressContainer>
          <ProgressIndicator 
            currentStep={state.currentStep} 
            totalSteps={BOOKING_STEPS.length} 
          />
        </ProgressContainer>
        
        <StepContainer>
          <BotanicalDecoration>
            <BotanicalElement
              variant="oliveBranch"
              size="md"
              opacity="low"
              colorScheme="primary"
              withAnimation={true}
              animationType="draw"
            />
          </BotanicalDecoration>
          
          <AnimatePresence mode="wait">
            <StepContent
              key={state.currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: FIBONACCI[7] * 0.01, // 0.13s
                ease: SACRED_EASINGS.easeInOut,
              }}
            >
              <CurrentStep />
            </StepContent>
          </AnimatePresence>
        </StepContainer>
        
        <BookingControls
          currentStep={state.currentStep}
          totalSteps={BOOKING_STEPS.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          isLastStep={state.currentStep === BOOKING_STEPS.length - 1}
          isSubmitDisabled={!isFormValid(state)}
        />
      </BookingContainer>
    </BookingContext.Provider>
  );
};

// Form validation helper
const isFormValid = (state: BookingState): boolean => {
  // Validation logic based on current step
  switch (state.currentStep) {
    case 0: // Service Selection
      return !!state.selectedService;
    case 1: // Date Selection
      return !!state.selectedDate && !!state.timeSlot;
    case 2: // Client Info
      return !!state.clientName && !!state.clientEmail && state.agreedToTerms;
    case 3: // Confirmation
      return true;
    default:
      return false;
  }
};

// Styled components
const BookingContainer = styled.div`
  width: 100%;
  max-width: ${FIBONACCI[13]}px; // 233px
  margin: 0 auto;
  padding: ${FIBONACCI[8]}px; // 21px
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${FIBONACCI[6]}px; // 8px
  box-shadow: 0 ${FIBONACCI[5]}px ${FIBONACCI[7]}px rgba(0, 0, 0, 0.1);
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: ${FIBONACCI[8]}px; // 21px
  
  h2 {
    margin: 0 0 ${FIBONACCI[5]}px; // 5px
    font-size: ${({ theme }) => theme.typography.size.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.size.base};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProgressContainer = styled.div`
  margin-bottom: ${FIBONACCI[7]}px; // 13px
`;

const StepContainer = styled.div`
  position: relative;
  min-height: ${FIBONACCI[11]}px; // 89px
  margin-bottom: ${FIBONACCI[7]}px; // 13px
`;

const StepContent = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const BotanicalDecoration = styled.div`
  position: absolute;
  top: ${PHI_INVERSE * -100}%;
  right: ${PHI_INVERSE * -100}%;
  z-index: 0;
  opacity: 0.2;
  transform: rotate(45deg);
`;

export default BookingInterface;
```

## Example Component: ProgressIndicator

```typescript
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { PHI, PHI_INVERSE, FIBONACCI, SACRED_EASINGS } from '../../constants/sacred-geometry';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  return (
    <ProgressContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Step key={index} $isActive={index <= currentStep}>
          <StepCircle 
            $isActive={index <= currentStep}
            $isCurrent={index === currentStep}
          >
            {index < currentStep ? (
              <CheckIcon>✓</CheckIcon>
            ) : (
              <StepNumber>{index + 1}</StepNumber>
            )}
          </StepCircle>
          
          {index < totalSteps - 1 && (
            <StepConnector>
              <StepProgress 
                $progress={index < currentStep ? 1 : index === currentStep ? 0.5 : 0}
              />
            </StepConnector>
          )}
        </Step>
      ))}
    </ProgressContainer>
  );
};

// Styled components with sacred geometry proportions
const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface StepProps {
  $isActive: boolean;
}

const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  flex: 1;
  
  &:last-child {
    flex: 0;
  }
`;

interface StepCircleProps {
  $isActive: boolean;
  $isCurrent: boolean;
}

const StepCircle = styled.div<StepCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${FIBONACCI[7]}px; // 13px
  height: ${FIBONACCI[7]}px; // 13px
  border-radius: 50%;
  background-color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.background};
  border: 1px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.border};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.text};
  font-size: ${FIBONACCI[5]}px; // 5px
  font-weight: 600;
  transition: all 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
  transform: ${({ $isCurrent }) => $isCurrent ? `scale(${PHI})` : 'scale(1)'};
`;

const StepNumber = styled.span`
  line-height: 1;
`;

const CheckIcon = styled.span`
  line-height: 1;
`;

const StepConnector = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border};
  position: relative;
  margin: 0 ${FIBONACCI[5]}px; // 5px
`;

interface StepProgressProps {
  $progress: number;
}

const StepProgress = styled.div<StepProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $progress }) => $progress * 100}%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
`;

export default ProgressIndicator;
```

## Validation with Zod

Form validation uses Zod schema validation:

```typescript
import { z } from 'zod';
import { PHI } from '../../constants/sacred-geometry';

// Client information validation schema
export const clientInfoSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Please enter a valid email address'),
  clientPhone: z.string().optional(),
  clientMessage: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

// Date selection validation schema
export const dateSelectionSchema = z.object({
  selectedDate: z.date({
    required_error: 'Please select a date',
    invalid_type_error: 'Invalid date format',
  })
    .refine(date => {
      const now = new Date();
      return date > now;
    }, {
      message: 'Date must be in the future',
    })
    .refine(date => {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + Math.round(30 * PHI)); // ~48 days ahead (using golden ratio)
      return date <= maxDate;
    }, {
      message: 'Date cannot be more than 6 weeks in the future',
    }),
  timeSlot: z.string({
    required_error: 'Please select a time slot',
  }),
});
```

## Mobile Considerations

The booking system is designed to be fully responsive, with special mobile adaptations:

1. **MobileCalendarModal**: Touch-friendly date picker for small screens
2. **Simplified UI**: More focused steps with reduced visual elements on mobile
3. **Touch UI**: Larger tap targets following Fibonacci sizes
4. **Scroll Behavior**: Each step fits within the viewport to avoid scrolling

## Accessibility Features

The booking system ensures accessibility:

1. **Keyboard Navigation**: Tab ordering follows a logical flow
2. **Screen Reader Support**: Form elements have proper ARIA labels
3. **Focus Management**: Focus is automatically moved between steps
4. **Error Messaging**: Error states are clearly announced to screen readers

## Best Practices

Follow these best practices when rebuilding the booking system:

1. **Step Validation**: Validate each step before allowing progression
2. **Intuitive UI**: Clear instructions at each step
3. **Error Handling**: Graceful handling of validation errors
4. **Visual Feedback**: Loading states for all asynchronous operations
5. **State Persistence**: Save partial bookings in localStorage to prevent data loss
6. **Responsive Design**: Test thoroughly on all screen sizes

## Integration with Backend

The booking system communicates with the backend API:

```typescript
// Service for sending booking information
export const submitBooking = async (bookingData: BookingState): Promise<BookingResponse> => {
  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    if (!response.ok) {
      throw new Error('Booking submission failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting booking:', error);
    throw error;
  }
};
```

## Testing Strategy

When rebuilding the booking system, implement these testing strategies:

1. **Form Validation Tests**: Test all validation rules
2. **UI State Tests**: Verify correct UI updates based on state changes
3. **Integration Tests**: Test the complete booking flow
4. **Accessibility Tests**: Verify WCAG compliance
5. **Responsive Tests**: Test on various screen sizes

## Conclusion

The booking system is a critical conversion point for the Recovery Office website. By following sacred geometry principles in its design, it creates a sense of trust and harmony that helps users feel confident in taking the next step towards financial recovery. 