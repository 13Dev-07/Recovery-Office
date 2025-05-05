# Animation Components Guide

## Introduction

The animation system is a vital part of the Recovery Office design system, bringing life and dynamic motion to the website while reinforcing sacred geometry principles. This guide provides detailed instructions for implementing the animation components when rebuilding the project.

## Animation Philosophy

All animations in the Recovery Office project adhere to these core principles:

1. **Natural Rhythms**: Animations follow natural movement patterns based on sacred geometry
2. **Golden Ratio Timing**: Animation durations and delays incorporate the Golden Ratio
3. **Fibonacci Sequence**: Animation steps follow Fibonacci numbers for natural progression
4. **Sacred Easing**: Custom easing functions based on Golden Ratio points create naturally pleasing motion

## Core Animation Components

The Recovery Office design system includes these key animation components:

1. **FadeIn**: Gradually reveals content with fade animations
2. **SlideIn**: Animates content entering from a specific direction
3. **ScaleFade**: Combines scaling and fading for entrance/exit animations
4. **ScrollReveal**: Triggers animations when elements enter the viewport
5. **ParallaxLayer**: Creates depth through parallax scrolling effects
6. **FibonacciStagger**: Staggers child animations following Fibonacci timing
7. **PathMorph**: Animates SVG paths for botanical elements

## Animation Constants

All animations are built on sacred geometry constants in `sacred-geometry.ts`:

```typescript
// Animation timing based on Fibonacci sequence
export const ANIMATION_DURATIONS = {
  instant: FIBONACCI[3], // 2ms
  faster: FIBONACCI[5], // 5ms
  fast: FIBONACCI[6] * 10, // 80ms
  normal: FIBONACCI[7] * 10, // 130ms
  slow: FIBONACCI[8] * 10, // 210ms
  slower: FIBONACCI[9] * 10, // 340ms
  slowest: FIBONACCI[10] * 10, // 550ms
};

// Animation easing based on Golden Ratio
export const SACRED_EASINGS = {
  // Standard golden ratio cubic-bezier
  standard: [PHI_INVERSE, 0, 1 - PHI_INVERSE, 1], // [0.618, 0, 0.382, 1]
  
  // Golden ratio inspired easings
  easeIn: [PHI_INVERSE, 0, 1, 1], // [0.618, 0, 1, 1]
  easeOut: [0, 0, PHI_INVERSE, 1], // [0, 0, 0.618, 1]
  easeInOut: [PHI_INVERSE, 0, PHI_INVERSE, 1], // [0.618, 0, 0.618, 1]
  
  // Natural spring effect
  spring: [PHI_INVERSE, PHI_INVERSE - 1, 1 - PHI_INVERSE, 1], // [0.618, -0.382, 0.382, 1]
  
  // Anticipation and overshoot
  anticipate: [PHI_INVERSE, -0.5, 1, 1], // [0.618, -0.5, 1, 1]
  overshoot: [0, 0, PHI_INVERSE + 0.5, 1], // [0, 0, 1.118, 1]
};
```

## Example Component: FadeIn

The `FadeIn` component demonstrates core animation principles:

```typescript
// External imports
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Relative imports
import { PHI, PHI_INVERSE, SACRED_EASINGS } from '../../constants/sacred-geometry';

// Interface for styled-components with theme
interface ThemedProps {
  theme: DefaultTheme;
}

// Props for the FadeIn component
export interface FadeInProps {
  /** Children to animate */
  children: React.ReactNode;
  /** Whether the element is visible */
  isVisible?: boolean;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Easing function to use */
  easing?: keyof typeof SACRED_EASINGS;
  /** Whether to use the golden ratio for timing */
  useGoldenRatio?: boolean;
  /** Whether to stay mounted when invisible */
  stayMounted?: boolean;
  /** Additional class name */
  className?: string;
}

// Container for the animated content
const FadeContainer = styled(motion.div)<ThemedProps>`
  width: 100%;
`;

/**
 * FadeIn component for fade in animations
 */
const FadeIn: React.FC<FadeInProps> = ({
  children,
  isVisible = true,
  duration = 0.5,
  delay = 0,
  easing = 'golden',
  useGoldenRatio = true,
  stayMounted = false,
  className,
}) => {
  // Apply golden ratio to duration if enabled
  const effectiveDuration = useGoldenRatio ? duration * PHI_INVERSE : duration;

  // Animation variants
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {(isVisible || stayMounted) && (
        <FadeContainer
          className={className}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          variants={variants}
          transition={{
            duration: effectiveDuration,
            delay,
            ease: SACRED_EASINGS[easing],
          }}
          style={{ display: (!isVisible && stayMounted) ? 'none' : undefined }}
        >
          {children}
        </FadeContainer>
      )}
    </AnimatePresence>
  );
};

export default FadeIn;
```

