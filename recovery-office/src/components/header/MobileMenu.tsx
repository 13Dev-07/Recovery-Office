/**
 * MobileMenu Component
 * 
 * Mobile navigation menu with toggle button and slide-in drawer effect.
 * Uses sacred geometry principles for animations and layout.
 */

import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Box } from '../design-system/components/layout/Box';
import { Flex } from '../design-system/components/layout/Flex';
import { IconButton } from '../design-system/components/button/IconButton';
import Link from "@design-system/components/navigation/Link";
import { Button } from '../design-system/components/button/Button';
import { Divider } from '../design-system/components/data-display/Divider';

import { theme } from '../design-system/theme/theme';
import { RegulatorBadge } from './RegulatorBadge';
import { MenuIcon, CloseIcon } from '../design-system/icons';
import { SlideIn } from "@animation/SlideIn";
import { useLocation } from 'react-router-dom';


interface MenuOverlayProps {
  /**
   * Is the menu open
   */
  isOpen: boolean;
}

const MenuButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.primary[700] ?? 1};
  font-size: ${SACRED_SPACING.lg}px;
`;

const MenuOverlay = styled(Box)<MenuOverlayProps>`
  position: fixed;
  top: ${SACRED_SPACING.xxl * 2}px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background.light};
  z-index: 999;
  overflow-y: auto;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MenuContainer = styled(Box)`
  padding: ${SACRED_SPACING.lg}px;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  display: block;
  padding: ${SACRED_SPACING.md}px ${SACRED_SPACING.sm}px;
  margin-bottom: ${SACRED_SPACING.xs}px;
  color: ${({ theme, isActive }) => 
    isActive 
      ? theme.colors.primary[700] ?? 1 
      : theme.colors.text.primary};
  font-weight: ${({ isActive }) => isActive ? '600' : '400'};
  font-size: ${SACRED_SPACING.md + 1}px;
  text-decoration: none;
  border-left: 3px solid ${({ theme, isActive }) => 
    isActive 
      ? theme.colors.primary[600] ?? 1
      : 'transparent'};
  transition: background-color ${ANIMATION_TIMING.quick}ms ease,
              border-left-color ${ANIMATION_TIMING.quick}ms ease;
  
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary[50] ?? 1};
    border-left-color: ${({ theme }) => theme.colors.primary[300] ?? 1};
  }
`;

const ActionButtonContainer = styled(Box)`
  margin-top: ${SACRED_SPACING.xl}px;
  margin-bottom: ${SACRED_SPACING.lg}px;
`;

interface MobileMenuProps {
  /**
   * Is the menu currently open
   */
  isOpen: boolean;
  
  /**
   * Callback function for toggling the menu
   */
  onToggle: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * MobileMenu Component
 * 
 * Mobile navigation menu with toggle button and slide-in effect.
 * Implements sacred geometry for spacing and animations.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onToggle,
  className 
}) => {
  const location = useLocation();
  
  // Nav items (same as desktop)
  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];
  
  // Calculate if a nav item is active
  const isNavItemActive = (href: string) => 
    location.pathname === href || 
    (href !== '/' && location.pathname.startsWith(href));
  
  return (
    <Box className={className}>
      {/* Toggle Button */}
      <MenuButton
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        icon={isOpen ? <CloseIcon /> : <MenuIcon />}
        variant="ghost"
        size="md"
      />
      
      {/* Mobile Menu Overlay */}
      <MenuOverlay isOpen={isOpen}>
        <SlideIn isVisible={isOpen} direction="right" duration={ANIMATION_TIMING.standard}>
          <MenuContainer>
            {/* Navigation Links */}
            <Box as="nav">
              {navItems.map((item, index) => (
                <NavLink 
                  key={index}
                  href={item.href}
                  isActive={isNavItemActive(item.href)}
                  onClick={onToggle}
                  style={{ 
                    transitionDelay: `${getFibonacciByIndex(3) * index}ms`
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>
            
            {/* Action Button */}
            <ActionButtonContainer>
              <Button 
                as={Link}
                href="/booking"
                variant="primary" 
                size="md"
                width="100%"
                onClick={onToggle}
              >
                Book Consultation
              </Button>
            </ActionButtonContainer>
            
            <Divider my={SACRED_SPACING.lg} />
            
            {/* Regulator Badge */}
            <Flex justify="center" mt={SACRED_SPACING.xl}>
              <RegulatorBadge />
            </Flex>
          </MenuContainer>
        </SlideIn>
      </MenuOverlay>
    </Box>
  );
};

export default MobileMenu; 









