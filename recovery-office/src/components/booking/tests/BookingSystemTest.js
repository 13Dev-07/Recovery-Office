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
exports.testBookingFlowEndToEnd = testBookingFlowEndToEnd;
exports.testValidationScenarios = testValidationScenarios;
exports.runAllTests = runAllTests;
var booking_service_1 = require("../../../services/booking.service");
var validation_1 = require("../validation");
/**
 * Booking System Test Suite
 *
 * This file contains automated tests for the booking system flow
 * It validates state management, API calls, and form validations
 * Following sacred geometry principles for timing and retries
 */
// Mock data for testing
var TEST_SERVICE_ID = 'investment-fraud';
var TEST_DATE = new Date(Date.now() + 86400000 * 3); // 3 days from now
var TEST_TIME_SLOT_ID = "slot-".concat(TEST_DATE.toISOString().split('T')[0], "-1");
var TEST_CLIENT_INFO = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '(123) 456-7890',
    dateOfBirth: '1990-01-01',
    address: '123 Test St',
    termsAccepted: true
};
/**
 * Performs end-to-end validation of the booking flow
 * Tests each step in sequence, validating state and API calls
 */
function testBookingFlowEndToEnd() {
    return __awaiter(this, void 0, void 0, function () {
        var services, selectedService, availableDates, testDateStr_1, isDateAvailable, timeSlots, availableSlot, paymentIntent, confirmationData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Starting end-to-end booking flow test...');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    // Step 1: Service Selection
                    console.log('Testing Service Selection step...');
                    return [4 /*yield*/, booking_service_1.BookingService.getAvailableServices()];
                case 2:
                    services = _a.sent();
                    if (!services || services.length === 0) {
                        throw new Error('Failed to fetch available services');
                    }
                    selectedService = services.find(function (service) { return service.id === TEST_SERVICE_ID; });
                    if (!selectedService) {
                        throw new Error("Test service ".concat(TEST_SERVICE_ID, " not found in available services"));
                    }
                    // Validate service selection with schema
                    try {
                        validation_1.serviceSelectionSchema.parse({ serviceId: selectedService.id });
                        console.log('✓ Service selection validation passed');
                    }
                    catch (error) {
                        console.error('✗ Service selection validation failed:', error);
                        throw error;
                    }
                    // Step 2: Date Selection
                    console.log('Testing Date Selection step...');
                    return [4 /*yield*/, booking_service_1.BookingService.getAvailableDates(selectedService.id)];
                case 3:
                    availableDates = _a.sent();
                    if (!availableDates || availableDates.length === 0) {
                        throw new Error('Failed to fetch available dates');
                    }
                    testDateStr_1 = TEST_DATE.toISOString().split('T')[0];
                    isDateAvailable = availableDates.some(function (d) {
                        return d.date.split('T')[0] === testDateStr_1 && d.available;
                    });
                    if (!isDateAvailable) {
                        console.warn("Test date ".concat(testDateStr_1, " not available, using first available date"));
                        TEST_DATE = new Date(availableDates[0].date);
                    }
                    return [4 /*yield*/, booking_service_1.BookingService.getAvailableTimeSlots(selectedService.id, TEST_DATE.toISOString())];
                case 4:
                    timeSlots = _a.sent();
                    if (!timeSlots || timeSlots.length === 0) {
                        throw new Error('Failed to fetch available time slots');
                    }
                    availableSlot = timeSlots.find(function (slot) { return slot.available; });
                    if (!availableSlot) {
                        throw new Error('No available time slots found for test date');
                    }
                    // Validate date selection with schema
                    try {
                        validation_1.dateSelectionSchema.parse({
                            date: TEST_DATE.toISOString(),
                            timeSlotId: availableSlot.id
                        });
                        console.log('✓ Date selection validation passed');
                    }
                    catch (error) {
                        console.error('✗ Date selection validation failed:', error);
                        throw error;
                    }
                    // Step 3: Client Information
                    console.log('Testing Client Information step...');
                    // Validate client info with schema
                    try {
                        validation_1.clientInfoSchema.parse(TEST_CLIENT_INFO);
                        console.log('✓ Client information validation passed');
                    }
                    catch (error) {
                        console.error('✗ Client information validation failed:', error);
                        throw error;
                    }
                    // Step 4: Confirmation
                    console.log('Testing Confirmation step...');
                    return [4 /*yield*/, booking_service_1.BookingService.createPaymentIntent({
                            serviceId: selectedService.id,
                            date: TEST_DATE.toISOString(),
                            timeSlotId: availableSlot.id,
                            amount: selectedService.price || 0
                        })];
                case 5:
                    paymentIntent = _a.sent();
                    if (!paymentIntent || !paymentIntent.id) {
                        throw new Error('Failed to create payment intent');
                    }
                    confirmationData = {
                        paymentMethod: 'creditCard',
                        paymentIntentId: paymentIntent.id,
                        detailsReviewed: true,
                        cancellationPolicyAccepted: true,
                        emailNotifications: true,
                        textNotifications: false
                    };
                    // Validate confirmation with schema
                    try {
                        validation_1.confirmationStepSchema.parse(confirmationData);
                        console.log('✓ Confirmation validation passed');
                    }
                    catch (error) {
                        console.error('✗ Confirmation validation failed:', error);
                        throw error;
                    }
                    // Submit booking (commented out to prevent actual booking creation during tests)
                    /*
                    const bookingResult = await BookingService.submitBooking({
                      serviceId: selectedService.id,
                      date: TEST_DATE.toISOString(),
                      timeSlotId: availableSlot.id,
                      clientInfo: TEST_CLIENT_INFO,
                      ...confirmationData
                    });
                    
                    if (!bookingResult || !bookingResult.bookingId) {
                      throw new Error('Failed to submit booking');
                    }
                    
                    console.log(`✓ Booking submitted successfully. Booking ID: ${bookingResult.bookingId}`);
                    */
                    console.log('End-to-end booking flow test completed successfully!');
                    return [2 /*return*/, true];
                case 6:
                    error_1 = _a.sent();
                    console.error('Booking flow test failed:', error_1);
                    return [2 /*return*/, false];
                case 7: return [2 /*return*/];
            }
        });
    });
}
/**
 * Tests validation error scenarios for each step
 * Verifies that invalid inputs are properly caught by validation schemas
 */
