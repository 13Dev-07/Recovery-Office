"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
var BookingContext_1 = require("@context/BookingContext");
/**
 * Container for the service selection component
 * Uses sacred spacing for margins
 */
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px 0;\n"], ["\n  width: 100%;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Title for the service selection section
 * Uses golden ratio for line height
 */
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: 1.5rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.PHI, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.dark;
});
/**
 * Description for the service selection section
 * Uses PHI for line height and margin calculations
 */
var SectionDescription = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xl, sacred_geometry_1.PHI, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.main;
});
/**
 * Grid container for service cards
 * Uses Fibonacci for gap between items
 */
var ServicesGrid = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: ", "px;\n  width: 100%;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: ", "px;\n  width: 100%;\n"])), sacred_geometry_1.SACRED_SPACING.md);
/**
 * Service card component
 * Uses golden rectangle proportions and Fibonacci spacing
 */
var ServiceCard = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  /* Golden rectangle proportion */\n  min-height: calc(250px / ", ");\n  position: relative;\n  overflow: hidden;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n    border-color: ", ";\n  }\n  \n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    transition: all ", "ms ease-in-out;\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  /* Golden rectangle proportion */\n  min-height: calc(250px / ", ");\n  position: relative;\n  overflow: hidden;\n  \n  &:hover {\n    transform: translateY(-", "px);\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.05);\n    border-color: ", ";\n  }\n  \n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    transition: all ", "ms ease-in-out;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_RADIUS.sm, function (_a) {
    var theme = _a.theme, isSelected = _a.isSelected;
    return isSelected ? theme.colors.accent.light : theme.colors.background.light;
}, function (_a) {
    var theme = _a.theme, isSelected = _a.isSelected;
    return isSelected ? theme.colors.accent.main : theme.colors.border.light;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10, sacred_geometry_1.PHI, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), function (_a) {
    var theme = _a.theme, isSelected = _a.isSelected;
    return isSelected ? theme.colors.accent.main : theme.colors.border.main;
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), function (_a) {
    var theme = _a.theme, isSelected = _a.isSelected;
    return isSelected ? theme.colors.accent.main : 'transparent';
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * 10);
/**
 * Service title component
 * Uses PHI-based spacing and line height
 */
var ServiceTitle = styled_components_1.default.h3(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 1.25rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: 1.25rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.PHI, function (_a) {
    var theme = _a.theme, isSelected = _a.isSelected;
    return isSelected ? theme.colors.accent.dark : theme.colors.text.dark;
});
/**
 * Service description component
 * Uses Fibonacci for margin and PHI for line height
 */
var ServiceDescription = styled_components_1.default.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  /* Keep at golden ratio of total height */\n  height: ", "%;\n"], ["\n  font-size: 0.875rem;\n  margin-bottom: ", "px;\n  line-height: ", ";\n  color: ", ";\n  /* Keep at golden ratio of total height */\n  height: ", "%;\n"])), sacred_geometry_1.SACRED_SPACING.sm, sacred_geometry_1.PHI, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.main;
}, 100 * sacred_geometry_1.PHI_INVERSE);
/**
 * Service duration badge
 * Uses Fibonacci for dimensions and spacing
 */
var ServiceDuration = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-block;\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  font-size: 0.75rem;\n  font-weight: 500;\n"], ["\n  display: inline-block;\n  padding: ", "px ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  font-size: 0.75rem;\n  font-weight: 500;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), function (_a) {
    var theme = _a.theme;
    return theme.colors.background.medium;
}, sacred_geometry_1.SACRED_RADIUS.xs);
/**
 * ServiceSelection component
 * Allows users to select a service from available options
 * Uses sacred geometry principles throughout for harmonious design
 */
var ServiceSelection = function () {
    var _a = (0, BookingContext_1.useBooking)(), availableServices = _a.availableServices, selectedService = _a.selectedService, selectService = _a.selectService, isResourceLoading = _a.isResourceLoading;
    var isLoading = isResourceLoading('services');
    var handleSelectService = function (service) {
        selectService(service);
    };
    if (isLoading) {
        return <div>Loading available services...</div>;
    }
    if (!availableServices || availableServices.length === 0) {
        return <div>No services available. Please try again later.</div>;
    }
    return (<Container>
      <SectionTitle>Select a Service</SectionTitle>
      <SectionDescription>
        Choose the financial recovery service that best fits your needs. Each service includes an initial consultation to assess your specific situation.
      </SectionDescription>
      
      <ServicesGrid>
        {availableServices.map(function (service) {
            var isSelected = (selectedService === null || selectedService === void 0 ? void 0 : selectedService.id) === service.id;
            return (<ServiceCard key={service.id} isSelected={isSelected} onClick={function () { return handleSelectService(service); }} role="button" aria-pressed={isSelected}>
              <ServiceTitle isSelected={isSelected}>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceDuration>{service.duration} minutes</ServiceDuration>
            </ServiceCard>);
        })}
      </ServicesGrid>
    </Container>);
};
exports.default = ServiceSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
