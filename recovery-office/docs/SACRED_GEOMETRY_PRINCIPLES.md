# Sacred Geometry Principles in Recovery Office

This document explains the sacred geometry principles implemented in the Recovery Office project and provides guidance on how to apply these principles when developing new components.

## Core Principles

Sacred geometry uses mathematical patterns found in nature to create harmonious, balanced, and aesthetically pleasing designs. In the Recovery Office project, we implement these principles through:

1. **Golden Ratio (Phi, φ ≈ 1.618)**: A mathematical proportion found throughout nature that creates visually pleasing compositions
2. **Fibonacci Sequence**: A sequence of numbers where each number is the sum of the two preceding ones (1, 1, 2, 3, 5, 8, 13, 21, 34...)
3. **Sacred Spacing**: Spacing values derived from the Fibonacci sequence
4. **Natural Animation Timing**: Animation durations and easing based on sacred ratios

## Constants and Values

Our implementation is built around the `sacred-geometry.ts` constants file which provides the mathematical foundation for the entire design system:

### Key Constants

- **PHI (φ)**: The Golden Ratio constant (1.618033988749895)
- **PHI_INVERSE**: The inverse of the Golden Ratio (0.618033988749895)
- **FIBONACCI**: Object containing key Fibonacci sequence numbers
- **SACRED_SPACING**: Spacing values derived from Fibonacci numbers
- **SACRED_TIMING**: Animation timing values based on Fibonacci
- **SACRED_ANGLES**: Special angles with sacred geometric properties
- **GOLDEN_RECTANGLE**: Width and height ratio based on Golden Ratio

## Visual Examples

![Golden Ratio Spiral](../public/assets/images/botanical/fibonacci-spiral.svg)

The above spiral follows the Golden Ratio, with each section's size relating to the previous by a factor of approximately 1.618 (Phi).

### Spacing Example

```
|←-- 2px -->|  (SACRED_SPACING.xxs)
|←---- 3px ----→|  (SACRED_SPACING.xs)
|←------- 5px -------→|  (SACRED_SPACING.sm)
|←------------ 8px ------------→|  (SACRED_SPACING.md)
|←-------------------- 13px --------------------→|  (SACRED_SPACING.lg)
|←---------------------------------- 21px ----------------------------------→|  (SACRED_SPACING.xl)
```

## Applying Sacred Geometry in Components

### Layout Components

When creating layout components, follow these guidelines:

1. **Use SACRED_SPACING for margins and padding**
   ```tsx
   <Box padding="md" margin="lg">...</Box>
   ```

2. **Implement Golden Ratio for width-to-height relationships**
   ```tsx
   <GoldenRectangle width={300}>...</GoldenRectangle>
   ```

3. **Position key elements at Golden Ratio points (61.8% or 38.2%)**
   ```tsx
   <SacredGrid>
     <KeyElement gridArea="golden-major" />  {/* Positioned at 61.8% */}
   </SacredGrid>
   ```

### Animation Components

When creating animation components:

1. **Use SACRED_TIMING values for durations**
   ```tsx
   const duration = SACRED_TIMING.medium;  // 130ms based on Fibonacci
   ```

2. **Apply PHI or PHI_INVERSE to calculate natural timing**
   ```tsx
   // Apply golden ratio to create a natural, harmonious duration
   const effectiveDuration = durationValue * PHI_INVERSE;
   ```

3. **Use sacred easing functions for natural motion**
   ```tsx
   const variants = {
     visible: {
       opacity: 1,
       transition: {
         ease: SACRED_EASINGS.goldenEaseInOut,
         duration: effectiveDuration
       }
     }
   };
   ```

4. **Use Fibonacci numbers for staggered animations**
   ```tsx
   // Stagger children with Fibonacci intervals
   const staggerDelay = FIBONACCI[5] * 10;  // 30ms
   ```

### Example Component Implementation

Here's an example of applying sacred geometry principles to a new component:

```tsx
import React from 'react';
import { Box } from '../layout';
import { 
  PHI, 
  PHI_INVERSE, 
  SACRED_SPACING, 
  SACRED_TIMING 
} from '../../../constants/sacred-geometry';

interface SacredCardProps {
  children: React.ReactNode;
  width?: number;
}

export const SacredCard: React.FC<SacredCardProps> = ({ 
  children, 
  width = 300 
}) => {
  // Calculate height using Golden Ratio
  const height = width * PHI_INVERSE;
  
  return (
    <Box 
      width={`${width}px`}
      height={`${height}px`}
      padding={SACRED_SPACING.md}
      margin={SACRED_SPACING.lg}
      borderRadius={SACRED_SPACING.sm}
    >
      {children}
    </Box>
  );
};
```

## Best Practices

1. **Always import constants from sacred-geometry.ts**
   - Never hardcode sacred values directly

2. **Document the sacred principles being applied**
   - Add comments explaining which principles you're using and why

3. **Ensure responsive scaling**
   - Sacred proportions should be maintained across different screen sizes

4. **Combine multiple sacred principles**
   - The most harmonious components use multiple sacred geometry concepts together

5. **Validate with visual tools**
   - Use golden ratio overlays to check your layouts visually

## Helpful Tools

1. **goldenValue(base)**: Calculate a value based on the Golden Ratio
2. **goldenInverseValue(base)**: Calculate a value based on the inverse Golden Ratio
3. **nextFibonacci(current)**: Get the next Fibonacci number
4. **prevFibonacci(current)**: Get the previous Fibonacci number

## Troubleshooting

**Issue**: Component proportions look unbalanced
**Solution**: Verify you're using SACRED_SPACING constants and Golden Ratio calculations

**Issue**: Animations feel unnatural
**Solution**: Check that you're using SACRED_TIMING and proper easing functions

**Issue**: Layout doesn't resize harmoniously
**Solution**: Ensure all dimensions are calculated using sacred proportions rather than fixed values

## Summary

By consistently applying these sacred geometry principles throughout the Recovery Office project, we create a harmonious, balanced user interface that feels naturally pleasing to users. These principles help establish trust and professionalism through subtle mathematical relationships that have been recognized for their beauty throughout history. 