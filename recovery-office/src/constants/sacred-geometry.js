"use strict";
/**
 * Sacred Geometry Constants
 *
 * This file contains constants based on sacred geometry principles
 * to be used throughout the application for consistent proportions,
 * spacing, and visual harmony.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SACRED_TIMING = exports.GOLDEN_SECTIONS = exports.ANIMATION_TIMING = exports.SACRED_EASINGS = exports.SACRED_TYPOGRAPHY = exports.SACRED_SPACING = exports.SACRED_RADIUS = exports.SACRED_GRID = exports.getFibonacciByIndex = exports.FIBONACCI = exports.PHI_INVERSE = exports.PHI = void 0;
// Golden Ratio (Phi) and its inverse
exports.PHI = 1.618033988749895;
exports.PHI_INVERSE = 0.618033988749895;
// Fibonacci sequence (common values used in design)
// Adding Record<number, number> type to allow numeric indexing
exports.FIBONACCI = {
    1: 1,
    2: 1,
    3: 2,
    5: 3,
    8: 5,
    13: 8,
    21: 13,
    34: 21,
    55: 34,
    89: 55,
    144: 89,
    233: 144,
    377: 233,
    610: 377,
    987: 610,
};
/**
 * Gets a Fibonacci value by its sequence index
 * @param index The index in the Fibonacci sequence
 * @returns The Fibonacci number at that index
 */
var getFibonacciByIndex = function (index) {
    var _a;
    // Convert index to the corresponding key in the FIBONACCI object
    // The FIBONACCI object uses the actual Fibonacci numbers as keys
    var fibKeys = Object.keys(exports.FIBONACCI).map(Number).sort(function (a, b) { return a - b; });
    // Ensure the index is valid
    var safeIndex = Math.max(0, Math.min(index, fibKeys.length - 1));
    // Return the Fibonacci value
    return exports.FIBONACCI[(_a = fibKeys[safeIndex]) !== null && _a !== void 0 ? _a : 1];
};
exports.getFibonacciByIndex = getFibonacciByIndex;
/**
 * Sacred grid system based on golden ratio and Fibonacci
 * Used for layout composition and spacing
 */
exports.SACRED_GRID = {
    // Base grid value in pixels (based on 8px)
    base: 8,
    // Columns based on Fibonacci numbers
    columns: {
        xs: 3, // Small screen - 3 columns
        sm: 5, // Medium screen - 5 columns
        md: 8, // Large screen - 8 columns
        lg: 13, // Extra large screen - 13 columns
        xl: 21 // XXL screen - 21 columns
    },
    // Gutter values in pixels based on Fibonacci sequence
    gutters: {
        xs: 8, // Fibonacci[6] ?? 1
        sm: 13, // Fibonacci[7] ?? 1
        md: 21, // Fibonacci[8] ?? 1
        lg: 34, // Fibonacci[9] ?? 1
        xl: 55 // Fibonacci[10] ?? 1
    },
    // Container max widths based on golden ratio relationships
    containers: {
        xs: 610, // Fibonacci[14] ?? 1
        sm: 720, // Custom
        md: 890, // ~PHI * 550
        lg: 1280, // ~PHI * 790
        xl: 1440 // Custom
    }
};
/**
 * Sacred radius values for consistent border radius
 * Based on Fibonacci sequence
 */
exports.SACRED_RADIUS = {
    none: 0,
    xs: 2, // Fibonacci[2.5]
    sm: 3, // Fibonacci[3] ?? 1
    md: 5, // Fibonacci[4] ?? 1
    lg: 8, // Fibonacci[6] ?? 1
    xl: 13, // Fibonacci[7] ?? 1
    xxl: 21, // Fibonacci[8] ?? 1
    circle: '50%'
};
/**
 * Sacred spacing system for margins and padding
 * Based on Fibonacci sequence
 */
