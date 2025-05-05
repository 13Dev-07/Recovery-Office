/**
 * General Types
 * 
 * This file contains shared type definitions used throughout the application.
 * These types incorporate sacred geometry principles where applicable.
 */

import { ReactNode } from 'react';

// Component common props
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

// Sacred geometry measurement
export type SacredUnit = 'px' | 'rem' | '%' | 'vh' | 'vw' | 'ratio';

export interface SacredMeasurement {
  value: number;
  unit: SacredUnit;
}

// Sacred ratio measurement with reference value
export interface SacredRatioMeasurement {
  value: number;
  unit: 'ratio';
  reference?: number;
}

// Combined sacred measurement type
export type SacredDimension = 
  | { value: number; unit: 'px' | 'rem' | '%' | 'vh' | 'vw' }
  | SacredRatioMeasurement;

// Children prop type
export interface WithChildren {
  children: ReactNode;
}

// Sacred position
export interface SacredPosition {
  x: SacredDimension;
  y: SacredDimension;
}

// Direction for animations and layouts
export type Direction = 'up' | 'down' | 'left' | 'right';

// Responsive breakpoint keys
export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Responsive values
export type ResponsiveValue<T> = {
  [key in BreakpointKey]?: T;
} & {
  base: T;
};

// Size variants
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Type guard for responsive value
export const isResponsiveValue = <T>(value: T | ResponsiveValue<T>): value is ResponsiveValue<T> => {
  return typeof value === 'object' && value !== null && 'base' in value;
};

// Type guard for sacred ratio measurement
export const isSacredRatioMeasurement = (
  measurement: SacredDimension
): measurement is SacredRatioMeasurement => {
  return measurement.unit === 'ratio';
}; 





