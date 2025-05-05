"use strict";
/**
 * Box Component
 *
 * The foundation of the Recovery Office layout system, implementing
 * sacred geometry principles in spacing, dimensions, and styling.
 *
 * This component serves as the base for all other layout components
 * and provides access to the full styling API through props.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.Box = void 0;
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
/**
 * Helper function to generate CSS for responsive styling
 * Uses sacred geometry-based breakpoints for a natural progression
 */
var generateResponsiveStyles = function (props) {
    var styles = '';
    // Generate styles for each breakpoint using our Fibonacci-based breakpoint system
    Object.entries(props).forEach(function (_a) {
        var _b;
        var breakpointKey = _a[0], breakpointStyles = _a[1];
        if (!breakpointStyles)
            return;
        // The breakpoint key will be _xs, _sm, etc.
        var key = breakpointKey.substring(1);
        // Access the breakpoint through the theme object
        styles += "\n      @media (min-width: ".concat((_b = theme_1.lightTheme.breakpoints[key]) !== null && _b !== void 0 ? _b : 1, "px) {\n        ").concat(generateStyles(breakpointStyles), "\n      }\n    ");
    });
    return styles;
};
/**
 * Helper function to convert prop values to CSS
 * Handles unit conversion for numeric values
 */
var handleValue = function (value) {
    // If the value is a number, add 'px' suffix, otherwise use as is
    return typeof value === 'number' ? "".concat(value, "px") : value;
};
/**
 * Generates CSS styles from BoxStyleProps
 */
var generateStyles = function (props) {
    var styles = '';
    // Spacing properties (margin and padding)
    if (props.m !== undefined)
        styles += "margin: ".concat(handleValue(props.m), ";");
    if (props.mt !== undefined)
        styles += "margin-top: ".concat(handleValue(props.mt), ";");
    if (props.mr !== undefined)
        styles += "margin-right: ".concat(handleValue(props.mr), ";");
    if (props.mb !== undefined)
        styles += "margin-bottom: ".concat(handleValue(props.mb), ";");
    if (props.ml !== undefined)
        styles += "margin-left: ".concat(handleValue(props.ml), ";");
    if (props.mx !== undefined)
        styles += "margin-left: ".concat(handleValue(props.mx), "; margin-right: ").concat(handleValue(props.mx), ";");
    if (props.my !== undefined)
        styles += "margin-top: ".concat(handleValue(props.my), "; margin-bottom: ").concat(handleValue(props.my), ";");
    if (props.p !== undefined)
        styles += "padding: ".concat(handleValue(props.p), ";");
    if (props.pt !== undefined)
        styles += "padding-top: ".concat(handleValue(props.pt), ";");
    if (props.pr !== undefined)
        styles += "padding-right: ".concat(handleValue(props.pr), ";");
    if (props.pb !== undefined)
        styles += "padding-bottom: ".concat(handleValue(props.pb), ";");
    if (props.pl !== undefined)
        styles += "padding-left: ".concat(handleValue(props.pl), ";");
    if (props.px !== undefined)
        styles += "padding-left: ".concat(handleValue(props.px), "; padding-right: ").concat(handleValue(props.px), ";");
    if (props.py !== undefined)
        styles += "padding-top: ".concat(handleValue(props.py), "; padding-bottom: ").concat(handleValue(props.py), ";");
    // Display properties
    if (props.display !== undefined)
        styles += "display: ".concat(props.display, ";");
    // Dimension properties
    if (props.width !== undefined)
        styles += "width: ".concat(handleValue(props.width), ";");
    if (props.height !== undefined)
        styles += "height: ".concat(handleValue(props.height), ";");
    if (props.minWidth !== undefined)
        styles += "min-width: ".concat(handleValue(props.minWidth), ";");
    if (props.maxWidth !== undefined)
        styles += "max-width: ".concat(handleValue(props.maxWidth), ";");
    if (props.minHeight !== undefined)
        styles += "min-height: ".concat(handleValue(props.minHeight), ";");
    if (props.maxHeight !== undefined)
        styles += "max-height: ".concat(handleValue(props.maxHeight), ";");
    // Flex properties
    if (props.flex !== undefined)
        styles += "flex: ".concat(props.flex, ";");
    if (props.flexDirection !== undefined)
        styles += "flex-direction: ".concat(props.flexDirection, ";");
    if (props.flexWrap !== undefined)
        styles += "flex-wrap: ".concat(props.flexWrap, ";");
    if (props.justifyContent !== undefined)
        styles += "justify-content: ".concat(props.justifyContent, ";");
    if (props.alignItems !== undefined)
        styles += "align-items: ".concat(props.alignItems, ";");
    if (props.alignContent !== undefined)
        styles += "align-content: ".concat(props.alignContent, ";");
    if (props.gap !== undefined)
        styles += "gap: ".concat(handleValue(props.gap), ";");
    // Grid properties
    if (props.gridTemplateColumns !== undefined)
        styles += "grid-template-columns: ".concat(props.gridTemplateColumns, ";");
    if (props.gridTemplateRows !== undefined)
        styles += "grid-template-rows: ".concat(props.gridTemplateRows, ";");
    if (props.gridTemplateAreas !== undefined)
        styles += "grid-template-areas: ".concat(props.gridTemplateAreas, ";");
    if (props.gridGap !== undefined)
        styles += "grid-gap: ".concat(handleValue(props.gridGap), ";");
    if (props.gridRowGap !== undefined)
        styles += "grid-row-gap: ".concat(handleValue(props.gridRowGap), ";");
    if (props.gridColumnGap !== undefined)
        styles += "grid-column-gap: ".concat(handleValue(props.gridColumnGap), ";");
    // Text properties
    if (props.textAlign !== undefined)
        styles += "text-align: ".concat(props.textAlign, ";");
    if (props.textTransform !== undefined)
        styles += "text-transform: ".concat(props.textTransform, ";");
    if (props.fontWeight !== undefined)
        styles += "font-weight: ".concat(props.fontWeight, ";");
    if (props.fontStyle !== undefined)
        styles += "font-style: ".concat(props.fontStyle, ";");
    if (props.letterSpacing !== undefined)
        styles += "letter-spacing: ".concat(handleValue(props.letterSpacing), ";");
    if (props.lineHeight !== undefined)
        styles += "line-height: ".concat(props.lineHeight, ";");
    // Color properties
    if (props.color !== undefined)
        styles += "color: ".concat(props.color, ";");
    if (props.bg !== undefined)
        styles += "background: ".concat(props.bg, ";");
    if (props.backgroundColor !== undefined)
        styles += "background-color: ".concat(props.backgroundColor, ";");
    if (props.opacity !== undefined)
        styles += "opacity: ".concat(props.opacity, ";");
    // Border properties
    if (props.border !== undefined)
        styles += "border: ".concat(props.border, ";");
    if (props.borderTop !== undefined)
        styles += "border-top: ".concat(props.borderTop, ";");
    if (props.borderRight !== undefined)
        styles += "border-right: ".concat(props.borderRight, ";");
    if (props.borderBottom !== undefined)
        styles += "border-bottom: ".concat(props.borderBottom, ";");
    if (props.borderLeft !== undefined)
        styles += "border-left: ".concat(props.borderLeft, ";");
    if (props.borderColor !== undefined)
        styles += "border-color: ".concat(props.borderColor, ";");
    if (props.borderRadius !== undefined)
        styles += "border-radius: ".concat(handleValue(props.borderRadius), ";");
    // Shadow properties
    if (props.boxShadow !== undefined)
        styles += "box-shadow: ".concat(props.boxShadow, ";");
    // Position properties
    if (props.position !== undefined)
        styles += "position: ".concat(props.position, ";");
    if (props.top !== undefined)
        styles += "top: ".concat(handleValue(props.top), ";");
    if (props.right !== undefined)
        styles += "right: ".concat(handleValue(props.right), ";");
    if (props.bottom !== undefined)
        styles += "bottom: ".concat(handleValue(props.bottom), ";");
    if (props.left !== undefined)
        styles += "left: ".concat(handleValue(props.left), ";");
    if (props.zIndex !== undefined)
        styles += "z-index: ".concat(props.zIndex, ";");
    return styles;
};
/**
 * Get responsive props without ESLint warnings
 */
