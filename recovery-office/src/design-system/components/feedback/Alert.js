"use strict";
/**
 * Alert Component
 *
 * A component for displaying important messages to users.
 * The Alert follows sacred geometry principles with golden ratio proportions,
 * Fibonacci-based spacing, and sacred timing for animations.
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
exports.Alert = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Status color maps based on alert type
var statusColorMap = {
    info: {
        bg: '#EBF8FF',
        solidBg: '#4299E1',
        border: '#BEE3F8',
        color: '#2B6CB0',
        iconColor: '#3182CE'
    },
    success: {
        bg: '#F0FFF4',
        solidBg: '#48BB78',
        border: '#C6F6D5',
        color: '#2F855A',
        iconColor: '#38A169'
    },
    warning: {
        bg: '#FFFAF0',
        solidBg: '#ED8936',
        border: '#FEEBC8',
        color: '#C05621',
        iconColor: '#DD6B20'
    },
    error: {
        bg: '#FFF5F5',
        solidBg: '#F56565',
        border: '#FED7D7',
        color: '#C53030',
        iconColor: '#E53E3E'
    }
};
// Status icons for different alert types
var StatusIcon = function (_a) {
    var status = _a.status;
    switch (status) {
        case 'info':
            return (<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z"/>
        </svg>);
        case 'success':
            return (<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L11 13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L16.7071 10.7071Z"/>
        </svg>);
        case 'warning':
            return (<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8944 3.06357L22.7019 20.7098C23.0726 21.3704 22.5894 22.1449 21.8474 22.1449H2.15256C1.41063 22.1449 0.927442 21.3704 1.29805 20.7098L11.1056 3.06357C11.4757 2.40352 12.5243 2.40352 12.8944 3.06357ZM12 8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V9C11 8.44772 11.4477 8 12 8ZM12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"/>
        </svg>);
        case 'error':
            return (<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"/>
        </svg>);
        default:
            return null;
    }
};
// Styled Alert container component
var AlertContainer = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  border-radius: ", "px;\n  padding: ", "px;\n  box-sizing: border-box;\n  overflow: hidden;\n  z-index: ", ";\n\n  /* Variant-specific styling */\n  ", "\n\n  /* Apply golden ratio to padding when icon is present */\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  border-radius: ", "px;\n  padding: ", "px;\n  box-sizing: border-box;\n  overflow: hidden;\n  z-index: ", ";\n\n  /* Variant-specific styling */\n  ", "\n\n  /* Apply golden ratio to padding when icon is present */\n  ", "\n"])), sacred_geometry_1.SACRED_RADIUS.md, sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.zIndex || 'auto'; }, function (props) {
    var colors = statusColorMap[props.status];
    switch (props.variant) {
        case 'solid':
            return "\n          background-color: ".concat(colors.solidBg, ";\n          color: white;\n        ");
        case 'left-accent':
            return "\n          background-color: ".concat(colors.bg, ";\n          color: ").concat(colors.color, ";\n          border-left: ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px solid ").concat(colors.solidBg, ";\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n        ");
        case 'top-accent':
            return "\n          background-color: ".concat(colors.bg, ";\n          color: ").concat(colors.color, ";\n          border-top: ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px solid ").concat(colors.solidBg, ";\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        ");
        case 'outline':
            return "\n          background-color: transparent;\n          color: ".concat(colors.color, ";\n          border: 1px solid ").concat(colors.border, ";\n        ");
        case 'subtle':
        default:
            return "\n          background-color: ".concat(colors.bg, ";\n          color: ").concat(colors.color, ";\n        ");
    }
}, function (props) { return props.showIcon && "\n    padding-left: ".concat(sacred_geometry_1.SACRED_SPACING.md * sacred_geometry_1.PHI, "px;\n  "); });
// Icon container with sacred proportions
var IconContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: ", "px;\n  height: ", "px;\n  margin-right: ", "px;\n  border-radius: 50%;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: ", "px;\n  height: ", "px;\n  margin-right: ", "px;\n  border-radius: 50%;\n  color: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), sacred_geometry_1.SACRED_SPACING.md, function (props) { return props.variant === 'solid' ? 'white' : statusColorMap[props.status].iconColor; });
// Content container with flexible layout
var ContentContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n"])));
// Alert title with golden ratio typography
var AlertTitle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  line-height: ", ";\n"], ["\n  font-weight: 600;\n  font-size: ", "px;\n  margin-bottom: ", "px;\n  line-height: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * sacred_geometry_1.PHI, function (props) { return props.children ? sacred_geometry_1.SACRED_SPACING.xs * sacred_geometry_1.PHI_INVERSE : 0; }, sacred_geometry_1.PHI + 0.2);
// Alert description with proper line height
var AlertDescription = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  line-height: ", ";\n"], ["\n  font-size: ", "px;\n  line-height: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), sacred_geometry_1.PHI);
// Close button with sacred proportions
var CloseButton = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  padding: ", "px;\n  margin-left: ", "px;\n  cursor: pointer;\n  flex-shrink: 0;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  color: inherit;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n  \n  &:hover {\n    opacity: 1;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.3);\n  }\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  padding: ", "px;\n  margin-left: ", "px;\n  cursor: pointer;\n  flex-shrink: 0;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  color: inherit;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n  \n  &:hover {\n    opacity: 1;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.3);\n  }\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n  }\n"])), sacred_geometry_1.SACRED_SPACING.xs, sacred_geometry_1.SACRED_SPACING.sm, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * sacred_geometry_1.PHI, (0, getFibonacciByIndex_1.getFibonacciByIndex)(6) * sacred_geometry_1.PHI, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * sacred_geometry_1.PHI, (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * sacred_geometry_1.PHI);
// Animation variants using sacred timing
var alertAnimationVariants = {
    hidden: {
        opacity: 0,
        y: -sacred_geometry_1.SACRED_SPACING.md,
        scale: sacred_geometry_1.PHI_INVERSE,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.standard / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.standard
        }
    },
    exit: {
        opacity: 0,
        x: sacred_geometry_1.SACRED_SPACING.xl,
        transition: {
            duration: sacred_geometry_1.ANIMATION_TIMING.quick / 1000,
            ease: sacred_geometry_1.SACRED_EASINGS.standard
        }
    }
};
/**
 * Alert Component with ref forwarding
 *
 * Displays status messages to users with sacred geometry proportions
 */
