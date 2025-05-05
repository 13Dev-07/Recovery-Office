"use strict";
/**
 * BookingInterface Component
 *
 * A container component that manages the multi-step booking workflow.
 * Follows sacred geometry principles for spacing, proportions, and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingInterface = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var state_1 = require("./state");
var ProgressIndicator_1 = require("./ProgressIndicator");
var BookingControls_1 = require("./BookingControls");
var steps_1 = require("./steps");
var BotanicalDecorator_1 = require("../botanical/BotanicalDecorator");
var validation_1 = require("./validation");
/**
 * Array of booking step components in sequence
 */
var BOOKING_STEPS = [
    steps_1.ServiceSelection,
    steps_1.DateSelection,
    steps_1.ClientInfo,
    steps_1.Confirmation
];
/**
 * Sacred geometry easing functions based on phi
 */
var SACRED_EASINGS = {
    easeOut: [0, PHI_INVERSE, PHI_INVERSE, 1],
    easeIn: [PHI_INVERSE, 0, 1, PHI_INVERSE],
    easeInOut: [PHI_INVERSE, 0, 0, 1]
};
/**
 * BookingInterface component that manages the multi-step booking process
 */
var BookingInterface = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'var(--color-background-light)' : _b, _c = _a.withBotanical, withBotanical = _c === void 0 ? true : _c, onComplete = _a.onComplete, className = _a.className, style = _a.style;
    // State management with reducer
    var _d = (0, react_1.useReducer)(state_1.bookingReducer, state_1.initialBookingState), state = _d[0], dispatch = _d[1];
    // Get current step component
    var CurrentStep = BOOKING_STEPS[state.currentStep];
    // Navigation handlers
    var handleNext = function () {
        if ((0, validation_1.isStepValid)(state, state.currentStep) &&
            state.currentStep < BOOKING_STEPS.length - 1) {
            dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep + 1 });
        }
    };
    var handlePrevious = function () {
        if (state.currentStep > 0) {
            dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep - 1 });
        }
    };
    // Handle form submission
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(0, validation_1.isStepValid)(state, state.currentStep)) return [3 /*break*/, 5];
                    // Set loading state
                    dispatch({ type: 'SET_SUBMITTING', payload: true });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // Mock API call with timeout
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1500); })];
                case 2:
                    // Mock API call with timeout
                    _a.sent();
                    // Set success state
                    dispatch({ type: 'SET_SUBMITTED', payload: true });
                    // Call completion callback if provided
                    if (onComplete) {
                        onComplete(state);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    // Set error state
                    dispatch({ type: 'SET_ERROR', payload: 'An error occurred during submission' });
                    return [3 /*break*/, 5];
                case 4:
                    // Clear loading state
                    dispatch({ type: 'SET_SUBMITTING', payload: false });
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<state_1.BookingContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BookingContainer className={className} style={style} $backgroundColor={backgroundColor}>
        {withBotanical && (<BotanicalDecorator_1.BotanicalDecorator botanicalType="flowerOfLife" position="topRight" size="xl" opacity={0.05} zIndex={0} decorative>
            <div />
          </BotanicalDecorator_1.BotanicalDecorator>)}
        
        <BookingHeader>
          <h2>Schedule a Consultation</h2>
          <p>Take the first step toward your recovery journey</p>
        </BookingHeader>
        
        <ProgressContainer>
          <ProgressIndicator_1.ProgressIndicator currentStep={state.currentStep} totalSteps={BOOKING_STEPS.length}/>
        </ProgressContainer>
        
        <StepContainer>
          <framer_motion_1.AnimatePresence mode="wait">
            <StepContent key={state.currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{
            duration: getFibonacciByIndex(5) * 0.01, // 0.05s
            ease: SACRED_EASINGS.easeInOut,
        }}>
              <CurrentStep />
            </StepContent>
          </framer_motion_1.AnimatePresence>
        </StepContainer>
        
        <BookingControls_1.BookingControls currentStep={state.currentStep} totalSteps={BOOKING_STEPS.length} onNext={handleNext} onPrevious={handlePrevious} onSubmit={handleSubmit} isNextDisabled={!(0, validation_1.isStepValid)(state, state.currentStep)} isSubmitting={state.isSubmitting} isLastStep={state.currentStep === BOOKING_STEPS.length - 1}/>
        
        {state.error && (<ErrorMessage>
            {state.error}
          </ErrorMessage>)}
      </BookingContainer>
    </state_1.BookingContext.Provider>);
};
exports.BookingInterface = BookingInterface;
// Styled components with sacred geometry principles
var BookingContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px; // ~1165px\n  margin: 0 auto;\n  padding: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  max-width: ", "px; // ~1165px\n  margin: 0 auto;\n  padding: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n"])), getFibonacciByIndex(13) * 5, getFibonacciByIndex(8), function (props) { return props.$backgroundColor; }, getFibonacciByIndex(6), getFibonacciByIndex(5), getFibonacciByIndex(8));
var BookingHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n  margin-bottom: ", "px; // 21px\n  \n  h2 {\n    margin: 0 0 ", "px; // 5px\n    font-size: ", "px; // Golden ratio scaling\n    color: ", ";\n  }\n  \n  p {\n    margin: 0;\n    font-size: ", "px;\n    color: ", ";\n    opacity: 0.8;\n  }\n"], ["\n  text-align: center;\n  margin-bottom: ", "px; // 21px\n  \n  h2 {\n    margin: 0 0 ", "px; // 5px\n    font-size: ", "px; // Golden ratio scaling\n    color: ", ";\n  }\n  \n  p {\n    margin: 0;\n    font-size: ", "px;\n    color: ", ";\n    opacity: 0.8;\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(5), function (props) { return props.theme.typography.fontSize * PHI; }, function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.typography.fontSize; }, function (props) { return props.theme.colors.text.secondary; });
var ProgressContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 21px\n"], ["\n  margin-bottom: ", "px; // 21px\n"])), getFibonacciByIndex(8));
var StepContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  min-height: ", "px; // 89px\n  margin-bottom: ", "px; // 21px\n"], ["\n  position: relative;\n  min-height: ", "px; // 89px\n  margin-bottom: ", "px; // 21px\n"])), getFibonacciByIndex(11), getFibonacciByIndex(8));
var StepContent = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n"], ["\n  position: relative;\n  z-index: 1;\n"])));
var ErrorMessage = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  text-align: center;\n  padding: ", "px 0; // 5px\n"], ["\n  color: ", ";\n  text-align: center;\n  padding: ", "px 0; // 5px\n"])), function (props) { var _a; return (_a = props.theme.colors.error[500]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(5));
exports.default = exports.BookingInterface;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
