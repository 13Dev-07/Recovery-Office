"use strict";
/**
 * Container Component Example
 *
 * This file demonstrates the usage of the Container component
 * with different maximum widths and options.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container_1 = require("../design-system/components/layout/Container");
var Box_1 = require("../design-system/components/layout/Box");
var tokens_1 = require("../design-system/tokens");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Styled components for visualization
var StyledSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 50px;\n"], ["\n  padding: 20px;\n  margin-bottom: 50px;\n"])));
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.md, (_a = tokens_1.colors.primary[800]) !== null && _a !== void 0 ? _a : 1);
var Description = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.lg, tokens_1.colors.text.primary);
var ContentBox = (0, styled_components_1.default)(Box_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: 4px;\n  text-align: center;\n  margin-bottom: ", "px;\n  position: relative;\n  \n  &::after {\n    content: \"", "\";\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    font-size: 12px;\n    color: ", ";\n    font-style: italic;\n  }\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: 4px;\n  text-align: center;\n  margin-bottom: ", "px;\n  position: relative;\n  \n  &::after {\n    content: \"", "\";\n    position: absolute;\n    bottom: 8px;\n    right: 8px;\n    font-size: 12px;\n    color: ", ";\n    font-style: italic;\n  }\n"])), tokens_1.spacing.md, (_b = tokens_1.colors.primary[100]) !== null && _b !== void 0 ? _b : 1, tokens_1.spacing.lg, function (props) { return props.maxWidth; }, (_c = tokens_1.colors.primary[700]) !== null && _c !== void 0 ? _c : 1);
/**
 * ContainerExample component
 *
 * Demonstrates the usage of Container with different maxWidth values
 */
var ContainerExample = function () {
    var _a, _b;
    return (<Box_1.Box p={tokens_1.spacing.md}>
      <Title>Container Component</Title>
      <Description>
        The Container component provides a centered wrapper with optimal width constraints
        based on sacred geometry principles. The maximum widths follow Fibonacci-based values
        and golden ratio proportions to create harmonious, balanced layouts.
      </Description>

      {/* Full Width Container */}
      <StyledSection>
        <Title>Fluid Container (100% Width)</Title>
        <Description>
          A fluid container takes up the full width of its parent container,
          with responsive padding on the sides.
        </Description>
        
        <Container_1.Container fluid>
          <ContentBox maxWidth="fluid (100%)">
            <h3>Fluid Container</h3>
            <p>This container spans the full width of its parent</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Extra Small Container */}
      <StyledSection>
        <Title>Extra Small Container (480px)</Title>
        <Description>
          The XS container is ideal for narrow components like small dialogs or mobile-focused content.
          Width: {sacred_geometry_1.SACRED_GRID.maxWidth / 3}px (⅓ of the maximum grid width)
        </Description>
        
        <Container_1.Container maxWidth="xs">
          <ContentBox maxWidth="xs (480px)">
            <h3>XS Container</h3>
            <p>Perfect for narrow content like dialogs</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Small Container */}
      <StyledSection>
        <Title>Small Container (720px)</Title>
        <Description>
          The SM container works well for forms and focused content areas.
          Width: {sacred_geometry_1.SACRED_GRID.maxWidth / 2}px (½ of the maximum grid width)
        </Description>
        
        <Container_1.Container maxWidth="sm">
          <ContentBox maxWidth="sm (720px)">
            <h3>SM Container</h3>
            <p>Great for forms and focused content areas</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Medium Container */}
      <StyledSection>
        <Title>Medium Container (890px)</Title>
        <Description>
          The MD container is based on the golden ratio (61.8%) of the maximum width.
          Width: {Math.round(sacred_geometry_1.SACRED_GRID.maxWidth * 0.618)}px (Golden ratio of the maximum grid width)
        </Description>
        
        <Container_1.Container maxWidth="md">
          <ContentBox maxWidth="md (890px)">
            <h3>MD Container</h3>
            <p>Based on the golden ratio (61.8%) of the maximum width</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Large Container */}
      <StyledSection>
        <Title>Large Container (1282px)</Title>
        <Description>
          The LG container (default) is based on the Fibonacci ratio 89/100.
          Width: {Math.round(sacred_geometry_1.SACRED_GRID.maxWidth * 0.89)}px (89% of the maximum grid width)
        </Description>
        
        <Container_1.Container maxWidth="lg">
          <ContentBox maxWidth="lg (1282px)">
            <h3>LG Container (Default)</h3>
            <p>The default container size, based on the Fibonacci ratio 89/100</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Extra Large Container */}
      <StyledSection>
        <Title>Extra Large Container (1440px)</Title>
        <Description>
          The XL container uses the full sacred grid width.
          Width: {sacred_geometry_1.SACRED_GRID.maxWidth}px (Full sacred grid width)
        </Description>
        
        <Container_1.Container maxWidth="xl">
          <ContentBox maxWidth="xl (1440px)">
            <h3>XL Container</h3>
            <p>Uses the full sacred grid maximum width</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>

      {/* Center Content Container */}
      <StyledSection>
        <Title>Center Content Container</Title>
        <Description>
          The centerContent prop centers the content vertically and horizontally within the container.
        </Description>
        
        <Container_1.Container maxWidth="md" centerContent height={200} bg={(_a = tokens_1.colors.background[200]) !== null && _a !== void 0 ? _a : 1}>
          <Box_1.Box p={tokens_1.spacing.md} bg={(_b = tokens_1.colors.primary[100]) !== null && _b !== void 0 ? _b : 1} borderRadius="4px" textAlign="center">
            <h3>Centered Content</h3>
            <p>This content is centered both horizontally and vertically</p>
          </Box_1.Box>
        </Container_1.Container>
      </StyledSection>

      {/* Custom Width Container */}
      <StyledSection>
        <Title>Custom Width Container</Title>
        <Description>
          You can also specify a custom width for the container.
        </Description>
        
        <Container_1.Container maxWidth="650px">
          <ContentBox maxWidth="custom (650px)">
            <h3>Custom Width Container</h3>
            <p>This container has a custom width of 650px</p>
          </ContentBox>
        </Container_1.Container>
      </StyledSection>
    </Box_1.Box>);
};
exports.default = ContainerExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
