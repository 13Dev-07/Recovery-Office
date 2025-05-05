import * as React from 'react';
import styled from 'styled-components';
import { ScrollReveal } from '../../../animation';
import { FlowerOfLife, OliveBranch, VesicaPiscis } from '../../../design-system/botanical';
import { PHI, PHI_INVERSE, SACRED_SPACING } from '../../../constants/sacred-geometry';
import { Box, Container } from '../../../design-system/components/layout';
import { Section } from '../../../design-system/components/layout/Section';
import { Text, Paragraph, Heading } from '../../../design-system/components/typography';
import { Card } from '../../../design-system/components/data-display';
import { Button } from '../../../design-system/components/button';
import { Service } from './ServicesOverview';

/**
 * ServicesDetails component properties
 */
interface ServicesDetailsProps {
  /** Array of service objects to display */
  services: Service[];
}

const ServiceSection = styled.div`
  width: 100%;
  padding-top: ${SACRED_SPACING.xxl}px;
  padding-bottom: ${SACRED_SPACING.xxl}px;
`;

const ServiceHeader = styled.div`
  width: 100%;
  padding-bottom: ${PHI * 8}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: ${PHI * 24}px;
  display: flex;
  align-items: center;
`;

const ServiceIcon = styled.div<{ $backgroundColor: string }>`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background-color: ${props => props.$backgroundColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr ${PHI_INVERSE}fr;
  gap: ${PHI * 24}px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceDescription = styled.div`
  margin-bottom: ${SACRED_SPACING.xl}px;
`;

const ServiceBenefits = styled.div`
  margin-top: ${PHI * 24}px;
  margin-bottom: ${PHI * 32}px;
`;

const BenefitsList = styled.ul`
  padding-left: ${PHI * 16}px;
`;

const BenefitItem = styled.li`
  margin-bottom: ${PHI * 8}px;
`;

const ServiceDetailsCard = styled(Card)<{ $accentColor: string }>`
  background-color: white;
  border-top: 4px solid ${props => props.$accentColor};
`;

const DetailItem = styled.div`
  margin-bottom: ${PHI * 16}px;
`;

const BotanicalIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${PHI * 16}px;
`;

/**
 * ServicesDetails Component
 * 
 * Displays detailed information about each service including
 * description, benefits, pricing, and duration. Layout follows
 * sacred geometry principles with golden ratio proportions.
 */
const ServicesDetails: React.FC<ServicesDetailsProps> = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <ScrollReveal key={service.id} threshold={0.1}>
          <Section 
            id={service.id}
            backgroundColor={index % 2 === 0 ? '#ffffff' : '#f0f4f8'}
          >
            <Container>
              <ServiceSection>
                <ServiceHeader>
                  <ServiceIcon $backgroundColor={service.accentColor}>
                    <span>{service.icon.charAt(0).toUpperCase()}</span>
                  </ServiceIcon>
                  <Heading as="h2" mb={0}>
                    {service.title}
                  </Heading>
                </ServiceHeader>
                
                <ServiceContent>
                  <div>
                    <ServiceDescription>
                      <Paragraph size="base">
                        {service.longDescription}
                      </Paragraph>
                    </ServiceDescription>
                    
                    <ServiceBenefits>
                      <Heading as="h3" mb={`${PHI * 8}px`}>
                        Benefits
                      </Heading>
                      <BenefitsList>
                        {service.benefits.map((benefit, idx) => (
                          <BenefitItem key={idx}>
                            <Text size="sm">{benefit}</Text>
                          </BenefitItem>
                        ))}
                      </BenefitsList>
                    </ServiceBenefits>
                    
                    <Box mt={`${PHI * 32}px`}>
                      <Button variant="primary" href={`/booking?service=${service.id}`}>
                        Book This Service
                      </Button>
                    </Box>
                  </div>
                  
                  <div>
                    <ServiceDetailsCard 
                      elevation={2}
                      padding={`${PHI * 24}px`}
                      borderRadius="8px"
                      $accentColor={service.accentColor}
                    >
                      <Heading as="h3" mb={`${PHI * 16}px`}>
                        Service Details
                      </Heading>
                      
                      <DetailItem>
                        <Text weight="medium" size="sm" mb={`${PHI * 4}px`}>
                          Duration:
                        </Text>
                        <Text size="sm">
                          {service.duration}
                        </Text>
                      </DetailItem>
                      
                      <DetailItem>
                        <Text weight="medium" size="sm" mb={`${PHI * 4}px`}>
                          Pricing:
                        </Text>
                        {'initial' in service.pricing ? (
                          <>
                            <Text size="sm">
                              Initial Session: ${service.pricing.initial}
                            </Text>
                            <Text size="sm">
                              Follow-Up Sessions: ${service.pricing.followUp}
                            </Text>
                          </>
                        ) : (
                          <>
                            <Text size="sm">
                              Workshop: ${service.pricing.workshop} per person
                            </Text>
                            <Text size="sm">
                              Private Session: ${service.pricing.privateSession}
                            </Text>
                          </>
                        )}
                      </DetailItem>
                      
                      <DetailItem>
                        <Text weight="medium" size="sm" mb={`${PHI * 4}px`}>
                          Location:
                        </Text>
                        <Text size="sm">
                          Recovery Office - In-person or Virtual
                        </Text>
                      </DetailItem>
                      
                      <BotanicalIndicator>
                        {service.id === 'recovery-consultation' && (
                          <VesicaPiscis size="md" opacity={0.2} style={{ marginRight: '8px' }} />
                        )}
                        {service.id === 'therapeutic-sessions' && (
                          <FlowerOfLife size="sm" opacity={0.2} style={{ marginRight: '8px' }} />
                        )}
                        {service.id === 'botanical-therapy' && (
                          <OliveBranch size="md" opacity={0.2} style={{ marginRight: '8px' }} />
                        )}
                        {service.id === 'sacred-education' && (
                          <FlowerOfLife size="sm" opacity={0.2} style={{ marginRight: '8px' }} />
                        )}
                        <Text size="xs" italic={true}>
                          This service incorporates sacred geometry principles in its approach
                        </Text>
                      </BotanicalIndicator>
                    </ServiceDetailsCard>
                  </div>
                </ServiceContent>
              </ServiceSection>
            </Container>
          </Section>
        </ScrollReveal>
      ))}
    </>
  );
};

export default ServicesDetails; 










