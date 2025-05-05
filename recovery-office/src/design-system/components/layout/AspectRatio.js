"use strict";
/**
 * AspectRatio Component
 *
 * Maintains a specific aspect ratio for its children regardless of screen size.
 * Implements sacred geometry principles by supporting Golden Ratio and other
 * harmonious proportions.
 *
 * This component is useful for creating consistently proportioned elements
 * like images, videos, cards, and other media containers.
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
exports.AspectRatio = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("./Box");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
// Define the sacred aspect ratios if not already imported
var SACRED_ASPECT_RATIOS = {
    goldenRectangle: sacred_geometry_1.PHI, // 1.618:1
    goldenRectangleLandscape: 1 / sacred_geometry_1.PHI, // 1:1.618
    square: 1, // 1:1
    fourByThree: 4 / 3, // 4:3
    sixteenByNine: 16 / 9, // 16:9
    twentyOneByNine: 21 / 9 // 21:9
};
// Container with aspect ratio padding technique
var AspectRatioContainer = (0, styled_components_1.default)(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  \n  &::before {\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  \n  &::before {\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n"])), function (props) { return props.paddingBottom; });
var AspectRatioContent = (0, styled_components_1.default)(Box_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
/**
 * AspectRatio Component with ref forwarding
 *
 * Creates a container with a specific aspect ratio based on sacred geometry principles
 */
exports.AspectRatio = React.forwardRef(function (_a, ref) {
    var _b = _a.ratio, ratio = _b === void 0 ? 'goldenRatio' : _b, children = _a.children, rest = __rest(_a, ["ratio", "children"]);
    // Calculate the padding-bottom percentage based on ratio
    var getPaddingBottom = function () {
        var aspectRatio;
        if (typeof ratio === 'number') {
            // Use the provided numeric ratio
            aspectRatio = ratio;
        }
        else {
            // Use a preset ratio
            switch (ratio) {
                case 'goldenRatio':
                    // 1:1.618 (Golden Rectangle)
                    aspectRatio = 1 / SACRED_ASPECT_RATIOS.goldenRectangle;
                    break;
                case 'goldenRatioLandscape':
                    // 1.618:1 (Landscape Golden Rectangle)
                    aspectRatio = 1 / SACRED_ASPECT_RATIOS.goldenRectangleLandscape;
                    break;
                case 'square':
                    // 1:1 (Perfect Square)
                    aspectRatio = 1;
                    break;
                case '4:3':
                    // 4:3 (Standard TV ratio)
                    aspectRatio = 3 / 4;
                    break;
                case '16:9':
                    // 16:9 (Widescreen ratio)
                    aspectRatio = 9 / 16;
                    break;
                case '21:9':
                    // 21:9 (Ultrawide ratio)
                    aspectRatio = 9 / 21;
                    break;
                default:
                    // Default to Golden Ratio if unrecognized preset
                    aspectRatio = 1 / sacred_geometry_1.PHI;
                    break;
            }
        }
        // Convert ratio to percentage for padding-bottom
        return "".concat((1 / aspectRatio) * 100, "%");
    };
    return (<AspectRatioContainer paddingBottom={getPaddingBottom()} ref={ref} {...rest}>
        <AspectRatioContent>
          {children}
        </AspectRatioContent>
      </AspectRatioContainer>);
});
exports.AspectRatio.displayName = 'AspectRatio';
exports.default = exports.AspectRatio;
var templateObject_1, templateObject_2;
