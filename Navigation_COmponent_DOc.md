# Navigation Components Documentation

## Overview

The Recovery Office website uses a set of navigation components built following sacred geometry principles. This document explains the navigation components architecture, their usage, and the recent updates made to improve consistency and maintainability.

## Navigation Components

### 1. NavBar

The `NavBar` component is the primary navigation element, implementing:

- Golden ratio proportions for spacing and sizing
- Fibonacci-based padding and margins
- Optional botanical accents
- Regulatory credentials displayed at sacred geometry intersection points

```tsx
import { NavBar } from 'src/design-system/components/navigation';

// Basic usage
<NavBar 
  items={navigationItems} 
  logo={<Logo />}
  ctas={[{ label: 'Contact Us', path: '/contact', isPrimary: true }]}
  isTransparent={false}
  showBotanical={true}
/>
```

### 2. Breadcrumbs

The `Breadcrumbs` component provides contextual navigation with:

- Fibonacci-based spacing between items
- Optional botanical separator elements
- Automatic generation of breadcrumb items based on routes

```tsx
import { Breadcrumbs, useAutoBreadcrumbs } from 'src/design-system/components/navigation';

// Manual breadcrumbs
<Breadcrumbs 
  items={[
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Recovery Consultation', path: '/services/consultation', isActive: true }
  ]}
  showHomeIcon={true}
  botanicalSeparator={true}
/>

// Auto-generated breadcrumbs with custom hook
const breadcrumbItems = useAutoBreadcrumbs({
  '/': 'Home',
  '/services': 'Services',
  '/services/consultation': 'Recovery Consultation'
});

<Breadcrumbs 
  items={breadcrumbItems}
  showHomeIcon={true}
/>
```

### 3. StickyNavigation

The `StickyNavigation` component wraps the `NavBar` with scroll-based animations:

- Changes appearance based on scroll position
- Implements golden ratio animations for transitions
- Optional scroll progress indicator

```tsx
import { StickyNavigation } from 'src/components/layout';

<StickyNavigation
  items={navigationItems}
  logo={<Logo />}
  withBotanicalAccents={true}
  startTransparent={true}
  showScrollProgress={true}
  scrollIndicatorShape="fibonacci"
/>
```

## Recent Updates

### 1. Design System Integration

Navigation components have been consolidated into the design system at `src/design-system/components/navigation/` to provide a single source of truth for all navigation elements.

### 2. Import Path Standardization

All import paths have been updated to use absolute imports from the design system:

```tsx
// Old approach (relative imports)
import { Navigation } from './Navigation';

// New approach (absolute imports)
import { NavBar } from 'src/design-system/components/navigation';
```

### 3. Layout Integration

The `Layout` component has been updated to use the `NavBar` component from the design system. This provides consistent navigation across all pages while implementing sacred geometry principles.

## Implementation Details

### Sacred Geometry in Navigation

The navigation components follow these sacred geometry principles:

1. **Golden Ratio (Φ ≈ 1.618)** - Applied to spacing, sizing, and proportions
2. **Fibonacci Sequence** - Used for spacing units (8px, 13px, 21px, 34px, 55px)
3. **PHI_INVERSE (0.618)** - Used for animation timing and relative proportions

### Animation Principles

Navigation animations follow natural motion patterns:

```css
/* Example of sacred geometry in animations */
transition: all 0.3s cubic-bezier(0.618, 0, 0.382, 1);
```

These transitions create a sense of harmony and balance, matching the natural flow found in nature.

## Usage Guidelines

1. **Prefer Design System Components** - Always use navigation components from the design system
2. **Use Absolute Imports** - Import using `src/design-system/components/navigation`
3. **Follow Fibonacci Spacing** - Maintain consistent spacing using the Fibonacci sequence
4. **Preserve Sacred Geometry Ratios** - Don't modify the core proportions of the components

By following these guidelines, we maintain a harmonious navigation experience that reflects the Recovery Office's commitment to balance and natural proportions. 