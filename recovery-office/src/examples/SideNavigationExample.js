"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Import components
var navigation_1 = require("../design-system/components/navigation");
var Section_1 = require("../design-system/components/layout/Section");
/**
 * SideNavigationExample Component
 *
 * This component demonstrates the SideNavigation component in various configurations,
 * showcasing its flexibility and adherence to sacred geometry principles.
 */
var SideNavigationExample = function () {
    // Sample navigation items
    var mainNavItems = [
        {
            label: 'Home',
            path: '/',
            isActive: true,
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)
        },
        {
            label: 'Services',
            path: '/services',
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>),
            subItems: [
                {
                    label: 'Recovery Consultation',
                    path: '/services/recovery-consultation'
                },
                {
                    label: 'Therapeutic Sessions',
                    path: '/services/therapeutic-sessions'
                },
                {
                    label: 'Botanical Therapy',
                    path: '/services/botanical-therapy'
                }
            ]
        },
        {
            label: 'About Us',
            path: '/about',
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)
        },
        {
            label: 'Testimonials',
            path: '/testimonials',
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3a2 2 0 012 2v4a2 2 0 01-2 2h-2l-3 3v-3H8a2 2 0 01-2-2V5a2 2 0 012-2h9zM8 17h2v3l3-3h4a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)
        },
        {
            label: 'Contact',
            path: '/contact',
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)
        }
    ];
    // Options for different SideNavigation variants
    var variants = ['light', 'primary', 'secondary', 'dark', 'transparent'];
    var botanicalTypes = ['oliveBranch', 'flowerOfLife', 'vesicaPiscis', 'fibonacciSpiral', 'oliveLeaf'];
    return (<Section_1.Section variant="light" fullWidth>
      <Section_1.SectionTitle title="SideNavigation Component" subtitle="A showcase of different SideNavigation configurations with sacred geometry proportions" align="center" size="large"/>
      
      <Section_1.SectionContent>
        <ExamplesGrid>
          {/* Basic SideNavigation */}
          <ExampleCard>
            <ExampleTitle>Basic SideNavigation</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems.slice(0, 4)} title="Main Navigation"/>
            <Description>
              Default configuration with title and botanical decoration.
            </Description>
          </ExampleCard>
          
          {/* With Dividers */}
          <ExampleCard>
            <ExampleTitle>With Dividers</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems.slice(0, 4)} title="Main Navigation" withDividers/>
            <Description>
              SideNavigation with dividers between items for better visual separation.
            </Description>
          </ExampleCard>
          
          {/* Compact Style */}
          <ExampleCard>
            <ExampleTitle>Compact Style</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems} title="Main Navigation" compact/>
            <Description>
              Compact variant with reduced spacing, suitable for dense UIs.
            </Description>
          </ExampleCard>
          
          {/* Collapsible Navigation */}
          <ExampleCard>
            <ExampleTitle>Collapsible Navigation</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems} title="Collapsible Nav" collapsible initiallyCollapsed={false}/>
            <Description>
              Collapsible navigation with toggle button. Try clicking the + icon.
            </Description>
          </ExampleCard>
          
          {/* Without Animation */}
          <ExampleCard>
            <ExampleTitle>Without Animation</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems.slice(0, 4)} title="Static Navigation" animated={false}/>
            <Description>
              Static navigation without animation effects.
            </Description>
          </ExampleCard>
          
          {/* Without Botanical */}
          <ExampleCard>
            <ExampleTitle>Without Botanical</ExampleTitle>
            <navigation_1.SideNavigation items={mainNavItems.slice(0, 4)} title="Clean Navigation" withBotanical={false}/>
            <Description>
              Clean navigation without botanical decorations.
            </Description>
          </ExampleCard>
          
          {/* Different Variants */}
          <ExampleCard>
            <ExampleTitle>Color Variants</ExampleTitle>
            <VariantsContainer>
              {variants.map(function (variant) { return (<VariantItem key={variant}>
                  <VariantLabel>{variant}</VariantLabel>
                  <navigation_1.SideNavigation items={mainNavItems.slice(0, 2)} variant={variant} compact/>
                </VariantItem>); })}
            </VariantsContainer>
            <Description>
              Different color variants to match various design requirements.
            </Description>
          </ExampleCard>
          
          {/* Different Botanical Types */}
          <ExampleCard>
            <ExampleTitle>Botanical Types</ExampleTitle>
            <VariantsContainer>
              {botanicalTypes.map(function (type) { return (<VariantItem key={type}>
                  <VariantLabel>{type}</VariantLabel>
                  <navigation_1.SideNavigation items={mainNavItems.slice(0, 2)} botanicalType={type} compact/>
                </VariantItem>); })}
            </VariantsContainer>
            <Description>
              Various botanical decoration types for different aesthetic feels.
            </Description>
          </ExampleCard>
        </ExamplesGrid>
      </Section_1.SectionContent>
    </Section_1.Section>);
};
// Styled components
var ExamplesGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: ", "px; // 21px\n  padding: ", "px 0; // 13px\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: ", "px; // 21px\n  padding: ", "px 0; // 13px\n"])), getFibonacciByIndex(8), getFibonacciByIndex(7));
var ExampleCard = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  box-shadow: ", ";\n  padding: ", "px; // 13px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n"], ["\n  background-color: ", ";\n  border-radius: ", "px; // 5px\n  box-shadow: ", ";\n  padding: ", "px; // 13px\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 8px\n"])), function (props) { return props.theme.colors.background.light; }, getFibonacciByIndex(5), function (props) { return props.theme.shadows.sm; }, getFibonacciByIndex(7), getFibonacciByIndex(6));
var ExampleTitle = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", "px; // 13px\n  margin: 0 0 ", "px 0; // 5px\n  font-weight: 600;\n  color: ", ";\n"], ["\n  font-size: ", "px; // 13px\n  margin: 0 0 ", "px 0; // 5px\n  font-weight: 600;\n  color: ", ";\n"])), getFibonacciByIndex(7), getFibonacciByIndex(5), function (props) { return props.theme.colors.text.primary; });
var Description = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px; // 8px\n  color: ", ";\n  margin: ", "px 0 0 0; // 5px top margin\n  line-height: 1.5;\n"], ["\n  font-size: ", "px; // 8px\n  color: ", ";\n  margin: ", "px 0 0 0; // 5px top margin\n  line-height: 1.5;\n"])), getFibonacciByIndex(6), function (props) { return props.theme.colors.text.secondary; }, getFibonacciByIndex(5));
var VariantsContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 13px\n"])), getFibonacciByIndex(7));
var VariantItem = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px; // 5px\n"])), getFibonacciByIndex(5));
var VariantLabel = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: ", "px; // 8px\n  color: ", ";\n  font-weight: 500;\n"], ["\n  font-size: ", "px; // 8px\n  color: ", ";\n  font-weight: 500;\n"])), getFibonacciByIndex(6), function (props) { return props.theme.colors.text.secondary; });
exports.default = SideNavigationExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
