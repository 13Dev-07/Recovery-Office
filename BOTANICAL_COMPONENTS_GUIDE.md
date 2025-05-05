# Botanical Components Guide

## Introduction

The botanical components are an essential part of the Recovery Office design system, providing visual elements based on sacred geometry principles. These components include olive branches, flowers of life, and other nature-inspired elements that reinforce the brand's connection to renewal, harmony, and trust.

This guide explains how to implement the botanical components correctly when rebuilding the project.

## Botanical Component Types

The Recovery Office design system includes the following primary botanical components:

1. **OliveBranch**: Symbolizes peace, renewal, and recovery
2. **OliveLeaf**: Individual elements used in patterns and decorations
3. **FlowerOfLife**: Sacred geometry pattern with overlapping circles
4. **VesicaPiscis**: Two overlapping circles creating an almond shape
5. **FibonacciSpiral**: Spiral pattern following the golden ratio
6. **SmallFlourish**: Decorative element for subtle visual interest

## Component Architecture

The botanical components follow a consistent architecture:

### Core Types

Defined in `botanical.types.ts`:

```typescript
// BotanicalElement types
export type BotanicalVariant =
  | 'oliveBranch'
  | 'oliveLeaf'
  | 'flowerOfLife'
  | 'vesicaPiscis'
  | 'fibonacciSpiral'
  | 'smallFlourish'
  | 'simple';

export type BotanicalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BotanicalOpacity = 'low' | 'medium' | 'high';
export type BotanicalColorScheme = 'primary' | 'secondary' | 'neutral' | 'light';

export interface BotanicalElementProps {
  variant: BotanicalVariant;
  size?: BotanicalSize;
  opacity?: BotanicalOpacity;
  colorScheme?: BotanicalColorScheme;
  withAnimation?: boolean;
  animationType?: 'grow' | 'reveal' | 'draw' | 'pulse' | 'float';
  delay?: number;
  className?: string;
}

// SVG Botanical types
export interface BotanicalSVGProps {
  type: BotanicalSVGType;
  size?: number;
  color?: string;
  mirror?: boolean;
  rotation?: number;
  animate?: boolean;
  animationDuration?: number;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

### Component Implementation Pattern

Each botanical component follows this pattern:

1. Import necessary libraries (React, styled-components, Framer Motion)
2. Import sacred geometry constants
3. Define component-specific animations
4. Define the component interface extending base botanical types
5. Implement the SVG render logic with sacred geometry math
6. Apply animations and transformations
7. Export the component

## Example: FlowerOfLife Component

```typescript
// React imports
import React from 'react';
// External imports
import styled, { keyframes, DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
// Relative imports
import { PHI, PHI_INVERSE, FIBONACCI, SACRED_EASINGS } from '../../constants/sacred-geometry';

// Define animations based on sacred geometry
const petalReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(${PHI_INVERSE * 0.8});
  }
  ${PHI_INVERSE * 100 * 0.5}% {
    opacity: ${PHI_INVERSE};
    transform: scale(${PHI_INVERSE});
  }
  ${PHI_INVERSE * 100}% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Component interface
export interface FlowerOfLifeProps {
  /** Size in pixels (diameter) */
  size?: number;
  /** Primary color */
  color?: string;
  /** Secondary color */
  secondaryColor?: string;
  /** Line thickness */
  strokeWidth?: number;
  /** Whether the component should be animated */
  animated?: boolean;
  /** Animation type: 'reveal' | 'rotate' | 'pulse' */
  animationType?: 'reveal' | 'rotate' | 'pulse';
  /** Additional CSS class */
  className?: string;
  /** Overall opacity */
  opacity?: number;
  /** Stagger timing between circles in reveal animation */
  staggerDelay?: number;
  /** Custom rotation angle in degrees */
  rotation?: number;
}

