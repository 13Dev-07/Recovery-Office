"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
var BookingContext_1 = require("../../../context/BookingContext");
var ThemeProvider_1 = require("../../../design-system/theme/ThemeProvider");
var BookingFlow_1 = require("../BookingFlow");
var ToastContext_1 = require("../../../context/ToastContext");
var booking_service_1 = require("../../../services/booking.service");
// Mock the booking service
jest.mock('../../../services/booking.service', function () { return ({
    BookingService: {
        getAvailableServices: jest.fn(),
        getAvailableDates: jest.fn(),
        getAvailableTimeSlots: jest.fn(),
        submitBooking: jest.fn(),
        createPaymentIntent: jest.fn(),
    },
}); });
describe('Booking Flow Keyboard Accessibility Tests', function () {
    beforeEach(function () {
        jest.clearAllMocks();
        // Default success responses
        booking_service_1.BookingService.getAvailableServices.mockResolvedValue([
            { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
            { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
        ]);
        booking_service_1.BookingService.getAvailableDates.mockResolvedValue([
            '2023-08-15', '2023-08-16', '2023-08-17'
        ]);
        booking_service_1.BookingService.getAvailableTimeSlots.mockResolvedValue([
            { time: '10:00', available: true },
            { time: '11:00', available: true },
            { time: '12:00', available: true },
        ]);
    });
    var renderBookingFlow = function () {
        return (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
        <ToastContext_1.ToastProvider>
          <BookingContext_1.BookingProvider>
            <BookingFlow_1.BookingFlow />
          </BookingContext_1.BookingProvider>
        </ToastContext_1.ToastProvider>
      </ThemeProvider_1.ThemeProvider>);
    };
    describe('Service Selection Step', function () {
        it('should allow keyboard navigation between service options', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOptions, firstOption, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        serviceOptions = react_1.screen.getAllByRole('radio', { name: /massage|acupuncture/i });
                        expect(serviceOptions.length).toBe(2);
                        firstOption = serviceOptions[0];
                        firstOption.focus();
                        expect(document.activeElement).toBe(firstOption);
                        // Move focus with keyboard
                        user_event_1.default.tab();
                        expect(document.activeElement).toBe(serviceOptions[1]);
                        // Select with Space key
                        user_event_1.default.keyboard(' ');
                        expect(serviceOptions[1]).toBeChecked();
                        // Navigate to next button
                        user_event_1.default.tab();
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(document.activeElement).toBe(nextButton);
                        // Activate button with Enter key
                        user_event_1.default.keyboard('{Enter}');
                        // Should navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Should navigate to date selection
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should provide keyboard navigation for mobile service accordion', function () { return __awaiter(void 0, void 0, void 0, function () {
            var accordionButtons, expandedContent, selectButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Set viewport to mobile size
                        Object.defineProperty(window, 'innerWidth', { writable: true, value: 375 });
                        window.dispatchEvent(new Event('resize'));
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/services/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        accordionButtons = react_1.screen.getAllByRole('button', { name: /massage|acupuncture/i });
                        // Focus first accordion button
                        accordionButtons[0].focus();
                        expect(document.activeElement).toBe(accordionButtons[0]);
                        // Activate with Enter key
                        user_event_1.default.keyboard('{Enter}');
                        expandedContent = react_1.screen.getByTestId('service-details-service1');
                        expect(expandedContent).toBeVisible();
                        // Tab to the select button
                        user_event_1.default.tab();
                        selectButton = react_1.screen.getByRole('button', { name: /select this service/i });
                        expect(document.activeElement).toBe(selectButton);
                        // Activate select button
                        user_event_1.default.keyboard('{Enter}');
                        // Service should be selected
                        expect(react_1.screen.getByTestId('service-option-service1')).toHaveAttribute('aria-selected', 'true');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Date Selection Step', function () {
        // Helper to navigate to date selection step
        var navigateToDateSelection = function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        it('should allow keyboard navigation in calendar', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dateButtons, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToDateSelection()];
                    case 1:
                        _a.sent();
                        dateButtons = react_1.screen.getAllByRole('button', { name: /august \d+/i });
                        dateButtons[0].focus();
                        expect(document.activeElement).toBe(dateButtons[0]);
                        // Move with arrow keys
                        user_event_1.default.keyboard('{ArrowRight}');
                        expect(document.activeElement).toBe(dateButtons[1]);
                        user_event_1.default.keyboard('{ArrowDown}');
                        // Should move to a date in the next week
                        expect(document.activeElement).not.toBe(dateButtons[1]);
                        // Select date with Space
                        user_event_1.default.keyboard(' ');
                        expect(document.activeElement).toHaveAttribute('aria-selected', 'true');
                        // Tab to next button
                        user_event_1.default.tab();
                        user_event_1.default.tab(); // May need multiple tabs depending on focus order
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(document.activeElement).toBe(nextButton);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should make month navigation controls accessible via keyboard', function () { return __awaiter(void 0, void 0, void 0, function () {
            var prevMonthButton, nextMonthButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToDateSelection()];
                    case 1:
                        _a.sent();
                        prevMonthButton = react_1.screen.getByRole('button', { name: /previous month/i });
                        nextMonthButton = react_1.screen.getByRole('button', { name: /next month/i });
                        // Check that they're reachable via Tab
                        prevMonthButton.focus();
                        expect(document.activeElement).toBe(prevMonthButton);
                        user_event_1.default.tab();
                        expect(document.activeElement).not.toBe(prevMonthButton);
                        nextMonthButton.focus();
                        expect(document.activeElement).toBe(nextMonthButton);
                        // Activate with Enter key
                        user_event_1.default.keyboard('{Enter}');
                        // Should navigate to next month
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                var monthDisplay = react_1.screen.getByTestId('calendar-month-display');
                                expect(monthDisplay).toHaveTextContent(/september/i);
                            })];
                    case 2:
                        // Should navigate to next month
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Time Slot Selection Step', function () {
        // Helper to navigate to time slot selection
        var navigateToTimeSlotSelection = function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        dateOption = react_1.screen.getByText(/august 15/i);
                        user_event_1.default.click(dateOption);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        it('should allow keyboard navigation between time slots', function () { return __awaiter(void 0, void 0, void 0, function () {
            var timeSlots, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToTimeSlotSelection()];
                    case 1:
                        _a.sent();
                        timeSlots = react_1.screen.getAllByRole('radio', { name: /\d+:\d+/i });
                        expect(timeSlots.length).toBe(3);
                        // First time slot should be focusable
                        timeSlots[0].focus();
                        expect(document.activeElement).toBe(timeSlots[0]);
                        // Tab to next time slot
                        user_event_1.default.tab();
                        expect(document.activeElement).toBe(timeSlots[1]);
                        // Select with Space
                        user_event_1.default.keyboard(' ');
                        expect(timeSlots[1]).toBeChecked();
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        nextButton.focus();
                        expect(document.activeElement).toBe(nextButton);
                        // Activate with Enter
                        user_event_1.default.keyboard('{Enter}');
                        // Should navigate to client info step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Should navigate to client info step
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have proper ARIA attributes for time slot availability', function () { return __awaiter(void 0, void 0, void 0, function () {
            var timeSlots;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Mock some time slots as unavailable
                        booking_service_1.BookingService.getAvailableTimeSlots.mockResolvedValue([
                            { time: '10:00', available: true },
                            { time: '11:00', available: false },
                            { time: '12:00', available: true },
                        ]);
                        return [4 /*yield*/, navigateToTimeSlotSelection()];
                    case 1:
                        _a.sent();
                        timeSlots = react_1.screen.getAllByRole('radio', { name: /\d+:\d+/i });
                        // Available time slots
                        expect(timeSlots[0]).not.toHaveAttribute('aria-disabled', 'true');
                        expect(timeSlots[0]).toHaveAttribute('aria-label', expect.stringMatching(/10:00.*available/i));
                        // Unavailable time slot
                        expect(timeSlots[1]).toHaveAttribute('aria-disabled', 'true');
                        expect(timeSlots[1]).toHaveAttribute('aria-label', expect.stringMatching(/11:00.*unavailable/i));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Client Information Step', function () {
        // Helper to navigate to client info step
        var navigateToClientInfoStep = function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/august 15/i)).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        dateOption = react_1.screen.getByText(/august 15/i);
                        user_event_1.default.click(dateOption);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/10:00/i)).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        timeSlot = react_1.screen.getByText(/10:00/i);
                        user_event_1.default.click(timeSlot);
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        it('should allow keyboard navigation through form fields', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nameInput, emailInput, phoneInput, termsCheckbox, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToClientInfoStep()];
                    case 1:
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        nameInput.focus();
                        expect(document.activeElement).toBe(nameInput);
                        // Fill form using keyboard
                        user_event_1.default.type(nameInput, 'John Doe');
                        // Tab to next field
                        user_event_1.default.tab();
                        emailInput = react_1.screen.getByLabelText(/email/i);
                        expect(document.activeElement).toBe(emailInput);
                        user_event_1.default.type(emailInput, 'john@example.com');
                        // Tab to next field
                        user_event_1.default.tab();
                        phoneInput = react_1.screen.getByLabelText(/phone/i);
                        expect(document.activeElement).toBe(phoneInput);
                        user_event_1.default.type(phoneInput, '555-123-4567');
                        // Tab to checkbox for terms and conditions
                        user_event_1.default.tab();
                        user_event_1.default.tab();
                        termsCheckbox = react_1.screen.getByRole('checkbox', { name: /terms/i });
                        expect(document.activeElement).toBe(termsCheckbox);
                        // Check the box with Space
                        user_event_1.default.keyboard(' ');
                        expect(termsCheckbox).toBeChecked();
                        // Tab to next button
                        user_event_1.default.tab();
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(document.activeElement).toBe(nextButton);
                        // Press Enter to continue
                        user_event_1.default.keyboard('{Enter}');
                        // Should navigate to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Should navigate to confirmation step
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should properly link labels and form fields', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nameLabel, nameInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToClientInfoStep()];
                    case 1:
                        _a.sent();
                        nameLabel = react_1.screen.getByText(/full name/i);
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        expect(nameLabel).toHaveAttribute('for', nameInput.id);
                        // Check that clicking on label focuses input
                        user_event_1.default.click(nameLabel);
                        expect(document.activeElement).toBe(nameInput);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should announce validation errors to screen readers', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nameInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToClientInfoStep()];
                    case 1:
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        nameInput.focus();
                        // Tab away to trigger validation
                        user_event_1.default.tab();
                        // Check that error message is properly associated with input
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                var errorMessage = react_1.screen.getByText(/name is required/i);
                                expect(errorMessage).toBeInTheDocument();
                                expect(errorMessage).toHaveAttribute('id', expect.stringMatching(/error/i));
                                expect(nameInput).toHaveAttribute('aria-describedby', errorMessage.id);
                                expect(nameInput).toHaveAttribute('aria-invalid', 'true');
                            })];
                    case 2:
                        // Check that error message is properly associated with input
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Confirmation Step', function () {
        // Helper to navigate to confirmation step
        var navigateToConfirmationStep = function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nextButton3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Select service
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Select service
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        // Select date
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Select date
                        _a.sent();
                        dateOption = react_1.screen.getByText(/august 15/i);
                        user_event_1.default.click(dateOption);
                        // Select time
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        // Select time
                        _a.sent();
                        timeSlot = react_1.screen.getByText(/10:00/i);
                        user_event_1.default.click(timeSlot);
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        // Fill client info
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Fill client info
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        it('should allow keyboard navigation through payment options', function () { return __awaiter(void 0, void 0, void 0, function () {
            var paymentOptions, cancelCheckbox, confirmButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToConfirmationStep()];
                    case 1:
                        _a.sent();
                        paymentOptions = react_1.screen.getAllByRole('radio', { name: /credit card|pay later/i });
                        expect(paymentOptions.length).toBeGreaterThan(0);
                        // Focus first option
                        paymentOptions[0].focus();
                        expect(document.activeElement).toBe(paymentOptions[0]);
                        // Select with Space
                        user_event_1.default.keyboard(' ');
                        expect(paymentOptions[0]).toBeChecked();
                        // Tab to cancel policy checkbox
                        user_event_1.default.tab();
                        user_event_1.default.tab();
                        user_event_1.default.tab();
                        cancelCheckbox = react_1.screen.getByRole('checkbox', { name: /cancellation policy/i });
                        expect(document.activeElement).toBe(cancelCheckbox);
                        // Check it with Space
                        user_event_1.default.keyboard(' ');
                        expect(cancelCheckbox).toBeChecked();
                        // Tab to confirm button
                        user_event_1.default.tab();
                        confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                        expect(document.activeElement).toBe(confirmButton);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should make booking summary accessible via keyboard', function () { return __awaiter(void 0, void 0, void 0, function () {
            var summary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToConfirmationStep()];
                    case 1:
                        _a.sent();
                        summary = react_1.screen.getByTestId('booking-summary');
                        expect(summary).toHaveAttribute('tabIndex', '0');
                        // Should be focusable
                        summary.focus();
                        expect(document.activeElement).toBe(summary);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have properly structured headings for screen readers', function () { return __awaiter(void 0, void 0, void 0, function () {
            var mainHeading, subHeadings, summaryHeading, paymentHeading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigateToConfirmationStep()];
                    case 1:
                        _a.sent();
                        mainHeading = react_1.screen.getByRole('heading', { name: /confirmation/i, level: 2 });
                        expect(mainHeading).toBeInTheDocument();
                        subHeadings = react_1.screen.getAllByRole('heading', { level: 3 });
                        expect(subHeadings.length).toBeGreaterThan(0);
                        summaryHeading = react_1.screen.getByRole('heading', { name: /booking summary/i });
                        expect(summaryHeading).toBeInTheDocument();
                        paymentHeading = react_1.screen.getByRole('heading', { name: /payment method/i });
                        expect(paymentHeading).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Global Keyboard Navigation', function () {
        it('should handle Escape key to close error messages', function () { return __awaiter(void 0, void 0, void 0, function () {
            var errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Force an error
                        booking_service_1.BookingService.getAvailableServices.mockRejectedValueOnce(new Error('Failed to load services'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to load services/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        errorMessage = react_1.screen.getByTestId('error-message');
                        expect(errorMessage).toBeInTheDocument();
                        // Press Escape
                        user_event_1.default.keyboard('{Escape}');
                        // Error should be dismissed
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.queryByTestId('error-message')).not.toBeInTheDocument();
                            })];
                    case 2:
                        // Error should be dismissed
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should provide skip link for keyboard users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var skipLink, mainContent;
            return __generator(this, function (_a) {
                renderBookingFlow();
                // Tab should first hit skip link
                user_event_1.default.tab();
                skipLink = react_1.screen.getByText(/skip to main content/i);
                expect(document.activeElement).toBe(skipLink);
                // Activate it
                user_event_1.default.keyboard('{Enter}');
                mainContent = react_1.screen.getByRole('main');
                expect(document.activeElement).toBe(mainContent);
                return [2 /*return*/];
            });
        }); });
        it('should have logical tab order through the entire flow', function () { return __awaiter(void 0, void 0, void 0, function () {
            var focusedElements, originalFocus, isInLogicalOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        focusedElements = [];
                        originalFocus = HTMLElement.prototype.focus;
                        HTMLElement.prototype.focus = function () {
                            focusedElements.push(this);
                            return originalFocus.apply(this);
                        };
                        // Press tab multiple times
                        user_event_1.default.tab(); // Skip link
                        user_event_1.default.tab(); // Header element
                        user_event_1.default.tab(); // Step indicator
                        user_event_1.default.tab(); // First service option
                        user_event_1.default.tab(); // Second service option
                        user_event_1.default.tab(); // Back button
                        user_event_1.default.tab(); // Next button
                        // Restore original focus method
                        HTMLElement.prototype.focus = originalFocus;
                        // Verify tab order - elements should include critical navigation components
                        expect(focusedElements.some(function (el) { var _a; return (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.includes('Skip'); })).toBe(true);
                        expect(focusedElements.some(function (el) { return el.getAttribute('role') === 'radio'; })).toBe(true);
                        expect(focusedElements.some(function (el) { var _a; return (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.includes('Next'); })).toBe(true);
                        isInLogicalOrder = focusedElements.every(function (el, i) {
                            if (i === 0)
                                return true;
                            var prevRect = focusedElements[i - 1].getBoundingClientRect();
                            var currRect = el.getBoundingClientRect();
                            // Either below or to the right of the previous element
                            return currRect.top >= prevRect.top ||
                                (currRect.top === prevRect.top && currRect.left >= prevRect.left);
                        });
                        expect(isInLogicalOrder).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
