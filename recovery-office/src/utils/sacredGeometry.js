"use strict";
/**
 * Sacred Geometry Utility Functions
 *
 * This file provides utility functions for implementing sacred geometry principles
 * throughout the Recovery Office application. These functions help ensure consistent
 * application of the Golden Ratio and Fibonacci sequence.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIBONACCI = exports.PHI_INVERSE = exports.PHI = exports.fibonacciToRem = exports.toRem = exports.goldenInverseScale = exports.goldenScale = exports.getSacredSpacing = exports.fibonacciSpacing = exports.goldenSection = exports.inverseGoldenRatio = exports.goldenRatio = exports.fibonacciSlice = exports.getFibonacciRange = exports.getFibonacci = exports.fibonacciGridColumns = exports.isSacredPoint = exports.goldenRectangleHeight = exports.createSacredBezier = exports.generateGoldenSpiralPoints = exports.goldenSpiralPosition = exports.createSpacing = exports.pxToRem = exports.closestFibonacci = exports.goldenRatioScale = exports.goldenRatioSegment = exports.getFibonacciByIndex = exports.getFibonacciValues = exports.getFibonacciKeys = void 0;
var sacred_geometry_1 = require("../constants/sacred-geometry");
Object.defineProperty(exports, "PHI", { enumerable: true, get: function () { return sacred_geometry_1.PHI; } });
Object.defineProperty(exports, "PHI_INVERSE", { enumerable: true, get: function () { return sacred_geometry_1.PHI_INVERSE; } });
Object.defineProperty(exports, "FIBONACCI", { enumerable: true, get: function () { return sacred_geometry_1.FIBONACCI; } });
/**
 * Helper function to get Fibonacci keys as numbers
 */
var getFibonacciKeys = function () {
    return Object.keys(sacred_geometry_1.FIBONACCI).map(Number).sort(function (a, b) { return a - b; });
};
exports.getFibonacciKeys = getFibonacciKeys;
/**
 * Helper function to get Fibonacci values as an array
 */
var getFibonacciValues = function () {
    var keys = (0, exports.getFibonacciKeys)();
    return keys.map(function (key) { return sacred_geometry_1.FIBONACCI[key]; });
};
exports.getFibonacciValues = getFibonacciValues;
/**
 * Gets a Fibonacci value by its sequence index
 * @param index The index in the Fibonacci sequence
 * @returns The Fibonacci number at that index
 */
exports.getFibonacciByIndex = sacred_geometry_1.getFibonacciByIndex;
/**
 * Calculates a Golden Ratio segment of a given value
 *
 * @param value - The total value to divide according to the Golden Ratio
 * @param isMajor - Whether to return the major (61.8%) or minor (38.2%) segment
 * @returns The calculated segment value
 */
var goldenRatioSegment = function (value, isMajor) {
    if (isMajor === void 0) { isMajor = true; }
    return isMajor ? value * sacred_geometry_1.PHI_INVERSE : value * (1 - sacred_geometry_1.PHI_INVERSE);
};
exports.goldenRatioSegment = goldenRatioSegment;
/**
 * Scales a base value by the Golden Ratio a specified number of times
 *
 * @param value - The base value to scale
 * @param steps - Number of times to multiply by the Golden Ratio (can be negative for division)
 * @returns The scaled value
 */
var goldenRatioScale = function (value, steps) {
    if (steps === void 0) { steps = 1; }
    return value * Math.pow(sacred_geometry_1.PHI, steps);
};
exports.goldenRatioScale = goldenRatioScale;
/**
 * Finds the closest Fibonacci number to a given value
 *
 * @param value - The value to find the closest Fibonacci number for
 * @returns The closest Fibonacci number
 */
var closestFibonacci = function (value) {
    var _a, _b;
    // Handle edge cases
    if (value <= 0)
        return (0, exports.getFibonacciByIndex)(1);
    var fibValues = (0, exports.getFibonacciValues)();
    var maxValue = fibValues[fibValues.length - 1];
    // Safety check to ensure maxValue is defined
    if (maxValue !== undefined && value >= maxValue)
        return maxValue;
    // Find the closest Fibonacci number
    var closest = (_a = fibValues[0]) !== null && _a !== void 0 ? _a : 1;
    // Safety check to ensure closest is defined
    if (closest === undefined)
        return (0, exports.getFibonacciByIndex)(1);
    var closestDiff = Math.abs(value - closest);
    for (var i = 1; i < fibValues.length; i++) {
        var fibValue = (_b = fibValues[i]) !== null && _b !== void 0 ? _b : 1;
        // Skip undefined values (shouldn't happen, but being safe)
        if (fibValue === undefined)
            continue;
        var diff = Math.abs(value - fibValue);
        if (diff < closestDiff) {
            closest = fibValue;
            closestDiff = diff;
        }
    }
    // Final safety check
    return closest !== undefined ? closest : (0, exports.getFibonacciByIndex)(1);
};
exports.closestFibonacci = closestFibonacci;
/**
 * Converts a pixel value to rem using the sacred typography base
 *
 * @param px - The pixel value to convert
 * @returns The equivalent rem value as a string with 'rem' unit
 */
