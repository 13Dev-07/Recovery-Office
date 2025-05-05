"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * useAnimationSequence Hook
 *
 * This hook creates animation sequences with timing based on
 * sacred geometry principles. It leverages the Fibonacci sequence
 * and golden ratio to create natural, harmonious animations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimationSequence = void 0;
var react_1 = require("react");
;
var react_2 = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var useReducedMotion_1 = require("./useReducedMotion");
var animation_1 = require("../utils/animation");
/**
 * Hook for creating animation sequences based on sacred geometry principles
 *
 * @param options - Configuration options for the animation sequence
 * @returns Animation sequence controller
 */
var useAnimationSequence = function (_a) {
    var totalSteps = _a.totalSteps, _b = _a.baseDelay, baseDelay = _b === void 0 ? 0.1 : _b, totalDuration = _a.totalDuration, _c = _a.useFibonacci, useFibonacci = _c === void 0 ? true : _c, _d = _a.autoPlay, autoPlay = _d === void 0 ? true : _d, _e = _a.loop, loop = _e === void 0 ? false : _e, _f = _a.initialDelay, initialDelay = _f === void 0 ? 0 : _f, _g = _a.direction, direction = _g === void 0 ? 'forward' : _g;
    var _h = (0, react_1.useState)(-1), currentStep = _h[0], setCurrentStep = _h[1];
    var _j = (0, react_1.useState)(autoPlay), isPlaying = _j[0], setIsPlaying = _j[1];
    var timeoutsRef = (0, react_2.useRef)([]);
    var prefersReducedMotion = (0, useReducedMotion_1.useReducedMotion)().prefersReducedMotion;
    // Calculate delays based on Fibonacci sequence or linear spacing
    var calculateDelays = (0, react_1.useCallback)(function () {
        // If reduced motion is preferred, use minimal delays
        if (prefersReducedMotion) {
            return Array(totalSteps).fill(0.05);
        }
        // Use Fibonacci sequence for natural timing
        if (useFibonacci) {
            // Get relevant Fibonacci numbers (starting from index 3 to avoid too small values)
            var fibValues_1 = (0, animation_1.getFibonacciValues)();
            // Create a function to safely get a subset of Fibonacci values
            var getSafeFibRange = function (startIndex, count) {
                // If our fibValues array is empty, generate a simple progression
                if (fibValues_1.length === 0) {
                    return Array.from({ length: count }, function (_, i) { return (i + 1) * baseDelay * 10; });
                }
                // Ensure startIndex is within bounds
                var safeStartIndex = Math.max(0, Math.min(startIndex, fibValues_1.length - 1));
                // If we can get values directly from the array
                if (safeStartIndex + count <= fibValues_1.length) {
                    return fibValues_1.slice(safeStartIndex, safeStartIndex + count);
                }
                // If we need more values than we have, use fibonacciSlice utility
                // that can generate values beyond what's in the constant
                return (0, animation_1.fibonacciSlice)(safeStartIndex, safeStartIndex + count);
            };
            // Get a subset of Fibonacci values starting from the 3rd element
            var startIndex = 2; // 0-indexed, so 3rd element is at index 2
            var relevantFibs = getSafeFibRange(startIndex, totalSteps);
            // Calculate the sum to normalize (ensure it's never zero)
            var fibSum_1 = relevantFibs.reduce(function (sum, val) { return sum + val; }, 0) || 1;
            // Calculate delays based on the ratio of each Fibonacci number to the sum
            return relevantFibs.map(function (fib) {
                var ratio = fib / fibSum_1;
                // If totalDuration is specified, distribute steps to fit within it
                if (totalDuration) {
                    return ratio * totalDuration * sacred_geometry_1.PHI_INVERSE;
                }
                // Otherwise use baseDelay as a multiplier
                return ratio * baseDelay * totalSteps;
            });
        }
        // Linear spacing (equal delays between steps)
        if (totalDuration) {
            var stepDuration = totalDuration / totalSteps;
            return Array(totalSteps).fill(stepDuration);
        }
        // Default to baseDelay for each step
        return Array(totalSteps).fill(baseDelay);
    }, [totalSteps, baseDelay, totalDuration, useFibonacci, prefersReducedMotion]);
    // Memoize the delays
    var delays = calculateDelays();
    // Clean up any running timeouts
    var cleanupTimeouts = (0, react_1.useCallback)(function () {
        timeoutsRef.current.forEach(function (timeoutId) { return window.clearTimeout(timeoutId); });
        timeoutsRef.current = [];
    }, []);
    // Reset the animation sequence
    var reset = (0, react_1.useCallback)(function () {
        cleanupTimeouts();
        setCurrentStep(-1);
    }, [cleanupTimeouts]);
    // Pause the animation sequence
    var pause = (0, react_1.useCallback)(function () {
        cleanupTimeouts();
        setIsPlaying(false);
    }, [cleanupTimeouts]);
    // Start or restart the animation sequence
    var play = (0, react_1.useCallback)(function () {
        var _a;
        // Clean up existing timeouts
        cleanupTimeouts();
        // Reset current step
        setCurrentStep(-1);
        setIsPlaying(true);
        // Don't animate if reduced motion is preferred and this is purely decorative
        if (prefersReducedMotion) {
            // Immediately jump to the end
            setCurrentStep(totalSteps - 1);
            return;
        }
        // Calculate the cumulative delays
        var cumulativeDelay = initialDelay * 1000; // Convert to milliseconds
        // Set up timeouts for each step
        var timeouts = [];
        var _loop_1 = function (i) {
            // Get the actual step index based on direction
            var stepIndex = direction === 'forward' ? i : totalSteps - 1 - i;
            // Add the delay for this step (ensure we have a valid delay value)
            var stepDelay = (_a = delays[i]) !== null && _a !== void 0 ? _a : 1 || baseDelay;
            cumulativeDelay += (stepDelay * 1000); // Convert to milliseconds
            // Create timeout
            var timeoutId = window.setTimeout(function () {
                setCurrentStep(stepIndex);
                // If this is the last step and loop is true, restart the sequence
                if (i === totalSteps - 1 && loop) {
                    timeouts.push(window.setTimeout(function () {
                        reset();
                        play();
                    }, 1000)); // Wait 1 second before restarting
                }
            }, cumulativeDelay);
            timeouts.push(timeoutId);
        };
        for (var i = 0; i < totalSteps; i++) {
            _loop_1(i);
        }
        // Store timeouts for cleanup
        timeoutsRef.current = timeouts;
    }, [cleanupTimeouts, delays, direction, initialDelay, loop, prefersReducedMotion, reset, totalSteps, baseDelay]);
    // Check if a specific step should be animated
    var shouldAnimateStep = (0, react_1.useCallback)(function (step) {
        if (direction === 'forward') {
            return step <= currentStep;
        }
        return step >= currentStep;
    }, [currentStep, direction]);
    // Autoplay on mount
    (0, react_1.useEffect)(function () {
        if (autoPlay) {
            play();
        }
        return function () {
            cleanupTimeouts();
        };
    }, [autoPlay, cleanupTimeouts, play]);
    return {
        currentStep: currentStep,
        isPlaying: isPlaying,
        play: play,
        pause: pause,
        reset: reset,
        shouldAnimateStep: shouldAnimateStep,
        delays: delays
    };
};
exports.useAnimationSequence = useAnimationSequence;
exports.default = exports.useAnimationSequence;
