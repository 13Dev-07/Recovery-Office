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
        cancelBooking: jest.fn(),
    },
}); });
describe('Booking Flow Accessibility Tests', function () {
    beforeEach(function () {
        jest.clearAllMocks();
        // Default mock responses
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
    it('should have proper ARIA attributes on service cards', function () { return __awaiter(void 0, void 0, void 0, function () {
        var serviceCards;
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
                    serviceCards = react_1.screen.getAllByTestId('service-card');
                    // Check for proper ARIA attributes
                    expect(serviceCards[0]).toHaveAttribute('aria-label', 'Massage Therapy, 60 minutes, $80');
                    expect(serviceCards[0]).toHaveAttribute('role', 'button');
                    expect(serviceCards[0]).toHaveAttribute('aria-selected', 'false');
                    // Select a service
                    user_event_1.default.click(serviceCards[0]);
                    // Selected state should be properly communicated
                    expect(serviceCards[0]).toHaveAttribute('aria-selected', 'true');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow keyboard navigation through booking steps', function () { return __awaiter(void 0, void 0, void 0, function () {
        var serviceCards;
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
                    serviceCards = react_1.screen.getAllByTestId('service-card');
                    serviceCards[0].focus();
                    // Press Space to select
                    user_event_1.default.keyboard(' ');
                    expect(serviceCards[0]).toHaveClass('selected');
                    // Tab to Next button and press Enter
                    user_event_1.default.tab();
                    expect(document.activeElement).toHaveAttribute('aria-label', 'Next');
                    user_event_1.default.keyboard('{Enter}');
                    // Should navigate to next step
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                        })];
                case 2:
                    // Should navigate to next step
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should announce loading states to screen readers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var loadingIndicator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Simulate delayed API response
                    booking_service_1.BookingService.getAvailableServices.mockImplementation(function () {
                        return new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve([
                                    { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                                    { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
                                ]);
                            }, 100);
                        });
                    });
                    renderBookingFlow();
                    loadingIndicator = react_1.screen.getByTestId('services-loading-indicator');
                    expect(loadingIndicator).toHaveAttribute('aria-live', 'polite');
                    // Wait for services to load
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                        })];
                case 1:
                    // Wait for services to load
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
