"use strict";
/**
 * Breakpoints Tokens
 *
 * This file defines the responsive breakpoints for the Recovery Office design system,
 * based on the Fibonacci sequence to create natural, harmonious responsive layouts.
 *
 * Breakpoints are strategically placed at values derived from the Fibonacci sequence,
 * creating a natural progression of screen sizes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = exports.breakpointValues = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
var sacredGeometry_1 = require("../../utils/sacredGeometry");
/**
 * Breakpoint values in pixels
 * Based on Fibonacci values for natural scaling
 */
exports.breakpointValues = {
    xs: (0, sacredGeometry_1.getFibonacciByIndex)(10), // 55px - Mobile small (theoretical, not practical as a min-width)
    sm: (0, sacredGeometry_1.getFibonacciByIndex)(13), // 233px - Mobile
    md: (0, sacredGeometry_1.getFibonacciByIndex)(14), // 377px - Mobile large
    lg: (0, sacredGeometry_1.getFibonacciByIndex)(15), // 610px - Tablet
    xl: (0, sacredGeometry_1.getFibonacciByIndex)(16), // 987px - Desktop
    xxl: sacred_geometry_1.SACRED_GRID.containers.xl, // 1440px - Large desktop
};
/**
 * Media query strings for use in styled-components
 */
exports.breakpoints = {
    /**
     * Raw breakpoint values
     */
    values: exports.breakpointValues,
    /**
     * Media query for screen width above the given breakpoint (inclusive)
     */
    up: function (key) {
        var _a;
        return "@media (min-width: ".concat((_a = exports.breakpointValues[key]) !== null && _a !== void 0 ? _a : 1, "px)");
    },
    /**
     * Media query for screen width below the given breakpoint (exclusive)
     */
    down: function (key) {
        var _a;
        return "@media (max-width: ".concat((_a = exports.breakpointValues[key]) !== null && _a !== void 0 ? _a : 1 - 0.1, "px)");
    },
    /**
     * Media query for screen width between the given breakpoints (inclusive)
     */
    between: function (start, end) {
        var _a, _b;
        return "@media (min-width: ".concat((_a = exports.breakpointValues[start]) !== null && _a !== void 0 ? _a : 1, "px) and (max-width: ").concat((_b = exports.breakpointValues[end]) !== null && _b !== void 0 ? _b : 1 - 0.1, "px)");
    },
    /**
     * Media query for screen width exactly at the given breakpoint
     */
    only: function (key) {
        var _a;
        var keys = Object.keys(exports.breakpointValues);
        var keyIndex = keys.indexOf(key);
        if (keyIndex === keys.length - 1) {
            return exports.breakpoints.up(key);
        }
        return exports.breakpoints.between(key, (_a = keys[keyIndex + 1]) !== null && _a !== void 0 ? _a : 1);
    },
    /**
     * Custom media query with raw pixel value
     */
    custom: function (minWidth) {
        return "@media (min-width: ".concat(minWidth, "px)");
    },
    /**
     * Media query for print
     */
    print: '@media print',
    /**
     * Media query for devices that support hover
     */
    hover: '@media (hover: hover)',
    /**
     * Media query for devices that prefer reduced motion
     */
    reducedMotion: '@media (prefers-reduced-motion: reduce)',
    /**
     * Media query for devices that prefer dark color scheme
     */
    prefersDark: '@media (prefers-color-scheme: dark)',
    /**
     * Media query for devices that prefer light color scheme
     */
    prefersLight: '@media (prefers-color-scheme: light)',
};
exports.default = exports.breakpoints;
