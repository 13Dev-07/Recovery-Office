"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * HomeTestimonials Component
 *
 * Displays client testimonials on the home page using sacred geometry principles
 * for layout, animations, and design. Implements a carousel for multiple testimonials.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var layout_1 = require("../../../design-system/components/layout");
var typography_1 = require("../../../design-system/components/typography");
var button_1 = require("../../../design-system/components/button");
var section_1 = require("../../../components/section");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var sacred_geometry_2 = require("../../../constants/sacred-geometry");
// Styled components
var TestimonialsContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var TestimonialCarousel = (0, styled_components_1.default)(layout_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n  overflow: hidden;\n"])), 1200);
var TestimonialSlider = (0, styled_components_1.default)(layout_1.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  transform: translateX(-", "%);\n  transition: transform 0.6s cubic-bezier(", ");\n"], ["\n  display: flex;\n  transform: translateX(-", "%);\n  transition: transform 0.6s cubic-bezier(", ");\n"])), function (props) { return props.$translate; }, sacred_geometry_1.SACRED_EASINGS.standard.join(', '));
var TestimonialCard = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 0 0 100%;\n  padding: ", "px;\n  \n  @media (min-width: 768px) {\n    flex: 0 0 50%;\n  }\n  \n  @media (min-width: 1024px) {\n    flex: 0 0 ", "%; /* Golden ratio proportion */\n  }\n"], ["\n  flex: 0 0 100%;\n  padding: ", "px;\n  \n  @media (min-width: 768px) {\n    flex: 0 0 50%;\n  }\n  \n  @media (min-width: 1024px) {\n    flex: 0 0 ", "%; /* Golden ratio proportion */\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg, 100 * sacred_geometry_1.PHI_INVERSE);
var TestimonialContent = (0, styled_components_1.default)(layout_1.Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: white;\n  padding: ", "px;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  position: relative;\n"], ["\n  background: white;\n  padding: ", "px;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  position: relative;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI_INVERSE * 10, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.md);
var QuoteIcon = (0, styled_components_1.default)(layout_1.Box)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  color: var(--color-primary-light);\n  opacity: 0.2;\n  font-size: ", "px;\n  font-family: Georgia, serif;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  color: var(--color-primary-light);\n  opacity: 0.2;\n  font-size: ", "px;\n  font-family: Georgia, serif;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xl);
var AuthorContainer = (0, styled_components_1.default)(layout_1.Flex)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: ", "px;\n  align-items: center;\n"], ["\n  margin-top: ", "px;\n  align-items: center;\n"])), sacred_geometry_1.SACRED_SPACING.lg);
var AuthorImage = styled_components_1.default.img(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: ", "px;\n  border: 2px solid var(--color-primary-light);\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: ", "px;\n  border: 2px solid var(--color-primary-light);\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md);
var RatingContainer = (0, styled_components_1.default)(layout_1.Flex)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.sm);
var StarIcon = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: 2px;\n"], ["\n  color: ", ";\n  margin-right: 2px;\n"])), function (props) { return props.$active ? 'var(--color-warning-main)' : 'var(--color-gray-300)'; });
var CarouselControls = (0, styled_components_1.default)(layout_1.Flex)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  justify-content: center;\n  margin-top: ", "px;\n"], ["\n  justify-content: center;\n  margin-top: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var CarouselDot = styled_components_1.default.button(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  border: none;\n  background-color: ", ";\n  margin: 0 ", "px;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  border: none;\n  background-color: ", ";\n  margin: 0 ", "px;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.$active ? 'var(--color-primary-main)' : 'var(--color-gray-300)'; }, sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.$active ? 'var(--color-primary-dark)' : 'var(--color-gray-400)'; });
var CarouselButton = (0, styled_components_1.default)(button_1.Button)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  min-width: unset;\n  margin: 0 ", "px;\n"], ["\n  padding: ", "px ", "px;\n  min-width: unset;\n  margin: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.SACRED_SPACING.sm);
var BotanicalDecoration = (0, styled_components_1.default)(layout_1.Box)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.1;\n  \n  &.top-right {\n    top: ", "px;\n    right: ", "px;\n    transform: rotate(", "deg);\n  }\n  \n  &.bottom-left {\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(", "deg);\n  }\n"], ["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.1;\n  \n  &.top-right {\n    top: ", "px;\n    right: ", "px;\n    transform: rotate(", "deg);\n  }\n  \n  &.bottom-left {\n    bottom: ", "px;\n    left: ", "px;\n    transform: rotate(", "deg);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.md, 45, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.md, -45);
/**
 * HomeTestimonials Component
 *
 * Showcases client testimonials using sacred geometry principles
 * for layout proportions, animations, and visual harmony.
 */
