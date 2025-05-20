// TODO: This file contains direct document access without SSR checks
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './design-system/theme/globalStyles';

// Disable styled-components 'eval' path for strict CSP
;(window as any).SC_DISABLE_SPEEDY = true

/**
 * Main entry point for the Recovery Office application.
 * 
 * This file renders the App component to the DOM.
 * The application uses sacred geometry principles throughout its design.
 */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 






