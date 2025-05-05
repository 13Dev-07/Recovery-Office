"use strict";
/**
 * Booking Service
 *
 * Provides API calls and utilities for the booking system.
 * Implements sacred geometry principles for timing and data structures.
 */
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
exports.bookingService = void 0;
exports.calculateOptimalSessionDuration = calculateOptimalSessionDuration;
exports.calculatePriceFromDuration = calculatePriceFromDuration;
exports.recommendOptimalBookingTimes = recommendOptimalBookingTimes;
var api_types_1 = require("../types/api.types");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var api_1 = require("./api");
var apiUtils_1 = require("../utils/apiUtils");
// API Endpoints
var ENDPOINTS = {
    AVAILABLE_DATES: '/booking/available-dates',
    AVAILABLE_SLOTS: '/booking/available-slots',
    AVAILABLE_SERVICES: '/booking/services',
    CREATE_BOOKING: '/booking/create',
    GET_BOOKING: function (id) { return "/booking/".concat(id); },
    CANCEL_BOOKING: function (id) { return "/booking/".concat(id, "/cancel"); },
    RESCHEDULE_BOOKING: function (id) { return "/booking/".concat(id, "/reschedule"); },
    UPDATE_BOOKING: function (id) { return "/booking/".concat(id); },
};
/**
 * Booking Service API
 * Contains all methods for interacting with the booking API
 */
exports.bookingService = {
    /**
     * Get available dates for booking within a specified range
     * @param startDate Start date of the range (YYYY-MM-DD)
     * @param endDate End date of the range (YYYY-MM-DD)
     * @param serviceType Optional service type to filter availability
     * @returns Array of available dates with availability count
     */
    getAvailableDates: function (startDate, endDate, serviceType) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.get(ENDPOINTS.AVAILABLE_DATES, {
                                        params: {
                                            startDate: startDate,
                                            endDate: endDate,
                                            serviceType: serviceType
                                        }
                                    })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_1 = _a.sent();
                                throw (0, apiUtils_1.categorizeError)(error_1);
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Get available dates')];
        });
    }); },
    /**
     * Get available time slots for a specific date
     * @param request Request object with date, service type, and optional duration
     * @returns Array of time slots with availability status
     */
    getAvailableSlots: function (request) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Validate request with Zod schema
            try {
                api_types_1.availableSlotsRequestSchema.parse(request);
            }
            catch (error) {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid request format for available slots', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.get(ENDPOINTS.AVAILABLE_SLOTS, {
                                        params: request
                                    })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_2 = _a.sent();
                                throw (0, apiUtils_1.categorizeError)(error_2);
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Get available time slots')];
        });
    }); },
    /**
     * Get list of available services with details
     * @returns Array of available services with details
     */
    getAvailableServices: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.get(ENDPOINTS.AVAILABLE_SERVICES)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_3 = _a.sent();
                                throw (0, apiUtils_1.categorizeError)(error_3);
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Get available services')];
        });
    }); },
    /**
     * Create a new booking
     * @param bookingData Booking request data
     * @returns Created booking response with confirmation details
     */
    createBooking: function (bookingData) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Validate with Zod schema
            try {
                api_types_1.createBookingRequestSchema.parse(bookingData);
            }
            catch (error) {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid booking request data', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_4, apiError;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.post(ENDPOINTS.CREATE_BOOKING, bookingData)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_4 = _a.sent();
                                apiError = (0, apiUtils_1.categorizeError)(error_4);
                                // Special handling for validation errors
                                if (apiError.code === api_types_1.ApiErrorCode.VALIDATION_ERROR) {
                                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Please check your booking information and try again', api_types_1.HttpStatusCode.UNPROCESSABLE_ENTITY, apiError.details);
                                }
                                // Special handling for booking conflicts
                                if (apiError.code === api_types_1.ApiErrorCode.BOOKING_CONFLICT) {
                                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.BOOKING_CONFLICT, 'This time slot is no longer available. Please select another time.', api_types_1.HttpStatusCode.CONFLICT);
                                }
                                throw apiError;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Create booking')];
        });
    }); },
    /**
     * Get booking details by ID
     * @param bookingId The booking ID to retrieve
     * @returns The booking details
     */
    getBookingById: function (bookingId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!bookingId || typeof bookingId !== 'string') {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid booking ID', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_5, apiError;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.get(ENDPOINTS.GET_BOOKING(bookingId))];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_5 = _a.sent();
                                apiError = (0, apiUtils_1.categorizeError)(error_5);
                                // Special handling for booking not found
                                if (apiError.code === api_types_1.ApiErrorCode.RESOURCE_NOT_FOUND) {
                                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.RESOURCE_NOT_FOUND, 'Booking not found', api_types_1.HttpStatusCode.NOT_FOUND);
                                }
                                throw apiError;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Get booking by ID')];
        });
    }); },
    /**
     * Cancel an existing booking
     * @param bookingId The booking ID to cancel
     * @param reason Optional reason for cancellation
     * @returns Updated booking with cancelled status
     */
    cancelBooking: function (bookingId, reason) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!bookingId || typeof bookingId !== 'string') {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid booking ID', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.post(ENDPOINTS.CANCEL_BOOKING(bookingId), { reason: reason })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_6 = _a.sent();
                                throw (0, apiUtils_1.categorizeError)(error_6);
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Cancel booking')];
        });
    }); },
    /**
     * Reschedule an existing booking
     * @param bookingId The booking ID to reschedule
     * @param newStartTime New start time for the booking (ISO datetime)
     * @param newEndTime New end time for the booking (ISO datetime)
     * @returns Updated booking with new schedule
     */
    rescheduleBooking: function (bookingId, newStartTime, newEndTime) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Validate input parameters
            if (!bookingId || typeof bookingId !== 'string') {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid booking ID', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            if (!newStartTime || !newEndTime || typeof newStartTime !== 'string' || typeof newEndTime !== 'string') {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid start or end time', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            // Validate that start time is before end time
            if (new Date(newStartTime) >= new Date(newEndTime)) {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Start time must be before end time', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_7, apiError;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.post(ENDPOINTS.RESCHEDULE_BOOKING(bookingId), {
                                        startTime: newStartTime,
                                        endTime: newEndTime
                                    })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_7 = _a.sent();
                                apiError = (0, apiUtils_1.categorizeError)(error_7);
                                // Handle booking conflicts for reschedule
                                if (apiError.code === api_types_1.ApiErrorCode.BOOKING_CONFLICT) {
                                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.BOOKING_CONFLICT, 'The requested time slot is not available for rescheduling', api_types_1.HttpStatusCode.CONFLICT);
                                }
                                throw apiError;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Reschedule booking')];
        });
    }); },
    /**
     * Update booking information
     * @param bookingId The booking ID to update
     * @param data Partial booking data to update
     * @returns Updated booking with new information
     */
    updateBooking: function (bookingId, data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!bookingId || typeof bookingId !== 'string') {
                throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Invalid booking ID', api_types_1.HttpStatusCode.BAD_REQUEST);
            }
            return [2 /*return*/, (0, apiUtils_1.retryWithFibonacci)(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, error_8, apiError;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1.api.patch(ENDPOINTS.UPDATE_BOOKING(bookingId), data)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                            case 2:
                                error_8 = _a.sent();
                                apiError = (0, apiUtils_1.categorizeError)(error_8);
                                // Handle validation errors
                                if (apiError.code === api_types_1.ApiErrorCode.VALIDATION_ERROR) {
                                    throw new api_types_1.ApiError(api_types_1.ApiErrorCode.VALIDATION_ERROR, 'Please check your booking information and try again', api_types_1.HttpStatusCode.UNPROCESSABLE_ENTITY, apiError.details);
                                }
                                throw apiError;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 'Update booking')];
        });
    }); }
};
/**
 * Calculate optimal session duration based on sacred geometry principles
 * @param requestedMinutes Requested session duration in minutes
 * @returns Optimized session duration following Fibonacci sequence
 */
