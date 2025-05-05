"use strict";
// TODO: This file contains direct document access without SSR checks
/**
 * Radio Component
 *
 * A radio button input component that implements sacred geometry principles
 * for proportions, spacing, and visual harmony.
 *
 * The Radio component creates a harmonious user interface element
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
exports.Radio = void 0;
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
                size: 13, // Fibonacci number
                fontSize: theme.typography.fontSize.sm,
                dotSize: 5, // ~8 * PHI_INVERSE
            };
        case 'lg':
            return {
                size: 21, // Fibonacci number
                fontSize: theme.typography.fontSize.md,
                dotSize: 8, // Fibonacci number
            };
        case 'md':
        default:
            return {
                size: 16, // Approximation of 8 * PHI
                fontSize: theme.typography.fontSize.base,
                dotSize: 6, // ~10 * PHI_INVERSE
            };
    }
};
// Get the color for different states and color schemes
var getColorByScheme = function (colorScheme, state, theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var base = {
        primary: {
            bg: (_a = theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1,
            hover: (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1,
            focus: (_c = theme.colors.primary[400]) !== null && _c !== void 0 ? _c : 1,
            disabled: (_d = theme.colors.background[300]) !== null && _d !== void 0 ? _d : 1,
        },
        secondary: {
            bg: (_e = theme.colors.secondary[500]) !== null && _e !== void 0 ? _e : 1,
            hover: (_f = theme.colors.secondary[600]) !== null && _f !== void 0 ? _f : 1,
            focus: (_g = theme.colors.secondary[400]) !== null && _g !== void 0 ? _g : 1,
            disabled: (_h = theme.colors.background[300]) !== null && _h !== void 0 ? _h : 1,
        },
        accent: {
            bg: theme.colors.accent.gold,
            hover: theme.colors.accent.copper,
            focus: theme.colors.accent.teal,
            disabled: (_j = theme.colors.background[300]) !== null && _j !== void 0 ? _j : 1,
        },
    };
    switch (state) {
        case 'hover':
            return (_k = base[colorScheme]) !== null && _k !== void 0 ? _k : 1.;
            hover;
        case 'focus':
            return (_l = base[colorScheme]) !== null && _l !== void 0 ? _l : 1.;
            focus;
        case 'disabled':
            return (_m = base[colorScheme]) !== null && _m !== void 0 ? _m : 1.;
            disabled;
        case 'normal':
        default:
            return (_o = base[colorScheme]) !== null && _o !== void 0 ? _o : 1.;
            bg;
    }
};
// Hidden native radio input
var HiddenRadio = styled_components_1.default.input.attrs({ type: 'radio' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n"], ["\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n"])));
// Styled visual radio with sacred geometry proportions
var StyledRadio = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(", ");\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%; // Always circular for radio buttons\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Hover state */\n  &:hover {\n    ", "\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(", ");\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%; // Always circular for radio buttons\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Hover state */\n  &:hover {\n    ", "\n  }\n"])), function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) {
    var _a;
    return props.isChecked
        ? getColorByScheme(props.colorScheme || 'primary', props.isDisabled ? 'disabled' : 'normal', props.theme)
        : (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1;
}, function (props) {
    var _a, _b;
    return props.isChecked
        ? 'transparent'
        : props.isDisabled
            ? (_a = props.theme.colors.background[300]) !== null && _a !== void 0 ? _a : 1
            : (_b = props.theme.colors.background[400]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    // If using golden ratio, apply proportional sizing
    if (props.useGoldenRatio) {
        return "\n        width: ".concat(sizeStyles.size, "px;\n        height: ").concat(sizeStyles.size, "px;\n      ");
    }
    // Otherwise use a simple circle
    return "\n      width: ".concat(sizeStyles.size, "px;\n      height: ").concat(sizeStyles.size, "px;\n    ");
}, function (props) { return props.hasFocus && !props.isDisabled && "\n    box-shadow: 0 0 0 ".concat(sacred_geometry_1.PHI_INVERSE * 5, "px ").concat(getColorByScheme(props.colorScheme || 'primary', 'focus', props.theme) + '40' // 40 = 25% opacity in hex
, ";\n  "); }, function (props) { return props.isDisabled && "\n    opacity: ".concat(sacred_geometry_1.PHI_INVERSE, ";\n    cursor: not-allowed;\n  "); }, function (props) {
    var _a, _b;
    return !props.isDisabled && "\n      background-color: ".concat(props.isChecked
        ? getColorByScheme(props.colorScheme || 'primary', 'hover', props.theme)
        : (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1, ";\n      border-color: ").concat(props.isChecked
        ? 'transparent'
        : (_b = props.theme.colors.background[500]) !== null && _b !== void 0 ? _b : 1, ";\n    ");
});
// Radio dot indicator with sacred proportions
var RadioDot = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-color: white;\n  border-radius: 50%;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: white;\n  border-radius: 50%;\n"])), function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).dotSize; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).dotSize; });
// Radio container for layout
var RadioContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  user-select: none;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  user-select: none;\n"])), function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; });
// Radio label with proper spacing
var RadioLabel = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: ", "px;\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n"], ["\n  margin-left: ", "px;\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n"])), function (props) { return props.theme.spacing.xs; }, function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).fontSize; }, function (props) { return props.isDisabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary; });
/**
 * Radio Component with ref forwarding
 *
 * Creates a radio button with sacred geometry proportions
 */
exports.Radio = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, value = _a.value, checked = _a.checked, defaultChecked = _a.defaultChecked, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.isInvalid, isInvalid = _d === void 0 ? false : _d, _e = _a.useGoldenRatio, useGoldenRatio = _e === void 0 ? true : _e, _f = _a.colorScheme, colorScheme = _f === void 0 ? 'primary' : _f, _g = _a.size, size = _g === void 0 ? 'md' : _g, onChange = _a.onChange, children = _a.children, rest = __rest(_a, ["id", "name", "value", "checked", "defaultChecked", "disabled", "required", "isInvalid", "useGoldenRatio", "colorScheme", "size", "onChange", "children"]);
    // State for focus tracking
    var _h = (0, react_1.useState)(false), hasFocus = _h[0], setHasFocus = _h[1];
    // Focus handling
    var handleFocus = function () { return setHasFocus(true); };
    var handleBlur = function () { return setHasFocus(false); };
    // Generate a unique ID if one is not provided
    var generatedId = React.useId();
    var radioId = id || "".concat(name ? name + '-' : '', "radio-").concat(value, "-").concat(generatedId);
    return (<RadioContainer isDisabled={disabled}>
        <layout_1.Box position="relative" display="flex" alignItems="center">
          {/* Hidden native radio for accessibility */}
          <HiddenRadio id={radioId} name={name} value={value} checked={checked} defaultChecked={defaultChecked} required={required} disabled={disabled} aria-invalid={isInvalid} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...rest}/>
          
          {/* Visual radio */}
          <StyledRadio isChecked={checked || defaultChecked} isDisabled={disabled} hasFocus={hasFocus} useGoldenRatio={useGoldenRatio} colorScheme={colorScheme} componentSize={size} onClick={function () {
            var input = document.getElementById(radioId);
            if (input && !disabled) {
                input.click();
            }
        }}>
            {(checked || defaultChecked) && (<RadioDot componentSize={size}/>)}
          </StyledRadio>
        </layout_1.Box>
        
        {/* Label */}
        {children && (<RadioLabel htmlFor={radioId} isDisabled={disabled} componentSize={size}>
            {children}
          </RadioLabel>)}
      </RadioContainer>);
});
exports.Radio.displayName = 'Radio';
exports.default = exports.Radio;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
