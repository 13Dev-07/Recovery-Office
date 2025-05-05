"use strict";
/**
 * ButtonGroup Component
 *
 * A component for grouping buttons with consistent spacing and layout.
 * Implements Fibonacci-based spacing and golden ratio alignment principles.
 *
 * The ButtonGroup provides options for horizontal or vertical alignment
 * and automatically applies consistent spacing between buttons.
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
exports.ButtonGroup = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var tokens_1 = require("../../tokens");
// Styled button group wrapper
var StyledButtonGroup = (0, styled_components_1.default)(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  \n  // Alignment mapping\n  justify-content: ", ";\n  \n  // Apply spacing when not attached\n  ", "\n  \n  // Attached buttons styling\n  ", "\n  \n  // Equal width/height buttons\n  ", "\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  \n  // Alignment mapping\n  justify-content: ", ";\n  \n  // Apply spacing when not attached\n  ", "\n  \n  // Attached buttons styling\n  ", "\n  \n  // Equal width/height buttons\n  ", "\n"])), function (props) { return props.direction === 'vertical' ? 'column' : 'row'; }, function (props) {
    switch (props.alignment) {
        case 'start': return 'flex-start';
        case 'end': return 'flex-end';
        case 'space-between': return 'space-between';
        case 'space-around': return 'space-around';
        case 'center':
        default: return 'center';
    }
}, function (props) { return !props.isAttached && "\n    gap: ".concat(typeof props.spacingValue === 'number'
    ? "".concat(props.spacingValue, "px")
    : props.spacingValue, ";\n  "); }, function (props) { return props.isAttached && "\n    // Remove border radius from adjacent buttons\n    & > button:not(:first-child):not(:last-child) {\n      border-radius: 0;\n      ".concat(props.direction === 'horizontal' ? "\n        border-left-width: 0;\n      " : "\n        border-top-width: 0;\n      ", "\n    }\n    \n    // Special styling for first and last buttons when attached\n    & > button:first-child {\n      ").concat(props.direction === 'horizontal' ? "\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      " : "\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      ", "\n    }\n    \n    & > button:last-child {\n      ").concat(props.direction === 'horizontal' ? "\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-left-width: 0;\n      " : "\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        border-top-width: 0;\n      ", "\n    }\n  "); }, function (props) { return props.isEqual && "\n    & > button {\n      flex: 1;\n      ".concat(props.direction === 'horizontal' ? 'width: 100%;' : 'height: 100%;', "\n    }\n  "); });
/**
 * ButtonGroup Component with ref forwarding
 *
 * Groups buttons with consistent spacing based on sacred geometry
 */
exports.ButtonGroup = React.forwardRef(function (_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, _c = _a.spacing, spacingProp = _c === void 0 ? 'xs' : _c, _d = _a.isAttached, isAttached = _d === void 0 ? false : _d, _e = _a.isEqual, isEqual = _e === void 0 ? false : _e, _f = _a.alignment, alignment = _f === void 0 ? 'center' : _f, children = _a.children, rest = __rest(_a, ["direction", "spacing", "isAttached", "isEqual", "alignment", "children"]);
    // Get spacing value - can be a key from spacing tokens or a direct value
    var getSpacingValue = function () {
        if (typeof spacingProp === 'string' && spacingProp in tokens_1.spacing) {
            return tokens_1.spacing[spacingProp];
        }
        return spacingProp;
    };
    // Calculate spacing value
    var spacingValue = getSpacingValue();
    // Apply common props to all child buttons
    var childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            // Clone the child with modified props if needed
            return React.cloneElement(child, {
                // If buttons are attached, make them have the same size
                size: isAttached ? child.props.size || 'md' : child.props.size,
                // When equal, ensure full width or height
                style: __assign(__assign(__assign({}, (child.props.style || {})), (isEqual && direction === 'horizontal' ? { flex: 1 } : {})), (isEqual && direction === 'vertical' ? { width: '100%' } : {}))
            });
        }
        return child;
    });
    return (<StyledButtonGroup ref={ref} direction={direction} spacingValue={spacingValue} isAttached={isAttached} isEqual={isEqual} alignment={alignment} role="group" {...rest}>
        {childrenWithProps}
      </StyledButtonGroup>);
});
exports.ButtonGroup.displayName = 'ButtonGroup';
exports.default = exports.ButtonGroup;
var templateObject_1;
