"use strict";
/**
 * Spacing Tokens
 *
 * This file defines the spacing values used in the Recovery Office design system.
 * All spacing values are derived from sacred geometry principles, using the Fibonacci sequence
 * for natural, harmonious proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacing = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
var sacredGeometry_1 = require("../../utils/sacredGeometry");
/**
 * Spacing tokens based on Fibonacci sequence for natural proportions
 */
exports.spacing = {
    // Raw pixel values directly from SACRED_SPACING
    values: sacred_geometry_1.SACRED_SPACING,
    // Convert to rem values for consistent scaling with text
    0: '0',
    1: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxxs), // 0.0625rem (1px)
    2: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxs), // 0.125rem (2px)
    3: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xs), // 0.1875rem (3px)
    4: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xs + 1), // 0.25rem (4px)
    5: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.sm), // 0.3125rem (5px)
    6: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.sm + 1), // 0.375rem (6px)
    8: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.md), // 0.5rem (8px)
    10: (0, sacredGeometry_1.pxToRem)(10), // 0.625rem (10px)
    12: (0, sacredGeometry_1.pxToRem)(12), // 0.75rem (12px)
    13: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.lg), // 0.8125rem (13px)
    16: (0, sacredGeometry_1.pxToRem)(16), // 1rem (16px)
    20: (0, sacredGeometry_1.pxToRem)(20), // 1.25rem (20px)
    21: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xl), // 1.3125rem (21px)
    24: (0, sacredGeometry_1.pxToRem)(24), // 1.5rem (24px)
    32: (0, sacredGeometry_1.pxToRem)(32), // 2rem (32px)
    34: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxl), // 2.125rem (34px)
    40: (0, sacredGeometry_1.pxToRem)(40), // 2.5rem (40px)
    48: (0, sacredGeometry_1.pxToRem)(48), // 3rem (48px)
    55: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxxl), // 3.4375rem (55px)
    56: (0, sacredGeometry_1.pxToRem)(56), // 3.5rem (56px)
    64: (0, sacredGeometry_1.pxToRem)(64), // 4rem (64px)
    72: (0, sacredGeometry_1.pxToRem)(72), // 4.5rem (72px)
    80: (0, sacredGeometry_1.pxToRem)(80), // 5rem (80px)
    89: (0, sacredGeometry_1.pxToRem)(89), // 5.5625rem (89px) (Fibonacci number)
    96: (0, sacredGeometry_1.pxToRem)(96), // 6rem (96px)
    // Named aliases for semantic use
    none: '0',
    xxxs: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxxs), // 0.0625rem (1px)
    xxs: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxs), // 0.125rem (2px)
    xs: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xs), // 0.1875rem (3px)
    sm: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.sm), // 0.3125rem (5px)
    md: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.md), // 0.5rem (8px)
    lg: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.lg), // 0.8125rem (13px)
    xl: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xl), // 1.3125rem (21px)
    xxl: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxl), // 2.125rem (34px)
    xxxl: (0, sacredGeometry_1.pxToRem)(sacred_geometry_1.SACRED_SPACING.xxxl), // 3.4375rem (55px)
};
exports.default = exports.spacing;