function calculateOptimalSessionDuration(requestedMinutes) {
    // Convert requested duration to the nearest Fibonacci number
    var fibValues = Object.values(sacred_geometry_1.FIBONACCI);
    // Find the closest Fibonacci value (minimum 30 minutes, maximum 120 minutes)
    var validFibValues = fibValues.filter(function (v) { return v >= 30 && v <= 120; });
    var closestFib = validFibValues.reduce(function (prev, curr) {
        return Math.abs(curr - requestedMinutes) < Math.abs(prev - requestedMinutes) ? curr : prev;
    });
    return closestFib;
}
/**
 * Calculate price based on duration following golden ratio principles
 * @param durationMinutes Session duration in minutes
 * @param basePrice Base price for the standard session
 * @returns Calculated price
 */
function calculatePriceFromDuration(durationMinutes, basePrice) {
    if (basePrice === void 0) { basePrice = 75; }
    // Standard session is 50 minutes at base price
    var standardDuration = 50;
    // Apply golden ratio to calculate the price proportionally
    var priceRatio = (durationMinutes / standardDuration) * sacred_geometry_1.PHI;
    // Round to nearest whole dollar
    return Math.round(basePrice * priceRatio);
}
/**
 * Recommend optimal booking times based on sacred geometry principles
 * @param availableSlots Array of available time slots
 * @param count Number of recommendations to return
 * @returns Array of recommended time slots
 */
function recommendOptimalBookingTimes(availableSlots, count) {
    var _a, _b;
    if (count === void 0) { count = 3; }
    // Filter to only available slots
    var availableOnly = availableSlots.filter(function (slot) { return slot.isAvailable; });
    if (availableOnly.length <= count) {
        return availableOnly;
    }
    // Get slots at golden ratio positions through the day
    var totalSlots = availableOnly.length;
    var recommendations = [];
    // Get slots at golden ratio intervals
    for (var i = 0; i < count; i++) {
        // Calculate position using golden ratio to spread throughout the day
        var position = Math.floor((i * sacred_geometry_1.PHI) % 1 * totalSlots);
        if ((_a = availableOnly[position]) !== null && _a !== void 0 ? _a : 1) {
            recommendations.push((_b = availableOnly[position]) !== null && _b !== void 0 ? _b : 1);
        }
        ;
    }
    return recommendations;
}
