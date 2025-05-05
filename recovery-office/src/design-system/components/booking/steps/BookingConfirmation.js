"use strict";
/**
 * BookingConfirmation Component
 *
 * Final confirmation screen after booking submission.
 * Uses sacred geometry principles for layout proportions and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingConfirmation = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
var state_1 = require("../state");
var Text_1 = require("../../typography/Text");
var Button_1 = require("../../button/Button");
var BotanicalElement_1 = require("../../botanical/BotanicalElement");
var FlowerOfLife_1 = require("../../botanical/FlowerOfLife");
// Function to generate a pseudo-random booking reference
var generateBookingReference = function () {
    var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Omitting similar looking characters
    var result = '';
    // Use PHI to determine reference length - convert to integer between 6-8
    var refLength = Math.floor(PHI * 4) + 2;
    for (var i = 0; i < refLength; i++) {
        // Use PHI-based index selection
        var randomIndex = Math.floor((Math.sin(i * PHI) * 0.5 + 0.5) * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};
/**
 * BookingConfirmation component that displays after successful booking
 */
var BookingConfirmation = function () {
    var state = (0, react_1.useContext)(state_1.BookingContext).state;
    var selectedService = state.selectedService, selectedDate = state.selectedDate, selectedTimeSlot = state.selectedTimeSlot, customerInfo = state.customerInfo;
    // Generate a booking reference using sacred geometry principles
    var bookingReference = (0, react_1.useMemo)(function () { return generateBookingReference(); }, []);
    // Format date for display
    var formattedDate = selectedDate
        ? (0, date_fns_1.format)(new Date(selectedDate), 'EEEE, MMMM do, yyyy')
        : 'No date selected';
    // Get calendar links
    var getGoogleCalendarLink = function () {
        if (!selectedDate || !selectedTimeSlot || !selectedService)
            return '#';
        var dateObj = new Date(selectedDate);
        var _a = selectedTimeSlot.split(':').map(Number), hours = _a[0], minutes = _a[1];
        dateObj.setHours(hours, minutes);
        var endDate = new Date(dateObj);
        endDate.setMinutes(endDate.getMinutes() + (selectedService.duration || 60));
        var startTime = dateObj.toISOString().replace(/-|:|\.\d+/g, '');
        var endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=".concat(encodeURIComponent("".concat(selectedService.name, " at Recovery Office")), "&dates=").concat(startTime, "/").concat(endTime, "&details=").concat(encodeURIComponent("Your appointment for ".concat(selectedService.name, "\n\nReference: ").concat(bookingReference)), "&location=").concat(encodeURIComponent('Recovery Office'), "&sf=true&output=xml");
    };
    // Get Apple Calendar link (ics file format)
    var getAppleCalendarLink = function () {
        // This would typically generate an .ics file
        // For simplicity, we're using a placeholder link
        return '#';
    };
    return (<ConfirmationContainer>
      <ConfirmationHeader>
        <SuccessIcon>
          <FlowerOfLife_1.FlowerOfLife size={getFibonacciByIndex(9)} // 34px
     color="var(--color-success-500)" rotation={0}/>
        </SuccessIcon>
        <Text_1.Text as="h3" variant="h4" style={{ color: 'var(--color-success-700)' }}>
          Booking Confirmed!
        </Text_1.Text>
        <Text_1.Text variant="subtitle1" style={{ opacity: 0.8, textAlign: 'center' }}>
          Your appointment has been successfully scheduled
        </Text_1.Text>
      </ConfirmationHeader>
      
      <ReferenceContainer>
        <Text_1.Text variant="body2">Booking Reference</Text_1.Text>
        <ReferenceCode>{bookingReference}</ReferenceCode>
        <Text_1.Text variant="caption" style={{ opacity: 0.7 }}>
          Please save this reference number for your records
        </Text_1.Text>
      </ReferenceContainer>
      
      <DetailsContainer>
        <DetailsRow>
          <DetailLabel variant="body2">Service:</DetailLabel>
          <DetailValue variant="body2">{selectedService === null || selectedService === void 0 ? void 0 : selectedService.name}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Date:</DetailLabel>
          <DetailValue variant="body2">{formattedDate}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Time:</DetailLabel>
          <DetailValue variant="body2">{selectedTimeSlot}</DetailValue>
        </DetailsRow>
        
        <DetailsRow>
          <DetailLabel variant="body2">Duration:</DetailLabel>
          <DetailValue variant="body2">{selectedService === null || selectedService === void 0 ? void 0 : selectedService.duration} minutes</DetailValue>
        </DetailsRow>
      </DetailsContainer>
      
      <CalendarContainer>
        <Text_1.Text variant="subtitle2">Add to Calendar</Text_1.Text>
        <CalendarLinks>
          <CalendarButton as="a" href={getGoogleCalendarLink()} target="_blank" rel="noopener noreferrer" variant="outlined" color="secondary" size="small">
            Google Calendar
          </CalendarButton>
          <CalendarButton as="a" href={getAppleCalendarLink()} download="recovery-office-appointment.ics" variant="outlined" color="secondary" size="small">
            Apple Calendar
          </CalendarButton>
        </CalendarLinks>
      </CalendarContainer>
      
      <InstructionsContainer>
        <InstructionsHeader variant="subtitle2">What's Next?</InstructionsHeader>
        <InstructionsList>
          <InstructionItem>
            <InstructionNumber>1</InstructionNumber>
            <Text_1.Text variant="body2">
              You'll receive a confirmation email at {customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.email} with your booking details.
            </Text_1.Text>
          </InstructionItem>
          <InstructionItem>
            <InstructionNumber>2</InstructionNumber>
            <Text_1.Text variant="body2">
              We recommend arriving 10 minutes before your appointment time.
            </Text_1.Text>
          </InstructionItem>
          <InstructionItem>
            <InstructionNumber>3</InstructionNumber>
            <Text_1.Text variant="body2">
              If you need to reschedule, please contact us at least 24 hours in advance.
            </Text_1.Text>
          </InstructionItem>
        </InstructionsList>
      </InstructionsContainer>
      
      <ButtonsContainer>
        <ActionButton variant="contained" color="primary" fullWidth href="/">
          Return to Home
        </ActionButton>
        
        <ActionButton variant="outlined" color="secondary" fullWidth href="/services">
          Browse More Services
        </ActionButton>
      </ButtonsContainer>
      
      <BotanicalDecoration position="topRight">
        <BotanicalElement_1.BotanicalElement type="leaf" size="large" color="var(--color-success-300)" rotation={45}/>
      </BotanicalDecoration>
      
      <BotanicalDecoration position="bottomLeft">
        <BotanicalElement_1.BotanicalElement type="spiral" size="medium" color="var(--color-primary-300)" rotation={180}/>
      </BotanicalDecoration>
    </ConfirmationContainer>);
};
exports.BookingConfirmation = BookingConfirmation;
// Styled components with sacred geometry principles
var ConfirmationContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: ", "px; // 377px\n  margin: 0 auto;\n  padding: ", "px; // 21px\n  position: relative;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: ", "px; // 377px\n  margin: 0 auto;\n  padding: ", "px; // 21px\n  position: relative;\n  overflow: hidden;\n"])), getFibonacciByIndex(13), getFibonacciByIndex(8));
var ConfirmationHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ", "px; // 8px\n  margin-bottom: ", "px; // 34px\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ", "px; // 8px\n  margin-bottom: ", "px; // 34px\n  text-align: center;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(9));
var SuccessIcon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px; // 89px\n  height: ", "px; // 89px\n  border-radius: 50%;\n  background-color: ", ";\n  margin-bottom: ", "px; // 5px\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px; // 89px\n  height: ", "px; // 89px\n  border-radius: 50%;\n  background-color: ", ";\n  margin-bottom: ", "px; // 5px\n"])), getFibonacciByIndex(11), getFibonacciByIndex(11), function (props) { var _a; return (_a = props.theme.colors.success[50]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(5));
var ReferenceContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px; // 13px\n  margin-bottom: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px; // 13px\n  margin-bottom: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  text-align: center;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(8), function (props) { var _a; return (_a = props.theme.colors.primary[50]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(5));
var ReferenceCode = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: monospace;\n  font-size: ", "px; // 34px\n  font-weight: 700;\n  letter-spacing: ", "px; // 2px\n  color: ", ";\n  margin: ", "px 0; // 3px 0\n"], ["\n  font-family: monospace;\n  font-size: ", "px; // 34px\n  font-weight: 700;\n  letter-spacing: ", "px; // 2px\n  color: ", ";\n  margin: ", "px 0; // 3px 0\n"])), getFibonacciByIndex(9), getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.primary[700]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(4));
var DetailsContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 21px\n  padding: ", "px; // 13px\n  border: 1px solid ", ";\n  border-radius: ", "px; // 5px\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 21px\n  padding: ", "px; // 13px\n  border: 1px solid ", ";\n  border-radius: ", "px; // 5px\n  background-color: ", ";\n"])), getFibonacciByIndex(5), getFibonacciByIndex(8), getFibonacciByIndex(7), function (props) { var _a; return (_a = props.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1; }, getFibonacciByIndex(5), function (props) { return props.theme.colors.background.paper; });
var DetailsRow = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var DetailLabel = (0, styled_components_1.default)(Text_1.Text)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-weight: 600;\n  color: ", ";\n"], ["\n  font-weight: 600;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.secondary; });
var DetailValue = (0, styled_components_1.default)(Text_1.Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: right;\n  color: ", ";\n"], ["\n  text-align: right;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.primary; });
var CalendarContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n  margin-bottom: ", "px; // 21px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n  margin-bottom: ", "px; // 21px\n"])), getFibonacciByIndex(6), getFibonacciByIndex(8));
var CalendarLinks = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px; // 8px\n"], ["\n  display: flex;\n  gap: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var CalendarButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var InstructionsContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 34px\n"], ["\n  margin-bottom: ", "px; // 34px\n"])), getFibonacciByIndex(9));
var InstructionsHeader = (0, styled_components_1.default)(Text_1.Text)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 8px\n  font-weight: 600;\n"], ["\n  margin-bottom: ", "px; // 8px\n  font-weight: 600;\n"])), getFibonacciByIndex(6));
var InstructionsList = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"])), getFibonacciByIndex(7));
var InstructionItem = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px; // 8px\n  align-items: flex-start;\n"], ["\n  display: flex;\n  gap: ", "px; // 8px\n  align-items: flex-start;\n"])), getFibonacciByIndex(6));
var InstructionNumber = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px; // ~8px\n  height: ", "px; // ~8px\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n  font-size: ", "px; // 5px\n  font-weight: 600;\n  flex-shrink: 0;\n  padding: ", "px; // 5px\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px; // ~8px\n  height: ", "px; // ~8px\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n  font-size: ", "px; // 5px\n  font-weight: 600;\n  flex-shrink: 0;\n  padding: ", "px; // 5px\n"])), getFibonacciByIndex(7) * PHI_INVERSE, getFibonacciByIndex(7) * PHI_INVERSE, function (props) { return props.theme.colors.primary.main; }, function (props) { return props.theme.colors.common.white; }, getFibonacciByIndex(5), getFibonacciByIndex(5));
var ButtonsContainer = styled_components_1.default.div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"])), getFibonacciByIndex(7));
var ActionButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  height: ", "px; // 34px\n"], ["\n  height: ", "px; // 34px\n"])), getFibonacciByIndex(9));
var BotanicalDecoration = styled_components_1.default.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.15;\n  \n  ", "\n"], ["\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.15;\n  \n  ", "\n"])), function (_a) {
    var position = _a.position;
    switch (position) {
        case 'topRight':
            return "\n          top: -".concat(getFibonacciByIndex(8), "px; // 21px\n          right: -").concat(getFibonacciByIndex(8), "px; // 21px\n          transform: rotate(45deg);\n        ");
        case 'bottomLeft':
            return "\n          bottom: -".concat(getFibonacciByIndex(8), "px; // 21px\n          left: -").concat(getFibonacciByIndex(9), "px; // 34px\n          transform: rotate(180deg);\n        ");
        case 'topLeft':
            return "\n          top: -".concat(getFibonacciByIndex(8), "px; // 21px\n          left: -").concat(getFibonacciByIndex(8), "px; // 21px\n          transform: rotate(-45deg);\n        ");
        case 'bottomRight':
            return "\n          bottom: -".concat(getFibonacciByIndex(8), "px; // 21px\n          right: -").concat(getFibonacciByIndex(9), "px; // 34px\n          transform: rotate(225deg);\n        ");
        default:
            return '';
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
