"use strict";
/**
 * BlockQuote Component
 *
 * A typography component for quotations that implements sacred geometry
 * principles for spacing, proportions, and visual styling.
 *
 * Uses the golden ratio for spacing and proportions, creating harmonious quote blocks.
 */
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
exports.BlockQuote = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
// Get size-specific styles based on size prop
var getSizeStyles = function (size, theme) {
    var _a, _b, _c, _d;
    // Base on Fibonacci sequence for sacred proportions
    var spacing = {
        sm: (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), // 5px
        md: (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), // 8px
        lg: (0, getFibonacciByIndex_1.getFibonacciByIndex)(7), // 13px
    };
    // Font size mapping using theme values
    var fontSize = {
        sm: theme.typography.fontSize.rem.sm,
        md: theme.typography.fontSize.rem.base,
        lg: theme.typography.fontSize.rem.md,
    };
    return {
        padding: "".concat((_a = spacing[size]) !== null && _a !== void 0 ? _a : 1, "px ").concat(Math.round((_b = spacing[size]) !== null && _b !== void 0 ? _b : 1 * sacred_geometry_1.PHI), "px"),
        fontSize: (_c = fontSize[size]) !== null && _c !== void 0 ? _c : 1,
        quoteMarkSize: "".concat((_d = spacing[size]) !== null && _d !== void 0 ? _d : 1 * 3, "px"),
    };
};
// Container for the blockquote
var BlockQuoteContainer = styled_components_1.default.blockquote(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Reset margin and add sacred proportion based spacing\n  margin: ", ";\n  \n  // Apply size-specific styles\n  ", "\n  \n  // Base styling\n  position: relative;\n  font-family: ", ";\n  line-height: ", ";\n  \n  // Apply sacred proportions\n  ", "\n  \n  // Variant-specific styling\n  ", "\n"], ["\n  // Reset margin and add sacred proportion based spacing\n  margin: ", ";\n  \n  // Apply size-specific styles\n  ", "\n  \n  // Base styling\n  position: relative;\n  font-family: ", ";\n  line-height: ", ";\n  \n  // Apply sacred proportions\n  ", "\n  \n  // Variant-specific styling\n  ", "\n"])), function (props) {
    var baseValue = (0, getFibonacciByIndex_1.getFibonacciByIndex)(props.$size === 'sm' ? 6 : props.$size === 'md' ? 7 : 8);
    return "".concat(baseValue, "px 0");
}, function (props) {
    var styles = getSizeStyles(props.$size, props.theme);
    return "\n      padding: ".concat(styles.padding, ";\n      font-size: ").concat(styles.fontSize, ";\n    ");
}, function (props) { return props.theme.typography.fontFamily.body; }, sacred_geometry_1.PHI, function (props) { return props.$useSacredProportions && "\n    max-width: ".concat(Math.round(65 * sacred_geometry_1.PHI), "ch;\n  "); }, function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    switch (props.$variant) {
        case 'elegant':
            return "\n          border-left: none;\n          font-style: italic;\n          color: ".concat(props.theme.colors.text.secondary, ";\n          text-align: center;\n        ");
        case 'bordered':
            return "\n          border-left: 3px solid ".concat((_a = props.theme.colors.primary[400]) !== null && _a !== void 0 ? _a : 1, ";\n          border-right: 1px solid ").concat((_b = props.theme.colors.background[200]) !== null && _b !== void 0 ? _b : 1, ";\n          border-top: 1px solid ").concat((_c = props.theme.colors.background[200]) !== null && _c !== void 0 ? _c : 1, ";\n          border-bottom: 1px solid ").concat((_d = props.theme.colors.background[200]) !== null && _d !== void 0 ? _d : 1, ";\n          border-radius: ").concat(props.theme.radius.sm, "px;\n          background-color: ").concat((_e = props.theme.colors.primary[50]) !== null && _e !== void 0 ? _e : 1, ";\n        ");
        case 'highlighted':
            return "\n          background-color: ".concat((_f = props.theme.colors.primary[50]) !== null && _f !== void 0 ? _f : 1, ";\n          border-radius: ").concat(props.theme.radius.md, "px;\n          box-shadow: 0 ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px rgba(0, 0, 0, 0.05);\n        ");
        default:
            return "\n          border-left: 3px solid ".concat((_g = props.theme.colors.primary[400]) !== null && _g !== void 0 ? _g : 1, ";\n        ");
    }
});
// Quote styling
var QuoteContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return props.$variant === 'elegant' && "\n    position: relative;\n    z-index: 1;\n  "; });
// Decorative quote marks
var QuoteMarks = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  font-family: 'Georgia', serif;\n  line-height: 1;\n  color: ", ";\n  \n  ", "\n"], ["\n  position: absolute;\n  font-family: 'Georgia', serif;\n  line-height: 1;\n  color: ", ";\n  \n  ", "\n"])), function (props) { var _a; return (_a = props.theme.colors.primary[200]) !== null && _a !== void 0 ? _a : 1; }, function (props) {
    var styles = getSizeStyles(props.$size, props.theme);
    switch (props.$variant) {
        case 'elegant':
            return "\n          top: -".concat(parseInt(styles.quoteMarkSize, 10) / 2, "px;\n          left: 50%;\n          transform: translateX(-50%);\n          font-size: ").concat(styles.quoteMarkSize, ";\n          z-index: 0;\n          opacity: 0.2;\n        ");
        case 'highlighted':
        case 'bordered':
            return "\n          top: ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px;\n          left: ").concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px;\n          font-size: ").concat(parseInt(styles.quoteMarkSize, 10) * sacred_geometry_1.PHI_INVERSE, "px;\n          opacity: 0.3;\n        ");
        default:
            return "\n          top: 0;\n          left: -".concat(parseInt(styles.quoteMarkSize, 10) * 1.5, "px;\n          font-size: ").concat(styles.quoteMarkSize, ";\n          opacity: 0.2;\n        ");
    }
});
// Footer for citation and attribution
var QuoteFooter = styled_components_1.default.footer(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: ", "px;\n  font-size: ", ";\n  font-style: normal;\n  color: ", ";\n  \n  ", "\n  \n  // Add a decorative dash before author\n  &::before {\n    content: \"\u2014 \";\n    display: inline-block;\n  }\n"], ["\n  margin-top: ", "px;\n  font-size: ", ";\n  font-style: normal;\n  color: ", ";\n  \n  ", "\n  \n  // Add a decorative dash before author\n  &::before {\n    content: \"\u2014 \";\n    display: inline-block;\n  }\n"])), function (props) { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(props.$size === 'sm' ? 5 : 6); }, function (props) { return props.$size === 'sm'
    ? props.theme.typography.fontSize.rem.xs
    : props.theme.typography.fontSize.rem.sm; }, function (props) { return props.theme.colors.text.secondary; }, function (props) { return props.$variant === 'elegant' && "\n    text-align: right;\n    padding-right: ".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(5), "px;\n  "); });
