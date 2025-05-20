/**
 * Premium Color Tokens
 * 
 * This file defines premium color tokens for the Recovery Office redesign.
 * The palette is designed specifically for a professional financial recovery service.
 */

// Base color palette
export const PREMIUM_BASE_COLORS = {
  // Primary: Deep Navy Blue - conveys trust and stability
  navy: {
    50: '#E6EBF4',
    100: '#C1CFDF',
    200: '#97AFC9',
    300: '#6D8FB3',
    400: '#4E78A0',
    500: '#0A214F',  // Primary brand color
    600: '#091D47',
    700: '#07183D',
    800: '#051433',
    900: '#030B24',
    950: '#02081C'
  },
  
  // Secondary: Light Gray - creates clean, professional space
  gray: {
    50: '#F9FAFC', // Lightest
    100: '#F5F7FA', // Main secondary color
    200: '#EDF0F5',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748', // Main text color
    900: '#1A202C',
    950: '#0F131B'
  },
  
  // Accent: Gold - suggests premium service
  gold: {
    50: '#FBF8E9',
    100: '#F6EEC7',
    200: '#F1E4A5',
    300: '#ECDA82',
    400: '#E7D15F',
    500: '#D4AF37', // Main accent color
    600: '#BF9A22',
    700: '#A9861E',
    800: '#93721A',
    900: '#7C5D15',
    950: '#634A12'
  },
  
  // Supporting: Steel Blue - for secondary elements
  steelBlue: {
    50: '#EAEFF5',
    100: '#CCDAEA',
    200: '#A9C1DC',
    300: '#85A7CE',
    400: '#6294C3',
    500: '#4A6FA5', // Main supporting color
    600: '#3F5C8C',
    700: '#344A73',
    800: '#29385A',
    900: '#1E2741',
    950: '#141A2C'
  }
};

// Semantic color mappings
export const PREMIUM_SEMANTIC_COLORS = {
  text: {
    primary: PREMIUM_BASE_COLORS.gray[800],
    secondary: PREMIUM_BASE_COLORS.gray[600],
    tertiary: PREMIUM_BASE_COLORS.gray[500],
    inverse: PREMIUM_BASE_COLORS.gray[50],
    disabled: PREMIUM_BASE_COLORS.gray[400],
    highlight: PREMIUM_BASE_COLORS.gold[500],
    link: PREMIUM_BASE_COLORS.steelBlue[500],
    linkHover: PREMIUM_BASE_COLORS.steelBlue[600]
  },
  background: {
    primary: '#FFFFFF',
    secondary: PREMIUM_BASE_COLORS.gray[50],
    tertiary: PREMIUM_BASE_COLORS.gray[100],
    inverse: PREMIUM_BASE_COLORS.navy[900],
    dark: PREMIUM_BASE_COLORS.navy[800],
    brand: PREMIUM_BASE_COLORS.gray[50],
    accent: PREMIUM_BASE_COLORS.gold[50],
    paper: '#FFFFFF'
  },
  border: {
    light: PREMIUM_BASE_COLORS.gray[200],
    medium: PREMIUM_BASE_COLORS.gray[300],
    dark: PREMIUM_BASE_COLORS.gray[400],
    accent: PREMIUM_BASE_COLORS.gold[300]
  },
  state: {
    info: PREMIUM_BASE_COLORS.steelBlue[500],
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    hover: {
      primary: PREMIUM_BASE_COLORS.navy[600],
      secondary: PREMIUM_BASE_COLORS.gray[200],
      accent: PREMIUM_BASE_COLORS.gold[600]
    },
    active: {
      primary: PREMIUM_BASE_COLORS.navy[700],
      secondary: PREMIUM_BASE_COLORS.gray[300],
      accent: PREMIUM_BASE_COLORS.gold[700]
    },
    focus: {
      outline: PREMIUM_BASE_COLORS.steelBlue[300]
    }
  }
};

// Combined premium colors export
export const PREMIUM_COLORS = {
  BASE_COLORS: PREMIUM_BASE_COLORS,
  SEMANTIC_COLORS: PREMIUM_SEMANTIC_COLORS
};

export default PREMIUM_COLORS; 