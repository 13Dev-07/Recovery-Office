"use strict";
/**
 * Grid Component
 *
 * Extends the Box component with CSS Grid properties.
 * Implements a grid system based on Fibonacci sequence and Golden Ratio.
 *
 * The Grid component provides a consistent way to create grid layouts
 * that adhere to sacred geometry principles.
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
exports.Grid = exports.generateGridTemplateColumns = void 0;
var React = require("react");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var styled_components_1 = require("styled-components");
/**
 * Generates grid template columns based on Fibonacci sequence
 * @param columns - Number of columns or specific template
 * @returns CSS grid-template-columns value
 */
var generateGridTemplateColumns = function (columns) {
    if (typeof columns === 'number') {
        // For numeric columns, create a Fibonacci-based grid
        return "repeat(".concat(columns, ", minmax(0, 1fr))");
    }
    if (columns === 'golden') {
        // Golden ratio proportion: 1:φ (1:1.618)
        return "1fr ".concat(sacred_geometry_1.PHI, "fr");
    }
    if (columns === 'fibonacci') {
        // Use first few Fibonacci numbers as column widths
        var fibKeys = Object.keys(sacred_geometry_1.FIBONACCI).map(Number).sort(function (a, b) { return a - b; });
        var fibWidths = fibKeys.slice(0, 4).map(function (k) { var _a; return "".concat((_a = sacred_geometry_1.FIBONACCI[k]) !== null && _a !== void 0 ? _a : 1, "fr"); }).join(' ');
        return fibWidths;
    }
    // Return custom template or undefined
    return columns || '';
};
exports.generateGridTemplateColumns = generateGridTemplateColumns;
/**
 * Grid Component with ref forwarding
 * Provides a simplified API for grid layouts based on sacred geometry
 */
exports.Grid = React.forwardRef(function (_a, ref) {
    var columns = _a.columns, rows = _a.rows, gap = _a.gap, columnGap = _a.columnGap, rowGap = _a.rowGap, templateAreas = _a.templateAreas, templateColumns = _a.templateColumns, templateRows = _a.templateRows, autoColumns = _a.autoColumns, autoRows = _a.autoRows, autoFlow = _a.autoFlow, borderRadius = _a.borderRadius, children = _a.children, rest = __rest(_a, ["columns", "rows", "gap", "columnGap", "rowGap", "templateAreas", "templateColumns", "templateRows", "autoColumns", "autoRows", "autoFlow", "borderRadius", "children"]);
    // Generate grid template columns if the columns prop is provided
    var gridTemplateColumns = columns ? (0, exports.generateGridTemplateColumns)(columns) : templateColumns;
    // Ensure borderRadius has 'px' suffix if it's a number
    var formattedBorderRadius = typeof borderRadius === 'number' ? "".concat(borderRadius, "px") : borderRadius;
    // Create CSS styles for grid properties as a template literal
    var gridTemplate = "\n      display: grid;\n      grid-template-columns: ".concat(gridTemplateColumns || 'none', ";\n      grid-template-rows: ").concat(templateRows || (typeof rows === 'string' ? rows : 'none'), ";\n      grid-template-areas: ").concat(templateAreas || 'none', ";\n      grid-gap: ").concat(gap || 'initial', ";\n      grid-row-gap: ").concat(rowGap || 'initial', ";\n      grid-column-gap: ").concat(columnGap || 'initial', ";\n      ").concat(autoColumns ? "grid-auto-columns: ".concat(autoColumns, ";") : '', "\n      ").concat(autoRows ? "grid-auto-rows: ".concat(autoRows, ";") : '', "\n      ").concat(autoFlow ? "grid-auto-flow: ".concat(autoFlow, ";") : '', "\n    ");
    // Create a grid box with all the CSS styles
    var GridDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), gridTemplate);
    // Return the grid box with remaining props
    return (<GridDiv ref={ref} style={{ borderRadius: formattedBorderRadius }} {...rest}>
        {children}
      </GridDiv>);
});
exports.Grid.displayName = 'Grid';
exports.default = exports.Grid;
var templateObject_1;
