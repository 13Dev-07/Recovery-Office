"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStepper = void 0;
var React = require("react");
;
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var BookingContext_1 = require("@context/BookingContext");
var CheckIcon_1 = require("@design-system/icons/CheckIcon");
var framer_motion_1 = require("framer-motion");
var Box_1 = require("@design-system/components/layout/Box");
var Text_1 = require("@design-system/components/typography/Text");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
// Styled components using sacred geometry principles
/**
 * Container for the stepper component
 * Uses Fibonacci-based spacing
 */
var StepperContainer = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  width: 100%;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg);
/**
 * Line showing progress track
 * Uses sacred spacing for dimensions
 */
var ProgressLine = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: 9999px;\n  margin-bottom: ", "px;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"], ["\n  position: relative;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: 9999px;\n  margin-bottom: ", "px;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.theme.colors.background.light; }, sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.lg);
/**
 * Animated progress bar
 * Uses Framer Motion for sacred geometry-based animations
 */
var ProgressBar = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  border-radius: 9999px;\n  background-color: ", ";\n  position: absolute;\n  left: 0;\n  top: 0;\n"], ["\n  height: 100%;\n  border-radius: 9999px;\n  background-color: ", ";\n  position: absolute;\n  left: 0;\n  top: 0;\n"])), function (props) { return props.theme.colors.primary[500]; });
/**
 * Container for step indicator dots
 * Uses Golden Ratio spacing through flex distribution
 */
var StepIndicators = (0, styled_components_1.default)(Box_1.Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute; \n  width: 100%; \n  justify-content: space-between; \n  top: 50%; \n  transform: translateY(-50%);\n"], ["\n  position: absolute; \n  width: 100%; \n  justify-content: space-between; \n  top: 50%; \n  transform: translateY(-50%);\n"])));
/**
 * Individual step dot component
 * Uses sacred proportions and golden ratio for visual harmony
 */
var StepDot = (0, styled_components_1.default)(Box_1.Flex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  transition: all ", "ms ease-in-out;\n  z-index: 2;\n  \n  background-color: ", ";\n  \n  border: ", ";\n  border-color: ", ";\n  \n  color: ", ";\n  \n  box-shadow: ", ";\n"], ["\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  transition: all ", "ms ease-in-out;\n  z-index: 2;\n  \n  background-color: ", ";\n  \n  border: ", ";\n  border-color: ", ";\n  \n  color: ", ";\n  \n  box-shadow: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, function (props) {
    return props.$status === 'completed'
        ? props.theme.colors.primary[500]
        : props.$status === 'active'
            ? 'white'
            : props.theme.colors.background.light;
}, function (props) { return props.$status === 'active' ? '2px solid' : 'none'; }, function (props) { return props.$status === 'active' ? props.theme.colors.primary[500] : 'transparent'; }, function (props) {
    return props.$status === 'completed'
        ? 'white'
        : props.$status === 'active'
            ? props.theme.colors.primary[500]
            : props.theme.colors.text.secondary;
}, function (props) { return props.$status === 'active' ? "0 ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px rgba(0, 0, 0, 0.1)") : 'none'; });
/**
 * Step label text
 * Uses golden proportions for sizing and spacing
 */
