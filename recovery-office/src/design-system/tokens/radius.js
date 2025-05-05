"use strict";
/**
 * Radius Tokens
 *
 * This file defines the border radius values used in the Recovery Office design system.
 * All radius values are derived from sacred geometry principles, using the Fibonacci sequence
 * for natural, harmonious proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.radius = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
/**
 * Radius scale derived from sacred geometry
 * Each value corresponds to a value in the Fibonacci sequence
 */
exports.radius = {
    // Raw pixel values directly from SACRED_RADIUS
    values: sacred_geometry_1.SACRED_RADIUS,
    // Convert to rem values for consistent scaling with text
    none: sacred_geometry_1.SACRED_RADIUS.none,
    xs: sacred_geometry_1.SACRED_RADIUS.xs,
    sm: sacred_geometry_1.SACRED_RADIUS.sm,
    md: sacred_geometry_1.SACRED_RADIUS.md,
    lg: sacred_geometry_1.SACRED_RADIUS.lg,
    xl: sacred_geometry_1.SACRED_RADIUS.xl,
    xxl: sacred_geometry_1.SACRED_RADIUS.xxl,
    circle: sacred_geometry_1.SACRED_RADIUS.circle,
    // Special values for specific components
    button: sacred_geometry_1.SACRED_RADIUS.md,
    input: sacred_geometry_1.SACRED_RADIUS.sm,
    card: sacred_geometry_1.SACRED_RADIUS.md,
    badge: sacred_geometry_1.SACRED_RADIUS.sm,
    modal: sacred_geometry_1.SACRED_RADIUS.md,
    tooltip: sacred_geometry_1.SACRED_RADIUS.sm,
    pill: '999px',
};
exports.default = exports.radius;
