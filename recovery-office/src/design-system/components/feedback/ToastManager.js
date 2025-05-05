"use strict";
/**
 * ToastManager Component
 *
 * A manager component that initializes the toast system and makes it available throughout the application.
 * This component should be rendered once at the application root to set up the toast manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastManager = void 0;
var React = require("react");
var react_1 = require("react");
;
var Toast_1 = require("./Toast");
/**
 * ToastManager initializes the toast system and makes it available throughout the application.
 * It assigns the toast manager instance to a global variable for use outside of React components.
 */
var ToastManager = function (_a) {
    var children = _a.children, defaultOptions = _a.defaultOptions;
    return (<Toast_1.ToastProvider defaultOptions={defaultOptions}>
      <ToastInitializer />
      {children}
    </Toast_1.ToastProvider>);
};
exports.ToastManager = ToastManager;
/**
 * Internal component that initializes the global toast manager on mount
 */
var ToastInitializer = function () {
    var toastManager = (0, Toast_1.useToast)();
    (0, react_1.useEffect)(function () {
        // Set the toast manager for global access
        (0, Toast_1.setToastManager)(toastManager);
        return function () {
            // Clean up on unmount (although this shouldn't happen in practice)
            (0, Toast_1.setToastManager)(null);
        };
    }, [toastManager]);
    return null;
};
exports.default = exports.ToastManager;
