/**
 * Sacred Geometry Utility Functions
 * 
 * This file provides utility functions for implementing sacred geometry principles
 * throughout the Recovery Office application. These functions help ensure consistent
 * application of the Golden Ratio and Fibonacci sequence.
 */

import { 
  PHI, 
  PHI_INVERSE, 
  FIBONACCI, 
  SACRED_SPACING,
  SACRED_TYPOGRAPHY,
  getFibonacciByIndex as getFibonacciByIndexOriginal
} from '../constants/sacred-geometry';

/**
 * Type for the FIBONACCI object from sacred-geometry.ts
 */
type FibonacciObj = typeof FIBONACCI;

/**
 * Helper function to get Fibonacci keys as numbers
 */
export const getFibonacciKeys = (): number[] => {
  return Object.keys(FIBONACCI).map(Number).sort((a, b) => a - b);
};

/**
 * Helper function to get Fibonacci values as an array
 */
export const getFibonacciValues = (): number[] => {
  const keys = getFibonacciKeys();
  return keys.map(key => FIBONACCI[key as keyof FibonacciObj]);
};

/**
 * Gets a Fibonacci value by its sequence index
 * @param index The index in the Fibonacci sequence
 * @returns The Fibonacci number at that index
 */
export const getFibonacciByIndex = getFibonacciByIndexOriginal;

/**
 * Calculates a Golden Ratio segment of a given value
 * 
 * @param value - The total value to divide according to the Golden Ratio
 * @param isMajor - Whether to return the major (61.8%) or minor (38.2%) segment
 * @returns The calculated segment value
 */
export const goldenRatioSegment = (value: number, isMajor = true): number => {
  return isMajor ? value * PHI_INVERSE : value * (1 - PHI_INVERSE);
};

/**
 * Scales a base value by the Golden Ratio a specified number of times
 * 
 * @param value - The base value to scale
 * @param steps - Number of times to multiply by the Golden Ratio (can be negative for division)
 * @returns The scaled value
 */
export const goldenRatioScale = (value: number, steps = 1): number => {
  return value * Math.pow(PHI, steps);
};

/**
 * Finds the closest Fibonacci number to a given value
 * 
 * @param value - The value to find the closest Fibonacci number for
 * @returns The closest Fibonacci number
 */
export const closestFibonacci = (value: number): number => {
  // Handle edge cases
  if (value <= 0) return getFibonacciByIndex(1);
  
  const fibValues = getFibonacciValues();
  const maxValue = fibValues[fibValues.length - 1];
  
  // Safety check to ensure maxValue is defined
  if (maxValue !== undefined && value >= maxValue) return maxValue;
  
  // Find the closest Fibonacci number
  let closest: number | undefined = fibValues[0] ?? 1;
  
  // Safety check to ensure closest is defined
  if (closest === undefined) return getFibonacciByIndex(1);
  
  let closestDiff = Math.abs(value - closest);
  
  for (let i = 1; i < fibValues.length; i++) {
    const fibValue = fibValues[i] ?? 1;
    
    // Skip undefined values (shouldn't happen, but being safe)
    if (fibValue === undefined) continue;
    
    const diff = Math.abs(value - fibValue);
    if (diff < closestDiff) {
      closest = fibValue;
      closestDiff = diff;
    }
  }
  
  // Final safety check
  return closest !== undefined ? closest : getFibonacciByIndex(1);
};

/**
 * Converts a pixel value to rem using the sacred typography base
 * 
 * @param px - The pixel value to convert
 * @returns The equivalent rem value as a string with 'rem' unit
 */
export const pxToRem = (px: number): string => {
  return `${px / SACRED_TYPOGRAPHY.baseFontSize}rem`;
};

/**
 * Creates spacing values based on Fibonacci sequence multiples
 * 
 * @param value - The base value (can be a number or a key of SACRED_SPACING)
 * @param multiplier - Number to multiply the spacing by
 * @returns The calculated spacing value in pixels
 */
export const createSpacing = (
  value: number | keyof typeof SACRED_SPACING, 
  multiplier = 1
): number => {
  let baseValue: number;
  
  if (typeof value === 'number') {
    baseValue = value;
  } else {
    // Get the value safely from SACRED_SPACING
    const spacingValue = SACRED_SPACING[value] ?? 1;
    
    // If the value is an object (like buttonPadding), use default md value
    if (typeof spacingValue === 'object' && spacingValue !== null) {
      baseValue = spacingValue.md;
    } else {
      baseValue = spacingValue as number;
    }
  }
    
  return baseValue * multiplier;
};

/**
 * Calculates a position along a Golden Spiral
 * 
 * @param angle - The angle in radians
 * @param growthFactor - Growth factor for the spiral (default: Golden Ratio)
 * @returns Coordinates {x, y} along the spiral
 */
export const goldenSpiralPosition = (
  angle: number, 
  growthFactor = PHI
): { x: number; y: number } => {
  const radius = Math.pow(growthFactor, angle / (2 * Math.PI));
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};

/**
 * Generates an array of positions along a Golden Spiral
 * 
 * @param count - Number of points to generate
 * @param maxAngle - Maximum angle in radians (default: 4π, two full rotations)
 * @returns Array of {x, y} coordinates along the spiral
 */
