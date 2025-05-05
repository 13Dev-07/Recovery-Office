"use strict";
/**
 * LinkButton Component
 *
 * A specialized button component optimized for link-like behavior.
 * Extends the base Button component with link-specific props and styling.
 * Implements sacred geometry principles for sizing and visual harmony.
 */
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
exports.LinkButton = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Button_1 = require("./Button");
// Styled LinkButton component
var StyledLinkButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // No background or border for link buttons\n  background-color: transparent;\n  border: none;\n  padding: ", ";\n  height: auto;\n  box-shadow: none;\n  \n  // Underline behaviors\n  text-decoration: ", ";\n  \n  &:hover, &:focus {\n    text-decoration: ", ";\n    background-color: transparent;\n    box-shadow: none;\n    transform: none;\n  }\n  \n  // Color variations based on variant\n  color: ", ";\n  \n  &:hover, &:focus {\n    color: ", ";\n  }\n  \n  // Navigation specific styling\n  ", "\n"], ["\n  // No background or border for link buttons\n  background-color: transparent;\n  border: none;\n  padding: ", ";\n  height: auto;\n  box-shadow: none;\n  \n  // Underline behaviors\n  text-decoration: ", ";\n  \n  &:hover, &:focus {\n    text-decoration: ", ";\n    background-color: transparent;\n    box-shadow: none;\n    transform: none;\n  }\n  \n  // Color variations based on variant\n  color: ", ";\n  \n  &:hover, &:focus {\n    color: ", ";\n  }\n  \n  // Navigation specific styling\n  ", "\n"])), function (props) { return props.$isNavLink ? "".concat(PHI_INVERSE, "em") : '0'; }, function (props) { return props.$underline === 'always' ? 'underline' : 'none'; }, function (props) { return props.$underline === 'none' ? 'none' : 'underline'; }, function (props) {
    var _a, _b;
    switch (props.variant) {
        case 'secondary':
            return (_a = props.theme.colors.secondary[500]) !== null && _a !== void 0 ? _a : 1;
        case 'accent':
            return props.theme.colors.accent.gold;
        case 'subtle':
            return props.theme.colors.text.secondary;
        case 'primary':
        default:
            return (_b = props.theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1;
    }
}, function (props) {
    var _a, _b;
    switch (props.variant) {
        case 'secondary':
            return (_a = props.theme.colors.secondary[700]) !== null && _a !== void 0 ? _a : 1;
        case 'accent':
            return props.theme.colors.accent.copper;
        case 'subtle':
            return props.theme.colors.text.primary;
        case 'primary':
        default:
            return (_b = props.theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1;
    }
}, function (props) {
    var _a;
    return props.$isNavLink && "\n    border-radius: ".concat(props.theme.borderRadius.sm, ";\n    \n    &:hover, &:focus {\n      background-color: ").concat((_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1, ";\n    }\n  ");
});
/**
 * LinkButton Component with ref forwarding
 *
 * Creates button elements styled as links with sacred geometry proportions
 */
exports.LinkButton = React.forwardRef(function (_a, ref) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.underline, underline = _c === void 0 ? 'hover' : _c, _d = _a.openInNewTab, openInNewTab = _d === void 0 ? false : _d, _e = _a.isNavLink, isNavLink = _e === void 0 ? false : _e, href = _a.href, onClick = _a.onClick, children = _a.children, rest = __rest(_a, ["variant", "underline", "openInNewTab", "isNavLink", "href", "onClick", "children"]);
    // Target and rel attributes for links
    var target = openInNewTab ? '_blank' : undefined;
    var rel = openInNewTab ? 'noopener noreferrer' : undefined;
    return (<StyledLinkButton as="a" variant="link" // Always use link variant from Button
     ref={ref} href={href} target={target} rel={rel} onClick={onClick} $underline={underline} $isNavLink={isNavLink} {...rest}>
        {children}
      </StyledLinkButton>);
});
exports.LinkButton.displayName = 'LinkButton';
exports.default = exports.LinkButton;
var templateObject_1;