var pxToRem = function (px) {
    return "".concat(px / sacred_geometry_1.SACRED_TYPOGRAPHY.baseFontSize, "rem");
};
exports.pxToRem = pxToRem;
/**
 * Creates spacing values based on Fibonacci sequence multiples
 *
 * @param value - The base value (can be a number or a key of SACRED_SPACING)
 * @param multiplier - Number to multiply the spacing by
 * @returns The calculated spacing value in pixels
 */
var createSpacing = function (value, multiplier) {
    var _a;
    if (multiplier === void 0) { multiplier = 1; }
    var baseValue;
    if (typeof value === 'number') {
        baseValue = value;
    }
    else {
        // Get the value safely from SACRED_SPACING
        var spacingValue = (_a = sacred_geometry_1.SACRED_SPACING[value]) !== null && _a !== void 0 ? _a : 1;
        // If the value is an object (like buttonPadding), use default md value
        if (typeof spacingValue === 'object' && spacingValue !== null) {
            baseValue = spacingValue.md;
        }
        else {
            baseValue = spacingValue;
        }
    }
    return baseValue * multiplier;
};
exports.createSpacing = createSpacing;
/**
 * Calculates a position along a Golden Spiral
 *
 * @param angle - The angle in radians
 * @param growthFactor - Growth factor for the spiral (default: Golden Ratio)
 * @returns Coordinates {x, y} along the spiral
 */
var goldenSpiralPosition = function (angle, growthFactor) {
    if (growthFactor === void 0) { growthFactor = sacred_geometry_1.PHI; }
    var radius = Math.pow(growthFactor, angle / (2 * Math.PI));
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
    };
};
exports.goldenSpiralPosition = goldenSpiralPosition;
/**
 * Generates an array of positions along a Golden Spiral
 *
 * @param count - Number of points to generate
 * @param maxAngle - Maximum angle in radians (default: 4π, two full rotations)
 * @returns Array of {x, y} coordinates along the spiral
 */
var generateGoldenSpiralPoints = function (count, maxAngle) {
    if (maxAngle === void 0) { maxAngle = 4 * Math.PI; }
    // Ensure we have at least 2 points to avoid division by zero
    var safeCount = Math.max(2, count);
    var points = [];
    for (var i = 0; i < safeCount; i++) {
        var angle = (i / (safeCount - 1)) * maxAngle;
        points.push((0, exports.goldenSpiralPosition)(angle));
    }
    return points;
};
exports.generateGoldenSpiralPoints = generateGoldenSpiralPoints;
/**
 * Creates a cubic bezier curve based on sacred geometry
 *
 * @param type - The type of easing to create
 * @returns CSS cubic-bezier function string
 */
var createSacredBezier = function (type) {
    var _a;
    var beziers = {
        standard: [sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1],
        easeIn: [sacred_geometry_1.PHI_INVERSE, 0, 1, 1],
        easeOut: [0, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1],
        botanical: [sacred_geometry_1.PHI_INVERSE, -sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI],
    };
    var _b = (_a = beziers[type]) !== null && _a !== void 0 ? _a : 1, x1 = _b[0], y1 = _b[1], x2 = _b[2], y2 = _b[3];
    return "cubic-bezier(".concat(x1, ", ").concat(y1, ", ").concat(x2, ", ").concat(y2, ")");
};
exports.createSacredBezier = createSacredBezier;
/**
 * Calculates values to achieve the Golden Rectangle
 *
 * @param width - The width of the rectangle
 * @returns The height needed to create a Golden Rectangle
 */
var goldenRectangleHeight = function (width) {
    return width / sacred_geometry_1.PHI;
};
exports.goldenRectangleHeight = goldenRectangleHeight;
/**
 * Calculates whether a position falls at a "sacred point" within a container
 * Used for determining optimal placement of key elements
 *
 * @param x - X position (0-1 representing percentage across width)
 * @param y - Y position (0-1 representing percentage across height)
 * @param tolerance - Acceptable deviation from exact golden ratio points
 * @returns Whether the position is at a sacred point
 */
