"use strict";
/**
 * Sidebar Component
 *
 * A sidebar navigation component that follows sacred geometry principles
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
 * Sidebar Component
 *
 * A sidebar navigation component that uses sacred geometry principles
 * for dimensions, spacing, and animations.
 */
var Sidebar = function (_a) {
    var items = _a.items, title = _a.title, _b = _a.withBotanical, withBotanical = _b === void 0 ? true : _b, _c = _a.botanicalVariant, botanicalVariant = _c === void 0 ? 'oliveBranch' : _c, _d = _a.variant, variant = _d === void 0 ? 'light' : _d, _e = _a.collapsible, collapsible = _e === void 0 ? false : _e, _f = _a.initiallyCollapsed, initiallyCollapsed = _f === void 0 ? false : _f, _g = _a.width, width = _g === void 0 ? "".concat(Math.round(getFibonacciByIndex(11) * PHI), "px") : _g, // Golden ratio width
    _h = _a.maxHeight, // Golden ratio width
    maxHeight = _h === void 0 ? '100%' : _h, footer = _a.footer, className = _a.className, _j = _a["data-testid"], testId = _j === void 0 ? 'sacred-sidebar' : _j;
    // State for collapsed state
    var _k = (0, react_1.useState)(initiallyCollapsed), isCollapsed = _k[0], setIsCollapsed = _k[1];
    // Toggle collapsed state
    var toggleCollapsed = function () {
        setIsCollapsed(!isCollapsed);
    };
    // Render the botanical decoration
    var renderBotanical = function () {
        switch (botanicalVariant) {
            case 'oliveBranch':
                return (<botanical_1.BotanicalElement variant="oliveBranch" size="md" opacity={0.1} colorScheme="primary" decorative/>);
            case 'flowerOfLife':
                return (<botanical_1.BotanicalElement variant="flowerOfLife" size="md" opacity={0.05} colorScheme="primary" decorative/>);
            case 'leafPattern':
                return (<botanical_1.BotanicalElement variant="leafPattern" size="md" opacity={0.1} colorScheme="primary" decorative/>);
            case 'smallFlourish':
            default:
                return (<botanical_1.BotanicalElement variant="smallFlourish" size="md" opacity={0.1} colorScheme="primary" decorative/>);
        }
    };
    return (<Container className={className} data-testid={testId} $variant={variant} $width={isCollapsed ? "".concat(getFibonacciByIndex(9), "px") : width} // Collapse to a smaller width
     $maxHeight={maxHeight}>
      {/* Header with title and collapse toggle */}
      {(title || collapsible) && (<Header>
          {!isCollapsed && title && <Title>{title}</Title>}
          
          {collapsible && (<CollapseButton onClick={toggleCollapsed} aria-expanded={!isCollapsed} title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              <CollapseIcon $isCollapsed={isCollapsed}>
                {isCollapsed ? '→' : '←'}
              </CollapseIcon>
            </CollapseButton>)}
        </Header>)}
      
      {/* Navigation items */}
      <NavItems $isCollapsed={isCollapsed}>
        {items.map(function (item, index) {
            var _a;
            return (<NavItemContainer key={"nav-".concat(index)}>
            <NavItem $isActive={item.isActive || false} $hasSubItems={!!((_a = item.subItems) === null || _a === void 0 ? void 0 : _a.length)} $isCollapsed={isCollapsed} href={item.path}>
              {item.icon && <ItemIcon>{item.icon}</ItemIcon>}
              {!isCollapsed && <ItemLabel>{item.label}</ItemLabel>}
            </NavItem>
            
            {/* Subitems */}
            {!isCollapsed && item.subItems && item.subItems.length > 0 && (<SubItemsContainer>
                {item.subItems.map(function (subItem, subIndex) { return (<SubItem key={"subnav-".concat(index, "-").concat(subIndex)} $isActive={subItem.isActive || false} href={subItem.path}>
                    {subItem.icon && <SubItemIcon>{subItem.icon}</SubItemIcon>}
                    <SubItemLabel>{subItem.label}</SubItemLabel>
                  </SubItem>); })}
              </SubItemsContainer>)}
          </NavItemContainer>);
        })}
      </NavItems>
      
      {/* Footer content */}
      {!isCollapsed && footer && (<Footer>
          {footer}
        </Footer>)}
      
      {/* Botanical decoration */}
      {withBotanical && !isCollapsed && (<BotanicalContainer>
          {renderBotanical()}
        </BotanicalContainer>)}
    </Container>);
};
var Container = styled_components_1.default.aside(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  max-height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-right: 1px solid ", ";\n  padding: ", "px; // 8px\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: width 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  max-height: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-right: 1px solid ", ";\n  padding: ", "px; // 8px\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: width 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), function (_a) {
    var $width = _a.$width;
    return typeof $width === 'number' ? "".concat($width, "px") : $width;
}, function (_a) {
    var $maxHeight = _a.$maxHeight;
    return typeof $maxHeight === 'number' ? "".concat($maxHeight, "px") : $maxHeight;
}, function (_a) {
    var _b, _c, _d, _e;
    var theme = _a.theme, $variant = _a.$variant;
    switch ($variant) {
        case 'dark':
            return (_b = theme.colors.background[900]) !== null && _b !== void 0 ? _b : 1;
        case 'primary':
            return (_c = theme.colors.primary[50]) !== null && _c !== void 0 ? _c : 1;
        case 'secondary':
            return (_d = theme.colors.secondary[50]) !== null && _d !== void 0 ? _d : 1;
        case 'transparent':
            return 'transparent';
        case 'light':
        default:
            return (_e = theme.colors.background[50]) !== null && _e !== void 0 ? _e : 1;
    }
}, function (_a) {
    var theme = _a.theme, $variant = _a.$variant;
    switch ($variant) {
        case 'dark':
            return theme.colors.text.inverse;
        case 'primary':
        case 'secondary':
        case 'transparent':
        case 'light':
        default:
            return theme.colors.text.primary;
    }
}, function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(6), PHI_INVERSE, 1 - PHI_INVERSE);
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: ", "px; // 13px\n  margin-bottom: ", "px; // 8px\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: ", "px; // 13px\n  margin-bottom: ", "px; // 8px\n  border-bottom: 1px solid ", ";\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6), function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var Title = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", "px; // 13px\n  font-weight: ", ";\n  margin: 0;\n"], ["\n  font-size: ", "px; // 13px\n  font-weight: ", ";\n  margin: 0;\n"])), getFibonacciByIndex(7), function (props) { return props.theme.typography.fontWeight.semiBold; });
var CollapseButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: ", "px; // 3px\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: ", "px; // 3px\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"])), getFibonacciByIndex(4), function (props) { var _a; return (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
var CollapseIcon = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  transform: ", ";\n  font-size: ", "px; // 8px\n"], ["\n  display: inline-flex;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  transform: ", ";\n  font-size: ", "px; // 8px\n"])), PHI_INVERSE, 1 - PHI_INVERSE, function (_a) {
    var $isCollapsed = _a.$isCollapsed;
    return $isCollapsed ? 'rotate(0)' : 'rotate(0)';
}, getFibonacciByIndex(6));
var NavItems = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding-right: ", "; // 5px\n  margin-bottom: ", "px; // 21px\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding-right: ", "; // 5px\n  margin-bottom: ", "px; // 21px\n"])), function (_a) {
    var $isCollapsed = _a.$isCollapsed;
    return $isCollapsed ? '0' : "".concat(getFibonacciByIndex(5), "px");
}, getFibonacciByIndex(8));
var NavItemContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 5px\n"], ["\n  margin-bottom: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var NavItem = (0, styled_components_1.default)(Link_1.default)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: ", "px; // 5px\n  border-radius: ", "px; // 5px\n  color: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  text-decoration: none;\n  position: relative;\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  /* Right arrow for items with subitems */\n  ", "\n  \n  /* Add focus style */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Different justify-content when collapsed */\n  justify-content: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  padding: ", "px; // 5px\n  border-radius: ", "px; // 5px\n  color: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  text-decoration: none;\n  position: relative;\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  /* Right arrow for items with subitems */\n  ", "\n  \n  /* Add focus style */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Different justify-content when collapsed */\n  justify-content: ", ";\n"])), getFibonacciByIndex(5), getFibonacciByIndex(5), function (_a) {
    var _b;
    var theme = _a.theme, $isActive = _a.$isActive;
    return $isActive ? (_b = theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1 : theme.colors.text.primary;
}, function (_a) {
    var _b;
    var theme = _a.theme, $isActive = _a.$isActive;
    return $isActive ? (_b = theme.colors.primary[50]) !== null && _b !== void 0 ? _b : 1 : 'transparent';
}, function (_a) {
    var $isActive = _a.$isActive, theme = _a.theme;
    return $isActive ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular;
}, PHI_INVERSE, 1 - PHI_INVERSE, function (props) { var _a; return (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1; }, function (props) { var _a; return (_a = props.theme.colors.primary[600]) !== null && _a !== void 0 ? _a : 1; }, function (_a) {
    var $hasSubItems = _a.$hasSubItems, $isCollapsed = _a.$isCollapsed;
    return !$isCollapsed && $hasSubItems && "\n    &:after {\n      content: '\u2192';\n      position: absolute;\n      right: ".concat(getFibonacciByIndex(5), "px; // 5px\n      opacity: 0.5;\n    }\n  ");
}, getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; }, function (_a) {
    var $isCollapsed = _a.$isCollapsed;
    return $isCollapsed ? 'center' : 'flex-start';
});
var ItemIcon = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 5px\n  font-size: ", "px; // Golden ratio enhanced\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 5px\n  font-size: ", "px; // Golden ratio enhanced\n"])), getFibonacciByIndex(5), getFibonacciByIndex(6) * PHI);
var ItemLabel = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var SubItemsContainer = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px; // 21px\n  margin-top: ", "px; // 3px\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px; // 21px\n  margin-top: ", "px; // 3px\n"])), getFibonacciByIndex(8), getFibonacciByIndex(4));
var SubItem = (0, styled_components_1.default)(Link_1.default)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: ", "px ", "px; // 3px 5px\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px; // Golden ratio based size\n  text-decoration: none;\n  border-radius: ", "px; // 3px\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Left border for active state */\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  padding: ", "px ", "px; // 3px 5px\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px; // Golden ratio based size\n  text-decoration: none;\n  border-radius: ", "px; // 3px\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Left border for active state */\n  ", "\n"])), getFibonacciByIndex(4), getFibonacciByIndex(5), function (_a) {
    var _b;
    var theme = _a.theme, $isActive = _a.$isActive;
    return $isActive ? (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1 : theme.colors.text.secondary;
}, function (_a) {
    var $isActive = _a.$isActive, theme = _a.theme;
    return $isActive ? theme.typography.fontWeight.medium : theme.typography.fontWeight.regular;
}, getFibonacciByIndex(6) * PHI_INVERSE, getFibonacciByIndex(4), PHI_INVERSE, 1 - PHI_INVERSE, function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) { var _a; return (_a = props.theme.colors.primary[600]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(2), function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; }, function (_a) {
    var _b;
    var $isActive = _a.$isActive, theme = _a.theme;
    return $isActive && "\n    border-left: ".concat(getFibonacciByIndex(3), "px solid ").concat((_b = theme.colors.primary[300]) !== null && _b !== void 0 ? _b : 1, ";\n    padding-left: ").concat(getFibonacciByIndex(4), "px;\n  ");
});
var SubItemIcon = styled_components_1.default.span(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 3px\n  font-size: ", "px; // 5px\n  opacity: 0.7;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 3px\n  font-size: ", "px; // 5px\n  opacity: 0.7;\n"])), getFibonacciByIndex(4), getFibonacciByIndex(5));
var SubItemLabel = styled_components_1.default.span(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var Footer = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  padding-top: ", "px; // 8px\n  margin-top: auto;\n  border-top: 1px solid ", ";\n"], ["\n  padding-top: ", "px; // 8px\n  margin-top: auto;\n  border-top: 1px solid ", ";\n"])), getFibonacciByIndex(6), function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var BotanicalContainer = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px; // 5px\n  right: ", "px; // 5px\n  z-index: 0;\n  opacity: 0.1;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  bottom: ", "px; // 5px\n  right: ", "px; // 5px\n  z-index: 0;\n  opacity: 0.1;\n  pointer-events: none;\n"])), getFibonacciByIndex(5), getFibonacciByIndex(5));
exports.default = Sidebar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
