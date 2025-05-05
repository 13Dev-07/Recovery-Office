"use strict";
/**
 * ServiceSelection Component
 *
 * First step in the booking process where users select the service they want.
 * Uses sacred geometry principles for layout and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSelection = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var state_1 = require("../state");
var validation_1 = require("../validation");
var Card_1 = require("../../data-display/Card");
var Text_1 = require("../../typography/Text");
var botanical_1 = require("../../botanical");
/**
 * Array of available services
 */
var SERVICES = [
    {
        id: 'initial-consultation',
        title: 'Initial Consultation',
        description: 'A comprehensive assessment to understand your unique needs and create a personalized recovery plan.',
        duration: '60 minutes',
        price: '$120',
        botanicalIcon: <botanical_1.OliveBranch width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7}/>,
        color: 'var(--color-primary-500)'
    },
    {
        id: 'follow-up-session',
        title: 'Follow-Up Session',
        description: 'Continued therapeutic support to help you progress on your recovery journey.',
        duration: '45 minutes',
        price: '$95',
        botanicalIcon: <botanical_1.FlowerOfLife width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7}/>,
        color: 'var(--color-secondary-500)'
    },
    {
        id: 'group-therapy',
        title: 'Group Therapy Session',
        description: 'Connect with others in a supportive group environment guided by our experienced facilitators.',
        duration: '90 minutes',
        price: '$75',
        botanicalIcon: <botanical_1.VesicaPiscis width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7}/>,
        color: 'var(--color-accent-gold)'
    }
];
/**
 * ServiceSelection component for booking step 1
 */
var ServiceSelection = function () {
    var _a = (0, react_1.useContext)(state_1.BookingContext), state = _a.state, dispatch = _a.dispatch;
    var errors = (0, validation_1.getStepErrors)(state, 0);
    // Handle service selection
    var handleSelectService = function (serviceId) {
        dispatch({ type: 'SET_SERVICE', payload: serviceId });
    };
    return (<StepContainer>
      <StepHeader>
        <Text_1.Text as="h3" variant="h5">
          Select a Service
        </Text_1.Text>
        <Text_1.Text variant="body2" style={{ opacity: 0.8 }}>
          Choose the service you'd like to book
        </Text_1.Text>
      </StepHeader>
      
      <ServicesGrid>
        {SERVICES.map(function (service) { return (<ServiceCard key={service.id} onClick={function () { return handleSelectService(service.id); }} $isSelected={state.selectedService === service.id} $color={service.color}>
            <CardHeader>
              <IconContainer>
                {service.botanicalIcon}
              </IconContainer>
              <Title>{service.title}</Title>
            </CardHeader>
            
            <Description>{service.description}</Description>
            
            <Details>
              <DetailItem>
                <DetailLabel>Duration:</DetailLabel>
                <DetailValue>{service.duration}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Price:</DetailLabel>
                <DetailValue>{service.price}</DetailValue>
              </DetailItem>
            </Details>
          </ServiceCard>); })}
      </ServicesGrid>
      
      {errors.selectedService && (<ErrorMessage>{errors.selectedService}</ErrorMessage>)}
    </StepContainer>);
};
exports.ServiceSelection = ServiceSelection;
// Styled components with sacred geometry principles
var StepContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var StepHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"], ["\n  margin-bottom: ", "px; // 21px\n  text-align: center;\n  \n  & > * + * {\n    margin-top: ", "px; // 2px\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(3));
var ServicesGrid = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr)); // Min width ~178px\n  gap: ", "px; // 13px\n  \n  @media (min-width: ", ") {\n    grid-template-columns: repeat(3, 1fr); // 3 columns on desktop\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(", "px, 1fr)); // Min width ~178px\n  gap: ", "px; // 13px\n  \n  @media (min-width: ", ") {\n    grid-template-columns: repeat(3, 1fr); // 3 columns on desktop\n  }\n"])), getFibonacciByIndex(11) * 2, getFibonacciByIndex(7), function (props) { return props.theme.breakpoints.md; });
var ServiceCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px; // 13px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Selected state styling */\n  ", "\n  \n  /* Hover effects */\n  &:hover {\n    transform: translateY(-", "px); // 3px\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n  \n  /* Active effects */\n  &:active {\n    transform: scale(0.98);\n  }\n"], ["\n  padding: ", "px; // 13px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Selected state styling */\n  ", "\n  \n  /* Hover effects */\n  &:hover {\n    transform: translateY(-", "px); // 3px\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n  \n  /* Active effects */\n  &:active {\n    transform: scale(0.98);\n  }\n"])), getFibonacciByIndex(7), PHI_INVERSE, PHI_INVERSE, function (props) { return props.$isSelected && "\n    transform: scale(".concat(PHI_INVERSE * PHI, ");\n    box-shadow: 0 ").concat(getFibonacciByIndex(5), "px ").concat(getFibonacciByIndex(8), "px rgba(0, 0, 0, 0.15);\n    border: 2px solid ").concat(props.$color, ";\n  "); }, getFibonacciByIndex(4), getFibonacciByIndex(6), getFibonacciByIndex(8));
var CardHeader = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var IconContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 5px\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", "px; // 5px\n  color: ", ";\n"])), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; });
var Title = (0, styled_components_1.default)(Text_1.Text).attrs({ as: 'h4', variant: 'h6' })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0;\n  font-weight: 600;\n"], ["\n  margin: 0;\n  font-weight: 600;\n"])));
var Description = (0, styled_components_1.default)(Text_1.Text).attrs({ variant: 'body2' })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 8px\n  opacity: 0.8;\n  flex-grow: 1;\n"], ["\n  margin-bottom: ", "px; // 8px\n  opacity: 0.8;\n  flex-grow: 1;\n"])), getFibonacciByIndex(6));
var Details = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: ", "px; // 5px\n  padding-top: ", "px; // 5px\n  border-top: 1px solid ", ";\n"], ["\n  margin-top: ", "px; // 5px\n  padding-top: ", "px; // 5px\n  border-top: 1px solid ", ";\n"])), getFibonacciByIndex(5), getFibonacciByIndex(5), function (props) { var _a; return (_a = props.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1; });
var DetailItem = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px; // 2px\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px; // 2px\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), getFibonacciByIndex(3));
var DetailLabel = (0, styled_components_1.default)(Text_1.Text).attrs({ variant: 'body2' })(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-weight: 500;\n  color: ", ";\n"], ["\n  font-weight: 500;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.secondary; });
var DetailValue = (0, styled_components_1.default)(Text_1.Text).attrs({ variant: 'body2' })(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-weight: 600;\n  color: ", ";\n"], ["\n  font-weight: 600;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.primary; });
var ErrorMessage = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px; // 5px\n  text-align: center;\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  margin-top: ", "px; // 5px\n  text-align: center;\n"])), function (props) { var _a; return (_a = props.theme.colors.error[500]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.typography.fontSize * PHI_INVERSE; }, getFibonacciByIndex(5));
exports.default = exports.ServiceSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
