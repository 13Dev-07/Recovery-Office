"use strict";
/**
 * Services Component
 *
 * A feature section for displaying services in a grid layout using Fibonacci-based spacing
 * and sacred geometry proportions. The component supports various display options and
 * integrates botanical elements for visual harmony.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Box_1 = require("../layout/Box");
var Grid_1 = require("../layout/Grid");
var Heading_1 = require("../typography/Heading");
var Text_1 = require("../typography/Text");
var Button_1 = require("../button/Button");
var Section_1 = require("../layout/Section");
var Card_1 = require("../data-display/Card");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
var ServicesSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"])), function (props) { return props.$backgroundColor || 'transparent'; }, (0, utils_1.getFibonacciByIndex)(8));
var ServiceGrid = (0, styled_components_1.default)(Grid_1.Grid)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* \n   * Using Fibonacci-based spacing between grid items\n   * and ensuring the grid follows sacred geometry proportions\n   */\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    gap: ", "px;\n  }\n"], ["\n  /* \n   * Using Fibonacci-based spacing between grid items\n   * and ensuring the grid follows sacred geometry proportions\n   */\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    gap: ", "px;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(7), function (props) { return props.theme.breakpoints.md; }, (0, utils_1.getFibonacciByIndex)(5));
var ServiceCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  border-top: ", ";\n  \n  /* Card dimensions follow golden ratio */\n  padding: ", "px;\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"], ["\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  border-top: ", ";\n  \n  /* Card dimensions follow golden ratio */\n  padding: ", "px;\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"])), sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, function (props) { return props.$accentColor ? "3px solid ".concat(props.$accentColor) : 'none'; }, (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(3));
var IconContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ", "px;\n  \n  /* Icon container uses golden ratio dimensions */\n  width: ", "px;\n  height: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ", "px;\n  \n  /* Icon container uses golden ratio dimensions */\n  width: ", "px;\n  height: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(5), (0, utils_1.getFibonacciByIndex)(7), (0, utils_1.getFibonacciByIndex)(7));
var ServiceTitle = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  \n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n"], ["\n  margin-bottom: ", "px;\n  \n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n"])), (0, utils_1.getFibonacciByIndex)(4), sacred_geometry_1.PHI);
var ServiceDescription = (0, styled_components_1.default)(Text_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  /* Apply golden ratio to opacity for visual harmony */\n  opacity: ", ";\n  margin-bottom: ", "px;\n"], ["\n  /* Apply golden ratio to opacity for visual harmony */\n  opacity: ", ";\n  margin-bottom: ", "px;\n"])), sacred_geometry_1.PHI_INVERSE + 0.2, (0, utils_1.getFibonacciByIndex)(5));
var CTAContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(7));
/**
 * Services component for displaying service offerings in various layouts,
 * following sacred geometry principles for spacing and proportions.
 */
var Services = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, services = _a.services, _b = _a.displayStyle, displayStyle = _b === void 0 ? 'grid' : _b, _c = _a.columns, columns = _c === void 0 ? 3 : _c, backgroundColor = _a.backgroundColor, _d = _a.animated, animated = _d === void 0 ? true : _d, botanical = _a.botanical, cta = _a.cta, className = _a.className, style = _a.style;
    // Calculate optimal grid columns using Fibonacci sequence
    var getGridColumns = function () {
        // Default to specified columns
        if (columns)
            return columns;
        // If not specified, calculate based on number of services
        if (services.length <= 2)
            return services.length;
        if (services.length <= 4)
            return 2;
        return 3; // Default to 3 columns for larger sets
    };
    // Function to render a service item
    var renderServiceItem = function (service, index) {
        var content = (<ServiceCard $accentColor={service.accentColor}>
        {service.icon && (<IconContainer>
            {service.icon}
          </IconContainer>)}
        
        <ServiceTitle variant="h4">{service.title}</ServiceTitle>
        <ServiceDescription variant="body1">{service.description}</ServiceDescription>
        
        {service.content}
        
        {service.url && (<Box_1.Box mt={(0, utils_1.getFibonacciByIndex)(4)}>
            <Button_1.Button variant="ghost" href={service.url} rightIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3L14 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}>
              Learn more
            </Button_1.Button>
          </Box_1.Box>)}
        
        {service.botanicalAccent && service.botanicalAccent !== 'none' && (<Box_1.Box position="absolute" bottom={(0, utils_1.getFibonacciByIndex)(3)} right={(0, utils_1.getFibonacciByIndex)(3)} opacity={0.1}>
            <botanical_1.BotanicalElement type={service.botanicalAccent} size="sm"/>
          </Box_1.Box>)}
      </ServiceCard>);
        // Wrap with animation if enabled
        if (animated) {
            return (<animation_1.ScaleFade key={service.id} delay={0.1 * index}>
          {content}
        </animation_1.ScaleFade>);
        }
        return <div key={service.id}>{content}</div>;
    };
    // Render services in a grid layout
    var renderGrid = function () {
        return (<ServiceGrid $columns={getGridColumns()}>
        {services.map(function (service, index) { return renderServiceItem(service, index); })}
      </ServiceGrid>);
    };
    // Render services in a featured layout
    var renderFeatured = function () {
        return (<Box_1.Box display="flex" flexDirection="column" gap={(0, utils_1.getFibonacciByIndex)(7)}>
        {services.map(function (service, index) {
                var isEven = index % 2 === 0;
                return (<Box_1.Box key={service.id} display="flex" flexDirection={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }} gap={(0, utils_1.getFibonacciByIndex)(6)}>
              <Box_1.Box flex={sacred_geometry_1.PHI_INVERSE}>
                {renderServiceItem(service, index)}
              </Box_1.Box>
              <Box_1.Box flex={1 - sacred_geometry_1.PHI_INVERSE} display="flex" alignItems="center" justifyContent="center">
                {service.icon && <div style={{ width: '100%', height: '100%', maxHeight: '300px' }}>{service.icon}</div>}
              </Box_1.Box>
            </Box_1.Box>);
            })}
      </Box_1.Box>);
    };
    // Render services in an alternating layout
    var renderAlternating = function () {
        return (<Box_1.Box display="flex" flexDirection="column" gap={(0, utils_1.getFibonacciByIndex)(7)}>
        {services.map(function (service, index) { return (<Box_1.Box key={service.id} borderLeft={service.accentColor ? "3px solid ".concat(service.accentColor) : undefined} pl={service.accentColor ? (0, utils_1.getFibonacciByIndex)(5) : 0} py={(0, utils_1.getFibonacciByIndex)(4)}>
            {renderServiceItem(service, index)}
          </Box_1.Box>); })}
      </Box_1.Box>);
    };
    // Render services based on display style
    var renderServices = function () {
        switch (displayStyle) {
            case 'featured':
                return renderFeatured();
            case 'alternating':
                return renderAlternating();
            case 'grid':
            default:
                return renderGrid();
        }
    };
    return (<ServicesSection $backgroundColor={backgroundColor} className={className} style={style}>
      {botanical && (<botanical_1.BotanicalElement type={botanical.type} position={botanical.position} size={botanical.size} opacity={botanical.opacity}/>)}
      
      <Section_1.SectionTitle title={title} subtitle={subtitle} centered animated={animated}/>
      
      {renderServices()}
      
      {cta && (<CTAContainer>
          <Button_1.Button variant={cta.variant || 'primary'} href={cta.url}>
            {cta.label}
          </Button_1.Button>
        </CTAContainer>)}
    </ServicesSection>);
};
exports.default = Services;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
