"use strict";
/**
 * HeroContent Component
 *
 * Displays text content and call-to-action buttons in the hero section,
 * implementing sacred geometry principles for typography and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroContent = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var Flex_1 = require("../design-system/components/layout/Flex");
var Heading_1 = require("../design-system/components/typography/Heading");
var Text_1 = require("../design-system/components/typography/Text");
var Button_1 = require("../design-system/components/button/Button");
var FadeIn_1 = require("@animation/FadeIn");
var SlideIn_1 = require("@animation/SlideIn");
var ContentWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  color: ", ";\n  padding: ", "px 0;\n  max-width: ", "px;\n  \n  @media (max-width: ", "px) {\n    padding: ", "px ", "px;\n    align-items: center;\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  color: ", ";\n  padding: ", "px 0;\n  max-width: ", "px;\n  \n  @media (max-width: ", "px) {\n    padding: ", "px ", "px;\n    align-items: center;\n    text-align: center;\n  }\n"])), function (props) { return props.theme.colors.text.inverse; }, SACRED_SPACING.xl, function (props) { return props.theme.breakpoints.lg / PHI; }, function (props) { return props.theme.breakpoints.md; }, SACRED_SPACING.xl, SACRED_SPACING.md);
var HeroTitle = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: clamp(\n    ", "px, \n    ", "vw, \n    ", "px\n  );\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", "px) {\n    font-size: clamp(\n      ", "px, \n      ", "vw, \n      ", "px\n    );\n  }\n"], ["\n  font-size: clamp(\n    ", "px, \n    ", "vw, \n    ", "px\n  );\n  line-height: 1.2;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", "px) {\n    font-size: clamp(\n      ", "px, \n      ", "vw, \n      ", "px\n    );\n  }\n"])), getFibonacciByIndex(9), getFibonacciByIndex(8) / 10, getFibonacciByIndex(10), SACRED_SPACING.lg, function (props) { return props.theme.breakpoints.md; }, getFibonacciByIndex(8), getFibonacciByIndex(7) / 10, getFibonacciByIndex(9));
var HeroSubtitle = (0, styled_components_1.default)(Text_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: clamp(\n    ", "px, \n    ", "vw, \n    ", "px\n  );\n  line-height: 1.5;\n  margin-bottom: ", "px;\n  max-width: 85%;\n  \n  @media (max-width: ", "px) {\n    font-size: clamp(\n      ", "px, \n      ", "vw, \n      ", "px\n    );\n    max-width: 100%;\n  }\n"], ["\n  font-size: clamp(\n    ", "px, \n    ", "vw, \n    ", "px\n  );\n  line-height: 1.5;\n  margin-bottom: ", "px;\n  max-width: 85%;\n  \n  @media (max-width: ", "px) {\n    font-size: clamp(\n      ", "px, \n      ", "vw, \n      ", "px\n    );\n    max-width: 100%;\n  }\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6) / 10, getFibonacciByIndex(8), SACRED_SPACING.xl, function (props) { return props.theme.breakpoints.md; }, getFibonacciByIndex(6), getFibonacciByIndex(5) / 10, getFibonacciByIndex(7));
var ButtonGroup = (0, styled_components_1.default)(Flex_1.Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  gap: ", "px;\n  \n  @media (max-width: ", "px) {\n    flex-direction: column;\n    width: 100%;\n    \n    button {\n      width: 100%;\n    }\n  }\n"], ["\n  gap: ", "px;\n  \n  @media (max-width: ", "px) {\n    flex-direction: column;\n    width: 100%;\n    \n    button {\n      width: 100%;\n    }\n  }\n"])), SACRED_SPACING.md, function (props) { return props.theme.breakpoints.sm; });
/**
 * HeroContent Component
 *
 * Displays the text content and call-to-action buttons in the hero section.
 * Implements sacred geometry principles for typography scale and spacing.
 */
var HeroContent = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, ctaText = _a.ctaText, _b = _a.ctaLink, ctaLink = _b === void 0 ? '/booking' : _b, secondaryCtaText = _a.secondaryCtaText, _c = _a.secondaryCtaLink, secondaryCtaLink = _c === void 0 ? '/contact' : _c, className = _a.className;
    return (<ContentWrapper className={className}>
      <FadeIn_1.FadeIn duration={SACRED_TIMING.slower}>
        <SlideIn_1.SlideIn direction="up" distance={SACRED_SPACING.lg} duration={SACRED_TIMING.slow} delay={SACRED_TIMING.fast}>
          <HeroTitle as="h1">{title}</HeroTitle>
        </SlideIn_1.SlideIn>
        
        {subtitle && (<SlideIn_1.SlideIn direction="up" distance={SACRED_SPACING.md} duration={SACRED_TIMING.slow} delay={SACRED_TIMING.medium}>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
          </SlideIn_1.SlideIn>)}
        
        {(ctaText || secondaryCtaText) && (<SlideIn_1.SlideIn direction="up" distance={SACRED_SPACING.sm} duration={SACRED_TIMING.slow} delay={SACRED_TIMING.slow}>
            <ButtonGroup>
              {ctaText && (<Button_1.Button variant="primary" size="lg" as="a" href={ctaLink}>
                  {ctaText}
                </Button_1.Button>)}
              
              {secondaryCtaText && (<Button_1.Button variant="outline" size="lg" as="a" href={secondaryCtaLink}>
                  {secondaryCtaText}
                </Button_1.Button>)}
            </ButtonGroup>
          </SlideIn_1.SlideIn>)}
      </FadeIn_1.FadeIn>
    </ContentWrapper>);
};
exports.HeroContent = HeroContent;
exports.default = exports.HeroContent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
