/**
 * Grid Component
 * 
 * Extends the Box component with CSS Grid properties.
 * Implements a grid system based on Fibonacci sequence and Golden Ratio.
 * 
 * The Grid component provides a consistent way to create grid layouts
 * that adhere to sacred geometry principles.
 */

import * as React from 'react';
import Box from './Box';
import { BoxProps } from '../../types';
import { lightTheme } from '../../theme';
import { PHI, FIBONACCI } from '../../../constants/sacred-geometry';
import styled, { DefaultTheme } from 'styled-components';

// Extended Grid Props to include special grid options not in the generic GridProps
interface ExtendedGridProps extends BoxProps {
  /**
   * Number of columns or specific template
   */
  columns?: number | 'golden' | 'fibonacci' | string;
  
  /**
   * Number of rows or specific template
   */
  rows?: string | number;
  
  /**
   * Spacing between grid cells
   */
  gap?: string | number;
  
  /**
   * Horizontal spacing between grid cells
   */
  columnGap?: string | number;
  
  /**
   * Vertical spacing between grid cells
   */
  rowGap?: string | number;
  
  /**
   * CSS grid-template-areas property
   */
  templateAreas?: string;
  
  /**
   * CSS grid-template-columns property
   */
  templateColumns?: string;
  
  /**
   * CSS grid-template-rows property
   */
  templateRows?: string;
  
  /**
   * CSS grid-auto-columns property 
   */
  autoColumns?: string;
  
  /**
   * CSS grid-auto-rows property
   */
  autoRows?: string;
  
  /**
   * CSS grid-auto-flow property
   */
  autoFlow?: string;
  
  /**
   * Border radius for the grid
   */
  borderRadius?: string | number;
}

/**
 * Generates grid template columns based on Fibonacci sequence
 * @param columns - Number of columns or specific template
 * @returns CSS grid-template-columns value
 */
export const generateGridTemplateColumns = (columns: ExtendedGridProps['columns']): string => {
  if (typeof columns === 'number') {
    // For numeric columns, create a Fibonacci-based grid
    return `repeat(${columns}, minmax(0, 1fr))`;
  }
  
  if (columns === 'golden') {
    // Golden ratio proportion: 1:φ (1:1.618)
    return `1fr ${PHI}fr`;
  }
  
  if (columns === 'fibonacci') {
    // Use first few Fibonacci numbers as column widths
    const fibKeys = Object.keys(FIBONACCI).map(Number).sort((a, b) => a - b);
    const fibWidths = fibKeys.slice(0, 4).map(k => `${FIBONACCI[k] ?? 1}fr`).join(' ');
    return fibWidths;
  }
  
  // Return custom template or undefined
  return columns || '';
};

/**
 * Grid Component with ref forwarding
 * Provides a simplified API for grid layouts based on sacred geometry
 */
export const Grid = React.forwardRef<HTMLDivElement, ExtendedGridProps>(
  ({ 
    columns,
    rows,
    gap,
    columnGap,
    rowGap,
    templateAreas,
    templateColumns,
    templateRows,
    autoColumns,
    autoRows,
    autoFlow,
    borderRadius,
    children,
    ...rest 
  }, ref) => {
    // Generate grid template columns if the columns prop is provided
    const gridTemplateColumns = columns ? generateGridTemplateColumns(columns) : templateColumns;
    
    // Ensure borderRadius has 'px' suffix if it's a number
    const formattedBorderRadius = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;
    
    // Create CSS styles for grid properties as a template literal
    const gridTemplate = `
      display: grid;
      grid-template-columns: ${gridTemplateColumns || 'none'};
      grid-template-rows: ${templateRows || (typeof rows === 'string' ? rows : 'none')};
      grid-template-areas: ${templateAreas || 'none'};
      grid-gap: ${gap || 'initial'};
      grid-row-gap: ${rowGap || 'initial'};
      grid-column-gap: ${columnGap || 'initial'};
      ${autoColumns ? `grid-auto-columns: ${autoColumns};` : ''}
      ${autoRows ? `grid-auto-rows: ${autoRows};` : ''}
      ${autoFlow ? `grid-auto-flow: ${autoFlow};` : ''}
    `;
    
    // Create a grid box with all the CSS styles
    const GridDiv = styled.div`${gridTemplate}`;
    
    // Return the grid box with remaining props
    return (
      <GridDiv
        ref={ref}
        style={{ borderRadius: formattedBorderRadius }}
        {...rest}
      >
        {children}
      </GridDiv>
    );
  }
);

Grid.displayName = 'Grid';

export default Grid; 








