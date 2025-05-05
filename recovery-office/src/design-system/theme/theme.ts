/**
 * Theme Configuration
 * 
 * This file constructs the theme object used throughout the application.
 * It combines design tokens and sacred geometry constants to create a
 * harmonious and consistent visual language.
 */

import {
  PHI,
  PHI_INVERSE,
  FIBONACCI,
  GOLDEN_SECTIONS,
  ANIMATION_TIMING,
  SACRED_EASINGS
} from "../../constants/sacred-geometry";

import {
  colors,
  spacing,
  typography,
  breakpoints,
  radius,
  shadows
} from '../tokens';

import { RecoveryOfficeTheme, ThemeColors, ThemeSpacing, ThemeTypography, ThemeBreakpoints, ThemeRadius, ThemeShadows, ThemeSacredGeometry } from '../types';

/**
 * The light theme configuration
 */
export const lightTheme: RecoveryOfficeTheme = {
  colors: {
    primary: colors.BASE_COLORS.green,
    secondary: colors.BASE_COLORS.sage,
    background: {
      50: colors.SEMANTIC_COLORS.background.brand,
      100: colors.SEMANTIC_COLORS.background.secondary,
      200: colors.SEMANTIC_COLORS.background.tertiary,
      300: colors.BASE_COLORS.green[50] ?? 1,
      400: colors.BASE_COLORS.green[100] ?? 1,
      500: colors.BASE_COLORS.sage[50] ?? 1,
      600: colors.BASE_COLORS.sage[100] ?? 1,
      700: colors.SEMANTIC_COLORS.background.dark,
      800: '#18231A',
      900: '#0F160F',
      950: '#070B07'
    },
    text: {
      primary: colors.SEMANTIC_COLORS.text.primary,
      secondary: colors.SEMANTIC_COLORS.text.secondary,
      tertiary: colors.SEMANTIC_COLORS.text.tertiary,
      light: colors.SEMANTIC_COLORS.text.inverse,
      dark: colors.SEMANTIC_COLORS.text.primary,
      disabled: colors.SEMANTIC_COLORS.text.disabled
    },
    accent: {
      gold: colors.BASE_COLORS.earth[500] ?? 1,
      copper: colors.BASE_COLORS.sunrise[600] ?? 1,
      teal: colors.BASE_COLORS.water[500] ?? 1,
      lavender: '#A992E2',
      rose: '#E27992'
    },
    feedback: {
      success: {
        light: colors.BASE_COLORS.green[300] ?? 1,
        main: colors.SEMANTIC_COLORS.state.success,
        dark: colors.BASE_COLORS.green[700] ?? 1
      },
      warning: {
        light: colors.BASE_COLORS.sunrise[300] ?? 1,
        main: colors.SEMANTIC_COLORS.state.warning,
        dark: colors.BASE_COLORS.sunrise[700] ?? 1
      },
      error: {
        light: '#E57373',
        main: colors.SEMANTIC_COLORS.state.error,
        dark: '#B71C1C'
      },
      info: {
        light: colors.BASE_COLORS.water[300] ?? 1,
        main: colors.SEMANTIC_COLORS.state.info,
        dark: colors.BASE_COLORS.water[700] ?? 1
      }
    },
    gradients: {
      primary: `linear-gradient(45deg, ${colors.BASE_COLORS.green[600] ?? 1} 0%, ${colors.BASE_COLORS.green[400] ?? 1} 100%)`,
      secondary: `linear-gradient(45deg, ${colors.BASE_COLORS.sage[600] ?? 1} 0%, ${colors.BASE_COLORS.sage[400] ?? 1} 100%)`,
      light: `linear-gradient(45deg, ${colors.SEMANTIC_COLORS.background.primary} 0%, ${colors.SEMANTIC_COLORS.background.secondary} 100%)`,
      gold: `linear-gradient(45deg, ${colors.BASE_COLORS.earth[500] ?? 1} 0%, ${colors.BASE_COLORS.earth[300] ?? 1} 100%)`
    },
    alpha: {
      high: 0.87,
      medium: 0.6,
      low: 0.38,
      slight: 0.24,
      minimal: 0.12,
      ultraLight: 0.05
    }
  } as ThemeColors,
  spacing: {
    none: spacing.spacing.none,
    xxxs: spacing.spacing.xxxs,
    xxs: spacing.spacing.xxs,
    xs: spacing.spacing.xs,
    sm: spacing.spacing.sm,
    md: spacing.spacing.md,
    lg: spacing.spacing.lg,
    xl: spacing.spacing.xl,
    xxl: spacing.spacing.xxl,
    xxxl: spacing.spacing.xxxl,
    buttonPadding: spacing.spacing.md,
    inputPadding: spacing.spacing.md,
    cardPadding: spacing.spacing.lg,
    sectionPadding: spacing.spacing.xl,
    containerPadding: spacing.spacing.lg,
    rem: {
      none: '0rem',
      xxxs: '0.0625rem',
      xxs: '0.125rem',
      xs: '0.1875rem',
      sm: '0.3125rem',
      md: '0.5rem',
      lg: '0.8125rem',
      xl: '1.3125rem',
      xxl: '2.125rem',
      xxxl: '3.4375rem'
    },
    cssVar: {
      none: 'var(--spacing-none)',
      xxxs: 'var(--spacing-xxxs)',
      xxs: 'var(--spacing-xxs)',
      xs: 'var(--spacing-xs)',
      sm: 'var(--spacing-sm)',
      md: 'var(--spacing-md)',
      lg: 'var(--spacing-lg)',
      xl: 'var(--spacing-xl)',
      xxl: 'var(--spacing-xxl)',
      xxxl: 'var(--spacing-xxxl)'
    }
  } as ThemeSpacing,
  typography: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    textTransform: typography.textTransform,
    textDecoration: typography.textDecoration,
    fontStyle: typography.fontStyle
  } as ThemeTypography,
  breakpoints: {
    values: breakpoints.breakpointValues,
    up: breakpoints.breakpoints.up,
    down: breakpoints.breakpoints.down,
    between: breakpoints.breakpoints.between,
    only: breakpoints.breakpoints.only,
    custom: breakpoints.breakpoints.custom,
    print: breakpoints.breakpoints.print,
    hover: breakpoints.breakpoints.hover,
    reducedMotion: breakpoints.breakpoints.reducedMotion,
    prefersDark: breakpoints.breakpoints.prefersDark,
    prefersLight: breakpoints.breakpoints.prefersLight
  } as ThemeBreakpoints,
  radius: {
    none: radius.radius.none,
    xs: radius.radius.xs,
    sm: radius.radius.sm,
    md: radius.radius.md,
    lg: radius.radius.lg,
    xl: radius.radius.xl,
    circle: radius.radius.circle,
    button: radius.radius.button,
    input: radius.radius.input,
    card: radius.radius.card,
    badge: radius.radius.badge,
    modal: radius.radius.modal,
    tooltip: radius.radius.tooltip,
    rem: {
      none: '0rem',
      xs: '0.125rem',
      sm: '0.1875rem',
      md: '0.3125rem',
      lg: '0.5rem',
      xl: '0.8125rem',
      circle: '50%'
    },
    cssVar: {
      none: 'var(--radius-none)',
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      circle: 'var(--radius-circle)'
    }
  } as ThemeRadius,
  shadows: shadows as ThemeShadows,
  sacredGeometry: {
    PHI,
    PHI_INVERSE,
    FIBONACCI,
    GOLDEN_SECTIONS,
    ANIMATION_TIMING,
    SACRED_EASINGS
  } as ThemeSacredGeometry,
  mode: 'light' as const
};

/**
 * The dark theme configuration
 * Note: This is a placeholder for future dark mode implementation
 */
export const darkTheme: RecoveryOfficeTheme = {
  ...lightTheme,
  // Dark theme color overrides would go here
  mode: 'dark' as const
};

/**
 * Default theme export
 */
export default lightTheme; 







