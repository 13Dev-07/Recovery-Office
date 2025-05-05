/**
 * MorphingShape Component
 * 
 * A component that animates between different SVG paths using sacred geometry principles
 * for timing and easing. Great for creating fluid, organic transitions between shapes.
 * 
 * This component uses golden ratio (PHI) for natural, harmonious animation
 * timing and easing functions derived from sacred geometry.
 */

import * as React from 'react';
import { useState, useEffect } from 'react';;
import { motion, AnimatePresence, Variants, useAnimate } from 'framer-motion';
import Box from '../layout/Box';
import { 
  PHI, 
  PHI_INVERSE, 
  SACRED_EASINGS 
} from '../../../constants/sacred-geometry';
import { resolveDuration, applyGoldenRatioDuration } from '../../../utils/animation';

export interface MorphingShapeProps extends Omit<React.ComponentProps<typeof Box>, 'as' | 'ref'> {
  /**
   * Array of SVG path strings to morph between
   */
  paths: string[];
  
  /**
   * Active path index
   * @default 0
   */
  activeIndex?: number;
  
  /**
   * Animation duration in seconds
   * @default 'normal'
   */
  duration?: 'faster' | 'fast' | 'normal' | 'slow' | 'slower' | number;
  
  /**
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
  
  /**
   * Easing function to use
   * @default 'standard'
   */
  easing?: keyof typeof SACRED_EASINGS;
  
  /**
   * Whether to use golden ratio applied to duration
   * @default true
   */
  useGoldenRatio?: boolean;
  
  /**
   * Fill color of the SVG
   * @default "currentColor"
   */
  fill?: string;
  
  /**
   * Stroke color of the SVG
   * @default "none"
   */
  stroke?: string;
  
  /**
   * Stroke width of the SVG
   * @default 0
   */
  strokeWidth?: number;
  
  /**
   * SVG viewBox attribute
   * @default "0 0 100 100"
   */
  viewBox?: string;
  
  /**
   * Whether to loop through shapes
   * @default false
   */
  loop?: boolean;
  
  /**
   * Interval between shape changes when looping (in seconds)
   * @default 3
   */
  loopInterval?: number;
}

/**
 * MorphingShape Component with ref forwarding
 * 
 * Animates between SVG paths with sacred geometry timing
 */
export const MorphingShape = React.forwardRef<HTMLDivElement, MorphingShapeProps>(
  ({ 
    paths,
    activeIndex = 0,
    duration = 'normal',
    delay = 0,
    easing = 'standard',
    useGoldenRatio = true,
    fill = "currentColor",
    stroke = "none",
    strokeWidth = 0,
    viewBox = "0 0 100 100",
    loop = false,
    loopInterval = 3,
    ...rest
  }, ref) => {
    // State to track current and next paths for animation
    const [currentPathIndex, setCurrentPathIndex] = useState(activeIndex);
    const [scope, animate] = useAnimate();
    
    // Convert duration string to numerical value if needed
    const durationValue = resolveDuration(duration);
    
    // Apply golden ratio to duration for natural timing
    const effectiveDuration = useGoldenRatio 
      ? applyGoldenRatioDuration(durationValue) 
      : durationValue;
    
    // Handle prop changes
    useEffect(() => {
      if (activeIndex !== currentPathIndex) {
        setCurrentPathIndex(activeIndex);
      }
    }, [activeIndex, currentPathIndex]);
    
    // Handle path morphing animation
    useEffect(() => {
      if (paths.length <= 1) return;
      
      const currentPath = paths[currentPathIndex % paths.length];
      
      // Animate the path morphing using sacred geometry timing
      animate("path", 
        { d: currentPath }, 
        { 
          duration: effectiveDuration,
          delay,
          ease: SACRED_EASINGS[easing as keyof typeof SACRED_EASINGS],
        }
      );
    }, [currentPathIndex, paths, animate, effectiveDuration, delay, easing]);
    
    // Set up looping if enabled
    useEffect(() => {
      if (!loop || paths.length <= 1) return;
      
      // Use Fibonacci-based interval timing
      const interval = setInterval(() => {
        setCurrentPathIndex(prevIndex => (prevIndex + 1) % paths.length);
      }, loopInterval * 1000);
      
      return () => clearInterval(interval);
    }, [loop, loopInterval, paths.length]);
    
    // If no paths provided, render nothing
    if (!paths.length) return null;
    
    return (
      <Box
        ref={ref}
        {...rest}
      >
        <motion.svg
          ref={scope}
          viewBox={viewBox}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d={paths[currentPathIndex % paths.length]}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            initial={false}
          />
        </motion.svg>
      </Box>
    );
  }
);

MorphingShape.displayName = 'MorphingShape';

export default MorphingShape; 







