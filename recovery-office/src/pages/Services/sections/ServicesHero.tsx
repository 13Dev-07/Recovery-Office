import * as React from 'react';
import styled from 'styled-components';
import { FadeIn, ScrollReveal } from '../../../animation';
import { FlowerOfLife } from '../../../design-system/botanical';
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

const BotanicalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const BotanicalBottomRight = styled.div`
  position: absolute;
  bottom: ${GOLDEN_SECTIONS.minor * 100}%;
  right: ${SACRED_SPACING.xl}px;
  transform: scale(0.85) rotate(-5deg);
`;

/**
 * ServicesHero Component
 * 
 * A hero section specifically designed for the Services page,
 * featuring a background image, sacred geometry botanical elements,
 * and responsive typography following golden ratio principles.
 */
const ServicesHero: React.FC<ServicesHeroProps> = ({
  title = "Our Services",
  subtitle = "Each of our services incorporates sacred geometry principles to create therapeutic experiences that restore harmony and facilitate recovery.",
  backgroundImage = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80",
  overlayColor = "rgba(21, 45, 85, 0.7)"
}) => {
  return (
    <HeroContainer>
      <HeroBackground 
        $backgroundImage={backgroundImage}
        $overlayColor={overlayColor}
      />
      
      <BotanicalContainer>
        <BotanicalBottomRight>
          <ScrollReveal threshold={0.2} variant="slide-up">
            <FlowerOfLife 
              size={350} 
              color="rgba(255, 255, 255, 0.15)" 
              animated={true}
              animationType="reveal"
            />
          </ScrollReveal>
        </BotanicalBottomRight>
      </BotanicalContainer>
      
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

export default ServicesHero; 











