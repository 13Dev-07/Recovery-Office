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
var DeviceContext_1 = require("../../../context/DeviceContext");
var css_mediaquery_1 = require("css-mediaquery");
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
// Create a custom render function that includes the device size context
function createMatchMedia(width) {
    return function (query) { return ({
        matches: css_mediaquery_1.default.match(query, { width: width }),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }); };
}
// Define common viewport sizes
var MOBILE_WIDTH = 375;
var TABLET_WIDTH = 768;
var DESKTOP_WIDTH = 1200;
describe('Booking Flow Mobile Responsiveness Tests', function () {
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
    var renderBookingFlow = function (width) {
        // Mock the window.matchMedia
        window.matchMedia = createMatchMedia(width);
        // Calculate device type based on width
        var deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
        return (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
        <ToastContext_1.ToastProvider>
          <DeviceContext_1.DeviceContext.Provider value={{ deviceType: deviceType, isMobile: deviceType === 'mobile', isTablet: deviceType === 'tablet', isDesktop: deviceType === 'desktop' }}>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </DeviceContext_1.DeviceContext.Provider>
        </ToastContext_1.ToastProvider>
      </ThemeProvider_1.ThemeProvider>);
    };
    describe('Mobile Layout Tests', function () {
        it('should display the mobile accordion layout for services on small screens', function () { return __awaiter(void 0, void 0, void 0, function () {
            var navControls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        // Check for mobile-specific elements
                        expect(react_1.screen.getByTestId('mobile-service-accordion')).toBeInTheDocument();
                        // Should not have desktop grid layout
                        expect(react_1.screen.queryByTestId('desktop-service-grid')).not.toBeInTheDocument();
                        // Mobile header should be visible
                        expect(react_1.screen.getByTestId('mobile-booking-header')).toBeInTheDocument();
                        navControls = react_1.screen.getByTestId('booking-nav-controls');
                        expect(navControls).toHaveClass('fixed-bottom');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use full-width buttons on mobile screens', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nextButton, serviceCards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(nextButton).toHaveClass('full-width');
                        serviceCards = react_1.screen.getAllByTestId('service-card');
                        serviceCards.forEach(function (card) {
                            expect(card).toHaveClass('mobile-width');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use a compact date picker on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Check for mobile-specific calendar
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('mobile-calendar')).toBeInTheDocument();
                            })];
                    case 2:
                        // Check for mobile-specific calendar
                        _a.sent();
                        // Should not show desktop calendar
                        expect(react_1.screen.queryByTestId('desktop-calendar')).not.toBeInTheDocument();
                        // Mobile calendar should have single-month view
                        expect(react_1.screen.getByTestId('single-month-view')).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use stacked layout for time slots on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var timeSlots;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Navigate to date selection and select a date
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection and select a date
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        // Time slots should be in vertical layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        // Time slots should be in vertical layout
                        _a.sent();
                        expect(react_1.screen.getByTestId('mobile-time-slots')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('desktop-time-slots')).not.toBeInTheDocument();
                        timeSlots = react_1.screen.getAllByTestId('time-slot-button');
                        expect(timeSlots[0]).toHaveClass('vertical-layout');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use single-column form layout on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var formFields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
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
                        // Check for mobile form layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Check for mobile form layout
                        _a.sent();
                        expect(react_1.screen.getByTestId('mobile-form-layout')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('desktop-form-layout')).not.toBeInTheDocument();
                        formFields = react_1.screen.getAllByTestId('form-field');
                        formFields.forEach(function (field) {
                            expect(field).toHaveClass('full-width');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Tablet Layout Tests', function () {
        it('should display a grid layout for services on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceCards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(TABLET_WIDTH);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        // Check for tablet-specific elements
                        expect(react_1.screen.getByTestId('tablet-service-grid')).toBeInTheDocument();
                        // Should not have mobile accordion
                        expect(react_1.screen.queryByTestId('mobile-service-accordion')).not.toBeInTheDocument();
                        serviceCards = react_1.screen.getAllByTestId('service-card');
                        serviceCards.forEach(function (card) {
                            expect(card).toHaveClass('tablet-width');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use side-by-side layout for booking controls on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var navControls, backButton, nextButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(TABLET_WIDTH);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        navControls = react_1.screen.getByTestId('booking-nav-controls');
                        expect(navControls).toHaveClass('flex-row');
                        backButton = react_1.screen.getByRole('button', { name: /back/i });
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(backButton).toHaveClass('tablet-button');
                        expect(nextButton).toHaveClass('tablet-button');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use a two-month calendar view on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(TABLET_WIDTH);
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Check for tablet-specific calendar
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('tablet-calendar')).toBeInTheDocument();
                            })];
                    case 2:
                        // Check for tablet-specific calendar
                        _a.sent();
                        // Should show two-month view
                        expect(react_1.screen.getByTestId('two-month-view')).toBeInTheDocument();
                        // Should not show mobile calendar
                        expect(react_1.screen.queryByTestId('mobile-calendar')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use grid layout for time slots on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var timeSlotContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(TABLET_WIDTH);
                        // Navigate to date selection and select a date
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection and select a date
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        // Time slots should be in grid layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        // Time slots should be in grid layout
                        _a.sent();
                        expect(react_1.screen.getByTestId('tablet-time-slots')).toBeInTheDocument();
                        timeSlotContainer = react_1.screen.getByTestId('time-slot-grid');
                        expect(timeSlotContainer).toHaveClass('grid-layout');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use two-column form layout on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var formContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(TABLET_WIDTH);
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
                        // Check for tablet form layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Check for tablet form layout
                        _a.sent();
                        expect(react_1.screen.getByTestId('tablet-form-layout')).toBeInTheDocument();
                        formContainer = react_1.screen.getByTestId('form-container');
                        expect(formContainer).toHaveClass('two-column-grid');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Responsive Adaptations', function () {
        it('should adapt booking summary based on screen size', function () { return __awaiter(void 0, void 0, void 0, function () {
            var unmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Test on mobile
                        renderBookingFlow(MOBILE_WIDTH);
                        // Navigate to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to confirmation step
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
                        // Check booking summary on mobile
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        // Check booking summary on mobile
                        _a.sent();
                        expect(react_1.screen.getByTestId('mobile-booking-summary')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('desktop-booking-summary')).not.toBeInTheDocument();
                        unmount = react_1.screen.unmount;
                        unmount();
                        renderBookingFlow(TABLET_WIDTH);
                        // Navigate to confirmation step again
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Navigate to confirmation step again
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 7:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 8:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 9:
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Check booking summary on tablet
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 10:
                        // Check booking summary on tablet
                        _a.sent();
                        expect(react_1.screen.getByTestId('tablet-booking-summary')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('mobile-booking-summary')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should adapt step indicator based on screen size', function () { return __awaiter(void 0, void 0, void 0, function () {
            var unmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Test on mobile
                        renderBookingFlow(MOBILE_WIDTH);
                        // Check step indicator on mobile
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('step-indicator')).toBeInTheDocument();
                            })];
                    case 1:
                        // Check step indicator on mobile
                        _a.sent();
                        expect(react_1.screen.getByTestId('mobile-step-dots')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('desktop-step-labels')).not.toBeInTheDocument();
                        unmount = react_1.screen.unmount;
                        unmount();
                        renderBookingFlow(DESKTOP_WIDTH);
                        // Check step indicator on desktop
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('step-indicator')).toBeInTheDocument();
                            })];
                    case 2:
                        // Check step indicator on desktop
                        _a.sent();
                        expect(react_1.screen.getByTestId('desktop-step-labels')).toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('mobile-step-dots')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use horizontal layout for payment options on larger screens', function () { return __awaiter(void 0, void 0, void 0, function () {
            var unmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Test on mobile first
                        renderBookingFlow(MOBILE_WIDTH);
                        // Navigate to confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to confirmation step
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
                        // Check payment options layout on mobile
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        // Check payment options layout on mobile
                        _a.sent();
                        expect(react_1.screen.getByTestId('payment-options')).toBeInTheDocument();
                        expect(react_1.screen.getByTestId('payment-options')).toHaveClass('vertical-layout');
                        unmount = react_1.screen.unmount;
                        unmount();
                        renderBookingFlow(DESKTOP_WIDTH);
                        // Navigate to confirmation step again
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 6:
                        // Navigate to confirmation step again
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 7:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 8:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 9:
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Check payment options layout on desktop
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 10:
                        // Check payment options layout on desktop
                        _a.sent();
                        expect(react_1.screen.getByTestId('payment-options')).toBeInTheDocument();
                        expect(react_1.screen.getByTestId('payment-options')).toHaveClass('horizontal-layout');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Touch-specific Interactions', function () {
        it('should implement swipe navigation on mobile for date selection', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Check for touch-specific elements
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Check for touch-specific elements
                        _a.sent();
                        // Should have swipeable calendar
                        expect(react_1.screen.getByTestId('swipeable-calendar')).toBeInTheDocument();
                        // Should have touch indicators
                        expect(react_1.screen.getByTestId('swipe-indicator-left')).toBeInTheDocument();
                        expect(react_1.screen.getByTestId('swipe-indicator-right')).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use larger touch targets on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nextButton, serviceCards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(nextButton).toHaveClass('touch-target-large');
                        serviceCards = react_1.screen.getAllByTestId('service-card');
                        serviceCards.forEach(function (card) {
                            expect(card).toHaveClass('touch-friendly');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should implement pull-to-refresh on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var unmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Check for pull-to-refresh indicator
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('booking-container')).toBeInTheDocument();
                            })];
                    case 1:
                        // Check for pull-to-refresh indicator
                        _a.sent();
                        expect(react_1.screen.getByTestId('pull-to-refresh')).toBeInTheDocument();
                        unmount = react_1.screen.unmount;
                        unmount();
                        renderBookingFlow(DESKTOP_WIDTH);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('booking-container')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        expect(react_1.screen.queryByTestId('pull-to-refresh')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
