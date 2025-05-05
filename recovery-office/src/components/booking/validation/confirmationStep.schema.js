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
exports.validateField = exports.validateConfirmationStep = exports.confirmationStepDefaultValues = exports.confirmationStepSchema = void 0;
var zod_1 = require("zod");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
/**
 * Validation schema for the confirmation step of the booking process
 * Uses Zod schema validation with sacred geometry principles:
 * - PHI (Golden Ratio) for validation timing
 * - Fibonacci sequence for field length validations
 * - Sacred proportions for validation rules
 */
exports.confirmationStepSchema = zod_1.z.object({
    /**
     * Whether the user has confirmed their booking details are correct
     * Must be true to proceed - a foundational requirement like PHI is foundational to sacred geometry
     */
    detailsConfirmed: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: "You must confirm the booking details" }); }
    }),
    /**
     * Payment method selection
     * Must be one of the supported payment methods
     * The options form a balanced system like the golden rectangle's proportions
     */
    paymentMethod: zod_1.z.enum(['credit_card', 'debit_card', 'paypal', 'in_person'], {
        required_error: "Please select a payment method",
        invalid_type_error: "Invalid payment method selected",
    }),
    /**
     * Whether the user agrees to the cancellation policy
     * Must be true to proceed - fundamental agreement like the fundamental properties of PHI
     */
    cancellationPolicyAgreed: zod_1.z.literal(true, {
        errorMap: function () { return ({ message: "You must agree to the cancellation policy" }); }
    }),
    /**
     * Optional promotional code
     * If provided, must be a string with reasonable length
     * Maximum length is Fibonacci[8] = 21 characters
     */
    promoCode: zod_1.z.string()
        .max(sacred_geometry_1.FIBONACCI[8], "Promo code cannot exceed ".concat(sacred_geometry_1.FIBONACCI[8], " characters"))
        .optional(),
    /**
     * Payment processing status - internal field
     * Used to track payment processing state
     */
    paymentProcessed: zod_1.z.boolean().optional(),
    /**
     * Payment intent ID from payment processor
     * Used to track the payment transaction
     */
    paymentIntentId: zod_1.z.string().optional(),
    /**
     * Optional special requests or notes for the appointment
     * Maximum length is Fibonacci[13] = 233 characters,
     * maintaining harmony and proportion like the Golden Spiral
     */
    specialRequests: zod_1.z.string()
        .max(sacred_geometry_1.FIBONACCI[13], "Special requests cannot exceed ".concat(sacred_geometry_1.FIBONACCI[13], " characters"))
        .optional(),
    /**
     * Whether the user wants to receive reminders
     * Default is true - like the natural tendency toward golden ratio in nature
     */
    receiveReminders: zod_1.z.boolean().optional().default(true),
    /**
     * Optional preferred reminder method
     * Three options form a balanced relationship like the PHI proportions
     */
    reminderMethod: zod_1.z.enum(['email', 'sms', 'both']).optional(),
});
/**
 * Default values for confirmation step form
 * Initial state before sacred proportions are applied
 */
exports.confirmationStepDefaultValues = {
    detailsConfirmed: undefined,
    paymentMethod: 'credit_card',
    cancellationPolicyAgreed: undefined,
    promoCode: '',
    paymentProcessed: false,
    specialRequests: '',
    receiveReminders: true,
    reminderMethod: 'email',
};
/**
 * Fibonacci-based timeout for validation
 * Uses Fibonacci sequence for natural-feeling timeouts
 *
 * @param index The Fibonacci index to use for timeout calculation
 * @returns Timeout in milliseconds
 */
var getFibonacciTimeout = function (index) {
    return (0, getFibonacciByIndex_1.getFibonacciByIndex)(index) * (sacred_geometry_1.PHI * 10); // Scale by PHI for natural timing
};
/**
 * Validate confirmation step data
 * Returns validation result with success flag and either data or error messages
 * Uses sacred geometry principles for validation timing and error formatting
 *
 * @param data The confirmation step data to validate
 */
var validateConfirmationStep = function (data) {
    return new Promise(function (resolve) {
        // Use Fibonacci timing for validation process
        setTimeout(function () {
            try {
                var validData = exports.confirmationStepSchema.parse(data);
                resolve({
                    success: true,
                    data: validData,
                    errors: null,
                });
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    // Convert Zod errors to a more usable format
                    // Use sacred geometry principles to structure the error object
                    var formattedErrors = error.errors.reduce(function (acc, curr) {
                        var path = curr.path.length > 0 ? curr.path[0] : 'form';
                        acc[path] = curr.message;
                        return acc;
                    }, {});
                    resolve({
                        success: false,
                        data: null,
                        errors: formattedErrors,
                    });
                }
                else {
                    // Handle unexpected errors
                    resolve({
                        success: false,
                        data: null,
                        errors: {
                            form: "An unexpected error occurred. Please try again.",
                        },
                    });
                }
            }
        }, getFibonacciTimeout(5)); // Use Fibonacci[5] = 5 * PHI*10 ms for validation timing
    });
};
exports.validateConfirmationStep = validateConfirmationStep;
/**
 * Field-specific validation for real-time feedback
 * Validates individual fields as the user interacts with the form
 * Uses PHI-based timing for a natural, harmonious validation experience
 *
 * @param field The field name to validate
 * @param value The current value of the field
 * @returns Validation error message or null if valid
 */
var validateField = function (field, value) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            try {
                // Special case handling for boolean literal fields
                if (field === 'detailsConfirmed' || field === 'cancellationPolicyAgreed') {
                    if (value !== true) {
                        var message = field === 'detailsConfirmed'
                            ? "You must confirm the booking details"
                            : "You must agree to the cancellation policy";
                        resolve(message);
                        return;
                    }
                    resolve(null);
                    return;
                }
                // Create a test object with all default values
                var testObject = __assign({}, exports.confirmationStepDefaultValues);
                // Set the field we want to test
                testObject[field] = value;
                // Use the full schema but extract only errors for our field
                exports.confirmationStepSchema.parse(testObject);
                resolve(null);
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    // Find errors related to our field
                    var fieldError = error.errors.find(function (err) {
                        return err.path.length > 0 && err.path[0] === field;
                    });
                    resolve((fieldError === null || fieldError === void 0 ? void 0 : fieldError.message) || null);
                }
                else {
                    resolve("Invalid ".concat(field));
                }
            }
        }, sacred_geometry_1.ANIMATION_TIMING.quick * sacred_geometry_1.PHI_INVERSE); // Use PHI_INVERSE for a quick yet harmonious response
    });
};
exports.validateField = validateField;
