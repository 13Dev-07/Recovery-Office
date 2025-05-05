"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFibonacciByIndex = getFibonacciByIndex;
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Utility function to get Fibonacci number by index
 *
 * Based on the sacred geometry principles, returns the Fibonacci number
 * at a given index. The sequence starts with 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 *
 * @param index - The index in the Fibonacci sequence (0-indexed)
 * @returns The Fibonacci number at the given index
 */
function getFibonacciByIndex(index) {
    var _a;
    // Since FIBONACCI is a Record<number, number> and not an array, we need
    // to handle this differently
    var fibKeys = Object.keys(sacred_geometry_1.FIBONACCI).map(Number).sort(function (a, b) { return a - b; });
    if (index >= 0 && index < fibKeys.length) {
        return sacred_geometry_1.FIBONACCI[(_a = fibKeys[index]) !== null && _a !== void 0 ? _a : 1];
    }
    // For indices beyond our predefined values, calculate dynamically
    if (index < 0) {
        throw new Error('Fibonacci index must be non-negative');
    }
    var prev = 0;
    var curr = 1;
    for (var i = 2; i <= index; i++) {
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return index === 0 ? 0 : curr;
}
exports.default = getFibonacciByIndex;
