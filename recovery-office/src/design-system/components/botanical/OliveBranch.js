"use strict";
/**
 * OliveBranch Component
 *
 * A component that renders an olive branch, a symbol of peace and harmony,
 * designed according to sacred geometry principles.
 *
 * The olive branch uses Fibonacci-based curves and proportions
 * to create a mathematically harmonious representation of nature.
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
exports.OliveBranch = void 0;
var React = require("react");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Generates the SVG paths for an olive branch using sacred geometry
 */
var generateOliveBranch = function (leafCount, leafSize, curvature, includeOlives, oliveFill, mirror) {
    if (leafCount === void 0) { leafCount = 5; }
    if (leafSize === void 0) { leafSize = 1; }
    if (curvature === void 0) { curvature = 0.3; }
    if (includeOlives === void 0) { includeOlives = true; }
    if (oliveFill === void 0) { oliveFill = 'currentColor'; }
    if (mirror === void 0) { mirror = false; }
    var elements = [];
    var viewBoxWidth = 100;
    var viewBoxHeight = 100;
    var centerX = viewBoxWidth / 2;
    var centerY = viewBoxHeight / 2;
    // Calculate the main branch curve using golden ratio proportions
    var branchLength = viewBoxWidth * 0.7; // 70% of viewbox width
    var startX = mirror ? viewBoxWidth - (viewBoxWidth * 0.15) : viewBoxWidth * 0.15;
    var startY = centerY + (viewBoxHeight * 0.1);
    var endX = mirror ? viewBoxWidth * 0.15 : viewBoxWidth - (viewBoxWidth * 0.15);
    var endY = centerY - (viewBoxHeight * 0.1);
    // Control points for the main branch curve (based on golden ratio)
    var cp1x = startX + (mirror ? -branchLength * sacred_geometry_1.PHI_INVERSE * curvature : branchLength * sacred_geometry_1.PHI_INVERSE * curvature);
    var cp1y = startY - (viewBoxHeight * 0.2);
    var cp2x = endX + (mirror ? branchLength * sacred_geometry_1.PHI_INVERSE * curvature : -branchLength * sacred_geometry_1.PHI_INVERSE * curvature);
    var cp2y = endY + (viewBoxHeight * 0.1);
    // Create the main branch path
    var branchPath = "M ".concat(startX, ",").concat(startY, " C ").concat(cp1x, ",").concat(cp1y, " ").concat(cp2x, ",").concat(cp2y, " ").concat(endX, ",").concat(endY);
    elements.push(<path key="main-branch" d={branchPath} stroke="currentColor" strokeWidth={leafSize * 1.5} fill="none" strokeLinecap="round" className="olive-branch-stem"/>);
    // Generate leaves along the branch using Fibonacci spacing
    for (var i = 0; i < leafCount; i++) {
        // Position each leaf using Fibonacci-based distribution
        var t = i / (leafCount - 1);
        var mirroredT = mirror ? 1 - t : t;
        // Calculate position along the cubic bezier curve
        var leafPositionX = calculateCubicBezierPoint(startX, cp1x, cp2x, endX, mirroredT);
        var leafPositionY = calculateCubicBezierPoint(startY, cp1y, cp2y, endY, mirroredT);
        // Alternate leaves on each side of the branch
        var side = i % 2 === 0 ? 1 : -1;
        // Gradually decrease leaf size along the branch using golden ratio
        var sizeMultiplier = 1 - (t * (1 - sacred_geometry_1.PHI_INVERSE));
        var currentLeafSize = leafSize * sizeMultiplier * 10;
        // Calculate leaf angle based on tangent to the branch curve
        var tangentX = calculateCubicBezierTangent(startX, cp1x, cp2x, endX, mirroredT);
        var tangentY = calculateCubicBezierTangent(startY, cp1y, cp2y, endY, mirroredT);
        var angle = Math.atan2(tangentY, tangentX) * (180 / Math.PI);
        // Add some natural variation to each leaf
        var angleVariation = (Math.sin(i * sacred_geometry_1.PHI) * 20) + (side * 40);
        var finalAngle = mirror ? angle + 180 + angleVariation : angle + angleVariation;
        // Create an olive leaf shape using a combination of curves
        elements.push(<g key={"leaf-".concat(i)} transform={"translate(".concat(leafPositionX, ", ").concat(leafPositionY, ") rotate(").concat(finalAngle, ")")} className="olive-leaf">
        <path d={"\n            M 0,0 \n            C ".concat(currentLeafSize * 0.2, ",").concat(-currentLeafSize * 0.1, " ").concat(currentLeafSize * 0.4, ",").concat(-currentLeafSize * 0.3, " ").concat(currentLeafSize * 0.618, ",").concat(-currentLeafSize * 0.1, " \n            S ").concat(currentLeafSize, ",").concat(-currentLeafSize * 0.05, " ").concat(currentLeafSize * sacred_geometry_1.PHI, ",0 \n            S ").concat(currentLeafSize, ",").concat(currentLeafSize * 0.05, " ").concat(currentLeafSize * 0.618, ",").concat(currentLeafSize * 0.1, " \n            S ").concat(currentLeafSize * 0.4, ",").concat(currentLeafSize * 0.3, " ").concat(currentLeafSize * 0.2, ",").concat(currentLeafSize * 0.1, " \n            S 0,0 0,0\n          ")} stroke="currentColor" strokeWidth={leafSize * 0.5} fill="none"/>
      </g>);
        // Add olives to some of the leaves based on Fibonacci indices
        if (includeOlives && sacred_geometry_1.FIBONACCI.indexOf(i + 1) !== -1) {
            var oliveSize = currentLeafSize * 0.3;
            elements.push(<circle key={"olive-".concat(i)} cx={leafPositionX + (side * oliveSize * (mirror ? -1 : 1))} cy={leafPositionY - (oliveSize * 0.5)} r={oliveSize} fill={oliveFill} opacity={0.9} className="olive-fruit"/>);
        }
    }
    return elements;
};
/**
 * Calculate a point on a cubic bezier curve at position t (0-1)
 */
