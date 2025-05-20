/**
 * ErrorBoundary Component
 * 
 * A React error boundary that catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * 
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<ErrorMessage>Something went wrong</ErrorMessage>}>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */

import * as React from 'react';

interface ErrorBoundaryProps {
  /**
   * Components that this error boundary wraps
   */
  children: React.ReactNode;
  
  /**
   * Optional custom component to render when an error occurs
   */
  fallback?: React.ReactNode;
  
  /**
   * Optional callback that runs when an error is caught
   */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  /**
   * Whether an error has been caught
   */
  hasError: boolean;
  
  /**
   * The error that was caught, if any
   */
  error: Error | null;
}

/**
 * Default fallback UI shown when an error occurs
 */
const DefaultErrorFallback: React.FC<{ error: Error | null }> = ({ error }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2 style={{ marginBottom: '10px' }}>Something went wrong</h2>
    <div style={{ color: 'red', marginBottom: '10px' }}>
      {error?.message || 'An unexpected error occurred'}
    </div>
    <p style={{ marginTop: '10px' }}>
      Please try refreshing the page or contact support if the problem persists.
    </p>
  </div>
);

/**
 * Error Boundary component that catches errors in its children
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Call the onError callback if provided
    this.props.onError?.(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // Render fallback UI if provided, otherwise render the default fallback
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 