"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var botanical_1 = require("../design-system/botanical");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var data_display_1 = require("../design-system/components/data-display");
var BookingInterface_1 = require("@components/booking/BookingInterface");
var react_router_dom_1 = require("react-router-dom");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Booking Page Component
 *
 * This component represents the booking page of the Recovery Office website.
 * It integrates the BookingInterface component to provide a complete booking experience.
 * Layout and design follow sacred geometry principles throughout.
 */
var BookingPage = function () {
    // Access URL parameters for pre-selecting services
    var location = (0, react_router_dom_1.useLocation)();
    var queryParams = new URLSearchParams(location.search);
    var preSelectedService = queryParams.get('service');
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1920&q=80';
    // Service information
    var services = [
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
    return (<layout_1.Box as="main">
      {/* Hero Section */}
      <feature_sections_1.Hero heading="Book a Session" subheading="Schedule your consultation or therapeutic service" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.7)'
        }} align="center" minHeight="40vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text variant="body1" style={{ maxWidth: "".concat(sacred_geometry_1.PHI * 400, "px"), margin: '0 auto', color: 'white' }}>
          Select a service, choose a date and time, and provide your information 
          to begin your journey toward balance and harmony.
        </typography_1.Text>
      </feature_sections_1.Hero>

      {/* Booking Interface Section */}
      <Section_1.Section backgroundColor="#ffffff">
        <layout_1.Container>
          <layout_1.Box paddingTop={"".concat(sacred_geometry_1.PHI * 16, "px")} paddingBottom={"".concat(sacred_geometry_1.PHI * 48, "px")}>
            <Section_1.SectionTitle title="Booking System" subtitle="Schedule your appointment in a few simple steps" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>} decoratorAfter={<botanical_1.OliveBranch size="sm" opacity={0.3} mirror/>}/>
            
            <Section_1.SectionContent>
              {/* Integrated Booking System */}
              <BookingInterface_1.default services={services} preSelectedServiceId={preSelectedService || undefined}/>
            </Section_1.SectionContent>
          </layout_1.Box>
        </layout_1.Container>
      </Section_1.Section>

      {/* Information Section */}
      <Section_1.Section backgroundColor="#f8f9fa">
        <layout_1.Container>
          <layout_1.Box display="grid" gridTemplateColumns={["1fr", null, "1fr 1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 24, "px")} padding={"".concat(sacred_geometry_1.PHI * 24, "px 0 ").concat(sacred_geometry_1.PHI * 48, "px 0")}>
            <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" style={{ borderTop: '4px solid #4a6eb3' }}>
              <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")} display="flex" justifyContent="center">
                <botanical_1.FlowerOfLife size="md" opacity={0.7} primaryColor="#4a6eb3"/>
              </layout_1.Box>
              <typography_1.Text variant="h5" textAlign="center" marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Preparing for Your Visit
              </typography_1.Text>
              <typography_1.Paragraph variant="body2">
                Please arrive 10 minutes before your scheduled appointment to complete any 
                necessary paperwork. Wear comfortable clothing and prepare any questions you 
                may have about your recovery journey.
              </typography_1.Paragraph>
            </data_display_1.Card>
            
            <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" style={{ borderTop: '4px solid #63a98c' }}>
              <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")} display="flex" justifyContent="center">
                <botanical_1.FlowerOfLife size="md" opacity={0.7} primaryColor="#63a98c"/>
              </layout_1.Box>
              <typography_1.Text variant="h5" textAlign="center" marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Cancellation Policy
              </typography_1.Text>
              <typography_1.Paragraph variant="body2">
                We understand that schedules change. We request at least 24 hours' notice for 
                cancellations or rescheduling. Late cancellations or no-shows may incur a fee 
                of 50% of the service price.
              </typography_1.Paragraph>
            </data_display_1.Card>
            
            <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" style={{ borderTop: '4px solid #86b378' }}>
              <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")} display="flex" justifyContent="center">
                <botanical_1.FlowerOfLife size="md" opacity={0.7} primaryColor="#86b378"/>
              </layout_1.Box>
              <typography_1.Text variant="h5" textAlign="center" marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Payment Information
              </typography_1.Text>
              <typography_1.Paragraph variant="body2">
                We accept major credit cards, health savings accounts, and some insurance plans. 
                Payment is due at the time of service. Please contact our office if you have 
                questions about payment options or insurance coverage.
              </typography_1.Paragraph>
            </data_display_1.Card>
          </layout_1.Box>
        </layout_1.Container>
      </Section_1.Section>

      {/* FAQ Section */}
      <Section_1.Section backgroundColor="#ffffff">
        <layout_1.Container>
          <Section_1.SectionTitle title="Frequently Asked Questions" subtitle="About our booking and appointments" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
          
          <Section_1.SectionContent>
            <layout_1.Box display="grid" gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <layout_1.Box>
                <typography_1.Text variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  How far in advance should I book?
                </typography_1.Text>
                <typography_1.Paragraph variant="body2" marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                  We recommend booking at least one week in advance to ensure availability, 
                  especially for initial consultations. For ongoing sessions, you can book 
                  further in advance to secure your preferred time slots.
                </typography_1.Paragraph>
                
                <typography_1.Text variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  Can I request a specific practitioner?
                </typography_1.Text>
                <typography_1.Paragraph variant="body2" marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                  Yes, you can request a specific practitioner when booking your appointment. 
                  If your requested practitioner is not available, we'll suggest alternatives 
                  or other available time slots.
                </typography_1.Paragraph>
              </layout_1.Box>
              
              <layout_1.Box>
                <typography_1.Text variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  What should I bring to my first appointment?
                </typography_1.Text>
                <typography_1.Paragraph variant="body2" marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                  Please bring a valid ID, your insurance card (if applicable), any relevant 
                  medical records, and a list of current medications. For comfort, you may 
                  also bring a water bottle and a notebook.
                </typography_1.Paragraph>
                
                <typography_1.Text variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  Are virtual appointments available?
                </typography_1.Text>
                <typography_1.Paragraph variant="body2" marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                  Yes, we offer virtual appointments for many of our services. During the 
                  booking process, you can select either in-person or virtual options for 
                  eligible services.
                </typography_1.Paragraph>
              </layout_1.Box>
            </layout_1.Box>
          </Section_1.SectionContent>
        </layout_1.Container>
      </Section_1.Section>
    </layout_1.Box>);
};
exports.default = BookingPage;
