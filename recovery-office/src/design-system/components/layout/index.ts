/**
 * Layout Components Index
 * 
 * This file exports all layout components from a single entry point
 * to provide consistent imports throughout the application.
 * 
 * All of these components implement sacred geometry principles
 * to create harmonious, balanced layouts.
 */

export { default as Box } from './Box';
export { default as Flex } from './Flex';
export { default as Grid } from './Grid';
export { default as GoldenSection } from './GoldenSection';
export { default as Container } from './Container';
export { default as Stack } from './Stack';
export { default as AspectRatio } from './AspectRatio';
export { default as Divider } from './Divider';

// Also export any utility functions from the layout components
export { generateGridTemplateColumns } from './Grid';

// Export types from the types directory
export type { BoxProps, GoldenSectionProps, ContainerProps, StackProps } from '../../types';

// Export types from components
export type { DividerProps } from './Divider'; 





