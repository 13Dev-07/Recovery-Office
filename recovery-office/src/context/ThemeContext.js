"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.useTheme = void 0;
// TODO: This file contains direct document access without SSR checks
// TODO: This file contains direct window access without SSR checks
var React = require("react");
var react_1 = require("react");
;
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../design-system/theme/theme");
var globalStyles_1 = require("../design-system/theme/globalStyles");
// Create context with default values
var ThemeContext = (0, react_2.createContext)({
    themeMode: 'light',
    toggleTheme: function () { },
    setThemeMode: function () { },
});
// Custom hook for using theme context
var useTheme = function () { return (0, react_1.useContext)(ThemeContext); };
exports.useTheme = useTheme;
var ThemeProvider = function (_a) {
    var children = _a.children, _b = _a.initialTheme, initialTheme = _b === void 0 ? 'light' : _b;
    // State for theme mode
    var _c = (0, react_2.useState)(initialTheme), themeMode = _c[0], setThemeMode = _c[1];
    // Get the appropriate theme object based on the mode
    var theme = themeMode === 'light' ? theme_1.lightTheme : theme_1.darkTheme;
    // Toggle between light and dark themes
    var toggleTheme = function () {
        setThemeMode(function (prevMode) { return (prevMode === 'light' ? 'dark' : 'light'); });
    };
    // Check for user preference on initial load
    (0, react_2.useEffect)(function () {
        // Check if window is defined (to avoid issues during SSR)
        if (typeof window === 'undefined')
            return;
        var prefersDarkMode = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            setThemeMode('dark');
        }
        // Listen for changes in system theme
        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        var handleChange = function (e) {
            setThemeMode(e.matches ? 'dark' : 'light');
        };
        // Add listener for theme changes with fallback for older browsers
        if (mediaQuery.addEventListener) {
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleChange);
            }
            else {
                // Fallback for older browsers
                mediaQuery.addListener(mediaQuery.match);
            }
            // Cleanup listener
            return function () { return mediaQuery.removeEventListener('change', handleChange); };
        }
        else {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
            // Cleanup listener
            return function () { return mediaQuery.removeListener(handleChange); };
        }
    }, []);
    // Apply theme to HTML element
    (0, react_2.useEffect)(function () {
        // Check if document is defined (to avoid issues during SSR)
        if (typeof document === 'undefined')
            return;
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);
    // Create context value
    var contextValue = {
        themeMode: themeMode,
        toggleTheme: toggleTheme,
        setThemeMode: setThemeMode,
    };
    return (<ThemeContext.Provider value={contextValue}>
      <styled_components_1.ThemeProvider theme={theme}>
        <globalStyles_1.default />
        {children}
      </styled_components_1.ThemeProvider>
    </ThemeContext.Provider>);
};
exports.ThemeProvider = ThemeProvider;
exports.default = ThemeContext;
