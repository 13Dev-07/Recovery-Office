"use strict";
/**
 * Testimonials Component
 *
 * A feature section for displaying client testimonials in golden ratio cards with
 * sacred geometry spacing and proportions. Includes support for various display styles
 * and botanical accents.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Section_1 = require("../layout/Section");
var Card_1 = require("../data-display/Card");
var Text_1 = require("../typography/Text");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
var Button_1 = require("../button/Button");
// Section container with background styling
var TestimonialsSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"])), function (props) { return props.$backgroundColor || 'transparent'; }, (0, utils_1.getFibonacciByIndex)(8));
// Grid container for testimonials using golden ratio proportions
var TestimonialsGrid = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n    gap: ", "px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n    gap: ", "px;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(9), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(7), function (props) { return props.theme.breakpoints.md; }, (0, utils_1.getFibonacciByIndex)(8), (0, utils_1.getFibonacciByIndex)(5));
// Individual testimonial card with golden ratio proportions
var TestimonialCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Use golden ratio for content/footer proportion */\n  padding: ", "px;\n  \n  /* Accent bar on left side if color provided */\n  ", "\n  \n  /* Use golden ratio for optimal line height */\n  line-height: ", ";\n  \n  /* Box shadow adheres to Fibonacci sequence */\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  \n  /* Hover effect with sacred geometry timing */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"], ["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Use golden ratio for content/footer proportion */\n  padding: ", "px;\n  \n  /* Accent bar on left side if color provided */\n  ", "\n  \n  /* Use golden ratio for optimal line height */\n  line-height: ", ";\n  \n  /* Box shadow adheres to Fibonacci sequence */\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  \n  /* Hover effect with sacred geometry timing */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), function (props) { return props.$accentColor && "\n    border-left: 3px solid ".concat(props.$accentColor, ";\n  "); }, sacred_geometry_1.PHI, (0, utils_1.getFibonacciByIndex)(2), (0, utils_1.getFibonacciByIndex)(5), sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, (0, utils_1.getFibonacciByIndex)(2));
// Quote icon with sacred proportions
var QuoteIcon = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.1;\n  font-size: ", "px;\n  line-height: 1;\n  \n  /* Use golden ratio for width/height proportion */\n  width: ", "px;\n  height: ", "px;\n"], ["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.1;\n  font-size: ", "px;\n  line-height: 1;\n  \n  /* Use golden ratio for width/height proportion */\n  width: ", "px;\n  height: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(4), (0, utils_1.getFibonacciByIndex)(4), (0, utils_1.getFibonacciByIndex)(7), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(6) * sacred_geometry_1.PHI_INVERSE);
// Content area with proper spacing
var TestimonialContent = (0, styled_components_1.default)(Text_1.Text)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  margin-bottom: ", "px;\n  position: relative;\n  z-index: 1;\n  \n  /* Adding quotation marks with sacred spacing */\n  &::before {\n    content: '\"';\n    position: absolute;\n    top: -", "px;\n    left: -", "px;\n    font-size: ", "px;\n    opacity: 0.2;\n    font-family: serif;\n  }\n"], ["\n  flex: 1;\n  margin-bottom: ", "px;\n  position: relative;\n  z-index: 1;\n  \n  /* Adding quotation marks with sacred spacing */\n  &::before {\n    content: '\"';\n    position: absolute;\n    top: -", "px;\n    left: -", "px;\n    font-size: ", "px;\n    opacity: 0.2;\n    font-family: serif;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(5), (0, utils_1.getFibonacciByIndex)(5), (0, utils_1.getFibonacciByIndex)(3), (0, utils_1.getFibonacciByIndex)(7));
// Author section with golden ratio spacing
var AuthorSection = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: auto;\n  padding-top: ", "px;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: auto;\n  padding-top: ", "px;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n"])), (0, utils_1.getFibonacciByIndex)(5));
// Author image container with golden circle
var AuthorImageContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: ", "px;\n  flex-shrink: 0;\n  \n  /* Golden ratio box shadow */\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: ", "px;\n  flex-shrink: 0;\n  \n  /* Golden ratio box shadow */\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n"])), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(4), (0, utils_1.getFibonacciByIndex)(1), (0, utils_1.getFibonacciByIndex)(3));
// Author name with proper typography
var AuthorName = (0, styled_components_1.default)(Text_1.Text)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-weight: 600;\n"], ["\n  font-weight: 600;\n"])));
// Author role with decreased opacity using golden ratio
var AuthorRole = (0, styled_components_1.default)(Text_1.Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  opacity: ", ";\n"], ["\n  opacity: ", ";\n"])), sacred_geometry_1.PHI_INVERSE);
// Star rating component with Fibonacci spacing
var RatingContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  margin-bottom: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(4));
var Star = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: ", "px;\n"], ["\n  color: ", ";\n  margin-right: ", "px;\n"])), function (props) { return props.$filled ? '#FFD700' : '#E0E0E0'; }, (0, utils_1.getFibonacciByIndex)(2));
// Call-to-action container with centered alignment
var CTAContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(7));
// Carousel container with proper sizing
var CarouselContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  overflow-x: auto;\n  margin: ", "px -", "px 0;\n  padding: 0 ", "px;\n  scroll-snap-type: x mandatory;\n  \n  /* Hide scrollbar while maintaining functionality */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  /* Apply Fibonacci spacing between carousel items */\n  & > * {\n    margin-right: ", "px;\n    min-width: 80%;\n    scroll-snap-align: center;\n    \n    @media (min-width: ", ") {\n      min-width: 60%;\n    }\n    \n    @media (min-width: ", ") {\n      min-width: 40%;\n    }\n    \n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"], ["\n  display: flex;\n  overflow-x: auto;\n  margin: ", "px -", "px 0;\n  padding: 0 ", "px;\n  scroll-snap-type: x mandatory;\n  \n  /* Hide scrollbar while maintaining functionality */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  /* Apply Fibonacci spacing between carousel items */\n  & > * {\n    margin-right: ", "px;\n    min-width: 80%;\n    scroll-snap-align: center;\n    \n    @media (min-width: ", ") {\n      min-width: 60%;\n    }\n    \n    @media (min-width: ", ") {\n      min-width: 40%;\n    }\n    \n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])), (0, utils_1.getFibonacciByIndex)(7), (0, utils_1.getFibonacciByIndex)(3), (0, utils_1.getFibonacciByIndex)(3), (0, utils_1.getFibonacciByIndex)(6), function (props) { return props.theme.breakpoints.md; }, function (props) { return props.theme.breakpoints.lg; });
// Featured testimonial layout
var FeaturedContainer = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(7));
var FeaturedTestimonial = (0, styled_components_1.default)(TestimonialCard)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  padding: ", "px;\n  \n  ", " {\n    font-size: 1.2rem;\n    line-height: ", ";\n  }\n"], ["\n  margin-bottom: ", "px;\n  padding: ", "px;\n  \n  ", " {\n    font-size: 1.2rem;\n    line-height: ", ";\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(7), TestimonialContent, sacred_geometry_1.PHI * 1.1);
var SecondaryTestimonialsGrid = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  }\n"])), (0, utils_1.getFibonacciByIndex)(9), (0, utils_1.getFibonacciByIndex)(5), function (props) { return props.theme.breakpoints.md; }, (0, utils_1.getFibonacciByIndex)(8));
/**
 * Testimonials component for displaying client endorsements in various layouts,
 * following sacred geometry principles for spacing and proportions.
 */