var calculateCubicBezierPoint = function (p0, p1, p2, p3, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    var mt = 1 - t;
    var mt2 = mt * mt;
    var mt3 = mt2 * mt;
    return (p0 * mt3 +
        3 * p1 * mt2 * t +
        3 * p2 * mt * t2 +
        p3 * t3);
};
/**
 * Calculate the tangent of a cubic bezier curve at position t (0-1)
 */
var calculateCubicBezierTangent = function (p0, p1, p2, p3, t) {
    var t2 = t * t;
    var mt = 1 - t;
    var mt2 = mt * mt;
    return (3 * mt2 * (p1 - p0) +
        6 * mt * t * (p2 - p1) +
        3 * t2 * (p3 - p2));
};
/**
 * OliveBranch Component with ref forwarding
 *
 * Creates a mathematically harmonious olive branch design based on sacred geometry
 */
exports.OliveBranch = React.forwardRef(function (_a, ref) {
    var _b = _a.leafCount, leafCount = _b === void 0 ? 5 : _b, _c = _a.leafSize, leafSize = _c === void 0 ? 1 : _c, _d = _a.curvature, curvature = _d === void 0 ? 0.3 : _d, _e = _a.includeOlives, includeOlives = _e === void 0 ? true : _e, _f = _a.oliveFill, oliveFill = _f === void 0 ? 'currentColor' : _f, _g = _a.rotation, rotation = _g === void 0 ? 0 : _g, _h = _a.mirror, mirror = _h === void 0 ? false : _h, _j = _a.viewBox, viewBox = _j === void 0 ? '0 0 100 100' : _j, rest = __rest(_a, ["leafCount", "leafSize", "curvature", "includeOlives", "oliveFill", "rotation", "mirror", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generateOliveBranch(leafCount, leafSize, curvature, includeOlives, oliveFill, mirror)}
        </g>
      </BotanicalElement_1.default>);
});
exports.OliveBranch.displayName = 'OliveBranch';
exports.default = exports.OliveBranch;
