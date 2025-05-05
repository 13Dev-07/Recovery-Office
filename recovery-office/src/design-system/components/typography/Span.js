"use strict";
/**
 * Span Component
 *
 * A typography component for inline text styling that implements sacred geometry
 * principles. It is designed to be used within other text components to
 * style specific parts of the text differently.
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
exports.Span = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Text_1 = require("./Text");
// Create the styled span component with all style variants
var StyledSpan = (0, styled_components_1.default)(Text_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Apply variant-specific styles\n  ", "\n  \n  // Text decoration styles\n  ", "\n  \n  ", "\n  \n  // Highlight styles\n  ", "\n"], ["\n  // Apply variant-specific styles\n  ", "\n  \n  // Text decoration styles\n  ", "\n  \n  ", "\n  \n  // Highlight styles\n  ", "\n"])), function (props) {
    switch (props.variant) {
        case 'smallcaps':
            return "\n          font-variant: small-caps;\n          letter-spacing: 0.05em;\n        ";
        case 'monospace':
            return "\n          font-family: ".concat(props.theme.typography.fontFamily.mono, ";\n          font-size: 0.95em;\n        ");
        case 'serif':
            return "\n          font-family: ".concat(props.theme.typography.fontFamily.heading, ";\n        ");
        case 'accent':
            return "\n          color: ".concat(props.theme.colors.accent.gold, ";\n          font-weight: ").concat(props.theme.typography.fontWeight.semiBold, ";\n        ");
        default:
            return '';
    }
}, function (props) { return props.underline && "\n    text-decoration: underline;\n    text-decoration-thickness: 0.1em;\n    text-underline-offset: 0.1em;\n  "; }, function (props) { return props.strikethrough && "\n    text-decoration: line-through;\n    text-decoration-thickness: 0.1em;\n  "; }, function (props) { return props.highlight && "\n    background-color: ".concat(props.highlightColor || '#FFF9C4', ";\n    padding: 0 0.2em;\n    border-radius: 0.1em;\n  "); });
/**
 * Span Component with ref forwarding
 *
 * Creates inline text styling elements
 */
exports.Span = React.forwardRef(function (_a, ref) {
    var size = _a.size, _b = _a.italic, italic = _b === void 0 ? false : _b, weight = _a.weight, _c = _a.variant, variant = _c === void 0 ? 'normal' : _c, _d = _a.underline, underline = _d === void 0 ? false : _d, _e = _a.strikethrough, strikethrough = _e === void 0 ? false : _e, _f = _a.highlight, highlight = _f === void 0 ? false : _f, highlightColor = _a.highlightColor, children = _a.children, rest = __rest(_a, ["size", "italic", "weight", "variant", "underline", "strikethrough", "highlight", "highlightColor", "children"]);
    return (<StyledSpan as="span" size={size} italic={italic} weight={weight} variant={variant} underline={underline} strikethrough={strikethrough} highlight={highlight} highlightColor={highlightColor} ref={ref} {...rest}>
        {children}
      </StyledSpan>);
});
exports.Span.displayName = 'Span';
exports.default = exports.Span;
var templateObject_1;
