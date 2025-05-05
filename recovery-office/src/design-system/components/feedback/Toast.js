"use strict";
/**
 * Toast Component
 *
 * A toast notification system that displays temporary messages with sacred geometry positioning.
 * Implements golden ratio proportions for natural visual harmony and Fibonacci sequence for timing.
 * Includes support for different variants, positions, and animation behaviors.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Toast = exports.setToastManager = exports.createToast = exports.useToast = exports.ToastProvider = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var react_dom_1 = require("react-dom");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Create the Toast context
var ToastContext = React.createContext(undefined);
// Styled container for all toasts at a specific position
var ToastContainer = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  padding: ", "px;\n  max-width: 100%;\n  max-height: 100vh;\n  overflow-y: auto;\n  \n  /* Calculate position based on sacred geometry principles */\n  ", "\n  \n  /* Scrollbar styling with sacred proportions */\n  &::-webkit-scrollbar {\n    width: ", "px;\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: ", "px;\n  }\n"], ["\n  position: fixed;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  padding: ", "px;\n  max-width: 100%;\n  max-height: 100vh;\n  overflow-y: auto;\n  \n  /* Calculate position based on sacred geometry principles */\n  ", "\n  \n  /* Scrollbar styling with sacred proportions */\n  &::-webkit-scrollbar {\n    width: ", "px;\n  }\n  \n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  \n  &::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: ", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.md, function (props) {
    switch (props.position) {
        case 'top':
            return "\n          top: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          left: 50%;\n          transform: translateX(-50%);\n          align-items: center;\n        ");
        case 'top-right':
            return "\n          top: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          right: ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          align-items: flex-end;\n        ");
        case 'right':
            return "\n          top: 50%;\n          right: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          transform: translateY(-50%);\n          align-items: flex-end;\n        ");
        case 'bottom-right':
            return "\n          bottom: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          right: ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          align-items: flex-end;\n        ");
        case 'bottom':
            return "\n          bottom: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          left: 50%;\n          transform: translateX(-50%);\n          align-items: center;\n        ");
        case 'bottom-left':
            return "\n          bottom: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          left: ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          align-items: flex-start;\n        ");
        case 'left':
            return "\n          top: 50%;\n          left: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          transform: translateY(-50%);\n          align-items: flex-start;\n        ");
        case 'top-left':
            return "\n          top: ".concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          left: ").concat(sacred_geometry_1.SACRED_SPACING.lg, "px;\n          align-items: flex-start;\n        ");
        default:
            return '';
    }
}, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), sacred_geometry_1.SACRED_RADIUS.sm);
// Status colors derived from primary theme colors
var statusColors = {
    default: {
        bg: '#FFFFFF',
        color: '#1A202C',
        accent: '#CBD5E0'
    },
    info: {
        bg: '#EBF8FF',
        color: '#2B6CB0',
        accent: '#4299E1'
    },
    success: {
        bg: '#F0FFF4',
        color: '#2F855A',
        accent: '#48BB78'
    },
    warning: {
        bg: '#FFFAF0',
        color: '#C05621',
        accent: '#ED8936'
    },
    error: {
        bg: '#FFF5F5',
        color: '#C53030',
        accent: '#F56565'
    }
};
// Individual toast item styles
var ToastItem = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: ", "px;\n  align-items: flex-start;\n  max-width: ", "px;\n  min-width: ", "px;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  margin-bottom: ", "px;\n  pointer-events: auto;\n  position: relative;\n  \n  /* Status-based styling */\n  background-color: ", ";\n  color: ", ";\n  border-left: ", "px solid ", ";\n"], ["\n  display: flex;\n  padding: ", "px;\n  align-items: flex-start;\n  max-width: ", "px;\n  min-width: ", "px;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  margin-bottom: ", "px;\n  pointer-events: auto;\n  position: relative;\n  \n  /* Status-based styling */\n  background-color: ", ";\n  color: ", ";\n  border-left: ", "px solid ", ";\n"])), sacred_geometry_1.SACRED_SPACING.md, (0, getFibonacciByIndex_1.getFibonacciByIndex)(13), (0, getFibonacciByIndex_1.getFibonacciByIndex)(12), sacred_geometry_1.SACRED_RADIUS.md, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), sacred_geometry_1.SACRED_SPACING.sm, function (props) { return statusColors[props.status].bg; }, function (props) { return statusColors[props.status].color; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), function (props) { return statusColors[props.status].accent; });
var ToastContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  padding-right: ", "px;\n"], ["\n  flex: 1;\n  padding-right: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var ToastTitle = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n"], ["\n  margin: 0;\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), sacred_geometry_1.SACRED_SPACING.xs);
var ToastDescription = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  opacity: 0.9;\n"], ["\n  font-size: ", "px;\n  opacity: 0.9;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5));
var CloseButton = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  color: currentColor;\n  opacity: 0.7;\n  \n  &:hover {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  color: currentColor;\n  opacity: 0.7;\n  \n  &:hover {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), sacred_geometry_1.SACRED_RADIUS.circle);
// Progress bar for toast duration
var ToastProgressBar = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: ", "px;\n  background-color: ", ";\n  opacity: 0.7;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: ", "px;\n  background-color: ", ";\n  opacity: 0.7;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(2), function (props) { return statusColors[props.status].accent; });
// Animation variants for toast notification
var toastVariants = {
    initial: function (position) {
        if (position.includes('top')) {
            return { opacity: 0, y: -(0, getFibonacciByIndex_1.getFibonacciByIndex)(7), scale: sacred_geometry_1.PHI_INVERSE };
        }
        if (position.includes('bottom')) {
            return { opacity: 0, y: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), scale: sacred_geometry_1.PHI_INVERSE };
        }
        if (position.includes('left')) {
            return { opacity: 0, x: -(0, getFibonacciByIndex_1.getFibonacciByIndex)(7), scale: sacred_geometry_1.PHI_INVERSE };
        }
        if (position.includes('right')) {
            return { opacity: 0, x: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), scale: sacred_geometry_1.PHI_INVERSE };
        }
        return { opacity: 0, scale: sacred_geometry_1.PHI_INVERSE };
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.standard / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.easeOutQuint
        }
    },
    exit: function (position) {
        if (position.includes('top')) {
            return {
                opacity: 0,
                y: -(0, getFibonacciByIndex_1.getFibonacciByIndex)(7),
                scale: sacred_geometry_1.PHI_INVERSE,
                transition: {
                    duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
                    ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
                }
            };
        }
        if (position.includes('bottom')) {
            return {
                opacity: 0,
                y: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7),
                scale: sacred_geometry_1.PHI_INVERSE,
                transition: {
                    duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
                    ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
                }
            };
        }
        if (position.includes('left')) {
            return {
                opacity: 0,
                x: -(0, getFibonacciByIndex_1.getFibonacciByIndex)(7),
                scale: sacred_geometry_1.PHI_INVERSE,
                transition: {
                    duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
                    ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
                }
            };
        }
        if (position.includes('right')) {
            return {
                opacity: 0,
                x: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7),
                scale: sacred_geometry_1.PHI_INVERSE,
                transition: {
                    duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
                    ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
                }
            };
        }
        return {
            opacity: 0,
            scale: sacred_geometry_1.PHI_INVERSE,
            transition: {
                duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
                ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
            }
        };
    }
};
// Generate a unique ID for each toast
var generateUniqueId = function () {
    return Math.random().toString(36).substr(2, 9);
};
/**
 * Toast Component with ref forwarding
 *
 * Displays temporary notifications with sacred geometry proportions
 */
