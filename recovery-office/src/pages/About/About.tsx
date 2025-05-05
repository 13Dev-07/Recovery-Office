import * as React from 'react';
import { Hero, Team } from '../design-system/components/feature-sections';

import { Box, Container, GoldenSection } from '../design-system/components/layout';
import { Section, SectionTitle, SectionContent } from '../design-system/components/layout/Section';
import { Text, Paragraph, Heading } from '../design-system/components/typography';
import { Button } from '../design-system/components/button';
import { Card } from '../design-system/components/data-display';
import { ScrollReveal, FadeIn } from '../../animation';

// Import new section components
import PhilosophySection from './sections/PhilosophySection';
import AwardsSection from './sections/AwardsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';

/**
 * About Page Component
 * 
 * This component represents the about page of the Recovery Office website.
 * It displays the team members and story of the organization.
 * Design follows sacred geometry principles throughout.
 */
const AboutPage: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      id: 'tm1',
      name: 'Dr. Elizabeth Harper',
      role: 'Therapeutic Director',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'With over 15 years of experience in therapeutic care, Dr. Harper specializes in integrating sacred geometry principles into modern recovery approaches. Her doctoral research focused on the mathematical patterns that influence healing and wellbeing.',
      specialties: ['Recovery Consultation', 'Therapeutic Planning', 'Sacred Geometry Application'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ],
      accentColor: '#4a6eb3',
      credentials: 'Ph.D. in Therapeutic Sciences'
    },
    {
      id: 'tm2',
      name: 'Jonathan Rivers',
      role: 'Botanical Specialist',
      photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2f9e946?auto=format&fit=crop&w=600&q=80',
      bio: 'Jonathan brings together his expertise in botany and sacred patterns to create customized botanical therapy programs. He has studied indigenous healing practices around the world and combines this knowledge with modern therapeutic approaches.',
      specialties: ['Botanical Therapy', 'Natural Remedies', 'Plant-Based Recovery'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'instagram', url: 'https://instagram.com' }
      ],
      accentColor: '#86b378',
      credentials: 'M.S. in Botanical Sciences'
    },
    {
      id: 'tm3',
      name: 'Maya Chen',
      role: 'Therapeutic Educator',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'Maya specializes in teaching clients how to apply sacred geometry principles in their daily lives for continued wellness and recovery maintenance. She has developed innovative educational programs that make complex concepts accessible.',
      specialties: ['Sacred Education', 'Wellness Programs', 'Client Empowerment'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'website', url: 'https://example.com' }
      ],
      accentColor: '#d4a76a',
      credentials: 'Certified Therapeutic Educator'
    },
    {
      id: 'tm4',
      name: 'Dr. Robert Mitchell',
      role: 'Research Director',
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Mitchell leads our research initiatives, exploring the scientific basis for sacred geometry in therapeutic practices. His background in physics and medicine provides a unique perspective on the mathematical aspects of healing.',
      specialties: ['Research Design', 'Therapeutic Validation', 'Mathematical Modeling'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'research', url: 'https://example.com/research' }
      ],
      accentColor: '#5d6e8f',
      credentials: 'M.D., Ph.D. in Biophysics'
    },
    {
      id: 'tm5',
      name: 'Sarah Johnson',
      role: 'Client Relations Director',
      photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80',
      bio: 'Sarah ensures that our client experience embodies the harmony and balance central to our philosophy. She has designed our client journey to incorporate sacred proportions at every touchpoint.',
      specialties: ['Client Experience Design', 'Recovery Support', 'Therapeutic Communication'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' }
      ],
      accentColor: '#b37c4a',
      credentials: 'M.A. in Therapeutic Communications'
    },
    {
      id: 'tm6',
      name: 'David Tran',
      role: 'Environmental Designer',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bio: 'David creates therapeutic environments that incorporate sacred geometry principles. His designs harness the healing power of space, light, and proportion to create settings that naturally facilitate recovery.',
      specialties: ['Sacred Space Design', 'Healing Environments', 'Architectural Harmonics'],
      links: [
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'portfolio', url: 'https://example.com/portfolio' }
      ],
      accentColor: '#63a98c',
      credentials: 'M.Arch, Certified in Therapeutic Design'
    }
  ];

  // Timeline events
  const timelineEvents = [
    {
      year: 2010,
      title: 'Foundation',
      description: 'Recovery Office was founded by Dr. Elizabeth Harper with a vision to integrate sacred geometry principles into therapeutic practices.',
      icon: 'flowerOfLife'
    },
    {
      year: 2012,
      title: 'Research Initiative',
      description: 'We launched our first research program to document the effects of sacred geometry in recovery environments.',
      icon: 'vesicaPiscis'
    },
    {
      year: 2015,
      title: 'Botanical Integration',
      description: 'Jonathan Rivers joined the team, bringing his expertise in botanical therapy and expanding our treatment options.',
      icon: 'oliveBranch'
    },
    {
      year: 2018,
      title: 'Educational Program',
      description: 'We developed our Sacred Education program to empower clients with knowledge of sacred geometry principles.',
      icon: 'fibonacciSpiral'
    },
    {
      year: 2020,
      title: 'Virtual Expansion',
      description: 'We adapted our services to virtual formats, maintaining sacred proportions in digital therapeutic environments.',
      icon: 'flowerOfLife'
    },
    {
      year: 2023,
      title: 'Present Day',
      description: 'Today, Recovery Office continues to evolve, integrating cutting-edge research with timeless sacred geometry principles.',
      icon: 'vesicaPiscis'
    }
  ];

  // Hero section background
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1551651189-83173d7b7f35?auto=format&fit=crop&w=1920&q=80';

  return (
    <Box as="main">
      {/* Hero Section */}
      <Hero
        heading="About Us"
        subheading="Our journey and mission to restore harmony through sacred geometry"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="60vh"
        animated={true}
        botanical={{
          type: 'flowerOfLife',
          position: 'bottomRight',
          opacity: 0.15,
          animated: true
        }}
      >
        <Text variant="body1" style={{ maxWidth: `${PHI * 400}px`, margin: '0 auto', color: 'white' }}>
          Recovery Office was founded on the principle that healing follows mathematical 
          patterns found throughout nature. Our team brings together diverse expertise 
          in therapeutic practices, botanical healing, and sacred geometry.
        </Text>
      </Hero>

      {/* Our Story Section */}
      <ScrollReveal>
        <Section id="our-story" backgroundColor="#ffffff">
          <Container>
            <GoldenSection
              rightContent={
                <Box 
                  position="relative" 
                  width="100%" 
                  height="100%" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <FibonacciSpiral
                    size="lg"
                    primaryColor="#4a6eb3"
                    secondaryColor="rgba(0,0,0,0)"
                    opacity={0.8}
                    animated
                  />
                </Box>
              }
            >
              <SectionTitle 
                title="Our Story" 
                subtitle="The origins of Recovery Office"
                size="large"
                align="left"
                decoratorBefore={<VesicaPiscis size="sm" opacity={0.3} />}
              />
              <Box mt={4}>
                <Paragraph variant="body1">
                  Recovery Office began as a vision to create therapeutic spaces and practices that
                  resonate with the natural patterns found throughout the universe. Dr. Elizabeth Harper,
                  our founder, recognized that the same mathematical principles that govern the structure
                  of galaxies, plants, and the human body could be applied to facilitate healing and recovery.
                </Paragraph>
                <Paragraph variant="body1">
                  Over the years, we've grown from a small practice into a comprehensive therapeutic center
                  that integrates sacred geometry into every aspect of our approach. Our team has expanded to
                  include specialists in botanical therapy, environmental design, research, and education.
                </Paragraph>
                <Paragraph variant="body1">
                  Today, Recovery Office stands as a pioneer in therapeutic practices that honor the inherent
                  harmony of the universe. We continue to evolve and expand our understanding of how sacred
                  geometry can facilitate healing and transformation.
                </Paragraph>
              </Box>
            </GoldenSection>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Philosophy Section - New */}
      <PhilosophySection />

      {/* Timeline Section */}
      <ScrollReveal>
        <Section backgroundColor="#f0f4f8">
          <Container>
            <SectionTitle 
              title="Our Journey" 
              subtitle="Key milestones in our evolution"
              decoratorBefore={<FlowerOfLife size="sm" opacity={0.15} />}
              decoratorAfter={<FlowerOfLife size="sm" opacity={0.15} />}
            />
            <SectionContent>
              <Box 
                position="relative" 
                paddingTop={`${PHI * 16}px`}
                paddingBottom={`${PHI * 16}px`}
              >
                {/* Timeline line */}
                <Box 
                  position="absolute" 
                  left="50%" 
                  top="0" 
                  bottom="0" 
                  width="2px" 
                  backgroundColor="rgba(0,0,0,0.1)"
                  transform="translateX(-50%)"
                />
                
                {/* Timeline events */}
                {timelineEvents.map((event, index) => (
                  <FadeIn key={event.year} delay={index * 0.1}>
                    <Box 
                      display="flex" 
                      margin={`${PHI * 32}px 0`}
                      flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                    >
                      {/* Timeline dot and icon */}
                      <Box 
                        position="relative" 
                        width="80px" 
                        display="flex" 
                        alignItems="center" 
                        justifyContent={index % 2 === 0 ? 'flex-end' : 'flex-start'}
                      >
                        <Box 
                          width="48px" 
                          height="48px" 
                          borderRadius="50%" 
                          backgroundColor="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                          zIndex={1}
                        >
                          {event.icon === 'flowerOfLife' && <FlowerOfLife size="xs" opacity={0.8} />}
                          {event.icon === 'vesicaPiscis' && <VesicaPiscis size="xs" opacity={0.8} />}
                          {event.icon === 'oliveBranch' && <OliveBranch size="xs" opacity={0.8} />}
                          {event.icon === 'fibonacciSpiral' && <FibonacciSpiral size="xs" opacity={0.8} />}
                        </Box>
                      </Box>
                      
                      {/* Content */}
                      <Box width={`calc(50% - ${PHI * 40}px)`}>
                        <Card
                          elevation={2}
                          padding={`${PHI * 16}px`}
                          borderRadius="8px"
                          style={{
                            backgroundColor: 'white',
                            borderLeft: index % 2 === 0 ? `4px solid #4a6eb3` : undefined,
                            borderRight: index % 2 !== 0 ? `4px solid #4a6eb3` : undefined
                          }}
                        >
                          <Box display="flex" alignItems="baseline" marginBottom={`${PHI * 8}px`}>
                            <Text 
                              variant="subtitle1" 
                              style={{
                                color: '#4a6eb3',
                                marginRight: `${PHI * 8}px`,
                                fontWeight: 'bold'
                              }}
                            >
                              {event.year}
                            </Text>
                            <Heading 
                              as="h3" 
                              variant="h4" 
                              style={{ 
                                margin: 0,
                                fontWeight: 600
                              }}
                            >
                              {event.title}
                            </Heading>
                          </Box>
                          <Text variant="body2">
                            {event.description}
                          </Text>
                        </Card>
                      </Box>
                    </Box>
                  </FadeIn>
                ))}
              </Box>
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Awards Section - New */}
      <AwardsSection />

      {/* Our Mission Section */}
      <ScrollReveal>
        <Section backgroundColor="#ffffff">
          <Container>
            <Box 
              display="grid" 
              gridTemplateColumns={["1fr", null, `1fr 1fr 1fr`]} 
              gap={`${PHI * 24}px`}
              padding={`${PHI * 16}px 0`}
            >
              <Card
                elevation={2}
                padding={`${PHI * 24}px`}
                borderRadius="8px"
                style={{
                  backgroundColor: 'white',
                  borderTop: `4px solid #4a6eb3`
                }}
              >
                <Box 
                  marginBottom={`${PHI * 16}px`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FlowerOfLife size="md" opacity={0.8} />
                </Box>
                <Heading 
                  as="h3" 
                  variant="h4" 
                  textAlign="center"
                  style={{ marginBottom: `${PHI * 16}px` }}
                >
                  Our Mission
                </Heading>
                <Text variant="body2" textAlign="center">
                  To facilitate healing and recovery by applying sacred geometry principles 
                  to therapeutic practices, creating harmony between mind, body, and spirit.
                </Text>
              </Card>
              
              <Card
                elevation={2}
                padding={`${PHI * 24}px`}
                borderRadius="8px"
                style={{
                  backgroundColor: 'white',
                  borderTop: `4px solid #63a98c`
                }}
              >
                <Box 
                  marginBottom={`${PHI * 16}px`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VesicaPiscis size="md" opacity={0.8} />
                </Box>
                <Heading 
                  as="h3" 
                  variant="h4" 
                  textAlign="center"
                  style={{ marginBottom: `${PHI * 16}px` }}
                >
                  Our Vision
                </Heading>
                <Text variant="body2" textAlign="center">
                  A world where therapeutic practices honor the mathematical patterns of 
                  the universe, creating more effective and harmonious paths to recovery.
                </Text>
              </Card>
              
              <Card
                elevation={2}
                padding={`${PHI * 24}px`}
                borderRadius="8px"
                style={{
                  backgroundColor: 'white',
                  borderTop: `4px solid #86b378`
                }}
              >
                <Box 
                  marginBottom={`${PHI * 16}px`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <OliveBranch size="md" opacity={0.8} />
                </Box>
                <Heading 
                  as="h3" 
                  variant="h4" 
                  textAlign="center"
                  style={{ marginBottom: `${PHI * 16}px` }}
                >
                  Our Values
                </Heading>
                <Text variant="body2" textAlign="center">
                  Harmony, Balance, Integrity, Innovation, and Compassion guide our approach 
                  to recovery and inform every aspect of our therapeutic practice.
                </Text>
              </Card>
            </Box>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <Section id="team" backgroundColor="#f8f9fa">
          <Container>
            <SectionTitle 
              title="Our Team" 
              subtitle="The specialists behind Recovery Office"
              decoratorBefore={<OliveBranch size="sm" opacity={0.3} />}
              decoratorAfter={<OliveBranch size="sm" opacity={0.3} mirror />}
            />
            <SectionContent>
              <Team
                members={teamMembers}
                displayStyle="grid"
                columns={3}
                animated={true}
                botanical={true}
                showDetailedBio={true}
              />
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Testimonials Section - New */}
      <TestimonialsSection />

      {/* FAQ Section - New */}
      <FAQSection />

      {/* Contact CTA */}
      <ScrollReveal>
        <Section 
          backgroundColor="linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%)"
          style={{
            color: 'white',
            paddingTop: `${PHI * 32}px`,
            paddingBottom: `${PHI * 32}px`
          }}
        >
          <Container>
            <Box textAlign="center">
              <Heading as="h2" variant="h2" style={{ color: 'white', marginBottom: `${PHI * 16}px` }}>
                Join Us on the Journey
              </Heading>
              <Text variant="body1" style={{ 
                maxWidth: `${PHI * 500}px`, 
                margin: '0 auto', 
                marginBottom: `${PHI * 24}px`
              }}>
                Experience the difference that sacred geometry principles can make in your recovery process.
                Connect with our team and begin your path to harmonious well-being.
              </Text>
              <Box display="flex" justifyContent="center" gap={`${PHI * 16}px`}>
                <Button 
                  variant="accent" 
                  size="large"
                  href="/booking"
                >
                  Book a Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  href="/contact"
                  style={{ color: 'white', borderColor: 'white' }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Container>
        </Section>
      </ScrollReveal>
    </Box>
  );
};

export default AboutPage; 







