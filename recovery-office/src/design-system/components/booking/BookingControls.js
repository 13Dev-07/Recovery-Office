"use strict";
/**
 * BookingControls Component
 *
 * Provides navigation buttons for the booking workflow.
 * Applies sacred geometry principles for spacing and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingControls = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Button_1 = require("../button/Button");
/**
 * BookingControls component for step navigation
 */
var BookingControls = function (_a) {
    var currentStep = _a.currentStep, totalSteps = _a.totalSteps, onNext = _a.onNext, onPrevious = _a.onPrevious, onSubmit = _a.onSubmit, _b = _a.isNextDisabled, isNextDisabled = _b === void 0 ? false : _b, _c = _a.isSubmitting, isSubmitting = _c === void 0 ? false : _c, _d = _a.isLastStep, isLastStep = _d === void 0 ? false : _d, _e = _a.buttonVariant, buttonVariant = _e === void 0 ? 'primary' : _e, _f = _a.buttonSize, buttonSize = _f === void 0 ? 'md' : _f, className = _a.className;
    return (<ControlsContainer className={className}>
      <LeftControls $visible={currentStep > 0}>
        <Button_1.Button variant="outline" size={buttonSize} onClick={onPrevious} disabled={currentStep === 0 || isSubmitting} style={{ opacity: currentStep === 0 ? 0 : 1 }}>
          Previous
        </Button_1.Button>
      </LeftControls>
      
      <StepIndicator>
        Step {currentStep + 1} of {totalSteps}
      </StepIndicator>
      
      <RightControls>
        <Button_1.Button variant={buttonVariant} size={buttonSize} onClick={isLastStep ? onSubmit : onNext} disabled={isNextDisabled || isSubmitting} isLoading={isSubmitting}>
          {isLastStep ? 'Submit' : 'Next'}
        </Button_1.Button>
      </RightControls>
    </ControlsContainer>);
};
exports.BookingControls = BookingControls;
// Styled components with sacred geometry principles
var ControlsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: ", "px; // 21px\n  padding-top: ", "px; // 5px\n  border-top: 1px solid ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: ", "px; // 21px\n  padding-top: ", "px; // 5px\n  border-top: 1px solid ", ";\n"])), getFibonacciByIndex(8), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1; });
var LeftControls = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  transition: opacity 0.3s cubic-bezier(", ", 0, ", ", 1);\n  visibility: ", ";\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  transition: opacity 0.3s cubic-bezier(", ", 0, ", ", 1);\n  visibility: ", ";\n"])), PHI_INVERSE, PHI_INVERSE, function (props) { return props.$visible ? 'visible' : 'hidden'; });
var RightControls = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n"])));
var StepIndicator = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n  padding: 0 ", "px; // 8px\n  opacity: 0.8;\n  \n  /* Center text with proper alignment */\n  flex: 0 0 auto;\n  text-align: center;\n  \n  /* Golden ratio typography scaling */\n  letter-spacing: ", "em;\n  \n  /* Subtle highlight for readability */\n  @media (prefers-color-scheme: dark) {\n    text-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.3);\n  }\n  \n  @media (prefers-color-scheme: light) {\n    text-shadow: 0 ", "px ", "px rgba(255, 255, 255, 0.5);\n  }\n"], ["\n  font-size: ", "px;\n  color: ", ";\n  padding: 0 ", "px; // 8px\n  opacity: 0.8;\n  \n  /* Center text with proper alignment */\n  flex: 0 0 auto;\n  text-align: center;\n  \n  /* Golden ratio typography scaling */\n  letter-spacing: ", "em;\n  \n  /* Subtle highlight for readability */\n  @media (prefers-color-scheme: dark) {\n    text-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.3);\n  }\n  \n  @media (prefers-color-scheme: light) {\n    text-shadow: 0 ", "px ", "px rgba(255, 255, 255, 0.5);\n  }\n"])), function (props) { return props.theme.typography.fontSize * PHI_INVERSE; }, function (props) { return props.theme.colors.text.secondary; }, getFibonacciByIndex(6), PHI_INVERSE * 0.1, getFibonacciByIndex(1), getFibonacciByIndex(2), getFibonacciByIndex(1), getFibonacciByIndex(2));
exports.default = exports.BookingControls;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
