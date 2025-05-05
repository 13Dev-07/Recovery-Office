"use strict";
/**
 * HomeAbout Component
 *
 * Displays about section on the home page with sacred geometry principles
 * for layout, animations, and design.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var layout_1 = require("../../../design-system/components/layout");
var GoldenSection_1 = require("../../../design-system/components/layout/GoldenSection");
var typography_1 = require("../../../design-system/components/typography");
var button_1 = require("../../../design-system/components/button");
var section_1 = require("../../../components/section");
var animation_1 = require("../../../animation");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Styled components
var AboutContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n"], ["\n  position: relative;\n  overflow: hidden;\n"])));
var ImageContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  border-radius: ", "px;\n  overflow: hidden;\n  \n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(45deg, rgba(10, 64, 33, 0.5), rgba(42, 130, 98, 0.2));\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  border-radius: ", "px;\n  overflow: hidden;\n  \n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(45deg, rgba(10, 64, 33, 0.5), rgba(42, 130, 98, 0.2));\n  }\n"])), sacred_geometry_1.PHI_INVERSE * 10);
var VesicaDecoration = (0, styled_components_1.default)(layout_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  \n  &.top-left {\n    top: -", "px;\n    left: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n"], ["\n  position: absolute;\n  z-index: 0;\n  \n  &.top-left {\n    top: -", "px;\n    left: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg, 45);
var SpiralDecoration = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  \n  &.bottom-right {\n    bottom: -", "px;\n    right: -", "px;\n    opacity: 0.1;\n  }\n"], ["\n  position: absolute;\n  z-index: 0;\n  \n  &.bottom-right {\n    bottom: -", "px;\n    right: -", "px;\n    opacity: 0.1;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl);
var FeatureList = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  margin: ", "px 0;\n"], ["\n  list-style: none;\n  padding: 0;\n  margin: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var FeatureItem = styled_components_1.default.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px;\n  \n  &::before {\n    content: '\u2022';\n    color: var(--color-primary-main);\n    font-size: 1.5em;\n    margin-right: ", "px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px;\n  \n  &::before {\n    content: '\u2022';\n    color: var(--color-primary-main);\n    font-size: 1.5em;\n    margin-right: ", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.SACRED_SPACING.sm);
/**
 * HomeAbout Component
 *
 * Showcases information about the company using sacred geometry principles
 * for layout proportions, animations, and visual harmony.
 */
var HomeAbout = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<section_1.Section backgroundStyle="gradient" paddingTop={sacred_geometry_1.SACRED_SPACING.xxl} paddingBottom={sacred_geometry_1.SACRED_SPACING.xxl} id="about" textColor="white">
      <layout_1.Container>
        <AboutContainer>
          {/* Section heading */}
          <animation_1.ScrollReveal>
            <section_1.SectionHeading title="About Recovery Office" subtitle="Trusted financial recovery consultancy guided by sacred principles" alignment="center" size="large" decoration="line" marginBottom={sacred_geometry_1.SACRED_SPACING.xl}/>
          </animation_1.ScrollReveal>
          
          {/* Content with Golden Ratio layout */}
          <GoldenSection_1.GoldenSection direction="horizontal" reverseOrder={false}>
            {/* Text content */}
            <layout_1.Box padding={sacred_geometry_1.SACRED_SPACING.lg}>
              <animation_1.SlideIn direction="left" delay={sacred_geometry_1.ANIMATION_TIMING.quick}>
                <typography_1.Heading as="h3" variant="h3" marginBottom={sacred_geometry_1.SACRED_SPACING.md}>
                  Our Mission
                </typography_1.Heading>
                
                <typography_1.Paragraph variant="body1" marginBottom={sacred_geometry_1.SACRED_SPACING.md}>
                  At Recovery Office, we provide expert guidance to individuals and businesses 
                  seeking to recover financial assets lost due to fraud, scams, or financial misconduct.
                  Our approach is rooted in sacred geometry principles, bringing natural harmony
                  and balance to the recovery process.
                </typography_1.Paragraph>
                
                <typography_1.Heading as="h4" variant="h4" marginBottom={sacred_geometry_1.SACRED_SPACING.sm} marginTop={sacred_geometry_1.SACRED_SPACING.lg}>
                  Core Values
                </typography_1.Heading>
                
                <FeatureList>
                  <FeatureItem>
                    <typography_1.Text variant="body2">Expert Guidance with deep regulatory expertise</typography_1.Text>
                  </FeatureItem>
                  <FeatureItem>
                    <typography_1.Text variant="body2">Trust & Credibility backed by official credentials</typography_1.Text>
                  </FeatureItem>
                  <FeatureItem>
                    <typography_1.Text variant="body2">Empowerment through education and resources</typography_1.Text>
                  </FeatureItem>
                  <FeatureItem>
                    <typography_1.Text variant="body2">Transparency in all processes and fee structures</typography_1.Text>
                  </FeatureItem>
                </FeatureList>
                
                <layout_1.Box marginTop={sacred_geometry_1.SACRED_SPACING.lg}>
                  <button_1.Button variant="outline" size="medium" onClick={function () { return navigate('/about'); }}>
                    Learn More About Us
                  </button_1.Button>
                </layout_1.Box>
              </animation_1.SlideIn>
            </layout_1.Box>
            
            {/* Image with decorations */}
            <layout_1.Box position="relative">
              <animation_1.FadeIn delay={sacred_geometry_1.ANIMATION_TIMING.standard}>
                <ImageContainer>
                  <img src="/assets/images/hero/about-image.jpg" alt="Recovery Office team"/>
                  
                  <VesicaDecoration className="top-left">
                    <VesicaPiscis width={120} color="white"/>
                  </VesicaDecoration>
                  
                  <SpiralDecoration className="bottom-right">
                    <FibonacciSpiral iterations={8} startSize={5} showSquares={false} color="white"/>
                  </SpiralDecoration>
                </ImageContainer>
              </animation_1.FadeIn>
            </layout_1.Box>
          </GoldenSection_1.GoldenSection>
        </AboutContainer>
      </layout_1.Container>
    </section_1.Section>);
};
exports.default = HomeAbout;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
