"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * Modal Component
 *
 * A component for displaying content that requires user interaction in an overlay.
 * Implements sacred geometry principles for layout, spacing, and animations.
 * Designed with golden ratio proportions for visual harmony.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = exports.ModalBody = exports.Modal = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var react_focus_lock_1 = require("react-focus-lock");
var react_remove_scroll_1 = require("react-remove-scroll");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Portal_1 = require("../utility/Portal");
// Size mappings based on sacred geometry
var sizeMap = {
    sm: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(9), "px"),
    md: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(10), "px"),
    lg: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(11), "px"),
    xl: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(12), "px"),
    full: '100vw',
};
// Position styling using sacred geometry
var getPositionStyles = function (position) {
    switch (position) {
        case 'top':
            return "\n        align-items: center;\n        justify-content: flex-start;\n        padding-top: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'top-right':
            return "\n        align-items: flex-end;\n        justify-content: flex-start;\n        padding-top: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n        padding-right: ").concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'right':
            return "\n        align-items: flex-end;\n        justify-content: center;\n        padding-right: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'bottom-right':
            return "\n        align-items: flex-end;\n        justify-content: flex-end;\n        padding-bottom: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n        padding-right: ").concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'bottom':
            return "\n        align-items: center;\n        justify-content: flex-end;\n        padding-bottom: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'bottom-left':
            return "\n        align-items: flex-start;\n        justify-content: flex-end;\n        padding-bottom: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n        padding-left: ").concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'left':
            return "\n        align-items: flex-start;\n        justify-content: center;\n        padding-left: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'top-left':
            return "\n        align-items: flex-start;\n        justify-content: flex-start;\n        padding-top: ".concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n        padding-left: ").concat(sacred_geometry_1.SACRED_SPACING.xl, "px;\n      ");
        case 'center':
        default:
            return "\n        align-items: center;\n        justify-content: center;\n      ";
    }
};
// Styled components for modal
var ModalOverlay = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, ", "); /* Using PHI_INVERSE for opacity */\n  display: flex;\n  z-index: 1000;\n  \n  ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, ", "); /* Using PHI_INVERSE for opacity */\n  display: flex;\n  z-index: 1000;\n  \n  ", ";\n"])), sacred_geometry_1.PHI_INVERSE.toFixed(2), function (props) { return getPositionStyles(props.position); });
var ModalContent = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: white;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  max-width: ", ";\n  width: 100%;\n  max-height: ", ";\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  \n  /* Apply golden ratio for height proportions when not full size */\n  ", "\n"], ["\n  background-color: white;\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  max-width: ", ";\n  width: 100%;\n  max-height: ", ";\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  \n  /* Apply golden ratio for height proportions when not full size */\n  ", "\n"])), sacred_geometry_1.SACRED_RADIUS.lg, (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), function (props) { return sizeMap[props.size]; }, function (props) { return props.size === 'full' ? '100vh' : "calc(100vh - ".concat(sacred_geometry_1.SACRED_SPACING.xxl * 2, "px)"); }, function (props) { return props.size !== 'full' && "\n    /* Optional max-height to maintain the golden ratio */\n    min-height: ".concat(props.size === 'sm'
    ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(9) * sacred_geometry_1.PHI_INVERSE
    : props.size === 'md'
        ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(9)
        : props.size === 'lg'
            ? (0, getFibonacciByIndex_1.getFibonacciByIndex)(9) * sacred_geometry_1.PHI
            : (0, getFibonacciByIndex_1.getFibonacciByIndex)(10), "px;\n  "); });
var ModalHeader = styled_components_1.default.header(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #E2E8F0;\n"], ["\n  padding: ", "px ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #E2E8F0;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg);
var ModalTitle = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  font-size: ", "px;\n  font-weight: 600;\n"], ["\n  margin: 0;\n  font-size: ", "px;\n  font-weight: 600;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6));
var CloseButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  color: #4A5568;\n  \n  &:hover {\n    background-color: #E2E8F0;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px #4299E1;\n  }\n"], ["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  color: #4A5568;\n  \n  &:hover {\n    background-color: #E2E8F0;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px #4299E1;\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), sacred_geometry_1.SACRED_RADIUS.circle);
var ModalBody = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", "px;\n  flex: 1;\n  overflow-y: auto;\n"], ["\n  padding: ", "px;\n  flex: 1;\n  overflow-y: auto;\n"])), sacred_geometry_1.SACRED_SPACING.lg);
exports.ModalBody = ModalBody;
var ModalFooter = styled_components_1.default.footer(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  display: flex;\n  justify-content: flex-end;\n  gap: ", "px;\n  border-top: 1px solid #E2E8F0;\n"], ["\n  padding: ", "px ", "px;\n  display: flex;\n  justify-content: flex-end;\n  gap: ", "px;\n  border-top: 1px solid #E2E8F0;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_SPACING.sm);
exports.ModalFooter = ModalFooter;
// Animation variants for modal using sacred timing
var overlayVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.standard / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.easeOutSine
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
        }
    }
};
var contentVariants = {
    hidden: {
        opacity: 0,
        y: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6),
        scale: sacred_geometry_1.PHI_INVERSE
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.standard / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.easeOutQuint
        }
    },
    exit: {
        opacity: 0,
        y: (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * -1,
        scale: sacred_geometry_1.PHI_INVERSE,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.short / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.easeInSine
        }
    }
};
/**
 * Modal Component with ref forwarding
 *
 * Displays content in an overlay with sacred geometry proportions
 */
