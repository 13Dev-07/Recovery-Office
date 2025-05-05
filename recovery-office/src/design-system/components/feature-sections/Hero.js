"use strict";
/**
 * Hero Component
 *
 * A full-width hero section that incorporates sacred geometry principles for
 * spacing, proportions, and visual harmony. This component serves as the primary
 * banner/header for pages and includes support for botanical elements.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Section_1 = require("../layout/Section");
var Heading_1 = require("../typography/Heading");
var Text_1 = require("../typography/Text");
var Button_1 = require("../button/Button");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
/**
 * Calculate content width based on split layout
 */
var getContentWidth = function (split) {
    return split ? "".concat(PHI_INVERSE * 100, "%") : '100%';
};
var HeroContainer = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  min-height: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  \n  /* Background image styling */\n  ", "\n  \n  /* Ensure content is above overlay */\n  & > * {\n    position: relative;\n    z-index: 2;\n  }\n"], ["\n  position: relative;\n  min-height: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  \n  /* Background image styling */\n  ", "\n  \n  /* Ensure content is above overlay */\n  & > * {\n    position: relative;\n    z-index: 2;\n  }\n"])), function (props) {
    return typeof props.$minHeight === 'number'
        ? "".concat(props.$minHeight, "px")
        : props.$minHeight;
}, function (props) { return props.$hasBackgroundImage && props.$backgroundImage && "\n    background-image: url(".concat(props.$backgroundImage, ");\n    background-position: ").concat(props.$backgroundPosition || 'center', ";\n    background-size: ").concat(props.$backgroundSize || 'cover', ";\n    background-repeat: no-repeat;\n    \n    /* Overlay */\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: ").concat(props.$backgroundOverlay || 'rgba(0, 0, 0, 0.4)', ";\n      z-index: 1;\n    }\n  "); });
var ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  text-align: ", ";\n  width: 100%;\n  \n  /* Apply golden ratio for split layout */\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  text-align: ", ";\n  width: 100%;\n  \n  /* Apply golden ratio for split layout */\n  ", "\n"])), function (props) {
    switch (props.$align) {
        case 'left': return 'flex-start';
        case 'right': return 'flex-end';
        case 'center': return 'center';
        default: return 'flex-start';
    }
}, function (props) { return props.$align; }, function (props) { return props.$split && "\n    display: flex;\n    flex-direction: row;\n    ".concat(props.$reversed ? 'flex-direction: row-reverse;' : '', "\n    \n    @media (max-width: ").concat(props.theme.breakpoints.md, ") {\n      flex-direction: column;\n      ").concat(props.$reversed ? 'flex-direction: column;' : '', "\n    }\n  "); });
var PrimaryContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  padding: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding: ", "px;\n  }\n  \n  /* Apply golden ratio spacing between elements */\n  & > * + * {\n    margin-top: ", "px;\n  }\n"], ["\n  width: ", ";\n  padding: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding: ", "px;\n  }\n  \n  /* Apply golden ratio spacing between elements */\n  & > * + * {\n    margin-top: ", "px;\n  }\n"])), function (props) { return getContentWidth(props.$split); }, function (props) { return getFibonacciByIndex(6); }, function (props) { return props.theme.breakpoints.md; }, getFibonacciByIndex(5), getFibonacciByIndex(7));
var SecondaryContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", "%;\n  padding: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding: ", "px;\n    margin-top: ", "px;\n  }\n"], ["\n  width: ", "%;\n  padding: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding: ", "px;\n    margin-top: ", "px;\n  }\n"])), PHI_INVERSE * 100, getFibonacciByIndex(6), function (props) { return props.theme.breakpoints.md; }, getFibonacciByIndex(5), getFibonacciByIndex(7));
var HeadingWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(6));
var SubheadingWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  opacity: 0.9;\n"], ["\n  margin-bottom: ", "px;\n  opacity: 0.9;\n"])), getFibonacciByIndex(7));
var ButtonsContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  flex-wrap: wrap;\n  gap: ", "px;\n  margin-top: ", "px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n    width: 100%;\n    \n    /* Apply full width to buttons on small screens */\n    & > button, & > a {\n      width: 100%;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  flex-wrap: wrap;\n  gap: ", "px;\n  margin-top: ", "px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n    width: 100%;\n    \n    /* Apply full width to buttons on small screens */\n    & > button, & > a {\n      width: 100%;\n    }\n  }\n"])), function (props) {
    switch (props.$align) {
        case 'left': return 'flex-start';
        case 'right': return 'flex-end';
        case 'center': return 'center';
        default: return 'flex-start';
    }
}, getFibonacciByIndex(4), getFibonacciByIndex(6), function (props) { return props.theme.breakpoints.sm; });
var BotanicalContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  \n  /* Position the botanical element based on the provided position */\n  ", "\n"], ["\n  position: absolute;\n  z-index: 1;\n  \n  /* Position the botanical element based on the provided position */\n  ", "\n"])), function (props) {
    switch (props.$position) {
        case 'top-left':
            return "\n          top: 0;\n          left: 0;\n        ";
        case 'top-right':
            return "\n          top: 0;\n          right: 0;\n        ";
        case 'bottom-left':
            return "\n          bottom: 0;\n          left: 0;\n        ";
        case 'bottom-right':
            return "\n          bottom: 0;\n          right: 0;\n        ";
        case 'center-left':
            return "\n          top: 50%;\n          left: 0;\n          transform: translateY(-50%);\n        ";
        case 'center-right':
            return "\n          top: 50%;\n          right: 0;\n          transform: translateY(-50%);\n        ";
        case 'top-center':
            return "\n          top: 0;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
        case 'bottom-center':
            return "\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
        case 'center':
            return "\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        ";
        default:
            return '';
    }
});
/**
 * Hero component for creating visually striking page headers
 * using sacred geometry principles for proportions and spacing.
 */
