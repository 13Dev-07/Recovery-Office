/**
 * HomeCallToAction Component
 * 
 * Displays a compelling call-to-action section on the home page,
 * encouraging users to book a consultation while incorporating
 * sacred geometry principles for layout and design.
 */

import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Flex } from '../../../design-system/components/layout';
import { Heading, Text, Paragraph } from '../../../design-system/components/typography';
import { Button } from '../../../design-system/components/button';
import { Section } from '../../../components/section';
import { FadeIn, SlideIn } from '../../../animation';
import { VesicaPiscis, OliveBranch } from '../../../design-system/botanical';
import { 
  SACRED_SPACING, 
  PHI, 
  PHI_INVERSE,
  getFibonacciByIndex,
  ANIMATION_TIMING
} from '../../../constants/sacred-geometry';


// Styled components
const CTAContainer = styled(Box)`
  position: relative;
  padding: ${SACRED_SPACING.xl}px 0;
  border-radius: ${PHI_INVERSE * 10}px;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(10, 64, 33, 0.95) 0%, 
    rgba(26, 104, 69, 0.95) ${PHI_INVERSE * 100}%, 
    rgba(44, 130, 98, 0.95) 100%);
  box-shadow: 0 ${SACRED_SPACING.md}px ${SACRED_SPACING.xl}px rgba(10, 64, 33, 0.2);
`;

const CTAContent = styled(Box)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: ${SACRED_SPACING.xl}px;
`;

const CTAButtons = styled(Flex)`
  justify-content: center;
  gap: ${SACRED_SPACING.md}px;
  margin-top: ${SACRED_SPACING.xl}px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    > button {
      width: 100%;
      max-width: 300px;
      margin-bottom: ${SACRED_SPACING.sm}px;
    }
  }
`;

const BotanicalDecoration = styled(Box)`
  position: absolute;
  z-index: 1;
  
  &.top-right {
    top: -${SACRED_SPACING.xl}px;
    right: -${SACRED_SPACING.xl}px;
    transform: rotate(${45}deg);
    opacity: 0.15;
  }
  
  &.bottom-left {
    bottom: -${SACRED_SPACING.xl}px;
    left: -${SACRED_SPACING.xl}px;
    transform: rotate(${-45}deg);
    opacity: 0.15;
  }
`;

/**
 * HomeCallToAction Component
 * 
 * A compelling call-to-action section encouraging users to book a consultation,
 * designed with sacred geometry principles for proportions and visual harmony.
 */
const HomeCallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  const handleBookingClick = () => {
    navigate('/booking');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Section
      variant="transparent"
      pt={SACRED_SPACING.xxl}
      pb={SACRED_SPACING.xxl}
      id="cta"
    >
      <Container>
        <FadeIn delay={ANIMATION_TIMING.quick}>
          <CTAContainer>
            {/* Botanical decorations */}
            <BotanicalDecoration className="top-right">
              <VesicaPiscis width={300} color="white" />
            </BotanicalDecoration>
            
            <BotanicalDecoration className="bottom-left">
              <OliveBranch width={280} color="white" />
            </BotanicalDecoration>
            
            <CTAContent>
              <SlideIn direction="top" delay={ANIMATION_TIMING.quick}>
                <Heading
                  as="h2"
                  variant="h2"
                  marginBottom={SACRED_SPACING.md}
                >
                  Begin Your Recovery Journey Today
                </Heading>
              </SlideIn>
              
              <SlideIn direction="top" delay={ANIMATION_TIMING.standard}>
                <Paragraph
                  variant="body1"
                  maxWidth={`${PHI * 500}px`}
                  margin="0 auto"
                >
                  Take the first step toward reclaiming your financial assets with our expert guidance.
                  Book a confidential consultation to discuss your situation and explore recovery options.
                </Paragraph>
              </SlideIn>
              
              <Box
                marginTop={SACRED_SPACING.lg}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  padding={`${SACRED_SPACING.sm}px ${SACRED_SPACING.md}px`}
                  backgroundColor="rgba(255,255,255,0.2)"
                  borderRadius={PHI_INVERSE * 10}
                  maxWidth={`${getFibonacciByIndex(11)}px`} // 89px
                >
                  <Text
                    variant="caption"
                    fontStyle="italic"
                  >
                    "Recovery Office helped me recover 85% of my assets lost to investment fraud."
                  </Text>
                </Box>
              </Box>
              
              <CTAButtons>
                <Button
                  variant="light"
                  size="large"
                  onClick={handleBookingClick}
                >
                  Book a Consultation
                </Button>
                
                <Button
                  variant="outline"
                  size="large"
                  onClick={handleContactClick}
                  style={{ color: 'white', borderColor: 'white' }}
                >
                  Contact Us
                </Button>
              </CTAButtons>
              
              <Text
                variant="caption"
                marginTop={SACRED_SPACING.md}
              >
                No upfront fees. Initial consultations are confidential and obligation-free.
              </Text>
            </CTAContent>
          </CTAContainer>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default HomeCallToAction; 











