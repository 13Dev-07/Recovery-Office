import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/common';
import AppRoutes from './routes';
import { ThemeProvider } from './design-system/theme/ThemeProvider';

/**
 * Main App Component
 * 
 * Sets up the core providers and routing for the Recovery Office application.
 * This is the proper full implementation for production use.
 */
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider mode="light">
        <ErrorBoundary>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App; 





