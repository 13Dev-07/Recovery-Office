"use strict";
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
exports.LeafPattern = void 0;
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
/**
 * LeafPattern Component
 *
 * A decorative pattern component that arranges multiple olive leaves
 * in a harmonious pattern based on sacred geometry principles.
 *
 * This component creates aesthetic arrangements of leaves using
 * golden ratio proportions and fibonacci-based positioning.
 */
var React = require("react");
var OliveLeaf_1 = require("./OliveLeaf");
var BotanicalElement_1 = require("./BotanicalElement");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Calculate the number of leaves based on density using Fibonacci sequence
 */
var getLeafCount = function (density) {
    switch (density) {
        case 'low':
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); // 5
        case 'high':
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(8); // 21
        case 'medium':
        default:
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); // 13
    }
};
/**
 * Get size multiplier based on size prop
 */
var getSizeMultiplier = function (size) {
    switch (size) {
        case 'small':
            return 0.7;
        case 'large':
            return 1.3;
        case 'medium':
        default:
            return 1;
    }
};
/**
 * Generate a leaf pattern using golden ratio and Fibonacci-based positioning
 */
var generateLeafPattern = function (density, size, spiralArrangement) {
    var elements = [];
    var leafCount = getLeafCount(density);
    var sizeMultiplier = getSizeMultiplier(size);
    // Define the viewbox parameters
    var viewBoxSize = 100;
    var center = viewBoxSize / 2;
    for (var i = 0; i < leafCount; i++) {
        // Calculate position using either spiral or radial arrangement
        var x = void 0, y = void 0, rotation = void 0;
        if (spiralArrangement) {
            // Golden spiral arrangement (using golden angle: ~137.5 degrees)
            var goldenAngle = 360 * sacred_geometry_1.PHI_INVERSE * sacred_geometry_1.PHI_INVERSE; // ~137.5 degrees
            var angle = i * goldenAngle;
            // Radius increases with sqrt(i) to maintain even density
            var radius = Math.sqrt(i) * (viewBoxSize / 4 * sacred_geometry_1.PHI_INVERSE);
            // Convert polar to cartesian coordinates
            var radians = angle * (Math.PI / 180);
            x = center + radius * Math.cos(radians);
            y = center + radius * Math.sin(radians);
            // Rotate leaf to follow the spiral
            rotation = angle + 90;
        }
        else {
            // Radial arrangement with Fibonacci-based positioning
            var angle = (i / leafCount) * 360;
            // Use PHI to vary distance from center
            var distanceMultiplier = 0.3 + (0.7 * ((i % 3) * sacred_geometry_1.PHI_INVERSE));
            var radius = (viewBoxSize / 3) * distanceMultiplier;
            // Convert polar to cartesian coordinates
            var radians = angle * (Math.PI / 180);
            x = center + radius * Math.cos(radians);
            y = center + radius * Math.sin(radians);
            // Point leaves outward from center
            rotation = angle;
        }
        // Vary leaf size using golden ratio
        var leafSizeVariation = 0.5 + ((i % 3) * sacred_geometry_1.PHI_INVERSE * 0.5);
        var leafSize = leafSizeVariation * sizeMultiplier;
        // Vary slenderness slightly for natural appearance
        var slenderness = 0.25 + (Math.sin(i * sacred_geometry_1.PHI) * 0.1);
        // Alternate mirroring based on position
        var mirror = i % 2 === 0;
        // Generate leaf with calculated properties
        elements.push(<g key={"leaf-".concat(i)} transform={"translate(".concat(x, ", ").concat(y, ")")}>
        <OliveLeaf_1.OliveLeaf leafSize={leafSize} slenderness={slenderness} rotation={rotation} mirror={mirror} midribIntensity={0.6 + (Math.random() * 0.3)} width={leafSize * 20} height={leafSize * 20} opacity={0.8 + (Math.random() * 0.2)}/>
      </g>);
    }
    return elements;
};
/**
 * Get animation CSS based on animated prop
 */
var getAnimationStyles = function (animated) {
    if (!animated)
        return '';
    return "\n    @keyframes gentle-sway {\n      0%, 100% { transform: rotate(0deg); }\n      50% { transform: rotate(3deg); }\n    }\n    \n    g {\n      transform-origin: center;\n      animation: gentle-sway ".concat(8 * sacred_geometry_1.PHI, "s ease-in-out infinite;\n      animation-delay: calc(var(--leaf-index, 0) * 0.5s);\n    }\n    \n    g:nth-child(odd) {\n      animation-direction: alternate-reverse;\n    }\n  ");
};
/**
 * LeafPattern Component with ref forwarding
 *
 * Creates a pattern of leaves arranged according to sacred geometry principles
 */
exports.LeafPattern = forwardRef(function (_a, ref) {
    var _b = _a.density, density = _b === void 0 ? 'medium' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.animated, animated = _d === void 0 ? false : _d, _e = _a.rotation, rotation = _e === void 0 ? 0 : _e, _f = _a.spiralArrangement, spiralArrangement = _f === void 0 ? true : _f, rest = __rest(_a, ["density", "size", "animated", "rotation", "spiralArrangement"]);
    return (<BotanicalElement_1.default ref={ref} decorative={true} viewBox="0 0 100 100" {...rest}>
        <style>
          {getAnimationStyles(animated)}
        </style>
        
        <g transform={"rotate(".concat(rotation, ", 50, 50)")} style={{ transformOrigin: 'center' }}>
          {generateLeafPattern(density, size, spiralArrangement)}
        </g>
      </BotanicalElement_1.default>);
});
exports.LeafPattern.displayName = 'LeafPattern';
exports.default = exports.LeafPattern;
