"use strict";
/**
 * FormLabel Component
 *
 * A label component for form fields that follows sacred geometry principles
 * for typography, spacing, and visual emphasis.
 *
 * The form label implements harmonious typography using Golden Ratio and
 * Fibonacci-based sizing.
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
exports.FormLabel = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
// Calculate size-specific styles
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.sm,
                marginBottom: theme.spacing.xxs,
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                marginBottom: theme.spacing.xs,
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                marginBottom: theme.spacing.xxs,
            };
    }
};
// Styled label component with sacred geometry proportions
var StyledLabel = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Disabled state */\n  ", "\n"], ["\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Disabled state */\n  ", "\n"])), function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return props.theme.typography.fontWeight.medium; }, function (props) { return props.theme.colors.text.primary; }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.fontSize, "px;\n      margin-bottom: ").concat(sizeStyles.marginBottom, "px;\n    ");
}, function (props) { return props.isDisabled && "\n    opacity: ".concat(PHI_INVERSE, ";\n    cursor: not-allowed;\n  "); });
// Required indicator with sacred proportions
var RequiredIndicator = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: ", "px;\n  font-size: ", "px;\n  position: relative;\n  top: -0.1em;\n"], ["\n  color: ", ";\n  margin-left: ", "px;\n  font-size: ", "px;\n  position: relative;\n  top: -0.1em;\n"])), function (props) { return props.theme.colors.feedback.error.main; }, function (props) { return props.theme.spacing.xxs; }, function (props) { return props.theme.typography.fontSize.base * PHI_INVERSE; });
/**
 * FormLabel Component with ref forwarding
 *
 * Creates a label for form fields with sacred geometry proportions
 */
exports.FormLabel = React.forwardRef(function (_a, ref) {
    var htmlFor = _a.htmlFor, _b = _a.isRequired, isRequired = _b === void 0 ? false : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.showRequiredIndicator, showRequiredIndicator = _e === void 0 ? true : _e, children = _a.children, rest = __rest(_a, ["htmlFor", "isRequired", "isDisabled", "size", "showRequiredIndicator", "children"]);
    return (<StyledLabel as="label" htmlFor={htmlFor} isDisabled={isDisabled} isRequired={isRequired} size={size} ref={ref} {...rest}>
        {children}
        {isRequired && showRequiredIndicator && (<RequiredIndicator aria-hidden="true">*</RequiredIndicator>)}
      </StyledLabel>);
});
exports.FormLabel.displayName = 'FormLabel';
exports.default = exports.FormLabel;
var templateObject_1, templateObject_2;
