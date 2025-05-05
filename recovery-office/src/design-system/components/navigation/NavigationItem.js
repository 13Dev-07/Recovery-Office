"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: This file contains direct document access without SSR checks
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
// Import Link component
var Link_1 = require("./Link");
/**
 * NavigationItem Component
 *
 * A component for creating navigation items with sacred geometry proportions
 * and support for active states, icons, and dropdown functionality.
 */
var NavigationItem = function (_a) {
    var label = _a.label, path = _a.path, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.isPrimary, isPrimary = _c === void 0 ? false : _c, _d = _a.isButton, isButton = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'primary' : _e, icon = _a.icon, _f = _a.iconPosition, iconPosition = _f === void 0 ? 'left' : _f, _g = _a.withHoverEffect, withHoverEffect = _g === void 0 ? true : _g, subItems = _a.subItems, className = _a.className, onClick = _a.onClick;
    // Handle dropdown functionality
    var _h = (0, react_1.useState)(false), isDropdownOpen = _h[0], setIsDropdownOpen = _h[1];
    var hasDropdown = subItems && subItems.length > 0;
    // Toggle dropdown
    var handleToggleDropdown = function () {
        if (hasDropdown) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    // Close dropdown when clicking outside
    var dropdownRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);
    // Generate navigation item content with icon
    var itemContent = (<>
      {icon && iconPosition === 'left' && <IconWrapper $position={iconPosition}>{icon}</IconWrapper>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && <IconWrapper $position={iconPosition}>{icon}</IconWrapper>}
      {hasDropdown && (<DropdownIndicator $isOpen={isDropdownOpen}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </DropdownIndicator>)}
    </>);
    return (<Container ref={dropdownRef} className={className} $hasDropdown={hasDropdown} $isOpen={isDropdownOpen}>
      {isButton ? (<ButtonStyled onClick={function (event) {
                if (onClick)
                    onClick(event);
                handleToggleDropdown();
            }} $isPrimary={isPrimary} $variant={variant} $withHoverEffect={withHoverEffect} $isActive={isActive} $hasDropdown={hasDropdown}>
          {itemContent}
        </ButtonStyled>) : (<Link_1.default href={path} isActive={isActive} variant={isPrimary ? 'accent' : 'navigation'} withHoverEffect={withHoverEffect} isNavLink={true} onClick={function (event) {
                if (hasDropdown) {
                    event.preventDefault();
                    handleToggleDropdown();
                }
                if (onClick)
                    onClick(event);
            }}>
          {itemContent}
        </Link_1.default>)}
      
      {/* Dropdown menu */}
      {hasDropdown && (<Dropdown $isOpen={isDropdownOpen}>
          {subItems === null || subItems === void 0 ? void 0 : subItems.map(function (item, index) { return (<DropdownItem key={"".concat(item.label, "-").concat(index)}>
              <Link_1.default href={item.path} isActive={item.isActive} variant="subtle" withHoverEffect={true} size="sm">
                {item.label}
              </Link_1.default>
            </DropdownItem>); })}
        </Dropdown>)}
    </Container>);
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  \n  /* Add extra padding for dropdown items */\n  ", "\n"], ["\n  position: relative;\n  display: inline-block;\n  \n  /* Add extra padding for dropdown items */\n  ", "\n"])), function (_a) {
    var $hasDropdown = _a.$hasDropdown;
    return $hasDropdown && "\n    padding-right: ".concat(getFibonacciByIndex(5), "px;\n  ");
});
var IconWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  margin-", ": ", "px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  margin-", ": ", "px;\n"])), function (_a) {
    var $position = _a.$position;
    return $position === 'left' ? 'right' : 'left';
}, getFibonacciByIndex(4));
var DropdownIndicator = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  margin-left: ", "px;\n  transform: rotate(", ");\n  transition: transform 0.2s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  display: inline-flex;\n  align-items: center;\n  margin-left: ", "px;\n  transform: rotate(", ");\n  transition: transform 0.2s cubic-bezier(", ", 0, ", ", 1);\n"])), getFibonacciByIndex(4), function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? '180deg' : '0deg';
}, PHI_INVERSE, 1 - PHI_INVERSE);
var ButtonStyled = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  /* Base styles */\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  padding: ", "px ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  border-radius: ", "px;\n  \n  /* Colors based on variant and primary state */\n  color: ", ";\n  \n  /* Background for primary buttons */\n  background-color: ", ";\n  \n  /* Hover styles */\n  &:hover {\n    background-color: ", ";\n    \n    /* Scale effect when enabled */\n    transform: ", ";\n  }\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  /* Base styles */\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  padding: ", "px ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  border-radius: ", "px;\n  \n  /* Colors based on variant and primary state */\n  color: ", ";\n  \n  /* Background for primary buttons */\n  background-color: ", ";\n  \n  /* Hover styles */\n  &:hover {\n    background-color: ", ";\n    \n    /* Scale effect when enabled */\n    transform: ", ";\n  }\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), getFibonacciByIndex(6), function (_a) {
    var $isActive = _a.$isActive;
    return $isActive ? '600' : '400';
}, getFibonacciByIndex(4), function (_a) {
    var _b, _c;
    var theme = _a.theme, $variant = _a.$variant, $isPrimary = _a.$isPrimary, $isActive = _a.$isActive;
    if ($isPrimary) {
        return theme.colors.text.light;
    }
    // For non-primary buttons
    switch ($variant) {
        case 'primary':
            return $isActive ? (_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1 : theme.colors.text.primary;
        case 'secondary':
            return $isActive ? (_c = theme.colors.secondary[500]) !== null && _c !== void 0 ? _c : 1 : theme.colors.text.secondary;
        case 'accent':
            return theme.colors.accent.gold;
        case 'subtle':
            return theme.colors.text.tertiary;
        default:
            return theme.colors.text.primary;
    }
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, $isPrimary = _a.$isPrimary, $variant = _a.$variant;
    if (!$isPrimary)
        return 'transparent';
    switch ($variant) {
        case 'primary': return (_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1;
        case 'secondary': return (_c = theme.colors.secondary[500]) !== null && _c !== void 0 ? _c : 1;
        case 'accent': return theme.colors.accent.gold;
        default: return (_d = theme.colors.primary[500]) !== null && _d !== void 0 ? _d : 1;
    }
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, $isPrimary = _a.$isPrimary, $variant = _a.$variant;
    if (!$isPrimary)
        return 'rgba(0, 0, 0, 0.05)';
    switch ($variant) {
        case 'primary': return (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1;
        case 'secondary': return (_c = theme.colors.secondary[600]) !== null && _c !== void 0 ? _c : 1;
        case 'accent': return theme.colors.accent.copper;
        default: return (_d = theme.colors.primary[600]) !== null && _d !== void 0 ? _d : 1;
    }
}, function (_a) {
    var $withHoverEffect = _a.$withHoverEffect;
    return $withHoverEffect ? "scale(".concat(1 + (PHI_INVERSE * 0.05), ")") : 'none';
}, getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; }, PHI_INVERSE, 1 - PHI_INVERSE);
var Dropdown = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 10;\n  min-width: 200px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  padding: ", "px 0;\n  opacity: ", ";\n  visibility: ", ";\n  transform: translateY(", ");\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 10;\n  min-width: 200px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  padding: ", "px 0;\n  opacity: ", ";\n  visibility: ", ";\n  transform: translateY(", ");\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n"])), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(4), getFibonacciByIndex(4), getFibonacciByIndex(7), getFibonacciByIndex(5), function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 1 : 0;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 'visible' : 'hidden';
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return $isOpen ? 0 : "-".concat(getFibonacciByIndex(5), "px");
}, PHI_INVERSE, 1 - PHI_INVERSE);
var DropdownItem = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  white-space: nowrap;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n"], ["\n  padding: ", "px ", "px;\n  white-space: nowrap;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6));
exports.default = NavigationItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