export const generateGoldenSpiralPoints = (
  count: number, 
  maxAngle = 4 * Math.PI
): Array<{ x: number; y: number }> => {
  // Ensure we have at least 2 points to avoid division by zero
  const safeCount = Math.max(2, count);
  const points = [];
  
  for (let i = 0; i < safeCount; i++) {
    const angle = (i / (safeCount - 1)) * maxAngle;
    points.push(goldenSpiralPosition(angle));
  }
  
  return points;
};

/**
 * Creates a cubic bezier curve based on sacred geometry
 * 
 * @param type - The type of easing to create
 * @returns CSS cubic-bezier function string
 */
export const createSacredBezier = (
  type: 'standard' | 'easeIn' | 'easeOut' | 'botanical'
): string => {
  const beziers = {
    standard: [PHI_INVERSE, 0, 1 - PHI_INVERSE, 1],
    easeIn: [PHI_INVERSE, 0, 1, 1],
    easeOut: [0, 0, 1 - PHI_INVERSE, 1],
    botanical: [PHI_INVERSE, -PHI_INVERSE, 1 - PHI_INVERSE, PHI],
  };
  
  const [x1, y1, x2, y2] = beziers[type] ?? 1;
  return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
};

/**
 * Calculates values to achieve the Golden Rectangle
 * 
 * @param width - The width of the rectangle
 * @returns The height needed to create a Golden Rectangle
 */
export const goldenRectangleHeight = (width: number): number => {
  return width / PHI;
};

/**
 * Calculates whether a position falls at a "sacred point" within a container
 * Used for determining optimal placement of key elements
 * 
 * @param x - X position (0-1 representing percentage across width)
 * @param y - Y position (0-1 representing percentage across height)
 * @param tolerance - Acceptable deviation from exact golden ratio points
 * @returns Whether the position is at a sacred point
 */
export const isSacredPoint = (
  x: number, 
  y: number, 
  tolerance = 0.05
): boolean => {
  // Check if point is at a golden ratio position on either axis
  const sacredXPoints = [PHI_INVERSE, 1 - PHI_INVERSE, 0.5];
  const sacredYPoints = [PHI_INVERSE, 1 - PHI_INVERSE, 0.5];
  
  const isXSacred = sacredXPoints.some(point => Math.abs(x - point) <= tolerance);
  const isYSacred = sacredYPoints.some(point => Math.abs(y - point) <= tolerance);
  
  return isXSacred && isYSacred;
};

/**
 * Calculates Fibonacci-based grid column span values
 * 
 * @param totalColumns - Total number of columns in the grid
 * @returns An object with optimal column span values
 */
export const fibonacciGridColumns = (totalColumns: number): Record<string, number> => {
  const fibValues = getFibonacciValues();
  
  // Find the largest Fibonacci number less than or equal to totalColumns
  let maxFibIndex = 0;
  for (let i = 0; i < fibValues.length; i++) {
    const fibValue = fibValues[i] ?? 1;
    // Skip undefined values (shouldn't happen, but being safe)
    if (fibValue === undefined) continue;
    
    if (fibValue <= totalColumns) {
      maxFibIndex = i;
    } else {
      break;
    }
  }
  
  // Helper function to safely get Fibonacci values
  const safeGetFib = (index: number, fallback: number): number => {
    const value = fibValues[index] ?? 1;
    return value !== undefined ? value : fallback;
  };
  
  // Return optimal column spans based on Fibonacci sequence
  return {
    xs: safeGetFib(Math.max(0, maxFibIndex - 5), 1),
    sm: safeGetFib(Math.max(0, maxFibIndex - 4), 1),
    md: safeGetFib(Math.max(0, maxFibIndex - 3), 2),
    lg: safeGetFib(Math.max(0, maxFibIndex - 2), 3),
    xl: safeGetFib(Math.max(0, maxFibIndex - 1), 5),
    full: totalColumns,
  };
};

/**
 * Safely retrieve a Fibonacci number by index
 * 
 * This function handles cases where the requested Fibonacci index
 * is not explicitly defined in the FIBONACCI object.
 * 
 * @param index - The Fibonacci index to retrieve
 * @returns The corresponding Fibonacci number
 */
