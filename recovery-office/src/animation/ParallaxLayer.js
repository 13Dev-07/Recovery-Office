"use strict";
/**
 * ParallaxLayer Component
 *
 * A component that creates parallax scrolling effects, where elements
 * move at different speeds as the user scrolls. Uses sacred geometry
 * principles for natural, harmonious movement.
 *
 * The component applies the Golden Ratio (PHI) to create naturally
 * pleasing parallax effects with harmonious depth perception.
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
exports.ParallaxLayer = void 0;
var React = require("react");
;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var animation_1 = require("@utils/animation");
var refs_1 = require("../utils/refs");
/**
 * ParallaxLayer Component with ref forwarding
 *
 * Creates harmonic parallax scrolling effects based on sacred geometry
 */
exports.ParallaxLayer = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.speed, speed = _b === void 0 ? -0.5 : _b, _c = _a.horizontal, horizontal = _c === void 0 ? false : _c, _d = _a.useGoldenRatio, useGoldenRatio = _d === void 0 ? true : _d, _e = _a.range, range = _e === void 0 ? 100 : _e, _f = _a.offset, offset = _f === void 0 ? 0.5 : _f, _g = _a.enabled, enabled = _g === void 0 ? true : _g, as = _a.as, rest = __rest(_a, ["children", "speed", "horizontal", "useGoldenRatio", "range", "offset", "enabled", "as"]);
    var internalRef = (0, react_1.useRef)(null);
    var _h = React.useState(0), elementTop = _h[0], setElementTop = _h[1];
    var _j = React.useState(0), viewportHeight = _j[0], setViewportHeight = _j[1];
    var _k = React.useState(0), elementHeight = _k[0], setElementHeight = _k[1];
    // Check for reduced motion preference
    var shouldReduceMotion = (0, animation_1.prefersReducedMotion)();
    // Disable parallax effect if reduced motion is preferred
    var isEffectivelyEnabled = enabled && !shouldReduceMotion;
    // Calculate range based on Fibonacci sequence for harmonious movement
    var effectiveRange = range || (0, animation_1.getFibonacciByIndex)(8); // Default to Fibonacci number 34
    // Get scroll progress using Framer Motion
    var _l = (0, framer_motion_1.useScroll)(), scrollY = _l.scrollY, scrollX = _l.scrollX;
    // Update element position measurements using the internal ref
    React.useEffect(function () {
        if (!internalRef.current || !isEffectivelyEnabled)
            return;
        var updatePosition = function () {
            var element = internalRef.current;
            if (!element)
                return;
            var _a = element.getBoundingClientRect(), top = _a.top, height = _a.height;
            setElementTop(top + window.scrollY);
            setElementHeight(height);
            setViewportHeight(window.innerHeight);
        };
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return function () {
            window.removeEventListener('resize', updatePosition);
        };
    }, [isEffectivelyEnabled]);
    // Create scroll-based transformations
    var scrollProgress = horizontal ? scrollX : scrollY;
    // Calculate position based on scroll progress
    var calculateYTransform = function (scrollProgress) {
        if (!isEffectivelyEnabled)
            return 0;
        return (0, framer_motion_1.useTransform)(scrollProgress, [
            elementTop - viewportHeight,
            elementTop + elementHeight
        ], [effectiveRange * -speed, effectiveRange * speed]);
    };
    // Get transformation values
    var transformValue = calculateYTransform(scrollProgress);
    // Apply transforms based on direction
    var transformX = horizontal ? transformValue : 0;
    var transformY = horizontal ? 0 : transformValue;
    // Memoize the merged ref callback for performance
    var combinedRef = (0, react_1.useMemo)(function () { return (0, refs_1.mergeRefs)([internalRef, ref]); }, [ref]);
    return (<framer_motion_1.motion.div ref={combinedRef} style={{
            x: transformX,
            y: transformY,
            willChange: 'transform' // Performance optimization
        }} {...rest}>
        {children}
      </framer_motion_1.motion.div>);
});
exports.ParallaxLayer.displayName = 'ParallaxLayer';
exports.default = exports.ParallaxLayer;
