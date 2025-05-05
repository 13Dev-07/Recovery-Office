"use strict";
/**
 * Button Component
 *
 * A button component that implements sacred geometry principles for
 * sizing, proportions, and visual harmony. This button component
 * supports multiple variants, sizes, and states while maintaining
 * perfect golden ratio proportions.
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
exports.Button = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var layout_1 = require("../layout");
/**
 * Get size-specific styles based on button size
 */
var getSizeStyles = function (size, theme) {
    var _a, _b, _c, _d, _e, _f;
    // Base heights derived from Fibonacci sequence
    var baseHeights = {
        sm: 34, // Fibonacci number
        md: 42, // Derived from Golden Ratio
        lg: 55, // Fibonacci number
    };
    // Font sizes based on typography scale
    var fontSizes = {
        sm: theme.typography.fontSize.sm,
        md: theme.typography.fontSize.md,
        lg: theme.typography.fontSize.lg,
    };
    // Padding following sacred proportion
    var horizontalPadding = {
        sm: Math.round(baseHeights.sm * sacred_geometry_1.PHI_INVERSE * 0.5),
        md: Math.round(baseHeights.md * sacred_geometry_1.PHI_INVERSE * 0.5),
        lg: Math.round(baseHeights.lg * sacred_geometry_1.PHI_INVERSE * 0.5),
    };
    // Border radius based on golden ratio
    var borderRadius = {
        sm: Math.round(baseHeights.sm * sacred_geometry_1.PHI_INVERSE * 0.2),
        md: Math.round(baseHeights.md * sacred_geometry_1.PHI_INVERSE * 0.2),
        lg: Math.round(baseHeights.lg * sacred_geometry_1.PHI_INVERSE * 0.2),
    };
    // Icon size and gap
    var iconSize = Math.round((_a = baseHeights[size]) !== null && _a !== void 0 ? _a : 1 * sacred_geometry_1.PHI_INVERSE * 0.8);
    var iconGap = Math.round((_b = horizontalPadding[size]) !== null && _b !== void 0 ? _b : 1 * sacred_geometry_1.PHI_INVERSE);
    return {
        height: "".concat((_c = baseHeights[size]) !== null && _c !== void 0 ? _c : 1, "px"),
        padding: "0 ".concat((_d = horizontalPadding[size]) !== null && _d !== void 0 ? _d : 1, "px"),
        fontSize: (_e = fontSizes[size]) !== null && _e !== void 0 ? _e : 1,
        borderRadius: "".concat((_f = borderRadius[size]) !== null && _f !== void 0 ? _f : 1, "px"),
        iconSize: iconSize,
        iconGap: iconGap,
    };
};
/**
 * Gets the appropriate colors for each button variant and state
 */
