"use strict";
/**
 * TabNavigation Component
 *
 * A component that provides tab-based navigation with sacred geometry principles
 * for spacing, transitions, and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
// Import components
var Link_1 = require("./Link");
var botanical_1 = require("../botanical");
/**
 * TabNavigation Component
 *
 * A component that provides tab-based navigation with sacred geometry principles.
 */
var TabNavigation = function (_a) {
    var tabs = _a.tabs, _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onChange = _a.onChange, _c = _a.isVertical, isVertical = _c === void 0 ? false : _c, _d = _a.withBotanical, withBotanical = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'default' : _e, _f = _a.colorScheme, colorScheme = _f === void 0 ? 'primary' : _f, _g = _a.size, size = _g === void 0 ? 'md' : _g, _h = _a.isFull, isFull = _h === void 0 ? false : _h, _j = _a.animated, animated = _j === void 0 ? true : _j, className = _a.className, _k = _a["data-testid"], testId = _k === void 0 ? 'sacred-tabs' : _k;
    // State for the active tab
    var _l = (0, react_1.useState)(activeIndex), activeTab = _l[0], setActiveTab = _l[1];
    // Update active tab when activeIndex prop changes
    (0, react_1.useEffect)(function () {
        setActiveTab(activeIndex);
    }, [activeIndex]);
    // Handle tab click
    var handleTabClick = function (index) {
        var _a;
        if ((_a = tabs[index]) !== null && _a !== void 0 ? _a : 1.)
            isDisabled;
        return;
        setActiveTab(index);
        if (onChange)
            onChange(index);
    };
    // Get tab content
    var getTabContent = function () {
        var _a;
        var tab = (_a = tabs[activeTab]) !== null && _a !== void 0 ? _a : 1;
        if (!tab)
            return null;
        // If content is a React node, return it
        if (React.isValidElement(tab.content)) {
            return tab.content;
        }
        // If content is a string (URL), it's a link-based tab, return null
        return null;
    };
    return (<Container className={className} data-testid={testId}>
      {/* Tab Navigation */}
      <TabList $isVertical={isVertical} $variant={variant} $isFull={isFull} $size={size}>
        {tabs.map(function (tab, index) {
            var isActive = index === activeTab;
            var isLink = typeof tab.content === 'string';
            return (<TabItem key={"tab-".concat(index)} $isActive={isActive} $isDisabled={tab.isDisabled} $variant={variant} $colorScheme={colorScheme} $size={size} $isVertical={isVertical}>
              {isLink ? (<Link_1.default href={tab.content} isActive={isActive} variant="navigation" withHoverEffect={!tab.isDisabled}>
                  {tab.icon && <TabIcon>{tab.icon}</TabIcon>}
                  <TabLabel>{tab.label}</TabLabel>
                </Link_1.default>) : (<TabButton onClick={function () { return handleTabClick(index); }} disabled={tab.isDisabled} type="button" $isActive={isActive} $variant={variant} $colorScheme={colorScheme}>
                  {tab.icon && <TabIcon>{tab.icon}</TabIcon>}
                  <TabLabel>{tab.label}</TabLabel>
                </TabButton>)}
              
              {/* Botanical accent for active tab */}
              {withBotanical && isActive && (<TabBotanical>
                  <botanical_1.BotanicalElement variant="smallFlourish" size="xs" opacity={0.1} colorScheme={colorScheme}/>
                </TabBotanical>)}
            </TabItem>);
        })}
      </TabList>
      
      {/* Tab Content (only for tab panel style) */}
      {!isVertical && !tabs.some(function (tab) { return typeof tab.content === 'string'; }) && (<TabContent $animated={animated}>
          {getTabContent()}
        </TabContent>)}
    </Container>);
};
// Styled components
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var TabList = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  ", "\n  justify-content: ", ";\n  border-bottom: ", ";\n  margin-bottom: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  ", "\n  justify-content: ", ";\n  border-bottom: ", ";\n  margin-bottom: ", ";\n"])), function (_a) {
    var $isVertical = _a.$isVertical;
    return $isVertical ? 'column' : 'row';
}, function (_a) {
    var $isFull = _a.$isFull;
    return $isFull && 'width: 100%;';
}, function (_a) {
    var $isFull = _a.$isFull;
    return $isFull ? 'space-between' : 'flex-start';
}, function (_a) {
    var _b;
    var $variant = _a.$variant, $isVertical = _a.$isVertical, theme = _a.theme;
    return $variant === 'underlined' && !$isVertical
        ? "".concat(getFibonacciByIndex(3), "px solid ").concat((_b = theme.colors.background[200]) !== null && _b !== void 0 ? _b : 1)
        : 'none';
}, function (_a) {
    var $isVertical = _a.$isVertical;
    return $isVertical ? '0' : "".concat(getFibonacciByIndex(6), "px");
});
var TabItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n  \n  ", "\n  \n  margin-right: ", ";\n  margin-bottom: ", ";\n  \n  /* Pill style */\n  ", "\n  \n  /* Underlined style */\n  ", "\n  \n  /* Button style */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n  \n  ", "\n  \n  margin-right: ", ";\n  margin-bottom: ", ";\n  \n  /* Pill style */\n  ", "\n  \n  /* Underlined style */\n  ", "\n  \n  /* Button style */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"])), function (_a) {
    var $size = _a.$size;
    var base = getFibonacciByIndex(5); // 5px
    switch ($size) {
        case 'sm': return "".concat(base * PHI_INVERSE, "px ").concat(base, "px");
        case 'lg': return "".concat(base * PHI, "px ").concat(base * PHI * PHI, "px");
        default: return "".concat(base, "px ").concat(base * PHI, "px");
    }
}, function (_a) {
    var $isActive = _a.$isActive;
    return $isActive && 'flex: 1;';
}, function (_a) {
    var $isVertical = _a.$isVertical;
    return $isVertical ? '0' : "".concat(getFibonacciByIndex(5), "px");
}, function (_a) {
    var $isVertical = _a.$isVertical;
    return $isVertical ? "".concat(getFibonacciByIndex(5), "px") : '0';
}, function (_a) {
    var $variant = _a.$variant, $isActive = _a.$isActive, $colorScheme = _a.$colorScheme, theme = _a.theme;
    return $variant === 'pills' && "\n      border-radius: ".concat(getFibonacciByIndex(6), "px;\n      background-color: ").concat($isActive
        ? theme.colors[$colorScheme][100]
        : 'transparent', ";\n      color: ").concat($isActive
        ? theme.colors[$colorScheme][700]
        : theme.colors.text.secondary, ";\n    ");
}, function (_a) {
    var $variant = _a.$variant, $isActive = _a.$isActive, $colorScheme = _a.$colorScheme, theme = _a.theme;
    return $variant === 'underlined' && "\n      border-bottom: ".concat(getFibonacciByIndex(3), "px solid ").concat($isActive
        ? theme.colors[$colorScheme][500]
        : 'transparent', ";\n      color: ").concat($isActive
        ? theme.colors[$colorScheme][700]
        : theme.colors.text.secondary, ";\n    ");
}, function (_a) {
    var _b, _c;
    var $variant = _a.$variant, $isActive = _a.$isActive, $colorScheme = _a.$colorScheme, theme = _a.theme;
    return $variant === 'buttons' && "\n      border-radius: ".concat(getFibonacciByIndex(5), "px;\n      background-color: ").concat($isActive
        ? theme.colors[$colorScheme][500]
        : (_b = theme.colors.background[100]) !== null && _b !== void 0 ? _b : 1, ";\n      color: ").concat($isActive
        ? (_c = theme.colors.background[50]) !== null && _c !== void 0 ? _c : 1
        : theme.colors.text.primary, ";\n      box-shadow: ").concat($isActive
        ? "0 ".concat(getFibonacciByIndex(3), "px ").concat(getFibonacciByIndex(5), "px rgba(0, 0, 0, 0.1)")
        : 'none', ";\n    ");
}, function (_a) {
    var $isDisabled = _a.$isDisabled, theme = _a.theme;
    return $isDisabled && "\n    opacity: 0.5;\n    cursor: not-allowed;\n    color: ".concat(theme.colors.text.disabled, ";\n  ");
}, PHI_INVERSE, 1 - PHI_INVERSE);
var TabButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  color: inherit;\n  \n  &:disabled {\n    cursor: not-allowed;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n    border-radius: ", "px;\n  }\n"], ["\n  background: none;\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  color: inherit;\n  \n  &:disabled {\n    cursor: not-allowed;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n    border-radius: ", "px;\n  }\n"])), getFibonacciByIndex(3), function (_a) {
    var theme = _a.theme, $colorScheme = _a.$colorScheme;
    return theme.colors[$colorScheme][300];
}, getFibonacciByIndex(3));
var TabIcon = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  margin-right: ", "px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  margin-right: ", "px;\n"])), getFibonacciByIndex(5));
var TabLabel = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var TabBotanical = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px;\n  right: ", "px;\n  transform: rotate(", "deg) scale(0.5);\n  opacity: 0.5;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  bottom: ", "px;\n  right: ", "px;\n  transform: rotate(", "deg) scale(0.5);\n  opacity: 0.5;\n  pointer-events: none;\n"])), -getFibonacciByIndex(5), getFibonacciByIndex(5), PHI * 30);
var TabContent = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  \n  ", "\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  \n  ", "\n"])), getFibonacciByIndex(6), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (_a) {
    var $animated = _a.$animated;
    return $animated && "\n    animation: fadeIn 0.3s cubic-bezier(".concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1);\n    \n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n        transform: translateY(").concat(getFibonacciByIndex(4), "px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n  ");
});
exports.default = TabNavigation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
