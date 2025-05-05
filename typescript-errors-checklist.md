# TypeScript Errors Checklist

This document organizes all TypeScript errors found in the Recovery Office project to help systematically fix them following sacred geometry principles.

## Component Props Issues

### Children Prop Missing
- [x] Box.tsx - Property 'children' does not exist on type 'BoxProps'
- [x] Container.tsx - Property 'children' does not exist on type 'ContainerProps'
- [x] Stack.tsx - Property 'children' does not exist on type 'StackProps'
- [x] FormLabel.tsx - Property 'children' does not exist on type 'FormLabelProps'
- [x] FormError.tsx - Property 'children' does not exist on type 'FormErrorProps'
- [x] Button.tsx - Type '{ children: ...; }' is not assignable to 'BoxProps'
- [x] AspectRatio.tsx - Property 'children' does not exist on type '...'
- [x] BotanicalElement.tsx - Property 'children' does not exist on type '...'
- [x] ButtonGroup.tsx - Property 'children' does not exist on type '...'
- [x] ParallaxLayer.tsx - Property 'children' does not exist on type '...'
- [x] FooterSocial.tsx - Property 'children' does not exist on type '...'
- [x] RegulatorBadge.tsx - Property 'children' does not exist on type '...'
- [x] ContactCTA.tsx - Property 'children' does not exist on type '...'
- [x] Section.tsx - Type '{ children: ... }' is not assignable to ...
- [x] SectionDivider.tsx - Property 'children' does not exist on type '...'
- [x] List.tsx - Property 'children' does not exist on type '...'

### Property Name Mismatches
- [x] Button.tsx - Property 'disabled' does not exist on type '...'. Did you mean 'isDisabled'?
- [ ] Navigation.tsx - Property 'align' does not exist on type '...'
- [x] Flex.tsx - Property 'direction/align/justify/wrap' does not exist on type 'FlexProps'
- [x] Badge.tsx - Property 'colorScheme' does not exist on type 'BadgeProps'
- [ ] Footer.tsx - Property 'tagline' does not exist on type 'FooterProps'
- [x] ContactCTA.tsx - Property 'backgroundColor' does not exist on type 'SectionProps'
- [ ] ServicesOverview.tsx - Property 'backgroundColor' does not exist on type '...'
- [ ] StickyNavigation.tsx - error TS6133: 'NavBarItem/NavBarCTA' is declared but not used
- [ ] HomeHero.tsx - Property 'darkest' does not exist on 'colors' object
- [ ] HomeHero.tsx - Property 'main/dark' does not exist on 'accent' object
- [ ] ButtonGroup.tsx - 'size' does not exist on type
- [ ] ServicesProcess.tsx - Property 'main' does not exist on type '{ 50: string; 100: string... }'

### Incorrect Type Assignments
- [ ] HeadingProps - Type 'boolean' is not assignable to type 'string'
- [ ] TextProps - Type issue with 'noOfLines' property
- [ ] SectionTitle.tsx - Type '"display" | "h1" | "h2" | "h3"' is not assignable to 'TypographyVariant'
- [ ] Text.tsx - Type issue with HTMLElement vs HTMLDivElement
- [ ] Span.tsx - Type '"xs" | "sm" | "md" | "lg" | "xl" | "base" | undefined' is not assignable to '"xs" | "sm" | "md" | "lg" | "xl" | "base"'
- [ ] DatePickerProps - Type 'Date' is not assignable to type 'string | number'
- [ ] TimePickerProps - Type '(time: string | null) => void' is not assignable to 'ChangeEventHandler'
- [ ] ToastProps - Type '"top" | "bottom" | ...' is not assignable to '"fixed" | "static" | ...'
- [ ] IconButton.tsx - Property 'icon' is missing in type
- [x] ContactCTA.tsx - Type '"large"' is not assignable to type '"sm" | "md" | "lg"'
- [ ] BotanicalDecorator.tsx - Property 'variant' does not exist on 'BotanicalElementProps'
- [ ] SectionHeading/Section.tsx - Type 'number' is not assignable to 'AnimationDuration'
- [ ] AwardsSection.tsx - Type 'string' is not assignable to 'AwardBadgeVariant'

## FIBONACCI/Sacred Geometry Issues

### Index Issues
- [x] Breakpoints.ts - Property '10/14/15/16' does not exist on FIBONACCI object
- [x] List.tsx - Property '4/6/7' does not exist on FIBONACCI object
- [x] Badge.tsx - Property '4/6/7' does not exist on FIBONACCI object
- [x] StickyNavigation.tsx - Property '6/7/9' does not exist on FIBONACCI object
- [x] Button.tsx - Property '4' does not exist on FIBONACCI object
- [x] LeafPattern.tsx - Property '7' does not exist on FIBONACCI object
- [x] useAnimationSequence.ts - Property 'slice' does not exist on FIBONACCI object
- [x] animationUtils.ts - Cannot index FIBONACCI with number type
- [ ] getFibonacciByIndex.ts - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type...