exports.Modal = React.forwardRef(function (_a, ref) {
    var isOpen = _a.isOpen, onClose = _a.onClose, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.position, position = _c === void 0 ? 'center' : _c, _d = _a.closeOnOverlayClick, closeOnOverlayClick = _d === void 0 ? true : _d, _e = _a.closeOnEsc, closeOnEsc = _e === void 0 ? true : _e, _f = _a.isCentered, isCentered = _f === void 0 ? true : _f, title = _a.title, _g = _a.hasCloseButton, hasCloseButton = _g === void 0 ? true : _g, className = _a.className, children = _a.children, initialFocusRef = _a.initialFocusRef, finalFocusRef = _a.finalFocusRef, _h = _a.trapFocus, trapFocus = _h === void 0 ? true : _h, _j = _a.blockScrollOnMount, blockScrollOnMount = _j === void 0 ? true : _j, id = _a.id, rest = __rest(_a, ["isOpen", "onClose", "size", "position", "closeOnOverlayClick", "closeOnEsc", "isCentered", "title", "hasCloseButton", "className", "children", "initialFocusRef", "finalFocusRef", "trapFocus", "blockScrollOnMount", "id"]);
    var _k = (0, react_1.useState)(false), mounted = _k[0], setMounted = _k[1];
    var contentRef = (0, react_1.useRef)(null);
    // Handle click outside the modal content
    var handleOverlayClick = function (e) {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };
    // Handle escape key press
    (0, react_1.useEffect)(function () {
        var handleKeyDown = function (e) {
            if (isOpen && closeOnEsc && e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return function () { return window.removeEventListener('keydown', handleKeyDown); };
    }, [isOpen, closeOnEsc, onClose]);
    // Handle initial focus
    (0, react_1.useEffect)(function () {
        if (isOpen) {
            setMounted(true);
            if (initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) {
                initialFocusRef.current.focus();
            }
            else if (contentRef.current) {
                contentRef.current.focus();
            }
        }
        return function () {
            if ((finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) && isOpen) {
                finalFocusRef.current.focus();
            }
        };
    }, [isOpen, initialFocusRef, finalFocusRef]);
    // Define structure for different modal parts
    var modalHeader = title || hasCloseButton ? (<ModalHeader>
        {title && <ModalTitle>{title}</ModalTitle>}
        {hasCloseButton && (<CloseButton onClick={onClose} aria-label="Close">
            ✕
          </CloseButton>)}
      </ModalHeader>) : null;
    // Check if children contains ModalBody and ModalFooter components
    var hasCustomStructure = React.Children.toArray(children).some(function (child) { return React.isValidElement(child) &&
        (child.type === ModalBody || child.type === ModalFooter); });
    var modalContent = hasCustomStructure ? (children) : (<>
        <ModalBody>{children}</ModalBody>
      </>);
    return (<framer_motion_1.AnimatePresence>
        {isOpen && (<Portal_1.Portal>
            <react_remove_scroll_1.RemoveScroll enabled={blockScrollOnMount && isOpen}>
              <react_focus_lock_1.default disabled={!trapFocus} returnFocus>
                <ModalOverlay initial="hidden" animate="visible" exit="exit" variants={overlayVariants} onClick={handleOverlayClick} className={className} position={position} {...rest}>
                  <ModalContent ref={ref} id={id} tabIndex={-1} role="dialog" aria-modal="true" size={size} variants={contentVariants}>
                    {modalHeader}
                    {modalContent}
                  </ModalContent>
                </ModalOverlay>
              </react_focus_lock_1.default>
            </react_remove_scroll_1.RemoveScroll>
          </Portal_1.Portal>)}
      </framer_motion_1.AnimatePresence>);
});
exports.Modal.displayName = 'Modal';
exports.default = exports.Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
