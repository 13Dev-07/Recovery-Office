// TODO: This file contains direct document access without SSR checks
// TODO: This file contains direct window access without SSR checks
import * as React from 'react';
import { useState, useEffect } from 'react';;
import { getFibonacciByIndex } from '../../../utils';
import styled from 'styled-components';
import { getFibonacciByIndex } from '../../../utils';

// Import sacred geometry constants

import { getFibonacciByIndex } from '../../../utils';

// Import components
import NavBar, { NavBarItem, NavBarCTA, NavBarProps } from './NavBar';
import { getFibonacciByIndex } from '../../../utils';

// TypeScript interfaces
export interface StickyNavigationProps extends Omit<NavBarProps, 'isTransparent'> {
  /** Whether to start as transparent and become solid on scroll */
  startTransparent?: boolean;
  /** Scroll threshold to trigger transparency change (in pixels) */
  transparencyThreshold?: number;
  /** Whether to show a scroll progress indicator */
  showScrollProgress?: boolean;
  /** Shape of the scroll indicator */
  scrollIndicatorShape?: 'line' | 'fibonacci' | 'circle';
  /** Color variant for the scroll indicator */
  scrollIndicatorVariant?: 'primary' | 'secondary' | 'accent';
  /** Thickness of the scroll indicator in pixels */
  scrollIndicatorThickness?: number;
  /** Whether to shrink the navbar on scroll */
  shrinkOnScroll?: boolean;
  /** Whether to include botanical accents */
  withBotanicalAccents?: boolean;
  /** Additional className */
  className?: string;
  /** Test ID for testing */
  'data-testid'?: string;
}

/**
 * StickyNavigation Component
 * 
 * A navigation wrapper that adds sticky behavior with scroll-based
 * animations following sacred geometry principles.
 */
const StickyNavigation: React.FC<StickyNavigationProps> = ({
  startTransparent = false,
  transparencyThreshold = 100,
  showScrollProgress = false,
  scrollIndicatorShape = 'line',
  scrollIndicatorVariant = 'primary',
  scrollIndicatorThickness = getFibonacciByIndex(3), // 2px
  shrinkOnScroll = true,
  withBotanicalAccents = false,
  className,
  'data-testid': testId = 'sacred-sticky-navigation',
  ...navBarProps
}) => {
  // Scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state based on threshold
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > transparencyThreshold);
      
      // Calculate scroll progress
      if (showScrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = Math.max(0, Math.min(1, scrollTop / windowHeight));
        setScrollProgress(progress);
      }
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [transparencyThreshold, showScrollProgress]);
  
  return (
    <Container 
      className={className} 
      data-testid={testId}
      $isScrolled={isScrolled}
      $shrinkOnScroll={shrinkOnScroll}
    >
      {/* NavBar component */}
      <NavBar
        {...navBarProps}
        isTransparent={startTransparent && !isScrolled}
        showBotanical={withBotanicalAccents}
      />
      
      {/* Scroll progress indicator */}
      {showScrollProgress && (
        <ScrollIndicator
          $progress={scrollProgress}
          $shape={scrollIndicatorShape}
          $variant={scrollIndicatorVariant}
          $thickness={scrollIndicatorThickness}
          role="progressbar"
          aria-valuenow={scrollProgress * 100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />
      )}
    </Container>
  );
};

// Styled components
interface ContainerProps {
  $isScrolled: boolean;
  $shrinkOnScroll: boolean;
}

const Container = styled.div<ContainerProps>`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
  
  /* Add shadow when scrolled */
  box-shadow: ${({ theme, $isScrolled }) => 
    $isScrolled ? theme.shadows.md : 'none'
  };
  
  /* Shrink effect when scrolled */
  ${({ $isScrolled, $shrinkOnScroll }) => 
    $isScrolled && $shrinkOnScroll ? `
      transform: scale(${1 - (PHI_INVERSE * 0.05)});
    ` : ''
  }
`;

interface ScrollIndicatorProps {
  $progress: number;
  $shape: string;
  $variant: string;
  $thickness: number;
}

const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${({ $thickness }) => `${$thickness}px`};
  width: ${({ $progress }) => `${$progress * 100}%`};
  
  /* Color based on variant */
  background-color: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.colors.primary :
    $variant === 'secondary' ? theme.colors.secondary :
    theme.colors.accent
  };
  
  /* Shape-specific styles */
  ${({ $shape, $progress, $thickness }) => {
    switch ($shape) {
      case 'fibonacci':
        // Create a fibonacci-based gradient
        return `
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.1) ${getFibonacciByIndex(5)}px,
            rgba(255, 255, 255, 0.2) ${getFibonacciByIndex(6)}px,
            rgba(255, 255, 255, 0.1) ${getFibonacciByIndex(7)}px,
            transparent ${getFibonacciByIndex(8)}px
          );
          background-size: ${getFibonacciByIndex(9)}px 100%;
          background-repeat: repeat-x;
          transition: width 0.1s linear;
        `;
      case 'circle':
        // Use a circle that moves along the bottom
        return `
          width: ${$thickness * 2}px;
          height: ${$thickness * 2}px;
          border-radius: 50%;
          left: calc(${$progress * 100}% - ${$thickness}px);
          bottom: ${-$thickness}px;
          transition: left 0.1s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
        `;
      case 'line':
      default:
        return `
          transition: width 0.1s cubic-bezier(${PHI_INVERSE}, 0, ${1 - PHI_INVERSE}, 1);
        `;
    }
  }}
`;

export default StickyNavigation; 









