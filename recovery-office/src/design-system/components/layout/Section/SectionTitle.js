"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../../constants/sacred-geometry");
var theme_1 = require("../../../theme");
var Typography_1 = require("../../typography/Typography");
/**
 * Calculate title size based on section size using PHI relationships
 */
var getTitleSize = function (size) {
    switch (size) {
        case 'small':
            return 'h3';
        case 'large':
            return 'h1';
        case 'hero':
            return 'display';
        case 'medium':
        default:
            return 'h2';
    }
};
/**
 * Calculate subtitle size based on section size using PHI relationships
 */
var getSubtitleSize = function (size) {
    switch (size) {
        case 'small':
            return 'body1';
        case 'large':
            return 'h4';
        case 'hero':
            return 'h3';
        case 'medium':
        default:
            return 'h5';
    }
};
var TitleContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  text-align: ", ";\n  width: 100%;\n  \n  /* Apply PHI relationships to margin between title and subtitle */\n  > *:first-child + * {\n    margin-top: ", "px; /* Golden ratio proportion */\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  text-align: ", ";\n  width: 100%;\n  \n  /* Apply PHI relationships to margin between title and subtitle */\n  > *:first-child + * {\n    margin-top: ", "px; /* Golden ratio proportion */\n  }\n"])), function (props) {
    if (props.align === 'center')
        return 'center';
    if (props.align === 'right')
        return 'flex-end';
    return 'flex-start';
}, function (props) { return props.align; }, theme_1.lightTheme.spacing.md * sacred_geometry_1.PHI_INVERSE);
var DecoratorContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ", "px;\n"])), theme_1.lightTheme.spacing.md);
/**
 * SectionTitle component that follows sacred geometry principles
 *
 * This component provides a consistent title structure with proper spacing
 * based on golden ratio and Fibonacci sequence values.
 */
var SectionTitle = React.forwardRef(function (_a, ref) {
    var title = _a.title, subtitle = _a.subtitle, _b = _a.align, align = _b === void 0 ? 'left' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, decoratorBefore = _a.decoratorBefore, decoratorAfter = _a.decoratorAfter, style = _a.style, className = _a.className;
    var titleVariant = getTitleSize(size);
    var subtitleVariant = getSubtitleSize(size);
    return (<TitleContainer align={align} style={style} className={className} ref={ref}>
        {decoratorBefore && (<DecoratorContainer>
            {decoratorBefore}
          </DecoratorContainer>)}
        
        <Typography_1.default variant={titleVariant} color="inherit">
          {title}
        </Typography_1.default>
        
        {subtitle && (<Typography_1.default variant={subtitleVariant} color="textSecondary" style={{
                maxWidth: "".concat(100 * sacred_geometry_1.PHI_INVERSE, "%"), // Apply golden ratio to max width
                opacity: 0.9 // Subtle opacity difference for visual hierarchy
            }}>
            {subtitle}
          </Typography_1.default>)}
        
        {decoratorAfter && (<DecoratorContainer style={{ marginTop: theme_1.lightTheme.spacing.md }}>
            {decoratorAfter}
          </DecoratorContainer>)}
      </TitleContainer>);
});
SectionTitle.displayName = 'SectionTitle';
exports.default = SectionTitle;
var templateObject_1, templateObject_2;
