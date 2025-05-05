import * as React from 'react';

import styled from 'styled-components';
import { ScrollReveal } from '../../../animation';
import { FlowerOfLife, VesicaPiscis } from '../../../design-system/botanical';
import { PHI, PHI_INVERSE, SACRED_SPACING } from '../../../constants/sacred-geometry';
import { Container } from '../../../design-system/components/layout';
import { Section, SectionTitle, SectionContent } from '../../../design-system/components/layout/Section';
import { Button } from '../../../design-system/components/button';

/**
 * Process step data interface
 */
interface ProcessStep {
  /** Step number */
  number: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional botanical element identifier */
  botanical?: 'flowerOfLife' | 'vesicaPiscis';
}

/**
 * ServicesProcess component properties
 */
interface ServicesProcessProps {
  /** Section background color */
  backgroundColor?: string;
  /** Call to action button text */
  ctaText?: string;
  /** Call to action button URL */
  ctaUrl?: string;
  /** Custom process steps (optional) */
  customSteps?: ProcessStep[];
}

// Default steps in the service process
const DEFAULT_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "We begin with a comprehensive assessment of your situation, understanding the details of your case and identifying potential recovery paths.",
    botanical: "flowerOfLife"
  },
  {
    number: 2,
    title: "Recovery Strategy",
    description: "Our experts develop a tailored recovery strategy using sacred geometry principles to create balance in your financial reclamation journey.",
    botanical: "vesicaPiscis"
  },
  {
    number: 3,
    title: "Implementation",
    description: "We guide you through the implementation process, handling necessary documentation, communications, and regulatory requirements.",
    botanical: "flowerOfLife"
  },
  {
    number: 4,
    title: "Monitoring & Adjustment",
    description: "Throughout the recovery process, we continuously monitor progress and make adjustments to optimize your chances of success.",
    botanical: "vesicaPiscis"
  }
];

const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${SACRED_SPACING.xl}px;
  margin-bottom: ${SACRED_SPACING.xxl}px;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${SACRED_SPACING.xl}px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: ${SACRED_SPACING.md}px;
  box-shadow: 0 ${SACRED_SPACING.xs}px ${SACRED_SPACING.lg}px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${SACRED_SPACING.md}px;
    height: 100%;
    background: linear-gradient(to bottom, #4a6eb3, #63a98c);
  }
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${getFibonacciByIndex(8)}px;
  height: ${getFibonacciByIndex(8)}px;
  border-radius: 50%;
  background-color: #4a6eb3;
  color: white;
  font-weight: 700;
  margin-bottom: ${SACRED_SPACING.md}px;
`;

const StepTitle = styled.h3`
  font-size: ${SACRED_SPACING.lg}px;
  margin-bottom: ${SACRED_SPACING.md}px;
  font-weight: 600;
`;

const StepDescription = styled.p`
  font-size: ${SACRED_SPACING.md}px;
  line-height: ${PHI};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${SACRED_SPACING.lg}px;
`;

const BotanicalWrapper = styled.div`
  position: absolute;
  bottom: -${SACRED_SPACING.xl}px;
  right: -${SACRED_SPACING.xl}px;
  opacity: 0.1;
  transform: rotate(${PHI * 5}deg);
`;

const CtaContainer = styled.div`
  background: linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%);
  padding: ${SACRED_SPACING.xxl}px;
  border-radius: ${SACRED_SPACING.md}px;
  color: white;
  text-align: center;
`;

const CtaHeading = styled.h2`
  margin-bottom: ${SACRED_SPACING.lg}px;
  font-size: ${SACRED_SPACING.xl}px;
`;

const CtaText = styled.p`
  margin-bottom: ${SACRED_SPACING.xl}px;
  font-size: ${SACRED_SPACING.md}px;
  max-width: ${700 * PHI_INVERSE}px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${PHI};
`;

/**
 * ServicesProcess Component
 * 
 * Displays the step-by-step process for service delivery
 * with botanical decorations and a call to action section.
 * Layout follows sacred geometry principles.
 */
const ServicesProcess: React.FC<ServicesProcessProps> = ({
  backgroundColor = "#f8f9fa",
  ctaText = "Book a Consultation",
  ctaUrl = "/booking",
  customSteps
}) => {
  const steps = customSteps || DEFAULT_STEPS;
  
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <ScrollReveal>
          <SectionTitle 
            title="Our Recovery Process" 
            subtitle="How we help you reclaim your financial assets"
            decoratorBefore={<VesicaPiscis size="sm" opacity={0.15} />}
            decoratorAfter={<VesicaPiscis size="sm" opacity={0.15} />}
          />
        </ScrollReveal>
        
        <SectionContent>
          <ProcessContainer>
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1 * PHI}>
                <StepCard>
                  <StepNumber>{step.number}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  
                  <BotanicalWrapper>
                    {step.botanical === 'flowerOfLife' ? (
                      <FlowerOfLife size={getFibonacciByIndex(9)} opacity={0.8} />
                    ) : (
                      <VesicaPiscis size={getFibonacciByIndex(9)} opacity={0.8} />
                    )}
                  </BotanicalWrapper>
                </StepCard>
              </ScrollReveal>
            ))}
          </ProcessContainer>
          
          <ScrollReveal threshold={0.2}>
            <CtaContainer>
              <CtaHeading>Ready to Begin Your Recovery Journey?</CtaHeading>
              <CtaText>
                Schedule a consultation today and discover how our sacred geometry-based 
                approaches can help you achieve balance and harmony in your financial recovery.
              </CtaText>
              <Button 
                variant="accent" 
                size="lg"
                href={ctaUrl}
              >
                {ctaText}
              </Button>
            </CtaContainer>
          </ScrollReveal>
        </SectionContent>
      </Container>
    </Section>
  );
};

export default ServicesProcess; 














