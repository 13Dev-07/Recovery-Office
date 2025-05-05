"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Import botanical components and utilities
var index_1 = require("./index");
var botanicalUtils_1 = require("./botanicalUtils");
/**
 * BotanicalDecorator Component
 *
 * A container component that adds a botanical element at a specified position.
 * Makes it easy to add botanical decorations to any content.
 */
var BotanicalDecorator = function (_a) {
    var children = _a.children, _b = _a.botanicalType, botanicalType = _b === void 0 ? 'oliveBranch' : _b, _c = _a.position, position = _c === void 0 ? 'bottomRight' : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.opacity, opacity = _e === void 0 ? 0.15 : _e, _f = _a.colorScheme, colorScheme = _f === void 0 ? 'primary' : _f, _g = _a.rotation, rotation = _g === void 0 ? 0 : _g, _h = _a.zIndex, zIndex = _h === void 0 ? 0 : _h, _j = _a.animateOnHover, animateOnHover = _j === void 0 ? false : _j, _k = _a.showOnMobile, showOnMobile = _k === void 0 ? true : _k, _l = _a.decorative, decorative = _l === void 0 ? true : _l, className = _a.className, style = _a.style, _m = _a["data-testid"], testId = _m === void 0 ? 'botanical-decorator' : _m;
    return (<Container className={className} style={style} data-testid={testId} $animateOnHover={animateOnHover} $showOnMobile={showOnMobile}>
      {children}
      
      <BotanicalWrapper style={(0, botanicalUtils_1.getBotanicalPositionStyles)({
            position: position,
            rotation: rotation,
            zIndex: zIndex,
            animate: animateOnHover
        })} $size={size} $animateOnHover={animateOnHover} aria-hidden={decorative}>
        <index_1.BotanicalElement variant={botanicalType} size={size} opacity={opacity} colorScheme={colorScheme} withAnimation={animateOnHover}/>
      </BotanicalWrapper>
    </Container>);
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  \n  /* Hide on mobile if specified */\n  ", "\n  \n  /* Hover animation for botanical element */\n  ", "\n"], ["\n  position: relative;\n  \n  /* Hide on mobile if specified */\n  ", "\n  \n  /* Hover animation for botanical element */\n  ", "\n"])), function (_a) {
    var $showOnMobile = _a.$showOnMobile;
    return !$showOnMobile && "\n    @media (max-width: 768px) {\n      .botanical-decorator-element {\n        display: none;\n      }\n    }\n  ";
}, function (_a) {
    var $animateOnHover = _a.$animateOnHover;
    return $animateOnHover && "\n    &:hover .botanical-decorator-element {\n      transform: scale(".concat(1 + (PHI_INVERSE * 0.2), ");\n      opacity: ").concat(1 - (PHI_INVERSE * 0.5), ";\n    }\n  ");
});
var BotanicalWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* Size based on preset */\n  width: ", "px;\n  height: ", "px;\n  \n  /* Class for targeting in hover state */\n  class-name: botanical-decorator-element;\n  \n  /* Transition for hover animations */\n  ", "\n  \n  /* Accessibility styles */\n  ", "\n  ", "\n  ", "\n"], ["\n  /* Size based on preset */\n  width: ", "px;\n  height: ", "px;\n  \n  /* Class for targeting in hover state */\n  class-name: botanical-decorator-element;\n  \n  /* Transition for hover animations */\n  ", "\n  \n  /* Accessibility styles */\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var $size = _a.$size;
    return (0, botanicalUtils_1.getBotanicalSize)($size);
}, function (_a) {
    var $size = _a.$size;
    return (0, botanicalUtils_1.getBotanicalSize)($size);
}, function (_a) {
    var $animateOnHover = _a.$animateOnHover;
    return $animateOnHover && "\n    transition: all 0.3s cubic-bezier(".concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1);\n  ");
}, botanicalUtils_1.accessibleBotanical.decorative, botanicalUtils_1.accessibleBotanical.reduceMotion, botanicalUtils_1.accessibleBotanical.highContrast);
exports.default = BotanicalDecorator;
var templateObject_1, templateObject_2;
