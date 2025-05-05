"use strict";
/**
 * Booking System Components
 *
 * This module exports booking components that follow sacred geometry principles.
 * These components create a complete, multi-step booking experience with proper validation.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmationSchema = exports.clientInfoSchema = exports.dateSelectionSchema = exports.serviceSelectionSchema = exports.validateAllSteps = exports.getStepErrors = exports.isStepValid = exports.useBookingContext = exports.getMockTimeSlots = exports.initialBookingState = exports.bookingReducer = exports.BookingContext = exports.BookingConfirmation = exports.BookingSummary = exports.CustomerInfo = exports.DateSelection = exports.ServiceSelection = exports.MobileCalendarModal = exports.ProgressIndicator = exports.BookingControls = exports.BookingInterface = void 0;
// Main components
var BookingInterface_1 = require("./BookingInterface");
Object.defineProperty(exports, "BookingInterface", { enumerable: true, get: function () { return BookingInterface_1.default; } });
var BookingControls_1 = require("./BookingControls");
Object.defineProperty(exports, "BookingControls", { enumerable: true, get: function () { return BookingControls_1.default; } });
var ProgressIndicator_1 = require("./ProgressIndicator");
Object.defineProperty(exports, "ProgressIndicator", { enumerable: true, get: function () { return ProgressIndicator_1.default; } });
var MobileCalendarModal_1 = require("./MobileCalendarModal");
Object.defineProperty(exports, "MobileCalendarModal", { enumerable: true, get: function () { return MobileCalendarModal_1.default; } });
// Step components
var ServiceSelection_1 = require("./steps/ServiceSelection");
Object.defineProperty(exports, "ServiceSelection", { enumerable: true, get: function () { return ServiceSelection_1.default; } });
var DateSelection_1 = require("./steps/DateSelection");
Object.defineProperty(exports, "DateSelection", { enumerable: true, get: function () { return DateSelection_1.default; } });
var CustomerInfo_1 = require("./steps/CustomerInfo");
Object.defineProperty(exports, "CustomerInfo", { enumerable: true, get: function () { return CustomerInfo_1.default; } });
var BookingSummary_1 = require("./steps/BookingSummary");
Object.defineProperty(exports, "BookingSummary", { enumerable: true, get: function () { return BookingSummary_1.default; } });
var BookingConfirmation_1 = require("./steps/BookingConfirmation");
Object.defineProperty(exports, "BookingConfirmation", { enumerable: true, get: function () { return BookingConfirmation_1.default; } });
// State management
var state_1 = require("./state");
Object.defineProperty(exports, "BookingContext", { enumerable: true, get: function () { return state_1.BookingContext; } });
Object.defineProperty(exports, "bookingReducer", { enumerable: true, get: function () { return state_1.bookingReducer; } });
Object.defineProperty(exports, "initialBookingState", { enumerable: true, get: function () { return state_1.initialBookingState; } });
Object.defineProperty(exports, "getMockTimeSlots", { enumerable: true, get: function () { return state_1.getMockTimeSlots; } });
Object.defineProperty(exports, "useBookingContext", { enumerable: true, get: function () { return state_1.useBookingContext; } });
// Validation
var validation_1 = require("./validation");
Object.defineProperty(exports, "isStepValid", { enumerable: true, get: function () { return validation_1.isStepValid; } });
Object.defineProperty(exports, "getStepErrors", { enumerable: true, get: function () { return validation_1.getStepErrors; } });
Object.defineProperty(exports, "validateAllSteps", { enumerable: true, get: function () { return validation_1.validateAllSteps; } });
Object.defineProperty(exports, "serviceSelectionSchema", { enumerable: true, get: function () { return validation_1.serviceSelectionSchema; } });
Object.defineProperty(exports, "dateSelectionSchema", { enumerable: true, get: function () { return validation_1.dateSelectionSchema; } });
Object.defineProperty(exports, "clientInfoSchema", { enumerable: true, get: function () { return validation_1.clientInfoSchema; } });
Object.defineProperty(exports, "confirmationSchema", { enumerable: true, get: function () { return validation_1.confirmationSchema; } });
