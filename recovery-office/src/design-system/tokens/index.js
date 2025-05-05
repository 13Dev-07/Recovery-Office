"use strict";
/**
 * Design System Tokens
 *
 * This file exports all design tokens from a single entry point
 * to provide consistent imports across the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadows = exports.radius = exports.breakpoints = exports.typography = exports.spacing = exports.colors = void 0;
exports.colors = require("./colors");
exports.spacing = require("./spacing");
exports.typography = require("./typography");
exports.breakpoints = require("./breakpoints");
exports.radius = require("./radius");
var shadows_1 = require("./shadows");
Object.defineProperty(exports, "shadows", { enumerable: true, get: function () { return shadows_1.default; } });
