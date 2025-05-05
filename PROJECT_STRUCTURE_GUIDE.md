# Project Structure Guide for Recovery Office

## Introduction

This guide outlines the recommended project structure for the Recovery Office website. Following this structure will ensure consistent organization, maintainability, and ease of navigation throughout the codebase. The structure is designed to support the sacred geometry principles and component architecture that define the Recovery Office design system.

## Root Directory Structure

```
recovery-office/
├── public/                  # Static assets
│   ├── assets/              # Images, fonts, etc.
│   ├── favicon.ico          # Favicon
│   └── index.html           # HTML entry point
├── src/                     # Source code
│   ├── animation/           # Animation utilities
│   ├── components/          # React components
│   ├── constants/           # Application constants
│   ├── context/             # React context providers
│   ├── design-system/       # Design system components
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── services/            # API and service functions
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root application component
│   ├── index.tsx            # Application entry point
│   └── routes.tsx           # Route definitions
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore file
├── .prettierrc              # Prettier configuration
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
└── jest.config.js           # Jest testing configuration
```

## Key Directories Explained

### `src/components/`

Contains all React components organized by feature or functionality. Each component folder should contain the component file, styles, tests, and any related utilities or sub-components.

```
components/
├── awards/                  # Award and recognition components
│   ├── AwardBadge.tsx       # Individual award badge component
│   ├── AwardsShowcase.tsx   # Award showcase component
│   └── index.ts             # Export file for awards components
├── booking/                 # Booking system components
│   ├── BookingControls.tsx  # Navigation controls for booking
│   ├── BookingInterface.tsx # Main booking interface
│   ├── ProgressIndicator.tsx # Step progress indicator
│   ├── steps/               # Individual booking steps
│   │   ├── ServiceSelection.tsx
│   │   ├── DateSelection.tsx
│   │   ├── ClientInfo.tsx
│   │   └── Confirmation.tsx
│   ├── validation/          # Form validation schemas
│   └── index.ts             # Export file for booking components
└── ... (other component categories)
```

### `src/design-system/`

Contains core design system components and architectural elements that implement the sacred geometry principles. This is the foundation of the application's visual language.

```
design-system/
├── botanical/               # Botanical SVG components
│   ├── BotanicalElement.tsx # Unified botanical component
│   ├── FlowerOfLife.tsx     # Flower of Life component
│   ├── OliveBranch.tsx      # Olive Branch component
│   ├── VesicaPiscis.tsx     # Vesica Piscis component
│   ├── botanical.types.ts   # Type definitions for botanical components
│   └── index.ts             # Export file for botanical components
├── components/              # Core UI components
│   ├── animation/           # Animation components
│   ├── button/              # Button components
│   ├── core/                # Core UI elements
│   ├── form/                # Form components
│   ├── layout/              # Layout components
│   └── typography/          # Typography components
├── theme/                   # Theme configuration
│   ├── ThemeProvider.tsx    # Theme provider component
│   ├── theme.ts             # Theme definition
│   └── index.ts             # Export file for theme
├── tokens/                  # Design tokens
│   ├── colors.ts            # Color definitions
│   ├── spacing.ts           # Spacing system
│   └── typography.ts        # Typography system
├── types/                   # Type definitions
│   ├── styled.types.ts      # Types for styled components
│   └── theme.types.ts       # Theme type definitions
├── sacred-constants.ts      # Sacred geometry constants used in design system
└── index.ts                 # Export file for design system
```

### `src/constants/`

Contains application-wide constants, including sacred geometry values.

```
constants/
├── sacred-geometry.ts       # Sacred geometry mathematical constants
├── routes.ts                # Route path constants
├── api.ts                   # API endpoint constants
└── content.ts               # Text content constants
```

### `src/pages/`

Contains page-level components that compose the site's different views.

```
pages/
├── Home/                    # Home page
│   ├── Home.tsx             # Home page component
│   ├── sections/            # Home page sections
│   └── index.ts             # Export file
├── Services/                # Services page
├── About/                   # About page
├── Booking/                 # Booking page
├── Blog/                    # Blog page
├── Contact/                 # Contact page
└── NotFound/                # 404 page
```

### `src/animation/`

Contains animation components and utilities based on sacred geometry principles.

```
animation/
├── FadeIn.tsx               # Fade in animation component
├── ScrollReveal.tsx         # Scroll-triggered animation component
├── SlideIn.tsx              # Slide in animation component
├── ScaleFade.tsx            # Combined scale and fade component
├── ParallaxLayer.tsx        # Parallax scrolling layer component
├── FibonacciStagger.tsx     # Fibonacci sequence staggered animation
├── animations.ts            # Animation utility functions
└── index.ts                 # Export file for animation components
```

