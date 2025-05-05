# Sacred Geometry Implementation Guide

## Overview

The Recovery Office website is built on a foundation of sacred geometry principles, ensuring that every component, animation, and layout follows divine proportions found throughout nature. This document serves as a comprehensive guide to understanding and implementing these principles in the codebase.

## Core Sacred Geometry Principles

### Golden Ratio (Φ ≈ 1.618)

The Golden Ratio, represented by Phi (Φ), is the divine proportion where a line is divided so that the ratio of the whole line to the larger segment equals the ratio of the larger segment to the smaller segment.

```
a/b = (a+b)/a = Φ ≈ 1.618
```

In our codebase, the Golden Ratio is implemented as:

```typescript
// In src/constants/sacred-geometry.ts
export const GOLDEN_RATIO = 1.618;
export const PHI_INVERSE = 0.618; // 1/Φ
```

### Fibonacci Sequence

The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...) closely approximates the Golden Ratio. Each number is the sum of the two preceding ones, and the ratio of consecutive Fibonacci numbers approaches Φ.

```typescript
// In src/constants/sacred-geometry.ts
export const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
```

### Sacred Symbols

We incorporate sacred geometry symbols throughout the application:

1. **Vesica Piscis**: The intersection of two circles with the same radius, where the center of each circle is on the circumference of the other
2. **Flower of Life**: Multiple evenly-spaced, overlapping circles arranged in a flower-like pattern
3. **Platonic Solids**: The five regular solids (tetrahedron, cube, octahedron, dodecahedron, and icosahedron)

## Implementation in CSS

### Variables and Constants

Sacred geometry principles are implemented as CSS variables:

```css
/* In src/styles/sacred-geometry.css */
:root {
  --golden-ratio: 1.618;
  --phi-inverse: 0.618;
  
  /* Fibonacci Sequence (px units) */
  --fib-1: 1px;
  --fib-2: 2px;
  --fib-3: 3px;
  --fib-5: 5px;
  --fib-8: 8px;
  --fib-13: 13px;
  --fib-21: 21px;
  --fib-34: 34px;
  --fib-55: 55px;
  --fib-89: 89px;
  --fib-144: 144px;
}
```

### Layout & Spacing

We use the Golden Ratio and Fibonacci sequence for layouts:

1. **Container Widths**: Often set to 61.8% of parent (PHI_INVERSE)
2. **Margins and Padding**: Based on Fibonacci numbers
3. **Grid System**: 8-column or 13-column (Fibonacci numbers) with Fibonacci-based gaps

```css
.sacred-container {
  width: calc(100% / var(--golden-ratio));  /* Approx. 61.8% */
  margin-left: auto;
  margin-right: auto;
}

.sacred-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--fib-13); /* 13px */
}
```

### Typography

Text sizes and line heights follow the Golden Ratio scale:

```css
:root {
  --text-xs: 10px;
  --text-sm: 16px; /* Base font size */
  --text-md: calc(16px * var(--golden-ratio)); /* ~26px */
  --text-lg: calc(16px * var(--golden-ratio) * var(--golden-ratio)); /* ~42px */
  --text-xl: calc(16px * var(--golden-ratio) * var(--golden-ratio) * var(--golden-ratio)); /* ~68px */
  
  --line-height-base: var(--golden-ratio); /* 1.618 */
}
```

### Animation & Transitions

Our animations use cubic-bezier curves based on divine proportions:

```css
:root {
  --transition-quick: 0.3s cubic-bezier(0.618, 0, 0.382, 1);
  --transition-medium: 0.5s cubic-bezier(0.618, 0, 0.382, 1);
  --transition-slow: 0.8s cubic-bezier(0.618, 0, 0.382, 1);
}
```

## React Components

### SacredSection

A container component that implements sacred geometry principles:

```tsx
<SacredSection 
  variant="primary" 
  pattern="flower-of-life" 
  withBotanical={true}
>
  <h2>Welcome to the Recovery Office</h2>
  <p>Content with divine proportions...</p>
</SacredSection>
```

### SacredNavBar

A navigation component with divine proportions:

```tsx
<SacredNavBar
  items={navigationItems}
  logo={<LogoComponent />}
  theme="light"
  sticky={true}
/>
```

## Performance Optimization

We use Fibonacci-based scheduling for performance optimization:

```typescript
// In src/utils/renderOptimization.ts
function shouldLogRender(renderCount: number): boolean {
  // Only log renders that fall on Fibonacci numbers
  return FIBONACCI.includes(renderCount);
}
```

## Using the Design System

### Component Import Example

```tsx
import { SacredSection, SacredNavBar } from 'src/design-system/components';

function MyPage() {
  return (
    <>
      <SacredNavBar items={navItems} />
      <SacredSection variant="secondary">
        <h1>My Sacred Content</h1>
      </SacredSection>
    </>
  );
}
```

### Styled Components with Sacred Geometry

```tsx
import styled from 'styled-components';
import { GOLDEN_RATIO, FIBONACCI } from 'src/constants/sacred-geometry';

const SacredCard = styled.div`
  width: 100%;
  max-width: ${FIBONACCI[10]}px; /* 55px */
  aspect-ratio: ${GOLDEN_RATIO};
  padding: ${FIBONACCI[5]}px;
  margin-bottom: ${FIBONACCI[6]}px;
  border-radius: ${FIBONACCI[3]}px;
  transition: transform 0.3s cubic-bezier(0.618, 0, 0.382, 1);
  
  &:hover {
    transform: scale(1.02);
  }
`;
```

## Best Practices

1. **Always Use Constants**: Import `GOLDEN_RATIO`, `PHI_INVERSE`, and `FIBONACCI` from `src/constants/sacred-geometry.ts`

2. **Maintain Divine Proportions**: 
   - Width-to-height ratios should follow the Golden Ratio
   - Container widths should be set to 61.8% of their parent where appropriate
   - Nested elements should follow Fibonacci scaling

3. **Consistent Animations**:
   - Use the cubic-bezier(0.618, 0, 0.382, 1) timing function
   - Scale animations should use PHI_INVERSE as the scale factor

4. **Responsive Design**:
   - Media query breakpoints should be based on Fibonacci numbers
   - Element sizing should adapt based on Fibonacci scales

5. **Sacred Symbols**:
   - Incorporate sacred geometry patterns as background elements
   - Use SVG for clean scaling of patterns

## Conclusion

By following these sacred geometry principles, we ensure that the Recovery Office website embodies the divine proportions found throughout nature. This creates a visually pleasing and harmonious user experience that resonates with visitors on a fundamental level. 