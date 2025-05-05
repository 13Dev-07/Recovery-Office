"use strict";
/**
 * GoldenRectangle Component
 *
 * A component that renders a golden rectangle - a rectangle whose sides are in the
 * golden ratio (1:1.618). The golden rectangle is considered one of the most visually
 * pleasing geometric shapes and appears throughout nature and classical architecture.
 *
 * This component provides a way to create sacred geometry-based rectangles for
 * layouts, decorative elements, or educational purposes.
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
exports.GoldenRectangle = void 0;
var React = require("react");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Generates the golden rectangle SVG elements
 */
var generateGoldenRectangle = function (width, showSubdivisions, subdivisionCount, showSpiral, horizontal) {
    if (width === void 0) { width = 60; }
    if (showSubdivisions === void 0) { showSubdivisions = false; }
    if (subdivisionCount === void 0) { subdivisionCount = 3; }
    if (showSpiral === void 0) { showSpiral = false; }
    if (horizontal === void 0) { horizontal = true; }
    var elements = [];
    // Calculate height based on golden ratio
    var height = horizontal ? width / PHI : width * PHI;
    // Calculate the rectangle position to center it in the viewBox
    var x = horizontal ? (100 - width) / 2 : (100 - width) / 2;
    var y = horizontal ? (100 - height) / 2 : (100 - height) / 2;
    // Create the main rectangle
    elements.push(<rect key="golden-rectangle" x={x} y={y} width={width} height={height} className="golden-rectangle"/>);
    // Add subdivisions if requested
    if (showSubdivisions) {
        var currentX = x;
        var currentY = y;
        var currentWidth = width;
        var currentHeight = height;
        for (var i = 0; i < subdivisionCount; i++) {
            if (horizontal) {
                // Calculate square size (equal to height)
                var squareSize = currentHeight;
                // Draw the square on the left side
                elements.push(<rect key={"subdivision-square-".concat(i)} x={currentX} y={currentY} width={squareSize} height={squareSize} className="golden-subdivision" fill="none" strokeDasharray="3,2"/>);
                // Add the golden ratio point at ~61.8% of the square size
                elements.push(<circle key={"golden-point-".concat(i)} cx={currentX + squareSize * PHI_INVERSE} cy={currentY + squareSize * PHI_INVERSE} r={1} className="golden-point"/>);
                // Move to the next rectangle
                currentX += squareSize;
                currentWidth -= squareSize;
                currentHeight = currentWidth / PHI;
                currentY = y + (height - currentHeight) / 2;
            }
            else {
                // Calculate square size (equal to width)
                var squareSize = currentWidth;
                // Draw the square on the top
                elements.push(<rect key={"subdivision-square-".concat(i)} x={currentX} y={currentY} width={squareSize} height={squareSize} className="golden-subdivision" fill="none" strokeDasharray="3,2"/>);
                // Add the golden ratio point at ~61.8% of the square size
                elements.push(<circle key={"golden-point-".concat(i)} cx={currentX + squareSize * PHI_INVERSE} cy={currentY + squareSize * PHI_INVERSE} r={1} className="golden-point"/>);
                // Move to the next rectangle
                currentY += squareSize;
                currentHeight -= squareSize;
                currentWidth = currentHeight / PHI;
                currentX = x + (width - currentWidth) / 2;
            }
        }
    }
    // Add spiral if requested
    if (showSpiral) {
        var currentX = x;
        var currentY = y;
        var currentWidth = width;
        var currentHeight = height;
        // Create a path for the golden spiral
        var spiralPath = '';
        for (var i = 0; i < (subdivisionCount > 0 ? subdivisionCount : 3); i++) {
            if (horizontal) {
                // Calculate square size (equal to height)
                var squareSize = currentHeight;
                // Add arc to spiral path
                if (i === 0) {
                    // Start at bottom right of the square
                    spiralPath += "M ".concat(currentX + squareSize, ",").concat(currentY + squareSize, " ");
                }
                // Add quarter circle arc
                spiralPath += "A ".concat(squareSize, ",").concat(squareSize, " 0 0,0 ").concat(currentX, ",").concat(currentY, " ");
                // Move to the next rectangle
                currentX += squareSize;
                currentWidth -= squareSize;
                currentHeight = currentWidth / PHI;
                currentY = y + (height - currentHeight) / 2;
            }
            else {
                // Calculate square size (equal to width)
                var squareSize = currentWidth;
                // Add arc to spiral path
                if (i === 0) {
                    // Start at bottom right of the square
                    spiralPath += "M ".concat(currentX + squareSize, ",").concat(currentY + squareSize, " ");
                }
                // Add quarter circle arc
                spiralPath += "A ".concat(squareSize, ",").concat(squareSize, " 0 0,0 ").concat(currentX, ",").concat(currentY, " ");
                // Move to the next rectangle
                currentY += squareSize;
                currentHeight -= squareSize;
                currentWidth = currentHeight / PHI;
                currentX = x + (width - currentWidth) / 2;
            }
        }
        elements.push(<path key="golden-spiral" d={spiralPath} fill="none" className="golden-spiral"/>);
    }
    return elements;
};
/**
 * GoldenRectangle Component with ref forwarding
 *
 * Creates a rectangle with the golden ratio (1:1.618) proportions
 */
exports.GoldenRectangle = React.forwardRef(function (_a, ref) {
    var _b = _a.width, width = _b === void 0 ? 60 : _b, _c = _a.showSubdivisions, showSubdivisions = _c === void 0 ? false : _c, _d = _a.subdivisionCount, subdivisionCount = _d === void 0 ? 3 : _d, _e = _a.showSpiral, showSpiral = _e === void 0 ? false : _e, _f = _a.rotation, rotation = _f === void 0 ? 0 : _f, _g = _a.horizontal, horizontal = _g === void 0 ? true : _g, _h = _a.viewBox, viewBox = _h === void 0 ? '0 0 100 100' : _h, rest = __rest(_a, ["width", "showSubdivisions", "subdivisionCount", "showSpiral", "rotation", "horizontal", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generateGoldenRectangle(width, showSubdivisions, subdivisionCount, showSpiral, horizontal)}
        </g>
      </BotanicalElement_1.default>);
});
exports.GoldenRectangle.displayName = 'GoldenRectangle';
exports.default = exports.GoldenRectangle;
