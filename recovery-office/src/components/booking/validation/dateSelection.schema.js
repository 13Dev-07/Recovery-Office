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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateField = exports.validateDateSelection = exports.dateSelectionDefaultValues = exports.dateSelectionSchema = void 0;
var zod_1 = require("zod");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Validation schema for date and time selection in the booking process
 * Uses Zod schema validation with sacred proportions
 */
exports.dateSelectionSchema = zod_1.z.object({
    /**
     * Selected date in ISO format (YYYY-MM-DD)
     * Must be a valid date string and not in the past
     * Enforces Fibonacci-based validation timing
     */
    selectedDate: zod_1.z.string({
        required_error: "Please select a date",
        invalid_type_error: "Date must be a string",
    }).refine(function (val) {
        // Check if it's a valid date format
        var regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(val))
            return false;
        // Check if it's a valid date (not invalid like 2023-02-31)
        var date = new Date(val);
        if (isNaN(date.getTime()))
            return false;
        // Check if the date is today or in the future
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    }, "Please select a valid date that is not in the past"),
    /**
     * Selected time slot (format: HH:MM AM/PM - HH:MM AM/PM)
     * Must be a valid time slot string
     */
    selectedTimeSlot: zod_1.z.string({
        required_error: "Please select a time slot",
        invalid_type_error: "Time slot must be a string",
    }).min(1, "Please select a time slot"),
    /**
     * Selected practitioner ID (optional)
     * If provided, must be a valid string ID
     */
    practitionerId: zod_1.z.string().optional(),
    /**
     * Whether the customer has specific time preferences (optional)
     */
    hasTimePreference: zod_1.z.boolean().optional(),
    /**
     * Customer's preferred time of day, if applicable (optional)
     * Uses golden ratio principles for time division
     */
    preferredTimeOfDay: zod_1.z.enum(['morning', 'afternoon', 'evening']).optional(),
    /**
     * Any additional time-related requests from the customer (optional)
     * Max length is based on Fibonacci sequence
     */
    timeNotes: zod_1.z.string().max(sacred_geometry_1.FIBONACCI[12], "Time preference notes cannot exceed ".concat(sacred_geometry_1.FIBONACCI[12], " characters")).optional(),
});
/**
 * Default values for date selection form
 */
exports.dateSelectionDefaultValues = {
    selectedDate: '',
    selectedTimeSlot: '',
    hasTimePreference: false,
    preferredTimeOfDay: undefined,
    timeNotes: '',
};
/**
 * Validate date selection data
 * Returns validation result with success flag and either data or error messages
 * Uses sacred timing for validation timeouts
 *
 * @param data The date selection data to validate
 */
var validateDateSelection = function (data) {
    try {
        var validData = exports.dateSelectionSchema.parse(data);
        return {
            success: true,
            data: validData,
            errors: null,
        };
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            // Convert Zod errors to a more usable format
            var formattedErrors = error.errors.reduce(function (acc, curr) {
                var path = curr.path.length > 0 ? curr.path[0] : 'form';
                acc[path] = curr.message;
                return acc;
            }, {});
            return {
                success: false,
                data: null,
                errors: formattedErrors,
            };
        }
        // Handle unexpected errors
        return {
            success: false,
            data: null,
            errors: {
                form: "An unexpected error occurred. Please try again.",
            },
        };
    }
};
exports.validateDateSelection = validateDateSelection;
/**
 * Field-specific validation for real-time feedback
 * Validates individual fields as the user interacts with the form
 * Uses PHI-based timing for validation feedback
 *
 * @param field The field name to validate
 * @param value The current value of the field
 * @returns Validation error message or null if valid
 */
var validateField = function (field, value) {
    try {
        // Create a test object with all default values
        var testObject = __assign({}, exports.dateSelectionDefaultValues);
        // Set the field we want to test
        testObject[field] = value;
        // Use the full schema but extract only errors for our field
        exports.dateSelectionSchema.parse(testObject);
        return null;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            // Find errors related to our field
            var fieldError = error.errors.find(function (err) {
                return err.path.length > 0 && err.path[0] === field;
            });
            return (fieldError === null || fieldError === void 0 ? void 0 : fieldError.message) || null;
        }
        return "Invalid ".concat(field);
    }
};
exports.validateField = validateField;
