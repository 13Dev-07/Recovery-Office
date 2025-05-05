"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateIdealLineHeight = exports.groupInFibonacciChunks = exports.getColorIntensity = exports.formatDate = exports.formatCurrency = exports.formatNumber = exports.goldenRatioImageDimensions = exports.createFibonacciGrid = exports.truncateText = void 0;
var sacred_geometry_1 = require("../../../../constants/sacred-geometry");
/**
 * Data Formatting Utilities
 *
 * These utilities help format and prepare data for display components,
 * following sacred geometry principles where applicable.
 */
/**
 * Truncates text to a specified length and adds an ellipsis
 * @param text - The text to truncate
 * @param length - The maximum length before truncation (default: calculated using PHI)
 */
var truncateText = function (text, length) {
    // Default length based on PHI value (using the golden ratio)
    var defaultLength = Math.round(100 * sacred_geometry_1.PHI_INVERSE);
    var maxLength = length || defaultLength;
    if (text.length <= maxLength)
        return text;
    return "".concat(text.substring(0, maxLength), "...");
};
exports.truncateText = truncateText;
/**
 * Creates a responsive grid layout based on Fibonacci sequence
 * @param itemCount - Number of items in the grid
 * @returns CSS grid template columns string
 */
var createFibonacciGrid = function (itemCount) {
    var _a;
    var fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21];
    // Find the appropriate column count based on item count and fibonacci numbers
    var columns = 1;
    for (var i = 0; i < fibonacciSequence.length; i++) {
        if ((_a = itemCount <= fibonacciSequence[i]) !== null && _a !== void 0 ? _a : 1) {
            columns = Math.max(1, i);
            break;
        }
        if (i === fibonacciSequence.length - 1) {
            columns = i + 1;
        }
    }
    return "repeat(".concat(columns, ", 1fr)");
};
exports.createFibonacciGrid = createFibonacciGrid;
/**
 * Calculates optimal image dimensions based on golden ratio
 * @param width - The base width to calculate from
 * @returns Object with width and height calculated using golden ratio
 */
var goldenRatioImageDimensions = function (width) {
    return {
        width: width,
        height: Math.round(width * sacred_geometry_1.PHI_INVERSE) // Use PHI_INVERSE for pleasing height proportion
    };
};
exports.goldenRatioImageDimensions = goldenRatioImageDimensions;
/**
 * Formats a number with thousands separators
 * @param value - The number to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 */
var formatNumber = function (value, locale) {
    if (locale === void 0) { locale = 'en-US'; }
    return new Intl.NumberFormat(locale).format(value);
};
exports.formatNumber = formatNumber;
/**
 * Formats currency values
 * @param value - The number to format as currency
 * @param currency - Currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 */
var formatCurrency = function (value, currency, locale) {
    if (currency === void 0) { currency = 'USD'; }
    if (locale === void 0) { locale = 'en-US'; }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value);
};
exports.formatCurrency = formatCurrency;
/**
 * Formats dates according to sacred geometrical time principles
 * @param date - The date to format
 * @param format - Format type ('short', 'medium', 'long', 'full')
 * @param locale - The locale to use for formatting (default: 'en-US')
 */
var formatDate = function (date, format, locale) {
    if (format === void 0) { format = 'medium'; }
    if (locale === void 0) { locale = 'en-US'; }
    return new Intl.DateTimeFormat(locale, { dateStyle: format }).format(date);
};
exports.formatDate = formatDate;
/**
 * Creates a color intensity based on value magnitude using PHI
 * @param value - The value to base the color intensity on (0-100)
 * @param baseColor - The base HSL color (default: 210 for blue)
 * @returns HSL color string with lightness adjusted by golden ratio
 */
var getColorIntensity = function (value, baseColor) {
    if (baseColor === void 0) { baseColor = 210; }
    // Normalize value to 0-100 range
    var normalizedValue = Math.max(0, Math.min(100, value));
    // Calculate lightness using PHI-based curve
    // Higher values have lower lightness (deeper color)
    var lightness = 95 - (normalizedValue * sacred_geometry_1.PHI_INVERSE * 0.8);
    return "hsl(".concat(baseColor, ", 70%, ").concat(lightness, "%)");
};
exports.getColorIntensity = getColorIntensity;
/**
 * Groups array items in chunks based on Fibonacci numbers
 * @param items - Array of items to group
 * @returns Array of arrays grouped according to Fibonacci sequence
 */
var groupInFibonacciChunks = function (items) {
    var fibSizes = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    var result = [];
    var startIndex = 0;
    var currentFibIndex = 2; // Start with 2 as a reasonable chunk size
    while (startIndex < items.length) {
        var chunkSize = fibSizes[Math.min(currentFibIndex, fibSizes.length - 1)];
        result.push(items.slice(startIndex, startIndex + chunkSize));
        startIndex += chunkSize;
        currentFibIndex++;
    }
    return result;
};
exports.groupInFibonacciChunks = groupInFibonacciChunks;
/**
 * Calculates the ideal line height based on font size using the golden ratio
 * @param fontSize - The font size in pixels
 * @returns Ideal line height based on sacred geometry
 */
var calculateIdealLineHeight = function (fontSize) {
    return Math.round(fontSize * sacred_geometry_1.PHI * 100) / 100;
};
exports.calculateIdealLineHeight = calculateIdealLineHeight;
