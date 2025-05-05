"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingControls = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
/**
 * Container for the booking controls that ensures proper spacing
 * Uses Fibonacci sequence for spacing and margin calculations
 */
var ControlsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n  padding-top: ", "px;\n  border-top: 1px solid ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n  padding-top: ", "px;\n  border-top: 1px solid ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.md, function (_a) {
    var theme = _a.theme;
    return theme.colors.border.light;
});
/**
 * Left side of the controls containing the back button
 * Uses PHI ratio for width distribution
 */
var BackSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "%;\n"], ["\n  width: ", "%;\n"])), 100 * (1 - sacred_geometry_1.PHI_INVERSE));
/**
 * Right side of the controls containing the continue/submit button
 * Uses PHI ratio for width distribution
 */
var ContinueSection = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "%;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  width: ", "%;\n  display: flex;\n  justify-content: flex-end;\n"])), 100 * sacred_geometry_1.PHI_INVERSE);
/**
 * Button base styling with sacred geometry proportions
 */
var Button = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-weight: 500;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-weight: 500;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.xxs, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, function (_a) {
    var theme = _a.theme, isSecondary = _a.isSecondary;
    return isSecondary ? theme.colors.border.main : 'transparent';
}, function (_a) {
    var theme = _a.theme, isSecondary = _a.isSecondary;
    return isSecondary ? 'transparent' : theme.colors.accent.main;
}, function (_a) {
    var theme = _a.theme, isSecondary = _a.isSecondary;
    return isSecondary ? theme.colors.text.main : theme.colors.text.light;
}, function (_a) {
    var theme = _a.theme, isSecondary = _a.isSecondary;
    return isSecondary ? theme.colors.background.light : theme.colors.accent.dark;
});
/**
 * BookingControls component
 * Provides navigation controls for the booking process with back and continue/submit buttons
 * Follows sacred geometry principles for layout and spacing
 */
var BookingControls = function (_a) {
    var canGoBack = _a.canGoBack, canContinue = _a.canContinue, isLastStep = _a.isLastStep, onBack = _a.onBack, onContinue = _a.onContinue, onSubmit = _a.onSubmit;
    return (<ControlsContainer>
      <BackSection>
        {canGoBack && (<Button isSecondary onClick={onBack} type="button">
            Back
          </Button>)}
      </BackSection>
      <ContinueSection>
        <Button onClick={isLastStep ? onSubmit : onContinue} disabled={!canContinue} type={isLastStep ? "submit" : "button"}>
          {isLastStep ? 'Submit' : 'Continue'}
        </Button>
      </ContinueSection>
    </ControlsContainer>);
};
exports.BookingControls = BookingControls;
exports.default = exports.BookingControls;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
