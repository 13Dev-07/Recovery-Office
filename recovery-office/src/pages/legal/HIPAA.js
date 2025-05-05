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
 * HIPAA Compliance Page Component
 *
 * This component displays the HIPAA compliance information for Recovery Office.
 * Design follows sacred geometry principles throughout with golden ratio spacing.
 */
var HIPAAPage = function () {
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80';
    var lastUpdated = 'January 15, 2024';
    return (<layout_1.Box as="main">
      {/* Hero Section */}
      <feature_sections_1.Hero heading="HIPAA Compliance" subheading="Our commitment to protecting your health information" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.8)'
        }} align="center" minHeight="40vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text variant="body1" maxWidth={"".concat(sacred_geometry_1.PHI * 400, "px")} m="0 auto" color="white">
          At Recovery Office, we adhere to the highest standards of patient privacy and data protection
          in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
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
                This HIPAA Compliance Statement describes how Recovery Office may use and disclose your 
                Protected Health Information (PHI) to carry out treatment, payment, or healthcare operations, 
                and for other purposes permitted or required by law. It also describes your rights to access 
                and control your PHI.
              </typography_1.Paragraph>
              
              <typography_1.Paragraph variant="body1" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                "Protected Health Information" (PHI) is information about you, including demographic information, 
                that may identify you and that relates to your past, present, or future physical or mental health 
                or condition and related healthcare services.
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
              {/* Uses and Disclosures */}
              <Section_1.SectionTitle title="Uses and Disclosures of Protected Health Information" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Heading as="h3" variant="h4" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Treatment
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We will use and disclose your Protected Health Information (PHI) to provide, coordinate, or manage your healthcare 
                  and any related services. This includes coordinating or managing your healthcare with a third party. For example, 
                  your PHI may be provided to a healthcare provider to whom you have been referred to ensure the provider has the 
                  necessary information to diagnose or treat you.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Payment
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Your PHI will be used, as needed, to obtain payment for your healthcare services. For example, obtaining approval 
                  for a treatment may require that your relevant PHI be disclosed to the health plan to obtain approval for the treatment.
                </typography_1.Paragraph>

                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Healthcare Operations
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  We may use or disclose, as needed, your PHI in order to support the business activities of our practice. These 
                  activities include, but are not limited to, quality assessment, employee review, training of medical students, 
                  licensing, and conducting or arranging for other business activities.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Your Rights */}
              <Section_1.SectionTitle title="Your Rights" size="medium" align="left" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Heading as="h3" variant="h4" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Right to Access Your PHI
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You have the right to inspect and obtain a copy of the PHI that may be used to make decisions about your care. 
                  Usually, this includes medical and billing records, but does not include psychotherapy notes. You must submit your 
                  request in writing to access your PHI. If you request a copy of the information, we may charge a fee for the costs 
                  of copying, mailing, or other supplies associated with your request.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Right to Amend
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  If you feel that the PHI we have about you is incorrect or incomplete, you may ask us to amend the information. 
                  You have the right to request an amendment for as long as the information is kept by or for our practice. Your 
                  request must be made in writing and submitted to our Privacy Officer. You must provide us with a reason that 
                  supports your request for amendment.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Right to an Accounting of Disclosures
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You have the right to request an "accounting of disclosures." This is a list of the disclosures we made of 
                  medical information about you for purposes other than treatment, payment, healthcare operations, or disclosures 
                  you expressly authorized.
                </typography_1.Paragraph>

                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Right to Request Restrictions
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You have the right to request a restriction or limitation on the PHI we use or disclose about you for treatment, 
                  payment, or healthcare operations. You also have the right to request a limit on the medical information we disclose 
                  about you to someone who is involved in your care or the payment for your care, like a family member or friend.
                </typography_1.Paragraph>

                <typography_1.Heading as="h3" variant="h4" mt={"".concat(sacred_geometry_1.PHI * 24, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Right to Request Confidential Communications
                </typography_1.Heading>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  You have the right to request that we communicate with you about medical matters in a certain way or at a certain 
                  location. For example, you can ask that we only contact you at work or by mail.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Data Security */}
              <Section_1.SectionTitle title="Data Security" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Recovery Office implements a variety of security measures to maintain the safety of your PHI. We use state-of-the-art 
                  technology and encryption to protect your personal information, including:
                </typography_1.Paragraph>
                <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 16, "px")} mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">End-to-end encryption for all electronic PHI</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Role-based access controls for all staff members</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Regular security assessments and penetration testing</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Staff training on HIPAA compliance and data security</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    <typography_1.Text variant="body2">Secure disposal of physical documents containing PHI</typography_1.Text>
                  </layout_1.Box>
                  <layout_1.Box as="li">
                    <typography_1.Text variant="body2">Business Associate Agreements with all third-party vendors who may access PHI</typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                <typography_1.Paragraph variant="body2">
                  We regularly review and update our security policies and procedures to ensure that we are always using the best 
                  available practices for protecting your information.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              {/* Contact Information */}
              <Section_1.SectionTitle title="Contact Us" size="medium" align="left" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.3}/>}/>
              
              <layout_1.Box>
                <typography_1.Paragraph variant="body2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  If you have any questions about this HIPAA Compliance Statement or would like to submit a request regarding your PHI, please contact:
                </typography_1.Paragraph>
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" backgroundColor="white" borderLeft={"4px solid #4a6eb3"}>
                  <typography_1.Text variant="body2" mb={"".concat(sacred_geometry_1.PHI * 8, "px")} fontWeight="bold">
                    Privacy Officer
                  </typography_1.Text>
                  <typography_1.Text variant="body2" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    Recovery Office<br />
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

      {/* Agreement Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff" pt={"".concat(sacred_geometry_1.PHI * 32, "px")} pb={"".concat(sacred_geometry_1.PHI * 32, "px")}>
          <layout_1.Container>
            <layout_1.Box textAlign="center" maxWidth="600px" m="0 auto">
              <typography_1.Heading as="h2" variant="h3" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Changes to This Statement
              </typography_1.Heading>
              <typography_1.Paragraph variant="body1" mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                We reserve the right to change our HIPAA Compliance Statement at any time. Any revised statement will be effective 
                for all PHI that we maintain. We will notify you of any material changes by posting the new statement prominently 
                on our website and providing a copy upon request.
              </typography_1.Paragraph>
              <layout_1.Box display="flex" justifyContent="center" gap={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                <button_1.Button variant="primary" size="md" href="/contact">
                  Contact Our Privacy Officer
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
exports.default = HIPAAPage;
