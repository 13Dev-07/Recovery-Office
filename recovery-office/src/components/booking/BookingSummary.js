"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var date_fns_1 = require("date-fns");
var BookingContext_1 = require("@context/BookingContext");
// Styled components following sacred geometry principles
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n"], ["\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n"])), getFibonacciByIndex(13), getFibonacciByIndex(8), function (props) { return props.theme.colors.background.paper; }, getFibonacciByIndex(5), getFibonacciByIndex(4), getFibonacciByIndex(6));
var Section = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  padding-bottom: ", "px;\n  border-bottom: 1px solid ", ";\n  \n  &:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n  }\n"], ["\n  margin-bottom: ", "px;\n  padding-bottom: ", "px;\n  border-bottom: 1px solid ", ";\n  \n  &:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n  }\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7), function (props) { return props.theme.colors.divider; });
var SectionTitle = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin: 0 0 ", "px 0;\n  color: ", ";\n  font-weight: 600;\n"], ["\n  font-size: ", "px;\n  margin: 0 0 ", "px 0;\n  color: ", ";\n  font-weight: 600;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(6), function (props) { return props.theme.colors.text.primary; });
var ContentRow = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", "px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), getFibonacciByIndex(5));
var Label = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 500;\n  color: ", ";\n  flex: 0 0 38.2%; /* Based on inverse PHI ratio (1 - 1/PHI) */\n"], ["\n  font-weight: 500;\n  color: ", ";\n  flex: 0 0 38.2%; /* Based on inverse PHI ratio (1 - 1/PHI) */\n"])), function (props) { return props.theme.colors.text.secondary; });
var Value = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 0 0 61.8%; /* Based on PHI ratio (1/PHI) */\n  text-align: right;\n  color: ", ";\n"], ["\n  flex: 0 0 61.8%; /* Based on PHI ratio (1/PHI) */\n  text-align: right;\n  color: ", ";\n"])), function (props) { return props.theme.colors.text.primary; });
var ServiceItem = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding: ", "px 0;\n  border-bottom: 1px dashed ", ";\n  \n  &:last-child {\n    border-bottom: none;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding: ", "px 0;\n  border-bottom: 1px dashed ", ";\n  \n  &:last-child {\n    border-bottom: none;\n  }\n"])), getFibonacciByIndex(5), function (props) { return props.theme.colors.divider; });
var ServiceName = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-weight: 500;\n"], ["\n  font-weight: 500;\n"])));
var ServicePrice = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-weight: 600;\n"], ["\n  font-weight: 600;\n"])));
var TotalRow = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: ", "px;\n  margin-top: ", "px;\n  border-top: 2px solid ", ";\n  font-size: ", "px;\n  font-weight: 700;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding-top: ", "px;\n  margin-top: ", "px;\n  border-top: 2px solid ", ";\n  font-size: ", "px;\n  font-weight: 700;\n"])), getFibonacciByIndex(6), getFibonacciByIndex(6), function (props) { return props.theme.colors.primary[500]; }, getFibonacciByIndex(6));
var ConfirmationMessage = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  text-align: center;\n  margin: ", "px 0;\n  padding: ", "px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  font-weight: 600;\n"], ["\n  text-align: center;\n  margin: ", "px 0;\n  padding: ", "px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", "px;\n  font-size: ", "px;\n  font-weight: 600;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7), function (props) { return props.theme.colors.success.light; }, function (props) { return props.theme.colors.success.dark; }, getFibonacciByIndex(5), getFibonacciByIndex(6));
var BookingSummary = function () {
    var _a = (0, BookingContext_1.useBooking)(), selectedServices = _a.selectedServices, selectedDate = _a.selectedDate, selectedTime = _a.selectedTime, customerInfo = _a.customerInfo, bookingComplete = _a.bookingComplete, bookingReference = _a.bookingReference;
    // Calculate total price of all selected services
    var totalPrice = selectedServices.reduce(function (sum, service) { return sum + service.price; }, 0);
    // Format date for display
    var formattedDate = selectedDate
        ? (0, date_fns_1.format)(selectedDate, 'EEEE, MMMM do, yyyy')
        : 'Not selected';
    if (bookingComplete && bookingReference) {
        return (<Container>
        <ConfirmationMessage>
          Your booking has been confirmed! <br />
          Reference number: {bookingReference}
        </ConfirmationMessage>
        
        <Section>
          <SectionTitle>Services Booked</SectionTitle>
          {selectedServices.map(function (service) { return (<ServiceItem key={service.id}>
              <ServiceName>{service.name}</ServiceName>
              <ServicePrice>${service.price.toFixed(2)}</ServicePrice>
            </ServiceItem>); })}
          <TotalRow>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </TotalRow>
        </Section>
        
        <Section>
          <SectionTitle>Appointment Details</SectionTitle>
          <ContentRow>
            <Label>Date:</Label>
            <Value>{formattedDate}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Time:</Label>
            <Value>{selectedTime || 'Not selected'}</Value>
          </ContentRow>
        </Section>
        
        {customerInfo && (<Section>
            <SectionTitle>Your Information</SectionTitle>
            <ContentRow>
              <Label>Name:</Label>
              <Value>{"".concat(customerInfo.firstName, " ").concat(customerInfo.lastName)}</Value>
            </ContentRow>
            <ContentRow>
              <Label>Email:</Label>
              <Value>{customerInfo.email}</Value>
            </ContentRow>
            <ContentRow>
              <Label>Phone:</Label>
              <Value>{customerInfo.phone}</Value>
            </ContentRow>
            {customerInfo.address && (<ContentRow>
                <Label>Address:</Label>
                <Value>{customerInfo.address}</Value>
              </ContentRow>)}
            {customerInfo.notes && (<ContentRow>
                <Label>Additional Notes:</Label>
                <Value>{customerInfo.notes}</Value>
              </ContentRow>)}
          </Section>)}
      </Container>);
    }
    return (<Container>
      <Section>
        <SectionTitle>Selected Services</SectionTitle>
        {selectedServices.length === 0 ? (<ContentRow>
            <span>No services selected</span>
          </ContentRow>) : (<>
            {selectedServices.map(function (service) { return (<ServiceItem key={service.id}>
                <ServiceName>{service.name}</ServiceName>
                <ServicePrice>${service.price.toFixed(2)}</ServicePrice>
              </ServiceItem>); })}
            <TotalRow>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </TotalRow>
          </>)}
      </Section>
      
      <Section>
        <SectionTitle>Appointment Details</SectionTitle>
        <ContentRow>
          <Label>Date:</Label>
          <Value>{formattedDate}</Value>
        </ContentRow>
        <ContentRow>
          <Label>Time:</Label>
          <Value>{selectedTime || 'Not selected'}</Value>
        </ContentRow>
      </Section>
      
      {customerInfo && (<Section>
          <SectionTitle>Your Information</SectionTitle>
          <ContentRow>
            <Label>Name:</Label>
            <Value>{"".concat(customerInfo.firstName, " ").concat(customerInfo.lastName)}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Email:</Label>
            <Value>{customerInfo.email}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Phone:</Label>
            <Value>{customerInfo.phone}</Value>
          </ContentRow>
          {customerInfo.address && (<ContentRow>
              <Label>Address:</Label>
              <Value>{customerInfo.address}</Value>
            </ContentRow>)}
          {customerInfo.notes && (<ContentRow>
              <Label>Additional Notes:</Label>
              <Value>{customerInfo.notes}</Value>
            </ContentRow>)}
        </Section>)}
    </Container>);
};
exports.default = BookingSummary;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
