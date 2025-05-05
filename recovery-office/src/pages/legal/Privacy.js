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
 * Privacy Policy Page Component
 *
 * This component displays the privacy policy for Recovery Office.
 * Design follows sacred geometry principles throughout with golden ratio spacing.
 */
var PrivacyPage = function () {
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=1920&q=80';
    var lastUpdated = 'June 15, 2023';
    return (<layout_1.Box as="main">
      {/* Hero Section */}
      <feature_sections_1.Hero heading="Privacy Policy" subheading="How we protect and handle your information" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.8)'
        }} align="center" minHeight="40vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text variant="body1" maxWidth={"".concat(sacred_geometry_1.PHI * 400, "px")} m="0 auto" color="white">
          At Recovery Office, we value your privacy and are committed to protecting 
          your personal information. This policy explains how we collect, use, and 
          safeguard your data.
        </typography_1.Text>
      </feature_sections_1.Hero>

      {/* Introduction Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff">
          <layout_1.Container>
            <layout_1.Box maxWidth="800px" m="0 auto" pt={"".concat(sacred_geometry_1.PHI * 24, "px")} pb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <layout_1.Box display="flex" alignItems="center" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                <botanical_1.FlowerOfLife size="sm" opacity={0.6} mr={"".concat(sacred_geometry_1.PHI * 12, "px")}/>
                <typography_1.Text variant="caption" fontStyle="italic">
                  Last Updated: {lastUpdated}
                </typography_1.Text>
              </layout_1.Box>
              
              <typography_1.Paragraph variant="body1" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                This Privacy Policy describes how Recovery Office ("we," "us," or "our") 
                collects, uses, and shares information about you when you use our website, 
                services, and applications (collectively, the "Services"). By using our 
                Services, you agree to the collection, use, and sharing of your information 
                as described in this Privacy Policy.
              </typography_1.Paragraph>
              
              <typography_1.Paragraph variant="body1" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                We may change this Privacy Policy from time to time. If we make changes, 
                we will notify you by revising the date at the top of the policy and, in 
                some cases, we may provide you with additional notice. We encourage you to 
                review the Privacy Policy whenever you access the Services to stay informed 
                about our information practices and the ways you can help protect your privacy.
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
              {/* Information We Collect */}
              <Section_1.SectionTitle title="Information We Collect" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Heading as="h3" variant="h4" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Information You Provide to Us
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We collect information you provide directly to us. For example, we collect 
                  information when you:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Create an account or profile</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Schedule appointments or consultations</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Fill out forms or surveys</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Communicate with us via email, phone, or other means</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Submit health information for therapeutic purposes</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2">Provide payment information</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph variant="body2">
                  This information may include your name, email address, phone number, postal 
                  address, health information, payment information, and any other information 
                  you choose to provide.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Information We Collect Automatically
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  When you access or use our Services, we may automatically collect information 
                  about you, including:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Log Information:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We collect log information about your use of our Services, including your browser type, access times, pages viewed, and IP address.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Device Information:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We collect information about the device you use to access our Services, including the hardware model, operating system, and unique device identifiers.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Cookies and Similar Technologies:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We use cookies and similar technologies to collect information about your interactions with our Services and other websites.</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
              </layout_1.Box>
              
              {/* How We Use Information */}
              <Section_1.SectionTitle title="How We Use Information" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We may use the information we collect for various purposes, including to:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Provide, maintain, and improve our Services</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Process and complete transactions</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Schedule and manage appointments</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Develop personalized treatment plans</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Send technical notices, updates, security alerts, and administrative messages</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Respond to your comments, questions, and requests</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Provide customer service and support</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2">Comply with legal and regulatory requirements</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
              </layout_1.Box>
              
              {/* Sharing of Information */}
              <Section_1.SectionTitle title="Sharing of Information" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We may share information about you as follows:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">With Service Providers:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf, such as payment processing, data analysis, and customer service.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">For Legal Reasons:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We may share information if we believe disclosure is necessary to comply with applicable laws, regulations, legal processes, or governmental requests.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">With Your Consent:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We may share information with third parties when you give us consent to do so, such as when you choose to share your information with other healthcare providers.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Business Transfers:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> We may share your information in connection with a merger, reorganization, acquisition, or sale of all or a portion of our business.</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph variant="body2">
                  We take your privacy seriously and do not sell your personal information to third parties.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Data Security */}
              <Section_1.SectionTitle title="Data Security" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We take reasonable measures to help protect the information we collect from loss, theft, misuse, 
                  and unauthorized access, disclosure, alteration, and destruction. However, no security system is 
                  impenetrable, and we cannot guarantee the security of our systems or your information.
                </typography_1.Paragraph>
                <typography_1.Paragraph variant="body2">
                  We implement appropriate physical, technical, and administrative safeguards designed to protect 
                  your personal health information in accordance with HIPAA regulations and other applicable privacy laws.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Your Rights and Choices */}
              <Section_1.SectionTitle title="Your Rights and Choices" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You have several rights regarding your personal information:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Access:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> You have the right to access personal information we hold about you.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Correction:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> You have the right to request that we correct inaccurate or incomplete information about you.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Deletion:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> In certain circumstances, you have the right to request deletion of your personal information.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Restriction:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> You have the right to request that we restrict the processing of your information.</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2" fontWeight="bold" as="span">Objection:</typography_1.Text>
                    <typography_1.Text variant="body2" as="span"> You have the right to object to the processing of your personal information.</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph variant="body2">
                  To exercise any of these rights, please contact us using the information provided at the end of this policy.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Contact Information */}
              <Section_1.SectionTitle title="Contact Us" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </typography_1.Paragraph>
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" backgroundColor="white" borderLeft={"4px solid #4a6eb3"}>
                  <typography_1.Text variant="body2" mb={"".concat(sacred_geometry_1.PHI * 8, "px")} fontWeight="bold">
                    Recovery Office
                  </typography_1.Text>
                  <typography_1.Text variant="body2" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    123 Harmony Way, Suite 618<br />
                    Golden Springs, CA 91234
                  </typography_1.Text>
                  <typography_1.Text variant="body2" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    Email: privacy@recoveryoffice.com
                  </typography_1.Text>
                  <typography_1.Text variant="body2">
                    Phone: (555) 123-4567
                  </typography_1.Text>
                </data_display_1.Card>
              </layout_1.Box>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* CTA Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff" pt={"".concat(sacred_geometry_1.PHI * 32, "px")} pb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
          <layout_1.Container>
            <layout_1.Box textAlign="center" maxWidth="600px" m="0 auto">
              <typography_1.Heading as="h2" variant="h3" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Need More Information?
              </typography_1.Heading>
              <typography_1.Paragraph variant="body1" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                If you have questions about our privacy practices or would like to learn more about how we protect your data, our team is here to help.
              </typography_1.Paragraph>
              <layout_1.Box display="flex" justifyContent="center" gap={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                <button_1.Button variant="primary" size="md" href="/contact">
                  Contact Us
                </button_1.Button>
                <button_1.Button variant="outline" size="md" href="/faq">
                  View FAQ
                </button_1.Button>
              </layout_1.Box>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>
    </layout_1.Box>);
};
exports.default = PrivacyPage;
