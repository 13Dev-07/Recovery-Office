"use strict";
/**
 * SlideIn Component
 *
 * A component that animates content entering from a specific direction
 * using sacred geometry principles for natural, harmonious motion.
 *
 * The component applies the Golden Ratio (PHI) to create naturally
 * pleasing animations with harmonious timing and proportions.
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
exports.SlideIn = void 0;
var React = require("react");
;
var framer_motion_1 = require("framer-motion");
var AnimationContext_1 = require("@context/AnimationContext");
var SlideIn = function (_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, _c = _a.distance, distance = _c === void 0 ? 50 : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, duration = _a.duration, easing = _a.easing, _e = _a.staggerIndex, staggerIndex = _e === void 0 ? 0 : _e, _f = _a.threshold, threshold = _f === void 0 ? 0.2 : _f, _g = _a.once, once = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? '' : _h, onAnimationComplete = _a.onAnimationComplete, _j = _a.withFade, withFade = _j === void 0 ? true : _j;
    var shouldAnimate = (0, AnimationContext_1.useShouldAnimate)();
    var animationDuration = (0, AnimationContext_1.useAnimationDuration)(duration);
    var animationEasing = (0, AnimationContext_1.useAnimationEasing)(easing);
    var staggerDelay = (0, AnimationContext_1.useStaggerDelay)(staggerIndex);
    // Calculate total delay including base delay and stagger
    var totalDelay = delay + staggerDelay;
    // Reference for intersection observer
    var slideRef = useRef(null);
    var isInView = (0, framer_motion_1.useInView)(slideRef, { amount: threshold, once: once });
    // If animations are disabled, render children directly
    if (!shouldAnimate) {
        return <div className={className}>{children}</div>;
    }
    // Determine initial position based on direction
    var getInitialOffset = function () {
        switch (direction) {
            case 'up': return { y: distance };
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            default: return { y: distance };
        }
    };
    // Animation variants
    var variants = {
        hidden: __assign(__assign({}, getInitialOffset()), { opacity: withFade ? 0 : 1 }),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: animationDuration / 1000, // Convert ms to seconds for framer-motion
                delay: totalDelay / 1000,
                ease: animationEasing
            }
        }
    };
    return (<framer_motion_1.motion.div ref={slideRef} className={className} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants} onAnimationComplete={function () {
            if (isInView && onAnimationComplete) {
                onAnimationComplete();
            }
        }}>
      {children}
    </framer_motion_1.motion.div>);
};
exports.SlideIn = SlideIn;
exports.default = exports.SlideIn;
