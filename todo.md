
# TypeScript Error Resolution Roadmap

## Overview
This document outlines the systematic approach to resolve the 2727 TypeScript errors in 222 files of the Recovery Office project. Each section addresses common error patterns and provides specific solutions that maintain sacred geometry principles while ensuring type safety.

## Error Categories and Solutions

### 1. Import Path Errors
- **Error Pattern**: Cannot find module '@constants/sacred-geometry' or similar path aliases
- **Solution**: Replace path aliases with relative imports
- **Example Fix**:
  ```typescript
  // Before
  import { PHI } from "@constants/sacred-geometry";
  // After
  import { PHI } from "../../constants/sacred-geometry";
  ```

### 2. Missing React Imports
- **Error Pattern**: 'React' refers to a UMD global, but the current file is a module
- **Solution**: Add explicit imports from React
- **Example Fix**:
  ```typescript
  // Before
  const [state, setState] = React.useState();
  // After
  import { useState } from 'react';
  const [state, setState] = useState();
  ```

### 3. Type Definition Issues
- **Error Pattern**: Missing type definitions or incorrect types
- **Solution**: Add proper type imports and interface definitions
- **Example Fix**:
  ```typescript
  // Before
  export const Component = (props) => { ... }
  // After
  import type { ComponentProps } from './types';
  export const Component: React.FC<ComponentProps> = (props) => { ... }
  ```

### 4. Component Props Type Errors
- **Error Pattern**: Type X is not assignable to Type Y in component props
- **Solution**: Update component prop interfaces and ensure consistency
- **Example Fix**:
  ```typescript
  // Before
  <Button color="primary" />
  // After
  <Button color={theme.colors.primary} />
  ```

### 5. Theme Type Mismatches
- **Error Pattern**: String values not assignable to number types in theme
- **Solution**: Convert string values to numbers where required by theme types
- **Example Fix**:
  ```typescript
  // Before
  spacing: { sm: '8px' }
  // After
  spacing: { sm: 8 }
  ```

### 6. Missing forwardRef Implementations
- **Error Pattern**: Cannot find name 'forwardRef'
- **Solution**: Import forwardRef and implement properly
- **Example Fix**:
  ```typescript
  // Before
  export const Component = forwardRef<HTMLDivElement, Props>((props, ref) => {});
  // After
  import { forwardRef } from 'react';
  export const Component = forwardRef<HTMLDivElement, Props>((props, ref) => {});
  ```

### 7. Missing Type Assertions
- **Error Pattern**: Type X is not assignable to parameter of type Y
- **Solution**: Add appropriate type assertions
- **Example Fix**:
  ```typescript
  // Before
  const durationValue = resolveDuration(duration);
  // After
  const durationValue = resolveDuration(duration as any); // or more specific type
  ```

### 8. Generic Type Errors
- **Error Pattern**: Expected n arguments, but got m
- **Solution**: Ensure correct generic type parameters
- **Example Fix**:
  ```typescript
  // Before
  mergeRefs(internalRef, ref)
  // After
  mergeRefs([internalRef, ref])
  ```

### 9. Missing Export Types
- **Error Pattern**: Cannot find name 'AnimationDuration'
- **Solution**: Export types from their source files
- **Example Fix**:
  ```typescript
  // Before (AnimationContext.tsx)
  type AnimationDuration = 'fast' | 'medium' | 'slow';
  // After
  export type AnimationDuration = 'fast' | 'medium' | 'slow';
  ```

### 10. Theme Structure Mismatches
- **Error Pattern**: Type X is missing properties from type Y
- **Solution**: Ensure theme structure matches expected types
- **Example Fix**:
  ```typescript
  // Before
  fontFamily: { primary: string, secondary: string }
  // After
  fontFamily: { heading: string, body: string } // Match expected structure
  ```

## Priority Order for Fixes

1. **Core Constants and Utilities** - First fix the foundational files that many others depend on
   - Constants (sacred-geometry, animation-timing)
   - Utility functions (animation.ts, sacredGeometry.ts)

