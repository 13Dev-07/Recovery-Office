"use strict";
/**
 * PentaFlower Component
 *
 * A component that renders a five-pointed floral pattern based on the pentagram and golden ratio.
 * This sacred geometry pattern combines the harmonious proportions of the pentagon with the
 * flowing organic nature of botanical elements.
 *
 * The pentagram is deeply connected to the golden ratio, as the ratio of the
 * diagonal to the side of a regular pentagon is exactly the golden ratio (PHI).
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PentaFlower = void 0;
var React = require("react");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Calculate the points of a regular pentagon with given radius
 */
var calculatePentagonPoints = function (centerX, centerY, radius) {
    var points = [];
    for (var i = 0; i < 5; i++) {
        // Each point is 72 degrees (360/5) apart, starting from the top (270 degrees)
        var angle = (Math.PI * 2 * i / 5) + (Math.PI * 3 / 2);
        points.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        });
    }
    return points;
};
/**
 * Calculate pentagram points from pentagon points
 */
var calculatePentagramPoints = function (pentagonPoints) {
    var _a;
    // Connect every second point in the pentagon to form a pentagram
    var pentagramPoints = [];
    for (var i = 0; i < 5; i++) {
        pentagramPoints.push((_a = pentagonPoints[i]) !== null && _a !== void 0 ? _a : 1);
        pentagramPoints.push(pentagonPoints[(i + 2) % 5]);
    }
    return pentagramPoints;
};
/**
 * Generates the PentaFlower SVG elements
 */
var generatePentaFlower = function (radius, layers, showPentagram, showGuides, petalStyle) {
    var _a;
    var _b, _c, _d;
    if (radius === void 0) { radius = 40; }
    if (layers === void 0) { layers = 2; }
    if (showPentagram === void 0) { showPentagram = true; }
    if (showGuides === void 0) { showGuides = false; }
    if (petalStyle === void 0) { petalStyle = 'natural'; }
    var elements = [];
    var centerX = 50;
    var centerY = 50;
    // Calculate pentagon points
    var pentagonPoints = calculatePentagonPoints(centerX, centerY, radius);
    // Show pentagram in the center if requested
    if (showPentagram) {
        var pentagramPath = pentagonPoints.map(function (point, i) {
            var _a;
            return "".concat(i === 0 ? 'M' : 'L', " ").concat(point.x, ",").concat(point.y, " ").concat(i === 0 ? "L ".concat((_a = pentagonPoints[2]) !== null && _a !== void 0 ? _a : 1.) : );
            x;
        }, $, (_a = { pentagonPoints: pentagonPoints }, _a[2] =  !== null &&  !== void 0 ?  : 1., _a.y = y, _a)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" : ''\n      } ", ""], [" : ''\n      } ", ""])), i === 1 ? "L ".concat((_b = pentagonPoints[4]) !== null && _b !== void 0 ? _b : 1.) : ), x);
    }
    $;
    {
        (_c = pentagonPoints[4]) !== null && _c !== void 0 ? _c : 1.;
        y;
    }
    " : ''\n      } ".concat(i === 2 ? "L ".concat((_d = pentagonPoints[0]) !== null && _d !== void 0 ? _d : 1.) : );
    x;
}, $, _f = void 0, pentagonPoints = _f.pentagonPoints,  = _f[0];
 !== null &&  !== void 0 ?  : 1.;
