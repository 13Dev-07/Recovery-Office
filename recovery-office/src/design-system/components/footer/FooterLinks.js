"use strict";
/**
 * FooterLinks Component
 *
 * A component that displays a group of links in the footer,
 * following sacred geometry principles for spacing and layout.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var Heading_1 = require("../typography/Heading");
// Container for all link sections
var LinksContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6));
// Individual link section
var LinkSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6));
// Section heading with golden ratio underline
var SectionTitle = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  padding-bottom: ", "px;\n  position: relative;\n  font-size: 1.1rem;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: ", "%;\n    height: 2px;\n    background-color: ", ";\n    opacity: 0.5;\n  }\n"], ["\n  margin-bottom: ", "px;\n  padding-bottom: ", "px;\n  position: relative;\n  font-size: 1.1rem;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: ", "%;\n    height: 2px;\n    background-color: ", ";\n    opacity: 0.5;\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), PHI_INVERSE * 100, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
// Links list with Fibonacci spacing
var LinksList = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  \n  li + li {\n    margin-top: ", "px;\n  }\n"], ["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  \n  li + li {\n    margin-top: ", "px;\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(3));
// Individual link item
var LinkItem = styled_components_1.default.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transition: transform 0.2s;\n  \n  &:hover {\n    transform: translateX(", "px);\n  }\n"], ["\n  transition: transform 0.2s;\n  \n  &:hover {\n    transform: translateX(", "px);\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(2));
// Link styling
var Link = styled_components_1.default.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  opacity: ", ";\n  text-decoration: none;\n  display: inline-block;\n  transition: opacity 0.2s;\n  \n  &:hover {\n    opacity: 1;\n  }\n"], ["\n  color: ", ";\n  opacity: ", ";\n  text-decoration: none;\n  display: inline-block;\n  transition: opacity 0.2s;\n  \n  &:hover {\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.colors.white; }, PHI_INVERSE);
/**
 * FooterLinks component that displays organized link sections in the footer
 * with sacred geometry proportions and subtle animations.
 */
var FooterLinks = function (_a) {
    var sections = _a.sections, className = _a.className;
    return (<LinksContainer className={className}>
      {sections.map(function (section, index) { return (<LinkSection key={"section-".concat(index)}>
          <SectionTitle as="h4" variant="h6">
            {section.title}
          </SectionTitle>
          
          <LinksList>
            {section.links.map(function (link, linkIndex) { return (<LinkItem key={"link-".concat(linkIndex)}>
                <Link href={link.url} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
                  {link.label}
                </Link>
              </LinkItem>); })}
          </LinksList>
        </LinkSection>); })}
    </LinksContainer>);
};
exports.default = FooterLinks;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
