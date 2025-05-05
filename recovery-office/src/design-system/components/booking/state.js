"use strict";
/**
 * Booking State Management
 *
 * This module provides state management for the booking process using React Context.
 * It includes the BookingState interface, actions, reducer, and context.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockTimeSlots = exports.useBookingContext = exports.BookingContext = exports.bookingReducer = exports.initialBookingState = void 0;
var react_1 = require("react");
/**
 * Initial booking state
 */
exports.initialBookingState = {
    selectedService: null,
    selectedDate: null,
    timeSlot: null,
    availableTimeSlots: [],
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientMessage: '',
    agreedToTerms: false,
    currentStep: 0,
    isSubmitting: false,
    isSubmitted: false,
    error: null
};
/**
 * Booking state reducer
 */
var bookingReducer = function (state, action) {
    switch (action.type) {
        case 'SET_SERVICE':
            return __assign(__assign({}, state), { selectedService: action.payload });
        case 'SET_DATE':
            return __assign(__assign({}, state), { selectedDate: action.payload });
        case 'SET_AVAILABLE_TIME_SLOTS':
            return __assign(__assign({}, state), { availableTimeSlots: action.payload });
        case 'SET_TIME_SLOT':
            return __assign(__assign({}, state), { timeSlot: action.payload });
        case 'SET_CLIENT_NAME':
            return __assign(__assign({}, state), { clientName: action.payload });
        case 'SET_CLIENT_EMAIL':
            return __assign(__assign({}, state), { clientEmail: action.payload });
        case 'SET_CLIENT_PHONE':
            return __assign(__assign({}, state), { clientPhone: action.payload });
        case 'SET_CLIENT_MESSAGE':
            return __assign(__assign({}, state), { clientMessage: action.payload });
        case 'SET_AGREED_TO_TERMS':
            return __assign(__assign({}, state), { agreedToTerms: action.payload });
        case 'SET_CURRENT_STEP':
            return __assign(__assign({}, state), { currentStep: action.payload });
        case 'SET_SUBMITTING':
            return __assign(__assign({}, state), { isSubmitting: action.payload });
        case 'SET_SUBMITTED':
            return __assign(__assign({}, state), { isSubmitted: action.payload });
        case 'SET_ERROR':
            return __assign(__assign({}, state), { error: action.payload });
        case 'RESET_FORM':
            return exports.initialBookingState;
        default:
            return state;
    }
};
exports.bookingReducer = bookingReducer;
/**
 * Booking context with default values
 */
exports.BookingContext = (0, react_1.createContext)({
    state: exports.initialBookingState,
    dispatch: function () { return null; }
});
/**
 * Custom hook for accessing the booking context
 */
var useBookingContext = function () {
    return (0, react_1.createContext)(exports.BookingContext);
};
exports.useBookingContext = useBookingContext;
/**
 * Returns mock time slots for a given date based on sacred geometry principles
 */
var getMockTimeSlots = function (date) {
    if (!date)
        return [];
    // Use the day of month to seed the time slot generation
    // This creates a consistent but varying pattern for different days
    var day = date.getDate();
    // Base time slots from 9am to 5pm
    var baseSlots = [
        '9:00 AM', '9:30 AM',
        '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM',
        '1:00 PM', '1:30 PM',
        '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM',
        '4:00 PM', '4:30 PM'
    ];
    // Generate "available" slots in a pattern based on day number
    // This uses a pseudo-random but consistent pattern
    return baseSlots.filter(function (_, index) {
        // Use a formula based on the golden ratio to determine availability
        var isAvailable = (index * 1.618 + day) % 3 < 2;
        return isAvailable;
    });
};
exports.getMockTimeSlots = getMockTimeSlots;
