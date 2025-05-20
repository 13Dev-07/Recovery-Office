import * as React from 'react';
import styled from 'styled-components';
import { FadeIn, ScrollReveal } from '../../../animation';
import { SecurityShield } from '../../../design-system/components/utility/FinancialIcons';
import { PHI, PHI_INVERSE, GOLDEN_SECTIONS, SACRED_SPACING } from '../../../constants/sacred-geometry';

/**
 * ServicesHero component properties
 */
interface ServicesHeroProps {
  /** Main title for the hero section */
  title?: string;
  /** Subtitle or description text */
  subtitle?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Background overlay color (rgba) */
  overlayColor?: string;
}

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 500px;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${props => props.theme.colors.text.light};
`;

const HeroBackground = styled.div<{ $backgroundImage: string, $overlayColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.$overlayColor};
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${900 * PHI_INVERSE}px;
  padding: 0 ${SACRED_SPACING.lg}px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: ${SACRED_SPACING.md}px;
  line-height: ${PHI};
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  margin-bottom: ${SACRED_SPACING.xl}px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${PHI};
  opacity: 0.9;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const IconBottomRight = styled.div`
  position: absolute;
  bottom: ${GOLDEN_SECTIONS.minor * 100}%;
  right: ${SACRED_SPACING.xl}px;
  transform: scale(0.85) rotate(-5deg);
`;

/**
 * ServicesHero Component
 * 
 * A hero section specifically designed for the Services page,
 * featuring a background image and financial icons.
 */
export const ServicesHero: React.FC<ServicesHeroProps> = ({
  title = "Our Services",
  subtitle = "Each of our services incorporates industry best practices and regulatory compliance to maximize your financial recovery potential.",
  backgroundImage = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80",
  overlayColor = "rgba(21, 45, 85, 0.7)"
}) => {
  return (
    <HeroContainer>
      <HeroBackground 
        $backgroundImage={backgroundImage}
        $overlayColor={overlayColor}
      />
      
      <IconContainer>
        <IconBottomRight>
          <ScrollReveal threshold={0.2} variant="slide-up">
            <SecurityShield 
              size="lg" 
              opacity={0.15} 
            />
          </ScrollReveal>
        </IconBottomRight>
      </IconContainer>
      
      <HeroContent>
        <FadeIn delay={0.3}>
          <HeroTitle>{title}</HeroTitle>
        </FadeIn>
        <FadeIn delay={0.5}>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </FadeIn>
      </HeroContent>
    </HeroContainer>
  );
};

// Remove the default export to avoid conflicts with the named export
// export default ServicesHero; 