## Example Component: ScrollReveal

The `ScrollReveal` component demonstrates viewport-based triggers:

```typescript
import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { PHI, PHI_INVERSE, SACRED_EASINGS, FIBONACCI } from '../../constants/sacred-geometry';

export interface ScrollRevealProps {
  /** Children to animate */
  children: React.ReactNode;
  /** Direction from which the element enters */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Distance to travel (in pixels) */
  distance?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Whether to use the golden ratio for timing */
  useGoldenRatio?: boolean;
  /** Threshold for intersection observer (0-1) */
  threshold?: number;
  /** Animation easing function */
  easing?: keyof typeof SACRED_EASINGS;
  /** Once or every time it comes into view */
  triggerOnce?: boolean;
  /** Additional class name */
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.7,
  delay = 0,
  useGoldenRatio = true,
  threshold = 0.1,
  easing = 'standard',
  triggerOnce = true,
  className,
}) => {
  // Apply golden ratio to duration if enabled
  const effectiveDuration = useGoldenRatio ? duration * PHI_INVERSE : duration;
  
  // Use intersection observer hook to detect when element is in view
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: `-${FIBONACCI[5]}px 0px`,
  });

  // Set initial and animate values based on direction
  const getDirectionalValues = () => {
    switch (direction) {
      case 'up':
        return { y: [distance, 0] };
      case 'down':
        return { y: [-distance, 0] };
      case 'left':
        return { x: [distance, 0] };
      case 'right':
        return { x: [-distance, 0] };
      case 'none':
        return { scale: [PHI_INVERSE, 1] };
      default:
        return { y: [distance, 0] };
    }
  };

  const directionalValues = getDirectionalValues();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...Object.fromEntries(Object.entries(directionalValues).map(([key, [initial]]) => [key, initial])) }}
      animate={{
        opacity: inView ? 1 : 0,
        ...Object.fromEntries(Object.entries(directionalValues).map(([key, [, target]]) => [key, inView ? target : null]))
      }}
      transition={{
        duration: effectiveDuration,
        delay,
        ease: SACRED_EASINGS[easing],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
```

## Animation Hooks

Custom hooks enhance animation flexibility:

```typescript
// useAnimationSequence.ts
import { useEffect, useState } from 'react';
import { PHI, FIBONACCI } from '../../constants/sacred-geometry';

/**
 * Hook for creating animation sequences based on Fibonacci timing
 */
export function useAnimationSequence(totalSteps: number, baseDelay = 0.1, totalDuration = 1) {
  const [currentStep, setCurrentStep] = useState(-1);

  useEffect(() => {
    // Calculate delays based on Fibonacci sequence
    const fibonacciDelays = Array.from({ length: totalSteps }, (_, i) => {
      // Use the ratio of current Fibonacci number to sum of sequence for proportional timing
      const fibSum = FIBONACCI.slice(0, totalSteps + 2).reduce((a, b) => a + b, 0);
      const fibValue = FIBONACCI[i + 2];
      return (fibValue / fibSum) * totalDuration;
    });

    let timeouts: number[] = [];
    
    // Cumulative delay for each step
    let cumulativeDelay = baseDelay;
    
    // Set timeouts for each step
    for (let i = 0; i < totalSteps; i++) {
      const timeout = window.setTimeout(() => {
        setCurrentStep(i);
      }, cumulativeDelay * 1000);
      
      timeouts.push(timeout);
      cumulativeDelay += fibonacciDelays[i];
    }
    
    // Clean up timeouts on unmount
    return () => {
      timeouts.forEach(id => window.clearTimeout(id));
    };
  }, [totalSteps, baseDelay, totalDuration]);
  
  return currentStep;
}
```

## Animation Integration with Styled Components

Sacred animation principles integrate with styled-components:

```typescript
import styled, { css, keyframes } from 'styled-components';
import { PHI, PHI_INVERSE, FIBONACCI } from '../../constants/sacred-geometry';

// Sacred geometry-based animation keyframes
const sacredFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(${PHI_INVERSE});
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const sacredPulse = keyframes`
  0% {
    transform: scale(1);
  }
  ${PHI_INVERSE * 100}% {
    transform: scale(${1 + (1 - PHI_INVERSE) * 0.1});
  }
  100% {
    transform: scale(1);
  }
`;

// Animation mixins
export const sacredAnimation = {
  fadeIn: css`
    animation: ${sacredFadeIn} ${FIBONACCI[7] * 0.01}s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
  `,
  pulse: css`
    animation: ${sacredPulse} ${FIBONACCI[8] * 0.01}s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1) infinite;
  `,
  // Other animation mixins...
};

// Usage example
const AnimatedElement = styled.div`
  ${props => props.$animate && sacredAnimation.fadeIn};
  ${props => props.$pulse && sacredAnimation.pulse};
