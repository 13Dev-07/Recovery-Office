"use strict";
/**
 * useToast Hook
 *
 * This is a wrapper around the Toast component that provides toast functionality
 * without directly importing JSX components, which helps avoid JSX-related TypeScript errors.
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
exports.useToast = void 0;
var react_1 = require("react");
/**
 * A hook that provides toast notification functionality
 * This avoids direct JSX imports which can cause TypeScript compilation issues
 */
var useToast = function () {
    var _a = (0, react_1.useState)([]), toasts = _a[0], setToasts = _a[1];
    // Generate a unique ID for each toast
    var generateId = (0, react_1.useCallback)(function () {
        return "toast-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
    }, []);
    // Add a new toast notification
    var showToast = (0, react_1.useCallback)(function (options) {
        var id = generateId();
        // Handle backward compatibility for status/type and description/message
        var type = options.type || options.status || 'info';
        var message = options.message || options.description || '';
        var newToast = {
            id: id,
            visible: true,
            type: type,
            title: options.title,
            message: message,
            duration: options.duration || 5000,
            position: options.position || 'top-right',
            onClose: options.onClose,
            isClosable: options.isClosable,
        };
        setToasts(function (prevToasts) { return __spreadArray(__spreadArray([], prevToasts, true), [newToast], false); });
        // Auto-close after duration
        if (newToast.duration !== Infinity) {
            setTimeout(function () {
                closeToast(id);
            }, newToast.duration);
        }
        return id;
    }, [generateId]);
    // Close toast by ID
    var closeToast = (0, react_1.useCallback)(function (id) {
        setToasts(function (prevToasts) {
            return prevToasts.map(function (toast) {
                return toast.id === id ? __assign(__assign({}, toast), { visible: false }) : toast;
            });
        });
        // Remove from array after animation completes
        setTimeout(function () {
            setToasts(function (prevToasts) { return prevToasts.filter(function (toast) { return toast.id !== id; }); });
        }, 300); // Animation duration
    }, []);
    // Convenience methods for different toast types
    var successToast = (0, react_1.useCallback)(function (titleOrMessage, descriptionOrOptions, duration) {
        // Handle different argument patterns
        if (typeof descriptionOrOptions === 'string') {
            // If second argument is a string, it's a description
            return showToast({
                title: titleOrMessage,
                message: descriptionOrOptions,
                type: 'success',
                duration: duration || 5000
            });
        }
        else {
            // Otherwise it's options or undefined
            return showToast(__assign(__assign({}, descriptionOrOptions), { message: titleOrMessage, type: 'success' }));
        }
    }, [showToast]);
    var errorToast = (0, react_1.useCallback)(function (titleOrMessage, descriptionOrOptions, duration) {
        // Handle different argument patterns
        if (typeof descriptionOrOptions === 'string') {
            // If second argument is a string, it's a description
            return showToast({
                title: titleOrMessage,
                message: descriptionOrOptions,
                type: 'error',
                duration: duration || 5000
            });
        }
        else {
            // Otherwise it's options or undefined
            return showToast(__assign(__assign({}, descriptionOrOptions), { message: titleOrMessage, type: 'error' }));
        }
    }, [showToast]);
    var warningToast = (0, react_1.useCallback)(function (titleOrMessage, descriptionOrOptions, duration) {
        // Handle different argument patterns
        if (typeof descriptionOrOptions === 'string') {
            // If second argument is a string, it's a description
            return showToast({
                title: titleOrMessage,
                message: descriptionOrOptions,
                type: 'warning',
                duration: duration || 5000
            });
        }
        else {
            // Otherwise it's options or undefined
            return showToast(__assign(__assign({}, descriptionOrOptions), { message: titleOrMessage, type: 'warning' }));
        }
    }, [showToast]);
    var infoToast = (0, react_1.useCallback)(function (titleOrMessage, descriptionOrOptions, duration) {
        // Handle different argument patterns
        if (typeof descriptionOrOptions === 'string') {
            // If second argument is a string, it's a description
            return showToast({
                title: titleOrMessage,
                message: descriptionOrOptions,
                type: 'info',
                duration: duration || 5000
            });
        }
        else {
            // Otherwise it's options or undefined
            return showToast(__assign(__assign({}, descriptionOrOptions), { message: titleOrMessage, type: 'info' }));
        }
    }, [showToast]);
    // Function to directly show a toast (for compatibility with old usage)
    var toast = (0, react_1.useCallback)(function (options) {
        return showToast(options);
    }, [showToast]);
    return {
        toasts: toasts,
        showToast: showToast,
        closeToast: closeToast,
        successToast: successToast,
        errorToast: errorToast,
        warningToast: warningToast,
        infoToast: infoToast,
        toast: toast
    };
};
exports.useToast = useToast;
exports.default = exports.useToast;
