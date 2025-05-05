"use strict";
// TODO: This file contains direct window access without SSR checks
/**
 * useParallaxScroll Hook
 *
 * This hook creates parallax scrolling effects based on sacred geometry principles.
 * It uses the Golden Ratio to create natural, harmonious depth effects that respond
 * to scroll position.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParallaxScroll = void 0;
var react_1 = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var useReducedMotion_1 = require("./useReducedMotion");
/**
 * Hook for creating parallax scrolling effects based on sacred geometry
 *
 * @param options - Configuration options for the parallax effect
 * @returns Parallax controller and calculated transform values
 */
var useParallaxScroll = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.speed, speed = _c === void 0 ? -0.5 : _c, _d = _b.horizontal, horizontal = _d === void 0 ? false : _d, _e = _b.useGoldenRatio, useGoldenRatio = _e === void 0 ? true : _e, _f = _b.range, range = _f === void 0 ? 100 : _f, _g = _b.offset, offset = _g === void 0 ? 0.5 : _g, _h = _b.enabled, enabled = _h === void 0 ? true : _h, _j = _b.scrollContainer, scrollContainer = _j === void 0 ? null : _j, _k = _b.useEasing, useEasing = _k === void 0 ? true : _k;
    var _l = (0, react_1.useState)('translate3d(0, 0, 0)'), transform = _l[0], setTransform = _l[1];
    var _m = (0, react_1.useState)(0), progress = _m[0], setProgress = _m[1];
    var _o = (0, react_1.useState)(false), inView = _o[0], setInView = _o[1];
    var ref = (0, react_1.useRef)(null);
    var prefersReducedMotion = (0, useReducedMotion_1.useReducedMotion)().prefersReducedMotion;
    // Adjust range and speed if using golden ratio
    var effectiveRange = useGoldenRatio ? range * sacred_geometry_1.PHI_INVERSE : range;
    var effectiveSpeed = useGoldenRatio ? speed * sacred_geometry_1.PHI : speed;
    // Disable parallax if user prefers reduced motion
    var isEnabled = enabled && !prefersReducedMotion;
    (0, react_1.useEffect)(function () {
        if (!isEnabled || !ref.current) {
            return;
        }
        var element = ref.current;
        var container = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.current) || window;
        var calculateTransform = function () {
            // Get element's position relative to the viewport
            var rect = element.getBoundingClientRect();
            // Get viewport dimensions
            var viewportHeight = container === window ? window.innerHeight : container.clientHeight;
            var viewportWidth = container === window ? window.innerWidth : container.clientWidth;
            // Calculate the element's position in the viewport
            var viewportSize = horizontal ? viewportWidth : viewportHeight;
            var elementSize = horizontal ? rect.width : rect.height;
            var elementPosition = horizontal ? rect.left : rect.top;
            // Calculate the progress through the viewport (0 to 1)
            var viewportProgress = 1 - (elementPosition + elementSize * offset) / viewportSize;
            // Clamp the progress value between 0 and 1
            var clampedProgress = Math.max(0, Math.min(1, viewportProgress));
            setProgress(clampedProgress);
            // Check if the element is in view
            var elementIsInView = (horizontal ? rect.right > 0 && rect.left < viewportWidth : rect.bottom > 0 && rect.top < viewportHeight);
            setInView(elementIsInView);
            // If not in view, don't calculate parallax
            if (!elementIsInView) {
                return;
            }
            // Calculate the parallax offset
            // Use a sine curve for easing if enabled (creates natural motion)
            var parallaxOffset;
            if (useEasing) {
                // Use a sine-based easing curve for more natural motion
                var easedProgress = Math.sin((clampedProgress - 0.5) * Math.PI) * 0.5 + 0.5;
                parallaxOffset = (easedProgress - 0.5) * effectiveRange * effectiveSpeed;
            }
            else {
                // Linear motion
                parallaxOffset = (clampedProgress - 0.5) * effectiveRange * effectiveSpeed;
            }
            // Apply transform based on direction
            var transformValue = horizontal
                ? "translate3d(".concat(parallaxOffset, "px, 0, 0)")
                : "translate3d(0, ".concat(parallaxOffset, "px, 0)");
            setTransform(transformValue);
        };
        // Calculate initial transform
        calculateTransform();
        // Setup scroll event listener
        var handleScroll = function () {
            requestAnimationFrame(calculateTransform);
        };
        // Add event listener to container
        if (container === window) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll, { passive: true });
        }
        else {
            container.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll, { passive: true });
        }
        // Clean up event listeners
        return function () {
            if (container === window) {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            }
            else {
                container.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            }
        };
    }, [
        isEnabled,
        horizontal,
        effectiveRange,
        effectiveSpeed,
        offset,
        scrollContainer,
        useEasing
    ]);
    return {
        transform: transform,
        ref: ref,
        progress: progress,
        inView: inView
    };
};
exports.useParallaxScroll = useParallaxScroll;
exports.default = exports.useParallaxScroll;
