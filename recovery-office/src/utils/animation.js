"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * Animation Utilities
 *
 * This module provides utility functions for animations following sacred
 * geometry principles. These utilities can be used throughout the application
 * to create harmonious, natural animations.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessibleAnimationSettings = exports.prefersReducedMotion = exports.responsiveAnimationDelay = exports.goldenSpring = exports.generateGoldenKeyframes = exports.generateGoldenSpiralPoints = exports.calculateStaggerDelay = exports.getFibonacciByIndex = exports.getAccessibleAnimationConfig = exports.createGoldenRatioAnimationDelays = exports.createFibonacciAnimationDelays = exports.fibonacciSlice = exports.getFibonacciValues = exports.getFibonacciKeys = exports.getSacredEasingCss = exports.applyGoldenRatioDuration = exports.resolveDuration = void 0;
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Export animation hooks for easier access
__exportStar(require("../hooks/useReducedMotion"), exports);
__exportStar(require("../hooks/useAnimationSequence"), exports);
__exportStar(require("../hooks/useParallaxScroll"), exports);
/**
 * Resolves a duration value to seconds based on predefined timing constants
 *
 * @param duration - Duration value as a predefined keyword or number of seconds
 * @returns The duration value in seconds
 */
var resolveDuration = function (duration) {
    if (typeof duration === 'number') {
        return duration;
    }
    switch (duration) {
        case 'faster': return sacred_geometry_1.ANIMATION_TIMING.quick * 0.5;
        case 'fast': return sacred_geometry_1.ANIMATION_TIMING.quick;
        case 'normal': return sacred_geometry_1.ANIMATION_TIMING.standard;
        case 'slow': return sacred_geometry_1.ANIMATION_TIMING.slow;
        case 'slower': return sacred_geometry_1.ANIMATION_TIMING.slow * 1.3;
        default: return sacred_geometry_1.ANIMATION_TIMING.standard;
    }
};
exports.resolveDuration = resolveDuration;
/**
 * Applies golden ratio to a duration for more natural timing
 *
 * @param duration - Duration in seconds
 * @returns Duration adjusted by golden ratio
 */
var applyGoldenRatioDuration = function (duration) {
    return duration * sacred_geometry_1.PHI_INVERSE;
};
exports.applyGoldenRatioDuration = applyGoldenRatioDuration;
/**
 * Generates CSS cubic-bezier function string from a sacred easing key
 *
 * @param easingKey - Key from SACRED_EASINGS
 * @returns CSS cubic-bezier function string
 */
var getSacredEasingCss = function (easingKey) {
    var _a, _b, _c, _d;
    var easingValues = sacred_geometry_1.SACRED_EASINGS[easingKey];
    // Ensure easingValues is an array with 4 elements
    if (Array.isArray(easingValues) && easingValues.length === 4) {
        return "cubic-bezier(".concat((_a = easingValues[0]) !== null && _a !== void 0 ? _a : 1, ", ").concat((_b = easingValues[1]) !== null && _b !== void 0 ? _b : 1, ", ").concat((_c = easingValues[2]) !== null && _c !== void 0 ? _c : 1, ", ").concat((_d = easingValues[3]) !== null && _d !== void 0 ? _d : 1, ")");
    }
    // Fallback to default cubic-bezier based on golden ratio
    return "cubic-bezier(".concat(sacred_geometry_1.PHI_INVERSE, ", 0, ").concat(1 - sacred_geometry_1.PHI_INVERSE, ", 1)");
};
exports.getSacredEasingCss = getSacredEasingCss;
/**
 * Get all keys from the FIBONACCI object as a sorted array
 * @returns Array of Fibonacci keys sorted in ascending order
 */
var getFibonacciKeys = function () {
    return Object.keys(sacred_geometry_1.FIBONACCI)
        .map(Number)
        .sort(function (a, b) { return a - b; });
};
exports.getFibonacciKeys = getFibonacciKeys;
/**
 * Get all values from the FIBONACCI object as a sorted array
 * @returns Array of Fibonacci values sorted in ascending order
 */
var getFibonacciValues = function () {
    var keys = (0, exports.getFibonacciKeys)();
    return keys.map(function (key) { var _a; return (_a = sacred_geometry_1.FIBONACCI[key]) !== null && _a !== void 0 ? _a : 1; });
};
exports.getFibonacciValues = getFibonacciValues;
/**
 * Generates Fibonacci numbers beyond what's available in the FIBONACCI constant
 * @param start Starting index in the Fibonacci sequence
 * @param end Ending index in the Fibonacci sequence (exclusive)
 * @returns Array of Fibonacci numbers from start to end
 */
