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
var layout_1 = require("../../../design-system/components/layout");
var Section_1 = require("../../../design-system/components/layout/Section");
var typography_1 = require("../../../design-system/components/typography");
var data_display_1 = require("../../../design-system/components/data-display");
var button_1 = require("../../../design-system/components/button");
var ServiceSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"], ["\n  width: 100%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xxl);
var ServiceHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding-bottom: ", "px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: ", "px;\n  display: flex;\n  align-items: center;\n"], ["\n  width: 100%;\n  padding-bottom: ", "px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: ", "px;\n  display: flex;\n  align-items: center;\n"])), sacred_geometry_1.PHI * 8, sacred_geometry_1.PHI * 24);
var ServiceIcon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n"], ["\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n"])), function (props) { return props.$backgroundColor; });
var ServiceContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr ", "fr;\n  gap: ", "px;\n  width: 100%;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 1fr ", "fr;\n  gap: ", "px;\n  width: 100%;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"])), sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI * 24);
var ServiceDescription = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
var ServiceBenefits = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.PHI * 24, sacred_geometry_1.PHI * 32);
var BenefitsList = styled_components_1.default.ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding-left: ", "px;\n"], ["\n  padding-left: ", "px;\n"])), sacred_geometry_1.PHI * 16);
var BenefitItem = styled_components_1.default.li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.PHI * 8);
var ServiceDetailsCard = (0, styled_components_1.default)(data_display_1.Card)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background-color: white;\n  border-top: 4px solid ", ";\n"], ["\n  background-color: white;\n  border-top: 4px solid ", ";\n"])), function (props) { return props.$accentColor; });
var DetailItem = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.PHI * 16);
var BotanicalIndicator = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: ", "px;\n"])), sacred_geometry_1.PHI * 16);
/**
 * ServicesDetails Component
 *
 * Displays detailed information about each service including
 * description, benefits, pricing, and duration. Layout follows
 * sacred geometry principles with golden ratio proportions.
 */
var ServicesDetails = function (_a) {
    var services = _a.services;
    return (<>
      {services.map(function (service, index) { return (<animation_1.ScrollReveal key={service.id} threshold={0.1}>
          <Section_1.Section id={service.id} backgroundColor={index % 2 === 0 ? '#ffffff' : '#f0f4f8'}>
            <layout_1.Container>
              <ServiceSection>
                <ServiceHeader>
                  <ServiceIcon $backgroundColor={service.accentColor}>
                    <span>{service.icon.charAt(0).toUpperCase()}</span>
                  </ServiceIcon>
                  <typography_1.Heading as="h2" mb={0}>
                    {service.title}
                  </typography_1.Heading>
                </ServiceHeader>
                
                <ServiceContent>
                  <div>
                    <ServiceDescription>
                      <typography_1.Paragraph size="base">
                        {service.longDescription}
                      </typography_1.Paragraph>
                    </ServiceDescription>
                    
                    <ServiceBenefits>
                      <typography_1.Heading as="h3" mb={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        Benefits
                      </typography_1.Heading>
                      <BenefitsList>
                        {service.benefits.map(function (benefit, idx) { return (<BenefitItem key={idx}>
                            <typography_1.Text size="sm">{benefit}</typography_1.Text>
                          </BenefitItem>); })}
                      </BenefitsList>
                    </ServiceBenefits>
                    
                    <layout_1.Box mt={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                      <button_1.Button variant="primary" href={"/booking?service=".concat(service.id)}>
                        Book This Service
                      </button_1.Button>
                    </layout_1.Box>
                  </div>
                  
                  <div>
                    <ServiceDetailsCard elevation={2} padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" $accentColor={service.accentColor}>
                      <typography_1.Heading as="h3" mb={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                        Service Details
                      </typography_1.Heading>
                      
                      <DetailItem>
                        <typography_1.Text weight="medium" size="sm" mb={"".concat(sacred_geometry_1.PHI * 4, "px")}>
                          Duration:
                        </typography_1.Text>
                        <typography_1.Text size="sm">
                          {service.duration}
                        </typography_1.Text>
                      </DetailItem>
                      
                      <DetailItem>
                        <typography_1.Text weight="medium" size="sm" mb={"".concat(sacred_geometry_1.PHI * 4, "px")}>
                          Pricing:
                        </typography_1.Text>
                        {'initial' in service.pricing ? (<>
                            <typography_1.Text size="sm">
                              Initial Session: ${service.pricing.initial}
                            </typography_1.Text>
                            <typography_1.Text size="sm">
                              Follow-Up Sessions: ${service.pricing.followUp}
                            </typography_1.Text>
                          </>) : (<>
                            <typography_1.Text size="sm">
                              Workshop: ${service.pricing.workshop} per person
                            </typography_1.Text>
                            <typography_1.Text size="sm">
                              Private Session: ${service.pricing.privateSession}
                            </typography_1.Text>
                          </>)}
                      </DetailItem>
                      
                      <DetailItem>
                        <typography_1.Text weight="medium" size="sm" mb={"".concat(sacred_geometry_1.PHI * 4, "px")}>
                          Location:
                        </typography_1.Text>
                        <typography_1.Text size="sm">
                          Recovery Office - In-person or Virtual
                        </typography_1.Text>
                      </DetailItem>
                      
                      <BotanicalIndicator>
                        {service.id === 'recovery-consultation' && (<botanical_1.VesicaPiscis size="md" opacity={0.2} style={{ marginRight: '8px' }}/>)}
                        {service.id === 'therapeutic-sessions' && (<botanical_1.FlowerOfLife size="sm" opacity={0.2} style={{ marginRight: '8px' }}/>)}
                        {service.id === 'botanical-therapy' && (<botanical_1.OliveBranch size="md" opacity={0.2} style={{ marginRight: '8px' }}/>)}
                        {service.id === 'sacred-education' && (<botanical_1.FlowerOfLife size="sm" opacity={0.2} style={{ marginRight: '8px' }}/>)}
                        <typography_1.Text size="xs" italic={true}>
                          This service incorporates sacred geometry principles in its approach
                        </typography_1.Text>
                      </BotanicalIndicator>
                    </ServiceDetailsCard>
                  </div>
                </ServiceContent>
              </ServiceSection>
            </layout_1.Container>
          </Section_1.Section>
        </animation_1.ScrollReveal>); })}
    </>);
};
exports.default = ServicesDetails;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
