"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var BookingContext_1 = require("../context/BookingContext");
var ServiceSelection_1 = require("../components/booking/ServiceSelection");
var DateTimeSelection_1 = require("../components/booking/DateTimeSelection");
var CustomerInfoForm_1 = require("../components/booking/CustomerInfoForm");
var BookingSummary_1 = require("../components/booking/BookingSummary");
var BookingNavigation_1 = require("../components/booking/BookingNavigation");
var BookingContext_2 = require("../context/BookingContext");
// Styled components with sacred geometry principles
var PageContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px ", "px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px ", "px;\n  background-color: ", ";\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7), function (props) { return props.theme.colors.background.default; });
var BookingContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin: ", "px 0;\n"], ["\n  width: 100%;\n  max-width: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin: ", "px 0;\n"])), getFibonacciByIndex(13) * PHI, function (props) { return props.theme.colors.background.paper; }, getFibonacciByIndex(6), getFibonacciByIndex(5), getFibonacciByIndex(8), getFibonacciByIndex(8));
var Header = styled_components_1.default.header(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  color: ", ";\n"])), getFibonacciByIndex(8), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, function (props) { return props.theme.colors.primary.contrastText; });
var Title = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  text-align: center;\n"], ["\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  text-align: center;\n"])), getFibonacciByIndex(9), getFibonacciByIndex(5));
var Subtitle = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  text-align: center;\n  opacity: 0.9;\n"], ["\n  font-size: ", "px;\n  text-align: center;\n  opacity: 0.9;\n"])), getFibonacciByIndex(6));
var ContentContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", "px;\n"], ["\n  padding: ", "px;\n"])), getFibonacciByIndex(8));
var BookingPage = function () {
    return (<BookingContext_1.BookingProvider>
      <PageContainer>
        <BookingContainer>
          <Header>
            <Title>Book Your Recovery Session</Title>
            <Subtitle>Select services, choose a time, and confirm your appointment</Subtitle>
          </Header>
          
          <ContentContainer>
            <BookingStepContent />
            <BookingNavigation_1.default />
          </ContentContainer>
        </BookingContainer>
      </PageContainer>
    </BookingContext_1.BookingProvider>);
};
// Component to render the appropriate content based on the current step
var BookingStepContent = function () {
    var _a = (0, BookingContext_2.useBooking)(), currentStep = _a.currentStep, bookingComplete = _a.bookingComplete;
    // If booking is complete, only show the summary
    if (bookingComplete) {
        return <BookingSummary_1.default />;
    }
    // Otherwise show the appropriate step
    switch (currentStep) {
        case 0:
            return <ServiceSelection_1.default />;
        case 1:
            return <DateTimeSelection_1.default />;
        case 2:
            return <CustomerInfoForm_1.default />;
        case 3:
            return <BookingSummary_1.default />;
        default:
            return <ServiceSelection_1.default />;
    }
};
exports.default = BookingPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
