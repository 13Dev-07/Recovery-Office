"use strict";
/**
 * Footer Component
 *
 * Main footer component that implements sacred geometry principles.
 * Contains navigation links, newsletter signup, and social media links.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("@design-system/components/layout/Box");
var Container_1 = require("@design-system/components/layout/Container");
var Flex_1 = require("@design-system/components/layout/Flex");
var Grid_1 = require("@design-system/components/layout/Grid");
var Text_1 = require("@design-system/components/typography/Text");
var Heading_1 = require("@design-system/components/typography/Heading");
var Divider_1 = require("@design-system/components/layout/Divider");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var VesicaPiscis_1 = require("@design-system/botanical/VesicaPiscis");
var colors_1 = require("@design-system/tokens/colors");
var FooterLinks_1 = require("./FooterLinks");
var FooterNewsletter_1 = require("./FooterNewsletter");
var FooterSocial_1 = require("./FooterSocial");
var OliveBranch_1 = require("@design-system/botanical/OliveBranch");
var FooterWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px 0 ", "px;\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px 0 ", "px;\n"])), function (props) { return props.theme.colors.primary[900]; }, function (props) { return props.theme.colors.text.inverse; }, sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xl);
var BotanicalWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -", "px;\n  right: ", "px;\n  opacity: 0.1;\n  transform: rotate(", "deg);\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: -", "px;\n  right: ", "px;\n  opacity: 0.1;\n  transform: rotate(", "deg);\n  z-index: 0;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl, 180 / sacred_geometry_1.PHI);
var FooterContent = (0, styled_components_1.default)(Container_1.Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n"], ["\n  position: relative;\n  z-index: 1;\n"])));
var BottomBar = (0, styled_components_1.default)(Flex_1.Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: ", "px;\n  padding-top: ", "px;\n  border-top: 1px solid ", ";\n"], ["\n  margin-top: ", "px;\n  padding-top: ", "px;\n  border-top: 1px solid ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.theme.colors.primary[700]; });
var Logo = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n"], ["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Footer Component
 *
 * Main footer component with several sections laid out according to sacred geometry.
 * Includes company info, navigation links, newsletter signup and social media links.
 */
var Footer = function (_a) {
    var className = _a.className;
    var currentYear = new Date().getFullYear();
    return (<FooterWrapper className={className}>
      <BotanicalWrapper>
        <OliveBranch_1.OliveBranch width={350} color={colors_1.colors.primary[500]}/>
      </BotanicalWrapper>
      
      <FooterContent>
        <Grid_1.Grid templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "".concat(sacred_geometry_1.PHI - 1, "fr ").concat(2 - sacred_geometry_1.PHI, "fr 1fr") // Golden ratio grid
        }} gap={{
            base: sacred_geometry_1.SACRED_SPACING.lg,
            md: sacred_geometry_1.SACRED_SPACING.xl
        }}>
          {/* Company Information */}
          <Box_1.Box>
            <Logo as="h3">Recovery Office</Logo>
            <Text_1.Text color="text.inverse" mb={sacred_geometry_1.SACRED_SPACING.md}>
              Professional financial recovery consultancy specialized in helping individuals 
              and businesses reclaim lost assets.
            </Text_1.Text>
            <Text_1.Text color="text.inverse" opacity={0.8}>
              Registered with the Financial Conduct Authority
            </Text_1.Text>
            <Box_1.Box mt={sacred_geometry_1.SACRED_SPACING.md}>
              <VesicaPiscis_1.VesicaPiscis width={34} color={colors_1.colors.primary[500]} opacity={0.6}/>
            </Box_1.Box>
          </Box_1.Box>
          
          {/* Navigation Links */}
          <FooterLinks_1.FooterLinks />
          
          {/* Newsletter Signup */}
          <FooterNewsletter_1.FooterNewsletter />
        </Grid_1.Grid>
        
        <Divider_1.Divider my={sacred_geometry_1.SACRED_SPACING.xl} opacity={0.2}/>
        
        {/* Social Media and Copyright */}
        <BottomBar justifyContent="space-between" flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-start" }} gap={sacred_geometry_1.SACRED_SPACING.md}>
          <Text_1.Text color="text.inverse" opacity={0.7}>
            &copy; {currentYear} Recovery Office. All rights reserved.
          </Text_1.Text>
          
          <FooterSocial_1.FooterSocial />
        </BottomBar>
      </FooterContent>
    </FooterWrapper>);
};
exports.Footer = Footer;
exports.default = exports.Footer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