var fibonacciSlice = function (start, end) {
    // Get existing Fibonacci values
    var existingValues = (0, exports.getFibonacciValues)();
    // If we have all the values we need, return them directly
    if (end <= existingValues.length) {
        return existingValues.slice(start, end);
    }
    // We need to generate additional Fibonacci numbers
    var result = __spreadArray([], existingValues, true);
    // Generate additional Fibonacci numbers
    if (result.length < 2) {
        // Ensure we have at least the first two Fibonacci numbers
        result.push(1, 1);
    }
    // Generate numbers up to the end index
    while (result.length < end) {
        var nextFib = result[result.length - 1] + result[result.length - 2];
        result.push(nextFib);
    }
    // Return the requested slice
    return result.slice(start, end);
};
exports.fibonacciSlice = fibonacciSlice;
/**
 * Creates staggered animation delays based on Fibonacci sequence
 * @param count Number of items to create delays for
 * @param baseDuration Base duration in seconds
 * @returns Array of delay values in seconds
 */
var createFibonacciAnimationDelays = function (count, baseDuration) {
    if (baseDuration === void 0) { baseDuration = 0.1; }
    // Get appropriate Fibonacci values
    var fibValues = (0, exports.fibonacciSlice)(2, 2 + count); // Start from the 3rd Fibonacci number
    // Calculate the sum to normalize
    var sum = fibValues.reduce(function (acc, val) { return acc + val; }, 0);
    // Convert to animation delays
    return fibValues.map(function (val) { return (val / sum) * baseDuration * count; });
};
exports.createFibonacciAnimationDelays = createFibonacciAnimationDelays;
/**
 * Creates staggered animation delays based on golden ratio
 * @param count Number of items to create delays for
 * @param baseDuration Base duration in seconds
 * @returns Array of delay values in seconds
 */
var createGoldenRatioAnimationDelays = function (count, baseDuration) {
    if (baseDuration === void 0) { baseDuration = 0.1; }
    return Array.from({ length: count }, function (_, i) {
        // Use powers of the golden ratio for a natural feel
        var power = Math.min(i, 7); // Cap at PHI^7 to avoid extreme values
        return baseDuration * (Math.pow(sacred_geometry_1.PHI, power) - 1);
    });
};
exports.createGoldenRatioAnimationDelays = createGoldenRatioAnimationDelays;
/**
 * Generates accessible animation config based on user's motion preferences
 * @param regularConfig Config for users without motion sensitivity
 * @param reducedConfig Config for users with motion sensitivity
 * @returns The appropriate config based on user preferences
 */
var getAccessibleAnimationConfig = function (regularConfig, reducedConfig) {
    // Check if in browser context
    if (typeof window === 'undefined')
        return regularConfig;
    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReducedMotion ? reducedConfig : regularConfig;
};
exports.getAccessibleAnimationConfig = getAccessibleAnimationConfig;
/**
 * Get Fibonacci value by index position
 * @param index - Index position (0-based)
 * @returns Fibonacci value at that position
 */
var getFibonacciByIndex = function (index) {
    var _a, _b, _c;
    var values = (0, exports.getFibonacciValues)();
    // Safety checks for out-of-bounds access
    if (values.length === 0)
        return 1; // Default fallback
    if (index < 0)
        return (_a = values[0]) !== null && _a !== void 0 ? _a : 1;
    if (index >= values.length)
        return (_b = values[values.length - 1]) !== null && _b !== void 0 ? _b : 1;
    return (_c = values[index]) !== null && _c !== void 0 ? _c : 1;
};
exports.getFibonacciByIndex = getFibonacciByIndex;
/**
 * Calculates a staggered delay for sequence animations
 *
 * @param index - Item index in the sequence
 * @param total - Total number of items
 * @param baseDelay - Base delay in seconds
 * @param useFibonacci - Whether to use Fibonacci sequence for staggering
 * @returns The calculated delay in seconds
 */
var calculateStaggerDelay = function (index, total, baseDelay, useFibonacci) {
    var _a;
    if (baseDelay === void 0) { baseDelay = 0.1; }
    if (useFibonacci === void 0) { useFibonacci = true; }
    if (!useFibonacci) {
        return index * baseDelay;
    }
    // Use Fibonacci sequence for more natural timing
    var fibValues = (0, exports.getFibonacciValues)();
    if (fibValues.length === 0)
        return index * baseDelay; // Fallback if no values
    var fibIndex = Math.min(index + 3, fibValues.length - 1);
    var fibValue = (_a = fibValues[fibIndex]) !== null && _a !== void 0 ? _a : 1; // Provide a safe default
    // Calculate proportional delay using the ratio of Fibonacci numbers
    var maxFibIndex = Math.min(total + 2, fibValues.length - 1);
    // Safely get a slice of the array (handle array bounds properly)
    var getFibSlice = function (start, end) {
        var validStart = Math.max(0, Math.min(start, fibValues.length));
        var validEnd = Math.max(validStart, Math.min(end, fibValues.length));
        return fibValues.slice(validStart, validEnd);
    };
    // Get the sum of relevant Fibonacci numbers (default to 1 if empty)
    var fibSum = getFibSlice(3, maxFibIndex + 1)
        .reduce(function (sum, num) { return sum + num; }, 0) || 1;
    // Calculate the proportional delay (avoid division by zero)
    var proportionalDelay = fibValue / fibSum;
    // Apply golden ratio for harmony
    return proportionalDelay * baseDelay * total * sacred_geometry_1.PHI_INVERSE;
};
exports.calculateStaggerDelay = calculateStaggerDelay;
/**
 * Calculates points along a golden spiral for animations
 *
 * @param steps - Number of points to generate
 * @param maxAngle - Maximum angle in radians
 * @returns Array of points along the spiral
 */
