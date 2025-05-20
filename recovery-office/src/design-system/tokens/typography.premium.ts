/**
 * Premium Typography Tokens
 * 
 * This file defines typography values for the premium design system.
 * The typography system is built around a perfect fourth (1.333) scale
 * and uses professional font families that convey trust and authority.
 */

import { pxToRem } from "../../utils/sacredGeometry";

/**
 * Font family definitions
 */
export const PREMIUM_FONT_FAMILY = {
  // Primary heading font - elegant with authority
  heading: "'Playfair Display', Georgia, 'Times New Roman', Times, serif",
  
  // Primary body font - highly readable
  body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  
  // Monospace font for code or technical content
  mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace"
};

/**
 * Font weight definitions
 */
export const PREMIUM_FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900
};

/**
 * Font size scale based on a perfect fourth ratio (1.333)
 * Base size: 16px (1rem)
 */
export const PREMIUM_FONT_SIZE = {
  // Raw pixel values
  values: {
    xs: 12,      // 0.75rem
    sm: 14,      // 0.875rem
    base: 16,    // 1rem - base font size
    md: 21,      // 1.333rem (16 × 1.333)
    lg: 28,      // 1.777rem (16 × 1.333²)
    xl: 37,      // 2.369rem (16 × 1.333³)
    xxl: 50,     // 3.157rem (16 × 1.333⁴)
    display: 67  // 4.209rem (16 × 1.333⁵)
  },
  
  // Converted to rem
  xs: pxToRem(12),
  sm: pxToRem(14),
  base: pxToRem(16),
  md: pxToRem(21),
  lg: pxToRem(28),
  xl: pxToRem(37),
  xxl: pxToRem(50),
  display: pxToRem(67),
  
  // Responsive clamp values for headings
  // Format: clamp(min, preferred, max)
  responsive: {
    h1: `clamp(${pxToRem(37)}, 3vw + 1rem, ${pxToRem(50)})`,
    h2: `clamp(${pxToRem(28)}, 2.5vw + 1rem, ${pxToRem(37)})`,
    h3: `clamp(${pxToRem(21)}, 2vw + 1rem, ${pxToRem(28)})`,
    h4: `clamp(${pxToRem(18)}, 1.5vw + 1rem, ${pxToRem(21)})`,
    h5: `clamp(${pxToRem(16)}, 1vw + 1rem, ${pxToRem(18)})`,
    h6: `clamp(${pxToRem(14)}, 0.5vw + 1rem, ${pxToRem(16)})`
  }
};

/**
 * Line height values
 * Using golden ratio and other harmonious values
 */
export const PREMIUM_LINE_HEIGHT = {
  none: 1,                     // No line height - for specific use cases
  tight: 1.2,                  // Headings
  base: 1.5,                   // Default body text
  relaxed: 1.618,              // Golden ratio for importance
  spacious: 1.8                // For improved readability
};

/**
 * Letter spacing values for fine typography control
 */
export const PREMIUM_LETTER_SPACING = {
  tighter: '-0.05em',          // Tighten for large headings
  tight: '-0.025em',           // Subtle tightening for headings
  normal: '0',                 // Default
  wide: '0.025em',             // Slight expansion
  wider: '0.05em',             // Medium expansion for small text
  widest: '0.1em',             // Maximum expansion for all-caps or very small text
  
  // Common element-specific tracking
  heading: '-0.025em',         // Default for headings
  caption: '0.025em',          // Small text and captions
  button: '0.03em',            // Button text (slightly wider)
  uppercase: '0.1em'           // All uppercase text
};

/**
 * Complete premium typography tokens
 */
export const PREMIUM_TYPOGRAPHY = {
  fontFamily: PREMIUM_FONT_FAMILY,
  fontWeight: PREMIUM_FONT_WEIGHT,
  fontSize: PREMIUM_FONT_SIZE,
  lineHeight: PREMIUM_LINE_HEIGHT,
  letterSpacing: PREMIUM_LETTER_SPACING
};

export default PREMIUM_TYPOGRAPHY; 