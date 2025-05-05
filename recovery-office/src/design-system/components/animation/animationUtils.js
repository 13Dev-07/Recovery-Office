"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessibleAnimationConfig = exports.prefersReducedMotion = exports.monitorAnimationPerformance = exports.naturalArcStagger = exports.goldenRatioStaggerDelay = exports.fibonacciStaggerDelay = exports.sacredDurations = exports.fibonacciDuration = exports.sacredEasing = void 0;
// TODO: This file contains direct window access without SSR checks
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var framer_motion_1 = require("framer-motion");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Sacred Animation Utilities
 *
 * This module provides animation utilities based on sacred geometry principles.
 * The easing functions, timing, and sequences follow golden ratio and Fibonacci patterns
 * to create naturally pleasing motion.
 */
// ===== Sacred Easing Functions =====
/**
 * Sacred easing functions based on the golden ratio.
 */
exports.sacredEasing = {
    /**
     * Standard sacred easing - balanced golden ratio curve
     * Uses the golden ratio for the x1 and x2 cubic bezier points
     */
    standard: (0, framer_motion_1.cubicBezier)(sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1),
    /**
     * Quick ease-in then slow ease-out
     * Particularly good for entrance animations
     */
    entrance: (0, framer_motion_1.cubicBezier)(sacred_geometry_1.PHI_INVERSE / 2, 0, sacred_geometry_1.PHI_INVERSE, 1),
    /**
     * Slow ease-in then quick ease-out
     * Good for exit animations and actions
     */
    exit: (0, framer_motion_1.cubicBezier)(1 - sacred_geometry_1.PHI_INVERSE, 0, 1, 1),
    /**
     * Golden ease-in - smooth acceleration
     */
    easeIn: (0, framer_motion_1.cubicBezier)(sacred_geometry_1.PHI_INVERSE, 0, 1, 1),
    /**
     * Golden ease-out - smooth deceleration
     */
    easeOut: (0, framer_motion_1.cubicBezier)(0, 0, sacred_geometry_1.PHI_INVERSE, 1),
    /**
     * Precisely balanced golden ease-in-out
     */
    easeInOut: (0, framer_motion_1.cubicBezier)(sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1),
    /**
     * Natural bounce effect using golden ratio
     */
    bounce: (0, framer_motion_1.cubicBezier)(sacred_geometry_1.PHI_INVERSE, -0.3 * sacred_geometry_1.PHI_INVERSE, 0.7, 1.3),
    /**
     * Sacred anticipation - slight pullback before main animation
     */
    anticipate: (0, framer_motion_1.cubicBezier)(0.8, -0.3 * sacred_geometry_1.PHI, 0.2, 1.2),
};
// ===== Sacred Timing Functions =====
/**
 * Utility to get the nth Fibonacci value from the FIBONACCI object.
 * Ensures safe, ordered access by index (0-based).
 */
var getFibonacciValueByIndex = function (index) {
    var _a;
    var keys = Object.keys(sacred_geometry_1.FIBONACCI)
        .map(Number)
        .sort(function (a, b) { return a - b; });
    var safeIndex = Math.max(0, Math.min(index, keys.length - 1));
    var key = (_a = keys[safeIndex]) !== null && _a !== void 0 ? _a : 1;
    return sacred_geometry_1.FIBONACCI[key];
};
/**
 * Returns a duration in seconds based on the Fibonacci sequence.
 * @param index The index in the Fibonacci sequence (0-indexed)
 * @returns Duration in seconds
 */
var fibonacciDuration = function (index) {
    // Use the utility to get the Fibonacci value by index
    return getFibonacciValueByIndex(index) / 100;
};
exports.fibonacciDuration = fibonacciDuration;
/**
 * Returns golden ratio based durations for common animation types.
 */
exports.sacredDurations = {
    /**
     * Very quick animations (UI feedback)
     */
    ultraFast: sacred_geometry_1.PHI_INVERSE / 10, // 0.062s
    /**
     * Fast animations (small transitions)
     */
    fast: sacred_geometry_1.PHI_INVERSE / 5, // 0.124s
    /**
     * Standard animations (most UI interactions)
     */
    standard: sacred_geometry_1.PHI_INVERSE / 2, // 0.309s
    /**
     * Slow animations (entrances, emphasis)
     */
    slow: sacred_geometry_1.PHI_INVERSE, // 0.618s
    /**
     * Very slow animations (dramatic effects)
     */
    verySlow: sacred_geometry_1.PHI_INVERSE * sacred_geometry_1.PHI, // 1.0s
};
// ===== Staggered Animation Helpers =====
/**
 * Calculate delay for staggered children based on Fibonacci sequence.
 *
 * @param index The index of the child element (0-indexed)
 * @param baseDelay The base delay before starting the sequence
 * @param staggerFactor Multiplier for the stagger effect (defaults to 0.05)
 * @returns Delay in seconds
 */
