"use strict";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './design-system/theme/globalStyles';

/**
 * Main entry point for the Recovery Office application.
 *
 * This file renders the App component to the DOM.
 * The application uses sacred geometry principles throughout its design.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, null)
  )
);
