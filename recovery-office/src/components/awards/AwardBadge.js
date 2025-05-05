"use strict";
/**
 * AwardBadge Component
 *
 * Displays decorative award badges with various shapes and styles.
 * Uses sacred geometry principles for proportions and visual harmony.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Text_1 = require("@design-system/components/typography/Text");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var getFibonacciByIndex_1 = require("@utils/getFibonacciByIndex");
var BotanicalElement_1 = require("@design-system/botanical/BotanicalElement");
// Badge size mappings based on Fibonacci sequence
var sizeMap = {
    small: {
        badge: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); },
        icon: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); },
        title: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(4); },
        info: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(3); }
    },
    medium: {
        badge: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(8); },
        icon: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); },
        title: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); },
        info: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(4); }
    },
    large: {
        badge: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(9); },
        icon: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(8); },
        title: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); },
        info: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); }
    },
    xlarge: {
        badge: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(10); },
        icon: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(9); },
        title: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(7); },
        info: function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); }
    }
};
// Color mappings for badge variants
var variantColorMap = {
    gold: {
        primary: '#FFD700',
        secondary: '#F5A623',
        text: '#5E4B10'
    },
    silver: {
        primary: '#C0C0C0',
        secondary: '#A9A9A9',
        text: '#333333'
    },
    bronze: {
        primary: '#CD7F32',
        secondary: '#A46628',
        text: '#3E2912'
    },
    platinum: {
        primary: '#E5E4E2',
        secondary: '#B4B4B4',
        text: '#333333'
    },
    certification: {
        primary: '#2B7EC1',
        secondary: '#1C5D9C',
        text: '#FFFFFF'
    },
    recognition: {
        primary: '#7B5EA7',
        secondary: '#5B4880',
        text: '#FFFFFF'
    },
    custom: {
        primary: '#4CAF50',
        secondary: '#388E3C',
        text: '#FFFFFF'
    }
};
// Animations for the badges
var pulse = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 ", "px rgba(255, 215, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);\n  }\n"], ["\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 ", "px rgba(255, 215, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);\n  }\n"])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); });
var shine = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    background-position: -", "px;\n  }\n  40%, 100% {\n    background-position: ", "px;\n  }\n"], ["\n  0% {\n    background-position: -", "px;\n  }\n  40%, 100% {\n    background-position: ", "px;\n  }\n"])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(9); }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(10); });
// Styled components for the badge
var BadgeContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  transition: transform ", "ms ease;\n  \n  &:hover {\n    transform: scale(", ");\n  }\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  transition: transform ", "ms ease;\n  \n  &:hover {\n    transform: scale(", ");\n  }\n"])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5) * 10; }, 1 + (1 / sacred_geometry_1.PHI) * 0.1);
var BadgeWrapper = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  color: ", ";\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.2);\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  color: ", ";\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.2);\n"])), function (props) { return sizeMap[props.$size].badge(); }, function (props) { return sizeMap[props.$size].badge(); }, function (props) { return props.$customColor || variantColorMap[props.$variant].primary; }, function (props) { return variantColorMap[props.$variant].text; }, function (props) { return props.$shape === 'circle' && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-radius: 50%;\n  "], ["\n    border-radius: 50%;\n  "]))); }, function (props) { return props.$shape === 'shield' && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    clip-path: polygon(\n      50% 0%, \n      100% 25%, \n      100% 75%, \n      50% 100%, \n      0% 75%, \n      0% 25%\n    );\n  "], ["\n    clip-path: polygon(\n      50% 0%, \n      100% 25%, \n      100% 75%, \n      50% 100%, \n      0% 75%, \n      0% 25%\n    );\n  "]))); }, function (props) { return props.$shape === 'star' && (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    clip-path: polygon(\n      50% 0%, \n      61.8% 35.4%, \n      98.2% 35.4%, \n      68.2% 57.3%, \n      79.1% 91.3%, \n      50% 70%, \n      20.9% 91.3%, \n      31.8% 57.3%, \n      1.8% 35.4%, \n      38.2% 35.4%\n    );\n  "], ["\n    clip-path: polygon(\n      50% 0%, \n      61.8% 35.4%, \n      98.2% 35.4%, \n      68.2% 57.3%, \n      79.1% 91.3%, \n      50% 70%, \n      20.9% 91.3%, \n      31.8% 57.3%, \n      1.8% 35.4%, \n      38.2% 35.4%\n    );\n  "]))); }, function (props) { return props.$shape === 'ribbon' && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    clip-path: polygon(\n      0% 0%, \n      100% 0%, \n      100% 70%, \n      50% 100%, \n      0% 70%\n    );\n  "], ["\n    clip-path: polygon(\n      0% 0%, \n      100% 0%, \n      100% 70%, \n      50% 100%, \n      0% 70%\n    );\n  "]))); }, function (props) { return props.$shape === 'medal' && (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    border-radius: 50%;\n    border: ", "px solid ", ";\n  "], ["\n    border-radius: 50%;\n    border: ", "px solid ", ";\n  "])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(3); }, function (props) { return variantColorMap[props.$variant].secondary; }); }, function (props) { return props.$shape === 'laurel' && (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    border-radius: 50%;\n    &::before, &::after {\n      content: '';\n      position: absolute;\n      width: ", "px;\n      height: ", "px;\n      border: ", "px solid ", ";\n      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;\n    }\n    &::before {\n      left: -", "px;\n      clip-path: polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%);\n    }\n    &::after {\n      right: -", "px;\n      clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%);\n    }\n  "], ["\n    border-radius: 50%;\n    &::before, &::after {\n      content: '';\n      position: absolute;\n      width: ", "px;\n      height: ", "px;\n      border: ", "px solid ", ";\n      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;\n    }\n    &::before {\n      left: -", "px;\n      clip-path: polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%);\n    }\n    &::after {\n      right: -", "px;\n      clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%);\n    }\n  "])), function (props) { return sizeMap[props.$size].badge() * 0.8; }, function (props) { return sizeMap[props.$size].badge() * 0.8; }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(2); }, function (props) { return variantColorMap[props.$variant].secondary; }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); }); }, function (props) { return props.$animated && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    animation: ", " ", "ms infinite;\n    background: linear-gradient(\n      90deg, \n      ", " 0%, \n      ", " 50%,\n      ", " 100%\n    );\n    background-size: ", "px;\n    animation: ", " ", "ms infinite linear;\n  "], ["\n    animation: ", " ", "ms infinite;\n    background: linear-gradient(\n      90deg, \n      ", " 0%, \n      ", " 50%,\n      ", " 100%\n    );\n    background-size: ", "px;\n    animation: ", " ", "ms infinite linear;\n  "])), pulse, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(8) * 100; }, props.$customColor || variantColorMap[props.$variant].primary, function (props) { return variantColorMap[props.$variant].secondary; }, props.$customColor || variantColorMap[props.$variant].primary, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(10); }, shine, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(10) * 100; }); }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(3); }, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(5); });
var IconWrapper = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-size: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  font-size: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), function (props) { return sizeMap[props.$size].icon(); });
var BadgeInfo = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-top: ", "px;\n  text-align: center;\n  max-width: ", "px;\n"], ["\n  margin-top: ", "px;\n  text-align: center;\n  max-width: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.sm, function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(9); });
var BadgeTitle = (0, styled_components_1.default)(Text_1.Text)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n  line-height: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: 600;\n  margin-bottom: ", "px;\n  line-height: ", ";\n"])), function (props) { return sizeMap[props.$size].title(); }, sacred_geometry_1.SACRED_SPACING.xs, 1 * sacred_geometry_1.PHI);
var BadgeDetails = (0, styled_components_1.default)(Text_1.Text)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: #666;\n  line-height: ", ";\n"], ["\n  font-size: ", "px;\n  color: #666;\n  line-height: ", ";\n"])), function (props) { return sizeMap[props.$size].info(); }, 1 * sacred_geometry_1.PHI);
var BotanicalDecoration = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0.2;\n  color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  opacity: 0.2;\n  color: ", ";\n  pointer-events: none;\n"])), function (props) { return variantColorMap[props.$variant].secondary; });
var LeftBotanical = (0, styled_components_1.default)(BotanicalDecoration)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  left: -", "px;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n"], ["\n  left: -", "px;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n"])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); });
var RightBotanical = (0, styled_components_1.default)(BotanicalDecoration)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  right: -", "px;\n  top: 50%;\n  transform: translateY(-50%) rotate(90deg);\n"], ["\n  right: -", "px;\n  top: 50%;\n  transform: translateY(-50%) rotate(90deg);\n"])), function () { return (0, getFibonacciByIndex_1.getFibonacciByIndex)(6); });
// AwardBadge component implementation
var AwardBadge = function (_a) {
    var _b = _a.shape, shape = _b === void 0 ? 'circle' : _b, _c = _a.variant, variant = _c === void 0 ? 'gold' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, title = _a.title, year = _a.year, issuedBy = _a.issuedBy, icon = _a.icon, customColor = _a.customColor, _e = _a.animated, animated = _e === void 0 ? false : _e, _f = _a.showBotanical, showBotanical = _f === void 0 ? false : _f, onClick = _a.onClick, className = _a.className;
    return (<BadgeContainer $animated={animated} $size={size} onClick={onClick} className={className}>
      <BadgeWrapper $variant={variant} $shape={shape} $size={size} $animated={animated} $customColor={customColor !== null && customColor !== void 0 ? customColor : ''}>
        {/* Award icon or symbol */}
        <IconWrapper $size={size}>
          {icon}
        </IconWrapper>
        
        {/* Botanical decorations if enabled */}
        {showBotanical && (<>
            <LeftBotanical $variant={variant} $size={size}>
              <BotanicalElement_1.BotanicalElement type="leaf" size={size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : 'xl'}/>
            </LeftBotanical>
            <RightBotanical $variant={variant} $size={size}>
              <BotanicalElement_1.BotanicalElement type="leaf" size={size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : 'xl'}/>
            </RightBotanical>
          </>)}
      </BadgeWrapper>
      
      {/* Badge information */}
      {(title || year || issuedBy) && (<BadgeInfo>
          {title && (<BadgeTitle $size={size}>{title}</BadgeTitle>)}
          {(year || issuedBy) && (<BadgeDetails $size={size}>
              {issuedBy && <span>{issuedBy}</span>}
              {issuedBy && year && <span> · </span>}
              {year && <span>{year}</span>}
            </BadgeDetails>)}
        </BadgeInfo>)}
    </BadgeContainer>);
};
exports.default = AwardBadge;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
