/**
 * Navigation Component
 * 
 * Main navigation component for desktop view, implementing sacred geometry
 * principles for spacing and transitions.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../design-system/components/layout/Flex';
import { Link } from '../design-system/components/navigation/Link';
import { NavigationItem } from './NavigationItem';
import { Button } from '../design-system/components/button/Button';
import { SACRED_SPACING, PHI } from '../constants/sacred-geometry';
import { getFibonacciByIndex } from "@utils/getFibonacciByIndex";

const NavContainer = styled(Flex)`
  gap: ${SACRED_SPACING.md * PHI}px;
`;

const ActionButton = styled(Button)`
  margin-left: ${SACRED_SPACING.md}px;
`;

interface NavigationProps {
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * Navigation Component
 * 
 * Horizontal navigation bar for desktop view, implementing sacred geometry 
 * principles for spacing and transitions.
 */
export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  // Navigation items with sacred spacing
  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];
  
  return (
    <NavContainer className={className} as="nav" alignItems="center">
      {navItems.map((item, index) => (
        <NavigationItem
          key={index}
          href={item.href}
          // Fibonacci-based delay for hover animations
          delay={getFibonacciByIndex(3) * index}
        >
          {item.label}
        </NavigationItem>
      ))}
      
      <ActionButton 
        as={Link} 
        href="/booking"
        variant="primary"
        size="sm"
      >
        Book Consultation
      </ActionButton>
    </NavContainer>
  );
};

export default Navigation; 







