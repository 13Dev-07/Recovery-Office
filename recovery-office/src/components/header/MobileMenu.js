"use strict";
/**
 * MobileMenu Component
 *
 * Mobile navigation menu with toggle button and slide-in drawer effect.
 * Uses sacred geometry principles for animations and layout.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileMenu = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var Flex_1 = require("../design-system/components/layout/Flex");
var IconButton_1 = require("../design-system/components/button/IconButton");
var Link_1 = require("@design-system/components/navigation/Link");
var Button_1 = require("../design-system/components/button/Button");
var Divider_1 = require("../design-system/components/data-display/Divider");
var RegulatorBadge_1 = require("./RegulatorBadge");
var icons_1 = require("../design-system/icons");
var SlideIn_1 = require("@animation/SlideIn");
var react_router_dom_1 = require("react-router-dom");
var MenuButton = (0, styled_components_1.default)(IconButton_1.IconButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n"])), function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1;
}, SACRED_SPACING.lg);
var MenuOverlay = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", "px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  z-index: 999;\n  overflow-y: auto;\n  display: ", ";\n"], ["\n  position: fixed;\n  top: ", "px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  z-index: 999;\n  overflow-y: auto;\n  display: ", ";\n"])), SACRED_SPACING.xxl * 2, function (_a) {
    var theme = _a.theme;
    return theme.colors.background.light;
}, function (props) { return props.isOpen ? 'block' : 'none'; });
var MenuContainer = (0, styled_components_1.default)(Box_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px;\n"], ["\n  padding: ", "px;\n"])), SACRED_SPACING.lg);
var NavLink = (0, styled_components_1.default)(Link_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  padding: ", "px ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  text-decoration: none;\n  border-left: 3px solid ", ";\n  transition: background-color ", "ms ease,\n              border-left-color ", "ms ease;\n  \n  &:hover, &:focus {\n    background-color: ", ";\n    border-left-color: ", ";\n  }\n"], ["\n  display: block;\n  padding: ", "px ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  text-decoration: none;\n  border-left: 3px solid ", ";\n  transition: background-color ", "ms ease,\n              border-left-color ", "ms ease;\n  \n  &:hover, &:focus {\n    background-color: ", ";\n    border-left-color: ", ";\n  }\n"])), SACRED_SPACING.md, SACRED_SPACING.sm, SACRED_SPACING.xs, function (_a) {
    var _b;
    var theme = _a.theme, isActive = _a.isActive;
    return isActive
        ? (_b = theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1
        : theme.colors.text.primary;
}, function (_a) {
    var isActive = _a.isActive;
    return isActive ? '600' : '400';
}, SACRED_SPACING.md + 1, function (_a) {
    var _b;
    var theme = _a.theme, isActive = _a.isActive;
    return isActive
        ? (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1
        : 'transparent';
}, ANIMATION_TIMING.quick, ANIMATION_TIMING.quick, function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[50]) !== null && _b !== void 0 ? _b : 1;
}, function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[300]) !== null && _b !== void 0 ? _b : 1;
});
var ActionButtonContainer = (0, styled_components_1.default)(Box_1.Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"])), SACRED_SPACING.xl, SACRED_SPACING.lg);
/**
 * MobileMenu Component
 *
 * Mobile navigation menu with toggle button and slide-in effect.
 * Implements sacred geometry for spacing and animations.
 */
var MobileMenu = function (_a) {
    var isOpen = _a.isOpen, onToggle = _a.onToggle, className = _a.className;
    var location = (0, react_router_dom_1.useLocation)();
    // Nav items (same as desktop)
    var navItems = [
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
    ];
    // Calculate if a nav item is active
    var isNavItemActive = function (href) {
        return location.pathname === href ||
            (href !== '/' && location.pathname.startsWith(href));
    };
    return (<Box_1.Box className={className}>
      {/* Toggle Button */}
      <MenuButton onClick={onToggle} aria-label={isOpen ? "Close menu" : "Open menu"} icon={isOpen ? <icons_1.CloseIcon /> : <icons_1.MenuIcon />} variant="ghost" size="md"/>
      
      {/* Mobile Menu Overlay */}
      <MenuOverlay isOpen={isOpen}>
        <SlideIn_1.SlideIn isVisible={isOpen} direction="right" duration={ANIMATION_TIMING.standard}>
          <MenuContainer>
            {/* Navigation Links */}
            <Box_1.Box as="nav">
              {navItems.map(function (item, index) { return (<NavLink key={index} href={item.href} isActive={isNavItemActive(item.href)} onClick={onToggle} style={{
                transitionDelay: "".concat(getFibonacciByIndex(3) * index, "ms")
            }}>
                  {item.label}
                </NavLink>); })}
            </Box_1.Box>
            
            {/* Action Button */}
            <ActionButtonContainer>
              <Button_1.Button as={Link_1.default} href="/booking" variant="primary" size="md" width="100%" onClick={onToggle}>
                Book Consultation
              </Button_1.Button>
            </ActionButtonContainer>
            
            <Divider_1.Divider my={SACRED_SPACING.lg}/>
            
            {/* Regulator Badge */}
            <Flex_1.Flex justify="center" mt={SACRED_SPACING.xl}>
              <RegulatorBadge_1.RegulatorBadge />
            </Flex_1.Flex>
          </MenuContainer>
        </SlideIn_1.SlideIn>
      </MenuOverlay>
    </Box_1.Box>);
};
exports.MobileMenu = MobileMenu;
exports.default = exports.MobileMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
