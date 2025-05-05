"use strict";
/**
 * Paragraph Component
 *
 * A typography component optimized for long-form text that implements sacred geometry
 * principles for line height, paragraph spacing, and optimal reading width.
 *
 * Reading width follows the golden ratio principles for maximum readability and comfort.
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
exports.Paragraph = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Text_1 = require("./Text");
// Create the styled paragraph component with all style variants
var StyledParagraph = (0, styled_components_1.default)(Text_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Paragraph specific styles\n  display: block;\n  margin-bottom: ", "px;\n  \n  // Apply the golden-ratio-based optimal reading width\n  ", "\n  \n  // Hyphenation for better text flow\n  ", "\n  \n  // Drop cap styling for first letter\n  ", "\n  \n  // First line indentation for visual rhythm\n  ", "\n"], ["\n  // Paragraph specific styles\n  display: block;\n  margin-bottom: ", "px;\n  \n  // Apply the golden-ratio-based optimal reading width\n  ", "\n  \n  // Hyphenation for better text flow\n  ", "\n  \n  // Drop cap styling for first letter\n  ", "\n  \n  // First line indentation for visual rhythm\n  ", "\n"])), function (props) { return props.marginBottom || props.theme.spacing.md; }, function (props) { return props.useOptimalWidth && "\n    max-width: ".concat(65 * sacred_geometry_1.PHI, "ch; // Research suggests 65-75ch is optimal (using PHI for sacred harmony)\n  "); }, function (props) { return props.hyphenate && "\n    hyphens: auto;\n    hyphenate-limit-chars: 6 3 2;\n    hyphenate-limit-lines: 2;\n  "; }, function (props) {
    var _a;
    return props.dropCap && "\n    &::first-letter {\n      initial-letter: ".concat(Math.round(sacred_geometry_1.PHI * 1.5), ";\n      margin-right: ").concat(props.theme.spacing.xs, "px;\n      font-family: ").concat(props.theme.typography.fontFamily.heading, ";\n      font-weight: ").concat(props.theme.typography.fontWeight.bold, ";\n      color: ").concat((_a = props.theme.colors.primary[800]) !== null && _a !== void 0 ? _a : 1, ";\n      float: left;\n      line-height: 1;\n    }\n  ");
}, function (props) { return props.indent && "\n    text-indent: ".concat(props.theme.spacing.md, "px;\n  "); });
/**
 * Paragraph Component with ref forwarding
 *
 * Creates paragraph elements with optimal reading properties based on sacred geometry
 */
exports.Paragraph = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'base' : _b, variant = _a.variant, _c = _a.useOptimalWidth, useOptimalWidth = _c === void 0 ? true : _c, _d = _a.hyphenate, hyphenate = _d === void 0 ? false : _d, _e = _a.dropCap, dropCap = _e === void 0 ? false : _e, _f = _a.indent, indent = _f === void 0 ? false : _f, marginBottom = _a.marginBottom, children = _a.children, rest = __rest(_a, ["size", "variant", "useOptimalWidth", "hyphenate", "dropCap", "indent", "marginBottom", "children"]);
    // If variant is provided, map it to a size
    var resolvedSize = variant ? (variant === 'body1' ? 'base' : 'sm') : size;
    return (<StyledParagraph as="p" size={resolvedSize} useOptimalWidth={useOptimalWidth} hyphenate={hyphenate} dropCap={dropCap} indent={indent} marginBottom={marginBottom} ref={ref} {...rest}>
        {children}
      </StyledParagraph>);
});
exports.Paragraph.displayName = 'Paragraph';
exports.default = exports.Paragraph;
var templateObject_1;
