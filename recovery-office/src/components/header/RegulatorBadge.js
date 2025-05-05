"use strict";
/**
 * RegulatorBadge Component
 *
 * Displays regulatory credentials (FCA, BaFin) to establish trust.
 * Implements sacred geometry principles for sizing and spacing.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegulatorBadge = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Flex_1 = require("../design-system/components/layout/Flex");
var Box_1 = require("../design-system/components/layout/Box");
var Text_1 = require("../design-system/components/typography/Text");
var Badge_1 = require("../design-system/components/feedback/Badge");
var BadgeContainer = (0, styled_components_1.default)(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  gap: ", "px;\n"], ["\n  gap: ", "px;\n"])), SACRED_SPACING.sm);
var BadgeWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var BadgeImage = styled_components_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: ", "px; // 5px\n  width: auto;\n  margin-right: ", "px;\n"], ["\n  height: ", "px; // 5px\n  width: auto;\n  margin-right: ", "px;\n"])), getFibonacciByIndex(5), SACRED_SPACING.xxs);
var BadgeText = (0, styled_components_1.default)(Text_1.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px; // 2px\n  font-weight: 600;\n"], ["\n  font-size: ", "px; // 2px\n  font-weight: 600;\n"])), getFibonacciByIndex(4) - 1);
var VerifiedText = (0, styled_components_1.default)(Text_1.Text)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px; // 2px\n  color: ", ";\n  margin-left: ", "px;\n"], ["\n  font-size: ", "px; // 2px\n  color: ", ";\n  margin-left: ", "px;\n"])), getFibonacciByIndex(3), function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = theme.colors.primary[600]) !== null && _b !== void 0 ? _b : 1;
}, SACRED_SPACING.xxs);
/**
 * RegulatorBadge Component
 *
 * Displays official regulatory credentials to establish trust.
 * Badge is sized and spaced according to sacred geometry.
 */
var RegulatorBadge = function (_a) {
    var className = _a.className;
    return (<BadgeContainer className={className} alignItems="center">
      <BadgeWrapper>
        <BadgeImage src="/assets/images/awards/fca-badge.svg" alt="Financial Conduct Authority"/>
        <BadgeText>FCA Regulated</BadgeText>
      </BadgeWrapper>
      
      <Badge_1.Badge variant="outline" size="xs" colorScheme="success">
        <VerifiedText>Verified</VerifiedText>
      </Badge_1.Badge>
    </BadgeContainer>);
};
exports.RegulatorBadge = RegulatorBadge;
exports.default = exports.RegulatorBadge;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
