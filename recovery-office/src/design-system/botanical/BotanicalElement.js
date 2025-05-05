"use strict";
/**
 * BotanicalElement Component
 *
 * A base component for creating botanical SVG elements that follow sacred geometry principles.
 * This component provides common functionality and styling for all botanical elements.
 *
 * Each botanical element derived from this base will implement specific mathematical
 * principles from sacred geometry to create harmonious, nature-inspired visuals.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.BotanicalElement = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Styled SVG component with sacred geometry principles
 */
var StyledSvg = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Apply sacred geometry proportions when useGoldenRatio is true\n  ", "\n  \n  // Ensure smooth rendering of SVG paths\n  shape-rendering: geometricPrecision;\n  \n  // Optional: add subtle glow effect to emphasize sacred geometry\n  path {\n    transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  }\n  \n  // Sacred geometry animations on hover (subtle)\n  &:hover path {\n    filter: drop-shadow(0 0 1px currentColor);\n  }\n"], ["\n  // Apply sacred geometry proportions when useGoldenRatio is true\n  ", "\n  \n  // Ensure smooth rendering of SVG paths\n  shape-rendering: geometricPrecision;\n  \n  // Optional: add subtle glow effect to emphasize sacred geometry\n  path {\n    transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  }\n  \n  // Sacred geometry animations on hover (subtle)\n  &:hover path {\n    filter: drop-shadow(0 0 1px currentColor);\n  }\n"])), function (props) { return props.useGoldenRatio && "\n    // If width is larger than height, make height = width / PHI\n    // Otherwise, make width = height / PHI\n    aspect-ratio: ".concat(sacred_geometry_1.PHI, " / 1;\n  "); }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE);
/**
 * BotanicalElement Component with ref forwarding
 *
 * Base component for all botanical SVG elements
 */
exports.BotanicalElement = forwardRef(function (_a, ref) {
    var _b = _a.width, width = _b === void 0 ? '100%' : _b, _c = _a.height, height = _c === void 0 ? '100%' : _c, _d = _a.viewBox, viewBox = _d === void 0 ? '0 0 100 100' : _d, _e = _a.color, color = _e === void 0 ? 'currentColor' : _e, _f = _a.strokeWidth, strokeWidth = _f === void 0 ? 1 : _f, _g = _a.fill, fill = _g === void 0 ? 'none' : _g, _h = _a.preserveAspectRatio, preserveAspectRatio = _h === void 0 ? true : _h, _j = _a.opacity, opacity = _j === void 0 ? 1 : _j, _k = _a.decorative, decorative = _k === void 0 ? true : _k, description = _a.description, _l = _a.useGoldenRatio, useGoldenRatio = _l === void 0 ? true : _l, children = _a.children, rest = __rest(_a, ["width", "height", "viewBox", "color", "strokeWidth", "fill", "preserveAspectRatio", "opacity", "decorative", "description", "useGoldenRatio", "children"]);
    // Determine the appropriate preserveAspectRatio attribute
    var aspectRatio = preserveAspectRatio ? 'xMidYMid meet' : 'none';
    // Accessibility attributes
    var a11yProps = decorative
        ? { 'aria-hidden': 'true' }
        : { role: 'img' };
    return (<layout_1.Box display="inline-block" width={width} height={height} {...rest}>
        <StyledSvg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} preserveAspectRatio={aspectRatio} useGoldenRatio={useGoldenRatio} opacity={opacity} stroke={color} strokeWidth={strokeWidth} fill={fill} {...a11yProps}>
          {/* Add description for accessibility if provided and element is not decorative */}
          {!decorative && description && (<desc>{description}</desc>)}
          
          {/* SVG content */}
          {children}
        </StyledSvg>
      </layout_1.Box>);
});
exports.BotanicalElement.displayName = 'BotanicalElement';
exports.default = exports.BotanicalElement;
var templateObject_1;
