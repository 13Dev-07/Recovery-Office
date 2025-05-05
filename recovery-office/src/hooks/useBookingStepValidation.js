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
exports.useBookingStepValidation = void 0;
var react_1 = require("react");
;
var BookingContext_1 = require("../context/BookingContext");
var booking_types_1 = require("../types/booking.types");
var serviceSelection_schema_1 = require("../components/booking/validation/serviceSelection.schema");
var dateSelection_schema_1 = require("../components/booking/validation/dateSelection.schema");
var clientInfo_schema_1 = require("../components/booking/validation/clientInfo.schema");
var confirmationStep_schema_1 = require("../components/booking/validation/confirmationStep.schema");
var Toast_1 = require("../design-system/components/feedback/Toast");
/**
 * Custom hook for booking step validation
 * Provides functions to validate the current booking step using Zod schemas
 */
var useBookingStepValidation = function () {
    var _a = (0, BookingContext_1.useBookingContext)(), state = _a.state, goToStep = _a.goToStep, createPaymentIntent = _a.createPaymentIntent;
    var currentStep = state.currentStep, formData = state.formData;
    /**
     * Validates the current step based on its ID
     * Uses the appropriate Zod schema for each step
     * @returns {Promise<boolean>} Whether the step is valid
     */
    var validateCurrentStep = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 9, , 10]);
                    _a = currentStep;
                    switch (_a) {
                        case booking_types_1.BookingStepId.SERVICE_SELECTION: return [3 /*break*/, 1];
                        case booking_types_1.BookingStepId.DATE_SELECTION: return [3 /*break*/, 2];
                        case booking_types_1.BookingStepId.CLIENT_INFORMATION: return [3 /*break*/, 3];
                        case booking_types_1.BookingStepId.CONFIRMATION: return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    {
                        // Validate service selection
                        serviceSelection_schema_1.serviceSelectionSchema.parse(formData);
                        return [2 /*return*/, true];
                    }
                    _b.label = 2;
                case 2:
                    {
                        // Validate date selection
                        dateSelection_schema_1.dateSelectionSchema.parse(formData);
                        return [2 /*return*/, true];
                    }
                    _b.label = 3;
                case 3:
                    {
                        // Validate client information
                        clientInfo_schema_1.clientInfoSchema.parse(formData);
                        return [2 /*return*/, true];
                    }
                    _b.label = 4;
                case 4:
                    if (!!formData.paymentIntentId) return [3 /*break*/, 6];
                    return [4 /*yield*/, createPaymentIntent()];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    // Then validate the confirmation step data
                    confirmationStep_schema_1.confirmationStepSchema.parse(formData);
                    return [2 /*return*/, true];
                case 7: return [2 /*return*/, true];
                case 8: return [3 /*break*/, 10];
                case 9:
                    error_1 = _b.sent();
                    // If validation fails, show error toast
                    if (error_1 instanceof Error) {
                        (0, Toast_1.toast)({
                            title: 'Validation Error',
                            description: error_1.message,
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                    return [2 /*return*/, false];
                case 10: return [2 /*return*/];
            }
        });
    }); }, [currentStep, formData, createPaymentIntent]);
    /**
     * Checks if the current step is valid without showing errors
     * @returns {boolean} Whether the current step is valid
     */
    var isCurrentStepValid = (0, react_1.useCallback)(function () {
        try {
            switch (currentStep) {
                case booking_types_1.BookingStepId.SERVICE_SELECTION: {
                    serviceSelection_schema_1.serviceSelectionSchema.parse(formData);
                    return true;
                }
                case booking_types_1.BookingStepId.DATE_SELECTION: {
                    dateSelection_schema_1.dateSelectionSchema.parse(formData);
                    return true;
                }
                case booking_types_1.BookingStepId.CLIENT_INFORMATION: {
                    clientInfo_schema_1.clientInfoSchema.parse(formData);
                    return true;
                }
                case booking_types_1.BookingStepId.CONFIRMATION: {
                    // For validation checking (not actual submission), we'll skip payment intent check
                    // and just validate the other fields
                    var paymentMethod = formData.paymentMethod, termsAccepted = formData.termsAccepted, cancellationPolicyAccepted = formData.cancellationPolicyAccepted;
                    return !!(paymentMethod && termsAccepted && cancellationPolicyAccepted);
                }
                default:
                    return true;
            }
        }
        catch (error) {
            return false;
        }
    }, [currentStep, formData]);
    /**
     * Validates all steps up to the current one
     * @returns {boolean} Whether all steps up to the current one are valid
     */
    var validateAllStepsUpToCurrent = (0, react_1.useCallback)(function () {
        try {
            // Service selection is always required
            serviceSelection_schema_1.serviceSelectionSchema.parse(formData);
            // Check subsequent steps based on current step
            if (currentStep >= booking_types_1.BookingStepId.DATE_SELECTION) {
                dateSelection_schema_1.dateSelectionSchema.parse(formData);
            }
            if (currentStep >= booking_types_1.BookingStepId.CLIENT_INFORMATION) {
                clientInfo_schema_1.clientInfoSchema.parse(formData);
            }
            return true;
        }
        catch (error) {
            return false;
        }
    }, [currentStep, formData]);
    /**
     * Validates all required steps and navigates to the first invalid step
     * Useful for reviewing the booking before submission
     */
    var validateAndNavigateToFirstInvalidStep = (0, react_1.useCallback)(function () {
        try {
            // Check service selection
            serviceSelection_schema_1.serviceSelectionSchema.parse(formData);
        }
        catch (error) {
            goToStep(booking_types_1.BookingStepId.SERVICE_SELECTION);
            return false;
        }
        try {
            // Check date selection
            dateSelection_schema_1.dateSelectionSchema.parse(formData);
        }
        catch (error) {
            goToStep(booking_types_1.BookingStepId.DATE_SELECTION);
            return false;
        }
        try {
            // Check client information
            clientInfo_schema_1.clientInfoSchema.parse(formData);
        }
        catch (error) {
            goToStep(booking_types_1.BookingStepId.CLIENT_INFORMATION);
            return false;
        }
        return true;
    }, [formData, goToStep]);
    return {
        validateCurrentStep: validateCurrentStep,
        isCurrentStepValid: isCurrentStepValid,
        validateAllStepsUpToCurrent: validateAllStepsUpToCurrent,
        validateAndNavigateToFirstInvalidStep: validateAndNavigateToFirstInvalidStep
    };
};
exports.useBookingStepValidation = useBookingStepValidation;
