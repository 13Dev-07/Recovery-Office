"use strict";
/**
 * HeroBotanicals Component
 *
 * Displays decorative botanical elements in the hero section,
 * implementing sacred geometry principles for positioning and animation.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBotanicals = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var OliveBranch_1 = require("../design-system/botanical/OliveBranch");
var FibonacciSpiral_1 = require("../design-system/botanical/FibonacciSpiral");
var VesicaPiscis_1 = require("../design-system/botanical/VesicaPiscis");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var colors_1 = require("../design-system/tokens/colors");
var FadeIn_1 = require("@animation/FadeIn");
var ParallaxLayer_1 = require("@animation/ParallaxLayer");
var BotanicalsWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  \n  @media (max-width: ", "px) {\n    display: none;\n  }\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  \n  @media (max-width: ", "px) {\n    display: none;\n  }\n"])), function (props) { return props.theme.breakpoints.md; });
var OliveBranchWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "%;\n  right: ", "px;\n  transform: rotate(", "deg);\n  z-index: 3;\n"], ["\n  position: absolute;\n  top: ", "%;\n  right: ", "px;\n  transform: rotate(", "deg);\n  z-index: 3;\n"])), 50 * PHI_INVERSE, sacred_geometry_1.SACRED_SPACING.lg, sacred_geometry_1.SACRED_ANGLES.goldenAngle);
var SpiralWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  opacity: 0.7;\n  z-index: 2;\n"], ["\n  position: absolute;\n  bottom: ", "px;\n  left: ", "px;\n  opacity: 0.7;\n  z-index: 2;\n"])), sacred_geometry_1.SACRED_SPACING.xxl, sacred_geometry_1.SACRED_SPACING.xl);
var VesicaWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", "%;\n  opacity: 0.5;\n  z-index: 1;\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", "%;\n  opacity: 0.5;\n  z-index: 1;\n"])), sacred_geometry_1.SACRED_SPACING.xxl, 50 * PHI_INVERSE);
// Derived constants
var PHI_INVERSE = 1 / sacred_geometry_1.PHI;
/**
 * HeroBotanicals Component
 *
 * Displays decorative botanical elements in the hero section.
 * Elements are positioned and animated according to sacred geometry principles.
 */
var HeroBotanicals = function (_a) {
    var _b, _c, _d;
    var className = _a.className;
    return (<BotanicalsWrapper className={className}>
      {/* Olive Branch */}
      <ParallaxLayer_1.ParallaxLayer speed={-0.2} direction="vertical">
        <FadeIn_1.FadeIn delay={sacred_geometry_1.SACRED_TIMING.medium} duration={sacred_geometry_1.SACRED_TIMING.slower}>
          <OliveBranchWrapper>
            <OliveBranch_1.OliveBranch width={350} color={(_b = colors_1.colors.primary[300]) !== null && _b !== void 0 ? _b : 1} opacity={0.8}/>
          </OliveBranchWrapper>
        </FadeIn_1.FadeIn>
      </ParallaxLayer_1.ParallaxLayer>
      
      {/* Fibonacci Spiral */}
      <ParallaxLayer_1.ParallaxLayer speed={0.1} direction="horizontal">
        <FadeIn_1.FadeIn delay={sacred_geometry_1.SACRED_TIMING.slow} duration={sacred_geometry_1.SACRED_TIMING.slower}>
          <SpiralWrapper>
            <FibonacciSpiral_1.FibonacciSpiral iterations={5} startSize={100} showSquares={false} color={(_c = colors_1.colors.primary[400]) !== null && _c !== void 0 ? _c : 1} opacity={0.3}/>
          </SpiralWrapper>
        </FadeIn_1.FadeIn>
      </ParallaxLayer_1.ParallaxLayer>
      
      {/* Vesica Piscis */}
      <ParallaxLayer_1.ParallaxLayer speed={0.05} direction="vertical">
        <FadeIn_1.FadeIn delay={sacred_geometry_1.SACRED_TIMING.fast} duration={sacred_geometry_1.SACRED_TIMING.slow}>
          <VesicaWrapper>
            <VesicaPiscis_1.VesicaPiscis width={200} rotation={45} color={(_d = colors_1.colors.primary[300]) !== null && _d !== void 0 ? _d : 1} opacity={0.4}/>
          </VesicaWrapper>
        </FadeIn_1.FadeIn>
      </ParallaxLayer_1.ParallaxLayer>
    </BotanicalsWrapper>);
};
exports.HeroBotanicals = HeroBotanicals;
exports.default = exports.HeroBotanicals;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