2. **Context Providers** - Fix context files which affect many components
   - AnimationContext
   - ThemeContext
   - BookingContext

3. **Design System Components** - Fix components in dependency order
   - Layout components (Box, Grid, etc.)
   - Typography components
   - Form components 
   - Feedback components
   - Animation components

4. **Domain-Specific Components** - Fix application-specific components
   - Booking components
   - Header/Footer components
   - Section components

5. **Page Components** - Fix pages last as they depend on all other components
   - Home page
   - About page
   - Services page
   - Booking page
   - Contact page

## Detailed Fixes by File Category

### A. Constants and Utilities

#### sacred-geometry.ts
- Ensure all constants are properly exported
- Add proper TypeScript interfaces for all sacred geometry constants
- Fix any numerical precision issues

#### animation.ts and animation-timing.ts
- Add proper typings for animation functions
- Ensure duration values have consistent types (string vs number)
- Implement types for easing functions

### B. Context Providers

#### AnimationContext.tsx (3 errors)
- Fix import statements to use correct paths
- Ensure proper typing for context state
- Add proper ReactNode typing for children
- Export necessary types like AnimationDuration

#### BookingContext.tsx (32 errors)
- Fix import path aliases
- Add proper typing for booking state
- Implement proper type definitions for booking steps
- Ensure context values and setters are properly typed

#### ThemeContext.tsx (4 errors)
- Ensure theme object structure matches expected types
- Fix default theme values to match type requirements
- Address any theme token type mismatches (string vs number)

### C. Design System Components

#### 1. Animation Components
- **FadeIn.tsx (3 errors)**
  - Add React.ReactNode type for children
  - Fix missing imports for animation hooks
  - Ensure proper typing for motion component props

- **ScaleFade.tsx (12 errors)**
  - Import PHI_INVERSE from sacred-geometry
  - Add proper typing for children and event handlers
  - Fix animation variant types

- **SlideIn.tsx (3 errors)**
  - Type SlideDirection properly
  - Fix animation prop types
  - Ensure proper typing for direction prop

- **ParallaxLayer.tsx (3 errors)**
  - Fix forwardRef implementation
  - Fix mergeRefs function call parameters
  - Add proper typing for scroll position

- **Sequence.tsx (4 errors)**
  - Import necessary React hooks
  - Fix sequence variant type definition
  - Ensure proper typing for child elements

- **Morph.tsx (2 errors)**
  - Add proper typing for SVG paths
  - Fix duration value typing
  - Ensure easing function has correct type

#### 2. Layout Components
- **Box.tsx and Flex.tsx**
  - Ensure style props have proper types
  - Fix theme accessor typing
  - Implement sacred geometry spacing correctly

- **Grid.tsx (3 errors)**
  - Fix grid template props typing
  - Ensure spacing follows sacred geometry
  - Fix forwardRef implementation

- **Section.tsx (16 errors)**
  - Fix section props interface
  - Implement proper typing for section variants
  - Fix background and spacing props

- **GoldenSection.tsx (1 error)**
  - Ensure PHI constant is imported correctly
  - Fix aspect ratio calculation
  - Ensure props are properly typed

#### 3. Booking Components
- **BookingConfirmation.tsx (67 errors)**
  - Fix form data typing
  - Ensure proper validation schemas
  - Fix date formatting and handling

- **BookingSummary.tsx (65 errors)**
  - Fix booking data structure typing
  - Ensure price calculation is type-safe
  - Fix prop passing to sub-components

- **DateSelection.tsx (63 errors)**
  - Fix date handling libraries
  - Implement proper calendar typing
  - Fix date comparison functions

- **CustomerInfo.tsx (29 errors)**
  - Fix form validation typing
  - Ensure proper error message handling
  - Fix form submission types

#### 4. Botanical Components
- **BotanicalElement.tsx (6 errors)**
  - Fix SVG prop types
  - Ensure sacred geometry calculations are typed
  - Fix animation prop types

