"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        cancelBooking: jest.fn(),
        rescheduleBooking: jest.fn(),
        createPaymentIntent: jest.fn(),
    },
}); });
describe('Booking Error Handling Tests', function () {
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
        booking_service_1.BookingService.submitBooking.mockResolvedValue({
            bookingId: 'booking123',
            status: 'confirmed',
        });
        booking_service_1.BookingService.createPaymentIntent.mockResolvedValue({
            clientSecret: 'pi_secret_123',
            paymentIntentId: 'pi_123',
        });
    });
    describe('Service Loading Errors', function () {
        it('should show an error message when services fail to load', function () { return __awaiter(void 0, void 0, void 0, function () {
            var retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Setup service loading failure
                        booking_service_1.BookingService.getAvailableServices.mockRejectedValue(new Error('Failed to load services'));
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Wait for error state
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/unable to load services/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for error state
                        _a.sent();
                        retryButton = react_1.screen.getByRole('button', { name: /retry/i });
                        expect(retryButton).toBeInTheDocument();
                        // Clicking retry should call the service again
                        booking_service_1.BookingService.getAvailableServices.mockResolvedValueOnce([
                            { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                        ]);
                        user_event_1.default.click(retryButton);
                        // Should eventually show services
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should eventually show services
                        _a.sent();
                        // Service should have been called twice (initial + retry)
                        expect(booking_service_1.BookingService.getAvailableServices).toHaveBeenCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Date Loading Errors', function () {
        it('should show an error message when dates fail to load', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        // Set up date loading failure before clicking next
                        booking_service_1.BookingService.getAvailableDates.mockRejectedValueOnce(new Error('Failed to load dates'));
                        user_event_1.default.click(nextButton);
                        // Wait for error state
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/unable to load available dates/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Wait for error state
                        _a.sent();
                        retryButton = react_1.screen.getByRole('button', { name: /retry/i });
                        expect(retryButton).toBeInTheDocument();
                        // Clicking retry should call the service again
                        user_event_1.default.click(retryButton);
                        // Should eventually show dates
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/august 15/i)).toBeInTheDocument();
                            })];
                    case 3:
                        // Should eventually show dates
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Time Slot Loading Errors', function () {
        it('should show an error message when time slots fail to load', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Wait for services to load and navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load and navigate to date selection
                        _a.sent();
                        serviceOption = react_1.screen.getByText(/massage therapy/i);
                        user_event_1.default.click(serviceOption);
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        // Wait for dates to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/august 15/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Wait for dates to load
                        _a.sent();
                        // Set up time slot loading failure
                        booking_service_1.BookingService.getAvailableTimeSlots.mockRejectedValueOnce(new Error('Failed to load time slots'));
                        dateOption = react_1.screen.getByText(/august 15/i);
                        user_event_1.default.click(dateOption);
                        // Wait for error state
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/unable to load time slots/i)).toBeInTheDocument();
                            })];
                    case 3:
                        // Wait for error state
                        _a.sent();
                        retryButton = react_1.screen.getByRole('button', { name: /retry for this date/i });
                        expect(retryButton).toBeInTheDocument();
                        // Clicking retry should call the service again
                        user_event_1.default.click(retryButton);
                        // Should eventually show time slots
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/10:00/i)).toBeInTheDocument();
                            })];
                    case 4:
                        // Should eventually show time slots
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Form Validation Errors', function () {
        it('should display validation errors when submitting empty client info form', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nextButton3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Navigate to client info step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to client info step
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
                        // Wait for client info step to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Wait for client info step to load
                        _a.sent();
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        // Should display validation errors
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/full name is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/email is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/phone number is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/you must agree to the terms/i)).toBeInTheDocument();
                            })];
                    case 5:
                        // Should display validation errors
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should validate email format in client info form', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nameInput, emailInput, phoneInput, termsCheckbox, nextButton3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Navigate to client info step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to client info step
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
                        // Wait for client info step to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Wait for client info step to load
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        user_event_1.default.type(nameInput, 'John Doe');
                        emailInput = react_1.screen.getByLabelText(/email/i);
                        user_event_1.default.type(emailInput, 'invalid-email');
                        phoneInput = react_1.screen.getByLabelText(/phone/i);
                        user_event_1.default.type(phoneInput, '1234567890');
                        termsCheckbox = react_1.screen.getByRole('checkbox', { name: /i agree to terms/i });
                        user_event_1.default.click(termsCheckbox);
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        // Should display email validation error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/invalid email address/i)).toBeInTheDocument();
                            })];
                    case 5:
                        // Should display email validation error
                        _a.sent();
                        // Fix email and try again
                        user_event_1.default.clear(emailInput);
                        user_event_1.default.type(emailInput, 'john@example.com');
                        user_event_1.default.click(nextButton3);
                        // Should proceed to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 6:
                        // Should proceed to confirmation step
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Booking Submission Errors', function () {
        it('should handle payment intent creation failures', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nameInput, emailInput, phoneInput, termsCheckbox, nextButton3, paymentMethod, confirmButton, retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Complete booking flow up to confirmation
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Navigate through all steps to confirmation
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate through all steps to confirmation
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
                        // Fill client info form
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Fill client info form
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        user_event_1.default.type(nameInput, 'John Doe');
                        emailInput = react_1.screen.getByLabelText(/email/i);
                        user_event_1.default.type(emailInput, 'john@example.com');
                        phoneInput = react_1.screen.getByLabelText(/phone/i);
                        user_event_1.default.type(phoneInput, '1234567890');
                        termsCheckbox = react_1.screen.getByRole('checkbox', { name: /i agree to terms/i });
                        user_event_1.default.click(termsCheckbox);
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        // Wait for confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        // Wait for confirmation step
                        _a.sent();
                        // Set up payment intent failure
                        booking_service_1.BookingService.createPaymentIntent.mockRejectedValue(new Error('Payment processing error'));
                        paymentMethod = react_1.screen.getByLabelText(/credit card/i);
                        user_event_1.default.click(paymentMethod);
                        confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                        user_event_1.default.click(confirmButton);
                        // Should display payment error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/unable to process payment/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Should display payment error
                        _a.sent();
                        retryButton = react_1.screen.getByRole('button', { name: /retry payment/i });
                        expect(retryButton).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle booking submission failures', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nameInput, emailInput, phoneInput, termsCheckbox, nextButton3, paymentMethod, confirmButton, retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Complete booking flow up to confirmation with successful payment intent
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Navigate through all steps to confirmation
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate through all steps to confirmation
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
                        // Fill client info form
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Fill client info form
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        user_event_1.default.type(nameInput, 'John Doe');
                        emailInput = react_1.screen.getByLabelText(/email/i);
                        user_event_1.default.type(emailInput, 'john@example.com');
                        phoneInput = react_1.screen.getByLabelText(/phone/i);
                        user_event_1.default.type(phoneInput, '1234567890');
                        termsCheckbox = react_1.screen.getByRole('checkbox', { name: /i agree to terms/i });
                        user_event_1.default.click(termsCheckbox);
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        // Wait for confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        // Wait for confirmation step
                        _a.sent();
                        // Payment intent succeeds but booking submission fails
                        booking_service_1.BookingService.submitBooking.mockRejectedValue(new Error('Booking submission failed'));
                        paymentMethod = react_1.screen.getByLabelText(/credit card/i);
                        user_event_1.default.click(paymentMethod);
                        confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                        user_event_1.default.click(confirmButton);
                        // Should display booking error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/unable to complete booking/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Should display booking error
                        _a.sent();
                        retryButton = react_1.screen.getByRole('button', { name: /retry booking/i });
                        expect(retryButton).toBeInTheDocument();
                        // Reset mock and retry
                        booking_service_1.BookingService.submitBooking.mockResolvedValue({
                            bookingId: 'booking123',
                            status: 'confirmed',
                        });
                        user_event_1.default.click(retryButton);
                        // Should show success message
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/booking confirmed/i)).toBeInTheDocument();
                            })];
                    case 7:
                        // Should show success message
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Network Error Handling', function () {
        it('should gracefully handle network disconnection', function () { return __awaiter(void 0, void 0, void 0, function () {
            var originalNavigator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originalNavigator = __assign({}, window.navigator);
                        Object.defineProperty(window, 'navigator', {
                            value: __assign(__assign({}, originalNavigator), { onLine: false }),
                            writable: true,
                            configurable: true
                        });
                        (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Should display network error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/no internet connection/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Should display network error
                        _a.sent();
                        // Simulate coming back online
                        Object.defineProperty(window, 'navigator', {
                            value: __assign(__assign({}, originalNavigator), { onLine: true }),
                            writable: true,
                            configurable: true
                        });
                        // Manually trigger online event since jsdom doesn't support it
                        (0, react_1.act)(function () {
                            window.dispatchEvent(new Event('online'));
                        });
                        // Service should be called again after coming online
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(booking_service_1.BookingService.getAvailableServices).toHaveBeenCalled();
                            })];
                    case 2:
                        // Service should be called again after coming online
                        _a.sent();
                        // Reset navigator to original state
                        Object.defineProperty(window, 'navigator', {
                            value: originalNavigator,
                            writable: true,
                            configurable: true
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
