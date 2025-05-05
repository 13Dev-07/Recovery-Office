"use strict";
/**
 * NavigationItem Component
 *
 * Individual navigation link with styling and hover effects based on sacred geometry.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationItem = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Link_1 = require("../design-system/components/navigation/Link");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var react_router_dom_1 = require("react-router-dom");
var NavLink = (0, styled_components_1.default)(Link_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  font-size: ", "px;\n  font-weight: 500;\n  color: ", ";\n  padding: ", "px ", "px;\n  text-decoration: none;\n  transition: color ", "ms ease;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -", "px;\n    left: 50%;\n    width: 0;\n    height: 2px;\n    background-color: ", ";\n    transition: width ", "ms cubic-bezier(", ", 0, ", ", 1),\n                left ", "ms cubic-bezier(", ", 0, ", ", 1);\n    transition-delay: ", "ms;\n  }\n  \n  &:hover, &:focus {\n    color: ", ";\n    \n    &::after {\n      width: ", "%;\n      left: ", "%;\n    }\n  }\n  \n  ", "\n"], ["\n  position: relative;\n  font-size: ", "px;\n  font-weight: 500;\n  color: ", ";\n  padding: ", "px ", "px;\n  text-decoration: none;\n  transition: color ", "ms ease;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -", "px;\n    left: 50%;\n    width: 0;\n    height: 2px;\n    background-color: ", ";\n    transition: width ", "ms cubic-bezier(", ", 0, ", ", 1),\n                left ", "ms cubic-bezier(", ", 0, ", ", 1);\n    transition-delay: ", "ms;\n  }\n  \n  &:hover, &:focus {\n    color: ", ";\n    \n    &::after {\n      width: ", "%;\n      left: ", "%;\n    }\n  }\n  \n  ", "\n"])), sacred_geometry_1.SACRED_SPACING.md - 1, function (_a) {
    var _b;
    var theme = _a.theme, isActive = _a.isActive;
    return isActive
        ? (_b = theme.colors.primary[800]) !== null && _b !== void 0 ? _b : 1
        : theme.colors.text.primary;
}, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.ANIMATION_TIMING.quick, sacred_geometry_1.SACRED_SPACING.xxs, function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1;
}, sacred_geometry_1.ANIMATION_TIMING.medium, sacred_geometry_1.PHI - 1, 1 - (sacred_geometry_1.PHI - 1), sacred_geometry_1.ANIMATION_TIMING.medium, sacred_geometry_1.PHI - 1, 1 - (sacred_geometry_1.PHI - 1), function (_a) {
    var delay = _a.delay;
    return delay || 0;
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1;
}, 100 * sacred_geometry_1.PHI_INVERSE, (1 - sacred_geometry_1.PHI_INVERSE) * 50, function (_a) {
    var _b;
    var isActive = _a.isActive, theme = _a.theme;
    return isActive && "\n    &::after {\n      width: ".concat(100 * sacred_geometry_1.PHI_INVERSE, "%;\n      left: ").concat((1 - sacred_geometry_1.PHI_INVERSE) * 50, "%;\n      background-color: ").concat((_b = theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1, ";\n    }\n  ");
});
/**
 * NavigationItem Component
 *
 * Individual navigation link with underline animation based on golden ratio.
 */
var NavigationItem = function (_a) {
    var href = _a.href, children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, className = _a.className;
    var location = (0, react_router_dom_1.useLocation)();
    var isActive = location.pathname === href ||
        (href !== '/' && location.pathname.startsWith(href));
    return (<NavLink href={href} isActive={isActive} delay={delay} className={className}>
      {children}
    </NavLink>);
};
exports.NavigationItem = NavigationItem;
exports.default = exports.NavigationItem;
var templateObject_1;