- **botanicalUtils.ts (22 errors)**
  - Add proper typing for geometry functions
  - Ensure SVG path calculations are type-safe
  - Fix export types for utility functions

- **OliveLeaf.tsx and OliveBranch.tsx**
  - Fix SVG viewBox and path types
  - Ensure animations are properly typed
  - Fix sacred geometry ratio calculations

#### 5. Navigation Components
- **NavBar.tsx (35 errors)**
  - Fix theme accessor typing
  - Ensure navigation items are properly typed
  - Fix responsive behavior typings

- **Sidebar.tsx (52 errors)**
  - Fix animation and transition props
  - Ensure sidebar state is properly typed
  - Fix theme accessors for styling

- **NavigationItem.tsx (24 errors)**
  - Fix link props typing
  - Ensure active state handling is type-safe
  - Fix icon rendering props

### D. Pages and Sections

#### Pages with highest error counts
- **Blog.tsx (92 errors)**
  - Fix blog post data structure typing
  - Ensure pagination is properly typed
  - Fix date formatting and filtering

- **About.tsx (58 errors)**
  - Fix section component prop passing
  - Ensure animation components are properly typed
  - Fix testimonial and team member data structures

- **Contact.tsx (24 errors)**
  - Fix form validation and submission types
  - Ensure map component is properly typed
  - Fix contact information structure

## Implementation Steps

For each file with errors:

1. **Analyze errors first**
   ```bash
   npx tsc --jsx react --noEmit path/to/file.tsx
   ```

2. **Fix imports**
   - Replace path aliases with relative paths
   - Add missing React imports

3. **Fix component prop types**
   - Add or update interfaces for component props
   - Ensure props match expected types

4. **Fix hook usage**
   - Replace React.useState with imported useState
   - Fix any dependency arrays in useEffect

5. **Verify sacred geometry principles**
   - Ensure all mathematical constants are preserved
   - Maintain PHI, PHI_INVERSE, and FIBONACCI references

6. **Test incrementally**
   - Test each file after fixing
   - Verify no new errors are introduced

7. **Document patterns**
   - Note successful patterns for similar files
   - Update this document with new error patterns discovered

## First Implementation Batch

Based on our success with animation components, fix these files first:

1. src/animation/Sequence.tsx (1 remaining error)
2. src/context/AnimationContext.tsx (3 errors)
3. src/design-system/theme/globalStyles.ts (15 errors)
4. src/design-system/theme/theme.ts (39 errors)
5. src/design-system/tokens/* (remaining token files)

## Second Implementation Batch

Fix these high-impact, moderate-error components:

1. src/design-system/components/animation/* (all remaining animation components)
2. src/design-system/components/layout/* (layout components with fewer errors)
3. src/hooks/useMediaQuery.ts, useReducedMotion.ts (1 error each)
4. src/components/section/* (lower error count section components)

## Third Implementation Batch

Fix components with high error counts:

1. src/design-system/components/booking/steps/BookingConfirmation.tsx (67 errors)
2. src/design-system/components/booking/steps/BookingSummary.tsx (65 errors)
3. src/design-system/components/booking/steps/DateSelection.tsx (63 errors)
4. src/design-system/components/navigation/Sidebar.tsx (52 errors)

## Progress Tracking

- Total initial errors: 2727
- Errors fixed so far: ~15 (animation components)
- Remaining errors: ~2712
- Estimated completion: Iterative batches of 100-200 errors per session

## Preventative Measures

To avoid introducing new errors:

1. **Consistent typing patterns**
   - Use React.FC<Props> for function components
   - Use forwardRef<HTMLElementType, Props> for components with refs
   - Use type over interface for simpler type definitions

2. **Consistent import patterns**
   - Use relative imports instead of path aliases
   - Import all React hooks explicitly
   - Use type imports for type-only imports

3. **Sacred geometry principles**
   - Always use typed constants for sacred values
   - Maintain mathematical precision in calculations
   - Document the sacred geometry principles applied