`;
```

## Framer Motion Integration

The animation system uses Framer Motion for more complex animations:

```typescript
import { Variants } from 'framer-motion';
import { PHI, PHI_INVERSE, SACRED_EASINGS, FIBONACCI } from '../../constants/sacred-geometry';

// Shared animation variants
export const sacredVariants = {
  // Fade variants
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  
  // Scale variants
  scale: {
    hidden: { scale: PHI_INVERSE },
    visible: { scale: 1 },
  },
  
  // Combined fade and scale
  fadeScale: {
    hidden: { opacity: 0, scale: PHI_INVERSE },
    visible: { opacity: 1, scale: 1 },
  },
  
  // Slide variants
  slideUp: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  
  // Staggered children
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: PHI_INVERSE * 0.2,
      },
    },
  },
  
  // Staggered child
  staggerChild: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: FIBONACCI[7] * 0.01, // 0.13s
        ease: SACRED_EASINGS.standard,
      },
    },
  },
};

// Create transition with sacred timing
export const createSacredTransition = (duration = 0.5, delay = 0, easing: keyof typeof SACRED_EASINGS = 'standard') => ({
  duration: duration * PHI_INVERSE, // Apply golden ratio to duration
  delay,
  ease: SACRED_EASINGS[easing],
});
```

## Performance Optimization

Optimize animation performance with these strategies:

1. **GPU Acceleration**: Use `transform` and `opacity` for animations
   ```typescript
   // Preferred
   const fadeInVariants = {
     hidden: { opacity: 0, transform: 'translateY(20px)' },
     visible: { opacity: 1, transform: 'translateY(0)' },
   };
   
   // Avoid
   const fadeInVariants = {
     hidden: { opacity: 0, top: 20 },
     visible: { opacity: 1, top: 0 },
   };
   ```

2. **Reduced Motion**: Respect user preferences
   ```typescript
   import { useReducedMotion } from 'framer-motion';
   
   const MyAnimatedComponent = () => {
     const prefersReducedMotion = useReducedMotion();
     
     const variants = prefersReducedMotion
       ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
       : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
     
     return <motion.div variants={variants} />;
   };
   ```

3. **Debounced Scroll Animations**: Avoid performance issues with scroll animations
   ```typescript
   import { useEffect, useState } from 'react';
   import { FIBONACCI } from '../../constants/sacred-geometry';
   
   const useScrollPosition = () => {
     const [scrollY, setScrollY] = useState(0);
     
     useEffect(() => {
       let ticking = false;
       
       const handleScroll = () => {
         if (!ticking) {
           window.requestAnimationFrame(() => {
             setScrollY(window.scrollY);
             ticking = false;
           });
           ticking = true;
         }
       };
       
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
     }, []);
     
     return scrollY;
   };
   ```

## Accessibility Considerations

Make animations accessible for all users:

1. **Respect `prefers-reduced-motion`**
   ```typescript
   const reducedMotionHandler = {
     mount: () => {
       const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
       return mediaQuery.matches;
     },
   };
   ```

2. **Avoid Visual Overwhelm**: Limit concurrent animations
   ```typescript
   // Staged animations with Fibonacci delays for natural progression
   const staggeredEntrance = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: FIBONACCI[6] * 0.01, // 0.08s between each child
       },
     },
   };
   ```

3. **No Auto-Play for Large Animations**: Require user interaction for substantial animations
   ```typescript
   const LargeAnimation = () => {
     const [isPlaying, setIsPlaying] = useState(false);
     
     return (
       <>
         <button onClick={() => setIsPlaying(true)}>
           Play Animation
         </button>
         {isPlaying && <YourAnimatedComponent />}
       </>
     );
   };
   ```

## Best Practices

Follow these guidelines when implementing animations:

1. **Purpose-Driven Animation**: Use animation to guide users, not just for decoration
2. **Consistent Timing**: Use the predefined `ANIMATION_DURATIONS` constants
3. **Natural Easing**: Always use the sacred easing functions in `SACRED_EASINGS`
4. **Meaningful Transitions**: Design animations that communicate the relationships between UI states
5. **Subtle Over Flashy**: Prefer subtle animations that enhance without overwhelming
6. **Group Related Animations**: Use staggered animations for related elements
7. **Test on Low-End Devices**: Ensure animations perform well across device capabilities

## Conclusion

The animation system is a powerful tool in the Recovery Office design system that brings life and harmony to the user interface. By following sacred geometry principles, these animations create a naturally pleasing, trustworthy experience that reinforces the brand's values of renewal and stability. 