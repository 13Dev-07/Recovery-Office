"use strict";
/**
 * BookingExample
 *
 * This example showcases the booking system components and their usage.
 * The booking system follows sacred geometry principles throughout its design.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var BookingInterface_1 = require("../design-system/components/booking/BookingInterface");
var Text_1 = require("../design-system/components/typography/Text");
var Section_1 = require("../design-system/components/layout/Section");
var BotanicalElement_1 = require("../design-system/components/botanical/BotanicalElement");
var theme_1 = require("../design-system/theme");
var Card_1 = require("../design-system/components/data-display/Card");
/**
 * BookingExample component that demonstrates the booking system
 */
var BookingExample = function () {
    var handleBookingComplete = function (bookingData) {
        console.log('Booking completed:', bookingData);
        // In a real application, this would submit the booking to a backend API
    };
    return (<Container>
      <Section_1.Section variant="light" fullWidth={false} hasPadding={true} textAlign="center" botanicalPosition="top-right" botanicalElement={<BotanicalElement_1.BotanicalElement type="oliveBranch" size="large" color={theme_1.theme.colors.primary.light} rotation={45}/>}>
        <HeaderContainer>
          <Text_1.Text as="h1" variant="h3">Book Your Recovery Session</Text_1.Text>
          <Text_1.Text variant="body1" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
            Our booking system is designed with sacred geometry principles that guide you through 
            a harmonious and intuitive booking experience.
          </Text_1.Text>
        </HeaderContainer>

        <ExplanationContainer>
          <Card_1.Card elevated>
            <ComponentList>
              <ComponentItem>
                <ComponentName variant="h6">BookingInterface</ComponentName>
                <ComponentDescription variant="body2">
                  The main container component that manages the multi-step workflow and state.
                  Uses sacred geometry for layout spacing and animations.
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">ProgressIndicator</ComponentName>
                <ComponentDescription variant="body2">
                  Shows the current step in the booking process with Fibonacci-based spacing
                  and golden ratio proportions.
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">Booking Steps</ComponentName>
                <ComponentDescription variant="body2">
                  1. ServiceSelection: Choose your recovery service
                  2. DateSelection: Pick date and time with calendar (mobile-optimized)
                  3. CustomerInfo: Enter your personal details
                  4. BookingSummary: Review your booking
                  5. BookingConfirmation: Success confirmation with next steps
                </ComponentDescription>
              </ComponentItem>
              
              <ComponentItem>
                <ComponentName variant="h6">Validation System</ComponentName>
                <ComponentDescription variant="body2">
                  Type-safe Zod schemas ensure all booking information is validated properly
                  at each step, with appropriate error messages.
                </ComponentDescription>
              </ComponentItem>
            </ComponentList>
          </Card_1.Card>
        </ExplanationContainer>

        <DemoContainer>
          <BookingInterface_1.BookingInterface onComplete={handleBookingComplete} withBotanical={true}/>
        </DemoContainer>

        <AdditionalNotes>
          <Text_1.Text as="h3" variant="h5">Implementation Notes</Text_1.Text>
          <Text_1.Text variant="body2">
            The booking system is built with a focus on sacred geometry, using the golden ratio (PHI = 1.618...)
            and Fibonacci sequence for all spacing, sizing, and animations. All form fields and buttons
            follow these principles to create a harmonious user experience.
          </Text_1.Text>
          <Text_1.Text variant="body2" style={{ marginTop: "".concat(getFibonacciByIndex(6), "px") }}>
            The state management uses React Context with a reducer pattern for type-safe updates.
            The MobileCalendarModal provides a responsive experience on smaller screens.
          </Text_1.Text>
        </AdditionalNotes>
      </Section_1.Section>
    </Container>);
};
// Styled components with sacred geometry principles
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: ", "px; // 21px\n"], ["\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: ", "px; // 21px\n"])), getFibonacciByIndex(8));
var HeaderContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 34px\n"], ["\n  margin-bottom: ", "px; // 34px\n"])), getFibonacciByIndex(9));
var ExplanationContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 21px\n  max-width: ", "px; // ~754px\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  margin-bottom: ", "px; // 21px\n  max-width: ", "px; // ~754px\n  margin-left: auto;\n  margin-right: auto;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(13) * 2);
var ComponentList = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"])), getFibonacciByIndex(7));
var ComponentItem = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding-bottom: ", "px; // 8px\n  \n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  padding-bottom: ", "px; // 8px\n  \n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"])), getFibonacciByIndex(6), (_a = theme_1.theme.colors.gray[200]) !== null && _a !== void 0 ? _a : 1);
var ComponentName = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 3px\n  color: ", ";\n"], ["\n  margin-bottom: ", "px; // 3px\n  color: ", ";\n"])), getFibonacciByIndex(4), theme_1.theme.colors.primary.main);
var ComponentDescription = (0, styled_components_1.default)(Text_1.Text)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), theme_1.theme.colors.text.secondary);
var DemoContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px; // 34px\n  border-radius: ", "px; // 8px\n  background-color: ", ";\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.08);\n  padding: ", "px; // 13px\n"], ["\n  margin-bottom: ", "px; // 34px\n  border-radius: ", "px; // 8px\n  background-color: ", ";\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.08);\n  padding: ", "px; // 13px\n"])), getFibonacciByIndex(9), getFibonacciByIndex(6), theme_1.theme.colors.background.paper, getFibonacciByIndex(5), getFibonacciByIndex(8), getFibonacciByIndex(7));
var AdditionalNotes = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-width: ", "px; // ~565px\n  margin: 0 auto;\n  text-align: left;\n  padding: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  border-left: ", "px solid ", "; // 2px\n  \n  h3 {\n    margin-bottom: ", "px; // 8px\n    color: ", ";\n  }\n"], ["\n  max-width: ", "px; // ~565px\n  margin: 0 auto;\n  text-align: left;\n  padding: ", "px; // 21px\n  background-color: ", ";\n  border-radius: ", "px; // 8px\n  border-left: ", "px solid ", "; // 2px\n  \n  h3 {\n    margin-bottom: ", "px; // 8px\n    color: ", ";\n  }\n"])), getFibonacciByIndex(13) * 1.5, getFibonacciByIndex(8), (_b = theme_1.theme.colors.gray[50]) !== null && _b !== void 0 ? _b : 1, getFibonacciByIndex(6), getFibonacciByIndex(3), theme_1.theme.colors.primary.light, getFibonacciByIndex(6), theme_1.theme.colors.primary.dark);
exports.default = BookingExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
