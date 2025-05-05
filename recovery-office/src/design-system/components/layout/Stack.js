"use strict";
/**
 * Stack Component
 *
 * A layout component that arranges its children in a stack (vertical or horizontal)
 * with spacing based on Fibonacci sequence values for harmonious visual rhythm.
 */
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
exports.Stack = void 0;
var React = require("react");
var Flex_1 = require("./Flex");
var tokens_1 = require("../../tokens");
/**
 * Stack Component with ref forwarding
 */
exports.Stack = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'vertical' : _b, _c = _a.spacing, spacingProp = _c === void 0 ? 'md' : _c, align = _a.align, justify = _a.justify, divider = _a.divider, _d = _a.shouldWrap, shouldWrap = _d === void 0 ? false : _d, rest = __rest(_a, ["children", "direction", "spacing", "align", "justify", "divider", "shouldWrap"]);
    var flexDirection = direction === 'vertical' ? 'column' : 'row';
    var getAlignment = function () {
        if (direction === 'vertical') {
            return {
                alignItems: align || 'stretch',
                justifyContent: justify || 'flex-start',
            };
        }
        return {
            alignItems: align || 'center',
            justifyContent: justify || 'flex-start',
        };
    };
    // Fixed spacing value handling
    var getSpacingValue = function () {
        if (typeof spacingProp === 'string') {
            // Check if spacingProp is a key in the spacing object
            if (spacingProp in tokens_1.spacing) {
                var sacredValue = tokens_1.spacing[spacingProp];
                return typeof sacredValue === 'number' ? sacredValue : spacingProp;
            }
            return spacingProp;
        }
        return spacingProp;
    };
    var childrenWithDividers = function () {
        if (!divider)
            return children;
        return React.Children.map(children, function (child, index) {
            if (index === 0)
                return child;
            return (<>
            {React.cloneElement(divider, {
                    key: "divider-".concat(index)
                })}
            {child}
          </>);
        });
    };
    var alignmentProps = getAlignment();
    return (<Flex_1.default flexDirection={flexDirection} gap={getSpacingValue()} // Now returns string | number
     flexWrap={shouldWrap ? 'wrap' : 'nowrap'} alignItems={alignmentProps.alignItems} justifyContent={alignmentProps.justifyContent} ref={ref} {...rest}>
        {divider ? childrenWithDividers() : children}
      </Flex_1.default>);
});
exports.Stack.displayName = 'Stack';
exports.default = exports.Stack;
