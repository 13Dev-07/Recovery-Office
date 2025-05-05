import * as React from 'react';
import { Hero } from '../design-system/components/feature-sections';
import { FlowerOfLife, OliveBranch } from '../design-system/botanical';
import { Box, Container } from '../design-system/components/layout';
import { Section, SectionTitle, SectionContent } from '../design-system/components/layout/Section';
import { Text, Paragraph } from '../design-system/components/typography';
import { Card } from '../design-system/components/data-display';
import BookingInterface from "@components/booking/BookingInterface";
import { useLocation } from 'react-router-dom';
import { PHI } from '../constants/sacred-geometry';

/**
 * Booking Page Component
 * 
 * This component represents the booking page of the Recovery Office website.
 * It integrates the BookingInterface component to provide a complete booking experience.
 * Layout and design follow sacred geometry principles throughout.
 */
const BookingPage: React.FC = () => {
  // Access URL parameters for pre-selecting services
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedService = queryParams.get('service');

  // Hero section background
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1920&q=80';

  // Service information
  const services = [
    {
      id: 'recovery-consultation',
      title: 'Recovery Consultation',
      description: 'A comprehensive assessment and personalized recovery plan development.',
      duration: 90,
      price: 150,
      accentColor: '#4a6eb3'
    },
    {
      id: 'therapeutic-sessions',
      title: 'Therapeutic Session',
      description: 'Guided therapy session using golden ratio principles for balance and harmony.',
      duration: 60,
      price: 120,
      accentColor: '#63a98c'
    },
    {
      id: 'botanical-therapy',
      title: 'Botanical Therapy',
      description: 'Nature-based healing using plant remedies and aromatherapy.',
      duration: 75,
      price: 135,
      accentColor: '#86b378'
    },
    {
      id: 'sacred-education',
      title: 'Sacred Education Session',
      description: 'Learn to apply sacred geometry principles in your daily life.',
      duration: 60,
      price: 90,
      accentColor: '#d4a76a'
    }
  ];

  return (
    <Box as="main">
      {/* Hero Section */}
      <Hero
        heading="Book a Session"
        subheading="Schedule your consultation or therapeutic service"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="40vh"
        animated={true}
        botanical={{
          type: 'flowerOfLife',
          position: 'bottomRight',
          opacity: 0.15,
          animated: true
        }}
      >
        <Text variant="body1" style={{ maxWidth: `${PHI * 400}px`, margin: '0 auto', color: 'white' }}>
          Select a service, choose a date and time, and provide your information 
          to begin your journey toward balance and harmony.
        </Text>
      </Hero>

      {/* Booking Interface Section */}
      <Section backgroundColor="#ffffff">
        <Container>
          <Box paddingTop={`${PHI * 16}px`} paddingBottom={`${PHI * 48}px`}>
            <SectionTitle 
              title="Booking System" 
              subtitle="Schedule your appointment in a few simple steps"
              decoratorBefore={<OliveBranch size="sm" opacity={0.3} />}
              decoratorAfter={<OliveBranch size="sm" opacity={0.3} mirror />}
            />
            
            <SectionContent>
              {/* Integrated Booking System */}
              <BookingInterface 
                services={services}
                preSelectedServiceId={preSelectedService || undefined}
              />
            </SectionContent>
          </Box>
        </Container>
      </Section>

      {/* Information Section */}
      <Section backgroundColor="#f8f9fa">
        <Container>
          <Box 
            display="grid" 
            gridTemplateColumns={["1fr", null, "1fr 1fr 1fr"]} 
            gap={`${PHI * 24}px`}
            padding={`${PHI * 24}px 0 ${PHI * 48}px 0`}
          >
            <Card 
              padding={`${PHI * 24}px`} 
              borderRadius="8px"
              style={{ borderTop: '4px solid #4a6eb3' }}
            >
              <Box 
                marginBottom={`${PHI * 16}px`}
                display="flex"
                justifyContent="center"
              >
                <FlowerOfLife size="md" opacity={0.7} primaryColor="#4a6eb3" />
              </Box>
              <Text variant="h5" textAlign="center" marginBottom={`${PHI * 16}px`}>
                Preparing for Your Visit
              </Text>
              <Paragraph variant="body2">
                Please arrive 10 minutes before your scheduled appointment to complete any 
                necessary paperwork. Wear comfortable clothing and prepare any questions you 
                may have about your recovery journey.
              </Paragraph>
            </Card>
            
            <Card 
              padding={`${PHI * 24}px`} 
              borderRadius="8px"
              style={{ borderTop: '4px solid #63a98c' }}
            >
              <Box 
                marginBottom={`${PHI * 16}px`}
                display="flex"
                justifyContent="center"
              >
                <FlowerOfLife size="md" opacity={0.7} primaryColor="#63a98c" />
              </Box>
              <Text variant="h5" textAlign="center" marginBottom={`${PHI * 16}px`}>
                Cancellation Policy
              </Text>
              <Paragraph variant="body2">
                We understand that schedules change. We request at least 24 hours' notice for 
                cancellations or rescheduling. Late cancellations or no-shows may incur a fee 
                of 50% of the service price.
              </Paragraph>
            </Card>
            
            <Card 
              padding={`${PHI * 24}px`} 
              borderRadius="8px"
              style={{ borderTop: '4px solid #86b378' }}
            >
              <Box 
                marginBottom={`${PHI * 16}px`}
                display="flex"
                justifyContent="center"
              >
                <FlowerOfLife size="md" opacity={0.7} primaryColor="#86b378" />
              </Box>
              <Text variant="h5" textAlign="center" marginBottom={`${PHI * 16}px`}>
                Payment Information
              </Text>
              <Paragraph variant="body2">
                We accept major credit cards, health savings accounts, and some insurance plans. 
                Payment is due at the time of service. Please contact our office if you have 
                questions about payment options or insurance coverage.
              </Paragraph>
            </Card>
          </Box>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section backgroundColor="#ffffff">
        <Container>
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="About our booking and appointments"
            decoratorBefore={<FlowerOfLife size="sm" opacity={0.15} />}
            decoratorAfter={<FlowerOfLife size="sm" opacity={0.15} />}
          />
          
          <SectionContent>
            <Box 
              display="grid" 
              gridTemplateColumns={["1fr", null, "1fr 1fr"]} 
              gap={`${PHI * 24}px`}
            >
              <Box>
                <Text variant="h5" marginBottom={`${PHI * 8}px`}>
                  How far in advance should I book?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  We recommend booking at least one week in advance to ensure availability, 
                  especially for initial consultations. For ongoing sessions, you can book 
                  further in advance to secure your preferred time slots.
                </Paragraph>
                
                <Text variant="h5" marginBottom={`${PHI * 8}px`}>
                  Can I request a specific practitioner?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  Yes, you can request a specific practitioner when booking your appointment. 
                  If your requested practitioner is not available, we'll suggest alternatives 
                  or other available time slots.
                </Paragraph>
              </Box>
              
              <Box>
                <Text variant="h5" marginBottom={`${PHI * 8}px`}>
                  What should I bring to my first appointment?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  Please bring a valid ID, your insurance card (if applicable), any relevant 
                  medical records, and a list of current medications. For comfort, you may 
                  also bring a water bottle and a notebook.
                </Paragraph>
                
                <Text variant="h5" marginBottom={`${PHI * 8}px`}>
                  Are virtual appointments available?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  Yes, we offer virtual appointments for many of our services. During the 
                  booking process, you can select either in-person or virtual options for 
                  eligible services.
                </Paragraph>
              </Box>
            </Box>
          </SectionContent>
        </Container>
      </Section>
    </Box>
  );
};

export default BookingPage; 






