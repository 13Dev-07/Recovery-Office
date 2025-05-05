"use strict";
/**
 * Shadow Tokens
 *
 * This file defines the shadow values used in the Recovery Office design system.
 * All shadow values are derived from sacred geometry principles, using Fibonacci sequence
 * for natural, harmonious shadow depth and spread.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlow = exports.createFocusRing = exports.shadows = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
var sacredGeometry_1 = require("../../utils/sacredGeometry");
var colors_1 = require("./colors");
/**
 * Calculate shadow blur radius based on depth level
 * Using Fibonacci sequence for natural progression
 *
 * @param level - Shadow depth level (1-5)
 * @returns Blur radius in pixels
 */
var getShadowBlur = function (level) {
    // Ensure level is between 1 and 5
    var safeLevel = Math.max(1, Math.min(5, level));
    // Map level to Fibonacci index
    // Add 4 to get reasonable starting value (3 = 2px, 4 = 3px, etc.)
    var fibIndex = safeLevel + 4;
    // Get Fibonacci value at index
    return (0, sacredGeometry_1.getFibonacciByIndex)(fibIndex);
};
/**
 * Calculate shadow spread based on depth level
 * Using PHI_INVERSE to create natural relationship with blur
 *
 * @param level - Shadow depth level (1-5)
 * @returns Shadow spread in pixels
 */
var getShadowSpread = function (level) {
    var blur = getShadowBlur(level);
    // Apply PHI_INVERSE for harmonious relationship
    return Math.round(blur * sacred_geometry_1.PHI_INVERSE);
};
/**
 * Shadow tokens for different elevation levels
 * Elevation system based on Fibonacci sequence
 */
exports.shadows = {
    // No shadow
    none: 'none',
    // Subtle surface separation (buttons, cards)
    xs: "0 1px ".concat(getShadowBlur(1), "px ").concat(getShadowSpread(1), "px rgba(0, 0, 0, 0.05)"),
    // Light elevation (cards, dropdowns)
    sm: "0 2px ".concat(getShadowBlur(2), "px ").concat(getShadowSpread(2), "px rgba(0, 0, 0, 0.07)"),
    // Medium elevation (modals, popovers)
    md: "0 3px ".concat(getShadowBlur(3), "px ").concat(getShadowSpread(3), "px rgba(0, 0, 0, 0.09)"),
    // High elevation (dialogs, sidebars)
    lg: "0 5px ".concat(getShadowBlur(4), "px ").concat(getShadowSpread(4), "px rgba(0, 0, 0, 0.11)"),
    // Maximum elevation (full-screen modals)
    xl: "0 8px ".concat(getShadowBlur(5), "px ").concat(getShadowSpread(5), "px rgba(0, 0, 0, 0.13)"),
    // Inner shadow (input focus, buttons pressed)
    inset: "inset 0 2px ".concat(getShadowBlur(1), "px rgba(0, 0, 0, 0.08)"),
    // Focused element shadow
    focus: "0 0 0 2px rgba(103, 176, 80, 0.3)", // Brand green with opacity
};
/**
 * Helper function to create focus ring shadows with brand colors
 *
 * @param color - The color to use for the focus ring
 * @param width - The width of the focus ring in pixels (defaults to Fibonacci 3px)
 * @returns The focus ring shadow value
 */
var createFocusRing = function (color, width) {
    var _a;
    if (color === void 0) { color = (_a = colors_1.BASE_COLORS.green[500]) !== null && _a !== void 0 ? _a : 1; }
    if (width === void 0) { width = (0, sacredGeometry_1.getFibonacciByIndex)(4); }
    return "0 0 0 ".concat(width, "px ").concat(color);
};
exports.createFocusRing = createFocusRing;
/**
 * Helper function to create a glow effect shadow
 *
 * @param color - The color to use for the glow
 * @param intensity - The intensity of the glow (0-1)
 * @returns The glow shadow value
 */
var createGlow = function (color, intensity) {
    var _a;
    if (color === void 0) { color = (_a = colors_1.BASE_COLORS.green[500]) !== null && _a !== void 0 ? _a : 1; }
    if (intensity === void 0) { intensity = sacred_geometry_1.PHI_INVERSE; }
    var blurRadius = (0, sacredGeometry_1.getFibonacciByIndex)(7);
    return "0 0 ".concat(blurRadius, "px rgba(").concat(hexToRgb(color), ", ").concat(intensity, ")");
};
exports.createGlow = createGlow;
/**
 * Helper function to convert hex color to RGB
 *
 * @param hex - The hex color to convert
 * @returns RGB values as string "r, g, b"
 */
var hexToRgb = function (hex) {
    // Remove # if present
    var cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    // Parse hex values
    var r = parseInt(cleanHex.substr(0, 2), 16);
    var g = parseInt(cleanHex.substr(2, 2), 16);
    var b = parseInt(cleanHex.substr(4, 2), 16);
    return "".concat(r, ", ").concat(g, ", ").concat(b);
};
exports.default = exports.shadows;
