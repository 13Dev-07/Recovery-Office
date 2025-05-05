"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
// Import design system components
var layout_1 = require("../layout");
/**
 * List Component with ref forwarding
 *
 * A component for displaying ordered or unordered lists with
 * sacred geometry proportions for spacing and markers.
 */
var List = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'unordered' : _b, _c = _a.spacing, spacing = _c === void 0 ? 'md' : _c, _d = _a.markerType, markerType = _d === void 0 ? 'disc' : _d, _e = _a.markerColor, markerColor = _e === void 0 ? 'primary' : _e, customMarker = _a.customMarker, _f = _a.inline, inline = _f === void 0 ? false : _f, className = _a.className, _g = _a["data-testid"], testId = _g === void 0 ? 'sacred-list' : _g;
    // Determine the HTML element based on variant
    var as = variant === 'ordered' ? 'ol' : 'ul';
    // If custom variant with a custom marker, wrap children to add markers
    if (variant === 'custom' && customMarker) {
        return (<StyledList as={as} $spacing={spacing} $markerType="none" $markerColor={markerColor} $inline={inline} className={className} data-testid={testId} ref={ref}>
          {React.Children.map(children, function (child) { return (<ListItem $spacing={spacing} $inline={inline}>
              <MarkerWrapper>{customMarker}</MarkerWrapper>
              <layout_1.Box display="inline-block">{child}</layout_1.Box>
            </ListItem>); })}
        </StyledList>);
    }
    // For standard lists
    return (<StyledList as={as} $spacing={spacing} $markerType={markerType} $markerColor={markerColor} $inline={inline} className={className} data-testid={testId} ref={ref}>
        {children}
      </StyledList>);
});
List.displayName = 'List';
// Helper function to get spacing value from design tokens
var getSpacingValue = function (spacing) {
    switch (spacing) {
        case 'xs': return getFibonacciByIndex(4); // 3
        case 'sm': return getFibonacciByIndex(5); // 5
        case 'md': return getFibonacciByIndex(6); // 8
        case 'lg': return getFibonacciByIndex(7); // 13
        case 'xl': return getFibonacciByIndex(8); // 21
        default: return getFibonacciByIndex(6); // 8
    }
};
var StyledList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style-type: ", ";\n  \n  padding: 0;\n  margin: 0;\n  padding-left: ", ";\n  \n  /* Custom styling for botanical markers */\n  ", "\n  \n  /* Inline styling */\n  ", "\n  \n  /* Color styling */\n  color: ", ";\n"], ["\n  list-style-type: ", ";\n  \n  padding: 0;\n  margin: 0;\n  padding-left: ", ";\n  \n  /* Custom styling for botanical markers */\n  ", "\n  \n  /* Inline styling */\n  ", "\n  \n  /* Color styling */\n  color: ", ";\n"])), function (_a) {
    var $markerType = _a.$markerType;
    return $markerType === 'none' ? 'none' :
        $markerType === 'botanical' ? 'none' :
            $markerType;
}, function (_a) {
    var $markerType = _a.$markerType;
    return $markerType === 'none' ? '0' : '1.25em';
}, function (_a) {
    var _b, _c;
    var $markerType = _a.$markerType, theme = _a.theme, $markerColor = _a.$markerColor;
    return $markerType === 'botanical' ? "\n      list-style: none;\n      padding-left: 0;\n      \n      li {\n        position: relative;\n        padding-left: ".concat(getFibonacciByIndex(7), "px;\n        \n        &:before {\n          content: '\u2022';\n          position: absolute;\n          left: 0;\n          color: ").concat($markerColor === 'primary' ? (_b = theme.colors.primary[500]) !== null && _b !== void 0 ? _b : 1 :
        $markerColor === 'secondary' ? (_c = theme.colors.secondary[500]) !== null && _c !== void 0 ? _c : 1 :
            theme.colors.accent.gold, ";\n          font-size: 1.2em;\n          line-height: 1;\n          transform: scale(").concat(PHI_INVERSE * 1.5, ");\n        }\n      }\n    ")
        : '';
}, function (_a) {
    var $inline = _a.$inline;
    return $inline ? "\n      display: flex;\n      flex-wrap: wrap;\n      \n      li {\n        display: inline-block;\n      }\n    "
        : '';
}, function (_a) {
    var theme = _a.theme, $markerColor = _a.$markerColor;
    return $markerColor === 'primary' ? theme.colors.text.primary :
        $markerColor === 'secondary' ? theme.colors.text.secondary :
            theme.colors.accent.gold;
});
var ListItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", ";\n  \n  margin-right: ", ";\n  \n  display: ", ";\n  align-items: flex-start;\n"], ["\n  margin-bottom: ", ";\n  \n  margin-right: ", ";\n  \n  display: ", ";\n  align-items: flex-start;\n"])), function (_a) {
    var $spacing = _a.$spacing, $inline = _a.$inline;
    return $inline ? '0' : "".concat(getSpacingValue($spacing), "px");
}, function (_a) {
    var $spacing = _a.$spacing, $inline = _a.$inline;
    return $inline ? "".concat(getSpacingValue($spacing), "px") : '0';
}, function (_a) {
    var $inline = _a.$inline;
    return $inline ? 'inline-flex' : 'flex';
});
var MarkerWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  margin-right: ", "px;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  margin-right: ", "px;\n  align-items: center;\n"])), getFibonacciByIndex(5));
exports.default = List;
var templateObject_1, templateObject_2, templateObject_3;
