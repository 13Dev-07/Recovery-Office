"use strict";
/**
 * MorphingShape Component
 *
 * A component that animates between different SVG paths using sacred geometry principles
 * for timing and easing. Great for creating fluid, organic transitions between shapes.
 *
 * This component uses golden ratio (PHI) for natural, harmonious animation
 * timing and easing functions derived from sacred geometry.
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
exports.MorphingShape = void 0;
var React = require("react");
var react_1 = require("react");
;
var framer_motion_1 = require("framer-motion");
var Box_1 = require("../layout/Box");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../../../utils/animation");
/**
 * MorphingShape Component with ref forwarding
 *
 * Animates between SVG paths with sacred geometry timing
 */
exports.MorphingShape = React.forwardRef(function (_a, ref) {
    var paths = _a.paths, _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 'normal' : _c, _d = _a.delay, delay = _d === void 0 ? 0 : _d, _e = _a.easing, easing = _e === void 0 ? 'standard' : _e, _f = _a.useGoldenRatio, useGoldenRatio = _f === void 0 ? true : _f, _g = _a.fill, fill = _g === void 0 ? "currentColor" : _g, _h = _a.stroke, stroke = _h === void 0 ? "none" : _h, _j = _a.strokeWidth, strokeWidth = _j === void 0 ? 0 : _j, _k = _a.viewBox, viewBox = _k === void 0 ? "0 0 100 100" : _k, _l = _a.loop, loop = _l === void 0 ? false : _l, _m = _a.loopInterval, loopInterval = _m === void 0 ? 3 : _m, rest = __rest(_a, ["paths", "activeIndex", "duration", "delay", "easing", "useGoldenRatio", "fill", "stroke", "strokeWidth", "viewBox", "loop", "loopInterval"]);
    // State to track current and next paths for animation
    var _o = (0, react_1.useState)(activeIndex), currentPathIndex = _o[0], setCurrentPathIndex = _o[1];
    var _p = (0, framer_motion_1.useAnimate)(), scope = _p[0], animate = _p[1];
    // Convert duration string to numerical value if needed
    var durationValue = (0, animation_1.resolveDuration)(duration);
    // Apply golden ratio to duration for natural timing
    var effectiveDuration = useGoldenRatio
        ? (0, animation_1.applyGoldenRatioDuration)(durationValue)
        : durationValue;
    // Handle prop changes
    (0, react_1.useEffect)(function () {
        if (activeIndex !== currentPathIndex) {
            setCurrentPathIndex(activeIndex);
        }
    }, [activeIndex, currentPathIndex]);
    // Handle path morphing animation
    (0, react_1.useEffect)(function () {
        if (paths.length <= 1)
            return;
        var currentPath = paths[currentPathIndex % paths.length];
        // Animate the path morphing using sacred geometry timing
        animate("path", { d: currentPath }, {
            duration: effectiveDuration,
            delay: delay,
            ease: sacred_geometry_1.SACRED_EASINGS[easing],
        });
    }, [currentPathIndex, paths, animate, effectiveDuration, delay, easing]);
    // Set up looping if enabled
    (0, react_1.useEffect)(function () {
        if (!loop || paths.length <= 1)
            return;
        // Use Fibonacci-based interval timing
        var interval = setInterval(function () {
            setCurrentPathIndex(function (prevIndex) { return (prevIndex + 1) % paths.length; });
        }, loopInterval * 1000);
        return function () { return clearInterval(interval); };
    }, [loop, loopInterval, paths.length]);
    // If no paths provided, render nothing
    if (!paths.length)
        return null;
    return (<Box_1.default ref={ref} {...rest}>
        <framer_motion_1.motion.svg ref={scope} viewBox={viewBox} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <framer_motion_1.motion.path d={paths[currentPathIndex % paths.length]} fill={fill} stroke={stroke} strokeWidth={strokeWidth} initial={false}/>
        </framer_motion_1.motion.svg>
      </Box_1.default>);
});
exports.MorphingShape.displayName = 'MorphingShape';
exports.default = exports.MorphingShape;
