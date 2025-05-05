"use strict";
/**
 * Checkbox Component
 *
 * A checkbox input component that implements sacred geometry principles
 * for proportions, spacing, and visual harmony.
 *
 * The Checkbox component creates a harmonious user interface element
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
exports.Checkbox = void 0;
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
                borderRadius: theme.radius.xs,
                fontSize: theme.typography.fontSize.sm,
                checkmarkSize: 8, // Fibonacci number
            };
        case 'lg':
            return {
                size: 21, // Fibonacci number
                borderRadius: theme.radius.sm,
                fontSize: theme.typography.fontSize.md,
                checkmarkSize: 13, // Fibonacci number
            };
        case 'md':
        default:
            return {
                size: 16, // Approximation of 8 * PHI
                borderRadius: theme.radius.xs,
                fontSize: theme.typography.fontSize.base,
                checkmarkSize: 10, // Approximation of PHI * 6
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
// Hidden native checkbox input
var HiddenCheckbox = styled_components_1.default.input.attrs({ type: 'checkbox' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n"], ["\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n"])));
// Styled visual checkbox with sacred geometry proportions
var StyledCheckbox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(", ");\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Hover state */\n  &:hover {\n    ", "\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(", ");\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Hover state */\n  &:hover {\n    ", "\n  }\n"])), function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) {
    var _a;
    return props.isChecked || props.isIndeterminate
        ? getColorByScheme(props.colorScheme || 'primary', props.isDisabled ? 'disabled' : 'normal', props.theme)
        : (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1;
}, function (props) {
    var _a, _b;
    return props.isChecked || props.isIndeterminate
        ? 'transparent'
        : props.isDisabled
            ? (_a = props.theme.colors.background[300]) !== null && _a !== void 0 ? _a : 1
            : (_b = props.theme.colors.background[400]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    // If using golden ratio, apply rounded square shape
    if (props.useGoldenRatio) {
        return "\n        width: ".concat(sizeStyles.size, "px;\n        height: ").concat(sizeStyles.size, "px;\n        border-radius: ").concat(sizeStyles.borderRadius, "px;\n      ");
    }
    // Otherwise use a simple square
    return "\n      width: ".concat(sizeStyles.size, "px;\n      height: ").concat(sizeStyles.size, "px;\n      border-radius: ").concat(sizeStyles.borderRadius, "px;\n    ");
}, function (props) { return props.hasFocus && !props.isDisabled && "\n    box-shadow: 0 0 0 ".concat(sacred_geometry_1.PHI_INVERSE * 5, "px ").concat(getColorByScheme(props.colorScheme || 'primary', 'focus', props.theme) + '40' // 40 = 25% opacity in hex
, ";\n  "); }, function (props) { return props.isDisabled && "\n    opacity: ".concat(sacred_geometry_1.PHI_INVERSE, ";\n    cursor: not-allowed;\n  "); }, function (props) {
    var _a, _b;
    return !props.isDisabled && "\n      background-color: ".concat(props.isChecked || props.isIndeterminate
        ? getColorByScheme(props.colorScheme || 'primary', 'hover', props.theme)
        : (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1, ";\n      border-color: ").concat(props.isChecked || props.isIndeterminate
        ? 'transparent'
        : (_b = props.theme.colors.background[500]) !== null && _b !== void 0 ? _b : 1, ";\n    ");
});
// Checkmark icon with sacred proportions
var CheckIcon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* Checkmark is a simple SVG path drawn with the golden ratio in mind */\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n  \n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background-color: white;\n    border-radius: ", "px;\n  }\n  \n  /* The shorter line in the checkmark is PHI_INVERSE times the longer line */\n  &::before {\n    width: ", "px;\n    height: 2px;\n    bottom: ", "px;\n    left: 0;\n    transform: rotate(45deg);\n    transform-origin: left bottom;\n  }\n  \n  &::after {\n    width: ", "px;\n    height: 2px;\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(-50deg);\n    transform-origin: left bottom;\n  }\n"], ["\n  /* Checkmark is a simple SVG path drawn with the golden ratio in mind */\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n  \n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    background-color: white;\n    border-radius: ", "px;\n  }\n  \n  /* The shorter line in the checkmark is PHI_INVERSE times the longer line */\n  &::before {\n    width: ", "px;\n    height: 2px;\n    bottom: ", "px;\n    left: 0;\n    transform: rotate(45deg);\n    transform-origin: left bottom;\n  }\n  \n  &::after {\n    width: ", "px;\n    height: 2px;\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(-50deg);\n    transform-origin: left bottom;\n  }\n"])), function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize; }, function (props) { return props.theme.radius.xs / 2; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.5; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.3; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.8; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.3; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.4; });
// Indeterminate icon
var IndeterminateIcon = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", "px;\n  height: 2px;\n  background-color: white;\n  border-radius: ", "px;\n"], ["\n  width: ", "px;\n  height: 2px;\n  background-color: white;\n  border-radius: ", "px;\n"])), function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).checkmarkSize * 0.8; }, function (props) { return props.theme.radius.xs / 2; });
// Checkbox container for layout
var CheckboxContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  user-select: none;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  user-select: none;\n"])), function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; });
// Checkbox label with proper spacing
var CheckboxLabel = styled_components_1.default.label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: ", "px;\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n"], ["\n  margin-left: ", "px;\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n"])), function (props) { return props.theme.spacing.xs; }, function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).fontSize; }, function (props) { return props.isDisabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary; });
/**
 * Checkbox Component with ref forwarding
 *
 * Creates a checkbox with sacred geometry proportions
 */
