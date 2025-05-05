"use strict";
/**
 * HomeServices Component
 *
 * Displays services section on the home page with sacred geometry principles
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
var typography_1 = require("../../../design-system/components/typography");
var button_1 = require("../../../design-system/components/button");
var data_display_1 = require("../../../design-system/components/data-display");
var section_1 = require("../../../components/section");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Styled components
var ServiceCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  border-top: 3px solid ", ";\n  border-radius: ", "px;\n  overflow: hidden;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  border-top: 3px solid ", ";\n  border-radius: ", "px;\n  overflow: hidden;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"])), sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, function (props) { return props.$accentColor; }, sacred_geometry_1.PHI_INVERSE * 10, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.SACRED_SPACING.md);
var ServiceIconContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  margin-bottom: ", "px;\n  \n  img {\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  margin-bottom: ", "px;\n  \n  img {\n    width: ", "px;\n    height: ", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg);
var BotanicalDecoration = (0, styled_components_1.default)(layout_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.07;\n  \n  &.top-right {\n    top: ", "px;\n    right: ", "px;\n    transform: rotate(", "deg);\n  }\n  \n  &.bottom-left {\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(", "deg);\n  }\n"], ["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.07;\n  \n  &.top-right {\n    top: ", "px;\n    right: ", "px;\n    transform: rotate(", "deg);\n  }\n  \n  &.bottom-left {\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(", "deg);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg, 45, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg, -45);
/**
 * HomeServices Component
 *
 * Showcases the company's services using sacred geometry principles
 * for layout proportions, animations, and visual harmony.
 */
var HomeServices = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // Services data
    var services = [
        {
            id: 'service-1',
            title: 'Recovery Consultation',
            description: 'Expert guidance through the financial recovery process with personalized strategies based on your unique situation.',
            icon: '/assets/icons/consultation.svg',
            link: '/services#recovery-consultation',
            color: '#0A4021' // primary.dark
        },
        {
            id: 'service-2',
            title: 'Investment Fraud Recovery',
            description: 'Specialized assistance in recovering assets from investment scams, Ponzi schemes, and securities fraud.',
            icon: '/assets/icons/investment.svg',
            link: '/services#investment-fraud',
            color: '#1A6845' // primary.main
        },
        {
            id: 'service-3',
            title: 'Regulatory Compliance',
            description: 'Navigate complex regulatory frameworks to ensure your recovery process follows all legal requirements.',
            icon: '/assets/icons/compliance.svg',
            link: '/services#regulatory-compliance',
            color: '#2C8262' // primary.light
        },
        {
            id: 'service-4',
            title: 'Digital Asset Recovery',
            description: 'Specialized techniques for recovering cryptocurrency and digital assets lost to fraud or theft.',
            icon: '/assets/icons/digital.svg',
            link: '/services#digital-recovery',
            color: '#0A4021' // primary.dark
        }
    ];
    var handleServiceClick = function (link) {
        navigate(link);
    };
    return (<section_1.Section backgroundStyle="light" paddingTop={sacred_geometry_1.SACRED_SPACING.xxl} paddingBottom={sacred_geometry_1.SACRED_SPACING.xxl} id="services">
      <layout_1.Container>
        <layout_1.Box position="relative">
          {/* Botanical decorations */}
          <BotanicalDecoration className="top-right">
            <botanical_1.FlowerOfLife width={200} opacity={0.15}/>
          </BotanicalDecoration>
          
          <BotanicalDecoration className="bottom-left">
            <botanical_1.OliveBranch width={180} opacity={0.15}/>
          </BotanicalDecoration>
          
          {/* Section heading */}
          <animation_1.ScrollReveal>
            <section_1.SectionHeading title="Our Services" subtitle="Expert financial recovery solutions guided by sacred principles" alignment="center" size="large" decoration="botanical" marginBottom={sacred_geometry_1.SACRED_SPACING.xl}/>
          </animation_1.ScrollReveal>
          
          {/* Services grid - using Fibonacci sequence for spacing */}
          <layout_1.Grid gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)'
        }} gap={sacred_geometry_1.SACRED_SPACING.lg} marginTop={sacred_geometry_1.SACRED_SPACING.xl}>
            {services.map(function (service, index) { return (<animation_1.ScaleFade key={service.id} delay={sacred_geometry_1.ANIMATION_TIMING.quick * (index % 4)} duration={sacred_geometry_1.ANIMATION_TIMING.standard}>
                <ServiceCard $accentColor={service.color} onClick={function () { return handleServiceClick(service.link); }} padding={sacred_geometry_1.SACRED_SPACING.lg} cursor="pointer">
                  <ServiceIconContainer backgroundColor={"".concat(service.color, "1A")} // 10% opacity
        >
                    <img src={service.icon} alt={service.title}/>
                  </ServiceIconContainer>
                  
                  <typography_1.Heading as="h3" variant="h4" marginBottom={sacred_geometry_1.SACRED_SPACING.sm}>
                    {service.title}
                  </typography_1.Heading>
                  
                  <typography_1.Paragraph variant="body2" marginBottom={sacred_geometry_1.SACRED_SPACING.md}>
                    {service.description}
                  </typography_1.Paragraph>
                  
                  <typography_1.Text variant="caption" color="primary.main" fontWeight="medium">
                    Learn more →
                  </typography_1.Text>
                </ServiceCard>
              </animation_1.ScaleFade>); })}
          </layout_1.Grid>
          
          {/* Call to action */}
          <layout_1.Box display="flex" justifyContent="center" marginTop={sacred_geometry_1.SACRED_SPACING.xl * sacred_geometry_1.PHI} // Golden ratio enhanced spacing
    >
            <animation_1.FadeIn delay={sacred_geometry_1.ANIMATION_TIMING.standard}>
              <button_1.Button variant="primary" size="large" onClick={function () { return navigate('/services'); }}>
                Explore All Services
              </button_1.Button>
            </animation_1.FadeIn>
          </layout_1.Box>
        </layout_1.Box>
      </layout_1.Container>
    </section_1.Section>);
};
exports.default = HomeServices;
var templateObject_1, templateObject_2, templateObject_3;
