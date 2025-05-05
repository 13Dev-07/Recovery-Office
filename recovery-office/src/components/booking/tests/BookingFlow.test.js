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
var booking_service_1 = require("../../../services/booking.service");
var ToastContext_1 = require("../../../context/ToastContext");
// Mock the booking service
jest.mock('../../../services/booking.service');
var mockedBookingService = booking_service_1.BookingService;
// Mock window.matchMedia for responsive design tests
window.matchMedia = jest.fn().mockImplementation(function (query) {
    return {
        matches: false, // Default to desktop
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
});
// Mock resize observer
global.ResizeObserver = jest.fn().mockImplementation(function () { return ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}); });
describe('BookingFlow End-to-End Test', function () {
    beforeEach(function () {
        jest.clearAllMocks();
        // Mock API responses
        mockedBookingService.getAvailableServices.mockResolvedValue([
            { id: 'service-1', name: 'Massage Therapy', description: 'Relaxing massage', price: 80, durationMinutes: 60 },
            { id: 'service-2', name: 'Acupuncture', description: 'Traditional treatment', price: 95, durationMinutes: 45 }
        ]);
        mockedBookingService.getAvailableDates.mockResolvedValue([
            { date: '2023-05-15', hasAvailability: true },
            { date: '2023-05-16', hasAvailability: true },
            { date: '2023-05-17', hasAvailability: false }
        ]);
        mockedBookingService.getAvailableTimeSlots.mockResolvedValue([
            { id: 'slot-1', startTime: '10:00', endTime: '11:00', isAvailable: true },
            { id: 'slot-2', startTime: '11:30', endTime: '12:30', isAvailable: true },
            { id: 'slot-3', startTime: '14:00', endTime: '15:00', isAvailable: false }
        ]);
        mockedBookingService.submitBooking.mockResolvedValue({
            id: 'booking-123',
            status: 'confirmed',
            confirmationCode: 'ABC123'
        });
        mockedBookingService.createPaymentIntent.mockResolvedValue({
            paymentIntentId: 'pi_123456789',
            clientSecret: 'secret_987654321'
        });
    });
    it('should complete the entire booking flow successfully', function () { return __awaiter(void 0, void 0, void 0, function () {
        var massageService, nextButtonStep1, dateCell, timeSlot, nextButtonStep2, termsCheckbox, nextButtonStep3, payAtAppointmentOption, cancellationCheckbox, confirmButton;
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
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockedBookingService.getAvailableServices).toHaveBeenCalled(); })];
                case 1:
                    // Wait for services to load
                    _a.sent();
                    // Step 1: Service Selection
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Choose a Service')).toBeInTheDocument();
                        })];
                case 2:
                    // Step 1: Service Selection
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('Massage Therapy')];
                case 3:
                    massageService = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(massageService)];
                case 4:
                    _a.sent();
                    nextButtonStep1 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep1)];
                case 5:
                    _a.sent();
                    // Step 2: Date Selection
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Select Date & Time')).toBeInTheDocument();
                        })];
                case 6:
                    // Step 2: Date Selection
                    _a.sent();
                    // Wait for available dates to load
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockedBookingService.getAvailableDates).toHaveBeenCalled(); })];
                case 7:
                    // Wait for available dates to load
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('15')];
                case 8:
                    dateCell = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(dateCell)];
                case 9:
                    _a.sent();
                    // Wait for time slots to load
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockedBookingService.getAvailableTimeSlots).toHaveBeenCalled(); })];
                case 10:
                    // Wait for time slots to load
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('10:00 - 11:00')];
                case 11:
                    timeSlot = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(timeSlot)];
                case 12:
                    _a.sent();
                    nextButtonStep2 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep2)];
                case 13:
                    _a.sent();
                    // Step 3: Client Information
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Your Information')).toBeInTheDocument();
                        })];
                case 14:
                    // Step 3: Client Information
                    _a.sent();
                    // Fill in the client information form
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/first name/i), 'John')];
                case 15:
                    // Fill in the client information form
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/last name/i), 'Doe')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john.doe@example.com')];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567')];
                case 18:
                    _a.sent();
                    termsCheckbox = react_1.screen.getByLabelText(/terms and conditions/i);
                    return [4 /*yield*/, user_event_1.default.click(termsCheckbox)];
                case 19:
                    _a.sent();
                    nextButtonStep3 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep3)];
                case 20:
                    _a.sent();
                    // Step 4: Confirmation
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Confirm Booking')).toBeInTheDocument();
                        })];
                case 21:
                    // Step 4: Confirmation
                    _a.sent();
                    // Verify booking details are displayed
                    expect(react_1.screen.getByText('Massage Therapy')).toBeInTheDocument();
                    expect(react_1.screen.getByText('$80.00')).toBeInTheDocument();
                    expect(react_1.screen.getByText('May 15, 2023')).toBeInTheDocument();
                    expect(react_1.screen.getByText('10:00 - 11:00')).toBeInTheDocument();
                    payAtAppointmentOption = react_1.screen.getByLabelText(/pay at appointment/i);
                    return [4 /*yield*/, user_event_1.default.click(payAtAppointmentOption)];
                case 22:
                    _a.sent();
                    cancellationCheckbox = react_1.screen.getByLabelText(/cancellation policy/i);
                    return [4 /*yield*/, user_event_1.default.click(cancellationCheckbox)];
                case 23:
                    _a.sent();
                    confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                    return [4 /*yield*/, user_event_1.default.click(confirmButton)];
                case 24:
                    _a.sent();
                    // Wait for booking submission
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockedBookingService.submitBooking).toHaveBeenCalled(); })];
                case 25:
                    // Wait for booking submission
                    _a.sent();
                    // Check confirmation message
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Booking Confirmed!')).toBeInTheDocument();
                            expect(react_1.screen.getByText('ABC123')).toBeInTheDocument();
                        })];
                case 26:
                    // Check confirmation message
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle payment with credit card', function () { return __awaiter(void 0, void 0, void 0, function () {
        var massageService, nextButtonStep1, dateCell, timeSlot, nextButtonStep2, termsCheckbox, nextButtonStep3, creditCardOption, cancellationCheckbox, confirmButton;
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
                    // Steps 1-3 (abbreviated for brevity)
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Choose a Service')).toBeInTheDocument(); })];
                case 1:
                    // Steps 1-3 (abbreviated for brevity)
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('Massage Therapy')];
                case 2:
                    massageService = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(massageService)];
                case 3:
                    _a.sent();
                    nextButtonStep1 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep1)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Select Date & Time')).toBeInTheDocument(); })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('15')];
                case 6:
                    dateCell = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(dateCell)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('10:00 - 11:00')];
                case 8:
                    timeSlot = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(timeSlot)];
                case 9:
                    _a.sent();
                    nextButtonStep2 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep2)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Your Information')).toBeInTheDocument(); })];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/first name/i), 'John')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/last name/i), 'Doe')];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john.doe@example.com')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567')];
                case 15:
                    _a.sent();
                    termsCheckbox = react_1.screen.getByLabelText(/terms and conditions/i);
                    return [4 /*yield*/, user_event_1.default.click(termsCheckbox)];
                case 16:
                    _a.sent();
                    nextButtonStep3 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep3)];
                case 17:
                    _a.sent();
                    // Step 4: Confirmation with credit card payment
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Confirm Booking')).toBeInTheDocument(); })];
                case 18:
                    // Step 4: Confirmation with credit card payment
                    _a.sent();
                    creditCardOption = react_1.screen.getByLabelText(/credit card/i);
                    return [4 /*yield*/, user_event_1.default.click(creditCardOption)];
                case 19:
                    _a.sent();
                    // This should trigger the payment intent creation
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(mockedBookingService.createPaymentIntent).toHaveBeenCalled(); })];
                case 20:
                    // This should trigger the payment intent creation
                    _a.sent();
                    cancellationCheckbox = react_1.screen.getByLabelText(/cancellation policy/i);
                    return [4 /*yield*/, user_event_1.default.click(cancellationCheckbox)];
                case 21:
                    _a.sent();
                    confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                    return [4 /*yield*/, user_event_1.default.click(confirmButton)];
                case 22:
                    _a.sent();
                    // Verify the booking was submitted with payment intent ID
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(mockedBookingService.submitBooking).toHaveBeenCalledWith(expect.objectContaining({
                                paymentMethod: 'credit_card',
                                paymentIntentId: 'pi_123456789'
                            }));
                        })];
                case 23:
                    // Verify the booking was submitted with payment intent ID
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle errors in the booking flow', function () { return __awaiter(void 0, void 0, void 0, function () {
        var retryButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Set up error for available services
                    mockedBookingService.getAvailableServices.mockRejectedValueOnce(new Error('Failed to fetch services'));
                    (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
        <ToastContext_1.ToastProvider>
          <BookingContext_1.BookingProvider>
            <BookingFlow_1.BookingFlow />
          </BookingContext_1.BookingProvider>
        </ToastContext_1.ToastProvider>
      </ThemeProvider_1.ThemeProvider>);
                    // Wait for services loading to fail
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText(/something went wrong/i)).toBeInTheDocument();
                            expect(react_1.screen.getByText(/failed to fetch services/i)).toBeInTheDocument();
                        })];
                case 1:
                    // Wait for services loading to fail
                    _a.sent();
                    retryButton = react_1.screen.getByRole('button', { name: /try again/i });
                    expect(retryButton).toBeInTheDocument();
                    // Reset the mock to succeed on retry
                    mockedBookingService.getAvailableServices.mockResolvedValueOnce([
                        { id: 'service-1', name: 'Massage Therapy', description: 'Relaxing massage', price: 80, durationMinutes: 60 }
                    ]);
                    // Click retry
                    return [4 /*yield*/, user_event_1.default.click(retryButton)];
                case 2:
                    // Click retry
                    _a.sent();
                    // Services should load successfully
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Massage Therapy')).toBeInTheDocument();
                        })];
                case 3:
                    // Services should load successfully
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow navigating back through steps', function () { return __awaiter(void 0, void 0, void 0, function () {
        var massageService, nextButtonStep1, backButton, selectedService;
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
                    // Go to step 2
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Choose a Service')).toBeInTheDocument(); })];
                case 1:
                    // Go to step 2
                    _a.sent();
                    return [4 /*yield*/, react_1.screen.findByText('Massage Therapy')];
                case 2:
                    massageService = _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(massageService)];
                case 3:
                    _a.sent();
                    nextButtonStep1 = react_1.screen.getByRole('button', { name: /next/i });
                    return [4 /*yield*/, user_event_1.default.click(nextButtonStep1)];
                case 4:
                    _a.sent();
                    // Verify we're on step 2
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Select Date & Time')).toBeInTheDocument(); })];
                case 5:
                    // Verify we're on step 2
                    _a.sent();
                    backButton = react_1.screen.getByRole('button', { name: /back/i });
                    return [4 /*yield*/, user_event_1.default.click(backButton)];
                case 6:
                    _a.sent();
                    // Verify we're back on step 1
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(react_1.screen.getByText('Choose a Service')).toBeInTheDocument(); })];
                case 7:
                    // Verify we're back on step 1
                    _a.sent();
                    selectedService = react_1.screen.getByText('Massage Therapy');
                    expect(selectedService.closest('[data-selected="true"]')).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
