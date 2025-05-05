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
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
// Import components
var NavigationItem_1 = require("./NavigationItem");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
/**
 * SideNavigation Component
 *
 * A vertical navigation component that displays a list of navigation items
 * with optional botanical decorations and animations.
 * Follows sacred geometry principles for spacing and proportions.
 */
var SideNavigation = function (_a) {
    var items = _a.items, title = _a.title, _b = _a.withBotanical, withBotanical = _b === void 0 ? true : _b, _c = _a.botanicalType, botanicalType = _c === void 0 ? 'oliveBranch' : _c, _d = _a.withDividers, withDividers = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'light' : _e, _f = _a.animated, animated = _f === void 0 ? true : _f, _g = _a.collapsible, collapsible = _g === void 0 ? false : _g, _h = _a.initiallyCollapsed, initiallyCollapsed = _h === void 0 ? false : _h, _j = _a.compact, compact = _j === void 0 ? false : _j, _k = _a.width, width = _k === void 0 ? "".concat(Math.round((0, getFibonacciByIndex_1.getFibonacciByIndex)(11) * sacred_geometry_1.PHI), "px") : _k, // Golden ratio based width
    _l = _a.maxHeight, // Golden ratio based width
    maxHeight = _l === void 0 ? '100%' : _l, className = _a.className, style = _a.style, _m = _a["data-testid"], testId = _m === void 0 ? 'sacred-side-navigation' : _m;
    // State for collapsible behavior
    var _o = (0, react_1.useState)(initiallyCollapsed), isCollapsed = _o[0], setIsCollapsed = _o[1];
    // Handle window resize for responsive behavior
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            // Auto-collapse when screen is narrow
            if (window.innerWidth < (0, getFibonacciByIndex_1.getFibonacciByIndex)(12)) { // 144px (based on Fibonacci sequence)
                setIsCollapsed(true);
            }
        };
        // Add resize listener
        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();
        // Cleanup
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Toggle collapsed state
    var toggleCollapsed = function () {
        setIsCollapsed(!isCollapsed);
    };
    return (<Container className={className} style={style} data-testid={testId} $variant={variant} $width={width} $maxHeight={maxHeight} $compact={compact}>
      {/* Title with toggle button for collapsible nav */}
      {(title || collapsible) && (<TitleContainer>
          {title && <Title>{title}</Title>}
          
          {collapsible && (<CollapseButton onClick={toggleCollapsed} aria-expanded={!isCollapsed}>
              <CollapseIcon $isCollapsed={isCollapsed}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={isCollapsed ? "M12 5v14M5 12h14" : "M5 12h14"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CollapseIcon>
            </CollapseButton>)}
        </TitleContainer>)}
      
      {/* Navigation items */}
      <NavItemsContainer $isCollapsed={isCollapsed}>
        {items.map(function (item, index) {
            var delay = animated ? index * (sacred_geometry_1.PHI_INVERSE * 0.1) : 0;
            return (<React.Fragment key={"".concat(item.label, "-").concat(index)}>
              {/* Add dividers between items when enabled */}
              {withDividers && index > 0 && <Divider />}
              
              {/* Navigation item with animation */}
              <NavItemWrapper $compact={compact}>
                {animated ? (<animation_1.ScrollReveal delay={delay} distance={"".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px")} // 5px
                 direction="right">
                    <NavigationItem_1.default label={item.label} path={item.path} isActive={item.isActive} icon={item.icon} subItems={item.subItems}/>
                  </animation_1.ScrollReveal>) : (<NavigationItem_1.default label={item.label} path={item.path} isActive={item.isActive} icon={item.icon} subItems={item.subItems}/>)}
              </NavItemWrapper>
            </React.Fragment>);
        })}
      </NavItemsContainer>
      
      {/* Botanical decorator */}
      {withBotanical && (<botanical_1.BotanicalDecorator botanicalType={botanicalType} position="bottomRight" size="md" opacity={0.15} colorScheme="primary" decorative>
          {null}
        </botanical_1.BotanicalDecorator>)}
    </Container>);
};
// Helper function to get background color based on variant
var getBackgroundColor = function (variant, theme) {
    switch (variant) {
        case 'primary':
            return theme.colors.primary;
        case 'secondary':
            return theme.colors.secondary;
        case 'dark':
            return theme.colors.background.dark;
        case 'transparent':
            return 'transparent';
        case 'light':
        default:
            return theme.colors.background.light;
    }
};
// Helper function to get text color based on variant
var getTextColor = function (variant, theme) {
    switch (variant) {
        case 'primary':
        case 'secondary':
        case 'dark':
            return theme.colors.text.light;
        case 'transparent':
        case 'light':
        default:
            return theme.colors.text.primary;
    }
};
var Container = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  max-height: ", ";\n  overflow-y: auto;\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", "px; // 5px\n  box-shadow: ", ";\n  padding: ", "; // 5px or 8px\n  position: relative;\n  \n  /* Custom scrollbar with sacred geometry proportions */\n  &::-webkit-scrollbar {\n    width: ", "px; // 3px\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: ", "px; // 2px\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: ", "px; // 2px\n    opacity: 0.7;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  max-height: ", ";\n  overflow-y: auto;\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", "px; // 5px\n  box-shadow: ", ";\n  padding: ", "; // 5px or 8px\n  position: relative;\n  \n  /* Custom scrollbar with sacred geometry proportions */\n  &::-webkit-scrollbar {\n    width: ", "px; // 3px\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: ", "px; // 2px\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: ", "px; // 2px\n    opacity: 0.7;\n  }\n"])), function (_a) {
    var $width = _a.$width;
    return typeof $width === 'number' ? "".concat($width, "px") : $width;
}, function (_a) {
    var $maxHeight = _a.$maxHeight;
    return typeof $maxHeight === 'number' ? "".concat($maxHeight, "px") : $maxHeight;
}, function (_a) {
    var theme = _a.theme, $variant = _a.$variant;
    return getBackgroundColor($variant, theme);
}, function (_a) {
    var theme = _a.theme, $variant = _a.$variant;
    return getTextColor($variant, theme);
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), function (props) { return props.theme.shadows.sm; }, function (_a) {
    var $compact = _a.$compact;
    return $compact ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px") : "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6), "px");
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), function (props) { return props.theme.colors.primary; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(3));
var TitleContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", "px; // 8px\n  padding-bottom: ", "px; // 5px\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", "px; // 8px\n  padding-bottom: ", "px; // 5px\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5));
var Title = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", "px; // 13px\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n"], ["\n  font-size: ", "px; // 13px\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7));
var CollapseIcon = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(", "deg);\n  transition: transform 0.2s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(", "deg);\n  transition: transform 0.2s cubic-bezier(", ", 0, ", ", 1);\n"])), function (_a) {
    var $isCollapsed = _a.$isCollapsed;
    return $isCollapsed ? '0' : '45';
}, sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE);
var CollapseButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px; // 21px\n  height: ", "px; // 21px\n  border-radius: 50%;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", "; // 2px\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px; // 21px\n  height: ", "px; // 21px\n  border-radius: 50%;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", "; // 2px\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), function (props) { return props.theme.colors.focus; });
var NavItemsContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: ", ";\n  flex-direction: column;\n  overflow-y: auto;\n"], ["\n  display: ", ";\n  flex-direction: column;\n  overflow-y: auto;\n"])), function (_a) {
    var $isCollapsed = _a.$isCollapsed;
    return $isCollapsed ? 'none' : 'flex';
});
var NavItemWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: ", "; // 3px or 5px\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  margin-bottom: ", "; // 3px or 5px\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var $compact = _a.$compact;
    return $compact ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px") : "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px");
});
var Divider = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.1);\n  margin: ", "px 0; // 5px\n"], ["\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.1);\n  margin: ", "px 0; // 5px\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5));
exports.default = SideNavigation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
