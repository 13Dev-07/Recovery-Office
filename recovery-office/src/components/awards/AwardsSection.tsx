/**
 * AwardsSection Component
 * 
 * A complete section for displaying awards recognition on the website.
 * Uses sacred geometry for spacing and proportions.
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import { 
  PHI, 
  SACRED_SPACING 
} from '@constants/sacred-geometry';

import { Section } from '@design-system/components/layout/Section';
import { Box } from '@design-system/components/layout/Box';
import { Flex } from '@design-system/components/layout/Flex';
import { BotanicalElement } from '@design-system/botanical/BotanicalElement';
import { SectionTitle } from '@design-system/components/typography/SectionTitle';
import { Text } from '@design-system/components/typography/Text';
import { FadeIn } from '@design-system/components/animation/FadeIn';
import AwardsShowcase from './AwardsShowcase';
import { Award } from './AwardsShowcase';

// Icons import (assuming you have icon components)
import { StarIcon, RibbonIcon, TrophyIcon, CertificateIcon } from '@design-system/icons';

// Props interface for the AwardsSection component
interface AwardsSectionProps {
  /** Title of the awards section */
  title?: string;
  
  /** Subtitle or description */
  subtitle?: string;
  
  /** Custom intro text */
  introText?: string;
  
  /** List of awards to display */
  awards?: Award[];
  
  /** Whether to show an initial featured award */
  showFeatured?: boolean;
  
  /** Whether to show botanical decoration elements */
  showBotanical?: boolean;
  
  /** Background color for the section */
  backgroundColor?: string;
  
  /** Text color for the section */
  textColor?: string;
  
  /** Additional CSS class */
  className?: string;
}

const StyledSection = styled(Section)<{
  $backgroundColor?: string;
  $textColor?: string;
}>`
  position: relative;
  padding: ${SACRED_SPACING.xl * 2}px 0;
  background-color: ${props => props.$backgroundColor || 'transparent'};
  color: ${props => props.$textColor || 'inherit'};
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  z-index: 0;
  opacity: 0.05;
  pointer-events: none;
`;

const TopLeftDecoration = styled(BackgroundDecoration)`
  top: -${() => getFibonacciByIndex(8)}px;
  left: -${() => getFibonacciByIndex(7)}px;
  transform: rotate(-${PHI * 10}deg);
`;

const BottomRightDecoration = styled(BackgroundDecoration)`
  bottom: -${() => getFibonacciByIndex(8)}px;
  right: -${() => getFibonacciByIndex(7)}px;
  transform: rotate(${PHI * 10}deg);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${() => getFibonacciByIndex(13)}px;
  margin: 0 auto;
  padding: 0 ${SACRED_SPACING.lg}px;
`;

const IntroContent = styled.div`
  text-align: center;
  margin-bottom: ${SACRED_SPACING.xl}px;
`;

const IntroText = styled(Text)`
  max-width: ${() => getFibonacciByIndex(12)}px;
  margin: ${SACRED_SPACING.md}px auto 0;
  font-size: ${() => getFibonacciByIndex(5)}px;
  line-height: ${PHI * 1.5};
`;

// Sample award data (normally would come from props or API)
const sampleAwards: Award[] = [
  {
    id: 'award-1',
    title: 'Excellence in Holistic Therapy',
    description: 'Awarded for outstanding contribution to holistic therapy practices',
    year: 2023,
    issuedBy: 'Holistic Practitioners Association',
    variant: 'gold',
    shape: 'circle',
    icon: <StarIcon />,
    detailsUrl: '/awards/excellence-therapy'
  },
  {
    id: 'award-2',
    title: 'Best Recovery Center',
    description: 'Recognized as the top recovery center in the region',
    year: 2022,
    issuedBy: 'Wellness Industry Awards',
    variant: 'gold',
    shape: 'shield',
    icon: <TrophyIcon />,
    detailsUrl: '/awards/best-recovery'
  },
  {
    id: 'award-3',
    title: 'Innovation in Care Practices',
    description: 'Pioneering new approaches to patient care and recovery',
    year: 2021,
    issuedBy: 'Healthcare Innovation Board',
    variant: 'silver',
    shape: 'laurel',
    icon: <RibbonIcon />,
    detailsUrl: '/awards/innovation-care'
  },
  {
    id: 'award-4',
    title: 'Certified Excellence',
    description: 'Meeting and exceeding industry standards for care quality',
    year: 2020,
    issuedBy: 'Quality Care Certification',
    variant: 'certification',
    shape: 'ribbon',
    icon: <CertificateIcon />,
    detailsUrl: '/awards/certified-excellence'
  },
  {
    id: 'award-5',
    title: 'Sustainability Award',
    description: 'Commitment to environmentally responsible healthcare practices',
    year: 2019,
    issuedBy: 'Green Healthcare Initiative',
    variant: 'recognition',
    shape: 'circle',
    customColor: '#3d8c40',
    detailsUrl: '/awards/sustainability'
  }
];

// AwardsSection component implementation
const AwardsSection: React.FC<AwardsSectionProps> = ({
  title = 'Our Recognition & Awards',
  subtitle = 'Celebrating Excellence in Holistic Care',
  introText = 'We are honored to be recognized by leading organizations in the field for our commitment to quality, innovation, and excellence in holistic recovery care.',
  awards = sampleAwards,
  showFeatured = true,
  showBotanical = true,
  backgroundColor,
  textColor,
  className
}) => {
  // Handle award click
  const handleAwardClick = (award: Award) => {
    console.log('Award clicked:', award.title);
    // You could navigate to the award details page or open a modal here
    if (award.detailsUrl) {
      // window.location.href = award.detailsUrl;
      console.log('Navigating to:', award.detailsUrl);
    }
  };

  return (
    <StyledSection 
      $backgroundColor={backgroundColor} 
      $textColor={textColor}
      className={className}
    >
      {/* Botanical decorations */}
      {showBotanical && (
        <>
          <TopLeftDecoration>
            <BotanicalElement type="branch" size="xl" rotation={45} />
          </TopLeftDecoration>
          <BottomRightDecoration>
            <BotanicalElement type="leaf-cluster" size="xl" rotation={-30} />
          </BottomRightDecoration>
        </>
      )}
      
      <ContentContainer>
        {/* Section intro */}
        <IntroContent>
          <FadeIn duration={getFibonacciByIndex(6) * 10}>
            <SectionTitle>{title}</SectionTitle>
            {subtitle && (
              <Text 
                fontSize={getFibonacciByIndex(6)} 
                mt={SACRED_SPACING.sm}
                fontWeight="medium"
              >
                {subtitle}
              </Text>
            )}
            {introText && (
              <IntroText>{introText}</IntroText>
            )}
          </FadeIn>
        </IntroContent>
        
        {/* Featured award showcase */}
        {showFeatured && awards.length > 0 && (
          <Box mb={SACRED_SPACING.xl}>
            <AwardsShowcase 
              awards={[awards[0]]} 
              displayMode="featured"
              showDetailsOnClick={true}
              showBotanical={false}
              onAwardSelect={handleAwardClick}
            />
          </Box>
        )}
        
        {/* All awards showcase */}
        <AwardsShowcase 
          awards={awards}
          displayMode="grid"
          showDetailsOnClick={true}
          showBotanical={false}
          onAwardSelect={handleAwardClick}
        />
      </ContentContainer>
    </StyledSection>
  );
};

export default AwardsSection; 