### Type Issues
- [ ] Theme.ts - Type '{ 1: number, 2: number, ... }' is missing properties from type 'number[]'
- [ ] Theme.ts - Type mismatch with SACRED_EASINGS

## Import/Module Issues

### Missing Modules
- [x] Sacred geometry imports in Services sections - Fix incorrect import paths (fixed with fix-sacred-geometry-imports-phase3.ps1)
- [ ] ParallaxLayer.tsx - Cannot find module '../../../constants/sacred-geometry'
- [ ] Animation components - Various paths to sacred-geometry missing
- [ ] BotanicalElement.tsx - Cannot find module '../layout'
- [ ] App.tsx - Cannot find module 'react-router-dom'
- [ ] Routes.tsx - Cannot find module 'react-router-dom'
- [ ] useAutoBreadcrumbs.ts - Cannot find module 'react-router-dom'
- [ ] AwardsSection.tsx - Cannot find module '../../../design-system/components/typography/SectionTitle'
- [ ] Navigation.tsx - Module has no exported member 'Link'
- [ ] ServicesOverview.tsx - Cannot find module '../../../components/services'
- [ ] Common/index.ts - Cannot find various modules
- [ ] FooterSocial.tsx - Cannot find module '../../design-system/icons'
- [ ] SectionDivider.tsx - Cannot find module '../../design-system/components/botanical/GoldenSpiral'
- [ ] Page/index.ts - Cannot find legal page modules
- [ ] services/api.ts - Cannot find module 'axios'

### Incorrect Exports/Imports
- [ ] Animation/index.ts - Module has no exported member 'default'
- [ ] Components/booking/index.ts - Cannot find module './BookingProgress'
- [ ] Design-system/components/booking/index.ts - No exported member 'default'
- [ ] Context/index.ts - Module has no exported member 'AnimationPreferences'
- [ ] Animation components - Import conflicts and invalid paths
- [x] utils/index.ts - Module has already exported a member named 'generateGoldenSpiralPoints'/'getFibonacciValues'
- [x] types/index.ts - Module has already exported a member named 'clientInfoSchema'
- [x] types/index.ts - Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'

### Import Paths Issues
- [x] Services sections paths to sacred-geometry - Long and incorrect paths like '../../../../../../../../../../constants/sacred-geometry'
- [ ] Various components - Incorrect relative paths to constants, utils, and other modules
- [ ] Design system components - Incorrect paths to layout, typography, and other components

## Browser API Compatibility Issues

- [ ] useReducedMotion.ts - Method 'addListener' is deprecated in MediaQueryList
- [ ] useParallaxScroll.ts - Type 'RefObject<HTMLElement | null>' not assignable to 'RefObject<HTMLElement>'

## Context/State Management Issues

- [ ] ThemeContext/ThemeProvider - Property 'theme' is missing in type '{}'
- [ ] BookingContext.tsx - Type mismatch issues with form state
- [ ] CustomerInfoForm.tsx - Properties don't exist on 'BookingContextType'

## Miscellaneous Issues

- [ ] Various files - Unused imports and variables (TS6133 errors)
- [ ] Container.tsx - Type '{ _xs: number; _md: number; _lg: number; }' not assignable to 'string | number'
- [ ] spacing.ts - Property 'xxxs' does not exist on spacing object
- [ ] botanicalUtils.ts - Styled-components type issues
- [ ] Section.tsx - Component type issues
- [x] api.types.ts - Type 'Record<string, any> | undefined' not assignable to 'Record<string, any>'
- [ ] SlideIn.tsx - useState reference issues
- [ ] booking.ts - Type 'TimeSlot | undefined' not assignable to 'TimeSlot'
- [x] All JSX namespace issues in SVG components
- [ ] utils/propsMapping.ts - Property 'isDisabled'/'alignment' does not exist on type 'Partial<T> & Record<string, any>'
- [x] types/index.ts - Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'

## Ongoing Work Checklist

### Priority 1: Fix Component Props Structure ✓
- [x] Add children prop to all component types
- [x] Update Box component to handle children correctly
- [x] Fix property name inconsistencies (disabled vs isDisabled, etc.)
- [x] SectionContentProps is now properly exported and SectionContent is type-safe.

### Priority 2: Fix FIBONACCI Access ✓
- [x] Update FIBONACCI object to include all needed indices or
- [x] Create utility function to safely access FIBONACCI values

### Priority 3: Fix Import Paths ⟳
- [x] Fix sacred geometry imports with fix-sacred-geometry-imports-phase3.ps1
- [ ] Fix remaining import paths for other modules and components

### Priority 4: Fix Type Extensions
- [ ] Fix interface extensions for proper type inheritance
- [ ] Correct type definitions for form components

### Priority 5: Fix Browser Compatibility
- [ ] Update MediaQueryList usage to current standards
- [ ] Fix ref typing issues 

### Priority 6: Fix Duplicate Exports ✓
- [x] Resolve ambiguous exports in index.ts files for clientInfoSchema
- [x] Fix utility function export conflicts
- [x] Fix type export issues with isolatedModules

### Priority 7: Clean Up Unused Imports
- [ ] Remove unused imports and declarations to fix TS6133 errors 