var isSacredPoint = function (x, y, tolerance) {
    if (tolerance === void 0) { tolerance = 0.05; }
    // Check if point is at a golden ratio position on either axis
    var sacredXPoints = [sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE, 0.5];
    var sacredYPoints = [sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE, 0.5];
    var isXSacred = sacredXPoints.some(function (point) { return Math.abs(x - point) <= tolerance; });
    var isYSacred = sacredYPoints.some(function (point) { return Math.abs(y - point) <= tolerance; });
    return isXSacred && isYSacred;
};
exports.isSacredPoint = isSacredPoint;
/**
 * Calculates Fibonacci-based grid column span values
 *
 * @param totalColumns - Total number of columns in the grid
 * @returns An object with optimal column span values
 */
var fibonacciGridColumns = function (totalColumns) {
    var _a;
    var fibValues = (0, exports.getFibonacciValues)();
    // Find the largest Fibonacci number less than or equal to totalColumns
    var maxFibIndex = 0;
    for (var i = 0; i < fibValues.length; i++) {
        var fibValue = (_a = fibValues[i]) !== null && _a !== void 0 ? _a : 1;
        // Skip undefined values (shouldn't happen, but being safe)
        if (fibValue === undefined)
            continue;
        if (fibValue <= totalColumns) {
            maxFibIndex = i;
        }
        else {
            break;
        }
    }
    // Helper function to safely get Fibonacci values
    var safeGetFib = function (index, fallback) {
        var _a;
        var value = (_a = fibValues[index]) !== null && _a !== void 0 ? _a : 1;
        return value !== undefined ? value : fallback;
    };
    // Return optimal column spans based on Fibonacci sequence
    return {
        xs: safeGetFib(Math.max(0, maxFibIndex - 5), 1),
        sm: safeGetFib(Math.max(0, maxFibIndex - 4), 1),
        md: safeGetFib(Math.max(0, maxFibIndex - 3), 2),
        lg: safeGetFib(Math.max(0, maxFibIndex - 2), 3),
        xl: safeGetFib(Math.max(0, maxFibIndex - 1), 5),
        full: totalColumns,
    };
};
exports.fibonacciGridColumns = fibonacciGridColumns;
/**
 * Safely retrieve a Fibonacci number by index
 *
 * This function handles cases where the requested Fibonacci index
 * is not explicitly defined in the FIBONACCI object.
 *
 * @param index - The Fibonacci index to retrieve
 * @returns The corresponding Fibonacci number
 */
var getFibonacci = function (index) {
    var _a, _b;
    var fibKeys = (0, exports.getFibonacciKeys)();
    // If index exists in FIBONACCI object, return it directly
    if (fibKeys.includes(index)) {
        return sacred_geometry_1.FIBONACCI[index];
    }
    // For indices smaller than our smallest defined Fibonacci index
    var smallestKey = (_a = fibKeys[0]) !== null && _a !== void 0 ? _a : 1;
    if (smallestKey !== undefined && index < smallestKey) {
        return Math.max(1, Math.round(Math.pow(sacred_geometry_1.PHI, index) / Math.sqrt(5)));
    }
    // For indices larger than our largest defined Fibonacci index
    var largestKey = fibKeys.length > 0 ? fibKeys[fibKeys.length - 1] : undefined;
    if (largestKey !== undefined && index > largestKey) {
        return Math.round(Math.pow(sacred_geometry_1.PHI, index) / Math.sqrt(5));
    }
    // For indices in between our defined values
    // Find closest lower key
    var closestLowerIndex = undefined;
    for (var _i = 0, fibKeys_1 = fibKeys; _i < fibKeys_1.length; _i++) {
        var key = fibKeys_1[_i];
        if (key <= index) {
            closestLowerIndex = key;
        }
        else {
            break;
        }
    }
    if (closestLowerIndex === undefined) {
        return 1; // Default to 1 if no lower index found
    }
    // Find closest upper key
    var upperIndexPosition = fibKeys.indexOf(closestLowerIndex) + 1;
    var closestUpperIndex = (_b = fibKeys[upperIndexPosition]) !== null && _b !== void 0 ? _b : 1;
    // If the index is exactly between two Fibonacci indices, return the average
    if (closestUpperIndex !== undefined &&
        (index - closestLowerIndex === closestUpperIndex - index)) {
        // Return a value proportional to the golden ratio
        var lowerValue = sacred_geometry_1.FIBONACCI[closestLowerIndex];
        var upperValue = sacred_geometry_1.FIBONACCI[closestUpperIndex];
        return Math.round((lowerValue + upperValue) / 2);
    }
    // Otherwise return the closer value
    return sacred_geometry_1.FIBONACCI[closestLowerIndex];
};
exports.getFibonacci = getFibonacci;
/**
 * Get an array of Fibonacci numbers within a range
 *
 * @param start - Starting index (inclusive)
 * @param end - Ending index (inclusive)
 * @returns Array of Fibonacci numbers
 */
