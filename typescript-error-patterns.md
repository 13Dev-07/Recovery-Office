# Common TypeScript Error Patterns and Solutions

This document catalogs recurring TypeScript errors in the Recovery Office project and provides standardized solutions for each.

## 1. Module Resolution Errors

### Error Pattern
```
Cannot find module '@constants/sacred-geometry' or its corresponding type declarations
```

### Solution
1. **Use Relative Paths Instead of Path Aliases**:
   ```typescript
   // Change this:
   import { PHI } from '@constants/sacred-geometry';
   
   // To this:
   import { PHI } from '../../constants/sacred-geometry';
   ```

2. **Calculate the Correct Path Depth**:
   - The number of `../` depends on the file's location relative to the target file
   - Components in subdirectories need more levels: `../../../constants/sacred-geometry`

## 2. DefaultTheme Type Issues

### Error Pattern
```
Property 'theme' implicitly has type 'any'
```

### Solution
1. **Import and Use DefaultTheme**:
   ```typescript
   // Add this import:
   import styled, { DefaultTheme } from 'styled-components';
   
   // Then type your styled components properly:
   const StyledComponent = styled.div<{ theme: DefaultTheme }>`
     color: ${({ theme }) => theme.colors.primary};
   `;
   ```

2. **Fix Theme Access Patterns**:
   ```typescript
   // Change this:
   color: ${props => props.theme.colors.text};
   
   // To this with type safety:
   color: ${({ theme }: { theme: DefaultTheme }) => 
     theme.colors && theme.colors.text ? theme.colors.text : 'inherit'};
   ```

## 3. Sacred Geometry Constants Issues

### Error Pattern
```
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'SACRED_SPACING'
```

### Solution
1. **Use Named Properties Instead of Indices**:
   ```typescript
   // Change this:
   padding: ${SACRED_SPACING[4]}px;
   
   // To this:
   padding: ${SACRED_SPACING.sm}px;
   ```

2. **Use Type Guards for Dynamic Access**:
   ```typescript
   // Change this:
   margin: ${({ margin = 'md' }) => typeof margin === 'string' 
     ? `${SACRED_SPACING[margin]}px 0` 
     : `${margin}px 0`};
   
   // To this:
   margin: ${({ margin = 'md' }) => typeof margin === 'string' 
     ? `${typeof SACRED_SPACING[margin as keyof typeof SACRED_SPACING] === 'number' 
        ? SACRED_SPACING[margin as keyof typeof SACRED_SPACING] 
        : SACRED_SPACING.md}px 0` 
     : `${margin}px 0`};
   ```

## 4. Animation Constant References

### Error Pattern
```
Property 'normal' does not exist on type 'typeof ANIMATION_TIMING'
```

### Solution
Use the correct constant names as defined in sacred-geometry.ts:

```typescript
// Change this:
duration: ANIMATION_TIMING.normal / 1000

// To this:
duration: ANIMATION_TIMING.standard / 1000

// Change this:
duration: ANIMATION_TIMING.fast / 1000

// To this:
duration: ANIMATION_TIMING.quick / 1000

// Change this:
ease: SACRED_EASINGS.natural

// To this:
ease: SACRED_EASINGS.standard
```

## 5. Component Prop Type Issues

### Error Pattern
```
Property 'size' does not exist on type 'HeadingProps'
```

### Solution
1. **Use the Correct Prop Names**:
   ```typescript
   // Change this:
   <Heading size="lg">Title</Heading>
   
   // To this:
   <Heading fontSize="lg">Title</Heading>
   ```

2. **Import Component Props Types**:
   ```typescript
   // Add the props import:
   import { Heading, HeadingProps } from '@design-system/components/typography/Heading';
   ```

## 6. Event Handler Type Issues

### Error Pattern
```
Type '(e: any) => void' is not assignable to type 'ChangeEventHandler<HTMLInputElement>'
```

### Solution
Use the correct event types:

```typescript
// Change this:
onChange={(e: any) => setValue(e.target.value)}

// To this:
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}

// For forms:
onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // handle submission
}}
```

## 7. React Hook Dependencies

### Error Pattern
```
React Hook useEffect has a missing dependency: 'value'
```

### Solution
1. **Add Missing Dependencies**:
   ```typescript
   // Change this:
   useEffect(() => {
     console.log(value);
   }, []); // ESLint warning: 'value' is missing in deps array
   
   // To this:
   useEffect(() => {
     console.log(value);
   }, [value]);
   ```

2. **Use Callback for Function Dependencies**:
   ```typescript
   // Change this:
   const handleChange = () => {
     setValue(newValue);
   };
   
   useEffect(() => {
     document.addEventListener('change', handleChange);
     return () => document.removeEventListener('change', handleChange);
   }, []); // handleChange should be in deps
   
   // To this:
   const handleChange = useCallback(() => {
     setValue(newValue);
   }, [newValue]);
   
   useEffect(() => {
     document.addEventListener('change', handleChange);
     return () => document.removeEventListener('change', handleChange);
   }, [handleChange]);
   ```

## 8. Incorrect Type Assertions

### Error Pattern
```
Type 'Element[]' is not assignable to type 'ReactNode'
```

### Solution
1. **Use Proper Type Assertions**:
   ```typescript
   // Change this:
   const items = data.map(item => <div key={item.id}>{item.name}</div>);
   return <div>{items}</div>;
   
   // To this:
   const items = data.map(item => <div key={item.id}>{item.name}</div>);
   return <div>{React.Children.toArray(items)}</div>;
   ```

2. **Use Explicit React.Fragment**:
   ```typescript
   // Change this:
   return (
     <>
       {children}
     </>
   );
   
   // To this - especially in .tsx files with strict typing:
   return (
     <React.Fragment>
       {children}
     </React.Fragment>
   );
   ```

## 9. Object Type Access

### Error Pattern
```
Property 'x' does not exist on type '{ y: string }'
```

### Solution
1. **Use Optional Chaining and Nullish Coalescing**:
   ```typescript
   // Change this:
   const value = obj.x;
   
   // To this:
   const value = obj?.x ?? defaultValue;
   ```

2. **Use Type Guards**:
   ```typescript
   // Define a type guard
   function hasX(obj: any): obj is { x: string } {
     return obj && typeof obj === 'object' && 'x' in obj;
   }
   
   // Then use it
   if (hasX(obj)) {
     // TypeScript now knows obj.x exists
     const value = obj.x;
   }
   ```

## 10. Function Return Type Issues

### Error Pattern
```
Function lacks ending return statement and return type does not include 'undefined'
```

### Solution
1. **Provide Explicit Return Types**:
   ```typescript
   // Change this:
   const getValues = () => {
     if (condition) {
       return [1, 2, 3];
     }
     // No return here - TypeScript error
   };
   
   // To this:
   const getValues = (): number[] | undefined => {
     if (condition) {
       return [1, 2, 3];
     }
     return undefined;
   };
   ```

2. **Ensure All Code Paths Return**:
   ```typescript
   const processThing = (): string => {
     if (condition1) {
       return "result1";
     } else if (condition2) {
       return "result2";
     } else {
       return "default"; // Always provide a default return
     }
   };
   ```

By applying these standardized solutions to the common error patterns, we can systematically reduce TypeScript errors throughout the Recovery Office project. 