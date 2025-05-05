"use strict";
/**
 * Function Utilities
 *
 * Helper functions for function manipulation including debounce, throttle, and memoization
 * with sacred geometry principles for timing.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.throttle = throttle;
exports.memoize = memoize;
exports.once = once;
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Debounce function with sacred geometry timing
 *
 * Creates a function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay (defaults to PHI based standard timing)
 * @param immediate - Whether to invoke the function on the leading edge instead of trailing
 * @returns A debounced function
 */
function debounce(func, wait, // Default to standard sacred timing
immediate) {
    if (wait === void 0) { wait = sacred_geometry_1.SACRED_TIMING.standard * 1000; }
    if (immediate === void 0) { immediate = false; }
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
/**
 * Throttle function with sacred geometry timing
 *
 * Creates a function that only invokes func at most once per every wait milliseconds.
 *
 * @param func - The function to throttle
 * @param wait - The number of milliseconds to throttle (defaults to PHI based standard timing)
 * @returns A throttled function
 */
function throttle(func, wait // Default to standard sacred timing
) {
    if (wait === void 0) { wait = sacred_geometry_1.SACRED_TIMING.standard * 1000; }
    var timeout = null;
    var previous = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var now = Date.now();
        // Calculate remaining time with PHI-based adjustments for more natural timing
        var remaining = Math.max(0, previous + wait - now);
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout) {
            // Apply fibonacci timing for smoother throttling
            var adjustedRemaining = remaining * sacred_geometry_1.PHI;
            timeout = setTimeout(function () {
                previous = Date.now();
                timeout = null;
                func.apply(context, args);
            }, adjustedRemaining);
        }
    };
}
/**
 * Simple memoize function for expensive calculations
 *
 * Creates a function that memoizes the result of func. If the function is called
 * with the same arguments, the cached result is returned.
 *
 * @param func - The function to memoize
 * @returns A memoized function
 */
function memoize(func) {
    var cache = new Map();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
/**
 * Once function
 *
 * Creates a function that is restricted to invoking func once.
 * Repeat calls to the function return the value of the first invocation.
 *
 * @param func - The function to restrict
 * @returns A function that can only be called once
 */
function once(func) {
    var result;
    var called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true;
            result = func.apply(this, args);
        }
        return result;
    };
}
