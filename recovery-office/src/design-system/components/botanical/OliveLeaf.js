"use strict";
/**
 * OliveLeaf Component
 *
 * A component that renders a single olive leaf, designed according to
 * sacred geometry principles. The leaf shape is based on the golden ratio
 * and Fibonacci-derived curves for a harmonious appearance.
 *
 * This component can be used independently or as part of a larger composition.
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
exports.OliveLeaf = void 0;
var React = require("react");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Generates an olive leaf SVG path using sacred geometry
 */
var generateOliveLeaf = function (size, slenderness, midribIntensity, mirror) {
    if (size === void 0) { size = 1; }
    if (slenderness === void 0) { slenderness = 0.3; }
    if (midribIntensity === void 0) { midribIntensity = 0.7; }
    if (mirror === void 0) { mirror = false; }
    var elements = [];
    var viewBoxWidth = 100;
    var viewBoxHeight = 100;
    var centerX = viewBoxWidth / 2;
    var centerY = viewBoxHeight / 2;
    // Scale leaf based on size parameter
    var leafLength = 40 * size;
    var leafWidth = leafLength * slenderness * sacred_geometry_1.PHI_INVERSE;
    // Begin leaf from the stem point
    var startX = centerX;
    var startY = centerY + (leafLength / 2);
    var tipY = centerY - (leafLength / 2);
    // Control points for the leaf edges using golden ratio proportions
    var cp1xBase = leafWidth * sacred_geometry_1.PHI;
    var cp1x = mirror ? startX - cp1xBase : startX + cp1xBase;
    var cp1y = startY - (leafLength * sacred_geometry_1.PHI_INVERSE);
    var cp2xBase = leafWidth;
    var cp2x = mirror ? startX - cp2xBase : startX + cp2xBase;
    var cp2y = tipY + (leafLength * 0.382); // 0.382 is derived from PHI - 1
    // Left side control points (mirror of right side)
    var cp3xBase = leafWidth;
    var cp3x = mirror ? startX + cp3xBase : startX - cp3xBase;
    var cp3y = cp2y;
    var cp4xBase = leafWidth * sacred_geometry_1.PHI;
    var cp4x = mirror ? startX + cp4xBase : startX - cp4xBase;
    var cp4y = cp1y;
    // Create the leaf outline path
    var leafPath = "\n    M ".concat(startX, ",").concat(startY, "\n    C ").concat(cp1x, ",").concat(cp1y, " ").concat(cp2x, ",").concat(cp2y, " ").concat(centerX, ",").concat(tipY, "\n    C ").concat(cp3x, ",").concat(cp3y, " ").concat(cp4x, ",").concat(cp4y, " ").concat(startX, ",").concat(startY, "\n  ");
    elements.push(<path key="leaf-outline" d={leafPath} stroke="currentColor" strokeWidth={size * 0.5} fill="none" className="olive-leaf-outline"/>);
    // Add the midrib (center vein)
    if (midribIntensity > 0) {
        var midribPath = "M ".concat(startX, ",").concat(startY, " L ").concat(centerX, ",").concat(tipY);
        elements.push(<path key="leaf-midrib" d={midribPath} stroke="currentColor" strokeWidth={size * 0.3 * midribIntensity} strokeOpacity={0.7} fill="none" className="olive-leaf-midrib"/>);
        // Add lateral veins using the golden ratio for positioning
        var veinsCount = 3;
        for (var i = 1; i <= veinsCount; i++) {
            // Position each vein using golden ratio proportions
            var t = i / (veinsCount + 1);
            var tGolden = t * sacred_geometry_1.PHI_INVERSE; // Apply golden ratio to spacing
            // Calculate point on midrib for vein start
            var veinStartX = startX;
            var veinStartY = startY - (leafLength * tGolden);
            // Calculate control and end points for right vein
            var veinRightEndX = mirror ? startX - (leafWidth * 0.8 * (1 - tGolden)) : startX + (leafWidth * 0.8 * (1 - tGolden));
            var veinRightEndY = veinStartY - (leafLength * 0.05 * tGolden);
            var veinRightCpX = mirror ? startX - (leafWidth * 0.4 * (1 - tGolden)) : startX + (leafWidth * 0.4 * (1 - tGolden));
            var veinRightCpY = veinStartY - (leafLength * 0.02 * tGolden);
            // Calculate control and end points for left vein
            var veinLeftEndX = mirror ? startX + (leafWidth * 0.8 * (1 - tGolden)) : startX - (leafWidth * 0.8 * (1 - tGolden));
            var veinLeftEndY = veinRightEndY;
            var veinLeftCpX = mirror ? startX + (leafWidth * 0.4 * (1 - tGolden)) : startX - (leafWidth * 0.4 * (1 - tGolden));
            var veinLeftCpY = veinRightCpY;
            // Draw the right vein
            elements.push(<path key={"vein-right-".concat(i)} d={"M ".concat(veinStartX, ",").concat(veinStartY, " Q ").concat(veinRightCpX, ",").concat(veinRightCpY, " ").concat(veinRightEndX, ",").concat(veinRightEndY)} stroke="currentColor" strokeWidth={size * 0.15 * midribIntensity * (1 - (t * 0.3))} strokeOpacity={0.5} fill="none" className="olive-leaf-vein"/>);
            // Draw the left vein
            elements.push(<path key={"vein-left-".concat(i)} d={"M ".concat(veinStartX, ",").concat(veinStartY, " Q ").concat(veinLeftCpX, ",").concat(veinLeftCpY, " ").concat(veinLeftEndX, ",").concat(veinLeftEndY)} stroke="currentColor" strokeWidth={size * 0.15 * midribIntensity * (1 - (t * 0.3))} strokeOpacity={0.5} fill="none" className="olive-leaf-vein"/>);
        }
    }
    return elements;
};
/**
 * OliveLeaf Component with ref forwarding
 *
 * Creates a mathematically harmonious olive leaf based on sacred geometry
 */
exports.OliveLeaf = forwardRef(function (_a, ref) {
    var _b = _a.leafSize, leafSize = _b === void 0 ? 1 : _b, _c = _a.slenderness, slenderness = _c === void 0 ? 0.3 : _c, _d = _a.rotation, rotation = _d === void 0 ? 0 : _d, _e = _a.midribIntensity, midribIntensity = _e === void 0 ? 0.7 : _e, _f = _a.mirror, mirror = _f === void 0 ? false : _f, _g = _a.viewBox, viewBox = _g === void 0 ? '0 0 100 100' : _g, rest = __rest(_a, ["leafSize", "slenderness", "rotation", "midribIntensity", "mirror", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generateOliveLeaf(leafSize, slenderness, midribIntensity, mirror)}
        </g>
      </BotanicalElement_1.default>);
});
exports.OliveLeaf.displayName = 'OliveLeaf';
exports.default = exports.OliveLeaf;