// Component implementation
function FlowerOfLife({
  size = FIBONACCI[9],
  color = '#0A4021',
  secondaryColor = '#0A402133',
  strokeWidth = 1,
  animated = false,
  animationType = 'reveal',
  className = '',
  opacity = 0.8,
  staggerDelay = FIBONACCI[4] * 10,
  rotation = 0,
}: FlowerOfLifeProps) {
  // Calculate dimensions based on sacred geometry
  const radius = size / 2;
  const centerX = radius;
  const centerY = radius;
  const smallRadius = (radius / 3) * PHI_INVERSE;

  // Create circles for the pattern
  // ...calculation logic...

  return (
    <FlowerContainer
      className={`flower-of-life ${className}`}
      $size={size}
      $animated={animated}
      $animationType={animationType}
      $opacity={opacity}
      $rotation={rotation}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {circles.map((circle, index) => (
          <Circle
            key={circle.key}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            $animated={animated}
            $animationType={animationType}
            $animationIndex={index}
            $staggerDelay={staggerDelay}
          />
        ))}
      </svg>
    </FlowerContainer>
  );
}

export default FlowerOfLife;
```

## Unified BotanicalElement Component

The `BotanicalElement` component acts as a unified interface for all botanical elements:

```typescript
import React from 'react';
import styled from 'styled-components';
import { BotanicalElementProps } from './botanical.types';
import { OliveBranch, OliveLeaf, FlowerOfLife, VesicaPiscis, FibonacciSpiral, SmallFlourish } from './index';
import { FIBONACCI } from '../../constants/sacred-geometry';

// Size mappings based on Fibonacci sequence
const SIZE_MAPPING = {
  xs: FIBONACCI[7], // 13px
  sm: FIBONACCI[8], // 21px
  md: FIBONACCI[9], // 34px
  lg: FIBONACCI[10], // 55px
  xl: FIBONACCI[11], // 89px
};

// Opacity mappings based on sacred geometry
const OPACITY_MAPPING = {
  low: 0.3,
  medium: 0.6,
  high: 0.9,
};

// Default colors for different color schemes
const COLOR_SCHEME_MAPPING = {
  primary: '#0A4021', // Forest Green
  secondary: '#5A7D64', // Sage Green
  neutral: '#818181', // Gray
  light: '#F8F7F0', // Ivory
};

const BotanicalElement: React.FC<BotanicalElementProps> = ({
  variant,
  size = 'md',
  opacity = 'medium',
  colorScheme = 'primary',
  withAnimation = false,
  animationType = 'draw',
  delay = 0,
  className = '',
}) => {
  // Map size and opacity values
  const sizeValue = SIZE_MAPPING[size];
  const opacityValue = OPACITY_MAPPING[opacity];
  const color = COLOR_SCHEME_MAPPING[colorScheme];

  // Render the appropriate botanical component
  switch (variant) {
    case 'oliveBranch':
      return (
        <OliveBranch
          size={sizeValue}
          color={color}
          opacity={opacityValue}
          animated={withAnimation}
          animationType={animationType === 'draw' ? 'reveal' : animationType}
          className={className}
          staggerDelay={delay}
        />
      );
    case 'oliveLeaf':
      return (
        <OliveLeaf
          size={sizeValue}
          color={color}
          opacity={opacityValue}
          animated={withAnimation}
          animationType={animationType === 'draw' ? 'reveal' : animationType}
          className={className}
          staggerDelay={delay}
        />
      );
    case 'flowerOfLife':
      return (
        <FlowerOfLife
          size={sizeValue}
          color={color}
          opacity={opacityValue}
          animated={withAnimation}
          animationType={animationType === 'draw' ? 'reveal' : animationType}
          className={className}
          staggerDelay={delay}
        />
      );
    // Additional cases for other variants...
    default:
      return null;
  }
};

export default BotanicalElement;
```

## Animation Integration

Botanical components use animations based on sacred geometry principles:

```typescript
// Import animation constants
import { SACRED_EASINGS, PHI_INVERSE, FIBONACCI } from '../../constants/sacred-geometry';

