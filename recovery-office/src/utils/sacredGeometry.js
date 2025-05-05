"use strict";
/**
 * Sacred Geometry Utility Functions
 *
 * This file provides utility functions for implementing sacred geometry principles
 * throughout the Recovery Office application. These functions help ensure consistent
 * application of the Golden Ratio and Fibonacci sequence.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseGoldenRatio = exports.goldenRatio = exports.goldenSection = exports.getSacredSpacing = exports.fibonacciToRem = exports.fibonacciSpacing = exports.goldenInverseScale = exports.goldenScale = exports.pxToRem = exports.getFibonacciByIndex = exports.FIBONACCI = exports.PHI_INVERSE = exports.PHI = void 0;
// Core constants
exports.PHI = 1.618033988749895;
exports.PHI_INVERSE = 0.618033988749895;
// Fibonacci sequence up to 144
exports.FIBONACCI = {
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55,
    11: 89,
    12: 144
};
/**
 * Gets a Fibonacci value by its sequence index
 * @param index The index in the Fibonacci sequence
 * @returns The Fibonacci number at that index
 */
var getFibonacciByIndex = function (index) {
    return exports.FIBONACCI[index] || 1;
};
exports.getFibonacciByIndex = getFibonacciByIndex;
/**
 * Converts a pixel value to rem using a base font size of 16px
 *
 * @param px - The pixel value to convert
 * @returns The equivalent rem value as a string with 'rem' unit
 */
var pxToRem = function (px) {
    return "".concat(px / 16, "rem");
};
exports.pxToRem = pxToRem;
/**
 * Scales a base value by the Golden Ratio a specified number of times
 *
 * @param value - The base value to scale
 * @param steps - Number of times to multiply by the Golden Ratio (can be negative for division)
 * @returns The scaled value
 */
var goldenScale = function (value, steps) {
    if (steps === void 0) { steps = 1; }
    return value * Math.pow(exports.PHI, steps);
};
exports.goldenScale = goldenScale;
/**
 * Scales a base value by the inverse of the Golden Ratio a specified number of times
 *
 * @param value - The base value to scale
 * @param steps - Number of times to multiply by the inverse Golden Ratio
 * @returns The scaled value
 */
var goldenInverseScale = function (value, steps) {
    if (steps === void 0) { steps = 1; }
    return value * Math.pow(exports.PHI_INVERSE, steps);
};
exports.goldenInverseScale = goldenInverseScale;
/**
 * Gets spacing based on Fibonacci numbers
 * 
 * @param index - Fibonacci sequence index
 * @returns A spacing value in pixels
 */
var fibonacciSpacing = function (index) {
    return (0, exports.getFibonacciByIndex)(index);
};
exports.fibonacciSpacing = fibonacciSpacing;
/**
 * Converts a Fibonacci value to rem
 * 
 * @param index - Fibonacci sequence index
 * @returns A spacing value in rem
 */
var fibonacciToRem = function (index) {
    return (0, exports.pxToRem)((0, exports.fibonacciSpacing)(index));
};
exports.fibonacciToRem = fibonacciToRem;
/**
 * Gets sacred spacing utility
 * 
 * @param index - Fibonacci sequence index or direct value
 * @returns Spacing in pixels
 */
var getSacredSpacing = function (index) {
    if (typeof index === 'number') {
        return exports.FIBONACCI[index] || index;
    }
    return 8;
};
exports.getSacredSpacing = getSacredSpacing;
/**
 * Calculates a Golden Ratio segment of a given value
 *
 * @param value - The total value to divide according to the Golden Ratio
 * @returns The calculated segment value (61.8% of the value)
 */
var goldenSection = function (value) {
    return value * exports.PHI_INVERSE;
};
exports.goldenSection = goldenSection;
/**
 * Gets the golden ratio multiplier
 * @returns The golden ratio constant
 */
var goldenRatio = function () { return exports.PHI; };
exports.goldenRatio = goldenRatio;
/**
 * Gets the inverse golden ratio multiplier
 * @returns The inverse golden ratio constant
 */
var inverseGoldenRatio = function () { return exports.PHI_INVERSE; };
exports.inverseGoldenRatio = inverseGoldenRatio;
