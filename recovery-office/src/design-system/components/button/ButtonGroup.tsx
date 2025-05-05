/**
 * ButtonGroup Component
 * 
 * A component for grouping buttons with consistent spacing and layout.
 * Implements Fibonacci-based spacing and golden ratio alignment principles.
 * 
 * The ButtonGroup provides options for horizontal or vertical alignment
 * and automatically applies consistent spacing between buttons.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Box } from '../layout';
import { BoxProps } from '../../types';
import { FIBONACCI } from '../../../constants/sacred-geometry';
import { spacing } from '../../tokens';

// Define a type for spacing keys to allow indexing
type SpacingToken = keyof typeof spacing;

/**
 * ButtonGroup component props
 */
export interface ButtonGroupProps extends BoxProps {
  /**
   * The direction of the button group
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * The spacing between buttons (uses Fibonacci spacing values)
   * @default 'xs'
   */
  spacing?: SpacingToken | number;
  
  /**
   * Whether all buttons in the group should be the same size
   * @default false
   */
  isAttached?: boolean;
  
  /**
   * Whether all buttons should occupy equal space
   * @default false
   */
  isEqual?: boolean;
  
  /**
   * Alignment of the buttons within the group
   * @default 'center'
   */
  alignment?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  
  /**
   * The content of the button group (should be Button components)
   */
  children: React.ReactNode;
}

// Styled button group wrapper
const StyledButtonGroup = styled(Box)<{
  direction?: 'horizontal' | 'vertical';
  isAttached?: boolean;
  spacingValue: number | string;
  alignment?: string;
  isEqual?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
  
  // Alignment mapping
  justify-content: ${props => {
    switch (props.alignment) {
      case 'start': return 'flex-start';
      case 'end': return 'flex-end';
      case 'space-between': return 'space-between';
      case 'space-around': return 'space-around';
      case 'center':
      default: return 'center';
    }
  }};
  
  // Apply spacing when not attached
  ${props => !props.isAttached && `
    gap: ${typeof props.spacingValue === 'number' 
      ? `${props.spacingValue}px` 
      : props.spacingValue};
  `}
  
  // Attached buttons styling
  ${props => props.isAttached && `
    // Remove border radius from adjacent buttons
    & > button:not(:first-child):not(:last-child) {
      border-radius: 0;
      ${props.direction === 'horizontal' ? `
        border-left-width: 0;
      ` : `
        border-top-width: 0;
      `}
    }
    
    // Special styling for first and last buttons when attached
    & > button:first-child {
      ${props.direction === 'horizontal' ? `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      ` : `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
    }
    
    & > button:last-child {
      ${props.direction === 'horizontal' ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0;
      ` : `
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top-width: 0;
      `}
    }
  `}
  
  // Equal width/height buttons
  ${props => props.isEqual && `
    & > button {
      flex: 1;
      ${props.direction === 'horizontal' ? 'width: 100%;' : 'height: 100%;'}
    }
  `}
`;

/**
 * ButtonGroup Component with ref forwarding
 * 
 * Groups buttons with consistent spacing based on sacred geometry
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ 
    direction = 'horizontal',
    spacing: spacingProp = 'xs',
    isAttached = false,
    isEqual = false,
    alignment = 'center',
    children,
    ...rest 
  }, ref) => {
    // Get spacing value - can be a key from spacing tokens or a direct value
    const getSpacingValue = () => {
      if (typeof spacingProp === 'string' && spacingProp in spacing) {
        return spacing[spacingProp as SpacingToken];
      }
      return spacingProp;
    };
    
    // Calculate spacing value
    const spacingValue = getSpacingValue();
    
    // Apply common props to all child buttons
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        // Clone the child with modified props if needed
        return React.cloneElement(child, {
          // If buttons are attached, make them have the same size
          size: isAttached ? child.props.size || 'md' : child.props.size,
          // When equal, ensure full width or height
          style: {
            ...(child.props.style || {}),
            ...(isEqual && direction === 'horizontal' ? { flex: 1 } : {}),
            ...(isEqual && direction === 'vertical' ? { width: '100%' } : {})
          }
        });
      }
      return child;
    });
    
    return (
      <StyledButtonGroup
        ref={ref}
        direction={direction}
        spacingValue={spacingValue}
        isAttached={isAttached}
        isEqual={isEqual}
        alignment={alignment}
        role="group"
        {...rest}
      >
        {childrenWithProps}
      </StyledButtonGroup>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup; 






