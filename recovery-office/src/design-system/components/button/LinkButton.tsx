/**
 * LinkButton Component
 * 
 * A specialized button component optimized for link-like behavior.
 * Extends the base Button component with link-specific props and styling.
 * Implements sacred geometry principles for sizing and visual harmony.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Button, ButtonProps } from './Button';


/**
 * LinkButton component props
 */
export interface LinkButtonProps extends Omit<ButtonProps, 'variant'> {
  /**
   * The variant of the link button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'subtle';
  
  /**
   * Whether to underline the link
   * @default 'hover'
   */
  underline?: 'none' | 'hover' | 'always';
  
  /**
   * Whether the link opens in a new tab
   * @default false
   */
  openInNewTab?: boolean;
  
  /**
   * Whether the link is part of navigation
   * @default false
   */
  isNavLink?: boolean;
}

// Styled LinkButton component
const StyledLinkButton = styled(Button)<LinkButtonProps & { 
  $underline: 'none' | 'hover' | 'always';
  $isNavLink: boolean;
}>`
  // No background or border for link buttons
  background-color: transparent;
  border: none;
  padding: ${props => props.$isNavLink ? `${PHI_INVERSE}em` : '0'};
  height: auto;
  box-shadow: none;
  
  // Underline behaviors
  text-decoration: ${props => props.$underline === 'always' ? 'underline' : 'none'};
  
  &:hover, &:focus {
    text-decoration: ${props => props.$underline === 'none' ? 'none' : 'underline'};
    background-color: transparent;
    box-shadow: none;
    transform: none;
  }
  
  // Color variations based on variant
  color: ${props => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.colors.secondary[500] ?? 1;
      case 'accent':
        return props.theme.colors.accent.gold;
      case 'subtle':
        return props.theme.colors.text.secondary;
      case 'primary':
      default:
        return props.theme.colors.primary[500] ?? 1;
    }
  }};
  
  &:hover, &:focus {
    color: ${props => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.colors.secondary[700] ?? 1;
        case 'accent':
          return props.theme.colors.accent.copper;
        case 'subtle':
          return props.theme.colors.text.primary;
        case 'primary':
        default:
          return props.theme.colors.primary[700] ?? 1;
      }
    }};
  }
  
  // Navigation specific styling
  ${props => props.$isNavLink && `
    border-radius: ${props.theme.borderRadius.sm};
    
    &:hover, &:focus {
      background-color: ${props.theme.colors.background[100] ?? 1};
    }
  `}
`;

/**
 * LinkButton Component with ref forwarding
 * 
 * Creates button elements styled as links with sacred geometry proportions
 */
export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ 
    variant = 'primary',
    underline = 'hover',
    openInNewTab = false,
    isNavLink = false,
    href,
    onClick,
    children,
    ...rest 
  }, ref) => {
    // Target and rel attributes for links
    const target = openInNewTab ? '_blank' : undefined;
    const rel = openInNewTab ? 'noopener noreferrer' : undefined;
    
    return (
      <StyledLinkButton
        as="a"
        variant="link" // Always use link variant from Button
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        $underline={underline}
        $isNavLink={isNavLink}
        {...rest}
      >
        {children}
      </StyledLinkButton>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default LinkButton; 