var Hero = function (_a) {
    var heading = _a.heading, subheading = _a.subheading, _b = _a.background, background = _b === void 0 ? {} : _b, _c = _a.minHeight, minHeight = _c === void 0 ? '80vh' : _c, _d = _a.align, align = _d === void 0 ? 'left' : _d, _e = _a.split, split = _e === void 0 ? false : _e, secondaryContent = _a.secondaryContent, _f = _a.reverseSplit, reverseSplit = _f === void 0 ? false : _f, _g = _a.buttons, buttons = _g === void 0 ? [] : _g, _h = _a.animated, animated = _h === void 0 ? true : _h, botanical = _a.botanical, children = _a.children, className = _a.className, style = _a.style;
    // Determine if we have a background image
    var hasBackgroundImage = !!background.image;
    /**
     * Render the heading content with animation if enabled
     */
    var renderHeadingContent = function () {
        var content = (<>
        <HeadingWrapper>
          <Heading_1.Heading variant="h1" style={{ textAlign: align }}>
            {heading}
          </Heading_1.Heading>
        </HeadingWrapper>
        
        {subheading && (<SubheadingWrapper>
            <Text_1.Text variant="subtitle1" style={{ textAlign: align }}>
              {subheading}
            </Text_1.Text>
          </SubheadingWrapper>)}
        
        {children}
        
        {buttons.length > 0 && (<ButtonsContainer $align={align}>
            {buttons.map(function (button, index) { return (<Button_1.Button key={index} variant={button.variant || 'primary'} href={button.href} onClick={button.onClick} leftIcon={button.icon && button.iconPosition === 'left' ? button.icon : undefined} rightIcon={button.icon && button.iconPosition === 'right' ? button.icon : undefined}>
                {button.label}
              </Button_1.Button>); })}
          </ButtonsContainer>)}
      </>);
        if (animated) {
            return <animation_1.FadeIn delay={0.2}>{content}</animation_1.FadeIn>;
        }
        return content;
    };
    /**
     * Render the secondary content with animation if enabled
     */
    var renderSecondaryContentSection = function () {
        if (!secondaryContent)
            return null;
        if (animated) {
            return (<SecondaryContent>
          <animation_1.SlideIn direction={reverseSplit ? 'left' : 'right'}>
            {secondaryContent}
          </animation_1.SlideIn>
        </SecondaryContent>);
        }
        return <SecondaryContent>{secondaryContent}</SecondaryContent>;
    };
    return (<HeroContainer $minHeight={minHeight} $hasBackgroundImage={hasBackgroundImage} $backgroundImage={background.image} $backgroundOverlay={background.overlay} $backgroundPosition={background.position} $backgroundSize={background.size} style={__assign({ backgroundColor: background.color }, style)} className={className}>
      {/* Botanical element if specified */}
      {botanical && (<BotanicalContainer $position={botanical.position}>
          <botanical_1.BotanicalElement type={botanical.type} size={botanical.size || 'lg'} opacity={botanical.opacity || 0.1} animated={botanical.animated}/>
        </BotanicalContainer>)}
      
      <ContentContainer $align={align} $split={split} $reversed={reverseSplit}>
        <PrimaryContent $split={split} $align={align}>
          {renderHeadingContent()}
        </PrimaryContent>
        
        {split && renderSecondaryContentSection()}
      </ContentContainer>
    </HeroContainer>);
};
exports.default = Hero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
