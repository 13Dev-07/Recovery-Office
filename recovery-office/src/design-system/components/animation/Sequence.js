"use strict";
/**
 * Sequence Component
 *
 * Animates a sequence of child elements with staggered timing based on
 * sacred geometry principles. Uses Fibonacci timing for natural,
 * harmonious animation sequences.
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
exports.Sequence = void 0;
var React = require("react");
var react_1 = require("react");
;
var framer_motion_1 = require("framer-motion");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var layout_1 = require("../layout");
/**
 * Sequence component with ref forwarding
 * Creates natural staggered animations for child elements
 */
exports.Sequence = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.variant, variant = _c === void 0 ? 'fade' : _c, _d = _a.staggerDelay, staggerDelay = _d === void 0 ? 0.1 : _d, _e = _a.useFibonacciStagger, useFibonacciStagger = _e === void 0 ? true : _e, _f = _a.duration, duration = _f === void 0 ? 0.5 : _f, _g = _a.easing, easing = _g === void 0 ? 'standard' : _g, _h = _a.distance, distance = _h === void 0 ? 34 : _h, // Fibonacci number
    _j = _a.animateOnMount, // Fibonacci number
    animateOnMount = _j === void 0 ? true : _j, _k = _a.containerElement, containerElement = _k === void 0 ? 'div' : _k, _l = _a.allowOverlap, allowOverlap = _l === void 0 ? false : _l, _m = _a.disableAnimation, disableAnimation = _m === void 0 ? false : _m, _o = _a.direction, direction = _o === void 0 ? 'forward' : _o, rest = __rest(_a, ["children", "isVisible", "variant", "staggerDelay", "useFibonacciStagger", "duration", "easing", "distance", "animateOnMount", "containerElement", "allowOverlap", "disableAnimation", "direction"]);
    // Track whether the component has mounted
    var _p = (0, react_1.useState)(false), hasMounted = _p[0], setHasMounted = _p[1];
    // Set mounted state on initial render
    (0, react_1.useEffect)(function () {
        setHasMounted(true);
    }, []);
    // Should we animate (based on props and mount state)
    var shouldAnimate = !disableAnimation && (animateOnMount || hasMounted);
    // Get child count for stagger calculations
    var childCount = React.Children.count(children);
    // Variants for the container
    var containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0,
                staggerDirection: direction === 'reverse' ? -1 : 1,
            },
        },
    };
    // Get variants for the animation type
    var childVariants = getVariants(variant, distance, duration, sacred_geometry_1.SACRED_EASINGS[easing] || sacred_geometry_1.SACRED_EASINGS.standard);
    // Create a function to modify the delay for each child
    var getCustomDelay = function (index) {
        return calculateStaggerDelay(index, childCount, staggerDelay, useFibonacciStagger, direction);
    };
    // Process children to add animation properties
    var processedChildren = React.Children.map(children, function (child, index) {
        var _a;
        if (!React.isValidElement(child))
            return child;
        // Skip animation if disabled
        if (disableAnimation)
            return child;
        var delay = getCustomDelay(index);
        // Create custom variants with the calculated delay
        var customVariants = __assign(__assign({}, childVariants), { visible: __assign(__assign({}, childVariants.visible), { transition: __assign(__assign({}, (((_a = childVariants.visible) === null || _a === void 0 ? void 0 : _a.transition) || {})), { delay: delay }) }) });
        // Wrap the child in a motion div with the custom variants
        return (<framer_motion_1.motion.div key={"sequence-item-".concat(index)} custom={index} variants={customVariants} initial="hidden" animate={isVisible && shouldAnimate ? "visible" : "hidden"} exit="hidden" style={{
                display: 'contents',
                willChange: 'transform, opacity' // Performance optimization
            }}>
          {child}
        </framer_motion_1.motion.div>);
    });
    return (<layout_1.Box as={framer_motion_1.motion.div} ref={ref} variants={containerVariants} initial="hidden" animate={isVisible && shouldAnimate ? "visible" : "hidden"} {...rest}>
        <framer_motion_1.AnimatePresence mode="wait">
          {isVisible && processedChildren}
        </framer_motion_1.AnimatePresence>
      </layout_1.Box>);
});
/**
 * Calculate stagger delay for each child element
 * Uses Fibonacci sequence for natural timing
 */
var calculateStaggerDelay = function (index, total, baseDelay, useFibonacci, direction) {
    var _a;
    // Adjust index for reverse direction
    var effectiveIndex = direction === 'reverse' ? total - 1 - index : index;
    // For standard staggering, just multiply by the base delay
    if (!useFibonacci) {
        return effectiveIndex * baseDelay;
    }
    // Convert FIBONACCI object to array for safer access
    var fibValues = Object.values(sacred_geometry_1.FIBONACCI);
    // For Fibonacci staggering, use the ratio of Fibonacci numbers for more natural timing
    var fibonacciIndex = Math.min(effectiveIndex + 3, fibValues.length - 1);
    var fibValue = (_a = fibValues[fibonacciIndex]) !== null && _a !== void 0 ? _a : 1;
    // Get the sum of the Fibonacci numbers up to the total number of children
    var maxFibIndex = Math.min(total + 2, fibValues.length - 1);
    var fibSum = fibValues.slice(3, maxFibIndex + 1).reduce(function (sum, num) { return sum + num; }, 0);
    // Calculate a proportional delay based on the Fibonacci sequence
    var proportionalDelay = fibValue / (fibSum || 1);
    // Apply the base delay, scale by PHI for harmony
    return proportionalDelay * baseDelay * total * sacred_geometry_1.PHI_INVERSE;
};
/**
 * Get animation variants based on the selected animation type
 */
var getVariants = function (variant, distance, duration, easing) {
    // Base transition to use across variants
    var baseTransition = {
        duration: duration,
        ease: easing,
    };
    // Return appropriate variants based on the animation type
    switch (variant) {
        case 'fade':
            return {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'slide-up':
            return {
                hidden: { y: distance, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'slide-down':
            return {
                hidden: { y: -distance, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'slide-left':
            return {
                hidden: { x: distance, opacity: 0 },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'slide-right':
            return {
                hidden: { x: -distance, opacity: 0 },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'scale':
            return {
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: baseTransition
                },
            };
        case 'none':
            return {
                hidden: {},
                visible: {
                    transition: baseTransition
                },
            };
        default:
            return {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: baseTransition
                },
            };
    }
};
exports.Sequence.displayName = 'Sequence';
exports.default = exports.Sequence;
