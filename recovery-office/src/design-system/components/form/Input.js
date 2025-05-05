"use strict";
/**
 * Input Component
 *
 * A text input component that implements sacred geometry principles
 * for proportions, spacing, and visual harmony.
 *
 * The Input component creates a harmonious user interface element
 * using Golden Ratio and Fibonacci-based measurements.
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
exports.Input = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Size-specific styles
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.sm,
                padding: "".concat(theme.spacing.xxs, "px ").concat(theme.spacing.xs, "px"),
                height: 8 * sacred_geometry_1.PHI * 3, // ~38.8px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.xs,
                iconSize: theme.typography.fontSize.base,
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                padding: "".concat(theme.spacing.xs, "px ").concat(theme.spacing.sm, "px"),
                height: 13 * sacred_geometry_1.PHI * 3, // ~63px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.md,
                iconSize: theme.typography.fontSize.lg,
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                padding: "".concat(theme.spacing.xxs, "px ").concat(theme.spacing.sm, "px"),
                height: 8 * sacred_geometry_1.PHI * 4, // ~51.8px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.sm,
                iconSize: theme.typography.fontSize.md,
            };
    }
};
// Styled input container with sacred geometry proportions
var InputContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n  \n  /* Icon padding adjustments */\n  ", "\n  \n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n  \n  /* Icon padding adjustments */\n  ", "\n  \n  ", "\n"])), function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    return "\n      height: ".concat(sizeStyles.height, "px;\n      border-radius: ").concat(sizeStyles.borderRadius, "px;\n    ");
}, function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) {
    var _a, _b;
    if (props.isInvalid)
        return props.theme.colors.feedback.error.main;
    if (props.hasFocus)
        return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1;
    if (props.isValidating)
        return props.theme.colors.feedback.info.main;
    return (_b = props.theme.colors.background[300]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var _a;
    return props.hasFocus && !props.isDisabled && "\n    box-shadow: 0 0 0 ".concat(sacred_geometry_1.PHI_INVERSE * 5, "px ").concat(props.isInvalid
        ? props.theme.colors.feedback.error.light + '40' // 40 = 25% opacity in hex
        : (_a = props.theme.colors.primary[200]) !== null && _a !== void 0 ? _a : 1 + '40', ";        // 40 = 25% opacity in hex\n  ");
}, function (props) {
    var _a;
    return props.isDisabled && "\n    opacity: ".concat(sacred_geometry_1.PHI_INVERSE, ";\n    cursor: not-allowed;\n    background-color: ").concat((_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1, ";\n  ");
}, function (props) { return props.isInvalid && "\n    border-color: ".concat(props.theme.colors.feedback.error.main, ";\n  "); }, function (props) { return props.isValidating && "\n    border-color: ".concat(props.theme.colors.feedback.info.main, ";\n  "); }, function (props) { return props.hasStartIcon && "\n    padding-left: ".concat(props.theme.spacing.md, "px;\n  "); }, function (props) { return props.hasEndIcon && "\n    padding-right: ".concat(props.theme.spacing.md, "px;\n  "); });
// Styled input element
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: ", ";\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder with golden ratio opacity */\n  &::placeholder {\n    color: ", ";\n    opacity: ", ";\n  }\n  \n  /* Disabled state */\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: ", ";\n  color: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder with golden ratio opacity */\n  &::placeholder {\n    color: ", ";\n    opacity: ", ";\n  }\n  \n  /* Disabled state */\n  ", "\n"])), function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return props.theme.colors.text.primary; }, function (props) {
    var sizeStyles = getSizeStyles(props.inputSize || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.fontSize, "px;\n      padding: ").concat(sizeStyles.padding, ";\n    ");
}, function (props) { return props.theme.colors.text.tertiary; }, sacred_geometry_1.PHI_INVERSE, function (props) { return props.isDisabled && "\n    cursor: not-allowed;\n  "; });
// Icon container
var IconContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  z-index: 2;\n  \n  /* Position */\n  ", "\n  \n  ", "\n  \n  /* Size-specific styles */\n  ", "\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  z-index: 2;\n  \n  /* Position */\n  ", "\n  \n  ", "\n  \n  /* Size-specific styles */\n  ", "\n"])), function (props) { return props.theme.colors.text.secondary; }, function (props) { return props.position === 'start' && "\n    left: ".concat(props.theme.spacing.xs, "px;\n  "); }, function (props) { return props.position === 'end' && "\n    right: ".concat(props.theme.spacing.xs, "px;\n  "); }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.iconSize, "px;\n    ");
});
/**
 * Input Component with ref forwarding
 *
 * Creates an input field with sacred geometry proportions
 */
exports.Input = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, _b = _a.type, type = _b === void 0 ? 'text' : _b, value = _a.value, defaultValue = _a.defaultValue, placeholder = _a.placeholder, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.readOnly, readOnly = _d === void 0 ? false : _d, _e = _a.required, required = _e === void 0 ? false : _e, _f = _a.isInvalid, isInvalid = _f === void 0 ? false : _f, _g = _a.isValidating, isValidating = _g === void 0 ? false : _g, _h = _a.size, size = _h === void 0 ? 'md' : _h, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, startIcon = _a.startIcon, endIcon = _a.endIcon, _j = _a.useSacredProportions, useSacredProportions = _j === void 0 ? true : _j, rest = __rest(_a, ["id", "name", "type", "value", "defaultValue", "placeholder", "disabled", "readOnly", "required", "isInvalid", "isValidating", "size", "onChange", "onFocus", "onBlur", "startIcon", "endIcon", "useSacredProportions"]);
    // State for tracking focus
    var _k = (0, react_1.useState)(false), hasFocus = _k[0], setHasFocus = _k[1];
    // Handle focus events
    var handleFocus = function (e) {
        setHasFocus(true);
        if (onFocus)
            onFocus(e);
    };
    // Handle blur events
    var handleBlur = function (e) {
        setHasFocus(false);
        if (onBlur)
            onBlur(e);
    };
    return (<InputContainer isDisabled={disabled} isInvalid={isInvalid} isValidating={isValidating} hasFocus={hasFocus} hasStartIcon={!!startIcon} hasEndIcon={!!endIcon} size={size}>
        {/* Start icon */}
        {startIcon && (<IconContainer position="start" size={size}>
            {startIcon}
          </IconContainer>)}
        
        {/* Input element */}
        <StyledInput id={id} name={name} type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} readOnly={readOnly} required={required} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} ref={ref} isDisabled={disabled} inputSize={size} {...rest}/>
        
        {/* End icon */}
        {endIcon && (<IconContainer position="end" size={size}>
            {endIcon}
          </IconContainer>)}
      </InputContainer>);
});
exports.Input.displayName = 'Input';
exports.default = exports.Input;
var templateObject_1, templateObject_2, templateObject_3;
