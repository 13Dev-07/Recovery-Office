"use strict";
/**
 * Philosophy Section Component
 *
 * Explains the core philosophy of Recovery Office based on sacred geometry principles.
 * Uses golden ratio for layout and includes botanical elements.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Section_1 = require("../design-system/components/layout/Section");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var Text_1 = require("../../../design-system/components/typography/Text");
var layout_1 = require("../design-system/components/layout");
var data_display_1 = require("../design-system/components/data-display");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var botanical_1 = require("../design-system/botanical");
var animation_1 = require("../../animation");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to right,\n    rgba(246, 248, 250, 0.8),\n    rgba(240, 244, 248, 0.9)\n  );\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(\n    to right,\n    rgba(246, 248, 250, 0.8),\n    rgba(240, 244, 248, 0.9)\n  );\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var PhilosophyCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);\n  }\n"], ["\n  margin-bottom: ", "px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.xs * sacred_geometry_1.PHI_INVERSE);
var BackgroundDecoration = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  opacity: 0.05;\n  transform: rotate(", "deg);\n  z-index: 0;\n"], ["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  opacity: 0.05;\n  transform: rotate(", "deg);\n  z-index: 0;\n"])), -sacred_geometry_1.SACRED_SPACING.xl * 0.5, -sacred_geometry_1.SACRED_SPACING.xl * 0.3, -sacred_geometry_1.PHI * 10);
var philosophyPrinciples = [
    {
        id: 'sacred-geometry',
        title: 'Sacred Geometry',
        content: 'We believe the mathematical patterns found throughout nature provide a framework for optimal healing. These patterns—from the Golden Ratio to the Fibonacci sequence—inform our therapeutic approach on every level.',
        icon: 'flowerOfLife',
        accentColor: '#4a6eb3'
    },
    {
        id: 'holistic-balance',
        title: 'Holistic Balance',
        content: 'True recovery requires harmony between body, mind, and spirit. Our therapies address the physical symptoms while also restoring energetic and psychological balance through sacred proportions.',
        icon: 'seedOfLife',
        accentColor: '#63a98c'
    },
    {
        id: 'natural-harmony',
        title: 'Natural Harmony',
        content: 'By aligning our therapeutic practices with the same proportions found in nature, we tap into the inherent healing intelligence of the universe. This creates a resonance that accelerates recovery.',
        icon: 'treeOfLife',
        accentColor: '#86b378'
    }
];
var PhilosophySection = function () {
    return (<StyledSection id="philosophy">
      <BackgroundDecoration>
        <botanical_1.FlowerOfLife size="xxl"/>
      </BackgroundDecoration>
      
      <ContentContainer>
        <SectionTitle_1.SectionTitle title="Our Philosophy" subtitle="The sacred principles that guide our approach"/>
        
        <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.lg}>
          <Text_1.Text fontSize="lg" textAlign="center" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: sacred_geometry_1.SACRED_SPACING.lg }}>
            Recovery Office is founded on the understanding that the same mathematical principles
            that create harmony in the universe can be applied to therapeutic practices.
          </Text_1.Text>
          
          <layout_1.GoldenSection leftContent={<layout_1.Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                <botanical_1.FlowerOfLife size="xl" primaryColor="#4a6eb3" secondaryColor="rgba(0,0,0,0)" opacity={0.7} animated/>
              </layout_1.Box>}>
            <Text_1.Text fontSize="md">
              Our approach merges ancient wisdom with modern therapeutic practices. We recognize that
              the same sacred proportions found in natural systems—from galaxies to seashells, from flower
              petals to human DNA—can be applied to healing methodologies to create greater harmony
              and more efficient recovery.
            </Text_1.Text>
            <Text_1.Text fontSize="md" mt={sacred_geometry_1.SACRED_SPACING.md}>
              By incorporating these principles into our therapeutic environments, exercises, and
              procedures, we create a resonance that naturally facilitates the body's own healing capabilities.
              This isn't just theoretical—our research has demonstrated measurable improvements in
              recovery outcomes when sacred geometry principles are thoughtfully applied.
            </Text_1.Text>
          </layout_1.GoldenSection>
          
          <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.xl} display="grid" gridTemplateColumns={["1fr", null, "1fr 1fr 1fr"]} gap={sacred_geometry_1.SACRED_SPACING.lg}>
            {philosophyPrinciples.map(function (principle, index) { return (<animation_1.ScrollReveal key={principle.id} delay={index * 0.15}>
                <PhilosophyCard elevation={2} padding={"".concat(sacred_geometry_1.SACRED_SPACING.lg, "px")} style={{
                borderTop: "4px solid ".concat(principle.accentColor)
            }}>
                  <layout_1.Box marginBottom={sacred_geometry_1.SACRED_SPACING.md} display="flex" alignItems="center" justifyContent="center" height={"".concat(sacred_geometry_1.SACRED_SPACING.xl * sacred_geometry_1.PHI, "px")}>
                    {principle.icon === 'flowerOfLife' && <botanical_1.FlowerOfLife size="md" opacity={0.8}/>}
                    {principle.icon === 'seedOfLife' && <botanical_1.SeedOfLife size="md" opacity={0.8}/>}
                    {principle.icon === 'treeOfLife' && <botanical_1.TreeOfLife size="md" opacity={0.8}/>}
                  </layout_1.Box>
                  <Text_1.Text variant="h4" textAlign="center" style={{
                marginBottom: sacred_geometry_1.SACRED_SPACING.sm,
                color: principle.accentColor
            }}>
                    {principle.title}
                  </Text_1.Text>
                  <Text_1.Text variant="body2" textAlign="center">
                    {principle.content}
                  </Text_1.Text>
                </PhilosophyCard>
              </animation_1.ScrollReveal>); })}
          </layout_1.Box>
          
          <layout_1.Box mt={sacred_geometry_1.SACRED_SPACING.xl} textAlign="center">
            <Text_1.Text fontSize="lg" fontWeight="500" color="#4a6eb3">
              "Harmony in healing comes from aligning with the mathematical principles that govern our universe."
            </Text_1.Text>
            <Text_1.Text fontSize="md" mt={sacred_geometry_1.SACRED_SPACING.sm} fontStyle="italic">
              — Dr. Elizabeth Harper, Founder
            </Text_1.Text>
          </layout_1.Box>
        </layout_1.Box>
      </ContentContainer>
    </StyledSection>);
};
exports.default = PhilosophySection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
