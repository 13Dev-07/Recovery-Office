"use strict";
/**
 * Typography Component
 *
 * A unified typography component that encapsulates all text variants
 * following sacred geometry principles. It provides a consistent API
 * for different typography needs throughout the application.
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
exports.Typography = void 0;
var React = require("react");
var Heading_1 = require("./Heading");
var Text_1 = require("./Text");
var Paragraph_1 = require("./Paragraph");
var BlockQuote_1 = require("./BlockQuote");
/**
 * Typography Component
 *
 * Creates harmonious typography elements based on sacred geometry principles
 */
exports.Typography = React.forwardRef(function (props, ref) {
    // Destructure props
    var _a = props.variant, variant = _a === void 0 ? 'body1' : _a, _b = props.harmonized, harmonized = _b === void 0 ? true : _b, _c = props.truncate, truncate = _c === void 0 ? false : _c, noOfLines = props.noOfLines, _d = props.italic, italic = _d === void 0 ? false : _d, weight = props.weight, color = props.color, _e = props.sacredSpacing, sacredSpacing = _e === void 0 ? true : _e, cssDisplay = props.cssDisplay, children = props.children, rest = __rest(props, ["variant", "harmonized", "truncate", "noOfLines", "italic", "weight", "color", "sacredSpacing", "cssDisplay", "children"]);
    // Helper to get margin values based on variant and sacredSpacing option
    var getMargin = function () {
        if (!sacredSpacing)
            return undefined;
        // Apply variant-specific margins
        switch (variant) {
            case 'h1':
                return { mb: '1.618rem' };
            case 'h2':
                return { mb: '1.382rem' };
            case 'h3':
                return { mb: '1.236rem' };
            case 'h4':
            case 'h5':
            case 'h6':
                return { mb: '1rem' };
            case 'body1':
            case 'body2':
                return { mb: '1rem' };
            case 'quote':
                return { my: '1.618rem' };
            default:
                return undefined;
        }
    };
    var marginProps = getMargin();
    if (variant.startsWith('h')) {
        // Heading level (h1-h6)
        return (<Heading_1.default {...rest} {...marginProps} display={variant === 'h1' || variant === 'h2'} truncate={truncate} color={color} cssDisplay={cssDisplay} ref={ref}>
          {children}
        </Heading_1.default>);
    }
    if (variant === 'display1' || variant === 'display2') {
        // Display heading styles
        return (<Heading_1.default {...rest} {...marginProps} as={variant === 'display1' ? 'h1' : 'h2'} display={true} truncate={truncate} color={color} cssDisplay={cssDisplay} ref={ref}>
          {children}
        </Heading_1.default>);
    }
    if (variant === 'body1' || variant === 'body2') {
        // Body text using Paragraph component
        return (<Paragraph_1.default {...rest} {...marginProps} size={variant === 'body1' ? 'base' : 'sm'} useOptimalWidth={harmonized} color={color} ref={ref}>
          {children}
        </Paragraph_1.default>);
    }
    if (variant === 'quote') {
        // Quote text
        return (<BlockQuote_1.default {...rest} {...marginProps} variant="default" size="md" ref={ref}>
          {children}
        </BlockQuote_1.default>);
    }
    if (variant === 'subtitle1' || variant === 'subtitle2') {
        // Subtitle text
        return (<Text_1.default {...rest} {...marginProps} size={variant === 'subtitle1' ? 'md' : 'base'} weight={weight || 'medium'} color={color || 'text.secondary'} ref={ref}>
          {children}
        </Text_1.default>);
    }
    // Default Text component for other variants
    return (<Text_1.default {...rest} {...marginProps} size={variant === 'caption' || variant === 'overline' ? 'xs' :
            variant === 'button' ? 'sm' : 'base'} italic={italic} weight={weight || (variant === 'button' ? 'medium' : 'regular')} textTransform={variant === 'overline' ? 'uppercase' : undefined} letterSpacing={variant === 'overline' ? '0.1em' : undefined} truncate={truncate} noOfLines={noOfLines} color={color} ref={ref}>
        {children}
      </Text_1.default>);
});
exports.Typography.displayName = 'Typography';
exports.default = exports.Typography;
