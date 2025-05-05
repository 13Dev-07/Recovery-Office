/**
 * IconButton Component
 * 
 * A variant of the Button component optimized for displaying icons.
 * Implements perfect square proportions based on sacred geometry principles.
 * 
 * The IconButton maintains perfect golden ratio-based dimensions
 * and balanced sacred geometry proportions for visual harmony.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { ButtonProps, Button } from './Button';
import { Box } from '../layout';

/**
 * IconButton component props
 */
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
  /**
   * The icon to display in the button
   */
  icon: React.ReactNode;
  
  /**
   * Whether to use a circular shape for the button
   * @default false
   */
  isRound?: boolean;
  
  /**
   * Accessible label for screen readers
   * Required for accessibility when no visible text is present
   */
  'aria-label': string;
}

/**
 * Generates size-specific styles based on sacred geometry principles
 */
const getSizeStyles = (size: 'sm' | 'md' | 'lg', theme: DefaultTheme) => {
  // Base dimensions follow Fibonacci sequence
  const dimensions = {
    sm: theme.spacing.md, // 21px
    md: theme.spacing.lg, // 34px
    lg: theme.spacing.xl, // 55px
  }[size];
  
  // Icon size follows golden ratio proportion to button size
  const iconSize = Math.round(dimensions * PHI_INVERSE * 1.5);
  
  return {
    dimensions: `${dimensions}px`,
    iconSize,
  };
};

// Styled IconButton component
const StyledIconButton = styled(Button)<IconButtonProps & { dimensions: string }>`
  // Override some of the base button styles for icon-specific styling
  width: ${props => props.dimensions};
  height: ${props => props.dimensions};
  padding: 0;
  min-width: unset;
  aspect-ratio: 1 / 1;
  
  // Perfect circle when isRound is true
  ${props => props.isRound && `
    border-radius: 50%;
  `}
  
  // Center the icon perfectly
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  // Golden ratio-based focus ring
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[300] ?? 1};
  }
`;

/**
 * IconButton Component with ref forwarding
 * 
 * Creates buttons optimized for displaying icons with sacred geometry proportions
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    icon,
    size = 'md',
    variant = 'primary',
    isRound = false,
    'aria-label': ariaLabel,
    ...rest 
  }, ref) => {
    // Get size-specific styles based on theme
    const { dimensions, iconSize } = getSizeStyles(
      size as 'sm' | 'md' | 'lg',
      rest.theme || {}
    );
    
    return (
      <StyledIconButton
        as="button"
        variant={variant}
        size={size}
        ref={ref}
        dimensions={dimensions}
        isRound={isRound}
        aria-label={ariaLabel}
        {...rest}
      >
        <Box 
          as="span" 
          display="inline-flex" 
          alignItems="center" 
          justifyContent="center"
          className="icon-button-icon"
          width={`${iconSize}px`}
          height={`${iconSize}px`}
        >
          {icon}
        </Box>
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton; 








