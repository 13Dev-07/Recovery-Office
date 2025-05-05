"use strict";
/**
 * Animation Components
 *
 * This module exports animation components and utilities that follow sacred geometry principles.
 * All animations use the golden ratio and Fibonacci sequence for timing and motion.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimationConfig = exports.getAccessibleAnimationConfig = exports.getAccessibleAnimationSettings = exports.prefersReducedMotion = exports.applyGoldenRatioDuration = exports.resolveDuration = exports.MorphingShape = exports.Morph = exports.Parallax = exports.ParallaxLayer = exports.Sequence = exports.ScrollReveal = exports.SlideIn = exports.ScaleFade = exports.FadeIn = void 0;
// Animation components
var FadeIn_1 = require("./FadeIn");
Object.defineProperty(exports, "FadeIn", { enumerable: true, get: function () { return FadeIn_1.default; } });
var ScaleFade_1 = require("./ScaleFade");
Object.defineProperty(exports, "ScaleFade", { enumerable: true, get: function () { return ScaleFade_1.default; } });
var SlideIn_1 = require("./SlideIn");
Object.defineProperty(exports, "SlideIn", { enumerable: true, get: function () { return SlideIn_1.default; } });
var ScrollReveal_1 = require("./ScrollReveal");
Object.defineProperty(exports, "ScrollReveal", { enumerable: true, get: function () { return ScrollReveal_1.default; } });
var Sequence_1 = require("./Sequence");
Object.defineProperty(exports, "Sequence", { enumerable: true, get: function () { return Sequence_1.default; } });
var ParallaxLayer_1 = require("./ParallaxLayer");
Object.defineProperty(exports, "ParallaxLayer", { enumerable: true, get: function () { return ParallaxLayer_1.default; } });
var Parallax_1 = require("./Parallax");
Object.defineProperty(exports, "Parallax", { enumerable: true, get: function () { return Parallax_1.default; } });
var Morph_1 = require("./Morph");
Object.defineProperty(exports, "Morph", { enumerable: true, get: function () { return Morph_1.default; } });
var MorphingShape_1 = require("./MorphingShape");
Object.defineProperty(exports, "MorphingShape", { enumerable: true, get: function () { return MorphingShape_1.default; } });
// Animation utilities and hooks
var animation_1 = require("../../../utils/animation");
Object.defineProperty(exports, "resolveDuration", { enumerable: true, get: function () { return animation_1.resolveDuration; } });
Object.defineProperty(exports, "applyGoldenRatioDuration", { enumerable: true, get: function () { return animation_1.applyGoldenRatioDuration; } });
Object.defineProperty(exports, "prefersReducedMotion", { enumerable: true, get: function () { return animation_1.prefersReducedMotion; } });
Object.defineProperty(exports, "getAccessibleAnimationSettings", { enumerable: true, get: function () { return animation_1.getAccessibleAnimationSettings; } });
Object.defineProperty(exports, "getAccessibleAnimationConfig", { enumerable: true, get: function () { return animation_1.getAccessibleAnimationConfig; } });
var useAnimationConfig_1 = require("./useAnimationConfig");
Object.defineProperty(exports, "useAnimationConfig", { enumerable: true, get: function () { return useAnimationConfig_1.default; } });
