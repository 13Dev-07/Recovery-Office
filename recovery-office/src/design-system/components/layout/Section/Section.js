"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionContent = exports.Section = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Container_1 = require("../Container");
/**
 * Get background color based on variant
 */
var getBackgroundColor = function (variant, theme) {
    var _a, _b, _c, _d, _e, _f;
    switch (variant) {
        case 'primary':
            return (_a = theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1;
        case 'secondary':
            return (_b = theme.colors.secondary[500]) !== null && _b !== void 0 ? _b : 1;
        case 'tertiary':
            return (_c = theme.colors.secondary[700]) !== null && _c !== void 0 ? _c : 1;
        case 'accent':
            return theme.colors.accent.gold;
        case 'light':
            return (_d = theme.colors.background[100]) !== null && _d !== void 0 ? _d : 1;
        case 'dark':
            return (_e = theme.colors.background[800]) !== null && _e !== void 0 ? _e : 1;
        case 'transparent':
            return 'transparent';
        default:
            return (_f = theme.colors.background[100]) !== null && _f !== void 0 ? _f : 1;
    }
};
/**
 * Get text color based on variant to ensure contrast
 */
var getTextColor = function (variant, theme) {
    switch (variant) {
        case 'primary':
        case 'secondary':
        case 'tertiary':
        case 'accent':
        case 'dark':
            return theme.colors.text.light;
        case 'light':
        case 'transparent':
            return theme.colors.text.dark;
        default:
            return theme.colors.text.primary;
    }
};
/**
 * Calculate padding values using Fibonacci sequence
 * Creates pleasing, sacred geometry-based spacing
 */
var getSectionPadding = function (hasPadding, theme) {
    if (!hasPadding)
        return '0';
    // Using Fibonacci-based spacing units
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "px ", "px;\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n  "], ["\n    padding: ", "px ", "px;\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n    \n    @media (min-width: ", "px) {\n      padding: ", "px ", "px;\n    }\n  "])), theme.spacing.xl, theme.spacing.lg, theme.breakpoints.values.sm, theme.spacing.xl, theme.spacing.xl, theme.breakpoints.values.md, theme.spacing.xxl, theme.spacing.xl, theme.breakpoints.values.lg, theme.spacing.xxxl, theme.spacing.xxl);
};
/**
 * Position the botanical element according to the specified position
 */
var getBotanicalElementPosition = function (position) {
    switch (position) {
        case 'top-left':
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        top: 0;\n        left: 0;\n        transform: translate(-", "%, -", "%);\n      "], ["\n        top: 0;\n        left: 0;\n        transform: translate(-", "%, -", "%);\n      "])), PHI_INVERSE * 100, PHI_INVERSE * 100);
        case 'top-right':
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        top: 0;\n        right: 0;\n        transform: translate(", "%, -", "%);\n      "], ["\n        top: 0;\n        right: 0;\n        transform: translate(", "%, -", "%);\n      "])), PHI_INVERSE * 100, PHI_INVERSE * 100);
        case 'bottom-left':
            return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        bottom: 0;\n        left: 0;\n        transform: translate(-", "%, ", "%);\n      "], ["\n        bottom: 0;\n        left: 0;\n        transform: translate(-", "%, ", "%);\n      "])), PHI_INVERSE * 100, PHI_INVERSE * 100);
        case 'bottom-right':
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        bottom: 0;\n        right: 0;\n        transform: translate(", "%, ", "%);\n      "], ["\n        bottom: 0;\n        right: 0;\n        transform: translate(", "%, ", "%);\n      "])), PHI_INVERSE * 100, PHI_INVERSE * 100);
        case 'center-left':
            return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        top: 50%;\n        left: 0;\n        transform: translate(-", "%, -50%);\n      "], ["\n        top: 50%;\n        left: 0;\n        transform: translate(-", "%, -50%);\n      "])), PHI_INVERSE * 100);
        case 'center-right':
            return (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        top: 50%;\n        right: 0;\n        transform: translate(", "%, -50%);\n      "], ["\n        top: 50%;\n        right: 0;\n        transform: translate(", "%, -50%);\n      "])), PHI_INVERSE * 100);
        case 'top-center':
            return (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, -", "%);\n      "], ["\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, -", "%);\n      "])), PHI_INVERSE * 100);
        case 'bottom-center':
            return (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%, ", "%);\n      "], ["\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%, ", "%);\n      "])), PHI_INVERSE * 100);
        default:
            return '';
    }
};
var StyledSection = styled_components_1.default.section(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n  text-align: ", ";\n  min-height: ", ";\n  ", "\n  \n  /* Apply custom padding if provided */\n  ", "\n  ", "\n  \n  /* Apply background image if provided */\n  ", "\n  \n  /* Apply golden ratio to container max-width if not full width */\n  ", "\n  \n  /* Apply custom max-width if provided */\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  background-color: ", ";\n  color: ", ";\n  text-align: ", ";\n  min-height: ", ";\n  ", "\n  \n  /* Apply custom padding if provided */\n  ", "\n  ", "\n  \n  /* Apply background image if provided */\n  ", "\n  \n  /* Apply golden ratio to container max-width if not full width */\n  ", "\n  \n  /* Apply custom max-width if provided */\n  ", "\n"])), function (props) { return props.backgroundColor || getBackgroundColor(props.variant, props.theme); }, function (props) { return getTextColor(props.variant, props.theme); }, function (props) { return props.textAlign; }, function (props) { return props.minHeight ? "".concat(props.minHeight, "vh") : 'auto'; }, function (props) { return getSectionPadding(props.hasPadding, props.theme); }, function (props) { return props.pt && "padding-top: ".concat(props.pt, ";"); }, function (props) { return props.pb && "padding-bottom: ".concat(props.pb, ";"); }, function (props) { return props.backgroundImage && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  "], ["\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  "])), props.backgroundImage); }, function (props) { return !props.fullWidth && !props.maxWidth && (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    .section-container {\n      max-width: ", "px;\n      margin: 0 auto;\n    }\n  "], ["\n    .section-container {\n      max-width: ", "px;\n      margin: 0 auto;\n    }\n  "])), 1440 * PHI_INVERSE); }, function (props) { return !props.fullWidth && props.maxWidth && (0, styled_components_1.css)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    .section-container {\n      max-width: ", ";\n      margin: 0 auto;\n    }\n  "], ["\n    .section-container {\n      max-width: ", ";\n      margin: 0 auto;\n    }\n  "])), typeof props.maxWidth === 'number' ? "".concat(props.maxWidth, "px") : props.maxWidth); });
// Styled div for botanical elements
var BotanicalWrapper = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 0;\n  pointer-events: none;\n  ", "\n"], ["\n  position: absolute;\n  z-index: 0;\n  pointer-events: none;\n  ", "\n"])), function (props) { return getBotanicalElementPosition(props.position); });
/**
 * Section component that follows sacred geometry principles
 *
 * Creates harmonious section layouts with proper spacing and proportions
 */
