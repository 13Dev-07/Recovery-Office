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
exports.CustomerInfoForm = void 0;
var React = require("react");
;
var BookingContext_1 = require("@context/BookingContext");
var zod_1 = require("zod");
var styled_components_1 = require("styled-components");
// Define Zod schema for form validation
var customerInfoSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First name is required'),
    lastName: zod_1.z.string().min(1, 'Last name is required'),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().min(10, 'Phone number must be at least 10 digits'),
    notes: zod_1.z.string().optional(),
});
var FormContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(8));
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  text-align: center;\n"], ["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  text-align: center;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6));
var FormGrid = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr));\n  gap: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr));\n  gap: ", "px;\n"])), getFibonacciByIndex(10), getFibonacciByIndex(5));
var FormGroup = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(5));
var FormLabel = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n  color: ", ";\n"])), getFibonacciByIndex(3), function (props) {
    return props.$hasError ? props.theme.colors.error.main : props.theme.colors.text.primary;
});
var FormInput = styled_components_1.default.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: all ", "ms ease-in-out;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n"], ["\n  width: 100%;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: all ", "ms ease-in-out;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n"])), getFibonacciByIndex(4), function (props) {
    return props.$hasError ? props.theme.colors.error.main : props.theme.colors.border.main;
}, getFibonacciByIndex(3), getFibonacciByIndex(3), function (props) { return props.theme.colors.primary[500]; }, function (props) { return props.theme.colors.primary[500]; });
var TextArea = styled_components_1.default.textarea(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: all ", "ms ease-in-out;\n  min-height: ", "px;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n"], ["\n  width: 100%;\n  padding: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: all ", "ms ease-in-out;\n  min-height: ", "px;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n"])), getFibonacciByIndex(4), function (props) {
    return props.$hasError ? props.theme.colors.error.main : props.theme.colors.border.main;
}, getFibonacciByIndex(3), getFibonacciByIndex(3), getFibonacciByIndex(9), function (props) { return props.theme.colors.primary[500]; }, function (props) { return props.theme.colors.primary[500]; });
var ErrorMessage = styled_components_1.default.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px;\n"])), function (props) { return props.theme.colors.error.main; }, getFibonacciByIndex(4), getFibonacciByIndex(2));
var ButtonContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ", "px;\n"])), getFibonacciByIndex(7));
var Button = styled_components_1.default.button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  \n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  \n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), getFibonacciByIndex(3), getFibonacciByIndex(3), function (props) {
    return props.$isPrimary ? props.theme.colors.primary[500] : 'transparent';
}, function (props) {
    return props.$isPrimary ? 'white' : props.theme.colors.text.primary;
}, function (props) {
    return props.$isPrimary ? 'transparent' : props.theme.colors.border.main;
}, function (props) {
    return props.$isPrimary ? props.theme.colors.primary[600] : props.theme.colors.background.light;
});
var CustomerInfoForm = function () {
    var _a, _b, _c, _d, _e;
    var _f = (0, BookingContext_1.useBookingContext)(), state = _f.state, setClientInfo = _f.setClientInfo, goToPreviousStep = _f.goToPreviousStep, goToNextStep = _f.goToNextStep;
    // Initialize form state from context or with defaults
    var _g = useState({
        firstName: ((_a = state.clientInfo) === null || _a === void 0 ? void 0 : _a.firstName) || '',
        lastName: ((_b = state.clientInfo) === null || _b === void 0 ? void 0 : _b.lastName) || '',
        email: ((_c = state.clientInfo) === null || _c === void 0 ? void 0 : _c.email) || '',
        phone: ((_d = state.clientInfo) === null || _d === void 0 ? void 0 : _d.phone) || '',
        notes: ((_e = state.clientInfo) === null || _e === void 0 ? void 0 : _e.additionalNotes) || '',
    }), formData = _g[0], setFormData = _g[1];
    var _h = useState({}), errors = _h[0], setErrors = _h[1];
    var _j = useState(new Set()), touchedFields = _j[0], setTouchedFields = _j[1];
    var _k = React.useState(false), isValid = _k[0], setIsValid = _k[1];
    // Validate form when data changes
    React.useEffect(function () {
        var result = customerInfoSchema.safeParse(formData);
        if (result.success) {
            setErrors({});
            setIsValid(true);
        }
        else {
            var formattedErrors_1 = {};
            result.error.errors.forEach(function (error) {
                var path = error.path[0];
                formattedErrors_1[path] = error.message;
            });
            setErrors(formattedErrors_1);
            setIsValid(false);
        }
    }, [formData]);
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        // Mark field as touched
        setTouchedFields(function (prev) { return new Set(prev).add(name); });
    };
    var handleBlur = function (e) {
        var name = e.target.name;
        setTouchedFields(function (prev) { return new Set(prev).add(name); });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        // Mark all fields as touched
        var allFields = new Set([
            'firstName', 'lastName', 'email', 'phone', 'notes'
        ]);
        setTouchedFields(allFields);
        // Validate form
        var result = customerInfoSchema.safeParse(formData);
        if (result.success) {
            // Update context with form data
            setClientInfo({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                additionalNotes: formData.notes || '',
            });
            goToNextStep();
        }
    };
    // Check if a field has an error and has been touched
    var hasError = function (field) {
        return touchedFields.has(field) && Boolean(errors[field]);
    };
    // Get error message for a field
    var getErrorMessage = function (field) {
        return hasError(field) ? errors[field] : '';
    };
    return (<FormContainer>
      <SectionTitle>Your Information</SectionTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <FormLabel htmlFor="firstName" $hasError={hasError('firstName')}>
              First Name*
            </FormLabel>
            <FormInput type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} $hasError={hasError('firstName')} aria-invalid={hasError('firstName')} aria-describedby={hasError('firstName') ? 'firstName-error' : undefined}/>
            {hasError('firstName') && (<ErrorMessage id="firstName-error">{getErrorMessage('firstName')}</ErrorMessage>)}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="lastName" $hasError={hasError('lastName')}>
              Last Name*
            </FormLabel>
            <FormInput type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} $hasError={hasError('lastName')} aria-invalid={hasError('lastName')} aria-describedby={hasError('lastName') ? 'lastName-error' : undefined}/>
            {hasError('lastName') && (<ErrorMessage id="lastName-error">{getErrorMessage('lastName')}</ErrorMessage>)}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email" $hasError={hasError('email')}>
              Email*
            </FormLabel>
            <FormInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} $hasError={hasError('email')} aria-invalid={hasError('email')} aria-describedby={hasError('email') ? 'email-error' : undefined}/>
            {hasError('email') && (<ErrorMessage id="email-error">{getErrorMessage('email')}</ErrorMessage>)}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="phone" $hasError={hasError('phone')}>
              Phone*
            </FormLabel>
            <FormInput type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} $hasError={hasError('phone')} aria-invalid={hasError('phone')} aria-describedby={hasError('phone') ? 'phone-error' : undefined}/>
            {hasError('phone') && (<ErrorMessage id="phone-error">{getErrorMessage('phone')}</ErrorMessage>)}
          </FormGroup>
          
          <FormGroup style={{ gridColumn: '1 / -1' }}>
            <FormLabel htmlFor="notes" $hasError={hasError('notes')}>
              Additional Notes
            </FormLabel>
            <TextArea id="notes" name="notes" value={formData.notes || ''} onChange={handleChange} onBlur={handleBlur} $hasError={hasError('notes')} aria-describedby={hasError('notes') ? 'notes-error' : undefined}/>
            {hasError('notes') && (<ErrorMessage id="notes-error">{getErrorMessage('notes')}</ErrorMessage>)}
          </FormGroup>
        </FormGrid>
        
        <ButtonContainer>
          <Button type="button" onClick={goToPreviousStep}>
            Back
          </Button>
          <Button type="submit" $isPrimary disabled={!isValid}>
            Continue
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>);
};
exports.CustomerInfoForm = CustomerInfoForm;
exports.default = exports.CustomerInfoForm;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
