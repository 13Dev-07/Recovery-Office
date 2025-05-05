"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationStep = void 0;
var React = require("react");
;
var Box_1 = require("@design-system/components/layout/Box");
var Flex_1 = require("@design-system/components/layout/Flex");
var Stack_1 = require("@design-system/components/layout/Stack");
var Stack_2 = require("@design-system/components/layout/Stack");
var Divider_1 = require("@design-system/components/layout/Divider");
var Text_1 = require("@design-system/components/typography/Text");
var Checkbox_1 = require("@design-system/components/form/Checkbox");
var BookingContext_1 = require("@context/BookingContext");
var RadioGroup_1 = require("@design-system/components/form/RadioGroup");
var Card_1 = require("@design-system/components/data-display/Card");
var formatters_1 = require("@utils/formatters");
var BotanicalIcon_1 = require("@design-system/botanical/BotanicalIcon");
var Button_1 = require("@design-system/components/button/Button");
var booking_types_1 = require("@types/booking.types");
var useBookingStepValidation_1 = require("@hooks/useBookingStepValidation");
var confirmationStep_schema_1 = require("../validation/confirmationStep.schema");
var LoadingOverlay_1 = require("@design-system/components/feedback/LoadingOverlay");
var ErrorDisplay_1 = require("@design-system/components/feedback/ErrorDisplay");
var date_fns_1 = require("date-fns");
var CreditCardPaymentForm_1 = require("../payment/CreditCardPaymentForm");
var InsurancePaymentForm_1 = require("../payment/InsurancePaymentForm");
var Alert_1 = require("@design-system/components/feedback/Alert");
var useBreakpointValue_1 = require("@hooks/useBreakpointValue");
var VisuallyHidden_1 = require("@design-system/components/utils/VisuallyHidden");
/**
 * ConfirmationStep Component
 *
 * Final step in the booking process that shows booking summary and handles payment
 * Provides split view rendering for tablets with summary on one side and payment on the other
 * Implements sacred geometry principles for layout and spacing
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
var ConfirmationStep = function (_a) {
    var _b = _a.isSummaryOnly, isSummaryOnly = _b === void 0 ? false : _b, _c = _a.isPaymentOnly, isPaymentOnly = _c === void 0 ? false : _c;
    var _d = (0, BookingContext_1.useBooking)(), state = _d.state, selectPaymentMethod = _d.selectPaymentMethod, setClientPreferences = _d.setClientPreferences, setCancellationPolicyAccepted = _d.setCancellationPolicyAccepted, setDetailsReviewed = _d.setDetailsReviewed, createPaymentIntent = _d.createPaymentIntent, isResourceLoading = _d.isResourceLoading, hasApiError = _d.hasApiError, getApiErrorForResource = _d.getApiErrorForResource, goToStep = _d.goToStep, updateBookingData = _d.updateBookingData;
    // Get validation helpers
    var _e = (0, useBookingStepValidation_1.useBookingStepValidation)(booking_types_1.BookingStepId.CONFIRMATION, confirmationStep_schema_1.confirmationStepSchema), validateField = _e.validateField, errors = _e.errors, resetErrors = _e.resetErrors;
    // Get breakpoint-specific values
    var isTablet = (0, useBreakpointValue_1.useBreakpointValue)({ base: false, md: true, lg: false });
    // Extract values from context state
    var selectedService = state.selectedService, selectedDate = state.selectedDate, selectedTimeSlot = state.selectedTimeSlot, _f = state.selectedPaymentMethod, selectedPaymentMethod = _f === void 0 ? 'creditCard' : _f, _g = state.detailsReviewed, detailsReviewed = _g === void 0 ? false : _g, _h = state.emailNotifications, emailNotifications = _h === void 0 ? true : _h, _j = state.textNotifications, textNotifications = _j === void 0 ? false : _j, _k = state.cancellationPolicyAccepted, cancellationPolicyAccepted = _k === void 0 ? false : _k, paymentIntentId = state.paymentIntentId, clientInfo = state.clientInfo;
    // Status announcements for screen readers
    var _l = React.useState(''), statusAnnouncement = _l[0], setStatusAnnouncement = _l[1];
    // Get loading states
    var isLoadingPaymentIntent = isResourceLoading('paymentIntent');
    // Get errors
    var paymentIntentError = getApiErrorForResource('paymentIntent');
    // Handle payment method selection
    var handlePaymentMethodChange = function (value) {
        selectPaymentMethod(value);
        validateField('paymentMethod', value);
        // Announce payment method change to screen readers
        setStatusAnnouncement("Payment method changed to ".concat(getPaymentMethodLabel(value)));
    };
    // Get human-readable payment method label
    var getPaymentMethodLabel = function (method) {
        switch (method) {
            case 'creditCard':
                return 'Credit Card';
            case 'insurance':
                return 'Insurance';
            case 'payLater':
                return 'Pay at Appointment';
            default:
                return method;
        }
    };
    // Handle checkbox changes for user preferences
    var handleEmailNotificationsChange = function (e) {
        setClientPreferences({
            emailNotifications: e.target.checked,
            textNotifications: textNotifications
        });
        setStatusAnnouncement("Email notifications ".concat(e.target.checked ? 'enabled' : 'disabled'));
    };
    var handleTextNotificationsChange = function (e) {
        setClientPreferences({
            emailNotifications: emailNotifications,
            textNotifications: e.target.checked
        });
        setStatusAnnouncement("Text notifications ".concat(e.target.checked ? 'enabled' : 'disabled'));
    };
    var handleDetailsReviewedChange = function (e) {
        setDetailsReviewed(e.target.checked);
        validateField('detailsConfirmed', e.target.checked);
        setStatusAnnouncement("Booking details ".concat(e.target.checked ? 'confirmed' : 'unconfirmed'));
    };
    var handleCancellationPolicyChange = function (e) {
        setCancellationPolicyAccepted(e.target.checked);
        validateField('cancellationPolicyAgreed', e.target.checked);
        setStatusAnnouncement("Cancellation policy ".concat(e.target.checked ? 'accepted' : 'not accepted'));
    };
    // Create payment intent when component mounts or payment method changes
    React.useEffect(function () {
        if (selectedService && selectedPaymentMethod === 'creditCard' && !paymentIntentId) {
            var serviceType = selectedService.type || 'standard';
            var duration = selectedService.duration || 60;
            createPaymentIntent(serviceType, duration);
        }
    }, [selectedService, selectedPaymentMethod, paymentIntentId, createPaymentIntent]);
    // Calculate booking total price
    var calculateTotal = function () {
        if (!selectedService)
            return 0;
        var basePrice = selectedService.price || 0;
        // Add any additional charges here
        return basePrice;
    };
    // Format the selected date and time for display
    var getFormattedDateTime = function () {
        if (!selectedDate || !selectedTimeSlot)
            return 'No date selected';
        var selectedDateObj = new Date(selectedDate);
        var dateStr = (0, date_fns_1.format)(selectedDateObj, 'EEEE, MMMM d, yyyy');
        return "".concat(dateStr, " at ").concat(selectedTimeSlot.startTime);
    };
    // Handle edit button clicks for different sections
    var handleEditService = function () {
        goToStep(booking_types_1.BookingStepId.SERVICE_SELECTION);
        setStatusAnnouncement('Navigating to edit service selection');
    };
    var handleEditDate = function () {
        goToStep(booking_types_1.BookingStepId.DATE_SELECTION);
        setStatusAnnouncement('Navigating to edit date selection');
    };
    var handleEditClientInfo = function () {
        goToStep(booking_types_1.BookingStepId.CLIENT_INFORMATION);
        setStatusAnnouncement('Navigating to edit client information');
    };
    // Render the booking summary section
    var renderBookingSummary = function () { return (<Card_1.Card variant="outline" p={SACRED_SPACING.sm} mb={isSummaryOnly ? 0 : SACRED_SPACING.md} role="region" aria-labelledby="booking-summary-heading">
      <Stack_1.Stack spacing={SACRED_SPACING.sm} align="stretch">
        {!isSummaryOnly && (<Heading as="h3" fontfontSize="md" id="booking-summary-heading">
            Booking Summary
          </Heading>)}
        
        {/* Service details */}
        <Box_1.Box>
          <Flex_1.Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="service-details-heading">
              Service
            </Heading>
            {!isPaymentOnly && (<Button_1.Button variant="ghost" size="sm" onClick={handleEditService} aria-label="Edit service selection">
                Edit
              </Button_1.Button>)}
          </Flex_1.Flex>
          
          <Text_1.Text fontWeight="medium" aria-labelledby="service-details-heading">
            {(selectedService === null || selectedService === void 0 ? void 0 : selectedService.name) || 'No service selected'}
          </Text_1.Text>
          {(selectedService === null || selectedService === void 0 ? void 0 : selectedService.duration) && (<Text_1.Text color="text.secondary" aria-labelledby="service-details-heading">
              {selectedService.duration} min
            </Text_1.Text>)}
        </Box_1.Box>
        
        <Divider_1.Divider aria-hidden="true"/>
        
        {/* Date and time details */}
        <Box_1.Box>
          <Flex_1.Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="date-time-details-heading">
              Date & Time
            </Heading>
            {!isPaymentOnly && (<Button_1.Button variant="ghost" size="sm" onClick={handleEditDate} aria-label="Edit date and time selection">
                Edit
              </Button_1.Button>)}
          </Flex_1.Flex>
          
          <Text_1.Text fontWeight="medium" aria-labelledby="date-time-details-heading">
            {getFormattedDateTime()}
          </Text_1.Text>
        </Box_1.Box>
        
        <Divider_1.Divider aria-hidden="true"/>
        
        {/* Client information */}
        <Box_1.Box>
          <Flex_1.Flex justifyContent="space-between" alignItems="flex-start">
            <Heading as="h4" fontfontSize="sm" id="client-info-heading">
              Your Information
            </Heading>
            {!isPaymentOnly && (<Button_1.Button variant="ghost" size="sm" onClick={handleEditClientInfo} aria-label="Edit your personal information">
                Edit
              </Button_1.Button>)}
          </Flex_1.Flex>
          
          <Text_1.Text fontWeight="medium" aria-labelledby="client-info-heading">
            {clientInfo === null || clientInfo === void 0 ? void 0 : clientInfo.firstName} {clientInfo === null || clientInfo === void 0 ? void 0 : clientInfo.lastName}
          </Text_1.Text>
          <Text_1.Text color="text.secondary" aria-labelledby="client-info-heading">
            {clientInfo === null || clientInfo === void 0 ? void 0 : clientInfo.email}
          </Text_1.Text>
          {(clientInfo === null || clientInfo === void 0 ? void 0 : clientInfo.phone) && (<Text_1.Text color="text.secondary" aria-labelledby="client-info-heading">
              {clientInfo.phone}
            </Text_1.Text>)}
        </Box_1.Box>
        
        <Divider_1.Divider aria-hidden="true"/>
        
        {/* Pricing */}
        <Box_1.Box>
          <Heading as="h4" fontfontSize="sm" mb={SACRED_SPACING.xxs} id="price-details-heading">
            Price Details
          </Heading>
          
          <Flex_1.Flex justifyContent="space-between" mb={1} aria-labelledby="price-details-heading">
            <Text_1.Text>Service fee</Text_1.Text>
            <Text_1.Text>{(0, formatters_1.formatCurrency)(calculateTotal())}</Text_1.Text>
          </Flex_1.Flex>
          
          {/* Add any additional fees here */}
          
          <Divider_1.Divider my={SACRED_SPACING.xxs} aria-hidden="true"/>
          
          <Flex_1.Flex justifyContent="space-between" fontWeight="bold" aria-labelledby="price-details-heading">
            <Text_1.Text>Total</Text_1.Text>
            <Text_1.Text>{(0, formatters_1.formatCurrency)(calculateTotal())}</Text_1.Text>
          </Flex_1.Flex>
        </Box_1.Box>
      </Stack_1.Stack>
    </Card_1.Card>); };
    // Render the payment section
    var renderPaymentSection = function () { return (<Box_1.Box position="relative" role="region" aria-labelledby={isPaymentOnly ? undefined : "payment-heading"} aria-label={isPaymentOnly ? "Payment information" : undefined}>
      {isLoadingPaymentIntent && (<LoadingOverlay_1.LoadingOverlay isOpen={true} message="Preparing payment..."/>)}
      
      {hasApiError() && paymentIntentError ? (<ErrorDisplay_1.ErrorDisplay title="Payment Error" message={paymentIntentError} actionItems={[{
                    label: "Try Again",
                    onClick: function () {
                        resetErrors();
                        createPaymentIntent(true);
                        setStatusAnnouncement('Retrying payment setup');
                    },
                    primary: true
                }]}/>) : (<Stack_1.Stack spacing={SACRED_SPACING.sm} align="stretch">
          {!isPaymentOnly && (<Heading as="h3" fontfontSize="md" id="payment-heading">
              Payment
            </Heading>)}
          
          <Box_1.Box role="group" aria-labelledby="payment-method-heading">
            <Text_1.Text fontWeight="medium" mb={SACRED_SPACING.xxs} id="payment-method-heading">
              Payment Method
            </Text_1.Text>
            
            <RadioGroup_1.RadioGroup name="paymentMethod" value={selectedPaymentMethod} onChange={handlePaymentMethodChange} error={errors === null || errors === void 0 ? void 0 : errors.paymentMethod} aria-required="true" aria-describedby={(errors === null || errors === void 0 ? void 0 : errors.paymentMethod) ? "payment-method-error" : undefined}>
              <Stack_1.Stack spacing={SACRED_SPACING.xxs} align="stretch">
                <RadioGroup_1.Radio value="creditCard">
                  <Stack_2.Stack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon_1.BotanicalIcon name="creditCard" size="sm" aria-hidden="true"/>
                    <Text_1.Text>Credit Card</Text_1.Text>
                  </Stack_2.Stack>
                </RadioGroup_1.Radio>
                
                <RadioGroup_1.Radio value="insurance">
                  <Stack_2.Stack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon_1.BotanicalIcon name="shield" size="sm" aria-hidden="true"/>
                    <Text_1.Text>Insurance</Text_1.Text>
                  </Stack_2.Stack>
                </RadioGroup_1.Radio>
                
                <RadioGroup_1.Radio value="payLater">
                  <Stack_2.Stack spacing={SACRED_SPACING.xxs}>
                    <BotanicalIcon_1.BotanicalIcon name="clock" size="sm" aria-hidden="true"/>
                    <Text_1.Text>Pay at Appointment</Text_1.Text>
                  </Stack_2.Stack>
                </RadioGroup_1.Radio>
              </Stack_1.Stack>
            </RadioGroup_1.RadioGroup>
            
            {(errors === null || errors === void 0 ? void 0 : errors.paymentMethod) && (<Text_1.Text color="error.500" fontSize="sm" mt={1} id="payment-method-error" role="alert">
                {errors.paymentMethod}
              </Text_1.Text>)}
          </Box_1.Box>
          
          {/* Payment form based on selected method */}
          <Box_1.Box mt={SACRED_SPACING.xxs} role="group" aria-labelledby="payment-details-heading">
            <VisuallyHidden_1.VisuallyHidden>
              <Heading as="h4" fontfontSize="sm" id="payment-details-heading">
                Payment Details
              </Heading>
            </VisuallyHidden_1.VisuallyHidden>
            
            {selectedPaymentMethod === 'creditCard' && (<CreditCardPaymentForm_1.CreditCardPaymentForm paymentIntentId={paymentIntentId} amount={calculateTotal()} onPaymentComplete={function (id) {
                    updateBookingData({ paymentIntentId: id });
                    validateField('paymentIntentId', id);
                    setStatusAnnouncement('Payment information completed');
                }} error={errors === null || errors === void 0 ? void 0 : errors.paymentIntentId}/>)}
            
            {selectedPaymentMethod === 'insurance' && (<InsurancePaymentForm_1.InsurancePaymentForm onInsuranceInfoUpdate={function (provider, policyNumber) {
                    updateBookingData({
                        insuranceProvider: provider,
                        insurancePolicyNumber: policyNumber
                    });
                    validateField('insuranceProvider', provider);
                    validateField('insurancePolicyNumber', policyNumber);
                    setStatusAnnouncement('Insurance information updated');
                }} errors={{
                    provider: errors === null || errors === void 0 ? void 0 : errors.insuranceProvider,
                    policyNumber: errors === null || errors === void 0 ? void 0 : errors.insurancePolicyNumber
                }}/>)}
            
            {selectedPaymentMethod === 'payLater' && (<Alert_1.Alert status="info" title="Pay at Your Appointment" description="You've selected to pay at your appointment. Please bring a valid form of payment (credit card, cash, or check)."/>)}
          </Box_1.Box>
          
          {/* Notifications preferences */}
          <Box_1.Box mt={SACRED_SPACING.xxs} role="group" aria-labelledby="notifications-heading">
            <Text_1.Text fontWeight="medium" mb={SACRED_SPACING.xxs} id="notifications-heading">
              Notifications
            </Text_1.Text>
            
            <Stack_1.Stack spacing={SACRED_SPACING.xxs} align="stretch">
              <Checkbox_1.Checkbox isChecked={emailNotifications} onChange={handleEmailNotificationsChange} label="Email me appointment reminders and updates" id="email-notifications" aria-describedby="notifications-heading"/>
              
              <Checkbox_1.Checkbox isChecked={textNotifications} onChange={handleTextNotificationsChange} label="Send text message reminders (standard rates apply)" id="text-notifications" aria-describedby="notifications-heading"/>
            </Stack_1.Stack>
          </Box_1.Box>
          
          {/* Agreement checkboxes */}
          <Box_1.Box mt={SACRED_SPACING.sm} role="group" aria-labelledby="agreements-heading">
            <VisuallyHidden_1.VisuallyHidden>
              <Heading as="h4" fontfontSize="sm" id="agreements-heading">
                Required Agreements
              </Heading>
            </VisuallyHidden_1.VisuallyHidden>
            
            <Stack_1.Stack spacing={SACRED_SPACING.xs} align="stretch">
              <Checkbox_1.Checkbox isChecked={detailsReviewed} onChange={handleDetailsReviewedChange} label="I have reviewed and confirmed all booking details are correct" error={errors === null || errors === void 0 ? void 0 : errors.detailsConfirmed} id="details-reviewed" aria-required="true" aria-invalid={(errors === null || errors === void 0 ? void 0 : errors.detailsConfirmed) ? "true" : "false"}/>
              
              <Checkbox_1.Checkbox isChecked={cancellationPolicyAccepted} onChange={handleCancellationPolicyChange} label="I agree to the cancellation policy (24 hours notice required)" error={errors === null || errors === void 0 ? void 0 : errors.cancellationPolicyAgreed} id="cancellation-policy" aria-required="true" aria-invalid={(errors === null || errors === void 0 ? void 0 : errors.cancellationPolicyAgreed) ? "true" : "false"}/>
            </Stack_1.Stack>
          </Box_1.Box>
        </Stack_1.Stack>)}
    </Box_1.Box>); };
    // For tablet split view, we render either just the summary or just the payment
    if (isSummaryOnly) {
        return renderBookingSummary();
    }
    if (isPaymentOnly) {
        return renderPaymentSection();
    }
    // For mobile or desktop, we render the complete view
    return (<Stack_1.Stack spacing={SACRED_SPACING.md} align="stretch" width="100%">
      {/* Visually hidden live region for status announcements */}
      <VisuallyHidden_1.VisuallyHidden aria-live="polite" aria-atomic="true">
        {statusAnnouncement}
      </VisuallyHidden_1.VisuallyHidden>
      
      <Box_1.Box>
        <Heading as="h2" fontfontSize="lg" mb={SACRED_SPACING.xxs} id="confirmation-heading">
          Review and Confirm
        </Heading>
        <Text_1.Text color="text.subtle">
          Please review your booking details and complete payment to confirm your appointment.
        </Text_1.Text>
      </Box_1.Box>
      
      {renderBookingSummary()}
      {renderPaymentSection()}
    </Stack_1.Stack>);
};
exports.ConfirmationStep = ConfirmationStep;
