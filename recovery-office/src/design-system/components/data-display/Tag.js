"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
// Import sacred geometry constants
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
/**
 * Tag Component with ref forwarding
 *
 * A component for displaying tags/badges with sacred geometry
 * proportions and optional animations.
 */
var Tag = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.removable, removable = _d === void 0 ? false : _d, onRemove = _a.onRemove, _e = _a.rounded, rounded = _e === void 0 ? false : _e, _f = _a.golden, golden = _f === void 0 ? false : _f, _g = _a.animate, animate = _g === void 0 ? false : _g, className = _a.className, _h = _a["data-testid"], testId = _h === void 0 ? 'sacred-tag' : _h;
    // Animation variants
    var animationVariants = {
        initial: { scale: 1 },
        hover: { scale: 1 + (sacred_geometry_1.PHI_INVERSE * 0.05) }, // Subtle phi-based scale
    };
    return (<StyledTag as={animate ? framer_motion_1.motion.div : 'div'} $variant={variant} $size={size} $rounded={rounded} $golden={golden} className={className} data-testid={testId} ref={ref} 
    // Framer motion props
    initial={animate ? "initial" : undefined} whileHover={animate ? "hover" : undefined} variants={animate ? animationVariants : undefined} transition={{ duration: 0.2, ease: [sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1] }}>
        <TagContent>{children}</TagContent>
        
        {removable && (<RemoveButton onClick={onRemove} $size={size} $variant={variant} aria-label="Remove tag">
            ×
          </RemoveButton>)}
      </StyledTag>);
});
Tag.displayName = 'Tag';
// Helper function to get size values based on Fibonacci sequence
var getSizeStyles = function (size) {
    switch (size) {
        case 'sm':
            return {
                fontSize: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5) - 1, "px"), // 4px
                height: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(7), "px"), // 13px
                padding: "0 ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px"), // 0 5px
            };
        case 'lg':
            return {
                fontSize: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6), "px"), // 8px
                height: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(9), "px"), // 34px
                padding: "0 ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(7), "px"), // 0 13px
            };
        case 'md':
        default:
            return {
                fontSize: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6) - 2, "px"), // 6px
                height: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(8), "px"), // 21px
                padding: "0 ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6), "px"), // 0 8px
            };
    }
};
var StyledTag = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  \n  /* Size based on Fibonacci sequence */\n  ", "\n  \n  /* Golden ratio width-to-height ratio if enabled */\n  ", "\n  \n  /* Border radius - either pill or sacred proportion */\n  border-radius: ", ";\n  \n  /* Colors based on variant */\n  background-color: ", ";\n  \n  color: ", ";\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Basic styling */\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  user-select: none;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  \n  /* Size based on Fibonacci sequence */\n  ", "\n  \n  /* Golden ratio width-to-height ratio if enabled */\n  ", "\n  \n  /* Border radius - either pill or sacred proportion */\n  border-radius: ", ";\n  \n  /* Colors based on variant */\n  background-color: ", ";\n  \n  color: ", ";\n  \n  /* Transition using golden ratio cubic-bezier */\n  transition: all 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Basic styling */\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  user-select: none;\n"])), function (_a) {
    var $size = _a.$size;
    var styles = getSizeStyles($size);
    return "\n      font-size: ".concat(styles.fontSize, ";\n      height: ").concat(styles.height, ";\n      padding: ").concat(styles.padding, ";\n    ");
}, function (_a) {
    var $golden = _a.$golden, $size = _a.$size;
    if (!$golden)
        return '';
    var styles = getSizeStyles($size);
    var heightValue = parseInt(styles.height, 10);
    return "\n      width: ".concat(heightValue * sacred_geometry_1.PHI, "px;\n    ");
}, function (_a) {
    var $rounded = _a.$rounded, $size = _a.$size;
    if ($rounded)
        return '9999px';
    // Sacred geometry border radius based on height
    var styles = getSizeStyles($size);
    var heightValue = parseInt(styles.height, 10);
    return "".concat(heightValue * sacred_geometry_1.PHI_INVERSE / 2, "px");
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, $variant = _a.$variant;
    switch ($variant) {
        case 'primary': return (_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1;
        case 'secondary': return (_c = theme.colors.secondary[500]) !== null && _c !== void 0 ? _c : 1;
        case 'accent': return theme.colors.accent.gold;
        case 'success': return theme.colors.feedback.success.main;
        case 'warning': return theme.colors.feedback.warning.main;
        case 'error': return theme.colors.feedback.error.main;
        default: return (_d = theme.colors.primary[500]) !== null && _d !== void 0 ? _d : 1;
    }
}, function (_a) {
    var theme = _a.theme, $variant = _a.$variant;
    // Choose contrasting text color
    switch ($variant) {
        case 'primary':
        case 'secondary':
        case 'accent':
        case 'error':
            return theme.colors.text.light;
        case 'warning':
            return theme.colors.text.dark;
        default:
            return theme.colors.text.light;
    }
}, sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE);
var TagContent = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var RemoveButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-left: ", ";\n  \n  /* Size based on parent tag */\n  font-size: ", ";\n  \n  /* Inherit text color from tag */\n  color: inherit;\n  opacity: 0.7;\n  \n  /* Hover state */\n  &:hover {\n    opacity: 1;\n  }\n  \n  /* Sacred geometry transition */\n  transition: opacity 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-left: ", // 5px (medium)
    ";\n  \n  /* Size based on parent tag */\n  font-size: ", // 13px (medium)
    ";\n  \n  /* Inherit text color from tag */\n  color: inherit;\n  opacity: 0.7;\n  \n  /* Hover state */\n  &:hover {\n    opacity: 1;\n  }\n  \n  /* Sacred geometry transition */\n  transition: opacity 0.2s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Focus styles for accessibility */\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n"])), function (_a) {
    var $size = _a.$size;
    return $size === 'sm' ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(4), "px") : // 3px
        $size === 'lg' ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6), "px") : // 8px
            "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px");
} // 5px (medium)
, function (_a) {
    var $size = _a.$size;
    return $size === 'sm' ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(6), "px") : // 8px
        $size === 'lg' ? "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(8), "px") : // 21px
            "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(7), "px");
} // 13px (medium)
, sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE);
exports.default = Tag;
var templateObject_1, templateObject_2, templateObject_3;
