"use strict";
/**
 * Contact Component
 *
 * A feature section for displaying a contact form and information, following sacred
 * geometry principles for layout and spacing. Includes support for various configurations
 * and botanical accents for visual harmony.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Section_1 = require("../layout/Section");
var Input_1 = require("../form/Input");
var TextArea_1 = require("../form/TextArea");
var Button_1 = require("../button/Button");
var Text_1 = require("../typography/Text");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
// Section container with background styling
var ContactSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"])), function (props) { return props.$backgroundColor || 'transparent'; }, getFibonacciByIndex(8));
// Container for form and contact information in split layout
var SplitContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ", "% ", "%;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n  }\n"])), PHI_INVERSE * 100, (1 - PHI_INVERSE) * 100, getFibonacciByIndex(6), getFibonacciByIndex(7), function (props) { return props.theme.breakpoints.md; });
// Container for stacked layout
var StackedContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: ", "px;\n  \n  & > * + * {\n    margin-top: ", "px;\n  }\n"], ["\n  margin-top: ", "px;\n  \n  & > * + * {\n    margin-top: ", "px;\n  }\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6));
// Form container
var FormContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: rgba(255, 255, 255, 0.03);\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n"], ["\n  padding: ", "px;\n  background-color: rgba(255, 255, 255, 0.03);\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n"])), getFibonacciByIndex(6), getFibonacciByIndex(4), getFibonacciByIndex(2), getFibonacciByIndex(5));
// Contact information container
var ContactInfoContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", "px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  padding: ", "px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), getFibonacciByIndex(5));
// Form styling
var Form = styled_components_1.default.form(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  \n  & > * + * {\n    margin-top: ", "px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  \n  & > * + * {\n    margin-top: ", "px;\n  }\n"])), getFibonacciByIndex(5));
// Field container with proper spacing
var FieldContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(5));
// Field label with sacred typography
var FieldLabel = styled_components_1.default.label(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n"], ["\n  display: block;\n  margin-bottom: ", "px;\n  font-weight: 500;\n"])), getFibonacciByIndex(3));
// Field help text
var FieldHelpText = (0, styled_components_1.default)(Text_1.Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: ", "px;\n  opacity: ", ";\n  font-size: 0.8rem;\n"], ["\n  margin-top: ", "px;\n  opacity: ", ";\n  font-size: 0.8rem;\n"])), getFibonacciByIndex(2), PHI_INVERSE);
// Contact option item
var ContactOptionItem = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(5));
// Contact option icon container
var ContactOptionIcon = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  margin-right: ", "px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  margin-right: ", "px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: ", ";\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), getFibonacciByIndex(4), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; });
// Contact option content
var ContactOptionContent = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
// Contact option label
var ContactOptionLabel = (0, styled_components_1.default)(Text_1.Text)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-weight: 500;\n  margin-bottom: ", "px;\n"], ["\n  font-weight: 500;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(2));
// Contact option value
var ContactOptionValue = (0, styled_components_1.default)(Text_1.Text)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  opacity: ", ";\n"], ["\n  opacity: ", ";\n"])), PHI_INVERSE + 0.2);
// Submit button container
var SubmitContainer = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin-top: ", "px;\n  text-align: right;\n"], ["\n  margin-top: ", "px;\n  text-align: right;\n"])), getFibonacciByIndex(5));
/**
 * Contact component for displaying a contact form and information,
 * following sacred geometry principles for spacing and proportions.
 */
var Contact = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, _b = _a.formFields, formFields = _b === void 0 ? [] : _b, _c = _a.contactOptions, contactOptions = _c === void 0 ? [] : _c, _d = _a.layout, layout = _d === void 0 ? 'split' : _d, _e = _a.formAction, formAction = _e === void 0 ? '#' : _e, _f = _a.submitText, submitText = _f === void 0 ? 'Send Message' : _f, backgroundColor = _a.backgroundColor, _g = _a.animated, animated = _g === void 0 ? true : _g, botanical = _a.botanical, className = _a.className, style = _a.style, onSubmit = _a.onSubmit;
    var handleSubmit = function (event) {
        if (onSubmit) {
            onSubmit(event);
        }
    };
    var renderField = function (field) {
        return (<FieldContainer key={field.name}>
        <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
        
        {field.type === 'textarea' ? (<TextArea_1.TextArea id={field.name} name={field.name} placeholder={field.placeholder} required={field.required}/>) : (<Input_1.Input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} required={field.required}/>)}
        
        {field.helpText && <FieldHelpText>{field.helpText}</FieldHelpText>}
      </FieldContainer>);
    };
    var renderContactInfo = function () {
        if (contactOptions.length === 0)
            return null;
        return (<ContactInfoContainer>
        {contactOptions.map(function (option, index) { return (<ContactOptionItem key={index}>
            <ContactOptionIcon>
              {option.icon}
            </ContactOptionIcon>
            
            <ContactOptionContent>
              <ContactOptionLabel>{option.label}</ContactOptionLabel>
              {option.url ? (<ContactOptionValue as="a" href={option.url}>
                  {option.value}
                </ContactOptionValue>) : (<ContactOptionValue>{option.value}</ContactOptionValue>)}
            </ContactOptionContent>
          </ContactOptionItem>); })}
      </ContactInfoContainer>);
    };
    var renderForm = function () {
        return (<FormContainer>
        <Form action={formAction} method="post" onSubmit={handleSubmit}>
          {formFields.map(renderField)}
          
          <SubmitContainer>
            <Button_1.Button type="submit" variant="primary">
              {submitText}
            </Button_1.Button>
          </SubmitContainer>
        </Form>
      </FormContainer>);
    };
    var renderContent = function () {
        if (layout === 'split') {
            return (<SplitContainer>
          {animated ? (<animation_1.FadeIn>
              {renderForm()}
            </animation_1.FadeIn>) : (renderForm())}
          
          {animated ? (<animation_1.SlideIn direction="right">
              {renderContactInfo()}
            </animation_1.SlideIn>) : (renderContactInfo())}
        </SplitContainer>);
        }
        return (<StackedContainer>
        {animated ? (<animation_1.FadeIn>
            {renderForm()}
          </animation_1.FadeIn>) : (renderForm())}
        
        {animated ? (<animation_1.FadeIn delay={0.3}>
            {renderContactInfo()}
          </animation_1.FadeIn>) : (renderContactInfo())}
      </StackedContainer>);
    };
    return (<ContactSection $backgroundColor={backgroundColor} className={className} style={style}>
      {botanical && (<botanical_1.BotanicalElement type={botanical.type} position={botanical.position} size={botanical.size} opacity={botanical.opacity}/>)}
      
      <Section_1.SectionTitle title={title} subtitle={subtitle} centered animated={animated}/>
      
      {renderContent()}
    </ContactSection>);
};
exports.default = Contact;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
