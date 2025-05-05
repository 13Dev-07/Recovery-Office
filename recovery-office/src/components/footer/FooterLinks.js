"use strict";
/**
 * FooterLinks Component
 *
 * Displays navigation links in the footer following sacred geometry principles.
 * Links are organized into categories with proper spacing and layout.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterLinks = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Link_1 = require("@design-system/components/navigation/Link");
var Box_1 = require("@design-system/components/layout/Box");
var Grid_1 = require("@design-system/components/layout/Grid");
var Heading_1 = require("@design-system/components/typography/Heading");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var LinkGroup = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.lg);
var LinkHeading = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n  font-weight: 500;\n"], ["\n  margin-bottom: ", "px;\n  font-size: ", "px;\n  font-weight: 500;\n"])), sacred_geometry_1.SACRED_SPACING.md, getFibonacciByIndex(5));
var FooterLinkStyled = (0, styled_components_1.default)(Link_1.Link)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  opacity: 0.8;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  transition: opacity 0.2s ease;\n  \n  &:hover, &:focus {\n    opacity: 1;\n    text-decoration: none;\n  }\n"], ["\n  display: block;\n  color: ", ";\n  opacity: 0.8;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  transition: opacity 0.2s ease;\n  \n  &:hover, &:focus {\n    opacity: 1;\n    text-decoration: none;\n  }\n"])), function (props) { return props.theme.colors.text.inverse; }, getFibonacciByIndex(4), sacred_geometry_1.SACRED_SPACING.sm);
/**
 * FooterLinks Component
 *
 * Displays navigation links organized in categories for the footer.
 * Links are spaced according to Fibonacci sequence values.
 */
var FooterLinks = function (_a) {
    var className = _a.className;
    // Link data organized by category
    var linkData = [
        {
            heading: 'Services',
            links: [
                { title: 'Investment Recovery', href: '/services/investment-recovery' },
                { title: 'Fraud Claims', href: '/services/fraud-claims' },
                { title: 'Financial Consultation', href: '/services/financial-consultation' },
                { title: 'Wealth Protection', href: '/services/wealth-protection' }
            ]
        },
        {
            heading: 'Company',
            links: [
                { title: 'About Us', href: '/about' },
                { title: 'Our Team', href: '/about/team' },
                { title: 'Careers', href: '/careers' },
                { title: 'Contact', href: '/contact' }
            ]
        }
    ];
    return (<Box_1.Box className={className}>
      <Grid_1.Grid templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)"
        }} gap={sacred_geometry_1.SACRED_SPACING.lg}>
        {linkData.map(function (category, index) { return (<LinkGroup key={index}>
            <LinkHeading as="h4" size="xs">
              {category.heading}
            </LinkHeading>
            {category.links.map(function (link, linkIndex) { return (<FooterLinkStyled key={linkIndex} href={link.href} aria-label={"Go to ".concat(link.title)}>
                {link.title}
              </FooterLinkStyled>); })}
          </LinkGroup>); })}
      </Grid_1.Grid>
    </Box_1.Box>);
};
exports.FooterLinks = FooterLinks;
exports.default = exports.FooterLinks;
var templateObject_1, templateObject_2, templateObject_3;
