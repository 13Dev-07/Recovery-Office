"use strict";
/**
 * Heading Component
 *
 * A typography component for headings (h1-h6) that implements sacred geometry
 * principles for font sizing, spacing, and visual hierarchy.
 *
 * Font sizes follow the Golden Ratio scale to create natural progression and harmony.
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
exports.Heading = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var tokens_1 = require("../../tokens");
var Box_1 = require("../layout/Box");
/**
 * Heading Component
 *
 * Creates headings with harmonious proportions based on sacred geometry
 */
exports.Heading = React.forwardRef(function (props, ref) {
    var _a;
    var _b = props.as, as = _b === void 0 ? 'h2' : _b, variant = props.variant, _c = props.truncate, truncate = _c === void 0 ? false : _c, _d = props.display, display = _d === void 0 ? false : _d, _e = props.underlined, underlined = _e === void 0 ? false : _e, _f = props.color, color = _f === void 0 ? 'text.primary' : _f, cssDisplay = props.cssDisplay, marginBottom = props.marginBottom, children = props.children, rest = __rest(props, ["as", "variant", "truncate", "display", "underlined", "color", "cssDisplay", "marginBottom", "children"]);
    // Determine the actual heading level based on variant or as prop
    var headingLevel = (variant && variant.match(/^h[1-6]$/))
        ? variant
        : as;
    // Determine if we should use display style
    var useDisplayStyle = display || variant === 'display1' || variant === 'display2';
    // Get the typography preset for the heading level
    var presetStyles = (_a = tokens_1.typography.typographyPresets[headingLevel]) !== null && _a !== void 0 ? _a : 1;
    // Create a CSS string with all styles
    var cssString = "\n      font-family: ".concat(useDisplayStyle ? "'Playfair Display', serif" : 'var(--font-family-heading)', ";\n      margin: 0;\n      display: ").concat(cssDisplay || 'block', ";\n      ").concat(marginBottom ? "margin-bottom: ".concat(marginBottom, ";") : '', "\n      \n      ").concat(truncate ? "\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      " : '', "\n      \n      ").concat(underlined ? "\n        position: relative;\n        \n        &::after {\n          content: '';\n          position: absolute;\n          bottom: -0.5rem;\n          left: 0;\n          width: 61.8%;\n          height: 2px;\n          background-color: currentColor;\n          opacity: 0.7;\n        }\n      " : '', "\n    ");
    // Set the correct HTML element based on the 'as' prop
    var actualElement = headingLevel;
    // Create a typed Styled Box component
    var StyledBox = (0, styled_components_1.default)(Box_1.default).attrs(function () { return ({
        as: actualElement,
    }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), cssString);
    // Return the StyledBox with props applied
    return (<StyledBox color={color} ref={ref} {...rest} {...presetStyles}>
        {children}
      </StyledBox>);
});
exports.Heading.displayName = 'Heading';
exports.default = exports.Heading;
var templateObject_1;
