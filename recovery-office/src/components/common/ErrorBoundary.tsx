/**
 * ErrorBoundary Component
 *
 * A React error boundary component that catches JavaScript errors in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * Implements sacred geometry principles in its layout and fallback UI.
 */

import * as React from 'react';
import { Box } from '@design-system/components/layout';
import { Heading, Text } from '@design-system/components/typography';
import { Button } from '@design-system/components/button';
import { Card } from '@design-system/components/data-display';
import { OliveBranch } from '@design-system/botanical';
import { PHI } from '@constants/sacred-geometry';

// Error reporting service placeholder
const errorReportingService = {
  captureException: (error: Error, errorInfo: ErrorInfo) => {
    // In production, this would send errors to a service like Sentry
    console.error('Captured error:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }
};

interface ErrorBoundaryProps {
  /**
   * The child components that this error boundary will protect
   */
  children: ReactNode;
  
  /**
   * Optional custom fallback component to render when an error occurs
   */
  fallback?: ReactNode;
  
  /**
   * Whether to render the error details (useful in development)
   */
  showDetails?: boolean;
  
  /**
   * Function to call when an error is caught
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  
  /**
   * Optional reset function to provide to the fallback UI
   */
  resetErrorBoundary?: () => void;
}

interface ErrorBoundaryState {
  /**
   * Whether an error has been caught
   */
  hasError: boolean;
  
  /**
   * The error that was caught
   */
  error: Error | null;
  
  /**
   * Additional information about the error
   */
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary class component
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  /**
   * Update state when an error occurs
   */
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  /**
   * Catch and handle errors
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Update state with error details
    this.setState({ errorInfo });
    
    // Report the error
    errorReportingService.captureException(error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  /**
   * Reset the error state
   */
  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    
    // Call custom reset function if provided
    if (this.props.resetErrorBoundary) {
      this.props.resetErrorBoundary();
    }
  };

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, showDetails = false } = this.props;
    
    if (hasError) {
      // Return custom fallback if provided
      if (fallback) {
        return fallback;
      }
      
      // Default error UI with sacred geometry proportions
      return (
        <Box
          width="100%"
          p="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="400px"
        >
          <Card
            elevation={3}
            width="100%"
            padding="2rem"
            borderRadius="8px"
          >
            <OliveBranch
              position="absolute"
              top={-20}
              right={-20}
              opacity={0.15}
              size={PHI * 100}
            />
            
            <Heading
              as="h2"
              color="var(--color-error-600)"
              mb="1rem"
            >
              Something went wrong
            </Heading>
            
            <Text
              mb="1.5rem"
            >
              We apologize for the inconvenience. Our team has been notified of this issue.
            </Text>
            
            {showDetails && error && (
              <Box
                mt="1.5rem"
                mb="1.5rem"
                p="1rem"
                borderRadius="6px"
                bg="#f8f9fa"
                border="1px solid #e9ecef"
              >
                <Text
                  mb="0.5rem"
                  color="#6c757d"
                >
                  Error: {error.toString()}
                </Text>
                
                {errorInfo && (
                  <Box
                    mt="0.5rem"
                    maxHeight="200px"
                    overflow="auto"
                    fontFamily="monospace"
                    fontSize="0.85rem"
                    whiteSpace="pre-wrap"
                    color="#6c757d"
                  >
                    {errorInfo.componentStack}
                  </Box>
                )}
              </Box>
            )}
            
            <Box
              display="flex"
              gap="1rem"
              mt="1.5rem"
            >
              <Button
                onClick={this.resetError}
                variant="primary"
                size="md"
              >
                Try Again
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                size="md"
              >
                Return Home
              </Button>
            </Box>
          </Card>
        </Box>
      );
    }
    
    // When there's no error, render children normally
    return children;
  }
}

export default ErrorBoundary;

// Higher-order component for easy wrapping
export function withErrorBoundary<P>(
  Component: React.ComponentType<P>,
  errorBoundaryProps: Omit<ErrorBoundaryProps, 'children'> = {}
): React.FC<P> {
  const WithErrorBoundary: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WithErrorBoundary.displayName = `WithErrorBoundary(${
    Component.displayName || Component.name || 'Component'
  })`;
  
  return WithErrorBoundary;
}














