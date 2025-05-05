"use strict";
// TODO: This file contains direct document access without SSR checks
/**
 * TimePicker Component
 *
 * A time selection component that implements sacred geometry principles
 * for visual proportions, harmony and balance.
 *
 * The TimePicker uses the Golden Ratio and Fibonacci numbers to create
 * a harmonious time selection interface with optimal visual balance.
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
exports.TimePicker = void 0;
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
// Helper functions for time manipulation
var formatTime = function (hours, minutes, use24Hour) {
    if (use24Hour === void 0) { use24Hour = false; }
    var formattedHours = use24Hour ?
        hours.toString().padStart(2, '0') :
        (hours % 12 || 12).toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    var period = use24Hour ? '' : (hours >= 12 ? ' PM' : ' AM');
    return "".concat(formattedHours, ":").concat(formattedMinutes).concat(period);
};
var parseTime = function (timeString, use24Hour) {
    var _a, _b, _c;
    if (use24Hour === void 0) { use24Hour = false; }
    if (!timeString)
        return null;
    // Try parsing time in hh:mm format (with optional AM/PM)
    var timeRegex = use24Hour ?
        /^(\d{1,2}):(\d{2})$/ :
        /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i;
    var match = timeString.match(timeRegex);
    if (match) {
        var hours = parseInt((_a = match[1]) !== null && _a !== void 0 ? _a : 1, 10);
        var minutes = parseInt((_b = match[2]) !== null && _b !== void 0 ? _b : 1, 10);
        var period = (_c = match[3]) !== null && _c !== void 0 ? _c : 1 === null || 1 === void 0 ? void 0 : 1..toUpperCase();
        // Handle 12-hour format
        if (!use24Hour && period) {
            if (period === 'PM' && hours < 12) {
                hours += 12;
            }
            else if (period === 'AM' && hours === 12) {
                hours = 0;
            }
        }
        // Validate hours and minutes
        if ((use24Hour && (hours >= 0 && hours < 24)) ||
            (!use24Hour && (hours >= 0 && hours < 24)) &&
                (minutes >= 0 && minutes < 60)) {
            return { hours: hours, minutes: minutes };
        }
    }
    return null;
};
// Size-specific styles using sacred geometry
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.sm,
                cellSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), // 8px
                spacing: theme.spacing.xs,
                pickerWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(9) * sacred_geometry_1.PHI, // ~144px
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                cellSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), // 21px
                spacing: theme.spacing.md,
                pickerWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(10) * sacred_geometry_1.PHI, // ~235px
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                cellSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), // 13px
                spacing: theme.spacing.sm,
                pickerWidth: (0, getFibonacciByIndex_1.getFibonacciByIndex)(9), // 34px
            };
    }
};
// Generate hours for selection based on the use24Hour option
var generateHours = function (use24Hour) {
    return Array.from({ length: use24Hour ? 24 : 12 }, function (_, i) { return use24Hour ? i : i + 1; });
};
// Generate minutes for selection based on step
var generateMinutes = function (step) {
    var minutes = [];
    for (var i = 0; i < 60; i += step) {
        minutes.push(i);
    }
    return minutes;
};
// Styled components for the time picker UI
var TimePickerContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 10;\n  margin-top: 8px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  overflow: hidden;\n  width: ", "px;\n  border: 1px solid ", ";\n"], ["\n  position: absolute;\n  z-index: 10;\n  margin-top: 8px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  overflow: hidden;\n  width: ", "px;\n  border: 1px solid ", ";\n"])), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.radius.md; }, function (props) { return props.theme.shadows.md; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).pickerWidth; }, function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var TimePickerGrid = (0, styled_components_1.default)(layout_1.Grid)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: ", "px;\n  padding: ", "px;\n  max-height: ", "px; /* Golden ratio height */\n  overflow-y: auto;\n\n  /* Scrollbar styling */\n  &::-webkit-scrollbar {\n    width: ", "px; /* 3px */\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: ", ";\n    border-radius: ", "px;\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: ", "px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: ", "px;\n  padding: ", "px;\n  max-height: ", "px; /* Golden ratio height */\n  overflow-y: auto;\n\n  /* Scrollbar styling */\n  &::-webkit-scrollbar {\n    width: ", "px; /* 3px */\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: ", ";\n    border-radius: ", "px;\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: ", "px;\n  }\n"])), function (props) { return props.columns || 4; }, function (props) { return props.theme.spacing.xs; }, function (props) { return props.theme.spacing.sm; }, function (props) { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(9) * sacred_geometry_1.PHI; }, function (props) { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(4); }, function (props) { var _a; return (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.radius.sm; }, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.radius.sm; });
var TimePickerHeader = (0, styled_components_1.default)(layout_1.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px;\n  border-bottom: 1px solid ", ";\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: ", "px;\n  border-bottom: 1px solid ", ";\n  justify-content: space-between;\n  align-items: center;\n"])), function (props) { return props.theme.spacing.sm; }, function (props) { var _a; return (_a = props.theme.colors.background[200]) !== null && _a !== void 0 ? _a : 1; });
var TimeCell = (0, styled_components_1.default)(layout_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: ", "px;\n  \n  /* Size based on Fibonacci */\n  ", "\n  \n  /* States */\n  ", "\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  transition: all 0.2s cubic-bezier(", ");\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: ", "px;\n  \n  /* Size based on Fibonacci */\n  ", "\n  \n  /* States */\n  ", "\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  transition: all 0.2s cubic-bezier(", ");\n"])), function (props) { return props.theme.radius.sm; }, function (props) {
    var sizeStyles = getSizeStyles(props.size || 'md', props.theme);
    var cellSize = sizeStyles.cellSize * sacred_geometry_1.PHI; // Apply golden ratio
    return "\n      width: ".concat(cellSize, "px;\n      height: ").concat(cellSize, "px;\n      font-size: ").concat(sizeStyles.fontSize, "px;\n    ");
}, function (props) {
    var _a;
    return props.isSelected && "\n    background-color: ".concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n    color: ").concat(props.theme.colors.text.light, ";\n  ");
}, function (props) { var _a, _b; return !props.isSelected ? (_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1 : (_b = props.theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1; }, function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); });
var PeriodSelector = (0, styled_components_1.default)(layout_1.Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: ", "px;\n  padding: ", "px ", "px;\n  \n  /* States */\n  ", "\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  transition: all 0.2s cubic-bezier(", ");\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: ", "px;\n  padding: ", "px ", "px;\n  \n  /* States */\n  ", "\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  transition: all 0.2s cubic-bezier(", ");\n"])), function (props) { return props.theme.radius.sm; }, function (props) { return props.theme.spacing.xs; }, function (props) { return props.theme.spacing.sm; }, function (props) {
    var _a;
    return props.isSelected && "\n    background-color: ".concat((_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1, ";\n    color: ").concat(props.theme.colors.text.light, ";\n  ");
}, function (props) { var _a, _b; return !props.isSelected ? (_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1 : (_b = props.theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1; }, function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); });
/**
 * TimePicker Component with ref forwarding
 *
 * Creates a time input with dropdown time picker using sacred geometry principles
 */
exports.TimePicker = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, onChange = _a.onChange, _b = _a.use24Hour, use24Hour = _b === void 0 ? false : _b, _c = _a.step, step = _c === void 0 ? 5 : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.placeholder, placeholder = _e === void 0 ? 'Select a time' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.readOnly, readOnly = _g === void 0 ? false : _g, _h = _a.required, required = _h === void 0 ? false : _h, _j = _a.isInvalid, isInvalid = _j === void 0 ? false : _j, _k = _a.isValidating, isValidating = _k === void 0 ? false : _k, _l = _a.useGoldenRatioGrid, useGoldenRatioGrid = _l === void 0 ? true : _l, rest = __rest(_a, ["id", "name", "value", "defaultValue", "onChange", "use24Hour", "step", "size", "placeholder", "disabled", "readOnly", "required", "isInvalid", "isValidating", "useGoldenRatioGrid"]);
    // State for time picker visibility
    var _m = (0, react_1.useState)(false), isOpen = _m[0], setIsOpen = _m[1];
    // State for selected time (hours and minutes)
    var _o = (0, react_1.useState)(null), selectedHours = _o[0], setSelectedHours = _o[1];
    var _p = (0, react_1.useState)(null), selectedMinutes = _p[0], setSelectedMinutes = _p[1];
    // State for input value
    var _q = (0, react_1.useState)(value || defaultValue || ''), inputValue = _q[0], setInputValue = _q[1];
    // References
    var inputRef = (0, react_1.useRef)(null);
    var pickerRef = (0, react_1.useRef)(null);
    // Parse initial time value
    var parseInitialTime = function () {
        if (value) {
            var parsedTime = parseTime(value, use24Hour);
            if (parsedTime) {
                return parsedTime;
            }
        }
        if (defaultValue) {
            var parsedTime = parseTime(defaultValue, use24Hour);
            if (parsedTime) {
                return parsedTime;
            }
        }
        // Default to current time
        var now = new Date();
        var currentHours = now.getHours();
        var currentMinutes = now.getMinutes();
        // Round minutes to nearest step
        var roundedMinutes = Math.round(currentMinutes / step) * step;
        return {
            hours: currentHours,
            minutes: roundedMinutes >= 60 ? 0 : roundedMinutes
        };
    };
    // Initialize selected time
    (0, react_1.useEffect)(function () {
        var initialTime = parseInitialTime();
        setSelectedHours(initialTime.hours);
        setSelectedMinutes(initialTime.minutes);
    }, []);
    // Update input value when value prop changes
    (0, react_1.useEffect)(function () {
        if (value) {
            setInputValue(value);
            var parsedTime = parseTime(value, use24Hour);
            if (parsedTime) {
                setSelectedHours(parsedTime.hours);
                setSelectedMinutes(parsedTime.minutes);
            }
        }
    }, [value, use24Hour]);
    // Close time picker when clicking outside
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (pickerRef.current &&
                !pickerRef.current.contains(event.target) &&
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
    // Handle time selection
    var handleSelectTime = function (hours, minutes) {
        setSelectedHours(hours);
        setSelectedMinutes(minutes);
        var formattedTime = formatTime(hours, minutes, use24Hour);
        setInputValue(formattedTime);
        if (onChange) {
            onChange(formattedTime);
        }
        setIsOpen(false);
    };
    // Handle hour selection
    var handleSelectHour = function (hour) {
        setSelectedHours(hour);
        if (selectedMinutes !== null) {
            applyTimeSelection();
        }
    };
    // Handle minute selection
    var handleSelectMinute = function (minute) {
        setSelectedMinutes(minute);
        if (selectedHours !== null) {
            applyTimeSelection();
        }
    };
    // Handle AM/PM selection
    var handleSelectPeriod = function (isPM) {
        if (selectedHours !== null) {
            var newHours = isPM ?
                (selectedHours % 12) + 12 :
                selectedHours % 12;
            setSelectedHours(newHours);
            applyTimeSelection();
        }
    };
    // Handle input change
    var handleInputChange = function (e) {
        var newValue = e.target.value;
        setInputValue(newValue);
        var parsedTime = parseTime(newValue, use24Hour);
        if (parsedTime) {
            setSelectedHours(parsedTime.hours);
            setSelectedMinutes(parsedTime.minutes);
            if (onChange) {
                onChange(newValue);
            }
        }
        else if (newValue === '') {
            setSelectedHours(null);
            setSelectedMinutes(null);
            if (onChange) {
                onChange(null);
            }
        }
    };
    // Toggle time picker on input focus
    var handleInputFocus = function () {
        if (!disabled && !readOnly) {
            setIsOpen(true);
            // If no time is selected, set default to current time
            if (selectedHours === null || selectedMinutes === null) {
                var initialTime = parseInitialTime();
                setSelectedHours(initialTime.hours);
                setSelectedMinutes(initialTime.minutes);
            }
        }
    };
    // Apply the current hour and minute selection
    var applyTimeSelection = function () {
        if (selectedHours !== null && selectedMinutes !== null) {
            var formattedTime = formatTime(selectedHours, selectedMinutes, use24Hour);
            setInputValue(formattedTime);
            if (onChange) {
                onChange(formattedTime);
            }
        }
    };
    // Render hour selection grid
    var renderHours = function () {
        var hours = generateHours(use24Hour);
        return hours.map(function (hour) {
            var displayHour = use24Hour ?
                hour.toString().padStart(2, '0') :
                hour.toString();
            var isSelected = selectedHours === (use24Hour ? hour : (hour === 12 ? 0 : hour));
            return (<TimeCell key={hour} size={size} isSelected={isSelected} onClick={function () { return handleSelectHour(use24Hour ? hour : (hour === 12 ? 0 : hour)); }}>
            {displayHour}
          </TimeCell>);
        });
    };
    // Render minute selection grid
    var renderMinutes = function () {
        var minutes = generateMinutes(step);
        return minutes.map(function (minute) {
            var displayMinute = minute.toString().padStart(2, '0');
            var isSelected = selectedMinutes === minute;
            return (<TimeCell key={minute} size={size} isSelected={isSelected} onClick={function () { return handleSelectMinute(minute); }}>
            {displayMinute}
          </TimeCell>);
        });
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
            <TimePickerContainer ref={pickerRef} size={size}>
              <TimePickerHeader>
                <typography_1.Text fontWeight="medium">Select Time</typography_1.Text>
                
                {!use24Hour && (<layout_1.Flex gap={2}>
                    <PeriodSelector isSelected={selectedHours !== null && selectedHours < 12} onClick={function () { return handleSelectPeriod(false); }}>
                      AM
                    </PeriodSelector>
                    <PeriodSelector isSelected={selectedHours !== null && selectedHours >= 12} onClick={function () { return handleSelectPeriod(true); }}>
                      PM
                    </PeriodSelector>
                  </layout_1.Flex>)}
              </TimePickerHeader>
              
              <layout_1.Flex>
                {/* Hours column */}
                <layout_1.Box flex="1">
                  <typography_1.Text textAlign="center" fontSize="sm" mb={1}>Hours</typography_1.Text>
                  <TimePickerGrid size={size} columns={useGoldenRatioGrid ? 3 : 4}>
                    {renderHours()}
                  </TimePickerGrid>
                </layout_1.Box>
                
                {/* Minutes column */}
                <layout_1.Box flex="1">
                  <typography_1.Text textAlign="center" fontSize="sm" mb={1}>Minutes</typography_1.Text>
                  <TimePickerGrid size={size} columns={useGoldenRatioGrid ? 3 : 4}>
                    {renderMinutes()}
                  </TimePickerGrid>
                </layout_1.Box>
              </layout_1.Flex>
              
              <layout_1.Flex justifyContent="flex-end" p={2}>
                <button_1.Button variant="text" size="sm" onClick={function () { return setIsOpen(false); }}>
                  Done
                </button_1.Button>
              </layout_1.Flex>
            </TimePickerContainer>
          </animation_1.FadeIn>)}
      </layout_1.Box>);
});
exports.TimePicker.displayName = 'TimePicker';
exports.default = exports.TimePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
