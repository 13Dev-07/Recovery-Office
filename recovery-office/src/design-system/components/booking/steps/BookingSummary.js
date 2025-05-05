"use strict";
/**
 * BookingSummary Component
 *
 * Final step in the booking process showing a summary of all selected options.
 * Uses sacred geometry principles for layout proportions and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSummary = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
var state_1 = require("../state");
var Text_1 = require("../../typography/Text");
var theme_1 = require("../../../theme");
var BotanicalElement_1 = require("../../botanical/BotanicalElement");
var Divider_1 = require("../../data-display/Divider");
/**
 * BookingSummary component for the final step in the booking process
 */
var BookingSummary = function () {
    var _a = (0, react_1.useContext)(state_1.BookingContext), state = _a.state, dispatch = _a.dispatch;
    var selectedService = state.selectedService, selectedDate = state.selectedDate, timeSlot = state.timeSlot, clientName = state.clientName, clientEmail = state.clientEmail, clientPhone = state.clientPhone, clientMessage = state.clientMessage;
    // Format date for display
    var formattedDate = selectedDate
        ? (0, date_fns_1.format)(new Date(selectedDate), 'EEEE, MMMM do, yyyy')
        : 'No date selected';
    // Format time for display
    var formattedTime = timeSlot || 'No time selected';
    // Calculate estimated price based on selected service
    // Since selectedService is a string in the state, we need to get the actual service details
    // For now, using placeholder values
    var serviceCost = 150; // Placeholder price
    var taxRate = 0.0825; // Example tax rate (8.25%)
    var taxes = serviceCost * taxRate;
    var totalCost = serviceCost + taxes;
    // Format currency
    var formatCurrency = function (amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };
    // Set step validity
    (0, react_1.useEffect)(function () {
        // This step is automatically valid if we reach it
        dispatch({ type: 'SET_CURRENT_STEP', payload: 3 });
    }, [dispatch]);
    if (!selectedService || !selectedDate || !timeSlot) {
        return (<StepContainer>
        <ErrorMessage>
          <Text_1.Text variant="h5" style={{ color: theme_1.theme.colors.error.main }}>
            Incomplete Booking Information
          </Text_1.Text>
          <Text_1.Text variant="body2">
            Please go back and complete all required booking information.
          </Text_1.Text>
        </ErrorMessage>
      </StepContainer>);
    }
    // Use placeholders for service information
    var serviceInfo = {
        name: selectedService,
        description: "Your selected therapeutic service",
        duration: "60"
    };
    return (<StepContainer>
      <StepHeader>
        <Text_1.Text as="h3" variant="h5">
          Booking Summary
        </Text_1.Text>
        <Text_1.Text variant="body2" style={{ opacity: 0.8 }}>
          Please review your booking details before confirming
        </Text_1.Text>
      </StepHeader>
      
      <SummaryContainer>
        <SummarySection>
          <SectionTitle variant="h6">Selected Service</SectionTitle>
          <ServiceDetails>
            <ServiceName>{serviceInfo.name}</ServiceName>
            <Text_1.Text variant="body2">{serviceInfo.description}</Text_1.Text>
            <ServiceDuration>
              <DurationIcon />
              <Text_1.Text variant="body2">{serviceInfo.duration} minutes</Text_1.Text>
            </ServiceDuration>
          </ServiceDetails>
        </SummarySection>
        
        <Divider_1.Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Date & Time</SectionTitle>
          <DateTimeContainer>
            <DateBlock>
              <CalendarIcon />
              <Text_1.Text variant="body1">{formattedDate}</Text_1.Text>
            </DateBlock>
            <TimeBlock>
              <ClockIcon />
              <Text_1.Text variant="body1">{formattedTime}</Text_1.Text>
            </TimeBlock>
          </DateTimeContainer>
        </SummarySection>
        
        <Divider_1.Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Your Information</SectionTitle>
          <CustomerDetails>
            <Text_1.Text variant="body1">{clientName}</Text_1.Text>
            <Text_1.Text variant="body2">{clientEmail}</Text_1.Text>
            <Text_1.Text variant="body2">{clientPhone}</Text_1.Text>
          </CustomerDetails>
          
          {clientMessage && (<NotesContainer>
              <Text_1.Text variant="subtitle2">Additional Notes:</Text_1.Text>
              <Text_1.Text variant="body2">{clientMessage}</Text_1.Text>
            </NotesContainer>)}
        </SummarySection>
        
        <Divider_1.Divider />
        
        <SummarySection>
          <SectionTitle variant="h6">Payment Details</SectionTitle>
          <PriceBreakdown>
            <PriceRow>
              <Text_1.Text variant="body2">Service Fee</Text_1.Text>
              <Text_1.Text variant="body2">{formatCurrency(serviceCost)}</Text_1.Text>
            </PriceRow>
            <PriceRow>
              <Text_1.Text variant="body2">Taxes & Fees</Text_1.Text>
              <Text_1.Text variant="body2">{formatCurrency(taxes)}</Text_1.Text>
            </PriceRow>
            <TotalRow>
              <Text_1.Text variant="subtitle1">Total</Text_1.Text>
              <TotalPrice>{formatCurrency(totalCost)}</TotalPrice>
            </TotalRow>
          </PriceBreakdown>
          <PaymentNote>
            <Text_1.Text variant="caption">
              Payment will be collected at the time of service.
            </Text_1.Text>
          </PaymentNote>
        </SummarySection>
        
        <BotanicalContainer>
          <BotanicalElement_1.BotanicalElement type="leaf" size="medium" color={theme_1.theme.colors.primary.light} rotation={45}/>
        </BotanicalContainer>
      </SummaryContainer>
      
      <CancellationPolicy>
        <Text_1.Text variant="caption">
          Cancellation Policy: Free cancellation up to 24 hours before your appointment.
          Late cancellations may be subject to a fee of 50% of the service cost.
        </Text_1.Text>
      </CancellationPolicy>
    </StepContainer>);
};
exports.BookingSummary = BookingSummary;
// Icons (simplified for this implementation)
var CalendarIcon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 2px;\n"], ["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 2px;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), theme_1.theme.colors.primary.main);
var ClockIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 50%;\n"], ["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 50%;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), theme_1.theme.colors.primary.main);
var DurationIcon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 2px;\n"], ["\n  width: ", "px; // 8px\n  height: ", "px; // 8px\n  background-color: ", ";\n  border-radius: 2px;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), theme_1.theme.colors.primary.main);
// Styled components with sacred geometry principles
var StepContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var StepHeader = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"], ["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(3));
var SummaryContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  padding: ", "px; // 21px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  padding: ", "px; // 21px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n"])), getFibonacciByIndex(7), theme_1.theme.colors.background.paper, getFibonacciByIndex(6), getFibonacciByIndex(8), getFibonacciByIndex(4), getFibonacciByIndex(6));
var SummarySection = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 13px\n"], ["\n  margin-bottom: ", "px; // 13px\n"])), getFibonacciByIndex(7));
var SectionTitle = (0, styled_components_1.default)(Text_1.Text)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 5px\n  color: ", ";\n  font-weight: 600;\n  position: relative;\n  \n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -", "px; // 2px\n    left: 0;\n    width: ", "px; // ~21px\n    height: 2px;\n    background-color: ", ";\n  }\n"], ["\n  margin-bottom: ", "px; // 5px\n  color: ", ";\n  font-weight: 600;\n  position: relative;\n  \n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -", "px; // 2px\n    left: 0;\n    width: ", "px; // ~21px\n    height: 2px;\n    background-color: ", ";\n  }\n"])), getFibonacciByIndex(5), theme_1.theme.colors.text.primary, getFibonacciByIndex(3), getFibonacciByIndex(9) * PHI_INVERSE, theme_1.theme.colors.primary.light);
var ServiceDetails = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: ", "px; // 8px\n"], ["\n  margin-top: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var ServiceName = (0, styled_components_1.default)(Text_1.Text).attrs({ variant: 'subtitle1' })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  margin-bottom: ", "px; // 3px\n"], ["\n  color: ", ";\n  font-weight: 600;\n  margin-bottom: ", "px; // 3px\n"])), theme_1.theme.colors.primary.dark, getFibonacciByIndex(4));
var ServiceDuration = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n  margin-top: ", "px; // 5px\n"], ["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n  margin-top: ", "px; // 5px\n"])), getFibonacciByIndex(5), getFibonacciByIndex(5));
var DateTimeContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n  margin-top: ", "px; // 8px\n  \n  @media (min-width: ", ") {\n    flex-direction: row;\n    gap: ", "px; // 21px\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n  margin-top: ", "px; // 8px\n  \n  @media (min-width: ", ") {\n    flex-direction: row;\n    gap: ", "px; // 21px\n  }\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), theme_1.theme.breakpoints.sm, getFibonacciByIndex(8));
var DateBlock = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n"], ["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var TimeBlock = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n"], ["\n  display: flex;\n  align-items: center;\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var CustomerDetails = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin-top: ", "px; // 8px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 2px\n"], ["\n  margin-top: ", "px; // 8px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 2px\n"])), getFibonacciByIndex(6), getFibonacciByIndex(3));
var NotesContainer = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  margin-top: ", "px; // 13px\n  padding: ", "px; // 8px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  border-left: 3px solid ", ";\n"], ["\n  margin-top: ", "px; // 13px\n  padding: ", "px; // 8px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  border-left: 3px solid ", ";\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6), theme_1.theme.colors.background.default, getFibonacciByIndex(5), theme_1.theme.colors.primary.light);
var PriceBreakdown = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  margin-top: ", "px; // 8px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"], ["\n  margin-top: ", "px; // 8px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(6), getFibonacciByIndex(5));
var PriceRow = styled_components_1.default.div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var TotalRow = (0, styled_components_1.default)(PriceRow)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  margin-top: ", "px; // 8px\n  padding-top: ", "px; // 8px\n  border-top: 1px solid ", ";\n  font-weight: 600;\n"], ["\n  margin-top: ", "px; // 8px\n  padding-top: ", "px; // 8px\n  border-top: 1px solid ", ";\n  font-weight: 600;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), theme_1.theme.colors.divider);
var TotalPrice = (0, styled_components_1.default)(Text_1.Text).attrs({ variant: 'subtitle1' })(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 700;\n"], ["\n  color: ", ";\n  font-weight: 700;\n"])), theme_1.theme.colors.primary.dark);
var PaymentNote = styled_components_1.default.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  margin-top: ", "px; // 8px\n  opacity: 0.7;\n"], ["\n  margin-top: ", "px; // 8px\n  opacity: 0.7;\n"])), getFibonacciByIndex(6));
var CancellationPolicy = styled_components_1.default.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  margin-top: ", "px; // 13px\n  padding: ", "px; // 5px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  text-align: center;\n"], ["\n  margin-top: ", "px; // 13px\n  padding: ", "px; // 5px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  text-align: center;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5), theme_1.theme.colors.background.default, getFibonacciByIndex(5));
var BotanicalContainer = styled_components_1.default.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  position: absolute;\n  top: -", "px; // 13px\n  right: -", "px; // 21px\n  opacity: 0.15;\n  transform: rotate(15deg);\n  z-index: 0;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: -", "px; // 13px\n  right: -", "px; // 21px\n  opacity: 0.15;\n  transform: rotate(15deg);\n  z-index: 0;\n  pointer-events: none;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(8));
var ErrorMessage = styled_components_1.default.div(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  text-align: center;\n  padding: ", "px; // 21px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n"], ["\n  text-align: center;\n  padding: ", "px; // 21px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n"])), getFibonacciByIndex(8), getFibonacciByIndex(6));
exports.default = exports.BookingSummary;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24;
