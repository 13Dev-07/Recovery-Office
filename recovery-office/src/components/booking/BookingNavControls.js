"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingNavControls = void 0;
var React = require("react");
var Box_1 = require("@design-system/components/layout/Box");
var Button_1 = require("@design-system/components/button/Button");
var booking_types_1 = require("@types/booking.types");
var BotanicalIcon_1 = require("@design-system/botanical/BotanicalIcon");
var useBreakpointValue_1 = require("@hooks/useBreakpointValue");
/**
 * BookingNavControls Component
 *
 * Provides navigation controls for moving between booking steps
 * Adapts buttons and layout based on device size and current step
 * Implements responsive design with optimal UX for each breakpoint
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
var BookingNavControls = function (_a) {
    var currentStep = _a.currentStep, canGoBack = _a.canGoBack, canGoNext = _a.canGoNext, onPrevious = _a.onPrevious, onNext = _a.onNext, onSubmit = _a.onSubmit, isSubmitting = _a.isSubmitting;
    // Get responsive values
    var isMobile = (0, useBreakpointValue_1.useBreakpointValue)({ base: true, md: false });
    var buttonSize = (0, useBreakpointValue_1.useBreakpointValue)({ base: 'md', md: 'lg' });
    var spacing = (0, useBreakpointValue_1.useBreakpointValue)({
        base: SACRED_SPACING.md,
        md: SACRED_SPACING.lg
    });
    // Determine if this is the final step
    var isFinalStep = currentStep === booking_types_1.BookingStepId.CONFIRMATION;
    // Get button text based on current step
    var getNextButtonText = function () {
        if (isFinalStep) {
            return 'Confirm Booking';
        }
        switch (currentStep) {
            case booking_types_1.BookingStepId.SERVICE_SELECTION:
                return 'Select Date & Time';
            case booking_types_1.BookingStepId.DATE_SELECTION:
                return 'Enter Your Information';
            case booking_types_1.BookingStepId.CLIENT_INFORMATION:
                return 'Review & Pay';
            default:
                return 'Next';
        }
    };
    // Get back button text
    var getBackButtonText = function () {
        switch (currentStep) {
            case booking_types_1.BookingStepId.DATE_SELECTION:
                return 'Change Service';
            case booking_types_1.BookingStepId.CLIENT_INFORMATION:
                return 'Change Date & Time';
            case booking_types_1.BookingStepId.CONFIRMATION:
                return 'Edit Information';
            default:
                return 'Back';
        }
    };
    // Get ARIA labels for buttons to improve screen reader experience
    var getNextButtonAriaLabel = function () {
        if (isFinalStep) {
            return 'Confirm booking and complete reservation';
        }
        switch (currentStep) {
            case booking_types_1.BookingStepId.SERVICE_SELECTION:
                return 'Continue to date and time selection';
            case booking_types_1.BookingStepId.DATE_SELECTION:
                return 'Continue to enter your personal information';
            case booking_types_1.BookingStepId.CLIENT_INFORMATION:
                return 'Continue to review booking and payment';
            default:
                return 'Continue to next step';
        }
    };
    var getBackButtonAriaLabel = function () {
        switch (currentStep) {
            case booking_types_1.BookingStepId.DATE_SELECTION:
                return 'Go back to service selection';
            case booking_types_1.BookingStepId.CLIENT_INFORMATION:
                return 'Go back to date and time selection';
            case booking_types_1.BookingStepId.CONFIRMATION:
                return 'Go back to edit your information';
            default:
                return 'Go back to previous step';
        }
    };
    // Handle next button click
    var handleNextClick = function () {
        if (isFinalStep) {
            onSubmit();
        }
        else {
            onNext();
        }
    };
    return (<Box_1.Box pt={SACRED_SPACING.lg} borderTop={"".concat(1, "px solid")} borderTopColor="divider" role="navigation" aria-label="Booking navigation controls">
      <Box_1.Flex justifyContent="space-between" alignItems="center" flexDirection={isMobile ? 'column' : 'row'} gap={spacing}>
        {/* Back button */}
        {canGoBack ? (<Button_1.Button variant="outline" size={buttonSize} onClick={onPrevious} leftIcon={<BotanicalIcon_1.BotanicalIcon name="arrowLeft" size="sm"/>} width={isMobile ? '100%' : 'auto'} order={isMobile ? 2 : 1} aria-label={getBackButtonAriaLabel()}>
            {getBackButtonText()}
          </Button_1.Button>) : (<Box_1.Box aria-hidden="true"/> // Empty spacer for layout when back button is hidden
        )}
        
        {/* Next/Submit button */}
        <Button_1.Button variant="primary" size={buttonSize} onClick={handleNextClick} isDisabled={!canGoNext} isLoading={isFinalStep && isSubmitting} loadingText="Processing..." rightIcon={!isFinalStep && <BotanicalIcon_1.BotanicalIcon name="arrowRight" size="sm"/>} width={isMobile ? '100%' : 'auto'} order={isMobile ? 1 : 2} aria-label={getNextButtonAriaLabel()}>
          {getNextButtonText()}
        </Button_1.Button>
      </Box_1.Flex>
    </Box_1.Box>);
};
exports.BookingNavControls = BookingNavControls;