var getVariantStyles = function (variant, theme, isDisabled) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
    if (isDisabled === void 0) { isDisabled = false; }
    if (isDisabled) {
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n      cursor: not-allowed;\n      opacity: ", ";\n      box-shadow: none;\n      \n      &:hover, &:focus, &:active {\n        background-color: ", ";\n        color: ", ";\n        border-color: ", ";\n        box-shadow: none;\n        transform: none;\n      }\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n      cursor: not-allowed;\n      opacity: ", ";\n      box-shadow: none;\n      \n      &:hover, &:focus, &:active {\n        background-color: ", ";\n        color: ", ";\n        border-color: ", ";\n        box-shadow: none;\n        transform: none;\n      }\n    "])), (_a = theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1, theme.colors.text.disabled, (_b = theme.colors.background[300]) !== null && _b !== void 0 ? _b : 1, sacred_geometry_1.PHI_INVERSE, (_c = theme.colors.background[200]) !== null && _c !== void 0 ? _c : 1, theme.colors.text.disabled, (_d = theme.colors.background[300]) !== null && _d !== void 0 ? _d : 1);
    }
    switch (variant) {
        case 'primary':
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "], ["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "])), (_e = theme.colors.primary[500]) !== null && _e !== void 0 ? _e : 1, theme.shadows.button, (_f = theme.colors.primary[600]) !== null && _f !== void 0 ? _f : 1, theme.shadows.sm, (_g = theme.colors.primary[300]) !== null && _g !== void 0 ? _g : 1, (_h = theme.colors.primary[700]) !== null && _h !== void 0 ? _h : 1, theme.shadows.xs);
        case 'secondary':
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "], ["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "])), (_j = theme.colors.secondary[500]) !== null && _j !== void 0 ? _j : 1, theme.shadows.button, (_k = theme.colors.secondary[600]) !== null && _k !== void 0 ? _k : 1, theme.shadows.sm, (_l = theme.colors.secondary[300]) !== null && _l !== void 0 ? _l : 1, (_m = theme.colors.secondary[700]) !== null && _m !== void 0 ? _m : 1, theme.shadows.xs);
        case 'accent':
            return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background-color: ", ";\n        color: ", ";\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", "80;\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "], ["\n        background-color: ", ";\n        color: ", ";\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", "80;\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "])), theme.colors.accent.gold, theme.colors.text.dark, theme.shadows.button, theme.colors.accent.copper, theme.shadows.sm, theme.colors.accent.gold, theme.colors.accent.copper, theme.shadows.xs);
        case 'outline':
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background-color: transparent;\n        color: ", ";\n        border: 1px solid ", ";\n        \n        &:hover {\n          background-color: ", ";\n          color: ", ";\n          transform: translateY(-1px);\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          color: ", ";\n          transform: translateY(1px);\n        }\n      "], ["\n        background-color: transparent;\n        color: ", ";\n        border: 1px solid ", ";\n        \n        &:hover {\n          background-color: ", ";\n          color: ", ";\n          transform: translateY(-1px);\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          color: ", ";\n          transform: translateY(1px);\n        }\n      "])), (_o = theme.colors.primary[500]) !== null && _o !== void 0 ? _o : 1, (_p = theme.colors.primary[500]) !== null && _p !== void 0 ? _p : 1, (_q = theme.colors.primary[50]) !== null && _q !== void 0 ? _q : 1, (_r = theme.colors.primary[600]) !== null && _r !== void 0 ? _r : 1, (_s = theme.colors.primary[200]) !== null && _s !== void 0 ? _s : 1, (_t = theme.colors.primary[100]) !== null && _t !== void 0 ? _t : 1, (_u = theme.colors.primary[700]) !== null && _u !== void 0 ? _u : 1);
        case 'ghost':
            return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: transparent;\n        color: ", ";\n        border: none;\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n        }\n      "], ["\n        background-color: transparent;\n        color: ", ";\n        border: none;\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n        }\n      "])), theme.colors.text.primary, (_v = theme.colors.background[200]) !== null && _v !== void 0 ? _v : 1, (_w = theme.colors.background[300]) !== null && _w !== void 0 ? _w : 1, (_x = theme.colors.background[300]) !== null && _x !== void 0 ? _x : 1);
        case 'link':
            return (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        background-color: transparent;\n        color: ", ";\n        border: none;\n        padding: 0;\n        height: auto;\n        text-decoration: none;\n        box-shadow: none;\n        \n        &:hover {\n          color: ", ";\n          text-decoration: underline;\n          transform: none;\n        }\n        \n        &:focus {\n          outline: none;\n          text-decoration: underline;\n          box-shadow: none;\n        }\n        \n        &:active {\n          color: ", ";\n          transform: none;\n        }\n      "], ["\n        background-color: transparent;\n        color: ", ";\n        border: none;\n        padding: 0;\n        height: auto;\n        text-decoration: none;\n        box-shadow: none;\n        \n        &:hover {\n          color: ", ";\n          text-decoration: underline;\n          transform: none;\n        }\n        \n        &:focus {\n          outline: none;\n          text-decoration: underline;\n          box-shadow: none;\n        }\n        \n        &:active {\n          color: ", ";\n          transform: none;\n        }\n      "])), (_y = theme.colors.primary[500]) !== null && _y !== void 0 ? _y : 1, (_z = theme.colors.primary[600]) !== null && _z !== void 0 ? _z : 1, (_0 = theme.colors.primary[700]) !== null && _0 !== void 0 ? _0 : 1);
        default:
            return (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "], ["\n        background-color: ", ";\n        color: white;\n        border: none;\n        box-shadow: ", ";\n        \n        &:hover {\n          background-color: ", ";\n          transform: translateY(-1px);\n          box-shadow: ", ";\n        }\n        \n        &:focus {\n          outline: none;\n          box-shadow: 0 0 0 3px ", ";\n        }\n        \n        &:active {\n          background-color: ", ";\n          transform: translateY(1px);\n          box-shadow: ", ";\n        }\n      "])), (_1 = theme.colors.primary[500]) !== null && _1 !== void 0 ? _1 : 1, theme.shadows.button, (_2 = theme.colors.primary[600]) !== null && _2 !== void 0 ? _2 : 1, theme.shadows.sm, (_3 = theme.colors.primary[300]) !== null && _3 !== void 0 ? _3 : 1, (_4 = theme.colors.primary[700]) !== null && _4 !== void 0 ? _4 : 1, theme.shadows.xs);
    }
};
/**
 * Loading spinner that follows golden ratio proportions
 */
