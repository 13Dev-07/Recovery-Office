"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var ErrorMessage_1 = require("../../../design-system/components/feedback/ErrorMessage");
/**
 * Container for the client info component
 * Uses sacred spacing for margins
 */
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px 0;\n"], ["\n  width: 100%;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Title for the client info section
 * Uses golden ratio for line height
 */
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.dark; });
/**
 * Description for the client info section
 * Uses PHI for line height and margins
 */
var SectionDescription = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.main; });
/**
 * Form container with grid layout
 * Uses Fibonacci numbers for gaps
 */
var FormGrid = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: ", "px;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: ", "px;\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Form field group
 * Uses sacred spacing for margins
 */
var FormGroup = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  grid-column: ", ";\n  \n  @media (max-width: 768px) {\n    grid-column: span 1;\n  }\n"], ["\n  margin-bottom: ", "px;\n  grid-column: ", ";\n  \n  @media (max-width: 768px) {\n    grid-column: span 1;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.fullWidth ? 'span 2' : 'span 1'; });
/**
 * Form field label
 * Uses golden ratio for spacing and line height
 */
var Label = styled_components_1.default.label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: ", ";\n  line-height: ", ";\n"], ["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: ", ";\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.theme.colors.text.dark; }, sacred_geometry_1.PHI);
/**
 * Required field indicator
 * Uses accent color for visibility
 */
var Required = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: ", "px;\n"], ["\n  color: ", ";\n  margin-left: ", "px;\n"])), function (props) { return props.theme.colors.accent.main; }, sacred_geometry_1.SACRED_SPACING.xxs);
/**
 * Input field
 * Uses sacred spacing and Fibonacci for dimensions
 */
var Input = styled_components_1.default.input(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px;\n  font-size: 1rem;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"], ["\n  width: 100%;\n  padding: ", "px;\n  font-size: 1rem;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  transition: all ", "ms ease-in-out;\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", ";\n  }\n"])), sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.SACRED_RADIUS.sm, function (props) {
    return props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main;
}, function (props) { return props.theme.colors.background.light; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * 10, function (props) {
    return props.hasError ? props.theme.colors.error.main : props.theme.colors.accent.main;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), function (props) {
    return props.hasError
        ? "".concat(props.theme.colors.error.main, "33") // 20% opacity
        : "".concat(props.theme.colors.accent.light, "33");
});
/**
 * Textarea for messages
 * Uses golden ratio for proportions
 */
var Textarea = (0, styled_components_1.default)(Input).attrs({ as: 'textarea' })(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  resize: vertical;\n  min-height: ", "px;\n  line-height: ", ";\n"], ["\n  resize: vertical;\n  min-height: ", "px;\n  line-height: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(9), sacred_geometry_1.PHI);
/**
 * Privacy policy text
 * Uses sacred spacing and golden ratio
 */
var PrivacyText = styled_components_1.default.p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 0.75rem;\n  color: ", ";\n  margin-top: ", "px;\n  line-height: ", ";\n"], ["\n  font-size: 0.75rem;\n  color: ", ";\n  margin-top: ", "px;\n  line-height: ", ";\n"])), function (props) { return props.theme.colors.text.light; }, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.PHI);
/**
 * Privacy policy link
 * Uses accent color for visibility
 */
var PrivacyLink = styled_components_1.default.a(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: none;\n  \n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n  text-decoration: none;\n  \n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) { return props.theme.colors.accent.main; });
/**
 * ClientInfo component
 * Collects client information for booking
 * Implements sacred geometry principles throughout
 */
var ClientInfo = function (_a) {
    var formData = _a.formData, onFieldChange = _a.onFieldChange, errors = _a.errors;
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        onFieldChange(name, value);
    };
    return (<Container>
      <SectionTitle>Your Information</SectionTitle>
      <SectionDescription>
        Please provide your contact details. We'll use this information to confirm your booking and send important updates.
      </SectionDescription>
      
      <FormGrid>
        <FormGroup>
          <Label htmlFor="firstName">
            First Name <Required>*</Required>
          </Label>
          <Input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} hasError={!!errors.firstName} aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} required/>
          {errors.firstName && (<ErrorMessage_1.ErrorMessage id="firstName-error">{errors.firstName}</ErrorMessage_1.ErrorMessage>)}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="lastName">
            Last Name <Required>*</Required>
          </Label>
          <Input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} hasError={!!errors.lastName} aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined} required/>
          {errors.lastName && (<ErrorMessage_1.ErrorMessage id="lastName-error">{errors.lastName}</ErrorMessage_1.ErrorMessage>)}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">
            Email <Required>*</Required>
          </Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} hasError={!!errors.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required/>
          {errors.email && (<ErrorMessage_1.ErrorMessage id="email-error">{errors.email}</ErrorMessage_1.ErrorMessage>)}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="phone">
            Phone <Required>*</Required>
          </Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} hasError={!!errors.phone} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} required/>
          {errors.phone && (<ErrorMessage_1.ErrorMessage id="phone-error">{errors.phone}</ErrorMessage_1.ErrorMessage>)}
        </FormGroup>
        
        <FormGroup fullWidth>
          <Label htmlFor="message">
            Additional Message
          </Label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} hasError={!!errors.message} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}/>
          {errors.message && (<ErrorMessage_1.ErrorMessage id="message-error">{errors.message}</ErrorMessage_1.ErrorMessage>)}
        </FormGroup>
      </FormGrid>
      
      <PrivacyText>
        By submitting this form, you agree to our{' '}
        <PrivacyLink href="/privacy-policy">Privacy Policy</PrivacyLink> and{' '}
        <PrivacyLink href="/terms-of-service">Terms of Service</PrivacyLink>.
      </PrivacyText>
    </Container>);
};
exports.default = ClientInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
