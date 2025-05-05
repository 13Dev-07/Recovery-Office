"use strict";
/**
 * ContactTestimonials Section Component
 *
 * Displays selected testimonials related to client experience using sacred geometry principles.
 * Features carousel layout and botanical decorations.
 */
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
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var data_display_1 = require("../design-system/components/data-display");
var button_1 = require("../design-system/components/button");
var botanical_1 = require("../design-system/botanical");
var animation_1 = require("../../animation");
// Default testimonials with focus on client experience
var defaultTestimonials = [
    {
        id: 't1',
        text: "From the moment I reached out to Recovery Office, their care and attention to detail was evident. The team took time to understand my needs before my first session, and the intake process was seamless. Their communication is excellent!",
        author: "Rebecca M.",
        location: "Oakland, CA",
        experience: "First-time client",
        rating: 5
    },
    {
        id: 't2',
        text: "I was hesitant to try a therapy approach based on sacred geometry, but the team at Recovery Office made the introduction so welcoming. They respond quickly to all messages and are incredibly accommodating with scheduling.",
        author: "Michael K.",
        location: "Golden Springs, CA",
        experience: "Regular client - 6 months",
        rating: 5
    },
    {
        id: 't3',
        text: "What impressed me most about Recovery Office was how personalized the entire experience felt. From my first phone call to ongoing sessions, they remember small details and tailor everything to my specific needs.",
        author: "Sophia J.",
        location: "San Francisco, CA",
        experience: "Long-term client - 2 years",
        rating: 5
    }
];
// Testimonial Card component
var TestimonialCard = function (_a) {
    var testimonial = _a.testimonial;
    return (<data_display_1.Card elevation={2} padding={"".concat(PHI * 24, "px")} borderRadius="8px" style={{
            position: 'relative',
            backgroundColor: 'white',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
    {/* Quote symbol */}
    <layout_1.Box position="absolute" top={"".concat(PHI * 8, "px")} left={"".concat(PHI * 8, "px")} fontSize={"".concat(PHI * PHI * 20, "px")} lineHeight="1" style={{
            fontFamily: 'serif',
            color: 'rgba(74, 110, 179, 0.1)'
        }}>
      "
    </layout_1.Box>
    
    {/* Rating stars */}
    <layout_1.Box display="flex" justifyContent="flex-end" mb={"".concat(PHI * 8, "px")}>
      {__spreadArray([], Array(testimonial.rating), true).map(function (_, i) { return (<typography_1.Text key={"star-".concat(i)} style={{ color: '#f9c846', marginLeft: '2px', fontSize: '18px' }}>★</typography_1.Text>); })}
    </layout_1.Box>
    
    {/* Testimonial text */}
    <typography_1.Text variant="body2" fontSize="md" fontStyle="italic" mb={"".concat(PHI * 16, "px")} pl={"".concat(PHI * 8, "px")} style={{
            flex: 1
        }}>
      {testimonial.text}
    </typography_1.Text>
    
    {/* Author information */}
    <layout_1.Box pt={"".concat(PHI * 8, "px")} style={{
            borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
      <typography_1.Text variant="subtitle2" fontWeight="600" color="#4a6eb3">
        {testimonial.author}
      </typography_1.Text>
      <typography_1.Text variant="body2" fontSize="sm" color="gray.600">
        {testimonial.location} • {testimonial.experience}
      </typography_1.Text>
    </layout_1.Box>
  </data_display_1.Card>);
};
var ContactTestimonials = function (_a) {
    var _b, _c;
    var _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "#ffffff" : _d, _e = _a.testimonials, testimonials = _e === void 0 ? defaultTestimonials : _e;
    var _f = (0, react_1.useState)(0), activeIndex = _f[0], setActiveIndex = _f[1];
    // Calculate total number of testimonials
    var testimonialCount = testimonials.length;
    // Handle next testimonial
    var handleNext = (0, react_1.useCallback)(function () {
        setActiveIndex(function (prevIndex) { return (prevIndex + 1) % testimonialCount; });
    }, [testimonialCount]);
    // Handle previous testimonial
    var handlePrev = (0, react_1.useCallback)(function () {
        setActiveIndex(function (prevIndex) { return (prevIndex - 1 + testimonialCount) % testimonialCount; });
    }, [testimonialCount]);
    return (<Section_1.Section backgroundColor={backgroundColor}>
      <layout_1.Container>
        <animation_1.ScrollReveal>
          <layout_1.Box position="relative">
            {/* Decorative botanical element */}
            <layout_1.Box position="absolute" top={"".concat(-PHI * 30, "px")} right={"".concat(-PHI * 20, "px")} opacity={0.05} zIndex={0}>
              <botanical_1.OliveBranch size="xl"/>
            </layout_1.Box>
            
            <Section_1.SectionTitle title="Client Experiences" subtitle="What our clients say about working with us" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
            
            <Section_1.SectionContent>
              {/* Mobile view - single testimonial with navigation */}
              <layout_1.Box display={['block', null, 'none']} position="relative">
                <animation_1.FadeIn key={(_b = testimonials[activeIndex]) !== null && _b !== void 0 ? _b : 1.} id/>}>
                  <TestimonialCard testimonial={(_c = testimonials[activeIndex]) !== null && _c !== void 0 ? _c : 1}/>
                </animation_1.FadeIn>
                
                {/* Navigation controls */}
                <layout_1.Box display="flex" justifyContent="center" mt={"".concat(PHI * 16, "px")} gap={"".concat(PHI * 8, "px")}>
                  <button_1.Button variant="outline" size="small" onClick={handlePrev} aria-label="Previous testimonial">
                    Previous
                  </button_1.Button>
                  
                  <button_1.Button variant="outline" size="small" onClick={handleNext} aria-label="Next testimonial">
                    Next
                  </button_1.Button>
                </layout_1.Box>
              </></layout_1.Box>
              
              {/* Tablet/Desktop view - all testimonials in grid */}
              <layout_1.Box display={['none', null, 'grid']} gridTemplateColumns={"repeat(".concat(testimonials.length, ", 1fr)")} gap={"".concat(PHI * 24, "px")}>
                {testimonials.map(function (testimonial) { return (<animation_1.FadeIn key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial}/>
                  </animation_1.FadeIn>); })}
              </layout_1.Box>
              
              {/* Call to action */}
              <layout_1.Box mt={"".concat(PHI * 32, "px")} textAlign="center">
                <button_1.Button variant="secondary" size="medium" as="a" href="/testimonials" aria-label="View all client testimonials">
                  View All Testimonials
                </button_1.Button>
              </layout_1.Box>
            </Section_1.SectionContent>
          </layout_1.Box>
        </animation_1.ScrollReveal>);
};
layout_1.Container >
;
Section_1.Section >
;
;
;
exports.default = ContactTestimonials;