var LoadingSpinner = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  \n  width: ", ";\n  \n  height: ", ";\n  \n  &::before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    margin-top: -50%;\n    margin-left: -50%;\n    border-radius: 50%;\n    border: 2px solid transparent;\n    border-top-color: currentColor;\n    border-bottom-color: currentColor;\n    animation: spin ", "s cubic-bezier(", ", 0, ", ", 1) infinite;\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  \n  width: ", ";\n  \n  height: ", ";\n  \n  &::before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    margin-top: -50%;\n    margin-left: -50%;\n    border-radius: 50%;\n    border: 2px solid transparent;\n    border-top-color: currentColor;\n    border-bottom-color: currentColor;\n    animation: spin ", "s cubic-bezier(", ", 0, ", ", 1) infinite;\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"])), function (props) {
    var sizeStyles = getSizeStyles(props.size, props.theme);
    return "".concat(sizeStyles.iconSize, "px");
}, function (props) {
    var sizeStyles = getSizeStyles(props.size, props.theme);
    return "".concat(sizeStyles.iconSize, "px");
}, sacred_geometry_1.PHI * 0.618, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE);
// Loading text that only shows on screens above sm breakpoint
var LoadingText = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: none;\n  \n  @media (min-width: ", "px) {\n    display: inline;\n  }\n"], ["\n  display: none;\n  \n  @media (min-width: ", "px) {\n    display: inline;\n  }\n"])), function (props) { return props.theme.breakpoints.values.sm; });
// Button content container for consistent alignment
var ButtonContentContainer = styled_components_1.default.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
// Icon wrapper for positioning
var IconWrapper = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"])));
// Styled Button component
var StyledButton = (0, styled_components_1.default)(layout_1.Box)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  white-space: nowrap;\n  vertical-align: middle;\n  line-height: 1.2;\n  font-weight: ", ";\n  font-family: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  margin: 0;\n  \n  // Size styles\n  ", "\n  \n  // Apply variant styles\n  ", "\n  \n  // Full width style\n  ", "\n  \n  // When button has icons, add appropriate spacing\n  & > *:not(:last-child) {\n    margin-right: ", ";\n  }\n  \n  // Sacred proportions adjustments\n  ", "\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  white-space: nowrap;\n  vertical-align: middle;\n  line-height: 1.2;\n  font-weight: ", ";\n  font-family: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  margin: 0;\n  \n  // Size styles\n  ", "\n  \n  // Apply variant styles\n  ", "\n  \n  // Full width style\n  ", "\n  \n  // When button has icons, add appropriate spacing\n  & > *:not(:last-child) {\n    margin-right: ", ";\n  }\n  \n  // Sacred proportions adjustments\n  ", "\n"])), function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.fontFamily.body; }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, function (props) {
    // Normalize size value
    var normalizedSize = props.size || 'md';
    if (normalizedSize === 'medium')
        normalizedSize = 'md';
    if (normalizedSize === 'large')
        normalizedSize = 'lg';
    var sizeStyles = getSizeStyles(normalizedSize, props.theme);
    return (0, styled_components_1.css)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      height: ", ";\n      padding: ", ";\n      font-size: ", ";\n      border-radius: ", ";\n    "], ["\n      height: ", ";\n      padding: ", ";\n      font-size: ", ";\n      border-radius: ", ";\n    "])), sizeStyles.height, sizeStyles.padding, sizeStyles.fontSize, sizeStyles.borderRadius);
}, function (props) { return getVariantStyles(props.variant, props.theme, props.isDisabled); }, function (props) { return props.isFullWidth && (0, styled_components_1.css)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))); }, function (props) {
    var normalizedSize = props.size === 'medium' ? 'md' : (props.size === 'large' ? 'lg' : (props.size || 'md'));
    var sizeStyles = getSizeStyles(normalizedSize, props.theme);
    return "".concat(sizeStyles.iconGap, "px");
}, function (props) { return props.useSacredProportions && (0, styled_components_1.css)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    // Create perfect golden ratio between height and width\n    // by ensuring the minimum width is PHI * height\n    min-width: ", ";\n  "], ["\n    // Create perfect golden ratio between height and width\n    // by ensuring the minimum width is PHI * height\n    min-width: ", ";\n  "])), function () {
    var normalizedSize = props.size === 'medium' ? 'md' : (props.size === 'large' ? 'lg' : (props.size || 'md'));
    var sizeStyles = getSizeStyles(normalizedSize, props.theme);
    var height = parseInt(sizeStyles.height, 10);
    return "".concat(Math.round(height * sacred_geometry_1.PHI), "px");
}); });
/**
 * Button Component with ref forwarding
 *
 * Implements sacred geometry principles for sizes, proportions, and styling
 */
