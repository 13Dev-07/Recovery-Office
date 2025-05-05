"use strict";
/**
 * FormError Component
 *
 * A component for displaying form field errors that follows sacred geometry
 * principles for typography, spacing, and visual emphasis.
 *
 * The form error implements harmonious typography and spacing using Golden Ratio
 * and Fibonacci-based values.
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
exports.FormError = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
// Size-specific styles
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.xs,
                iconSize: theme.typography.fontSize.xs * PHI_INVERSE * 2, // Scaled down by golden ratio
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.sm,
                iconSize: theme.typography.fontSize.sm * PHI_INVERSE * 2, // Scaled down by golden ratio
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.xs,
                iconSize: theme.typography.fontSize.xs * PHI_INVERSE * 2, // Scaled down by golden ratio
            };
    }
};
// Styled error container with sacred geometry proportions
var StyledErrorContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n"])), function (props) { return props.theme.colors.feedback.error.main; }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.fontSize, "px;\n    ");
});
// Icon component for the error
var ErrorIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  margin-right: ", "px;\n  \n  /* Size-specific icon styles */\n  ", "\n  \n  &::before {\n    content: '!';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ", ";\n    color: white;\n    font-size: 0.75em;\n    font-weight: ", ";\n  }\n"], ["\n  display: inline-flex;\n  margin-right: ", "px;\n  \n  /* Size-specific icon styles */\n  ", "\n  \n  &::before {\n    content: '!';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: ", ";\n    color: white;\n    font-size: 0.75em;\n    font-weight: ", ";\n  }\n"])), function (props) { return props.theme.spacing.xxs; }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    return "\n      width: ".concat(sizeStyles.iconSize, "px;\n      height: ").concat(sizeStyles.iconSize, "px;\n    ");
}, function (props) { return props.theme.colors.feedback.error.main; }, function (props) { return props.theme.typography.fontWeight.bold; });
/**
 * FormError Component with ref forwarding
 *
 * Creates an error message for form fields with sacred geometry proportions
 */
exports.FormError = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.showIcon, showIcon = _c === void 0 ? true : _c, children = _a.children, rest = __rest(_a, ["size", "showIcon", "children"]);
    return (<StyledErrorContainer role="alert" size={size} ref={ref} {...rest}>
        {showIcon && <ErrorIcon size={size}/>}
        <layout_1.Box>{children}</layout_1.Box>
      </StyledErrorContainer>);
});
exports.FormError.displayName = 'FormError';
exports.default = exports.FormError;
var templateObject_1, templateObject_2;
