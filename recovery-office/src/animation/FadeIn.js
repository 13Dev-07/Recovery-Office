"use strict";
/**
 * FadeIn Component
 *
 * A component that gradually reveals its children with a fade animation
 * using sacred geometry principles for timing and easing.
 *
 * This component uses the golden ratio (PHI) for natural, harmonious
 * animation timing and easing functions derived from sacred geometry.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeIn = void 0;
var React = require("react");
;
var framer_motion_1 = require("framer-motion");
var AnimationContext_1 = require("@context/AnimationContext");
var FadeIn = function (_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, duration = _a.duration, easing = _a.easing, _c = _a.staggerIndex, staggerIndex = _c === void 0 ? 0 : _c, _d = _a.threshold, threshold = _d === void 0 ? 0.2 : _d, _e = _a.once, once = _e === void 0 ? true : _e, _f = _a.className, className = _f === void 0 ? '' : _f, onAnimationComplete = _a.onAnimationComplete, _g = _a.initialOpacity, initialOpacity = _g === void 0 ? 0 : _g, _h = _a.targetOpacity, targetOpacity = _h === void 0 ? 1 : _h;
    var shouldAnimate = (0, AnimationContext_1.useShouldAnimate)();
    var animationDuration = (0, AnimationContext_1.useAnimationDuration)(duration);
    var animationEasing = (0, AnimationContext_1.useAnimationEasing)(easing);
    var staggerDelay = (0, AnimationContext_1.useStaggerDelay)(staggerIndex);
    // Calculate total delay including base delay and stagger
    var totalDelay = delay + staggerDelay;
    // Reference for intersection observer
    var ref = useRef(null);
    var isInView = (0, framer_motion_1.useInView)(ref, { amount: threshold, once: once });
    // If animations are disabled, render children directly
    if (!shouldAnimate) {
        return <div ref={ref} className={className}>{children}</div>;
    }
    // Animation variants
    var variants = {
        hidden: {
            opacity: initialOpacity
        },
        visible: {
            opacity: targetOpacity,
            transition: {
                duration: animationDuration / 1000, // Convert ms to seconds for framer-motion
                delay: totalDelay / 1000,
                ease: animationEasing
            }
        }
    };
    return (<framer_motion_1.motion.div ref={ref} className={className} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants} onAnimationComplete={function () {
            if (isInView && onAnimationComplete) {
                onAnimationComplete();
            }
        }}>
      {children}
    </framer_motion_1.motion.div>);
};
exports.FadeIn = FadeIn;
exports.default = exports.FadeIn;
