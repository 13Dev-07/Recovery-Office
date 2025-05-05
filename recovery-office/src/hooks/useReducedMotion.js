"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * useReducedMotion Hook
 *
 * This hook detects the user's motion preference from the 'prefers-reduced-motion' media query.
 * It can be used throughout the application to ensure animations respect accessibility preferences.
 *
 * The hook is responsive to changes in the user's system settings and will update in real-time.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReducedMotion = void 0;
var react_1 = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Create a safe media query that works in both browser and SSR environments
 */
var createSafeMediaQuery = function () {
    if (typeof window === 'undefined') {
        return {
            matches: false,
            addEventListener: function () { },
            removeEventListener: function () { },
            addListener: function () { },
            removeListener: function () { }
        };
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)');
};
/**
 * Hook to detect if the user prefers reduced motion
 *
 * @returns {Object} Object containing:
 *   - prefersReducedMotion: Whether the user prefers reduced motion
 *   - shouldAnimate: Whether animations should be shown (inverse of prefersReducedMotion)
 *   - duration: Recommended duration for any necessary animations (shorter if reduced motion is preferred)
 *   - distance: Recommended distance for any necessary animations (shorter if reduced motion is preferred)
 */
var useReducedMotion = function () {
    // Create media query to detect preference
    var mediaQuery = createSafeMediaQuery();
    // Initialize state based on current preference
    var _a = (0, react_1.useState)(mediaQuery.matches), prefersReducedMotion = _a[0], setPrefersReducedMotion = _a[1];
    (0, react_1.useEffect)(function () {
        // Handler for when the preference changes
        var handleChange = function (event) {
            setPrefersReducedMotion(event.matches);
        };
        // Add event listener with browser compatibility check
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
            // Cleanup on unmount
            return function () {
                var _a;
                (_a = mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, 'change', handleChange);
            };
        }
        else if (mediaQuery.addListener) {
            // For older browsers
            mediaQuery.addListener(handleChange);
            // Cleanup on unmount
            return function () {
                var _a;
                (_a = mediaQuery.removeListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, handleChange);
            };
        }
        return undefined;
    }, [mediaQuery]);
    // Derive values based on reduced motion preference
    return {
        prefersReducedMotion: prefersReducedMotion,
        shouldAnimate: !prefersReducedMotion,
        duration: prefersReducedMotion ? 0.15 : 0.3, // Shorter duration if reduced motion is preferred
        distance: prefersReducedMotion ? 5 : 20, // Shorter distance if reduced motion is preferred
        scale: prefersReducedMotion ? 0.95 : sacred_geometry_1.PHI_INVERSE, // Smaller scale change if reduced motion is preferred
    };
};
exports.useReducedMotion = useReducedMotion;
exports.default = exports.useReducedMotion;
