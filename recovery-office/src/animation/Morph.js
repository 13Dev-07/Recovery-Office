"use strict";
/**
 * Morph Component
 *
 * A component that animates between SVG paths by morphing from one
 * shape to another. Uses sacred geometry principles for timing and
 * easing to create naturally pleasing animations.
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
exports.Morph = void 0;
var React = require("react");
;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var layout_1 = require("@design-system/components/layout");
var animation_1 = require("@utils/animation");
var sacred_geometry_1 = require("@constants/sacred-geometry");
/**
 * Morph Component with ref forwarding
 *
 * Morphs between SVG paths with sacred geometry timing
 */
exports.Morph = (0, react_1.forwardRef)(function (_a, ref) {
    var paths = _a.paths, _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 'normal' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.easing, easing = _e === void 0 ? 'standard' : _e, _f = _a.fill, fill = _f === void 0 ? false : _f, _g = _a.fillColor, fillColor = _g === void 0 ? "currentColor" : _g, _h = _a.strokeColor, strokeColor = _h === void 0 ? "currentColor" : _h, _j = _a.strokeWidth, strokeWidth = _j === void 0 ? 2 : _j, _k = _a.width, width = _k === void 0 ? "100%" : _k, _l = _a.height, height = _l === void 0 ? "100%" : _l, _m = _a.viewBox, viewBox = _m === void 0 ? "0 0 100 100" : _m, _o = _a.preserveAspectRatio, preserveAspectRatio = _o === void 0 ? "xMidYMid meet" : _o, _p = _a.useGoldenRatio, useGoldenRatio = _p === void 0 ? true : _p, _q = _a.cycle, cycle = _q === void 0 ? false : _q, _r = _a.cycleInterval, cycleInterval = _r === void 0 ? 5 : _r, rest = __rest(_a, ["paths", "activeIndex", "duration", "delay", "easing", "fill", "fillColor", "strokeColor", "strokeWidth", "width", "height", "viewBox", "preserveAspectRatio", "useGoldenRatio", "cycle", "cycleInterval"]);
    // Ensure activeIndex is within bounds
    var safeActiveIndex = Math.max(0, Math.min(activeIndex, paths.length - 1));
    // State to track current path index
    var _s = React.useState(safeActiveIndex), currentIndex = _s[0], setCurrentIndex = _s[1];
    // Update current index when activeIndex prop changes
    React.useEffect(function () {
        setCurrentIndex(safeActiveIndex);
    }, [safeActiveIndex]);
    // Set up automatic cycling if enabled
    React.useEffect(function () {
        if (!cycle || paths.length <= 1)
            return;
        var interval = setInterval(function () {
            setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % paths.length; });
        }, cycleInterval * 1000);
        return function () { return clearInterval(interval); };
    }, [cycle, cycleInterval, paths.length]);
    // Convert duration string to numerical value
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration if enabled
    var effectiveDuration = useGoldenRatio
        ? (0, animation_1.applyGoldenRatioDuration)(durationValue)
        : durationValue;
    // Get the easing function from SACRED_EASINGS
    var easingValues = sacred_geometry_1.SACRED_EASINGS[easing];
    // Ensure the easing value is an array
    var easingFunction = Array.isArray(easingValues)
        ? easingValues
        : [sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1]; // Default fallback
    return (<layout_1.Box ref={ref} width={width} height={height} {...rest}>
        <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} overflow="visible">
          <framer_motion_1.motion.path d={paths[currentIndex]} initial={false} animate={{
            d: paths[currentIndex]
        }} style={{
            fill: fill ? fillColor : "none",
            stroke: strokeColor,
            strokeWidth: strokeWidth
        }} transition={{
            d: {
                duration: effectiveDuration,
                delay: delay,
                ease: easingFunction,
            }
        }}/>
        </svg>
      </layout_1.Box>);
});
exports.Morph.displayName = 'Morph';
exports.default = exports.Morph;
