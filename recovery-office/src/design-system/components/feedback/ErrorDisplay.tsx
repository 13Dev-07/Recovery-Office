/**
 * ErrorDisplay Component
 * 
 * A component that displays error states with a message and retry button.
 * Implements sacred geometry principles for layout and spacing.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../layout/Box';
import { Flex } from '../layout/Flex';
import { Text } from '../typography/Text';
import { Heading } from '../typography/Heading';
import { Button } from '../button/Button';
import { SACRED_SPACING, SACRED_RADIUS } from '../../../constants/sacred-geometry';

export interface ErrorDisplayProps {
  /**
   * The title of the error
   * @default 'An error occurred'
   */
  title?: string;
  
  /**
   * The error message to display
   * @default 'There was a problem processing your request. Please try again.'
   */
  message?: string;
  
  /**
   * Whether to show a retry button
   * @default true
   */
  showRetry?: boolean;
  
  /**
   * The text for the retry button
   * @default 'Try Again'
   */
  retryText?: string;
  
  /**
   * The callback function when retry is clicked
   */
  onRetry?: () => void;
  
  /**
   * Whether to show an icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Additional classes to apply to the component
   */
  className?: string;
}

const ErrorContainer = styled(Box).attrs(props => ({
  role: 'alert',
  'aria-live': 'assertive'
}))`
  padding: ${SACRED_SPACING.lg}px;
  border-radius: ${SACRED_RADIUS.md}px;
  background-color: rgba(255, 235, 235, 0.8);
  border: 1px solid rgba(220, 38, 38, 0.3);
`;

const ErrorIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(220, 38, 38, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DC2626;
  font-size: 24px;
  margin-bottom: ${SACRED_SPACING.md}px;
`;

/**
 * ErrorDisplay Component
 * 
 * Displays an error message with a retry option
 */
export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title = 'An error occurred',
  message = 'There was a problem processing your request. Please try again.',
  showRetry = true,
  retryText = 'Try Again',
  onRetry,
  showIcon = true,
  className
}) => {
  return (
    <ErrorContainer className={className}>
      <Flex flexDirection="column" alignItems="center" textAlign="center">
        {showIcon && (
          <ErrorIcon aria-hidden="true">
            <span>!</span>
          </ErrorIcon>
        )}
        
        <Heading as="h3" variant="h4" mb={SACRED_SPACING.sm}>
          {title}
        </Heading>
        
        <Text mb={showRetry ? SACRED_SPACING.md : 0}>
          {message}
        </Text>
        
        {showRetry && onRetry && (
          <Button 
            variant="primary" 
            onClick={onRetry}
            mt={SACRED_SPACING.sm}
          >
            {retryText}
          </Button>
        )}
      </Flex>
    </ErrorContainer>
  );
};

export default ErrorDisplay; 