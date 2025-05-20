import * as React from 'react';
import { SEO } from '../../components/common';
import { 
  Hero, 
  Services, 
  TestimonialsSection, 
  Team, 
  Contact 
} from '../../design-system/components/feature-sections';
import { 
  SecurityShield, 
  ComplianceBadge, 
  AssetRecovery 
} from '../../design-system/components/utility/FinancialIcons';
import { 
  Box, 
  Container, 
  GoldenSection 
} from '../../design-system/components/layout';
import { 
  Section, 
  SectionTitle, 
  SectionContent 
} from '../../design-system/components/layout/Section';
import { Text, Paragraph } from '../../design-system/components/typography';
import { 
  FadeIn, 
  ScaleFade, 
  SlideIn, 
  ScrollReveal 
} from '../../animation';
import { PHI, PHI_INVERSE } from '../../constants/sacred-geometry';
import { 
  ServiceItem,
  TestimonialItem,
  TeamMember
} from '../../types/feature-sections.types';

/**
 * Home Page Component
 * 
 * This component represents the main landing page of the Recovery Office website.
 */
const Home: React.FC = () => {
  // Sample data for feature sections 
  const services: ServiceItem[] = [
    {
      id: 'recovery-consultation',
      title: 'Recovery Consultation',
      description: 'Personalized assessment and recovery planning for your financial assets.',
      icon: 'consultation',
      url: '/services/recovery-consultation',
      accentColor: '#4a6eb3'
    },
    {
      id: 'investment-fraud',
      title: 'Investment Fraud Recovery',
      description: 'Specialized recovery services for victims of investment fraud and scams.',
      icon: 'therapy',
      url: '/services/investment-fraud',
      accentColor: '#63a98c'
    },
    {
      id: 'crypto-recovery',
      title: 'Cryptocurrency Recovery',
      description: 'Expert assistance in recovering lost or stolen cryptocurrency assets.',
      icon: 'botanical',
      url: '/services/crypto-recovery',
      accentColor: '#86b378'
    },
    {
      id: 'regulatory-assistance',
      title: 'Regulatory Assistance',
      description: 'Navigate complex regulatory procedures to maximize your recovery potential.',
      icon: 'education',
      url: '/services/regulatory-assistance',
      accentColor: '#d4a76a'
    }
  ];

  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      content: 'The Recovery Office\'s approach to recovering my lost investments has been transformative. Their regulated process gave me confidence and they recovered funds I thought were lost forever.',
      author: 'Sarah M.',
      authorRole: 'Investment Fraud Client',
      rating: 5,
      accentColor: '#4a6eb3'
    },
    {
      id: 't2',
      content: 'As a financial advisor, I was skeptical at first. But after seeing their recovery process firsthand, I now recommend Recovery Office to my own clients who have experienced fraud.',
      author: 'James Wilson',
      authorRole: 'Financial Advisor',
      rating: 5,
      accentColor: '#63a98c'
    },
    {
      id: 't3',
      content: 'After losing significant crypto assets to a scam, the Recovery Office team provided expert guidance through the complex recovery process. They helped me recover a substantial portion of my investment.',
      author: 'Michael T.',
      authorRole: 'Cryptocurrency Client',
      rating: 5,
      accentColor: '#86b378'
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 'tm1',
      name: 'Dr. Elizabeth Harper',
      role: 'Recovery Director',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'With over 15 years of experience in financial recovery, Dr. Harper specializes in complex investment fraud cases and regulatory compliance.',
      specialties: ['Recovery Consultation', 'Investment Fraud', 'Regulatory Compliance'],
      accentColor: '#4a6eb3',
      credentials: ['Ph.D. in Financial Law']
    },
    {
      id: 'tm2',
      name: 'Jonathan Rivers',
      role: 'Cryptocurrency Specialist',
      photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2f9e946?auto=format&fit=crop&w=600&q=80',
      bio: 'Jonathan brings together his expertise in blockchain technology and financial regulations to create customized recovery solutions for cryptocurrency-related cases.',
      specialties: ['Cryptocurrency Recovery', 'Blockchain Analysis', 'Digital Asset Protection'],
      accentColor: '#86b378',
      credentials: ['M.S. in Computer Science']
    },
    {
      id: 'tm3',
      name: 'Maya Chen',
      role: 'Client Education Specialist',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'Maya specializes in educating clients about protecting their financial assets and navigating the recovery process with confidence.',
      specialties: ['Financial Education', 'Fraud Prevention', 'Client Empowerment'],
      accentColor: '#d4a76a',
      credentials: ['Certified Financial Educator']
    }
  ];

  // Hero section background
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1920&q=80';

  return (
    <Box as="main">
      <SEO 
        title="Home"
        description="Recovery Office provides premium financial recovery services backed by regulatory compliance and expert specialists."
        canonical="https://recoveryoffice.com"
      />
      
      {/* Hero Section */}
      <Hero
        heading="Financial Asset Recovery Experts"
        subheading="Recovery Office provides regulated premium services for individuals and businesses who have lost financial assets"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="85vh"
        animated={true}
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
          Our approach integrates regulatory expertise with advanced recovery techniques, 
          maximizing your chances of recovering lost or stolen financial assets.
        </Text>
      </Hero>

      {/* Services Section */}
      <ScrollReveal>
        <Section backgroundColor="#f8f9fa">
          <Container>
            <SectionContent>
              <Services 
                title="Our Services"
                subtitle="Comprehensive recovery services that combine regulatory expertise with advanced techniques"
                services={services}
                displayStyle="grid"
                columns={3}
                animated={true}
                cta={{
                  label: "View All Services",
                  url: "/services"
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
                    <SecurityShield 
                      size="lg"
                      opacity={0.8}
                    />
                  </Box>
                </Box>
              }
            >
              <SectionTitle 
                title="Our Regulated Approach" 
                subtitle="Recovery backed by regulatory compliance"
                size="medium"
                align="left"
                decoratorBefore={<ComplianceBadge size="sm" opacity={0.5} />}
              />
              <Box mt={4}>
                <Paragraph variant="body1">
                  Using principles derived from financial regulations and industry best practices,
                  we create comprehensive recovery strategies that maximize your chances of recovering
                  lost assets while ensuring full compliance with applicable laws.
                </Paragraph>
                <Paragraph variant="body1">
                  Our approach creates a systematic pathway to recovery, offering clarity and transparency
                  throughout the process. Our methods have been refined through years of successful
                  case resolutions and regulatory adaptation.
                </Paragraph>
                <Box mt={4} display="flex" alignItems="center">
                  <ComplianceBadge size="sm" opacity={0.7} style={{ marginRight: '8px' }} />
                  <Text variant="subtitle2">Regulated expertise in every aspect of recovery</Text>
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
            <SectionContent>
              <TestimonialsSection
                title="Client Experiences"
                subtitle="Discover how our approach has helped others"
                testimonials={testimonials}
                displayStyle="grid"
                animated={true}
              />
            </SectionContent>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <Section backgroundColor="#ffffff">
          <Container>
            <SectionContent>
              <Team
                title="Our Expert Team"
                subtitle="Meet our experienced specialists committed to your financial recovery"
                members={teamMembers}
                displayStyle="grid"
                columns={3}
                animated={true}
                cta={{
                  label: "Meet The Team",
                  url: "/about#team"
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
              title="Begin Your Recovery Process"
              subtitle="Schedule a consultation with our specialists"
              submitText="Book a Consultation"
              formAction="/booking"
              className="contact-form-section"
              animated={true}
            />
          </Container>
        </Section>
      </ScrollReveal>
    </Box>
  );
};

export default Home; 






