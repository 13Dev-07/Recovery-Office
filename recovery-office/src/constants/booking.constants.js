"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANCELLATION_FEE_PERCENTAGE = exports.CANCELLATION_POLICY_HOURS = exports.BOOKING_MAX_DATE = exports.BOOKING_MIN_DATE = exports.DATE_FORMAT_OPTIONS = exports.TIME_SLOT_FORMAT_OPTIONS = exports.DEFAULT_BOOKING_FORM_VALUES = exports.PAYMENT_METHODS = exports.BOOKING_STEPS = void 0;
var booking_types_1 = require("../types/booking.types");
/**
 * Booking steps definition
 * Each step in the booking process with its ID, label, and optional description
 * Follows a logical progression from service selection to booking confirmation
 */
exports.BOOKING_STEPS = [
    {
        id: booking_types_1.BookingStepId.SERVICE_SELECTION,
        label: 'Select Service',
        description: 'Choose the service that best fits your needs'
    },
    {
        id: booking_types_1.BookingStepId.DATE_SELECTION,
        label: 'Select Date & Time',
        description: 'Pick a convenient date and time for your appointment'
    },
    {
        id: booking_types_1.BookingStepId.CLIENT_INFORMATION,
        label: 'Your Information',
        description: 'Provide your personal and contact details'
    },
    {
        id: booking_types_1.BookingStepId.CONFIRMATION,
        label: 'Confirm & Pay',
        description: 'Review your booking and complete payment'
    },
    {
        id: booking_types_1.BookingStepId.SUCCESS,
        label: 'Success',
        description: 'Your booking is confirmed'
    }
];
/**
 * Payment method options
 * Available payment methods for booking confirmation
 */
exports.PAYMENT_METHODS = [
    {
        id: 'credit_card',
        label: 'Credit Card',
        description: 'Pay securely with your credit card'
    },
    {
        id: 'paypal',
        label: 'PayPal',
        description: 'Pay using your PayPal account'
    }
];
/**
 * Booking form default values
 * Initial values for the booking form
 */
exports.DEFAULT_BOOKING_FORM_VALUES = {
    serviceId: '',
    practitionerId: '',
    date: '',
    timeSlot: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'US'
    },
    specialRequests: '',
    healthInformation: '',
    emergencyContact: {
        name: '',
        phone: '',
        relationship: ''
    },
    termsAccepted: false,
    cancellationPolicyAccepted: false,
    paymentMethod: '',
    paymentIntentId: '',
    marketingOptIn: false
};
/**
 * Booking time slot format options
 * For formatting time slots in the UI
 */
exports.TIME_SLOT_FORMAT_OPTIONS = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};
/**
 * Booking date format options
 * For formatting dates in the UI
 */
exports.DATE_FORMAT_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
/**
 * Booking minimum date
 * Minimum date allowed for booking (today)
 */
exports.BOOKING_MIN_DATE = new Date();
/**
 * Booking maximum date
 * Maximum date allowed for booking (90 days from today)
 */
exports.BOOKING_MAX_DATE = new Date(new Date().setDate(new Date().getDate() + 90));
/**
 * Cancellation policy timeframe in hours
 * How many hours before the appointment a cancellation is allowed without fees
 */
exports.CANCELLATION_POLICY_HOURS = 24;
/**
 * Cancellation fee percentage
 * Percentage of the service cost charged as a cancellation fee
 */
exports.CANCELLATION_FEE_PERCENTAGE = 50;
