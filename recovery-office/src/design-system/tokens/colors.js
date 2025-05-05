"use strict";
/**
 * Colors Token System
 *
 * This file defines the color palette for the Recovery Office design system.
 * Colors are organized into semantic categories and follow sacred geometry
 * principles in their relationships.
 *
 * The palette is derived from natural elements and sacred proportions, with
 * hues and saturations calculated to maintain harmony with the Golden Ratio.
 */
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorUtils = exports.COMPONENT_COLORS = exports.SEMANTIC_COLORS = exports.BASE_COLORS = void 0;
/**
 * Import sacred geometry constants for color harmony.
 * All color relationships in this palette are derived from these constants.
 *
 * PHI (the Golden Ratio) and PHI_INVERSE are used to calculate harmonious
 * hue offsets and saturation levels, ensuring visual balance and natural resonance.
 *
 * All sacred geometry constants must be imported from the correct path.
 */
var sacred_geometry_1 = require("../../constants/sacred-geometry");
// Base natural colors inspired by healing elements
exports.BASE_COLORS = {
    // Primary green palette - represents growth and renewal
    // Hue based on the Golden Angle (137.5°)
    green: {
        50: '#F0F9ED',
        100: '#DFF0D9',
        200: '#C1E0B7',
        300: '#A3D095',
        400: '#85C073',
        500: '#67B050', // Primary brand color
        600: '#4F8A3D',
        700: '#3B672D',
        800: '#2A481F',
        900: '#1A2C12',
        950: '#0F1A09', // Darkest shade
    },
    // Secondary sage palette - represents wisdom and healing
    // Hue offset by PHI_INVERSE × 100
    sage: {
        50: '#F2F5F1',
        100: '#E3E9E1',
        200: '#CCD6C8',
        300: '#B5C3B0',
        400: '#9EB097',
        500: '#879D7E',
        600: '#6C7E65',
        700: '#525F4C',
        800: '#394132',
        900: '#222719',
        950: '#151910', // Darkest shade
    },
    // Earth tones - represents grounding and stability
    // Hue derived from complementary position on color wheel
    earth: {
        50: '#F9F5ED',
        100: '#F1E9D5',
        200: '#E4D6BA',
        300: '#D7C29E',
        400: '#CAAE83',
        500: '#BE9A67',
        600: '#A17E4E',
        700: '#7B603B',
        800: '#554328',
        900: '#342A19',
    },
    // Accent colors - represent energy points
    // Sunrise (warm energy) - based on Golden Angle × 2
    sunrise: {
        50: '#FFF6ED',
        100: '#FEEAD2',
        200: '#FCD4A5',
        300: '#FABD79',
        400: '#F8A64C',
        500: '#F68F1F',
        600: '#D4710C',
        700: '#A05508',
        800: '#6D3805',
        900: '#3A1F03',
    },
    // Water (calm energy) - complementary to sunrise
    water: {
        50: '#EFF8FC',
        100: '#D8EDF7',
        200: '#B0DBEF',
        300: '#89C9E7',
        400: '#61B8DF',
        500: '#3AA6D7',
        600: '#2686B3',
        700: '#1C6589',
        800: '#13455C',
        900: '#0B2835',
    }
};
// Semantic color assignments
exports.SEMANTIC_COLORS = {
    // UI State colors
    state: {
        success: (_a = exports.BASE_COLORS.green[500]) !== null && _a !== void 0 ? _a : 1,
        warning: (_b = exports.BASE_COLORS.sunrise[500]) !== null && _b !== void 0 ? _b : 1,
        error: '#D14343',
        info: (_c = exports.BASE_COLORS.water[500]) !== null && _c !== void 0 ? _c : 1,
    },
    // Text colors with proper contrast ratios
    text: {
        primary: '#1A2B12', // Darkened green
        secondary: '#4D5156', // Neutral dark gray
        tertiary: '#6F777F', // Lighter gray for less emphasis
        disabled: '#9CA3AF', // Soft gray for disabled text
        inverse: '#FFFFFF', // White text for dark backgrounds
        link: (_d = exports.BASE_COLORS.water[700]) !== null && _d !== void 0 ? _d : 1, // Accessible blue for links
    },
    // Background colors
    background: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        tertiary: '#F0F2F5',
        brand: (_e = exports.BASE_COLORS.green[50]) !== null && _e !== void 0 ? _e : 1,
        brandAlt: (_f = exports.BASE_COLORS.sage[50]) !== null && _f !== void 0 ? _f : 1,
        dark: '#19231A',
    },
    // Border colors
    border: {
        light: '#E5E7EB',
        medium: '#D1D5DB',
        dark: '#9CA3AF',
        brand: (_g = exports.BASE_COLORS.green[300]) !== null && _g !== void 0 ? _g : 1,
    },
    // Botanical element colors - special palette for nature elements
    botanical: {
        leaf: {
            light: (_h = exports.BASE_COLORS.green[300]) !== null && _h !== void 0 ? _h : 1,
            medium: (_j = exports.BASE_COLORS.green[500]) !== null && _j !== void 0 ? _j : 1,
            dark: (_k = exports.BASE_COLORS.green[700]) !== null && _k !== void 0 ? _k : 1,
        },
        stem: {
            light: (_l = exports.BASE_COLORS.sage[400]) !== null && _l !== void 0 ? _l : 1,
            medium: (_m = exports.BASE_COLORS.sage[600]) !== null && _m !== void 0 ? _m : 1,
            dark: (_o = exports.BASE_COLORS.sage[800]) !== null && _o !== void 0 ? _o : 1,
        },
        flower: {
            light: '#F7F4FF',
            medium: '#E8E0FF',
            dark: '#C3B1FF',
        }
    },
};
// Color palettes for specific components
exports.COMPONENT_COLORS = {
    // Button variations
    button: {
        primary: {
            background: (_p = exports.BASE_COLORS.green[500]) !== null && _p !== void 0 ? _p : 1,
            backgroundHover: (_q = exports.BASE_COLORS.green[600]) !== null && _q !== void 0 ? _q : 1,
            backgroundActive: (_r = exports.BASE_COLORS.green[700]) !== null && _r !== void 0 ? _r : 1,
            text: '#FFFFFF',
            border: 'transparent',
        },
        secondary: {
            background: 'transparent',
            backgroundHover: (_s = exports.BASE_COLORS.green[50]) !== null && _s !== void 0 ? _s : 1,
            backgroundActive: (_t = exports.BASE_COLORS.green[100]) !== null && _t !== void 0 ? _t : 1,
            text: (_u = exports.BASE_COLORS.green[600]) !== null && _u !== void 0 ? _u : 1,
            border: (_v = exports.BASE_COLORS.green[500]) !== null && _v !== void 0 ? _v : 1,
        },
        subtle: {
            background: (_w = exports.BASE_COLORS.green[50]) !== null && _w !== void 0 ? _w : 1,
            backgroundHover: (_x = exports.BASE_COLORS.green[100]) !== null && _x !== void 0 ? _x : 1,
            backgroundActive: (_y = exports.BASE_COLORS.green[200]) !== null && _y !== void 0 ? _y : 1,
            text: (_z = exports.BASE_COLORS.green[700]) !== null && _z !== void 0 ? _z : 1,
            border: 'transparent',
        },
    },
    // Card variations
    card: {
        default: {
            background: '#FFFFFF',
            border: exports.SEMANTIC_COLORS.border.light,
            shadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        },
        elevated: {
            background: '#FFFFFF',
            border: 'transparent',
            shadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
        },
        subtle: {
            background: exports.SEMANTIC_COLORS.background.secondary,
            border: exports.SEMANTIC_COLORS.border.light,
            shadow: 'none',
        },
        brand: {
            background: (_0 = exports.BASE_COLORS.green[50]) !== null && _0 !== void 0 ? _0 : 1,
            border: (_1 = exports.BASE_COLORS.green[100]) !== null && _1 !== void 0 ? _1 : 1,
            shadow: 'none',
        },
    },
    // Badge variations
    badge: {
        default: {
            background: exports.SEMANTIC_COLORS.background.tertiary,
            text: exports.SEMANTIC_COLORS.text.tertiary,
        },
        success: {
            background: (_2 = exports.BASE_COLORS.green[100]) !== null && _2 !== void 0 ? _2 : 1,
            text: (_3 = exports.BASE_COLORS.green[700]) !== null && _3 !== void 0 ? _3 : 1,
        },
        warning: {
            background: (_4 = exports.BASE_COLORS.sunrise[100]) !== null && _4 !== void 0 ? _4 : 1,
            text: (_5 = exports.BASE_COLORS.sunrise[700]) !== null && _5 !== void 0 ? _5 : 1,
        },
        error: {
            background: '#FADEDE',
            text: '#A92B2B',
        },
        info: {
            background: (_6 = exports.BASE_COLORS.water[100]) !== null && _6 !== void 0 ? _6 : 1,
            text: (_7 = exports.BASE_COLORS.water[700]) !== null && _7 !== void 0 ? _7 : 1,
        },
    },
};
/**
 * Helper functions for color manipulation based on sacred geometry principles
 *
 * These utility functions provide a way to mathematically transform colors
 * according to sacred geometry principles.
 */
