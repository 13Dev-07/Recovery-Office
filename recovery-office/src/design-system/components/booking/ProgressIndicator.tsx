/**
 * ProgressIndicator Component
 * 
 * A component that displays the user's progress through the booking steps.
 * Follows sacred geometry principles for spacing and proportions.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { getFibonacciByIndex } from '../../../utils/getFibonacciByIndex';
import { PHI, PHI_INVERSE, FIBONACCI } from '../../../constants/sacred-geometry';

export interface ProgressIndicatorProps {
  /** Current step index (0-based) */
  currentStep: number;
  
  /** Total number of steps */
  totalSteps: number;
  
  /** Whether to show step numbers */
  showNumbers?: boolean;
  
  /** Whether to show step labels */
  showLabels?: boolean;
  
  /** Labels for each step */
  stepLabels?: string[];
  
  /** Variant style */
  variant?: 'line' | 'circle' | 'dot';
  
  /** Size of the step indicators */
  size?: 'sm' | 'md' | 'lg';
  
  /** Additional className */
  className?: string;
}

/**
 * Get step indicator size based on size option
 */
const getIndicatorSize = (size: string): number => {
  switch (size) {
    case 'sm':
      return getFibonacciByIndex(5); // 5px
    case 'lg':
      return getFibonacciByIndex(7); // 13px
    case 'md':
    default:
      return getFibonacciByIndex(6); // 8px
  }
};

/**
 * ProgressIndicator component for booking steps
 */
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  showNumbers = true,
  showLabels = false,
  stepLabels = [],
  variant = 'circle',
  size = 'md',
  className,
}) => {
  // Default step labels if not provided
  const labels = stepLabels.length === totalSteps
    ? stepLabels
    : [
        'Service',
        'Date & Time',
        'Your Details',
        'Confirmation'
      ];
  
  const indicatorSize = getIndicatorSize(size);
  
  return (
    <ProgressContainer className={className}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index <= currentStep;
        const isCurrent = index === currentStep;
        
        return (
          <StepWrapper key={index} $isLast={index === totalSteps - 1}>
            <StepIndicator
              $isActive={isActive}
              $isCurrent={isCurrent}
              $size={indicatorSize}
              $variant={variant}
            >
              {showNumbers && (
                index < currentStep ? (
                  <CheckIcon>✓</CheckIcon>
                ) : (
                  <StepNumber>{index + 1}</StepNumber>
                )
              )}
            </StepIndicator>
            
            {showLabels && (
              <StepLabel $isActive={isActive} $isCurrent={isCurrent}>
                {labels[index] ?? 1}
              </StepLabel>
            )}
            
            {index < totalSteps - 1 && (
              <Connector>
                <Progress 
                  $progress={
                    index < currentStep 
                      ? 1 
                      : index === currentStep 
                        ? 0.5 
                        : 0
                  }
                />
              </Connector>
            )}
          </StepWrapper>
        );
      })}
    </ProgressContainer>
  );
};

// Styled components with sacred geometry principles
const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StepWrapper = styled.div<{ $isLast: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  
  /* Last step doesn't need to take up horizontal space */
  ${props => props.$isLast && `
    flex: 0;
  `}
`;

interface StepIndicatorProps {
  $isActive: boolean;
  $isCurrent: boolean;
  $size: number;
  $variant: string;
}

const StepIndicator = styled.div<StepIndicatorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Size calculation based on the Fibonacci sequence */
  width: ${props => props.$size * PHI}px;
  height: ${props => props.$size * PHI}px;
  
  /* Styling based on variant */
  ${props => props.$variant === 'circle' && `
    border-radius: 50%;
    border: ${getFibonacciByIndex(2)}px solid ${props.$isActive ? props.theme.colors.primary[500] ?? 1 : props.theme.colors.gray[300] ?? 1};
    background-color: ${props.$isActive 
      ? props.$isCurrent 
        ? props.theme.colors.primary[300] ?? 1 
        : props.theme.colors.primary[500] ?? 1 
      : props.theme.colors.background.light};
  `}
  
  ${props => props.$variant === 'dot' && `
    border-radius: 50%;
    background-color: ${props.$isActive 
      ? props.$isCurrent 
        ? props.theme.colors.primary[300] ?? 1 
        : props.theme.colors.primary[500] ?? 1 
      : props.theme.colors.gray[300] ?? 1};
  `}
  
  ${props => props.$variant === 'line' && `
    border-radius: ${getFibonacciByIndex(2)}px;
    height: ${getFibonacciByIndex(3)}px;
    width: ${props.$size * PHI}px;
    background-color: ${props.$isActive 
      ? props.theme.colors.primary[500] ?? 1 
      : props.theme.colors.gray[300] ?? 1};
  `}
  
  /* Animation for current step */
  transition: all 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  
  /* Current step highlight */
  ${props => props.$isCurrent && `
    box-shadow: 0 0 0 ${getFibonacciByIndex(4)}px ${props.theme.colors.primary[300] ?? 1}${PHI_INVERSE};
    transform: scale(${PHI_INVERSE * PHI});
  `}
  
  /* Special effect for completed steps */
  ${props => props.$isActive && !props.$isCurrent && `
    transform: scale(1);
  `}
`;

const CheckIcon = styled.span`
  color: ${props => props.theme.colors.background.light};
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  font-weight: bold;
`;

const StepNumber = styled.span`
  color: inherit;
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  font-weight: 500;
`;

interface StepLabelProps {
  $isActive: boolean;
  $isCurrent: boolean;
}

const StepLabel = styled.div<StepLabelProps>`
  position: absolute;
  top: ${getFibonacciByIndex(7)}px; /* 13px */
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  color: ${props => props.$isActive 
    ? props.$isCurrent 
      ? props.theme.colors.primary[500] ?? 1 
      : props.theme.colors.text.primary 
    : props.theme.colors.text.secondary};
  font-weight: ${props => props.$isCurrent ? 600 : 400};
  transition: all 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
`;

const Connector = styled.div`
  flex: 1;
  height: ${getFibonacciByIndex(2)}px; /* 1px */
  background-color: ${props => props.theme.colors.gray[300] ?? 1};
  position: relative;
`;

interface ProgressProps {
  $progress: number;
}

const Progress = styled.div<ProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.$progress * 100}%;
  background-color: ${props => props.theme.colors.primary[500] ?? 1};
  transition: width 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
`;

export default ProgressIndicator; 