var fibonacciStaggerDelay = function (index, baseDelay, staggerFactor) {
    if (baseDelay === void 0) { baseDelay = 0; }
    if (staggerFactor === void 0) { staggerFactor = 0.05; }
    // Use the utility to get the Fibonacci value by index
    return baseDelay + (getFibonacciValueByIndex(index) * staggerFactor);
};
exports.fibonacciStaggerDelay = fibonacciStaggerDelay;
/**
 * Calculate delay for staggered children based on Golden Ratio.
 *
 * @param index The index of the child element (0-indexed)
 * @param baseDelay The base delay before starting the sequence
 * @param staggerFactor Multiplier for the stagger effect (defaults to 0.05)
 * @returns Delay in seconds
 */
var goldenRatioStaggerDelay = function (index, baseDelay, staggerFactor) {
    if (baseDelay === void 0) { baseDelay = 0; }
    if (staggerFactor === void 0) { staggerFactor = 0.05; }
    // Use powers of the golden ratio for a natural feel
    var goldenPower = Math.min(index, 7); // Cap at PHI^7 to avoid extreme values
    var delayMultiplier = Math.pow(sacred_geometry_1.PHI, goldenPower) - 1;
    return baseDelay + (delayMultiplier * staggerFactor);
};
exports.goldenRatioStaggerDelay = goldenRatioStaggerDelay;
/**
 * Create a natural stagger effect where middle items have the most delay.
 * This follows the golden ratio curve for a more natural distribution.
 *
 * @param index The index of the child element (0-indexed)
 * @param totalItems Total number of items in the sequence
 * @param maxDelay Maximum delay to apply to the middle item
 * @param baseDelay Base delay before starting the sequence
 * @returns Delay in seconds
 */
var naturalArcStagger = function (index, totalItems, maxDelay, baseDelay) {
    if (maxDelay === void 0) { maxDelay = 0.3; }
    if (baseDelay === void 0) { baseDelay = 0; }
    // Calculate relative position in the sequence (0 to 1)
    var position = index / (totalItems - 1);
    // Use golden ratio inspired bell curve: 4^(-PHI * (x-0.5)^2)
    // This creates a bell curve with peak at 0.5 (middle items)
    var bellCurve = Math.pow(4, -sacred_geometry_1.PHI * Math.pow(position - 0.5, 2));
    return baseDelay + (maxDelay * bellCurve);
};
exports.naturalArcStagger = naturalArcStagger;
/**
 * Monitor animation performance with sacred thresholds.
 *
 * @param callback Animation function to monitor
 * @param options Performance monitoring options
 * @returns The result of the callback
 */
var monitorAnimationPerformance = function (callback, options) {
    // Only enable monitoring in development
    if (process.env.NODE_ENV !== 'development') {
        return callback();
    }
    var name = options.name, _a = options.threshold, threshold = _a === void 0 ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(7) : _a, // 13ms (close to 16ms frame budget)
    _b = options.verbose, // 13ms (close to 16ms frame budget)
    verbose = _b === void 0 ? false : _b;
    // Start performance measurement
    var start = performance.now();
    // Execute the animation function
    var result = callback();
    // End performance measurement
    var end = performance.now();
    var duration = end - start;
    // Only log if verbose or above threshold
    if (verbose || duration > threshold) {
        console.log("%cAnimation Performance: ".concat(name), 'font-weight: bold; color: #0A4021', "\nDuration: ".concat(duration.toFixed(2), "ms"), duration > threshold
            ? "\nExceeds sacred threshold of ".concat(threshold, "ms!")
            : '\nWithin sacred threshold ✓', "\nSpending ".concat((duration / (1000 / 60)).toFixed(2), "ms of 16.67ms frame budget"));
    }
    return result;
};
exports.monitorAnimationPerformance = monitorAnimationPerformance;
/**
 * Check if reduced motion is preferred.
 * This respects the user's system preferences.
 *
 * @returns Whether reduced motion is preferred
 */
var prefersReducedMotion = function () {
    // Check if window is defined (for SSR compatibility)
    if (typeof window === 'undefined')
        return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
exports.prefersReducedMotion = prefersReducedMotion;
/**
 * Gets animation configuration based on reduced motion preference.
 * If reduced motion is preferred, returns simplified animations.
 *
 * @param fullAnimationConfig The full animation configuration
 * @param reducedAnimationConfig The reduced animation configuration
 * @returns The appropriate animation configuration
 */
var getAccessibleAnimationConfig = function (fullAnimationConfig, reducedAnimationConfig) {
    return (0, exports.prefersReducedMotion)() ? reducedAnimationConfig : fullAnimationConfig;
};
exports.getAccessibleAnimationConfig = getAccessibleAnimationConfig;
