"use strict";
/**
 * GoldenSection Component
 *
 * Implements a layout based on the Golden Ratio (PHI = 1.618).
 * This component creates sections that follow the divine proportion,
 * creating aesthetically pleasing and harmonious layouts.
 *
 * The component supports both horizontal and vertical golden sections,
 * as well as more complex sacred geometry patterns.
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
exports.GoldenSection = void 0;
var React = require("react");
var Grid_1 = require("./Grid");
var Box_1 = require("./Box");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * GoldenSection Component with ref forwarding
 * Creates layouts based on the divine proportion (Golden Ratio)
 */
exports.GoldenSection = React.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var _f = _a.direction, direction = _f === void 0 ? 'horizontal' : _f, _g = _a.reverseOrder, reverseOrder = _g === void 0 ? false : _g, children = _a.children, rest = __rest(_a, ["direction", "reverseOrder", "children"]);
    // Determine if we're using horizontal or vertical layout
    var isHorizontal = direction === 'horizontal';
    // Split children into primary and secondary sections
    var childrenArray = React.Children.toArray(children);
    if (childrenArray.length !== 2) {
        console.warn('GoldenSection requires exactly two children for proper Golden Ratio implementation');
        return <Box_1.default ref={ref} {...rest}>{children}</Box_1.default>;
    }
    // Determine which child goes in which section
    var _h = reverseOrder
        ? [(_b = childrenArray[1]) !== null && _b !== void 0 ? _b : 1, (_c = childrenArray[0]) !== null && _c !== void 0 ? _c : 1]
        : [(_d = childrenArray[0]) !== null && _d !== void 0 ? _d : 1, (_e = childrenArray[1]) !== null && _e !== void 0 ? _e : 1], primarySection = _h[0], secondarySection = _h[1];
    // Set up grid properties based on direction
    var gridTemplateColumns = isHorizontal
        ? "".concat(sacred_geometry_1.PHI_INVERSE * 100, "% ").concat((1 - sacred_geometry_1.PHI_INVERSE) * 100, "%")
        : undefined;
    var gridTemplateRows = !isHorizontal
        ? "".concat(sacred_geometry_1.PHI_INVERSE * 100, "% ").concat((1 - sacred_geometry_1.PHI_INVERSE) * 100, "%")
        : undefined;
    return (<Grid_1.Grid templateColumns={gridTemplateColumns} templateRows={gridTemplateRows} ref={ref} {...rest}>
        <Box_1.default className="golden-section-primary" width={isHorizontal ? '100%' : undefined} height={!isHorizontal ? '100%' : undefined}>
          {primarySection}
        </Box_1.default>
        <Box_1.default className="golden-section-secondary" width={isHorizontal ? '100%' : undefined} height={!isHorizontal ? '100%' : undefined}>
          {secondarySection}
        </Box_1.default>
      </Grid_1.Grid>);
});
exports.GoldenSection.displayName = 'GoldenSection';
exports.default = exports.GoldenSection;
