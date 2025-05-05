# Recovery Office Directory Structure

This document provides the standardized directory structure for the Recovery Office project to improve organization, maintainability, and code quality.

## Directory Structure Overview

```
recovery-office/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── animation/       # Animation components
│   │   ├── awards/          # Award and recognition components
│   │   ├── booking/         # Booking system components
│   │   ├── botanical/       # Sacred geometry botanical elements
│   │   ├── common/          # Common reusable components
│   │   ├── demos/           # Demonstration components
│   │   ├── differentiators/ # Company differentiator components
│   │   ├── examples/        # Example components
│   │   ├── faq/             # FAQ components
│   │   ├── forms/           # Form components
│   │   ├── hero/            # Hero section components
│   │   ├── layout/          # Layout components
│   │   ├── navigation/      # Navigation components
│   │   ├── pages/           # Page components
│   │   ├── partners/        # Partner showcase components
│   │   ├── patterns/        # Visual pattern components
│   │   ├── performance/     # Performance-related components
│   │   ├── portal/          # Client portal components
│   │   ├── regulatory/      # Regulatory compliance components
│   │   ├── sections/        # Page section components
│   │   ├── security/        # Security feature components
│   │   ├── services/        # Service-related components
│   │   ├── statistics/      # Statistics and metrics components
│   │   ├── team/            # Team member components
│   │   └── trust/           # Trust indicator components
│   ├── constants/           # Application constants
│   │   └── sacred-geometry.ts # Sacred geometry constants
│   ├── design-system/       # Design system components
│   │   ├── botanical/       # Botanical design elements
│   │   ├── components/      # Core UI components
│   │   │   ├── animation/   # Animation components
│   │   │   ├── button/      # Button components
│   │   │   ├── core/        # Core UI elements
│   │   │   ├── data-display/ # Data display components
│   │   │   ├── feedback/    # User feedback components
│   │   │   ├── geometry/    # Sacred geometry components
│   │   │   ├── inputs/      # Form input components
│   │   │   ├── layout/      # Layout components
│   │   │   ├── navigation/  # Navigation components
│   │   │   ├── testimonials/ # Testimonial components
│   │   │   └── typography/  # Typography components
│   │   ├── layout/          # Layout utilities and components
│   │   ├── theme/           # Theme configuration
│   │   ├── tokens/          # Design tokens
│   │   └── types/           # TypeScript type definitions
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page definitions
│   ├── scripts/             # Utility scripts
│   ├── styles/              # Global styles
│   └── utils/               # Utility functions
└── types/                   # Global type definitions
```

## Key Files

### Sacred Geometry Types and Constants

- `src/constants/sacred-geometry.ts` - Core sacred geometry constants
- `src/design-system/sacred-constants.ts` - Design system sacred geometry constants
- `src/design-system/types/styled.types.ts` - TypeScript interfaces for styled components

### Core Layout Components

- `src/design-system/layout/Container.tsx` - Container component
- `src/design-system/layout/Grid.tsx` - Grid system
- `src/design-system/layout/GoldenRatioGrid.tsx` - Grid based on golden ratio
- `src/design-system/theme/ThemeProvider.tsx` - Theme provider with sacred geometry integration

## File Naming Conventions

1. **Component Files**: Use PascalCase (e.g., `Button.tsx`, `TestimonialCard.tsx`)
2. **Utility Files**: Use kebab-case (e.g., `sacred-geometry.ts`)
3. **Constants Files**: Use kebab-case (e.g., `color-constants.ts`)
4. **Hook Files**: Use camelCase with `use` prefix (e.g., `useMediaQuery.ts`)
5. **Type Files**: Use kebab-case (e.g., `styled.types.ts`)

## Import Patterns

To maintain consistency, imports should be organized in the following order:

```typescript
// 1. External imports
import React from 'react';
import styled from 'styled-components';

// 2. Sacred geometry constants
import { PHI, PHI_INVERSE, FIBONACCI } from '../../constants/sacred-geometry';

// 3. Type imports
import { ThemedProps, StyledComponentProps } from '../../types/styled.types';

// 4. Component imports
import Button from '../button/Button';

// 5. Relative file imports
import './styles.css';
```

## Component Structure Best Practices

1. **Interface Definitions First**: Define interfaces at the top of the file
2. **Use Standardized Interfaces**: Prefer `ThemedProps` and `StyledComponentProps` from central file
3. **Component Implementation**: Implement component after interfaces
4. **Styled Components Last**: Define styled components after the main component
5. **Default Export**: Export the main component as default

Example:

```typescript
import React from 'react';
import styled from 'styled-components';
import { PHI, FIBONACCI } from '../../constants/sacred-geometry';
import { ThemedProps } from '../../types/styled.types';

// Interface definitions
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

// Styled component interfaces
interface StyledButtonProps {
  $variant: string;
  $size: string;
}

// Component implementation
const Button = ({ variant = 'primary', size = 'medium', children }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} $size={size}>
      {children}
    </StyledButton>
  );
};

// Styled components
const StyledButton = styled.button<StyledButtonProps & ThemedProps>`
  padding: ${({ $size }) => 
    $size === 'small' ? FIBONACCI[3] : 
    $size === 'medium' ? FIBONACCI[4] : 
    FIBONACCI[5]}px;
  background-color: ${({ $variant, theme }) => 
    $variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
`;

export default Button;
```

## Index Files

Each directory should have an index.ts file that exports its components to simplify imports:

```typescript
// src/components/botanical/index.ts
export { default as FlowerOfLife } from './FlowerOfLife';
export { default as VesicaPiscis } from './VesicaPiscis';
export { default as FibonacciSpiral } from './FibonacciSpiral';
export { default as OliveBranch } from './OliveBranch';

// Types
export type { FlowerOfLifeProps } from './FlowerOfLife';
export type { VesicaPiscisProps } from './VesicaPiscis';
```

## Implementation Plan

1. **Fix TypeScript Errors**: Fix errors in existing files without restructuring
2. **Standardize Interfaces**: Implement standard interfaces across components
3. **Directory Restructuring**: Reorganize files according to this structure
4. **Create Index Files**: Add index.ts files to simplify imports
5. **Update Import Paths**: Update import paths to reflect new structure

## Conclusion

Following this directory structure and coding conventions will improve the organization, maintainability, and type safety of the Recovery Office codebase. All new components should adhere to these standards, and existing components should be gradually migrated to conform to this structure. 