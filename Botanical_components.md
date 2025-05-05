# Botanical Components Documentation

## Overview

The botanical components are a collection of React components that render botanical-themed elements following sacred geometry principles. These components are designed to add organic, natural visuals to the Recovery Office website while maintaining harmonious proportions based on the Golden Ratio and Fibonacci sequence.

## Available Components

### 1. BasicOliveBranch

A simplified olive branch SVG component with leaves positioned at Fibonacci-spaced intervals and sized according to the Golden Ratio.

```tsx
import { BasicOliveBranch } from 'src/design-system/botanical';

<BasicOliveBranch 
  size={100} 
  branchColor="#0A4021" 
  leafColor="#0A4021" 
  rotation={45} 
  mirror={false} 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 100 | Size of the component (sets both width and height) |
| width | number | undefined | Width of the component (overrides size) |
| height | number | undefined | Height of the component (overrides size) |
| branchColor | string | "#0A4021" | Color of the branch |
| leafColor | string | "#0A4021" | Color of the leaves |
| rotation | number | 0 | Rotation angle in degrees |
| mirror | boolean | false | Whether to mirror the branch horizontally |
| className | string | undefined | CSS class name |
| style | object | undefined | Custom CSS styles |

### 2. FlowerOfLife

A sacred geometry pattern consisting of multiple evenly-spaced, overlapping circles arranged in a flower-like pattern. This symbol represents the fundamental forms, proportions, and relationships of space and time.

```tsx
import { FlowerOfLife } from 'src/design-system/botanical';

<FlowerOfLife 
  size={200} 
  color="#0A4021" 
  opacity={0.7} 
  withBorder={true} 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 200 | Size of the component (width and height) |
| color | string | "#0A4021" | Primary color of the pattern |
| backgroundColor | string | "transparent" | Background color |
| strokeWidth | number | 1 | Stroke width for the circles |
| opacity | number | 0.7 | Opacity of the pattern |
| withBorder | boolean | true | Whether to show a decorative border |
| className | string | undefined | CSS class name |
| style | object | undefined | Custom CSS styles |

### 3. VesicaPiscis

A sacred geometry symbol formed by the intersection of two circles with the same radius, where the center of each circle lies on the circumference of the other. It represents the intersection of the physical and spiritual worlds.

```tsx
import { VesicaPiscis } from 'src/design-system/botanical';

<VesicaPiscis 
  size={200} 
  color="#0A4021" 
  fillIntersection={true} 
  fillColor="rgba(10, 64, 33, 0.15)" 
  rotation={0} 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 200 | Size of the component (width and height) |
| color | string | "#0A4021" | Primary color of the pattern |
| fillIntersection | boolean | false | Whether to fill the intersection |
| fillColor | string | "rgba(10, 64, 33, 0.15)" | Fill color for intersection |
| strokeWidth | number | 1.5 | Stroke width for the circles |
| opacity | number | 0.9 | Opacity of the circles |
| rotation | number | 0 | Rotation angle in degrees |
| className | string | undefined | CSS class name |
| style | object | undefined | Custom CSS styles |

### 4. BotanicalSVG

A comprehensive component supporting various botanical types with advanced customization options.

```tsx
import { BotanicalSVG } from 'src/design-system/botanical';

<BotanicalSVG 
  type="olive-branch" 
  size={150} 
  color="#0A4021" 
  animateOnHover={true} 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | BotanicalType | required | Type of botanical SVG to render |
| size | number | 100 | Size of the SVG (sets both width and height) |
| width | number | undefined | Width of the SVG (overrides size) |
| height | number | undefined | Height of the SVG (overrides size) |
| color | string | "currentColor" | Primary color |
| secondaryColor | string | undefined | Secondary color for multi-color patterns |
| rotation | number | 0 | Rotation angle in degrees |
| animateOnScroll | boolean | false | Whether to animate when in view |
| animateOnHover | boolean | false | Whether to animate on hover |
| ... | ... | ... | Additional props for advanced customization |

## BotanicalType Options

The `BotanicalSVG` component supports the following botanical types:

- `olive-branch`: An olive branch with multiple leaves
- `olive-leaf`: A single olive leaf
- `small-flourish`: A small decorative flourish
- `vesica-piscis`: The vesica piscis sacred geometry pattern
- `flower-of-life`: The flower of life sacred geometry pattern
- `fibonacci-spiral`: A spiral following the Fibonacci sequence
- `spiral`: A simple spiral design
- `seed-of-life`: The seed of life sacred geometry pattern
- `platonic-solid`: Platonic solid shapes

## Usage Guidelines

1. **Positioning**:
   - Use botanical elements as subtle accents
   - Position them according to golden ratio points (61.8% or 38.2%)
   - Consider the visual weight they add to the layout

2. **Sizing**:
   - Follow Fibonacci sequence for sizing (8px, 13px, 21px, 34px, 55px, 89px)
   - Maintain sacred proportions when scaling

3. **Colors**:
   - Use the primary and secondary color scheme
   - Adjust opacity for background elements (typically 0.1-0.4)
   - Increase opacity for foreground elements (typically 0.7-1.0)

4. **Animation**:
   - Use `animateOnScroll` for initial reveal animations
   - Use `animateOnHover` for interactive elements
   - Keep animations subtle and natural

## Animation Utilities

The `botanical` module also exports animation utilities from `src/design-system/botanical/animations`:

```typescript
import { 
  fibonacciSpiralAnimation,
  oliveBranchGrowthAnimation, 
  flowerOfLifeAnimation
} from 'src/design-system/botanical';
```

These utilities provide:
- Pre-configured animations following natural motion principles
- Timing based on Fibonacci sequences and the Golden Ratio
- Easings that mimic natural growth patterns

## Integration with Other Components

Botanical elements integrate well with:

1. **Layout components**:
   - Use them as decorative accents in `SacredSection`
   - Add them to card corners or dividers

2. **Navigation**:
   - Subtle accents in the `NavBar` or `Breadcrumbs`
   - Animation on hover for menu items

3. **Forms and Buttons**:
   - Small flourishes for success/completion states
   - Subtle backgrounds for emphasized content

## Performance Considerations

While botanical components add visual richness, consider these performance guidelines:

1. Lazy load botanical components for non-critical UI elements
2. Use simpler components (like `BasicOliveBranch`) for repeating elements
3. Limit animations on low-powered devices using media queries

## Accessibility

All botanical components include:

1. Proper ARIA attributes when functioning as UI elements
2. High contrast options via `highContrast` prop
3. Respect for `prefers-reduced-motion` settings
4. Appropriate focus outlines when interactive

## Example Integration

Here's an example of integrating botanical elements with a testimonial component:

```tsx
import { BasicOliveBranch, VesicaPiscis } from 'src/design-system/botanical';
import { GOLDEN_RATIO, PHI_INVERSE } from 'src/constants/sacred-geometry';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <div className="quote-mark" style={{ position: 'relative' }}>
        <VesicaPiscis 
          size={34} 
          color="#0A4021" 
          opacity={0.2} 
          fillIntersection={true} 
        />
      </div>
      
      <blockquote>{quote}</blockquote>
      
      <footer>
        <div className="author">{author}</div>
        <div className="decorative-element">
          <BasicOliveBranch 
            size={55} 
            opacity={0.7} 
            rotation={-15} 
          />
        </div>
      </footer>
    </div>
  );
};
``` 