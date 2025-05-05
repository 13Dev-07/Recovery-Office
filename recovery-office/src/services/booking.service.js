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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingService = exports.BookingService = void 0;
var sacred_geometry_1 = require("../constants/sacred-geometry");
var api_client_1 = require("./api.client");
// API endpoint base path for bookings
var API_BASE_PATH = '/api/bookings';
// Request timeout in milliseconds based on Fibonacci sequence
var REQUEST_TIMEOUT = (_a = sacred_geometry_1.FIBONACCI[10]) !== null && _a !== void 0 ? _a : 1; // 55 seconds
/**
 * Creates a booking request payload by combining validated data from multiple steps
 *
 * @param service Service selection data
 * @param client Client information data
 * @param confirmation Confirmation step data
 * @returns Complete booking request payload
 */
var createBookingPayload = function (service, client, confirmation) {
    // Create a partial ClientInfo object with the fields we have
    var clientInfo = {
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email.toLowerCase(),
        phone: client.phone
    };
    // Create the booking request
    return {
        serviceId: service.serviceId,
        practitionerId: service.practitionerId,
        date: service.date || '', // Ensure date is provided
        timeSlot: service.timeSlot || '', // Ensure timeSlot is provided
        client: clientInfo, // Type assertion since we're not providing all fields
        paymentMethod: confirmation.paymentMethod,
        paymentIntentId: confirmation.paymentIntentId || '',
    };
};
/**
 * Transforms an Axios response to our ApiResponse format
 * @param axiosResponse The Axios response object
 * @returns ApiResponse with the correct format
 */
function transformResponse(axiosResponse) {
    return {
        success: true,
        data: axiosResponse.data,
        timestamp: new Date().toISOString()
    };
}
/**
 * BookingService class
 * Handles all booking-related API interactions
 * Implements caching for frequently accessed data
 */
