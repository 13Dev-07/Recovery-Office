"use strict";
/**
 * Booking Type Definitions
 *
 * This file contains TypeScript interfaces and types for the booking system.
 * It provides strong typing for booking form fields, state management,
 * and validation schemas based on sacred geometry principles.
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.canProceedToNextStep = exports.isStepComplete = exports.confirmationSchema = exports.clientInfoSchema = exports.dateSelectionSchema = exports.serviceSelectionSchema = exports.BookingActionType = exports.BOOKING_STEPS = exports.BookingStepId = void 0;
var zod_1 = require("zod");
var getFibonacciByIndex_1 = require("../utils/getFibonacciByIndex");
// ======================================================================
// Base Booking Types
// ======================================================================
/**
 * Booking Step IDs
 * Follows a natural progression aligned with the Fibonacci sequence for flow
 */
var BookingStepId;
(function (BookingStepId) {
    BookingStepId[BookingStepId["SERVICE_SELECTION"] = 0] = "SERVICE_SELECTION";
    BookingStepId[BookingStepId["DATE_SELECTION"] = 1] = "DATE_SELECTION";
    BookingStepId[BookingStepId["CLIENT_INFORMATION"] = 2] = "CLIENT_INFORMATION";
    BookingStepId[BookingStepId["CONFIRMATION"] = 3] = "CONFIRMATION";
    BookingStepId[BookingStepId["SUCCESS"] = 4] = "SUCCESS";
})(BookingStepId || (exports.BookingStepId = BookingStepId = {}));
/**
 * All booking steps with their metadata
 */
exports.BOOKING_STEPS = (_a = {},
    _a[BookingStepId.SERVICE_SELECTION] = {
        id: BookingStepId.SERVICE_SELECTION,
        title: 'Select Service',
        subtitle: 'Choose the service you need',
        order: (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), // 2
        isOptional: false,
    },
    _a[BookingStepId.DATE_SELECTION] = {
        id: BookingStepId.DATE_SELECTION,
        title: 'Select Date & Time',
        subtitle: 'Choose when you want to book',
        order: (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), // 5
        isOptional: false,
    },
    _a[BookingStepId.CLIENT_INFORMATION] = {
        id: BookingStepId.CLIENT_INFORMATION,
        title: 'Your Information',
        subtitle: 'Tell us about yourself',
        order: (0, getFibonacciByIndex_1.getFibonacciByIndex)(8), // 13
        isOptional: false,
    },
    _a[BookingStepId.CONFIRMATION] = {
        id: BookingStepId.CONFIRMATION,
        title: 'Confirm Booking',
        subtitle: 'Review and confirm your appointment',
        order: (0, getFibonacciByIndex_1.getFibonacciByIndex)(13), // 21
        isOptional: false,
    },
    _a[BookingStepId.SUCCESS] = {
        id: BookingStepId.SUCCESS,
        title: 'Booking Complete',
        subtitle: 'Your appointment has been scheduled',
        order: (0, getFibonacciByIndex_1.getFibonacciByIndex)(21), // 34
        isOptional: false,
    },
    _a);
// ======================================================================
// Booking Action Types
// ======================================================================
/**
 * Booking Action Types
 */
var BookingActionType;
(function (BookingActionType) {
    BookingActionType["SET_STEP"] = "SET_STEP";
    BookingActionType["SELECT_SERVICE"] = "SELECT_SERVICE";
    BookingActionType["SELECT_DATE"] = "SELECT_DATE";
    BookingActionType["SELECT_TIME_SLOT"] = "SELECT_TIME_SLOT";
    BookingActionType["SET_CLIENT_INFO"] = "SET_CLIENT_INFO";
    BookingActionType["SET_AVAILABLE_DATES"] = "SET_AVAILABLE_DATES";
    BookingActionType["SET_LOADING"] = "SET_LOADING";
    BookingActionType["SET_ERROR"] = "SET_ERROR";
    BookingActionType["CLEAR_ERROR"] = "CLEAR_ERROR";
    BookingActionType["COMPLETE_STEP"] = "COMPLETE_STEP";
    BookingActionType["SET_BOOKING_REFERENCE"] = "SET_BOOKING_REFERENCE";
    BookingActionType["RESET_FORM"] = "RESET_FORM";
})(BookingActionType || (exports.BookingActionType = BookingActionType = {}));
// ======================================================================
// Booking Validation Schemas (Zod)
// ======================================================================
/**
 * Service Selection Validation Schema
 */
exports.serviceSelectionSchema = zod_1.z.object({
    serviceId: zod_1.z.string({
        required_error: 'Please select a service',
    }),
});
/**
 * Date Selection Validation Schema
 */
exports.dateSelectionSchema = zod_1.z.object({
    date: zod_1.z.string({
        required_error: 'Please select a date',
    }).regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
    timeSlotId: zod_1.z.string({
        required_error: 'Please select a time slot',
    }),
});
/**
 * Client Information Validation Schema
 */
exports.clientInfoSchema = zod_1.z.object({
    firstName: zod_1.z.string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name cannot exceed 50 characters'),
    lastName: zod_1.z.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name cannot exceed 50 characters'),
    email: zod_1.z.string()
        .email('Please enter a valid email address'),
    phone: zod_1.z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number cannot exceed 15 digits'),
    dateOfBirth: zod_1.z.string().optional(),
    preferredContactMethod: zod_1.z.enum(['email', 'phone', 'text'], {
        required_error: 'Please select a preferred contact method',
    }),
    isNewClient: zod_1.z.boolean(),
    additionalNotes: zod_1.z.string().max(500, 'Notes cannot exceed 500 characters').optional(),
    privacyConsent: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: 'You must consent to our privacy policy' }); },
    }),
});
/**
 * Confirmation Validation Schema
 */
exports.confirmationSchema = zod_1.z.object({
    termsAccepted: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: 'You must accept the terms and conditions' }); },
    }),
});
// Type guard to check if a booking step is complete
var isStepComplete = function (state, step) {
    return state.completedSteps.has(step);
};
exports.isStepComplete = isStepComplete;
// Type guard to check if a booking can proceed to the next step
var canProceedToNextStep = function (state, currentStep) {
    switch (currentStep) {
        case BookingStepId.SERVICE_SELECTION:
            return !!state.selectedService;
        case BookingStepId.DATE_SELECTION:
            return !!state.selectedDate && !!state.selectedTimeSlot;
        case BookingStepId.CLIENT_INFORMATION:
            return !!state.clientInfo;
        case BookingStepId.CONFIRMATION:
            return true;
        case BookingStepId.SUCCESS:
            return true;
        default:
            return false;
    }
};
exports.canProceedToNextStep = canProceedToNextStep;
