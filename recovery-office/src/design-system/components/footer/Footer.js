"use strict";
/**
 * Footer Component
 *
 * A comprehensive footer component with support for links, newsletter signup,
 * and social media icons. Built with sacred geometry spacing and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container_1 = require("../layout/Container");
var Text_1 = require("../typography/Text");
var botanical_1 = require("../botanical");
var FooterLinks_1 = require("./FooterLinks");
var FooterNewsletter_1 = require("./FooterNewsletter");
var FooterSocial_1 = require("./FooterSocial");
// Main footer container with appropriate spacing and borders
var FooterContainer = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  padding: ", "px 0 ", "px;\n  background-color: ", ";\n  color: ", ";\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 100%;\n  padding: ", "px 0 ", "px;\n  background-color: ", ";\n  color: ", ";\n  overflow: hidden;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.primary[900]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.colors.white; });
// Upper section with links and newsletter
var UpperSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n    gap: ", "px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n    gap: ", "px;\n  }\n"])), PHI_INVERSE * 100, (1 - PHI_INVERSE) * 100, getFibonacciByIndex(6), getFibonacciByIndex(7), function (props) { return props.theme.breakpoints.lg; }, getFibonacciByIndex(7));
// Lower section with logo, copyright, and social
var LowerSection = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: ", "px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: ", "px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n"])), getFibonacciByIndex(6));
// Logo container with spacing
var LogoContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  max-width: 120px;\n"], ["\n  margin-bottom: ", "px;\n  max-width: 120px;\n"])), getFibonacciByIndex(5));
// Company name with appropriate typography
var CompanyName = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: ", "px;\n"], ["\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(3));
// Copyright text with reduced opacity using golden ratio
var Copyright = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  opacity: ", ";\n  margin-bottom: ", "px;\n"], ["\n  opacity: ", ";\n  margin-bottom: ", "px;\n"])), PHI_INVERSE, getFibonacciByIndex(6));
// Legal links with proper spacing
var LegalLinks = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n    gap: ", "px;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n    gap: ", "px;\n    align-items: center;\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(4), function (props) { return props.theme.breakpoints.sm; }, getFibonacciByIndex(3));
// Legal link styling
var LegalLink = styled_components_1.default.a(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  opacity: ", ";\n  text-decoration: none;\n  transition: opacity 0.2s;\n  \n  &:hover {\n    opacity: 1;\n  }\n"], ["\n  color: ", ";\n  opacity: ", ";\n  text-decoration: none;\n  transition: opacity 0.2s;\n  \n  &:hover {\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.colors.white; }, PHI_INVERSE);
/**
 * Footer component for website footers using sacred geometry principles.
 * Includes support for multiple link sections, newsletter signup, and social links.
 */
var Footer = function (_a) {
    var logo = _a.logo, companyName = _a.companyName, _b = _a.copyrightText, copyrightText = _b === void 0 ? "\u00A9 ".concat(new Date().getFullYear(), " ").concat(companyName, ". All rights reserved.") : _b, _c = _a.linkSections, linkSections = _c === void 0 ? [] : _c, _d = _a.socialLinks, socialLinks = _d === void 0 ? [] : _d, _e = _a.showNewsletter, showNewsletter = _e === void 0 ? true : _e, _f = _a.newsletterTitle, newsletterTitle = _f === void 0 ? "Stay Updated" : _f, _g = _a.newsletterDescription, newsletterDescription = _g === void 0 ? "Subscribe to our newsletter for the latest updates and exclusive content." : _g, _h = _a.privacyPolicyUrl, privacyPolicyUrl = _h === void 0 ? "/privacy-policy" : _h, _j = _a.termsOfServiceUrl, termsOfServiceUrl = _j === void 0 ? "/terms-of-service" : _j, botanical = _a.botanical, className = _a.className, style = _a.style;
    return (<FooterContainer className={className} style={style}>
      {botanical && (<botanical_1.BotanicalElement type={botanical.type} position={botanical.position} size={botanical.size} opacity={botanical.opacity || 0.05}/>)}
      
      <Container_1.Container>
        <UpperSection>
          {linkSections.length > 0 && (<FooterLinks_1.default sections={linkSections}/>)}
          
          {showNewsletter && (<FooterNewsletter_1.default title={newsletterTitle} description={newsletterDescription}/>)}
        </UpperSection>
        
        <LowerSection>
          {logo && (<LogoContainer>
              {logo}
            </LogoContainer>)}
          
          <CompanyName>{companyName}</CompanyName>
          <Copyright>{copyrightText}</Copyright>
          
          {socialLinks.length > 0 && (<FooterSocial_1.default links={socialLinks}/>)}
          
          <LegalLinks>
            {privacyPolicyUrl && (<LegalLink href={privacyPolicyUrl}>
                Privacy Policy
              </LegalLink>)}
            
            {termsOfServiceUrl && (<LegalLink href={termsOfServiceUrl}>
                Terms of Service
              </LegalLink>)}
          </LegalLinks>
        </LowerSection>
      </Container_1.Container>
    </FooterContainer>);
};
exports.default = Footer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
