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
exports.FadeIn = void 0;
var React = require("react");
var framer_motion_1 = require("framer-motion");
var Box_1 = require("../layout/Box");
var animation_1 = require("../../../utils/animation");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * FadeIn Component with ref forwarding
 *
 * Animates its children with a fade effect using sacred timing
 */
exports.FadeIn = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.duration, duration = _c === void 0 ? 'normal' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.easing, easing = _e === void 0 ? 'standard' : _e, _f = _a.useGoldenRatio, useGoldenRatio = _f === void 0 ? true : _f, _g = _a.initialOpacity, initialOpacity = _g === void 0 ? 0 : _g, _h = _a.stayMounted, stayMounted = _h === void 0 ? false : _h, scale = _a.scale, rest = __rest(_a, ["children", "isVisible", "duration", "delay", "easing", "useGoldenRatio", "initialOpacity", "stayMounted", "scale"]);
    // Convert duration string to numerical value if needed
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration if enabled, creating more natural timing
    var effectiveDuration = useGoldenRatio
        ? (0, animation_1.applyGoldenRatioDuration)(durationValue)
        : durationValue;
    // Create animation variants based on props
    var variants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: effectiveDuration,
                delay: delay,
                ease: sacred_geometry_1.SACRED_EASINGS[easing],
            }
        },
        hidden: {
            opacity: initialOpacity,
            scale: scale || 1,
            transition: {
                duration: effectiveDuration,
                ease: sacred_geometry_1.SACRED_EASINGS[easing],
            }
        }
    };
    return (<framer_motion_1.AnimatePresence mode="wait">
        {(isVisible || stayMounted) && (<Box_1.default as={framer_motion_1.motion.div} ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} exit="hidden" variants={variants} style={{
                display: (!isVisible && stayMounted) ? 'none' : undefined,
            }} {...rest}>
            {children}
          </Box_1.default>)}
      </framer_motion_1.AnimatePresence>);
});
exports.FadeIn.displayName = 'FadeIn';
exports.default = exports.FadeIn;
