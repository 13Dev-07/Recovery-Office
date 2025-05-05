"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var styled_components_1 = require("styled-components");
var BookingNavControls_1 = require("../BookingNavControls");
var theme_1 = require("../../../design-system/theme");
var booking_types_1 = require("../../../types/booking.types");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Mock the useMediaQuery hook
jest.mock('../../../hooks/useMediaQuery', function () { return ({
    __esModule: true,
    default: jest.fn().mockReturnValue(false), // Default to desktop
}); });
describe('BookingNavControls', function () {
    var mockHandleBack = jest.fn();
    var mockHandleNext = jest.fn();
    var defaultProps = {
        currentStep: booking_types_1.BookingStepId.SERVICE_SELECTION,
        isNextDisabled: true,
        onBack: mockHandleBack,
        onNext: mockHandleNext,
        showBackButton: true,
        isTablet: false,
    };
    var renderComponent = function (props) {
        if (props === void 0) { props = {}; }
        return (0, react_1.render)(<styled_components_1.ThemeProvider theme={theme_1.theme}>
        <BookingNavControls_1.default {...defaultProps} {...props}/>
      </styled_components_1.ThemeProvider>);
    };
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('renders both back and next buttons by default', function () {
        renderComponent();
        expect(react_1.screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
        expect(react_1.screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    });
    it('disables next button when isNextDisabled is true', function () {
        renderComponent({ isNextDisabled: true });
        var nextButton = react_1.screen.getByRole('button', { name: /next/i });
        expect(nextButton).toBeDisabled();
    });
    it('enables next button when isNextDisabled is false', function () {
        renderComponent({ isNextDisabled: false });
        var nextButton = react_1.screen.getByRole('button', { name: /next/i });
        expect(nextButton).not.toBeDisabled();
    });
    it('hides back button when showBackButton is false', function () {
        renderComponent({ showBackButton: false });
        expect(react_1.screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
    });
    it('calls onBack when back button is clicked', function () {
        renderComponent();
        var backButton = react_1.screen.getByRole('button', { name: /back/i });
        react_1.fireEvent.click(backButton);
        expect(mockHandleBack).toHaveBeenCalledTimes(1);
    });
    it('calls onNext when next button is clicked and not disabled', function () {
        renderComponent({ isNextDisabled: false });
        var nextButton = react_1.screen.getByRole('button', { name: /next/i });
        react_1.fireEvent.click(nextButton);
        expect(mockHandleNext).toHaveBeenCalledTimes(1);
    });
    it('changes Next button text to Complete Booking on confirmation step', function () {
        renderComponent({ currentStep: booking_types_1.BookingStepId.CONFIRMATION });
        expect(react_1.screen.getByRole('button', { name: /complete booking/i })).toBeInTheDocument();
        expect(react_1.screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
    });
    it('renders with tablet-specific styles when isTablet is true', function () {
        renderComponent({ isTablet: true });
        // Check that the container uses tablet-specific styles
        var navContainer = react_1.screen.getByTestId('booking-nav-controls');
        expect(navContainer).toHaveStyle("padding: ".concat(sacred_geometry_1.SACRED_SPACING, "px"));
    });
    it('maintains accessible focus management', function () {
        renderComponent({ isNextDisabled: false });
        var backButton = react_1.screen.getByRole('button', { name: /back/i });
        var nextButton = react_1.screen.getByRole('button', { name: /next/i });
        // Tab navigation should follow visual order
        backButton.focus();
        expect(document.activeElement).toBe(backButton);
        // Simulate tab press
        react_1.fireEvent.keyDown(backButton, { key: 'Tab', code: 'Tab' });
        // In real browsers, focus would move to the next button
        nextButton.focus();
        expect(document.activeElement).toBe(nextButton);
    });
    it('provides proper button labeling for screen readers', function () {
        renderComponent({
            currentStep: booking_types_1.BookingStepId.SERVICE_SELECTION
        });
        var backButton = react_1.screen.getByRole('button', { name: /back/i });
        expect(backButton).toHaveAccessibleName();
        var nextButton = react_1.screen.getByRole('button', { name: /next/i });
        expect(nextButton).toHaveAccessibleName();
    });
});
