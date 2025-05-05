"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var layout_1 = require("../../../design-system/components/layout");
var Section_1 = require("../../../design-system/components/layout/Section");
var button_1 = require("../../../design-system/components/button");
// Default steps in the service process
var DEFAULT_STEPS = [
    {
        number: 1,
        title: "Initial Consultation",
        description: "We begin with a comprehensive assessment of your situation, understanding the details of your case and identifying potential recovery paths.",
        botanical: "flowerOfLife"
    },
    {
        number: 2,
        title: "Recovery Strategy",
        description: "Our experts develop a tailored recovery strategy using sacred geometry principles to create balance in your financial reclamation journey.",
        botanical: "vesicaPiscis"
    },
    {
        number: 3,
        title: "Implementation",
        description: "We guide you through the implementation process, handling necessary documentation, communications, and regulatory requirements.",
        botanical: "flowerOfLife"
    },
    {
        number: 4,
        title: "Monitoring & Adjustment",
        description: "Throughout the recovery process, we continuously monitor progress and make adjustments to optimize your chances of success.",
        botanical: "vesicaPiscis"
    }
];
var ProcessContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xxl);
var StepCard = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: ", "px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n  \n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ", "px;\n    height: 100%;\n    background: linear-gradient(to bottom, #4a6eb3, #63a98c);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: ", "px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n  \n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ", "px;\n    height: 100%;\n    background: linear-gradient(to bottom, #4a6eb3, #63a98c);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.md);
var StepNumber = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: #4a6eb3;\n  color: white;\n  font-weight: 700;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: #4a6eb3;\n  color: white;\n  font-weight: 700;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(8), sacred_geometry_1.SACRED_SPACING.md);
var StepTitle = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  font-weight: 600;\n"], ["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  font-weight: 600;\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.md);
var StepDescription = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  line-height: ", ";\n  color: ", ";\n  margin-bottom: ", "px;\n"], ["\n  font-size: ", "px;\n  line-height: ", ";\n  color: ", ";\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.secondary; }, sacred_geometry_1.SACRED_SPACING.lg);
var BotanicalWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -", "px;\n  right: -", "px;\n  opacity: 0.1;\n  transform: rotate(", "deg);\n"], ["\n  position: absolute;\n  bottom: -", "px;\n  right: -", "px;\n  opacity: 0.1;\n  transform: rotate(", "deg);\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI * 5);
var CtaContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%);\n  padding: ", "px;\n  border-radius: ", "px;\n  color: white;\n  text-align: center;\n"], ["\n  background: linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%);\n  padding: ", "px;\n  border-radius: ", "px;\n  color: white;\n  text-align: center;\n"])), sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.md);
var CtaHeading = styled_components_1.default.h2(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n"], ["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.xl);
var CtaText = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n  max-width: ", "px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n"], ["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n  max-width: ", "px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, 700 * sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI);
/**
 * ServicesProcess Component
 *
 * Displays the step-by-step process for service delivery
 * with botanical decorations and a call to action section.
 * Layout follows sacred geometry principles.
 */
var ServicesProcess = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "#f8f9fa" : _b, _c = _a.ctaText, ctaText = _c === void 0 ? "Book a Consultation" : _c, _d = _a.ctaUrl, ctaUrl = _d === void 0 ? "/booking" : _d, customSteps = _a.customSteps;
    var steps = customSteps || DEFAULT_STEPS;
    return (<Section_1.Section backgroundColor={backgroundColor}>
      <layout_1.Container>
        <animation_1.ScrollReveal>
          <Section_1.SectionTitle title="Our Recovery Process" subtitle="How we help you reclaim your financial assets" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.VesicaPiscis size="sm" opacity={0.15}/>}/>
        </animation_1.ScrollReveal>
        
        <Section_1.SectionContent>
          <ProcessContainer>
            {steps.map(function (step, index) { return (<animation_1.ScrollReveal key={step.number} delay={index * 0.1 * sacred_geometry_1.PHI}>
                <StepCard>
                  <StepNumber>{step.number}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  
                  <BotanicalWrapper>
                    {step.botanical === 'flowerOfLife' ? (<botanical_1.FlowerOfLife size={getFibonacciByIndex(9)} opacity={0.8}/>) : (<botanical_1.VesicaPiscis size={getFibonacciByIndex(9)} opacity={0.8}/>)}
                  </BotanicalWrapper>
                </StepCard>
              </animation_1.ScrollReveal>); })}
          </ProcessContainer>
          
          <animation_1.ScrollReveal threshold={0.2}>
            <CtaContainer>
              <CtaHeading>Ready to Begin Your Recovery Journey?</CtaHeading>
              <CtaText>
                Schedule a consultation today and discover how our sacred geometry-based 
                approaches can help you achieve balance and harmony in your financial recovery.
              </CtaText>
              <button_1.Button variant="accent" size="lg" href={ctaUrl}>
                {ctaText}
              </button_1.Button>
            </CtaContainer>
          </animation_1.ScrollReveal>
        </Section_1.SectionContent>
      </layout_1.Container>
    </Section_1.Section>);
};
exports.default = ServicesProcess;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
