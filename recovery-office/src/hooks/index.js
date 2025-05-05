"use strict";
/**
 * Custom Hooks Index
 *
 * This file exports all custom hooks from a single entry point
 * to provide consistent imports throughout the application.
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
exports.useToast = exports.useBookingStepValidation = exports.useMediaQuery = exports.useParallaxScroll = exports.useAnimationSequence = exports.useReducedMotion = void 0;
var useReducedMotion_1 = require("./useReducedMotion");
Object.defineProperty(exports, "useReducedMotion", { enumerable: true, get: function () { return useReducedMotion_1.default; } });
var useAnimationSequence_1 = require("./useAnimationSequence");
Object.defineProperty(exports, "useAnimationSequence", { enumerable: true, get: function () { return useAnimationSequence_1.default; } });
var useParallaxScroll_1 = require("./useParallaxScroll");
Object.defineProperty(exports, "useParallaxScroll", { enumerable: true, get: function () { return useParallaxScroll_1.default; } });
var useMediaQuery_1 = require("./useMediaQuery");
Object.defineProperty(exports, "useMediaQuery", { enumerable: true, get: function () { return useMediaQuery_1.default; } });
var useBookingStepValidation_1 = require("./useBookingStepValidation");
Object.defineProperty(exports, "useBookingStepValidation", { enumerable: true, get: function () { return useBookingStepValidation_1.default; } });
var useToast_1 = require("./useToast");
Object.defineProperty(exports, "useToast", { enumerable: true, get: function () { return useToast_1.default; } });
// Named exports for better intellisense
__exportStar(require("./useAnimationSequence"), exports);
__exportStar(require("./useMediaQuery"), exports);
__exportStar(require("./useParallaxScroll"), exports);
__exportStar(require("./useReducedMotion"), exports);
__exportStar(require("./useBookingStepValidation"), exports);
__exportStar(require("./useToast"), exports);
