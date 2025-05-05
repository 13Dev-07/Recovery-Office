/**
 * NavigationItem Component
 * 
 * Individual navigation link with styling and hover effects based on sacred geometry.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../design-system/components/navigation/Link';
import { ANIMATION_TIMING, PHI, PHI_INVERSE, SACRED_SPACING } from '../constants/sacred-geometry';
import { useLocation } from 'react-router-dom';

interface NavLinkProps {
  /**
   * Is the current item active (matches current route)
   */
  isActive?: boolean;
  
  /**
   * Animation delay for hover effects (in ms)
   */
  delay?: number;
}

const NavLink = styled(Link)<NavLinkProps>`
  position: relative;
  font-size: ${SACRED_SPACING.md - 1}px;
  font-weight: 500;
  color: ${({ theme, isActive }) => 
    isActive 
      ? theme.colors.primary[800] ?? 1 
      : theme.colors.text.primary};
  padding: ${SACRED_SPACING.xs}px ${SACRED_SPACING.sm}px;
  text-decoration: none;
  transition: color ${ANIMATION_TIMING.quick}ms ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${SACRED_SPACING.xxs}px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary[600] ?? 1};
    transition: width ${ANIMATION_TIMING.medium}ms cubic-bezier(${PHI - 1}, 0, ${1 - (PHI - 1)}, 1),
                left ${ANIMATION_TIMING.medium}ms cubic-bezier(${PHI - 1}, 0, ${1 - (PHI - 1)}, 1);
    transition-delay: ${({ delay }) => delay || 0}ms;
  }
  
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary[700] ?? 1};
    
    &::after {
      width: ${100 * PHI_INVERSE}%;
      left: ${(1 - PHI_INVERSE) * 50}%;
    }
  }
  
  ${({ isActive, theme }) => isActive && `
    &::after {
      width: ${100 * PHI_INVERSE}%;
      left: ${(1 - PHI_INVERSE) * 50}%;
      background-color: ${theme.colors.primary[700] ?? 1};
    }
  `}
`;

interface NavigationItemProps {
  /**
   * URL to navigate to
   */
  href: string;
  
  /**
   * Link text content
   */
  children: React.ReactNode;
  
  /**
   * Animation delay for hover effects (in ms)
   */
  delay?: number;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * NavigationItem Component
 * 
 * Individual navigation link with underline animation based on golden ratio.
 */
export const NavigationItem: React.FC<NavigationItemProps> = ({ 
  href, 
  children, 
  delay = 0,
  className 
}) => {
  const location = useLocation();
  const isActive = location.pathname === href || 
    (href !== '/' && location.pathname.startsWith(href));
  
  return (
    <NavLink 
      href={href} 
      isActive={isActive}
      delay={delay}
      className={className}
    >
      {children}
    </NavLink>
  );
};

export default NavigationItem; 








