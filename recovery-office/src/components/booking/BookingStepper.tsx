import * as React from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { BookingStepId } from '@types/booking.types';
import { SACRED_SPACING, PHI, FIBONACCI, PHI_INVERSE, ANIMATION_TIMING } from '@constants/sacred-geometry';
import { useBooking } from '@context/BookingContext';
import { CheckIcon } from '@design-system/icons/CheckIcon';
import { motion } from 'framer-motion';
import { Flex, Box } from '@design-system/components/layout/Box';
import { Text } from '@design-system/components/typography/Text';
import { getFibonacciByIndex } from "@utils/getFibonacciByIndex";

/**
 * Interface for a booking step item
 */
interface BookingStep {
  id: BookingStepId;
  label: string;
  description?: string;
}

/**
 * Props for the BookingStepper component
 */
interface BookingStepperProps {
  steps: BookingStep[];
  currentStepId: BookingStepId;
  onStepClick?: (stepId: BookingStepId) => void;
}

// Styled components using sacred geometry principles

/**
 * Container for the stepper component
 * Uses Fibonacci-based spacing
 */
const StepperContainer = styled(Box)`
  width: 100%;
  margin-top: ${SACRED_SPACING.lg}px;
  margin-bottom: ${SACRED_SPACING.lg}px;
`;

/**
 * Line showing progress track
 * Uses sacred spacing for dimensions
 */
const ProgressLine = styled(Box)`
  position: relative;
  height: ${SACRED_SPACING.xs}px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background.light};
  border-radius: 9999px;
  margin-bottom: ${SACRED_SPACING.xl}px;
  margin-left: ${SACRED_SPACING.lg}px;
  margin-right: ${SACRED_SPACING.lg}px;
`;

/**
 * Animated progress bar
 * Uses Framer Motion for sacred geometry-based animations
 */
const ProgressBar = styled(motion.div)`
  height: 100%;
  border-radius: 9999px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[500]};
  position: absolute;
  left: 0;
  top: 0;
`;

/**
 * Container for step indicator dots
 * Uses Golden Ratio spacing through flex distribution
 */
const StepIndicators = styled(Flex)`
  position: absolute; 
  width: 100%; 
  justify-content: space-between; 
  top: 50%; 
  transform: translateY(-50%);
`;

/**
 * Individual step dot component
 * Uses sacred proportions and golden ratio for visual harmony
 */
const StepDot = styled(Flex)<{ $status: 'completed' | 'active' | 'upcoming' }>`
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  z-index: 2;
  
  background-color: ${(props: { theme: DefaultTheme; $status: 'completed' | 'active' | 'upcoming' }) => 
    props.$status === 'completed' 
      ? props.theme.colors.primary[500]
      : props.$status === 'active' 
        ? 'white' 
        : props.theme.colors.background.light
  };
  
  border: ${(props: { theme: DefaultTheme; $status: 'completed' | 'active' | 'upcoming' }) => props.$status === 'active' ? '2px solid' : 'none'};
  border-color: ${(props: { theme: DefaultTheme; $status: 'completed' | 'active' | 'upcoming' }) => props.$status === 'active' ? props.theme.colors.primary[500] : 'transparent'};
  
  color: ${(props: { theme: DefaultTheme; $status: 'completed' | 'active' | 'upcoming' }) => 
    props.$status === 'completed' 
      ? 'white'
      : props.$status === 'active' 
        ? props.theme.colors.primary[500]
        : props.theme.colors.text.secondary
  };
  
  box-shadow: ${(props: { theme: DefaultTheme; $status: 'completed' | 'active' | 'upcoming' }) => props.$status === 'active' ? `0 ${getFibonacciByIndex(3)}px ${getFibonacciByIndex(4)}px rgba(0, 0, 0, 0.1)` : 'none'};
`;

/**
 * Step label text
 * Uses golden proportions for sizing and spacing
 */
