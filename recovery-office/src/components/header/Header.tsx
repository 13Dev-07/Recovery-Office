// TODO: This file contains direct window access without SSR checks
/**
 * Header Component
 * 
 * Main header component with navigation, implementing sacred geometry principles
 * for layout, spacing, and animations.
 */

import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../design-system/components/layout/Box';
import { Container } from '../design-system/components/layout/Container';
import { Flex } from '../design-system/components/layout/Flex';

import { useScrollPosition } from '../hooks/useScrollPosition';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { RegulatorBadge } from './RegulatorBadge';
import { colors } from '../design-system/tokens/colors';
import { VesicaPiscis } from '../design-system/botanical/VesicaPiscis';

interface HeaderStyleProps {
  isScrolled: boolean;
}

const HeaderWrapper = styled(Box)<HeaderStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color ${ANIMATION_TIMING.standard}ms ease,
              box-shadow ${ANIMATION_TIMING.standard}ms ease;
  background-color: ${props => props.isScrolled 
    ? props.theme.colors.background.primary 
    : 'transparent'};
  box-shadow: ${props => props.isScrolled 
    ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
    : 'none'};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${SACRED_SPACING.xxl * 2}px;
  padding-top: ${SACRED_SPACING.sm}px;
  padding-bottom: ${SACRED_SPACING.sm}px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.primary[800] ?? 1};
  transition: transform ${ANIMATION_TIMING.quick}ms ease;
  
  &:hover {
    transform: scale(${1 + (1 - PHI_INVERSE) / 10});
  }
`;

const LogoText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: ${SACRED_SPACING.lg}px;
  font-weight: 600;
  margin-left: ${SACRED_SPACING.xs}px;
`;

interface HeaderProps {
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * Header Component
 * 
 * Main header with navigation and responsive behavior.
 * Implements sacred geometry principles for spacing and transitions.
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  // Track if menu is open for mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track scroll position to change header appearance
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > SACRED_SPACING.xxl;
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  // Close mobile menu on window resize (if crossing breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  return (
    <HeaderWrapper 
      className={className} 
      isScrolled={isScrolled || isMobileMenuOpen}
      as="header"
    >
      <HeaderContainer>
        <Logo href="/" aria-label="Recovery Office Home">
          <VesicaPiscis 
            width={34} 
            color={colors.primary[700] ?? 1} 
            rotation={45} 
          />
          <LogoText>Recovery Office</LogoText>
        </Logo>
        
        <Flex align="center">
          {/* Regulator Badge - Hidden on mobile */}
          <Box display={{ base: 'none', md: 'block' }} mr={SACRED_SPACING.md}>
            <RegulatorBadge />
          </Box>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <Box display={{ base: 'none', md: 'block' }}>
            <Navigation />
          </Box>
          
          {/* Mobile Menu Button - Hidden on desktop */}
          <Box display={{ base: 'block', md: 'none' }}>
            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
          </Box>
        </Flex>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 







