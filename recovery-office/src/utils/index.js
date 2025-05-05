"use strict";
/**
 * Utility functions index
 *
 * This file exports all utility functions to provide clean imports
 * throughout the application.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFibonacciByIndex = exports.getFibonacciValues = exports.generateGoldenSpiralPoints = exports.getAccessibleAnimationSettings = exports.prefersReducedMotion = exports.responsiveAnimationDelay = exports.goldenSpring = exports.calculateStaggerDelay = exports.getSacredEasingCss = exports.applyGoldenRatioDuration = exports.resolveDuration = exports.getFibonacciValuesGeometry = exports.generateGoldenSpiralPointsGeometry = exports.fibonacciGridColumns = exports.isSacredPoint = exports.goldenRectangleHeight = exports.createSacredBezier = exports.createSpacing = exports.pxToRem = exports.closestFibonacci = exports.goldenRatioScale = exports.goldenRatioSegment = void 0;
// Export sacred geometry utilities with explicit naming to avoid conflicts
var sacredGeometry_1 = require("./sacredGeometry");
Object.defineProperty(exports, "goldenRatioSegment", { enumerable: true, get: function () { return sacredGeometry_1.goldenRatioSegment; } });
Object.defineProperty(exports, "goldenRatioScale", { enumerable: true, get: function () { return sacredGeometry_1.goldenRatioScale; } });
Object.defineProperty(exports, "closestFibonacci", { enumerable: true, get: function () { return sacredGeometry_1.closestFibonacci; } });
Object.defineProperty(exports, "pxToRem", { enumerable: true, get: function () { return sacredGeometry_1.pxToRem; } });
Object.defineProperty(exports, "createSpacing", { enumerable: true, get: function () { return sacredGeometry_1.createSpacing; } });
Object.defineProperty(exports, "createSacredBezier", { enumerable: true, get: function () { return sacredGeometry_1.createSacredBezier; } });
Object.defineProperty(exports, "goldenRectangleHeight", { enumerable: true, get: function () { return sacredGeometry_1.goldenRectangleHeight; } });
Object.defineProperty(exports, "isSacredPoint", { enumerable: true, get: function () { return sacredGeometry_1.isSacredPoint; } });
Object.defineProperty(exports, "fibonacciGridColumns", { enumerable: true, get: function () { return sacredGeometry_1.fibonacciGridColumns; } });
Object.defineProperty(exports, "generateGoldenSpiralPointsGeometry", { enumerable: true, get: function () { return sacredGeometry_1.generateGoldenSpiralPoints; } });
Object.defineProperty(exports, "getFibonacciValuesGeometry", { enumerable: true, get: function () { return sacredGeometry_1.getFibonacciValues; } });
// Export animation utilities with explicit naming to avoid conflicts
var animation_1 = require("./animation");
Object.defineProperty(exports, "resolveDuration", { enumerable: true, get: function () { return animation_1.resolveDuration; } });
Object.defineProperty(exports, "applyGoldenRatioDuration", { enumerable: true, get: function () { return animation_1.applyGoldenRatioDuration; } });
Object.defineProperty(exports, "getSacredEasingCss", { enumerable: true, get: function () { return animation_1.getSacredEasingCss; } });
Object.defineProperty(exports, "calculateStaggerDelay", { enumerable: true, get: function () { return animation_1.calculateStaggerDelay; } });
Object.defineProperty(exports, "goldenSpring", { enumerable: true, get: function () { return animation_1.goldenSpring; } });
Object.defineProperty(exports, "responsiveAnimationDelay", { enumerable: true, get: function () { return animation_1.responsiveAnimationDelay; } });
Object.defineProperty(exports, "prefersReducedMotion", { enumerable: true, get: function () { return animation_1.prefersReducedMotion; } });
Object.defineProperty(exports, "getAccessibleAnimationSettings", { enumerable: true, get: function () { return animation_1.getAccessibleAnimationSettings; } });
Object.defineProperty(exports, "generateGoldenSpiralPoints", { enumerable: true, get: function () { return 
    // Export these as the primary versions for animation purposes
    animation_1.generateGoldenSpiralPoints; } });
Object.defineProperty(exports, "getFibonacciValues", { enumerable: true, get: function () { return animation_1.getFibonacciValues; } });
// Export performance utilities
__exportStar(require("./animationPerformance"), exports);
// Export props mapping utilities
__exportStar(require("./propsMapping"), exports);
// Explicitly export the preferred getFibonacciByIndex implementation
var getFibonacciByIndex_1 = require("./getFibonacciByIndex");
Object.defineProperty(exports, "getFibonacciByIndex", { enumerable: true, get: function () { return getFibonacciByIndex_1.getFibonacciByIndex; } });
