import * as React from 'react';
import { Hero } from '../../design-system/components/feature-sections';
import { SecurityShield, ComplianceBadge, AssetRecovery } from '../../design-system/components/utility/FinancialIcons';
import { Box, Container } from '../../design-system/components/layout';
import { Section, SectionTitle, SectionContent } from '../../design-system/components/layout/Section';
import { Text, Paragraph, Heading } from '../../design-system/components/typography';
import { Button } from '../../design-system/components/button';
import { Card } from '../../design-system/components/data-display';
import { ScrollReveal } from '../../animation';
import { PHI } from '../../constants/sacred-geometry';

/**
 * Terms of Service Page Component
 * 
 * This component displays the terms of service for Recovery Office.
 * Design follows sacred geometry principles throughout with golden ratio spacing.
 */
const TermsPage: React.FC = () => {
  // Hero section background
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80';

  const lastUpdated = 'June 15, 2023';

  return (
    <Box as={'main'}>
      {/* Hero Section */}
      <Hero
        heading="Terms of Service"
        subheading="The agreement between Recovery Office and our clients"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.8)'
        }}
        align="center"
        minHeight="40vh"
        animated={true}
      >
        <Text size="base" maxWidth={`${PHI * 400}px`} m="0 auto" color="white">
          These Terms of Service outline the rules and regulations for using our website
          and services. Please read carefully to understand your rights and responsibilities.
        </Text>
      </Hero>

      {/* Introduction Section */}
      <ScrollReveal>
        <Section backgroundColor="#ffffff">
          <Container>
            <Box 
              maxWidth="800px" 
              m="0 auto" 
              pt={`${PHI * 24}px`}
              pb={`${PHI * 24}px`}
            >
              <Box 
                display="flex" 
                alignItems="center" 
                mb={`${PHI * 16}px`}
              >
                <SecurityShield size="sm" opacity={0.6} style={{ marginRight: `${PHI * 12}px` }} />
                <Text size="xs" italic={true}>
                  Last Updated: {lastUpdated}
                </Text>
              </Box>
              
              <Paragraph size="base" mb={`${PHI * 24}px`}>
                Welcome to Recovery Office. These Terms of Service ("Terms") govern your use of the Recovery Office website, 
                mobile applications, and services (collectively, the "Services"). By accessing or using our Services, 
                you agree to be bound by these Terms. If you disagree with any part of the Terms, please do not use our Services.
              </Paragraph>
              
              <Paragraph size="base" mb={`${PHI * 24}px`}>
                We may update these Terms from time to time to reflect changes in our services, 
                legal requirements, or for other operational, legal, or regulatory reasons. 
                We will notify you of changes by updating the "Last Updated" date at the top of these Terms. 
                Your continued use of our Services after we post any modifications to the Terms will constitute 
                your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms.
              </Paragraph>
            </Box>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Main Content Sections */}
      <ScrollReveal>
        <Section backgroundColor="#f8f9fa">
          <Container>
            <Box 
              maxWidth="800px" 
              m="0 auto" 
              pt={`${PHI * 24}px`}
              pb={`${PHI * 24}px`}
            >
              {/* Use of Services */}
              <SectionTitle 
                title="Use of Services" 
                size="medium"
                align="left"
                decoratorBefore={<ComplianceBadge size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Heading as="h3" mb={`${PHI * 16}px`}>
                  Eligibility
                </Heading>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are of legal age to enter into a binding contract with Recovery Office. If you are using the Services on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.
                </Paragraph>
                
                <Heading as="h3" mt={`${PHI * 24}px`} mb={`${PHI * 16}px`}>
                  Account Registration and Security
                </Heading>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  To access certain features of our Services, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </Paragraph>
              </Box>
              
              {/* Service Policies */}
              <SectionTitle 
                title="Service Policies" 
                size="medium"
                align="left"
                decoratorBefore={<AssetRecovery size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Heading as="h3" mb={`${PHI * 16}px`}>
                  Appointment Scheduling
                </Heading>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  Our Services allow you to schedule appointments with our financial recovery specialists. You agree to provide accurate information when scheduling appointments and to arrive on time for scheduled sessions. We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations (less than 24 hours before the appointment) or no-shows may result in a cancellation fee of up to 50% of the service price.
                </Paragraph>
                
                <Heading as="h3" mt={`${PHI * 24}px`} mb={`${PHI * 16}px`}>
                  Payment Terms
                </Heading>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  Payment for services is due at the time of service unless other arrangements have been made. We accept various payment methods as indicated on our website. By providing payment information, you represent and warrant that you are authorized to use the payment method. You agree to pay all charges at the prices in effect when you use the Services, including all applicable taxes.
                </Paragraph>
                
                <Heading as="h3" mt={`${PHI * 24}px`} mb={`${PHI * 16}px`}>
                  Insurance Coverage
                </Heading>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  We accept certain insurance plans for our services. However, it is your responsibility to verify your coverage and benefits before scheduling appointments. We cannot guarantee that your insurance will cover our services. You are ultimately responsible for any charges not covered by your insurance.
                </Paragraph>
              </Box>
              
              {/* User Conduct */}
              <SectionTitle 
                title="User Conduct" 
                size="medium"
                align="left"
                decoratorBefore={<SecurityShield size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  When using our Services, you agree not to:
                </Paragraph>
                <Box as={'ul'} pl={`${PHI * 16}px`} mb={`${PHI * 16}px`}>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Violate any applicable laws, regulations, or third-party rights</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Use the Services for any illegal purpose or to promote illegal activities</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Interfere with or disrupt the Services or servers or networks connected to the Services</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Attempt to gain unauthorized access to any part of the Services</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Harass, abuse, or harm another person through the use of our Services</Text>
                  </Box>
                  <Box as={'li'}>
                    <Text size="sm">Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</Text>
                  </Box>
                </Box>
                <Paragraph size="sm">
                  We reserve the right to terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including breaching the Terms.
                </Paragraph>
              </Box>
              
              {/* Intellectual Property */}
              <SectionTitle 
                title="Intellectual Property" 
                size="medium"
                align="left"
                decoratorBefore={<ComplianceBadge size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  The Services and their original content, features, and functionality are owned by Recovery Office and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </Paragraph>
                
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Recovery Office. The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by Recovery Office or its licensors.
                </Paragraph>
              </Box>
              
              {/* Limitation of Liability */}
              <SectionTitle 
                title="Limitation of Liability" 
                size="medium"
                align="left"
                decoratorBefore={<AssetRecovery size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  To the maximum extent permitted by applicable law, in no event shall Recovery Office, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </Paragraph>
                <Box as={'ul'} pl={`${PHI * 16}px`} mb={`${PHI * 16}px`}>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Your access to or use of or inability to access or use the Services</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Any conduct or content of any third party on the Services</Text>
                  </Box>
                  <Box as={'li'} mb={`${PHI * 8}px`}>
                    <Text size="sm">Any content obtained from the Services</Text>
                  </Box>
                  <Box as={'li'}>
                    <Text size="sm">Unauthorized access, use, or alteration of your transmissions or content</Text>
                  </Box>
                </Box>
                <Paragraph size="sm">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
                </Paragraph>
              </Box>
              
              {/* Governing Law */}
              <SectionTitle 
                title="Governing Law" 
                size="medium"
                align="left"
                decoratorBefore={<SecurityShield size="sm" opacity={0.3} />}
              />
              
              <Box mb={`${PHI * 32}px`}>
                <Paragraph size="sm">
                  These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </Paragraph>
              </Box>
              
              {/* Contact Information */}
              <SectionTitle 
                title="Contact Us" 
                size="medium"
                align="left"
                decoratorBefore={<ComplianceBadge size="sm" opacity={0.3} />}
              />
              
              <Box>
                <Paragraph size="sm" mb={`${PHI * 16}px`}>
                  If you have any questions about these Terms, please contact us at:
                </Paragraph>
                <Card
                  padding={`${PHI * 24}px`}
                  borderRadius="8px"
                  backgroundColor="white"
                  borderLeft={`4px solid #4a6eb3`}
                >
                  <Text size="sm" mb={`${PHI * 8}px`} weight="bold">
                    Recovery Office
                  </Text>
                  <Text size="sm" mb={`${PHI * 8}px`}>
                    123 Financial Street, Suite 618<br />
                    Recovery City, RC 91234
                  </Text>
                  <Text size="sm" mb={`${PHI * 8}px`}>
                    Email: legal@recoveryoffice.com
                  </Text>
                  <Text size="sm">
                    Phone: (555) 123-4567
                  </Text>
                </Card>
              </Box>
            </Box>
          </Container>
        </Section>
      </ScrollReveal>

      {/* Agreement Section */}
      <ScrollReveal>
        <Section 
          backgroundColor="#ffffff"
          style={{
            paddingTop: `${PHI * 32}px`,
            paddingBottom: `${PHI * 32}px`
          }}
        >
          <Container>
            <Box 
              textAlign="center"
              maxWidth="600px"
              m="0 auto"
            >
              <Heading as="h2" mb={`${PHI * 16}px`}>
                Your Agreement
              </Heading>
              <Paragraph size="base" mb={`${PHI * 24}px`}>
                By using our services, you acknowledge that you have read and understood our Terms of Service and agree to be bound by them. If you have any questions or concerns, please don't hesitate to contact us.
              </Paragraph>
              <Box 
                display="flex" 
                justifyContent="center" 
                gap={`${PHI * 16}px`}
              >
                <Button 
                  variant="primary" 
                  size="md"
                  href="/contact"
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="md"
                  href="/privacy"
                >
                  Privacy Policy
                </Button>
              </Box>
            </Box>
          </Container>
        </Section>
      </ScrollReveal>
    </Box>
  );
};

export default TermsPage; 







