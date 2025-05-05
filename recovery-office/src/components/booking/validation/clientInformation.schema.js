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
exports.validateField = exports.validateClientInformation = exports.clientInformationDefaultValues = exports.clientInformationSchema = void 0;
var zod_1 = require("zod");
/**
 * Address information schema
 * Validates client address data
 */
var addressInfoSchema = zod_1.z.object({
    street: zod_1.z.string().min(3, "Street address must be at least 3 characters").max(100, "Street address cannot exceed 100 characters"),
    city: zod_1.z.string().min(2, "City name must be at least 2 characters").max(50, "City name cannot exceed 50 characters"),
    state: zod_1.z.string().min(2, "State/Province must be at least 2 characters").max(50, "State/Province cannot exceed 50 characters"),
    postalCode: zod_1.z.string().min(3, "Postal code must be at least 3 characters").max(20, "Postal code cannot exceed 20 characters"),
    country: zod_1.z.string().min(2, "Country must be at least 2 characters").max(50, "Country cannot exceed 50 characters")
});
/**
 * Emergency contact schema
 * Validates emergency contact information
 */
var emergencyContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
    phone: zod_1.z.string()
        .regex(/^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number (e.g., +1 555-123-4567 or (555) 123-4567)"),
    relationship: zod_1.z.string().min(2, "Relationship must be at least 2 characters").max(50, "Relationship cannot exceed 50 characters")
}).optional();
/**
 * Validation schema for client information in the booking process
 * Uses Zod schema validation with sacred proportions
 */
exports.clientInformationSchema = zod_1.z.object({
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
     * Must be a valid email format
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
     * Must follow a valid phone number format
     */
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }).min(10, "Phone number must be at least 10 digits")
        .regex(/^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number (e.g., +1 555-123-4567 or (555) 123-4567)")
        .transform(function (val) { return val.replace(/\s+/g, ' ').trim(); }),
    /**
     * Preferred contact method
     * Must be one of the allowed values
     */
    preferredContactMethod: zod_1.z.enum(["email", "phone", "text"], {
        required_error: "Please select a preferred contact method",
        invalid_type_error: "Invalid contact method selected",
    }),
    /**
     * Whether the client has visited before
     * Must be a boolean value
     */
    isReturningClient: zod_1.z.boolean({
        required_error: "Please indicate if you have visited us before",
        invalid_type_error: "This field must be a boolean",
    }),
    /**
     * How the client heard about us
     * Optional selection from predefined options
     */
    referralSource: zod_1.z.enum([
        "google_search",
        "social_media",
        "friend_referral",
        "doctor_referral",
        "advertisement",
        "other"
    ], {
        invalid_type_error: "Invalid referral source selected",
    }).optional(),
    /**
     * Additional details for the referral source
     * Optional text field, required if referral source is "other"
     */
    referralDetails: zod_1.z.string()
        .max(200, "Referral details cannot exceed 200 characters")
        .optional(),
    /**
     * Additional notes or health information
     * Optional text field for any health concerns or special requests
     */
    additionalNotes: zod_1.z.string()
        .max(500, "Additional notes cannot exceed 500 characters")
        .optional(),
    /**
     * Acceptance of privacy policy
     * Must be true to proceed
     */
    privacyPolicyAccepted: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: "You must accept the privacy policy" }); }
    }),
}).refine(
// If referral source is "other", referral details must be provided
function (data) {
    return data.referralSource !== "other" ||
        (data.referralDetails && data.referralDetails.trim().length > 0);
}, {
    message: "Please provide details about how you heard about us",
    path: ["referralDetails"]
}).refine(
// If preferred contact method is phone or text, phone number must be provided
function (data) {
    return data.preferredContactMethod === "email" ||
        (data.phone && data.phone.trim().length > 0);
}, {
    message: "Phone number is required for phone or text contact methods",
    path: ["phone"]
}).refine(
// If preferred contact method is email, email must be provided
function (data) {
    return data.preferredContactMethod !== "email" ||
        (data.email && data.email.trim().length > 0);
}, {
    message: "Email is required when Email is selected as preferred contact method",
    path: ["email"]
});
/**
 * Default values for client information form
 */
exports.clientInformationDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContactMethod: "email",
    isReturningClient: false,
    referralSource: undefined,
    referralDetails: "",
    additionalNotes: "",
    privacyPolicyAccepted: undefined,
};
/**
 * Validate client information data
 * Returns validation result with success flag and either data or error messages
 *
 * @param data The client information data to validate
 */
var validateClientInformation = function (data) {
    try {
        var validData = exports.clientInformationSchema.parse(data);
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
exports.validateClientInformation = validateClientInformation;
/**
 * Field-specific validation for real-time feedback
 * Validates individual fields as the user interacts with the form
 *
 * @param field The field name to validate
 * @param value The current value of the field
 * @returns Validation error message or null if valid
 */
var validateField = function (field, value) {
    try {
        // Special case handling for boolean literal fields
        if (field === 'privacyPolicyAccepted') {
            if (value !== true) {
                return "You must accept the privacy policy";
            }
            return null;
        }
        // Create a test object with all default values
        var testObject = __assign({}, exports.clientInformationDefaultValues);
        // Set the field we want to test
        testObject[field] = value;
        // Use the full schema but extract only errors for our field
        exports.clientInformationSchema.parse(testObject);
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
        return null;
    }
};
exports.validateField = validateField;
