"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: This file contains direct window access without SSR checks
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
// Import components
var NavigationItem_1 = require("./NavigationItem");
var botanical_1 = require("../botanical");
/**
 * NavBar Component
 *
 * A navigation bar component that follows sacred geometry principles
 * for spacing, proportions, and animations.
 */
var NavBar = function (_a) {
    var items = _a.items, logo = _a.logo, _b = _a.ctas, ctas = _b === void 0 ? [] : _b, _c = _a.isTransparent, isTransparent = _c === void 0 ? false : _c, _d = _a.showBotanical, showBotanical = _d === void 0 ? false : _d, _e = _a.showRegulatoryBadges, showRegulatoryBadges = _e === void 0 ? false : _e, regulatoryBadges = _a.regulatoryBadges, _f = _a.mobileEnabled, mobileEnabled = _f === void 0 ? true : _f, _g = _a.mobileBreakpoint, mobileBreakpoint = _g === void 0 ? 768 : _g, className = _a.className, _h = _a.isDesktop, isDesktop = _h === void 0 ? true : _h, _j = _a["data-testid"], testId = _j === void 0 ? 'sacred-navbar' : _j;
    // Mobile menu state
    var _k = (0, react_1.useState)(false), isMobileMenuOpen = _k[0], setIsMobileMenuOpen = _k[1];
    var _l = (0, react_1.useState)(false), isMobile = _l[0], setIsMobile = _l[1];
    // Toggle mobile menu
    var toggleMobileMenu = function () {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    // Handle responsive behavior
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setIsMobile(window.innerWidth < mobileBreakpoint);
        };
        // Set initial state
        handleResize();
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Cleanup
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileBreakpoint]);
    // Close mobile menu when resizing to desktop
    (0, react_1.useEffect)(function () {
        if (!isMobile && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobile, isMobileMenuOpen]);
    return (<Container className={className} data-testid={testId} $isTransparent={isTransparent}>
      <NavContainer>
        {/* Logo */}
        <LogoContainer>
          {logo}
          
          {/* Botanical accent for logo */}
          {showBotanical && (<BotanicalAccent>
              <botanical_1.BotanicalElement variant="smallFlourish" size="xs" opacity={0.15} colorScheme="primary"/>
            </BotanicalAccent>)}
        </LogoContainer>
        
        {/* Desktop navigation */}
        {isDesktop && !isMobile && (<DesktopNav $isTransparent={isTransparent}>
            {/* Navigation items */}
            <NavItems>
              {items.map(function (item, index) { return (<NavigationItem_1.default key={"nav-item-".concat(index)} label={item.label} path={item.path} isActive={item.isActive} isPrimary={item.isPrimary} icon={item.icon} subItems={item.subItems}/>); })}
            </NavItems>
            
            {/* CTAs */}
            {ctas.length > 0 && (<CTAContainer>
                {ctas.map(function (cta, index) { return (<NavigationItem_1.default key={"cta-".concat(index)} label={cta.label} path={cta.path} isPrimary={cta.isPrimary} isButton={true} icon={cta.icon}/>); })}
              </CTAContainer>)}
          </DesktopNav>)}
        
        {/* Mobile menu toggle */}
        {mobileEnabled && isMobile && (<MobileMenuToggle onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen} aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
            <ToggleBar $isOpen={isMobileMenuOpen} $index={1}/>
            <ToggleBar $isOpen={isMobileMenuOpen} $index={2}/>
            <ToggleBar $isOpen={isMobileMenuOpen} $index={3}/>
          </MobileMenuToggle>)}
      </NavContainer>
      
      {/* Regulatory badges */}
      {showRegulatoryBadges && (<RegulatoryBadgeContainer>
          {regulatoryBadges}
        </RegulatoryBadgeContainer>)}
      
      {/* Mobile menu */}
      {mobileEnabled && isMobile && (<MobileMenu $isOpen={isMobileMenuOpen} $isTransparent={isTransparent}>
          {/* Mobile navigation items */}
          <MobileNavItems>
            {items.map(function (item, index) { return (<MobileNavItem key={"mobile-nav-item-".concat(index)}>
                <NavigationItem_1.default label={item.label} path={item.path} isActive={item.isActive} isPrimary={false} icon={item.icon} subItems={item.subItems} onClick={function () { return setIsMobileMenuOpen(false); }}/>
              </MobileNavItem>); })}
            
            {/* Mobile CTAs */}
            {ctas.length > 0 && (<MobileCTAContainer>
                {ctas.map(function (cta, index) { return (<MobileNavItem key={"mobile-cta-".concat(index)}>
                    <NavigationItem_1.default label={cta.label} path={cta.path} isPrimary={cta.isPrimary} isButton={true} icon={cta.icon} onClick={function () { return setIsMobileMenuOpen(false); }}/>
                  </MobileNavItem>); })}
              </MobileCTAContainer>)}
          </MobileNavItems>
          
          {/* Mobile botanical accent */}
          {showBotanical && (<MobileBotanicalAccent>
              <botanical_1.BotanicalElement variant="flowerOfLife" size="md" opacity={0.05} colorScheme="primary"/>
            </MobileBotanicalAccent>)}
        </MobileMenu>)}
    </Container>);
};
var Container = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  background-color: ", ";\n  box-shadow: ", ";\n  z-index: 100;\n"], ["\n  position: relative;\n  width: 100%;\n  background-color: ", ";\n  box-shadow: ", ";\n  z-index: 100;\n"])), function (_a) {
    var _b;
    var theme = _a.theme, $isTransparent = _a.$isTransparent;
    return $isTransparent ? 'transparent' : (_b = theme.colors.background[50]) !== null && _b !== void 0 ? _b : 1;
}, function (_a) {
    var theme = _a.theme, $isTransparent = _a.$isTransparent;
    return $isTransparent ? 'none' : theme.shadows.sm;
});
var NavContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px; /* 55px */\n  padding: 0 ", "px; /* 0 13px */\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  \n  @media (min-width: 992px) {\n    padding: 0 ", "px; /* 0 21px */\n    height: ", "px; /* 89px */\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px; /* 55px */\n  padding: 0 ", "px; /* 0 13px */\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  \n  @media (min-width: 992px) {\n    padding: 0 ", "px; /* 0 21px */\n    height: ", "px; /* 89px */\n  }\n"])), getFibonacciByIndex(10), getFibonacciByIndex(7), getFibonacciByIndex(8), getFibonacciByIndex(11));
var LogoContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 100%;\n  z-index: 1;\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 100%;\n  z-index: 1;\n"])));
var BotanicalAccent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  transform: rotate(", "deg);\n  z-index: -1;\n"], ["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  transform: rotate(", "deg);\n  z-index: -1;\n"])), -getFibonacciByIndex(5), -getFibonacciByIndex(5), -45 * PHI_INVERSE);
var DesktopNav = styled_components_1.default.nav(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var NavItems = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: ", "px; /* 13px */\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: ", "px; /* 13px */\n"])), getFibonacciByIndex(7));
var CTAContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: ", "px; /* 5px */\n  \n  & > * + * {\n    margin-left: ", "px; /* 5px */\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: ", "px; /* 5px */\n  \n  & > * + * {\n    margin-left: ", "px; /* 5px */\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(5));
var RegulatoryBadgeContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  right: ", "px; /* 21px */\n  transform: translateY(50%);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  right: ", "px; /* 21px */\n  transform: translateY(50%);\n"])), getFibonacciByIndex(8));
var MobileMenuToggle = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: ", "px; /* 21px */\n  height: ", "px; /* 13px */\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 110;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: ", "px; /* 21px */\n  height: ", "px; /* 13px */\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 110;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7));
var ToggleBar = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px; /* 2px */\n  background-color: ", ";\n  border-radius: ", "px; /* 1px */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Transform based on open state */\n  ", "\n"], ["\n  width: 100%;\n  height: ", "px; /* 2px */\n  background-color: ", ";\n  border-radius: ", "px; /* 1px */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Transform based on open state */\n  ", "\n"])), getFibonacciByIndex(3), function (props) { return props.theme.colors.text.primary; }, getFibonacciByIndex(2), PHI_INVERSE, 1 - PHI_INVERSE, function (_a) {
    var $isOpen = _a.$isOpen, $index = _a.$index;
    if ($isOpen) {
        if ($index === 1) {
            return "\n          transform: translateY(".concat(getFibonacciByIndex(5), "px) rotate(45deg);\n        ");
        }
        if ($index === 2) {
            return "\n          opacity: 0;\n        ";
        }
        if ($index === 3) {
            return "\n          transform: translateY(-".concat(getFibonacciByIndex(5), "px) rotate(-45deg);\n        ");
        }
    }
    return '';
});
var MobileMenu = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: ", ";\n  z-index: 100;\n  padding-top: ", "px; /* 89px */\n  overflow-y: auto;\n  opacity: ", ";\n  visibility: ", ";\n  transform: translateY(", ");\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: ", ";\n  z-index: 100;\n  padding-top: ", "px; /* 89px */\n  overflow-y: auto;\n  opacity: ", ";\n  visibility: ", ";\n  transform: translateY(", ");\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(11), function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 1 : 0;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 'visible' : 'hidden';
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 0 : "-".concat(getFibonacciByIndex(7), "px");
}, PHI_INVERSE, 1 - PHI_INVERSE);
var MobileNavItems = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px; /* 21px 13px */\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: ", "px ", "px; /* 21px 13px */\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7));
var MobileNavItem = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-bottom: ", "px; /* 13px */\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  margin-bottom: ", "px; /* 13px */\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), getFibonacciByIndex(7));
var MobileCTAContainer = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px; /* 21px */\n  padding-top: ", "px; /* 13px */\n  border-top: 1px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px; /* 21px */\n  padding-top: ", "px; /* 13px */\n  border-top: 1px solid ", ";\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7), function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var MobileBotanicalAccent = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px; /* 13px */\n  right: ", "px; /* 13px */\n  opacity: 0.1;\n  transform: rotate(", "deg);\n  pointer-events: none;\n"], ["\n  position: absolute;\n  bottom: ", "px; /* 13px */\n  right: ", "px; /* 13px */\n  opacity: 0.1;\n  transform: rotate(", "deg);\n  pointer-events: none;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(7), 45 * PHI_INVERSE);
exports.default = NavBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