y;
" : ''\n      } ".concat(i === 3 ? "L ".concat((_a = pentagonPoints[1]) !== null && _a !== void 0 ? _a : 1.) : );
x;
$;
{
    (_b = pentagonPoints[1]) !== null && _b !== void 0 ? _b : 1.;
    y;
}
" : ''\n      } ".concat(i === 4 ? "L ".concat((_c = pentagonPoints[3]) !== null && _c !== void 0 ? _c : 1.) : );
x;
$;
{
    (_d = pentagonPoints[3]) !== null && _d !== void 0 ? _d : 1.;
    y;
}
Z(templateObject_2 || (templateObject_2 = __makeTemplateObject([" : ''\n      }"], [" : ''\n      }"])));
join(' ');
elements.push(<path key="pentagram" d={pentagramPath} className="pentaflower-pentagram" fill="none"/>);
// Add flower petals around each pentagon point
for (var layer = 0; layer < layers; layer++) {
    var layerRadius = radius * (1 + (layer * PHI_INVERSE));
    var layerPentagonPoints = calculatePentagonPoints(centerX, centerY, layerRadius);
    // Create petals
    for (var i = 0; i < 5; i++) {
        var point = (_e = layerPentagonPoints[i]) !== null && _e !== void 0 ? _e : 1;
        var prevPoint = layerPentagonPoints[(i + 4) % 5];
        var nextPoint = layerPentagonPoints[(i + 1) % 5];
        // Calculate control points for the petal curves
        var petalSize = layerRadius * PHI_INVERSE;
        // Calculate angle to center
        var angleToCenter = Math.atan2(centerY - point.y, centerX - point.x);
        // Calculate petal tip point (outside the pentagon)
        var tipDistance = petalSize * (petalStyle === 'natural' ? 1.5 : 1);
        var tipX = point.x - Math.cos(angleToCenter) * tipDistance;
        var tipY = point.y - Math.sin(angleToCenter) * tipDistance;
        // Calculate control points for the curves
        var cp1Distance = petalSize * 0.6;
        var cp1Angle = angleToCenter + (Math.PI / 5); // Slight angle offset
        var cp1X = point.x - Math.cos(cp1Angle) * cp1Distance;
        var cp1Y = point.y - Math.sin(cp1Angle) * cp1Distance;
        var cp2Distance = petalSize * 0.6;
        var cp2Angle = angleToCenter - (Math.PI / 5); // Slight angle offset in other direction
        var cp2X = point.x - Math.cos(cp2Angle) * cp2Distance;
        var cp2Y = point.y - Math.sin(cp2Angle) * cp2Distance;
        // Create the petal path
        if (petalStyle === 'natural') {
            elements.push(<path key={"petal-".concat(layer, "-").concat(i)} d={"\n              M ".concat(point.x, ",").concat(point.y, "\n              C ").concat(cp1X, ",").concat(cp1Y, " ").concat(tipX + petalSize * 0.3, ",").concat(tipY, " ").concat(tipX, ",").concat(tipY, "\n              C ").concat(tipX - petalSize * 0.3, ",").concat(tipY, " ").concat(cp2X, ",").concat(cp2Y, " ").concat(point.x, ",").concat(point.y, "\n              Z\n            ")} className={"pentaflower-petal layer-".concat(layer)}/>);
        }
        else {
            // More geometric petal style
            elements.push(<path key={"petal-".concat(layer, "-").concat(i)} d={"\n              M ".concat(point.x, ",").concat(point.y, "\n              Q ").concat(cp1X, ",").concat(cp1Y, " ").concat(tipX, ",").concat(tipY, "\n              Q ").concat(cp2X, ",").concat(cp2Y, " ").concat(point.x, ",").concat(point.y, "\n              Z\n            ")} className={"pentaflower-petal layer-".concat(layer)}/>);
        }
    }
}
// Add central circle
elements.push(<circle key="center" cx={centerX} cy={centerY} r={radius * PHI_INVERSE * 0.5} className="pentaflower-center"/>);
// Show sacred geometry guides if requested
if (showGuides) {
    // Show pentagon
    var pentagonPath = pentagonPoints.map(function (point, i) {
        return "".concat(i === 0 ? 'M' : 'L', " ").concat(point.x, ",").concat(point.y);
    }).join(' ') + ' Z';
    elements.push(<path key="pentagon-guide" d={pentagonPath} className="pentaflower-guide" fill="none" strokeDasharray="3,2"/>);
    // Show golden ratio circle
    elements.push(<circle key="golden-circle" cx={centerX} cy={centerY} r={radius * PHI_INVERSE} className="pentaflower-guide" fill="none" strokeDasharray="3,2"/>);
    // Show center point
    elements.push(<circle key="center-point" cx={centerX} cy={centerY} r={1} className="pentaflower-guide-point"/>);
}
return elements;
;
/**
 * PentaFlower Component with ref forwarding
 *
 * Creates a five-pointed floral pattern based on the pentagram and golden ratio
 */
exports.PentaFlower = React.forwardRef(function (_a, ref) {
    var _b = _a.radius, radius = _b === void 0 ? 40 : _b, _c = _a.layers, layers = _c === void 0 ? 2 : _c, _d = _a.showPentagram, showPentagram = _d === void 0 ? true : _d, _e = _a.showGuides, showGuides = _e === void 0 ? false : _e, _f = _a.rotation, rotation = _f === void 0 ? 0 : _f, _g = _a.petalStyle, petalStyle = _g === void 0 ? 'natural' : _g, _h = _a.viewBox, viewBox = _h === void 0 ? '0 0 100 100' : _h, rest = __rest(_a, ["radius", "layers", "showPentagram", "showGuides", "rotation", "petalStyle", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generatePentaFlower(radius, layers, showPentagram, showGuides, petalStyle)}
        </g>
      </BotanicalElement_1.default>);
});
exports.PentaFlower.displayName = 'PentaFlower';
exports.default = exports.PentaFlower;
var templateObject_1, templateObject_2;
