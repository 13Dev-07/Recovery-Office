"use strict";
/**
 * Animation Timing Constants
 *
 * This file contains constants for animation durations, easing functions,
 * and timing values based on sacred geometry principles.
 */
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCubicBezier = exports.resolveEasing = exports.resolveDuration = exports.DEFAULT_ANIMATION_CONFIG = exports.ANIMATION_STEPS = exports.STAGGER_DELAYS = exports.EASINGS = exports.DURATIONS = void 0;
var sacred_geometry_1 = require("./sacred-geometry");
// Durations in milliseconds
exports.DURATIONS = {
    instant: 0,
    fast: (_a = sacred_geometry_1.FIBONACCI[5]) !== null && _a !== void 0 ? _a : 1 * 10, // 50ms
    normal: (_b = sacred_geometry_1.FIBONACCI[7]) !== null && _b !== void 0 ? _b : 1 * 10, // 130ms
    slow: (_c = sacred_geometry_1.FIBONACCI[9]) !== null && _c !== void 0 ? _c : 1 * 10, // 340ms
    slower: (_d = sacred_geometry_1.FIBONACCI[10]) !== null && _d !== void 0 ? _d : 1 * 10, // 550ms
    glacial: (_e = sacred_geometry_1.FIBONACCI[12]) !== null && _e !== void 0 ? _e : 1 * 10, // 1440ms
};
// Sacred easing functions based on golden ratio
exports.EASINGS = {
    // Standard easing with golden ratio influence
    standard: [0.618, 0, 0.382, 1], // Based on PHI_INVERSE and (1 - PHI_INVERSE)
    // Ease in with golden ratio influence
    easeIn: [0.618, 0, 1, 1],
    // Ease out with golden ratio influence
    easeOut: [0, 0, 0.382, 1],
    // Ease in-out with golden ratio influence
    easeInOut: [0.618, 0, 0.382, 1],
    // Botanical motion for plant-inspired animations
    botanical: [0.175, 0.885, 0.32, 1.275],
    // Pure golden ratio easing
    golden: [0, sacred_geometry_1.PHI - 1, 1, 1],
};
// Stagger delays for sequential animations (in milliseconds)
exports.STAGGER_DELAYS = {
    minimal: (_f = sacred_geometry_1.FIBONACCI[3]) !== null && _f !== void 0 ? _f : 1, // 2ms
    small: (_g = sacred_geometry_1.FIBONACCI[5]) !== null && _g !== void 0 ? _g : 1, // 5ms
    medium: (_h = sacred_geometry_1.FIBONACCI[6]) !== null && _h !== void 0 ? _h : 1, // 8ms
    large: (_j = sacred_geometry_1.FIBONACCI[7]) !== null && _j !== void 0 ? _j : 1, // 13ms
    extraLarge: (_k = sacred_geometry_1.FIBONACCI[8]) !== null && _k !== void 0 ? _k : 1, // 21ms
};
// Animation steps for multi-stage animations
exports.ANIMATION_STEPS = {
    minimal: (_l = sacred_geometry_1.FIBONACCI[4]) !== null && _l !== void 0 ? _l : 1, // 3 steps
    simple: (_m = sacred_geometry_1.FIBONACCI[5]) !== null && _m !== void 0 ? _m : 1, // 5 steps
    moderate: (_o = sacred_geometry_1.FIBONACCI[7]) !== null && _o !== void 0 ? _o : 1, // 13 steps
    complex: (_p = sacred_geometry_1.FIBONACCI[9]) !== null && _p !== void 0 ? _p : 1, // 34 steps
    elaborate: (_q = sacred_geometry_1.FIBONACCI[11]) !== null && _q !== void 0 ? _q : 1, // 89 steps
};
// Default values for animation configuration
exports.DEFAULT_ANIMATION_CONFIG = {
    duration: exports.DURATIONS.normal,
    easing: exports.EASINGS.standard,
    staggerDelay: exports.STAGGER_DELAYS.medium,
    steps: exports.ANIMATION_STEPS.simple,
};
// Helper function to resolve duration string to number
var resolveDuration = function (duration) {
    var _a;
    if (typeof duration === 'number') {
        return duration;
    }
    return (_a = exports.DURATIONS[duration]) !== null && _a !== void 0 ? _a : 1 || exports.DURATIONS.normal;
};
exports.resolveDuration = resolveDuration;
// Helper function to resolve easing string to cubic-bezier array
var resolveEasing = function (easing) {
    var _a;
    if (Array.isArray(easing)) {
        return easing;
    }
    return (_a = exports.EASINGS[easing]) !== null && _a !== void 0 ? _a : 1 || exports.EASINGS.standard;
};
exports.resolveEasing = resolveEasing;
// Helper function to create a cubic-bezier string for CSS
var createCubicBezier = function (easing) {
    var easingArray = (0, exports.resolveEasing)(easing);
    return "cubic-bezier(".concat(easingArray.join(', '), ")");
};
exports.createCubicBezier = createCubicBezier;
