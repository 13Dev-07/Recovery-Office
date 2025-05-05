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
var Section_1 = require("../../../design-system/components/layout/Section");
var layout_1 = require("../../../design-system/components/layout");
var layout_2 = require("../../../design-system/components/layout");
var layout_3 = require("../../../design-system/components/layout");
var typography_1 = require("../../../design-system/components/typography");
var data_display_1 = require("../../../design-system/components/data-display");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", "px 0;\n  position: relative;\n  overflow: hidden;\n"], ["\n  padding: ", "px 0;\n  position: relative;\n  overflow: hidden;\n"])), sacred_geometry_1.SACRED_SPACING.xxl);
var BotanicalDecoration = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0.1;\n  z-index: 0;\n"], ["\n  position: absolute;\n  opacity: 0.1;\n  z-index: 0;\n"])));
var TopLeftDecoration = (0, styled_components_1.default)(BotanicalDecoration)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: -", "px;\n  left: -", "px;\n  transform: rotate(", "deg);\n"], ["\n  top: -", "px;\n  left: -", "px;\n  transform: rotate(", "deg);\n"])), getFibonacciByIndex(8), getFibonacciByIndex(8), sacred_geometry_1.PHI * 10);
var BottomRightDecoration = (0, styled_components_1.default)(BotanicalDecoration)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  bottom: -", "px;\n  right: -", "px;\n  transform: rotate(-", "deg);\n"], ["\n  bottom: -", "px;\n  right: -", "px;\n  transform: rotate(-", "deg);\n"])), getFibonacciByIndex(8), getFibonacciByIndex(8), sacred_geometry_1.PHI * 10);
var ServiceCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", "px;\n  height: 100%;\n  transition: transform 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-5px);\n  }\n"], ["\n  padding: ", "px;\n  height: 100%;\n  transition: transform 0.3s ease;\n  \n  &:hover {\n    transform: translateY(-5px);\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg);
var ServiceIcon = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: ", ";\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n"], ["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: ", ";\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n"])), function (props) { return props.accentColor; });
// Service grid wrapper to handle mapping services to grid items
var ServiceGridWrapper = function (_a) {
    var services = _a.services, columns = _a.columns, _b = _a.animated, animated = _b === void 0 ? false : _b;
    return (<layout_2.Grid columns={columns} gap={sacred_geometry_1.SACRED_SPACING.lg}>
      {services.map(function (service) { return (<layout_3.Box key={service.id}>
          <ServiceCard>
            <ServiceIcon accentColor={service.accentColor}>
              {service.icon.charAt(0).toUpperCase()}
            </ServiceIcon>
            <typography_1.Heading as="h3" mb={2}>
              {service.title}
            </typography_1.Heading>
            <typography_1.Text size="sm" mb={3}>
              {service.description}
            </typography_1.Text>
          </ServiceCard>
        </layout_3.Box>); })}
    </layout_2.Grid>);
};
/**
 * ServicesOverview Component
 *
 * Displays a grid of all services with decorative FlowerOfLife elements.
 * Layout and spacing follow sacred geometry principles for visual harmony.
 */
var ServicesOverview = function (_a) {
    var services = _a.services, _b = _a.title, title = _b === void 0 ? "Our Therapeutic Approach" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "Discover our holistic services" : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "#f8f9fa" : _d;
    return (<StyledSection backgroundColor={backgroundColor}>
      <TopLeftDecoration>
        <botanical_1.FlowerOfLife size={350} opacity={0.3}/>
      </TopLeftDecoration>
      
      <BottomRightDecoration>
        <botanical_1.FlowerOfLife size={350} opacity={0.3}/>
      </BottomRightDecoration>
      
      <layout_1.Container>
        <animation_1.ScrollReveal>
          <Section_1.SectionTitle title={title} subtitle={subtitle} decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
        </animation_1.ScrollReveal>
        
        <animation_1.ScrollReveal delay={0.1 * sacred_geometry_1.PHI}>
          <Section_1.SectionContent>
            <ServiceGridWrapper services={services} columns={2} animated={true}/>
          </Section_1.SectionContent>
        </animation_1.ScrollReveal>
      </layout_1.Container>
    </StyledSection>);
};
exports.default = ServicesOverview;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
