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
var HeroContainer = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 60vh;\n  min-height: 500px;\n  max-height: 700px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: ", ";\n"], ["\n  position: relative;\n  width: 100%;\n  height: 60vh;\n  min-height: 500px;\n  max-height: 700px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.light; });
var HeroBackground = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n  }\n"])), function (props) { return props.$backgroundImage; }, function (props) { return props.$overlayColor; });
var HeroContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  text-align: center;\n"], ["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  text-align: center;\n"])), 900 * sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.SACRED_SPACING.lg);
var HeroTitle = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: clamp(2.5rem, 5vw, 3.5rem);\n  margin-bottom: ", "px;\n  line-height: ", ";\n  font-weight: 700;\n"], ["\n  font-size: clamp(2.5rem, 5vw, 3.5rem);\n  margin-bottom: ", "px;\n  line-height: ", ";\n  font-weight: 700;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.PHI);
var HeroSubtitle = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: clamp(1.125rem, 2vw, 1.25rem);\n  margin-bottom: ", "px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n  opacity: 0.9;\n"], ["\n  font-size: clamp(1.125rem, 2vw, 1.25rem);\n  margin-bottom: ", "px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n  opacity: 0.9;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI);
var BotanicalContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n"])));
var BotanicalBottomRight = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "%;\n  right: ", "px;\n  transform: scale(0.85) rotate(-5deg);\n"], ["\n  position: absolute;\n  bottom: ", "%;\n  right: ", "px;\n  transform: scale(0.85) rotate(-5deg);\n"])), sacred_geometry_1.GOLDEN_SECTIONS.minor * 100, sacred_geometry_1.SACRED_SPACING.xl);
/**
 * ServicesHero Component
 *
 * A hero section specifically designed for the Services page,
 * featuring a background image, sacred geometry botanical elements,
 * and responsive typography following golden ratio principles.
 */
var ServicesHero = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Our Services" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "Each of our services incorporates sacred geometry principles to create therapeutic experiences that restore harmony and facilitate recovery." : _c, _d = _a.backgroundImage, backgroundImage = _d === void 0 ? "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80" : _d, _e = _a.overlayColor, overlayColor = _e === void 0 ? "rgba(21, 45, 85, 0.7)" : _e;
    return (<HeroContainer>
      <HeroBackground $backgroundImage={backgroundImage} $overlayColor={overlayColor}/>
      
      <BotanicalContainer>
        <BotanicalBottomRight>
          <animation_1.ScrollReveal threshold={0.2} variant="slide-up">
            <botanical_1.FlowerOfLife size={350} color="rgba(255, 255, 255, 0.15)" animated={true} animationType="reveal"/>
          </animation_1.ScrollReveal>
        </BotanicalBottomRight>
      </BotanicalContainer>
      
      <HeroContent>
        <animation_1.FadeIn delay={0.3}>
          <HeroTitle>{title}</HeroTitle>
        </animation_1.FadeIn>
        <animation_1.FadeIn delay={0.5}>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </animation_1.FadeIn>
      </HeroContent>
    </HeroContainer>);
};
exports.default = ServicesHero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
