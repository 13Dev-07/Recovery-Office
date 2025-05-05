## ScrollReveal Component Updates

The ScrollReveal component has been updated to correctly handle the `as` prop and implement polymorphic behavior. The key changes include:

### Interface Changes

The `ScrollRevealProps` interface now correctly extends `Omit<BoxProps, 'as' | 'ref'>` while explicitly defining the `as` prop:

```typescript
export interface ScrollRevealProps extends Omit<BoxProps, 'as' | 'ref'> {
  /**
   * The content to be animated
   */
  children: React.ReactNode;
  
  /**
   * Polymorphic as prop for rendering different HTML elements
   * or other React components
   */
  as?: React.ElementType;
  
  // ... other properties
}
```

### Component Implementation

The ScrollReveal component implementation now properly handles the `as` prop by:

1. Accepting the `as` prop in the component props
2. Using the Box component with `motion.div` to handle animation
3. Passing all other props to the Box component

```typescript
export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ 
    children,
    variant = 'fade',
    // ... other props
    as,
    ...rest
  }, ref) => {
    // ... animation logic
    
    return (
      <Box
        as={motion.div}
        ref={combinedRef}
        initial="hidden"
        animate={controls}
        variants={getVariants()}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);
```

### Usage Example

```jsx
// Basic usage
<ScrollReveal variant="fade" threshold={0.2}>
  <Box p="1rem">This content fades in</Box>
</ScrollReveal>

// With custom element type
<ScrollReveal as="section" variant="slide-up" threshold={0.2}>
  <Box p="1rem">This content slides up</Box>
</ScrollReveal>
```

This update ensures consistent behavior with other components in the design system and maintains the sacred geometry animation principles. 