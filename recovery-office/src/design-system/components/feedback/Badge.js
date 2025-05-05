"use strict";
/**
 * Badge Component
 *
 * A compact component for status indicators and counters.
 * Implements sacred geometry principles for shape, spacing, and proportions.
 * Designed with golden circle proportions for visual harmony.
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
exports.Badge = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Status colors with sacred proportions
var statusColors = {
    default: {
        bg: '#718096',
        color: 'white',
    },
    primary: {
        bg: '#4299e1',
        color: 'white',
    },
    secondary: {
        bg: '#805ad5',
        color: 'white',
    },
    success: {
        bg: '#38a169',
        color: 'white',
    },
    warning: {
        bg: '#dd6b20',
        color: 'white',
    },
    error: {
        bg: '#e53e3e',
        color: 'white',
    },
    info: {
        bg: '#3182ce',
        color: 'white',
    },
};
// Size mappings following Fibonacci sequence
var sizeMappings = {
    xs: {
        fontSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(3),
        paddingY: sacred_geometry_1.SACRED_SPACING.xxs / 2,
        paddingX: sacred_geometry_1.SACRED_SPACING.xs / 2,
        height: (0, getFibonacciByIndex_1.getFibonacciByIndex)(5),
    },
    sm: {
        fontSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(4),
        paddingY: sacred_geometry_1.SACRED_SPACING.xxs,
        paddingX: sacred_geometry_1.SACRED_SPACING.xs,
        height: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6),
    },
    md: {
        fontSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(5),
        paddingY: sacred_geometry_1.SACRED_SPACING.xs,
        paddingX: sacred_geometry_1.SACRED_SPACING.sm,
        height: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7),
    },
    lg: {
        fontSize: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6),
        paddingY: sacred_geometry_1.SACRED_SPACING.sm,
        paddingX: sacred_geometry_1.SACRED_SPACING.md,
        height: (0, getFibonacciByIndex_1.getFibonacciByIndex)(8),
    },
};
// Get radius based on shape
var getRadius = function (shape, size) {
    switch (shape) {
        case 'square':
            return 0;
        case 'rounded':
            return sacred_geometry_1.SACRED_RADIUS.sm;
        case 'circle':
            return sacred_geometry_1.SACRED_RADIUS.circle;
        default:
            return sacred_geometry_1.SACRED_RADIUS.sm;
    }
};
// Get styles for variant
var getVariantStyle = function (status, variant) {
    var _a;
    var _b = (_a = statusColors[status]) !== null && _a !== void 0 ? _a : 1, bg = _b.bg, color = _b.color;
    switch (variant) {
        case 'solid':
            return {
                background: bg,
                color: color,
                border: 'none',
            };
        case 'subtle':
            return {
                background: "".concat(bg).concat(sacred_geometry_1.PHI_INVERSE.toFixed(2).substring(2)), // Using PHI_INVERSE for opacity
                color: bg,
                border: 'none',
            };
        case 'outline':
            return {
                background: 'transparent',
                color: bg,
                border: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(1), "px solid ").concat(bg),
            };
        default:
            return {
                background: bg,
                color: color,
                border: 'none',
            };
    }
};
// Styled Badge component
var StyledBadge = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  vertical-align: middle;\n  \n  ", "\n  \n  transition: all 0.2s;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  vertical-align: middle;\n  \n  ", "\n  \n  transition: all 0.2s;\n"])), function (props) {
    var sizeData = sizeMappings[props.size];
    var style = getVariantStyle(props.status, props.variant);
    var radius = getRadius(props.shape, props.size);
    var width = 'auto';
    var aspectRatio = 'auto';
    // Apply golden circle proportions if enabled
    if (props.useGoldenCircle && props.shape === 'circle') {
        aspectRatio = '1 / 1';
    }
    return "\n      font-size: ".concat(sizeData.fontSize, "px;\n      padding: ").concat(sizeData.paddingY, "px ").concat(sizeData.paddingX, "px;\n      height: ").concat(sizeData.height, "px;\n      min-width: ").concat(props.shape === 'circle' ? sizeData.height : 'auto', "px;\n      border-radius: ").concat(radius, "px;\n      background: ").concat(style.background, ";\n      color: ").concat(style.color, ";\n      border: ").concat(style.border || 'none', ";\n      width: ").concat(width, ";\n      aspect-ratio: ").concat(aspectRatio, ";\n    ");
});
// Badge component
exports.Badge = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.shape, shape = _c === void 0 ? 'rounded' : _c, _d = _a.variant, variant = _d === void 0 ? 'solid' : _d, _e = _a.status, status = _e === void 0 ? 'default' : _e, _f = _a.useGoldenCircle, useGoldenCircle = _f === void 0 ? false : _f, className = _a.className, children = _a.children, rest = __rest(_a, ["size", "shape", "variant", "status", "useGoldenCircle", "className", "children"]);
    return (<StyledBadge ref={ref} size={size} shape={shape} variant={variant} status={status} useGoldenCircle={useGoldenCircle} className={className} {...rest}>
        {children}
      </StyledBadge>);
});
exports.Badge.displayName = 'Badge';
exports.default = exports.Badge;
var templateObject_1;
