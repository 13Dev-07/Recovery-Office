"use strict";
/**
 * Global Styles
 *
 * This file defines the global styles applied to the entire application.
 * It sets up CSS variables, resets, and base styles following sacred geometry principles.
 */
import { createGlobalStyle } from 'styled-components';

// Define sacred geometry constants
const PHI = 1.618033988749895;
const PHI_INVERSE = 0.618033988749895;

/**
 * Global styles component using styled-components
 */
const GlobalStyles = createGlobalStyle`
  /* CSS Variables for theme values */
  :root {
    /* Sacred Geometry Constants */
    --phi: ${PHI};
    --phi-inverse: ${PHI_INVERSE};
    
    /* Colors */
    --primary-color: #81976F;
    --secondary-color: #7A9EA7;
    --background-color: #FCFBF8;
    --text-color: #353632;
    
    /* Spacing */
    --spacing-base: 8px;
  }
  
  /* Reset and Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    line-height: var(--phi);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: calc(var(--spacing-base) * 2);
  }
  
  h1 {
    font-size: calc(1rem * var(--phi) * var(--phi));
  }
  
  h2 {
    font-size: calc(1rem * var(--phi));
  }
  
  h3 {
    font-size: calc(1rem * var(--phi-inverse) * var(--phi));
  }
  
  p {
    margin-bottom: calc(var(--spacing-base) * 2);
    max-width: 70ch; /* Optimal reading width based on Golden Ratio */
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #6c8255;
  }
  
  img, svg {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  
  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export { GlobalStyles };
export default GlobalStyles;
