"use strict";
/**
 * ContactFAQ Section Component
 *
 * Displays frequently asked questions related to contacting and visiting Recovery Office.
 * Features responsive grid layout and sacred geometry proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var data_display_1 = require("../design-system/components/data-display");
var button_1 = require("../design-system/components/button");
var botanical_1 = require("../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../../animation");
// Default FAQ items related to contacting and visiting
var defaultFAQItems = [
    {
        id: 'faq-1',
        question: 'What are your hours of operation?',
        answer: 'We are open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 3:00 PM. We are closed on Sundays and major holidays.'
    },
    {
        id: 'faq-2',
        question: 'How do I schedule a consultation?',
        answer: 'You can schedule a consultation by calling our office, using our online booking system, or sending us a message through this contact form. We aim to respond to all inquiries within 24 hours.'
    },
    {
        id: 'faq-3',
        question: 'Do you accept insurance?',
        answer: 'We accept most major insurance plans. Please contact our office with your insurance information, and we will verify your coverage and benefits before your appointment.'
    },
    {
        id: 'faq-4',
        question: 'What if I need to cancel or reschedule?',
        answer: 'We understand that schedules change. We request at least 24 hours\' notice for cancellations or rescheduling. You can call our office or use our online system to make these changes.'
    }
];
var ContactFAQ = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "#ffffff" : _b, _c = _a.faqItems, faqItems = _c === void 0 ? defaultFAQItems : _c;
    return (<Section_1.Section backgroundColor={backgroundColor}>
      <layout_1.Container>
        <animation_1.ScrollReveal>
          <Section_1.SectionTitle title="Frequently Asked Questions" subtitle="Quick answers to common inquiries" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>} decoratorAfter={<botanical_1.OliveBranch size="sm" opacity={0.3} mirror/>}/>
          <Section_1.SectionContent>
            <layout_1.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              {faqItems.map(function (faq, index) { return (<animation_1.FadeIn key={faq.id} delay={index * 0.1}>
                  <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 16, "px")} borderRadius="8px" elevation={2} style={{
                height: '100%',
                borderTop: index % 2 === 0 ? '4px solid #4a6eb3' : '4px solid #86b378'
            }}>
                    <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")} style={{
                color: index % 2 === 0 ? '#4a6eb3' : '#86b378'
            }}>
                      {faq.question}
                    </typography_1.Heading>
                    <typography_1.Paragraph variant="body2">
                      {faq.answer}
                    </typography_1.Paragraph>
                  </data_display_1.Card>
                </animation_1.FadeIn>); })}
            </layout_1.Grid>
            
            <layout_1.Box textAlign="center" marginTop={"".concat(sacred_geometry_1.PHI * 32, "px")}>
              <typography_1.Paragraph variant="body1" marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                Have more questions? We're here to help.
              </typography_1.Paragraph>
              <button_1.Button variant="secondary" size="medium" href="/faq">
                View All FAQs
              </button_1.Button>
            </layout_1.Box>
          </Section_1.SectionContent>
        </animation_1.ScrollReveal>
      </layout_1.Container>
    </Section_1.Section>);
};
exports.default = ContactFAQ;
