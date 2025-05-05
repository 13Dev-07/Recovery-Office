"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
var utils_1 = require("../utils");
/**
 * Link Component
 *
 * A component for creating links that follow sacred geometry principles
 * for spacing, transitions, and hover effects.
 */
var Link = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.underline, underline = _d === void 0 ? 'hover' : _d, _e = _a.size, size = _e === void 0 ? 'md' : _e, _f = _a.openInNewTab, openInNewTab = _f === void 0 ? false : _f, _g = _a.withHoverEffect, withHoverEffect = _g === void 0 ? true : _g, _h = _a.isNavLink, isNavLink = _h === void 0 ? false : _h, className = _a.className, onClick = _a.onClick, rest = __rest(_a, ["children", "href", "isActive", "variant", "underline", "size", "openInNewTab", "withHoverEffect", "isNavLink", "className", "onClick"]);
    // Determine external link properties
    var isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    var target = openInNewTab || isExternal ? '_blank' : undefined;
    var rel = openInNewTab || isExternal ? 'noopener noreferrer' : undefined;
    return (<StyledLink href={href} target={target} rel={rel} $isActive={isActive} $variant={variant} $underline={underline} $size={size} $withHoverEffect={withHoverEffect} $isNavLink={isNavLink} className={className} onClick={onClick} {...rest}>
      {children}
    </StyledLink>);
};
// Helper function to get size styles based on Fibonacci sequence
var getSizeStyles = function (size) {
    switch (size) {
        case 'sm':
            return {
                fontSize: "".concat((0, utils_1.getFibonacciByIndex)(5), "px"), // 5px
                padding: "".concat((0, utils_1.getFibonacciByIndex)(3), "px ").concat((0, utils_1.getFibonacciByIndex)(4), "px"), // 2px 3px
            };
        case 'lg':
            return {
                fontSize: "".concat((0, utils_1.getFibonacciByIndex)(7), "px"), // 13px
                padding: "".concat((0, utils_1.getFibonacciByIndex)(5), "px ").concat((0, utils_1.getFibonacciByIndex)(6), "px"), // 5px 8px
            };
        case 'md':
        default:
            return {
                fontSize: "".concat((0, utils_1.getFibonacciByIndex)(6), "px"), // 8px
                padding: "".concat((0, utils_1.getFibonacciByIndex)(4), "px ").concat((0, utils_1.getFibonacciByIndex)(5), "px"), // 3px 5px
            };
    }
};
var StyledLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Base styles */\n  display: inline-block;\n  text-decoration: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n  \n  /* Size based on Fibonacci sequence */\n  ", "\n  \n  /* Colors based on variant */\n  color: ", ";\n  \n  /* Active state styles */\n  ", "\n  \n  /* Hover styles */\n  &:hover {\n    /* Underline effect */\n    text-decoration: ", ";\n    \n    /* Color change on hover */\n    color: ", ";\n    \n    /* Scale effect when enabled */\n    transform: ", ";\n  }\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n    border-radius: ", "px;\n  }\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Navigation-specific styles */\n  ", "\n"], ["\n  /* Base styles */\n  display: inline-block;\n  text-decoration: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n  \n  /* Size based on Fibonacci sequence */\n  ", "\n  \n  /* Colors based on variant */\n  color: ", ";\n  \n  /* Active state styles */\n  ", "\n  \n  /* Hover styles */\n  &:hover {\n    /* Underline effect */\n    text-decoration: ", ";\n    \n    /* Color change on hover */\n    color: ", ";\n    \n    /* Scale effect when enabled */\n    transform: ", ";\n  }\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 ", "px ", ";\n    border-radius: ", "px;\n  }\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Navigation-specific styles */\n  ", "\n"])), function (_a) {
    var $underline = _a.$underline;
    return $underline === 'always' ? 'underline' : 'none';
}, function (_a) {
    var $isActive = _a.$isActive;
    return $isActive ? '600' : '400';
}, function (_a) {
    var $size = _a.$size;
    var styles = getSizeStyles($size);
    return "\n      font-size: ".concat(styles.fontSize, ";\n      padding: ").concat($size === 'sm' ? '0' : styles.padding, ";\n    ");
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, $variant = _a.$variant, $isActive = _a.$isActive;
    // Define color based on variant and active state
    switch ($variant) {
        case 'primary':
            return $isActive ? (_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1 : theme.colors.text.primary;
        case 'secondary':
            return $isActive ? (_c = theme.colors.secondary[500]) !== null && _c !== void 0 ? _c : 1 : theme.colors.text.secondary;
        case 'accent':
            return theme.colors.accent.gold;
        case 'footer':
            return theme.colors.text.light;
        case 'navigation':
            return $isActive ? (_d = theme.colors.primary[500]) !== null && _d !== void 0 ? _d : 1 : theme.colors.text.primary;
        case 'subtle':
            return theme.colors.text.tertiary;
        default:
            return theme.colors.text.primary;
    }
}, function (_a) {
    var _b;
    var $isActive = _a.$isActive, $variant = _a.$variant, theme = _a.theme;
    return $isActive && "\n    position: relative;\n    \n    /* For primary navigation links, add a bottom border at golden ratio position */\n    ".concat($variant === 'navigation' ? "\n      &:after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: ".concat(PHI_INVERSE * 100, "%;\n        right: ").concat(PHI_INVERSE * 100, "%;\n        height: ").concat((0, utils_1.getFibonacciByIndex)(3), "px;\n        background-color: ").concat((_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1, ";\n        border-radius: ").concat((0, utils_1.getFibonacciByIndex)(2), "px;\n      }\n    ") : '', "\n  ");
}, function (_a) {
    var $underline = _a.$underline;
    return $underline === 'none' ? 'none' : 'underline';
}, function (_a) {
    var _b, _c, _d, _e, _f;
    var theme = _a.theme, $variant = _a.$variant;
    switch ($variant) {
        case 'primary':
            return (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1;
        case 'secondary':
            return (_c = theme.colors.secondary[600]) !== null && _c !== void 0 ? _c : 1;
        case 'accent':
            return theme.colors.accent.copper;
        case 'footer':
            return (_d = theme.colors.background[100]) !== null && _d !== void 0 ? _d : 1;
        case 'navigation':
            return (_e = theme.colors.primary[600]) !== null && _e !== void 0 ? _e : 1;
        case 'subtle':
            return theme.colors.text.secondary;
        default:
            return (_f = theme.colors.primary[600]) !== null && _f !== void 0 ? _f : 1;
    }
}, function (_a) {
    var $withHoverEffect = _a.$withHoverEffect;
    return $withHoverEffect ? "scale(".concat(1 + (PHI_INVERSE * 0.05), ")") : 'none';
}, (0, utils_1.getFibonacciByIndex)(3), function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; }, (0, utils_1.getFibonacciByIndex)(3), PHI_INVERSE, 1 - PHI_INVERSE, function (_a) {
    var $isNavLink = _a.$isNavLink;
    return $isNavLink && "\n    display: inline-flex;\n    align-items: center;\n    height: ".concat((0, utils_1.getFibonacciByIndex)(9), "px; /* 34px */\n    margin: 0 ").concat((0, utils_1.getFibonacciByIndex)(5), "px; /* 0 5px */\n  ");
});
exports.default = Link;
var templateObject_1;
