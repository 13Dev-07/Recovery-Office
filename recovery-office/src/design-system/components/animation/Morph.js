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
var react_1 = require("react");
;
var framer_motion_1 = require("framer-motion");
var layout_1 = require("../layout");
var animation_1 = require("../../../utils/animation");
/**
 * Morph Component with ref forwarding
 *
 * Morphs between SVG paths with sacred geometry timing
 */
exports.Morph = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var paths = _a.paths, _d = _a.activeIndex, activeIndex = _d === void 0 ? 0 : _d, _e = _a.duration, duration = _e === void 0 ? 'normal' : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.easing, easing = _g === void 0 ? 'standard' : _g, _h = _a.fill, fill = _h === void 0 ? false : _h, _j = _a.fillColor, fillColor = _j === void 0 ? "currentColor" : _j, _k = _a.strokeColor, strokeColor = _k === void 0 ? "currentColor" : _k, _l = _a.strokeWidth, strokeWidth = _l === void 0 ? 2 : _l, _m = _a.width, width = _m === void 0 ? "100%" : _m, _o = _a.height, height = _o === void 0 ? "100%" : _o, _p = _a.viewBox, viewBox = _p === void 0 ? "0 0 100 100" : _p, _q = _a.preserveAspectRatio, preserveAspectRatio = _q === void 0 ? "xMidYMid meet" : _q, _r = _a.useGoldenRatio, useGoldenRatio = _r === void 0 ? true : _r, _s = _a.cycle, cycle = _s === void 0 ? false : _s, _t = _a.cycleInterval, cycleInterval = _t === void 0 ? 5 : _t, rest = __rest(_a, ["paths", "activeIndex", "duration", "delay", "easing", "fill", "fillColor", "strokeColor", "strokeWidth", "width", "height", "viewBox", "preserveAspectRatio", "useGoldenRatio", "cycle", "cycleInterval"]);
    // Ensure activeIndex is within bounds
    var safeActiveIndex = Math.max(0, Math.min(activeIndex, paths.length - 1));
    // State to track current path index
    var _u = (0, react_1.useState)(safeActiveIndex), currentIndex = _u[0], setCurrentIndex = _u[1];
    // Update current index when activeIndex prop changes
    (0, react_1.useEffect)(function () {
        setCurrentIndex(safeActiveIndex);
    }, [safeActiveIndex]);
    // Set up automatic cycling if enabled
    (0, react_1.useEffect)(function () {
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
    return (<layout_1.Box ref={ref} width={width} height={height} {...rest}>
        <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} overflow="visible">
          <framer_motion_1.motion.path d={(_b = paths[currentIndex]) !== null && _b !== void 0 ? _b : 1} initial={false} animate={{
            d: (_c = paths[currentIndex]) !== null && _c !== void 0 ? _c : 1
        }} style={{
            fill: fill ? fillColor : "none",
            stroke: strokeColor,
            strokeWidth: strokeWidth
        }} transition={{
            d: {
                duration: effectiveDuration,
                delay: delay,
                ease: SACRED_EASINGS[easing],
            }
        }}/>
        </svg>
      </layout_1.Box>);
});
exports.Morph.displayName = 'Morph';
exports.default = exports.Morph;