var StepLabel = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  text-align: center;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  \n  font-weight: ", ";\n  color: ", ";\n  \n  @media (max-width: 768px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  text-align: center;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  \n  font-weight: ", ";\n  color: ", ";\n  \n  @media (max-width: 768px) {\n    display: none;\n  }\n"])), function (props) { return props.$isActive ? '500' : 'normal'; }, function (props) { return props.$isActive ? props.theme.colors.text.primary : props.theme.colors.text.secondary; });
/**
 * Mobile-only step text
 * Appears on smaller screens
 */
var MobileStepText = (0, styled_components_1.default)(Text_1.Text)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-align: center;\n  font-weight: 500;\n  color: ", ";\n  \n  @media (min-width: 769px) {\n    display: none;\n  }\n"], ["\n  text-align: center;\n  font-weight: 500;\n  color: ", ";\n  \n  @media (min-width: 769px) {\n    display: none;\n  }\n"])), function (props) { return props.theme.colors.text.secondary; });
/**
 * BookingStepper component
 * Displays a visual representation of the booking process steps
 * Follows sacred geometry principles for dimensions and spacing
 */
var BookingStepper = function (_a) {
    var _b;
    var steps = _a.steps, currentStepId = _a.currentStepId, onStepClick = _a.onStepClick;
    var state = (0, BookingContext_1.useBooking)().state;
    var completedSteps = state.completedSteps;
    // Calculate progress percentage based on current step
    var progressPercentage = React.useMemo(function () {
        var currentStepIndex = steps.findIndex(function (step) { return step.id === currentStepId; });
        return ((currentStepIndex) / (steps.length - 1)) * 100;
    }, [currentStepId, steps]);
    // Check if a step is clickable (can only go to previous steps or current step)
    var isStepClickable = function (stepId) {
        return stepId <= currentStepId && typeof onStepClick === 'function';
    };
    // Handle step click
    var handleStepClick = function (stepId) {
        if (isStepClickable(stepId) && onStepClick) {
            onStepClick(stepId);
        }
    };
    // Get step status (completed, active, upcoming)
    var getStepStatus = function (stepId) {
        if (completedSteps.has(stepId) || stepId < currentStepId)
            return 'completed';
        if (stepId === currentStepId)
            return 'active';
        return 'upcoming';
    };
    // Easing function based on golden ratio
    var goldenEasing = [0, sacred_geometry_1.PHI - 1, 1 - sacred_geometry_1.PHI_INVERSE, 1];
    return (<StepperContainer>
      {/* Step progress line */}
      <ProgressLine>
        <ProgressBar initial={{ width: 0 }} animate={{ width: "".concat(progressPercentage, "%") }} transition={{
            duration: sacred_geometry_1.ANIMATION_TIMING.standard / 1000,
            ease: goldenEasing
        }}/>
        
        {/* Step indicators */}
        <StepIndicators>
          {steps.map(function (step, index) {
            var status = getStepStatus(step.id);
            var isActive = status === 'active';
            var isClickable = isStepClickable(step.id);
            // Apply golden ratio for step indicator sizing
            var indicatorSize = isActive
                ? sacred_geometry_1.FIBONACCI[6]
                : sacred_geometry_1.FIBONACCI[5];
            return (<Box_1.Box key={step.id} style={{
                    position: 'relative',
                    cursor: isClickable ? 'pointer' : 'default'
                }} onClick={function () { return handleStepClick(step.id); }} data-testid={"booking-step-".concat(step.id)} role="button" aria-current={isActive ? 'step' : undefined} aria-label={"".concat(step.label, " ").concat(status === 'completed' ? '(completed)' : status === 'active' ? '(current)' : '(upcoming)')} tabIndex={isClickable ? 0 : -1}>
                {/* Step circle */}
                <StepDot $status={status} style={{
                    width: "".concat(indicatorSize, "px"),
                    height: "".concat(indicatorSize, "px"),
                    transform: "translateX(-".concat(indicatorSize / 2, "px)")
                }}>
                  {status === 'completed' ? (<CheckIcon_1.CheckIcon width={16} height={16}/>) : (<span>{index + 1}</span>)}
                </StepDot>
                
                {/* Step label */}
                <StepLabel $isActive={isActive} style={{
                    top: "".concat(sacred_geometry_1.SACRED_SPACING.xl, "px"),
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: "".concat(sacred_geometry_1.FIBONACCI[9], "px")
                }}>
                  {step.label}
                </StepLabel>
              </Box_1.Box>);
        })}
        </StepIndicators>
      </ProgressLine>
      
      {/* Current step description */}
      <MobileStepText>
        Step {steps.findIndex(function (step) { return step.id === currentStepId; }) + 1}: {(_b = steps.find(function (step) { return step.id === currentStepId; })) === null || _b === void 0 ? void 0 : _b.label}
      </MobileStepText>
    </StepperContainer>);
};
exports.BookingStepper = BookingStepper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
