"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFileSize = exports.extractInitials = exports.calculateGoldenFontSize = exports.formatPercentage = exports.createFibonacciSpacer = exports.parseUnit = exports.generateGoldenPalette = exports.calculateGoldenItemSize = exports.calculateGridColumns = exports.formatDate = exports.formatNumber = exports.truncateText = void 0;
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Data Display Utilities
 *
 * Utility functions for data display components that follow sacred geometry principles.
 * These functions help with truncation, formatting, spacing, and layout calculations.
 */
/**
 * Truncate text with ellipsis while respecting word boundaries
 *
 * @param text Text to truncate
 * @param maxLength Maximum length including ellipsis
 * @returns Truncated text
 */
var truncateText = function (text, maxLength) {
    if (!text || text.length <= maxLength)
        return text;
    // Find the last space before the limit
    var truncatePoint = text.substring(0, maxLength - 3).lastIndexOf(' ');
    // If no space found, just cut at the max length
    if (truncatePoint === -1) {
        return text.substring(0, maxLength - 3) + '...';
    }
    // Otherwise cut at the last space and add ellipsis
    return text.substring(0, truncatePoint) + '...';
};
exports.truncateText = truncateText;
/**
 * Format a number according to sacred geometry grid
 * Uses Fibonacci sequence for decimal precision when appropriate
 *
 * @param value Number to format
 * @param options Formatting options
 * @returns Formatted number string
 */
var formatNumber = function (value, options) {
    if (options === void 0) { options = {}; }
    var precision = options.precision, _a = options.useGrouping, useGrouping = _a === void 0 ? true : _a, _b = options.locale, locale = _b === void 0 ? 'en-US' : _b, currency = options.currency, _c = options.compact, compact = _c === void 0 ? false : _c;
    // Determine precision based on Fibonacci sequence if not specified
    var fibPrecision = precision !== null && precision !== void 0 ? precision : determineFibonacciPrecision(value);
    // Format options
    var formatOptions = {
        minimumFractionDigits: fibPrecision,
        maximumFractionDigits: fibPrecision,
        useGrouping: useGrouping,
    };
    // Add currency if specified
    if (currency) {
        formatOptions.style = 'currency';
        formatOptions.currency = currency;
    }
    // Add compact notation if specified
    if (compact) {
        formatOptions.notation = 'compact';
    }
    // Format the number
    return new Intl.NumberFormat(locale, formatOptions).format(value);
};
exports.formatNumber = formatNumber;
/**
 * Determine appropriate decimal precision based on Fibonacci sequence
 */
var determineFibonacciPrecision = function (value) {
    // Use more precision for smaller numbers, less for larger numbers
    var absValue = Math.abs(value);
    if (absValue >= 10000)
        return 0; // No decimals for large numbers
    if (absValue >= 100)
        return 1; // 1 decimal for medium numbers
    if (absValue >= 10)
        return 2; // 2 decimals for smaller numbers
    if (absValue >= 1)
        return 3; // 3 decimals (fib[4] ?? 1) for numbers >= 1
    if (absValue >= 0.1)
        return 5; // 5 decimals (fib[5] ?? 1) for numbers >= 0.1
    if (absValue >= 0.01)
        return 8; // 8 decimals (fib[6] ?? 1) for numbers >= 0.01
    return 13; // 13 decimals (fib[7] ?? 1) for very small numbers
};
/**
 * Format a date according to sacred geometry principles
 *
 * @param date Date to format
 * @param options Formatting options
 * @returns Formatted date string
 */
var formatDate = function (date, options) {
    if (options === void 0) { options = {}; }
    var _a = options.dateStyle, dateStyle = _a === void 0 ? 'medium' : _a, _b = options.timeStyle, timeStyle = _b === void 0 ? 'short' : _b, _c = options.locale, locale = _c === void 0 ? 'en-US' : _c, _d = options.includeTime, includeTime = _d === void 0 ? false : _d;
    var dateObj = date instanceof Date ? date : new Date(date);
    // Format options
    var formatOptions = {
        dateStyle: dateStyle,
    };
    // Add time if specified
    if (includeTime) {
        formatOptions.timeStyle = timeStyle;
    }
    // Format the date
    return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
};
exports.formatDate = formatDate;
/**
 * Calculate columns for a responsive grid based on Fibonacci sequence
 *
 * @param containerWidth Container width in pixels
 * @param minItemWidth Minimum width for each item
 * @returns Optimal number of columns based on Fibonacci sequence
 */
