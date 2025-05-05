"use strict";
/**
 * FlowerOfLife Component
 *
 * A component that renders the Flower of Life sacred geometry pattern.
 * The Flower of Life is a geometric pattern composed of multiple evenly-spaced,
 * overlapping circles arranged in a flower-like pattern with six-fold symmetry.
 *
 * This pattern is found throughout nature and is considered one of the
 * fundamental patterns of sacred geometry, thought to represent creation and the
 * interconnectedness of all life.
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerOfLife = void 0;
var React = require("react");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Generates the paths for the Flower of Life pattern
 */
var generateFlowerOfLife = function (rings, radius, showSeedOfLife, showCenter, centerFill) {
    var _a, _b;
    if (rings === void 0) { rings = 3; }
    if (radius === void 0) { radius = 10; }
    if (showSeedOfLife === void 0) { showSeedOfLife = true; }
    if (showCenter === void 0) { showCenter = true; }
    if (centerFill === void 0) { centerFill = 'none'; }
    var circles = [];
    var center = { x: 50, y: 50 }; // Center of the viewBox
    // Helper function to calculate distance between two points
    var distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    // Create center circle
    if (showCenter) {
        circles.push(<circle key="center" cx={center.x} cy={center.y} r={radius} fill={centerFill} className="flower-center"/>);
    }
    // Create first ring of 6 circles (Seed of Life when combined with center)
    var firstRingRadius = radius * 2; // Distance from center to first ring circles
    var firstRingCircles = [];
    for (var i = 0; i < 6; i++) {
        var angle = (Math.PI / 3) * i; // 60 degrees in radians
        var cx = center.x + firstRingRadius * Math.cos(angle);
        var cy = center.y + firstRingRadius * Math.sin(angle);
        firstRingCircles.push({ cx: cx, cy: cy });
        if (showSeedOfLife || rings > 1) {
            circles.push(<circle key={"ring1-".concat(i)} cx={cx} cy={cy} r={radius} className="flower-ring-1"/>);
        }
    }
    // Create additional rings if requested
    if (rings > 1) {
        var processedPoints_1 = new Set();
        // Add center and first ring to processed points
        processedPoints_1.add("".concat(center.x, ",").concat(center.y));
        firstRingCircles.forEach(function (_a) {
            var cx = _a.cx, cy = _a.cy;
            processedPoints_1.add("".concat(cx, ",").concat(cy));
        });
        // Function to create a circle at a point if it hasn't been processed yet
        var createCircleAtPoint = function (cx, cy, ringIndex) {
            var pointKey = "".concat(cx.toFixed(3), ",").concat(cy.toFixed(3));
            if (!processedPoints_1.has(pointKey)) {
                // Only add the circle if it's within the desired number of rings
                if (ringIndex <= rings) {
                    circles.push(<circle key={"ring".concat(ringIndex, "-").concat(circles.length)} cx={cx} cy={cy} r={radius} className={"flower-ring-".concat(ringIndex)}/>);
                }
                processedPoints_1.add(pointKey);
            }
        };
        // Create all other circles using the principle of intersection
        // For each pair of existing circles, if they intersect, add circles at their intersection points
        for (var ringIndex = 2; ringIndex <= rings; ringIndex++) {
            var currentPoints = [];
            // Get all current circles
            var allCircles = __spreadArray(__spreadArray([], firstRingCircles, true), [{ cx: center.x, cy: center.y }], false);
            // Find new intersection points from existing circles
            for (var i = 0; i < allCircles.length; i++) {
                for (var j = i + 1; j < allCircles.length; j++) {
                    var circle1 = (_a = allCircles[i]) !== null && _a !== void 0 ? _a : 1;
                    var circle2 = (_b = allCircles[j]) !== null && _b !== void 0 ? _b : 1;
                    // Both circles must exist at this point since we're iterating through a defined array
                    // But we'll add a type guard to satisfy TypeScript
                    if (circle1 && circle2) {
                        // Calculate distance between circle centers
                        var d = distance(circle1.cx, circle1.cy, circle2.cx, circle2.cy);
                        // If circles intersect (d < 2r but d > 0)
                        if (d < 2 * radius * 1.01 && d > 0.1) { // Small buffer for floating point
                            // Calculate intersection points using circle intersection formula
                            var a = (radius * radius - radius * radius + d * d) / (2 * d);
                            var h = Math.sqrt(radius * radius - a * a);
                            var x2 = circle1.cx + a * (circle2.cx - circle1.cx) / d;
                            var y2 = circle1.cy + a * (circle2.cy - circle1.cy) / d;
                            // Get the two intersection points
                            var intersect1 = {
                                cx: x2 + h * (circle2.cy - circle1.cy) / d,
                                cy: y2 - h * (circle2.cx - circle1.cx) / d
                            };
                            var intersect2 = {
                                cx: x2 - h * (circle2.cy - circle1.cy) / d,
                                cy: y2 + h * (circle2.cx - circle1.cx) / d
                            };
                            // Add these points if they're within our viewBox boundaries (with some margin)
                            var margin = radius * 2;
                            if (intersect1.cx >= 0 - margin && intersect1.cx <= 100 + margin &&
                                intersect1.cy >= 0 - margin && intersect1.cy <= 100 + margin) {
                                createCircleAtPoint(intersect1.cx, intersect1.cy, ringIndex);
                                currentPoints.push(intersect1);
                            }
                            if (intersect2.cx >= 0 - margin && intersect2.cx <= 100 + margin &&
                                intersect2.cy >= 0 - margin && intersect2.cy <= 100 + margin) {
                                createCircleAtPoint(intersect2.cx, intersect2.cy, ringIndex);
                                currentPoints.push(intersect2);
                            }
                        }
                    }
                }
            }
            // Add current points to allCircles for next iteration
            allCircles.push.apply(allCircles, currentPoints);
        }
    }
    return circles;
};
/**
 * FlowerOfLife Component with ref forwarding
 *
 * Creates the Flower of Life sacred geometry pattern
 */
exports.FlowerOfLife = React.forwardRef(function (_a, ref) {
    var _b = _a.rings, rings = _b === void 0 ? 3 : _b, _c = _a.radius, radius = _c === void 0 ? 10 : _c, _d = _a.showSeedOfLife, showSeedOfLife = _d === void 0 ? true : _d, _e = _a.showCenter, showCenter = _e === void 0 ? true : _e, _f = _a.centerFill, centerFill = _f === void 0 ? 'none' : _f, _g = _a.rotation, rotation = _g === void 0 ? 0 : _g, _h = _a.viewBox, viewBox = _h === void 0 ? '0 0 100 100' : _h, rest = __rest(_a, ["rings", "radius", "showSeedOfLife", "showCenter", "centerFill", "rotation", "viewBox"]);
    // Generate the flower of life pattern
    var flowerPattern = (<g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
        {generateFlowerOfLife(rings, radius, showSeedOfLife, showCenter, centerFill)}
      </g>);
    // Explicitly pass children to BotanicalElement
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} children={flowerPattern} {...rest}/>);
});
exports.FlowerOfLife.displayName = 'FlowerOfLife';
exports.default = exports.FlowerOfLife;
