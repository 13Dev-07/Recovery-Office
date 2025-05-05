"use strict";
/**
 * Theme Configuration
 *
 * This file constructs the theme object used throughout the application.
 * It combines design tokens and sacred geometry constants to create a
 * harmonious and consistent visual language.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.lightTheme = void 0;
var sacred_geometry_1 = require("../../constants/sacred-geometry");
var tokens_1 = require("../tokens");
/**
 * The light theme configuration
 */
exports.lightTheme = {
    colors: {
        primary: tokens_1.colors.BASE_COLORS.green,
        secondary: tokens_1.colors.BASE_COLORS.sage,
        background: {
            50: tokens_1.colors.SEMANTIC_COLORS.background.brand,
            100: tokens_1.colors.SEMANTIC_COLORS.background.secondary,
            200: tokens_1.colors.SEMANTIC_COLORS.background.tertiary,
            300: (_a = tokens_1.colors.BASE_COLORS.green[50]) !== null && _a !== void 0 ? _a : 1,
            400: (_b = tokens_1.colors.BASE_COLORS.green[100]) !== null && _b !== void 0 ? _b : 1,
            500: (_c = tokens_1.colors.BASE_COLORS.sage[50]) !== null && _c !== void 0 ? _c : 1,
            600: (_d = tokens_1.colors.BASE_COLORS.sage[100]) !== null && _d !== void 0 ? _d : 1,
            700: tokens_1.colors.SEMANTIC_COLORS.background.dark,
            800: '#18231A',
            900: '#0F160F',
            950: '#070B07'
        },
        text: {
            primary: tokens_1.colors.SEMANTIC_COLORS.text.primary,
            secondary: tokens_1.colors.SEMANTIC_COLORS.text.secondary,
            tertiary: tokens_1.colors.SEMANTIC_COLORS.text.tertiary,
            light: tokens_1.colors.SEMANTIC_COLORS.text.inverse,
            dark: tokens_1.colors.SEMANTIC_COLORS.text.primary,
            disabled: tokens_1.colors.SEMANTIC_COLORS.text.disabled
        },
        accent: {
            gold: (_e = tokens_1.colors.BASE_COLORS.earth[500]) !== null && _e !== void 0 ? _e : 1,
            copper: (_f = tokens_1.colors.BASE_COLORS.sunrise[600]) !== null && _f !== void 0 ? _f : 1,
            teal: (_g = tokens_1.colors.BASE_COLORS.water[500]) !== null && _g !== void 0 ? _g : 1,
            lavender: '#A992E2',
            rose: '#E27992'
        },
        feedback: {
            success: {
                light: (_h = tokens_1.colors.BASE_COLORS.green[300]) !== null && _h !== void 0 ? _h : 1,
                main: tokens_1.colors.SEMANTIC_COLORS.state.success,
                dark: (_j = tokens_1.colors.BASE_COLORS.green[700]) !== null && _j !== void 0 ? _j : 1
            },
            warning: {
                light: (_k = tokens_1.colors.BASE_COLORS.sunrise[300]) !== null && _k !== void 0 ? _k : 1,
                main: tokens_1.colors.SEMANTIC_COLORS.state.warning,
                dark: (_l = tokens_1.colors.BASE_COLORS.sunrise[700]) !== null && _l !== void 0 ? _l : 1
            },
            error: {
                light: '#E57373',
                main: tokens_1.colors.SEMANTIC_COLORS.state.error,
                dark: '#B71C1C'
            },
            info: {
                light: (_m = tokens_1.colors.BASE_COLORS.water[300]) !== null && _m !== void 0 ? _m : 1,
                main: tokens_1.colors.SEMANTIC_COLORS.state.info,
                dark: (_o = tokens_1.colors.BASE_COLORS.water[700]) !== null && _o !== void 0 ? _o : 1
            }
        },
        gradients: {
            primary: "linear-gradient(45deg, ".concat((_p = tokens_1.colors.BASE_COLORS.green[600]) !== null && _p !== void 0 ? _p : 1, " 0%, ").concat((_q = tokens_1.colors.BASE_COLORS.green[400]) !== null && _q !== void 0 ? _q : 1, " 100%)"),
            secondary: "linear-gradient(45deg, ".concat((_r = tokens_1.colors.BASE_COLORS.sage[600]) !== null && _r !== void 0 ? _r : 1, " 0%, ").concat((_s = tokens_1.colors.BASE_COLORS.sage[400]) !== null && _s !== void 0 ? _s : 1, " 100%)"),
            light: "linear-gradient(45deg, ".concat(tokens_1.colors.SEMANTIC_COLORS.background.primary, " 0%, ").concat(tokens_1.colors.SEMANTIC_COLORS.background.secondary, " 100%)"),
            gold: "linear-gradient(45deg, ".concat((_t = tokens_1.colors.BASE_COLORS.earth[500]) !== null && _t !== void 0 ? _t : 1, " 0%, ").concat((_u = tokens_1.colors.BASE_COLORS.earth[300]) !== null && _u !== void 0 ? _u : 1, " 100%)")
        },
        alpha: {
            high: 0.87,
            medium: 0.6,
            low: 0.38,
            slight: 0.24,
            minimal: 0.12,
            ultraLight: 0.05
        }
    },
    spacing: {
        none: tokens_1.spacing.spacing.none,
        xxxs: tokens_1.spacing.spacing.xxxs,
        xxs: tokens_1.spacing.spacing.xxs,
        xs: tokens_1.spacing.spacing.xs,
        sm: tokens_1.spacing.spacing.sm,
        md: tokens_1.spacing.spacing.md,
        lg: tokens_1.spacing.spacing.lg,
        xl: tokens_1.spacing.spacing.xl,
        xxl: tokens_1.spacing.spacing.xxl,
        xxxl: tokens_1.spacing.spacing.xxxl,
        buttonPadding: tokens_1.spacing.spacing.md,
        inputPadding: tokens_1.spacing.spacing.md,
        cardPadding: tokens_1.spacing.spacing.lg,
        sectionPadding: tokens_1.spacing.spacing.xl,
        containerPadding: tokens_1.spacing.spacing.lg,
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
    },
    typography: {
        fontFamily: tokens_1.typography.fontFamily,
        fontSize: tokens_1.typography.fontSize,
        fontWeight: tokens_1.typography.fontWeight,
        lineHeight: tokens_1.typography.lineHeight,
        letterSpacing: tokens_1.typography.letterSpacing,
        textTransform: tokens_1.typography.textTransform,
        textDecoration: tokens_1.typography.textDecoration,
        fontStyle: tokens_1.typography.fontStyle
    },
    breakpoints: {
        values: tokens_1.breakpoints.breakpointValues,
        up: tokens_1.breakpoints.breakpoints.up,
        down: tokens_1.breakpoints.breakpoints.down,
        between: tokens_1.breakpoints.breakpoints.between,
        only: tokens_1.breakpoints.breakpoints.only,
        custom: tokens_1.breakpoints.breakpoints.custom,
        print: tokens_1.breakpoints.breakpoints.print,
        hover: tokens_1.breakpoints.breakpoints.hover,
        reducedMotion: tokens_1.breakpoints.breakpoints.reducedMotion,
        prefersDark: tokens_1.breakpoints.breakpoints.prefersDark,
        prefersLight: tokens_1.breakpoints.breakpoints.prefersLight
    },
    radius: {
        none: tokens_1.radius.radius.none,
        xs: tokens_1.radius.radius.xs,
        sm: tokens_1.radius.radius.sm,
        md: tokens_1.radius.radius.md,
        lg: tokens_1.radius.radius.lg,
        xl: tokens_1.radius.radius.xl,
        circle: tokens_1.radius.radius.circle,
        button: tokens_1.radius.radius.button,
        input: tokens_1.radius.radius.input,
        card: tokens_1.radius.radius.card,
        badge: tokens_1.radius.radius.badge,
        modal: tokens_1.radius.radius.modal,
        tooltip: tokens_1.radius.radius.tooltip,
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
    },
    shadows: tokens_1.shadows,
    sacredGeometry: {
        PHI: sacred_geometry_1.PHI,
        PHI_INVERSE: sacred_geometry_1.PHI_INVERSE,
        FIBONACCI: sacred_geometry_1.FIBONACCI,
        GOLDEN_SECTIONS: sacred_geometry_1.GOLDEN_SECTIONS,
        ANIMATION_TIMING: sacred_geometry_1.ANIMATION_TIMING,
        SACRED_EASINGS: sacred_geometry_1.SACRED_EASINGS
    },
    mode: 'light'
};
/**
 * The dark theme configuration
 * Note: This is a placeholder for future dark mode implementation
 */
exports.darkTheme = __assign(__assign({}, exports.lightTheme), { 
    // Dark theme color overrides would go here
    mode: 'dark' });
/**
 * Default theme export
 */
exports.default = exports.lightTheme;