exports.Alert = React.forwardRef(function (_a, ref) {
    var _b = _a.status, status = _b === void 0 ? 'info' : _b, _c = _a.variant, variant = _c === void 0 ? 'subtle' : _c, title = _a.title, description = _a.description, children = _a.children, _d = _a.showIcon, showIcon = _d === void 0 ? true : _d, _e = _a.isDismissible, isDismissible = _e === void 0 ? false : _e, onDismiss = _a.onDismiss, autoHideDuration = _a.autoHideDuration, icon = _a.icon, className = _a.className, _f = _a.isVisible, isVisible = _f === void 0 ? true : _f, zIndex = _a.zIndex, rest = __rest(_a, ["status", "variant", "title", "description", "children", "showIcon", "isDismissible", "onDismiss", "autoHideDuration", "icon", "className", "isVisible", "zIndex"]);
    var _g = (0, react_1.useState)(isVisible), visible = _g[0], setVisible = _g[1];
    // Handle auto-dismiss functionality
    (0, react_1.useEffect)(function () {
        setVisible(isVisible);
    }, [isVisible]);
    (0, react_1.useEffect)(function () {
        if (autoHideDuration && visible) {
            var timer_1 = setTimeout(function () {
                setVisible(false);
                if (onDismiss)
                    onDismiss();
            }, autoHideDuration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [autoHideDuration, visible, onDismiss]);
    // Handle dismiss action
    var handleDismiss = function () {
        setVisible(false);
        if (onDismiss)
            onDismiss();
    };
    // Render the status icon or custom icon
    var renderIcon = function () {
        if (icon)
            return <IconContainer status={status} variant={variant}>{icon}</IconContainer>;
        if (showIcon)
            return <IconContainer status={status} variant={variant}><StatusIcon status={status}/></IconContainer>;
        return null;
    };
    // Render close button if alert is dismissible
    var renderCloseButton = function () {
        if (!isDismissible)
            return null;
        return (<CloseButton onClick={handleDismiss} aria-label="Close alert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CloseButton>);
    };
    // Use either description or children for content
    var content = description || children;
    return (<framer_motion_1.AnimatePresence>
        {visible && (<AlertContainer ref={ref} status={status} variant={variant} showIcon={showIcon && (!!icon || true)} isDismissible={isDismissible} className={className} initial="hidden" animate="visible" exit="exit" variants={alertAnimationVariants} zIndex={zIndex} {...rest}>
            {renderIcon()}
            
            <ContentContainer>
              {title && <AlertTitle>{title}</AlertTitle>}
              {content && <AlertDescription>{content}</AlertDescription>}
            </ContentContainer>
            
            {renderCloseButton()}
          </AlertContainer>)}
      </framer_motion_1.AnimatePresence>);
});
exports.Alert.displayName = 'Alert';
exports.default = exports.Alert;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
