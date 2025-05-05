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
exports.SlideIn = void 0;
var React = require("react");
var framer_motion_1 = require("framer-motion");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Box_1 = require("../layout/Box");
var animation_1 = require("../../../utils/animation");
/**
 * Get directional offsets based on the slide direction
 */
var getDirectionalOffsets = function (direction, distance) {
    switch (direction) {
        case 'up':
            return { y: distance };
        case 'down':
            return { y: -distance };
        case 'left':
            return { x: distance };
        case 'right':
            return { x: -distance };
        default:
            return { y: distance };
    }
};
/**
 * SlideIn Component with ref forwarding
 *
 * Animates its children with a slide effect from the specified direction
 */
exports.SlideIn = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.direction, direction = _c === void 0 ? 'up' : _c, _d = _a.distance, distance = _d === void 0 ? 34 : _d, // Fibonacci number
    _e = _a.duration, // Fibonacci number
    duration = _e === void 0 ? 'normal' : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.easing, easing = _g === void 0 ? 'standard' : _g, _h = _a.withFade, withFade = _h === void 0 ? true : _h, _j = _a.initialOpacity, initialOpacity = _j === void 0 ? 0 : _j, _k = _a.stayMounted, stayMounted = _k === void 0 ? false : _k, rest = __rest(_a, ["children", "isVisible", "direction", "distance", "duration", "delay", "easing", "withFade", "initialOpacity", "stayMounted"]);
    // Convert duration string to numerical value
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration for natural timing
    var effectiveDuration = (0, animation_1.applyGoldenRatioDuration)(durationValue);
    // Get directional offsets based on direction
    var directionalOffsets = getDirectionalOffsets(direction, distance);
    // Create animation variants
    var variants = {
        visible: __assign(__assign({}, Object.fromEntries(Object.entries(directionalOffsets).map(function (_a) {
            var key = _a[0], _ = _a[1];
            return [key, 0];
        }))), { opacity: 1, transition: {
                duration: effectiveDuration,
                delay: delay,
                ease: sacred_geometry_1.SACRED_EASINGS[easing],
            } }),
        hidden: __assign(__assign({}, directionalOffsets), { opacity: withFade ? initialOpacity : 1, transition: {
                duration: effectiveDuration * sacred_geometry_1.PHI_INVERSE, // Slightly shorter for exit
                ease: sacred_geometry_1.SACRED_EASINGS[easing],
            } })
    };
    return (<framer_motion_1.AnimatePresence mode="wait">
        {(isVisible || stayMounted) && (<Box_1.default as={framer_motion_1.motion.div} ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} exit="hidden" variants={variants} style={{
                display: (!isVisible && stayMounted) ? 'none' : undefined,
            }} {...rest}>
            {children}
          </Box_1.default>)}
      </framer_motion_1.AnimatePresence>);
});
exports.SlideIn.displayName = 'SlideIn';
exports.default = exports.SlideIn;
