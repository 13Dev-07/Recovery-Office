/**
 * HeroBotanicals Component
 * 
 * Displays decorative botanical elements in the hero section,
 * implementing sacred geometry principles for positioning and animation.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../design-system/components/layout/Box';
import { OliveBranch } from '../design-system/botanical/OliveBranch';
import { FibonacciSpiral } from '../design-system/botanical/FibonacciSpiral';
import { VesicaPiscis } from '../design-system/botanical/VesicaPiscis';
import { 
  SACRED_SPACING, 
  PHI, 
  SACRED_TIMING, 
  SACRED_ANGLES 
} from '../constants/sacred-geometry';
import { colors } from '../design-system/tokens/colors';
import { FadeIn } from "@animation/FadeIn";
import { ParallaxLayer } from "@animation/ParallaxLayer";

const BotanicalsWrapper = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    display: none;
  }
`;

const OliveBranchWrapper = styled(Box)`
  position: absolute;
  top: ${50 * PHI_INVERSE}%;
  right: ${SACRED_SPACING.lg}px;
  transform: rotate(${SACRED_ANGLES.goldenAngle}deg);
  z-index: 3;
`;

const SpiralWrapper = styled(Box)`
  position: absolute;
  bottom: ${SACRED_SPACING.xxl}px;
  left: ${SACRED_SPACING.xl}px;
  opacity: 0.7;
  z-index: 2;
`;

const VesicaWrapper = styled(Box)`
  position: absolute;
  top: ${SACRED_SPACING.xxl}px;
  left: ${50 * PHI_INVERSE}%;
  opacity: 0.5;
  z-index: 1;
`;

// Derived constants
const PHI_INVERSE = 1 / PHI;

interface HeroBotanicalsProps {
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * HeroBotanicals Component
 * 
 * Displays decorative botanical elements in the hero section.
 * Elements are positioned and animated according to sacred geometry principles.
 */
export const HeroBotanicals: React.FC<HeroBotanicalsProps> = ({ className }) => {
  return (
    <BotanicalsWrapper className={className}>
      {/* Olive Branch */}
      <ParallaxLayer 
        speed={-0.2} 
        direction="vertical"
      >
        <FadeIn delay={SACRED_TIMING.medium} duration={SACRED_TIMING.slower}>
          <OliveBranchWrapper>
            <OliveBranch 
              width={350} 
              color={colors.primary[300] ?? 1} 
              opacity={0.8}
            />
          </OliveBranchWrapper>
        </FadeIn>
      </ParallaxLayer>
      
      {/* Fibonacci Spiral */}
      <ParallaxLayer 
        speed={0.1} 
        direction="horizontal"
      >
        <FadeIn delay={SACRED_TIMING.slow} duration={SACRED_TIMING.slower}>
          <SpiralWrapper>
            <FibonacciSpiral 
              iterations={5} 
              startSize={100}
              showSquares={false}
              color={colors.primary[400] ?? 1} 
              opacity={0.3} 
            />
          </SpiralWrapper>
        </FadeIn>
      </ParallaxLayer>
      
      {/* Vesica Piscis */}
      <ParallaxLayer 
        speed={0.05} 
        direction="vertical"
      >
        <FadeIn delay={SACRED_TIMING.fast} duration={SACRED_TIMING.slow}>
          <VesicaWrapper>
            <VesicaPiscis 
              width={200}
              rotation={45}
              color={colors.primary[300] ?? 1} 
              opacity={0.4}
            />
          </VesicaWrapper>
        </FadeIn>
      </ParallaxLayer>
    </BotanicalsWrapper>
  );
};

export default HeroBotanicals; 








