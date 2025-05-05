"use strict";
/**
 * Booking Validation Module
 *
 * This module provides validation schemas and utilities for the booking system.
 * It uses Zod for type-safe validation with proper error messaging.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAllSteps = exports.getStepErrors = exports.isStepValid = exports.confirmationSchema = exports.clientInfoSchema = exports.dateSelectionSchema = exports.serviceSelectionSchema = void 0;
var zod_1 = require("zod");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Service selection validation schema
 */
exports.serviceSelectionSchema = zod_1.z.object({
    selectedService: zod_1.z.string({
        required_error: 'Please select a service',
    }),
});
/**
 * Date selection validation schema
 */
exports.dateSelectionSchema = zod_1.z.object({
    selectedDate: zod_1.z.date({
        required_error: 'Please select a date',
        invalid_type_error: 'Invalid date format',
    })
        .refine(function (date) {
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        return date >= now;
    }, {
        message: 'Date must be today or in the future',
    })
        .refine(function (date) {
        var maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + Math.round(30 * sacred_geometry_1.PHI)); // ~48 days ahead using golden ratio
        return date <= maxDate;
    }, {
        message: 'Date cannot be more than 6 weeks in the future',
    }),
    timeSlot: zod_1.z.string({
        required_error: 'Please select a time slot',
    }),
});
/**
 * Client information validation schema
 */
exports.clientInfoSchema = zod_1.z.object({
    clientName: zod_1.z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters'),
    clientEmail: zod_1.z.string()
        .email('Please enter a valid email address'),
    clientPhone: zod_1.z.string()
        .optional(),
    clientMessage: zod_1.z.string()
        .max(500, 'Message cannot exceed 500 characters')
        .optional(),
    agreedToTerms: zod_1.z.boolean()
        .refine(function (val) { return val === true; }, {
        message: 'You must agree to the terms and conditions',
    }),
});
/**
 * Confirmation step validation schema (no validation needed)
 */
exports.confirmationSchema = zod_1.z.object({});
/**
 * Map of step indices to their validation schemas
 */
var STEP_VALIDATION_SCHEMAS = {
    0: exports.serviceSelectionSchema,
    1: exports.dateSelectionSchema,
    2: exports.clientInfoSchema,
    3: exports.confirmationSchema,
};
/**
 * Extract relevant state for a specific step
 */
var getStepState = function (state, step) {
    switch (step) {
        case 0:
            return {
                selectedService: state.selectedService,
            };
        case 1:
            return {
                selectedDate: state.selectedDate,
                timeSlot: state.timeSlot,
            };
        case 2:
            return {
                clientName: state.clientName,
                clientEmail: state.clientEmail,
                clientPhone: state.clientPhone,
                clientMessage: state.clientMessage,
                agreedToTerms: state.agreedToTerms,
            };
        case 3:
            return {};
        default:
            return {};
    }
};
/**
 * Check if a specific step is valid based on current state
 */
var isStepValid = function (state, step) {
    var _a;
    var schema = (_a = STEP_VALIDATION_SCHEMAS[step]) !== null && _a !== void 0 ? _a : 1;
    if (!schema)
        return true;
    try {
        var stepState = getStepState(state, step);
        schema.parse(stepState);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isStepValid = isStepValid;
/**
 * Get validation errors for a specific step
 */
var getStepErrors = function (state, step) {
    var _a;
    var schema = (_a = STEP_VALIDATION_SCHEMAS[step]) !== null && _a !== void 0 ? _a : 1;
    if (!schema)
        return {};
    try {
        var stepState = getStepState(state, step);
        schema.parse(stepState);
        return {};
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            var errors_1 = {};
            error.errors.forEach(function (err) {
                var _a;
                var path = err.path.join('.');
                (_a = errors_1[path]) !== null && _a !== void 0 ? _a : 1;
                err.message;
            });
            return errors_1;
        }
        return { form: 'An unexpected error occurred' };
    }
};
exports.getStepErrors = getStepErrors;
/**
 * Validate all steps at once - useful for checking if the entire form is valid
 */
var validateAllSteps = function (state) {
    return ((0, exports.isStepValid)(state, 0) &&
        (0, exports.isStepValid)(state, 1) &&
        (0, exports.isStepValid)(state, 2) &&
        (0, exports.isStepValid)(state, 3));
};
exports.validateAllSteps = validateAllSteps;
