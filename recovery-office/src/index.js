"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: This file contains direct document access without SSR checks
var React = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
require("./design-system/theme/globalStyles");
/**
 * Main entry point for the Recovery Office application.
 *
 * This file renders the App component to the DOM.
 * The application uses sacred geometry principles throughout its design.
 */
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App_1.default />
  </React.StrictMode>);
