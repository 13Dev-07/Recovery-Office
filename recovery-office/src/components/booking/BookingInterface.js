"use strict";
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
;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var Box_1 = require("@design-system/components/layout/Box");
var Grid_1 = require("@design-system/components/layout/Grid");
var booking_types_1 = require("@types/booking.types");
var BookingContext_1 = require("@context/BookingContext");
var BookingStepper_1 = require("./BookingStepper");
var BookingNavigation_1 = require("./BookingNavigation");
var LoadingOverlay_1 = require("@design-system/components/feedback/LoadingOverlay");
var ErrorDisplay_1 = require("@design-system/components/feedback/ErrorDisplay");
var ServiceSelectionStep_1 = require("./steps/ServiceSelectionStep");
var DateSelectionStep_1 = require("./steps/DateSelectionStep");
var ClientInfoStep_1 = require("./steps/ClientInfoStep");
var ConfirmationStep_1 = require("./steps/ConfirmationStep");
var booking_constants_1 = require("@constants/booking.constants");
var BotanicalBackground_1 = require("@design-system/botanical/BotanicalBackground");
var useBreakpointValue_1 = require("@hooks/useBreakpointValue");
var react_2 = require("@emotion/react");
var VisuallyHidden_1 = require("@design-system/components/utils/VisuallyHidden");
/**
 * Available services
 * This would normally come from an API
 */
var SERVICES = [
    {
        id: 'investment-fraud',
        title: 'Investment Fraud Recovery',
        description: 'Recovery assistance for victims of investment scams, Ponzi schemes, and securities fraud.',
        duration: '60 min',
    },
    {
        id: 'financial-misconduct',
        title: 'Financial Misconduct',
        description: 'Expert guidance for recovery from financial advisor misconduct and breach of fiduciary duty.',
        duration: '60 min',
    },
    {
        id: 'crypto-recovery',
        title: 'Cryptocurrency Recovery',
        description: 'Specialized recovery services for cryptocurrency theft, scams and fraudulent exchanges.',
        duration: '90 min',
    },
    {
        id: 'regulatory-complaint',
        title: 'Regulatory Complaint Assistance',
        description: 'Help with filing complaints to financial regulatory bodies like the FCA, BaFin, or SEC.',
        duration: '45 min',
    },
];
/**
 * Time slots generator function
 * This would normally come from an API
 *
 * @param date The date to generate time slots for
 * @returns Array of time slots
 */
var getTimeSlots = function (date) {
    // Simulate API call
    // In a real app, this would call an API to get available time slots
    var day = date.getDay();
    // No slots on weekends
    if (day === 0 || day === 6) {
        return [];
    }
    // Generate slots from 9 AM to 5 PM
    var slots = [];
    var _loop_1 = function (hour) {
        // Create 2 slots per hour (top and bottom of the hour)
        ['00', '30'].forEach(function (minutes, index) {
            slots.push({
                id: "".concat(date.toDateString(), "-").concat(hour, "-").concat(minutes),
                time: "".concat(hour > 12 ? hour - 12 : hour, ":").concat(minutes, " ").concat(hour >= 12 ? 'PM' : 'AM'),
                // Simulate some slots being unavailable
                available: Math.random() > 0.3,
            });
        });
    };
    for (var hour = 9; hour < 17; hour++) {
        _loop_1(hour);
    }
    return slots;
};
/**
 * Booking step names
 */
