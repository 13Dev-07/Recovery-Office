# TypeScript Error Patterns in Recovery Office Codebase

## Common Error Patterns and Solutions

Based on the analysis of several files, here are the most common TypeScript error patterns and their solutions:

### 1. Import Path Issues

**Pattern:** Using path aliases like `@constants/sacred-geometry` instead of relative paths.

**Example:**
```typescript
// Incorrect
import { PHI } from '@constants/sacred-geometry';

// Correct
import { PHI } from '../constants/sacred-geometry';
```

**Solution:** 
- Replace path aliases with relative paths
- Update any direct references to alias paths

### 2. Missing Imports

**Pattern:** Using components, types, or constants without importing them.

**Example:**
```typescript
// Missing import
const FadeIn = () => {
  return <motion.div variants={variants}>...</motion.div>;
};

// Correct
import { motion } from 'framer-motion';
```

**Solution:**
- Add required imports at the top of each file
- Look for undefined variables and identify their source

### 3. Incorrect Type Casting

**Pattern:** Accessing properties that don't match the intended type.

**Example:**
```typescript
// Incorrect
const easing = SACRED_EASINGS[easingKey];

// Correct
const easing = SACRED_EASINGS[easingKey as keyof typeof SACRED_EASINGS];
```

**Solution:**
- Use proper type assertions with `as keyof typeof`
- Check for type narrowing issues

### 4. Missing Browser Compatibility Checks

**Pattern:** Using modern browser APIs without fallbacks or checks.

**Example:**
```typescript
// Incorrect
mediaQuery.addEventListener('change', handleChange);

// Correct
if (mediaQuery.addEventListener) {
  mediaQuery.addEventListener('change', handleChange);
} else {
  mediaQuery.addListener(handleChange);
}
```

**Solution:**
- Add browser compatibility checks
- Implement fallbacks for older browsers

### 5. Array Type Definitions

**Pattern:** Using `number[]` when a tuple with fixed length is required.

**Example:**
```typescript
// Incorrect
SACRED_EASINGS: { standard: number[]; }

// Correct
SACRED_EASINGS: { standard: [number, number, number, number]; }
```

**Solution:**
- Use tuple types for fixed-length arrays
- Ensure type definitions match the actual data structure

### 6. React Hook Import Issues

**Pattern:** Using React hooks without importing them individually.

**Example:**
```typescript
// Incorrect
React.useState()
React.useEffect()

// Correct
import { useState, useEffect } from 'react';
useState()
useEffect()
```

**Solution:**
- Destructure React hooks in the import statement
- Use the hooks directly without the React namespace

### 7. Server-Side Rendering Compatibility

**Pattern:** Attempting to access browser APIs during SSR.

**Example:**
```typescript
// Incorrect
const mediaQuery = window.matchMedia('...');

// Correct
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('...');
}
```

**Solution:**
- Add checks for `typeof window !== 'undefined'`
- Add checks for `typeof document !== 'undefined'`

### 8. Indexing Issues

**Pattern:** Accessing object properties without type-safety.

**Example:**
```typescript
// Incorrect
const fibValue = fibValues[index];

// Correct
const fibValue = fibValues[index] ?? 1; // Default fallback
```

**Solution:**
- Add nullish coalescing operators (`??`) for safe defaults
- Provide bounds checking for array access

### 9. RecordType Usage

**Pattern:** Using incorrect Record types or missing them entirely.

**Example:**
```typescript
// Incorrect
const DURATIONS = { fast: 0.2, normal: 0.5 };

// Correct
const DURATIONS: Record<AnimationDurationType, number> = { fast: 0.2, normal: 0.5 };
```

**Solution:**
- Use `Record<K, V>` type for dictionaries
- Ensure consistent key types throughout objects

### 10. Event Handler Types

**Pattern:** Missing or incorrect event handler type definitions.

**Example:**
```typescript
// Incorrect
const handleChange = (e) => { setValue(e.target.value); };

// Correct
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value); };
```

**Solution:**
- Add proper event type definitions
- Use React's built-in event types

## Approach to Fixing Errors

To systematically fix errors in each file:

1. **Fix imports first**:
   - Add missing imports
   - Fix import paths
   - Remove unused imports

2. **Fix type definitions**:
   - Add missing interfaces
   - Update incorrect type definitions
   - Add proper generics and constraints

3. **Address browser compatibility**:
   - Add SSR checks
   - Add browser API fallbacks

4. **Fix access patterns**:
   - Add null/undefined checks
   - Add default values
   - Fix indexing patterns

5. **Test each file**:
   - Verify errors are resolved
   - Check that no new errors are introduced

## Common Imports to Add

Many files are missing these essential imports:

```typescript
// React imports
import * as React from 'react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// Theme/styled-components
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Sacred geometry constants
import { PHI, PHI_INVERSE, FIBONACCI, SACRED_EASINGS, ANIMATION_TIMING } from '../constants/sacred-geometry';

// Animation utilities
import { resolveDuration, applyGoldenRatioDuration } from '../utils/animation';
```

By focusing on these common patterns, we can efficiently fix the TypeScript errors across the codebase. 