"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var feature_sections_1 = require("../design-system/components/feature-sections");
var Section_1 = require("../design-system/components/layout/Section");
var SectionTitle_1 = require("../design-system/components/layout/Section/SectionTitle");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var data_display_1 = require("../design-system/components/data-display");
var botanical_1 = require("../design-system/botanical");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var theme_1 = require("../design-system/theme");
var layout_1 = require("../design-system/components/layout");
var framer_motion_1 = require("framer-motion");
// Used for lists
var ListItem = function (_a) {
    var children = _a.children;
    return (<layout_1.Box as="li" mb={"".concat(sacred_geometry_1.PHI * 0.5, "rem")}>
    {children}
  </layout_1.Box>);
};
var AccessibilityPage = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n"])));
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n"], ["\n  position: relative;\n  z-index: 1;\n"])));
var BotanicalContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n  opacity: 0.15;\n  transform: scale(", ") rotate(", "deg);\n  z-index: -1;\n"], ["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n  opacity: 0.15;\n  transform: scale(", ") rotate(", "deg);\n  z-index: -1;\n"])), sacred_geometry_1.PHI * 5, sacred_geometry_1.PHI * -3, sacred_geometry_1.PHI * 2, sacred_geometry_1.PHI * 10);
var CardContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "rem, 1fr));\n  gap: ", "rem;\n  margin-top: ", "rem;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "rem, 1fr));\n  gap: ", "rem;\n  margin-top: ", "rem;\n"])), sacred_geometry_1.PHI * 16, sacred_geometry_1.PHI * 1.5, sacred_geometry_1.PHI * 2);
var SpecialCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "rem;\n"])), sacred_geometry_1.PHI);
var Accessibility = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return (<AccessibilityPage>
      <feature_sections_1.Hero heading="Accessibility Statement" subheading="Our commitment to an inclusive and accessible experience for all" background={{
            image: "/images/accessibility-hero.jpg",
            overlay: "rgba(".concat((_a = theme_1.theme.colors.primary[900]) !== null && _a !== void 0 ? _a : 1, ", 0.7)")
        }} minHeight="30vh" animated={true} botanical={{
            type: "vesicaPiscis",
            position: "bottomRight",
            opacity: 0.3
        }}/>

      <StyledSection backgroundColor={(_b = theme_1.theme.colors.background[100]) !== null && _b !== void 0 ? _b : 1} pt={"".concat(sacred_geometry_1.PHI * 4, "rem")} pb={"".concat(sacred_geometry_1.PHI * 4, "rem")}>
        <layout_1.Container>
          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: sacred_geometry_1.PHI_INVERSE, delay: sacred_geometry_1.PHI_INVERSE * 0.3 }}>
            <SectionTitle_1.SectionTitle title="Our Commitment" subtitle="Creating an accessible healing space for everyone" align="left" size="large"/>
            <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
              Recovery Office is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
            </typography_1.Paragraph>

            <BotanicalContainer>
              <botanical_1.FlowerOfLife color={(_c = theme_1.theme.colors.primary[200]) !== null && _c !== void 0 ? _c : 1}/>
            </BotanicalContainer>
          </framer_motion_1.motion.div>
        </layout_1.Container>
      </StyledSection>

      <StyledSection backgroundColor={(_d = theme_1.theme.colors.background[200]) !== null && _d !== void 0 ? _d : 1} pt={"".concat(sacred_geometry_1.PHI * 4, "rem")} pb={"".concat(sacred_geometry_1.PHI * 4, "rem")}>
        <layout_1.Container>
          <SectionTitle_1.SectionTitle title="Conformance Status" subtitle="Our standards and compliance efforts" align="center" decoratorBefore={<botanical_1.OliveBranch size="sm" color={(_e = theme_1.theme.colors.secondary[500]) !== null && _e !== void 0 ? _e : 1}/>} decoratorAfter={<botanical_1.OliveBranch size="sm" color={(_f = theme_1.theme.colors.secondary[500]) !== null && _f !== void 0 ? _f : 1} rotate={180}/>}/>
          
          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Recovery Office is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </typography_1.Paragraph>

          <CardContainer>
            <SpecialCard padding={"".concat(sacred_geometry_1.PHI * 1.5, "rem")}>
              <typography_1.Text variant="h4" color={(_g = theme_1.theme.colors.primary[700]) !== null && _g !== void 0 ? _g : 1}>Our Accessibility Features</typography_1.Text>
              <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI, "rem")}>
                <ListItem>Semantic HTML structure for screen reader navigation</ListItem>
                <ListItem>Keyboard accessible navigation and functionality</ListItem>
                <ListItem>Adequate color contrast ratios (WCAG AA compliant)</ListItem>
                <ListItem>Text resizing without loss of content or functionality</ListItem>
                <ListItem>Alternative text for all informative images</ListItem>
                <ListItem>Aria landmarks for improved screen reader navigation</ListItem>
              </layout_1.Box>
            </SpecialCard>

            <SpecialCard padding={"".concat(sacred_geometry_1.PHI * 1.5, "rem")}>
              <typography_1.Text variant="h4" color={(_h = theme_1.theme.colors.primary[700]) !== null && _h !== void 0 ? _h : 1}>Known Limitations</typography_1.Text>
              <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI, "rem")}>
                <ListItem>Some third-party content may not be fully accessible</ListItem>
                <ListItem>Some older PDF documents may not be fully accessible</ListItem>
                <ListItem>Some video content may not have complete captions</ListItem>
                <ListItem>Complex data visualizations may have limited accessibility</ListItem>
              </layout_1.Box>
            </SpecialCard>
          </CardContainer>
        </layout_1.Container>
      </StyledSection>

      <StyledSection backgroundColor={(_j = theme_1.theme.colors.background[100]) !== null && _j !== void 0 ? _j : 1} pt={"".concat(sacred_geometry_1.PHI * 4, "rem")} pb={"".concat(sacred_geometry_1.PHI * 4, "rem")}>
        <layout_1.Container>
          <SectionTitle_1.SectionTitle title="Feedback and Assistance" subtitle="We welcome your accessibility comments" align="center"/>
          
          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            We welcome your feedback on the accessibility of Recovery Office website and services. Please let us know if you encounter accessibility barriers or have suggestions for improvement. We are committed to continuously improving our accessibility.
          </typography_1.Paragraph>

          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            If you have specific questions about the accessibility of this site, or need assistance with any part of our website, please contact us by:
          </typography_1.Paragraph>

          <CardContainer>
            <SpecialCard padding={"".concat(sacred_geometry_1.PHI * 1.5, "rem")}>
              <typography_1.Text variant="h4" color={(_k = theme_1.theme.colors.primary[700]) !== null && _k !== void 0 ? _k : 1}>Contact Information</typography_1.Text>
              <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI, "rem")}>
                <ListItem><strong>Email:</strong> accessibility@recoveryoffice.com</ListItem>
                <ListItem><strong>Phone:</strong> (555) 123-4567</ListItem>
                <ListItem><strong>Address:</strong> 123 Healing Way, Wellness City, WC 12345</ListItem>
              </layout_1.Box>
              <layout_1.Box mt={"".concat(sacred_geometry_1.PHI, "rem")} alignSelf="flex-start">
                <button_1.Button variant="primary" size="md" href="/contact">
                  Contact Us
                </button_1.Button>
              </layout_1.Box>
            </SpecialCard>
          </CardContainer>
        </layout_1.Container>
      </StyledSection>

      <StyledSection backgroundColor={(_l = theme_1.theme.colors.primary[50]) !== null && _l !== void 0 ? _l : 1} pt={"".concat(sacred_geometry_1.PHI * 4, "rem")} pb={"".concat(sacred_geometry_1.PHI * 4, "rem")}>
        <layout_1.Container>
          <SectionTitle_1.SectionTitle title="Accessibility Assessment" subtitle="How we evaluate our website" align="left"/>
          
          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            Recovery Office assesses the accessibility of our website using a combination of automated and manual evaluation methods. We conduct regular audits using:
          </typography_1.Paragraph>

          <layout_1.Box as="ul" pl={"".concat(sacred_geometry_1.PHI * 2, "rem")} mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            <ListItem>Automated testing tools to identify potential accessibility issues</ListItem>
            <ListItem>Manual testing with assistive technologies like screen readers</ListItem>
            <ListItem>User testing with individuals who have various disabilities</ListItem>
            <ListItem>Expert reviews by accessibility specialists</ListItem>
          </layout_1.Box>

          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            We are committed to addressing identified issues and continuously improving our website's accessibility. Our internal testing and remediation process is ongoing to ensure we maintain and enhance accessibility over time.
          </typography_1.Paragraph>

          <typography_1.Text variant="h4" color={(_m = theme_1.theme.colors.primary[700]) !== null && _m !== void 0 ? _m : 1} mb={"".concat(sacred_geometry_1.PHI, "rem")} mt={"".concat(sacred_geometry_1.PHI * 2, "rem")}>
            Legal Disclaimer
          </typography_1.Text>
          <typography_1.Paragraph mb={"".concat(sacred_geometry_1.PHI, "rem")}>
            Recovery Office strives to ensure that its services are accessible to people with disabilities. However, we cannot guarantee that all content provided by third parties will be fully accessible.
          </typography_1.Paragraph>
          <typography_1.Paragraph>
            This accessibility statement was last updated on December 10, 2023.
          </typography_1.Paragraph>
        </layout_1.Container>
      </StyledSection>
    </AccessibilityPage>);
};
exports.default = Accessibility;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
