"use strict";
/**
 * MobileCalendarModal Component
 *
 * A fullscreen modal calendar for selecting dates on mobile devices.
 * Uses sacred geometry principles for layout, spacing, and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCalendarModal = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
var framer_motion_1 = require("framer-motion");
var Text_1 = require("../typography/Text");
var Button_1 = require("../button/Button");
var IconButton_1 = require("../button/IconButton");
var BotanicalElement_1 = require("../botanical/BotanicalElement");
/**
 * Sacred geometry easing functions
 */
var SACRED_EASINGS = {
    easeOut: [0, PHI_INVERSE, PHI_INVERSE, 1],
    easeIn: [PHI_INVERSE, 0, 1, PHI_INVERSE],
    easeInOut: [PHI_INVERSE, 0, 0, 1]
};
/**
 * Day names with sacred proportions (first 3 letters)
 */
var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/**
 * MobileCalendarModal component
 */
var MobileCalendarModal = function (_a) {
    var isOpen = _a.isOpen, selectedDate = _a.selectedDate, onSelectDate = _a.onSelectDate, onClose = _a.onClose, _b = _a.minDate, minDate = _b === void 0 ? new Date() : _b, _c = _a.maxDate, maxDate = _c === void 0 ? (0, date_fns_1.addMonths)(new Date(), 3) : _c, _d = _a.withBotanical, withBotanical = _d === void 0 ? true : _d, className = _a.className;
    // Convert minDate to start of day
    var minDateNormalized = (0, date_fns_1.startOfDay)(minDate);
    // Current visible month
    var _e = (0, react_1.useState)(selectedDate || new Date()), currentMonth = _e[0], setCurrentMonth = _e[1];
    // Days in the current month
    var _f = (0, react_1.useState)([]), daysInMonth = _f[0], setDaysInMonth = _f[1];
    // Reset current month when selected date changes
    (0, react_1.useEffect)(function () {
        if (selectedDate) {
            setCurrentMonth(selectedDate);
        }
    }, [selectedDate]);
    // Generate days for the current month
    (0, react_1.useEffect)(function () {
        var monthStart = (0, date_fns_1.startOfMonth)(currentMonth);
        var monthEnd = (0, date_fns_1.endOfMonth)(currentMonth);
        var startDay = (0, date_fns_1.addDays)(monthStart, -monthStart.getDay());
        var endDay = (0, date_fns_1.addDays)(monthEnd, 6 - monthEnd.getDay());
        var days = (0, date_fns_1.eachDayOfInterval)({ start: startDay, end: endDay });
        setDaysInMonth(days);
    }, [currentMonth]);
    // Navigate to the previous month
    var goToPreviousMonth = function () {
        var previousMonth = (0, date_fns_1.subMonths)(currentMonth, 1);
        if ((0, date_fns_1.isBefore)((0, date_fns_1.startOfMonth)(previousMonth), (0, date_fns_1.startOfMonth)(minDateNormalized))) {
            return; // Don't go earlier than minDate
        }
        setCurrentMonth(previousMonth);
    };
    // Navigate to the next month
    var goToNextMonth = function () {
        var nextMonth = (0, date_fns_1.addMonths)(currentMonth, 1);
        if ((0, date_fns_1.isAfter)((0, date_fns_1.startOfMonth)(nextMonth), (0, date_fns_1.startOfMonth)(maxDate))) {
            return; // Don't go later than maxDate
        }
        setCurrentMonth(nextMonth);
    };
    // Handle date selection
    var handleDateSelect = function (date) {
        onSelectDate(date);
        onClose();
    };
    // Check if a date is selectable
    var isDateSelectable = function (date) {
        return (!(0, date_fns_1.isBefore)((0, date_fns_1.startOfDay)(date), minDateNormalized) &&
            !(0, date_fns_1.isAfter)(date, maxDate));
    };
    if (!isOpen)
        return null;
    return (<framer_motion_1.AnimatePresence mode="wait">
      <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: SACRED_EASINGS.easeOut }} onClick={onClose} className={className}>
        <ModalContent initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.25, ease: SACRED_EASINGS.easeInOut }} onClick={function (e) { return e.stopPropagation(); }}>
          {withBotanical && (<BotanicalDecoration position="topRight">
              <BotanicalElement_1.BotanicalElement type="oliveBranch" size="medium" color="var(--color-primary-300)" rotation={45}/>
            </BotanicalDecoration>)}
          
          <ModalHeader>
            <Text_1.Text as="h2" variant="h5">Select Date</Text_1.Text>
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeader>
          
          <MonthNavigation>
            <NavButton onClick={goToPreviousMonth} disabled={(0, date_fns_1.isBefore)((0, date_fns_1.startOfMonth)((0, date_fns_1.subMonths)(currentMonth, 1)), (0, date_fns_1.startOfMonth)(minDateNormalized))}>
              &larr;
            </NavButton>
            <MonthDisplay variant="h6">
              {(0, date_fns_1.format)(currentMonth, 'MMMM yyyy')}
            </MonthDisplay>
            <NavButton onClick={goToNextMonth} disabled={(0, date_fns_1.isAfter)((0, date_fns_1.startOfMonth)((0, date_fns_1.addMonths)(currentMonth, 1)), (0, date_fns_1.startOfMonth)(maxDate))}>
              &rarr;
            </NavButton>
          </MonthNavigation>
          
          <CalendarGrid>
            {/* Day headings */}
            {DAY_NAMES.map(function (day) { return (<DayHeading key={day} variant="subtitle2">
                {day}
              </DayHeading>); })}
            
            {/* Calendar days */}
            {daysInMonth.map(function (date) {
            var isCurrentMonth = (0, date_fns_1.isSameMonth)(date, currentMonth);
            var isSelected = selectedDate ? (0, date_fns_1.isSameDay)(date, selectedDate) : false;
            var isTodayDate = (0, date_fns_1.isToday)(date);
            var selectable = isDateSelectable(date);
            return (<DayCell key={date.toISOString()} $isCurrentMonth={isCurrentMonth} $isSelected={isSelected} $isToday={isTodayDate} $isSelectable={selectable} onClick={function () { return selectable && handleDateSelect(date); }}>
                  <DayNumber $isCurrentMonth={isCurrentMonth} $isSelected={isSelected} $isToday={isTodayDate} $isSelectable={selectable}>
                    {(0, date_fns_1.format)(date, 'd')}
                  </DayNumber>
                </DayCell>);
        })}
          </CalendarGrid>
          
          <ButtonContainer>
            <Button_1.Button variant="outlined" color="secondary" onClick={onClose} fullWidth>
              Cancel
            </Button_1.Button>
          </ButtonContainer>
        </ModalContent>
      </ModalOverlay>
    </framer_motion_1.AnimatePresence>);
};
exports.MobileCalendarModal = MobileCalendarModal;
// Styled components with sacred geometry principles
var ModalOverlay = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: ", "px; // 5px\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var ModalContent = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: ", "px; // 144px\n  max-height: 90vh;\n  overflow-y: auto;\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  padding: ", "px; // 13px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: ", "px; // 144px\n  max-height: 90vh;\n  overflow-y: auto;\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  padding: ", "px; // 13px\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  overflow: hidden;\n"])), getFibonacciByIndex(12), function (props) { return props.theme.colors.background.paper; }, getFibonacciByIndex(5), getFibonacciByIndex(7), getFibonacciByIndex(6), getFibonacciByIndex(9));
var ModalHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 13px\n  padding-bottom: ", "px; // 5px\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 13px\n  padding-bottom: ", "px; // 5px\n  border-bottom: 1px solid ", ";\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1; });
var CloseButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: ", ";\n  \n  &:hover {\n    color: ", ";\n  }\n"], ["\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: ", ";\n  \n  &:hover {\n    color: ", ";\n  }\n"])), function (props) { return props.theme.colors.text.secondary; }, function (props) { return props.theme.colors.text.primary; });
var MonthNavigation = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var MonthDisplay = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-align: center;\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  \n  /* Apply sacred geometry to text */\n  letter-spacing: ", "em;\n  line-height: ", ";\n"], ["\n  text-align: center;\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  \n  /* Apply sacred geometry to text */\n  letter-spacing: ", "em;\n  line-height: ", ";\n"])), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, PHI_INVERSE * 0.05, PHI);
var NavButton = (0, styled_components_1.default)(IconButton_1.IconButton)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  \n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"], ["\n  color: ", ";\n  \n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"])), function (props) { return props.theme.colors.text.secondary; });
var CalendarGrid = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px; // 3px\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px; // 3px\n"])), getFibonacciByIndex(4));
var DayHeading = (0, styled_components_1.default)(Text_1.Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: center;\n  padding: ", "px 0; // 2px\n  color: ", ";\n  font-weight: 500;\n"], ["\n  text-align: center;\n  padding: ", "px 0; // 2px\n  color: ", ";\n  font-weight: 500;\n"])), getFibonacciByIndex(3), theme.colors.text.secondary);
var DayCell = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  opacity: ", ";\n  border-radius: ", "px; // 1px\n  \n  ", "\n  \n  ", "\n  \n  &:hover {\n    ", "\n  }\n"], ["\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  opacity: ", ";\n  border-radius: ", "px; // 1px\n  \n  ", "\n  \n  ", "\n  \n  &:hover {\n    ", "\n  }\n"])), function (props) { return props.$isSelectable ? 'pointer' : 'default'; }, function (props) {
    return (props.$isCurrentMonth && props.$isSelectable)
        ? 1
        : props.$isCurrentMonth ? 0.5 : 0.2;
}, getFibonacciByIndex(2), function (props) {
    var _a;
    return props.$isToday && !props.$isSelected && "\n    background-color: ".concat((_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1, "15;\n  ");
}, function (props) {
    var _a;
    return props.$isSelected && "\n    background-color: ".concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n  ");
}, function (props) { return props.$isSelectable && !props.$isSelected && "\n      background-color: rgba(0, 0, 0, 0.05);\n    "; });
var DayNumber = styled_components_1.default.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: ", "px; // 5px\n  font-weight: ", ";\n  color: ", ";\n  \n  ", "\n"], ["\n  font-size: ", "px; // 5px\n  font-weight: ", ";\n  color: ", ";\n  \n  ", "\n"])), getFibonacciByIndex(5), function (props) { return props.$isSelected || props.$isToday ? 'bold' : 'normal'; }, function (props) {
    var _a;
    return props.$isSelected
        ? props.theme.colors.white
        : props.$isToday
            ? (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1
            : props.theme.colors.text.primary;
}, function (props) {
    var _a;
    return props.$isToday && !props.$isSelected && "\n    border: 1px solid ".concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n    border-radius: 50%;\n    width: ").concat(getFibonacciByIndex(6), "px; // 8px\n    height: ").concat(getFibonacciByIndex(6), "px; // 8px\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  ");
});
var ButtonContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ", "px; // 13px\n  gap: ", "px; // 5px\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ", "px; // 13px\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5));
var BotanicalDecoration = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  opacity: 0.08;\n  pointer-events: none;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  position: absolute;\n  z-index: -1;\n  opacity: 0.08;\n  pointer-events: none;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"])), function (props) { return props.position === 'topRight' && "\n    top: -".concat(getFibonacciByIndex(7), "px; // 13px\n    right: -").concat(getFibonacciByIndex(7), "px; // 13px\n    transform: rotate(45deg);\n  "); }, function (props) { return props.position === 'topLeft' && "\n    top: -".concat(getFibonacciByIndex(7), "px; // 13px\n    left: -").concat(getFibonacciByIndex(7), "px; // 13px\n    transform: rotate(-45deg);\n  "); }, function (props) { return props.position === 'bottomRight' && "\n    bottom: -".concat(getFibonacciByIndex(7), "px; // 13px\n    right: -").concat(getFibonacciByIndex(7), "px; // 13px\n    transform: rotate(135deg);\n  "); }, function (props) { return props.position === 'bottomLeft' && "\n    bottom: -".concat(getFibonacciByIndex(7), "px; // 13px\n    left: -").concat(getFibonacciByIndex(7), "px; // 13px\n    transform: rotate(-135deg);\n  "); });
exports.default = exports.MobileCalendarModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
