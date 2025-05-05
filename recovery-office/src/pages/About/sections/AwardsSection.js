"use strict";
/**
 * Awards Section Component
 *
 * Showcases the awards and recognitions received by Recovery Office
 * using the sacred geometry principles with golden ratio alignments.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var AwardsShowcase_1 = require("../../../components/awards/AwardsShowcase");
var Section_1 = require("../design-system/components/layout/Section");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var Text_1 = require("../../../design-system/components/typography/Text");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var BotanicalElement_1 = require("../../../design-system/botanical/BotanicalElement");
// Sample award data
var awardData = [
    {
        id: 'holistic-healing-2023',
        title: 'Excellence in Holistic Healing',
        year: 2023,
        issuedBy: 'Wellness Association',
        description: 'Awarded for outstanding contributions to holistic healing practices and patient recovery.',
        shape: 'circle',
        variant: 'gold',
        showBotanical: true,
        icon: '🌿'
    },
    {
        id: 'sustainable-practice-2022',
        title: 'Sustainable Practice Award',
        year: 2022,
        issuedBy: 'Green Health Initiative',
        description: 'Recognized for implementing sustainable and eco-friendly practices in healthcare.',
        shape: 'shield',
        variant: 'silver',
        icon: '♻️'
    },
    {
        id: 'community-support-2022',
        title: 'Community Support Excellence',
        year: 2022,
        issuedBy: 'Local Health Board',
        description: 'Recognized for exceptional community outreach and support programs.',
        shape: 'laurel',
        variant: 'bronze',
        icon: '🤝'
    },
    {
        id: 'patient-care-2021',
        title: 'Outstanding Patient Care',
        year: 2021,
        issuedBy: 'Healthcare Excellence Foundation',
        description: 'Awarded for exceptional standards in patient care and recovery support.',
        shape: 'ribbon',
        variant: 'gold',
        icon: '❤️'
    },
    {
        id: 'innovation-2020',
        title: 'Healthcare Innovation Award',
        year: 2020,
        issuedBy: 'Medical Innovation Forum',
        description: 'Recognized for innovative approaches to physical therapy and recovery techniques.',
        shape: 'circle',
        variant: 'recognition',
        icon: '💡'
    },
    {
        id: 'staff-development-2019',
        title: 'Staff Development & Training',
        year: 2019,
        issuedBy: 'Healthcare Training Institute',
        description: 'Awarded for exceptional staff development programs and training excellence.',
        shape: 'shield',
        variant: 'certification',
        icon: '🎓'
    }
];
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0.9),\n    rgba(250, 250, 250, 0.8)\n  );\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 0.9),\n    rgba(250, 250, 250, 0.8)\n  );\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var SectionHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  margin-bottom: ", "px;\n"], ["\n  text-align: center;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.lg * sacred_geometry_1.PHI);
var BackgroundDecoration = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.07;\n  transform: rotate(", "deg);\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  opacity: 0.07;\n  transform: rotate(", "deg);\n  z-index: 0;\n"])), -sacred_geometry_1.SACRED_SPACING.xl * 0.3, -sacred_geometry_1.SACRED_SPACING.xl * 0.3, sacred_geometry_1.PHI * 10);
var AwardsSection = function () {
    return (<StyledSection id="awards">
      <BackgroundDecoration>
        <BotanicalElement_1.BotanicalElement type="flourish" size="xl"/>
      </BackgroundDecoration>
      
      <ContentContainer>
        <SectionHeader>
          <SectionTitle_1.SectionTitle>Our Recognitions</SectionTitle_1.SectionTitle>
          <Text_1.Text fontSize="lg" mt={sacred_geometry_1.SACRED_SPACING.sm}>
            We are honored to be recognized for our commitment to excellence in holistic recovery practices
          </Text_1.Text>
        </SectionHeader>
        
        {/* Main showcase with grid display */}
        <AwardsShowcase_1.default awards={awardData} displayMode="grid" showBotanical={true} animateOnHover={true} showDetailsOnClick={true}/>
        
        {/* Featured awards section */}
        <SectionHeader style={{ marginTop: sacred_geometry_1.SACRED_SPACING.xl }}>
          <SectionTitle_1.SectionTitle level={3}>Featured Achievements</SectionTitle_1.SectionTitle>
          <Text_1.Text fontSize="md" mt={sacred_geometry_1.SACRED_SPACING.xs}>
            Highlights of our most significant recognitions
          </Text_1.Text>
        </SectionHeader>
        
        <AwardsShowcase_1.default awards={awardData.slice(0, 3)} displayMode="featured" showBotanical={true} animateOnHover={true}/>
        
        {/* Carousel for all awards */}
        <SectionHeader style={{ marginTop: sacred_geometry_1.SACRED_SPACING.xl }}>
          <SectionTitle_1.SectionTitle level={3}>Browse Our Achievements</SectionTitle_1.SectionTitle>
        </SectionHeader>
        
        <AwardsShowcase_1.default awards={awardData} displayMode="carousel" maxVisible={3} showDetailsOnClick={true}/>
      </ContentContainer>
    </StyledSection>);
};
exports.default = AwardsSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
