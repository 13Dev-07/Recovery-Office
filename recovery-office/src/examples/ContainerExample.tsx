/**
 * Container Component Example
 * 
 * This file demonstrates the usage of the Container component
 * with different maximum widths and options.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Container } from '../design-system/components/layout/Container';
import { Box } from '../design-system/components/layout/Box';
import { colors, spacing } from '../design-system/tokens';
import { SACRED_GRID } from '../constants/sacred-geometry';

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

const ContentBox = styled(Box)<{ maxWidth?: string }>`
  padding: ${spacing.md}px;
  background-color: ${colors.primary[100] ?? 1};
  border-radius: 4px;
  text-align: center;
  margin-bottom: ${spacing.lg}px;
  position: relative;
  
  &::after {
    content: "${props => props.maxWidth}";
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 12px;
    color: ${colors.primary[700] ?? 1};
    font-style: italic;
  }
`;

/**
 * ContainerExample component
 * 
 * Demonstrates the usage of Container with different maxWidth values
 */
const ContainerExample: React.FC = () => {
  return (
    <Box p={spacing.md}>
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
        
        <Container fluid>
          <ContentBox maxWidth="fluid (100%)">
            <h3>Fluid Container</h3>
            <p>This container spans the full width of its parent</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Extra Small Container */}
      <StyledSection>
        <Title>Extra Small Container (480px)</Title>
        <Description>
          The XS container is ideal for narrow components like small dialogs or mobile-focused content.
          Width: {SACRED_GRID.maxWidth / 3}px (⅓ of the maximum grid width)
        </Description>
        
        <Container maxWidth="xs">
          <ContentBox maxWidth="xs (480px)">
            <h3>XS Container</h3>
            <p>Perfect for narrow content like dialogs</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Small Container */}
      <StyledSection>
        <Title>Small Container (720px)</Title>
        <Description>
          The SM container works well for forms and focused content areas.
          Width: {SACRED_GRID.maxWidth / 2}px (½ of the maximum grid width)
        </Description>
        
        <Container maxWidth="sm">
          <ContentBox maxWidth="sm (720px)">
            <h3>SM Container</h3>
            <p>Great for forms and focused content areas</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Medium Container */}
      <StyledSection>
        <Title>Medium Container (890px)</Title>
        <Description>
          The MD container is based on the golden ratio (61.8%) of the maximum width.
          Width: {Math.round(SACRED_GRID.maxWidth * 0.618)}px (Golden ratio of the maximum grid width)
        </Description>
        
        <Container maxWidth="md">
          <ContentBox maxWidth="md (890px)">
            <h3>MD Container</h3>
            <p>Based on the golden ratio (61.8%) of the maximum width</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Large Container */}
      <StyledSection>
        <Title>Large Container (1282px)</Title>
        <Description>
          The LG container (default) is based on the Fibonacci ratio 89/100.
          Width: {Math.round(SACRED_GRID.maxWidth * 0.89)}px (89% of the maximum grid width)
        </Description>
        
        <Container maxWidth="lg">
          <ContentBox maxWidth="lg (1282px)">
            <h3>LG Container (Default)</h3>
            <p>The default container size, based on the Fibonacci ratio 89/100</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Extra Large Container */}
      <StyledSection>
        <Title>Extra Large Container (1440px)</Title>
        <Description>
          The XL container uses the full sacred grid width.
          Width: {SACRED_GRID.maxWidth}px (Full sacred grid width)
        </Description>
        
        <Container maxWidth="xl">
          <ContentBox maxWidth="xl (1440px)">
            <h3>XL Container</h3>
            <p>Uses the full sacred grid maximum width</p>
          </ContentBox>
        </Container>
      </StyledSection>

      {/* Center Content Container */}
      <StyledSection>
        <Title>Center Content Container</Title>
        <Description>
          The centerContent prop centers the content vertically and horizontally within the container.
        </Description>
        
        <Container maxWidth="md" centerContent height={200} bg={colors.background[200] ?? 1}>
          <Box p={spacing.md} bg={colors.primary[100] ?? 1} borderRadius="4px" textAlign="center">
            <h3>Centered Content</h3>
            <p>This content is centered both horizontally and vertically</p>
          </Box>
        </Container>
      </StyledSection>

      {/* Custom Width Container */}
      <StyledSection>
        <Title>Custom Width Container</Title>
        <Description>
          You can also specify a custom width for the container.
        </Description>
        
        <Container maxWidth="650px">
          <ContentBox maxWidth="custom (650px)">
            <h3>Custom Width Container</h3>
            <p>This container has a custom width of 650px</p>
          </ContentBox>
        </Container>
      </StyledSection>
    </Box>
  );
};

export default ContainerExample; 






