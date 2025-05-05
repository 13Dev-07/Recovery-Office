"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Section_1 = require("../../../design-system/components/layout/Section");
var layout_1 = require("../../../design-system/components/layout");
var data_display_1 = require("../../../design-system/components/data-display");
var botanical_1 = require("../../../design-system/botanical");
var typography_1 = require("../../../design-system/components/typography");
var StyledSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", "px 0;\n  position: relative;\n  overflow: hidden;\n"], ["\n  padding: ", "px 0;\n  position: relative;\n  overflow: hidden;\n"])), sacred_geometry_1.SACRED_SPACING.xxl);
var ListContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  margin-top: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.xl);
var ServiceCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  border-left: 4px solid ", ";\n  padding: ", "px;\n  background: #fff;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0,0,0,0.05);\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: column;\n  border-left: 4px solid ", ";\n  padding: ", "px;\n  background: #fff;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0,0,0,0.05);\n  position: relative;\n"])), function (props) { return props.$accentColor; }, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.lg);
var ServiceIcon = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(7), function (props) { return props.$accentColor; }, getFibonacciByIndex(5), sacred_geometry_1.SACRED_SPACING.md);
var TitleWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.sm);
var DescWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * ServicesList Component
 *
 * Displays a vertical list of services with sacred geometry-based spacing and layout.
 * Each service is shown in a card with accent color, icon, title, description, and a CTA button.
 */
var ServicesList = function (_a) {
    var services = _a.services, _b = _a.title, title = _b === void 0 ? 'Our Services' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Explore our offerings designed with sacred geometry principles' : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? '#f8f9fa' : _d;
    return (<StyledSection backgroundColor={backgroundColor}>
      <layout_1.Container>
        <Section_1.SectionTitle title={title} subtitle={subtitle} decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
        <Section_1.SectionContent>
          <ListContainer>
            {services.map(function (service) { return (<ServiceCard key={service.id} $accentColor={service.accentColor}>
                <ServiceIcon $accentColor={service.accentColor}>
                  {service.icon.charAt(0).toUpperCase()}
                </ServiceIcon>
                <TitleWrapper>
                  <typography_1.Heading as="h3">{service.title}</typography_1.Heading>
                </TitleWrapper>
                <DescWrapper>
                  <typography_1.Paragraph>{service.description}</typography_1.Paragraph>
                </DescWrapper>
                <a href={service.path} style={{
                display: 'inline-block',
                background: service.accentColor,
                color: '#fff',
                padding: "".concat(sacred_geometry_1.SACRED_SPACING.sm, "px ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px"),
                borderRadius: sacred_geometry_1.SACRED_SPACING.xs,
                textDecoration: 'none',
                fontWeight: 600,
                marginTop: sacred_geometry_1.SACRED_SPACING.md,
                alignSelf: 'flex-start',
            }}>
                  Learn More
                </a>
              </ServiceCard>); })}
          </ListContainer>
        </Section_1.SectionContent>
      </layout_1.Container>
    </StyledSection>);
};
exports.default = ServicesList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