exports.Checkbox = React.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var id = _a.id, name = _a.name, checked = _a.checked, defaultChecked = _a.defaultChecked, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.isInvalid, isInvalid = _h === void 0 ? false : _h, _j = _a.indeterminate, indeterminate = _j === void 0 ? false : _j, _k = _a.colorScheme, colorScheme = _k === void 0 ? 'primary' : _k, _l = _a.useGoldenRatio, useGoldenRatio = _l === void 0 ? true : _l, onChange = _a.onChange, children = _a.children, _m = _a.size, size = _m === void 0 ? 'md' : _m, rest = __rest(_a, ["id", "name", "checked", "defaultChecked", "disabled", "required", "isInvalid", "indeterminate", "colorScheme", "useGoldenRatio", "onChange", "children", "size"]);
    // State for focus handling
    var _o = (0, react_1.useState)(false), hasFocus = _o[0], setHasFocus = _o[1];
    // Internal checkbox ref
    var internalRef = (0, react_1.useRef)(null);
    // Combine the internal ref with the forwarded ref
    var combinedRef = function (node) {
        internalRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    // Set indeterminate state - React doesn't handle this as a prop
    (0, react_1.useEffect)(function () {
        if (internalRef.current) {
            internalRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    // Handle focus events
    var handleFocus = function () { return setHasFocus(true); };
    var handleBlur = function () { return setHasFocus(false); };
    return (<CheckboxContainer isDisabled={disabled}>
        <HiddenCheckbox id={id} name={name} ref={combinedRef} checked={checked} defaultChecked={defaultChecked} disabled={disabled} required={required} aria-invalid={isInvalid} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} {...rest}/>
        
        <StyledCheckbox isChecked={(_c = checked !== null && checked !== void 0 ? checked : (_b = internalRef.current) === null || _b === void 0 ? void 0 : _b.checked) !== null && _c !== void 0 ? _c : defaultChecked} isIndeterminate={indeterminate} isDisabled={disabled} hasFocus={hasFocus} useGoldenRatio={useGoldenRatio} colorScheme={colorScheme} componentSize={size} onClick={function () { var _a; return (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.click(); }}>
          {(checked || ((_e = (_d = internalRef.current) === null || _d === void 0 ? void 0 : _d.checked) !== null && _e !== void 0 ? _e : defaultChecked)) && !indeterminate && (<CheckIcon componentSize={size}/>)}
          
          {indeterminate && (<IndeterminateIcon componentSize={size}/>)}
        </StyledCheckbox>
        
        {children && (<CheckboxLabel htmlFor={id} isDisabled={disabled} componentSize={size}>
            {children}
          </CheckboxLabel>)}
      </CheckboxContainer>);
});
exports.Checkbox.displayName = 'Checkbox';
exports.default = exports.Checkbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
