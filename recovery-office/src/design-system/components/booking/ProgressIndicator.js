"use strict";
/**
 * ProgressIndicator Component
 *
 * A component that displays the user's progress through the booking steps.
 * Follows sacred geometry principles for spacing and proportions.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIndicator = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Get step indicator size based on size option
 */
var getIndicatorSize = function (size) {
    switch (size) {
        case 'sm':
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); // 5px
        case 'lg':
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); // 13px
        case 'md':
        default:
            return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); // 8px
    }
};
/**
 * ProgressIndicator component for booking steps
 */
var ProgressIndicator = function (_a) {
    var currentStep = _a.currentStep, totalSteps = _a.totalSteps, _b = _a.showNumbers, showNumbers = _b === void 0 ? true : _b, _c = _a.showLabels, showLabels = _c === void 0 ? false : _c, _d = _a.stepLabels, stepLabels = _d === void 0 ? [] : _d, _e = _a.variant, variant = _e === void 0 ? 'circle' : _e, _f = _a.size, size = _f === void 0 ? 'md' : _f, className = _a.className;
    // Default step labels if not provided
    var labels = stepLabels.length === totalSteps
        ? stepLabels
        : [
            'Service',
            'Date & Time',
            'Your Details',
            'Confirmation'
        ];
    var indicatorSize = getIndicatorSize(size);
    return (<ProgressContainer className={className}>
      {Array.from({ length: totalSteps }).map(function (_, index) {
            var _a;
            var isActive = index <= currentStep;
            var isCurrent = index === currentStep;
            return (<StepWrapper key={index} $isLast={index === totalSteps - 1}>
            <StepIndicator $isActive={isActive} $isCurrent={isCurrent} $size={indicatorSize} $variant={variant}>
              {showNumbers && (index < currentStep ? (<CheckIcon>✓</CheckIcon>) : (<StepNumber>{index + 1}</StepNumber>))}
            </StepIndicator>
            
            {showLabels && (<StepLabel $isActive={isActive} $isCurrent={isCurrent}>
                {(_a = labels[index]) !== null && _a !== void 0 ? _a : 1}
              </StepLabel>)}
            
            {index < totalSteps - 1 && (<Connector>
                <Progress $progress={index < currentStep
                        ? 1
                        : index === currentStep
                            ? 0.5
                            : 0}/>
              </Connector>)}
          </StepWrapper>);
        })}
    </ProgressContainer>);
};
exports.ProgressIndicator = ProgressIndicator;
// Styled components with sacred geometry principles
var ProgressContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"])));
var StepWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  position: relative;\n  \n  /* Last step doesn't need to take up horizontal space */\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  position: relative;\n  \n  /* Last step doesn't need to take up horizontal space */\n  ", "\n"])), function (props) { return props.$isLast && "\n    flex: 0;\n  "; });
var StepIndicator = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  /* Size calculation based on the Fibonacci sequence */\n  width: ", "px;\n  height: ", "px;\n  \n  /* Styling based on variant */\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  /* Animation for current step */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Current step highlight */\n  ", "\n  \n  /* Special effect for completed steps */\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  /* Size calculation based on the Fibonacci sequence */\n  width: ", "px;\n  height: ", "px;\n  \n  /* Styling based on variant */\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  /* Animation for current step */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Current step highlight */\n  ", "\n  \n  /* Special effect for completed steps */\n  ", "\n"])), function (props) { return props.$size * sacred_geometry_1.PHI; }, function (props) { return props.$size * sacred_geometry_1.PHI; }, function (props) {
    var _a, _b, _c, _d;
    return props.$variant === 'circle' && "\n    border-radius: 50%;\n    border: ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(2), "px solid ").concat(props.$isActive ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1 : (_b = props.theme.colors.gray[300]) !== null && _b !== void 0 ? _b : 1, ";\n    background-color: ").concat(props.$isActive
        ? props.$isCurrent
            ? (_c = props.theme.colors.primary[300]) !== null && _c !== void 0 ? _c : 1
            : (_d = props.theme.colors.primary[500]) !== null && _d !== void 0 ? _d : 1
        : props.theme.colors.background.light, ";\n  ");
}, function (props) {
    var _a, _b, _c;
    return props.$variant === 'dot' && "\n    border-radius: 50%;\n    background-color: ".concat(props.$isActive
        ? props.$isCurrent
            ? (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1
            : (_b = props.theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1
        : (_c = props.theme.colors.gray[300]) !== null && _c !== void 0 ? _c : 1, ";\n  ");
}, function (props) {
    var _a, _b;
    return props.$variant === 'line' && "\n    border-radius: ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(2), "px;\n    height: ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px;\n    width: ").concat(props.$size * sacred_geometry_1.PHI, "px;\n    background-color: ").concat(props.$isActive
        ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.gray[300]) !== null && _b !== void 0 ? _b : 1, ";\n  ");
}, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, function (props) {
    var _a;
    return props.$isCurrent && "\n    box-shadow: 0 0 0 ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px ").concat((_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1).concat(sacred_geometry_1.PHI_INVERSE, ";\n    transform: scale(").concat(sacred_geometry_1.PHI_INVERSE * sacred_geometry_1.PHI, ");\n  ");
}, function (props) { return props.$isActive && !props.$isCurrent && "\n    transform: scale(1);\n  "; });
var CheckIcon = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: bold;\n"])), function (props) { return props.theme.colors.background.light; }, function (props) { return props.theme.typography.fontSize * sacred_geometry_1.PHI_INVERSE; });
var StepNumber = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: inherit;\n  font-size: ", "px;\n  font-weight: 500;\n"], ["\n  color: inherit;\n  font-size: ", "px;\n  font-weight: 500;\n"])), function (props) { return props.theme.typography.fontSize * sacred_geometry_1.PHI_INVERSE; });
var StepLabel = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px; /* 13px */\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  font-size: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: absolute;\n  top: ", "px; /* 13px */\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  font-size: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), function (props) { return props.theme.typography.fontSize * sacred_geometry_1.PHI_INVERSE; }, function (props) {
    var _a;
    return props.$isActive
        ? props.$isCurrent
            ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
            : props.theme.colors.text.primary
        : props.theme.colors.text.secondary;
}, function (props) { return props.$isCurrent ? 600 : 400; }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE);
var Connector = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n  height: ", "px; /* 1px */\n  background-color: ", ";\n  position: relative;\n"], ["\n  flex: 1;\n  height: ", "px; /* 1px */\n  background-color: ", ";\n  position: relative;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(2), function (props) { var _a; return (_a = props.theme.colors.gray[300]) !== null && _a !== void 0 ? _a : 1; });
var Progress = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", "%;\n  background-color: ", ";\n  transition: width 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: ", "%;\n  background-color: ", ";\n  transition: width 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), function (props) { return props.$progress * 100; }, function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE);
exports.default = exports.ProgressIndicator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