var generateGoldenSpiralPoints = function (steps, maxAngle) {
    if (maxAngle === void 0) { maxAngle = 4 * Math.PI; }
    // Ensure we have at least 2 points to avoid division by zero
    var safeSteps = Math.max(2, steps);
    var points = [];
    var angleStep = maxAngle / safeSteps;
    for (var i = 0; i < safeSteps; i++) {
        var angle = i * angleStep;
        var radius = Math.pow(sacred_geometry_1.PHI, 2 * angle / Math.PI) / 4;
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        points.push({ x: x, y: y });
    }
    return points;
};
exports.generateGoldenSpiralPoints = generateGoldenSpiralPoints;
/**
 * Generates keyframe stops based on golden ratio
 *
 * @param steps - Number of keyframe stops to generate
 * @returns Array of progress values (0-1) for keyframes
 */
var generateGoldenKeyframes = function (steps) {
    var safeSteps = Math.max(1, steps); // Ensure at least one step
    var keyframes = [0]; // Start with 0
    // Generate intermediate keyframes based on golden ratio
    for (var i = 1; i < safeSteps; i++) {
        // Use PHI_INVERSE to create a more natural progression
        var progress = 1 - Math.pow(sacred_geometry_1.PHI_INVERSE, i);
        keyframes.push(Math.min(progress, 1));
    }
    // Ensure the last value is exactly 1
    if (keyframes.length > 0) {
        keyframes[keyframes.length - 1] = 1;
    }
    return keyframes;
};
exports.generateGoldenKeyframes = generateGoldenKeyframes;
/**
 * Creates a spring animation config based on golden ratio
 *
 * @param damping - Optional damping value (uses PHI-based value if not provided)
 * @param stiffness - Optional stiffness value (uses PHI-based value if not provided)
 * @returns Spring animation configuration
 */
var goldenSpring = function (damping, stiffness) {
    // Use golden ratio to create natural spring physics
    return {
        type: 'spring',
        damping: damping !== null && damping !== void 0 ? damping : 10 * sacred_geometry_1.PHI_INVERSE,
        stiffness: stiffness !== null && stiffness !== void 0 ? stiffness : 100 * sacred_geometry_1.PHI,
        restDelta: 0.001
    };
};
exports.goldenSpring = goldenSpring;
/**
 * Creates transition delays for responsive animations based on viewport sizes
 *
 * @param baseDelay - Base delay in seconds
 * @returns Object with delays for different viewport sizes
 */
var responsiveAnimationDelay = function (baseDelay) {
    if (baseDelay === void 0) { baseDelay = 0.2; }
    return {
        xs: baseDelay * 0.5,
        sm: baseDelay * 0.6,
        md: baseDelay * 0.8,
        lg: baseDelay,
        xl: baseDelay * sacred_geometry_1.PHI_INVERSE,
    };
};
exports.responsiveAnimationDelay = responsiveAnimationDelay;
/**
 * Checks if reduced motion is preferred by the user
 *
 * @returns Whether reduced motion is preferred
 */
var prefersReducedMotion = function () {
    if (typeof window === 'undefined')
        return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
exports.prefersReducedMotion = prefersReducedMotion;
/**
 * Gets appropriate animation settings based on user's motion preferences
 *
 * @param standardDuration - Standard animation duration
 * @param standardDistance - Standard animation distance
 * @returns Appropriate animation settings
 */
var getAccessibleAnimationSettings = function (standardDuration, standardDistance) {
    if (standardDuration === void 0) { standardDuration = sacred_geometry_1.ANIMATION_TIMING.standard; }
    if (standardDistance === void 0) { standardDistance = 30; }
    var reducedMotion = (0, exports.prefersReducedMotion)();
    if (reducedMotion) {
        return {
            duration: standardDuration * 0.5,
            distance: standardDistance * 0.3,
            shouldAnimate: false
        };
    }
    return {
        duration: standardDuration,
        distance: standardDistance,
        shouldAnimate: true
    };
};
exports.getAccessibleAnimationSettings = getAccessibleAnimationSettings;