export const getFibonacci = (index: number): number => {
  const fibKeys = getFibonacciKeys();
  
  // If index exists in FIBONACCI object, return it directly
  if (fibKeys.includes(index)) {
    return FIBONACCI[index as keyof FibonacciObj];
  }
  
  // For indices smaller than our smallest defined Fibonacci index
  const smallestKey = fibKeys[0] ?? 1;
  if (smallestKey !== undefined && index < smallestKey) {
    return Math.max(1, Math.round(Math.pow(PHI, index) / Math.sqrt(5)));
  }
  
  // For indices larger than our largest defined Fibonacci index
  const largestKey = fibKeys.length > 0 ? fibKeys[fibKeys.length - 1] : undefined;
  if (largestKey !== undefined && index > largestKey) {
    return Math.round(Math.pow(PHI, index) / Math.sqrt(5));
  }
  
  // For indices in between our defined values
  // Find closest lower key
  let closestLowerIndex: number | undefined = undefined;
  for (const key of fibKeys) {
    if (key <= index) {
      closestLowerIndex = key;
    } else {
      break;
    }
  }
  
  if (closestLowerIndex === undefined) {
    return 1; // Default to 1 if no lower index found
  }

  // Find closest upper key
  const upperIndexPosition = fibKeys.indexOf(closestLowerIndex) + 1;
  const closestUpperIndex = fibKeys[upperIndexPosition] ?? 1;
  
  // If the index is exactly between two Fibonacci indices, return the average
  if (closestUpperIndex !== undefined && 
      (index - closestLowerIndex === closestUpperIndex - index)) {
    // Return a value proportional to the golden ratio
    const lowerValue = FIBONACCI[closestLowerIndex as keyof FibonacciObj];
    const upperValue = FIBONACCI[closestUpperIndex as keyof FibonacciObj];
    return Math.round((lowerValue + upperValue) / 2);
  }
  
  // Otherwise return the closer value
  return FIBONACCI[closestLowerIndex as keyof FibonacciObj];
};

/**
 * Get an array of Fibonacci numbers within a range
 * 
 * @param start - Starting index (inclusive)
 * @param end - Ending index (inclusive)
 * @returns Array of Fibonacci numbers
 */
export const getFibonacciRange = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(getFibonacci(i));
  }
  return result;
};

/**
 * Get a subset of the Fibonacci sequence as an array
 * 
 * This is a replacement for the non-existent FIBONACCI.slice() method
 * 
 * @param start - Starting index (inclusive)
 * @param end - Ending index (exclusive)
 * @returns Array of Fibonacci numbers
 */
export const fibonacciSlice = (start: number, end: number): number[] => {
  return getFibonacciRange(start, end - 1);
};

/**
 * Calculate the Golden Ratio of a value
 * 
 * @param value - The value to calculate the golden ratio of
 * @returns The golden ratio of the value
 */
export const goldenRatio = (value: number): number => {
  return value * PHI;
};

/**
 * Calculate the inverse Golden Ratio of a value
 * 
 * @param value - The value to calculate the inverse golden ratio of
 * @returns The inverse golden ratio of the value
 */
export const inverseGoldenRatio = (value: number): number => {
  return value * PHI_INVERSE;
};

/**
 * Calculate a value using the golden section
 * 
 * @param total - Total value to divide according to golden ratio
 * @param useMajor - Whether to return the major (61.8%) or minor (38.2%) section
 * @returns The calculated section value
 */
export const goldenSection = (total: number, useMajor = true): number => {
  return useMajor ? total * PHI_INVERSE : total * (1 - PHI_INVERSE);
};

/**
 * Calculate spacing using the Fibonacci sequence
 * 
 * @param level - Spacing level (1-5, where higher means more space)
 * @returns Spacing value in pixels
 */
export const fibonacciSpacing = (level: number): number => {
  // Map level to appropriate Fibonacci index
  const index = Math.min(Math.max(1, level + 2), 10);
  return getFibonacci(index);
};

/**
 * Get a sacred spacing value by key or with a default fallback
 * 
 * @param key - The spacing key to retrieve
 * @param defaultValue - Default value if key doesn't exist
 * @returns The sacred spacing value
 */
export const getSacredSpacing = (
  key: keyof typeof SACRED_SPACING | string, 
  defaultValue?: number
): number => {
  // Type guard to check if key exists in SACRED_SPACING
  const isValidKey = (k: string): k is keyof typeof SACRED_SPACING => 
    Object.prototype.hasOwnProperty.call(SACRED_SPACING, k);
    
  if (isValidKey(key)) {
    const spacingValue = SACRED_SPACING[key] ?? 1;
    
    // If the value is an object (like buttonPadding), use default md value
    if (typeof spacingValue === 'object' && spacingValue !== null) {
      return spacingValue.md;
    } 
    
    // Otherwise return the number value
    return spacingValue as number;
  }
  
  return defaultValue !== undefined ? defaultValue : SACRED_SPACING.md;
};

/**
 * Applies golden ratio to value, increasing it by phi
 * @param value The base value to scale
 * @returns Value multiplied by phi
 */
export const goldenScale = (value: number): number => value * PHI;

/**
 * Applies inverse golden ratio to value, decreasing it by phi inverse
 * @param value The base value to scale
 * @returns Value multiplied by phi inverse
 */
export const goldenInverseScale = (value: number): number => value * PHI_INVERSE;

/**
 * Converts px values to rem
 * @param px Pixel value
 * @returns Equivalent rem value as string with 'rem' suffix
 */
export const toRem = (px: number): string => `${px / 16}rem`;

/**
 * Converts a Fibonacci index to rem
 * @param index Fibonacci sequence index
 * @returns Equivalent rem value as string with 'rem' suffix
 */
export const fibonacciToRem = (index: number): string => {
  const fibValue = getFibonacciByIndex(index);
  return toRem(fibValue);
};

export {
  PHI,
  PHI_INVERSE,
  FIBONACCI
}; 





