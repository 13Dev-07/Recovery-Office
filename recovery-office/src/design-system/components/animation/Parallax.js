"use strict";
/**
 * Parallax Component
 *
 * A component that serves as a container for parallax scrolling effects.
 * This component creates a scrolling environment where child ParallaxLayer
 * components can move at different speeds based on sacred geometry principles.
 *
 * The component applies the Golden Ratio (PHI) to create naturally
 * pleasing parallax depths and harmonious movement.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Parallax = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var Box_1 = require("../layout/Box");
var animation_1 = require("../../../utils/animation");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
/**
 * Styled container for the parallax effect
 */
var ParallaxContainer = (0, styled_components_1.default)(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  perspective: ", ";\n  transform-style: ", ";\n  will-change: ", ";\n"], ["\n  position: relative;\n  overflow: hidden;\n  perspective: ", ";\n  transform-style: ", ";\n  will-change: ", ";\n"])), function (_a) {
    var $perspective = _a.$perspective, $enabled = _a.$enabled;
    return $enabled ? "".concat($perspective, "px") : 'none';
}, function (_a) {
    var $enabled = _a.$enabled;
    return $enabled ? 'preserve-3d' : 'flat';
}, function (_a) {
    var $enabled = _a.$enabled;
    return $enabled ? 'transform' : 'auto';
});
/**
 * Parallax Component with ref forwarding
 *
 * Creates a container for parallax scrolling effects based on sacred geometry
 */
exports.Parallax = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.enabled, enabled = _b === void 0 ? true : _b, _c = _a.useSacredGeometry, useSacredGeometry = _c === void 0 ? true : _c, _d = _a.useGoldenRatio, useGoldenRatio = _d === void 0 ? true : _d, perspective = _a.perspective, rest = __rest(_a, ["children", "enabled", "useSacredGeometry", "useGoldenRatio", "perspective"]);
    // Check for reduced motion preference
    var shouldReduceMotion = (0, react_1.useMemo)(function () { return (0, animation_1.prefersReducedMotion)(); }, []);
    // Disable parallax effect if reduced motion is preferred
    var isEffectivelyEnabled = enabled && !shouldReduceMotion;
    // Calculate perspective based on Fibonacci sequence for sacred geometry
    var getPerspective = (0, react_1.useMemo)(function () {
        if (perspective)
            return perspective;
        // Use Fibonacci number for the base perspective
        var basePerspective = (0, getFibonacciByIndex_1.getFibonacciByIndex)(13); // 233px
        // Apply golden ratio if enabled for more harmonious depth
        return useGoldenRatio ? basePerspective * PHI * 4 : basePerspective * 4;
    }, [perspective, useGoldenRatio]);
    return (<ParallaxContainer ref={ref} $perspective={getPerspective} $enabled={isEffectivelyEnabled} {...rest}>
        {/* Pass parallex enabled state to all children */}
        {React.Children.map(children, function (child) {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, __assign({ enabled: isEffectivelyEnabled, useSacredGeometry: useSacredGeometry, useGoldenRatio: useGoldenRatio }, child.props));
            }
            return child;
        })}
      </ParallaxContainer>);
});
exports.Parallax.displayName = 'Parallax';
exports.default = exports.Parallax;
var templateObject_1;
