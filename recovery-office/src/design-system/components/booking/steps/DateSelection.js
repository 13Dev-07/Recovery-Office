"use strict";
/**
 * DateSelection Component
 *
 * Second step in the booking process where users select their preferred date and time.
 * Uses sacred geometry principles for layout and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelection = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
var state_1 = require("../state");
var validation_1 = require("../validation");
var Text_1 = require("../../typography/Text");
var state_2 = require("../state");
var Button_1 = require("../../button/Button");
var useMediaQuery_1 = require("../../../../hooks/useMediaQuery");
var MobileCalendarModal_1 = require("../MobileCalendarModal");
/**
 * DateSelection component for booking step 2
 */
var DateSelection = function () {
    var _a = (0, react_1.useContext)(state_1.BookingContext), state = _a.state, dispatch = _a.dispatch;
    var errors = (0, validation_1.getStepErrors)(state, 1);
    // Local state for calendar view
    var _b = (0, react_1.useState)([]), calendarDays = _b[0], setCalendarDays = _b[1];
    var _c = (0, react_1.useState)(state.selectedDate ? new Date(state.selectedDate) : null), selectedDate = _c[0], setSelectedDate = _c[1];
    // State for mobile calendar modal
    var _d = (0, react_1.useState)(false), isCalendarModalOpen = _d[0], setIsCalendarModalOpen = _d[1];
    // Check if on mobile screen
    var isMobile = (0, useMediaQuery_1.useMediaQuery)("(max-width: 768px)");
    // Generate calendar days (next 14 days including today)
    (0, react_1.useEffect)(function () {
        var days = [];
        var today = (0, date_fns_1.startOfDay)(new Date());
        for (var i = 0; i < 14; i++) {
            days.push((0, date_fns_1.addDays)(today, i));
        }
        setCalendarDays(days);
    }, []);
    // Update time slots when date changes
    (0, react_1.useEffect)(function () {
        if (selectedDate) {
            var dateString = (0, date_fns_1.format)(selectedDate, 'yyyy-MM-dd');
            var timeSlots = (0, state_2.getMockTimeSlots)(selectedDate);
            dispatch({ type: 'SET_DATE', payload: dateString });
            dispatch({ type: 'SET_AVAILABLE_TIME_SLOTS', payload: timeSlots });
            // Reset time slot if changing date
            if (state.selectedDate !== dateString) {
                dispatch({ type: 'SET_TIME_SLOT', payload: '' });
            }
        }
    }, [selectedDate, dispatch, state.selectedDate]);
    // Handle date selection
    var handleDateSelect = function (date) {
        setSelectedDate(date);
    };
    // Handle time slot selection
    var handleTimeSlotSelect = function (timeSlot) {
        dispatch({ type: 'SET_TIME_SLOT', payload: timeSlot });
    };
    // Open the calendar modal
    var handleOpenCalendarModal = function () {
        setIsCalendarModalOpen(true);
    };
    // Close the calendar modal
    var handleCloseCalendarModal = function () {
        setIsCalendarModalOpen(false);
    };
    // Format day for display
    var formatDay = function (date) {
        if ((0, date_fns_1.isToday)(date))
            return 'Today';
        return (0, date_fns_1.format)(date, 'E');
    };
    // Determine if a time slot is available
    var isTimeSlotAvailable = function (timeSlot) {
        return state.availableTimeSlots.includes(timeSlot);
    };
    return (<StepContainer>
      <StepHeader>
        <Text_1.Text as="h3" variant="h5">
          Select Date & Time
        </Text_1.Text>
        <Text_1.Text variant="body2" style={{ opacity: 0.8 }}>
          Choose when you'd like to schedule your appointment
        </Text_1.Text>
      </StepHeader>
      
      <SectionTitle>Date</SectionTitle>
      
      {isMobile && (<MobileViewContainer>
          <SelectedDateDisplay>
            {selectedDate ? (<Text_1.Text variant="body1">
                <strong>{(0, date_fns_1.format)(selectedDate, 'EEEE, MMMM do, yyyy')}</strong>
              </Text_1.Text>) : (<Text_1.Text variant="body2" style={{ opacity: 0.7 }}>
                No date selected
              </Text_1.Text>)}
          </SelectedDateDisplay>
          <Button_1.Button variant="outlined" size="sm" onClick={handleOpenCalendarModal}>
            Choose Date
          </Button_1.Button>
        </MobileViewContainer>)}
      
      <CalendarContainer $isMobile={isMobile}>
        {!isMobile && calendarDays.map(function (day) { return (<DateButton key={(0, date_fns_1.format)(day, 'yyyy-MM-dd')} type="button" onClick={function () { return handleDateSelect(day); }} $isSelected={selectedDate ? (0, date_fns_1.isSameDay)(day, selectedDate) : false} $isToday={(0, date_fns_1.isToday)(day)} $isDisabled={(0, date_fns_1.isBefore)(day, (0, date_fns_1.startOfDay)(new Date())) && !(0, date_fns_1.isToday)(day)} disabled={(0, date_fns_1.isBefore)(day, (0, date_fns_1.startOfDay)(new Date())) && !(0, date_fns_1.isToday)(day)}>
            <DayName>{formatDay(day)}</DayName>
            <DayNumber>{(0, date_fns_1.format)(day, 'd')}</DayNumber>
            <MonthName>{(0, date_fns_1.format)(day, 'MMM')}</MonthName>
          </DateButton>); })}
      </CalendarContainer>
      
      {errors.selectedDate && (<ErrorMessage>{errors.selectedDate}</ErrorMessage>)}
      
      {selectedDate && (<>
          <SectionTitle>Time</SectionTitle>
          
          <TimeSlotContainer>
            {state.availableTimeSlots.length > 0 ? (state.availableTimeSlots.map(function (slot) { return (<TimeSlotButton key={slot} type="button" onClick={function () { return handleTimeSlotSelect(slot); }} $isSelected={state.timeSlot === slot} $isAvailable={isTimeSlotAvailable(slot)} disabled={!isTimeSlotAvailable(slot)}>
                  {slot}
                </TimeSlotButton>); })) : (<NoTimeSlotsMessage>
                No time slots available for the selected date.
                Please select another date.
              </NoTimeSlotsMessage>)}
          </TimeSlotContainer>
          
          {errors.timeSlot && (<ErrorMessage>{errors.timeSlot}</ErrorMessage>)}
        </>)}
      
      {/* Mobile Calendar Modal */}
      <MobileCalendarModal_1.default isOpen={isCalendarModalOpen} selectedDate={selectedDate} onSelectDate={handleDateSelect} onClose={handleCloseCalendarModal} minDate={new Date()} maxDate={(0, date_fns_1.addDays)(new Date(), 60)} withBotanical={true}/>
    </StepContainer>);
};
exports.DateSelection = DateSelection;
// Styled components with sacred geometry principles
var StepContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var StepHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"], ["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(3));
var SectionTitle = (0, styled_components_1.default)(Text_1.Text).attrs({ as: 'h4', variant: 'subtitle1' })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", "px 0 ", "px; // 13px 0 5px\n  font-weight: 600;\n"], ["\n  margin: ", "px 0 ", "px; // 13px 0 5px\n  font-weight: 600;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5));
var CalendarContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr)); // ~55px\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 13px\n  \n  @media (min-width: ", ") {\n    grid-template-columns: repeat(7, 1fr);\n  }\n"], ["\n  display: ", ";\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr)); // ~55px\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 13px\n  \n  @media (min-width: ", ") {\n    grid-template-columns: repeat(7, 1fr);\n  }\n"])), function (props) { return props.$isMobile ? 'none' : 'grid'; }, getFibonacciByIndex(9), getFibonacciByIndex(5), getFibonacciByIndex(7), function (props) { return props.theme.breakpoints.sm; });
var MobileViewContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 13px\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 13px\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n"])), getFibonacciByIndex(7), function (props) { return props.theme.colors.background.paper; }, getFibonacciByIndex(5), getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1; });
var SelectedDateDisplay = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var DateButton = styled_components_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  background-color: ", ";\n  color: ", ";\n  cursor: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  height: ", "px;\n  \n  &:hover:not(:disabled) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n  \n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  background-color: ", ";\n  color: ", ";\n  cursor: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  height: ", "px;\n  \n  &:hover:not(:disabled) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n  \n  ", "\n"])), getFibonacciByIndex(3), function (props) {
    var _a, _b;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.gray[200]) !== null && _b !== void 0 ? _b : 1;
}, getFibonacciByIndex(3), function (props) {
    var _a, _b;
    if (props.$isDisabled)
        return (_a = props.theme.colors.gray[100]) !== null && _a !== void 0 ? _a : 1;
    if (props.$isSelected)
        return (_b = props.theme.colors.primary[50]) !== null && _b !== void 0 ? _b : 1;
    return props.theme.colors.background.paper;
}, function (props) {
    var _a, _b;
    if (props.$isDisabled)
        return (_a = props.theme.colors.gray[400]) !== null && _a !== void 0 ? _a : 1;
    if (props.$isSelected)
        return (_b = props.theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1;
    return props.theme.colors.text.primary;
}, function (props) { return props.$isDisabled ? 'not-allowed' : 'pointer'; }, PHI_INVERSE, PHI_INVERSE, getFibonacciByIndex(10), function (props) {
    var _a, _b;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.gray[50]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var _a, _b;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[600]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.gray[300]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var _a;
    return props.$isToday && "\n    position: relative;\n    \n    &::after {\n      content: '';\n      position: absolute;\n      top: ".concat(getFibonacciByIndex(2), "px;\n      right: ").concat(getFibonacciByIndex(2), "px;\n      width: ").concat(getFibonacciByIndex(3), "px;\n      height: ").concat(getFibonacciByIndex(3), "px;\n      border-radius: 50%;\n      background-color: ").concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n    }\n  ");
});
var DayName = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: 400;\n  margin-bottom: ", "px;\n  text-transform: uppercase;\n  opacity: 0.7;\n"], ["\n  font-size: ", "px;\n  font-weight: 400;\n  margin-bottom: ", "px;\n  text-transform: uppercase;\n  opacity: 0.7;\n"])), function (props) { return props.theme.typography.fontSize * PHI_INVERSE; }, getFibonacciByIndex(2));
var DayNumber = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n"], ["\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(2));
var MonthName = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: ", "px;\n  opacity: 0.7;\n"], ["\n  font-size: ", "px;\n  opacity: 0.7;\n"])), function (props) { return props.theme.typography.fontSize * PHI_INVERSE; });
var TimeSlotContainer = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(9), getFibonacciByIndex(5), getFibonacciByIndex(7));
var TimeSlotButton = styled_components_1.default.button(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: ", ";\n  opacity: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  font-size: ", "px;\n  \n  &:hover:not(:disabled) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"], ["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: ", ";\n  opacity: ", ";\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  font-size: ", "px;\n  \n  &:hover:not(:disabled) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(4), getFibonacciByIndex(3), function (props) {
    var _a;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
        : props.theme.colors.background.paper;
}, function (props) { return props.$isSelected
    ? props.theme.colors.white
    : props.theme.colors.text.primary; }, function (props) {
    var _a, _b;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.gray[200]) !== null && _b !== void 0 ? _b : 1;
}, function (props) { return props.$isAvailable ? 'pointer' : 'not-allowed'; }, function (props) { return props.$isAvailable ? 1 : 0.5; }, PHI_INVERSE, PHI_INVERSE, function (props) { return props.theme.typography.fontSize; }, function (props) {
    var _a, _b;
    return props.$isSelected
        ? (_a = props.theme.colors.primary[600]) !== null && _a !== void 0 ? _a : 1
        : (_b = props.theme.colors.primary[50]) !== null && _b !== void 0 ? _b : 1;
}, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
var NoTimeSlotsMessage = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  grid-column: 1 / -1;\n  padding: ", "px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n  border: 1px dashed ", ";\n"], ["\n  grid-column: 1 / -1;\n  padding: ", "px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n  border: 1px dashed ", ";\n"])), getFibonacciByIndex(7), function (props) { return props.theme.colors.text.secondary; }, function (props) { return props.theme.colors.background.light; }, getFibonacciByIndex(3), function (props) { var _a; return (_a = props.theme.colors.gray[300]) !== null && _a !== void 0 ? _a : 1; });
var ErrorMessage = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"])), function (props) { var _a; return (_a = props.theme.colors.error[500]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.typography.fontSize * PHI_INVERSE; }, getFibonacciByIndex(3), getFibonacciByIndex(5));
exports.default = exports.DateSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
