# TypeScript Error Fixing Plan

## Overview

This document outlines a systematic approach to fixing the 2,684 TypeScript errors across 223 files in the Recovery Office codebase. The plan prioritizes fixes based on dependency relationships and common error patterns to minimize the risk of introducing new errors.

## Common Error Patterns

Based on analysis of the codebase, here are the most common error patterns:

1. **Missing or incorrect imports**: Many errors are related to undefined variables that are actually imported modules.
2. **Type definition issues**: Missing interfaces, incorrect types, or usage of `any`.
3. **Prop type errors**: Components receiving props without proper type definitions.
4. **Theme access errors**: Incorrect access to theme properties from styled-components.
5. **Sacred geometry constant errors**: Missing imports or incorrect usage of mathematical constants.
6. **Context usage errors**: Incorrect access to context values or missing provider values.
7. **API and service interface mismatches**: Misalignment between service implementation and types.
8. **React component typing issues**: Missing return types or incorrect event handler types.
9. **Validation schema issues**: Errors in Zod schema definitions.

## Fixing Approach

### Phase 1: Foundational Types and Constants

Start by fixing core type definitions and constants that other files depend on:

1. **Sacred geometry constants**: Fix `src/constants/sacred-geometry.ts` and `src/constants/animation-timing.ts`
2. **Core type definitions**: Fix types in `src/types/` directory
3. **Theme definitions**: Fix `src/design-system/theme/theme.ts` and token files

### Phase 2: Core Utilities and Hooks

Fix utility functions and hooks that are used throughout the application:

1. **Utility functions**: Fix files in `src/utils/`
2. **Custom hooks**: Fix files in `src/hooks/`

### Phase 3: Context Providers and Services

Fix the context providers and services that manage application state:

1. **Context providers**: Fix files in `src/context/`
2. **API services**: Fix files in `src/services/`

### Phase 4: Design System Components

Fix the design system components in dependency order:

1. **Layout components**: Box, Flex, Grid, etc.
2. **Typography components**: Text, Heading, etc.
3. **Botanical components**: SVG elements based on sacred geometry
4. **Animation components**: FadeIn, ScaleIn, etc.
5. **Interactive components**: Button, Input, Form elements
6. **Feedback components**: Toast, Modal, etc.
7. **Navigation components**: Links, Navbar, etc.

### Phase 5: Application Components

Fix application-specific components in dependency order:

1. **Common components**: ErrorBoundary, etc.
2. **Section components**: Section, SectionDivider, etc.
3. **Layout components**: Header, Footer, etc.
4. **Feature components**: Hero, Awards, etc.
5. **Booking components**: BookingSteps, Forms, etc.

### Phase 6: Pages and Examples

Fix page components and example files:

1. **Page components**: Home, About, Services, etc.
2. **Example components**: For showcasing the design system

### Phase 7: Tests and Documentation

Fix test files and improve TypeScript documentation:

1. **Test files**: Fix TypeScript errors in test files
2. **Documentation**: Update JSDoc comments

## Error Fixing Guidelines

When fixing errors, follow these principles:

1. **Type Safety Excellence**
   - Never use the `any` type - create proper interfaces or union types instead
   - Use properly constrained generics for reusable components
   - Implement proper type narrowing with discriminated unions
   - Add comprehensive JSDoc comments to explain complex types

2. **Error Prevention Hierarchy**
   - Design components to make errors impossible rather than handling them
   - Validate inputs early and provide clear error messages
   - Use TypeScript's exhaustive checking for all switch statements
   - Always use optional chaining (?.) and nullish coalescing (??) operators

3. **Component Architecture**
   - Ensure each component has explicit prop interfaces
   - Follow React's unidirectional data flow principles
   - Keep state as local as possible, lifting only when necessary

4. **Sacred Geometry Implementation**
   - Ensure all mathematical constants are imported correctly
   - Maintain precision in sacred geometry calculations
   - Apply PHI consistently for proportional relationships
   - Use Fibonacci sequence for spacing values

## Common Fixes by Error Type

### Missing Import Fixes

```typescript
// Before
const Box = styled.div`
  width: ${PHI * 100}px;
`;

// After
import { PHI } from '../../constants/sacred-geometry';

const Box = styled.div`
  width: ${PHI * 100}px;
`;
```

### Prop Type Fixes

```typescript
// Before
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

// After
interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

### Theme Access Fixes

```typescript
// Before
const StyledBox = styled.div`
  color: ${props => props.theme.colors.primary};
`;

// After
const StyledBox = styled.div`
  color: ${props => props.theme.colors.primary[500]};
`;
```

### Context Usage Fixes

```typescript
// Before
const { state } = useContext(BookingContext);
const { selectedService } = state;

// After
const { state } = useContext(BookingContext);
const selectedService = state?.selectedService;
```

### Event Handler Fixes

```typescript
// Before
const handleChange = (e) => {
  setValue(e.target.value);
};

// After
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

## Priority Files to Fix

Based on dependency relationships, these files should be fixed first:

1. `src/constants/sacred-geometry.ts` (1 error)
2. `src/constants/animation-timing.ts` (1 error)
3. `src/types/booking.types.ts` (1 error)
4. `src/context/AnimationContext.tsx` (2 errors)
5. `src/context/ThemeContext.tsx` (4 errors)
6. `src/design-system/theme/theme.ts` (6 errors)
7. `src/hooks/useMediaQuery.ts` (1 error)
8. `src/hooks/useReducedMotion.ts` (1 error)
9. `src/utils/animation.ts` (1 error)
10. `src/utils/apiRetry.ts` (1 error)

## Approach for Complex Components

For components with many errors (30+), follow this approach:

1. Start by fixing the prop interfaces
2. Fix type imports
3. Address state management issues
4. Fix event handlers
5. Address theme access issues
6. Fix render return types

## Tracking Progress

Use this command to check remaining errors after fixing each file:
```bash
tsc --noEmit
```

## Final Validation

After fixing all errors, perform these validation steps:

1. Run `tsc --noEmit` to verify zero TypeScript errors
2. Run the application locally to check for runtime errors
3. Run any existing unit and integration tests
4. Manually test key user flows

By following this structured approach, we can systematically fix all TypeScript errors while maintaining code quality and preventing the introduction of new issues. 