"use strict";
/**
 * IconButton Component
 *
 * A variant of the Button component optimized for displaying icons.
 * Implements perfect square proportions based on sacred geometry principles.
 *
 * The IconButton maintains perfect golden ratio-based dimensions
 * and balanced sacred geometry proportions for visual harmony.
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
exports.IconButton = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Button_1 = require("./Button");
var layout_1 = require("../layout");
/**
 * Generates size-specific styles based on sacred geometry principles
 */
var getSizeStyles = function (size, theme) {
    // Base dimensions follow Fibonacci sequence
    var dimensions = {
        sm: theme.spacing.md, // 21px
        md: theme.spacing.lg, // 34px
        lg: theme.spacing.xl, // 55px
    }[size];
    // Icon size follows golden ratio proportion to button size
    var iconSize = Math.round(dimensions * PHI_INVERSE * 1.5);
    return {
        dimensions: "".concat(dimensions, "px"),
        iconSize: iconSize,
    };
};
// Styled IconButton component
var StyledIconButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Override some of the base button styles for icon-specific styling\n  width: ", ";\n  height: ", ";\n  padding: 0;\n  min-width: unset;\n  aspect-ratio: 1 / 1;\n  \n  // Perfect circle when isRound is true\n  ", "\n  \n  // Center the icon perfectly\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  \n  // Golden ratio-based focus ring\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px ", ";\n  }\n"], ["\n  // Override some of the base button styles for icon-specific styling\n  width: ", ";\n  height: ", ";\n  padding: 0;\n  min-width: unset;\n  aspect-ratio: 1 / 1;\n  \n  // Perfect circle when isRound is true\n  ", "\n  \n  // Center the icon perfectly\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  \n  // Golden ratio-based focus ring\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px ", ";\n  }\n"])), function (props) { return props.dimensions; }, function (props) { return props.dimensions; }, function (props) { return props.isRound && "\n    border-radius: 50%;\n  "; }, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
/**
 * IconButton Component with ref forwarding
 *
 * Creates buttons optimized for displaying icons with sacred geometry proportions
 */
exports.IconButton = React.forwardRef(function (_a, ref) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.isRound, isRound = _d === void 0 ? false : _d, ariaLabel = _a["aria-label"], rest = __rest(_a, ["icon", "size", "variant", "isRound", 'aria-label']);
    // Get size-specific styles based on theme
    var _e = getSizeStyles(size, rest.theme || {}), dimensions = _e.dimensions, iconSize = _e.iconSize;
    return (<StyledIconButton as="button" variant={variant} size={size} ref={ref} dimensions={dimensions} isRound={isRound} aria-label={ariaLabel} {...rest}>
        <layout_1.Box as="span" display="inline-flex" alignItems="center" justifyContent="center" className="icon-button-icon" width={"".concat(iconSize, "px")} height={"".concat(iconSize, "px")}>
          {icon}
        </layout_1.Box>
      </StyledIconButton>);
});
exports.IconButton.displayName = 'IconButton';
exports.default = exports.IconButton;
var templateObject_1;
