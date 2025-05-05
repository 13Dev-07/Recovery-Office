"use strict";
/**
 * FooterSocial Component
 *
 * Displays social media links in the footer using sacred geometry principles
 * for spacing and layout.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterSocial = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Flex_1 = require("../design-system/components/layout/Flex");
var IconButton_1 = require("../design-system/components/button/IconButton");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var sacredGeometry_1 = require("@utils/sacredGeometry");
// Social media icons
var icons_1 = require("../design-system/icons");
var SocialWrapper = (0, styled_components_1.default)(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  gap: ", "px;\n"], ["\n  gap: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var SocialButton = (0, styled_components_1.default)(IconButton_1.IconButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  opacity: 0.7;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  \n  &:hover, &:focus {\n    opacity: 1;\n    transform: translateY(-", "px);\n  }\n"], ["\n  color: ", ";\n  opacity: 0.7;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  \n  &:hover, &:focus {\n    opacity: 1;\n    transform: translateY(-", "px);\n  }\n"])), function (props) { return props.theme.colors.text.inverse; }, sacred_geometry_1.SACRED_SPACING.xxs);
/**
 * FooterSocial Component
 *
 * Displays social media links with proper spacing following sacred geometry principles.
 * Icons are properly sized based on Fibonacci sequence.
 */
var FooterSocial = function (_a) {
    var className = _a.className;
    // Social media platforms data
    var socialLinks = [
        {
            name: 'LinkedIn',
            icon: <icons_1.LinkedInIcon />,
            href: 'https://linkedin.com/company/recovery-office',
            label: 'Visit Recovery Office LinkedIn page'
        },
        {
            name: 'Twitter',
            icon: <icons_1.TwitterIcon />,
            href: 'https://twitter.com/recoveryoffice',
            label: 'Visit Recovery Office Twitter page'
        },
        {
            name: 'Facebook',
            icon: <icons_1.FacebookIcon />,
            href: 'https://facebook.com/recoveryoffice',
            label: 'Visit Recovery Office Facebook page'
        },
        {
            name: 'Instagram',
            icon: <icons_1.InstagramIcon />,
            href: 'https://instagram.com/recoveryoffice',
            label: 'Visit Recovery Office Instagram page'
        }
    ];
    // Icon size based on Fibonacci sequence
    var iconSize = (0, sacredGeometry_1.getFibonacciByIndex)(5); // 5px
    return (<SocialWrapper className={className} alignItems="center">
      {socialLinks.map(function (social, index) { return (<SocialButton key={index} as="a" href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" size="md" variant="ghost" icon={social.icon} title={social.name}/>); })}
    </SocialWrapper>);
};
exports.FooterSocial = FooterSocial;
exports.default = exports.FooterSocial;
var templateObject_1, templateObject_2;
