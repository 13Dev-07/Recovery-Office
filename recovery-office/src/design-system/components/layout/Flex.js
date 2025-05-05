"use strict";
/**
 * Flex Component
 *
 * Extends the Box component with flexbox properties.
 * Uses sacred geometry principles for spacing, alignment, and distribution.
 *
 * The Flex component is designed to provide a simple and consistent API
 * for creating flex layouts that adhere to the sacred geometry principles.
 */
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
exports.Flex = void 0;
var React = require("react");
var Box_1 = require("./Box");
/**
 * Flex Component with ref forwarding
 * Provides a simplified API for flexbox layouts
 */
exports.Flex = React.forwardRef(function (_a, ref) {
    var _b = _a.flexDirection, flexDirection = _b === void 0 ? 'row' : _b, _c = _a.alignItems, alignItems = _c === void 0 ? 'stretch' : _c, _d = _a.justifyContent, justifyContent = _d === void 0 ? 'flex-start' : _d, _e = _a.flexWrap, flexWrap = _e === void 0 ? 'nowrap' : _e, gap = _a.gap, borderRadius = _a.borderRadius, children = _a.children, rest = __rest(_a, ["flexDirection", "alignItems", "justifyContent", "flexWrap", "gap", "borderRadius", "children"]);
    // Ensure borderRadius has 'px' suffix if it's a number
    var formattedBorderRadius = typeof borderRadius === 'number' ? "".concat(borderRadius, "px") : borderRadius;
    return (<Box_1.default display="flex" flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent} flexWrap={flexWrap} gap={gap} borderRadius={formattedBorderRadius} ref={ref} {...rest}>
        {children}
      </Box_1.default>);
});
exports.Flex.displayName = 'Flex';
exports.default = exports.Flex;
