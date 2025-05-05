"use strict";
/**
 * SectionHeading Component
 *
 * Creates a heading for sections with optional subtitle and decorative elements.
 * Adheres to sacred geometry principles for spacing and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeading = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var FadeIn_1 = require("@animation/FadeIn");
// Get font size based on heading size
var getFontSize = function (size) {
    switch (size) {
        case 'small':
            return 'var(--font-size-xl)';
        case 'medium':
            return 'var(--font-size-2xl)';
        case 'large':
            return 'var(--font-size-3xl)';
        default:
            return 'var(--font-size-2xl)';
    }
};
// Get subtitle font size based on heading size
var getSubtitleFontSize = function (size) {
    switch (size) {
        case 'small':
            return 'var(--font-size-md)';
        case 'medium':
            return 'var(--font-size-lg)';
        case 'large':
            return 'var(--font-size-xl)';
        default:
            return 'var(--font-size-lg)';
    }
};
// Get decoration width based on alignment
var getDecorationWidth = function (alignment) {
    // For sacred geometry proportions, we use 1/PHI (approx 61.8%) for centered elements
    // and a different proportion for left/right aligned elements
    switch (alignment) {
        case 'left':
            return '38.2%'; // 1 - (1/PHI)
        case 'center':
            return '61.8%'; // 1/PHI
        case 'right':
            return '38.2%'; // 1 - (1/PHI)
        default:
            return '61.8%';
    }
};
// Styled components
var HeadingContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: ", ";\n  margin-bottom: ", "px;\n  position: relative;\n"], ["\n  text-align: ", ";\n  margin-bottom: ", "px;\n  position: relative;\n"])), function (props) { return props.$alignment; }, function (props) { return props.$marginBottom; });
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: var(--font-heading);\n  margin: 0 0 ", "px 0;\n  font-weight: 700;\n  line-height: 1.2;\n  position: relative;\n"], ["\n  font-size: ", ";\n  font-family: var(--font-heading);\n  margin: 0 0 ", "px 0;\n  font-weight: 700;\n  line-height: 1.2;\n  position: relative;\n"])), function (props) { return getFontSize(props.$size); }, sacred_geometry_1.SACRED_SPACING.xs);
var Subtitle = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: var(--font-body);\n  margin: ", "px 0 0 0;\n  font-weight: 400;\n  line-height: 1.5;\n  opacity: 0.85;\n"], ["\n  font-size: ", ";\n  font-family: var(--font-body);\n  margin: ", "px 0 0 0;\n  font-weight: 400;\n  line-height: 1.5;\n  opacity: 0.85;\n"])), function (props) { return getSubtitleFontSize(props.$size); }, sacred_geometry_1.SACRED_SPACING.xs);
var Decoration = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  width: ", ";\n  height: 2px;\n  background: ", ";\n  margin-top: ", "px;\n  position: relative;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  display: ", ";\n  width: ", ";\n  height: 2px;\n  background: ", ";\n  margin-top: ", "px;\n  position: relative;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"])), function (props) { return props.$type === 'none' ? 'none' : 'block'; }, function (props) { return getDecorationWidth(props.$alignment); }, function (props) { return props.$type === 'line' ? 'var(--color-primary-main)' : 'transparent'; }, sacred_geometry_1.SACRED_SPACING.sm, function (props) { return props.$alignment === 'center' && "\n    margin-left: auto;\n    margin-right: auto;\n  "; }, function (props) { return props.$alignment === 'right' && "\n    margin-left: auto;\n  "; }, function (props) { return props.$type === 'dot' && "\n    background: transparent;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: var(--color-primary-main);\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  "; }, function (props) { return props.$type === 'botanical' && "\n    background: transparent;\n    height: 20px;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background-image: url('/assets/images/botanical/divider-small.svg');\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n    }\n  "; });
/**
 * SectionHeading Component
 *
 * Displays a styled heading for sections with optional subtitle and
 * decorative elements. Built using sacred geometry principles.
 */
var SectionHeading = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, _b = _a.alignment, alignment = _b === void 0 ? 'center' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.decoration, decoration = _d === void 0 ? 'line' : _d, _e = _a.marginBottom, marginBottom = _e === void 0 ? sacred_geometry_1.SACRED_SPACING.lg : _e, _f = _a.animate, animate = _f === void 0 ? true : _f, className = _a.className;
    var headingContent = (<HeadingContainer className={className} $alignment={alignment} $marginBottom={marginBottom}>
      <Title $size={size}>{title}</Title>
      
      {subtitle && (<Subtitle $size={size}>{subtitle}</Subtitle>)}
      
      <Decoration $type={decoration} $alignment={alignment}/>
    </HeadingContainer>);
    // Apply animation if enabled
    if (animate) {
        return (<FadeIn_1.FadeIn duration={600} delay={100}>
        {headingContent}
      </FadeIn_1.FadeIn>);
    }
    return headingContent;
};
exports.SectionHeading = SectionHeading;
exports.default = exports.SectionHeading;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
