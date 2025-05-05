"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var sacred_geometry_1 = require("../../../../constants/sacred-geometry");
var theme_1 = require("../../../theme");
/**
 * Calculate column width based on sacred geometry
 * Using golden ratio to determine width proportions
 */
var getColumnWidth = function (columns, fullWidth) {
    if (columns === 1)
        return '100%';
    // For multiple columns, apply PHI-based relationships
    if (fullWidth) {
        return "calc(".concat(100 / columns, "% - ").concat(theme_1.lightTheme.spacing.md, "px)");
    }
    // For non-fullWidth, apply additional golden ratio constraint
    return "calc(".concat((100 * sacred_geometry_1.PHI_INVERSE) / columns, "% - ").concat(theme_1.lightTheme.spacing.lg, "px)");
};
/**
 * Get column gap value from Fibonacci sequence
 */
var getColumnGap = function (gap) {
    var gapMapping = {
        1: theme_1.lightTheme.spacing.xs,
        2: theme_1.lightTheme.spacing.sm,
        3: theme_1.lightTheme.spacing.md,
        5: theme_1.lightTheme.spacing.lg,
        8: theme_1.lightTheme.spacing.xl,
        13: theme_1.lightTheme.spacing.xxl
    };
    return gapMapping[gap || 3];
};
var ContentContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: ", ";\n  \n  /* Apply grid layout if using columns */\n  ", "\n  \n  /* Apply alignment based on props */\n  text-align: ", ";\n  \n  /* Apply golden ratio constraints for non-fullWidth content */\n  ", "\n  \n  /* Apply vertical rhythm using Fibonacci spacing */\n  > * + * {\n    margin-top: ", "px;\n  }\n  \n  /* Cancel top margin for grid items */\n  ", "\n"], ["\n  width: 100%;\n  display: ", ";\n  \n  /* Apply grid layout if using columns */\n  ", "\n  \n  /* Apply alignment based on props */\n  text-align: ", ";\n  \n  /* Apply golden ratio constraints for non-fullWidth content */\n  ", "\n  \n  /* Apply vertical rhythm using Fibonacci spacing */\n  > * + * {\n    margin-top: ", "px;\n  }\n  \n  /* Cancel top margin for grid items */\n  ", "\n"])), function (props) { return props.columns > 1 ? 'grid' : 'block'; }, function (props) { return props.columns > 1 ? "\n    grid-template-columns: repeat(\n      ".concat(props.columns, ", \n      ").concat(getColumnWidth(props.columns, props.fullWidth), "\n    );\n    grid-gap: ").concat(props.columnGap, "px;\n    \n    /* Responsive adjustment to ensure proper display on small screens */\n    @media (max-width: ").concat(theme_1.lightTheme.breakpoints.values.md, "px) {\n      grid-template-columns: 1fr;\n    }\n  ") : ''; }, function (props) { return props.align; }, function (props) { return !props.fullWidth && props.columns === 1 ? "\n    max-width: ".concat(100 * sacred_geometry_1.PHI_INVERSE, "%;\n    margin: 0 ").concat(props.align === 'center' ? 'auto' :
    props.align === 'right' ? '0 0 auto' : '0 auto 0', ";\n  ") : ''; }, theme_1.lightTheme.spacing.lg, function (props) { return props.columns > 1 ? "\n    > * { \n      margin-top: 0;\n    }\n  " : ''; });
/**
 * SectionContent component that follows sacred geometry principles
 *
 * This component provides a consistent content layout with proper spacing
 * based on golden ratio and Fibonacci sequence values.
 */
var SectionContent = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.align, align = _b === void 0 ? 'left' : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, style = _a.style, className = _a.className, _d = _a.columns, columns = _d === void 0 ? 1 : _d, _e = _a.columnGap, columnGap = _e === void 0 ? 3 : _e;
    return (<ContentContainer align={align} fullWidth={fullWidth} columns={columns} columnGap={getColumnGap(columnGap)} style={style} className={className} ref={ref}>
        {children}
      </ContentContainer>);
});
SectionContent.displayName = 'SectionContent';
exports.default = SectionContent;
var templateObject_1;