var BookingStep;
(function (BookingStep) {
    BookingStep[BookingStep["SERVICE_SELECTION"] = 0] = "SERVICE_SELECTION";
    BookingStep[BookingStep["DATE_SELECTION"] = 1] = "DATE_SELECTION";
    BookingStep[BookingStep["CLIENT_INFO"] = 2] = "CLIENT_INFO";
    BookingStep[BookingStep["CONFIRMATION"] = 3] = "CONFIRMATION";
})(BookingStep || (BookingStep = {}));
var BookingContainer = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n  position: relative;\n"], ["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n  position: relative;\n"])), function (props) { return props.maxWidth || '100%'; });
var BookingHeader = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.theme.colors.background.light; }, function (props) { return props.theme.colors.border.light; });
var BookingContent = (0, styled_components_1.default)(Box_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  position: relative;\n  overflow: hidden;\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  position: relative;\n  overflow: hidden;\n"])), function (props) { return props.padding || sacred_geometry_1.SACRED_SPACING.md; }, function (props) { return props.theme.colors.background.light; }, sacred_geometry_1.SACRED_RADIUS.md);
var StepTransition = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
// Transition variants for step animations
var stepTransitionVariants = {
    initial: {
        opacity: 0,
        x: 20,
        transition: {
            duration: sacred_geometry_1.FIBONACCI[5] / 100, // 0.05s
            ease: [0, 0, 0.58, 1] // Sacred easing based on Golden Ratio
        }
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: sacred_geometry_1.FIBONACCI[7] / 100, // 0.13s
            ease: [0, 0, 0.58, 1]
        }
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: {
            duration: sacred_geometry_1.FIBONACCI[6] / 100, // 0.08s
            ease: [0.42, 0, 1, 1]
        }
    }
};
// Global styles to prevent body scrolling when modal is open
var GlobalStyles = (0, react_2.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  body.booking-modal-open {\n    overflow: hidden;\n  }\n"], ["\n  body.booking-modal-open {\n    overflow: hidden;\n  }\n"])));
/**
 * BookingInterface component
 * Main container for the booking flow
 * Handles responsive layout across device sizes with special attention to tablets
 * Ensures proper accessibility with focus management and screen reader announcements
 */
var BookingInterface = function () {
    var _a = (0, BookingContext_1.useBooking)(), state = _a.state, goToStep = _a.goToStep, goToNextStep = _a.goToNextStep, goToPreviousStep = _a.goToPreviousStep, fetchAvailableServices = _a.fetchAvailableServices, resetForm = _a.resetForm, isResourceLoading = _a.isResourceLoading, hasApiError = _a.hasApiError, getApiErrorForResource = _a.getApiErrorForResource, submitBooking = _a.submitBooking, selectedService = _a.selectedService, selectedDate = _a.selectedDate, selectedTimeSlot = _a.selectedTimeSlot, clientInfo = _a.clientInfo, bookingComplete = _a.bookingComplete, bookingReference = _a.bookingReference;
    var currentStep = state.currentStep;
    // Ref for the main content area for focus management
    var contentRef = (0, react_1.useRef)(null);
    // Screen reader announcements
    var _b = (0, react_1.useState)(''), stepChangeAnnouncement = _b[0], setStepChangeAnnouncement = _b[1];
    // Get responsive values based on screen size
    var containerMaxWidth = (0, useBreakpointValue_1.useBreakpointValue)({
        base: '100%',
        sm: '100%',
        md: "".concat(sacred_geometry_1.PHI * 800, "px"),
        lg: "".concat(sacred_geometry_1.PHI * 900, "px"),
        xl: "".concat(sacred_geometry_1.PHI * 1000, "px")
    });
    var contentPadding = (0, useBreakpointValue_1.useBreakpointValue)({
        base: sacred_geometry_1.SACRED_SPACING.xs,
        sm: sacred_geometry_1.SACRED_SPACING.sm,
        md: sacred_geometry_1.SACRED_SPACING.md,
        lg: sacred_geometry_1.SACRED_SPACING.lg
    });
    // Use a special layout for tablets to prevent common layout issues
    var isTablet = (0, useBreakpointValue_1.useBreakpointValue)({
        base: false,
        sm: true,
        lg: false
    });
    // Determine column layout based on screen size and step
    var useMultiColumnLayout = (0, useBreakpointValue_1.useBreakpointValue)({
        base: false,
        md: currentStep === booking_types_1.BookingStepId.DATE_SELECTION || currentStep === booking_types_1.BookingStepId.CONFIRMATION,
        lg: currentStep !== booking_types_1.BookingStepId.SUCCESS
    });
    // Initial data fetching
    React.useEffect(function () {
        fetchAvailableServices();
    }, [fetchAvailableServices]);
    // Handle retry after error
    var handleRetry = function () {
        fetchAvailableServices(true); // Force refresh
    };
    // Handle step navigation
    var handleNext = React.useCallback(function () {
        goToNextStep();
        // Set announcement for screen readers
        var nextStep = booking_constants_1.BOOKING_STEPS[currentStep + 1];
        if (nextStep) {
            setStepChangeAnnouncement("Proceeding to ".concat(nextStep.label, " step"));
        }
        // Focus the main content area
        setTimeout(function () {
            if (contentRef.current) {
                contentRef.current.focus();
            }
        }, sacred_geometry_1.FIBONACCI[7]); // Small delay for animation
    }, [currentStep, goToNextStep]);
    var handleBack = React.useCallback(function () {
        goToPreviousStep();
        // Set announcement for screen readers
        var prevStep = booking_constants_1.BOOKING_STEPS[currentStep - 1];
        if (prevStep) {
            setStepChangeAnnouncement("Returning to ".concat(prevStep.label, " step"));
        }
        // Focus the main content area
        setTimeout(function () {
            if (contentRef.current) {
                contentRef.current.focus();
            }
        }, sacred_geometry_1.FIBONACCI[7]); // Small delay for animation
    }, [currentStep, goToPreviousStep]);
    // Handle form submission
    var handleSubmit = React.useCallback(function (formData) { return __awaiter(void 0, void 0, void 0, function () {
        var serviceData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentStep === booking_types_1.BookingStepId.CONFIRMATION)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!(selectedService && selectedDate && selectedTimeSlot && clientInfo)) return [3 /*break*/, 3];
                    serviceData = {
                        serviceId: selectedService.id,
                        date: selectedDate
                    };
                    // Submit the booking
                    return [4 /*yield*/, submitBooking(serviceData, clientInfo, formData)];
                case 2:
                    // Submit the booking
                    _a.sent();
                    // Announce completion for screen readers
                    setStepChangeAnnouncement('Booking completed successfully');
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Booking submission failed:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentStep, selectedService, selectedDate, selectedTimeSlot, clientInfo, submitBooking]);
    // Render current step content
    var renderStepContent = function () {
        switch (currentStep) {
            case booking_types_1.BookingStepId.SERVICE_SELECTION:
                return <ServiceSelectionStep_1.ServiceSelectionStep onNext={handleNext}/>;
            case booking_types_1.BookingStepId.DATE_SELECTION:
                return <DateSelectionStep_1.DateSelectionStep onNext={handleNext} onBack={handleBack}/>;
            case booking_types_1.BookingStepId.CLIENT_INFORMATION:
                return <ClientInfoStep_1.ClientInfoStep onNext={handleNext} onBack={handleBack}/>;
            case booking_types_1.BookingStepId.CONFIRMATION:
                return <ConfirmationStep_1.ConfirmationStep onSubmit={handleSubmit} onBack={handleBack}/>;
            case booking_types_1.BookingStepId.SUCCESS:
                return (<Box_1.Box textAlign="center">
            <h2>Booking Successful!</h2>
            <p>Your booking has been confirmed. Reference: {bookingReference}</p>
            {/* Add additional confirmation details here */}
          </Box_1.Box>);
            default:
                return <div>Unknown step</div>;
        }
    };
    // Determine if we have any API errors
    var hasAnyApiError = hasApiError();
    var serviceError = getApiErrorForResource('services');
    var isLoadingServices = isResourceLoading('services');
    return (<>
      <react_2.Global styles={GlobalStyles}/>
      <BookingContainer maxWidth={containerMaxWidth}>
        {/* Screen reader announcements */}
        <VisuallyHidden_1.VisuallyHidden aria-live="polite" aria-atomic="true">
          {stepChangeAnnouncement}
        </VisuallyHidden_1.VisuallyHidden>
        
        {/* Background botanical elements */}
        <BotanicalBackground_1.BotanicalBackground />
        
        {/* Booking header with steps */}
        <BookingHeader>
          <BookingStepper_1.BookingStepper currentStep={currentStep} steps={Object.values(booking_constants_1.BOOKING_STEPS)} completedSteps={state.completedSteps}/>
        </BookingHeader>
        
        {/* Main content area */}
        <BookingContent padding={contentPadding} role="main" aria-label="Booking form" tabIndex={-1} ref={contentRef}>
          {/* Loading and error states */}
          {isLoadingServices && !hasAnyApiError && (<LoadingOverlay_1.LoadingOverlay message="Loading services..."/>)}
          
          {hasAnyApiError && (<ErrorDisplay_1.ErrorDisplay title="Error loading booking data" message={serviceError || "There was a problem loading the booking system."} onRetry={handleRetry}/>)}
          
          {/* Step content with transitions */}
          {!hasAnyApiError && !isLoadingServices && (<Grid_1.Grid templateColumns={useMultiColumnLayout ? 'repeat(2, 1fr)' : '1fr'} gap={sacred_geometry_1.SACRED_SPACING.lg}>
              <Grid_1.GridItem colSpan={useMultiColumnLayout ? 1 : 2}>
                <framer_motion_1.AnimatePresence mode="wait">
                  <StepTransition key={"step-".concat(currentStep)} variants={stepTransitionVariants} initial="initial" animate="animate" exit="exit">
                    {renderStepContent()}
                  </StepTransition>
                </framer_motion_1.AnimatePresence>
              </Grid_1.GridItem>
              
              {useMultiColumnLayout && (<Grid_1.GridItem colSpan={1}>
                  {/* Additional content for larger screens */}
                  {/* This could be a summary, help text, etc. */}
                  <Box_1.Box padding={sacred_geometry_1.SACRED_SPACING.md} backgroundColor="rgba(255, 255, 255, 0.5)" borderRadius={sacred_geometry_1.SACRED_RADIUS.md}>
                    <h3>Booking Summary</h3>
                    {selectedService && (<p>Service: {selectedService.name}</p>)}
                    {selectedDate && (<p>Date: {new Date(selectedDate).toLocaleDateString()}</p>)}
                    {selectedTimeSlot && (<p>Time: {new Date(selectedTimeSlot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>)}
                    {/* Add more summary items here */}
                  </Box_1.Box>
                </Grid_1.GridItem>)}
            </Grid_1.Grid>)}
        </BookingContent>
        
        {/* Bottom navigation controls */}
        {!hasAnyApiError && !isLoadingServices && !bookingComplete && (<BookingNavigation_1.BookingNavigation currentStepId={currentStep}/>)}
      </BookingContainer>
    </>);
};
exports.BookingInterface = BookingInterface;
exports.default = exports.BookingInterface;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
