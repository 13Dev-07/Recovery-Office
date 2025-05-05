"use strict";
// TODO: This file contains direct document access without SSR checks
/**
 * DatePicker Component
 *
 * A date selection component that implements sacred geometry principles
 * for calendar layout, proportions, and visual harmony.
 *
 * The DatePicker creates a harmonious calendar interface using
 * Golden Ratio and Fibonacci-based measurements for optimal visual balance.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var typography_1 = require("../typography");
var button_1 = require("../button");
var Input_1 = require("./Input");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../animation");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
// Constants for sacred geometry calendar
var DAYS_IN_WEEK = 7;
var FIBONACCI_8 = (0, getFibonacciByIndex_1.getFibonacciByIndex)(8); // 21
var FIBONACCI_7 = (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); // 13
// Helper functions for date manipulation
var getDaysInMonth = function (year, month) {
    return new Date(year, month + 1, 0).getDate();
};
var getFirstDayOfMonth = function (year, month) {
    return new Date(year, month, 1).getDay();
};
// Format date to string based on format pattern
var formatDate = function (date, format) {
    if (format === void 0) { format = 'MM/dd/yyyy'; }
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    return format
        .replace('dd', day)
        .replace('MM', month)
        .replace('yyyy', year)
        .replace('yy', year.toString().slice(-2));
};
// Parse string to date
var parseDate = function (dateString, format) {
    var _a, _b, _c;
    if (format === void 0) { format = 'MM/dd/yyyy'; }
    if (!dateString)
        return null;
    try {
        var parts = dateString.split(/[/.-]/);
        var formatParts = format.split(/[/.-]/);
        var dayIndex = formatParts.findIndex(function (part) { return part.includes('d'); });
        var monthIndex = formatParts.findIndex(function (part) { return part.includes('M'); });
        var yearIndex = formatParts.findIndex(function (part) { return part.includes('y'); });
        if (dayIndex === -1 || monthIndex === -1 || yearIndex === -1) {
            return null;
        }
        var day = parseInt((_a = parts[dayIndex]) !== null && _a !== void 0 ? _a : 1, 10);
        var month = parseInt((_b = parts[monthIndex]) !== null && _b !== void 0 ? _b : 1, 10) - 1; // JavaScript months are 0-indexed
        var year = parseInt((_c = parts[yearIndex]) !== null && _c !== void 0 ? _c : 1, 10);
        var date = new Date(year, month, day);
        if (isNaN(date.getTime())) {
            return null;
        }
        return date;
    }
    catch (error) {
        return null;
    }
};
// Size-specific styles using sacred geometry
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.sm,
                daySize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), // 8px
                spacing: theme.spacing.xs,
                calendarWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(10) * sacred_geometry_1.PHI, // ~890px
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                daySize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), // 21px
                spacing: theme.spacing.md,
                calendarWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(11) * sacred_geometry_1.PHI, // ~1450px
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                daySize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), // 13px
                spacing: theme.spacing.sm,
                calendarWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(10), // 55px
            };
    }
};
// Styled components for the calendar UI
var CalendarContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10;\n  margin-top: 8px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  overflow: hidden;\n  width: ", "px;\n  border: 1px solid ", ";\n"], ["\n  position: absolute;\n  z-index: 10;\n  margin-top: 8px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  overflow: hidden;\n  width: ", "px;\n  border: 1px solid ", ";\n"])), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.radius.md; }, function (props) { return props.theme.shadows.md; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).calendarWidth; }, function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var CalendarHeader = (0, styled_components_1.default)(layout_1.Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", "px;\n  border-bottom: 1px solid ", ";\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: ", "px;\n  border-bottom: 1px solid ", ";\n  justify-content: space-between;\n  align-items: center;\n"])), function (props) { return props.theme.spacing.sm; }, function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var CalendarGrid = (0, styled_components_1.default)(layout_1.Grid)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  padding: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: ", "px;\n  padding: ", "px;\n"])), function (props) { return props.theme.spacing.xs; }, function (props) { return props.theme.spacing.sm; });
var DayCell = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  border-radius: ", "px;\n  opacity: ", ";\n  \n  /* Size based on Fibonacci */\n  ", "\n  \n  /* States */\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  transition: all 0.2s cubic-bezier(", ");\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  border-radius: ", "px;\n  opacity: ", ";\n  \n  /* Size based on Fibonacci */\n  ", "\n  \n  /* States */\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  transition: all 0.2s cubic-bezier(", ");\n"])), function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.theme.radius.sm; }, function (props) {
    if (props.isDisabled)
        return sacred_geometry_1.PHI_INVERSE * sacred_geometry_1.PHI_INVERSE; // ~0.38
    if (!props.inCurrentMonth)
        return sacred_geometry_1.PHI_INVERSE; // ~0.618
    return 1;
}, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    var cellSize = sizeStyles.daySize * sacred_geometry_1.PHI; // Apply golden ratio
    return "\n      width: ".concat(cellSize, "px;\n      height: ").concat(cellSize, "px;\n      font-size: ").concat(sizeStyles.fontSize, "px;\n    ");
}, function (props) {
    var _a;
    return props.isToday && !props.isSelected && "\n    border: 1px solid ".concat((_a = props.theme.colors.primary[400]) !== null && _a !== void 0 ? _a : 1, ";\n  ");
}, function (props) {
    var _a;
    return props.isSelected && "\n    background-color: ".concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n    color: ").concat(props.theme.colors.text.light, ";\n  ");
}, function (props) {
    var _a;
    return !props.isDisabled && !props.isSelected && "\n    &:hover {\n      background-color: ".concat((_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1, ";\n    }\n  ");
}, function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); });
var DayHeader = (0, styled_components_1.default)(typography_1.Text)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ", ";\n  color: ", ";\n  \n  /* Size based on Fibonacci */\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ", ";\n  color: ", ";\n  \n  /* Size based on Fibonacci */\n  ", "\n"])), function (props) { return props.theme.typography.fontWeight.medium; }, function (props) { return props.theme.colors.text.secondary; }, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    var cellSize = sizeStyles.daySize * sacred_geometry_1.PHI; // Apply golden ratio
    return "\n      width: ".concat(cellSize, "px;\n      height: ").concat(cellSize, "px;\n      font-size: ").concat(sizeStyles.fontSize, "px;\n    ");
});
var MonthYearSelector = (0, styled_components_1.default)(layout_1.Flex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  gap: ", "px;\n"], ["\n  gap: ", "px;\n"])), function (props) { return props.theme.spacing.sm; });
/**
 * DatePicker Component with ref forwarding
 *
 * Creates a date input with dropdown calendar using sacred geometry principles
 */
exports.DatePicker = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, onChange = _a.onChange, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.dateFormat, dateFormat = _b === void 0 ? 'MM/dd/yyyy' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? 'Select a date' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.isInvalid, isInvalid = _h === void 0 ? false : _h, _j = _a.isValidating, isValidating = _j === void 0 ? false : _j, _k = _a.useSacredGeometry, useSacredGeometry = _k === void 0 ? true : _k, rest = __rest(_a, ["id", "name", "value", "defaultValue", "onChange", "minDate", "maxDate", "dateFormat", "size", "placeholder", "disabled", "readOnly", "required", "isInvalid", "isValidating", "useSacredGeometry"]);
    // State for calendar visibility
    var _l = (0, react_1.useState)(false), isOpen = _l[0], setIsOpen = _l[1];
    // State for current month and year displayed in calendar
    var _m = (0, react_1.useState)(value ? value.getMonth() : defaultValue ? defaultValue.getMonth() : new Date().getMonth()), currentMonth = _m[0], setCurrentMonth = _m[1];
    var _o = (0, react_1.useState)(value ? value.getFullYear() : defaultValue ? defaultValue.getFullYear() : new Date().getFullYear()), currentYear = _o[0], setCurrentYear = _o[1];
    // State for input value
    var _p = (0, react_1.useState)(value ? formatDate(value, dateFormat) :
        defaultValue ? formatDate(defaultValue, dateFormat) : ''), inputValue = _p[0], setInputValue = _p[1];
    // State for selected date
    var _q = (0, react_1.useState)(value || defaultValue || null), selectedDate = _q[0], setSelectedDate = _q[1];
    // References
    var inputRef = (0, react_1.useRef)(null);
    var calendarRef = (0, react_1.useRef)(null);
    // Update input value when value prop changes
    (0, react_1.useEffect)(function () {
        if (value) {
            setSelectedDate(value);
            setInputValue(formatDate(value, dateFormat));
            setCurrentMonth(value.getMonth());
            setCurrentYear(value.getFullYear());
        }
    }, [value, dateFormat]);
    // Close calendar when clicking outside
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (calendarRef.current &&
                !calendarRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    // Handle date selection
    var handleSelectDate = function (date) {
        setSelectedDate(date);
        setInputValue(formatDate(date, dateFormat));
        setIsOpen(false);
        if (onChange) {
            onChange(date);
        }
        // Focus back on input after selection
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    // Handle manual input change
    var handleInputChange = function (e) {
        var newValue = e.target.value;
        setInputValue(newValue);
        // Try to parse the input as a date
        var parsedDate = parseDate(newValue, dateFormat);
        if (parsedDate) {
            setSelectedDate(parsedDate);
            setCurrentMonth(parsedDate.getMonth());
            setCurrentYear(parsedDate.getFullYear());
            if (onChange) {
                onChange(parsedDate);
            }
        }
        else {
            setSelectedDate(null);
        }
    };
    // Toggle calendar on input focus
    var handleInputFocus = function () {
        if (!disabled && !readOnly) {
            setIsOpen(true);
        }
    };
    // Navigate to previous month
    var goToPreviousMonth = function () {
        setCurrentMonth(function (prevMonth) {
            if (prevMonth === 0) {
                setCurrentYear(function (prevYear) { return prevYear - 1; });
                return 11;
            }
            return prevMonth - 1;
        });
    };
    // Navigate to next month
    var goToNextMonth = function () {
        setCurrentMonth(function (prevMonth) {
            if (prevMonth === 11) {
                setCurrentYear(function (prevYear) { return prevYear + 1; });
                return 0;
            }
            return prevMonth + 1;
        });
    };
    // Render the days of the week headers
    var renderDaysOfWeek = function () {
        var dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        return dayNames.map(function (day, index) { return (<DayHeader key={index} componentSize={size}>
          {day}
        </DayHeader>); });
    };
    // Render the calendar days
    var renderDays = function () {
        var daysInMonth = getDaysInMonth(currentYear, currentMonth);
        var firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
        // Get days from previous month to fill the first week
        var daysFromPrevMonth = firstDayOfMonth;
        var prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        var prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        var daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
        // Get days for next month to fill the last week
        var totalDaysToShow = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7;
        var daysFromNextMonth = totalDaysToShow - daysInMonth - daysFromPrevMonth;
        var days = [];
        var _loop_1 = function (i) {
            var date = new Date(prevMonthYear, prevMonth, i);
            var isDisabled = ((minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) ||
                (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))));
            days.push(<DayCell key={"prev-".concat(i)} componentSize={size} inCurrentMonth={false} isDisabled={isDisabled} onClick={function () { return !isDisabled && handleSelectDate(date); }}>
            {i}
          </DayCell>);
        };
        // Add days from previous month
        for (var i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
            _loop_1(i);
        }
        // Add days from current month
        var today = new Date();
        var isToday = function (date) {
            return date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();
        };
        var isSelected = function (date) {
            return selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();
        };
        var _loop_2 = function (i) {
            var date = new Date(currentYear, currentMonth, i);
            var disabled_1 = ((minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) ||
                (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))));
            days.push(<DayCell key={i} componentSize={size} inCurrentMonth={true} isToday={isToday(date)} isSelected={isSelected(date)} isDisabled={disabled_1} onClick={function () { return !disabled_1 && handleSelectDate(date); }}>
            {i}
          </DayCell>);
        };
        for (var i = 1; i <= daysInMonth; i++) {
            _loop_2(i);
        }
        // Add days from next month
        var nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        var nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        var _loop_3 = function (i) {
            var date = new Date(nextMonthYear, nextMonth, i);
            var isDisabled = ((minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) ||
                (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))));
            days.push(<DayCell key={"next-".concat(i)} componentSize={size} inCurrentMonth={false} isDisabled={isDisabled} onClick={function () { return !isDisabled && handleSelectDate(date); }}>
            {i}
          </DayCell>);
        };
        for (var i = 1; i <= daysFromNextMonth; i++) {
            _loop_3(i);
        }
        return days;
    };
    // Get month name by index
    var getMonthName = function (month) {
        var _a;
        var monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return (_a = monthNames[month]) !== null && _a !== void 0 ? _a : 1;
    };
    // Combine the ref with the internal ref
    var combinedRef = (0, react_1.useMemo)(function () {
        return function (node) {
            inputRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        };
    }, [ref]);
    return (<layout_1.Box position="relative">
        <Input_1.Input id={id} name={name} value={inputValue} placeholder={placeholder} disabled={disabled} readOnly={readOnly} required={required} isInvalid={isInvalid} isValidating={isValidating} size={size} onChange={handleInputChange} onFocus={handleInputFocus} ref={combinedRef} {...rest}/>
        
        {isOpen && !disabled && !readOnly && (<animation_1.FadeIn isVisible={isOpen} duration={0.2}>
            <CalendarContainer ref={calendarRef} componentSize={size}>
              <CalendarHeader>
                <button_1.Button variant="text" size="sm" onClick={goToPreviousMonth} aria-label="Previous month">
                  &lt;
                </button_1.Button>
                
                <MonthYearSelector>
                  <typography_1.Text>{getMonthName(currentMonth)}</typography_1.Text>
                  <typography_1.Text>{currentYear}</typography_1.Text>
                </MonthYearSelector>
                
                <button_1.Button variant="text" size="sm" onClick={goToNextMonth} aria-label="Next month">
                  &gt;
                </button_1.Button>
              </CalendarHeader>
              
              <CalendarGrid componentSize={size}>
                {renderDaysOfWeek()}
                {renderDays()}
              </CalendarGrid>
            </CalendarContainer>
          </animation_1.FadeIn>)}
      </layout_1.Box>);
});
exports.DatePicker.displayName = 'DatePicker';
exports.default = exports.DatePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
