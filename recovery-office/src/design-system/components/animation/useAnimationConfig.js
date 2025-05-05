"use strict";
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
exports.useAnimationConfig = exports.sacredDurations = exports.sacredEasing = void 0;
var react_1 = require("react");
;
var animation_1 = require("../../../utils/animation");
// Define these constants here since they're used in this file
exports.sacredEasing = {
    standard: [0.618, 0, 0.382, 1],
    entrance: [0.309, 0, 0.618, 1],
    exit: [0.382, 0, 1, 1],
    easeIn: [0.618, 0, 1, 1],
    easeOut: [0, 0, 0.618, 1],
    easeInOut: [0.618, 0, 0.382, 1],
    bounce: [0.618, -0.185, 0.7, 1.3],
    anticipate: [0.8, -0.498, 0.2, 1.2]
};
exports.sacredDurations = {
    ultraFast: 0.062,
    fast: 0.124,
    standard: 0.309,
    slow: 0.618,
    verySlow: 1.0
};
/**
 * Custom hook for creating sacred geometry based animations
 * Uses the golden ratio and Fibonacci sequence to create harmonious animation timing
 */
var useAnimationConfig = function (options) {
    var _a, _b;
    var _c = (0, react_1.useState)(false), isReducedMotion = _c[0], setIsReducedMotion = _c[1];
    (0, react_1.useEffect)(function () {
        setIsReducedMotion((0, animation_1.prefersReducedMotion)());
    }, []);
    var type = options.type, _d = options.direction, direction = _d === void 0 ? 'up' : _d, _e = options.duration, duration = _e === void 0 ? 'standard' : _e, _f = options.easing, easing = _f === void 0 ? 'standard' : _f, _g = options.distance, distance = _g === void 0 ? 34 : _g, // Based on Fibonacci number
    _h = options.initialScale, // Based on Fibonacci number
    initialScale = _h === void 0 ? PHI_INVERSE : _h, reducedMotionConfig = options.reducedMotionConfig;
    // Calculate duration value from named duration or use number directly
    var durationValue = typeof duration === 'string' ? (_a = exports.sacredDurations[duration]) !== null && _a !== void 0 ? _a : 1 : duration;
    // Get easing value
    var easingValue = (_b = exports.sacredEasing[easing]) !== null && _b !== void 0 ? _b : 1;
    // Base configuration for all animations
    var baseConfig = {
        initial: {},
        animate: {},
        exit: {},
        transition: {
            duration: durationValue,
            ease: easingValue
        }
    };
    if (!isReducedMotion) {
        // Choose animation type
        switch (type) {
            case 'fadeIn':
                baseConfig.initial = { opacity: 0 };
                baseConfig.animate = { opacity: 1 };
                baseConfig.exit = { opacity: 0 };
                break;
            case 'fadeOut':
                baseConfig.initial = { opacity: 1 };
                baseConfig.animate = { opacity: 0 };
                baseConfig.exit = { opacity: 1 };
                break;
            case 'scaleIn':
                baseConfig.initial = { opacity: 0, scale: initialScale };
                baseConfig.animate = { opacity: 1, scale: 1 };
                baseConfig.exit = { opacity: 0, scale: initialScale };
                break;
            case 'scaleOut':
                baseConfig.initial = { opacity: 1, scale: 1 };
                baseConfig.animate = { opacity: 0, scale: initialScale };
                baseConfig.exit = { opacity: 1, scale: 1 };
                break;
            case 'slideIn':
                baseConfig.initial = getSlideValues(direction, distance, 'initial');
                baseConfig.animate = getSlideValues(direction, distance, 'animate');
                baseConfig.exit = getSlideValues(direction, distance, 'exit');
                break;
            case 'slideOut':
                baseConfig.initial = getSlideValues(direction, distance, 'animate');
                baseConfig.animate = getSlideValues(direction, distance, 'initial');
                baseConfig.exit = getSlideValues(direction, distance, 'animate');
                break;
            case 'rotate':
                baseConfig.initial = { opacity: 0, rotate: -90 };
                baseConfig.animate = { opacity: 1, rotate: 0 };
                baseConfig.exit = { opacity: 0, rotate: 90 };
                break;
            case 'path':
                // Path animations are handled through SVG path properties
                baseConfig.transition = __assign(__assign({}, baseConfig.transition), { duration: durationValue * 1.5 // Path animations look better with slightly longer duration
                 });
                break;
        }
    }
    else {
        // Reduced motion configuration - simple fade or no animation
        if (reducedMotionConfig) {
            return __assign(__assign({}, baseConfig), reducedMotionConfig);
        }
        // Default reduced motion is a simple fade or immediate appearance
        if (type !== 'fadeIn') {
            baseConfig.initial = { opacity: 0 };
            baseConfig.animate = { opacity: 1 };
            baseConfig.exit = { opacity: 0 };
            baseConfig.transition = __assign(__assign({}, baseConfig.transition), { duration: durationValue * 0.5 // Shorter duration for reduced motion
             });
        }
    }
    return baseConfig;
};
exports.useAnimationConfig = useAnimationConfig;
/**
 * Helper function to get slide animation values based on direction
 */
var getSlideValues = function (direction, distance, state) {
    // Default values
    var values = { opacity: 0, x: 0, y: 0 };
    // Set direction-based transform
    if (state === 'initial' || state === 'exit') {
        switch (direction) {
            case 'up':
                values.y = distance;
                break;
            case 'down':
                values.y = -distance;
                break;
            case 'left':
                values.x = distance;
                break;
            case 'right':
                values.x = -distance;
                break;
        }
    }
    // Set opacity based on state
    if (state === 'animate') {
        values.opacity = 1;
    }
    return values;
};
exports.default = exports.useAnimationConfig;
