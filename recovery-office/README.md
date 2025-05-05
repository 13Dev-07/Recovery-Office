# Recovery Office Design System

A comprehensive design system built on sacred geometry principles for the Recovery Office application. 
This system provides components, utilities, and patterns that create a harmonious and visually pleasing user experience.

## Core Principles

### Sacred Geometry First
- All components are designed with sacred geometry principles in mind
- Golden ratio (PHI = 1.618...) is used for proportions and layouts
- Fibonacci sequence values are used for spacing, sizing, and rhythm
- Natural patterns from sacred geometry guide visual design

### Type Safety Excellence
- Comprehensive TypeScript interfaces for all components
- Zero use of `any` type throughout the codebase
- Discriminated unions for type narrowing
- Runtime validation with Zod

### Error Prevention Hierarchy
- Components designed to make errors impossible
- Validation at all system boundaries
- Defensive programming with proper null checking
- Exhaustive pattern matching

## Component Categories

### Layout
- Box: Foundational layout component
- Container: Max-width constraints with golden ratio
- Grid: Column-based layout with Fibonacci proportions
- Section: Page section with botanical elements
- Stack: Linear stacking with consistent spacing

### Botanical
- BotanicalElement: Base SVG component
- LeafPattern: Harmonious pattern of olive leaves
- OliveLeaf: Single leaf based on golden ratio
- OliveBranch: Branch with Fibonacci-spaced leaves
- FlowerOfLife: Sacred geometry pattern

### Typography
- Heading: Title text with sacred proportions
- Text: Body text with proper line height and spacing
- Quote: Styled blockquote with decorative elements

### Form
- Input: Text input with validation
- Checkbox: Custom styled checkbox
- Select: Dropdown selection component
- Textarea: Multi-line text input
- RadioGroup: Radio button selection

### Animation
- Fade: Opacity transitions
- Slide: Movement transitions
- Grow: Size transitions
- FibonacciReveal: Sequential element reveals

## Usage

Import components from their respective categories:

```tsx
import { Section, SectionTitle, SectionContent } from './design-system/components/layout/Section';
import { LeafPattern } from './design-system/components/botanical/LeafPattern';
import { Text } from './design-system/components/typography/Text';

const Example = () => (
  <Section 
    variant="primary"
    botanicalPosition="top-right"
    botanicalElement={<LeafPattern size="large" />}
  >
    <SectionTitle 
      title="Recovery Office" 
      subtitle="Healing through sacred geometry"
      align="center"
    />
    <SectionContent columns={3} columnGap={5}>
      <Text>
        Our approach combines ancient wisdom with modern therapeutic techniques.
      </Text>
    </SectionContent>
  </Section>
);
```

## Examples

Check the `examples` directory for sample implementations:

- SectionExample: Demonstrates Section components
- BotanicalExample: Shows botanical element usage
- FormExample: Showcases form components
- AnimationExample: Illustrates animation components

## Design Tokens

The design system uses tokens for:

- Colors: Based on natural harmony
- Spacing: Fibonacci sequence values
- Typography: Golden ratio relationships
- Shadows: Natural depth perception
- Breakpoints: Screen size transitions

## Development

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Component Development Guidelines

1. Follow sacred geometry principles
2. Maintain type safety
3. Document with comprehensive JSDoc comments
4. Include examples in Storybook
5. Write unit tests for all components

## License

This project is licensed under the MIT License - see the LICENSE file for details. 