var Testimonials = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, testimonials = _a.testimonials, _b = _a.displayStyle, displayStyle = _b === void 0 ? 'grid' : _b, backgroundColor = _a.backgroundColor, _c = _a.animated, animated = _c === void 0 ? true : _c, botanical = _a.botanical, cta = _a.cta, className = _a.className, style = _a.style;
    /**
     * Render the star rating component
     */
    var renderRating = function (rating) {
        return (<RatingContainer>
        {[1, 2, 3, 4, 5].map(function (star) { return (<Star key={star} $filled={star <= rating}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
          </Star>); })}
      </RatingContainer>);
    };
    /**
     * Render an individual testimonial card
     */
    var renderTestimonialCard = function (testimonial, index) {
        var content = (<TestimonialCard $accentColor={testimonial.accentColor}>
        <QuoteIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.29 16.29C6.58 16.58 7 16.69 7.38 16.56C7.76 16.42 8 16.07 8 15.67V13C8 12.45 7.55 12 7 12H4C3.45 12 3 11.55 3 11V8C3 7.45 3.45 7 4 7H7C8.1 7 9 7.9 9 9V15.67C9 16.95 8.22 18.12 7 18.66C5.78 19.2 4.39 19.05 3.34 18.29C2.9 17.97 2.82 17.35 3.14 16.91C3.46 16.46 4.08 16.37 4.52 16.7C5.12 17.15 5.95 17.05 6.29 16.29ZM15.3 16.29C15.59 16.58 16.01 16.69 16.39 16.56C16.77 16.42 17.01 16.07 17.01 15.67V13C17.01 12.45 16.56 12 16.01 12H13.01C12.46 12 12.01 11.55 12.01 11V8C12.01 7.45 12.46 7 13.01 7H16.01C17.11 7 18.01 7.9 18.01 9V15.67C18.01 16.95 17.23 18.12 16.01 18.66C14.79 19.2 13.4 19.05 12.35 18.29C11.91 17.97 11.83 17.35 12.15 16.91C12.47 16.46 13.09 16.37 13.53 16.7C14.13 17.15 14.95 17.05 15.3 16.29Z"/>
          </svg>
        </QuoteIcon>
        
        {testimonial.rating && renderRating(testimonial.rating)}
        
        <TestimonialContent>
          {testimonial.content}
        </TestimonialContent>
        
        <AuthorSection>
          {testimonial.authorImage && (<AuthorImageContainer>
              <img src={testimonial.authorImage} alt={testimonial.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </AuthorImageContainer>)}
          <div>
            <AuthorName>{testimonial.author}</AuthorName>
            {testimonial.authorRole && (<AuthorRole>{testimonial.authorRole}</AuthorRole>)}
          </div>
        </AuthorSection>
      </TestimonialCard>);
        if (animated) {
            return (<animation_1.FadeIn key={testimonial.id} delay={index * 0.1}>
          {content}
        </animation_1.FadeIn>);
        }
        return <div key={testimonial.id}>{content}</div>;
    };
    /**
     * Render testimonials in a grid layout
     */
    var renderGrid = function () {
        return (<TestimonialsGrid>
        {testimonials.map(function (testimonial, index) { return renderTestimonialCard(testimonial, index); })}
      </TestimonialsGrid>);
    };
    /**
     * Render testimonials in a carousel layout
     */
    var renderCarousel = function () {
        return (<CarouselContainer>
        {testimonials.map(function (testimonial, index) { return (<div key={testimonial.id}>
            {renderTestimonialCard(testimonial, index)}
          </div>); })}
      </CarouselContainer>);
    };
    /**
     * Render testimonials with a featured item and grid
     */
    var renderFeatured = function () {
        if (testimonials.length === 0)
            return null;
        var featured = testimonials[0], rest = testimonials.slice(1);
        var featuredContent = (<FeaturedTestimonial $accentColor={featured.accentColor}>
        <QuoteIcon>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.29 16.29C6.58 16.58 7 16.69 7.38 16.56C7.76 16.42 8 16.07 8 15.67V13C8 12.45 7.55 12 7 12H4C3.45 12 3 11.55 3 11V8C3 7.45 3.45 7 4 7H7C8.1 7 9 7.9 9 9V15.67C9 16.95 8.22 18.12 7 18.66C5.78 19.2 4.39 19.05 3.34 18.29C2.9 17.97 2.82 17.35 3.14 16.91C3.46 16.46 4.08 16.37 4.52 16.7C5.12 17.15 5.95 17.05 6.29 16.29ZM15.3 16.29C15.59 16.58 16.01 16.69 16.39 16.56C16.77 16.42 17.01 16.07 17.01 15.67V13C17.01 12.45 16.56 12 16.01 12H13.01C12.46 12 12.01 11.55 12.01 11V8C12.01 7.45 12.46 7 13.01 7H16.01C17.11 7 18.01 7.9 18.01 9V15.67C18.01 16.95 17.23 18.12 16.01 18.66C14.79 19.2 13.4 19.05 12.35 18.29C11.91 17.97 11.83 17.35 12.15 16.91C12.47 16.46 13.09 16.37 13.53 16.7C14.13 17.15 14.95 17.05 15.3 16.29Z"/>
          </svg>
        </QuoteIcon>
        
        {featured.rating && renderRating(featured.rating)}
        
        <TestimonialContent variant="h5">
          {featured.content}
        </TestimonialContent>
        
        <AuthorSection>
          {featured.authorImage && (<AuthorImageContainer>
              <img src={featured.authorImage} alt={featured.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </AuthorImageContainer>)}
          <div>
            <AuthorName>{featured.author}</AuthorName>
            {featured.authorRole && (<AuthorRole>{featured.authorRole}</AuthorRole>)}
          </div>
        </AuthorSection>
      </FeaturedTestimonial>);
        return (<FeaturedContainer>
        {animated ? <animation_1.FadeIn>{featuredContent}</animation_1.FadeIn> : featuredContent}
        
        {rest.length > 0 && (<SecondaryTestimonialsGrid>
            {rest.map(function (testimonial, index) { return renderTestimonialCard(testimonial, index + 1); })}
          </SecondaryTestimonialsGrid>)}
      </FeaturedContainer>);
    };
    /**
     * Render testimonials based on the selected display style
     */
    var renderTestimonials = function () {
        switch (displayStyle) {
            case 'carousel':
                return renderCarousel();
            case 'featured':
                return renderFeatured();
            case 'grid':
            default:
                return renderGrid();
        }
    };
    return (<TestimonialsSection $backgroundColor={backgroundColor} className={className} style={style}>
      {botanical && (<botanical_1.BotanicalElement type={botanical.type} position={botanical.position} size={botanical.size} opacity={botanical.opacity}/>)}
      
      <Section_1.SectionTitle title={title} subtitle={subtitle} centered animated={animated}/>
      
      {renderTestimonials()}
      
      {cta && (<CTAContainer>
          <Button_1.Button variant={cta.variant || 'primary'} href={cta.url}>
            {cta.label}
          </Button_1.Button>
        </CTAContainer>)}
    </TestimonialsSection>);
};
exports.default = Testimonials;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
