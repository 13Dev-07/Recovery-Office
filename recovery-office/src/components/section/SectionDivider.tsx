/**
 * SectionDivider Component
 * 
 * Provides visual separation between sections following sacred geometry principles.
 * Offers different divider styles and optional botanical elements.
 */

import * as React from 'react';
import styled from 'styled-components';

import { FibonacciSpiral } from '../design-system/components/botanical/FibonacciSpiral';
import { GoldenSpiral } from '../design-system/components/botanical/GoldenSpiral';
import { Box } from '../design-system/components/layout/Box';

// Divider styles
type DividerStyle = 'line' | 'dots' | 'wave' | 'botanical' | 'none';

// Divider variants
type DividerVariant = 'light' | 'medium' | 'bold';

// Botanical elements
type BotanicalElement = 'fibonacci' | 'goldenSpiral' | 'none';

// Props interface
interface SectionDividerProps {
  /**
   * The visual style of the divider
   * @default 'line'
   */
  style?: DividerStyle;
  
  /**
   * The weight/thickness variant of the divider
   * @default 'medium'
   */
  variant?: DividerVariant;
  
  /**
   * Optional botanical element to include
   * @default 'none'
   */
  botanical?: BotanicalElement;
  
  /**
   * The color of the divider
   * @default 'primary.main'
   */
  color?: string;
  
  /**
   * Spacing above the divider in pixels
   * @default SACRED_SPACING.md
   */
  spacingTop?: number;
  
  /**
   * Spacing below the divider in pixels
   * @default SACRED_SPACING.md
   */
  spacingBottom?: number;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Optional children elements
   */
  children?: React.ReactNode;
}

// Styled components
const DividerContainer = styled(Box)<{
  $spacingTop: number;
  $spacingBottom: number;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.$spacingTop}px;
  padding-bottom: ${props => props.$spacingBottom}px;
`;

const LineDivider = styled.div<{ children?: React.ReactNode;
  $color: string;
  $variant: DividerVariant;
}>`
  width: 100%;
  height: ${props => {
    switch (props.$variant) {
      case 'light': return '1px';
      case 'bold': return '3px';
      default: return '2px';
    }
  }};
  background-color: ${props => props.$color};
  position: relative;
`;

const DotsDivider = styled.div<{ children?: React.ReactNode;
  $color: string;
  $variant: DividerVariant;
}>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${props => {
    switch (props.$variant) {
      case 'light': return '8px';
      case 'bold': return '16px';
      default: return '12px';
    }
  }};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: ${props => {
      switch (props.$variant) {
        case 'light': return '1px';
        case 'bold': return '3px';
        default: return '2px';
      }
    }};
    background-color: ${props => props.$color};
  }

  &::before {
    margin-right: ${SACRED_SPACING.md}px;
  }

  &::after {
    margin-left: ${SACRED_SPACING.md}px;
  }

  .dot {
    width: ${props => {
      switch (props.$variant) {
        case 'light': return '4px';
        case 'bold': return '8px';
        default: return '6px';
      }
    }};
    height: ${props => {
      switch (props.$variant) {
        case 'light': return '4px';
        case 'bold': return '8px';
        default: return '6px';
      }
    }};
    border-radius: 50%;
    background-color: ${props => props.$color};
    margin: 0 ${SACRED_SPACING.xs}px;
  }
`;

const WaveDivider = styled.div<{ children?: React.ReactNode;
  $color: string;
  $variant: DividerVariant;
}>`
  width: 100%;
  height: ${props => {
    switch (props.$variant) {
      case 'light': return '12px';
      case 'bold': return '24px';
      default: return '18px';
    }
  }};
  
  svg {
    width: 100%;
    height: 100%;
    stroke: ${props => props.$color};
    stroke-width: ${props => {
      switch (props.$variant) {
        case 'light': return '1px';
        case 'bold': return '3px';
        default: return '2px';
      }
    }};
    fill: none;
  }
`;

const BotanicalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: ${SACRED_SPACING.xs}px 0;
  
  svg {
    width: ${SACRED_SPACING.xxl * 2}px;
    height: ${SACRED_SPACING.xxl * 2}px;
    opacity: 0.6;
  }
`;

/**
 * SectionDivider Component
 * 
 * Visual separation between sections with various styles and optional botanical elements.
 * All spacing follows sacred geometry principles.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  style = 'line',
  variant = 'medium',
  botanical = 'none',
  color,
  spacingTop = SACRED_SPACING.md,
  spacingBottom = SACRED_SPACING.md,
  className,
  children,
}) => {
  // Get color from theme or use provided color
  const dividerColor = color || 'primary.main';
  
  // Render divider based on style
  const renderDivider = () => {
    switch (style) {
      case 'dots':
        return (
          <DotsDivider $color={dividerColor} $variant={variant}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </DotsDivider>
        );
      
      case 'wave':
        return (
          <WaveDivider $color={dividerColor} $variant={variant}>
            <svg viewBox="0 0 100 10" preserveAspectRatio="none">
              <path 
                d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 C95,2.5 100,5 100,5"
              />
            </svg>
          </WaveDivider>
        );
      
      case 'botanical':
        return renderBotanicalDivider();
      
      case 'none':
        return <div style={{ width: '100%', height: spacingTop + spacingBottom }}></div>;
      
      case 'line':
      default:
        return <LineDivider $color={dividerColor} $variant={variant} />;
    }
  };
  
  // Render botanical element
  const renderBotanicalDivider = () => {
    return (
      <>
        <LineDivider $color={dividerColor} $variant="light" />
        <BotanicalContainer>
          {botanical === 'fibonacci' && (
            <FibonacciSpiral iterations={5} showSquares={false} />
          )}
          {botanical === 'goldenSpiral' && (
            <GoldenSpiral size={SACRED_SPACING.xxl * 2} strokeWidth={2} />
          )}
        </BotanicalContainer>
        <LineDivider $color={dividerColor} $variant="light" />
      </>
    );
  };
  
  return (
    <DividerContainer 
      className={className}
      $spacingTop={spacingTop} 
      $spacingBottom={spacingBottom}
    >
      {renderDivider()}
    </DividerContainer>
  );
};

export default SectionDivider; 










