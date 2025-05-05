"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleIn = void 0;
var React = require("react");
var framer_motion_1 = require("framer-motion");
var AnimationContext_1 = require("@context/AnimationContext");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var ScaleIn = function (_a) {
    var children = _a.children, _b = _a.initialScale, initialScale = _b === void 0 ? sacred_geometry_1.PHI_INVERSE : _b, // Using golden ratio inverse for natural scaling
    _c = _a.delay, // Using golden ratio inverse for natural scaling
    delay = _c === void 0 ? 0 : _c, _d = _a.duration, duration = _d === void 0 ? 'medium' : _d, staggerIndex = _a.staggerIndex, _e = _a.threshold, threshold = _e === void 0 ? 0.1 : _e, _f = _a.once, once = _f === void 0 ? true : _f, _g = _a.className, className = _g === void 0 ? '' : _g, _h = _a.origin, origin = _h === void 0 ? 'center' : _h, onAnimationComplete = _a.onAnimationComplete;
    // Get animation settings from context
    var animationDuration = (0, AnimationContext_1.useAnimationDuration)(duration);
    var easing = (0, AnimationContext_1.useAnimationEasing)('elastic');
    var shouldAnimate = (0, AnimationContext_1.useShouldAnimate)();
    // Calculate total delay including stagger if present
    var staggerDelay = (0, AnimationContext_1.useStaggerDelay)(staggerIndex !== null && staggerIndex !== void 0 ? staggerIndex : 0);
    var totalDelay = delay + staggerDelay;
    // If animations are disabled, render children directly
    if (!shouldAnimate) {
        return <>{children}</>;
    }
    var variants = {
        hidden: {
            opacity: 0,
            scale: initialScale,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: animationDuration / 1000, // Convert to seconds for framer-motion
                delay: totalDelay / 1000,
                ease: easing,
            },
        },
    };
    return (<framer_motion_1.AnimatePresence>
      <framer_motion_1.motion.div className={className} initial="hidden" animate="visible" exit="hidden" variants={variants} style={{
            transformOrigin: origin,
            display: 'inline-flex'
        }} viewport={{ once: once, amount: threshold }} onAnimationComplete={function () {
            if (onAnimationComplete)
                onAnimationComplete();
        }}>
        {children}
      </framer_motion_1.motion.div>
    </framer_motion_1.AnimatePresence>);
};
exports.ScaleIn = ScaleIn;
exports.default = exports.ScaleIn;