var HomeTestimonials = function () {
    // Sample testimonials data
    var testimonials = [
        {
            id: 't1',
            quote: "Recovery Office provided exceptional guidance throughout my financial recovery journey. Their expertise in regulatory frameworks and commitment to transparency made all the difference in reclaiming my assets.",
            author: "Michael J.",
            position: "Small Business Owner",
            company: "Crafted Designs",
            imageUrl: "/assets/images/testimonials/testimonial-1.jpg",
            rating: 5
        },
        {
            id: 't2',
            quote: "After losing significant investments to a sophisticated scam, I was devastated. The team at Recovery Office not only helped me recover 80% of my assets but also educated me on protecting myself from future fraud.",
            author: "Sarah L.",
            position: "Investment Professional",
            company: "Financial Horizons",
            imageUrl: "/assets/images/testimonials/testimonial-2.jpg",
            rating: 5
        },
        {
            id: 't3',
            quote: "What impressed me most about Recovery Office was their holistic approach. They didn't just focus on the recovery process but ensured I understood every step and gained knowledge to prevent future problems.",
            author: "James T.",
            position: "Retired Teacher",
            company: "",
            imageUrl: "/assets/images/testimonials/testimonial-3.jpg",
            rating: 4
        },
        {
            id: 't4',
            quote: "The professionalism and expertise of Recovery Office are unmatched. They navigated complex regulatory requirements with ease and recovered funds I thought were permanently lost to cryptocurrency fraud.",
            author: "Elena R.",
            position: "Technology Entrepreneur",
            company: "InnovateTech",
            imageUrl: "/assets/images/testimonials/testimonial-4.jpg",
            rating: 5
        }
    ];
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = (0, react_1.useState)(0), translate = _b[0], setTranslate = _b[1];
    // Calculate how many testimonials to show at once based on screen size
    var _c = (0, react_1.useState)(1), itemsPerView = _c[0], setItemsPerView = _c[1];
    // Update items per view based on window size
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3); // Show 3 on large screens (using golden ratio proportions)
            }
            else if (window.innerWidth >= 768) {
                setItemsPerView(2); // Show 2 on medium screens
            }
            else {
                setItemsPerView(1); // Show 1 on small screens
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Update translate when current index changes
    (0, react_1.useEffect)(function () {
        setTranslate(currentIndex * (100 / itemsPerView));
    }, [currentIndex, itemsPerView]);
    // Handle navigation
    var goToPrev = function () {
        setCurrentIndex(function (prev) { return (prev > 0 ? prev - 1 : 0); });
    };
    var goToNext = function () {
        setCurrentIndex(function (prev) { return (prev < testimonials.length - itemsPerView ? prev + 1 : prev); });
    };
    var goToSlide = function (index) {
        setCurrentIndex(index);
    };
    // Generate rating stars
    var renderRating = function (rating) {
        var stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(<StarIcon key={i} $active={i < rating}>★</StarIcon>);
        }
        return stars;
    };
    return (<section_1.Section backgroundStyle="light" paddingTop={sacred_geometry_1.SACRED_SPACING.xxl} paddingBottom={sacred_geometry_1.SACRED_SPACING.xxl} id="testimonials">
      <layout_1.Container>
        <TestimonialsContainer>
          {/* Botanical decorations */}
          <BotanicalDecoration className="top-right">
            <botanical_1.FlowerOfLife width={150}/>
          </BotanicalDecoration>
          
          <BotanicalDecoration className="bottom-left">
            <botanical_1.OliveLeaf width={120}/>
          </BotanicalDecoration>
          
          {/* Section heading */}
          <animation_1.ScrollReveal>
            <section_1.SectionHeading title="Client Testimonials" subtitle="Hear from those we've helped recover their financial assets" alignment="center" size="large" decoration="line" marginBottom={sacred_geometry_1.SACRED_SPACING.xl}/>
          </animation_1.ScrollReveal>
          
          {/* Testimonials carousel */}
          <TestimonialCarousel>
            <TestimonialSlider $translate={translate}>
              {testimonials.map(function (testimonial, index) { return (<TestimonialCard key={testimonial.id}>
                  <animation_1.FadeIn delay={sacred_geometry_2.ANIMATION_TIMING.quick * (index % 3)}>
                    <TestimonialContent>
                      <QuoteIcon>"</QuoteIcon>
                      
                      <typography_1.Paragraph variant="body1" style={{ fontStyle: 'italic' }}>
                        {testimonial.quote}
                      </typography_1.Paragraph>
                      
                      <RatingContainer>
                        {renderRating(testimonial.rating)}
                      </RatingContainer>
                      
                      <AuthorContainer>
                        <AuthorImage src={testimonial.imageUrl} alt={testimonial.author}/>
                        <layout_1.Box>
                          <typography_1.Text variant="h6" fontWeight="bold">
                            {testimonial.author}
                          </typography_1.Text>
                          <typography_1.Text variant="caption" color="gray.600">
                            {testimonial.position}
                            {testimonial.company && ", ".concat(testimonial.company)}
                          </typography_1.Text>
                        </layout_1.Box>
                      </AuthorContainer>
                    </TestimonialContent>
                  </animation_1.FadeIn>
                </TestimonialCard>); })}
            </TestimonialSlider>
          </TestimonialCarousel>
          
          {/* Carousel controls */}
          <CarouselControls>
            <CarouselButton variant="outline" size="small" onClick={goToPrev} disabled={currentIndex === 0}>
              ←
            </CarouselButton>
            
            {Array.from({ length: testimonials.length - itemsPerView + 1 }).map(function (_, index) { return (<CarouselDot key={index} $active={currentIndex === index} onClick={function () { return goToSlide(index); }}/>); })}
            
            <CarouselButton variant="outline" size="small" onClick={goToNext} disabled={currentIndex >= testimonials.length - itemsPerView}>
              →
            </CarouselButton>
          </CarouselControls>
        </TestimonialsContainer>
      </layout_1.Container>
    </section_1.Section>);
};
exports.default = HomeTestimonials;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