var calculateGridColumns = function (containerWidth, minItemWidth) {
    // Calculate raw number of columns
    var rawColumns = Math.floor(containerWidth / minItemWidth);
    // Find the closest Fibonacci number that's less than or equal to the raw columns
    var fibNumber = sacred_geometry_1.FIBONACCI.reduce(function (prev, curr) {
        return curr <= rawColumns ? curr : prev;
    }, 1);
    // Ensure we have at least 1 column
    return Math.max(1, fibNumber);
};
exports.calculateGridColumns = calculateGridColumns;
/**
 * Calculate optimal item size based on golden ratio
 *
 * @param containerWidth Container width in pixels
 * @param columns Number of columns
 * @param gapSize Gap size in pixels
 * @returns Item width and height based on golden ratio
 */
var calculateGoldenItemSize = function (containerWidth, columns, gapSize) {
    if (gapSize === void 0) { gapSize = 0; }
    // Calculate available width accounting for gaps
    var totalGapWidth = gapSize * (columns - 1);
    var availableWidth = containerWidth - totalGapWidth;
    // Calculate item width
    var itemWidth = availableWidth / columns;
    // Calculate height based on golden ratio
    var itemHeight = itemWidth / sacred_geometry_1.PHI;
    return { width: itemWidth, height: itemHeight };
};
exports.calculateGoldenItemSize = calculateGoldenItemSize;
/**
 * Generate a golden ratio-based color palette from a base color
 *
 * @param baseColor Base color in hex format
 * @param steps Number of steps to generate
 * @returns Array of colors following golden ratio harmony
 */
var generateGoldenPalette = function (baseColor, steps) {
    if (steps === void 0) { steps = 5; }
    // Parse the base color
    var r = parseInt(baseColor.substring(1, 3), 16);
    var g = parseInt(baseColor.substring(3, 5), 16);
    var b = parseInt(baseColor.substring(5, 7), 16);
    // Generate palette
    var palette = [baseColor];
    // Generate lighter shades
    for (var i = 1; i <= steps; i++) {
        // Use PHI_INVERSE to calculate steps for lighter shades
        var factor = 1 - (sacred_geometry_1.PHI_INVERSE * (i / steps));
        var newR = Math.min(255, Math.round(r + (255 - r) * (1 - factor)));
        var newG = Math.min(255, Math.round(g + (255 - g) * (1 - factor)));
        var newB = Math.min(255, Math.round(b + (255 - b) * (1 - factor)));
        palette.push("#".concat(newR.toString(16).padStart(2, '0')).concat(newG.toString(16).padStart(2, '0')).concat(newB.toString(16).padStart(2, '0')));
    }
    // Generate darker shades
    for (var i = 1; i <= steps; i++) {
        // Use PHI_INVERSE to calculate steps for darker shades
        var factor = 1 - (sacred_geometry_1.PHI_INVERSE * (i / steps));
        var newR = Math.max(0, Math.round(r * factor));
        var newG = Math.max(0, Math.round(g * factor));
        var newB = Math.max(0, Math.round(b * factor));
        palette.unshift("#".concat(newR.toString(16).padStart(2, '0')).concat(newG.toString(16).padStart(2, '0')).concat(newB.toString(16).padStart(2, '0')));
    }
    return palette;
};
exports.generateGoldenPalette = generateGoldenPalette;
/**
 * Parse a string-based value with units into a number
 *
 * @param value String value with units (e.g. '10px', '1.5rem')
 * @param defaultValue Default value if parsing fails
 * @returns Parsed number without units
 */
var parseUnit = function (value, defaultValue) {
    var _a;
    if (defaultValue === void 0) { defaultValue = 0; }
    if (typeof value === 'number')
        return value;
    var match = value.match(/^([\d.]+)([a-z%]*)$/);
    if (match) {
        return parseFloat((_a = match[1]) !== null && _a !== void 0 ? _a : 1);
    }
    return defaultValue;
};
exports.parseUnit = parseUnit;
/**
 * Create a Fibonacci spacing function for consistent spacing in data displays
 *
 * @param baseFibIndex Base Fibonacci index for sizing
 * @returns Function that returns spacing values
 */