exports.SACRED_SPACING = {
    // Base spacing values following Fibonacci sequence
    none: 0,
    xxxs: 1, // Fibonacci[1] ?? 1
    xxs: 2, // Fibonacci[2] ?? 1
    xs: 3, // Fibonacci[3] ?? 1
    sm: 5, // Fibonacci[4] ?? 1
    md: 8, // Fibonacci[6] ?? 1
    lg: 13, // Fibonacci[7] ?? 1
    xl: 21, // Fibonacci[8] ?? 1
    xxl: 34, // Fibonacci[9] ?? 1
    xxxl: 55, // Fibonacci[10] ?? 1
    // Component-specific spacing based on Fibonacci
    buttonPadding: {
        sm: 5, // Fibonacci[4] ?? 1
        md: 8, // Fibonacci[6] ?? 1
        lg: 13 // Fibonacci[7] ?? 1
    },
    inputPadding: {
        sm: 5, // Fibonacci[4] ?? 1
        md: 8, // Fibonacci[6] ?? 1
        lg: 13 // Fibonacci[7] ?? 1
    },
    cardPadding: {
        sm: 8, // Fibonacci[6] ?? 1
        md: 13, // Fibonacci[7] ?? 1
        lg: 21 // Fibonacci[8] ?? 1
    },
    sectionPadding: {
        sm: 21, // Fibonacci[8] ?? 1
        md: 34, // Fibonacci[9] ?? 1
        lg: 55 // Fibonacci[10] ?? 1
    }
};
/**
 * Sacred typography system
 * Font sizes and line heights based on golden ratio and Fibonacci
 */
exports.SACRED_TYPOGRAPHY = {
    // Base font size in pixels
    baseFontSize: 16,
    // Font size scale based on PHI (golden ratio)
    fontSizes: {
        xs: 10, // base / PHI
        sm: 13, // Fibonacci[7] ?? 1
        base: 16, // Base font size
        md: 21, // base * PHI (approximately)
        lg: 26, // md * PHI (approximately)
        xl: 42, // lg * PHI (approximately)
        xxl: 68 // xl * PHI (approximately)
    },
    // Line heights based on PHI
    lineHeights: {
        tight: 1.2,
        base: 1.5,
        relaxed: 1.618, // PHI
        spacious: 1.8
    },
    // Letter spacing values
    letterSpacing: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em'
    }
};
/**
 * Sacred animation easing curves based on golden ratio
 * These values create natural, harmonious motion
 */
exports.SACRED_EASINGS = {
    // Standard easing - cubic-bezier with golden ratio influence
    standard: [0.618, 0, 0.382, 1], // Based on PHI and PHI_INVERSE
    // Ease in - cubic-bezier with golden ratio influence
    easeIn: [0.618, 0, 1, 1],
    // Ease out - cubic-bezier with golden ratio influence
    easeOut: [0, 0, 0.382, 1],
    // Botanical motion - specialized for plant-inspired animations
    botanical: [0.175, 0.885, 0.32, 1.275]
};
/**
 * Animation timing based on Fibonacci sequence
 * Durations in milliseconds
 */
exports.ANIMATION_TIMING = {
    // Base durations following Fibonacci sequence (in ms)
    quick: 380, // ~Fibonacci[12] ?? 1
    standard: 610, // Fibonacci[14] ?? 1
    slow: 990, // ~Fibonacci[16] ?? 1
    // Stagger timing for sequential animations
    stagger: {
        quick: 50, // Fibonacci[4] ?? 1 * 10
        standard: 80, // Fibonacci[6] ?? 1 * 10
        slow: 130 // Fibonacci[7] ?? 1 * 10
    }
};
/**
 * Golden sections for dividing space according to the golden ratio
 */
exports.GOLDEN_SECTIONS = {
    major: exports.PHI_INVERSE, // 0.618
    minor: 1 - exports.PHI_INVERSE // 0.382
};
/**
 * Sacred timing alias for backward compatibility
 * @deprecated Use ANIMATION_TIMING instead
 */
exports.SACRED_TIMING = exports.ANIMATION_TIMING;
