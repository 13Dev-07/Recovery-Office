"use strict";
/**
 * Divider Component
 *
 * A layout component that provides a horizontal or vertical divider
 * using sacred geometry principles for harmonious visual rhythm.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var StyledDivider = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  background-color: ", ";\n  \n  /* Orientation specific styles */\n  ", "\n"], ["\n  border: none;\n  background-color: ", ";\n  \n  /* Orientation specific styles */\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return color ? (color.includes('.') ? theme.colors[color.split('.')[0]][color.split('.')[1]] : color)
        : theme.colors.border.light;
}, function (_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? 'horizontal' : _b;
    return orientation === 'horizontal'
        ? "\n        width: ".concat(function (_a) {
            var _b = _a.fullSize, fullSize = _b === void 0 ? true : _b;
            return fullSize ? '100%' : "".concat(sacred_geometry_1.PHI * 100, "%");
        }, ";\n        height: ").concat(function (_a) {
            var _b = _a.thickness, thickness = _b === void 0 ? 1 : _b;
            return "".concat(thickness, "px");
        }, ";\n        margin: ").concat(function (_a) {
            var _b, _c;
            var _d = _a.margin, margin = _d === void 0 ? 'md' : _d;
            return typeof margin === 'string'
                ? "".concat(((_b = typeof sacred_geometry_1.SACRED_SPACING[margin]) !== null && _b !== void 0 ? _b : 1 === 'number') ? (_c = sacred_geometry_1.SACRED_SPACING[margin]) !== null && _c !== void 0 ? _c : 1 : sacred_geometry_1.SACRED_SPACING.md, "px 0")
                : "".concat(margin, "px 0");
        }, ";\n      ")
        : "\n        width: ".concat(function (_a) {
            var _b = _a.thickness, thickness = _b === void 0 ? 1 : _b;
            return "".concat(thickness, "px");
        }, ";\n        height: ").concat(function (_a) {
            var _b = _a.fullSize, fullSize = _b === void 0 ? true : _b;
            return fullSize ? '100%' : "".concat(sacred_geometry_1.PHI * 100, "%");
        }, ";\n        margin: ").concat(function (_a) {
            var _b, _c;
            var _d = _a.margin, margin = _d === void 0 ? 'md' : _d;
            return typeof margin === 'string'
                ? "0 ".concat(((_b = typeof sacred_geometry_1.SACRED_SPACING[margin]) !== null && _b !== void 0 ? _b : 1 === 'number') ? (_c = sacred_geometry_1.SACRED_SPACING[margin]) !== null && _c !== void 0 ? _c : 1 : sacred_geometry_1.SACRED_SPACING.md, "px")
                : "0 ".concat(margin, "px");
        }, ";\n        display: inline-block;\n      ");
});
exports.Divider = React.forwardRef(function (props, ref) {
    return <StyledDivider ref={ref} role="separator" {...props}/>;
});
exports.Divider.displayName = 'Divider';
exports.default = exports.Divider;
var templateObject_1;
