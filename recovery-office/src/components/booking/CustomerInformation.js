"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BookingContext_1 = require("@context/BookingContext");
var styled_components_1 = require("styled-components");
var zod_1 = require("zod");
// Styled components using sacred geometry principles
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n"])), getFibonacciByIndex(12));
var Form = styled_components_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"])), getFibonacciByIndex(6));
var FieldGroup = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"])), getFibonacciByIndex(3));
var FieldRow = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr));\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr));\n  gap: ", "px;\n"])), getFibonacciByIndex(10), getFibonacciByIndex(5));
var Label = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n  font-weight: 500;\n"], ["\n  font-size: ", "px;\n  color: ", ";\n  font-weight: 500;\n"])), getFibonacciByIndex(5), function (props) { return props.theme.colors.text.primary; });
var Input = styled_components_1.default.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  font-size: ", "px;\n  transition: all ", "ms ease;\n  width: 100%;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  font-size: ", "px;\n  transition: all ", "ms ease;\n  width: 100%;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(3), function (props) {
    return props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main;
}, getFibonacciByIndex(5), getFibonacciByIndex(5) * 10, function (props) { return props.theme.colors.primary[500]; }, getFibonacciByIndex(2), function (props) { return props.theme.colors.primary[200]; });
var TextArea = styled_components_1.default.textarea(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  font-size: ", "px;\n  min-height: ", "px;\n  resize: vertical;\n  transition: all ", "ms ease;\n  width: 100%;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  font-size: ", "px;\n  min-height: ", "px;\n  resize: vertical;\n  transition: all ", "ms ease;\n  width: 100%;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(3), function (props) {
    return props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main;
}, getFibonacciByIndex(5), getFibonacciByIndex(9), getFibonacciByIndex(5) * 10, function (props) { return props.theme.colors.primary[500]; }, getFibonacciByIndex(2), function (props) { return props.theme.colors.primary[200]; });
var ErrorMessage = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n"])), function (props) { return props.theme.colors.error.main; }, getFibonacciByIndex(4), getFibonacciByIndex(2));
var Checkbox = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  input {\n    margin-top: ", "px;\n  }\n"], ["\n  display: flex;\n  align-items: flex-start;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  input {\n    margin-top: ", "px;\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(4), getFibonacciByIndex(2));
var ActionContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"])), getFibonacciByIndex(7));
var Button = styled_components_1.default.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n    transform: scale(", ");\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    transform: none;\n  }\n"], ["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  transition: all ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n    transform: scale(", ");\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    transform: none;\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), function (props) {
    return props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.background.default;
}, function (props) {
    return props.isPrimary ? 'white' : props.theme.colors.text.primary;
}, function (props) {
    return props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.border.main;
}, getFibonacciByIndex(3), getFibonacciByIndex(5), getFibonacciByIndex(5) * 10, function (props) {
    return props.isPrimary ? props.theme.colors.primary[600] : props.theme.colors.background.light;
}, 1 + (1 / PHI) * 0.02, function (props) { return props.theme.colors.disabled; }, function (props) { return props.theme.colors.disabled; });
// Define validation schema using Zod
var customerSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, "First name must be at least 2 characters"),
    lastName: zod_1.z.string().min(2, "Last name must be at least 2 characters"),
    email: zod_1.z.string().email("Please enter a valid email address"),
    phone: zod_1.z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
    address: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    termsAccepted: zod_1.z.boolean().refine(function (val) { return val === true; }, {
        message: "You must accept the terms and conditions"
    })
});
var CustomerInformation = function () {
    var _a = (0, BookingContext_1.useBooking)(), customerInfo = _a.customerInfo, setCustomerInfo = _a.setCustomerInfo, currentStep = _a.currentStep, setCurrentStep = _a.setCurrentStep, completeBooking = _a.completeBooking;
    // Initialize form state with existing data or defaults
    var _b = useState({
        firstName: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.firstName) || '',
        lastName: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.lastName) || '',
        email: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.email) || '',
        phone: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.phone) || '',
        address: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.address) || '',
        notes: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.notes) || '',
        termsAccepted: (customerInfo === null || customerInfo === void 0 ? void 0 : customerInfo.termsAccepted) || false
    }), formData = _b[0], setFormData = _b[1];
    // State for tracking validation errors
    var _c = useState({}), errors = _c[0], setErrors = _c[1];
    var _d = useState({}), touched = _d[0], setTouched = _d[1];
    // Handle input changes
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, type = _a.type;
        var checked = type === 'checkbox' ? e.target.checked : undefined;
        // Update form data
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = type === 'checkbox' ? checked : value, _a)));
        });
        // Mark field as touched
        setTouched(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = true, _a)));
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = undefined, _a)));
            });
        }
    };
    // Handle blur event for validation
    var handleBlur = function (e) {
        var name = e.target.name;
        // Mark field as touched
        setTouched(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = true, _a)));
        });
        // Validate individual field
        validateField(name);
    };
    // Validate a single field
    var validateField = function (field) {
        var _a, _b;
        try {
            // Create a partial schema for just this field
            var fieldSchema = zod_1.z.object((_a = {}, _a[field] = customerSchema.shape[field], _a));
            fieldSchema.parse((_b = {}, _b[field] = formData[field], _b));
            // Clear error if validation passes
            setErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[field] = undefined, _a)));
            });
            return true;
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                // Set the error message for this field
                var fieldError_1 = error.errors.find(function (e) { return e.path[0] === field; });
                if (fieldError_1) {
                    setErrors(function (prev) {
                        var _a;
                        return (__assign(__assign({}, prev), (_a = {}, _a[field] = fieldError_1.message, _a)));
                    });
                }
            }
            return false;
        }
    };
    // Validate the entire form
    var validateForm = function () {
        try {
            customerSchema.parse(formData);
            setErrors({});
            return true;
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                // Convert Zod errors to our error format
                var newErrors_1 = {};
                error.errors.forEach(function (err) {
                    var field = err.path[0];
                    newErrors_1[field] = err.message;
                });
                setErrors(newErrors_1);
                // Mark all fields with errors as touched
                var newTouched_1 = __assign({}, touched);
                Object.keys(newErrors_1).forEach(function (key) {
                    newTouched_1[key] = true;
                });
                setTouched(newTouched_1);
            }
            return false;
        }
    };
    // Handle form submission
    var handleSubmit = function (e) {
        e.preventDefault();
        if (validateForm()) {
            // Save customer information to context
            setCustomerInfo(__assign({}, formData));
            // Move to next step
            setCurrentStep(currentStep + 1);
        }
    };
    // Handle back button click
    var handleBack = function () {
        setCurrentStep(currentStep - 1);
    };
    // Get validation state for a field
    var getFieldError = function (field) {
        return touched[field] ? errors[field] : undefined;
    };
    return (<Container>
      <h2>Your Information</h2>
      <p>Please fill in your details to complete the booking.</p>
      
      <Form onSubmit={handleSubmit}>
        <FieldRow>
          <FieldGroup>
            <Label htmlFor="firstName">First Name*</Label>
            <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} hasError={!!getFieldError('firstName')}/>
            {getFieldError('firstName') && (<ErrorMessage>{getFieldError('firstName')}</ErrorMessage>)}
          </FieldGroup>
          
          <FieldGroup>
            <Label htmlFor="lastName">Last Name*</Label>
            <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} hasError={!!getFieldError('lastName')}/>
            {getFieldError('lastName') && (<ErrorMessage>{getFieldError('lastName')}</ErrorMessage>)}
          </FieldGroup>
        </FieldRow>
        
        <FieldRow>
          <FieldGroup>
            <Label htmlFor="email">Email*</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} hasError={!!getFieldError('email')}/>
            {getFieldError('email') && (<ErrorMessage>{getFieldError('email')}</ErrorMessage>)}
          </FieldGroup>
          
          <FieldGroup>
            <Label htmlFor="phone">Phone*</Label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} hasError={!!getFieldError('phone')} placeholder="1234567890"/>
            {getFieldError('phone') && (<ErrorMessage>{getFieldError('phone')}</ErrorMessage>)}
          </FieldGroup>
        </FieldRow>
        
        <FieldGroup>
          <Label htmlFor="address">Address (Optional)</Label>
          <Input type="text" id="address" name="address" value={formData.address || ''} onChange={handleChange} onBlur={handleBlur}/>
        </FieldGroup>
        
        <FieldGroup>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <TextArea id="notes" name="notes" value={formData.notes || ''} onChange={handleChange} onBlur={handleBlur}/>
        </FieldGroup>
        
        <Checkbox>
          <input type="checkbox" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}/>
          <Label htmlFor="termsAccepted">
            I agree to the terms and conditions*
            {getFieldError('termsAccepted') && (<ErrorMessage>{getFieldError('termsAccepted')}</ErrorMessage>)}
          </Label>
        </Checkbox>
        
        <ActionContainer>
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" isPrimary>
            Complete Booking
          </Button>
        </ActionContainer>
      </Form>
    </Container>);
};
exports.default = CustomerInformation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
