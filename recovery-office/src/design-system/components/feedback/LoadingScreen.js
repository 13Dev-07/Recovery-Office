"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var botanical_1 = require("../../botanical");
var LoadingScreen = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? getFibonacciByIndex(9) : _b, // 34px
    message = _a.message, _c = _a.withBotanical, withBotanical = _c === void 0 ? true : _c, _d = _a.variant, variant = _d === void 0 ? 'inline' : _d, className = _a.className;
    return (<LoadingContainer $variant={variant} className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
            duration: getFibonacciByIndex(6) * 0.01, // 0.08s
            ease: SACRED_EASINGS.standard,
        }} ref={ref}>
        <LoadingContent>
          {withBotanical && (<BotanicalContainer animate={{
                rotate: 360,
            }} transition={{
                duration: getFibonacciByIndex(9) * 0.1, // 3.4s
                ease: SACRED_EASINGS.standard,
                repeat: Infinity,
                repeatType: "loop"
            }}>
              <botanical_1.FlowerOfLife size={size} opacity={0.8}/>
            </BotanicalContainer>)}
          {message && (<LoadingMessage>
              {message}
            </LoadingMessage>)}
        </LoadingContent>
      </LoadingContainer>);
});
LoadingScreen.displayName = 'LoadingScreen';
var LoadingContainer = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n"])), function (_a) {
    var $variant = _a.$variant;
    return $variant === 'fullscreen' ? "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ".concat(function (props) { return props.theme.colors.background.main; }, "E6;\n    z-index: ").concat(getFibonacciByIndex(10), "; // 55\n  ") : "\n    width: 100%;\n    height: 100%;\n    min-height: ".concat(getFibonacciByIndex(10), "px; // 55px\n  ");
});
var LoadingContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ", "px; // 8px\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var BotanicalContainer = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-origin: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-origin: center;\n"])));
var LoadingMessage = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  font-size: ", "px; // 8px\n  color: ", ";\n  opacity: ", "; // 0.618\n"], ["\n  margin: 0;\n  font-size: ", "px; // 8px\n  color: ", ";\n  opacity: ", "; // 0.618\n"])), getFibonacciByIndex(6), function (props) { return props.theme.colors.text.secondary; }, PHI_INVERSE);
exports.default = LoadingScreen;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
