"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBotanicalContainer = exports.accessibleBotanical = exports.responsiveBotanicalVisibility = exports.responsiveBotanicalScale = exports.botanicalBreakpoints = exports.getBotanicalSize = exports.getBotanicalPositionStyles = void 0;
var styled_components_1 = require("styled-components");
/**
 * Get CSS position styles for placing botanical elements
 *
 * @param options Positioning options
 * @returns CSS properties object
 */
var getBotanicalPositionStyles = function (options) {
    var position = options.position, _a = options.rotation, rotation = _a === void 0 ? 0 : _a, _b = options.zIndex, zIndex = _b === void 0 ? 0 : _b, _c = options.offset, offset = _c === void 0 ? { x: 0, y: 0 } : _c, _d = options.animate, animate = _d === void 0 ? false : _d;
    // Convert number offsets to pixel values
    var xOffset = typeof offset.x === 'number' ? "".concat(offset.x, "px") : offset.x;
    var yOffset = typeof offset.y === 'number' ? "".concat(offset.y, "px") : offset.y;
    // Base styles
    var baseStyles = __assign({ position: 'absolute', zIndex: zIndex, transform: "rotate(".concat(rotation, "deg)") }, (animate && { transition: "all 0.5s cubic-bezier(".concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1)") }));
    // Position-specific styles
    switch (position) {
        case 'topLeft':
            return __assign(__assign({}, baseStyles), { top: yOffset, left: xOffset });
        case 'topRight':
            return __assign(__assign({}, baseStyles), { top: yOffset, right: xOffset });
        case 'bottomLeft':
            return __assign(__assign({}, baseStyles), { bottom: yOffset, left: xOffset });
        case 'bottomRight':
            return __assign(__assign({}, baseStyles), { bottom: yOffset, right: xOffset });
        case 'topCenter':
            return __assign(__assign({}, baseStyles), { top: yOffset, left: '50%', transform: "translateX(-50%) rotate(".concat(rotation, "deg)") });
        case 'bottomCenter':
            return __assign(__assign({}, baseStyles), { bottom: yOffset, left: '50%', transform: "translateX(-50%) rotate(".concat(rotation, "deg)") });
        case 'leftCenter':
            return __assign(__assign({}, baseStyles), { left: xOffset, top: '50%', transform: "translateY(-50%) rotate(".concat(rotation, "deg)") });
        case 'rightCenter':
            return __assign(__assign({}, baseStyles), { right: xOffset, top: '50%', transform: "translateY(-50%) rotate(".concat(rotation, "deg)") });
        case 'goldenLeft':
            return __assign(__assign({}, baseStyles), { left: xOffset, top: "".concat(PHI_INVERSE * 100, "%"), transform: "translateY(-50%) rotate(".concat(rotation, "deg)") });
        case 'goldenRight':
            return __assign(__assign({}, baseStyles), { right: xOffset, top: "".concat(PHI_INVERSE * 100, "%"), transform: "translateY(-50%) rotate(".concat(rotation, "deg)") });
        case 'goldenTop':
            return __assign(__assign({}, baseStyles), { top: yOffset, left: "".concat(PHI_INVERSE * 100, "%"), transform: "translateX(-50%) rotate(".concat(rotation, "deg)") });
        case 'goldenBottom':
            return __assign(__assign({}, baseStyles), { bottom: yOffset, left: "".concat(PHI_INVERSE * 100, "%"), transform: "translateX(-50%) rotate(".concat(rotation, "deg)") });
        case 'center':
            return __assign(__assign({}, baseStyles), { top: '50%', left: '50%', transform: "translate(-50%, -50%) rotate(".concat(rotation, "deg)") });
    }
};
exports.getBotanicalPositionStyles = getBotanicalPositionStyles;
/**
 * Get the size in pixels for a botanical size preset
 *
 * @param size Size preset
 * @returns Size in pixels
 */
var getBotanicalSize = function (size) {
    switch (size) {
        case 'xs': return getFibonacciByIndex(6); // 8px
        case 'sm': return getFibonacciByIndex(7); // 13px
        case 'md': return getFibonacciByIndex(8); // 21px
        case 'lg': return getFibonacciByIndex(9); // 34px
        case 'xl': return getFibonacciByIndex(10); // 55px
        case 'xxl': return getFibonacciByIndex(11); // 89px
        default: return getFibonacciByIndex(8); // 21px
    }
};
exports.getBotanicalSize = getBotanicalSize;
// ===== Responsive Scaling =====
/**
 * Breakpoint sizes for responsive scaling
 */
exports.botanicalBreakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};
/**
 * Creates a responsive scale factor for botanical elements
 * based on viewport size and the golden ratio
 */
exports.responsiveBotanicalScale = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Base size (mobile) */\n  transform: scale(1);\n  \n  /* Scale up proportionally based on golden ratio at each breakpoint */\n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  /* Ensure smooth transitions */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  /* Base size (mobile) */\n  transform: scale(1);\n  \n  /* Scale up proportionally based on golden ratio at each breakpoint */\n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  @media (min-width: ", ") {\n    transform: scale(", ");\n  }\n  \n  /* Ensure smooth transitions */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), exports.botanicalBreakpoints.sm, 1 + (PHI_INVERSE * 0.25), exports.botanicalBreakpoints.md, 1 + (PHI_INVERSE * 0.5), exports.botanicalBreakpoints.lg, 1 + (PHI_INVERSE * 0.75), exports.botanicalBreakpoints.xl, 1 + PHI_INVERSE, PHI_INVERSE, 1 - PHI_INVERSE);
/**
 * Responsive hiding utilities for botanical elements
 */
