/**
 * Spacing Tokens
 * 
 * This file defines the spacing values used in the Recovery Office design system.
 * All spacing values are derived from sacred geometry principles, using the Fibonacci sequence
 * for natural, harmonious proportions.
 */

import { FIBONACCI, SACRED_SPACING } from "../../constants/sacred-geometry";
import { pxToRem } from "../../utils/sacredGeometry";

/**
 * Spacing tokens based on Fibonacci sequence for natural proportions
 */
export const spacing = {
  // Raw pixel values directly from SACRED_SPACING
  values: SACRED_SPACING,
  
  // Convert to rem values for consistent scaling with text
  0: '0',
  1: pxToRem(SACRED_SPACING.xxxs),  // 0.0625rem (1px)
  2: pxToRem(SACRED_SPACING.xxs),   // 0.125rem (2px)
  3: pxToRem(SACRED_SPACING.xs),    // 0.1875rem (3px)
  4: pxToRem(SACRED_SPACING.xs + 1), // 0.25rem (4px)
  5: pxToRem(SACRED_SPACING.sm),    // 0.3125rem (5px)
  6: pxToRem(SACRED_SPACING.sm + 1), // 0.375rem (6px)
  8: pxToRem(SACRED_SPACING.md),    // 0.5rem (8px)
  10: pxToRem(10),                  // 0.625rem (10px)
  12: pxToRem(12),                  // 0.75rem (12px)
  13: pxToRem(SACRED_SPACING.lg),   // 0.8125rem (13px)
  16: pxToRem(16),                  // 1rem (16px)
  20: pxToRem(20),                  // 1.25rem (20px)
  21: pxToRem(SACRED_SPACING.xl),   // 1.3125rem (21px)
  24: pxToRem(24),                  // 1.5rem (24px)
  32: pxToRem(32),                  // 2rem (32px)
  34: pxToRem(SACRED_SPACING.xxl),  // 2.125rem (34px)
  40: pxToRem(40),                  // 2.5rem (40px)
  48: pxToRem(48),                  // 3rem (48px)
  55: pxToRem(SACRED_SPACING.xxxl), // 3.4375rem (55px)
  56: pxToRem(56),                  // 3.5rem (56px)
  64: pxToRem(64),                  // 4rem (64px)
  72: pxToRem(72),                  // 4.5rem (72px)
  80: pxToRem(80),                  // 5rem (80px)
  89: pxToRem(89),                  // 5.5625rem (89px) (Fibonacci number)
  96: pxToRem(96),                  // 6rem (96px)
  
  // Named aliases for semantic use
  none: '0',
  xxxs: pxToRem(SACRED_SPACING.xxxs), // 0.0625rem (1px)
  xxs: pxToRem(SACRED_SPACING.xxs),   // 0.125rem (2px)
  xs: pxToRem(SACRED_SPACING.xs),     // 0.1875rem (3px)
  sm: pxToRem(SACRED_SPACING.sm),     // 0.3125rem (5px)
  md: pxToRem(SACRED_SPACING.md),     // 0.5rem (8px)
  lg: pxToRem(SACRED_SPACING.lg),     // 0.8125rem (13px)
  xl: pxToRem(SACRED_SPACING.xl),     // 1.3125rem (21px)
  xxl: pxToRem(SACRED_SPACING.xxl),   // 2.125rem (34px)
  xxxl: pxToRem(SACRED_SPACING.xxxl), // 3.4375rem (55px)
};

export default spacing; 