// Citation styling
var QuoteCite = styled_components_1.default.cite(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-style: normal;\n  font-weight: ", ";\n  \n  // Add comma when followed by source\n  ", "\n"], ["\n  font-style: normal;\n  font-weight: ", ";\n  \n  // Add comma when followed by source\n  ", "\n"])), function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.children && "\n    &::after {\n      content: ".concat(props.children ? '", "' : '', ";\n    }\n  "); });
// Source styling
var QuoteSource = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-style: italic;\n"], ["\n  font-style: italic;\n"])));
/**
 * BlockQuote Component with ref forwarding
 *
 * Creates blockquote elements with harmonious proportions based on sacred geometry
 */
exports.BlockQuote = React.forwardRef(function (_a, ref) {
    var cite = _a.cite, author = _a.author, source = _a.source, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.showQuoteMarks, showQuoteMarks = _d === void 0 ? true : _d, _e = _a.useSacredProportions, useSacredProportions = _e === void 0 ? true : _e, children = _a.children, rest = __rest(_a, ["cite", "author", "source", "variant", "size", "showQuoteMarks", "useSacredProportions", "children"]);
    return (<BlockQuoteContainer ref={ref} $variant={variant} $size={size} $useSacredProportions={useSacredProportions} cite={cite} {...rest}>
        {showQuoteMarks && (<QuoteMarks $variant={variant} $size={size}>"</QuoteMarks>)}
        
        <QuoteContent $variant={variant}>
          {children}
        </QuoteContent>
        
        {(author || source) && (<QuoteFooter $variant={variant} $size={size}>
            {author && <QuoteCite>{author}</QuoteCite>}
            {source && <QuoteSource>{source}</QuoteSource>}
          </QuoteFooter>)}
      </BlockQuoteContainer>);
});
exports.BlockQuote.displayName = 'BlockQuote';
exports.default = exports.BlockQuote;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
