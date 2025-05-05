"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sacredDurations = exports.sacredEasing = void 0;
var React = require("react");
;
var sacred_geometry_1 = require("@constants/sacred-geometry");
var animation_1 = require("@utils/animation");
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
 * useAnimationConfig hook
 *
 * A custom hook that returns animation configurations based on sacred geometry principles.
 * It automatically handles reduced motion preferences and applies the golden ratio.
 *
 * @param options - Animation configuration options
 * @returns Animation configurations for Framer Motion
 */
var useAnimationConfig = function (options) {
    if (options === void 0) { options = {}; }
    var _a = React.useState(false), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    // Check for reduced motion preference
    React.useEffect(function () {
        setShouldReduceMotion((0, animation_1.prefersReducedMotion)());
    }, []);
    // Base animation duration in seconds (phi-based)
    var baseDuration = options.duration || sacred_geometry_1.PHI_INVERSE * 1.5;
    // Actual animation duration, considering reduced motion preference
    var duration = shouldReduceMotion ? 0.01 : baseDuration;
    // Default delay in seconds
    var delay = options.delay || 0;
    // Default cubic bezier easing curve based on golden ratio
    var easing = options.easing || [0.618, 0, 0.382, 1];
    // Spring animation options based on golden ratio
    var spring = {
        stiffness: options.stiffness || 100 * sacred_geometry_1.PHI_INVERSE,
        damping: options.damping || 10 * sacred_geometry_1.PHI_INVERSE,
        mass: options.mass || sacred_geometry_1.PHI_INVERSE,
    };
    // Generate fade animation variants
    var fade = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: easing
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: duration * sacred_geometry_1.PHI_INVERSE,
                ease: easing
            }
        }
    };
    // Generate scale animation variants
    var scale = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: easing
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: duration * sacred_geometry_1.PHI_INVERSE,
                ease: easing
            }
        }
    };
    // Generate slide variants
    var slide = function (direction, distance) {
        if (direction === void 0) { direction = 'up'; }
        if (distance === void 0) { distance = 30; }
        var x = 0;
        var y = 0;
        if (direction === 'up')
            y = distance;
        if (direction === 'down')
            y = -distance;
        if (direction === 'left')
            x = distance;
        if (direction === 'right')
            x = -distance;
        return {
            hidden: {
                opacity: 0,
                x: x,
                y: y
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: easing
                }
            },
            exit: {
                opacity: 0,
                x: x * sacred_geometry_1.PHI_INVERSE,
                y: y * sacred_geometry_1.PHI_INVERSE,
                transition: {
                    duration: duration * sacred_geometry_1.PHI_INVERSE,
                    ease: easing
                }
            }
        };
    };
    // Return animation configurations
    return {
        shouldReduceMotion: shouldReduceMotion,
        duration: duration,
        delay: delay,
        easing: easing,
        spring: spring,
        variants: {
            fade: fade,
            scale: scale,
            slide: slide
        },
        transition: {
            duration: duration,
            delay: delay,
            ease: easing
        }
    };
};
exports.default = useAnimationConfig;
