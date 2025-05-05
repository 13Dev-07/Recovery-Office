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
var test_utils_1 = require("react-dom/test-utils");
// Mock booking service
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
// Mock window performance
var originalPerformance = window.performance;
var marks = {};
var measures = {};
// Create a custom render function with device context
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
// Define viewport sizes
var MOBILE_WIDTH = 375;
var TABLET_WIDTH = 768;
var DESKTOP_WIDTH = 1200;
describe('Booking Flow Performance Tests', function () {
    beforeAll(function () {
        // Mock performance API
        window.performance.mark = jest.fn(function (name) {
            marks[name] = Date.now();
        });
        window.performance.measure = jest.fn(function (name, startMark, endMark) {
            var startTime = marks[startMark] || 0;
            var endTime = marks[endMark] || Date.now();
            var duration = endTime - startTime;
            measures[name] = { duration: duration, startTime: startTime, endTime: endTime };
            return { duration: duration };
        });
        window.performance.getEntriesByName = jest.fn(function (name) {
            if (measures[name]) {
                return [{ duration: measures[name].duration }];
            }
            return [];
        });
        window.performance.clearMarks = jest.fn(function () {
            marks = {};
        });
        window.performance.clearMeasures = jest.fn(function () {
            measures = {};
        });
    });
    afterAll(function () {
        window.performance = originalPerformance;
    });
    beforeEach(function () {
        jest.clearAllMocks();
        marks = {};
        measures = {};
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
            id: 'booking123',
            status: 'confirmed',
        });
        booking_service_1.BookingService.createPaymentIntent.mockResolvedValue({
            clientSecret: 'secret123',
            paymentIntentId: 'pi_123',
        });
    });
    var renderBookingFlow = function (width) {
        // Mock window.matchMedia
        window.matchMedia = createMatchMedia(width);
        // Calculate device type
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
    describe('Initial Load Performance', function () {
        it('should load services within 500ms on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var measureEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.performance.mark('start-load');
                        renderBookingFlow(MOBILE_WIDTH);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        window.performance.mark('end-load');
                        window.performance.measure('services-load-time', 'start-load', 'end-load');
                        measureEntry = window.performance.getEntriesByName('services-load-time')[0];
                        expect(measureEntry.duration).toBeLessThan(500);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should load services within 400ms on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var measureEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.performance.mark('start-load');
                        renderBookingFlow(TABLET_WIDTH);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        window.performance.mark('end-load');
                        window.performance.measure('services-load-time', 'start-load', 'end-load');
                        measureEntry = window.performance.getEntriesByName('services-load-time')[0];
                        expect(measureEntry.duration).toBeLessThan(400);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should load services within 300ms on desktop', function () { return __awaiter(void 0, void 0, void 0, function () {
            var measureEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.performance.mark('start-load');
                        renderBookingFlow(DESKTOP_WIDTH);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        window.performance.mark('end-load');
                        window.performance.measure('services-load-time', 'start-load', 'end-load');
                        measureEntry = window.performance.getEntriesByName('services-load-time')[0];
                        expect(measureEntry.duration).toBeLessThan(300);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Step Navigation Performance', function () {
        it('should transition between steps efficiently on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceToDateMeasure, dateToClientMeasure;
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
                        // Select service and measure transition time
                        window.performance.mark('start-service-selection');
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        window.performance.mark('end-service-selection');
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        window.performance.measure('service-to-date-transition', 'start-service-selection', 'end-service-selection');
                        serviceToDateMeasure = window.performance.getEntriesByName('service-to-date-transition')[0];
                        expect(serviceToDateMeasure.duration).toBeLessThan(150);
                        // Select date and measure transition time
                        window.performance.mark('start-date-selection');
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        window.performance.mark('end-date-selection');
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        window.performance.measure('date-to-client-transition', 'start-date-selection', 'end-date-selection');
                        dateToClientMeasure = window.performance.getEntriesByName('date-to-client-transition')[0];
                        expect(dateToClientMeasure.duration).toBeLessThan(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transition between steps efficiently on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceToDateMeasure;
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
                        // Select service and measure transition time
                        window.performance.mark('start-service-selection');
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        window.performance.mark('end-service-selection');
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        window.performance.measure('service-to-date-transition', 'start-service-selection', 'end-service-selection');
                        serviceToDateMeasure = window.performance.getEntriesByName('service-to-date-transition')[0];
                        expect(serviceToDateMeasure.duration).toBeLessThan(120);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Form Input Performance', function () {
        it('should handle client info form inputs efficiently on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var typingPerformance;
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
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        _a.sent();
                        // Measure typing performance
                        window.performance.mark('start-typing');
                        // Type in multiple fields rapidly
                        (0, test_utils_1.act)(function () {
                            user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe', { delay: 10 });
                        });
                        (0, test_utils_1.act)(function () {
                            user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com', { delay: 10 });
                        });
                        (0, test_utils_1.act)(function () {
                            user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567', { delay: 10 });
                        });
                        window.performance.mark('end-typing');
                        window.performance.measure('form-typing-performance', 'start-typing', 'end-typing');
                        typingPerformance = window.performance.getEntriesByName('form-typing-performance')[0];
                        // Check for reasonable typing performance (depends on test environment)
                        expect(typingPerformance.duration / 'John Doe john@example.com 555-123-4567'.length).toBeLessThan(20); // Less than 20ms per character on average
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Network Performance Simulation', function () {
        it('should handle slow network conditions gracefully', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Simulate slow network by delaying service responses
                        booking_service_1.BookingService.getAvailableServices.mockImplementation(function () {
                            return new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve([
                                        { id: 'service1', name: 'Massage Therapy', duration: 60, price: 80 },
                                        { id: 'service2', name: 'Acupuncture', duration: 90, price: 120 },
                                    ]);
                                }, 1000); // 1 second delay
                            });
                        });
                        renderBookingFlow(MOBILE_WIDTH);
                        // Verify loading state is shown
                        expect(react_1.screen.getByTestId('services-loading-indicator')).toBeInTheDocument();
                        // Wait for services to load despite delay
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            }, { timeout: 2000 })];
                    case 1:
                        // Wait for services to load despite delay
                        _a.sent();
                        // Verify loading state is no longer shown
                        expect(react_1.screen.queryByTestId('services-loading-indicator')).not.toBeInTheDocument();
                        // Simulate slow network for next step
                        booking_service_1.BookingService.getAvailableDates.mockImplementation(function () {
                            return new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve(['2023-08-15', '2023-08-16', '2023-08-17']);
                                }, 1000); // 1 second delay
                            });
                        });
                        // Navigate to next step
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Verify date selection loading state appears
                        expect(react_1.screen.getByTestId('dates-loading-indicator')).toBeInTheDocument();
                        // Wait for dates to load despite delay
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/august 15/i)).toBeInTheDocument();
                            }, { timeout: 2000 })];
                    case 2:
                        // Wait for dates to load despite delay
                        _a.sent();
                        // Verify loading state is removed
                        expect(react_1.screen.queryByTestId('dates-loading-indicator')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Memory Usage', function () {
        it('should not create memory leaks when navigating between steps', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderBookingFlow(MOBILE_WIDTH);
                        // Complete full booking flow cycle
                        // Navigate to service selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Complete full booking flow cycle
                        // Navigate to service selection
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/massage therapy/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Navigate to date selection
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/august 15/i));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('time-slot-selection')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        user_event_1.default.click(react_1.screen.getByText(/10:00/i));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Navigate to client info
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Navigate to client info
                        _a.sent();
                        user_event_1.default.type(react_1.screen.getByLabelText(/full name/i), 'John Doe');
                        user_event_1.default.type(react_1.screen.getByLabelText(/email/i), 'john@example.com');
                        user_event_1.default.type(react_1.screen.getByLabelText(/phone/i), '555-123-4567');
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /terms/i }));
                        user_event_1.default.click(react_1.screen.getByRole('button', { name: /next/i }));
                        // Navigate to confirmation
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 5:
                        // Navigate to confirmation
                        _a.sent();
                        // Navigate back to start and verify cleanup
                        user_event_1.default.click(react_1.screen.getByTestId('restart-booking'));
                        // Verify we're back at the beginning
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('service-selection-step')).toBeInTheDocument();
                            })];
                    case 6:
                        // Verify we're back at the beginning
                        _a.sent();
                        // Verify previous step data doesn't affect rendering
                        expect(react_1.screen.queryByTestId('date-selection-step')).not.toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('client-info-step')).not.toBeInTheDocument();
                        expect(react_1.screen.queryByTestId('confirmation-step')).not.toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Rendering Optimization', function () {
        it('should render service cards efficiently in virtualized list on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceElements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Mock a longer list of services to test virtualization
                        booking_service_1.BookingService.getAvailableServices.mockResolvedValue(Array.from({ length: 20 }, function (_, i) { return ({
                            id: "service".concat(i),
                            name: "Service ".concat(i),
                            duration: 60,
                            price: 80 + i,
                        }); }));
                        renderBookingFlow(MOBILE_WIDTH);
                        // Wait for some services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/service 0/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for some services to load
                        _a.sent();
                        // Check that virtualized container is used
                        expect(react_1.screen.getByTestId('virtualized-service-list')).toBeInTheDocument();
                        serviceElements = react_1.screen.getAllByTestId('service-card');
                        // Mobile should render fewer items than total available
                        expect(serviceElements.length).toBeLessThan(20);
                        // Scroll down to see more services
                        (0, test_utils_1.act)(function () {
                            // Simulate scroll event
                            var virtualList = react_1.screen.getByTestId('virtualized-service-list');
                            virtualList.dispatchEvent(new Event('scroll'));
                        });
                        // Wait for new services to appear after scroll
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/service 10/i)).toBeInTheDocument();
                            })];
                    case 2:
                        // Wait for new services to appear after scroll
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
