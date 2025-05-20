import * as React from 'react';
import { Hero } from '../../design-system/components/feature-sections';
import { SecurityShield, ComplianceBadge, AssetRecovery } from '../../design-system/components/utility/FinancialIcons';
import { Box, Container } from '../../design-system/components/layout';
import { Section, SectionTitle, SectionContent } from '../../design-system/components/layout/Section';
import { Text, Paragraph } from '../../design-system/components/typography';
import { Card } from '../../design-system/components/data-display';
import BookingInterface from "../../components/booking/BookingInterface";
import { useLocation, useParams } from 'react-router-dom';
import { PHI } from '../../constants/sacred-geometry';
import styled from 'styled-components';

/**
 * Booking Page Component
 * 
 * This component represents the booking page of the Recovery Office website.
 * It integrates the BookingInterface component to provide a complete booking experience.
 * Layout and design follow sacred geometry principles throughout.
 */
const BookingPage: React.FC = () => {
  // Get pre-selected service from URL params if present
  const { serviceId } = useParams<{ serviceId?: string }>();
  // Use empty string instead of null to avoid type issues
  const preSelectedService = serviceId || '';
  
  // Hero section background image URL
  const heroBackgroundUrl = '/assets/images/hero/booking-hero.jpg';
  
  // Services for booking interface
  const services: ServiceOption[] = [
    {
      id: 'investment-fraud',
      title: 'Investment Fraud Recovery',
      description: 'Recovery assistance for victims of investment scams, Ponzi schemes, and securities fraud.',
      duration: '60 min',
      price: 150,
      accentColor: '#4a6eb3'
    },
    {
      id: 'financial-misconduct',
      title: 'Financial Misconduct',
      description: 'Expert guidance for recovery from financial advisor misconduct and breach of fiduciary duty.',
      duration: '60 min',
      price: 150,
      accentColor: '#63a98c'
    },
    {
      id: 'crypto-recovery',
      title: 'Cryptocurrency Recovery',
      description: 'Specialized recovery services for cryptocurrency theft, scams and fraudulent exchanges.',
      duration: '90 min',
      price: 225,
      accentColor: '#86b378'
    },
    {
      id: 'regulatory-complaint',
      title: 'Regulatory Complaint Assistance',
      description: 'Help with filing complaints to financial regulatory bodies like the FCA, BaFin, or SEC.',
      duration: '45 min',
      price: 125,
      accentColor: '#a992e2'
    }
  ];

  return (
    <Box as="main">
      {/* Hero Section */}
      <Hero
        heading="Book a Session"
        subheading="Schedule your consultation or financial recovery service"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="40vh"
        animated={true}
      >
        <Text variant="body1" style={{ maxWidth: `${PHI * 400}px`, margin: '0 auto', color: 'white' }}>
          Select a service, choose a date and time, and provide your information 
          to begin your journey toward financial recovery.
        </Text>
      </Hero>

      {/* Booking Interface Section */}
      <Section backgroundColor="#ffffff">
        <Container>
          <Box paddingTop={`${PHI * 16}px`} paddingBottom={`${PHI * 48}px`}>
            <SectionTitle 
              title="Booking System" 
              subtitle="Schedule your appointment in a few simple steps"
              decoratorBefore={<SecurityShield size="sm" opacity={0.3} />}
              decoratorAfter={<SecurityShield size="sm" opacity={0.3} />}
            />
            
            <SectionContent>
              {/* Integrated Booking System - Just render the basic component without props */}
              <BookingInterface />
            </SectionContent>
          </Box>
        </Container>
      </Section>

      {/* Information Section */}
      <Section backgroundColor="#f8f9fa">
        <Container>
          <Box 
            display="grid" 
            gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr 1fr 1fr" }}
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
                <SecurityShield size="md" opacity={0.7} />
              </Box>
              <Text variant="h5" textAlign="center" marginBottom={`${PHI * 16}px`}>
                Preparing for Your Visit
              </Text>
              <Paragraph variant="body2">
                Please arrive 10 minutes before your scheduled appointment to complete any 
                necessary paperwork. Bring any relevant financial documents and prepare any questions you 
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
                <ComplianceBadge size="md" opacity={0.7} />
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
                <AssetRecovery size="md" opacity={0.7} />
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
            decoratorBefore={<ComplianceBadge size="sm" opacity={0.15} />}
            decoratorAfter={<ComplianceBadge size="sm" opacity={0.15} />}
          />
          
          <SectionContent>
            <Box 
              display="grid" 
              gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr 1fr" }}
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
                  Can I request a specific consultant?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  Yes, you can request a specific financial recovery consultant when booking your appointment. 
                  If your requested consultant is not available, we'll suggest alternatives 
                  or other available time slots.
                </Paragraph>
              </Box>
              
              <Box>
                <Text variant="h5" marginBottom={`${PHI * 8}px`}>
                  What should I bring to my first appointment?
                </Text>
                <Paragraph variant="body2" marginBottom={`${PHI * 24}px`}>
                  Please bring a valid ID, any relevant financial records, account statements, 
                  and correspondence related to your case. For your convenience, you may 
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

// Define service structure that matches what BookingInterface expects
interface ServiceOption {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  accentColor: string;
}

export default BookingPage; 






