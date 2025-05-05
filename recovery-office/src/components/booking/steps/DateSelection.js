"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
/**
 * Container for the date selection component
 * Uses sacred spacing for margins and padding
 */
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px 0;\n"], ["\n  width: 100%;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Title for the date selection section
 * Uses golden ratio for line height
 */
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.dark; });
/**
 * Description for the date selection section
 * Uses PHI for line height and margin calculations
 */
var SectionDescription = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.main; });
/**
 * Layout grid for calendar and time slots
 * Uses golden ratio for layout proportions
 */
var DateSelectionLayout = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  width: 100%;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  width: 100%;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"])), sacred_geometry_1.PHI_INVERSE * 100, (1 - sacred_geometry_1.PHI_INVERSE) * 100, sacred_geometry_1.SACRED_SPACING.lg);
/**
 * Calendar container
 * Uses Fibonacci spacing and golden ratio for calendar cells
 */
var CalendarContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n"])), function (props) { return props.theme.colors.background.light; }, sacred_geometry_1.SACRED_RADIUS.md, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.theme.colors.border.light; });
/**
 * Calendar header with month and navigation
 * Uses Fibonacci spacing
 */
var CalendarHeader = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Month display in the calendar header
 */
var CalendarMonth = styled_components_1.default.h3(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 1.25rem;\n  color: ", ";\n"], ["\n  font-size: 1.25rem;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.dark; });
/**
 * Button for calendar navigation
 * Uses Fibonacci dimensions
 */
var NavButton = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), function (props) { return props.theme.colors.border.light; }, function (props) { return props.theme.colors.background.main; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, function (props) { return props.theme.colors.background.medium; });
/**
 * Grid for weekday headers
 * Uses Fibonacci for gap and sacred spacing
 */
var WeekdayHeader = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  margin-bottom: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), sacred_geometry_1.SACRED_SPACING.xs);
/**
 * Individual weekday cell
 * Uses golden ratio for text styling
 */
var Weekday = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-align: center;\n  font-size: 0.875rem;\n  color: ", ";\n  padding: ", "px;\n  font-weight: 500;\n"], ["\n  text-align: center;\n  font-size: 0.875rem;\n  color: ", ";\n  padding: ", "px;\n  font-weight: 500;\n"])), function (props) { return props.theme.colors.text.light; }, sacred_geometry_1.SACRED_SPACING.xxs);
/**
 * Grid for calendar days
 * Uses Fibonacci for gap and dimensions
 */
var DaysGrid = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4));
/**
 * Individual calendar day cell
 * Uses golden ratio and Fibonacci for styling
 */
var DayCell = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  aspect-ratio: 1; /* Perfect square */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ", "px;\n  cursor: ", ";\n  font-weight: ", ";\n  opacity: ", ";\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"], ["\n  aspect-ratio: 1; /* Perfect square */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ", "px;\n  cursor: ", ";\n  font-weight: ", ";\n  opacity: ", ";\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"])), sacred_geometry_1.SACRED_RADIUS.sm, function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.isToday || props.isSelected ? '600' : '400'; }, function (props) { return (props.isCurrentMonth && !props.isDisabled) ? 1 : 0.3; }, function (props) {
    if (props.isSelected)
        return props.theme.colors.accent.light;
    if (props.isToday)
        return props.theme.colors.background.medium;
    return 'transparent';
}, function (props) {
    if (props.isSelected)
        return props.theme.colors.accent.dark;
    if (props.isDisabled)
        return props.theme.colors.text.light;
    return props.theme.colors.text.main;
}, function (props) {
    if (props.isSelected)
        return props.theme.colors.accent.main;
    if (props.isToday)
        return props.theme.colors.border.main;
    return 'transparent';
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * 10, function (props) {
    if (props.isDisabled)
        return 'transparent';
    if (props.isSelected)
        return props.theme.colors.accent.light;
    return props.theme.colors.background.light;
}, function (props) { return props.isDisabled ? 'none' : "scale(".concat(sacred_geometry_1.PHI_INVERSE + 0.5, ")"); });
/**
 * Time slots container
 * Uses sacred spacing and golden ratio for layout
 */
var TimeSlotsContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n"])), function (props) { return props.theme.colors.background.light; }, sacred_geometry_1.SACRED_RADIUS.md, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.theme.colors.border.light; });
/**
 * Time slots header
 * Uses golden ratio for typography
 */
var TimeSlotsHeader = styled_components_1.default.h3(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: 1.125rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n"], ["\n  font-size: 1.125rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.theme.colors.text.dark; }, sacred_geometry_1.PHI);
/**
 * Grid for time slots
 * Uses Fibonacci for spacing and grid layout
 */
var TimeSlotsGrid = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xs);
/**
 * Individual time slot
 * Uses sacred geometry for styling and interactions
 */
var TimeSlotButton = styled_components_1.default.button(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-size: 0.875rem;\n  cursor: ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-size: 0.875rem;\n  cursor: ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_RADIUS.sm, function (props) {
    if (!props.isAvailable)
        return props.theme.colors.background.medium;
    if (props.isSelected)
        return props.theme.colors.accent.light;
    return props.theme.colors.background.main;
}, function (props) {
    if (!props.isAvailable)
        return props.theme.colors.border.light;
    if (props.isSelected)
        return props.theme.colors.accent.main;
    return props.theme.colors.border.light;
}, function (props) {
    if (!props.isAvailable)
        return props.theme.colors.text.light;
    if (props.isSelected)
        return props.theme.colors.accent.dark;
    return props.theme.colors.text.main;
}, function (props) { return props.isAvailable ? 'pointer' : 'not-allowed'; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * 10, function (props) {
    if (!props.isAvailable)
        return props.theme.colors.background.medium;
    if (props.isSelected)
        return props.theme.colors.accent.light;
    return props.theme.colors.background.light;
}, function (props) { return props.isAvailable ? "translateY(-".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px)") : 'none'; });
/**
 * No time slots message
 * Uses golden ratio for typography
 */
var NoTimeSlotsMessage = styled_components_1.default.p(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  color: ", ";\n  font-style: italic;\n  line-height: ", ";\n  text-align: center;\n  padding: ", "px;\n"], ["\n  color: ", ";\n  font-style: italic;\n  line-height: ", ";\n  text-align: center;\n  padding: ", "px;\n"])), function (props) { return props.theme.colors.text.light; }, sacred_geometry_1.PHI, sacred_geometry_1.SACRED_SPACING.md);
/**
 * DateSelection component
 * Allows users to select a date and time for their booking
 * Implements sacred geometry principles throughout
 */
var DateSelection = function (_a) {
    var selectedDate = _a.selectedDate, onDateChange = _a.onDateChange, selectedTimeSlotId = _a.selectedTimeSlotId, onTimeSlotChange = _a.onTimeSlotChange, getAvailableTimeSlots = _a.getAvailableTimeSlots;
    // State for viewing month in calendar
    var _b = useState(selectedDate), viewDate = _b[0], setViewDate = _b[1];
    // Get available time slots for the selected date
    var availableTimeSlots = getAvailableTimeSlots(selectedDate);
    // Helper functions for date calculation
    var getDaysInMonth = function (year, month) { return new Date(year, month + 1, 0).getDate(); };
    var getFirstDayOfMonth = function (year, month) { return new Date(year, month, 1).getDay(); };
    // Calculate calendar values
    var currentYear = viewDate.getFullYear();
    var currentMonth = viewDate.getMonth();
    var daysInMonth = getDaysInMonth(currentYear, currentMonth);
    var firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    // Calculate days from previous month to display
    var prevMonthDays = [];
    if (firstDayOfMonth > 0) {
        var prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        var prevMonthYear = prevMonth === 11 ? currentYear - 1 : currentYear;
        var daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
        for (var i = firstDayOfMonth - 1; i >= 0; i--) {
            prevMonthDays.push({
                day: daysInPrevMonth - i,
                month: prevMonth,
                year: prevMonthYear,
                isCurrentMonth: false,
            });
        }
    }
    // Calculate days from current month
    var currentMonthDays = [];
    for (var i = 1; i <= daysInMonth; i++) {
        currentMonthDays.push({
            day: i,
            month: currentMonth,
            year: currentYear,
            isCurrentMonth: true,
        });
    }
    // Calculate days from next month to display
    var nextMonthDays = [];
    var totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
    var nextCellsToFill = totalCells - (prevMonthDays.length + currentMonthDays.length);
    if (nextCellsToFill > 0) {
        var nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        var nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
        for (var i = 1; i <= nextCellsToFill; i++) {
            nextMonthDays.push({
                day: i,
                month: nextMonth,
                year: nextMonthYear,
                isCurrentMonth: false,
            });
        }
    }
    // Combine all days
    var allDays = __spreadArray(__spreadArray(__spreadArray([], prevMonthDays, true), currentMonthDays, true), nextMonthDays, true);
    // Handle calendar navigation
    var goToPrevMonth = function () {
        var newViewDate = new Date(viewDate);
        newViewDate.setMonth(viewDate.getMonth() - 1);
        setViewDate(newViewDate);
    };
    var goToNextMonth = function () {
        var newViewDate = new Date(viewDate);
        newViewDate.setMonth(viewDate.getMonth() + 1);
        setViewDate(newViewDate);
    };
    // Handle date selection
    var handleDateClick = function (year, month, day) {
        var newDate = new Date(year, month, day);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        // Don't allow selecting dates in the past
        if (newDate >= today) {
            onDateChange(newDate);
        }
    };
    // Format month and year for display
    var monthYearDisplay = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    // Get today's date for highlighting
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return (<Container>
      <SectionTitle>Choose Date & Time</SectionTitle>
      <SectionDescription>
        Select a date and time for your consultation. We'll send you a confirmation email with all the details.
      </SectionDescription>
      
      <DateSelectionLayout>
        <CalendarContainer>
          <CalendarHeader>
            <NavButton onClick={goToPrevMonth} aria-label="Previous month">
              &lt;
            </NavButton>
            <CalendarMonth>{monthYearDisplay}</CalendarMonth>
            <NavButton onClick={goToNextMonth} aria-label="Next month">
              &gt;
            </NavButton>
          </CalendarHeader>
          
          <WeekdayHeader>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(function (day) { return (<Weekday key={day}>{day}</Weekday>); })}
          </WeekdayHeader>
          
          <DaysGrid>
            {allDays.map(function (_a) {
            var day = _a.day, month = _a.month, year = _a.year, isCurrentMonth = _a.isCurrentMonth;
            var date = new Date(year, month, day);
            var dateString = date.toISOString().split('T')[0];
            var selectedDateString = selectedDate.toISOString().split('T')[0];
            var todayString = today.toISOString().split('T')[0];
            var isSelected = dateString === selectedDateString;
            var isToday = dateString === todayString;
            var isDisabled = date < today; // Disable past dates
            return (<DayCell key={"".concat(year, "-").concat(month, "-").concat(day)} isCurrentMonth={isCurrentMonth} isToday={isToday} isSelected={isSelected} isDisabled={isDisabled} onClick={function () {
                    if (!isDisabled) {
                        handleDateClick(year, month, day);
                    }
                }} aria-label={date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} aria-selected={isSelected} aria-disabled={isDisabled}>
                  {day}
                </DayCell>);
        })}
          </DaysGrid>
        </CalendarContainer>
        
        <TimeSlotsContainer>
          <TimeSlotsHeader>
            Available Times for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </TimeSlotsHeader>
          
          {availableTimeSlots.length > 0 ? (<TimeSlotsGrid>
              {availableTimeSlots.map(function (slot) { return (<TimeSlotButton key={slot.id} isSelected={slot.id === selectedTimeSlotId} isAvailable={slot.available} onClick={function () {
                    if (slot.available) {
                        onTimeSlotChange(slot.id);
                    }
                }} disabled={!slot.available} aria-label={"Time slot ".concat(slot.time)} aria-selected={slot.id === selectedTimeSlotId} aria-disabled={!slot.available}>
                  {slot.time}
                </TimeSlotButton>); })}
            </TimeSlotsGrid>) : (<NoTimeSlotsMessage>
              No time slots available for this date. Please select another date.
            </NoTimeSlotsMessage>)}
        </TimeSlotsContainer>
      </DateSelectionLayout>
    </Container>);
};
exports.default = DateSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
