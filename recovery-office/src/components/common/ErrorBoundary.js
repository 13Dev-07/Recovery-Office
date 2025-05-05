"use strict";
/**
 * ErrorBoundary Component
 *
 * A React error boundary component that catches JavaScript errors in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * Implements sacred geometry principles in its layout and fallback UI.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.withErrorBoundary = withErrorBoundary;
var React = require("react");
var layout_1 = require("@design-system/components/layout");
var typography_1 = require("@design-system/components/typography");
var button_1 = require("@design-system/components/button");
var data_display_1 = require("@design-system/components/data-display");
var botanical_1 = require("@design-system/botanical");
var sacred_geometry_1 = require("@constants/sacred-geometry");
// Error reporting service placeholder
var errorReportingService = {
    captureException: function (error, errorInfo) {
        // In production, this would send errors to a service like Sentry
        console.error('Captured error:', error);
        console.error('Component stack:', errorInfo.componentStack);
    }
};
/**
 * ErrorBoundary class component
 */
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Reset the error state
         */
        _this.resetError = function () {
            _this.setState({
                hasError: false,
                error: null,
                errorInfo: null
            });
            // Call custom reset function if provided
            if (_this.props.resetErrorBoundary) {
                _this.props.resetErrorBoundary();
            }
        };
        _this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
        return _this;
    }
    /**
     * Update state when an error occurs
     */
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { hasError: true, error: error };
    };
    /**
     * Catch and handle errors
     */
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        // Update state with error details
        this.setState({ errorInfo: errorInfo });
        // Report the error
        errorReportingService.captureException(error, errorInfo);
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, hasError = _a.hasError, error = _a.error, errorInfo = _a.errorInfo;
        var _b = this.props, children = _b.children, fallback = _b.fallback, _c = _b.showDetails, showDetails = _c === void 0 ? false : _c;
        if (hasError) {
            // Return custom fallback if provided
            if (fallback) {
                return fallback;
            }
            // Default error UI with sacred geometry proportions
            return (<layout_1.Box width="100%" p="2rem" display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <data_display_1.Card elevation={3} width="100%" padding="2rem" borderRadius="8px">
            <botanical_1.OliveBranch position="absolute" top={-20} right={-20} opacity={0.15} size={sacred_geometry_1.PHI * 100}/>
            
            <typography_1.Heading as="h2" color="var(--color-error-600)" mb="1rem">
              Something went wrong
            </typography_1.Heading>
            
            <typography_1.Text mb="1.5rem">
              We apologize for the inconvenience. Our team has been notified of this issue.
            </typography_1.Text>
            
            {showDetails && error && (<layout_1.Box mt="1.5rem" mb="1.5rem" p="1rem" borderRadius="6px" bg="#f8f9fa" border="1px solid #e9ecef">
                <typography_1.Text mb="0.5rem" color="#6c757d">
                  Error: {error.toString()}
                </typography_1.Text>
                
                {errorInfo && (<layout_1.Box mt="0.5rem" maxHeight="200px" overflow="auto" fontFamily="monospace" fontSize="0.85rem" whiteSpace="pre-wrap" color="#6c757d">
                    {errorInfo.componentStack}
                  </layout_1.Box>)}
              </layout_1.Box>)}
            
            <layout_1.Box display="flex" gap="1rem" mt="1.5rem">
              <button_1.Button onClick={this.resetError} variant="primary" size="md">
                Try Again
              </button_1.Button>
              
              <button_1.Button onClick={function () { return window.location.href = '/'; }} variant="outline" size="md">
                Return Home
              </button_1.Button>
            </layout_1.Box>
          </data_display_1.Card>
        </layout_1.Box>);
        }
        // When there's no error, render children normally
        return children;
    };
    return ErrorBoundary;
}(Component));
exports.default = ErrorBoundary;
// Higher-order component for easy wrapping
function withErrorBoundary(Component, errorBoundaryProps) {
    if (errorBoundaryProps === void 0) { errorBoundaryProps = {}; }
    var WithErrorBoundary = function (props) { return (<ErrorBoundary {...errorBoundaryProps}>
      <Component {...props}/>
    </ErrorBoundary>); };
    WithErrorBoundary.displayName = "WithErrorBoundary(".concat(Component.displayName || Component.name || 'Component', ")");
    return WithErrorBoundary;
}
