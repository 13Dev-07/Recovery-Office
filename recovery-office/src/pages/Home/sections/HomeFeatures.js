"use strict";
/**
 * HomeFeatures Component
 *
 * Displays the key features of Recovery Office services using sacred geometry
 * principles for layout, animations, and design.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../../../design-system/components/layout");
var typography_1 = require("../../../design-system/components/typography");
var section_1 = require("../../../components/section");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var sacred_geometry_2 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
// Styled components
var FeaturesContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var FeatureCard = (0, styled_components_1.default)(layout_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: white;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  border-top: 3px solid ", ";\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  padding: ", "px;\n  background-color: white;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  border-top: 3px solid ", ";\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI_INVERSE * 10, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.$accentColor; }, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg);
var FeatureIcon = (0, styled_components_1.default)(layout_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  \n  img {\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  \n  img {\n    width: ", "px;\n    height: ", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, function (props) { return props.$bgColor; }, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg);
var BotanicalBackground = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  opacity: 0.05;\n  \n  &.top-right {\n    top: -", "px;\n    right: -", "px;\n  }\n  \n  &.bottom-left {\n    bottom: -", "px;\n    left: -", "px;\n  }\n"], ["\n  position: absolute;\n  z-index: -1;\n  opacity: 0.05;\n  \n  &.top-right {\n    top: -", "px;\n    right: -", "px;\n  }\n  \n  &.bottom-left {\n    bottom: -", "px;\n    left: -", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xxl);
/**
 * HomeFeatures Component
 *
 * Displays the key features of Recovery Office services using sacred geometry
 * for layout proportions, animations, and visual harmony.
 */
var HomeFeatures = function () {
    // Features data
    var features = [
        {
            id: 'feature-1',
            title: 'Expert Guidance',
            description: 'Receive clear, transparent consultation backed by deep regulatory expertise and years of experience in financial recovery.',
            icon: '/assets/icons/expert.svg',
            color: '#0A4021' // primary.dark
        },
        {
            id: 'feature-2',
            title: 'Trust & Credibility',
            description: 'We leverage official FCA/BaFin compliance and oversight to assure clients of our legitimacy, security, and accountability.',
            icon: '/assets/icons/trust.svg',
            color: '#1A6845' // primary.main
        },
        {
            id: 'feature-3',
            title: 'Educational Resources',
            description: 'Access comprehensive resources that empower you with knowledge about financial recovery processes and fraud prevention.',
            icon: '/assets/icons/education.svg',
            color: '#2C8262' // primary.light
        },
        {
            id: 'feature-4',
            title: 'Transparent Process',
            description: 'Experience clear communication about fee structures, recovery timelines, and potential outcomes throughout your journey.',
            icon: '/assets/icons/transparency.svg',
            color: '#0A4021' // primary.dark
        },
        {
            id: 'feature-5',
            title: 'Global Expertise',
            description: 'Benefit from our international network and experience in recovering assets across jurisdictions and regulatory frameworks.',
            icon: '/assets/icons/global.svg',
            color: '#1A6845' // primary.main
        },
        {
            id: 'feature-6',
            title: 'Personalized Support',
            description: 'Receive individualized strategies and support tailored to your unique situation and financial recovery needs.',
            icon: '/assets/icons/support.svg',
            color: '#2C8262' // primary.light
        }
    ];
    return (<section_1.Section backgroundStyle="light" paddingTop={sacred_geometry_1.SACRED_SPACING.xxl} paddingBottom={sacred_geometry_1.SACRED_SPACING.xxl} id="features">
      <layout_1.Container>
        <FeaturesContainer>
          {/* Botanical backgrounds */}
          <BotanicalBackground className="top-right">
            <botanical_1.FlowerOfLife width={400}/>
          </BotanicalBackground>
          
          <BotanicalBackground className="bottom-left">
            <botanical_1.VesicaPiscis width={350}/>
          </BotanicalBackground>
          
          {/* Section heading */}
          <animation_1.ScrollReveal>
            <section_1.SectionHeading title="Why Choose Recovery Office" subtitle="Our unique approach combines expertise with sacred principles" alignment="center" size="large" decoration="botanical" marginBottom={sacred_geometry_1.SACRED_SPACING.xl}/>
          </animation_1.ScrollReveal>
          
          {/* Features grid */}
          <layout_1.Grid gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
        }} gap={(0, getFibonacciByIndex_1.getFibonacciByIndex)(8)} // 21px (Fibonacci sequence)
     marginTop={sacred_geometry_1.SACRED_SPACING.xl}>
            {features.map(function (feature, index) { return (<animation_1.ScaleFade key={feature.id} delay={sacred_geometry_2.ANIMATION_TIMING.quick * (index % 3)} duration={sacred_geometry_2.ANIMATION_TIMING.standard}>
                <FeatureCard $accentColor={feature.color}>
                  <FeatureIcon $bgColor={"".concat(feature.color, "1A")}>
                    <img src={feature.icon} alt={feature.title}/>
                  </FeatureIcon>
                  
                  <typography_1.Heading as="h3" variant="h4" marginBottom={sacred_geometry_1.SACRED_SPACING.sm}>
                    {feature.title}
                  </typography_1.Heading>
                  
                  <typography_1.Paragraph variant="body2">
                    {feature.description}
                  </typography_1.Paragraph>
                </FeatureCard>
              </animation_1.ScaleFade>); })}
          </layout_1.Grid>
          
          {/* Additional information */}
          <layout_1.Box marginTop={(0, getFibonacciByIndex_1.getFibonacciByIndex)(10)} // 55px (Fibonacci sequence)
     textAlign="center">
            <animation_1.FadeIn delay={sacred_geometry_2.ANIMATION_TIMING.standard}>
              <typography_1.Paragraph variant="body1" maxWidth={"".concat(sacred_geometry_1.PHI * 500, "px")} margin="0 auto" color="gray.700">
                All our services incorporate sacred geometry principles, ensuring a harmonious and balanced approach to financial recovery.
                This unique methodology has helped us achieve successful outcomes for over 500 clients worldwide.
              </typography_1.Paragraph>
            </animation_1.FadeIn>
          </layout_1.Box>
        </FeaturesContainer>
      </layout_1.Container>
    </section_1.Section>);
};
exports.default = HomeFeatures;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