var getResponsiveProps = function (props) {
    var responsiveProps = {};
    // Only include keys that exist in the props
    if ('_xs' in props && props._xs)
        responsiveProps._xs = props._xs;
    if ('_sm' in props && props._sm)
        responsiveProps._sm = props._sm;
    if ('_md' in props && props._md)
        responsiveProps._md = props._md;
    if ('_lg' in props && props._lg)
        responsiveProps._lg = props._lg;
    if ('_xl' in props && props._xl)
        responsiveProps._xl = props._xl;
    if ('_xxl' in props && props._xxl)
        responsiveProps._xxl = props._xxl;
    return responsiveProps;
};
/**
 * Get style props without unused variable warnings
 */
var getBoxStyleProps = function (props) {
    // Create a copy of props to modify
    var allProps = __assign({}, props);
    // Remove non-style props
    var nonStyleProps = [
        'className', 'children',
        '_xs', '_sm', '_md', '_lg', '_xl', '_xxl',
        'as', 'forwardedAs'
    ];
    nonStyleProps.forEach(function (prop) {
        if (prop in allProps) {
            delete allProps[prop];
        }
    });
    return allProps;
};
/**
 * Styled div implementing the Box component
 * Uses sacred geometry principles for styling
 */
var StyledBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Apply base styles from props */\n  ", "\n  \n  /* Apply responsive styles from props */\n  ", "\n"], ["\n  /* Apply base styles from props */\n  ", "\n  \n  /* Apply responsive styles from props */\n  ", "\n"])), function (props) { return generateStyles(getBoxStyleProps(props)); }, function (props) { return generateResponsiveStyles(getResponsiveProps(props)); });
/**
 * Box Component with ref forwarding
 * The fundamental building block of the layout system
 */
exports.Box = (0, react_1.forwardRef)(function (props, ref) {
    // Destructure props safely to avoid type errors
    var as = props.as, rest = __rest(props, ["as"]);
    // Use React.createElement instead of JSX to avoid TypeScript complexities
    return React.createElement(StyledBox, __assign({ ref: ref, as: as }, rest));
});
exports.Box.displayName = 'Box';
exports.default = exports.Box;
var templateObject_1;
