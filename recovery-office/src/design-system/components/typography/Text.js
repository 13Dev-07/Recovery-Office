"use strict";
/**
 * Text Component
 *
 * A typography component for general text that implements sacred geometry
 * principles for font sizing, line height, and spacing.
 *
 * Line heights follow the Golden Ratio (1.618) for optimal readability and harmony.
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
exports.Text = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../layout/Box");
// Create the styled text component with all style variants
var StyledText = (0, styled_components_1.default)(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Base text styles\n  font-family: ", ";\n  margin: 0;\n  ", "\n  \n  // Size styles\n  font-size: ", ";\n  \n  // Weight styles\n  font-weight: ", ";\n  \n  // Line height based on sacred geometry (Golden Ratio 1.618)\n  line-height: ", ";\n  \n  // Italic style if enabled\n  font-style: ", ";\n  \n  // Truncation styles if enabled\n  ", "\n  \n  // Multi-line truncation if noOfLines is specified\n  ", "\n"], ["\n  // Base text styles\n  font-family: ", ";\n  margin: 0;\n  ", "\n  \n  // Size styles\n  font-size: ", ";\n  \n  // Weight styles\n  font-weight: ", ";\n  \n  // Line height based on sacred geometry (Golden Ratio 1.618)\n  line-height: ", ";\n  \n  // Italic style if enabled\n  font-style: ", ";\n  \n  // Truncation styles if enabled\n  ", "\n  \n  // Multi-line truncation if noOfLines is specified\n  ", "\n"])), function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return props.marginBottom && "margin-bottom: ".concat(props.marginBottom, ";"); }, function (props) {
    var _a;
    var size = props.size || 'base';
    return (_a = props.theme.typography.fontSize.rem[size]) !== null && _a !== void 0 ? _a : 1;
}, function (props) {
    var _a;
    var weight = props.weight || 'regular';
    return (_a = props.theme.typography.fontWeight[weight]) !== null && _a !== void 0 ? _a : 1;
}, function (props) {
    // If it's a heading or small text, use tighter line height
    if (props.size === 'lg' || props.size === 'xl' || props.size === 'xs') {
        return props.theme.typography.lineHeight.tight;
    }
    // For body text, use the base line height (Golden Ratio)
    return props.theme.typography.lineHeight.base;
}, function (props) { return props.italic ? 'italic' : 'normal'; }, function (props) { return props.truncate && "\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n  "; }, function (props) { return props.noOfLines && !props.truncate && "\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(props.noOfLines, ";\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "); });
// Map variant to size and weight
var resolveVariantProps = function (variant) {
    if (!variant)
        return {};
    switch (variant) {
        case 'body1':
            return { size: 'base' };
        case 'body2':
            return { size: 'sm' };
        case 'subtitle1':
            return { size: 'md', weight: 'medium' };
        case 'subtitle2':
            return { size: 'base', weight: 'medium' };
        case 'caption':
            return { size: 'xs' };
        case 'overline':
            return { size: 'xs', weight: 'medium' };
        case 'button':
            return { size: 'sm', weight: 'medium' };
        case 'quote':
            return { italic: true, weight: 'medium' };
        default:
            return {};
    }
};
/**
 * Text Component with ref forwarding
 *
 * Creates text elements with harmonious proportions based on sacred geometry
 */
exports.Text = React.forwardRef(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'span' : _a, _b = props.size, size = _b === void 0 ? 'base' : _b, variant = props.variant, _c = props.truncate, truncate = _c === void 0 ? false : _c, noOfLines = props.noOfLines, _d = props.italic, italic = _d === void 0 ? false : _d, _e = props.weight, weight = _e === void 0 ? 'regular' : _e, _f = props.color, color = _f === void 0 ? 'text.primary' : _f, marginBottom = props.marginBottom, children = props.children, rest = __rest(props, ["as", "size", "variant", "truncate", "noOfLines", "italic", "weight", "color", "marginBottom", "children"]);
    // Apply variant-based styling if a variant is provided
    var variantProps = resolveVariantProps(variant);
    return (<StyledText as={as} size={variantProps.size || size} truncate={truncate} noOfLines={noOfLines} italic={variantProps.italic || italic} weight={variantProps.weight || weight} color={color} marginBottom={marginBottom} ref={ref} {...rest}>
        {children}
      </StyledText>);
});
exports.Text.displayName = 'Text';
exports.default = exports.Text;
var templateObject_1;