var ToastComponent = React.forwardRef(function (_a, ref) {
    var id = _a.id, title = _a.title, description = _a.description, _b = _a.status, status = _b === void 0 ? 'default' : _b, _c = _a.duration, duration = _c === void 0 ? sacred_geometry_1.ANIMATION_TIMING.long : _c, _d = _a.isClosable, isClosable = _d === void 0 ? true : _d, onClose = _a.onClose, _e = _a.position, position = _e === void 0 ? 'bottom-right' : _e;
    // Handle toast auto-close with timer
    (0, react_1.useEffect)(function () {
        if (duration !== null && duration > 0) {
            var timer_1 = setTimeout(function () {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }, duration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [duration, onClose]);
    return (<ToastItem layout custom={position} variants={toastVariants} initial="initial" animate="animate" exit="exit" status={status} ref={ref}>
        <ToastContent>
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </ToastContent>
        
        {isClosable && (<CloseButton onClick={onClose} aria-label="Close toast">
            ✕
          </CloseButton>)}
        
        {duration !== null && duration > 0 && (<ToastProgressBar status={status} initial={{ width: '100%' }} animate={{ width: '0%' }} transition={{
                duration: duration / 1000,
                ease: 'linear'
            }}/>)}
      </ToastItem>);
});
exports.Toast = ToastComponent;
ToastComponent.displayName = 'Toast';
// Toast Provider component
var ToastProvider = function (_a) {
    var children = _a.children, _b = _a.defaultOptions, defaultOptions = _b === void 0 ? {} : _b;
    var _c = (0, react_1.useState)([]), toasts = _c[0], setToasts = _c[1];
    // Group toasts by position
    var toastsByPosition = toasts.reduce(function (acc, toast) {
        var _a, _b, _c;
        var position = toast.position || defaultOptions.position || 'bottom-right';
        if ((_a = !acc[position]) !== null && _a !== void 0 ? _a : 1)
            (_b = acc[position]) !== null && _b !== void 0 ? _b : 1;
        [];
        (_c = acc[position]) !== null && _c !== void 0 ? _c : 1.;
        push(toast);
        return acc;
    }, {});
    // Add a new toast
    var toast = (0, react_1.useCallback)(function (options) {
        var id = options.id || generateUniqueId();
        var newToast = __assign(__assign({ id: id }, defaultOptions), options);
        setToasts(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newToast], false); });
        return id;
    }, [defaultOptions]);
    // Update an existing toast
    var update = (0, react_1.useCallback)(function (id, options) {
        setToasts(function (prev) {
            return prev.map(function (toast) { return (toast.id === id ? __assign(__assign({}, toast), options) : toast); });
        });
    }, []);
    // Close a specific toast
    var close = (0, react_1.useCallback)(function (id) {
        setToasts(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    }, []);
    // Close all toasts
    var closeAll = (0, react_1.useCallback)(function () {
        setToasts([]);
    }, []);
    // Check if a toast is active
    var isActive = (0, react_1.useCallback)(function (id) {
        return toasts.some(function (toast) { return toast.id === id; });
    }, [toasts]);
    // Create context value
    var value = {
        toasts: toasts,
        toast: toast,
        update: update,
        close: close,
        closeAll: closeAll,
        isActive: isActive,
    };
    // Create portal container if needed
    var _d = (0, react_1.useState)(null), portalContainer = _d[0], setPortalContainer = _d[1];
    (0, react_1.useEffect)(function () {
        if (typeof document !== 'undefined') {
            var element = document.getElementById('toast-portal');
            if (!element) {
                element = document.createElement('div');
                element.id = 'toast-portal';
                document.body.appendChild(element);
            }
            setPortalContainer(element);
        }
    }, []);
    return (<ToastContext.Provider value={value}>
      {children}
      
      {portalContainer &&
            (0, react_dom_1.createPortal)(<>
            {/* Render toasts grouped by position */}
            {Object.entries(toastsByPosition).map(function (_a) {
                    var position = _a[0], positionToasts = _a[1];
                    return (<ToastContainer key={position} position={position} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <framer_motion_1.AnimatePresence initial={false}>
                  {positionToasts.map(function (toast) { return (<ToastComponent key={toast.id} id={toast.id} title={toast.title} description={toast.description} status={toast.status} duration={toast.duration} isClosable={toast.isClosable} onClose={function () { return close(toast.id); }} position={position}/>); })}
                </framer_motion_1.AnimatePresence>
              </ToastContainer>);
                })}
          </>, portalContainer)}
    </ToastContext.Provider>);
};
exports.ToastProvider = ToastProvider;
// Hook to use the toast context
var useToast = function () {
    var context = (0, react_1.useContext)(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
exports.useToast = useToast;
// Create a simple function to use toast outside of React components
var toastManager = null;
var createToast = function (options) {
    if (!toastManager) {
        throw new Error('Toast manager is not available. Wrap your app with ToastProvider');
    }
    return toastManager.toast(options);
};
exports.createToast = createToast;
var setToastManager = function (manager) {
    toastManager = manager;
};
exports.setToastManager = setToastManager;
exports.default = exports.useToast;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
