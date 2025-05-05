"use strict";
/**
 * Testimonials Section Component
 *
 * Showcases client testimonials with sacred geometry principles in design.
 * Uses golden ratio for layout and includes botanical elements.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var Section_1 = require("../design-system/components/layout/Section");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var Text_1 = require("../../../design-system/components/typography/Text");
var layout_1 = require("../design-system/components/layout");
var data_display_1 = require("../design-system/components/data-display");
var button_1 = require("../design-system/components/button");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var botanical_1 = require("../design-system/botanical");
var animation_1 = require("../../animation");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to bottom,\n    rgba(245, 247, 250, 0.9),\n    rgba(235, 242, 248, 0.8)\n  );\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to bottom,\n    rgba(245, 247, 250, 0.9),\n    rgba(235, 242, 248, 0.8)\n  );\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var TestimonialCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 8px;\n  padding: ", "px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease-in-out;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"], ["\n  position: relative;\n  border-radius: 8px;\n  padding: ", "px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease-in-out;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.xs);
var QuoteSymbol = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  font-size: ", "px;\n  color: rgba(74, 110, 179, 0.1);\n  font-family: serif;\n  line-height: 1;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  font-size: ", "px;\n  color: rgba(74, 110, 179, 0.1);\n  font-family: serif;\n  line-height: 1;\n"])), -sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xl * sacred_geometry_1.PHI);
var BackgroundDecoration = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.05;\n  transform: rotate(", "deg);\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.05;\n  transform: rotate(", "deg);\n  z-index: 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl, -sacred_geometry_1.SACRED_SPACING.xl * 0.5, sacred_geometry_1.PHI * 30);
var testmonialData = [
    {
        id: 'testimonial-1',
        text: "The approach at Recovery Office is unlike anything I've experienced before. The attention to detail in how they structured my therapy plan—following what they call sacred geometry principles—made a noticeable difference in my recovery time.",
        author: "Sarah M.",
        location: "Portland, OR",
        treatmentType: "Post-surgery rehabilitation",
        rating: 5,
        accentColor: "#4a6eb3"
    },
    {
        id: 'testimonial-2',
        text: "I was skeptical at first about the whole sacred geometry concept, but after just three sessions, I became a believer. There's something about the way the exercises are designed that feels intuitive to my body. My chronic pain has decreased dramatically.",
        author: "Michael L.",
        location: "Chicago, IL",
        treatmentType: "Chronic back pain",
        rating: 5,
        accentColor: "#63a98c"
    },
    {
        id: 'testimonial-3',
        text: "The team at Recovery Office truly understands the connection between mind and body healing. Their unique approach that incorporates sacred proportions into therapy has accelerated my recovery in ways traditional physical therapy never did.",
        author: "Jennifer K.",
        location: "Austin, TX",
        treatmentType: "Sports injury",
        rating: 5,
        accentColor: "#86b378"
    },
    {
        id: 'testimonial-4',
        text: "What makes Recovery Office special is how they personalize everything. My therapeutic program was designed specifically for me using golden ratio proportions, and I could feel the difference immediately. The botanical elements they incorporate also create a naturally healing environment.",
        author: "David R.",
        location: "Seattle, WA",
        treatmentType: "Stroke recovery",
        rating: 5,
        accentColor: "#b37c4a"
    },
    {
        id: 'testimonial-5',
        text: "After trying multiple traditional therapy options with limited success, I found Recovery Office. Their approach is refreshingly different and effective. The integration of sacred geometry principles into my exercise routine has improved my mobility beyond what I thought possible.",
        author: "Emma T.",
        location: "Boston, MA",
        treatmentType: "Joint rehabilitation",
        rating: 5,
        accentColor: "#5d6e8f"
    },
    {
        id: 'testimonial-6',
        text: "Recovery Office has transformed my understanding of what healing can be. The sacred geometry principles they apply might sound unusual at first, but the results speak for themselves. My recovery has been noticeably faster and more complete.",
        author: "Robert J.",
        location: "Denver, CO",
        treatmentType: "Post-accident recovery",
        rating: 5,
        accentColor: "#d4a76a"
    }
];
var TestimonialsSection = function () {
    var _a = (0, react_1.useState)(3), visibleTestimonials = _a[0], setVisibleTestimonials = _a[1];
    var handleLoadMore = function () {
        setVisibleTestimonials(Math.min(testmonialData.length, visibleTestimonials + 3));
    };
    return (<StyledSection id="testimonials">
      <BackgroundDecoration>
        <botanical_1.VesicaPiscis size="xl"/>
      </BackgroundDecoration>
      
      <ContentContainer>
        <SectionTitle_1.SectionTitle title="Client Testimonials" subtitle="Experiences from those we've helped" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
        
        <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.lg} display="grid" gridTemplateColumns={["1fr", null, "1fr 1fr", "1fr 1fr 1fr"]} gap={sacred_geometry_1.SACRED_SPACING.lg * sacred_geometry_1.PHI}>
          {testmonialData.slice(0, visibleTestimonials).map(function (testimonial, index) { return (<animation_1.FadeIn key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard elevation={3}>
                <QuoteSymbol>"</QuoteSymbol>
                <layout_1.Box position="relative" zIndex={1}>
                  <layout_1.Box display="flex" justifyContent="flex-end" mb={sacred_geometry_1.SACRED_SPACING.sm}>
                    {__spreadArray([], Array(testimonial.rating), true).map(function (_, i) { return (<span key={i} style={{ color: '#f9c846', marginLeft: '2px' }}>★</span>); })}
                  </layout_1.Box>
                  
                  <Text_1.Text fontSize="md" fontStyle="italic" mb={sacred_geometry_1.SACRED_SPACING.md}>
                    {testimonial.text}
                  </Text_1.Text>
                  
                  <layout_1.Box mt="auto" pt={sacred_geometry_1.SACRED_SPACING.sm}>
                    <layout_1.Box display="flex" alignItems="center" style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                paddingTop: sacred_geometry_1.SACRED_SPACING.sm
            }}>
                      <layout_1.Box mr={sacred_geometry_1.SACRED_SPACING.sm} width={"".concat(sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI, "px")} height={"".concat(sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI, "px")}>
                        <botanical_1.SpiralLeaf size="xs" color={testimonial.accentColor} opacity={0.8}/>
                      </layout_1.Box>
                      <layout_1.Box>
                        <Text_1.Text fontSize="md" fontWeight="600" style={{
                color: testimonial.accentColor
            }}>
                          {testimonial.author}
                        </Text_1.Text>
                        <Text_1.Text fontSize="sm" color="grey">
                          {testimonial.location} | {testimonial.treatmentType}
                        </Text_1.Text>
                      </layout_1.Box>
                    </layout_1.Box>
                  </layout_1.Box>
                </layout_1.Box>
              </TestimonialCard>
            </animation_1.FadeIn>); })}
        </layout_1.Box>
        
        {visibleTestimonials < testmonialData.length && (<layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.lg} textAlign="center">
            <button_1.Button variant="outline" size="medium" onClick={handleLoadMore}>
              Load More Testimonials
            </button_1.Button>
          </layout_1.Box>)}
        
        <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.xl * sacred_geometry_1.PHI} textAlign="center" maxWidth="800px" mx="auto" padding={sacred_geometry_1.SACRED_SPACING.lg} borderRadius="8px" style={{
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <Text_1.Text fontSize="lg" fontWeight="500">
            Our approach has helped hundreds of clients achieve faster, more complete recovery.
          </Text_1.Text>
          <Text_1.Text fontSize="md" mt={sacred_geometry_1.SACRED_SPACING.sm}>
            We're proud of our 4.9/5 average rating across 200+ verified reviews.
          </Text_1.Text>
          <button_1.Button variant="primary" size="medium" href="/testimonials" style={{ marginTop: sacred_geometry_1.SACRED_SPACING.md }}>
            Read All Testimonials
          </button_1.Button>
        </layout_1.Box>
      </ContentContainer>
    </StyledSection>);
};
exports.default = TestimonialsSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