// Framer Motion animation variants
const botanicalVariants = {
  hidden: {
    opacity: 0,
    scale: PHI_INVERSE,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: FIBONACCI[7] * 0.01, // 0.13s
      ease: SACRED_EASINGS.standard,
    },
  },
  draw: {
    pathLength: 0,
    opacity: 0,
    transition: {
      pathLength: {
        duration: FIBONACCI[8] * 0.01, // 0.21s
        ease: SACRED_EASINGS.easeInOut,
      },
      opacity: {
        duration: FIBONACCI[7] * 0.01, // 0.13s
        ease: SACRED_EASINGS.easeIn,
      },
    },
  },
  drawn: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: FIBONACCI[8] * 0.01, // 0.21s
        ease: SACRED_EASINGS.easeInOut,
      },
      opacity: {
        duration: FIBONACCI[7] * 0.01, // 0.13s
        ease: SACRED_EASINGS.easeIn,
      },
    },
  },
};
```

## Positioning & Layout Integration

Botanical elements can be positioned in various ways:

```typescript
// Example usage in a layout component
import React from 'react';
import styled from 'styled-components';
import { BotanicalElement } from '../design-system/botanical';
import { GOLDEN_SECTIONS } from '../constants/sacred-geometry';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const BotanicalTopRight = styled.div`
  position: absolute;
  top: ${GOLDEN_SECTIONS.minor * 100}%;
  right: ${GOLDEN_SECTIONS.minor * 100}%;
  transform: translate(50%, -50%);
`;

const BotanicalBottomLeft = styled.div`
  position: absolute;
  bottom: ${GOLDEN_SECTIONS.minor * 100}%;
  left: ${GOLDEN_SECTIONS.minor * 100}%;
  transform: translate(-50%, 50%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  /* Content styling */
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <BotanicalTopRight>
        <BotanicalElement
          variant="oliveBranch"
          size="lg"
          colorScheme="primary"
          withAnimation={true}
          animationType="draw"
          delay={300}
        />
      </BotanicalTopRight>
      
      <HeroContent>
        {/* Hero content */}
      </HeroContent>
      
      <BotanicalBottomLeft>
        <BotanicalElement
          variant="flowerOfLife"
          size="xl"
          opacity="low"
          colorScheme="secondary"
          withAnimation={true}
          animationType="reveal"
          delay={600}
        />
      </BotanicalBottomLeft>
    </HeroSection>
  );
};

export default Hero;
```

## Performance Considerations

When implementing botanical components, keep these performance practices in mind:

1. **SVG Optimization**: Keep SVG paths as simple as possible
2. **Animation Throttling**: Use `useEffect` to disable animations on low-power devices
3. **Lazy Loading**: Import botanical components using dynamic imports for code splitting
4. **Conditional Rendering**: Only render botanical elements when they're in or near the viewport
5. **Memoization**: Use `React.memo` to prevent unnecessary re-renders

## Accessibility Considerations

Ensure botanical elements maintain accessibility:

1. **Decorative Role**: Add `role="presentation"` or `aria-hidden="true"` to purely decorative elements
2. **Contrast**: Ensure sufficient contrast when botanical elements overlay text
3. **Motion Reduction**: Respect `prefers-reduced-motion` media query
4. **SVG Titles**: Add `<title>` and `<desc>` elements when botanical elements convey meaning

## Best Practices

1. **Consistent Sizing**: Always use the predefined size system (xs, sm, md, lg, xl)
2. **Theme Integration**: Use color scheme values that integrate with the theme system
3. **Animation Consistency**: Use the predefined animation types
4. **Positioning**: Position botanical elements at golden ratio points for visual harmony
5. **Responsive Adaptation**: Scale or hide botanical elements appropriately on smaller screens

## Conclusion

The botanical components are a distinctive feature of the Recovery Office design system, bringing organic, natural elements that reinforce the brand's themes of renewal and growth. By following these implementation guidelines, you'll ensure that these elements are implemented consistently and effectively throughout the rebuilt website. 