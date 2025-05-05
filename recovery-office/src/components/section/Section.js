"use strict";
/**
 * Section Component
 *
 * A container for content sections following sacred geometry principles.
 * Provides options for background styling, padding, and section dividers.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var SectionDivider_1 = require("./SectionDivider");
var FadeIn_1 = require("@animation/FadeIn");
// Helper function to get max width based on SectionWidth
var getMaxWidth = function (width) {
    switch (width) {
        case 'narrow':
            return '800px';
        case 'normal':
            return '1200px';
        case 'wide':
            return '1600px';
        case 'full':
            return '100%';
        default:
            return '1200px';
    }
};
// Helper function to get background styles
var getBackgroundStyles = function (style) {
    switch (style) {
        case 'light':
            return "\n        background-color: var(--color-background-light);\n      ";
        case 'dark':
            return "\n        background-color: var(--color-background-dark);\n        color: var(--color-text-light);\n      ";
        case 'primary':
            return "\n        background-color: var(--color-primary-main);\n        color: var(--color-text-light);\n      ";
        case 'gradient':
            return "\n        background: linear-gradient(\n          to right,\n          var(--color-primary-light),\n          var(--color-primary-main),\n          var(--color-primary-dark)\n        );\n        color: var(--color-text-light);\n      ";
        case 'botanical':
            return "\n        background-color: var(--color-background-light);\n        background-image: url('/assets/images/botanical/pattern-light.svg');\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n      ";
        default:
            return '';
    }
};
// Styled components
var SectionWrapper = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  position: relative;\n  overflow: hidden;\n  \n  ", "\n  \n  ", "\n"], ["\n  width: 100%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  position: relative;\n  overflow: hidden;\n  \n  ", "\n  \n  ", "\n"])), function (props) { return props.$paddingTop; }, function (props) { return props.$paddingBottom; }, function (props) { return getBackgroundStyles(props.$backgroundStyle); }, function (props) { return props.$textColor && "\n    color: ".concat(props.$textColor, ";\n  "); });
var SectionInner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: 0 ", "px;\n  position: relative;\n  z-index: 1;\n"], ["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: 0 ", "px;\n  position: relative;\n  z-index: 1;\n"])), function (props) { return getMaxWidth(props.$width); }, SACRED_SPACING.md);
/**
 * Section Component
 *
 * A container component that wraps content in a styled section.
 * Follows sacred geometry principles for spacing and proportions.
 */
var Section = function (_a) {
    var id = _a.id, children = _a.children, _b = _a.backgroundStyle, backgroundStyle = _b === void 0 ? 'none' : _b, _c = _a.width, width = _c === void 0 ? 'normal' : _c, _d = _a.paddingTop, paddingTop = _d === void 0 ? SACRED_SPACING.xl : _d, _e = _a.paddingBottom, paddingBottom = _e === void 0 ? SACRED_SPACING.xl : _e, _f = _a.dividerTop, dividerTop = _f === void 0 ? false : _f, _g = _a.dividerBottom, dividerBottom = _g === void 0 ? false : _g, _h = _a.dividerTopStyle, dividerTopStyle = _h === void 0 ? 'line' : _h, _j = _a.dividerBottomStyle, dividerBottomStyle = _j === void 0 ? 'line' : _j, _k = _a.animate, animate = _k === void 0 ? true : _k, textColor = _a.textColor, className = _a.className;
    var content = (<SectionWrapper id={id} className={className} $backgroundStyle={backgroundStyle} $paddingTop={paddingTop} $paddingBottom={paddingBottom} $textColor={textColor}>
      {dividerTop && (<SectionDivider_1.default style={dividerTopStyle} spacingBottom={SACRED_SPACING.md} spacingTop={0}/>)}
      
      <SectionInner $width={width}>
        {children}
      </SectionInner>
      
      {dividerBottom && (<SectionDivider_1.default style={dividerBottomStyle} spacingTop={SACRED_SPACING.md} spacingBottom={0}/>)}
    </SectionWrapper>);
    // Apply animation if enabled
    if (animate) {
        return (<FadeIn_1.FadeIn duration={800} delay={200}>
        {content}
      </FadeIn_1.FadeIn>);
    }
    return content;
};
exports.Section = Section;
exports.default = exports.Section;
var templateObject_1, templateObject_2;
