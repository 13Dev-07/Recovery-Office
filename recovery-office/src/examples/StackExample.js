"use strict";
/**
 * Stack Component Example
 *
 * This file demonstrates the usage of the Stack component
 * with different directions, spacing, and alignment options.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Stack_1 = require("../design-system/components/layout/Stack");
var Box_1 = require("../design-system/components/layout/Box");
var tokens_1 = require("../design-system/tokens");
// Styled components for visualization
var StyledSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 50px;\n"], ["\n  padding: 20px;\n  margin-bottom: 50px;\n"])));
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.md, (_a = tokens_1.colors.primary[800]) !== null && _a !== void 0 ? _a : 1);
var Description = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.lg, tokens_1.colors.text.primary);
var Item = (0, styled_components_1.default)(Box_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: 4px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-weight: bold;\n  min-width: 100px;\n  min-height: 60px;\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: 4px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-weight: bold;\n  min-width: 100px;\n  min-height: 60px;\n"])), tokens_1.spacing.md, function (props) {
    var _a, _b, _c;
    return props.number % 3 === 0 ? (_a = tokens_1.colors.primary[200]) !== null && _a !== void 0 ? _a : 1 :
        props.number % 3 === 1 ? (_b = tokens_1.colors.primary[300]) !== null && _b !== void 0 ? _b : 1 :
            (_c = tokens_1.colors.primary[400]) !== null && _c !== void 0 ? _c : 1;
}, tokens_1.colors.text.light);
var Divider = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n  border-radius: 1px;\n  margin: ", "px 0;\n"], ["\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n  border-radius: 1px;\n  margin: ", "px 0;\n"])), (_b = tokens_1.colors.secondary[300]) !== null && _b !== void 0 ? _b : 1, tokens_1.spacing.xs);
/**
 * StackExample component
 *
 * Demonstrates the usage of Stack with different configurations
 */
var StackExample = function () {
    var _a, _b;
    return (<Box_1.Box p={tokens_1.spacing.md}>
      <Title>Stack Component</Title>
      <Description>
        The Stack component arranges its children in a vertical or horizontal stack
        with spacing based on Fibonacci sequence values for a harmonious visual rhythm.
      </Description>

      {/* Vertical Stack (Default) */}
      <StyledSection>
        <Title>Vertical Stack (Default)</Title>
        <Description>
          Items are stacked vertically with the default spacing (21px).
        </Description>
        
        <Stack_1.Stack>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
      </StyledSection>

      {/* Horizontal Stack */}
      <StyledSection>
        <Title>Horizontal Stack</Title>
        <Description>
          Items are arranged horizontally with the default spacing (21px).
        </Description>
        
        <Stack_1.Stack direction="horizontal">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
      </StyledSection>

      {/* Different Spacing Options */}
      <StyledSection>
        <Title>Spacing Options</Title>
        <Description>
          The Stack component supports different spacing options based on the Fibonacci sequence.
        </Description>
        
        <Title as="h3">Extra Small Spacing (8px)</Title>
        <Stack_1.Stack spacing="xs" mb={tokens_1.spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
        
        <Title as="h3">Small Spacing (13px)</Title>
        <Stack_1.Stack spacing="sm" mb={tokens_1.spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
        
        <Title as="h3">Medium Spacing (21px - Default)</Title>
        <Stack_1.Stack spacing="md" mb={tokens_1.spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
        
        <Title as="h3">Large Spacing (34px)</Title>
        <Stack_1.Stack spacing="lg" mb={tokens_1.spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
        
        <Title as="h3">Extra Large Spacing (55px)</Title>
        <Stack_1.Stack spacing="xl">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
      </StyledSection>

      {/* Alignment Options */}
      <StyledSection>
        <Title>Alignment Options</Title>
        <Description>
          The Stack component supports different alignment options for its children.
        </Description>
        
        <Title as="h3">Horizontal Stack with Vertical Alignment</Title>
        <Box_1.Box height="150px" bg={(_a = tokens_1.colors.background[200]) !== null && _a !== void 0 ? _a : 1} mb={tokens_1.spacing.lg} p={tokens_1.spacing.sm}>
          <Title as="h4">Align: flex-start</Title>
          <Stack_1.Stack direction="horizontal" align="flex-start" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Align: center</Title>
          <Stack_1.Stack direction="horizontal" align="center" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Align: flex-end</Title>
          <Stack_1.Stack direction="horizontal" align="flex-end">
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
        </Box_1.Box>
        
        <Title as="h3">Horizontal Stack with Horizontal Alignment</Title>
        <Box_1.Box width="100%" bg={(_b = tokens_1.colors.background[200]) !== null && _b !== void 0 ? _b : 1} p={tokens_1.spacing.sm}>
          <Title as="h4">Justify: flex-start (Default)</Title>
          <Stack_1.Stack direction="horizontal" justify="flex-start" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Justify: center</Title>
          <Stack_1.Stack direction="horizontal" justify="center" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Justify: flex-end</Title>
          <Stack_1.Stack direction="horizontal" justify="flex-end" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Justify: space-between</Title>
          <Stack_1.Stack direction="horizontal" justify="space-between" mb={tokens_1.spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
          
          <Title as="h4">Justify: space-around</Title>
          <Stack_1.Stack direction="horizontal" justify="space-around">
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack_1.Stack>
        </Box_1.Box>
      </StyledSection>

      {/* With Dividers */}
      <StyledSection>
        <Title>Stack with Dividers</Title>
        <Description>
          The Stack component can include dividers between items.
        </Description>
        
        <Stack_1.Stack divider={<Divider />} width="300px">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack_1.Stack>
      </StyledSection>

      {/* Wrapping */}
      <StyledSection>
        <Title>Wrapping Stack</Title>
        <Description>
          The Stack component can wrap its children when they run out of space.
        </Description>
        
        <Stack_1.Stack direction="horizontal" shouldWrap width="500px">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
          <Item number={4}>Item 4</Item>
          <Item number={5}>Item 5</Item>
          <Item number={6}>Item 6</Item>
          <Item number={7}>Item 7</Item>
          <Item number={8}>Item 8</Item>
        </Stack_1.Stack>
      </StyledSection>
    </Box_1.Box>);
};
exports.default = StackExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
