/**
 * SectionHeading Component
 * 
 * Creates a heading for sections with optional subtitle and decorative elements.
 * Adheres to sacred geometry principles for spacing and proportions.
 */

import * as React from 'react';
import styled from 'styled-components';
import { SACRED_SPACING, PHI } from '../constants/sacred-geometry';
import { FadeIn } from "@animation/FadeIn";

// Alignment options
type HeadingAlignment = 'left' | 'center' | 'right';

// Size options
type HeadingSize = 'small' | 'medium' | 'large';

// Decoration types
type DecorationType = 'line' | 'dot' | 'botanical' | 'none';

// SectionHeading component props
interface SectionHeadingProps {
  /**
   * Primary heading text
   */
  title: string;

  /**
   * Secondary/subtitle text
   */
  subtitle?: string;

  /**
   * Heading alignment
   * @default 'center'
   */
  alignment?: HeadingAlignment;

  /**
   * Heading size variation
   * @default 'medium'
   */
  size?: HeadingSize;

  /**
   * Add a decorative element under the heading
   * @default 'line'
   */
  decoration?: DecorationType;

  /**
   * Space below the heading in pixels (following sacred geometry)
   * @default SACRED_SPACING.lg
   */
  marginBottom?: number;

  /**
   * Whether to animate the heading when it enters the viewport
   * @default true
   */
  animate?: boolean;

  /**
   * Custom className for the component
   */
  className?: string;
}

// Get font size based on heading size
const getFontSize = (size: HeadingSize): string => {
  switch (size) {
    case 'small':
      return 'var(--font-size-xl)';
    case 'medium':
      return 'var(--font-size-2xl)';
    case 'large':
      return 'var(--font-size-3xl)';
    default:
      return 'var(--font-size-2xl)';
  }
};

// Get subtitle font size based on heading size
const getSubtitleFontSize = (size: HeadingSize): string => {
  switch (size) {
    case 'small':
      return 'var(--font-size-md)';
    case 'medium':
      return 'var(--font-size-lg)';
    case 'large':
      return 'var(--font-size-xl)';
    default:
      return 'var(--font-size-lg)';
  }
};

// Get decoration width based on alignment
const getDecorationWidth = (alignment: HeadingAlignment): string => {
  // For sacred geometry proportions, we use 1/PHI (approx 61.8%) for centered elements
  // and a different proportion for left/right aligned elements
  switch (alignment) {
    case 'left':
      return '38.2%'; // 1 - (1/PHI)
    case 'center':
      return '61.8%'; // 1/PHI
    case 'right':
      return '38.2%'; // 1 - (1/PHI)
    default:
      return '61.8%';
  }
};

// Styled components
const HeadingContainer = styled.div<{
  $alignment: HeadingAlignment;
  $marginBottom: number;
}>`
  text-align: ${props => props.$alignment};
  margin-bottom: ${props => props.$marginBottom}px;
  position: relative;
`;

const Title = styled.h2<{
  $size: HeadingSize;
}>`
  font-size: ${props => getFontSize(props.$size)};
  font-family: var(--font-heading);
  margin: 0 0 ${SACRED_SPACING.xs}px 0;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
`;

const Subtitle = styled.p<{
  $size: HeadingSize;
}>`
  font-size: ${props => getSubtitleFontSize(props.$size)};
  font-family: var(--font-body);
  margin: ${SACRED_SPACING.xs}px 0 0 0;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.85;
`;

const Decoration = styled.div<{
  $type: DecorationType;
  $alignment: HeadingAlignment;
}>`
  display: ${props => props.$type === 'none' ? 'none' : 'block'};
  width: ${props => getDecorationWidth(props.$alignment)};
  height: 2px;
  background: ${props => props.$type === 'line' ? 'var(--color-primary-main)' : 'transparent'};
  margin-top: ${SACRED_SPACING.sm}px;
  position: relative;
  
  ${props => props.$alignment === 'center' && `
    margin-left: auto;
    margin-right: auto;
  `}
  
  ${props => props.$alignment === 'right' && `
    margin-left: auto;
  `}
  
  ${props => props.$type === 'dot' && `
    background: transparent;
    
    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-primary-main);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
  
  ${props => props.$type === 'botanical' && `
    background: transparent;
    height: 20px;
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/botanical/divider-small.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  `}
`;

/**
 * SectionHeading Component
 * 
 * Displays a styled heading for sections with optional subtitle and
 * decorative elements. Built using sacred geometry principles.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  size = 'medium',
  decoration = 'line',
  marginBottom = SACRED_SPACING.lg,
  animate = true,
  className,
}) => {
  const headingContent = (
    <HeadingContainer 
      className={className} 
      $alignment={alignment}
      $marginBottom={marginBottom}
    >
      <Title $size={size}>{title}</Title>
      
      {subtitle && (
        <Subtitle $size={size}>{subtitle}</Subtitle>
      )}
      
      <Decoration $type={decoration} $alignment={alignment} />
    </HeadingContainer>
  );
  
  // Apply animation if enabled
  if (animate) {
    return (
      <FadeIn duration={600} delay={100}>
        {headingContent}
      </FadeIn>
    );
  }
  
  return headingContent;
};

export default SectionHeading; 








