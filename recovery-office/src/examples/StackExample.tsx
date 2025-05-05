/**
 * Stack Component Example
 * 
 * This file demonstrates the usage of the Stack component
 * with different directions, spacing, and alignment options.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Stack } from '../design-system/components/layout/Stack';
import { Box } from '../design-system/components/layout/Box';
import { colors, spacing } from '../design-system/tokens';

// Styled components for visualization
const StyledSection = styled.div`
  padding: 20px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${spacing.md}px;
  color: ${colors.primary[800] ?? 1};
`;

const Description = styled.p`
  margin-bottom: ${spacing.lg}px;
  color: ${colors.text.primary};
`;

const Item = styled(Box)<{ number: number }>`
  padding: ${spacing.md}px;
  background-color: ${props => 
    props.number % 3 === 0 ? colors.primary[200] ?? 1 : 
    props.number % 3 === 1 ? colors.primary[300] ?? 1 : 
    colors.primary[400] ?? 1
  };
  border-radius: 4px;
  color: ${colors.text.light};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  min-width: 100px;
  min-height: 60px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.secondary[300] ?? 1};
  border-radius: 1px;
  margin: ${spacing.xs}px 0;
`;

/**
 * StackExample component
 * 
 * Demonstrates the usage of Stack with different configurations
 */
const StackExample: React.FC = () => {
  return (
    <Box p={spacing.md}>
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
        
        <Stack>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
      </StyledSection>

      {/* Horizontal Stack */}
      <StyledSection>
        <Title>Horizontal Stack</Title>
        <Description>
          Items are arranged horizontally with the default spacing (21px).
        </Description>
        
        <Stack direction="horizontal">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
      </StyledSection>

      {/* Different Spacing Options */}
      <StyledSection>
        <Title>Spacing Options</Title>
        <Description>
          The Stack component supports different spacing options based on the Fibonacci sequence.
        </Description>
        
        <Title as="h3">Extra Small Spacing (8px)</Title>
        <Stack spacing="xs" mb={spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
        
        <Title as="h3">Small Spacing (13px)</Title>
        <Stack spacing="sm" mb={spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
        
        <Title as="h3">Medium Spacing (21px - Default)</Title>
        <Stack spacing="md" mb={spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
        
        <Title as="h3">Large Spacing (34px)</Title>
        <Stack spacing="lg" mb={spacing.md}>
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
        
        <Title as="h3">Extra Large Spacing (55px)</Title>
        <Stack spacing="xl">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
      </StyledSection>

      {/* Alignment Options */}
      <StyledSection>
        <Title>Alignment Options</Title>
        <Description>
          The Stack component supports different alignment options for its children.
        </Description>
        
        <Title as="h3">Horizontal Stack with Vertical Alignment</Title>
        <Box height="150px" bg={colors.background[200] ?? 1} mb={spacing.lg} p={spacing.sm}>
          <Title as="h4">Align: flex-start</Title>
          <Stack direction="horizontal" align="flex-start" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Align: center</Title>
          <Stack direction="horizontal" align="center" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Align: flex-end</Title>
          <Stack direction="horizontal" align="flex-end">
            <Item number={1}>Item 1</Item>
            <Item number={2} height={80}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
        </Box>
        
        <Title as="h3">Horizontal Stack with Horizontal Alignment</Title>
        <Box width="100%" bg={colors.background[200] ?? 1} p={spacing.sm}>
          <Title as="h4">Justify: flex-start (Default)</Title>
          <Stack direction="horizontal" justify="flex-start" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Justify: center</Title>
          <Stack direction="horizontal" justify="center" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Justify: flex-end</Title>
          <Stack direction="horizontal" justify="flex-end" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Justify: space-between</Title>
          <Stack direction="horizontal" justify="space-between" mb={spacing.md}>
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
          
          <Title as="h4">Justify: space-around</Title>
          <Stack direction="horizontal" justify="space-around">
            <Item number={1}>Item 1</Item>
            <Item number={2}>Item 2</Item>
            <Item number={3}>Item 3</Item>
          </Stack>
        </Box>
      </StyledSection>

      {/* With Dividers */}
      <StyledSection>
        <Title>Stack with Dividers</Title>
        <Description>
          The Stack component can include dividers between items.
        </Description>
        
        <Stack divider={<Divider />} width="300px">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
        </Stack>
      </StyledSection>

      {/* Wrapping */}
      <StyledSection>
        <Title>Wrapping Stack</Title>
        <Description>
          The Stack component can wrap its children when they run out of space.
        </Description>
        
        <Stack direction="horizontal" shouldWrap width="500px">
          <Item number={1}>Item 1</Item>
          <Item number={2}>Item 2</Item>
          <Item number={3}>Item 3</Item>
          <Item number={4}>Item 4</Item>
          <Item number={5}>Item 5</Item>
          <Item number={6}>Item 6</Item>
          <Item number={7}>Item 7</Item>
          <Item number={8}>Item 8</Item>
        </Stack>
      </StyledSection>
    </Box>
  );
};

export default StackExample; 






