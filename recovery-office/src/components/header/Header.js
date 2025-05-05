"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * Header Component
 *
 * Main header component with navigation, implementing sacred geometry principles
 * for layout, spacing, and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var Container_1 = require("../design-system/components/layout/Container");
var Flex_1 = require("../design-system/components/layout/Flex");
var useScrollPosition_1 = require("../hooks/useScrollPosition");
var Navigation_1 = require("./Navigation");
var MobileMenu_1 = require("./MobileMenu");
var RegulatorBadge_1 = require("./RegulatorBadge");
var colors_1 = require("../design-system/tokens/colors");
var VesicaPiscis_1 = require("../design-system/botanical/VesicaPiscis");
var HeaderWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  transition: background-color ", "ms ease,\n              box-shadow ", "ms ease;\n  background-color: ", ";\n  box-shadow: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  transition: background-color ", "ms ease,\n              box-shadow ", "ms ease;\n  background-color: ", ";\n  box-shadow: ", ";\n"])), ANIMATION_TIMING.standard, ANIMATION_TIMING.standard, function (props) { return props.isScrolled
    ? props.theme.colors.background.primary
    : 'transparent'; }, function (props) { return props.isScrolled
    ? '0 4px 20px rgba(0, 0, 0, 0.08)'
    : 'none'; });
var HeaderContainer = (0, styled_components_1.default)(Container_1.Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), SACRED_SPACING.xxl * 2, SACRED_SPACING.sm, SACRED_SPACING.sm);
var Logo = styled_components_1.default.a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: ", ";\n  transition: transform ", "ms ease;\n  \n  &:hover {\n    transform: scale(", ");\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: ", ";\n  transition: transform ", "ms ease;\n  \n  &:hover {\n    transform: scale(", ");\n  }\n"])), function (props) { var _a; return (_a = props.theme.colors.primary[800]) !== null && _a !== void 0 ? _a : 1; }, ANIMATION_TIMING.quick, 1 + (1 - PHI_INVERSE) / 10);
var LogoText = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  font-size: ", "px;\n  font-weight: 600;\n  margin-left: ", "px;\n"], ["\n  font-family: 'Playfair Display', serif;\n  font-size: ", "px;\n  font-weight: 600;\n  margin-left: ", "px;\n"])), SACRED_SPACING.lg, SACRED_SPACING.xs);
/**
 * Header Component
 *
 * Main header with navigation and responsive behavior.
 * Implements sacred geometry principles for spacing and transitions.
 */
var Header = function (_a) {
    var _b;
    var className = _a.className;
    // Track if menu is open for mobile
    var _c = (0, react_1.useState)(false), isMobileMenuOpen = _c[0], setMobileMenuOpen = _c[1];
    // Track scroll position to change header appearance
    var scrollPosition = (0, useScrollPosition_1.useScrollPosition)();
    var isScrolled = scrollPosition > SACRED_SPACING.xxl;
    // Toggle mobile menu
    var toggleMobileMenu = function () {
        setMobileMenuOpen(function (prev) { return !prev; });
    };
    // Close mobile menu on window resize (if crossing breakpoint)
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [isMobileMenuOpen]);
    return (<HeaderWrapper className={className} isScrolled={isScrolled || isMobileMenuOpen} as="header">
      <HeaderContainer>
        <Logo href="/" aria-label="Recovery Office Home">
          <VesicaPiscis_1.VesicaPiscis width={34} color={(_b = colors_1.colors.primary[700]) !== null && _b !== void 0 ? _b : 1} rotation={45}/>
          <LogoText>Recovery Office</LogoText>
        </Logo>
        
        <Flex_1.Flex align="center">
          {/* Regulator Badge - Hidden on mobile */}
          <Box_1.Box display={{ base: 'none', md: 'block' }} mr={SACRED_SPACING.md}>
            <RegulatorBadge_1.RegulatorBadge />
          </Box_1.Box>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <Box_1.Box display={{ base: 'none', md: 'block' }}>
            <Navigation_1.Navigation />
          </Box_1.Box>
          
          {/* Mobile Menu Button - Hidden on desktop */}
          <Box_1.Box display={{ base: 'block', md: 'none' }}>
            <MobileMenu_1.MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu}/>
          </Box_1.Box>
        </Flex_1.Flex>
      </HeaderContainer>
    </HeaderWrapper>);
};
exports.Header = Header;
exports.default = exports.Header;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
