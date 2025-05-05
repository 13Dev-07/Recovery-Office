"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
/**
 * Container for the progress indicator that spans the full width
 * Uses sacred spacing for margins
 */
var ProgressContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: ", "px;\n"], ["\n  width: 100%;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xl);
/**
 * Progress track that shows the background line for the progress
 * Height is based on a small Fibonacci number
 */
var ProgressTrack = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  margin-bottom: ", "px;\n  position: relative;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  margin-bottom: ", "px;\n  position: relative;\n  overflow: hidden;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), function (_a) {
    var theme = _a.theme;
    return theme.colors.background.light;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Indicator fill that shows the progress visually
 * Uses an animation timing based on Fibonacci sequence
 */
var ProgressFill = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", "%;\n  background-color: ", ";\n  border-radius: ", "px;\n  transition: width ", "ms ease-in-out;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", "%;\n  background-color: ", ";\n  border-radius: ", "px;\n  transition: width ", "ms ease-in-out;\n"])), function (props) { return props.fillPercentage; }, function (_a) {
    var theme = _a.theme;
    return theme.colors.accent.main;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7) * 10);
/**
 * Container for the step markers
 * Uses flexbox to distribute markers evenly
 */
var StepMarkersContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"])));
/**
 * Container for individual step marker and label
 * Text alignment calculated to prevent overflow
 */
var StepMarker = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  \n  /* Apply special alignment for first and last elements */\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  \n  /* Apply special alignment for first and last elements */\n  ", "\n"])), function (props) {
    if (props.index === 0) {
        return 'align-items: flex-start; text-align: left;';
    }
    else if (props.index === props.totalSteps - 1) {
        return 'align-items: flex-end; text-align: right;';
    }
    return '';
});
/**
 * The circle marker for each step
 * Size based on Fibonacci numbers, with golden ratio for active markers
 */
var Marker = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  transition: all ", "ms ease-in-out;\n  \n  /* Scale active marker by PHI */\n  transform: ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  transition: all ", "ms ease-in-out;\n  \n  /* Scale active marker by PHI */\n  transform: ", ";\n"])), function (props) { return props.isActive ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) : (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); }, function (props) { return props.isActive ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) : (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); }, function (props) {
    if (props.isCompleted || props.isActive) {
        return props.theme.colors.accent.main;
    }
    return props.theme.colors.background.medium;
}, sacred_geometry_1.SACRED_SPACING.xxs, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, function (props) { return props.isActive ? "scale(".concat(sacred_geometry_1.PHI_INVERSE + 1, ")") : 'scale(1)'; });
/**
 * Label for each step
 * Font size consistent with the sacred typography scale
 */
var StepLabel = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  font-weight: ", ";\n  color: ", ";\n  transition: all ", "ms ease-in-out;\n  max-width: ", "px;\n"], ["\n  font-size: 0.875rem;\n  font-weight: ", ";\n  color: ", ";\n  transition: all ", "ms ease-in-out;\n  max-width: ", "px;\n"])), function (props) { return (props.isActive || props.isCompleted) ? '600' : '400'; }, function (props) {
    if (props.isActive) {
        return props.theme.colors.text.dark;
    }
    else if (props.isCompleted) {
        return props.theme.colors.accent.dark;
    }
    return props.theme.colors.text.light;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, sacred_geometry_1.SACRED_SPACING.xxl);
/**
 * ProgressIndicator component
 * Visual indicator of the booking process progress with step markers
 * Implements sacred geometry principles throughout
 */
var ProgressIndicator = function (_a) {
    var currentStep = _a.currentStep, totalSteps = _a.totalSteps, stepLabels = _a.stepLabels;
    // Calculate the fill percentage based on the current step
    // Using PHI_INVERSE (0.618) for a more natural progression
    var fillPercentage = (currentStep / (totalSteps - 1)) * 100;
    return (<ProgressContainer>
      <ProgressTrack>
        <ProgressFill fillPercentage={fillPercentage}/>
      </ProgressTrack>
      
      <StepMarkersContainer>
        {stepLabels.map(function (label, index) {
            var isActive = index === currentStep;
            var isCompleted = index < currentStep;
            return (<StepMarker key={"step-".concat(index)} isActive={isActive} isCompleted={isCompleted} index={index} totalSteps={totalSteps}>
              <Marker isActive={isActive} isCompleted={isCompleted}/>
              <StepLabel isActive={isActive} isCompleted={isCompleted}>
                {label}
              </StepLabel>
            </StepMarker>);
        })}
      </StepMarkersContainer>
    </ProgressContainer>);
};
exports.default = ProgressIndicator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
