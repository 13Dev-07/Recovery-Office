/**
 * Section Component
 * 
 * A container for content sections following sacred geometry principles.
 * Provides options for background styling, padding, and section dividers.
 */

import * as React from 'react';
import styled from 'styled-components';

import SectionDivider from './SectionDivider';
import { Box } from '../design-system/components/layout/Box';
import { FadeIn } from "@animation/FadeIn";

// Background style options
type BackgroundStyle = 'light' | 'dark' | 'primary' | 'gradient' | 'botanical' | 'none';

// Section width options
type SectionWidth = 'narrow' | 'normal' | 'wide' | 'full';

// Section props interface
interface SectionProps {
  /**
   * The unique identifier for the section
   */
  id?: string;
  
  /**
   * The content of the section
   */
  children: React.ReactNode;
  
  /**
   * The background style of the section
   * @default 'none'
   */
  backgroundStyle?: BackgroundStyle;
  
  /**
   * Width of section content
   * @default 'normal'
   */
  width?: SectionWidth;
  
  /**
   * Top spacing in pixels (follows sacred geometry)
   * @default SACRED_SPACING.xl
   */
  paddingTop?: number;
  
  /**
   * Bottom spacing in pixels (follows sacred geometry)
   * @default SACRED_SPACING.xl
   */
  paddingBottom?: number;
  
  /**
   * Whether to include a divider at the top
   * @default false
   */
  dividerTop?: boolean;
  
  /**
   * Whether to include a divider at the bottom
   * @default false
   */
  dividerBottom?: boolean;
  
  /**
   * Style for the top divider (if dividerTop is true)
   * @default 'line'
   */
  dividerTopStyle?: React.ComponentProps<typeof SectionDivider>['style'];
  
  /**
   * Style for the bottom divider (if dividerBottom is true)
   * @default 'line'
   */
  dividerBottomStyle?: React.ComponentProps<typeof SectionDivider>['style'];
  
  /**
   * Whether to add animation to the section
   * @default true
   */
  animate?: boolean;

  /**
   * Color of the section text (for dark or colored backgrounds)
   */
  textColor?: string;

  /**
   * Additional CSS class name
   */
  className?: string;
}

// Helper function to get max width based on SectionWidth
const getMaxWidth = (width: SectionWidth): string => {
  switch (width) {
    case 'narrow':
      return '800px';
    case 'normal':
      return '1200px';
    case 'wide':
      return '1600px';
    case 'full':
      return '100%';
    default:
      return '1200px';
  }
};

// Helper function to get background styles
const getBackgroundStyles = (style: BackgroundStyle): string => {
  switch (style) {
    case 'light':
      return `
        background-color: var(--color-background-light);
      `;
    case 'dark':
      return `
        background-color: var(--color-background-dark);
        color: var(--color-text-light);
      `;
    case 'primary':
      return `
        background-color: var(--color-primary-main);
        color: var(--color-text-light);
      `;
    case 'gradient':
      return `
        background: linear-gradient(
          to right,
          var(--color-primary-light),
          var(--color-primary-main),
          var(--color-primary-dark)
        );
        color: var(--color-text-light);
      `;
    case 'botanical':
      return `
        background-color: var(--color-background-light);
        background-image: url('/assets/images/botanical/pattern-light.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `;
    default:
      return '';
  }
};

// Styled components
const SectionWrapper = styled.section<{
  $backgroundStyle: BackgroundStyle;
  $paddingTop: number;
  $paddingBottom: number;
  $textColor?: string;
}>`
  width: 100%;
  padding-top: ${props => props.$paddingTop}px;
  padding-bottom: ${props => props.$paddingBottom}px;
  position: relative;
  overflow: hidden;
  
  ${props => getBackgroundStyles(props.$backgroundStyle)}
  
  ${props => props.$textColor && `
    color: ${props.$textColor};
  `}
`;

const SectionInner = styled.div<{
  $width: SectionWidth;
}>`
  width: 100%;
  max-width: ${props => getMaxWidth(props.$width)};
  margin: 0 auto;
  padding: 0 ${SACRED_SPACING.md}px;
  position: relative;
  z-index: 1;
`;

/**
 * Section Component
 * 
 * A container component that wraps content in a styled section.
 * Follows sacred geometry principles for spacing and proportions.
 */
export const Section: React.FC<SectionProps> = ({
  id,
  children,
  backgroundStyle = 'none',
  width = 'normal',
  paddingTop = SACRED_SPACING.xl,
  paddingBottom = SACRED_SPACING.xl,
  dividerTop = false,
  dividerBottom = false,
  dividerTopStyle = 'line',
  dividerBottomStyle = 'line',
  animate = true,
  textColor,
  className,
}) => {
  const content = (
    <SectionWrapper
      id={id}
      className={className}
      $backgroundStyle={backgroundStyle}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $textColor={textColor}
    >
      {dividerTop && (
        <SectionDivider 
          style={dividerTopStyle}
          spacingBottom={SACRED_SPACING.md}
          spacingTop={0}
        />
      )}
      
      <SectionInner $width={width}>
        {children}
      </SectionInner>
      
      {dividerBottom && (
        <SectionDivider 
          style={dividerBottomStyle}
          spacingTop={SACRED_SPACING.md}
          spacingBottom={0}
        />
      )}
    </SectionWrapper>
  );
  
  // Apply animation if enabled
  if (animate) {
    return (
      <FadeIn duration={800} delay={200}>
        {content}
      </FadeIn>
    );
  }
  
  return content;
};

export default Section; 









