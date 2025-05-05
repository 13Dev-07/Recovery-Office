"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var botanical_1 = require("../design-system/botanical");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var data_display_1 = require("../design-system/components/data-display");
var animation_1 = require("../../animation");
/**
 * FAQ Page Component
 *
 * This component displays frequently asked questions organized by categories.
 * Design follows sacred geometry principles throughout with golden ratio spacing.
 */
var FAQPage = function () {
    // State for tracking which FAQ items are expanded
    var _a = useState({}), expandedItems = _a[0], setExpandedItems = _a[1];
    // Toggle expanded state of an FAQ item
    var toggleExpanded = function (id) {
        setExpandedItems(function (prev) {
            var _a;
            var _b;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = (_b = !prev[id]) !== null && _b !== void 0 ? _b : 1, _a)));
        });
    };
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1515847049296-a281d6401047?auto=format&fit=crop&w=1920&q=80';
    // FAQ Categories with questions and answers
    var faqCategories = [
        {
            id: 'general',
            title: 'General Information',
            icon: <botanical_1.FlowerOfLife size="sm" opacity={0.8}/>,
            color: '#4a6eb3',
            questions: [
                {
                    id: 'general-1',
                    question: 'What is Recovery Office?',
                    answer: 'Recovery Office is a therapeutic center that integrates sacred geometry principles into healing and recovery practices. We offer a range of services including recovery consultation, therapeutic sessions, botanical therapy, and sacred education.'
                },
                {
                    id: 'general-2',
                    question: 'What is sacred geometry and how does it relate to recovery?',
                    answer: 'Sacred geometry refers to the mathematical patterns and proportions found throughout nature. These patterns (like the golden ratio and Fibonacci sequence) create harmony and balance. We incorporate these principles in our therapeutic approaches to facilitate recovery by aligning with the natural order that exists within our bodies and the universe.'
                },
                {
                    id: 'general-3',
                    question: 'Is this approach scientifically validated?',
                    answer: 'Our approach combines traditional therapeutic techniques with principles observed throughout nature. While some aspects have been studied scientifically, we continue to conduct research to further validate and improve our methods. Our Research Director, Dr. Robert Mitchell, leads these initiatives.'
                },
                {
                    id: 'general-4',
                    question: 'Do I need prior knowledge of sacred geometry to benefit from your services?',
                    answer: 'No prior knowledge is required. Our specialists will guide you through the process and explain relevant concepts as needed. All therapeutic methods are designed to be accessible regardless of your familiarity with sacred geometry principles.'
                }
            ]
        },
        {
            id: 'services',
            title: 'Services & Treatments',
            icon: <botanical_1.OliveBranch size="sm" opacity={0.8}/>,
            color: '#63a98c',
            questions: [
                {
                    id: 'services-1',
                    question: 'Which service is right for me?',
                    answer: 'We recommend starting with a Recovery Consultation, where our specialists will assess your needs and recommend the most appropriate services. Each person\'s journey is unique, and we customize our approach accordingly.'
                },
                {
                    id: 'services-2',
                    question: 'How long are the sessions?',
                    answer: 'Session durations vary by service: Recovery Consultations are 90 minutes, Therapeutic Sessions are 60 minutes, Botanical Therapy sessions are 75 minutes, and Sacred Education sessions are 60 minutes for private sessions and 2 hours for workshops.'
                },
                {
                    id: 'services-3',
                    question: 'How many sessions will I need?',
                    answer: 'The number of sessions varies based on individual needs and goals. During your initial consultation, we\'ll discuss a recommended treatment plan and timeline. Many clients see improvements within 4-6 sessions, while others benefit from ongoing support.'
                },
                {
                    id: 'services-4',
                    question: 'Can I combine different services?',
                    answer: 'Yes, many clients benefit from a combination of our services. For example, you might participate in therapeutic sessions while also learning to apply sacred geometry principles through our educational program. Your treatment plan can be adjusted as your needs evolve.'
                }
            ]
        },
        {
            id: 'booking',
            title: 'Booking & Appointments',
            icon: <botanical_1.VesicaPiscis size="sm" opacity={0.8}/>,
            color: '#86b378',
            questions: [
                {
                    id: 'booking-1',
                    question: 'How do I schedule an appointment?',
                    answer: 'You can schedule appointments through our online booking system, by calling our office, or by submitting a request through our contact form. We aim to respond to all booking requests within 24 hours.'
                },
                {
                    id: 'booking-2',
                    question: 'What is your cancellation policy?',
                    answer: 'We request at least 24 hours\' notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee of 50% of the service price. We understand that emergencies happen and will consider circumstances on a case-by-case basis.'
                },
                {
                    id: 'booking-3',
                    question: 'Do you offer virtual sessions?',
                    answer: 'Yes, we offer virtual options for many of our services, including consultations, therapeutic sessions, and sacred education. Botanical therapy typically requires in-person visits, though we can provide guidance on home practices virtually.'
                },
                {
                    id: 'booking-4',
                    question: 'How far in advance should I book?',
                    answer: 'We recommend booking at least one week in advance to ensure availability, especially for initial consultations. For ongoing sessions, you can book multiple appointments in advance to secure your preferred time slots.'
                }
            ]
        },
        {
            id: 'payment',
            title: 'Payment & Insurance',
            icon: <botanical_1.FlowerOfLife size="sm" opacity={0.8}/>,
            color: '#d4a76a',
            questions: [
                {
                    id: 'payment-1',
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major credit cards, health savings accounts (HSA), flexible spending accounts (FSA), and cash. Payment is due at the time of service unless other arrangements have been made.'
                },
                {
                    id: 'payment-2',
                    question: 'Do you accept insurance?',
                    answer: 'We accept several major insurance plans. Please contact our office with your insurance information, and we\'ll verify your coverage and benefits before your appointment. We can also provide documentation for out-of-network reimbursement.'
                },
                {
                    id: 'payment-3',
                    question: 'Do you offer package discounts?',
                    answer: 'Yes, we offer discounted packages for clients who commit to multiple sessions. These packages can provide savings of 10-15% compared to individual session pricing. Ask about our current package options during your consultation.'
                },
                {
                    id: 'payment-4',
                    question: 'What is your pricing structure?',
                    answer: 'Our pricing varies by service. Initial consultations are $150, therapeutic sessions range from $95-$120, botanical therapy sessions are $80-$135, and sacred education sessions range from $45 for group workshops to $90 for private sessions. Detailed pricing is available on our Services page.'
                }
            ]
        }
    ];
    return (<layout_1.Box as="main">
      {/* Hero Section */}
      <feature_sections_1.Hero heading="Frequently Asked Questions" subheading="Find answers to common questions about our services and approach" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.7)'
        }} align="center" minHeight="50vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text variant="body1" style={{ maxWidth: "".concat(PHI * 400, "px"), margin: '0 auto', color: 'white' }}>
          Browse our comprehensive FAQ section to learn more about our sacred geometry-based 
          therapeutic approaches, booking process, and payment options.
        </typography_1.Text>
      </feature_sections_1.Hero>

      {/* Main FAQ Categories Section */}
      <Section_1.Section backgroundColor="#ffffff">
        <layout_1.Container>
          <Section_1.SectionTitle title="Browse by Category" subtitle="Select a topic to explore related questions" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
          <Section_1.SectionContent>
            <layout_1.Box display="grid" gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(PHI * 24, "px")} marginBottom={"".concat(PHI * 48, "px")}>
              {faqCategories.map(function (category) { return (<animation_1.ScrollReveal key={category.id}>
                  <data_display_1.Card elevation={1} padding={"".concat(PHI * 24, "px")} borderRadius="8px" style={{
                backgroundColor: 'white',
                borderTop: "4px solid ".concat(category.color)
            }}>
                    <layout_1.Box display="flex" alignItems="center" marginBottom={"".concat(PHI * 16, "px")}>
                      <layout_1.Box marginRight={"".concat(PHI * 8, "px")}>
                        {category.icon}
                      </layout_1.Box>
                      <typography_1.Heading as="h2" variant="h3">
                        {category.title}
                      </typography_1.Heading>
                    </layout_1.Box>

                    <layout_1.Box>
                      {category.questions.map(function (faq) { return (<layout_1.Box key={faq.id} marginBottom={"".concat(PHI * 16, "px")} padding={"".concat(PHI * 16, "px")} borderRadius="8px" backgroundColor="#f8f9fa">
                          <layout_1.Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer" onClick={function () { return toggleExpanded(faq.id); }}>
                            <typography_1.Heading as="h3" variant="h5" style={{ margin: 0 }}>
                              {faq.question}
                            </typography_1.Heading>
                            <layout_1.Box fontSize="24px" transition="transform 0.3s ease" transform={expandedItems[faq.id] ? 'rotate(45deg)' : 'rotate(0)'}>
                              +
                            </layout_1.Box>
                          </layout_1.Box>
                          
                          {expandedItems[faq.id] && (<animation_1.FadeIn>
                              <layout_1.Box marginTop={"".concat(PHI * 16, "px")} paddingTop={"".concat(PHI * 16, "px")} borderTop="1px solid rgba(0,0,0,0.1)">
                                <typography_1.Paragraph variant="body2">
                                  {faq.answer}
                                </typography_1.Paragraph>
                              </layout_1.Box>
                            </animation_1.FadeIn>)}
                        </layout_1.Box>); })}
                    </layout_1.Box>
                  </data_display_1.Card>
                </animation_1.ScrollReveal>); })}
            </layout_1.Box>
          </Section_1.SectionContent>
        </layout_1.Container>
      </Section_1.Section>

      {/* Still Have Questions Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#f0f4f8" style={{
            paddingTop: "".concat(PHI * 32, "px"),
            paddingBottom: "".concat(PHI * 32, "px")
        }}>
          <layout_1.Container>
            <layout_1.Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <botanical_1.VesicaPiscis size="md" opacity={0.6} style={{ marginBottom: "".concat(PHI * 16, "px") }}/>
              
              <typography_1.Heading as="h2" variant="h2" style={{ marginBottom: "".concat(PHI * 16, "px") }}>
                Still Have Questions?
              </typography_1.Heading>
              
              <typography_1.Paragraph variant="body1" style={{
            maxWidth: "".concat(PHI * 500, "px"),
            marginBottom: "".concat(PHI * 24, "px")
        }}>
                If you couldn't find the answer to your question, our team is here to help.
                Contact us directly and we'll be happy to assist you.
              </typography_1.Paragraph>
              
              <layout_1.Box display="flex" gap={"".concat(PHI * 16, "px")}>
                <button_1.Button variant="primary" size="large" href="/contact">
                  Contact Us
                </button_1.Button>
                
                <button_1.Button variant="outline" size="large" href="/booking">
                  Book a Consultation
                </button_1.Button>
              </layout_1.Box>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* FAQ Keywords Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff" style={{
            paddingTop: "".concat(PHI * 32, "px"),
            paddingBottom: "".concat(PHI * 32, "px")
        }}>
          <layout_1.Container>
            <Section_1.SectionTitle title="Common Topics" subtitle="Browse keywords related to our services and approach" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>} decoratorAfter={<botanical_1.OliveBranch size="sm" opacity={0.3} mirror/>}/>
            
            <Section_1.SectionContent>
              <layout_1.Box display="flex" flexWrap="wrap" justifyContent="center" gap={"".concat(PHI * 8, "px")}>
                {[
            'Sacred Geometry', 'Golden Ratio', 'Therapy', 'Recovery', 'Consultation',
            'Botanical Healing', 'Education', 'Sessions', 'Pricing', 'Insurance',
            'Appointments', 'Virtual Sessions', 'Packages', 'Research', 'Methods',
            'Benefits', 'Practitioners', 'Harmony', 'Balance', 'Wellbeing'
        ].map(function (keyword) { return (<layout_1.Box key={keyword} padding={"".concat(PHI * 8, "px ").concat(PHI * 16, "px")} borderRadius="full" backgroundColor="#f0f4f8" border="1px solid rgba(0,0,0,0.1)">
                    <typography_1.Text variant="body2">
                      {keyword}
                    </typography_1.Text>
                  </layout_1.Box>); })}
              </layout_1.Box>
            </Section_1.SectionContent>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>
    </layout_1.Box>);
};
exports.default = FAQPage;
