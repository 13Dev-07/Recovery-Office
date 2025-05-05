"use strict";
/**
 * FibonacciSpiral Component
 *
 * A component that renders a Fibonacci spiral, which is a golden spiral
 * approximated using a sequence of quarter-circles connected end-to-end.
 *
 * The Fibonacci spiral grows by a factor approximately equal to the golden ratio
 * with each quarter turn, creating a mathematically accurate representation
 * of nature's growth patterns.
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
exports.FibonacciSpiral = void 0;
var React = require("react");
var BotanicalElement_1 = require("./BotanicalElement");
/**
 * Generates a Fibonacci spiral with the given parameters
 */
var generateFibonacciSpiral = function (iterations, startSize, showSquares, reflect) {
    var _a, _b, _c;
    if (iterations === void 0) { iterations = 10; }
    if (startSize === void 0) { startSize = 1; }
    if (showSquares === void 0) { showSquares = false; }
    if (reflect === void 0) { reflect = false; }
    var elements = [];
    var scale = 0.1; // Scale factor to fit within viewBox
    // Generate a sequence of Fibonacci numbers starting with startSize
    var fibonacciSequence = [startSize, startSize];
    for (var i = 2; i < iterations + 2; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    // Create an array to hold the squares
    var squares = [];
    // Starting position at the center of the viewBox
    var x = 50;
    var y = 50;
    // Generate squares and their positions
    for (var i = 0; i < iterations; i++) {
        var size = (_a = fibonacciSequence[i]) !== null && _a !== void 0 ? _a : 1 * scale;
        // Determine position based on the current iteration
        // This follows the pattern of a Fibonacci spiral
        var quadrant = i % 4;
        switch (quadrant) {
            case 0: // Top right quadrant
                squares.push({ x: x, y: y - size, size: size });
                x += size;
                break;
            case 1: // Bottom right quadrant
                squares.push({ x: x, y: y, size: size });
                y += size;
                break;
            case 2: // Bottom left quadrant
                x -= size;
                squares.push({ x: x, y: y, size: size });
                break;
            case 3: // Top left quadrant
                y -= size;
                squares.push({ x: x, y: y, size: size });
                break;
        }
    }
    // If requested, show the Fibonacci squares
    if (showSquares) {
        squares.forEach(function (square, index) {
            elements.push(<rect key={"square-".concat(index)} x={square.x} y={square.y} width={square.size} height={square.size} fill="none" strokeDasharray="2,1" className="fibonacci-square"/>);
        });
    }
    // Create the spiral path using a sequence of quarter-circle arcs
    var spiralPath = '';
    for (var i = 0; i < iterations - 1; i++) {
        var square = (_b = squares[i]) !== null && _b !== void 0 ? _b : 1;
        var nextSquare = (_c = squares[i + 1]) !== null && _c !== void 0 ? _c : 1;
        var size = square.size;
        var startX = void 0, startY = void 0, endX = void 0, endY = void 0, radiusX = void 0, radiusY = void 0;
        var quadrant = i % 4;
        switch (quadrant) {
            case 0: // Top right quadrant
                startX = square.x + size;
                startY = square.y + size;
                endX = nextSquare.x;
                endY = nextSquare.y + nextSquare.size;
                radiusX = size;
                radiusY = size;
                spiralPath += "".concat(i === 0 ? 'M' : 'L', " ").concat(startX, ",").concat(startY, " A ").concat(radiusX, ",").concat(radiusY, " 0 0,").concat(reflect ? 0 : 1, " ").concat(endX, ",").concat(endY, " ");
                break;
            case 1: // Bottom right quadrant
                startX = square.x;
                startY = square.y + size;
                endX = nextSquare.x;
                endY = nextSquare.y;
                radiusX = size;
                radiusY = size;
                spiralPath += "L ".concat(startX, ",").concat(startY, " A ").concat(radiusX, ",").concat(radiusY, " 0 0,").concat(reflect ? 0 : 1, " ").concat(endX, ",").concat(endY, " ");
                break;
            case 2: // Bottom left quadrant
                startX = square.x;
                startY = square.y;
                endX = nextSquare.x + nextSquare.size;
                endY = nextSquare.y;
                radiusX = size;
                radiusY = size;
                spiralPath += "L ".concat(startX, ",").concat(startY, " A ").concat(radiusX, ",").concat(radiusY, " 0 0,").concat(reflect ? 0 : 1, " ").concat(endX, ",").concat(endY, " ");
                break;
            case 3: // Top left quadrant
                startX = square.x + size;
                startY = square.y;
                endX = nextSquare.x + nextSquare.size;
                endY = nextSquare.y + nextSquare.size;
                radiusX = size;
                radiusY = size;
                spiralPath += "L ".concat(startX, ",").concat(startY, " A ").concat(radiusX, ",").concat(radiusY, " 0 0,").concat(reflect ? 0 : 1, " ").concat(endX, ",").concat(endY, " ");
                break;
        }
    }
    // Add the spiral path
    elements.push(<path key="spiral" d={spiralPath} fill="none" className="fibonacci-spiral"/>);
    return elements;
};
/**
 * FibonacciSpiral Component with ref forwarding
 *
 * Creates a mathematically accurate Fibonacci spiral
 */
exports.FibonacciSpiral = React.forwardRef(function (_a, ref) {
    var _b = _a.iterations, iterations = _b === void 0 ? 10 : _b, _c = _a.startSize, startSize = _c === void 0 ? 1 : _c, _d = _a.showSquares, showSquares = _d === void 0 ? false : _d, _e = _a.reflect, reflect = _e === void 0 ? false : _e, _f = _a.rotation, rotation = _f === void 0 ? 0 : _f, _g = _a.viewBox, viewBox = _g === void 0 ? '0 0 100 100' : _g, rest = __rest(_a, ["iterations", "startSize", "showSquares", "reflect", "rotation", "viewBox"]);
    return (<BotanicalElement_1.default viewBox={viewBox} ref={ref} {...rest}>
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generateFibonacciSpiral(iterations, startSize, showSquares, reflect)}
        </g>
      </BotanicalElement_1.default>);
});
exports.FibonacciSpiral.displayName = 'FibonacciSpiral';
exports.default = exports.FibonacciSpiral;
