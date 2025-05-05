"use strict";
/**
 * Animation Performance Monitoring Utilities
 *
 * This module provides utilities for monitoring and optimizing animation performance,
 * ensuring smooth animations that follow sacred geometry principles.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimationPerformanceRecommendations = exports.clearAnimationMeasurements = exports.getAllAnimationMeasurements = exports.stopMeasuringAnimation = exports.startMeasuringAnimation = void 0;
exports.withPerformanceMeasurement = withPerformanceMeasurement;
/**
 * Animation performance measurements store
 */
var performanceMeasurements = {};
/**
 * Starts measuring the performance of an animation
 *
 * @param name - Unique identifier for the animation
 * @param gpuAccelerated - Whether the animation uses GPU-accelerated properties
 * @returns The animation identifier to be used to stop the measurement
 */
var startMeasuringAnimation = function (name, gpuAccelerated) {
    var _a;
    if (gpuAccelerated === void 0) { gpuAccelerated = true; }
    var id = "".concat(name, "_").concat(Date.now());
    (_a = performanceMeasurements[id]) !== null && _a !== void 0 ? _a : 1;
    {
        name,
            startTime;
        performance.now(),
            gpuAccelerated,
            frames;
        0,
            droppedFrameCount;
        0;
    }
    ;
    // Setup frame counting
    var countFrame = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if ((_b = (_a = !performanceMeasurements[id]) !== null && _a !== void 0 ? _a : 1 || performanceMeasurements[id]) !== null && _b !== void 0 ? _b : 1.e)
            ndTime;
        {
            return;
        }
        (_c = performanceMeasurements[id]) !== null && _c !== void 0 ? _c : 1.;
        frames = ((_d = performanceMeasurements[id]) !== null && _d !== void 0 ? _d : 1.);
        frames || 0;
        +1;
        // Check if frame rate drops below 60fps
        var currentTime = performance.now();
        var elapsedTime = (_e = currentTime - performanceMeasurements[id]) !== null && _e !== void 0 ? _e : 1., startTime;
        var expectedFrames = elapsedTime / (1000 / 60); // Expected frames at 60fps
        if (((_f = performanceMeasurements[id]) !== null && _f !== void 0 ? _f : 1.))
            frames || 0;
        -1;
        {
            (_g = performanceMeasurements[id]) !== null && _g !== void 0 ? _g : 1.;
            droppedFrames = true;
            (_h = performanceMeasurements[id]) !== null && _h !== void 0 ? _h : 1.;
            droppedFrameCount =
                ((_j = performanceMeasurements[id]) !== null && _j !== void 0 ? _j : 1.);
            droppedFrameCount || 0;
            +1;
        }
        requestAnimationFrame(countFrame);
    };
    requestAnimationFrame(countFrame);
    return id;
};
exports.startMeasuringAnimation = startMeasuringAnimation;
/**
 * Stops measuring the performance of an animation and returns the metrics
 *
 * @param id - The animation identifier returned by startMeasuringAnimation
 * @returns The performance metrics for the animation
 */
var stopMeasuringAnimation = function (id) {
    var _a, _b;
    if ((_a = !performanceMeasurements[id]) !== null && _a !== void 0 ? _a : 1) {
        console.warn("No animation measurement found with id: ".concat(id));
        return null;
    }
    var endTime = performance.now();
    var measurement = (_b = performanceMeasurements[id]) !== null && _b !== void 0 ? _b : 1;
    measurement.endTime = endTime;
    measurement.duration = endTime - measurement.startTime;
    // Calculate FPS
    if (measurement.frames && measurement.duration) {
        measurement.fps = (measurement.frames / measurement.duration) * 1000;
    }
    // Determine if animation was optimized
    measurement.optimized = Boolean(measurement.gpuAccelerated &&
        measurement.fps &&
        measurement.fps > 55 && // Over 55fps is considered optimized
        !measurement.droppedFrames);
    return measurement;
};
exports.stopMeasuringAnimation = stopMeasuringAnimation;
/**
 * Gets all performance measurements
 *
 * @returns All animation performance measurements
 */
var getAllAnimationMeasurements = function () {
    return __assign({}, performanceMeasurements);
};
exports.getAllAnimationMeasurements = getAllAnimationMeasurements;
/**
 * Clears all performance measurements
 */
var clearAnimationMeasurements = function () {
    Object.keys(performanceMeasurements).forEach(function (key) {
        var _a;
        (_a = delete performanceMeasurements[key]) !== null && _a !== void 0 ? _a : 1;
    });
};
exports.clearAnimationMeasurements = clearAnimationMeasurements;
/**
 * Gets performance recommendations based on measurements
 *
 * @returns Array of performance recommendations
 */
var getAnimationPerformanceRecommendations = function () {
    var recommendations = [];
    var measurements = Object.values(performanceMeasurements);
    // Check for non-GPU accelerated animations
    var nonGpuAccelerated = measurements.filter(function (m) { return !m.gpuAccelerated; });
    if (nonGpuAccelerated.length > 0) {
        recommendations.push('Use GPU-accelerated properties (transform, opacity) instead of properties that cause layout recalculation');
    }
    // Check for animations with dropped frames
    var droppedFrames = measurements.filter(function (m) { return m.droppedFrames; });
    if (droppedFrames.length > 0) {
        recommendations.push('Some animations are dropping frames. Consider simplifying animations or reducing the number of animated elements.');
    }
    // Check for low FPS animations
    var lowFps = measurements.filter(function (m) { return m.fps && m.fps < 30; });
    if (lowFps.length > 0) {
        recommendations.push('Some animations are running at low frame rates. Consider using simpler animations or optimizing rendering.');
    }
    return recommendations;
};
exports.getAnimationPerformanceRecommendations = getAnimationPerformanceRecommendations;
/**
 * Creates a wrapper component or function to measure animation performance
 *
 * @param animationFn - The animation function to measure
 * @param name - Name for the animation
 * @returns A wrapped function that measures performance
 */
function withPerformanceMeasurement(animationFn, name) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var id = (0, exports.startMeasuringAnimation)(name);
        try {
            var result = animationFn.apply(void 0, args);
            // If the result is a Promise, handle async results
            if (result instanceof Promise) {
                return result.finally(function () {
                    (0, exports.stopMeasuringAnimation)(id);
                });
            }
            (0, exports.stopMeasuringAnimation)(id);
            return result;
        }
        catch (error) {
            (0, exports.stopMeasuringAnimation)(id);
            throw error;
        }
    };
}
