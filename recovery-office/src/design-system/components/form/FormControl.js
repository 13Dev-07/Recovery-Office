"use strict";
/**
 * FormControl Component
 *
 * A container component for form elements providing label, error message,
 * and helper text with consistent spacing based on sacred geometry principles.
 *
 * The FormControl creates a harmonious layout for form fields using Fibonacci
 * spacing and proper alignment.
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
exports.FormControl = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var tokens_1 = require("../../tokens");
var FormLabel_1 = require("./FormLabel");
var FormError_1 = require("./FormError");
/**
 * Generate size-specific spacing
 */
var getSizeSpacing = function (size) {
    switch (size) {
        case 'sm':
            return {
                labelSpacing: tokens_1.spacing.xxs, // 5px
                helperSpacing: tokens_1.spacing.xxs, // 5px
                errorSpacing: tokens_1.spacing.xxs, // 5px
            };
        case 'lg':
            return {
                labelSpacing: tokens_1.spacing.sm, // 13px
                helperSpacing: tokens_1.spacing.xs, // 8px
                errorSpacing: tokens_1.spacing.xs, // 8px
            };
        case 'md':
        default:
            return {
                labelSpacing: tokens_1.spacing.xs, // 8px
                helperSpacing: tokens_1.spacing.xxs, // 5px
                errorSpacing: tokens_1.spacing.xxs, // 5px
            };
    }
};
// Container for the form control with sacred proportions
var StyledFormControl = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  \n  ", "\n"], ["\n  width: 100%;\n  position: relative;\n  \n  ", "\n"])), function (props) { return props.isDisabled && "\n    opacity: ".concat(PHI_INVERSE, "; // Use golden ratio inverse (0.618) for reduced opacity\n    cursor: not-allowed;\n  "); });
/**
 * FormControl Component with ref forwarding
 *
 * Creates a container for form fields with properly spaced label and error
 */
exports.FormControl = React.forwardRef(function (_a, ref) {
    var idProp = _a.id, _b = _a.isRequired, isRequired = _b === void 0 ? false : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isInvalid, isInvalid = _d === void 0 ? false : _d, _e = _a.isValidating, isValidating = _e === void 0 ? false : _e, label = _a.label, errorMessage = _a.errorMessage, helperText = _a.helperText, _f = _a.size, size = _f === void 0 ? 'md' : _f, children = _a.children, rest = __rest(_a, ["id", "isRequired", "isDisabled", "isInvalid", "isValidating", "label", "errorMessage", "helperText", "size", "children"]);
    // Generate an ID if one isn't provided
    var generatedId = React.useId();
    var id = idProp || generatedId;
    // Get spacing values based on size
    var _g = getSizeSpacing(size), labelSpacing = _g.labelSpacing, helperSpacing = _g.helperSpacing, errorSpacing = _g.errorSpacing;
    // Clone the child element to pass down props
    var childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                id: id,
                isRequired: isRequired,
                isDisabled: isDisabled,
                isInvalid: isInvalid,
                isValidating: isValidating,
                size: size,
            });
        }
        return child;
    });
    return (<StyledFormControl isDisabled={isDisabled} ref={ref} {...rest}>
        {label && (<layout_1.Box mb={labelSpacing} className="recovery-form-label-container">
            {typeof label === 'string' ? (<FormLabel_1.default htmlFor={id} isRequired={isRequired} isDisabled={isDisabled} size={size}>
                {label}
              </FormLabel_1.default>) : (label)}
          </layout_1.Box>)}
        
        {childrenWithProps}
        
        {/* Helper text with sacred spacing */}
        {helperText && !isInvalid && (<layout_1.Box mt={helperSpacing} fontSize="sm" color="text.secondary" opacity={PHI_INVERSE} // Use golden ratio inverse for subtle text
        >
            {helperText}
          </layout_1.Box>)}
        
        {/* Error message with sacred spacing */}
        {isInvalid && errorMessage && (<layout_1.Box mt={errorSpacing}>
            {typeof errorMessage === 'string' ? (<FormError_1.default size={size}>{errorMessage}</FormError_1.default>) : (errorMessage)}
          </layout_1.Box>)}
      </StyledFormControl>);
});
exports.FormControl.displayName = 'FormControl';
exports.default = exports.FormControl;
var templateObject_1;
