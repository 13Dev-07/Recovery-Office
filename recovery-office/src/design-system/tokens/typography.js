"use strict";
/**
 * Typography Tokens
 *
 * This file defines the typography values used in the Recovery Office design system.
 * All typography values are derived from sacred geometry principles, using the Fibonacci sequence
 * and golden ratio for natural, harmonious proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = exports.letterSpacing = exports.lineHeight = exports.fontSize = exports.fontWeight = exports.fontFamily = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
var sacredGeometry_1 = require("../../utils/sacredGeometry");
/**
 * Font family definitions
 */
exports.fontFamily = {
    // Primary font for body text - natural, organic feeling
    primary: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    // Secondary font for headings - elegant, structured
    secondary: "'Playfair Display', Georgia, serif",
    // Monospace font for code and technical content
    mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace",
};
/**
 * Font weight definitions
 */
exports.fontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};
/**
 * Font size values derived from sacred geometry
 * Base size (16px) with scaling factors based on the golden ratio (PHI)
 */
exports.fontSize = {
    // Base values from SACRED_TYPOGRAPHY
    values: sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes,
    // Converted to rem values
    xs: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.xs), // 0.625rem (10px)
    sm: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.sm), // 0.8125rem (13px)
    base: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.base), // 1rem (16px)
    md: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.md), // 1.3125rem (21px)
    lg: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.lg), // 1.625rem (26px)
    xl: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.xl), // 2.625rem (42px)
    xxl: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_TYPOGRAPHY.fontSizes.xxl), // 4.25rem (68px)
};
/**
 * Line height values
 * Key values based on golden ratio (1.618) and sacred proportions
 */
exports.lineHeight = {
    // From SACRED_TYPOGRAPHY
    values: sacred_geometry_1.SACRED_TYPOGRAPHY.lineHeights,
    // Named values
    none: 1,
    tight: sacred_geometry_1.SACRED_TYPOGRAPHY.lineHeights.tight, // 1.2
    base: sacred_geometry_1.SACRED_TYPOGRAPHY.lineHeights.base, // 1.5
    relaxed: sacred_geometry_1.SACRED_TYPOGRAPHY.lineHeights.relaxed, // 1.618 (golden ratio)
    spacious: sacred_geometry_1.SACRED_TYPOGRAPHY.lineHeights.spacious, // 1.8
};
/**
 * Letter spacing values
 */
exports.letterSpacing = {
    // From SACRED_TYPOGRAPHY
    values: sacred_geometry_1.SACRED_TYPOGRAPHY.letterSpacing,
    // Named values
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
};
/**
 * Complete typography tokens combining all typography elements
 */
exports.typography = {
    fontFamily: exports.fontFamily,
    fontWeight: exports.fontWeight,
    fontSize: exports.fontSize,
    lineHeight: exports.lineHeight,
    letterSpacing: exports.letterSpacing,
};
exports.default = exports.typography;
