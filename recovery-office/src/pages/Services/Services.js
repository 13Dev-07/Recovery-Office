"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var ServicesHero_1 = require("./sections/ServicesHero");
var ServicesOverview_1 = require("./sections/ServicesOverview");
var ServicesProcess_1 = require("./sections/ServicesProcess");
var ServicesDetails_1 = require("./sections/ServicesDetails");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Service data - mapped to be compatible with the Service interface
var services = [
    {
        id: 'recovery-consultation',
        title: 'Recovery Consultation',
        description: 'Personalized assessment and treatment planning',
        longDescription: "Our Recovery Consultation service provides a comprehensive assessment of your needs and goals. Our experienced practitioners use sacred geometry principles to create a harmonious and balanced approach to your recovery journey. During this initial consultation, we will explore your health history, current challenges, and aspirations to develop a personalized treatment plan that aligns with your unique circumstances.",
        icon: 'chart',
        path: '/services/recovery-consultation',
        benefits: [
            'Comprehensive health and wellness assessment',
            'Personalized treatment plan development',
            'Integration of sacred geometry principles for balanced healing',
            'Expert guidance from specialized practitioners',
            'Holistic approach addressing mind, body, and spirit'
        ],
        duration: '60-90 minutes',
        pricing: {
            initial: 150,
            followUp: 90
        },
        accentColor: '#4a6eb3'
    },
    {
        id: 'therapeutic-sessions',
        title: 'Therapeutic Sessions',
        description: 'Guided healing and personal growth sessions',
        longDescription: "Our Therapeutic Sessions offer a sacred space for healing and personal growth. Using a combination of evidence-based therapeutic techniques and sacred geometry principles, our practitioners guide you through a transformative process. These sessions help release blocked energy, process emotions, and restore balance to your being. Each session is tailored to your specific needs and can incorporate various modalities including talk therapy, somatic experiencing, and mindfulness practices.",
        icon: 'heart',
        path: '/services/therapeutic-sessions',
        benefits: [
            'Personalized therapeutic approach',
            'Integration of sacred geometry for enhanced healing',
            'Emotional processing and release',
            'Development of personal growth strategies',
            'Improved self-awareness and mindfulness',
            'Enhanced emotional regulation skills'
        ],
        duration: '50-60 minutes',
        pricing: {
            initial: 120,
            followUp: 100
        },
        accentColor: '#62a388'
    },
    {
        id: 'botanical-therapy',
        title: 'Botanical Therapy',
        description: 'Nature-based healing using sacred plants',
        longDescription: "Our Botanical Therapy service harnesses the healing power of plants through sacred geometry principles. This therapy utilizes carefully selected botanical elements that resonate with your body's natural healing processes. Our practitioners are trained in both traditional plant medicine and modern therapeutic applications, ensuring a safe and effective experience. Botanical therapy can help with physical discomfort, emotional balance, stress reduction, and overall wellness enhancement.",
        icon: 'leaf',
        path: '/services/botanical-therapy',
        benefits: [
            'Customized botanical formulations',
            'Integration of sacred plant knowledge',
            'Harmonization of body systems through natural means',
            'Reduction of stress and anxiety',
            'Enhancement of natural healing processes',
            'Improved sleep and energy levels'
        ],
        duration: '60-75 minutes',
        pricing: {
            initial: 130,
            followUp: 110
        },
        accentColor: '#b47e4a'
    },
    {
        id: 'sacred-education',
        title: 'Sacred Geometry Workshops',
        description: 'Learn healing principles based on sacred proportions',
        longDescription: "Our Sacred Geometry Workshops provide education on the healing principles of geometric harmony and balance. These interactive sessions teach you how to apply sacred geometry to various aspects of your life for enhanced well-being. Learn about the Golden Ratio, Fibonacci sequence, and other sacred patterns and how they relate to healing, wellness, and personal growth. These workshops combine theoretical knowledge with practical applications to empower your self-healing journey.",
        icon: 'geometry',
        path: '/services/sacred-education',
        benefits: [
            'Understanding of sacred geometry principles',
            'Practical applications for daily wellness',
            'Tools for self-healing and balance',
            'Community connection with like-minded individuals',
            'Integration of ancient wisdom with modern science',
            'Empowerment through knowledge and practice'
        ],
        duration: 'Varies (workshops: 2-4 hours, private sessions: 60 minutes)',
        pricing: {
            workshop: 75,
            privateSession: 135
        },
        accentColor: '#8e67b0'
    }
];
/**
 * Services Page Component
 *
 * This component represents the services page of the Recovery Office website.
 * It displays the various services offered by Recovery Office, including
 * descriptions, benefits, and pricing information.
 */
var ServicesPage = function () {
    return (<layout_1.Box as={'main'}>
      {/* Hero Section */}
      <ServicesHero_1.default />
      
      {/* Services Overview */}
      <ServicesOverview_1.default services={services}/>
      
      {/* Services Process */}
      <ServicesProcess_1.default />
      
      {/* Services Details */}
      <ServicesDetails_1.default services={services}/>
      
      {/* CTA Section */}
      <Section_1.Section backgroundColor="#4a6eb3" style={{
            paddingTop: "".concat(sacred_geometry_1.PHI * 48, "px"),
            paddingBottom: "".concat(sacred_geometry_1.PHI * 48, "px")
        }}>
        <layout_1.Container>
          <typography_1.Heading as="h2" mb={"".concat(sacred_geometry_1.PHI * 16, "px")} color="white" textAlign="center">
            Ready to Begin Your Recovery Journey?
          </typography_1.Heading>
          <typography_1.Text size="base" maxWidth={"".concat(sacred_geometry_1.PHI * 500, "px")} m="0 auto" mb={"".concat(sacred_geometry_1.PHI * 32, "px")} color="white" textAlign="center">
            Our team of experienced practitioners is ready to guide you on your path
            to wellness. Schedule your appointment today and discover the healing
            power of sacred geometry and natural recovery.
          </typography_1.Text>
          <layout_1.Box display="flex" justifyContent="center">
            <button_1.Button variant="accent" size="lg" href="/booking">
              Book Your Appointment
            </button_1.Button>
          </layout_1.Box>
        </layout_1.Container>
      </Section_1.Section>
    </layout_1.Box>);
};
exports.default = ServicesPage;
