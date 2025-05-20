/**
 * LoadingOverlay Component
 * 
 * A component that displays a loading state with an optional message.
 * It overlays the content and prevents interaction while loading.
 * Implements sacred geometry principles for loading indicators.
 */

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '../layout/Box';
import { Flex } from '../layout/Flex';
import { Text } from '../typography/Text';
import { PHI, PHI_INVERSE, ANIMATION_TIMING } from '../../../constants/sacred-geometry';

export interface LoadingOverlayProps {
  /**
   * The message to display
   */
  message?: string;
  
  /**
   * Whether the loading overlay is active
   * @default true
   */
  isActive?: boolean;
  
  /**
   * The z-index of the overlay
   * @default 10
   */
  zIndex?: number;
  
  /**
   * The background color of the overlay
   * @default 'rgba(255, 255, 255, 0.9)'
   */
  backgroundColor?: string;
  
  /**
   * The color of the spinner
   * @default 'primary.500'
   */
  spinnerColor?: string;
  
  /**
   * The color of the text
   * @default 'text.primary'
   */
  textColor?: string;
}

// Define rotation animation using golden ratio timing
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Define pulse animation using golden ratio timing
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  ${PHI_INVERSE * 100}% {
    transform: scale(${PHI});
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Overlay = styled(Flex)<{ $isActive?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => props.$isActive ? 1 : 0};
  visibility: ${props => props.$isActive ? 'visible' : 'hidden'};
  transition: opacity ${ANIMATION_TIMING.standard}ms, visibility ${ANIMATION_TIMING.standard}ms;
`;

const Spinner = styled(Box)<{ $spinnerColor?: string }>`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.$spinnerColor || props.theme.colors.primary[500]};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${rotate} ${ANIMATION_TIMING.standard * PHI}ms linear infinite;
`;

/**
 * LoadingOverlay Component
 * 
 * Displays a loading spinner with an optional message
 */
export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  message,
  isActive = true,
  zIndex = 10,
  backgroundColor = 'rgba(255, 255, 255, 0.9)',
  spinnerColor,
  textColor
}) => {
  return (
    <Overlay
      $isActive={isActive}
      zIndex={zIndex}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      aria-live="polite"
      aria-busy={isActive}
    >
      <Spinner $spinnerColor={spinnerColor} />
      
      {message && (
        <Text 
          mt={3}
          color={textColor}
          fontWeight="medium"
          variant="md"
          textAlign="center"
          style={{
            animation: `${pulse} ${ANIMATION_TIMING.standard * PHI_INVERSE}ms infinite`
          }}
        >
          {message}
        </Text>
      )}
    </Overlay>
  );
};

export default LoadingOverlay; 