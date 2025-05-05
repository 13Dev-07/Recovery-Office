"use strict";
/**
 * AwardsShowcase Component
 *
 * Displays a collection of awards in a visually appealing grid or carousel.
 * Implements sacred geometry principles for layout and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
var AwardBadge_1 = require("./AwardBadge");
var Text_1 = require("@design-system/components/typography/Text");
var Heading_1 = require("@design-system/components/typography/Heading");
var Box_1 = require("@design-system/components/layout/Box");
var Grid_1 = require("@design-system/components/layout/Grid");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var BotanicalElement_1 = require("@design-system/botanical/BotanicalElement");
var ShowcaseContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"], ["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var AwardsGrid = (0, styled_components_1.default)(Grid_1.Grid)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  --min-column-width: ", "px;\n  \n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill, \n    minmax(var(--min-column-width), 1fr)\n  );\n  gap: ", "px;\n  \n  ", "\n"], ["\n  --min-column-width: ", "px;\n  \n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill, \n    minmax(var(--min-column-width), 1fr)\n  );\n  gap: ", "px;\n  \n  ", "\n"])), function () { return getFibonacciByIndex(9); }, sacred_geometry_1.SACRED_SPACING.lg, function (props) { return props.$displayMode === 'featured' && "\n    grid-template-columns: repeat(3, 1fr);\n    \n    @media (max-width: 768px) {\n      grid-template-columns: repeat(2, 1fr);\n    }\n    \n    @media (max-width: 480px) {\n      grid-template-columns: 1fr;\n    }\n  "; });
var CarouselContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: ", "px 0;\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: ", "px 0;\n"])), sacred_geometry_1.SACRED_SPACING.md);
var CarouselTrack = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px;\n  padding: 0 ", "px;\n"], ["\n  display: flex;\n  gap: ", "px;\n  padding: 0 ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.sm);
var AwardContainer = (0, styled_components_1.default)(framer_motion_1.motion.div)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px;\n  border-radius: ", "px;\n  transition: all 0.3s ease;\n  \n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", "px;\n  border-radius: ", "px;\n  transition: all 0.3s ease;\n  \n  ", "\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.sm, function (props) { return props.$isActive && "\n    box-shadow: 0 ".concat(function () { return getFibonacciByIndex(4); }, "px ").concat(function () { return getFibonacciByIndex(6); }, "px rgba(0, 0, 0, 0.1);\n    background-color: rgba(255, 255, 255, 0.8);\n  "); });
var AwardDescription = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: ", "px;\n  text-align: center;\n  max-width: ", "px;\n  opacity: 0.9;\n  line-height: ", ";\n"], ["\n  margin-top: ", "px;\n  text-align: center;\n  max-width: ", "px;\n  opacity: 0.9;\n  line-height: ", ";\n"])), sacred_geometry_1.SACRED_SPACING.sm, function () { return getFibonacciByIndex(10); }, 1 * sacred_geometry_1.PHI);
var NavigationButtons = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  gap: ", "px;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: center;\n  gap: ", "px;\n  margin-top: ", "px;\n"])), sacred_geometry_1.SACRED_SPACING.md, sacred_geometry_1.SACRED_SPACING.md);
var NavButton = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background: #fff;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  \n  &:hover {\n    background: #f5f5f5;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n  }\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background: #fff;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  \n  &:hover {\n    background: #f5f5f5;\n  }\n  \n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n  }\n  \n  svg {\n    width: ", "px;\n    height: ", "px;\n  }\n"])), function () { return getFibonacciByIndex(7); }, function () { return getFibonacciByIndex(7); }, function () { return getFibonacciByIndex(5); }, function () { return getFibonacciByIndex(5); });
var BotanicalDecoration = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0.15;\n  pointer-events: none;\n  z-index: -1;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  position: absolute;\n  opacity: 0.15;\n  pointer-events: none;\n  z-index: -1;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"])), function (props) { return props.$position === 'left' && (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    left: -", "px;\n    top: 50%;\n    transform: translateY(-50%) rotate(-90deg);\n  "], ["\n    left: -", "px;\n    top: 50%;\n    transform: translateY(-50%) rotate(-90deg);\n  "])), function () { return getFibonacciByIndex(8); }); }, function (props) { return props.$position === 'right' && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    right: -", "px;\n    top: 50%;\n    transform: translateY(-50%) rotate(90deg);\n  "], ["\n    right: -", "px;\n    top: 50%;\n    transform: translateY(-50%) rotate(90deg);\n  "])), function () { return getFibonacciByIndex(8); }); }, function (props) { return props.$position === 'top' && (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    top: -", "px;\n    left: 50%;\n    transform: translateX(-50%);\n  "], ["\n    top: -", "px;\n    left: 50%;\n    transform: translateX(-50%);\n  "])), function () { return getFibonacciByIndex(7); }); }, function (props) { return props.$position === 'bottom' && (0, styled_components_1.css)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    bottom: -", "px;\n    left: 50%;\n    transform: translateX(-50%) rotate(180deg);\n  "], ["\n    bottom: -", "px;\n    left: 50%;\n    transform: translateX(-50%) rotate(180deg);\n  "])), function () { return getFibonacciByIndex(7); }); });
// Framer motion variants
var containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 * sacred_geometry_1.PHI,
            delayChildren: 0.2,
        }
    }
};
var itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] // Easing curve based on PHI
        }
    }
};
// AwardsShowcase component implementation
var AwardsShowcase = function (_a) {
    var awards = _a.awards, title = _a.title, description = _a.description, _b = _a.displayMode, displayMode = _b === void 0 ? 'grid' : _b, _c = _a.layout, layout = _c === void 0 ? 'horizontal' : _c, _d = _a.maxVisible, maxVisible = _d === void 0 ? 6 : _d, _e = _a.showDetailsOnClick, showDetailsOnClick = _e === void 0 ? true : _e, _f = _a.animateOnHover, animateOnHover = _f === void 0 ? true : _f, _g = _a.showBotanical, showBotanical = _g === void 0 ? false : _g, className = _a.className, onAwardSelect = _a.onAwardSelect;
    var _h = React.useState(0), currentIndex = _h[0], setCurrentIndex = _h[1];
    var _j = useState(null), selectedAward = _j[0], setSelectedAward = _j[1];
    var handleNext = function () {
        setCurrentIndex(function (prev) {
            return (prev + maxVisible >= awards.length) ? 0 : prev + maxVisible;
        });
    };
    var handlePrev = function () {
        setCurrentIndex(function (prev) {
            return (prev - maxVisible < 0) ? Math.max(0, awards.length - maxVisible) : prev - maxVisible;
        });
    };
    var handleAwardClick = function (award) {
        if (showDetailsOnClick) {
            setSelectedAward((selectedAward === null || selectedAward === void 0 ? void 0 : selectedAward.id) === award.id ? null : award);
        }
        if (onAwardSelect) {
            onAwardSelect(award);
        }
    };
    var visibleAwards = displayMode === 'carousel'
        ? awards.slice(currentIndex, currentIndex + maxVisible)
        : awards;
    var renderAward = function (award, index) { return (<AwardContainer key={award.id} $isActive={(selectedAward === null || selectedAward === void 0 ? void 0 : selectedAward.id) === award.id} variants={itemVariants} initial="hidden" animate="visible" exit="hidden" custom={index} whileHover={animateOnHover ? { y: -5, transition: { duration: 0.2 } } : {}}>
      <AwardBadge_1.default {...award} onClick={function () { return handleAwardClick(award); }} animated={(selectedAward === null || selectedAward === void 0 ? void 0 : selectedAward.id) === award.id} showBotanical={showBotanical}/>
      
      {(selectedAward === null || selectedAward === void 0 ? void 0 : selectedAward.id) === award.id && award.description && (<AwardDescription>
          {award.description}
        </AwardDescription>)}
    </AwardContainer>); };
    return (<ShowcaseContainer $layout={layout} className={className}>
      {/* Title and description */}
      {(title || description) && (<Box_1.Box mb={sacred_geometry_1.SACRED_SPACING.md}>
          {title && <Heading_1.Heading level={3} mb={sacred_geometry_1.SACRED_SPACING.xs}>{title}</Heading_1.Heading>}
          {description && <Text_1.Text>{description}</Text_1.Text>}
        </Box_1.Box>)}
      
      {/* Botanical decorations */}
      {showBotanical && (<>
          <BotanicalDecoration $position="left">
            <BotanicalElement_1.BotanicalElement type="branch" size="md"/>
          </BotanicalDecoration>
          <BotanicalDecoration $position="right">
            <BotanicalElement_1.BotanicalElement type="branch" size="md"/>
          </BotanicalDecoration>
        </>)}
      
      {/* Awards display based on mode */}
      {displayMode === 'grid' && (<AwardsGrid $displayMode={displayMode} as={framer_motion_1.motion.div} variants={containerVariants} initial="hidden" animate="visible">
          {visibleAwards.map(function (award, index) { return renderAward(award, index); })}
        </AwardsGrid>)}
      
      {displayMode === 'featured' && (<AwardsGrid $displayMode={displayMode} as={framer_motion_1.motion.div} variants={containerVariants} initial="hidden" animate="visible">
          {visibleAwards.slice(0, 3).map(function (award, index) { return renderAward(award, index); })}
        </AwardsGrid>)}
      
      {displayMode === 'carousel' && (<>
          <CarouselContainer>
            <framer_motion_1.AnimatePresence mode="wait">
              <CarouselTrack key={currentIndex} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }}>
                {visibleAwards.map(function (award, index) { return renderAward(award, index); })}
              </CarouselTrack>
            </framer_motion_1.AnimatePresence>
          </CarouselContainer>
          
          {/* Navigation buttons for carousel */}
          <NavigationButtons>
            <NavButton onClick={handlePrev} aria-label="Previous awards">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </NavButton>
            <NavButton onClick={handleNext} aria-label="Next awards">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </NavButton>
          </NavigationButtons>
        </>)}
    </ShowcaseContainer>);
};
exports.default = AwardsShowcase;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
