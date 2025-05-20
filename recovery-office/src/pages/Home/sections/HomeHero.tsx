import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FadeIn, ScrollReveal } from '../../../animation';
import { FlowerOfLife, OliveBranch } from '../../../design-system/botanical';
import { PHI, PHI_INVERSE, SACRED_SPACING } from '../../../constants/sacred-geometry';
import { Button } from '../../../design-system/components/button';

interface HomeHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
}

// The golden section ratio for positioning elements
const GOLDEN_SECTIONS = {
  major: 0.618,
  minor: 0.382
};

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary[900] ?? 1};
  color: ${props => props.theme.colors.text.light};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 ${SACRED_SPACING.lg}px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: ${SACRED_SPACING.md}px;
  line-height: ${PHI};
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  margin-bottom: ${SACRED_SPACING.xl}px;
  max-width: 800px;
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
  opacity: 0.15;
`;

const FloralLeft = styled.div`
  position: absolute;
  top: ${GOLDEN_SECTIONS.minor * 100}%;
  left: ${SACRED_SPACING.lg}px;
  transform: scale(0.8) rotate(15deg);
`;

const FloralRight = styled.div`
  position: absolute;
  bottom: ${GOLDEN_SECTIONS.minor * 100}%;
  right: ${SACRED_SPACING.lg}px;
  transform: scale(0.8) rotate(-15deg);
`;

const HomeHero: React.FC<HomeHeroProps> = ({
  title = "Financial Recovery Experts",
  subtitle = "We help individuals and businesses reclaim financial assets lost to fraud, scams, and misconduct, providing expert guidance through the recovery process.",
  ctaText = "Book a Consultation",
  ctaUrl = "/booking"
}) => {
  return (
    <HeroContainer>
      <BotanicalContainer>
        <FloralLeft>
          <ScrollReveal threshold={0.2}>
            <OliveBranch size={400} color="rgba(255, 255, 255, 0.2)" />
          </ScrollReveal>
        </FloralLeft>
        <FloralRight>
          <ScrollReveal threshold={0.2} variant="slide-right">
            <OliveBranch size={400} color="rgba(255, 255, 255, 0.2)" flipHorizontal />
          </ScrollReveal>
        </FloralRight>
        <ScrollReveal threshold={0.1}>
          <FlowerOfLife 
            size={900} 
            color="rgba(255, 255, 255, 0.05)" 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)' 
            }} 
          />
        </ScrollReveal>
      </BotanicalContainer>
      
      <HeroContent>
        <FadeIn delay={0.3}>
          <HeroTitle>{title}</HeroTitle>
        </FadeIn>
        <FadeIn delay={0.5}>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </FadeIn>
        <FadeIn delay={0.7}>
          <Button 
            variant="accent"
            size="large"
            as={Link}
            to={ctaUrl}
          >
            {ctaText}
          </Button>
        </FadeIn>
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeHero; 










