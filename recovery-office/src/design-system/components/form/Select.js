"use strict";
// TODO: This file contains direct document access without SSR checks
/**
 * Select Component
 *
 * A dropdown selection component that implements sacred geometry principles
 * for proportions, spacing, and visual harmony.
 *
 * The Select component creates a harmonious user interface element
 * using Golden Ratio and Fibonacci-based measurements.
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
exports.Select = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Size-specific styles
var getSizeStyles = function (size, theme) {
    switch (size) {
        case 'sm':
            return {
                fontSize: theme.typography.fontSize.sm,
                padding: "".concat(theme.spacing.xxs, "px ").concat(theme.spacing.xs, "px"),
                height: 8 * sacred_geometry_1.PHI * 3, // ~38.8px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.xs,
                iconSize: theme.typography.fontSize.base,
                arrowSize: 8,
            };
        case 'lg':
            return {
                fontSize: theme.typography.fontSize.md,
                padding: "".concat(theme.spacing.xs, "px ").concat(theme.spacing.sm, "px"),
                height: 13 * sacred_geometry_1.PHI * 3, // ~63px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.md,
                iconSize: theme.typography.fontSize.lg,
                arrowSize: 13,
            };
        case 'md':
        default:
            return {
                fontSize: theme.typography.fontSize.base,
                padding: "".concat(theme.spacing.xxs, "px ").concat(theme.spacing.sm, "px"),
                height: 8 * sacred_geometry_1.PHI * 4, // ~51.8px (based on Fibonacci and Golden Ratio)
                borderRadius: theme.radius.sm,
                iconSize: theme.typography.fontSize.md,
                arrowSize: 10,
            };
    }
};
// Styled select container with sacred geometry proportions
var SelectContainer = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s cubic-bezier(", ");\n  cursor: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s cubic-bezier(", ");\n  cursor: ", ";\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* States */\n  background-color: ", ";\n  border: 1px solid ", ";\n  \n  /* Focus state with golden ratio-based glow */\n  ", "\n  \n  /* Disabled state */\n  ", "\n  \n  /* Invalid state */\n  ", "\n  \n  /* Validating state */\n  ", "\n"])), function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; }, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    return "\n      height: ".concat(sizeStyles.height, "px;\n      border-radius: ").concat(sizeStyles.borderRadius, "px;\n    ");
}, function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) {
    var _a, _b;
    if (props.isInvalid)
        return props.theme.colors.feedback.error.main;
    if (props.hasFocus)
        return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1;
    if (props.isValidating)
        return props.theme.colors.feedback.info.main;
    return (_b = props.theme.colors.background[300]) !== null && _b !== void 0 ? _b : 1;
}, function (props) {
    var _a;
    return props.hasFocus && !props.isDisabled && "\n    box-shadow: 0 0 0 ".concat(sacred_geometry_1.PHI_INVERSE * 5, "px ").concat(props.isInvalid
        ? props.theme.colors.feedback.error.light + '40' // 40 = 25% opacity in hex
        : (_a = props.theme.colors.primary[200]) !== null && _a !== void 0 ? _a : 1 + '40', ";        // 40 = 25% opacity in hex\n  ");
}, function (props) {
    var _a;
    return props.isDisabled && "\n    opacity: ".concat(sacred_geometry_1.PHI_INVERSE, ";\n    cursor: not-allowed;\n    background-color: ").concat((_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1, ";\n  ");
}, function (props) { return props.isInvalid && "\n    border-color: ".concat(props.theme.colors.feedback.error.main, ";\n  "); }, function (props) { return props.isValidating && "\n    border-color: ".concat(props.theme.colors.feedback.info.main, ";\n  "); });
// Styled select element (hidden native select for accessibility)
var StyledSelect = styled_components_1.default.select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: ", ";\n  z-index: 1;\n"], ["\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  cursor: ", ";\n  z-index: 1;\n"])), function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; });
// Custom select display
var SelectDisplay = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding-right: ", "px; // Space for arrow\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder style */\n  color: ", ";\n  \n  /* Placeholder with golden ratio opacity */\n  opacity: ", ";\n  \n  /* Prevent text overflow */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding-right: ", "px; // Space for arrow\n  \n  /* Size-specific styles */\n  ", "\n  \n  /* Placeholder style */\n  color: ", ";\n  \n  /* Placeholder with golden ratio opacity */\n  opacity: ", ";\n  \n  /* Prevent text overflow */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), function (props) { return props.theme.spacing.xl; }, function (props) {
    var sizeStyles = getSizeStyles(props.componentSize || 'md', props.theme);
    return "\n      font-size: ".concat(sizeStyles.fontSize, "px;\n      padding-left: ").concat(sizeStyles.padding.split(' ')[1], ";\n    ");
}, function (props) { return props.hasValue
    ? props.theme.colors.text.primary
    : props.theme.colors.text.tertiary; }, function (props) { return props.hasValue ? 1 : sacred_geometry_1.PHI_INVERSE; });