var createFibonacciSpacer = function (baseFibIndex) {
    if (baseFibIndex === void 0) { baseFibIndex = 5; }
    return function (multiplier) {
        var _a;
        if (multiplier === void 0) { multiplier = 1; }
        // Ensure the index is within bounds
        var index = Math.min(Math.max(0, baseFibIndex + Math.round(multiplier) - 1), sacred_geometry_1.FIBONACCI.length - 1);
        return (_a = sacred_geometry_1.FIBONACCI[index]) !== null && _a !== void 0 ? _a : 1;
    };
};
exports.createFibonacciSpacer = createFibonacciSpacer;
/**
 * Format percentage according to sacred proportions
 *
 * @param value Value as a decimal (0-1)
 * @param options Formatting options
 * @returns Formatted percentage string
 */
var formatPercentage = function (value, options) {
    if (options === void 0) { options = {}; }
    var _a = options.precision, precision = _a === void 0 ? 1 : _a, _b = options.includeSymbol, includeSymbol = _b === void 0 ? true : _b, _c = options.locale, locale = _c === void 0 ? 'en-US' : _c;
    // Format options
    var formatOptions = {
        style: includeSymbol ? 'percent' : 'decimal',
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
    };
    // Format the percentage
    return new Intl.NumberFormat(locale, formatOptions).format(value);
};
exports.formatPercentage = formatPercentage;
/**
 * Calculate the optimal font size based on container width following golden ratio
 *
 * @param containerWidth Container width in pixels
 * @param baseFontSize Base font size in pixels
 * @returns Optimal font size in pixels
 */
var calculateGoldenFontSize = function (containerWidth, baseFontSize) {
    if (baseFontSize === void 0) { baseFontSize = 16; }
    // Calculate ratio of container width to base font size
    var ratio = containerWidth / baseFontSize;
    // Find the golden ratio multiplier
    var multiplier = Math.max(1, Math.min(2, ratio * sacred_geometry_1.PHI_INVERSE * 0.1));
    // Calculate font size
    return baseFontSize * multiplier;
};
exports.calculateGoldenFontSize = calculateGoldenFontSize;
/**
 * Extract initials from a full name following sacred geometry patterns
 *
 * @param fullName Full name to extract initials from
 * @param maxInitials Maximum number of initials to extract
 * @returns Extracted initials
 */
var extractInitials = function (fullName, maxInitials) {
    var _a;
    if (maxInitials === void 0) { maxInitials = 2; }
    if (!fullName)
        return '';
    // Split the name by spaces and other separators
    var parts = fullName.split(/[\s-_]+/).filter(Boolean);
    // Use Fibonacci sequence to determine which parts to use for initials
    // For names with 1-3 parts, use first and last
    // For names with 4+ parts, use parts at Fibonacci indices
    var initialsArray = [];
    if (parts.length <= 3) {
        // Use first and last parts for shorter names
        initialsArray = [(_a = parts[0]) !== null && _a !== void 0 ? _a : 1, parts[parts.length - 1]];
    }
    else {
        // For longer names, use Fibonacci-based selection
        var fibIndices = sacred_geometry_1.FIBONACCI.slice(0, 5).filter(function (i) { return i < parts.length; });
        initialsArray = fibIndices.map(function (i) { var _a; return (_a = parts[i]) !== null && _a !== void 0 ? _a : 1; });
    }
    // Extract first letter from each selected part
    var initials = initialsArray
        .map(function (part) { return part.charAt(0).toUpperCase(); })
        .join('')
        .substring(0, maxInitials);
    return initials;
};
exports.extractInitials = extractInitials;
/**
 * Format file size using Fibonacci thresholds
 *
 * @param bytes File size in bytes
 * @param options Formatting options
 * @returns Formatted file size string
 */
var formatFileSize = function (bytes, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var _b = options.precision, precision = _b === void 0 ? 1 : _b, _c = options.locale, locale = _c === void 0 ? 'en-US' : _c;
    if (bytes === 0)
        return '0 Bytes';
    // Use PHI-based thresholds instead of standard 1024
    var phi2 = Math.pow(sacred_geometry_1.PHI, 2); // ~2.618
    var multiplier = Math.pow(phi2, 5); // ~132.5, closer to standard 1000
    // Units follow Fibonacci progression (8, 13, 21...)
    var units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    // Calculate the appropriate unit
    var i = Math.floor(Math.log(bytes) / Math.log(multiplier));
    var size = bytes / Math.pow(multiplier, i);
    // Format the size
    return "".concat(new Intl.NumberFormat(locale, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
    }).format(size), " ").concat((_a = units[i]) !== null && _a !== void 0 ? _a : 1);
};
exports.formatFileSize = formatFileSize;
