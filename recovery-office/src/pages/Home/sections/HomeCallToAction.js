"use strict";
/**
 * HomeCallToAction Component
 *
 * Displays a compelling call-to-action section on the home page,
 * encouraging users to book a consultation while incorporating
 * sacred geometry principles for layout and design.
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
var section_1 = require("../../../components/section");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var sacred_geometry_2 = require("../../../constants/sacred-geometry");
// Styled components
var CTAContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: ", "px 0;\n  border-radius: ", "px;\n  overflow: hidden;\n  background: linear-gradient(135deg, \n    rgba(10, 64, 33, 0.95) 0%, \n    rgba(26, 104, 69, 0.95) ", "%, \n    rgba(44, 130, 98, 0.95) 100%);\n  box-shadow: 0 ", "px ", "px rgba(10, 64, 33, 0.2);\n"], ["\n  position: relative;\n  padding: ", "px 0;\n  border-radius: ", "px;\n  overflow: hidden;\n  background: linear-gradient(135deg, \n    rgba(10, 64, 33, 0.95) 0%, \n    rgba(26, 104, 69, 0.95) ", "%, \n    rgba(44, 130, 98, 0.95) 100%);\n  box-shadow: 0 ", "px ", "px rgba(10, 64, 33, 0.2);\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI_INVERSE * 10, sacred_geometry_1.PHI_INVERSE * 100, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xl);
var CTAContent = (0, styled_components_1.default)(layout_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: ", "px;\n"], ["\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var CTAButtons = (0, styled_components_1.default)(layout_1.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  justify-content: center;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    \n    > button {\n      width: 100%;\n      max-width: 300px;\n      margin-bottom: ", "px;\n    }\n  }\n"], ["\n  justify-content: center;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    \n    > button {\n      width: 100%;\n      max-width: 300px;\n      margin-bottom: ", "px;\n    }\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.sm);
var BotanicalDecoration = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  \n  &.top-right {\n    top: -", "px;\n    right: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n  \n  &.bottom-left {\n    bottom: -", "px;\n    left: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n"], ["\n  position: absolute;\n  z-index: 1;\n  \n  &.top-right {\n    top: -", "px;\n    right: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n  \n  &.bottom-left {\n    bottom: -", "px;\n    left: -", "px;\n    transform: rotate(", "deg);\n    opacity: 0.15;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, 45, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, -45);
/**
 * HomeCallToAction Component
 *
 * A compelling call-to-action section encouraging users to book a consultation,
 * designed with sacred geometry principles for proportions and visual harmony.
 */
var HomeCallToAction = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleBookingClick = function () {
        navigate('/booking');
    };
    var handleContactClick = function () {
        navigate('/contact');
    };
    return (<section_1.Section backgroundStyle="none" paddingTop={sacred_geometry_1.SACRED_SPACING.xxl} paddingBottom={sacred_geometry_1.SACRED_SPACING.xxl} id="cta">
      <layout_1.Container>
        <animation_1.FadeIn delay={sacred_geometry_2.ANIMATION_TIMING.quick}>
          <CTAContainer>
            {/* Botanical decorations */}
            <BotanicalDecoration className="top-right">
              <botanical_1.VesicaPiscis width={300} color="white"/>
            </BotanicalDecoration>
            
            <BotanicalDecoration className="bottom-left">
              <botanical_1.OliveBranch width={280} color="white"/>
            </BotanicalDecoration>
            
            <CTAContent>
              <animation_1.SlideIn direction="top" delay={sacred_geometry_2.ANIMATION_TIMING.quick}>
                <typography_1.Heading as="h2" variant="h2" marginBottom={sacred_geometry_1.SACRED_SPACING.md}>
                  Begin Your Recovery Journey Today
                </typography_1.Heading>
              </animation_1.SlideIn>
              
              <animation_1.SlideIn direction="top" delay={sacred_geometry_2.ANIMATION_TIMING.standard}>
                <typography_1.Paragraph variant="body1" maxWidth={"".concat(sacred_geometry_1.PHI * 500, "px")} margin="0 auto">
                  Take the first step toward reclaiming your financial assets with our expert guidance.
                  Book a confidential consultation to discuss your situation and explore recovery options.
                </typography_1.Paragraph>
              </animation_1.SlideIn>
              
              <layout_1.Box marginTop={sacred_geometry_1.SACRED_SPACING.lg} display="flex" justifyContent="center" alignItems="center">
                <layout_1.Box padding={"".concat(sacred_geometry_1.SACRED_SPACING.sm, "px ").concat(sacred_geometry_1.SACRED_SPACING.md, "px")} backgroundColor="rgba(255,255,255,0.2)" borderRadius={sacred_geometry_1.PHI_INVERSE * 10} maxWidth={"".concat(getFibonacciByIndex(11), "px")} // 89px
    >
                  <typography_1.Text variant="caption" fontStyle="italic">
                    "Recovery Office helped me recover 85% of my assets lost to investment fraud."
                  </typography_1.Text>
                </layout_1.Box>
              </layout_1.Box>
              
              <CTAButtons>
                <button_1.Button variant="light" size="large" onClick={handleBookingClick}>
                  Book a Consultation
                </button_1.Button>
                
                <button_1.Button variant="outline" size="large" onClick={handleContactClick} style={{ color: 'white', borderColor: 'white' }}>
                  Contact Us
                </button_1.Button>
              </CTAButtons>
              
              <typography_1.Text variant="caption" marginTop={sacred_geometry_1.SACRED_SPACING.md}>
                No upfront fees. Initial consultations are confidential and obligation-free.
              </typography_1.Text>
            </CTAContent>
          </CTAContainer>
        </animation_1.FadeIn>
      </layout_1.Container>
    </section_1.Section>);
};
exports.default = HomeCallToAction;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
