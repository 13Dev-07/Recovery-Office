"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var animation_1 = require("../../animation");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var GoldenSection_1 = require("@design-system/components/layout/GoldenSection");
/**
 * NotFound Page Component
 *
 * This component represents the 404 page of the Recovery Office website.
 * It displays a friendly error message and provides navigation back to the main site.
 * Design follows sacred geometry principles throughout.
 */
var NotFoundPage = function () {
    return (<layout_1.Box as={'main'} minHeight="100vh" display="flex" alignItems="center" backgroundColor="#f0f4f8">
      <layout_1.Container>
        <Section_1.Section>
          <animation_1.FadeIn>
            <GoldenSection_1.default direction="horizontal">
              <layout_1.Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" height="100%" pt={"".concat(sacred_geometry_1.PHI * 24, "px")} pb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                <layout_1.Box mb={"".concat(sacred_geometry_1.PHI * 16, "px")} opacity={0.8}>
                  <FlowerOfLife size="md" primaryColor="#4a6eb3"/>
                </layout_1.Box>
                
                <typography_1.Heading as="h1" display={true} mb={"".concat(sacred_geometry_1.PHI * 16, "px")} fontWeight={700}>
                  404 - Page Not Found
                </typography_1.Heading>
                
                <typography_1.Paragraph size="base" mb={"".concat(sacred_geometry_1.PHI * 24, "px")} opacity={0.8} maxWidth={"".concat(sacred_geometry_1.PHI * 400, "px")}>
                  It seems you've ventured off the path of harmony. The page you're 
                  looking for may have moved, been deleted, or never existed in the 
                  first place. Let's guide you back to balance.
                </typography_1.Paragraph>
                
                <typography_1.Text weight="semiBold" size="md" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  Would you like to:
                </typography_1.Text>
                
                <layout_1.Box display="flex" flexDirection="column" gap={"".concat(sacred_geometry_1.PHI * 8, "px")} mb={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                  <layout_1.Box display="flex" alignItems="center">
                    <layout_1.Box width="8px" height="8px" borderRadius="50%" backgroundColor="#4a6eb3" mr={"".concat(sacred_geometry_1.PHI * 8, "px")}/>
                    <typography_1.Text size="sm">Return to the <react_router_dom_1.Link to="/" style={{ color: '#4a6eb3', fontWeight: 500 }}>home page</react_router_dom_1.Link></typography_1.Text>
                  </layout_1.Box>
                  
                  <layout_1.Box display="flex" alignItems="center">
                    <layout_1.Box width="8px" height="8px" borderRadius="50%" backgroundColor="#4a6eb3" mr={"".concat(sacred_geometry_1.PHI * 8, "px")}/>
                    <typography_1.Text size="sm">Explore our <react_router_dom_1.Link to="/services" style={{ color: '#4a6eb3', fontWeight: 500 }}>services</react_router_dom_1.Link></typography_1.Text>
                  </layout_1.Box>
                  
                  <layout_1.Box display="flex" alignItems="center">
                    <layout_1.Box width="8px" height="8px" borderRadius="50%" backgroundColor="#4a6eb3" mr={"".concat(sacred_geometry_1.PHI * 8, "px")}/>
                    <typography_1.Text size="sm">Contact our <react_router_dom_1.Link to="/contact" style={{ color: '#4a6eb3', fontWeight: 500 }}>support team</react_router_dom_1.Link></typography_1.Text>
                  </layout_1.Box>
                </layout_1.Box>
                
                <button_1.Button variant="primary" size="lg" href="/">
                  Return to Home
                </button_1.Button>
              </layout_1.Box>
              <layout_1.Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                <FibonacciSpiral size="xl" primaryColor="#4a6eb3" secondaryColor="rgba(0,0,0,0)" opacity={0.5} animated/>
              </layout_1.Box>
            </GoldenSection_1.default>
          </animation_1.FadeIn>
        </Section_1.Section>
      </layout_1.Container>
    </layout_1.Box>);
};
exports.default = NotFoundPage;