exports.responsiveBotanicalVisibility = {
    /**
     * Only show on mobile
     */
    mobileOnly: (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    \n    @media (min-width: ", ") {\n      display: none;\n    }\n  "], ["\n    display: block;\n    \n    @media (min-width: ", ") {\n      display: none;\n    }\n  "])), exports.botanicalBreakpoints.md),
    /**
     * Only show on tablet and above
     */
    tabletUp: (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: none;\n    \n    @media (min-width: ", ") {\n      display: block;\n    }\n  "], ["\n    display: none;\n    \n    @media (min-width: ", ") {\n      display: block;\n    }\n  "])), exports.botanicalBreakpoints.md),
    /**
     * Only show on desktop
     */
    desktopOnly: (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: none;\n    \n    @media (min-width: ", ") {\n      display: block;\n    }\n  "], ["\n    display: none;\n    \n    @media (min-width: ", ") {\n      display: block;\n    }\n  "])), exports.botanicalBreakpoints.lg),
};
// ===== Accessibility =====
/**
 * Accessibility utilities for botanical elements
 */
exports.accessibleBotanical = {
    /**
     * Hide botanical element from screen readers (for decorative elements)
     */
    decorative: (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    aria-hidden: true;\n  "], ["\n    aria-hidden: true;\n  "]))),
    /**
     * Hide botanical elements when reduced motion is preferred
     */
    reduceMotion: (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    @media (prefers-reduced-motion: reduce) {\n      /* Use opacity instead of display:none to avoid layout shifts */\n      opacity: 0.5;\n      \n      /* Disable any animations */\n      animation: none !important;\n      transition: none !important;\n    }\n  "], ["\n    @media (prefers-reduced-motion: reduce) {\n      /* Use opacity instead of display:none to avoid layout shifts */\n      opacity: 0.5;\n      \n      /* Disable any animations */\n      animation: none !important;\n      transition: none !important;\n    }\n  "]))),
    /**
     * Simplify botanical elements for high contrast mode
     */
    highContrast: (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    @media (prefers-contrast: more) {\n      /* Simplify the design by increasing stroke width and contrast */\n      & path, & circle, & ellipse, & rect, & polygon {\n        stroke-width: 2px !important;\n        fill: transparent !important;\n        stroke: currentColor !important;\n      }\n    }\n  "], ["\n    @media (prefers-contrast: more) {\n      /* Simplify the design by increasing stroke width and contrast */\n      & path, & circle, & ellipse, & rect, & polygon {\n        stroke-width: 2px !important;\n        fill: transparent !important;\n        stroke: currentColor !important;\n      }\n    }\n  "]))),
};
/**
 * Create a BotanicalContainer component with a positioned botanical element
 *
 * @example
 * const DecoratedBox = styled.div`
 *   ${createBotanicalContainer('oliveBranch', 'bottomRight')}
 * `;
 */
var createBotanicalContainer = function (botanicalType, position, size) {
    if (size === void 0) { size = 'md'; }
    return (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  \n  &::after {\n    content: '';\n    ", "\n    width: ", "px;\n    height: ", "px;\n    background-image: url(\"data:image/svg+xml,...\"); /* SVG content */\n    background-size: contain;\n    background-repeat: no-repeat;\n    ", "\n  }\n"], ["\n  position: relative;\n  \n  &::after {\n    content: '';\n    ", "\n    width: ", "px;\n    height: ", "px;\n    background-image: url(\"data:image/svg+xml,...\"); /* SVG content */\n    background-size: contain;\n    background-repeat: no-repeat;\n    ", "\n  }\n"])), function (props) { return (0, exports.getBotanicalPositionStyles)({ position: position }); }, (0, exports.getBotanicalSize)(size), (0, exports.getBotanicalSize)(size), exports.accessibleBotanical.decorative);
};
exports.createBotanicalContainer = createBotanicalContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
