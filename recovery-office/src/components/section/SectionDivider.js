"use strict";
/**
 * SectionDivider Component
 *
 * Provides visual separation between sections following sacred geometry principles.
 * Offers different divider styles and optional botanical elements.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionDivider = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var FibonacciSpiral_1 = require("../design-system/components/botanical/FibonacciSpiral");
var GoldenSpiral_1 = require("../design-system/components/botanical/GoldenSpiral");
var Box_1 = require("../design-system/components/layout/Box");
// Styled components
var DividerContainer = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), function (props) { return props.$spacingTop; }, function (props) { return props.$spacingBottom; });
var LineDivider = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  position: relative;\n"], ["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  position: relative;\n"])), function (props) {
    switch (props.$variant) {
        case 'light': return '1px';
        case 'bold': return '3px';
        default: return '2px';
    }
}, function (props) { return props.$color; });
var DotsDivider = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1;\n    height: ", ";\n    background-color: ", ";\n  }\n\n  &::before {\n    margin-right: ", "px;\n  }\n\n  &::after {\n    margin-left: ", "px;\n  }\n\n  .dot {\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-color: ", ";\n    margin: 0 ", "px;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1;\n    height: ", ";\n    background-color: ", ";\n  }\n\n  &::before {\n    margin-right: ", "px;\n  }\n\n  &::after {\n    margin-left: ", "px;\n  }\n\n  .dot {\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-color: ", ";\n    margin: 0 ", "px;\n  }\n"])), function (props) {
    switch (props.$variant) {
        case 'light': return '8px';
        case 'bold': return '16px';
        default: return '12px';
    }
}, function (props) {
    switch (props.$variant) {
        case 'light': return '1px';
        case 'bold': return '3px';
        default: return '2px';
    }
}, function (props) { return props.$color; }, SACRED_SPACING.md, SACRED_SPACING.md, function (props) {
    switch (props.$variant) {
        case 'light': return '4px';
        case 'bold': return '8px';
        default: return '6px';
    }
}, function (props) {
    switch (props.$variant) {
        case 'light': return '4px';
        case 'bold': return '8px';
        default: return '6px';
    }
}, function (props) { return props.$color; }, SACRED_SPACING.xs);
var WaveDivider = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  \n  svg {\n    width: 100%;\n    height: 100%;\n    stroke: ", ";\n    stroke-width: ", ";\n    fill: none;\n  }\n"], ["\n  width: 100%;\n  height: ", ";\n  \n  svg {\n    width: 100%;\n    height: 100%;\n    stroke: ", ";\n    stroke-width: ", ";\n    fill: none;\n  }\n"])), function (props) {
    switch (props.$variant) {
        case 'light': return '12px';
        case 'bold': return '24px';
        default: return '18px';
    }
}, function (props) { return props.$color; }, function (props) {
    switch (props.$variant) {
        case 'light': return '1px';
        case 'bold': return '3px';
        default: return '2px';
    }
});
var BotanicalContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: ", "px 0;\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n    opacity: 0.6;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: ", "px 0;\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n    opacity: 0.6;\n  }\n"])), SACRED_SPACING.xs, SACRED_SPACING.xxl * 2, SACRED_SPACING.xxl * 2);
/**
 * SectionDivider Component
 *
 * Visual separation between sections with various styles and optional botanical elements.
 * All spacing follows sacred geometry principles.
 */
var SectionDivider = function (_a) {
    var _b = _a.style, style = _b === void 0 ? 'line' : _b, _c = _a.variant, variant = _c === void 0 ? 'medium' : _c, _d = _a.botanical, botanical = _d === void 0 ? 'none' : _d, color = _a.color, _e = _a.spacingTop, spacingTop = _e === void 0 ? SACRED_SPACING.md : _e, _f = _a.spacingBottom, spacingBottom = _f === void 0 ? SACRED_SPACING.md : _f, className = _a.className, children = _a.children;
    // Get color from theme or use provided color
    var dividerColor = color || 'primary.main';
    // Render divider based on style
    var renderDivider = function () {
        switch (style) {
            case 'dots':
                return (<DotsDivider $color={dividerColor} $variant={variant}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </DotsDivider>);
            case 'wave':
                return (<WaveDivider $color={dividerColor} $variant={variant}>
            <svg viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 C95,2.5 100,5 100,5"/>
            </svg>
          </WaveDivider>);
            case 'botanical':
                return renderBotanicalDivider();
            case 'none':
                return <div style={{ width: '100%', height: spacingTop + spacingBottom }}></div>;
            case 'line':
            default:
                return <LineDivider $color={dividerColor} $variant={variant}/>;
        }
    };
    // Render botanical element
    var renderBotanicalDivider = function () {
        return (<>
        <LineDivider $color={dividerColor} $variant="light"/>
        <BotanicalContainer>
          {botanical === 'fibonacci' && (<FibonacciSpiral_1.FibonacciSpiral iterations={5} showSquares={false}/>)}
          {botanical === 'goldenSpiral' && (<GoldenSpiral_1.GoldenSpiral size={SACRED_SPACING.xxl * 2} strokeWidth={2}/>)}
        </BotanicalContainer>
        <LineDivider $color={dividerColor} $variant="light"/>
      </>);
    };
    return (<DividerContainer className={className} $spacingTop={spacingTop} $spacingBottom={spacingBottom}>
      {renderDivider()}
    </DividerContainer>);
};
exports.SectionDivider = SectionDivider;
exports.default = exports.SectionDivider;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