var BookingService = /** @class */ (function () {
    function BookingService() {
        this.servicesCache = null;
        this.availableDatesCache = new Map();
        this.availableTimeSlotsCache = new Map();
    }
    /**
     * Get singleton instance of BookingService
     */
    BookingService.getInstance = function () {
        if (!BookingService.instance) {
            BookingService.instance = new BookingService();
        }
        return BookingService.instance;
    };
    /**
     * Get available services - Static method for testing
     */
    BookingService.getAvailableServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().getServices()];
            });
        });
    };
    /**
     * Get available dates - Static method for testing
     */
    BookingService.getAvailableDates = function (serviceId, practitionerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().getAvailableDates(serviceId, practitionerId)];
            });
        });
    };
    /**
     * Get available time slots - Static method for testing
     */
    BookingService.getAvailableTimeSlots = function (serviceId, date, practitionerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().getAvailableTimeSlots(serviceId, date, practitionerId)];
            });
        });
    };
    /**
     * Submit booking - Static method for testing
     */
    BookingService.submitBooking = function (bookingRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_client_1.apiClient.post('/bookings', bookingRequest)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_1 = _a.sent();
                        throw BookingService.getInstance().handleApiError(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create booking - Static method for testing
     */
    BookingService.createBooking = function (serviceData, clientData, confirmationData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().createBooking(serviceData, clientData, confirmationData)];
            });
        });
    };
    /**
     * Cancel booking - Static method for testing
     */
    BookingService.cancelBooking = function (bookingId, reason) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().cancelBooking(bookingId, reason)];
            });
        });
    };
    /**
     * Reschedule booking - Static method for testing
     */
    BookingService.rescheduleBooking = function (bookingId, newDate, newTimeSlot) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.getInstance().rescheduleBooking(bookingId, newDate, newTimeSlot)];
            });
        });
    };
    /**
     * Clear all cached data
     */
    BookingService.prototype.clearCache = function () {
        this.servicesCache = null;
        this.availableDatesCache.clear();
        this.availableTimeSlotsCache.clear();
    };
    /**
     * Get all available services
     * @param forceRefresh Force a refresh of cached data
     * @returns Promise with services array
     */
    BookingService.prototype.getServices = function () {
        return __awaiter(this, arguments, void 0, function (forceRefresh) {
            var response, error_2;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Return cached services if available and not forcing refresh
                        if (this.servicesCache && !forceRefresh) {
                            return [2 /*return*/, {
                                    success: true,
                                    data: this.servicesCache,
                                    timestamp: new Date().toISOString()
                                }];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api_client_1.apiClient.get('/services')];
                    case 2:
                        response = _a.sent();
                        // Cache the services
                        this.servicesCache = response.data;
                        return [2 /*return*/, transformResponse(response)];
                    case 3:
                        error_2 = _a.sent();
                        throw this.handleApiError(error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get available dates for a service
     * @param serviceId The ID of the service
     * @param practitionerId Optional practitioner ID
     * @param forceRefresh Force a refresh of cached data
     * @returns Promise with available dates response
     */
    BookingService.prototype.getAvailableDates = function (serviceId_1, practitionerId_1) {
        return __awaiter(this, arguments, void 0, function (serviceId, practitionerId, forceRefresh) {
            var cacheKey, queryParams, response, error_3;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = "".concat(serviceId).concat(practitionerId ? "-".concat(practitionerId) : '');
                        // Return cached dates if available and not forcing refresh
                        if (this.availableDatesCache.has(cacheKey) && !forceRefresh) {
                            return [2 /*return*/, {
                                    success: true,
                                    data: this.availableDatesCache.get(cacheKey),
                                    timestamp: new Date().toISOString()
                                }];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        queryParams = practitionerId ? "?practitionerId=".concat(practitionerId) : '';
                        return [4 /*yield*/, api_client_1.apiClient.get("/services/".concat(serviceId, "/available-dates").concat(queryParams))];
                    case 2:
                        response = _a.sent();
                        // Cache the available dates
                        this.availableDatesCache.set(cacheKey, response.data);
                        return [2 /*return*/, transformResponse(response)];
                    case 3:
                        error_3 = _a.sent();
                        throw this.handleApiError(error_3);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get available time slots for a service on a specific date
     * @param serviceId The ID of the service
     * @param date The date string in ISO format
     * @param practitionerId Optional practitioner ID
     * @param forceRefresh Force a refresh of cached data
     * @returns Promise with available time slots array
     */
    BookingService.prototype.getAvailableTimeSlots = function (serviceId_1, date_1, practitionerId_1) {
        return __awaiter(this, arguments, void 0, function (serviceId, date, practitionerId, forceRefresh) {
            var cacheKey, queryParams, response, error_4;
            if (forceRefresh === void 0) { forceRefresh = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheKey = "".concat(serviceId, "-").concat(date).concat(practitionerId ? "-".concat(practitionerId) : '');
                        // Return cached time slots if available and not forcing refresh
                        if (this.availableTimeSlotsCache.has(cacheKey) && !forceRefresh) {
                            return [2 /*return*/, {
                                    success: true,
                                    data: this.availableTimeSlotsCache.get(cacheKey),
                                    timestamp: new Date().toISOString()
                                }];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        queryParams = practitionerId ? "&practitionerId=".concat(practitionerId) : '';
                        return [4 /*yield*/, api_client_1.apiClient.get("/services/".concat(serviceId, "/available-time-slots?date=").concat(date).concat(queryParams))];
                    case 2:
                        response = _a.sent();
                        // Cache the available time slots
                        this.availableTimeSlotsCache.set(cacheKey, response.data);
                        return [2 /*return*/, transformResponse(response)];
                    case 3:
                        error_4 = _a.sent();
                        throw this.handleApiError(error_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a new booking
     * @param serviceData Service selection data
     * @param clientData Client information data
     * @param confirmationData Confirmation step data
     * @returns Promise with booking response
     */
    BookingService.prototype.createBooking = function (serviceData, clientData, confirmationData) {
        return __awaiter(this, void 0, void 0, function () {
            var bookingData, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        bookingData = createBookingPayload(serviceData, clientData, confirmationData);
                        return [4 /*yield*/, api_client_1.apiClient.post('/bookings', bookingData)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_5 = _a.sent();
                        throw this.handleApiError(error_5);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cancel a booking
     * @param bookingId The ID of the booking to cancel
     * @param reason Optional cancellation reason
     * @returns Promise with success response
     */
    BookingService.prototype.cancelBooking = function (bookingId, reason) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_client_1.apiClient.post("/bookings/".concat(bookingId, "/cancel"), { reason: reason })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_6 = _a.sent();
                        throw this.handleApiError(error_6);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reschedule a booking
     * @param bookingId The ID of the booking to reschedule
     * @param newDate New date string in ISO format
     * @param newTimeSlot New time slot string
     * @returns Promise with updated booking response
     */
    BookingService.prototype.rescheduleBooking = function (bookingId, newDate, newTimeSlot) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_client_1.apiClient.post("/bookings/".concat(bookingId, "/reschedule"), {
                                date: newDate,
                                timeSlot: newTimeSlot
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_7 = _a.sent();
                        throw this.handleApiError(error_7);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a payment intent for a booking
     * @param amount Payment amount in cents
     * @param currency Currency code (default: 'usd')
     * @returns Promise with payment intent response
     */
    BookingService.createPaymentIntent = function (amount_1) {
        return __awaiter(this, arguments, void 0, function (amount, currency) {
            var response, error_8;
            if (currency === void 0) { currency = 'usd'; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_client_1.apiClient.post('/payments/create-intent', {
                                amount: amount,
                                currency: currency
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_8 = _a.sent();
                        throw BookingService.getInstance().handleApiError(error_8);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Instance method version of createPaymentIntent for backward compatibility
     * @param amount Payment amount in cents
     * @param currency Currency code (default: 'usd')
     * @returns Promise with payment intent response
     */
    BookingService.prototype.createPaymentIntent = function (amount_1) {
        return __awaiter(this, arguments, void 0, function (amount, currency) {
            if (currency === void 0) { currency = 'usd'; }
            return __generator(this, function (_a) {
                return [2 /*return*/, BookingService.createPaymentIntent(amount, currency)];
            });
        });
    };
    /**
     * Get a booking by ID
     * @param bookingId The ID of the booking
     * @returns Promise with booking response
     */
    BookingService.prototype.getBooking = function (bookingId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_client_1.apiClient.get("/bookings/".concat(bookingId))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, transformResponse(response)];
                    case 2:
                        error_9 = _a.sent();
                        throw this.handleApiError(error_9);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle API errors consistently
     * @param error The error object from API call
     * @returns Formatted error response
     */
    BookingService.prototype.handleApiError = function (error) {
        var _a, _b, _c;
        if (error instanceof Error) {
            // If it's already our ApiError type
            if ('code' in error && 'statusCode' in error) {
                return {
                    success: false,
                    error: {
                        code: error.code || 'UNEXPECTED_ERROR',
                        message: error.message,
                        details: error.details
                    },
                    timestamp: new Date().toISOString()
                };
            }
            // If it's an Axios error with a response
            if ('response' in error && error.response) {
                var response = error.response;
                return {
                    success: false,
                    error: {
                        code: ((_a = response.data) === null || _a === void 0 ? void 0 : _a.code) || 'SERVER_ERROR',
                        message: ((_b = response.data) === null || _b === void 0 ? void 0 : _b.message) || error.message,
                        details: (_c = response.data) === null || _c === void 0 ? void 0 : _c.details
                    },
                    timestamp: new Date().toISOString()
                };
            }
            // Network error or other error
            return {
                success: false,
                error: {
                    code: 'NETWORK_ERROR',
                    message: error.message,
                },
                timestamp: new Date().toISOString()
            };
        }
        // Unknown error
        return {
            success: false,
            error: {
                code: 'UNEXPECTED_ERROR',
                message: 'An unknown error occurred',
            },
            timestamp: new Date().toISOString()
        };
    };
    return BookingService;
}());
exports.BookingService = BookingService;
// Export singleton instance
exports.bookingService = BookingService.getInstance();
