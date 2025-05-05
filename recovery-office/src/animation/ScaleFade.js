"use strict";
/**
 * ScaleFade Component
 *
 * A component that combines scaling and fading animations for smooth
 * entrance and exit animations, using sacred geometry principles.
 *
 * The component applies the Golden Ratio (PHI) to create naturally
 * pleasing animations with harmonious timing and proportions.
 */
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
exports.ScaleFade = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var animation_1 = require("@utils/animation");
/**
 * ScaleFade Component with ref forwarding
 *
 * Combines scale and fade animations with sacred geometry principles
 */
exports.ScaleFade = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.duration, duration = _c === void 0 ? 'normal' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.easing, easing = _e === void 0 ? 'standard' : _e, _f = _a.initialScale, initialScale = _f === void 0 ? sacred_geometry_1.PHI_INVERSE : _f, // Golden ratio inverse (0.618) for natural scaling
    _g = _a.finalScale, // Golden ratio inverse (0.618) for natural scaling
    finalScale = _g === void 0 ? 1 : _g, _h = _a.initialOpacity, initialOpacity = _h === void 0 ? 0 : _h, _j = _a.stayMounted, stayMounted = _j === void 0 ? false : _j, _k = _a.transformOrigin, transformOrigin = _k === void 0 ? 'center' : _k, _l = _a.reverse, reverse = _l === void 0 ? false : _l, rest = __rest(_a, ["children", "isVisible", "duration", "delay", "easing", "initialScale", "finalScale", "initialOpacity", "stayMounted", "transformOrigin", "reverse"]);
    // Convert duration string to numerical value if needed
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration for natural timing
    var effectiveDuration = (0, animation_1.applyGoldenRatioDuration)(durationValue);
    // For reverse animation, swap the scale values
    var scaleValues = reverse
        ? { initial: finalScale, final: initialScale }
        : { initial: initialScale, final: finalScale };
    // Get the easing function from SACRED_EASINGS
    var easingValues = sacred_geometry_1.SACRED_EASINGS[easing];
    // Ensure the easing value is an array
    var easingFunction = Array.isArray(easingValues)
        ? easingValues
        : [sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1]; // Default fallback
    // Create animation variants with sacred timing
    var variants = {
        visible: {
            opacity: 1,
            scale: scaleValues.final,
            transition: {
                opacity: {
                    duration: effectiveDuration,
                    delay: delay,
                    ease: easingFunction,
                },
                scale: {
                    duration: effectiveDuration * sacred_geometry_1.PHI, // Slightly longer for scale (golden ratio)
                    delay: delay,
                    ease: easingFunction,
                }
            }
        },
        hidden: {
            opacity: initialOpacity,
            scale: scaleValues.initial,
            transition: {
                opacity: {
                    duration: effectiveDuration * sacred_geometry_1.PHI_INVERSE, // Slightly shorter for fade out
                    ease: easingFunction,
                },
                scale: {
                    duration: effectiveDuration,
                    ease: easingFunction,
                }
            }
        }
    };
    return (<framer_motion_1.AnimatePresence mode="wait">
        {(isVisible || stayMounted) && (<framer_motion_1.motion.div ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} exit="hidden" variants={variants} style={{
                transformOrigin: transformOrigin,
                display: (!isVisible && stayMounted) ? 'none' : undefined,
                willChange: 'transform, opacity' // Performance optimization
            }} {...rest}>
            {children}
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>);
});
exports.ScaleFade.displayName = 'ScaleFade';
exports.default = exports.ScaleFade;
