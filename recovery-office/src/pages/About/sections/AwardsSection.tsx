/**
 * Awards Section Component
 * 
 * Showcases the awards and recognitions received by Recovery Office
 * using the sacred geometry principles with golden ratio alignments.
 */

import * as React from 'react';
import styled from 'styled-components';
import AwardsShowcase from '../../../components/awards/AwardsShowcase';
import { Section } from '../design-system/components/layout/Section';
import { SectionTitle } from '../../../design-system/components/typography/SectionTitle';
import { Text } from '../../../design-system/components/typography/Text';
import { PHI, SACRED_SPACING } from '../../../constants/sacred-geometry';
import { BotanicalElement } from '../../../design-system/botanical/BotanicalElement';

// Sample award data
const awardData = [
  {
    id: 'holistic-healing-2023',
    title: 'Excellence in Holistic Healing',
    year: 2023,
    issuedBy: 'Wellness Association',
    description: 'Awarded for outstanding contributions to holistic healing practices and patient recovery.',
    shape: 'circle',
    variant: 'gold',
    showBotanical: true,
    icon: '🌿'
  },
  {
    id: 'sustainable-practice-2022',
    title: 'Sustainable Practice Award',
    year: 2022,
    issuedBy: 'Green Health Initiative',
    description: 'Recognized for implementing sustainable and eco-friendly practices in healthcare.',
    shape: 'shield',
    variant: 'silver',
    icon: '♻️'
  },
  {
    id: 'community-support-2022',
    title: 'Community Support Excellence',
    year: 2022,
    issuedBy: 'Local Health Board',
    description: 'Recognized for exceptional community outreach and support programs.',
    shape: 'laurel',
    variant: 'bronze',
    icon: '🤝'
  },
  {
    id: 'patient-care-2021',
    title: 'Outstanding Patient Care',
    year: 2021,
    issuedBy: 'Healthcare Excellence Foundation',
    description: 'Awarded for exceptional standards in patient care and recovery support.',
    shape: 'ribbon',
    variant: 'gold',
    icon: '❤️'
  },
  {
    id: 'innovation-2020',
    title: 'Healthcare Innovation Award',
    year: 2020,
    issuedBy: 'Medical Innovation Forum',
    description: 'Recognized for innovative approaches to physical therapy and recovery techniques.',
    shape: 'circle',
    variant: 'recognition',
    icon: '💡'
  },
  {
    id: 'staff-development-2019',
    title: 'Staff Development & Training',
    year: 2019,
    issuedBy: 'Healthcare Training Institute',
    description: 'Awarded for exceptional staff development programs and training excellence.',
    shape: 'shield',
    variant: 'certification',
    icon: '🎓'
  }
];

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.9),
    rgba(250, 250, 250, 0.8)
  );
  padding: ${SACRED_SPACING.xl}px 0;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${SACRED_SPACING.md}px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${SACRED_SPACING.lg * PHI}px;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: ${-SACRED_SPACING.xl * 0.3}px;
  right: ${-SACRED_SPACING.xl * 0.3}px;
  opacity: 0.07;
  transform: rotate(${PHI * 10}deg);
  z-index: 0;
`;

const AwardsSection: React.FC = () => {
  return (
    <StyledSection id="awards">
      <BackgroundDecoration>
        <BotanicalElement type="flourish" size="xl" />
      </BackgroundDecoration>
      
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Our Recognitions</SectionTitle>
          <Text fontSize="lg" mt={SACRED_SPACING.sm}>
            We are honored to be recognized for our commitment to excellence in holistic recovery practices
          </Text>
        </SectionHeader>
        
        {/* Main showcase with grid display */}
        <AwardsShowcase 
          awards={awardData}
          displayMode="grid"
          showBotanical={true}
          animateOnHover={true}
          showDetailsOnClick={true}
        />
        
        {/* Featured awards section */}
        <SectionHeader style={{ marginTop: SACRED_SPACING.xl }}>
          <SectionTitle level={3}>Featured Achievements</SectionTitle>
          <Text fontSize="md" mt={SACRED_SPACING.xs}>
            Highlights of our most significant recognitions
          </Text>
        </SectionHeader>
        
        <AwardsShowcase 
          awards={awardData.slice(0, 3)}
          displayMode="featured"
          showBotanical={true}
          animateOnHover={true}
        />
        
        {/* Carousel for all awards */}
        <SectionHeader style={{ marginTop: SACRED_SPACING.xl }}>
          <SectionTitle level={3}>Browse Our Achievements</SectionTitle>
        </SectionHeader>
        
        <AwardsShowcase 
          awards={awardData}
          displayMode="carousel"
          maxVisible={3}
          showDetailsOnClick={true}
        />
      </ContentContainer>
    </StyledSection>
  );
};

export default AwardsSection; 











