"use strict";
/**
 * TextArea Component
 *
 * A multiline text input component that implements sacred geometry principles
 * for proportions, spacing, and visual harmony.
 *
 * The TextArea component creates a harmonious user interface element
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
exports.TextArea = void 0;
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
                borderRadius: theme.radius.xs,
                minHeight: 8 * sacred_geometry_1.PHI * 5, // ~64.7px (based on Fibonacci and Golden Ratio)
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                padding: "".concat(theme.spacing.xs, "px ").concat(theme.spacing.sm, "px"),
                borderRadius: theme.radius.md,
                minHeight: 13 * sacred_geometry_1.PHI * 5, // ~105px (based on Fibonacci and Golden Ratio)
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                padding: "".concat(theme.spacing.xxs, "px ").concat(theme.spacing.sm, "px"),
                borderRadius: theme.radius.sm,
                minHeight: 8 * sacred_geometry_1.PHI * 8, // ~103.5px (based on Fibonacci and Golden Ratio)
            };
    }
};
// Styled textarea container with sacred geometry proportions
var TextAreaContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  display: flex;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n"])), function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    return "\n      border-radius: ".concat(sizeStyles.borderRadius, "px;\n      min-height: ").concat(sizeStyles.minHeight, "px;\n    ");
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
}, function (props) { return props.isInvalid && "\n    border-color: ".concat(props.theme.colors.feedback.error.main, ";\n  "); }, function (props) { return props.isValidating && "\n    border-color: ".concat(props.theme.colors.feedback.info.main, ";\n  "); });
// Styled textarea element
var StyledTextArea = styled_components_1.default.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  outline: none;\n  resize: ", ";\n  background: transparent;\n  font-family: ", ";\n  color: ", ";\n  line-height: ", "; // Golden ratio line height (1.618)\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder with golden ratio opacity */\n  &::placeholder {\n    color: ", ";\n    opacity: ", ";\n  }\n  \n  /* Disabled state */\n  ", "\n"], ["\n  width: 100%;\n  border: none;\n  outline: none;\n  resize: ", ";\n  background: transparent;\n  font-family: ", ";\n  color: ", ";\n  line-height: ", "; // Golden ratio line height (1.618)\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder with golden ratio opacity */\n  &::placeholder {\n    color: ", ";\n    opacity: ", ";\n  }\n  \n  /* Disabled state */\n  ", "\n"])), function (props) { return props.autoResize ? 'none' : 'vertical'; }, function (props) { return props.theme.typography.fontFamily.body; }, function (props) { return props.theme.colors.text.primary; }, sacred_geometry_1.PHI, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.fontSize, "px;\n      padding: ").concat(sizeStyles.padding, ";\n      min-height: ").concat(sizeStyles.minHeight, "px;\n      border-radius: ").concat(sizeStyles.borderRadius, "px;\n    ");
}, function (props) { return props.theme.colors.text.tertiary; }, sacred_geometry_1.PHI_INVERSE, function (props) { return props.isDisabled && "\n    cursor: not-allowed;\n  "; });
/**
 * TextArea Component with ref forwarding
 *
 * Creates a multiline text input with sacred geometry proportions
 */
exports.TextArea = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, placeholder = _a.placeholder, _b = _a.rows, rows = _b === void 0 ? 3 : _b, _c = _a.autoResize, autoResize = _c === void 0 ? false : _c, maxHeight = _a.maxHeight, minHeight = _a.minHeight, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.readOnly, readOnly = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? false : _f, _g = _a.isInvalid, isInvalid = _g === void 0 ? false : _g, _h = _a.isValidating, isValidating = _h === void 0 ? false : _h, _j = _a.size, size = _j === void 0 ? 'md' : _j, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, rest = __rest(_a, ["id", "name", "value", "defaultValue", "placeholder", "rows", "autoResize", "maxHeight", "minHeight", "disabled", "readOnly", "required", "isInvalid", "isValidating", "size", "onChange", "onFocus", "onBlur"]);
    // Create an internal ref if one is not provided
    var textAreaRef = (0, react_1.useRef)(null);
    var combinedRef = function (node) {
        textAreaRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    // State for tracking focus
    var _k = (0, react_1.useState)(false), hasFocus = _k[0], setHasFocus = _k[1];
    // Auto-resize function
    var resizeTextArea = (0, react_1.useCallback)(function () {
        if (autoResize && textAreaRef.current) {
            // Reset height to auto to get the correct scrollHeight
            textAreaRef.current.style.height = 'auto';
            // Set new height to scrollHeight
            var newHeight = textAreaRef.current.scrollHeight;
            // Apply max height constraint if specified
            if (maxHeight && newHeight > parseInt(maxHeight.toString(), 10)) {
                newHeight = parseInt(maxHeight.toString(), 10);
            }
            // Apply min height constraint if specified
            if (minHeight && newHeight < parseInt(minHeight.toString(), 10)) {
                newHeight = parseInt(minHeight.toString(), 10);
            }
            textAreaRef.current.style.height = "".concat(newHeight, "px");
        }
    }, [autoResize, maxHeight, minHeight]);
    // Auto-resize on value change and on mount
    (0, react_1.useEffect)(function () {
        resizeTextArea();
    }, [value, defaultValue, resizeTextArea]);
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
    // Handle change events
    var handleChange = function (e) {
        if (onChange)
            onChange(e);
        if (autoResize)
            resizeTextArea();
    };
    return (<TextAreaContainer isDisabled={disabled} isInvalid={isInvalid} isValidating={isValidating} hasFocus={hasFocus} componentSize={size}>
        <StyledTextArea id={id} name={name} value={value} defaultValue={defaultValue} placeholder={placeholder} rows={rows} autoResize={autoResize} disabled={disabled} readOnly={readOnly} required={required} aria-invalid={isInvalid} aria-required={required} componentSize={size} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} ref={combinedRef} style={{
            maxHeight: maxHeight ? "".concat(maxHeight, "px") : undefined,
            minHeight: minHeight ? "".concat(minHeight, "px") : undefined,
        }} {...rest}/>
      </TextAreaContainer>);
});
exports.TextArea.displayName = 'TextArea';
exports.default = exports.TextArea;
var templateObject_1, templateObject_2;
