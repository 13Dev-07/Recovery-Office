"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
;
var BookingContext_1 = require("@context/BookingContext");
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
// Styled components using sacred geometry principles
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n"])), getFibonacciByIndex(12));
var CalendarContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(7));
var WeekContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6));
var DayButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  transition: all ", "ms ease-in-out;\n  padding: ", "px;\n  \n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  height: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  transition: all ", "ms ease-in-out;\n  padding: ", "px;\n  \n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(4), function (props) {
    return props.isSelected ? props.theme.colors.primary[500] : props.theme.colors.border.main;
}, function (props) {
    if (props.isSelected)
        return props.theme.colors.primary[100];
    if (!props.isAvailable)
        return props.theme.colors.background[200];
    return props.theme.colors.background[100];
}, function (props) { return props.isAvailable ? 'pointer' : 'not-allowed'; }, getFibonacciByIndex(5) * 10, getFibonacciByIndex(4), function (props) { return props.isAvailable ? "scale(".concat(1 + (1 / PHI) * 0.05, ")") : 'none'; }, function (props) { return props.isAvailable ?
    "0 ".concat(getFibonacciByIndex(3), "px ").concat(getFibonacciByIndex(5), "px rgba(0, 0, 0, 0.1)") : 'none'; });
var DayName = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), getFibonacciByIndex(4), getFibonacciByIndex(2), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.secondary;
});
var DayNumber = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: bold;\n  color: ", ";\n"])), getFibonacciByIndex(5), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.primary;
});
var TimeSlotsContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(5), getFibonacciByIndex(7));
var TimeSlot = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    transform: scale(", ");\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    transform: scale(", ");\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(4), function (props) {
    return props.isSelected ? props.theme.colors.primary[500] : props.theme.colors.border.main;
}, function (props) {
    return props.isSelected ? props.theme.colors.primary[100] : props.theme.colors.background[100];
}, getFibonacciByIndex(5) * 10, 1 + (1 / PHI) * 0.05, getFibonacciByIndex(3), getFibonacciByIndex(5));
var TimeText = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  color: ", ";\n"])), getFibonacciByIndex(5), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.primary;
});
var NavigationContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(6));
var NavigationButton = styled_components_1.default.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), function (_a) {
    var theme = _a.theme;
    return theme.colors.background[100];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.border.main;
}, getFibonacciByIndex(3), getFibonacciByIndex(5) * 10, function (_a) {
    var theme = _a.theme;
    return theme.colors.background[200];
});
var ActionContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"])), getFibonacciByIndex(7));
var Button = styled_components_1.default.button(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), function (props) {
    return props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.background[100];
}, function (props) {
    return props.isPrimary ? 'white' : props.theme.colors.text.primary;
}, function (props) {
    return props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.border.main;
}, getFibonacciByIndex(3), getFibonacciByIndex(5), getFibonacciByIndex(5) * 10, function (props) {
    return props.isPrimary ? props.theme.colors.primary[700] : props.theme.colors.background[200];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.disabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.disabled;
});
// Mock data for available slots
// In a real app, this would come from an API based on the selected service
var generateMockTimeSlots = function (selectedDate, serviceDuration) {
    if (serviceDuration === void 0) { serviceDuration = 60; }
    var slots = [];
    var startTime = 9; // 9 AM
    var endTime = 17; // 5 PM
    var startOfSelectedDay = (0, date_fns_1.startOfDay)(selectedDate);
    // Generate time slots every 'serviceDuration' minutes
    for (var hour = startTime; hour < endTime; hour++) {
        for (var minute = 0; minute < 60; minute += serviceDuration) {
            // Skip some slots randomly to simulate unavailability
            if (Math.random() > 0.3) {
                slots.push((0, date_fns_1.addMinutes)(startOfSelectedDay, hour * 60 + minute));
            }
        }
    }
    return slots;
};
var DateTimeSelection = function () {
    var _a = (0, BookingContext_1.useBooking)(), selectedService = _a.selectedService, selectedDate = _a.selectedDate, setSelectedDate = _a.setSelectedDate, selectedTime = _a.selectedTime, setSelectedTime = _a.setSelectedTime, currentStep = _a.currentStep, setCurrentStep = _a.setCurrentStep;
    var _b = useState([]), availableDates = _b[0], setAvailableDates = _b[1];
    var _c = useState([]), availableTimeSlots = _c[0], setAvailableTimeSlots = _c[1];
    var _d = useState(new Date()), weekStart = _d[0], setWeekStart = _d[1];
    // Generate available dates for the next 14 days
    React.useEffect(function () {
        var dates = [];
        var today = new Date();
        for (var i = 0; i < 14; i++) {
            // Skip weekends for this example
            var day = (0, date_fns_1.addDays)(today, i);
            var dayOfWeek = day.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                dates.push(day);
            }
        }
        setAvailableDates(dates);
    }, []);
    // Generate time slots when a date is selected
    React.useEffect(function () {
        if (selectedDate && selectedService) {
            var slots = generateMockTimeSlots(selectedDate, selectedService.duration);
            setAvailableTimeSlots(slots);
        }
        else {
            setAvailableTimeSlots([]);
        }
    }, [selectedDate, selectedService]);
    // Navigate to next week
    var handleNextWeek = function () {
        setWeekStart((0, date_fns_1.addDays)(weekStart, 7));
    };
    // Navigate to previous week
    var handlePrevWeek = function () {
        var today = new Date();
        var newStart = (0, date_fns_1.addDays)(weekStart, -7);
        // Don't allow navigating to past weeks
        if (newStart >= today) {
            setWeekStart(newStart);
        }
        else {
            setWeekStart(today);
        }
    };
    // Get the visible days for the current week view
    var visibleDays = Array.from({ length: 7 }, function (_, i) { return (0, date_fns_1.addDays)(weekStart, i); });
    var handleDateSelection = function (date) {
        setSelectedDate(date);
        setSelectedTime(null); // Reset time when date changes
    };
    var handleTimeSelection = function (time) {
        setSelectedTime(time);
    };
    var handleBack = function () {
        setCurrentStep(currentStep - 1);
    };
    var handleContinue = function () {
        if (selectedDate && selectedTime) {
            setCurrentStep(currentStep + 1);
        }
    };
    var isDayAvailable = function (date) {
        return availableDates.some(function (availableDate) {
            return (0, date_fns_1.isSameDay)(availableDate, date);
        });
    };
    return (<Container>
      <h2>Select Date & Time</h2>
      
      <CalendarContainer>
        <NavigationContainer>
          <NavigationButton onClick={handlePrevWeek}>Previous Week</NavigationButton>
          <span>{(0, date_fns_1.format)(weekStart, 'MMMM yyyy')}</span>
          <NavigationButton onClick={handleNextWeek}>Next Week</NavigationButton>
        </NavigationContainer>
        
        <WeekContainer>
          {visibleDays.map(function (date) {
            var available = isDayAvailable(date);
            var isSelected = selectedDate ? (0, date_fns_1.isSameDay)(date, selectedDate) : false;
            return (<DayButton key={date.toISOString()} isSelected={isSelected} isAvailable={available} onClick={function () { return available && handleDateSelection(date); }} disabled={!available}>
                <DayName>{(0, date_fns_1.format)(date, 'EEE')}</DayName>
                <DayNumber>{(0, date_fns_1.format)(date, 'd')}</DayNumber>
              </DayButton>);
        })}
        </WeekContainer>
      </CalendarContainer>
      
      {selectedDate && (<>
          <h3>Available Times for {(0, date_fns_1.format)(selectedDate, 'MMMM d, yyyy')}</h3>
          {availableTimeSlots.length > 0 ? (<TimeSlotsContainer>
              {availableTimeSlots.map(function (time) { return (<TimeSlot key={time.toISOString()} isSelected={selectedTime ? time.getTime() === selectedTime.getTime() : false} onClick={function () { return handleTimeSelection(time); }}>
                  <TimeText>{(0, date_fns_1.format)(time, 'h:mm a')}</TimeText>
                </TimeSlot>); })}
            </TimeSlotsContainer>) : (<p>No available time slots for this date. Please select another date.</p>)}
        </>)}
      
      <ActionContainer>
        <Button onClick={handleBack}>Back</Button>
        <Button isPrimary onClick={handleContinue} disabled={!selectedDate || !selectedTime}>
          Continue
        </Button>
      </ActionContainer>
    </Container>);
};
exports.default = DateTimeSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
