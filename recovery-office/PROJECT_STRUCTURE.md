# Recovery Office - Current Project Structure

This document tracks the current state of the Recovery Office project structure, helping to maintain alignment with the guides and documentation.

## Current Directory Structure

```
recovery-office/
├── src/
│   ├── constants/
│   │   ├── sacred-geometry.ts         # Sacred geometry constants
│   │   └── ...
│   ├── design-system/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Box.tsx            # Base layout component ✅
│   │   │   │   ├── Flex.tsx           # Flexbox layout component ✅
│   │   │   │   ├── Grid.tsx           # Grid layout component ✅
│   │   │   │   ├── GoldenSection.tsx  # Golden ratio layout component ✅
│   │   │   │   ├── Container.tsx      # Container component with sacred proportions ✅
│   │   │   │   ├── Stack.tsx          # Stack component with Fibonacci spacing ✅
│   │   │   │   ├── AspectRatio.tsx    # AspectRatio component with golden ratio options ✅
│   │   │   │   └── index.ts           # Layout components exports ✅
│   │   │   ├── typography/
│   │   │   │   ├── Heading.tsx        # Heading component with golden ratio scaling ✅
│   │   │   │   ├── Text.tsx           # Text component with sacred line heights ✅
│   │   │   │   ├── Paragraph.tsx      # Paragraph component with optimal reading width ✅
│   │   │   │   ├── Span.tsx           # Span component for inline text styling ✅
│   │   │   │   ├── Typography.tsx     # Unified typography component ✅
│   │   │   │   └── index.ts           # Typography components exports ✅
│   │   │   ├── form/
│   │   │   │   ├── FormControl.tsx    # Form field container component ✅
│   │   │   │   ├── FormLabel.tsx      # Form label component ✅
│   │   │   │   ├── FormError.tsx      # Form error message component ✅
│   │   │   │   ├── Input.tsx          # Text input component ✅
│   │   │   │   ├── TextArea.tsx       # Multiline text input component ✅
│   │   │   │   ├── Select.tsx         # Dropdown selection component ✅
│   │   │   │   ├── Checkbox.tsx       # Checkbox input component ✅
│   │   │   │   ├── Radio.tsx          # Radio button input component ✅
│   │   │   │   ├── DatePicker.tsx     # Date selection component 🔄
│   │   │   │   ├── TimePicker.tsx     # Time selection component 🔄
│   │   │   │   └── index.ts           # Form components exports ✅
│   │   │   └── button/                # To be implemented
│   │   ├── tokens/
│   │   │   ├── colors.ts              # Color tokens ✅
│   │   │   ├── spacing.ts             # Spacing tokens based on Fibonacci ✅
│   │   │   ├── typography.ts          # Typography tokens ✅
│   │   │   ├── breakpoints.ts         # Breakpoint tokens based on Fibonacci ✅
│   │   │   ├── radius.ts              # Border radius tokens ✅
│   │   │   ├── shadows.ts             # Shadow tokens ✅
│   │   │   └── index.ts               # Token exports ✅
│   │   ├── theme/
│   │   │   ├── theme.ts               # Theme configuration ✅
│   │   │   ├── globalStyles.ts        # Global styles ✅
│   │   │   ├── ThemeProvider.tsx      # Theme provider component ✅
│   │   │   └── index.ts               # Theme exports ✅
│   │   ├── types/
│   │   │   ├── styled.types.ts        # Types for styled components ✅
│   │   │   ├── theme.types.ts         # Theme type definitions ✅
│   │   │   └── index.ts               # Type exports ✅
│   │   └── index.ts                   # Design system exports ✅
│   ├── examples/
│   │   ├── GoldenSectionExample.tsx   # Example usage of GoldenSection ✅
│   │   ├── ContainerExample.tsx       # Example usage of Container ✅
│   │   ├── StackExample.tsx           # Example usage of Stack ✅
│   │   ├── AspectRatioExample.tsx     # Example usage of AspectRatio ✅
│   │   └── TypographyExample.tsx      # Example usage of typography components ✅
│   ├── utils/
│   │   ├── sacredGeometry.ts          # Sacred geometry utility functions ✅
│   │   └── index.ts                   # Utility exports ✅
│   └── ...
└── ...
```

## Implementation Progress

### Completed Components

#### Layout Components
- ✅ **Box**: The foundational layout component with a comprehensive styling API
- ✅ **Flex**: Extends Box with flexbox capabilities following sacred geometry principles
- ✅ **Grid**: Creates grid layouts using Fibonacci sequences and Golden Ratio proportions
- ✅ **GoldenSection**: Implements layouts based on the Golden Ratio (Φ ≈ 1.618)
- ✅ **Container**: A centered wrapper with width constraints based on sacred geometry
- ✅ **Stack**: A component for stacking elements with Fibonacci spacing
- ✅ **AspectRatio**: A component for maintaining aspect ratios based on sacred geometry

#### Typography Components
- ✅ **Heading**: For headlines with scaled typography
- ✅ **Text**: For general text with proper line height
- ✅ **Paragraph**: For paragraphs with optimal reading width
- ✅ **Span**: For inline text styling
- ✅ **Typography**: Unified typography component with variants

#### Form Components
- ✅ **FormControl**: Container for form elements with label and error message
- ✅ **FormLabel**: Label component for form fields
- ✅ **FormError**: Error message component for form validation
- ✅ **Input**: Text input component with sacred proportions
- ✅ **TextArea**: Multiline text input with auto-resize capabilities
- ✅ **Select**: Dropdown selection component with custom styling
- ✅ **Checkbox**: Checkbox input component with golden ratio proportions
- ✅ **Radio**: Radio button input component with circular design

### Components In Progress

#### Form Components
- 🔄 **DatePicker**: Date selection component with sacred calendar layout (to be implemented)
- 🔄 **TimePicker**: Time selection component with golden ratio grid (to be implemented)

#### Button Components
- 🔄 All button components (to be implemented)

## Next Steps

1. Complete the remaining form components (DatePicker, TimePicker)
2. Implement button components (Button, IconButton, ButtonGroup)
3. Build botanical components
4. Implement animation components

## Design System Structure

Our design system follows a hierarchical structure:

1. **Constants**: Mathematical values from sacred geometry (PHI, Fibonacci sequence)
2. **Tokens**: Design values derived from constants (colors, spacing, typography)
3. **Theme**: Configuration that combines tokens into a cohesive system
4. **Components**: Reusable UI elements built on the theme
5. **Patterns**: Combinations of components for common use cases

Each level builds upon the previous, ensuring consistency and harmony throughout the application. 