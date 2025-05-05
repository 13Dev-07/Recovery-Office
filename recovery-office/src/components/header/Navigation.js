"use strict";
/**
 * Navigation Component
 *
 * Main navigation component for desktop view, implementing sacred geometry
 * principles for spacing and transitions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Flex_1 = require("../design-system/components/layout/Flex");
var Link_1 = require("../design-system/components/navigation/Link");
var NavigationItem_1 = require("./NavigationItem");
var Button_1 = require("../design-system/components/button/Button");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
var NavContainer = (0, styled_components_1.default)(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  gap: ", "px;\n"], ["\n  gap: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI);
var ActionButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: ", "px;\n"], ["\n  margin-left: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Navigation Component
 *
 * Horizontal navigation bar for desktop view, implementing sacred geometry
 * principles for spacing and transitions.
 */
var Navigation = function (_a) {
    var className = _a.className;
    // Navigation items with sacred spacing
    var navItems = [
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
    ];
    return (<NavContainer className={className} as="nav" alignItems="center">
      {navItems.map(function (item, index) { return (<NavigationItem_1.NavigationItem key={index} href={item.href} 
        // Fibonacci-based delay for hover animations
        delay={(0, getFibonacciByIndex_1.getFibonacciByIndex)(3) * index}>
          {item.label}
        </NavigationItem_1.NavigationItem>); })}
      
      <ActionButton as={Link_1.Link} href="/booking" variant="primary" size="sm">
        Book Consultation
      </ActionButton>
    </NavContainer>);
};
exports.Navigation = Navigation;
exports.default = exports.Navigation;
var templateObject_1, templateObject_2;
