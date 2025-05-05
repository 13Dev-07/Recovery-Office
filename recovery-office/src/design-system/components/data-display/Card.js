"use strict";
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
var React = require("react");
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
// Import sacred geometry constants
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Import design system components
var layout_1 = require("../layout");
var botanical_1 = require("../botanical");
/**
 * Card Component with ref forwarding
 *
 * A container component that follows sacred geometry principles,
 * particularly the golden rectangle proportion for its dimensions.
 * Can optionally include botanical elements positioned according to
 * the golden ratio points.
 */
var Card = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.withBotanical, withBotanical = _c === void 0 ? false : _c, _d = _a.botanicalType, botanicalType = _d === void 0 ? 'oliveBranch' : _d, _e = _a.botanicalPosition, botanicalPosition = _e === void 0 ? 'bottomRight' : _e, _f = _a.elevated, elevated = _f === void 0 ? false : _f, _g = _a.interactive, interactive = _g === void 0 ? false : _g, _h = _a.width, width = _h === void 0 ? '100%' : _h, _j = _a.height, height = _j === void 0 ? 'auto' : _j, padding = _a.padding, borderRadius = _a.borderRadius, backgroundColor = _a.backgroundColor, onClick = _a.onClick, className = _a.className, style = _a.style, _k = _a["data-testid"], testId = _k === void 0 ? 'sacred-card' : _k, restProps = __rest(_a, ["children", "variant", "withBotanical", "botanicalType", "botanicalPosition", "elevated", "interactive", "width", "height", "padding", "borderRadius", "backgroundColor", "onClick", "className", "style", 'data-testid']);
    // Calculate dimensions for golden rectangle if specified
    var calculatedWidth = width === 'golden' && typeof height === 'number'
        ? height * sacred_geometry_1.PHI
        : width;
    var calculatedHeight = height === 'golden' && typeof width === 'number'
        ? width / sacred_geometry_1.PHI
        : height;
    // Animation variants for interactive cards
    var interactiveVariants = {
        initial: { scale: 1 },
        hover: { scale: 1 + (sacred_geometry_1.PHI_INVERSE * 0.1) }, // Scale by phi-based factor
        tap: { scale: 1 - (sacred_geometry_1.PHI_INVERSE * 0.05) },
    };
    // Motion props that need to be passed conditionally
    var motionProps = interactive ? {
        initial: "initial",
        whileHover: "hover",
        whileTap: "tap",
        variants: interactiveVariants,
        transition: { duration: 0.3, ease: [sacred_geometry_1.PHI_INVERSE, 0, 1 - sacred_geometry_1.PHI_INVERSE, 1] }
    } : {};
    return (<StyledCard as={interactive ? framer_motion_1.motion.div : 'div'} $variant={variant} $elevated={elevated} $interactive={interactive} width={calculatedWidth} height={calculatedHeight} p={padding} borderRadius={borderRadius} backgroundColor={backgroundColor} onClick={interactive ? onClick : undefined} className={className} data-testid={testId} style={style} ref={ref} {...motionProps} {...restProps}>
        {children}
        
        {withBotanical && (<BotanicalWrapper $position={botanicalPosition}>
            <botanical_1.BotanicalElement variant={botanicalType} size="md" opacity={0.2} colorScheme={variant === 'primary' ? 'primary' : 'secondary'}/>
          </BotanicalWrapper>)}
      </StyledCard>);
});
Card.displayName = 'Card';
var StyledCard = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  border-radius: ", "px;\n  \n  /* Fibonacci-based padding if not explicitly provided */\n  padding: ", "; /* 8px by default */\n  \n  /* Color based on variant */\n  background-color: ", ";\n  \n  /* Border for outline variant */\n  border: ", ";\n  \n  /* Elevation styles */\n  box-shadow: ", ";\n  \n  /* Interactive cursor */\n  cursor: ", ";\n  \n  /* Golden ratio transitions */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  position: relative;\n  overflow: hidden;\n  border-radius: ", "px;\n  \n  /* Fibonacci-based padding if not explicitly provided */\n  padding: ", "; /* 8px by default */\n  \n  /* Color based on variant */\n  background-color: ", ";\n  \n  /* Border for outline variant */\n  border: ", ";\n  \n  /* Elevation styles */\n  box-shadow: ", ";\n  \n  /* Interactive cursor */\n  cursor: ", ";\n  \n  /* Golden ratio transitions */\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), function (_a) {
    var theme = _a.theme, borderRadius = _a.borderRadius;
    return borderRadius || theme.radius.md;
}, function (_a) {
    var _b;
    var p = _a.p, padding = _a.padding;
    return p || padding || "".concat((_b = sacred_geometry_1.FIBONACCI[5]) !== null && _b !== void 0 ? _b : 1, "px");
}, function (_a) {
    var _b, _c, _d;
    var theme = _a.theme, $variant = _a.$variant, backgroundColor = _a.backgroundColor;
    return backgroundColor ? backgroundColor :
        $variant === 'primary' ? (_b = theme.colors.background[100]) !== null && _b !== void 0 ? _b : 1 :
            $variant === 'secondary' ? (_c = theme.colors.background[200]) !== null && _c !== void 0 ? _c : 1 :
                $variant === 'tertiary' ? (_d = theme.colors.background[300]) !== null && _d !== void 0 ? _d : 1 :
                    'transparent';
}, function (_a) {
    var _b, _c;
    var theme = _a.theme, $variant = _a.$variant;
    return $variant === 'outline' ? "".concat((_b = sacred_geometry_1.FIBONACCI[3]) !== null && _b !== void 0 ? _b : 1, "px solid ").concat((_c = theme.colors.primary[200]) !== null && _c !== void 0 ? _c : 1) : 'none';
}, function (_a) {
    var theme = _a.theme, $elevated = _a.$elevated;
    return $elevated ? theme.shadows.md : 'none';
}, function (_a) {
    var $interactive = _a.$interactive;
    return $interactive ? 'pointer' : 'default';
}, sacred_geometry_1.PHI_INVERSE, 1 - sacred_geometry_1.PHI_INVERSE);
var BotanicalWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  opacity: 0.2;\n  \n  /* Position based on golden ratio points */\n  ", "\n"], ["\n  position: absolute;\n  z-index: 1;\n  opacity: 0.2;\n  \n  /* Position based on golden ratio points */\n  ", "\n"])), function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var $position = _a.$position;
    switch ($position) {
        case 'topRight':
            return "\n          top: ".concat((_b = sacred_geometry_1.FIBONACCI[5]) !== null && _b !== void 0 ? _b : 1, "px;\n          right: ").concat((_c = sacred_geometry_1.FIBONACCI[5]) !== null && _c !== void 0 ? _c : 1, "px;\n          transform: rotate(").concat(45 * sacred_geometry_1.PHI_INVERSE, "deg);\n        ");
        case 'topLeft':
            return "\n          top: ".concat((_d = sacred_geometry_1.FIBONACCI[5]) !== null && _d !== void 0 ? _d : 1, "px;\n          left: ").concat((_e = sacred_geometry_1.FIBONACCI[5]) !== null && _e !== void 0 ? _e : 1, "px;\n          transform: rotate(").concat(-45 * sacred_geometry_1.PHI_INVERSE, "deg);\n        ");
        case 'bottomRight':
            return "\n          bottom: ".concat((_f = sacred_geometry_1.FIBONACCI[5]) !== null && _f !== void 0 ? _f : 1, "px;\n          right: ").concat((_g = sacred_geometry_1.FIBONACCI[5]) !== null && _g !== void 0 ? _g : 1, "px;\n          transform: rotate(").concat(-45 * sacred_geometry_1.PHI_INVERSE, "deg);\n        ");
        case 'bottomLeft':
        default:
            return "\n          bottom: ".concat((_h = sacred_geometry_1.FIBONACCI[5]) !== null && _h !== void 0 ? _h : 1, "px;\n          left: ").concat((_j = sacred_geometry_1.FIBONACCI[5]) !== null && _j !== void 0 ? _j : 1, "px;\n          transform: rotate(").concat(45 * sacred_geometry_1.PHI_INVERSE, "deg);\n        ");
    }
});
exports.default = Card;
var templateObject_1, templateObject_2;
