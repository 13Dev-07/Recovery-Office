"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var botanical_1 = require("../design-system/botanical");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var data_display_1 = require("../design-system/components/data-display");
var animation_1 = require("../design-system/components/animation");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Terms of Service Page Component
 *
 * This component displays the terms of service for Recovery Office.
 * Design follows sacred geometry principles throughout with golden ratio spacing.
 */
var TermsPage = function () {
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80';
    var lastUpdated = 'June 15, 2023';
    return (<layout_1.Box as={'main'}>
      {/* Hero Section */}
      <feature_sections_1.Hero heading="Terms of Service" subheading="The agreement between Recovery Office and our clients" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.8)'
        }} align="center" minHeight="40vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text size="base" maxWidth={"".concat(sacred_geometry_1.PHI * 400, "px")} m="0 auto" color="white">
          These Terms of Service outline the rules and regulations for using our website
          and services. Please read carefully to understand your rights and responsibilities.
        </typography_1.Text>
      </feature_sections_1.Hero>

      {/* Introduction Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff">
          <layout_1.Container>
            <layout_1.Box maxWidth="800px" m="0 auto" pt={"".concat(sacred_geometry_1.PHI * 24, "px")} pb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <layout_1.Box display="flex" alignItems="center" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                <botanical_1.FlowerOfLife size="sm" opacity={0.6} style={{ marginRight: "".concat(sacred_geometry_1.PHI * 12, "px") }}/>
                <typography_1.Text size="xs" italic={true}>
                  Last Updated: {lastUpdated}
                </typography_1.Text>
              </layout_1.Box>
              
              <typography_1.Paragraph size="base" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                Welcome to Recovery Office. These Terms of Service ("Terms") govern your use of the Recovery Office website, 
                mobile applications, and services (collectively, the "Services"). By accessing or using our Services, 
                you agree to be bound by these Terms. If you disagree with any part of the Terms, please do not use our Services.
              </typography_1.Paragraph>
              
              <typography_1.Paragraph size="base" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                We may update these Terms from time to time to reflect changes in our services, 
                legal requirements, or for other operational, legal, or regulatory reasons. 
                We will notify you of changes by updating the "Last Updated" date at the top of these Terms. 
                Your continued use of our Services after we post any modifications to the Terms will constitute 
                your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms.
              </typography_1.Paragraph>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* Main Content Sections */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#f8f9fa">
          <layout_1.Container>
            <layout_1.Box maxWidth="800px" m="0 auto" pt={"".concat(sacred_geometry_1.PHI * 24, "px")} pb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              {/* Use of Services */}
              <Section_1.SectionTitle title="Use of Services" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Heading as="h3" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Eligibility
                </typography_1.Heading>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are of legal age to enter into a binding contract with Recovery Office. If you are using the Services on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Account Registration and Security
                </typography_1.Heading>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  To access certain features of our Services, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Service Policies */}
              <Section_1.SectionTitle title="Service Policies" size="medium" align="left" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Heading as="h3" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Appointment Scheduling
                </typography_1.Heading>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Our Services allow you to schedule appointments with our therapeutic specialists. You agree to provide accurate information when scheduling appointments and to arrive on time for scheduled sessions. We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations (less than 24 hours before the appointment) or no-shows may result in a cancellation fee of up to 50% of the service price.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Payment Terms
                </typography_1.Heading>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Payment for services is due at the time of service unless other arrangements have been made. We accept various payment methods as indicated on our website. By providing payment information, you represent and warrant that you are authorized to use the payment method. You agree to pay all charges at the prices in effect when you use the Services, including all applicable taxes.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Insurance Coverage
                </typography_1.Heading>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We accept certain insurance plans for our services. However, it is your responsibility to verify your coverage and benefits before scheduling appointments. We cannot guarantee that your insurance will cover our services. You are ultimately responsible for any charges not covered by your insurance.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* User Conduct */}
              <Section_1.SectionTitle title="User Conduct" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  When using our Services, you agree not to:
                </typography_1.Paragraph>
                <layout_1.Box as={'ul'} pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Violate any applicable laws, regulations, or third-party rights</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Use the Services for any illegal purpose or to promote illegal activities</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Interfere with or disrupt the Services or servers or networks connected to the Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Attempt to gain unauthorized access to any part of the Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Harass, abuse, or harm another person through the use of our Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'}>
                    <typography_1.Text size="sm">Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph size="sm">
                  We reserve the right to terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including breaching the Terms.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Intellectual Property */}
              <Section_1.SectionTitle title="Intellectual Property" size="medium" align="left" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  The Services and their original content, features, and functionality are owned by Recovery Office and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </typography_1.Paragraph>
                
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Recovery Office. The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by Recovery Office or its licensors.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Limitation of Liability */}
              <Section_1.SectionTitle title="Limitation of Liability" size="medium" align="left" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  To the maximum extent permitted by applicable law, in no event shall Recovery Office, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </typography_1.Paragraph>
                <layout_1.Box as={'ul'} pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Your access to or use of or inability to access or use the Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Any conduct or content of any third party on the Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'} mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text size="sm">Any content obtained from the Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as={'li'}>
                    <typography_1.Text size="sm">Unauthorized access, use, or alteration of your transmissions or content</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph size="sm">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Governing Law */}
              <Section_1.SectionTitle title="Governing Law" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph size="sm">
                  These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Contact Information */}
              <Section_1.SectionTitle title="Contact Us" size="medium" align="left" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box>
                <typography_1.Paragraph size="sm" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  If you have any questions about these Terms, please contact us at:
                </typography_1.Paragraph>
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" backgroundColor="white" borderLeft={"4px solid #4a6eb3"}>
                  <typography_1.Text size="sm" mb={"".concat(sacred_geometry_1.PHI * 8, "px")} weight="bold">
                    Recovery Office
                  </typography_1.Text>
                  <typography_1.Text size="sm" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    123 Harmony Way, Suite 618<br />
                    Golden Springs, CA 91234
                  </typography_1.Text>
                  <typography_1.Text size="sm" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    Email: legal@recoveryoffice.com
                  </typography_1.Text>
                  <typography_1.Text size="sm">
                    Phone: (555) 123-4567
                  </typography_1.Text>
                </data_display_1.Card>
              </layout_1.Box>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* Agreement Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff" style={{
            paddingTop: "".concat(sacred_geometry_1.PHI * 32, "px"),
            paddingBottom: "".concat(sacred_geometry_1.PHI * 32, "px")
        }}>
          <layout_1.Container>
            <layout_1.Box textAlign="center" maxWidth="600px" m="0 auto">
              <typography_1.Heading as="h2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Your Agreement
              </typography_1.Heading>
              <typography_1.Paragraph size="base" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                By using our services, you acknowledge that you have read and understood our Terms of Service and agree to be bound by them. If you have any questions or concerns, please don't hesitate to contact us.
              </typography_1.Paragraph>
              <layout_1.Box display="flex" justifyContent="center" gap={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                <button_1.Button variant="primary" size="md" href="/contact">
                  Contact Us
                </button_1.Button>
                <button_1.Button variant="outline" size="md" href="/privacy">
                  Privacy Policy
                </button_1.Button>
              </layout_1.Box>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>
    </layout_1.Box>);
};
exports.default = TermsPage;
