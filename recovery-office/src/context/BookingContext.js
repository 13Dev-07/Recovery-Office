"use strict";
/**
 * Booking Context
 *
 * Provides booking state management for the entire application.
 * Implements sacred geometry principles for timing and animations.
 */
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooking = exports.BookingProvider = void 0;
var React = require("react");
var react_1 = require("react");
var booking_types_1 = require("../types/booking.types");
var apiUtils_1 = require("../utils/apiUtils");
var useToast_1 = require("../hooks/useToast");
var booking_service_1 = require("../services/booking.service");
// Extended action types for more specific API state management
var ExtendedBookingActionType;
(function (ExtendedBookingActionType) {
    ExtendedBookingActionType["SET_AVAILABLE_SERVICES"] = "SET_AVAILABLE_SERVICES";
    ExtendedBookingActionType["SET_AVAILABLE_TIME_SLOTS"] = "SET_AVAILABLE_TIME_SLOTS";
    ExtendedBookingActionType["SET_API_ERROR"] = "SET_API_ERROR";
    ExtendedBookingActionType["CLEAR_API_ERROR"] = "CLEAR_API_ERROR";
    ExtendedBookingActionType["SET_LOADING_RESOURCE"] = "SET_LOADING_RESOURCE";
})(ExtendedBookingActionType || (ExtendedBookingActionType = {}));
// Initial state for the booking context
var initialBookingState = {
    currentStep: booking_types_1.BookingStepId.SERVICE_SELECTION,
    loading: false,
    availableDates: [],
    availableServices: [],
    availableTimeSlots: [],
    completedSteps: new Set(),
    loadingState: {
        services: false,
        dates: false,
        timeSlots: false,
        booking: false,
        cancellation: false,
        rescheduling: false,
        paymentIntent: false,
    },
    apiError: null,
    bookingComplete: false,
};
// Create the context with undefined initial value
var BookingContext = (0, react_1.createContext)(undefined);
// Enhanced reducer for booking state
function bookingReducer(state, action) {
    var _a;
    switch (action.type) {
        case booking_types_1.BookingActionType.SET_STEP:
            return __assign(__assign({}, state), { currentStep: action.payload });
        case booking_types_1.BookingActionType.SELECT_SERVICE:
            return __assign(__assign({}, state), { selectedService: action.payload, completedSteps: new Set(Array.from(state.completedSteps).concat([booking_types_1.BookingStepId.SERVICE_SELECTION])) });
        case booking_types_1.BookingActionType.SELECT_DATE:
            return __assign(__assign({}, state), { selectedDate: action.payload });
        case booking_types_1.BookingActionType.SELECT_TIME_SLOT:
            return __assign(__assign({}, state), { selectedTimeSlot: action.payload, selectedTime: action.payload.startTime, completedSteps: new Set(Array.from(state.completedSteps).concat([booking_types_1.BookingStepId.DATE_SELECTION])) });
        case booking_types_1.BookingActionType.SET_CLIENT_INFO:
            return __assign(__assign({}, state), { clientInfo: action.payload, customerInfo: action.payload, completedSteps: new Set(Array.from(state.completedSteps).concat([booking_types_1.BookingStepId.CLIENT_INFORMATION])) });
        case booking_types_1.BookingActionType.SET_AVAILABLE_DATES:
            return __assign(__assign({}, state), { availableDates: action.payload });
        case booking_types_1.BookingActionType.SET_LOADING:
            return __assign(__assign({}, state), { loading: action.payload });
        case booking_types_1.BookingActionType.SET_ERROR:
            return __assign(__assign({}, state), { error: action.payload });
        case booking_types_1.BookingActionType.CLEAR_ERROR:
            return __assign(__assign({}, state), { error: undefined });
        case booking_types_1.BookingActionType.COMPLETE_STEP:
            return __assign(__assign({}, state), { completedSteps: new Set(Array.from(state.completedSteps).concat([action.payload])) });
        case booking_types_1.BookingActionType.SET_BOOKING_REFERENCE:
            return __assign(__assign({}, state), { bookingReference: action.payload, bookingComplete: true });
        case booking_types_1.BookingActionType.RESET_FORM:
            return __assign({}, initialBookingState);
        case ExtendedBookingActionType.SET_AVAILABLE_SERVICES:
            return __assign(__assign({}, state), { availableServices: action.payload });
        case ExtendedBookingActionType.SET_AVAILABLE_TIME_SLOTS:
            return __assign(__assign({}, state), { availableTimeSlots: action.payload });
        case ExtendedBookingActionType.SET_API_ERROR:
            return __assign(__assign({}, state), { apiError: action.payload });
        case ExtendedBookingActionType.CLEAR_API_ERROR:
            return __assign(__assign({}, state), { apiError: null });
        case ExtendedBookingActionType.SET_LOADING_RESOURCE:
            return __assign(__assign({}, state), { loadingState: __assign(__assign({}, state.loadingState), (_a = {}, _a[action.payload.resource] = action.payload.isLoading, _a)) });
        default:
            return state;
    }
}
// Provider component for the booking context
var BookingProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useToast_1.useToast)(), showToast = _b.showToast, errorToast = _b.errorToast, successToast = _b.successToast;
    var _c = (0, react_1.useReducer)(bookingReducer, initialBookingState), state = _c[0], dispatch = _c[1];
    // Step navigation methods
    var goToStep = (0, react_1.useCallback)(function (stepId) {
        dispatch({ type: booking_types_1.BookingActionType.SET_STEP, payload: stepId });
    }, []);
    var goToNextStep = (0, react_1.useCallback)(function () {
        var currentStep = state.currentStep;
        var nextStepId = currentStep + 1;
        // Validate that next step is valid
        if (nextStepId <= booking_types_1.BookingStepId.SUCCESS) {
            goToStep(nextStepId);
        }
    }, [state, goToStep]);
    var goToPreviousStep = (0, react_1.useCallback)(function () {
        var currentStep = state.currentStep;
        var prevStepId = currentStep - 1;
        // Validate that previous step is valid
        if (prevStepId >= booking_types_1.BookingStepId.SERVICE_SELECTION) {
            goToStep(prevStepId);
        }
    }, [state, goToStep]);
    // Data action methods
    var selectService = (0, react_1.useCallback)(function (service) {
        dispatch({ type: booking_types_1.BookingActionType.SELECT_SERVICE, payload: service });
    }, []);
    var selectDate = (0, react_1.useCallback)(function (date) {
        dispatch({ type: booking_types_1.BookingActionType.SELECT_DATE, payload: date });
    }, []);
    var selectTimeSlot = (0, react_1.useCallback)(function (timeSlot) {
        dispatch({ type: booking_types_1.BookingActionType.SELECT_TIME_SLOT, payload: timeSlot });
    }, []);
    var setClientInfo = (0, react_1.useCallback)(function (clientInfo) {
        dispatch({ type: booking_types_1.BookingActionType.SET_CLIENT_INFO, payload: clientInfo });
    }, []);
    // State management methods
    var setAvailableDates = (0, react_1.useCallback)(function (dates) {
        dispatch({ type: booking_types_1.BookingActionType.SET_AVAILABLE_DATES, payload: dates });
    }, []);
    var setLoading = (0, react_1.useCallback)(function (loading) {
        dispatch({ type: booking_types_1.BookingActionType.SET_LOADING, payload: loading });
    }, []);
    var setError = (0, react_1.useCallback)(function (error) {
        dispatch({ type: booking_types_1.BookingActionType.SET_ERROR, payload: error });
    }, []);
    var clearError = (0, react_1.useCallback)(function () {
        dispatch({ type: booking_types_1.BookingActionType.CLEAR_ERROR });
    }, []);
    var completeStep = (0, react_1.useCallback)(function (stepId) {
        dispatch({ type: booking_types_1.BookingActionType.COMPLETE_STEP, payload: stepId });
    }, []);
    var setBookingReference = (0, react_1.useCallback)(function (reference) {
        dispatch({ type: booking_types_1.BookingActionType.SET_BOOKING_REFERENCE, payload: reference });
    }, []);
    var resetForm = (0, react_1.useCallback)(function () {
        dispatch({ type: booking_types_1.BookingActionType.RESET_FORM });
    }, []);
    // API-related actions
    var setAvailableTimeSlots = (0, react_1.useCallback)(function (slots) {
        dispatch({ type: ExtendedBookingActionType.SET_AVAILABLE_TIME_SLOTS, payload: slots });
    }, []);
    var setAvailableServices = (0, react_1.useCallback)(function (services) {
        dispatch({ type: ExtendedBookingActionType.SET_AVAILABLE_SERVICES, payload: services });
    }, []);
    var setApiError = (0, react_1.useCallback)(function (error) {
        dispatch({ type: ExtendedBookingActionType.SET_API_ERROR, payload: error });
        if (error.message) {
            errorToast(error.message);
        }
    }, [errorToast]);
    var clearApiError = (0, react_1.useCallback)(function () {
        dispatch({ type: ExtendedBookingActionType.CLEAR_API_ERROR });
    }, []);
    var setResourceLoading = (0, react_1.useCallback)(function (resource, isLoading) {
        dispatch({
            type: ExtendedBookingActionType.SET_LOADING_RESOURCE,
            payload: { resource: resource, isLoading: isLoading }
        });
    }, []);
    // Helper methods
    var canProceedToStep = (0, react_1.useCallback)(function (stepId) {
        return (0, booking_types_1.canProceedToNextStep)(state, stepId);
    }, [state]);
    var getCompleteBookingData = (0, react_1.useCallback)(function () {
        var selectedService = state.selectedService, selectedDate = state.selectedDate, selectedTimeSlot = state.selectedTimeSlot, clientInfo = state.clientInfo;
        // Check if all required data is present
        if (!selectedService || !selectedDate || !selectedTimeSlot || !clientInfo) {
            return null;
        }
        return {
            service: selectedService,
            date: selectedDate,
            timeSlot: selectedTimeSlot,
            clientInfo: clientInfo,
        };
    }, [state]);
    var isResourceLoading = (0, react_1.useCallback)(function (resource) {
        var _a;
        return (_a = state.loadingState[resource]) !== null && _a !== void 0 ? _a : 1;
    }, [state.loadingState]);
    var hasApiError = (0, react_1.useCallback)(function () {
        return state.apiError !== null;
    }, [state.apiError]);
    var getApiErrorForResource = (0, react_1.useCallback)(function (resource) {
        if (state.apiError && state.apiError.resource === resource) {
            return state.apiError.message || null;
        }
        return null;
    }, [state.apiError]);
    // Backward compatibility methods
    var nextStep = (0, react_1.useCallback)(function () {
        goToNextStep();
    }, [goToNextStep]);
    var previousStep = (0, react_1.useCallback)(function () {
        goToPreviousStep();
    }, [goToPreviousStep]);
    var setSelectedService = (0, react_1.useCallback)(function (service) {
        selectService(service);
    }, [selectService]);
    var setSelectedDate = (0, react_1.useCallback)(function (date) {
        selectDate(date);
    }, [selectDate]);
    var setSelectedTime = (0, react_1.useCallback)(function (time) {
        // Create a minimal time slot object for compatibility
        var timeSlot = {
            id: time,
            startTime: time,
            endTime: '',
            duration: 0,
            available: true
        };
        selectTimeSlot(timeSlot);
    }, [selectTimeSlot]);
    var setCurrentStep = (0, react_1.useCallback)(function (step) {
        goToStep(step);
    }, [goToStep]);
    var setCustomerInfo = (0, react_1.useCallback)(function (info) {
        setClientInfo(info);
    }, [setClientInfo]);
    // For backward compatibility with older components
    var completeBooking = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Implementation would depend on the complete booking process
            // This is a placeholder for backward compatibility
            return [2 /*return*/, Promise.resolve()];
        });
    }); }, []);
    var updateFormData = (0, react_1.useCallback)(function (data) {
        // Implementation would depend on what data needs to be updated
        // This is a placeholder for backward compatibility
        if (data.serviceId && state.availableServices.length > 0) {
            var service = state.availableServices.find(function (s) { return s.id === data.serviceId; });
            if (service) {
                selectService(service);
            }
        }
        if (data.date) {
            selectDate(data.date);
        }
        if (data.timeSlot) {
            setSelectedTime(data.timeSlot);
        }
        if (data.firstName || data.lastName || data.email || data.phone) {
            var clientInfo = {
                firstName: data.firstName || '',
                lastName: data.lastName || '',
                email: data.email || '',
                phone: data.phone || '',
                preferredContactMethod: data.preferredContactMethod || 'email',
                isNewClient: data.isNewClient || false
            };
            setClientInfo(clientInfo);
        }
    }, [state.availableServices, selectService, selectDate, setSelectedTime, setClientInfo]);
    // API action implementations
    var fetchAvailableServices = (0, react_1.useCallback)(function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (forceRefresh) {
            var response, error_1, apiError;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setResourceLoading('services', true);
                        clearApiError();
                        return [4 /*yield*/, booking_service_1.BookingService.getInstance().getServices(forceRefresh)];
                    case 1:
                        response = _a.sent();
                        setAvailableServices(response.data);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        apiError = (0, apiUtils_1.categorizeError)(error_1);
                        setApiError({
                            code: apiError.code,
                            message: apiError.message,
                            details: apiError.details,
                            resource: 'services'
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        setResourceLoading('services', false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }, [setResourceLoading, clearApiError, setAvailableServices, setApiError]);
    var fetchAvailableDates = (0, react_1.useCallback)(function (startDate_1, endDate_1, serviceType_1) {
        var args_1 = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args_1[_i - 3] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([startDate_1, endDate_1, serviceType_1], args_1, true), void 0, function (startDate, endDate, serviceType, forceRefresh) {
            var serviceId, response, bookingDates, error_2, apiError;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!serviceType && !state.selectedService) {
                            setApiError({
                                code: 'VALIDATION_ERROR',
                                message: 'Service type is required to fetch available dates',
                                resource: 'dates'
                            });
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        setResourceLoading('dates', true);
                        clearApiError();
                        serviceId = serviceType || (state.selectedService ? state.selectedService.id : '');
                        return [4 /*yield*/, booking_service_1.BookingService.getInstance().getAvailableDates(serviceId, undefined, forceRefresh)];
                    case 2:
                        response = _a.sent();
                        bookingDates = response.data.dates.map(function (d) { return ({
                            date: d.date,
                            dayOfWeek: new Date(d.date).getDay(),
                            available: d.hasAvailability,
                            slots: []
                        }); });
                        setAvailableDates(bookingDates);
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        apiError = (0, apiUtils_1.categorizeError)(error_2);
                        setApiError({
                            code: apiError.code,
                            message: apiError.message,
                            details: apiError.details,
                            resource: 'dates'
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        setResourceLoading('dates', false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [
        state.selectedService,
        setResourceLoading,
        clearApiError,
        setAvailableDates,
        setApiError
    ]);
    var fetchAvailableTimeSlots = (0, react_1.useCallback)(function (date_1, serviceType_1) {
        var args_1 = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args_1[_i - 2] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([date_1, serviceType_1], args_1, true), void 0, function (date, serviceType, forceRefresh) {
            var response, error_3, apiError;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setResourceLoading('timeSlots', true);
                        clearApiError();
                        return [4 /*yield*/, booking_service_1.BookingService.getInstance().getAvailableTimeSlots(serviceType, date, undefined, forceRefresh)];
                    case 1:
                        response = _a.sent();
                        setAvailableTimeSlots(response.data);
                        return [3 /*break*/, 4];
                    case 2:
                        error_3 = _a.sent();
                        apiError = (0, apiUtils_1.categorizeError)(error_3);
                        setApiError({
                            code: apiError.code,
                            message: apiError.message,
                            details: apiError.details,
                            resource: 'timeSlots'
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        setResourceLoading('timeSlots', false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }, [setResourceLoading, clearApiError, setAvailableTimeSlots, setApiError]);
    var submitBooking = (0, react_1.useCallback)(function (serviceData, clientData, confirmationData) { return __awaiter(void 0, void 0, void 0, function () {
        var response, bookingReference, error_4, apiError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setResourceLoading('booking', true);
                    clearApiError();
                    return [4 /*yield*/, booking_service_1.BookingService.createBooking(serviceData, clientData, confirmationData)];
                case 1:
                    response = _a.sent();
                    bookingReference = response.data.confirmationCode;
                    setBookingReference(bookingReference);
                    // Show success toast
                    successToast("Booking Confirmed", "Your booking has been confirmed. Reference: ".concat(bookingReference), ANIMATION_TIMING.standard);
                    return [2 /*return*/, bookingReference];
                case 2:
                    error_4 = _a.sent();
                    apiError = (0, apiUtils_1.categorizeError)(error_4);
                    setApiError({
                        code: apiError.code,
                        message: apiError.message,
                        details: apiError.details,
                        resource: 'booking'
                    });
                    throw apiError;
                case 3:
                    setResourceLoading('booking', false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [setResourceLoading, clearApiError, setBookingReference, successToast, setApiError]);
    var cancelBooking = (0, react_1.useCallback)(function (bookingId, reason) { return __awaiter(void 0, void 0, void 0, function () {
        var error_5, apiError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setResourceLoading('cancellation', true);
                    clearApiError();
                    // Call the BookingService to cancel the booking
                    return [4 /*yield*/, booking_service_1.BookingService.cancelBooking(bookingId, reason)];
                case 1:
                    // Call the BookingService to cancel the booking
                    _a.sent();
                    // Show success toast
                    successToast("Booking Cancelled", "Your booking has been cancelled successfully.", ANIMATION_TIMING.standard);
                    return [3 /*break*/, 4];
                case 2:
                    error_5 = _a.sent();
                    apiError = (0, apiUtils_1.categorizeError)(error_5);
                    setApiError({
                        code: apiError.code,
                        message: apiError.message,
                        details: apiError.details,
                        resource: 'cancellation'
                    });
                    throw apiError;
                case 3:
                    setResourceLoading('cancellation', false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [setResourceLoading, clearApiError, successToast, setApiError]);
    var rescheduleBooking = (0, react_1.useCallback)(function (bookingId, newDate, newTimeSlot) { return __awaiter(void 0, void 0, void 0, function () {
        var error_6, apiError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setResourceLoading('rescheduling', true);
                    clearApiError();
                    // Call the BookingService to reschedule the booking
                    return [4 /*yield*/, booking_service_1.BookingService.rescheduleBooking(bookingId, newDate, newTimeSlot)];
                case 1:
                    // Call the BookingService to reschedule the booking
                    _a.sent();
                    // Show success toast
                    successToast("Booking Rescheduled", "Your booking has been rescheduled successfully.", ANIMATION_TIMING.standard);
                    return [3 /*break*/, 4];
                case 2:
                    error_6 = _a.sent();
                    apiError = (0, apiUtils_1.categorizeError)(error_6);
                    setApiError({
                        code: apiError.code,
                        message: apiError.message,
                        details: apiError.details,
                        resource: 'rescheduling'
                    });
                    throw apiError;
                case 3:
                    setResourceLoading('rescheduling', false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [setResourceLoading, clearApiError, successToast, setApiError]);
    var createPaymentIntent = (0, react_1.useCallback)(function (serviceType, duration) { return __awaiter(void 0, void 0, void 0, function () {
        var amount, response, error_7, apiError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setResourceLoading('paymentIntent', true);
                    clearApiError();
                    amount = duration * 100;
                    return [4 /*yield*/, booking_service_1.BookingService.createPaymentIntent(amount)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            clientSecret: response.data.clientSecret,
                            paymentIntentId: response.data.paymentIntentId
                        }];
                case 2:
                    error_7 = _a.sent();
                    apiError = (0, apiUtils_1.categorizeError)(error_7);
                    setApiError({
                        code: apiError.code,
                        message: apiError.message,
                        details: apiError.details,
                        resource: 'paymentIntent'
                    });
                    throw apiError;
                case 3:
                    setResourceLoading('paymentIntent', false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [setResourceLoading, clearApiError, setApiError]);
    // Load available services when the context is first initialized
    (0, react_1.useEffect)(function () {
        fetchAvailableServices();
    }, [fetchAvailableServices]);
    // Context value
    var contextValue = (0, react_1.useMemo)(function () { return ({
        state: state,
        // Navigation actions
        goToStep: goToStep,
        goToNextStep: goToNextStep,
        goToPreviousStep: goToPreviousStep,
        // Data actions
        selectService: selectService,
        selectDate: selectDate,
        selectTimeSlot: selectTimeSlot,
        setClientInfo: setClientInfo,
        // State management
        setAvailableDates: setAvailableDates,
        setLoading: setLoading,
        setError: setError,
        clearError: clearError,
        completeStep: completeStep,
        setBookingReference: setBookingReference,
        resetForm: resetForm,
        // API actions
        fetchAvailableServices: fetchAvailableServices,
        fetchAvailableDates: fetchAvailableDates,
        fetchAvailableTimeSlots: fetchAvailableTimeSlots,
        submitBooking: submitBooking,
        cancelBooking: cancelBooking,
        rescheduleBooking: rescheduleBooking,
        createPaymentIntent: createPaymentIntent,
        // Helper methods
        canProceedToStep: canProceedToStep,
        getCompleteBookingData: getCompleteBookingData,
        isResourceLoading: isResourceLoading,
        hasApiError: hasApiError,
        getApiErrorForResource: getApiErrorForResource,
        // Backward compatibility properties
        currentStep: state.currentStep,
        nextStep: nextStep,
        previousStep: previousStep,
        selectedServices: state.availableServices,
        selectedService: state.selectedService,
        setSelectedService: setSelectedService,
        selectedDate: state.selectedDate,
        setSelectedDate: setSelectedDate,
        selectedTime: state.selectedTime,
        setSelectedTime: setSelectedTime,
        setCurrentStep: setCurrentStep,
        customerInfo: state.customerInfo,
        setCustomerInfo: setCustomerInfo,
        completeBooking: completeBooking,
        bookingComplete: state.bookingComplete,
        bookingReference: state.bookingReference,
        updateFormData: updateFormData
    }); }, [
        state,
        goToStep,
        goToNextStep,
        goToPreviousStep,
        selectService,
        selectDate,
        selectTimeSlot,
        setClientInfo,
        setAvailableDates,
        setLoading,
        setError,
        clearError,
        completeStep,
        setBookingReference,
        resetForm,
        fetchAvailableServices,
        fetchAvailableDates,
        fetchAvailableTimeSlots,
        submitBooking,
        cancelBooking,
        rescheduleBooking,
        createPaymentIntent,
        canProceedToStep,
        getCompleteBookingData,
        isResourceLoading,
        hasApiError,
        getApiErrorForResource,
        nextStep,
        previousStep,
        setSelectedService,
        setSelectedDate,
        setSelectedTime,
        setCurrentStep,
        setCustomerInfo,
        completeBooking,
        updateFormData
    ]);
    return React.createElement(BookingContext.Provider, { value: contextValue }, children);
};
exports.BookingProvider = BookingProvider;
/**
 * Custom hook to use the booking context
 * @returns The booking context
 * @throws Error if used outside a BookingProvider
 */
var useBooking = function () {
    var context = (0, react_1.useContext)(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
exports.useBooking = useBooking;
exports.default = BookingContext;
