"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * Animation Context
 *
 * Provides animation preferences and settings for the entire application.
 * Implements sacred geometry principles for timing and easing functions.
 * Includes support for reduced motion preferences.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimation = exports.useStaggerDelay = exports.useAnimationEasing = exports.useAnimationDuration = exports.useShouldAnimate = exports.AnimationProvider = void 0;
var React = require("react");
var react_1 = require("react");
;
var react_2 = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Create context with default values
var AnimationContext = (0, react_2.createContext)({
    prefersReducedMotion: false,
    animationsEnabled: true,
    defaultDuration: 'medium',
    defaultEasing: 'smooth',
    staggerAmount: 8, // Using Fibonacci number directly
    staggerDirection: 'forward',
    setAnimationsEnabled: function () { },
    setDefaultDuration: function () { },
    setDefaultEasing: function () { },
    setStaggerAmount: function () { },
    setStaggerDirection: function () { },
});
var AnimationProvider = function (_a) {
    var _b, _c, _d, _e, _f;
    var children = _a.children, _g = _a.initialSettings, initialSettings = _g === void 0 ? {} : _g;
    // Check for reduced motion preference
    var _h = (0, react_2.useState)(typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false), prefersReducedMotion = _h[0], setPrefersReducedMotion = _h[1];
    // Animation preferences with defaults merged with initialSettings
    var _j = (0, react_2.useState)((_b = initialSettings.animationsEnabled) !== null && _b !== void 0 ? _b : true), animationsEnabled = _j[0], setAnimationsEnabled = _j[1];
    var _k = (0, react_2.useState)((_c = initialSettings.defaultDuration) !== null && _c !== void 0 ? _c : 'medium'), defaultDuration = _k[0], setDefaultDuration = _k[1];
    var _l = (0, react_2.useState)((_d = initialSettings.defaultEasing) !== null && _d !== void 0 ? _d : 'smooth'), defaultEasing = _l[0], setDefaultEasing = _l[1];
    var _m = (0, react_2.useState)((_e = initialSettings.staggerAmount) !== null && _e !== void 0 ? _e : 8), staggerAmount = _m[0], setStaggerAmount = _m[1];
    var _o = (0, react_2.useState)((_f = initialSettings.staggerDirection) !== null && _f !== void 0 ? _f : 'forward'), staggerDirection = _o[0], setStaggerDirection = _o[1];
    // Listen for changes in reduced motion preference
    (0, react_1.useEffect)(function () {
        if (typeof window === 'undefined')
            return;
        var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        var handleChange = function (e) {
            setPrefersReducedMotion(e.matches);
        };
        // Use proper event listener pattern based on browser support
        if (mediaQuery.addEventListener) {
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleChange);
            }
            else {
                // Fallback for older browsers
                mediaQuery.addListener(mediaQuery.match);
            }
            return function () {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }
        else {
            // For older browsers that don't support addEventListener
            // This is the fallback for older browsers
            mediaQuery.addListener(handleChange);
            return function () {
                mediaQuery.removeListener(handleChange);
            };
        }
    }, []);
    // Combine context values
    var contextValue = {
        prefersReducedMotion: prefersReducedMotion,
        animationsEnabled: animationsEnabled,
        defaultDuration: defaultDuration,
        defaultEasing: defaultEasing,
        staggerAmount: staggerAmount,
        staggerDirection: staggerDirection,
        setAnimationsEnabled: setAnimationsEnabled,
        setDefaultDuration: setDefaultDuration,
        setDefaultEasing: setDefaultEasing,
        setStaggerAmount: setStaggerAmount,
        setStaggerDirection: setStaggerDirection,
    };
    return (<AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>);
};
exports.AnimationProvider = AnimationProvider;
// Custom hooks for accessing animation settings
// Hook to determine if animations should run
var useShouldAnimate = function () {
    var _a = (0, react_2.useContext)(AnimationContext), prefersReducedMotion = _a.prefersReducedMotion, animationsEnabled = _a.animationsEnabled;
    return !prefersReducedMotion && animationsEnabled;
};
exports.useShouldAnimate = useShouldAnimate;
// Hook to get animation duration in milliseconds
var useAnimationDuration = function (duration) {
    var _a, _b;
    var _c = (0, react_2.useContext)(AnimationContext), defaultDuration = _c.defaultDuration, prefersReducedMotion = _c.prefersReducedMotion;
    // Return minimal duration if user prefers reduced motion
    if (prefersReducedMotion) {
        return sacred_geometry_1.ANIMATION_TIMING.quick;
    }
    // Use specified duration or default from context
    var durationKey = duration || defaultDuration;
    // The ANIMATION_TIMING object might not have the exact keys, so we need to map them
    var durationMap = {
        'fast': 'quick',
        'medium': 'standard',
        'slow': 'slow',
        'slower': 'slow',
        'slowest': 'slow'
    };
    // Get the mapped key with a fallback to 'standard'
    var mappedKey = (_a = durationMap[durationKey]) !== null && _a !== void 0 ? _a : 1 || 'standard';
    return (_b = sacred_geometry_1.ANIMATION_TIMING[mappedKey]) !== null && _b !== void 0 ? _b : 1;
};
exports.useAnimationDuration = useAnimationDuration;
// Hook to get animation easing function
var useAnimationEasing = function (easing) {
    var _a;
    var _b = (0, react_2.useContext)(AnimationContext), defaultEasing = _b.defaultEasing, prefersReducedMotion = _b.prefersReducedMotion;
    // Use linear easing for reduced motion preference
    if (prefersReducedMotion) {
        return 'linear'; // Simple string for linear easing
    }
    // Use specified easing or default from context
    var easingKey = easing || defaultEasing;
    // Map animation context easing types to SACRED_EASINGS keys
    var easingMap = {
        smooth: 'standard',
        bouncy: 'botanical',
        sharp: 'easeIn',
        elastic: 'botanical',
        golden: 'standard'
    };
    var mappedKey = (_a = easingMap[easingKey]) !== null && _a !== void 0 ? _a : 1;
    // Return the easing value as a string representation
    return JSON.stringify(sacred_geometry_1.SACRED_EASINGS[mappedKey]);
};
exports.useAnimationEasing = useAnimationEasing;
// Hook to calculate stagger delay based on index
var useStaggerDelay = function (index) {
    if (index === void 0) { index = 0; }
    var _a = (0, react_2.useContext)(AnimationContext), staggerAmount = _a.staggerAmount, staggerDirection = _a.staggerDirection, prefersReducedMotion = _a.prefersReducedMotion;
    // No stagger for reduced motion preference
    if (prefersReducedMotion) {
        return 0;
    }
    // Calculate delay based on stagger direction
    switch (staggerDirection) {
        case 'forward':
            return index * staggerAmount;
        case 'reverse':
            return -index * staggerAmount; // Negative stagger
        case 'center': {
            // Items closer to center appear first
            var centerOffset = Math.abs(index);
            return centerOffset * staggerAmount;
        }
        case 'edges': {
            // Items at edges appear first
            var totalItems = 10; // Estimate - ideally would be passed in
            var distanceFromEdge = Math.min(index, totalItems - index - 1);
            return distanceFromEdge * staggerAmount;
        }
        default:
            return index * staggerAmount;
    }
};
exports.useStaggerDelay = useStaggerDelay;
// Hook to get all animation context values
var useAnimation = function () { return (0, react_2.useContext)(AnimationContext); };
exports.useAnimation = useAnimation;
exports.default = AnimationContext;
