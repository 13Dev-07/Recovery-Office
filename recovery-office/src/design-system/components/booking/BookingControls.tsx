/**
 * BookingControls Component
 * 
 * Provides navigation buttons for the booking workflow.
 * Applies sacred geometry principles for spacing and proportions.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';


import { Button } from '../button/Button';

export interface BookingControlsProps {
  /** Current step index (0-based) */
  currentStep: number;
  
  /** Total number of steps */
  totalSteps: number;
  
  /** Handler for going to the next step */
  onNext: () => void;
  
  /** Handler for going to the previous step */
  onPrevious: () => void;
  
  /** Handler for submitting the form on the final step */
  onSubmit: () => void;
  
  /** Whether the next/submit button is disabled */
  isNextDisabled?: boolean;
  
  /** Whether the form is being submitted */
  isSubmitting?: boolean;
  
  /** Whether this is the last step */
  isLastStep?: boolean;
  
  /** Button variant style */
  buttonVariant?: 'primary' | 'secondary' | 'accent';
  
  /** Button size */
  buttonSize?: 'sm' | 'md' | 'lg';
  
  /** Additional className */
  className?: string;
}

/**
 * BookingControls component for step navigation
 */
export const BookingControls: React.FC<BookingControlsProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSubmit,
  isNextDisabled = false,
  isSubmitting = false,
  isLastStep = false,
  buttonVariant = 'primary',
  buttonSize = 'md',
  className,
}) => {
  return (
    <ControlsContainer className={className}>
      <LeftControls $visible={currentStep > 0}>
        <Button
          variant="outline"
          size={buttonSize}
          onClick={onPrevious}
          disabled={currentStep === 0 || isSubmitting}
          style={{ opacity: currentStep === 0 ? 0 : 1 }}
        >
          Previous
        </Button>
      </LeftControls>
      
      <StepIndicator>
        Step {currentStep + 1} of {totalSteps}
      </StepIndicator>
      
      <RightControls>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          onClick={isLastStep ? onSubmit : onNext}
          disabled={isNextDisabled || isSubmitting}
          isLoading={isSubmitting}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </RightControls>
    </ControlsContainer>
  );
};

// Styled components with sacred geometry principles
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${getFibonacciByIndex(8)}px; // 21px
  padding-top: ${getFibonacciByIndex(5)}px; // 5px
  border-top: 1px solid ${props => props.theme.colors.gray[200] ?? 1};
`;

interface LeftControlsProps {
  $visible: boolean;
}

const LeftControls = styled.div<LeftControlsProps>`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  transition: opacity 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
`;

const RightControls = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const StepIndicator = styled.div`
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  color: ${props => props.theme.colors.text.secondary};
  padding: 0 ${getFibonacciByIndex(6)}px; // 8px
  opacity: 0.8;
  
  /* Center text with proper alignment */
  flex: 0 0 auto;
  text-align: center;
  
  /* Golden ratio typography scaling */
  letter-spacing: ${PHI_INVERSE * 0.1}em;
  
  /* Subtle highlight for readability */
  @media (prefers-color-scheme: dark) {
    text-shadow: 0 ${getFibonacciByIndex(1)}px ${getFibonacciByIndex(2)}px rgba(0, 0, 0, 0.3);
  }
  
  @media (prefers-color-scheme: light) {
    text-shadow: 0 ${getFibonacciByIndex(1)}px ${getFibonacciByIndex(2)}px rgba(255, 255, 255, 0.5);
  }
`;

export default BookingControls; 