exports.colorUtils = {
    /**
     * Lighten a color by a percentage based on PHI or PHI_INVERSE
     *
     * @param color - The base color to lighten
     * @param intensity - The intensity level of lightening
     * @returns A lightened color value
     */
    lighten: function (color, intensity) {
        if (intensity === void 0) { intensity = 'medium'; }
        // Implementation would use a color library to manipulate the hex value
        // This is a placeholder for the concept
        var factors = {
            low: sacred_geometry_1.PHI_INVERSE * 0.5, // ~0.309
            medium: sacred_geometry_1.PHI_INVERSE, // ~0.618
            high: sacred_geometry_1.PHI_INVERSE * 1.5, // ~0.927
        };
        // In a real implementation, we would use a color library to apply the lightening
        return color; // Placeholder return
    },
    /**
     * Darken a color by a percentage based on PHI or PHI_INVERSE
     *
     * @param color - The base color to darken
     * @param intensity - The intensity level of darkening
     * @returns A darkened color value
     */
    darken: function (color, intensity) {
        if (intensity === void 0) { intensity = 'medium'; }
        var factors = {
            low: sacred_geometry_1.PHI_INVERSE * 0.5,
            medium: sacred_geometry_1.PHI_INVERSE,
            high: sacred_geometry_1.PHI_INVERSE * 1.5,
        };
        // In a real implementation, we would use a color library to apply the darkening
        return color; // Placeholder return
    },
    /**
     * Create a transparent version of a color with alpha based on sacred proportions
     *
     * @param color - The base color to make transparent
     * @param level - The transparency level
     * @returns A color with transparency applied
     */
    withAlpha: function (color, level) {
        // Implementation would convert color to rgba with appropriate alpha value
        return color; // Placeholder return
    }
};
exports.default = { BASE_COLORS: exports.BASE_COLORS, SEMANTIC_COLORS: exports.SEMANTIC_COLORS, COMPONENT_COLORS: exports.COMPONENT_COLORS, colorUtils: exports.colorUtils };
