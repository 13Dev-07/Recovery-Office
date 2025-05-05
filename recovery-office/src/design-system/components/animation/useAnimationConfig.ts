import * as React from 'react';
import { useState, useEffect } from 'react';;
import { AnimationProps } from 'framer-motion';
import { prefersReducedMotion } from '../../../utils/animation';

import { SlideDirection } from './animation.d';

// Define these constants here since they're used in this file
export const sacredEasing = {
  standard: [0.618, 0, 0.382, 1],
  entrance: [0.309, 0, 0.618, 1],
  exit: [0.382, 0, 1, 1],
  easeIn: [0.618, 0, 1, 1],
  easeOut: [0, 0, 0.618, 1],
  easeInOut: [0.618, 0, 0.382, 1],
  bounce: [0.618, -0.185, 0.7, 1.3],
  anticipate: [0.8, -0.498, 0.2, 1.2]
} as const;

export const sacredDurations = {
  ultraFast: 0.062,
  fast: 0.124,
  standard: 0.309,
  slow: 0.618,
  verySlow: 1.0
} as const;

// Animation config types
type AnimationConfigType = 'fadeIn' | 'fadeOut' | 'scaleIn' | 'scaleOut' | 'slideIn' | 'slideOut' | 'rotate' | 'path';

interface AnimationConfigOptions {
  type: AnimationConfigType;
  direction?: SlideDirection;
  duration?: keyof typeof sacredDurations | number;
  easing?: keyof typeof sacredEasing;
  distance?: number;
  initialScale?: number;
  reducedMotionConfig?: Partial<AnimationProps>;
}

/**
 * Custom hook for creating sacred geometry based animations
 * Uses the golden ratio and Fibonacci sequence to create harmonious animation timing
 */
export const useAnimationConfig = (options: AnimationConfigOptions): AnimationProps => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion());
  }, []);
  
  const {
    type,
    direction = 'up',
    duration = 'standard',
    easing = 'standard',
    distance = 34, // Based on Fibonacci number
    initialScale = PHI_INVERSE,
    reducedMotionConfig
  } = options;
  
  // Calculate duration value from named duration or use number directly
  const durationValue = typeof duration === 'string' ? sacredDurations[duration] ?? 1 : duration;
  
  // Get easing value
  const easingValue = sacredEasing[easing] ?? 1;
  
  // Base configuration for all animations
  const baseConfig: AnimationProps = {
    initial: {},
    animate: {},
    exit: {},
    transition: {
      duration: durationValue,
      ease: easingValue
    }
  };
  
  if (!isReducedMotion) {
    // Choose animation type
    switch (type) {
      case 'fadeIn':
        baseConfig.initial = { opacity: 0 };
        baseConfig.animate = { opacity: 1 };
        baseConfig.exit = { opacity: 0 };
        break;
        
      case 'fadeOut':
        baseConfig.initial = { opacity: 1 };
        baseConfig.animate = { opacity: 0 };
        baseConfig.exit = { opacity: 1 };
        break;
        
      case 'scaleIn':
        baseConfig.initial = { opacity: 0, scale: initialScale };
        baseConfig.animate = { opacity: 1, scale: 1 };
        baseConfig.exit = { opacity: 0, scale: initialScale };
        break;
        
      case 'scaleOut':
        baseConfig.initial = { opacity: 1, scale: 1 };
        baseConfig.animate = { opacity: 0, scale: initialScale };
        baseConfig.exit = { opacity: 1, scale: 1 };
        break;
        
      case 'slideIn':
        baseConfig.initial = getSlideValues(direction, distance, 'initial');
        baseConfig.animate = getSlideValues(direction, distance, 'animate');
        baseConfig.exit = getSlideValues(direction, distance, 'exit');
        break;
        
      case 'slideOut':
        baseConfig.initial = getSlideValues(direction, distance, 'animate');
        baseConfig.animate = getSlideValues(direction, distance, 'initial');
        baseConfig.exit = getSlideValues(direction, distance, 'animate');
        break;
        
      case 'rotate':
        baseConfig.initial = { opacity: 0, rotate: -90 };
        baseConfig.animate = { opacity: 1, rotate: 0 };
        baseConfig.exit = { opacity: 0, rotate: 90 };
        break;
        
      case 'path':
        // Path animations are handled through SVG path properties
        baseConfig.transition = {
          ...baseConfig.transition,
          duration: durationValue * 1.5 // Path animations look better with slightly longer duration
        };
        break;
    }
  } else {
    // Reduced motion configuration - simple fade or no animation
    if (reducedMotionConfig) {
      return { ...baseConfig, ...reducedMotionConfig };
    }
    
    // Default reduced motion is a simple fade or immediate appearance
    if (type !== 'fadeIn') {
      baseConfig.initial = { opacity: 0 };
      baseConfig.animate = { opacity: 1 };
      baseConfig.exit = { opacity: 0 };
      baseConfig.transition = {
        ...baseConfig.transition,
        duration: durationValue * 0.5 // Shorter duration for reduced motion
      };
    }
  }
  
  return baseConfig;
};

/**
 * Helper function to get slide animation values based on direction
 */
const getSlideValues = (
  direction: SlideDirection,
  distance: number,
  state: 'initial' | 'animate' | 'exit'
) => {
  // Default values
  const values = { opacity: 0, x: 0, y: 0 };
  
  // Set direction-based transform
  if (state === 'initial' || state === 'exit') {
    switch (direction) {
      case 'up':
        values.y = distance;
        break;
      case 'down':
        values.y = -distance;
        break;
      case 'left':
        values.x = distance;
        break;
      case 'right':
        values.x = -distance;
        break;
    }
  }
  
  // Set opacity based on state
  if (state === 'animate') {
    values.opacity = 1;
  }
  
  return values;
};

export default useAnimationConfig; 