// Arrow icon with sacred proportions
var SelectArrow = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%) ", ";\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(", ");\n  \n  /* Arrow shape using golden ratio proportions */\n  &::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: ", "px solid transparent;\n    border-right: ", "px solid transparent;\n    border-top: ", "px solid ", ";\n  }\n"], ["\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%) ", ";\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(", ");\n  \n  /* Arrow shape using golden ratio proportions */\n  &::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: ", "px solid transparent;\n    border-right: ", "px solid transparent;\n    border-top: ", "px solid ", ";\n  }\n"])), function (props) { return props.theme.spacing.sm; }, function (props) { return props.isOpen ? 'rotate(180deg)' : 'rotate(0)'; }, function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).arrowSize / 2; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).arrowSize / 2; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).arrowSize * sacred_geometry_1.PHI_INVERSE; }, function (props) { return props.theme.colors.text.secondary; });
// Custom dropdown with sacred geometry proportions
var SelectDropdown = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  box-shadow: ", ";\n  z-index: 10;\n  max-height: ", "px;\n  overflow-y: auto;\n  display: ", ";\n  \n  /* Use golden ratio for dropdown animation */\n  transform-origin: top center;\n  animation: ", " 0.3s cubic-bezier(", ");\n  \n  @keyframes selectDropdownOpen {\n    from {\n      opacity: 0;\n      transform: scaleY(0.618) translateY(-10px); /* Use PHI_INVERSE for natural scale */\n    }\n    to {\n      opacity: 1;\n      transform: scaleY(1) translateY(0);\n    }\n  }\n"], ["\n  position: absolute;\n  top: calc(100% + 5px);\n  left: 0;\n  width: 100%;\n  background-color: ", ";\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  box-shadow: ", ";\n  z-index: 10;\n  max-height: ", "px;\n  overflow-y: auto;\n  display: ", ";\n  \n  /* Use golden ratio for dropdown animation */\n  transform-origin: top center;\n  animation: ", " 0.3s cubic-bezier(", ");\n  \n  @keyframes selectDropdownOpen {\n    from {\n      opacity: 0;\n      transform: scaleY(0.618) translateY(-10px); /* Use PHI_INVERSE for natural scale */\n    }\n    to {\n      opacity: 1;\n      transform: scaleY(1) translateY(0);\n    }\n  }\n"])), function (props) { var _a; return (_a = props.theme.colors.background[50]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).borderRadius; }, function (props) { var _a; return (_a = props.theme.colors.background[300]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.shadows.md; }, function (props) { return getSizeStyles(props.componentSize || 'md', props.theme).height * 5; }, function (props) { return props.isOpen ? 'block' : 'none'; }, function (props) { return props.isOpen ? 'selectDropdownOpen' : 'none'; }, function (props) { return sacred_geometry_1.SACRED_EASINGS.standard.join(', '); });
// Option item in dropdown
var SelectOption = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", ";\n  cursor: ", ";\n  background-color: ", ";\n  color: ", ";\n  \n  opacity: ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding: ", ";\n  cursor: ", ";\n  background-color: ", ";\n  color: ", ";\n  \n  opacity: ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
    var padding = getSizeStyles(props.componentSize || 'md', props.theme).padding;
    return padding;
}, function (props) { return props.isDisabled ? 'not-allowed' : 'pointer'; }, function (props) { var _a; return props.isSelected ? (_a = props.theme.colors.primary[100]) !== null && _a !== void 0 ? _a : 1 : 'transparent'; }, function (props) {
    var _a;
    if (props.isDisabled)
        return props.theme.colors.text.disabled;
    if (props.isSelected)
        return (_a = props.theme.colors.primary[700]) !== null && _a !== void 0 ? _a : 1;
    return props.theme.colors.text.primary;
}, function (props) { return props.isDisabled ? sacred_geometry_1.PHI_INVERSE : 1; }, function (props) {
    var _a, _b;
    if (props.isDisabled)
        return 'transparent';
    if (props.isSelected)
        return (_a = props.theme.colors.primary[200]) !== null && _a !== void 0 ? _a : 1;
    return (_b = props.theme.colors.background[100]) !== null && _b !== void 0 ? _b : 1;
});
// Optgroup in dropdown
var SelectOptGroup = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: ", ";\n  font-weight: ", ";\n  color: ", ";\n  background-color: ", ";\n  position: sticky;\n  top: 0;\n  z-index: 1;\n"], ["\n  padding: ", ";\n  font-weight: ", ";\n  color: ", ";\n  background-color: ", ";\n  position: sticky;\n  top: 0;\n  z-index: 1;\n"])), function (props) {
    var padding = getSizeStyles(props.componentSize || 'md', props.theme).padding;
    return padding;
}, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.colors.text.secondary; }, function (props) { var _a; return (_a = props.theme.colors.background[100]) !== null && _a !== void 0 ? _a : 1; });
/**
 * Select Component with ref forwarding
 *
 * Creates a select dropdown with sacred geometry proportions
 */
