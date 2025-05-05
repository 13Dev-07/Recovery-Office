import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { PHI, PHI_INVERSE, SACRED_SPACING, FIBONACCI } from '@constants/sacred-geometry';
import { getFibonacciByIndex } from "@utils/getFibonacciByIndex";

/**
 * Props for the ProgressIndicator component
 * 
 * @interface ProgressIndicatorProps
 * @property {number} currentStep - The current active step (0-indexed)
 * @property {number} totalSteps - The total number of steps
 * @property {string[]} stepLabels - Labels for each step
 */
interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

/**
 * Container for the progress indicator that spans the full width
 * Uses sacred spacing for margins
 */
const ProgressContainer = styled.div`
  width: 100%;
  margin-bottom: ${SACRED_SPACING.xl}px;
`;

/**
 * Progress track that shows the background line for the progress
 * Height is based on a small Fibonacci number
 */
const ProgressTrack = styled.div`
  width: 100%;
  height: ${getFibonacciByIndex(4)}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.light};
  border-radius: ${getFibonacciByIndex(4)}px;
  margin-bottom: ${SACRED_SPACING.md}px;
  position: relative;
  overflow: hidden;
`;

/**
 * Indicator fill that shows the progress visually
 * Uses an animation timing based on Fibonacci sequence
 */
const ProgressFill = styled.div<{ fillPercentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props: { fillPercentage: number }) => props.fillPercentage}%;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent.main};
  border-radius: ${getFibonacciByIndex(4)}px;
  transition: width ${getFibonacciByIndex(7) * 10}ms ease-in-out;
`;

/**
 * Container for the step markers
 * Uses flexbox to distribute markers evenly
 */
const StepMarkersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

/**
 * Container for individual step marker and label
 * Text alignment calculated to prevent overflow
 */
const StepMarker = styled.div<{ isActive: boolean; isCompleted: boolean; index: number; totalSteps: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  /* Apply special alignment for first and last elements */
  ${(props: { index: number; totalSteps: number }) => {
    if (props.index === 0) {
      return 'align-items: flex-start; text-align: left;';
    } else if (props.index === props.totalSteps - 1) {
      return 'align-items: flex-end; text-align: right;';
    }
    return '';
  }}
`;

/**
 * The circle marker for each step
 * Size based on Fibonacci numbers, with golden ratio for active markers
 */
const Marker = styled.div<{ isActive: boolean; isCompleted: boolean }>`
  width: ${(props: { isActive: boolean }) => props.isActive ? getFibonacciByIndex(6) : getFibonacciByIndex(5)}px;
  height: ${(props: { isActive: boolean }) => props.isActive ? getFibonacciByIndex(6) : getFibonacciByIndex(5)}px;
  border-radius: 50%;
  background-color: ${(props: { isCompleted: boolean; isActive: boolean; theme: DefaultTheme }) => {
    if (props.isCompleted || props.isActive) {
      return props.theme.colors.accent.main;
    }
    return props.theme.colors.background.medium;
  }};
  margin-bottom: ${SACRED_SPACING.xxs}px;
  transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  
  /* Scale active marker by PHI */
  transform: ${(props: { isActive: boolean }) => props.isActive ? `scale(${PHI_INVERSE + 1})` : 'scale(1)'};
`;

/**
 * Label for each step
 * Font size consistent with the sacred typography scale
 */
const StepLabel = styled.span<{ isActive: boolean; isCompleted: boolean }>`
  font-size: 0.875rem;
  font-weight: ${(props: { isActive: boolean; isCompleted: boolean }) => (props.isActive || props.isCompleted) ? '600' : '400'};
  color: ${(props: { isActive: boolean; isCompleted: boolean; theme: DefaultTheme }) => {
    if (props.isActive) {
      return props.theme.colors.text.dark;
    } else if (props.isCompleted) {
      return props.theme.colors.accent.dark;
    }
    return props.theme.colors.text.light;
  }};
  transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  max-width: ${SACRED_SPACING.xxl}px;
`;

/**
 * ProgressIndicator component
 * Visual indicator of the booking process progress with step markers
 * Implements sacred geometry principles throughout
 */
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepLabels,
}) => {
  // Calculate the fill percentage based on the current step
  // Using PHI_INVERSE (0.618) for a more natural progression
  const fillPercentage = (currentStep / (totalSteps - 1)) * 100;
  
  return (
    <ProgressContainer>
      <ProgressTrack>
        <ProgressFill fillPercentage={fillPercentage} />
      </ProgressTrack>
      
      <StepMarkersContainer>
        {stepLabels.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <StepMarker 
              key={`step-${index}`} 
              isActive={isActive}
              isCompleted={isCompleted}
              index={index}
              totalSteps={totalSteps}
            >
              <Marker isActive={isActive} isCompleted={isCompleted} />
              <StepLabel isActive={isActive} isCompleted={isCompleted}>
                {label}
              </StepLabel>
            </StepMarker>
          );
        })}
      </StepMarkersContainer>
    </ProgressContainer>
  );
};

export default ProgressIndicator; 