function testValidationScenarios() {
    console.log('Testing validation scenarios...');
    // Service Selection validation tests
    console.log('Testing Service Selection validation...');
    try {
        // Missing service ID
        try {
            validation_1.serviceSelectionSchema.parse({});
            console.error('✗ Should have failed: empty service selection');
        }
        catch (error) {
            console.log('✓ Correctly caught missing service ID');
        }
        // Invalid service ID
        try {
            validation_1.serviceSelectionSchema.parse({ serviceId: 123 });
            console.error('✗ Should have failed: invalid service ID type');
        }
        catch (error) {
            console.log('✓ Correctly caught invalid service ID type');
        }
    }
    catch (error) {
        console.error('Service selection validation tests failed:', error);
    }
    // Date Selection validation tests
    console.log('Testing Date Selection validation...');
    try {
        // Missing date
        try {
            validation_1.dateSelectionSchema.parse({ timeSlotId: 'test-slot' });
            console.error('✗ Should have failed: missing date');
        }
        catch (error) {
            console.log('✓ Correctly caught missing date');
        }
        // Missing time slot
        try {
            validation_1.dateSelectionSchema.parse({ date: new Date().toISOString() });
            console.error('✗ Should have failed: missing time slot');
        }
        catch (error) {
            console.log('✓ Correctly caught missing time slot');
        }
        // Invalid date format
        try {
            validation_1.dateSelectionSchema.parse({ date: 'not-a-date', timeSlotId: 'test-slot' });
            console.error('✗ Should have failed: invalid date format');
        }
        catch (error) {
            console.log('✓ Correctly caught invalid date format');
        }
        // Past date
        var pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        try {
            validation_1.dateSelectionSchema.parse({
                date: pastDate.toISOString(),
                timeSlotId: 'test-slot'
            });
            console.error('✗ Should have failed: past date');
        }
        catch (error) {
            console.log('✓ Correctly caught past date');
        }
    }
    catch (error) {
        console.error('Date selection validation tests failed:', error);
    }
    // Client Information validation tests
    console.log('Testing Client Information validation...');
    try {
        // Missing required fields
        try {
            validation_1.clientInfoSchema.parse({});
            console.error('✗ Should have failed: empty client info');
        }
        catch (error) {
            console.log('✓ Correctly caught missing required fields');
        }
        // Invalid email format
        try {
            validation_1.clientInfoSchema.parse(__assign(__assign({}, TEST_CLIENT_INFO), { email: 'not-an-email' }));
            console.error('✗ Should have failed: invalid email format');
        }
        catch (error) {
            console.log('✓ Correctly caught invalid email format');
        }
        // Invalid phone format
        try {
            validation_1.clientInfoSchema.parse(__assign(__assign({}, TEST_CLIENT_INFO), { phone: '123' }));
            console.error('✗ Should have failed: invalid phone format');
        }
        catch (error) {
            console.log('✓ Correctly caught invalid phone format');
        }
        // Terms not accepted
        try {
            validation_1.clientInfoSchema.parse(__assign(__assign({}, TEST_CLIENT_INFO), { termsAccepted: false }));
            console.error('✗ Should have failed: terms not accepted');
        }
        catch (error) {
            console.log('✓ Correctly caught terms not accepted');
        }
    }
    catch (error) {
        console.error('Client information validation tests failed:', error);
    }
    // Confirmation validation tests
    console.log('Testing Confirmation validation...');
    try {
        // Missing payment method
        try {
            validation_1.confirmationStepSchema.parse({
                paymentIntentId: 'test-intent',
                detailsReviewed: true,
                cancellationPolicyAccepted: true
            });
            console.error('✗ Should have failed: missing payment method');
        }
        catch (error) {
            console.log('✓ Correctly caught missing payment method');
        }
        // Details not reviewed
        try {
            validation_1.confirmationStepSchema.parse({
                paymentMethod: 'creditCard',
                paymentIntentId: 'test-intent',
                detailsReviewed: false,
                cancellationPolicyAccepted: true
            });
            console.error('✗ Should have failed: details not reviewed');
        }
        catch (error) {
            console.log('✓ Correctly caught details not reviewed');
        }
        // Cancellation policy not accepted
        try {
            validation_1.confirmationStepSchema.parse({
                paymentMethod: 'creditCard',
                paymentIntentId: 'test-intent',
                detailsReviewed: true,
                cancellationPolicyAccepted: false
            });
            console.error('✗ Should have failed: cancellation policy not accepted');
        }
        catch (error) {
            console.log('✓ Correctly caught cancellation policy not accepted');
        }
    }
    catch (error) {
        console.error('Confirmation validation tests failed:', error);
    }
    console.log('Validation scenario tests completed');
}
/**
 * Main test runner function
 */
function runAllTests() {
    return __awaiter(this, void 0, void 0, function () {
        var endToEndResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Running all booking system tests...');
                    // Test validation scenarios first
                    testValidationScenarios();
                    return [4 /*yield*/, testBookingFlowEndToEnd()];
                case 1:
                    endToEndResult = _a.sent();
                    console.log("Test suite completed. End-to-end flow ".concat(endToEndResult ? 'PASSED' : 'FAILED'));
                    return [2 /*return*/, endToEndResult];
            }
        });
    });
}
// Uncomment to run tests directly
// runAllTests(); 
