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
var api_types_1 = require("../../../types/api.types");
// Mock the booking service
jest.mock('../../../services/booking.service', function () { return ({
    BookingService: {
        getAvailableServices: jest.fn(),
        getAvailableDates: jest.fn(),
        getAvailableTimeSlots: jest.fn(),
        submitBooking: jest.fn(),
        createPaymentIntent: jest.fn(),
        cancelBooking: jest.fn(),
        rescheduleBooking: jest.fn(),
    },
}); });
describe('Booking Flow Error Handling Tests', function () {
    beforeEach(function () {
        jest.clearAllMocks();
        jest.useFakeTimers();
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
    afterEach(function () {
        jest.useRealTimers();
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
    describe('Network Error Handling', function () {
        it('should display error toast when services fetch fails', function () { return __awaiter(void 0, void 0, void 0, function () {
            var networkError, retryButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        networkError = new Error('Network Error');
                        booking_service_1.BookingService.getAvailableServices.mockRejectedValueOnce(networkError);
                        renderBookingFlow();
                        // Wait for error to be displayed
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to load services/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for error to be displayed
                        _a.sent();
                        // Error message should include retry option
                        expect(react_1.screen.getByText(/please try again/i)).toBeInTheDocument();
                        retryButton = react_1.screen.getByRole('button', { name: /retry/i });
                        expect(retryButton).toBeInTheDocument();
                        // Reset mock to success for retry
                        booking_service_1.BookingService.getAvailableServices.mockResolvedValueOnce([
                            { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                        ]);
                        // Click retry
                        user_event_1.default.click(retryButton);
                        // Should load successfully now
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should load successfully now
                        _a.sent();
                        // Error message should be gone
                        expect(react_1.screen.queryByText(/failed to load services/i)).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle API errors with error codes', function () { return __awaiter(void 0, void 0, void 0, function () {
            var apiError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiError = new api_types_1.ApiError('Service unavailable', 503, 'SERVICE_UNAVAILABLE');
                        booking_service_1.BookingService.getAvailableServices.mockRejectedValueOnce(apiError);
                        renderBookingFlow();
                        // Wait for error to be displayed with specific error code message
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/service unavailable/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for error to be displayed with specific error code message
                        _a.sent();
                        expect(react_1.screen.getByText(/503/i)).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display error when date selection fails', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dateError, dismissButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        // Select a service
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        // Navigate to date selection
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        dateError = new Error('Failed to fetch available dates');
                        booking_service_1.BookingService.getAvailableDates.mockRejectedValueOnce(dateError);
                        // Wait for error to be displayed
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to fetch available dates/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Wait for error to be displayed
                        _a.sent();
                        dismissButton = react_1.screen.getByRole('button', { name: /close/i });
                        user_event_1.default.click(dismissButton);
                        // Error should be gone after dismissing
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.queryByText(/failed to fetch available dates/i)).not.toBeInTheDocument();
                            })];
                    case 3:
                        // Error should be gone after dismissing
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Validation Error Handling', function () {
        it('should display field validation errors in client info step', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Navigate to client info step
                        renderBookingFlow();
                        // Wait for services to load and select one
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load and select one
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Select date
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Select date
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        // Select time slot
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        // Select time slot
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Now on client info step, attempt to proceed without filling form
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Now on client info step, attempt to proceed without filling form
                        _a.sent();
                        // Try to move to next step without filling required fields
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Should display validation errors
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/name is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/email is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/phone number is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/you must accept the terms/i)).toBeInTheDocument();
                            })];
                    case 5:
                        // Should display validation errors
                        _a.sent();
                        // Fill out form partially with invalid email
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'invalid-email');
                        // Try to proceed again
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Should display email format error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/invalid email format/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Should display email format error
                        _a.sent();
                        // Name error should be gone
                        expect(react_1.screen.queryByText(/name is required/i)).not.toBeInTheDocument();
                        // Fix the email and complete the form
                        user_event_1.default.clear(react_1.screen.getByLabelText(/email/i));
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        // Try to proceed
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Should proceed to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 7:
                        // Should proceed to confirmation step
                        _a.sent();
                        // No validation errors should remain
                        expect(react_1.screen.queryByText(/is required/i)).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should validate payment information in confirmation step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigateToConfirmationStep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigateToConfirmationStep = function () { return __awaiter(void 0, void 0, void 0, function () {
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
                                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                                        // Select date
                                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                                            })];
                                    case 2:
                                        // Select date
                                        _a.sent();
                                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                                        // Select time
                                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                                            })];
                                    case 3:
                                        // Select time
                                        _a.sent();
                                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
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
                                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, navigateToConfirmationStep()];
                    case 1:
                        _a.sent();
                        // Attempt to confirm without selecting payment method or accepting cancellation policy
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should display validation errors
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/payment method is required/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/you must accept the cancellation policy/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should display validation errors
                        _a.sent();
                        // Select payment method but still don't accept policy
                        user_event_1.default.click(react_1.screen.getByLabelText(/credit card/i));
                        // Try to confirm again
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Only policy error should remain
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.queryByText(/payment method is required/i)).not.toBeInTheDocument();
                                expect(react_1.screen.getByText(/you must accept the cancellation policy/i)).toBeInTheDocument();
                            })];
                    case 3:
                        // Only policy error should remain
                        _a.sent();
                        // Accept policy
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /cancellation policy/i }));
                        // Mock successful payment intent creation
                        booking_service_1.BookingService.createPaymentIntent.mockResolvedValueOnce({
                            clientSecret: 'test_client_secret',
                            paymentIntentId: 'pi_test123'
                        });
                        // Mock successful booking
                        booking_service_1.BookingService.submitBooking.mockResolvedValueOnce({
                            bookingId: 'booking123',
                            confirmation: 'CONF-123456'
                        });
                        // Try to confirm again
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should proceed to success screen
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/booking confirmed/i)).toBeInTheDocument();
                            })];
                    case 4:
                        // Should proceed to success screen
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Payment Error Handling', function () {
        // Helper to navigate to confirmation step with payment method selected
        var setupForPayment = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Navigate through steps
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate through steps
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        _a.sent();
                        // Select credit card payment
                        user_event_1.default.click(react_1.screen.getByLabelText(/credit card/i));
                        // Accept cancellation policy
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /cancellation policy/i }));
                        return [2 /*return*/];
                }
            });
        }); };
        it('should handle payment intent creation failure', function () { return __awaiter(void 0, void 0, void 0, function () {
            var paymentError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setupForPayment()];
                    case 1:
                        _a.sent();
                        paymentError = new Error('Failed to create payment intent');
                        booking_service_1.BookingService.createPaymentIntent.mockRejectedValueOnce(paymentError);
                        // Attempt to confirm booking
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should show payment error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to create payment intent/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should show payment error
                        _a.sent();
                        // Loading indicator should be gone
                        expect(react_1.screen.queryByText(/processing payment/i)).not.toBeInTheDocument();
                        // Button should be enabled again for retry
                        expect(react_1.screen.getByRole('button', { name: /confirm booking/i })).toBeEnabled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle booking submission failure', function () { return __awaiter(void 0, void 0, void 0, function () {
            var bookingError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setupForPayment()];
                    case 1:
                        _a.sent();
                        // Mock successful payment intent creation
                        booking_service_1.BookingService.createPaymentIntent.mockResolvedValueOnce({
                            clientSecret: 'test_client_secret',
                            paymentIntentId: 'pi_test123'
                        });
                        bookingError = new Error('Failed to create booking');
                        booking_service_1.BookingService.submitBooking.mockRejectedValueOnce(bookingError);
                        // Attempt to confirm booking
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should show booking error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to create booking/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should show booking error
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle specific payment processor errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var paymentProcessorError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setupForPayment()];
                    case 1:
                        _a.sent();
                        paymentProcessorError = new api_types_1.ApiError('Your card was declined', 400, 'PAYMENT_DECLINED', { code: 'card_declined', decline_code: 'insufficient_funds' });
                        booking_service_1.BookingService.createPaymentIntent.mockRejectedValueOnce(paymentProcessorError);
                        // Attempt to confirm booking
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should show specific payment error message
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/your card was declined/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/insufficient funds/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should show specific payment error message
                        _a.sent();
                        // Should suggest trying another payment method
                        expect(react_1.screen.getByText(/try another payment method/i)).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Booking Cancellation Error Handling', function () {
        it('should handle cancellation errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var cancelError, cancelButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Mock successful booking first
                        booking_service_1.BookingService.submitBooking.mockResolvedValueOnce({
                            bookingId: 'booking123',
                            confirmation: 'CONF-123456'
                        });
                        // Navigate through entire booking flow
                        renderBookingFlow();
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        _a.sent();
                        // Select pay later and accept policy
                        user_event_1.default.click(react_1.screen.getByLabelText(/pay later/i));
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /cancellation policy/i }));
                        // Confirm booking
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /confirm booking/i }));
                        // Should reach success screen
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/booking confirmed/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Should reach success screen
                        _a.sent();
                        cancelError = new api_types_1.ApiError('Cannot cancel booking', 400, 'CANCELLATION_WINDOW_EXPIRED');
                        booking_service_1.BookingService.cancelBooking.mockRejectedValueOnce(cancelError);
                        cancelButton = react_1.screen.getByRole('button', { name: /cancel booking/i });
                        user_event_1.default.click(cancelButton);
                        // Should show cancellation error
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/cannot cancel booking/i)).toBeInTheDocument();
                                expect(react_1.screen.getByText(/cancellation window expired/i)).toBeInTheDocument();
                            })];
                    case 7:
                        // Should show cancellation error
                        _a.sent();
                        // Error message should explain the issue
                        expect(react_1.screen.getByText(/cancellation is no longer available/i)).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Timeout Error Handling', function () {
        it('should handle request timeouts gracefully', function () { return __awaiter(void 0, void 0, void 0, function () {
            var timeoutError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeoutError = new Error('Request timed out');
                        timeoutError.name = 'TimeoutError';
                        booking_service_1.BookingService.getAvailableServices.mockRejectedValueOnce(timeoutError);
                        renderBookingFlow();
                        // Should show specific timeout message
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/request timed out/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Should show specific timeout message
                        _a.sent();
                        // Should suggest checking connection
                        expect(react_1.screen.getByText(/check your internet connection/i)).toBeInTheDocument();
                        // Mock success response for retry
                        booking_service_1.BookingService.getAvailableServices.mockResolvedValueOnce([
                            { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                        ]);
                        // Click retry button
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /retry/i }));
                        // Should load successfully now
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Should load successfully now
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle slow responses with loading indicators', function () { return __awaiter(void 0, void 0, void 0, function () {
            var resolveServices, servicesPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        servicesPromise = new Promise(function (resolve) {
                            resolveServices = resolve;
                        });
                        booking_service_1.BookingService.getAvailableServices.mockReturnValueOnce(servicesPromise);
                        renderBookingFlow();
                        // Should show loading indicator
                        expect(react_1.screen.getByTestId('loading-indicator')).toBeInTheDocument();
                        expect(react_1.screen.getByText(/loading services/i)).toBeInTheDocument();
                        // After 5 seconds, should show "taking longer than usual" message
                        (0, react_1.act)(function () {
                            jest.advanceTimersByTime(5000);
                        });
                        expect(react_1.screen.getByText(/taking longer than usual/i)).toBeInTheDocument();
                        // Now resolve the promise
                        (0, react_1.act)(function () {
                            resolveServices([
                                { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                            ]);
                        });
                        // Loading indicator should disappear and content should show
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Loading indicator should disappear and content should show
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Error Recovery', function () {
        it('should recover and resume booking flow after errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dateError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        // Select service and proceed
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        dateError = new Error('Failed to fetch available dates');
                        booking_service_1.BookingService.getAvailableDates.mockRejectedValueOnce(dateError);
                        // Wait for error to be displayed
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/failed to fetch available dates/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Wait for error to be displayed
                        _a.sent();
                        // Now mock success for retry
                        booking_service_1.BookingService.getAvailableDates.mockResolvedValueOnce([
                            '2023-08-15', '2023-08-16', '2023-08-17'
                        ]);
                        // Click retry
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /retry/i }));
                        // Should load dates successfully
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                                expect(react_1.screen.getByText(/august 15/i)).toBeInTheDocument();
                            })];
                    case 3:
                        // Should load dates successfully
                        _a.sent();
                        // Continue with flow
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        // Flow should continue normally
                        expect(react_1.screen.getByText(/10:00/i)).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should maintain form data after validation errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow();
                        // Navigate to client info step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to client info step
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        // Fill out form partially
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'invalid-email');
                        // Try to proceed
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Should display validation errors
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/invalid email format/i)).toBeInTheDocument();
                            })];
                    case 5:
                        // Should display validation errors
                        _a.sent();
                        // Form data should be preserved
                        expect(react_1.screen.getByLabelText(/full name/i)).toHaveValue('John Doe');
                        expect(react_1.screen.getByLabelText(/email/i)).toHaveValue('invalid-email');
                        // Fix the email
                        user_event_1.default.clear(react_1.screen.getByLabelText(/email/i));
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        // Complete the form
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        // Try to proceed again
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Should proceed to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 6:
                        // Should proceed to confirmation step
                        _a.sent();
                        // Going back should preserve the form data
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /back/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 7:
                        _a.sent();
                        // Data should still be there
                        expect(react_1.screen.getByLabelText(/full name/i)).toHaveValue('John Doe');
                        expect(react_1.screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
                        expect(react_1.screen.getByLabelText(/phone/i)).toHaveValue('555-123-4567');
                        expect(react_1.screen.getByRole('checkbox', { name: /terms/i })).toBeChecked();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
