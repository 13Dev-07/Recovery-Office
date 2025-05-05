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
exports.validateServiceSelection = exports.validateField = exports.serviceSelectionDefaultValues = exports.serviceSelectionSchema = void 0;
var zod_1 = require("zod");
/**
 * Validation schema for the service selection step
 * Enforces that a valid service and related options have been selected
 * Implements comprehensive validation with sacred proportions
 */
exports.serviceSelectionSchema = zod_1.z.object({
    /**
     * Service ID
     * Must be a non-empty string identifying a valid service
     */
    serviceId: zod_1.z.string({
        required_error: "Please select a service",
        invalid_type_error: "Service ID must be a string",
    }).min(1, "Please select a service")
        .refine(function (val) { return /^[a-zA-Z0-9_-]+$/.test(val); }, {
        message: "Service ID contains invalid characters"
    }),
    /**
     * Optional service details/notes
     * If provided, must not exceed 500 characters
     */
    serviceNotes: zod_1.z.string()
        .max(500, "Notes cannot exceed 500 characters")
        .optional(),
    /**
     * Optional duration preference in minutes
     * Must be one of the allowed durations if provided
     */
    durationPreference: zod_1.z.number()
        .int("Duration must be a whole number")
        .positive("Duration must be positive")
        .refine(function (val) {
        // Duration must align with the Fibonacci sequence values (in minutes)
        var allowedDurations = [FIBONACCI[5], FIBONACCI[6], FIBONACCI[7], FIBONACCI[8]]; // 5, 8, 13, 21
        return allowedDurations.includes(val);
    }, "Selected duration is not available")
        .optional(),
    /**
     * Optional practitioner ID
     * If provided, must be a valid practitioner
     */
    practitionerId: zod_1.z.string()
        .min(1, "Please select a valid practitioner")
        .refine(function (val) { return /^[a-zA-Z0-9_-]+$/.test(val); }, {
        message: "Practitioner ID contains invalid characters"
    })
        .optional(),
    /**
     * Selected date for the appointment
     * Used in the date selection step but stored with service data
     */
    date: zod_1.z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
        .optional(),
    /**
     * Selected time slot for the appointment
     * Used in the date selection step but stored with service data
     */
    timeSlot: zod_1.z.string()
        .min(1, "Please select a time slot")
        .optional(),
    /**
     * Indicates whether this is a recurring service
     * Defaults to false
     */
    isRecurring: zod_1.z.boolean().default(false),
    /**
     * Frequency for recurring services
     * Required only if isRecurring is true
     */
    frequency: zod_1.z.enum(["weekly", "biweekly", "monthly"])
        .optional(),
    /**
     * Number of sessions for recurring services
     * Required only if isRecurring is true
     * Must be a number between 2 and 12
     */
    sessions: zod_1.z.number()
        .int("Number of sessions must be a whole number")
        .min(2, "Minimum 2 sessions required for recurring bookings")
        .max(12, "Maximum 12 sessions allowed")
        .optional(),
}).refine(
// Validate that frequency is provided if isRecurring is true
function (data) {
    return !data.isRecurring || (data.frequency !== undefined);
}, {
    message: "Please select a frequency for recurring service",
    path: ["frequency"]
}).refine(
// Validate that sessions is provided if isRecurring is true
function (data) {
    return !data.isRecurring || (data.sessions !== undefined);
}, {
    message: "Please specify number of sessions for recurring service",
    path: ["sessions"]
});
/**
 * Default values for service selection
 * Used for initializing the form
 */
exports.serviceSelectionDefaultValues = {
    serviceId: "",
    isRecurring: false,
};
/**
 * Field-specific validation for real-time feedback
 * Validates individual fields as the user types
 *
 * @param field The field name to validate
 * @param value The current value of the field
 * @returns Validation error message or null if valid
 */
var validateField = function (field, value) {
    try {
        // Create a test object with all default values
        var testObject = __assign({}, exports.serviceSelectionDefaultValues);
        // Set the field we want to test
        testObject[field] = value;
        // Use the full schema but extract only errors for our field
        exports.serviceSelectionSchema.parse(testObject);
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
/**
 * Validate service selection data
 * Returns validation result with success flag and either data or error messages
 *
 * @param data The service selection data to validate
 * @returns Validation result
 */
var validateServiceSelection = function (data) {
    try {
        var validData = exports.serviceSelectionSchema.parse(data);
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
                form: "An unexpected error occurred. Please try again."
            },
        };
    }
};
exports.validateServiceSelection = validateServiceSelection;
