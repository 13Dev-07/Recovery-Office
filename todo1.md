# Updated TypeScript Error Fixing Plan

Based on the current 1891 errors in 227 files (after fixing validation schema files), I'll create an updated and more detailed checklist.

## Error Distribution Analysis

```
Components with most errors:
- Booking system: ~450 errors
- Pages: ~270 errors 
- Design system components: ~250 errors
- Examples: ~230 errors
- Header/Footer/Hero components: ~110 errors
```

## 1. Core Component Fixes (Header & Navigation) - 37 errors

- [x] Header.tsx (8 errors)
  - [x] Fix SACRED_SPACING usage
  - [x] Correct PHI_INVERSE handling
  - [x] Ensure proper typing for HeaderStyleProps

- [x] MobileMenu.tsx (13 errors)
  - [x] Fix animation timing constants
  - [x] Correct theme typing
  - [x] Fix styled components props

- [x] Navigation.tsx (2 errors)
- [x] NavigationItem.tsx (8 errors)
- [x] RegulatorBadge.tsx (6 errors)

## 2. Booking System Components (366 errors)

### 2.1 Main Booking Components (155 errors)
- [ ] BookingInterface.tsx (51 errors)
  - [ ] Fix Form validation issues
  - [ ] Correct context typing
  - [ ] Fix state management issues

- [ ] ConfirmationStep.tsx (80 errors)
  - [ ] Fix validation schema imports
  - [ ] Correct form control typing
  - [ ] Fix data handling

- [ ] DateSelectionStep.tsx (40 errors)
- [ ] MobileCalendarModal.tsx (32 errors)
- [ ] BookingSummary.tsx (18 errors)
- [ ] CustomerInformation.tsx (16 errors)
- [ ] ServiceSelection.tsx/ClientInfo.tsx/Others (Combined 54 errors)

### 2.2 Booking System Tests (74 errors)
- [ ] All test files (74 combined errors)
  - [ ] Fix React import patterns
  - [ ] Update test utilities
  - [ ] Fix mock implementations

### 2.3 Booking Validation (13 errors - FIXED ✓)
- [x] clientInfo.schema.ts (1 error) - FIXED
  - [x] Fixed validateField function to avoid using schema.shape property
  - [x] Added special handling for boolean literal fields
  - [x] Used test object with default values for validation
  
- [x] clientInformation.schema.ts (3 errors) - FIXED
  - [x] Fixed validateField function to avoid using schema.shape property
  - [x] Added special handling for boolean literal fields 
  - [x] Used test object with default values for validation

- [x] confirmationStep.schema.ts (2 errors) - FIXED
  - [x] Fixed validateField function to avoid using schema.shape property
  - [x] Added special handling for boolean literal fields
  - [x] Used Promise-based validation with proper error handling

- [x] dateSelection.schema.ts (2 errors) - FIXED
  - [x] Fixed validateField function to avoid using schema.shape property
  - [x] Used test object with default values for validation

- [x] serviceSelection.schema.ts (2 errors) - FIXED
  - [x] Fixed validateField function to avoid using schema.shape property
  - [x] Used test object with default values for validation

- [x] index.ts (5 errors) - FIXED
  - [x] Fixed export naming to avoid conflicts
  - [x] Improved comments for clarity
  - [x] Used explicit named exports

### 2.4 BookingContext (19 errors - FIXED ✓)
- [x] BookingContext.tsx (19 errors) - FIXED
  - [x] Created a separate useToast hook to avoid JSX imports
  - [x] Fixed Set spread operator by using Array.from
  - [x] Fixed CLIENT_INFO to CLIENT_INFORMATION enum value
  - [x] Replaced JSX with React.createElement for BookingProvider
  - [x] Added compatibility for different toast calling patterns

- [ ] Context tests (16 errors)
  - [ ] BookingContext.test.tsx has JSX errors but requires larger test refactoring
  - [ ] Defer fixing this until we update the Jest configuration to handle JSX properly

## 3. Design System Components (253 errors)

### 3.1 Design System Booking Components (148 errors)
- [ ] Booking steps components (112 errors)
  - [ ] CustomerInfo.tsx (25 errors)
  - [ ] DateSelection.tsx (28 errors)
  - [ ] BookingConfirmation.tsx (25 errors)
  - [ ] BookingSummary.tsx (23 errors)
  - [ ] Other booking components (47 errors)

### 3.2 Feature Sections (68 errors)
- [ ] Hero.tsx (22 errors)
- [ ] Team.tsx (15 errors)
- [ ] Testimonials.tsx (13 errors)
- [ ] Services.tsx (10 errors)
- [ ] Contact.tsx (8 errors)