exports.Section = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'light' : _b, id = _a.id, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, minHeight = _a.minHeight, maxWidth = _a.maxWidth, _d = _a.hasPadding, hasPadding = _d === void 0 ? true : _d, _e = _a.botanicalPosition, botanicalPosition = _e === void 0 ? 'none' : _e, botanicalElement = _a.botanicalElement, _f = _a.textAlign, textAlign = _f === void 0 ? 'left' : _f, backgroundImage = _a.backgroundImage, backgroundColor = _a.backgroundColor, style = _a.style, className = _a.className, pt = _a.pt, pb = _a.pb;
    return (<StyledSection variant={variant} hasPadding={hasPadding} minHeight={minHeight} fullWidth={fullWidth} maxWidth={maxWidth} textAlign={textAlign} backgroundImage={backgroundImage} backgroundColor={backgroundColor} id={id} className={className} pt={pt} pb={pb} style={style} ref={ref}>
        {/* Container to apply width constraints */}
        <div className="section-container">
          {/* Main content container */}
          <div className="section-content">
            {children}
          </div>
        </div>
        
        {/* Botanical decorative element if provided */}
        {botanicalPosition !== 'none' && botanicalElement && (<div className={"botanical-element botanical-".concat(botanicalPosition)}>
            {botanicalElement}
          </div>)}
      </StyledSection>);
});
exports.Section.displayName = 'Section';
/**
 * SectionContent component for adding standardized content containers
 * within Section components with golden ratio proportions
 */
exports.SectionContent = (0, styled_components_1.default)(Container_1.default)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 ", "px;\n  \n  @media (min-width: ", "px) {\n    padding: 0 ", "px;\n  }\n  \n  /* Apply golden ratio proportions to create harmony */\n  & > * + * {\n    margin-top: ", ";\n  }\n  \n  /* Golden ratio proportion for spacing between section titles and content */\n  & > h2 + * {\n    margin-top: ", "px;\n  }\n"], ["\n  width: 100%;\n  max-width: ", ";\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 ", "px;\n  \n  @media (min-width: ", "px) {\n    padding: 0 ", "px;\n  }\n  \n  /* Apply golden ratio proportions to create harmony */\n  & > * + * {\n    margin-top: ", ";\n  }\n  \n  /* Golden ratio proportion for spacing between section titles and content */\n  & > h2 + * {\n    margin-top: ", "px;\n  }\n"])), function (props) { return props.maxWidth || '1200px'; }, function (props) { return props.theme.spacing.md; }, function (props) { return props.theme.breakpoints.values.md; }, function (props) { return props.theme.spacing.lg; }, function (props) { return props.spacing || "".concat(props.theme.spacing.lg, "px"); }, 21 * PHI_INVERSE);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
