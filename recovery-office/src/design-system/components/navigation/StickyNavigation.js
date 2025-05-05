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
// TODO: This file contains direct document access without SSR checks
// TODO: This file contains direct window access without SSR checks
var React = require("react");
var react_1 = require("react");
;
var utils_1 = require("../../../utils");
var styled_components_1 = require("styled-components");
// Import components
var NavBar_1 = require("./NavBar");
/**
 * StickyNavigation Component
 *
 * A navigation wrapper that adds sticky behavior with scroll-based
 * animations following sacred geometry principles.
 */
var StickyNavigation = function (_a) {
    var _b = _a.startTransparent, startTransparent = _b === void 0 ? false : _b, _c = _a.transparencyThreshold, transparencyThreshold = _c === void 0 ? 100 : _c, _d = _a.showScrollProgress, showScrollProgress = _d === void 0 ? false : _d, _e = _a.scrollIndicatorShape, scrollIndicatorShape = _e === void 0 ? 'line' : _e, _f = _a.scrollIndicatorVariant, scrollIndicatorVariant = _f === void 0 ? 'primary' : _f, _g = _a.scrollIndicatorThickness, scrollIndicatorThickness = _g === void 0 ? (0, utils_1.getFibonacciByIndex)(3) : _g, // 2px
    _h = _a.shrinkOnScroll, // 2px
    shrinkOnScroll = _h === void 0 ? true : _h, _j = _a.withBotanicalAccents, withBotanicalAccents = _j === void 0 ? false : _j, className = _a.className, _k = _a["data-testid"], testId = _k === void 0 ? 'sacred-sticky-navigation' : _k, navBarProps = __rest(_a, ["startTransparent", "transparencyThreshold", "showScrollProgress", "scrollIndicatorShape", "scrollIndicatorVariant", "scrollIndicatorThickness", "shrinkOnScroll", "withBotanicalAccents", "className", 'data-testid']);
    // Scroll state
    var _l = (0, react_1.useState)(false), isScrolled = _l[0], setIsScrolled = _l[1];
    var _m = (0, react_1.useState)(0), scrollProgress = _m[0], setScrollProgress = _m[1];
    // Handle scroll events
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            // Update scrolled state based on threshold
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > transparencyThreshold);
            // Calculate scroll progress
            if (showScrollProgress) {
                var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = Math.max(0, Math.min(1, scrollTop / windowHeight));
                setScrollProgress(progress);
            }
        };
        // Add event listener
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        // Cleanup
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [transparencyThreshold, showScrollProgress]);
    return (<Container className={className} data-testid={testId} $isScrolled={isScrolled} $shrinkOnScroll={shrinkOnScroll}>
      {/* NavBar component */}
      <NavBar_1.default {...navBarProps} isTransparent={startTransparent && !isScrolled} showBotanical={withBotanicalAccents}/>
      
      {/* Scroll progress indicator */}
      {showScrollProgress && (<ScrollIndicator $progress={scrollProgress} $shape={scrollIndicatorShape} $variant={scrollIndicatorVariant} $thickness={scrollIndicatorThickness} role="progressbar" aria-valuenow={scrollProgress * 100} aria-valuemin={0} aria-valuemax={100} aria-label="Page scroll progress"/>)}
    </Container>);
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Add shadow when scrolled */\n  box-shadow: ", ";\n  \n  /* Shrink effect when scrolled */\n  ", "\n"], ["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  /* Add shadow when scrolled */\n  box-shadow: ", ";\n  \n  /* Shrink effect when scrolled */\n  ", "\n"])), PHI_INVERSE, 1 - PHI_INVERSE, function (_a) {
    var theme = _a.theme, $isScrolled = _a.$isScrolled;
    return $isScrolled ? theme.shadows.md : 'none';
}, function (_a) {
    var $isScrolled = _a.$isScrolled, $shrinkOnScroll = _a.$shrinkOnScroll;
    return $isScrolled && $shrinkOnScroll ? "\n      transform: scale(".concat(1 - (PHI_INVERSE * 0.05), ");\n    ") : '';
});
var ScrollIndicator = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: ", ";\n  width: ", ";\n  \n  /* Color based on variant */\n  background-color: ", ";\n  \n  /* Shape-specific styles */\n  ", "\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: ", ";\n  width: ", ";\n  \n  /* Color based on variant */\n  background-color: ", ";\n  \n  /* Shape-specific styles */\n  ", "\n"])), function (_a) {
    var $thickness = _a.$thickness;
    return "".concat($thickness, "px");
}, function (_a) {
    var $progress = _a.$progress;
    return "".concat($progress * 100, "%");
}, function (_a) {
    var theme = _a.theme, $variant = _a.$variant;
    return $variant === 'primary' ? theme.colors.primary :
        $variant === 'secondary' ? theme.colors.secondary :
            theme.colors.accent;
}, function (_a) {
    var $shape = _a.$shape, $progress = _a.$progress, $thickness = _a.$thickness;
    switch ($shape) {
        case 'fibonacci':
            // Create a fibonacci-based gradient
            return "\n          background-image: linear-gradient(\n            to right,\n            rgba(255, 255, 255, 0.1) ".concat((0, utils_1.getFibonacciByIndex)(5), "px,\n            rgba(255, 255, 255, 0.2) ").concat((0, utils_1.getFibonacciByIndex)(6), "px,\n            rgba(255, 255, 255, 0.1) ").concat((0, utils_1.getFibonacciByIndex)(7), "px,\n            transparent ").concat((0, utils_1.getFibonacciByIndex)(8), "px\n          );\n          background-size: ").concat((0, utils_1.getFibonacciByIndex)(9), "px 100%;\n          background-repeat: repeat-x;\n          transition: width 0.1s linear;\n        ");
        case 'circle':
            // Use a circle that moves along the bottom
            return "\n          width: ".concat($thickness * 2, "px;\n          height: ").concat($thickness * 2, "px;\n          border-radius: 50%;\n          left: calc(").concat($progress * 100, "% - ").concat($thickness, "px);\n          bottom: ").concat(-$thickness, "px;\n          transition: left 0.1s cubic-bezier(").concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1);\n        ");
        case 'line':
        default:
            return "\n          transition: width 0.1s cubic-bezier(".concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1);\n        ");
    }
});
exports.default = StickyNavigation;
var templateObject_1, templateObject_2;