### 3.3 Feedback Components (37 errors)
- [ ] Toast.tsx (20 errors)
- [ ] Modal.tsx (16 errors)
- [ ] Badge.tsx & LoadingScreen.tsx (7 errors)

## 4. Page Components (198 errors)

### 4.1 Blog & FAQ Pages (57 errors)
- [ ] Blog.tsx (43 errors)
- [ ] FAQ.tsx (14 errors)

### 4.2 Contact Page (67 errors)
- [ ] Contact.tsx (24 errors)
- [ ] Contact sections (43 combined errors)

### 4.3 About Page (63 errors)
- [ ] About.tsx (21 errors)
- [ ] About sections (42 combined errors)

### 4.4 Home Page (36 errors)
- [ ] Home.tsx (13 errors)
- [x] HomeAbout.tsx
- [ ] HomeCallToAction.tsx (10 errors)
- [ ] Other home sections (13 combined errors)

## 5. Hero Components (44 errors)
- [ ] HeroContent.tsx (25 errors)
- [ ] HeroBotanicals.tsx (15 errors)
- [ ] Hero.tsx (4 errors)

## 6. Footer Components (29 errors)
- [ ] FooterNewsletter.tsx (10 errors)
- [ ] Footer.tsx (9 errors)
- [ ] FooterLinks.tsx (6 errors)
- [ ] FooterSocial.tsx (4 errors)

## 7. Examples (236 errors)
- [ ] NavigationComponentsShowcase.tsx (46 errors)
- [ ] AspectRatioExample.tsx (31 errors)
- [ ] BookingExample.tsx (32 errors)
- [ ] TypographyExample.tsx (30 errors)
- [ ] StackExample.tsx (27 errors)
- [ ] Other example files (70 combined errors)

## 8. Common Error Patterns To Fix Systematically

1. **React Import Pattern**: 
   - [ ] Check that all files use `import * as React from 'react'`
   - [ ] Ensure all React hooks have `React.` prefix

2. **Animation Timing Constants**:
   - [ ] Replace all instances of `SACRED_TIMING` with `ANIMATION_TIMING`
   - [ ] Ensure proper timing properties are used (standard, quick, etc.)

3. **Theme Typing Issues**:
   - [ ] Add proper DefaultTheme imports
   - [ ] Fix theme access patterns (e.g., `theme.colors.primary[500]` vs `theme.colors.primary`)
   - [ ] Use proper styled-component prop access: `${props => props.theme.colors...}`

4. **Sacred Geometry Constants**:
   - [ ] Move PHI_INVERSE definitions to sacred-geometry constants file
   - [ ] Fix imports for getFibonacciByIndex
   - [ ] Replace hardcoded values with sacred geometry constants

5. **Form Validation**:
   - [x] Fix Zod schema imports
   - [x] Update validation schema exports
   - [x] Fix form validation approaches to avoid schema.shape access

6. **JSX and Set Spread Issues**:
   - [x] Replace JSX usage in non-JSX files with React.createElement
   - [x] Replace Set spread (`[...set]`) with Array.from(set)
   - [x] Create helper hooks for components that might be used in non-JSX contexts

## Implementation Strategy

1. Fix in this order:
   - ✓ Core constants and utilities
   - ✓ Validation schemas
   - ✓ Context components
   - [ ] Common components (Header, Footer, Hero)
   - [ ] Design system components
   - [ ] Booking system components
   - [ ] Page components
   - [ ] Examples

2. After fixing each component group:
   - Run `npx tsc --noEmit` to check progress
   - Update the todo list with remaining errors

3. Apply systematic fixes for common patterns:
   - Write scripts to automatically fix common issues
   - Run focused fixes on high-error components first

## Success Criteria

For each file to be considered fixed:
- Zero TypeScript errors when running `tsc --noEmit`
- Proper imports for all dependencies
- Correct usage of theme variables and constants
- No usage of `any` type

## Lessons Learned from Validation Schema Fixes

The key approach for fixing Zod validation schemas:

1. Never access `schema.shape` property directly as it's not guaranteed to exist on all schema types
2. For boolean literal fields (`z.literal(true)`), handle them separately with explicit conditions
3. Use full objects with default values instead of partial objects for validation
4. Create properly typed test objects with proper casting
5. Use `--skipLibCheck` when running TypeScript to avoid errors from third-party libraries
6. Ensure exports are properly named and don't conflict in index files

## Lessons Learned from BookingContext Fixes

The key approach for fixing BookingContext:

1. Avoid direct imports of JSX components in non-JSX files by creating specialized hooks
2. Replace Set spread (`[...set]`) with Array.from(set) to avoid downlevelIteration issues
3. Ensure enum values match exactly between usage and definition
4. Use React.createElement instead of JSX syntax in problematic files
5. Add compatibility layers for different function call patterns
6. Verify dependencies in callback arrays when refactoring
