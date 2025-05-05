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
exports.validateClientInfo = exports.validateField = exports.clientInfoDefaultValues = exports.clientInfoSchema = void 0;
var zod_1 = require("zod");
/**
 * Validation schema for the client information step
 * Enforces that required client information has been provided
 * Implements comprehensive validation with sacred proportions
 */
exports.clientInfoSchema = zod_1.z.object({
    /**
     * First name
     * Must be a non-empty string with reasonable length and character constraints
     */
    firstName: zod_1.z.string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
    }).min(2, "First name must be at least 2 characters")
        .max(50, "First name cannot exceed 50 characters")
        .regex(/^[a-zA-Z\s-']+$/, "First name can only contain letters, spaces, hyphens, and apostrophes")
        .transform(function (val) { return val.trim(); }),
    /**
     * Last name
     * Must be a non-empty string with reasonable length and character constraints
     */
    lastName: zod_1.z.string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
    }).min(2, "Last name must be at least 2 characters")
        .max(50, "Last name cannot exceed 50 characters")
        .regex(/^[a-zA-Z\s-']+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes")
        .transform(function (val) { return val.trim(); }),
    /**
     * Email address
     * Must be a valid email format with additional constraints
     */
    email: zod_1.z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).min(5, "Email must be at least 5 characters")
        .max(100, "Email cannot exceed 100 characters")
        .email("Please enter a valid email address")
        .transform(function (val) { return val.trim().toLowerCase(); }),
    /**
     * Phone number
     * Must follow international phone number format
     */
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }).min(10, "Phone number must be at least 10 digits")
        .regex(/^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number (e.g., +1 555-123-4567 or (555) 123-4567)")
        .transform(function (val) { return val.replace(/\s+/g, ' ').trim(); }),
    /**
     * Date of birth
     * Optional, but if provided must be a valid date in the past
     */
    dateOfBirth: zod_1.z.string()
        .optional()
        .refine(function (val) {
        if (!val)
            return true; // Optional field
        var date = new Date(val);
        var today = new Date();
        // Must be a valid date in the past and person must be at least 18 years old
        return !isNaN(date.getTime()) &&
            date < today &&
            (today.getFullYear() - date.getFullYear()) >= 18;
    }, "Please enter a valid date of birth (must be at least 18 years old)"),
    /**
     * Preferred contact method
     * Must be one of the allowed values
     */
    preferredContactMethod: zod_1.z.enum(["email", "phone", "text"], {
        required_error: "Please select a preferred contact method",
        invalid_type_error: "Invalid contact method selected",
    }),
    /**
     * Whether the person is a new client
     * Must be a boolean value
     */
    isNewClient: zod_1.z.boolean({
        required_error: "Please indicate if you are a new client",
        invalid_type_error: "New client status must be a boolean",
    }),
    /**
     * Additional notes
     * Optional, but if provided, should have a reasonable length
     */
    additionalNotes: zod_1.z.string()
        .max(500, "Notes cannot exceed 500 characters")
        .optional()
        .transform(function (val) { return val ? val.trim() : val; }),
    /**
     * Terms and privacy policy acceptance
     * Must be true to proceed
     */
    termsAccepted: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: "You must accept the terms and conditions" }); }
    }),
}).refine(
// Conditional validation: if preferred contact method is phone,
// ensure phone number is provided
function (data) {
    return data.preferredContactMethod !== "phone" ||
        (data.phone && data.phone.length > 0);
}, {
    message: "Phone number is required when 'Phone' is selected as preferred contact method",
    path: ["phone"]
}).refine(
// Conditional validation: if preferred contact method is email,
// ensure email is provided
function (data) {
    return data.preferredContactMethod !== "email" ||
        (data.email && data.email.length > 0);
}, {
    message: "Email is required when 'Email' is selected as preferred contact method",
    path: ["email"]
});
/**
 * Default values for client information
 * Used for initializing the form
 */
exports.clientInfoDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: "email",
    isNewClient: true,
    additionalNotes: "",
    termsAccepted: undefined,
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
        // Special case handling for boolean literal fields
        if (field === 'termsAccepted') {
            if (value !== true) {
                return "You must accept the terms and conditions";
            }
            return null;
        }
        // Create a test object with all default values
        var testObject = __assign({}, exports.clientInfoDefaultValues);
        // Set the field we want to test
        testObject[field] = value;
        // Use the full schema but extract only errors for our field
        exports.clientInfoSchema.parse(testObject);
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
 * Validate client information data
 * Returns validation result with success flag and either data or error messages
 *
 * @param data The client information data to validate
 * @returns Validation result
 */
var validateClientInfo = function (data) {
    try {
        var validData = exports.clientInfoSchema.parse(data);
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
                var _a;
                // Handle both direct path errors and refinement errors
                var path = curr.path.length > 0 ? curr.path[0] :
                    curr.code === 'custom' ? (_a = curr.params) === null || _a === void 0 ? void 0 : _a.path :
                        'form';
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
exports.validateClientInfo = validateClientInfo;
