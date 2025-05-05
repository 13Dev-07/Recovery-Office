/**
 * Divider Component
 * 
 * A layout component that provides a horizontal or vertical divider
 * using sacred geometry principles for harmonious visual rhythm.
 */

import * as React from 'react';
import styled from 'styled-components';
import { SACRED_SPACING, PHI } from '../../../constants/sacred-geometry';
import { DefaultTheme } from 'styled-components';

// Define the AsProps type here if it's not available in the types file
export type AsProps<T extends React.ElementType = React.ElementType> = {
  as?: T;
  className?: string;
  style?: React.CSSProperties;
};

export interface DividerProps {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Thickness of the divider in pixels
   * @default 1
   */
  thickness?: number;
  
  /**
   * Color of the divider
   * @default 'border.light'
   */
  color?: string;
  
  /**
   * Margin around the divider based on sacred spacing
   * @default 'md'
   */
  margin?: keyof typeof SACRED_SPACING | number;
  
  /**
   * Sets the divider to take full width or height based on orientation
   * @default true
   */
  fullSize?: boolean;
}

const StyledDivider = styled.hr<DividerProps & { theme: DefaultTheme }>`
  border: none;
  background-color: ${({ theme, color }) => 
    color ? (color.includes('.') ? theme.colors[color.split('.')[0]][color.split('.')[1]] : color) 
    : theme.colors.border.light};
  
  /* Orientation specific styles */
  ${({ orientation = 'horizontal' }) => 
    orientation === 'horizontal' 
      ? `
        width: ${({ fullSize = true }) => fullSize ? '100%' : `${PHI * 100}%`};
        height: ${({ thickness = 1 }) => `${thickness}px`};
        margin: ${({ margin = 'md' }) => typeof margin === 'string' 
          ? `${typeof SACRED_SPACING[margin] ?? 1 === 'number' ? SACRED_SPACING[margin] ?? 1 : SACRED_SPACING.md}px 0` 
          : `${margin}px 0`};
      ` 
      : `
        width: ${({ thickness = 1 }) => `${thickness}px`};
        height: ${({ fullSize = true }) => fullSize ? '100%' : `${PHI * 100}%`};
        margin: ${({ margin = 'md' }) => typeof margin === 'string' 
          ? `0 ${typeof SACRED_SPACING[margin] ?? 1 === 'number' ? SACRED_SPACING[margin] ?? 1 : SACRED_SPACING.md}px` 
          : `0 ${margin}px`};
        display: inline-block;
      `
  }
`;

export const Divider = React.forwardRef<
  HTMLHRElement, 
  React.ComponentPropsWithRef<'hr'> & DividerProps
>((props, ref) => {
  return <StyledDivider ref={ref} role="separator" {...props} />;
});

Divider.displayName = 'Divider';

export default Divider; 





