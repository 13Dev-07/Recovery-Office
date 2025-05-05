import * as React from 'react';
import { 
  Hero, 
  Services, 
  Testimonials, 
  Team, 
  Contact 
} from '../design-system/components/feature-sections';
import { 
  FlowerOfLife, 
  OliveBranch, 
  VesicaPiscis 
} from '../design-system/botanical';
import { 
  Box, 
  Container, 
  GoldenSection 
} from '../design-system/components/layout';
import { 
  Section, 
  SectionTitle, 
  SectionContent 
} from '../design-system/components/layout/Section';
import { Text, Paragraph } from '../design-system/components/typography';
import { 
  FadeIn, 
  ScaleFade, 
  SlideIn, 
  ScrollReveal 
} from '../../animation';
import { PHI, PHI_INVERSE } from '../constants/sacred-geometry';

/**
 * Home Page Component
 * 
 * This component represents the main landing page of the Recovery Office website.
 * It uses sacred geometry principles throughout its layout and animations.
 */
const Home: React.FC = () => {
  // Sample data for feature sections 
  const services = [
    {
      id: 'recovery-consultation',
      title: 'Recovery Consultation',
      description: 'Personalized assessment and recovery planning based on sacred geometry principles.',
      icon: 'consultation',
      path: '/services/recovery-consultation',
      accentColor: '#4a6eb3'
    },
    {
      id: 'therapeutic-sessions',
      title: 'Therapeutic Sessions',
      description: 'Guided sessions using golden ratio principles to restore harmony and balance.',
      icon: 'therapy',
      path: '/services/therapeutic-sessions',
      accentColor: '#63a98c'
    },
    {
      id: 'botanical-therapy',
      title: 'Botanical Therapy',
      description: 'Nature-based therapeutic approaches harnessing the healing power of plants.',
      icon: 'botanical',
      path: '/services/botanical-therapy',
      accentColor: '#86b378'
    },
    {
      id: 'sacred-education',
      title: 'Sacred Education',
      description: 'Learn how to apply sacred geometry principles in your daily life for improved wellbeing.',
      icon: 'education',
      path: '/services/sacred-education',
      accentColor: '#d4a76a'
    }
  ];

  const testimonials = [
    {
      id: 't1',
      content: 'The Recovery Office\'s approach to healing through sacred geometry principles has transformed my recovery journey. I\'ve experienced improvements I never thought possible.',
      author: 'Sarah M.',
      authorRole: 'Recovery Client',
      rating: 5,
      accentColor: '#4a6eb3'
    },
    {
      id: 't2',
      content: 'As a healthcare professional, I was skeptical at first. But after experiencing their therapeutic approach firsthand, I now recommend The Recovery Office to my own patients.',
      author: 'Dr. James Wilson',
      authorRole: 'Medical Doctor',
      rating: 5,
      accentColor: '#63a98c'
    },
    {
      id: 't3',
      content: 'The botanical therapy sessions helped me reconnect with nature in a profound way. My stress levels have decreased significantly since starting treatment.',
      author: 'Michael T.',
      authorRole: 'Stress Management Client',
      rating: 5,
      accentColor: '#86b378'
    }
  ];

  const teamMembers = [
    {
      id: 'tm1',
      name: 'Dr. Elizabeth Harper',
      role: 'Therapeutic Director',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'With over 15 years of experience in therapeutic care, Dr. Harper specializes in integrating sacred geometry principles into modern recovery approaches.',
      specialties: ['Recovery Consultation', 'Therapeutic Planning', 'Sacred Geometry Application'],
      accentColor: '#4a6eb3',
      credentials: 'Ph.D. in Therapeutic Sciences'
    },
    {
      id: 'tm2',
      name: 'Jonathan Rivers',
      role: 'Botanical Specialist',
      photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2f9e946?auto=format&fit=crop&w=600&q=80',
      bio: 'Jonathan brings together his expertise in botany and sacred patterns to create customized botanical therapy programs for clients seeking natural recovery paths.',
      specialties: ['Botanical Therapy', 'Natural Remedies', 'Plant-Based Recovery'],
      accentColor: '#86b378',
      credentials: 'M.S. in Botanical Sciences'
    },
    {
      id: 'tm3',
      name: 'Maya Chen',
      role: 'Therapeutic Educator',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'Maya specializes in teaching clients how to apply sacred geometry principles in their daily lives for continued wellness and recovery maintenance.',
      specialties: ['Sacred Education', 'Wellness Programs', 'Client Empowerment'],
      accentColor: '#d4a76a',
      credentials: 'Certified Therapeutic Educator'
    }
  ];

  // Hero section background
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1920&q=80';

  return (
    <Box as="main">
      {/* Hero Section */}
      <Hero
        heading="Discover Holistic Healing"
        subheading="Recovery Office provides therapeutic solutions guided by sacred geometry and natural harmony"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="85vh"
        animated={true}
        botanical={{
          type: 'flowerOfLife',
          position: 'bottomRight',
          opacity: 0.15,
          animated: true
        }}
        buttons={[
          {
            label: 'Book a Consultation',
            variant: 'primary',
            href: '/booking',
          },
          {
            label: 'Learn More',
            variant: 'outline',
            href: '/about',
          }
        ]}
      >
        <Text variant="body1" style={{ maxWidth: `${PHI * 400}px`, margin: '0 auto', color: 'white' }}>
          Our approach integrates ancient wisdom with modern therapeutic techniques, 
          creating harmony and balance in both physical and mental well-being.
        </Text>
      </Hero>

      {/* Services Section */}
      <ScrollReveal>
        <Section backgroundColor="#f8f9fa">
          <Container>
            <SectionTitle 
              title="Our Services" 
              subtitle="Therapeutic approaches based on sacred geometry"
              decoratorBefore={<FlowerOfLife size="sm" opacity={0.15} />}
              decoratorAfter={<FlowerOfLife size="sm" opacity={0.15} />}
            />
            <SectionContent>
              <Services 
                services={services}
                displayStyle="grid"
                columns={2}
                animated={true}
                botanical={true}
                cta={{
                  label: "View All Services",
                  path: "/services"
                }}
              />
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <Section backgroundColor="#ffffff">
          <Container>
            <GoldenSection
              rightContent={
                <Box position="relative" width="100%" height="100%">
                  <Box 
                    position="absolute" 
                    top={`${PHI_INVERSE * 100}%`} 
                    left={`${PHI_INVERSE * 100}%`} 
                    transform="translate(-50%, -50%)"
                  >
                    <FlowerOfLife 
                      size="xl" 
                      primaryColor="#4a6eb3"
                      secondaryColor="rgba(0,0,0,0)"
                      opacity={0.8}
                      animated
                    />
                  </Box>
                </Box>
              }
            >
              <SectionTitle 
                title="Our Sacred Approach" 
                subtitle="Healing guided by golden ratio principles"
                size="medium"
                align="left"
                decoratorBefore={<OliveBranch size="sm" opacity={0.5} />}
              />
              <Box mt={4}>
                <Paragraph variant="body1">
                  Using principles derived from the golden ratio (Φ ≈ 1.618) and Fibonacci sequence,
                  we create therapeutic environments and treatments that resonate with the natural
                  patterns found throughout the universe and within our own bodies.
                </Paragraph>
                <Paragraph variant="body1">
                  This approach creates harmony between mind, body, and spirit, facilitating
                  a more complete and balanced recovery journey. Our methods have been refined
                  through years of practical application and research.
                </Paragraph>
                <Box mt={4} display="flex" alignItems="center">
                  <OliveBranch width={24} height={24} opacity={0.7} style={{ marginRight: '8px' }} />
                  <Text variant="subtitle2">Harmony in every aspect of recovery</Text>
                </Box>
              </Box>
            </GoldenSection>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <Section backgroundColor="#f0f4f8">
          <Container>
            <SectionTitle 
              title="Client Experiences" 
              subtitle="Discover how our approach has helped others"
              decoratorBefore={<VesicaPiscis size="sm" opacity={0.2} />}
              decoratorAfter={<VesicaPiscis size="sm" opacity={0.2} />}
            />
            <SectionContent>
              <Testimonials
                testimonials={testimonials}
                displayStyle="grid"
                animated={true}
                botanical={true}
              />
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <Section backgroundColor="#ffffff">
          <Container>
            <SectionTitle 
              title="Our Team" 
              subtitle="Specialists in sacred geometry therapeutic approaches"
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
                cta={{
                  label: "View Full Team",
                  path: "/about#team"
                }}
              />
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Contact CTA Section */}
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
            <Contact
              title="Begin Your Recovery Journey"
              subtitle="Schedule a consultation with our specialists"
              buttonText="Book a Consultation"
              buttonLink="/booking"
              secondaryButtonText="Contact Us"
              secondaryButtonLink="/contact"
              showContactInfo={true}
              animated={true}
              botanical={{
                type: 'flowerOfLife',
                position: 'bottomRight',
                opacity: 0.1,
                animated: true
              }}
            />
          </Container>
        </Section>
      </ScrollReveal>
    </Box>
  );
};

export default Home; 






