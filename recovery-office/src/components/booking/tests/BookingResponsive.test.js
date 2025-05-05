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
var BookingNavControls_1 = require("../BookingNavControls");
var BookingInterface_1 = require("../BookingInterface");
var ToastContext_1 = require("../../../context/ToastContext");
var booking_service_1 = require("../../../services/booking.service");
var test_utils_1 = require("react-dom/test-utils");
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
// Mock resize observer
beforeAll(function () {
    global.ResizeObserver = jest.fn().mockImplementation(function () { return ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }); });
});
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
describe('Booking Components Responsive Tests', function () {
    var setMediaMatches = function (matches) {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(function (query) { return ({
                matches: matches,
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            }); }),
        });
    };
    describe('BookingNavControls', function () {
        var mockProps = {
            currentStep: 1,
            totalSteps: 4,
            onNext: jest.fn(),
            onBack: jest.fn(),
            isNextDisabled: false,
            isBackDisabled: false,
            confirmationText: 'Confirm',
            isConfirmStep: false,
        };
        it('should render with desktop styling by default', function () {
            setMediaMatches(false); // Desktop
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <BookingNavControls_1.BookingNavControls {...mockProps}/>
        </ThemeProvider_1.ThemeProvider>);
            var navContainer = react_1.screen.getByTestId('booking-nav-controls');
            expect(navContainer).toHaveStyle({
                display: 'flex',
                justifyContent: 'space-between'
            });
            // Should have desktop-sized buttons
            var backButton = react_1.screen.getByRole('button', { name: /back/i });
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            expect(backButton).toBeInTheDocument();
            expect(nextButton).toBeInTheDocument();
        });
        it('should render with tablet styling on tablets', function () {
            // Set tablet media query match
            setMediaMatches(true);
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <BookingNavControls_1.BookingNavControls {...mockProps} deviceType="tablet"/>
        </ThemeProvider_1.ThemeProvider>);
            var navContainer = react_1.screen.getByTestId('booking-nav-controls');
            expect(navContainer).toHaveStyle({
                position: 'fixed',
                bottom: '0'
            });
            // Should have tablet-optimized buttons
            var backButton = react_1.screen.getByRole('button', { name: /back/i });
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            expect(backButton).toBeInTheDocument();
            expect(nextButton).toBeInTheDocument();
        });
        it('should render with mobile styling on mobile', function () {
            // Set mobile media query match
            setMediaMatches(true);
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <BookingNavControls_1.BookingNavControls {...mockProps} deviceType="mobile"/>
        </ThemeProvider_1.ThemeProvider>);
            var navContainer = react_1.screen.getByTestId('booking-nav-controls');
            expect(navContainer).toHaveStyle({
                position: 'fixed',
                bottom: '0',
                width: '100%',
                padding: expect.any(String)
            });
            // Should have mobile-sized buttons
            var backButton = react_1.screen.getByRole('button', { name: /back/i });
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            expect(backButton).toBeInTheDocument();
            expect(nextButton).toBeInTheDocument();
        });
        it('should disable buttons when specified', function () {
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <BookingNavControls_1.BookingNavControls {...mockProps} isNextDisabled={true} isBackDisabled={true}/>
        </ThemeProvider_1.ThemeProvider>);
            var backButton = react_1.screen.getByRole('button', { name: /back/i });
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            expect(backButton).toBeDisabled();
            expect(nextButton).toBeDisabled();
        });
        it('should show confirmation text on final step', function () {
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <BookingNavControls_1.BookingNavControls {...mockProps} isConfirmStep={true} confirmationText="Complete Booking"/>
        </ThemeProvider_1.ThemeProvider>);
            var confirmButton = react_1.screen.getByRole('button', { name: /complete booking/i });
            expect(confirmButton).toBeInTheDocument();
        });
    });
    describe('BookingInterface', function () {
        it('should render with desktop layout by default', function () {
            setMediaMatches(false); // Desktop
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingInterface_1.BookingInterface />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            var bookingInterface = react_1.screen.getByTestId('booking-interface');
            expect(bookingInterface).toBeInTheDocument();
            // Desktop layout has a sidebar
            var sidebar = react_1.screen.getByTestId('booking-sidebar');
            expect(sidebar).toBeInTheDocument();
            // Desktop layout has the flow and sidebar side by side
            expect(bookingInterface).toHaveStyle({
                display: 'grid',
                gridTemplateColumns: expect.stringContaining('1fr')
            });
        });
        it('should render with tablet layout on tablets', function () {
            // Set tablet media query match
            setMediaMatches(true);
            // Mock the useMediaQuery hook to return tablet
            jest.mock('../../../hooks/useMediaQuery', function () { return ({
                useMediaQuery: function () { return true; },
                useDeviceType: function () { return 'tablet'; }
            }); });
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingInterface_1.BookingInterface />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            var bookingInterface = react_1.screen.getByTestId('booking-interface');
            expect(bookingInterface).toBeInTheDocument();
            // Tablet layout stacks the sidebar and flow
            expect(bookingInterface).toHaveStyle({
                display: 'flex',
                flexDirection: 'column'
            });
        });
        it('should render with mobile layout on mobile', function () {
            // Set mobile media query match
            setMediaMatches(true);
            // Mock the useMediaQuery hook to return mobile
            jest.mock('../../../hooks/useMediaQuery', function () { return ({
                useMediaQuery: function () { return true; },
                useDeviceType: function () { return 'mobile'; }
            }); });
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingInterface_1.BookingInterface />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            var bookingInterface = react_1.screen.getByTestId('booking-interface');
            expect(bookingInterface).toBeInTheDocument();
            // Mobile layout has collapsed sidebar
            var sidebar = react_1.screen.queryByTestId('booking-sidebar-expanded');
            expect(sidebar).not.toBeInTheDocument();
            // Should have a toggle button for the sidebar
            var toggleButton = react_1.screen.getByRole('button', { name: /view summary/i });
            expect(toggleButton).toBeInTheDocument();
        });
    });
    describe('BookingFlow Responsive Behavior', function () {
        it('should adapt calendar display for desktop', function () {
            setMediaMatches(false); // Desktop
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            // Navigate to date selection step
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            nextButton.click();
            // Calendar should display inline
            var calendar = react_1.screen.getByTestId('date-selection-calendar');
            expect(calendar).toHaveStyle({
                display: 'grid'
            });
        });
        it('should use modal calendar for mobile', function () {
            // Set mobile media query match
            setMediaMatches(true);
            // Mock the useMediaQuery hook to return mobile
            jest.mock('../../../hooks/useMediaQuery', function () { return ({
                useMediaQuery: function () { return true; },
                useDeviceType: function () { return 'mobile'; }
            }); });
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            // Navigate to date selection step
            var nextButton = react_1.screen.getByRole('button', { name: /next/i });
            nextButton.click();
            // Should have a button to open calendar modal
            var openCalendarButton = react_1.screen.getByRole('button', { name: /select date/i });
            expect(openCalendarButton).toBeInTheDocument();
            // Calendar should initially be hidden
            var calendarModal = react_1.screen.queryByTestId('mobile-calendar-modal');
            expect(calendarModal).not.toBeVisible();
            // Click to open calendar
            openCalendarButton.click();
            // Modal should be visible
            expect(react_1.screen.getByTestId('mobile-calendar-modal')).toBeVisible();
        });
    });
});
// Match media mock
function setupMatchMedia(width) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(function (query) {
            var _a, _b;
            return ({
                matches: query.includes('max-width')
                    ? width <= parseInt(((_a = query.match(/\d+/)) === null || _a === void 0 ? void 0 : _a[0]) || '0')
                    : width >= parseInt(((_b = query.match(/\d+/)) === null || _b === void 0 ? void 0 : _b[0]) || '0'),
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            });
        }),
    });
}
// Mock window resize
function mockWindowResize(width, height) {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: width });
    Object.defineProperty(window, 'innerHeight', { writable: true, value: height });
    setupMatchMedia(width);
    window.dispatchEvent(new Event('resize'));
}
describe('Booking Responsive Layout Tests', function () {
    describe('Mobile Layout (< 768px)', function () {
        beforeEach(function () {
            mockWindowResize(375, 667); // iPhone 8 dimensions
        });
        it('should display a single column layout on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, stepper, navControls;
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
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        container = react_1.screen.getByTestId('booking-container');
                        expect(container).toHaveClass('mobileLayout');
                        expect(container).not.toHaveClass('tabletLayout');
                        expect(container).not.toHaveClass('desktopLayout');
                        stepper = react_1.screen.getByTestId('booking-stepper');
                        expect(stepper).toBeInTheDocument();
                        expect(stepper).toHaveClass('mobileStepper');
                        navControls = react_1.screen.getByTestId('booking-nav-controls');
                        expect(navControls).toHaveClass('mobileNavControls');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should show mobile optimized calendar for date selection on small screens', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, calendar;
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
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
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
                        calendar = react_1.screen.getByTestId('date-calendar');
                        expect(calendar).toHaveClass('mobileCalendar');
                        expect(calendar).not.toHaveClass('desktopCalendar');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use full width form fields on mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, formContainer, nameField;
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
                        formContainer = react_1.screen.getByTestId('client-info-form');
                        expect(formContainer).toHaveClass('mobileForm');
                        nameField = react_1.screen.getByTestId('full-name-field');
                        expect(nameField).toHaveClass('fullWidthField');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Tablet Layout (768px - 1023px)', function () {
        beforeEach(function () {
            mockWindowResize(768, 1024); // iPad dimensions
        });
        it('should display a two-column layout on tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, stepper, sidebar;
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
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        container = react_1.screen.getByTestId('booking-container');
                        expect(container).toHaveClass('tabletLayout');
                        expect(container).not.toHaveClass('mobileLayout');
                        expect(container).not.toHaveClass('desktopLayout');
                        stepper = react_1.screen.getByTestId('booking-stepper');
                        expect(stepper).toBeInTheDocument();
                        expect(stepper).toHaveClass('tabletStepper');
                        sidebar = react_1.screen.getByTestId('booking-sidebar');
                        expect(sidebar).toBeInTheDocument();
                        expect(sidebar).toHaveClass('tabletSidebar');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use tablet-optimized nav controls', function () { return __awaiter(void 0, void 0, void 0, function () {
            var navControls, backButton, nextButton;
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
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        navControls = react_1.screen.getByTestId('booking-nav-controls');
                        expect(navControls).toBeInTheDocument();
                        expect(navControls).toHaveClass('tabletNavControls');
                        backButton = react_1.screen.getByRole('button', { name: /back/i });
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        expect(backButton).toHaveClass('tabletButton');
                        expect(nextButton).toHaveClass('tabletButton');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Desktop Layout (≥ 1024px)', function () {
        beforeEach(function () {
            mockWindowResize(1440, 900); // Common desktop resolution
        });
        it('should display a two-column wider layout on desktop', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, stepper, sidebar;
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
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        container = react_1.screen.getByTestId('booking-container');
                        expect(container).toHaveClass('desktopLayout');
                        expect(container).not.toHaveClass('mobileLayout');
                        expect(container).not.toHaveClass('tabletLayout');
                        stepper = react_1.screen.getByTestId('booking-stepper');
                        expect(stepper).toBeInTheDocument();
                        expect(stepper).toHaveClass('desktopStepper');
                        sidebar = react_1.screen.getByTestId('booking-sidebar');
                        expect(sidebar).toBeInTheDocument();
                        expect(sidebar).toHaveClass('desktopSidebar');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should use desktop-optimized calendar for date selection', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, calendar;
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
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
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
                        calendar = react_1.screen.getByTestId('date-calendar');
                        expect(calendar).toHaveClass('desktopCalendar');
                        expect(calendar).not.toHaveClass('mobileCalendar');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Responsive Behavior on Resize', function () {
        it('should adapt layout when resizing from desktop to mobile', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rerender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Start with desktop size
                        mockWindowResize(1440, 900);
                        rerender = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).rerender;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        // Verify desktop layout
                        expect(react_1.screen.getByTestId('booking-container')).toHaveClass('desktopLayout');
                        // Change to mobile size
                        (0, test_utils_1.act)(function () {
                            mockWindowResize(375, 667);
                        });
                        // Force re-render
                        rerender(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Should now have mobile layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('booking-container')).toHaveClass('mobileLayout');
                                expect(react_1.screen.getByTestId('booking-container')).not.toHaveClass('desktopLayout');
                            })];
                    case 2:
                        // Should now have mobile layout
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should adapt layout when resizing from mobile to tablet', function () { return __awaiter(void 0, void 0, void 0, function () {
            var rerender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Start with mobile size
                        mockWindowResize(375, 667);
                        rerender = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).rerender;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        // Verify mobile layout
                        expect(react_1.screen.getByTestId('booking-container')).toHaveClass('mobileLayout');
                        // Change to tablet size
                        (0, test_utils_1.act)(function () {
                            mockWindowResize(768, 1024);
                        });
                        // Force re-render
                        rerender(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
                        // Should now have tablet layout
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('booking-container')).toHaveClass('tabletLayout');
                                expect(react_1.screen.getByTestId('booking-container')).not.toHaveClass('mobileLayout');
                            })];
                    case 2:
                        // Should now have tablet layout
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Touch Interaction Tests', function () {
        beforeEach(function () {
            mockWindowResize(768, 1024); // Tablet dimensions
        });
        it('should support touch gestures for date selection', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, calendar, calendarSwipeZone, touchStartCalled, touchMoveCalled, touchEndCalled, originalAddEventListener;
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
                        // Navigate to date selection
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByText(/massage therapy/i)).toBeInTheDocument();
                            })];
                    case 1:
                        // Navigate to date selection
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
                        calendar = react_1.screen.getByTestId('date-calendar');
                        expect(calendar).toHaveAttribute('data-swipeable', 'true');
                        calendarSwipeZone = react_1.screen.getByTestId('calendar-swipe-zone');
                        expect(calendarSwipeZone).toBeInTheDocument();
                        touchStartCalled = false;
                        touchMoveCalled = false;
                        touchEndCalled = false;
                        originalAddEventListener = calendarSwipeZone.addEventListener;
                        calendarSwipeZone.addEventListener = jest.fn(function (event, handler) {
                            if (event === 'touchstart')
                                touchStartCalled = true;
                            if (event === 'touchmove')
                                touchMoveCalled = true;
                            if (event === 'touchend')
                                touchEndCalled = true;
                            return originalAddEventListener.call(calendarSwipeZone, event, handler);
                        });
                        // Trigger touch events
                        fireTouch(calendarSwipeZone, 'touchstart', 300, 200);
                        fireTouch(calendarSwipeZone, 'touchmove', 200, 200);
                        fireTouch(calendarSwipeZone, 'touchend', 150, 200);
                        expect(touchStartCalled).toBe(true);
                        expect(touchMoveCalled).toBe(true);
                        expect(touchEndCalled).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// Helper function to fire touch events
function fireTouch(element, eventType, x, y) {
    var touchObj = new Touch({
        identifier: Date.now(),
        target: element,
        clientX: x,
        clientY: y,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5,
    });
    var touchEvent = new TouchEvent(eventType, {
        cancelable: true,
        bubbles: true,
        touches: [touchObj],
        targetTouches: [touchObj],
        changedTouches: [touchObj],
        shiftKey: false,
    });
    element.dispatchEvent(touchEvent);
}
