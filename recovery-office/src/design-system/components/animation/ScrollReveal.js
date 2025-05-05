"use strict";
/**
 * ScrollReveal Component
 *
 * A component that reveals its children with an animation when they
 * enter the viewport. Uses sacred geometry principles for timing
 * and animation properties.
 *
 * This component applies the Golden Ratio (PHI) to create naturally
 * pleasing reveal animations with harmonious timing.
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollReveal = void 0;
var React = require("react");
var react_1 = require("react");
;
var framer_motion_1 = require("framer-motion");
var framer_motion_2 = require("framer-motion");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../../../utils/animation");
/**
 * ScrollReveal Component with ref forwarding
 *
 * Animates its children when they enter the viewport
 */
exports.ScrollReveal = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'fade' : _b, _c = _a.duration, duration = _c === void 0 ? 'normal' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.easing, easing = _e === void 0 ? 'standard' : _e, _f = _a.threshold, threshold = _f === void 0 ? 0.2 : _f, _g = _a.distance, distance = _g === void 0 ? 34 : _g, // Fibonacci number
    _h = _a.resetOnExit, // Fibonacci number
    resetOnExit = _h === void 0 ? false : _h, _j = _a.rootMargin, rootMargin = _j === void 0 ? "0px" : _j, _k = _a.initialScale, initialScale = _k === void 0 ? sacred_geometry_1.PHI_INVERSE : _k, _l = _a.useGoldenRatio, useGoldenRatio = _l === void 0 ? true : _l, rest = __rest(_a, ["children", "variant", "duration", "delay", "easing", "threshold", "distance", "resetOnExit", "rootMargin", "initialScale", "useGoldenRatio"]);
    // Convert duration string to numerical value
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration if enabled
    var effectiveDuration = useGoldenRatio
        ? (0, animation_1.applyGoldenRatioDuration)(durationValue)
        : durationValue;
    // Check for accessibility settings
    var accessibleSettings = (0, animation_1.getAccessibleAnimationSettings)(effectiveDuration, distance);
    // Animation controls
    var controls = (0, framer_motion_1.useAnimation)();
    // Track if element is in view
    var _m = (0, framer_motion_2.useInView)({
        threshold: threshold,
        rootMargin: rootMargin,
        triggerOnce: !resetOnExit,
    }), inViewRef = _m[0], inView = _m[1];
    // Combine refs
    var combinedRef = function (node) {
        inViewRef(node);
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    // Run animation when inView changes
    (0, react_1.useEffect)(function () {
        if (inView) {
            controls.start('visible');
        }
        else if (resetOnExit) {
            controls.start('hidden');
        }
    }, [controls, inView, resetOnExit]);
    // Get animation variants based on the chosen type
    var getVariants = function () {
        // Use accessible values if reduced motion is preferred
        var finalDuration = accessibleSettings.duration, finalDistance = accessibleSettings.distance, shouldAnimate = accessibleSettings.shouldAnimate;
        // Disable animation completely if shouldAnimate is false
        if (!shouldAnimate) {
            return {
                hidden: { opacity: 1 },
                visible: { opacity: 1 }
            };
        }
        // Create base transition settings
        var transition = {
            duration: finalDuration,
            delay: delay,
            ease: sacred_geometry_1.SACRED_EASINGS[easing] || sacred_geometry_1.SACRED_EASINGS.standard
        };
        // Return appropriate variants based on the animation type
        switch (variant) {
            case 'fade':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: transition }
                };
            case 'slide-up':
                return {
                    hidden: { y: finalDistance, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: transition }
                };
            case 'slide-down':
                return {
                    hidden: { y: -finalDistance, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: transition }
                };
            case 'slide-left':
                return {
                    hidden: { x: finalDistance, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: transition }
                };
            case 'slide-right':
                return {
                    hidden: { x: -finalDistance, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: transition }
                };
            case 'scale':
                return {
                    hidden: { scale: initialScale, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: transition }
                };
            case 'scale-fade':
                return {
                    hidden: { scale: initialScale, opacity: 0 },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: __assign(__assign({}, transition), { scale: __assign(__assign({}, transition), { duration: finalDuration * 1.2 }) })
                    }
                };
            case 'none':
                return {
                    hidden: {},
                    visible: { transition: transition }
                };
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: transition }
                };
        }
    };
    return (<framer_motion_1.motion.div ref={combinedRef} initial="hidden" animate={controls} variants={getVariants()} style={{
            willChange: 'transform, opacity' // Performance optimization
        }} {...rest}>
        {children}
      </framer_motion_1.motion.div>);
});
exports.ScrollReveal.displayName = 'ScrollReveal';
exports.default = exports.ScrollReveal;