exports.Select = React.forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select an option' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.required, required = _d === void 0 ? false : _d, _e = _a.isInvalid, isInvalid = _e === void 0 ? false : _e, _f = _a.isValidating, isValidating = _f === void 0 ? false : _f, _g = _a.size, size = _g === void 0 ? 'md' : _g, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, _h = _a.options, options = _h === void 0 ? [] : _h, _j = _a.isClearable, isClearable = _j === void 0 ? false : _j, _k = _a.isSearchable, isSearchable = _k === void 0 ? false : _k, _l = _a.useSacredDropdown, useSacredDropdown = _l === void 0 ? true : _l, rest = __rest(_a, ["id", "name", "value", "defaultValue", "placeholder", "disabled", "required", "isInvalid", "isValidating", "size", "onChange", "onFocus", "onBlur", "options", "isClearable", "isSearchable", "useSacredDropdown"]);
    // Internal select ref
    var internalRef = (0, react_1.useRef)(null);
    // State for focus and dropdown
    var _m = (0, react_1.useState)(false), hasFocus = _m[0], setHasFocus = _m[1];
    var _o = (0, react_1.useState)(false), isOpen = _o[0], setIsOpen = _o[1];
    var _p = (0, react_1.useState)(value || defaultValue), selectedValue = _p[0], setSelectedValue = _p[1];
    var dropdownRef = (0, react_1.useRef)(null);
    // Combine the internal ref with the forwarded ref
    var combinedRef = function (node) {
        internalRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    // Update internal state when value prop changes
    (0, react_1.useEffect)(function () {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);
    // Get the label of the selected option
    var getSelectedLabel = function () {
        var selectedOption = options.find(function (opt) { return opt.value === selectedValue; });
        return selectedOption ? selectedOption.label : placeholder;
    };
    // Handle native select change
    var handleSelectChange = function (e) {
        var newValue = e.target.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(e);
        }
    };
    // Handle focus events
    var handleFocus = function (e) {
        setHasFocus(true);
        if (useSacredDropdown) {
            setIsOpen(true);
        }
        if (onFocus)
            onFocus(e);
    };
    // Handle blur events
    var handleBlur = function (e) {
        // Don't blur immediately if using custom dropdown
        if (!useSacredDropdown) {
            setHasFocus(false);
        }
        if (onBlur)
            onBlur(e);
    };
    // Handle custom option click
    var handleCustomOptionClick = function (optionValue, isDisabled) {
        if (isDisabled === void 0) { isDisabled = false; }
        if (isDisabled)
            return;
        setSelectedValue(optionValue);
        setIsOpen(false);
        setHasFocus(false);
        // Update the native select for form submission
        if (internalRef.current) {
            internalRef.current.value = String(optionValue);
            // Create and dispatch a change event
            var event_1 = new Event('change', { bubbles: true });
            internalRef.current.dispatchEvent(event_1);
            // Call the onChange handler if provided
            if (onChange) {
                // We need to create a synthetic React event
                var syntheticEvent = {
                    target: internalRef.current,
                    currentTarget: internalRef.current,
                    type: 'change',
                    bubbles: true,
                    cancelable: true,
                    defaultPrevented: false,
                    timeStamp: Date.now(),
                    preventDefault: function () { },
                    stopPropagation: function () { },
                    nativeEvent: event_1
                };
                onChange(syntheticEvent);
            }
        }
    };
    // Handle outside clicks to close dropdown
    (0, react_1.useEffect)(function () {
        if (!useSacredDropdown)
            return;
        var handleOutsideClick = function (e) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                internalRef.current &&
                !internalRef.current.contains(e.target)) {
                setIsOpen(false);
                setHasFocus(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return function () {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, useSacredDropdown]);
    // Group options by group
    var groupedOptions = (0, react_1.useMemo)(function () {
        var groups = { default: [] };
        options.forEach(function (option) {
            var _a, _b, _c;
            var group = option.group || 'default';
            if ((_a = !groups[group]) !== null && _a !== void 0 ? _a : 1) {
                (_b = groups[group]) !== null && _b !== void 0 ? _b : 1;
                [];
            }
            (_c = groups[group]) !== null && _c !== void 0 ? _c : 1.;
            push(option);
        });
        return groups;
    }, [options]);
    return (<SelectContainer isDisabled={disabled} isInvalid={isInvalid} isValidating={isValidating} hasFocus={hasFocus} hasValue={!!selectedValue} componentSize={size} onClick={function () {
            if (!disabled && useSacredDropdown) {
                setIsOpen(!isOpen);
                if (!hasFocus) {
                    setHasFocus(true);
                }
            }
        }}>
        {/* Hidden native select for accessibility and form submission */}
        <StyledSelect id={id} name={name} ref={combinedRef} value={selectedValue} defaultValue={defaultValue} disabled={disabled} required={required} aria-invalid={isInvalid} onChange={handleSelectChange} onFocus={handleFocus} onBlur={handleBlur} componentSize={size} {...rest}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(function (option) { return (<option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>); })}
        </StyledSelect>
        
        {/* Custom select display */}
        <SelectDisplay componentSize={size} hasValue={!!selectedValue}>
          {getSelectedLabel()}
          
          {/* Dropdown arrow */}
          <SelectArrow componentSize={size} isOpen={isOpen}/>
        </SelectDisplay>
        
        {/* Custom dropdown */}
        {useSacredDropdown && (<SelectDropdown ref={dropdownRef} isOpen={isOpen} componentSize={size}>
            {/* Default "placeholder" option */}
            <SelectOption componentSize={size} isSelected={!selectedValue} onClick={function () { return handleCustomOptionClick(''); }}>
              {placeholder}
            </SelectOption>
            
            {/* Render options by group */}
            {Object.entries(groupedOptions).map(function (_a) {
                var groupName = _a[0], groupOptions = _a[1];
                return (groupName !== 'default' ? (<React.Fragment key={groupName}>
                  <SelectOptGroup componentSize={size}>
                    {groupName}
                  </SelectOptGroup>
                  {groupOptions.map(function (option) { return (<SelectOption key={option.value} componentSize={size} isSelected={selectedValue === option.value} isDisabled={option.disabled} onClick={function () { return handleCustomOptionClick(option.value, option.disabled); }}>
                      {option.label}
                    </SelectOption>); })}
                </React.Fragment>) : (groupOptions.map(function (option) { return (<SelectOption key={option.value} componentSize={size} isSelected={selectedValue === option.value} isDisabled={option.disabled} onClick={function () { return handleCustomOptionClick(option.value, option.disabled); }}>
                    {option.label}
                  </SelectOption>); })));
            })}
          </SelectDropdown>)}
      </SelectContainer>);
});
exports.Select.displayName = 'Select';
exports.default = exports.Select;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
