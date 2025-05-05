"use strict";
/**
 * Props Mapping Utilities
 *
 * Utilities for mapping between different prop naming conventions
 * to ensure consistency across the application.
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
exports.createCompatibleButton = exports.withPropMapping = exports.mapToDSProps = void 0;
var React = require("react");
/**
 * Maps common prop names to their design system equivalents
 *
 * This utility helps maintain consistency between standard HTML attributes
 * and our design system's prop naming conventions.
 *
 * @param props Original props object
 * @returns Mapped props object with design system naming conventions
 */
var mapToDSProps = function (props) {
    // Create a properly typed copy of props
    var mappedProps = __assign({}, props);
    // Map disabled -> isDisabled (maintaining sacred proportions in transition)
    if ('disabled' in props && !('isDisabled' in props)) {
        mappedProps.isDisabled = props.disabled;
        delete mappedProps.disabled;
    }
    // Map align -> alignment (maintaining sacred proportions in naming)
    if ('align' in props && !('alignment' in props)) {
        mappedProps.alignment = props.align;
        delete mappedProps.align;
    }
    // Add more mappings as needed, following sacred geometry principles
    // (e.g., maintaining proportional naming conventions)
    return mappedProps;
};
exports.mapToDSProps = mapToDSProps;
/**
 * Creates a component wrapper that maps standard props to design system props
 *
 * @param Component The component to wrap
 * @returns A wrapped component with prop mapping
 */
var withPropMapping = function (Component) {
    var WrappedComponent = function (props) {
        var mappedProps = (0, exports.mapToDSProps)(props);
        return React.createElement(Component, mappedProps);
    };
    // Preserve display name using a clear naming convention
    var displayName = Component.displayName || Component.name;
    WrappedComponent.displayName = "PropMapped".concat(displayName);
    return WrappedComponent;
};
exports.withPropMapping = withPropMapping;
/**
 * Creates a version of Button that accepts both disabled and isDisabled props
 *
 * This higher-order function wraps specific components to make them
 * backward compatible with standard HTML attributes.
 *
 * @param ButtonComponent The Button component to wrap
 * @returns A wrapped Button component that accepts both prop formats
 */
var createCompatibleButton = function (ButtonComponent) {
    var CompatibleButton = function (_a) {
        var disabled = _a.disabled, isDisabled = _a.isDisabled, props = __rest(_a, ["disabled", "isDisabled"]);
        // Use isDisabled if provided, otherwise use disabled
        var effectiveDisabled = isDisabled !== undefined ? isDisabled : disabled;
        // Create properly typed props object
        var buttonProps = __assign(__assign({}, props), { isDisabled: effectiveDisabled });
        return React.createElement(ButtonComponent, buttonProps);
    };
    // Set display name with clear naming convention
    CompatibleButton.displayName = "".concat(ButtonComponent.displayName || 'Button', "Compatible");
    return CompatibleButton;
};
exports.createCompatibleButton = createCompatibleButton;
