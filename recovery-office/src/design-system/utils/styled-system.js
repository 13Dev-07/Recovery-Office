"use strict";
/**
 * Styled System Utilities
 *
 * This file provides utilities for creating styled components with a consistent API
 * for styling props, responsive values, and sacred geometry principles.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyledSystemComponent = void 0;
var styled_components_1 = require("styled-components");
var tokens_1 = require("../tokens");
/**
 * Process a style value, converting it to a proper CSS value
 *
 * @param value - The value to process
 * @param tokenMap - Optional token map to look up values from
 * @returns Processed CSS value as a string
 */
var processValue = function (value, tokenMap) {
    if (value === undefined || value === null) {
        return '';
    }
    if (tokenMap && typeof value === 'string' && value in tokenMap) {
        return tokenMap[value];
    }
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return "".concat(value, "px");
    }
    return String(value);
};
/**
 * Creates a styled-system component configuration with all the styling props
 * from BoxStyleProps interface.
 *
 * This function handles spacing, layout, flexbox, grid, and other CSS properties
 * in a consistent way, accounting for responsive values and theme integration.
 *
 * @returns A function that generates CSS from BoxStyleProps
 */
var createStyledSystemComponent = function () { return function (props) {
    var styles = '';
    // Process margin and padding properties
    var spacingProperties = {
        m: 'margin',
        mt: 'margin-top',
        mr: 'margin-right',
        mb: 'margin-bottom',
        ml: 'margin-left',
        mx: 'margin-left/margin-right',
        my: 'margin-top/margin-bottom',
        p: 'padding',
        pt: 'padding-top',
        pr: 'padding-right',
        pb: 'padding-bottom',
        pl: 'padding-left',
        px: 'padding-left/padding-right',
        py: 'padding-top/padding-bottom',
    };
    Object.entries(spacingProperties).forEach(function (_a) {
        var prop = _a[0], cssProps = _a[1];
        var propKey = prop;
        if (props[propKey] !== undefined) {
            var value = processValue(props[propKey], tokens_1.spacing);
            if (prop === 'mx') {
                styles += "\n          margin-left: ".concat(value, ";\n          margin-right: ").concat(value, ";\n        ");
            }
            else if (prop === 'my') {
                styles += "\n          margin-top: ".concat(value, ";\n          margin-bottom: ").concat(value, ";\n        ");
            }
            else if (prop === 'px') {
                styles += "\n          padding-left: ".concat(value, ";\n          padding-right: ").concat(value, ";\n        ");
            }
            else if (prop === 'py') {
                styles += "\n          padding-top: ".concat(value, ";\n          padding-bottom: ").concat(value, ";\n        ");
            }
            else {
                styles += "".concat(cssProps, ": ").concat(value, ";");
            }
        }
    });
    // Layout properties (width, height, display, etc.)
    if (props.width !== undefined) {
        styles += "width: ".concat(processValue(props.width), ";");
    }
    if (props.height !== undefined) {
        styles += "height: ".concat(processValue(props.height), ";");
    }
    if (props.minWidth !== undefined) {
        styles += "min-width: ".concat(processValue(props.minWidth), ";");
    }
    if (props.minHeight !== undefined) {
        styles += "min-height: ".concat(processValue(props.minHeight), ";");
    }
    if (props.maxWidth !== undefined) {
        styles += "max-width: ".concat(processValue(props.maxWidth), ";");
    }
    if (props.maxHeight !== undefined) {
        styles += "max-height: ".concat(processValue(props.maxHeight), ";");
    }
    if (props.display !== undefined) {
        styles += "display: ".concat(props.display, ";");
    }
    // Flexbox properties
    if (props.flexDirection !== undefined) {
        styles += "flex-direction: ".concat(props.flexDirection, ";");
    }
    if (props.flexWrap !== undefined) {
        styles += "flex-wrap: ".concat(props.flexWrap, ";");
    }
    if (props.alignItems !== undefined) {
        styles += "align-items: ".concat(props.alignItems, ";");
    }
    if (props.justifyContent !== undefined) {
        styles += "justify-content: ".concat(props.justifyContent, ";");
    }
    if (props.flex !== undefined) {
        styles += "flex: ".concat(props.flex, ";");
    }
    // Ensure flexGrow is part of FlexItemProps and BoxStyleProps
    if (props.flexGrow !== undefined) {
        styles += "flex-grow: ".concat(props.flexGrow, ";");
    }
    if (props.flexShrink !== undefined) {
        styles += "flex-shrink: ".concat(props.flexShrink, ";");
    }
    if (props.flexBasis !== undefined) {
        styles += "flex-basis: ".concat(processValue(props.flexBasis), ";");
    }
    if (props.justifySelf !== undefined) {
        styles += "justify-self: ".concat(props.justifySelf, ";");
    }
    if (props.alignSelf !== undefined) {
        styles += "align-self: ".concat(props.alignSelf, ";");
    }
    if (props.order !== undefined) {
        styles += "order: ".concat(props.order, ";");
    }
    // Grid properties
    if (props.gap !== undefined) {
        styles += "gap: ".concat(processValue(props.gap, tokens_1.spacing), ";");
    }
    if (props.gridGap !== undefined) {
        styles += "grid-gap: ".concat(processValue(props.gridGap, tokens_1.spacing), ";");
    }
    if (props.gridColumnGap !== undefined) {
        styles += "grid-column-gap: ".concat(processValue(props.gridColumnGap, tokens_1.spacing), ";");
    }
    if (props.gridRowGap !== undefined) {
        styles += "grid-row-gap: ".concat(processValue(props.gridRowGap, tokens_1.spacing), ";");
    }
    if (props.gridColumn !== undefined) {
        styles += "grid-column: ".concat(props.gridColumn, ";");
    }
    if (props.gridRow !== undefined) {
        styles += "grid-row: ".concat(props.gridRow, ";");
    }
    if (props.gridTemplateColumns !== undefined) {
        styles += "grid-template-columns: ".concat(props.gridTemplateColumns, ";");
    }
    if (props.gridTemplateRows !== undefined) {
        styles += "grid-template-rows: ".concat(props.gridTemplateRows, ";");
    }
    if (props.gridTemplateAreas !== undefined) {
        styles += "grid-template-areas: ".concat(props.gridTemplateAreas, ";");
    }
    if (props.gridArea !== undefined) {
        styles += "grid-area: ".concat(props.gridArea, ";");
    }
    // Position properties
    if (props.position !== undefined) {
        styles += "position: ".concat(props.position, ";");
    }
    if (props.zIndex !== undefined) {
        styles += "z-index: ".concat(props.zIndex, ";");
    }
    if (props.top !== undefined) {
        styles += "top: ".concat(processValue(props.top), ";");
    }
    if (props.right !== undefined) {
        styles += "right: ".concat(processValue(props.right), ";");
    }
    if (props.bottom !== undefined) {
        styles += "bottom: ".concat(processValue(props.bottom), ";");
    }
    if (props.left !== undefined) {
        styles += "left: ".concat(processValue(props.left), ";");
    }
    // Color and background properties
    if (props.color !== undefined) {
        styles += "color: ".concat(props.color, ";");
    }
    if (props.bg !== undefined) {
        styles += "background-color: ".concat(props.bg, ";");
    }
    if (props.backgroundColor !== undefined) {
        styles += "background-color: ".concat(props.backgroundColor, ";");
    }
    if (props.opacity !== undefined) {
        styles += "opacity: ".concat(props.opacity, ";");
    }
    // Border properties
    if (props.border !== undefined) {
        styles += "border: ".concat(props.border, ";");
    }
    if (props.borderTop !== undefined) {
        styles += "border-top: ".concat(props.borderTop, ";");
    }
    if (props.borderRight !== undefined) {
        styles += "border-right: ".concat(props.borderRight, ";");
    }
    if (props.borderBottom !== undefined) {
        styles += "border-bottom: ".concat(props.borderBottom, ";");
    }
    if (props.borderLeft !== undefined) {
        styles += "border-left: ".concat(props.borderLeft, ";");
    }
    if (props.borderColor !== undefined) {
        styles += "border-color: ".concat(props.borderColor, ";");
    }
    if (props.borderRadius !== undefined) {
        styles += "border-radius: ".concat(processValue(props.borderRadius), ";");
    }
    // Typography properties
    if (props.fontSize !== undefined) {
        styles += "font-size: ".concat(processValue(props.fontSize), ";");
    }
    if (props.fontWeight !== undefined) {
        styles += "font-weight: ".concat(props.fontWeight, ";");
    }
    if (props.lineHeight !== undefined) {
        styles += "line-height: ".concat(props.lineHeight, ";");
    }
    if (props.letterSpacing !== undefined) {
        styles += "letter-spacing: ".concat(processValue(props.letterSpacing), ";");
    }
    if (props.textAlign !== undefined) {
        styles += "text-align: ".concat(props.textAlign, ";");
    }
    if (props.fontStyle !== undefined) {
        styles += "font-style: ".concat(props.fontStyle, ";");
    }
    // Other common properties
    if (props.overflow !== undefined) {
        styles += "overflow: ".concat(props.overflow, ";");
    }
    if (props.overflowX !== undefined) {
        styles += "overflow-x: ".concat(props.overflowX, ";");
    }
    if (props.overflowY !== undefined) {
        styles += "overflow-y: ".concat(props.overflowY, ";");
    }
    if (props.visibility !== undefined) {
        styles += "visibility: ".concat(props.visibility, ";");
    }
    if (props.cursor !== undefined) {
        styles += "cursor: ".concat(props.cursor, ";");
    }
    if (props.whiteSpace !== undefined) {
        styles += "white-space: ".concat(props.whiteSpace, ";");
    }
    if (props.textDecoration !== undefined) {
        styles += "text-decoration: ".concat(props.textDecoration, ";");
    }
    // Custom css prop for direct CSS injection
    if (props.css) {
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n    "])), styles, props.css);
    }
    return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), styles);
}; };
exports.createStyledSystemComponent = createStyledSystemComponent;
exports.default = exports.createStyledSystemComponent;
var templateObject_1, templateObject_2;
