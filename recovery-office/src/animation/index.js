"use strict";
/**
 * Animation Components
 *
 * This module exports animation components and utilities that follow sacred geometry principles.
 * All animations use the golden ratio and Fibonacci sequence for timing and motion.
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
exports.useAnimationConfig = exports.getAccessibleAnimationConfig = exports.getAccessibleAnimationSettings = exports.prefersReducedMotion = exports.getFibonacciByIndex = exports.calculateStaggerDelay = exports.applyGoldenRatioDuration = exports.resolveDuration = exports.sacredDurations = exports.sacredEasing = exports.MorphingShape = exports.Morph = exports.Sequence = exports.ParallaxLayer = exports.ScrollReveal = exports.SlideIn = exports.ScaleFade = exports.FadeIn = void 0;
// Animation components
var FadeIn_1 = require("./FadeIn");
Object.defineProperty(exports, "FadeIn", { enumerable: true, get: function () { return FadeIn_1.default; } });
var ScaleFade_1 = require("./ScaleFade");
Object.defineProperty(exports, "ScaleFade", { enumerable: true, get: function () { return ScaleFade_1.default; } });
var SlideIn_1 = require("./SlideIn");
Object.defineProperty(exports, "SlideIn", { enumerable: true, get: function () { return SlideIn_1.default; } });
var ScrollReveal_1 = require("./ScrollReveal");
Object.defineProperty(exports, "ScrollReveal", { enumerable: true, get: function () { return ScrollReveal_1.default; } });
var ParallaxLayer_1 = require("./ParallaxLayer");
Object.defineProperty(exports, "ParallaxLayer", { enumerable: true, get: function () { return ParallaxLayer_1.default; } });
var Sequence_1 = require("./Sequence");
Object.defineProperty(exports, "Sequence", { enumerable: true, get: function () { return Sequence_1.default; } });
var Morph_1 = require("./Morph");
Object.defineProperty(exports, "Morph", { enumerable: true, get: function () { return Morph_1.default; } });
// Export re-exports from design system animation components
var MorphingShape_1 = require("../design-system/components/animation/MorphingShape");
Object.defineProperty(exports, "MorphingShape", { enumerable: true, get: function () { return MorphingShape_1.MorphingShape; } });
var useAnimationConfig_1 = require("../design-system/components/animation/useAnimationConfig");
Object.defineProperty(exports, "sacredEasing", { enumerable: true, get: function () { return useAnimationConfig_1.sacredEasing; } });
Object.defineProperty(exports, "sacredDurations", { enumerable: true, get: function () { return useAnimationConfig_1.sacredDurations; } });
// Animation utilities
__exportStar(require("./animation.d"), exports);
var animation_1 = require("../utils/animation");
Object.defineProperty(exports, "resolveDuration", { enumerable: true, get: function () { return animation_1.resolveDuration; } });
Object.defineProperty(exports, "applyGoldenRatioDuration", { enumerable: true, get: function () { return animation_1.applyGoldenRatioDuration; } });
Object.defineProperty(exports, "calculateStaggerDelay", { enumerable: true, get: function () { return animation_1.calculateStaggerDelay; } });
Object.defineProperty(exports, "getFibonacciByIndex", { enumerable: true, get: function () { return animation_1.getFibonacciByIndex; } });
Object.defineProperty(exports, "prefersReducedMotion", { enumerable: true, get: function () { return animation_1.prefersReducedMotion; } });
Object.defineProperty(exports, "getAccessibleAnimationSettings", { enumerable: true, get: function () { return animation_1.getAccessibleAnimationSettings; } });
Object.defineProperty(exports, "getAccessibleAnimationConfig", { enumerable: true, get: function () { return animation_1.getAccessibleAnimationConfig; } });
// Export useAnimationConfig hook and its types
var useAnimationConfig_2 = require("./useAnimationConfig");
Object.defineProperty(exports, "useAnimationConfig", { enumerable: true, get: function () { return useAnimationConfig_2.default; } });
