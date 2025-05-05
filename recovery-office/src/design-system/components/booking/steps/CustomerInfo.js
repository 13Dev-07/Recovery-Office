"use strict";
/**
 * CustomerInfo Component
 *
 * Third step in the booking process where users enter their personal details.
 * Uses sacred geometry principles for layout and spacing.
 * Implements form validation with Zod.
 */
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
exports.CustomerInfo = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var zod_1 = require("zod");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("@hookform/resolvers/zod");
var state_1 = require("../state");
var Text_1 = require("../../typography/Text");
var InputField_1 = require("../../form/InputField");
var PhoneInput_1 = require("../../form/PhoneInput");
var TextAreaField_1 = require("../../form/TextAreaField");
var Checkbox_1 = require("../../form/Checkbox");
// Validation schema using Zod
var customerInfoSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    email: zod_1.z.string().email('Please enter a valid email address'),
    phone: zod_1.z.string().min(10, 'Please enter a valid phone number'),
    address: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    acceptTerms: zod_1.z.boolean().refine(function (val) { return val === true; }, {
        message: 'You must accept the terms and conditions'
    })
});
/**
 * CustomerInfo component for booking step 3
 */
var CustomerInfo = function () {
    var _a = (0, react_1.useContext)(state_1.BookingContext), state = _a.state, dispatch = _a.dispatch;
    // Initialize react-hook-form with Zod validation
    var _b = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(customerInfoSchema),
        defaultValues: {
            firstName: state.customerInfo.firstName || '',
            lastName: state.customerInfo.lastName || '',
            email: state.customerInfo.email || '',
            phone: state.customerInfo.phone || '',
            address: state.customerInfo.address || '',
            notes: state.customerInfo.notes || '',
            acceptTerms: state.customerInfo.acceptTerms || false
        }
    }), control = _b.control, handleSubmit = _b.handleSubmit, errors = _b.formState.errors, setValue = _b.setValue, watch = _b.watch;
    // Watch form values and update context when they change
    var formValues = watch();
    (0, react_1.useEffect)(function () {
        dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: __assign(__assign({}, state.customerInfo), formValues)
        });
    }, [formValues, dispatch]);
    // When form data changes, validate the step
    (0, react_1.useEffect)(function () {
        var isStepValid = Object.keys(errors).length === 0 &&
            formValues.firstName &&
            formValues.lastName &&
            formValues.email &&
            formValues.phone &&
            formValues.acceptTerms;
        dispatch({ type: 'SET_STEP_VALID', payload: { step: 2, isValid: isStepValid } });
    }, [errors, formValues, dispatch]);
    return (<StepContainer>
      <StepHeader>
        <Text_1.Text as="h3" variant="h5">
          Your Information
        </Text_1.Text>
        <Text_1.Text variant="body2" style={{ opacity: 0.8 }}>
          Please provide your contact details for your booking
        </Text_1.Text>
      </StepHeader>
      
      <FormContainer>
        <FormRow>
          <FormColumn>
            <react_hook_form_1.Controller name="firstName" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<InputField_1.InputField label="First Name" placeholder="Enter your first name" required error={(_b = errors.firstName) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
          
          <FormColumn>
            <react_hook_form_1.Controller name="lastName" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<InputField_1.InputField label="Last Name" placeholder="Enter your last name" required error={(_b = errors.lastName) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn>
            <react_hook_form_1.Controller name="email" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<InputField_1.InputField label="Email Address" placeholder="yourname@example.com" type="email" required error={(_b = errors.email) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
          
          <FormColumn>
            <react_hook_form_1.Controller name="phone" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<PhoneInput_1.PhoneInput label="Phone Number" placeholder="(000) 000-0000" required error={(_b = errors.phone) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <react_hook_form_1.Controller name="address" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<InputField_1.InputField label="Address (Optional)" placeholder="Enter your address" error={(_b = errors.address) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <react_hook_form_1.Controller name="notes" control={control} render={function (_a) {
            var _b;
            var field = _a.field;
            return (<TextAreaField_1.TextAreaField label="Special Notes or Requests (Optional)" placeholder="Any special requirements or information we should know about..." rows={getFibonacciByIndex(5)} // 5 rows
             error={(_b = errors.notes) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <react_hook_form_1.Controller name="acceptTerms" control={control} render={function (_a) {
            var _b;
            var _c = _a.field, value = _c.value, onChange = _c.onChange, field = __rest(_c, ["value", "onChange"]);
            return (<Checkbox_1.Checkbox label={<>
                      I agree to the{' '}
                      <TermsLink href="/terms" target="_blank">
                        terms and conditions
                      </TermsLink>
                      {' '}and{' '}
                      <TermsLink href="/privacy" target="_blank">
                        privacy policy
                      </TermsLink>
                    </>} checked={value} onChange={onChange} error={(_b = errors.acceptTerms) === null || _b === void 0 ? void 0 : _b.message} {...field}/>);
        }}/>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </StepContainer>);
};
exports.CustomerInfo = CustomerInfo;
// Styled components with sacred geometry principles
var StepContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var StepHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 13px\n  text-align: center;\n"], ["\n  margin-bottom: ", "px; // 13px\n  text-align: center;\n"])), getFibonacciByIndex(7));
var FormContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var FormRow = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px; // 5px\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  gap: ", "px; // 5px\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"])), getFibonacciByIndex(5), function (props) { return props.theme.breakpoints.sm; });
var FormColumn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: ", ";\n  min-width: 0; // Prevent overflow\n  \n  @media (max-width: ", ") {\n    flex: 1;\n  }\n"], ["\n  flex: ", ";\n  min-width: 0; // Prevent overflow\n  \n  @media (max-width: ", ") {\n    flex: 1;\n  }\n"])), function (props) { return props.full ? 1 : 0.5; }, function (props) { return props.theme.breakpoints.sm; });
var TermsLink = styled_components_1.default.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: underline;\n  transition: color 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    color: ", ";\n  }\n  \n  &:focus {\n    outline: 2px solid ", ";\n  }\n"], ["\n  color: ", ";\n  text-decoration: underline;\n  transition: color 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    color: ", ";\n  }\n  \n  &:focus {\n    outline: 2px solid ", ";\n  }\n"])), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, PHI_INVERSE, PHI_INVERSE, function (props) { var _a; return (_a = props.theme.colors.primary[700]) !== null && _a !== void 0 ? _a : 1; }, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
exports.default = exports.CustomerInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
