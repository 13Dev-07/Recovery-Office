"use strict";
/**
 * VesicaPiscis Component
 *
 * A component that renders the Vesica Piscis sacred geometry pattern.
 * The Vesica Piscis is formed by the intersection of two circles with the
 * same radius, where the center of each circle lies on the circumference of
 * the other.
 *
 * This shape is fundamental to sacred geometry and symbolizes the
 * intersection of the physical and spiritual worlds, as well as
 * creation, unity, and divine proportions.
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
exports.VesicaPiscis = void 0;
var React = require("react");
var BotanicalElement_1 = require("./BotanicalElement");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Calculate the vesica piscis path based on sacred geometry
 */
var calculateVesicaPiscis = function (radius, showVesica, showCircles, showGoldenRatio) {
    if (radius === void 0) { radius = 30; }
    if (showVesica === void 0) { showVesica = true; }
    if (showCircles === void 0) { showCircles = true; }
    if (showGoldenRatio === void 0) { showGoldenRatio = false; }
    // Center points of the two circles
    var center1 = { x: 50 - radius / 2, y: 50 };
    var center2 = { x: 50 + radius / 2, y: 50 };
    // Calculate the intersection points of the two circles
    var intersectionHeight = Math.sqrt(4 * radius * radius - radius * radius);
    var intersectionTop = { x: 50, y: 50 - intersectionHeight / 2 };
    var intersectionBottom = { x: 50, y: 50 + intersectionHeight / 2 };
    var elements = [];
    // Draw the two circles
    if (showCircles) {
        elements.push(<circle key="circle1" cx={center1.x} cy={center1.y} r={radius} className="vesica-circle-left"/>);
        elements.push(<circle key="circle2" cx={center2.x} cy={center2.y} r={radius} className="vesica-circle-right"/>);
    }
    // Draw the vesica piscis shape (the intersection)
    if (showVesica) {
        var vesicaPath = "\n      M ".concat(intersectionTop.x, ",").concat(intersectionTop.y, "\n      A ").concat(radius, ",").concat(radius, " 0 0,1 ").concat(intersectionBottom.x, ",").concat(intersectionBottom.y, "\n      A ").concat(radius, ",").concat(radius, " 0 0,1 ").concat(intersectionTop.x, ",").concat(intersectionTop.y, "\n      Z\n    ");
        elements.push(<path key="vesica" d={vesicaPath} className="vesica-shape"/>);
    }
    // Draw golden ratio indicators
    if (showGoldenRatio) {
        // The width/height ratio of the vesica piscis is related to the square root of 3
        // When properly constructed, it contains significant golden ratio proportions
        var vesicaWidth = radius;
        var vesicaHeight = intersectionHeight;
        // Horizontal line through center representing width
        elements.push(<line key="width-line" x1={center1.x} y1={50} x2={center2.x} y2={50} strokeDasharray="2,1" className="vesica-golden-ratio"/>);
        // Vertical line through center representing height
        elements.push(<line key="height-line" x1={50} y1={intersectionTop.y} x2={50} y2={intersectionBottom.y} strokeDasharray="2,1" className="vesica-golden-ratio"/>);
        // Add golden ratio division lines
        // The height of the vesica piscis divided by PHI gives a significant golden section
        var goldenSection = vesicaHeight / sacred_geometry_1.PHI;
        elements.push(<line key="golden-section" x1={center1.x} y1={50 - goldenSection / 2} x2={center2.x} y2={50 - goldenSection / 2} strokeDasharray="2,1" className="vesica-golden-ratio" stroke="gold"/>);
        elements.push(<line key="golden-section-2" x1={center1.x} y1={50 + goldenSection / 2} x2={center2.x} y2={50 + goldenSection / 2} strokeDasharray="2,1" className="vesica-golden-ratio" stroke="gold"/>);
    }
    return elements;
};
/**
 * VesicaPiscis Component with ref forwarding
 *
 * Creates the Vesica Piscis sacred geometry pattern
 */
exports.VesicaPiscis = React.forwardRef(function (_a, ref) {
    var _b = _a.radius, radius = _b === void 0 ? 30 : _b, _c = _a.showCircles, showCircles = _c === void 0 ? true : _c, _d = _a.showVesica, showVesica = _d === void 0 ? true : _d, _e = _a.vesicaFill, vesicaFill = _e === void 0 ? 'none' : _e, _f = _a.rotation, rotation = _f === void 0 ? 0 : _f, _g = _a.showGoldenRatio, showGoldenRatio = _g === void 0 ? false : _g, _h = _a.viewBox, viewBox = _h === void 0 ? '0 0 100 100' : _h, rest = __rest(_a, ["radius", "showCircles", "showVesica", "vesicaFill", "rotation", "showGoldenRatio", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} fill={vesicaFill} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {calculateVesicaPiscis(radius, showVesica, showCircles, showGoldenRatio)}
        </g>
      </BotanicalElement_1.default>);
});
exports.VesicaPiscis.displayName = 'VesicaPiscis';
exports.default = exports.VesicaPiscis;
