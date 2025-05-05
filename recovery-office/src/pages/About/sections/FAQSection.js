"use strict";
/**
 * FAQ Section Component
 *
 * Displays frequently asked questions about Recovery Office with
 * expandable accordions following sacred geometry principles.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Section_1 = require("../design-system/components/layout/Section");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var Text_1 = require("../../../design-system/components/typography/Text");
var layout_1 = require("../design-system/components/layout");
var button_1 = require("../design-system/components/button");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var botanical_1 = require("../design-system/botanical");
var animation_1 = require("../../animation");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to right,\n    rgba(248, 250, 252, 0.9),\n    rgba(242, 247, 250, 0.8)\n  );\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to right,\n    rgba(248, 250, 252, 0.9),\n    rgba(242, 247, 250, 0.8)\n  );\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"], ["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var FAQItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  border-radius: 8px;\n  background-color: white;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, ", ");\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  \n  &:hover {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n    transform: translateY(-", "px);\n  }\n"], ["\n  margin-bottom: ", "px;\n  border-radius: 8px;\n  background-color: white;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, ", ");\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  \n  &:hover {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n    transform: translateY(-", "px);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.isActive ? 0.08 : 0.05; }, sacred_geometry_1.SACRED_SPACING.xs * sacred_geometry_1.PHI_INVERSE);
var FAQHeader = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", "px;\n  cursor: pointer;\n  background-color: ", ";\n  border-left: ", ";\n  transition: background-color 0.3s ease, border-left 0.3s ease;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", "px;\n  cursor: pointer;\n  background-color: ", ";\n  border-left: ", ";\n  transition: background-color 0.3s ease, border-left 0.3s ease;\n"])), sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.isActive ? 'rgba(74, 110, 179, 0.05)' : 'white'; }, function (props) { return props.isActive ? '4px solid #4a6eb3' : '4px solid transparent'; });
var FAQContent = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", ";\n  max-height: ", ";\n  opacity: ", ";\n  transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.3s ease;\n  overflow: hidden;\n  border-top: ", ";\n"], ["\n  padding: ", ";\n  max-height: ", ";\n  opacity: ", ";\n  transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.3s ease;\n  overflow: hidden;\n  border-top: ", ";\n"])), function (props) { return props.isActive ? "".concat(sacred_geometry_1.SACRED_SPACING.md, "px") : '0 ${SACRED_SPACING.md}px'; }, function (props) { return props.isActive ? '500px' : '0'; }, function (props) { return props.isActive ? 1 : 0; }, function (props) { return props.isActive ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'; });
var IconButton = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n  font-size: 18px;\n  transition: background-color 0.3s ease, color 0.3s ease;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n  font-size: 18px;\n  transition: background-color 0.3s ease, color 0.3s ease;\n"])), sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI, sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI, function (props) { return props.isActive ? '#4a6eb3' : 'rgba(0, 0, 0, 0.05)'; }, function (props) { return props.isActive ? 'white' : '#555'; });
var BackgroundDecoration = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px;\n  right: ", "px;\n  opacity: 0.04;\n  transform: rotate(", "deg);\n  z-index: 0;\n"], ["\n  position: absolute;\n  bottom: ", "px;\n  right: ", "px;\n  opacity: 0.04;\n  transform: rotate(", "deg);\n  z-index: 0;\n"])), -sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl * 2, sacred_geometry_1.PHI * 10);
var faqData = [
    {
        id: 'faq-1',
        question: 'What is sacred geometry and how does it apply to recovery?',
        answer: 'Sacred geometry refers to the mathematical patterns that occur throughout nature and the universe. These patterns—like the Golden Ratio (1.618), Fibonacci sequence, and perfect symmetries—appear in everything from galaxies to seashells to the human body. At Recovery Office, we apply these principles to our therapeutic practices, creating exercises, environments, and treatment plans that align with these natural proportions. Research suggests that when therapeutic movements and environments follow these natural ratios, the body responds more effectively, potentially accelerating recovery and improving outcomes.'
    },
    {
        id: 'faq-2',
        question: 'Is your approach based on scientific evidence?',
        answer: 'Yes, our approach combines traditional evidence-based therapeutic practices with research on how sacred geometry principles affect healing and recovery. Dr. Elizabeth Harper, our founder, has published peer-reviewed research on the effects of proportional movement patterns in rehabilitation. Our research department continuously studies and documents the efficacy of our methods. While some aspects of our approach draw from traditional wisdom, we rigorously test all our methods and only implement those that demonstrate measurable benefits for our clients.'
    },
    {
        id: 'faq-3',
        question: 'What types of conditions do you typically treat?',
        answer: 'We work with a wide range of conditions including physical injuries (sports injuries, post-surgical recovery, accident rehabilitation), chronic pain conditions, neurological recovery (stroke rehabilitation, balance disorders), stress-related physical conditions, and general wellness optimization. Our unique approach has shown particular efficacy for complex conditions that haven\'t responded well to conventional approaches alone. We create customized treatment plans tailored to each client\'s specific needs, incorporating sacred geometry principles in ways most relevant to their condition.'
    },
    {
        id: 'faq-4',
        question: 'What can I expect during my first visit?',
        answer: 'Your first visit begins with a comprehensive assessment that looks beyond your immediate symptoms to understand holistic patterns affecting your condition. You\'ll meet with a therapeutic specialist who will evaluate your physical condition, movement patterns, and how your symptoms manifest. We\'ll explain how sacred geometry principles apply to your specific situation and create an initial treatment plan. You\'ll experience some introductory therapeutic techniques during this session. The appointment typically lasts 90 minutes, allowing ample time for discussion, evaluation, and introduction to our approach.'
    },
    {
        id: 'faq-5',
        question: 'Does insurance cover your services?',
        answer: 'Many of our services are eligible for insurance coverage, as they build upon evidence-based therapeutic practices. We currently accept several major insurance providers and can provide superbills for reimbursement from others. Our client relations team will verify your coverage before your first appointment and explain any potential out-of-pocket costs. Some of our specialized services that go beyond conventional therapy may not be covered by insurance; we\'ll clearly identify these in your treatment plan discussions.'
    },
    {
        id: 'faq-6',
        question: 'Do I need any special preparation before sessions?',
        answer: 'We recommend wearing comfortable clothing that allows for free movement. Arriving hydrated and having eaten a light meal 1-2 hours before your session is ideal. For your first visit, bringing any relevant medical records, imaging results, or previous treatment notes can be helpful. We also provide a pre-appointment questionnaire that helps us understand your history and goals. Most importantly, come with an open mind—our approach may differ from previous therapeutic experiences you\'ve had.'
    },
    {
        id: 'faq-7',
        question: 'How is your approach different from traditional physical therapy?',
        answer: 'While we incorporate many evidence-based techniques from traditional physical therapy, our approach differs in several key ways: 1) We integrate sacred geometry principles into movement patterns and exercises, 2) Our treatment environments are designed using these same principles to enhance healing, 3) We incorporate botanical elements that have been selected for their therapeutic properties, 4) We address not just physical symptoms but the harmonious relationship between body systems, and 5) We place greater emphasis on teaching clients how to maintain harmony in their daily movements and environments beyond our sessions.'
    }
];
var FAQSection = function () {
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var toggleFAQ = function (index) {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (<StyledSection id="faq">
      <BackgroundDecoration>
        <botanical_1.TreeOfLife size="xl"/>
      </BackgroundDecoration>
      
      <ContentContainer>
        <SectionTitle_1.SectionTitle title="Frequently Asked Questions" subtitle="Learn more about our approach and services"/>
        
        <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.lg}>
          {faqData.map(function (faq, index) { return (<animation_1.FadeIn key={faq.id} delay={index * 0.05}>
              <FAQItem isActive={activeIndex === index}>
                <FAQHeader isActive={activeIndex === index} onClick={function () { return toggleFAQ(index); }}>
                  <Text_1.Text fontSize="md" fontWeight={activeIndex === index ? '600' : '500'} style={{
                color: activeIndex === index ? '#4a6eb3' : 'inherit',
                flex: 1
            }}>
                    {faq.question}
                  </Text_1.Text>
                  <IconButton isActive={activeIndex === index}>
                    {activeIndex === index ? '−' : '+'}
                  </IconButton>
                </FAQHeader>
                <FAQContent isActive={activeIndex === index}>
                  <Text_1.Text fontSize="md" lineHeight={1.6}>
                    {faq.answer}
                  </Text_1.Text>
                </FAQContent>
              </FAQItem>
            </animation_1.FadeIn>); })}
        </layout_1.Box>
        
        <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.xl} textAlign="center" padding={"".concat(sacred_geometry_1.SACRED_SPACING.lg * sacred_geometry_1.PHI, "px ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px")} borderRadius="8px" style={{
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <Text_1.Text fontSize="lg" fontWeight="500">
            Have more questions about our approach?
          </Text_1.Text>
          <Text_1.Text fontSize="md" mt={sacred_geometry_1.SACRED_SPACING.sm} mb={sacred_geometry_1.SACRED_SPACING.md}>
            Our team is here to help you understand how sacred geometry principles can enhance your recovery journey.
          </Text_1.Text>
          <layout_1.Box display="flex" justifyContent="center" gap={sacred_geometry_1.SACRED_SPACING.md}>
            <button_1.Button variant="primary" size="medium" href="/contact">
              Contact Us
            </button_1.Button>
            <button_1.Button variant="outline" size="medium" href="/faq">
              View All FAQs
            </button_1.Button>
          </layout_1.Box>
        </layout_1.Box>
      </ContentContainer>
    </StyledSection>);
};
exports.default = FAQSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