const StepLabel = styled(Text)<{ $isActive: boolean }>`
  position: absolute;
  text-align: center;
  font-size: 0.875rem;
  white-space: nowrap;
  
  font-weight: ${(props: { theme: DefaultTheme; $isActive: boolean }) => props.$isActive ? '500' : 'normal'};
  color: ${(props: { theme: DefaultTheme; $isActive: boolean }) => props.$isActive ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

/**
 * Mobile-only step text
 * Appears on smaller screens
 */
const MobileStepText = styled(Text)`
  text-align: center;
  font-weight: 500;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.secondary};
  
  @media (min-width: 769px) {
    display: none;
  }
`;

/**
 * BookingStepper component
 * Displays a visual representation of the booking process steps
 * Follows sacred geometry principles for dimensions and spacing
 */
export const BookingStepper: React.FC<BookingStepperProps> = ({
  steps,
  currentStepId,
  onStepClick
}) => {
  const { state } = useBooking();
  const { completedSteps } = state;
  
  // Calculate progress percentage based on current step
  const progressPercentage = React.useMemo(() => {
    const currentStepIndex = steps.findIndex(step => step.id === currentStepId);
    return ((currentStepIndex) / (steps.length - 1)) * 100;
  }, [currentStepId, steps]);
  
  // Check if a step is clickable (can only go to previous steps or current step)
  const isStepClickable = (stepId: BookingStepId) => {
    return stepId <= currentStepId && typeof onStepClick === 'function';
  };
  
  // Handle step click
  const handleStepClick = (stepId: BookingStepId) => {
    if (isStepClickable(stepId) && onStepClick) {
      onStepClick(stepId);
    }
  };
  
  // Get step status (completed, active, upcoming)
  const getStepStatus = (stepId: BookingStepId): 'completed' | 'active' | 'upcoming' => {
    if (completedSteps.has(stepId) || stepId < currentStepId) return 'completed';
    if (stepId === currentStepId) return 'active';
    return 'upcoming';
  };
  
  // Easing function based on golden ratio
  const goldenEasing = [0, PHI - 1, 1 - PHI_INVERSE, 1];
  
  return (
    <StepperContainer>
      {/* Step progress line */}
      <ProgressLine>
        <ProgressBar
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ 
            duration: ANIMATION_TIMING.standard / 1000, 
            ease: goldenEasing 
          }}
        />
        
        {/* Step indicators */}
        <StepIndicators>
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const isActive = status === 'active';
            const isClickable = isStepClickable(step.id);
            
            // Apply golden ratio for step indicator sizing
            const indicatorSize = isActive 
              ? FIBONACCI[6] 
              : FIBONACCI[5];
            
            return (
              <Box 
                key={step.id}
                style={{
                  position: 'relative',
                  cursor: isClickable ? 'pointer' : 'default'
                }}
                onClick={() => handleStepClick(step.id)}
                data-testid={`booking-step-${step.id}`}
                role="button"
                aria-current={isActive ? 'step' : undefined}
                aria-label={`${step.label} ${status === 'completed' ? '(completed)' : status === 'active' ? '(current)' : '(upcoming)'}`}
                tabIndex={isClickable ? 0 : -1}
              >
                {/* Step circle */}
                <StepDot
                  $status={status}
                  style={{
                    width: `${indicatorSize}px`,
                    height: `${indicatorSize}px`,
                    transform: `translateX(-${indicatorSize / 2}px)`
                  }}
                >
                  {status === 'completed' ? (
                    <CheckIcon width={16} height={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </StepDot>
                
                {/* Step label */}
                <StepLabel
                  $isActive={isActive}
                  style={{
                    top: `${SACRED_SPACING.xl}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: `${FIBONACCI[9]}px`
                  }}
                >
                  {step.label}
                </StepLabel>
              </Box>
            );
          })}
        </StepIndicators>
      </ProgressLine>
      
      {/* Current step description */}
      <MobileStepText>
        Step {steps.findIndex(step => step.id === currentStepId) + 1}: {steps.find(step => step.id === currentStepId)?.label}
      </MobileStepText>
    </StepperContainer>
  );
}; 