var getFibonacciRange = function (start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push((0, exports.getFibonacci)(i));
    }
    return result;
};
exports.getFibonacciRange = getFibonacciRange;
/**
 * Get a subset of the Fibonacci sequence as an array
 *
 * This is a replacement for the non-existent FIBONACCI.slice() method
 *
 * @param start - Starting index (inclusive)
 * @param end - Ending index (exclusive)
 * @returns Array of Fibonacci numbers
 */
var fibonacciSlice = function (start, end) {
    return (0, exports.getFibonacciRange)(start, end - 1);
};
exports.fibonacciSlice = fibonacciSlice;
/**
 * Calculate the Golden Ratio of a value
 *
 * @param value - The value to calculate the golden ratio of
 * @returns The golden ratio of the value
 */
var goldenRatio = function (value) {
    return value * sacred_geometry_1.PHI;
};
exports.goldenRatio = goldenRatio;
/**
 * Calculate the inverse Golden Ratio of a value
 *
 * @param value - The value to calculate the inverse golden ratio of
 * @returns The inverse golden ratio of the value
 */
var inverseGoldenRatio = function (value) {
    return value * sacred_geometry_1.PHI_INVERSE;
};
exports.inverseGoldenRatio = inverseGoldenRatio;
/**
 * Calculate a value using the golden section
 *
 * @param total - Total value to divide according to golden ratio
 * @param useMajor - Whether to return the major (61.8%) or minor (38.2%) section
 * @returns The calculated section value
 */
var goldenSection = function (total, useMajor) {
    if (useMajor === void 0) { useMajor = true; }
    return useMajor ? total * sacred_geometry_1.PHI_INVERSE : total * (1 - sacred_geometry_1.PHI_INVERSE);
};
exports.goldenSection = goldenSection;
/**
 * Calculate spacing using the Fibonacci sequence
 *
 * @param level - Spacing level (1-5, where higher means more space)
 * @returns Spacing value in pixels
 */
var fibonacciSpacing = function (level) {
    // Map level to appropriate Fibonacci index
    var index = Math.min(Math.max(1, level + 2), 10);
    return (0, exports.getFibonacci)(index);
};
exports.fibonacciSpacing = fibonacciSpacing;
/**
 * Get a sacred spacing value by key or with a default fallback
 *
 * @param key - The spacing key to retrieve
 * @param defaultValue - Default value if key doesn't exist
 * @returns The sacred spacing value
 */
var getSacredSpacing = function (key, defaultValue) {
    var _a;
    // Type guard to check if key exists in SACRED_SPACING
    var isValidKey = function (k) {
        return Object.prototype.hasOwnProperty.call(sacred_geometry_1.SACRED_SPACING, k);
    };
    if (isValidKey(key)) {
        var spacingValue = (_a = sacred_geometry_1.SACRED_SPACING[key]) !== null && _a !== void 0 ? _a : 1;
        // If the value is an object (like buttonPadding), use default md value
        if (typeof spacingValue === 'object' && spacingValue !== null) {
            return spacingValue.md;
        }
        // Otherwise return the number value
        return spacingValue;
    }
    return defaultValue !== undefined ? defaultValue : sacred_geometry_1.SACRED_SPACING.md;
};
exports.getSacredSpacing = getSacredSpacing;
/**
 * Applies golden ratio to value, increasing it by phi
 * @param value The base value to scale
 * @returns Value multiplied by phi
 */
var goldenScale = function (value) { return value * sacred_geometry_1.PHI; };
exports.goldenScale = goldenScale;
/**
 * Applies inverse golden ratio to value, decreasing it by phi inverse
 * @param value The base value to scale
 * @returns Value multiplied by phi inverse
 */
var goldenInverseScale = function (value) { return value * sacred_geometry_1.PHI_INVERSE; };
exports.goldenInverseScale = goldenInverseScale;
/**
 * Converts px values to rem
 * @param px Pixel value
 * @returns Equivalent rem value as string with 'rem' suffix
 */
var toRem = function (px) { return "".concat(px / 16, "rem"); };
exports.toRem = toRem;
/**
 * Converts a Fibonacci index to rem
 * @param index Fibonacci sequence index
 * @returns Equivalent rem value as string with 'rem' suffix
 */
var fibonacciToRem = function (index) {
    var fibValue = (0, exports.getFibonacciByIndex)(index);
    return (0, exports.toRem)(fibValue);
};
exports.fibonacciToRem = fibonacciToRem;
