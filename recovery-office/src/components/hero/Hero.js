"use strict";
/**
 * Hero Component
 *
 * Main hero section component implementing sacred geometry principles
 * for layout, spacing, and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var Container_1 = require("../design-system/components/layout/Container");
var GoldenSection_1 = require("../design-system/components/layout/GoldenSection");
var HeroContent_1 = require("./HeroContent");
var HeroBotanicals_1 = require("./HeroBotanicals");
var HeroWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: ", ";\n  overflow: hidden;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  \n  /* Ensure minimum height follows golden ratio relative to viewport width */\n  min-height: ", "px;\n  \n  /* Overlay gradient */\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n      to bottom right,\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.3)\n    );\n    z-index: 1;\n  }\n"], ["\n  position: relative;\n  height: ", ";\n  overflow: hidden;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  \n  /* Ensure minimum height follows golden ratio relative to viewport width */\n  min-height: ", "px;\n  \n  /* Overlay gradient */\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n      to bottom right,\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.3)\n    );\n    z-index: 1;\n  }\n"])), function (props) {
    return typeof props.height === 'number'
        ? "".concat(props.height, "px")
        : props.height || '100vh';
}, function (props) { var _a; return (_a = props.bgColor || props.theme.colors.primary[900]) !== null && _a !== void 0 ? _a : 1; }, function (props) {
    return props.bgImage ? "url(".concat(props.bgImage, ")") : 'none';
}, function (props) { return props.theme.breakpoints.md * SACRED_ASPECT_RATIOS.goldenRectangle; });
var HeroContainer = (0, styled_components_1.default)(Container_1.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  position: relative;\n  z-index: 2;\n"], ["\n  height: 100%;\n  position: relative;\n  z-index: 2;\n"])));
/**
 * Hero Component
 *
 * Main hero section built using sacred geometry principles for layout and proportion.
 * Features a golden ratio section layout, botanical decorations, and harmonious text sizing.
 */
var Hero = function (_a) {
    var bgImage = _a.bgImage, _b = _a.height, height = _b === void 0 ? '100vh' : _b, bgColor = _a.bgColor, title = _a.title, subtitle = _a.subtitle, ctaText = _a.ctaText, ctaLink = _a.ctaLink, secondaryCtaText = _a.secondaryCtaText, secondaryCtaLink = _a.secondaryCtaLink, _c = _a.reverseLayout, reverseLayout = _c === void 0 ? false : _c, className = _a.className;
    return (<HeroWrapper className={className} bgImage={bgImage} height={height} bgColor={bgColor}>
      <HeroContainer>
        <GoldenSection_1.GoldenSection height="100%" direction="horizontal" reverseOrder={reverseLayout}>
          {/* Hero Content Section */}
          <HeroContent_1.HeroContent title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} secondaryCtaText={secondaryCtaText} secondaryCtaLink={secondaryCtaLink}/>
          
          {/* Botanical Decorations */}
          <HeroBotanicals_1.HeroBotanicals />
        </GoldenSection_1.GoldenSection>
      </HeroContainer>
    </HeroWrapper>);
};
exports.Hero = Hero;
exports.default = exports.Hero;
var templateObject_1, templateObject_2;
