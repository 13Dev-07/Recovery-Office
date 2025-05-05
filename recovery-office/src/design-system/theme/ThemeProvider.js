"use strict";
/**
 * Theme Provider
 *
 * This component provides the theme to all components in the application.
 * It uses styled-components' ThemeProvider to inject the theme into the component tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var globalStyles_1 = require("./globalStyles");
/**
 * The ThemeProvider component
 *
 * This component wraps the application and provides the theme context
 * to all styled components. It also applies the global styles.
 */
var ThemeProvider = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? 'light' : _b;
    // Select the theme based on the provided mode
    var theme = mode === 'light' ? theme_1.default : theme_1.darkTheme;
    return (<styled_components_1.ThemeProvider theme={theme}>
      <globalStyles_1.default />
      {children}
    </styled_components_1.ThemeProvider>);
};
exports.ThemeProvider = ThemeProvider;
exports.default = exports.ThemeProvider;