exports.Button = React.forwardRef(function (_a, ref) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.isLoading, isLoading = _d === void 0 ? false : _d, propIsDisabled = _a.isDisabled, propDisabled = _a.disabled, // Accept standard HTML disabled prop for compatibility
    _e = _a.isFullWidth, // Accept standard HTML disabled prop for compatibility
    isFullWidth = _e === void 0 ? false : _e, _f = _a.useSacredProportions, useSacredProportions = _f === void 0 ? true : _f, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, _g = _a.type, type = _g === void 0 ? 'button' : _g, children = _a.children, onClick = _a.onClick, href = _a.href, as = _a.as, rest = __rest(_a, ["variant", "size", "isLoading", "isDisabled", "disabled", "isFullWidth", "useSacredProportions", "leftIcon", "rightIcon", "type", "children", "onClick", "href", "as"]);
    // Use isDisabled if provided, otherwise use disabled (mapped from HTML standard prop)
    var isDisabled = propIsDisabled !== undefined ? propIsDisabled : propDisabled;
    // Normalize size
    var normalizedSize = size === 'medium' ? 'md' : (size === 'large' ? 'lg' : size);
    // Create button content with loading indicator and icons
    var renderButtonContent = function () {
        if (isLoading) {
            return (<ButtonContentContainer>
            <LoadingSpinner size={normalizedSize}/>
            <LoadingText>Loading...</LoadingText>
          </ButtonContentContainer>);
        }
        return (<ButtonContentContainer>
          {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
          {children}
          {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
        </ButtonContentContainer>);
    };
    // Handle click events
    var handleClick = function (e) {
        if (isDisabled || isLoading)
            return;
        if (onClick)
            onClick(e);
    };
    // Determine the element type
    var elementType = href ? 'a' : (as || 'button');
    // Additional props for specific element types
    var elementProps = {};
    if (href) {
        elementProps.href = href;
    }
    if (elementType === 'button' && !href) {
        elementProps.type = type;
    }
    return (<StyledButton as={elementType} ref={ref} variant={variant} size={normalizedSize} isFullWidth={isFullWidth} isDisabled={isDisabled} isLoading={isLoading} onClick={handleClick} useSacredProportions={useSacredProportions} {...elementProps} {...rest}>
        {renderButtonContent()}
      </StyledButton>);
});
exports.Button.displayName = 'Button';
exports.default = exports.Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
