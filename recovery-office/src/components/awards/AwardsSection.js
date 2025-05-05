"use strict";
/**
 * AwardsSection Component
 *
 * A complete section for displaying awards recognition on the website.
 * Uses sacred geometry for spacing and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var Section_1 = require("@design-system/components/layout/Section");
var Box_1 = require("@design-system/components/layout/Box");
var BotanicalElement_1 = require("@design-system/botanical/BotanicalElement");
var SectionTitle_1 = require("@design-system/components/typography/SectionTitle");
var Text_1 = require("@design-system/components/typography/Text");
var FadeIn_1 = require("@design-system/components/animation/FadeIn");
var AwardsShowcase_1 = require("./AwardsShowcase");
// Icons import (assuming you have icon components)
var icons_1 = require("@design-system/icons");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: ", "px 0;\n  background-color: ", ";\n  color: ", ";\n  overflow: hidden;\n"], ["\n  position: relative;\n  padding: ", "px 0;\n  background-color: ", ";\n  color: ", ";\n  overflow: hidden;\n"])), sacred_geometry_1.SACRED_SPACING.xl * 2, function (props) { return props.$backgroundColor || 'transparent'; }, function (props) { return props.$textColor || 'inherit'; });
var BackgroundDecoration = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.05;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  z-index: 0;\n  opacity: 0.05;\n  pointer-events: none;\n"])));
var TopLeftDecoration = (0, styled_components_1.default)(BackgroundDecoration)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: -", "px;\n  left: -", "px;\n  transform: rotate(-", "deg);\n"], ["\n  top: -", "px;\n  left: -", "px;\n  transform: rotate(-", "deg);\n"])), function () { return getFibonacciByIndex(8); }, function () { return getFibonacciByIndex(7); }, sacred_geometry_1.PHI * 10);
var BottomRightDecoration = (0, styled_components_1.default)(BackgroundDecoration)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  bottom: -", "px;\n  right: -", "px;\n  transform: rotate(", "deg);\n"], ["\n  bottom: -", "px;\n  right: -", "px;\n  transform: rotate(", "deg);\n"])), function () { return getFibonacciByIndex(8); }, function () { return getFibonacciByIndex(7); }, sacred_geometry_1.PHI * 10);
var ContentContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"], ["\n  position: relative;\n  z-index: 1;\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"])), function () { return getFibonacciByIndex(13); }, sacred_geometry_1.SACRED_SPACING.lg);
var IntroContent = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-align: center;\n  margin-bottom: ", "px;\n"], ["\n  text-align: center;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var IntroText = (0, styled_components_1.default)(Text_1.Text)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-width: ", "px;\n  margin: ", "px auto 0;\n  font-size: ", "px;\n  line-height: ", ";\n"], ["\n  max-width: ", "px;\n  margin: ", "px auto 0;\n  font-size: ", "px;\n  line-height: ", ";\n"])), function () { return getFibonacciByIndex(12); }, sacred_geometry_1.SACRED_SPACING.md, function () { return getFibonacciByIndex(5); }, sacred_geometry_1.PHI * 1.5);
// Sample award data (normally would come from props or API)
var sampleAwards = [
    {
        id: 'award-1',
        title: 'Excellence in Holistic Therapy',
        description: 'Awarded for outstanding contribution to holistic therapy practices',
        year: 2023,
        issuedBy: 'Holistic Practitioners Association',
        variant: 'gold',
        shape: 'circle',
        icon: <icons_1.StarIcon />,
        detailsUrl: '/awards/excellence-therapy'
    },
    {
        id: 'award-2',
        title: 'Best Recovery Center',
        description: 'Recognized as the top recovery center in the region',
        year: 2022,
        issuedBy: 'Wellness Industry Awards',
        variant: 'gold',
        shape: 'shield',
        icon: <icons_1.TrophyIcon />,
        detailsUrl: '/awards/best-recovery'
    },
    {
        id: 'award-3',
        title: 'Innovation in Care Practices',
        description: 'Pioneering new approaches to patient care and recovery',
        year: 2021,
        issuedBy: 'Healthcare Innovation Board',
        variant: 'silver',
        shape: 'laurel',
        icon: <icons_1.RibbonIcon />,
        detailsUrl: '/awards/innovation-care'
    },
    {
        id: 'award-4',
        title: 'Certified Excellence',
        description: 'Meeting and exceeding industry standards for care quality',
        year: 2020,
        issuedBy: 'Quality Care Certification',
        variant: 'certification',
        shape: 'ribbon',
        icon: <icons_1.CertificateIcon />,
        detailsUrl: '/awards/certified-excellence'
    },
    {
        id: 'award-5',
        title: 'Sustainability Award',
        description: 'Commitment to environmentally responsible healthcare practices',
        year: 2019,
        issuedBy: 'Green Healthcare Initiative',
        variant: 'recognition',
        shape: 'circle',
        customColor: '#3d8c40',
        detailsUrl: '/awards/sustainability'
    }
];
// AwardsSection component implementation
var AwardsSection = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Our Recognition & Awards' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Celebrating Excellence in Holistic Care' : _c, _d = _a.introText, introText = _d === void 0 ? 'We are honored to be recognized by leading organizations in the field for our commitment to quality, innovation, and excellence in holistic recovery care.' : _d, _e = _a.awards, awards = _e === void 0 ? sampleAwards : _e, _f = _a.showFeatured, showFeatured = _f === void 0 ? true : _f, _g = _a.showBotanical, showBotanical = _g === void 0 ? true : _g, backgroundColor = _a.backgroundColor, textColor = _a.textColor, className = _a.className;
    // Handle award click
    var handleAwardClick = function (award) {
        console.log('Award clicked:', award.title);
        // You could navigate to the award details page or open a modal here
        if (award.detailsUrl) {
            // window.location.href = award.detailsUrl;
            console.log('Navigating to:', award.detailsUrl);
        }
    };
    return (<StyledSection $backgroundColor={backgroundColor} $textColor={textColor} className={className}>
      {/* Botanical decorations */}
      {showBotanical && (<>
          <TopLeftDecoration>
            <BotanicalElement_1.BotanicalElement type="branch" size="xl" rotation={45}/>
          </TopLeftDecoration>
          <BottomRightDecoration>
            <BotanicalElement_1.BotanicalElement type="leaf-cluster" size="xl" rotation={-30}/>
          </BottomRightDecoration>
        </>)}
      
      <ContentContainer>
        {/* Section intro */}
        <IntroContent>
          <FadeIn_1.FadeIn duration={getFibonacciByIndex(6) * 10}>
            <SectionTitle_1.SectionTitle>{title}</SectionTitle_1.SectionTitle>
            {subtitle && (<Text_1.Text fontSize={getFibonacciByIndex(6)} mt={sacred_geometry_1.SACRED_SPACING.sm} fontWeight="medium">
                {subtitle}
              </Text_1.Text>)}
            {introText && (<IntroText>{introText}</IntroText>)}
          </FadeIn_1.FadeIn>
        </IntroContent>
        
        {/* Featured award showcase */}
        {showFeatured && awards.length > 0 && (<Box_1.Box mb={sacred_geometry_1.SACRED_SPACING.xl}>
            <AwardsShowcase_1.default awards={[awards[0]]} displayMode="featured" showDetailsOnClick={true} showBotanical={false} onAwardSelect={handleAwardClick}/>
          </Box_1.Box>)}
        
        {/* All awards showcase */}
        <AwardsShowcase_1.default awards={awards} displayMode="grid" showDetailsOnClick={true} showBotanical={false} onAwardSelect={handleAwardClick}/>
      </ContentContainer>
    </StyledSection>);
};
exports.default = AwardsSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
