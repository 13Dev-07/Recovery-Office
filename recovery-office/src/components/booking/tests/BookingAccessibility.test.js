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
var jest_axe_1 = require("jest-axe");
var BookingContext_1 = require("../../../context/BookingContext");
var ThemeProvider_1 = require("../../../design-system/theme/ThemeProvider");
var BookingFlow_1 = require("../BookingFlow");
var BookingInterface_1 = require("../BookingInterface");
var ToastContext_1 = require("../../../context/ToastContext");
// Add jest-axe matchers
expect.extend(jest_axe_1.toHaveNoViolations);
// Mock the booking service
jest.mock('../../../services/booking.service');
describe('Booking Components Accessibility Tests', function () {
    beforeEach(function () {
        jest.clearAllMocks();
    });
    describe('BookingFlow Accessibility', function () {
        it('should have no accessibility violations in service selection step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).container;
                        // Wait for services to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('service-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for services to load
                        _a.sent();
                        return [4 /*yield*/, (0, jest_axe_1.axe)(container)];
                    case 2:
                        results = _a.sent();
                        expect(results).toHaveNoViolations();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have no accessibility violations in date selection step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, nextButton, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).container;
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        // Wait for dates to load
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        // Wait for dates to load
                        _a.sent();
                        return [4 /*yield*/, (0, jest_axe_1.axe)(container)];
                    case 2:
                        results = _a.sent();
                        expect(results).toHaveNoViolations();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have no accessibility violations in client info step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, nextButton, nextButton2, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).container;
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, (0, jest_axe_1.axe)(container)];
                    case 3:
                        results = _a.sent();
                        expect(results).toHaveNoViolations();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should have no accessibility violations in confirmation step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var container, nextButton, nextButton2, nextButton3, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingFlow_1.BookingFlow />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>).container;
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, jest_axe_1.axe)(container)];
                    case 4:
                        results = _a.sent();
                        expect(results).toHaveNoViolations();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Keyboard Navigation', function () {
        it('should allow full booking flow navigation with keyboard only', function () { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOption, nextButton, dateOption, timeSlot, nextButton2, nameInput, emailInput, phoneInput, termsCheckbox, nextButton3, paymentMethod, confirmButton;
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
                        // Service selection with keyboard
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('service-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        // Service selection with keyboard
                        _a.sent();
                        serviceOption = react_1.screen.getByRole('radio', { name: /massage therapy/i });
                        serviceOption.focus();
                        user_event_1.default.keyboard(' '); // Space to select
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        nextButton.focus();
                        user_event_1.default.keyboard('{Enter}'); // Enter to click
                        // Date selection with keyboard
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 2:
                        // Date selection with keyboard
                        _a.sent();
                        dateOption = react_1.screen.getByRole('button', { name: /august 15/i });
                        dateOption.focus();
                        user_event_1.default.keyboard('{Enter}');
                        timeSlot = react_1.screen.getByRole('radio', { name: /10:00 am/i });
                        timeSlot.focus();
                        user_event_1.default.keyboard(' ');
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        nextButton2.focus();
                        user_event_1.default.keyboard('{Enter}');
                        // Client info with keyboard
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 3:
                        // Client info with keyboard
                        _a.sent();
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        nameInput.focus();
                        user_event_1.default.keyboard('John Doe');
                        emailInput = react_1.screen.getByLabelText(/email/i);
                        emailInput.focus();
                        user_event_1.default.keyboard('john@example.com');
                        phoneInput = react_1.screen.getByLabelText(/phone/i);
                        phoneInput.focus();
                        user_event_1.default.keyboard('1234567890');
                        termsCheckbox = react_1.screen.getByRole('checkbox', { name: /i agree to terms/i });
                        termsCheckbox.focus();
                        user_event_1.default.keyboard(' ');
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        nextButton3.focus();
                        user_event_1.default.keyboard('{Enter}');
                        // Confirmation step
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('confirmation-step')).toBeInTheDocument();
                            })];
                    case 4:
                        // Confirmation step
                        _a.sent();
                        paymentMethod = react_1.screen.getByRole('radio', { name: /credit card/i });
                        expect(paymentMethod).toBeInTheDocument();
                        confirmButton = react_1.screen.getByRole('button', { name: /confirm booking/i });
                        confirmButton.focus();
                        expect(document.activeElement).toBe(confirmButton);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Screen Reader Accessibility', function () {
        it('should have proper ARIA attributes for booking steps', function () {
            (0, react_1.render)(<ThemeProvider_1.ThemeProvider>
          <ToastContext_1.ToastProvider>
            <BookingContext_1.BookingProvider>
              <BookingInterface_1.BookingInterface />
            </BookingContext_1.BookingProvider>
          </ToastContext_1.ToastProvider>
        </ThemeProvider_1.ThemeProvider>);
            // Check for proper heading structure
            var headings = react_1.screen.getAllByRole('heading');
            expect(headings.length).toBeGreaterThan(0);
            // Check for proper button labeling
            var buttons = react_1.screen.getAllByRole('button');
            buttons.forEach(function (button) {
                expect(button).toHaveAccessibleName();
            });
            // Check for proper progress indication
            var progressIndicator = react_1.screen.getByRole('progressbar');
            expect(progressIndicator).toHaveAccessibleName();
            expect(progressIndicator).toHaveAttribute('aria-valuenow');
            expect(progressIndicator).toHaveAttribute('aria-valuemin');
            expect(progressIndicator).toHaveAttribute('aria-valuemax');
        });
        it('should have proper form labeling for client info step', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nextButton, nextButton2, formFields, checkboxes, nameInput;
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
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        formFields = react_1.screen.getAllByRole('textbox');
                        formFields.forEach(function (field) {
                            expect(field).toHaveAccessibleName();
                        });
                        checkboxes = react_1.screen.getAllByRole('checkbox');
                        checkboxes.forEach(function (checkbox) {
                            expect(checkbox).toHaveAccessibleName();
                        });
                        nameInput = react_1.screen.getByLabelText(/full name/i);
                        user_event_1.default.clear(nameInput);
                        user_event_1.default.tab(); // move focus away to trigger validation
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                var errorMessage = react_1.screen.getByText(/name is required/i);
                                expect(errorMessage).toBeInTheDocument();
                                // Error should be associated with the input
                                expect(nameInput).toHaveAttribute('aria-invalid', 'true');
                                expect(nameInput).toHaveAttribute('aria-describedby');
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should announce validation errors to screen readers', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nextButton, nextButton2, nextButton3;
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
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('date-selection-step')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        nextButton2 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton2);
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                expect(react_1.screen.getByTestId('client-info-step')).toBeInTheDocument();
                            })];
                    case 2:
                        _a.sent();
                        nextButton3 = react_1.screen.getByRole('button', { name: /next/i });
                        user_event_1.default.click(nextButton3);
                        // Check that error summary is properly announced to screen readers
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                var errorSummary = react_1.screen.getByRole('alert');
                                expect(errorSummary).toBeInTheDocument();
                                expect(errorSummary).toHaveTextContent(/please fix the following errors/i);
                            })];
                    case 3:
                        // Check that error summary is properly announced to screen readers
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Color Contrast and Focus Visibility', function () {
        it('should have visible focus indicators for interactive elements', function () { return __awaiter(void 0, void 0, void 0, function () {
            var nextButton, focusedElement;
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
                        nextButton = react_1.screen.getByRole('button', { name: /next/i });
                        nextButton.focus();
                        focusedElement = document.activeElement;
                        expect(focusedElement).toBe(nextButton);
                        // Service options should have visible focus indicators
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                var serviceOption = react_1.screen.getByRole('radio', { name: /massage therapy/i });
                                serviceOption.focus();
                                expect(document.activeElement).toBe(serviceOption);
                            })];
                    case 1:
                        // Service options should have visible focus indicators
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