## File Naming Conventions

1. **Components**: Use PascalCase for component files (`ButtonGroup.tsx`)
2. **Utilities and Hooks**: Use camelCase for utility files (`useMediaQuery.ts`)
3. **Constants**: Use kebab-case for constant files (`sacred-geometry.ts`)
4. **Types**: Use PascalCase for type definitions, often prefixed with `I` for interfaces (`IButtonProps.ts`)
5. **Index files**: Always named `index.ts` for exporting components from a directory

## Component File Structure

Each component should follow this internal structure:

```typescript
// 1. External imports
import React from 'react';
import styled from 'styled-components';

// 2. Internal imports from design system or constants
import { PHI, PHI_INVERSE } from '../../constants/sacred-geometry';
import { Button } from '../../design-system/components/button';

// 3. Component type definitions
interface ComponentProps {
  /** Property description */
  propertyName: string;
  /** Optional property description */
  optionalProperty?: number;
}

// 4. Styled component definitions
const ComponentContainer = styled.div`
  /* Styles based on sacred geometry */
  width: 100%;
  padding: ${PHI_INVERSE * 100}px;
`;

// 5. Component implementation
const Component: React.FC<ComponentProps> = ({ propertyName, optionalProperty = 0 }) => {
  // Component logic here
  
  return (
    <ComponentContainer>
      {/* Component rendering */}
    </ComponentContainer>
  );
};

// 6. Default export
export default Component;
```

## Export Pattern

To ensure clean imports, use index files to export components from each directory:

```typescript
// components/booking/index.ts
export { default as BookingInterface } from './BookingInterface';
export { default as BookingControls } from './BookingControls';
export { default as ProgressIndicator } from './ProgressIndicator';

// Also export types for better TypeScript support
export type { BookingState } from './types';
```

This allows for clean imports like:

```typescript
import { BookingInterface, BookingControls } from '../components/booking';
```

## Styled Components Pattern

When using styled-components, follow these patterns:

1. Use the transient prop pattern with $ prefix for styling props that shouldn't be passed to the DOM:

```typescript
interface ButtonProps {
  $variant: 'primary' | 'secondary';
  $size: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ $variant, theme }) => 
    $variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  padding: ${({ $size }) => 
    $size === 'sm' ? '0.5rem' : 
    $size === 'md' ? '1rem' : 
    '1.5rem'};
`;
```

2. Prefer composition over inheritance:

```typescript
const BaseButton = styled.button`
  /* Base styles */
`;

const PrimaryButton = styled(BaseButton)`
  /* Primary button styles */
`;
```

## Import Organization

Organize imports in this order:

1. External libraries (React, styled-components, etc.)
2. Internal constants and types
3. Internal components
4. Internal utilities and hooks
5. Styles or assets

## Environmental Configuration

Use environment variables for configuration that differs between environments:

```
// .env.development
REACT_APP_API_URL=http://localhost:3000/api

// .env.production
REACT_APP_API_URL=https://api.recoveryoffice.com
```

Access environment variables with:

```typescript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Testing Structure

Each component should have a corresponding test file in the same directory:

```
Button.tsx            # Component
Button.test.tsx       # Unit tests
Button.stories.tsx    # Storybook stories (if using Storybook)
```

## Working with Sacred Geometry

When implementing components that rely on sacred geometry principles:

1. Import constants from `constants/sacred-geometry.ts`
2. Use the `sacredGeometry` utility functions for calculations
3. Document the geometric relationships in comments

Example:

```typescript
// Import sacred geometry constants
import { PHI, PHI_INVERSE, FIBONACCI } from '../../constants/sacred-geometry';

// Create a container with golden ratio proportions
const GoldenContainer = styled.div`
  // Width to height follows the golden ratio
  width: 100%;
  height: calc(width / ${PHI});
  
  // Inner content positioned at golden ratio points
  .content {
    position: absolute;
    top: ${PHI_INVERSE * 100}%; // 61.8% from top
    left: ${PHI_INVERSE * 100}%; // 61.8% from left
  }
  
  // Spacing based on Fibonacci sequence
  padding: ${FIBONACCI[7]}px; // 13px
  margin-bottom: ${FIBONACCI[8]}px; // 21px
`;
```

## Conclusion

Following this project structure and organization will ensure the Recovery Office website maintains a consistent, maintainable codebase that properly implements sacred geometry principles throughout the application. The structure is designed to make development more intuitive and to help maintain the visual harmony that defines the Recovery Office brand. 