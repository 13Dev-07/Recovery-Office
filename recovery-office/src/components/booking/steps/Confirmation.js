"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var botanical_1 = require("../../../design-system/botanical");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
/**
 * Container for the confirmation component
 * Uses sacred spacing for margins
 */
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px 0;\n  position: relative;\n"], ["\n  width: 100%;\n  padding: ", "px 0;\n  position: relative;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Title for the confirmation section
 * Uses golden ratio for line height
 */
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  text-align: center;\n"], ["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  text-align: center;\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.dark; });
/**
 * Description for the confirmation section
 * Uses PHI for line height and margins
 */
var SectionDescription = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.main; });
/**
 * Background botanical element
 * Uses sacred positioning
 */
var BackgroundBotanical = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.05;\n  z-index: -1;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.05;\n  z-index: -1;\n  pointer-events: none;\n"])));
/**
 * Card containing the summary information
 * Uses golden rectangle proportions
 */
var SummaryCard = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n  max-width: 600px;\n  margin: 0 auto ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  border: 1px solid ", ";\n  max-width: 600px;\n  margin: 0 auto ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n"])), function (props) { return props.theme.colors.background.light; }, sacred_geometry_1.SACRED_RADIUS.md, sacred_geometry_1.SACRED_SPACING.lg, function (props) { return props.theme.colors.border.light; }, sacred_geometry_1.SACRED_SPACING.xl, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7));
/**
 * Section within the summary card
 * Uses Fibonacci spacing
 */
var SummarySection = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.lg);
/**
 * Section title
 * Uses PHI for typography and spacing
 */
var SummarySectionTitle = styled_components_1.default.h3(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 1.125rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n  border-bottom: 1px solid ", ";\n  padding-bottom: ", "px;\n"], ["\n  font-size: 1.125rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n  border-bottom: 1px solid ", ";\n  padding-bottom: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.theme.colors.text.dark; }, sacred_geometry_1.PHI, function (props) { return props.theme.colors.border.light; }, sacred_geometry_1.SACRED_SPACING.xs);
/**
 * Data row in the summary
 * Uses Fibonacci for spacing
 */
var SummaryRow = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xs);
/**
 * Label in a summary row
 * Uses golden ratio for width proportion
 */
var SummaryLabel = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: ", "%;\n  font-weight: 500;\n  color: ", ";\n  padding-right: ", "px;\n"], ["\n  width: ", "%;\n  font-weight: 500;\n  color: ", ";\n  padding-right: ", "px;\n"])), 100 * sacred_geometry_1.PHI_INVERSE, function (props) { return props.theme.colors.text.main; }, sacred_geometry_1.SACRED_SPACING.sm);
/**
 * Value in a summary row
 * Complement to the label width
 */
var SummaryValue = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: ", "%;\n  color: ", ";\n"], ["\n  width: ", "%;\n  color: ", ";\n"])), 100 * (1 - sacred_geometry_1.PHI_INVERSE), function (props) { return props.theme.colors.text.dark; });
/**
 * Info box with additional instructions
 * Uses Fibonacci and sacred spacing
 */
var InfoBox = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", "; // 20% opacity\n  border-radius: ", "px;\n  padding: ", "px;\n  margin-bottom: ", "px;\n  border-left: ", "px solid ", ";\n"], ["\n  background-color: ", "; // 20% opacity\n  border-radius: ", "px;\n  padding: ", "px;\n  margin-bottom: ", "px;\n  border-left: ", "px solid ", ";\n"])), function (props) { return "".concat(props.theme.colors.accent.light, "33"); }, sacred_geometry_1.SACRED_RADIUS.sm, sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), function (props) { return props.theme.colors.accent.main; });
/**
 * Info box title
 * Uses golden ratio for typography
 */
var InfoBoxTitle = styled_components_1.default.h4(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-size: 1rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n"], ["\n  font-size: 1rem;\n  margin-bottom: ", "px;\n  color: ", ";\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xs, function (props) { return props.theme.colors.accent.dark; }, sacred_geometry_1.PHI);
/**
 * Info box text
 * Uses PHI for line height
 */
var InfoBoxText = styled_components_1.default.p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: 0.875rem;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.PHI, function (props) { return props.theme.colors.text.main; });
/**
 * Confirmation component
 * Shows booking summary and confirmation details
 * Implements sacred geometry principles throughout
 */
var Confirmation = function (_a) {
    var bookingSummary = _a.bookingSummary;
    return (<Container>
      <BackgroundBotanical>
        <botanical_1.FlowerOfLife size={600} color="currentColor"/>
      </BackgroundBotanical>
      
      <SectionTitle>Review Your Booking</SectionTitle>
      <SectionDescription>
        Please review your booking details below. When you're ready, click the Submit button to confirm your consultation.
      </SectionDescription>
      
      <SummaryCard>
        <SummarySection>
          <SummarySectionTitle>Service Details</SummarySectionTitle>
          <SummaryRow>
            <SummaryLabel>Service:</SummaryLabel>
            <SummaryValue>{bookingSummary.serviceName}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Description:</SummaryLabel>
            <SummaryValue>{bookingSummary.serviceDescription}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Date & Time:</SummaryLabel>
            <SummaryValue>{bookingSummary.dateTime}</SummaryValue>
          </SummaryRow>
        </SummarySection>
        
        <SummarySection>
          <SummarySectionTitle>Personal Information</SummarySectionTitle>
          <SummaryRow>
            <SummaryLabel>Name:</SummaryLabel>
            <SummaryValue>{"".concat(bookingSummary.firstName, " ").concat(bookingSummary.lastName)}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Email:</SummaryLabel>
            <SummaryValue>{bookingSummary.email}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Phone:</SummaryLabel>
            <SummaryValue>{bookingSummary.phone}</SummaryValue>
          </SummaryRow>
          
          {bookingSummary.message && (<SummaryRow>
              <SummaryLabel>Additional Info:</SummaryLabel>
              <SummaryValue>{bookingSummary.message}</SummaryValue>
            </SummaryRow>)}
        </SummarySection>
      </SummaryCard>
      
      <InfoBox>
        <InfoBoxTitle>What Happens Next?</InfoBoxTitle>
        <InfoBoxText>
          After submitting your booking, you'll receive a confirmation email with all the details.
          One of our financial recovery experts will also contact you 24 hours before your
          consultation to confirm your appointment and answer any preliminary questions.
        </InfoBoxText>
      </InfoBox>
    </Container>);
};
exports.default = Confirmation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
