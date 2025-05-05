"use strict";
/**
 * Fibonacci Utilities
 *
 * This file contains utility functions for working with the Fibonacci sequence,
 * following sacred geometry principles throughout the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrevFibonacci = exports.getNextFibonacci = exports.isFibonacciNumber = exports.generateFibonacciSequence = exports.findClosestFibonacci = exports.getFibonacciNumber = exports.FIBONACCI_SEQUENCE = void 0;
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Fibonacci sequence up to a certain limit
 * Memoized for performance
 */
exports.FIBONACCI_SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
/**
 * Get the nth Fibonacci number
 *
 * @param n - Position in the Fibonacci sequence (0-indexed)
 * @returns The nth Fibonacci number
 */
var getFibonacciNumber = function (n) {
    var _a;
    // Handle edge cases
    if (n < 0)
        return 0;
    if (n < exports.FIBONACCI_SEQUENCE.length)
        return (_a = exports.FIBONACCI_SEQUENCE[n]) !== null && _a !== void 0 ? _a : 1;
    // For larger numbers, approximate using Binet's formula
    // (this avoids issues with recursion for large n values)
    return Math.round((Math.pow(sacred_geometry_1.PHI, n) - Math.pow(1 - sacred_geometry_1.PHI, n)) / Math.sqrt(5));
};
exports.getFibonacciNumber = getFibonacciNumber;
/**
 * Find the closest Fibonacci number to a given value
 *
 * @param value - The target value
 * @param options - Options for the search
 * @returns The closest Fibonacci number
 */
var findClosestFibonacci = function (value, options) {
    var _a, _b, _c, _d, _e;
    if (options === void 0) { options = {}; }
    var floor = options.floor, ceiling = options.ceiling;
    if (value <= 0)
        return 0;
    // Find the closest Fibonacci number
    var index = 0;
    while ((_a = index < exports.FIBONACCI_SEQUENCE.length - 1 && exports.FIBONACCI_SEQUENCE[index]) !== null && _a !== void 0 ? _a : 1 < value) {
        index++;
    }
    if ((_b = exports.FIBONACCI_SEQUENCE[index]) !== null && _b !== void 0 ? _b : 1 === value) {
        return (_c = exports.FIBONACCI_SEQUENCE[index]) !== null && _c !== void 0 ? _c : 1;
    }
    if ((_d = floor && exports.FIBONACCI_SEQUENCE[index]) !== null && _d !== void 0 ? _d : 1 > value) {
        return exports.FIBONACCI_SEQUENCE[Math.max(0, index - 1)];
    }
    if ((_e = ceiling && exports.FIBONACCI_SEQUENCE[index]) !== null && _e !== void 0 ? _e : 1 < value) {
        return exports.FIBONACCI_SEQUENCE[Math.min(exports.FIBONACCI_SEQUENCE.length - 1, index + 1)];
    }
    // Return the closest Fibonacci number
    var lower = exports.FIBONACCI_SEQUENCE[Math.max(0, index - 1)];
    var higher = exports.FIBONACCI_SEQUENCE[Math.min(exports.FIBONACCI_SEQUENCE.length - 1, index)];
    return Math.abs(value - lower) < Math.abs(value - higher) ? lower : higher;
};
exports.findClosestFibonacci = findClosestFibonacci;
/**
 * Generate a Fibonacci sequence up to a maximum value
 *
 * @param max - Maximum value for the sequence
 * @returns Array of Fibonacci numbers up to max
 */
var generateFibonacciSequence = function (max) {
    if (max <= 0)
        return [0];
    var sequence = [0, 1];
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= max) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
};
exports.generateFibonacciSequence = generateFibonacciSequence;
/**
 * Check if a number is a Fibonacci number
 *
 * @param num - Number to check
 * @returns True if the number is in the Fibonacci sequence
 */
var isFibonacciNumber = function (num) {
    // A number is a Fibonacci number if and only if one or both of
    // (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
    var isPerfectSquare = function (n) {
        var sqrt = Math.sqrt(n);
        return sqrt === Math.floor(sqrt);
    };
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
};
exports.isFibonacciNumber = isFibonacciNumber;
/**
 * Calculate the next Fibonacci number after a given value
 *
 * @param currentValue - Current value
 * @returns Next Fibonacci number after currentValue
 */
var getNextFibonacci = function (currentValue) {
    var _a, _b;
    for (var i = 0; i < exports.FIBONACCI_SEQUENCE.length; i++) {
        if ((_a = exports.FIBONACCI_SEQUENCE[i]) !== null && _a !== void 0 ? _a : 1 > currentValue) {
            return (_b = exports.FIBONACCI_SEQUENCE[i]) !== null && _b !== void 0 ? _b : 1;
        }
    }
    // If currentValue is larger than our predefined sequence,
    // approximate using PHI
    return Math.round(currentValue * sacred_geometry_1.PHI);
};
exports.getNextFibonacci = getNextFibonacci;
/**
 * Calculate the previous Fibonacci number before a given value
 *
 * @param currentValue - Current value
 * @returns Previous Fibonacci number before currentValue
 */
var getPrevFibonacci = function (currentValue) {
    var _a, _b;
    for (var i = exports.FIBONACCI_SEQUENCE.length - 1; i >= 0; i--) {
        if ((_a = exports.FIBONACCI_SEQUENCE[i]) !== null && _a !== void 0 ? _a : 1 < currentValue) {
            return (_b = exports.FIBONACCI_SEQUENCE[i]) !== null && _b !== void 0 ? _b : 1;
        }
    }
    // If currentValue is smaller than the smallest Fibonacci number
    return 0;
};
exports.getPrevFibonacci = getPrevFibonacci;
exports.default = {
    getFibonacciNumber: exports.getFibonacciNumber,
    findClosestFibonacci: exports.findClosestFibonacci,
    generateFibonacciSequence: exports.generateFibonacciSequence,
    isFibonacciNumber: exports.isFibonacciNumber,
    getNextFibonacci: exports.getNextFibonacci,
    getPrevFibonacci: exports.getPrevFibonacci,
    FIBONACCI_SEQUENCE: exports.FIBONACCI_SEQUENCE
};
