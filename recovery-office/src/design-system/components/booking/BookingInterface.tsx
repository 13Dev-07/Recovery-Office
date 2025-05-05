/**
 * BookingInterface Component
 * 
 * A container component that manages the multi-step booking workflow.
 * Follows sacred geometry principles for spacing, proportions, and animations.
 */

import * as React from 'react';
import { useReducer } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';


import { BookingContext, bookingReducer, initialBookingState } from './state';
import { ProgressIndicator } from './ProgressIndicator';
import { BookingControls } from './BookingControls';
import { 
  ServiceSelection, 
  DateSelection, 
  ClientInfo, 
  Confirmation 
} from './steps';
import { BotanicalDecorator } from '../botanical/BotanicalDecorator';
import { isStepValid } from './validation';

export interface BookingInterfaceProps {
  /** Background color or variant */
  backgroundColor?: string;
  
  /** Whether to include botanical decorations */
  withBotanical?: boolean;
  
  /** On complete callback for when the booking is successfully submitted */
  onComplete?: (bookingData: any) => void;
  
  /** Additional CSS class name */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Array of booking step components in sequence
 */
const BOOKING_STEPS = [
  ServiceSelection,
  DateSelection,
  ClientInfo,
  Confirmation
];

/**
 * Sacred geometry easing functions based on phi
 */
const SACRED_EASINGS = {
  easeOut: [0, PHI_INVERSE, PHI_INVERSE, 1],
  easeIn: [PHI_INVERSE, 0, 1, PHI_INVERSE],
  easeInOut: [PHI_INVERSE, 0, 0, 1]
};

/**
 * BookingInterface component that manages the multi-step booking process
 */
export const BookingInterface: React.FC<BookingInterfaceProps> = ({
  backgroundColor = 'var(--color-background-light)',
  withBotanical = true,
  onComplete,
  className,
  style
}) => {
  // State management with reducer
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  
  // Get current step component
  const CurrentStep = BOOKING_STEPS[state.currentStep];
  
  // Navigation handlers
  const handleNext = () => {
    if (isStepValid(state, state.currentStep) && 
        state.currentStep < BOOKING_STEPS.length - 1) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep + 1 });
    }
  };
  
  const handlePrevious = () => {
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep - 1 });
    }
  };
  
  // Handle form submission
  const handleSubmit = async () => {
    if (isStepValid(state, state.currentStep)) {
      // Set loading state
      dispatch({ type: 'SET_SUBMITTING', payload: true });
      
      try {
        // Mock API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Set success state
        dispatch({ type: 'SET_SUBMITTED', payload: true });
        
        // Call completion callback if provided
        if (onComplete) {
          onComplete(state);
        }
      } catch (error) {
        // Set error state
        dispatch({ type: 'SET_ERROR', payload: 'An error occurred during submission' });
      } finally {
        // Clear loading state
        dispatch({ type: 'SET_SUBMITTING', payload: false });
      }
    }
  };
  
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      <BookingContainer 
        className={className} 
        style={style}
        $backgroundColor={backgroundColor}
      >
        {withBotanical && (
          <BotanicalDecorator
            botanicalType="flowerOfLife"
            position="topRight"
            size="xl"
            opacity={0.05}
            zIndex={0}
            decorative
          >
            <div />
          </BotanicalDecorator>
        )}
        
        <BookingHeader>
          <h2>Schedule a Consultation</h2>
          <p>Take the first step toward your recovery journey</p>
        </BookingHeader>
        
        <ProgressContainer>
          <ProgressIndicator 
            currentStep={state.currentStep} 
            totalSteps={BOOKING_STEPS.length} 
          />
        </ProgressContainer>
        
        <StepContainer>
          <AnimatePresence mode="wait">
            <StepContent
              key={state.currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: getFibonacciByIndex(5) * 0.01, // 0.05s
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
          isNextDisabled={!isStepValid(state, state.currentStep)}
          isSubmitting={state.isSubmitting}
          isLastStep={state.currentStep === BOOKING_STEPS.length - 1}
        />
        
        {state.error && (
          <ErrorMessage>
            {state.error}
          </ErrorMessage>
        )}
      </BookingContainer>
    </BookingContext.Provider>
  );
};

// Styled components with sacred geometry principles
const BookingContainer = styled.div<{
  $backgroundColor: string;
}>`
  width: 100%;
  max-width: ${getFibonacciByIndex(13) * 5}px; // ~1165px
  margin: 0 auto;
  padding: ${getFibonacciByIndex(8)}px; // 21px
  background-color: ${props => props.$backgroundColor};
  border-radius: ${getFibonacciByIndex(6)}px; // 8px
  box-shadow: 0 ${getFibonacciByIndex(5)}px ${getFibonacciByIndex(8)}px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  
  h2 {
    margin: 0 0 ${getFibonacciByIndex(5)}px; // 5px
    font-size: ${props => props.theme.typography.fontSize * PHI}px; // Golden ratio scaling
    color: ${props => props.theme.colors.primary[500] ?? 1};
  }
  
  p {
    margin: 0;
    font-size: ${props => props.theme.typography.fontSize}px;
    color: ${props => props.theme.colors.text.secondary};
    opacity: 0.8;
  }
`;

const ProgressContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
`;

const StepContainer = styled.div`
  position: relative;
  min-height: ${getFibonacciByIndex(11)}px; // 89px
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
`;

const StepContent = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error[500] ?? 1};
  text-align: center;
  padding: ${getFibonacciByIndex(5)}px 0; // 5px
`;

export default BookingInterface; 










