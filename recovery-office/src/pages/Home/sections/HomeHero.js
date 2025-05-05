"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var animation_1 = require("../../../animation");
var botanical_1 = require("../../../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var button_1 = require("../../../design-system/components/button");
var HeroContainer = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-height: 900px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-height: 900px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n"])), function (props) { var _a; return (_a = props.theme.colors.primary[900]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.colors.text.light; });
var HeroContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 1200px;\n  padding: 0 ", "px;\n  text-align: center;\n"], ["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 1200px;\n  padding: 0 ", "px;\n  text-align: center;\n"])), sacred_geometry_1.SACRED_SPACING.lg);
var HeroTitle = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  margin-bottom: ", "px;\n  line-height: ", ";\n"], ["\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  margin-bottom: ", "px;\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.PHI);
var HeroSubtitle = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: clamp(1.125rem, 2vw, 1.5rem);\n  margin-bottom: ", "px;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n  opacity: 0.9;\n"], ["\n  font-size: clamp(1.125rem, 2vw, 1.5rem);\n  margin-bottom: ", "px;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: ", ";\n  opacity: 0.9;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI);
var BotanicalContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.15;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.15;\n"])));
var FloralLeft = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "%;\n  left: ", "px;\n  transform: scale(0.8) rotate(15deg);\n"], ["\n  position: absolute;\n  top: ", "%;\n  left: ", "px;\n  transform: scale(0.8) rotate(15deg);\n"])), sacred_geometry_1.GOLDEN_SECTIONS.minor * 100, sacred_geometry_1.SACRED_SPACING.lg);
var FloralRight = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "%;\n  right: ", "px;\n  transform: scale(0.8) rotate(-15deg);\n"], ["\n  position: absolute;\n  bottom: ", "%;\n  right: ", "px;\n  transform: scale(0.8) rotate(-15deg);\n"])), sacred_geometry_1.GOLDEN_SECTIONS.minor * 100, sacred_geometry_1.SACRED_SPACING.lg);
var HomeHero = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Financial Recovery Experts" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "We help individuals and businesses reclaim financial assets lost to fraud, scams, and misconduct, providing expert guidance through the recovery process." : _c, _d = _a.ctaText, ctaText = _d === void 0 ? "Book a Consultation" : _d, _e = _a.ctaUrl, ctaUrl = _e === void 0 ? "/booking" : _e;
    return (<HeroContainer>
      <BotanicalContainer>
        <FloralLeft>
          <animation_1.ScrollReveal threshold={0.2}>
            <botanical_1.OliveBranch size={400} color="rgba(255, 255, 255, 0.2)"/>
          </animation_1.ScrollReveal>
        </FloralLeft>
        <FloralRight>
          <animation_1.ScrollReveal threshold={0.2} variant="slide-right">
            <botanical_1.OliveBranch size={400} color="rgba(255, 255, 255, 0.2)" flipHorizontal/>
          </animation_1.ScrollReveal>
        </FloralRight>
        <animation_1.ScrollReveal threshold={0.1}>
          <botanical_1.FlowerOfLife size={900} color="rgba(255, 255, 255, 0.05)" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}/>
        </animation_1.ScrollReveal>
      </BotanicalContainer>
      
      <HeroContent>
        <animation_1.FadeIn delay={0.3}>
          <HeroTitle>{title}</HeroTitle>
        </animation_1.FadeIn>
        <animation_1.FadeIn delay={0.5}>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </animation_1.FadeIn>
        <animation_1.FadeIn delay={0.7}>
          <button_1.Button variant="accent" size="large" as={react_router_dom_1.Link} to={ctaUrl}>
            {ctaText}
          </button_1.Button>
        </animation_1.FadeIn>
      </HeroContent>
    </HeroContainer>);
};
exports.default = HomeHero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
