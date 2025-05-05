/**
 * GoldenSection Component Example
 * 
 * This file demonstrates the usage of the GoldenSection component
 * with both horizontal and vertical layouts.
 */

import * as React from 'react';
import { Box, GoldenSection } from '../design-system/components/layout';
import { SACRED_SPACING, PHI_INVERSE } from '../constants/sacred-geometry';
import { theme } from '../design-system/theme';

// Component to avoid styled-components issues
const SectionContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: '20px', marginBottom: '50px' }}>
    {children}
  </div>
);

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{ 
    fontFamily: "'Playfair Display', serif", 
    marginBottom: `${SACRED_SPACING.md}px`,
    color: theme.colors.primary[800] ?? 1
  }}>
    {children}
  </h2>
);

const Description: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ 
    marginBottom: `${SACRED_SPACING.lg}px`,
    color: theme.colors.text.primary
  }}>
    {children}
  </p>
);

interface ContentBoxProps {
  isPrimary?: boolean;
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ isPrimary, children }) => (
  <div style={{
    padding: `${SACRED_SPACING.md}px`,
    backgroundColor: isPrimary ? theme.colors.primary[100] ?? 1 : theme.colors.secondary[100] ?? 1,
    borderRadius: `${theme.radius.md}px`,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }}>
    {children}
  </div>
);

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{ 
    marginBottom: `${SACRED_SPACING.sm}px`,
    color: theme.colors.primary[700] ?? 1
  }}>
    {children}
  </h3>
);

const Percentage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ 
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: `${SACRED_SPACING.xs}px`,
    color: theme.colors.primary[800] ?? 1
  }}>
    {children}
  </div>
);

const Explanation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ 
    fontSize: '14px',
    color: theme.colors.text.secondary
  }}>
    {children}
  </p>
);

/**
 * GoldenSectionExample component
 * 
 * Demonstrates the usage of GoldenSection in both horizontal and vertical layouts
 */
const GoldenSectionExample: React.FC = () => {
  return (
    <SectionContainer>
      <Title>GoldenSection Component</Title>
      <Description>
        The GoldenSection component divides space according to the Golden Ratio (Φ ≈ 1.618),
        creating naturally harmonious layouts. The major section takes up 61.8% (Φ⁻¹) of the space, 
        while the minor section takes up 38.2% (1-Φ⁻¹).
      </Description>

      {/* Horizontal Golden Section */}
      <SectionContainer>
        <Title>Horizontal Golden Section</Title>
        <Description>
          In this example, the width is divided according to the Golden Ratio, 
          with the primary section taking up 61.8% of the width.
        </Description>
        
        <div style={{ height: '300px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%`, height: '100%' }}>
            <ContentBox isPrimary>
              <Label>Primary Section</Label>
              <Percentage>{(PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the golden ratio (61.8%) of the width</Explanation>
            </ContentBox>
            
            <ContentBox>
              <Label>Secondary Section</Label>
              <Percentage>{((1 - PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the remaining 38.2% of the width</Explanation>
            </ContentBox>
          </div>
        </div>
      </SectionContainer>

      {/* Vertical Golden Section */}
      <SectionContainer>
        <Title>Vertical Golden Section</Title>
        <Description>
          In this example, the height is divided according to the Golden Ratio, 
          with the primary section taking up 61.8% of the height.
        </Description>
        
        <div style={{ height: '500px' }}>
          <div style={{ display: 'grid', gridTemplateRows: `${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%`, height: '100%' }}>
            <ContentBox isPrimary>
              <Label>Primary Section</Label>
              <Percentage>{(PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the golden ratio (61.8%) of the height</Explanation>
            </ContentBox>
            
            <ContentBox>
              <Label>Secondary Section</Label>
              <Percentage>{((1 - PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the remaining 38.2% of the height</Explanation>
            </ContentBox>
          </div>
        </div>
      </SectionContainer>

      {/* Reversed Golden Section */}
      <SectionContainer>
        <Title>Reversed Golden Section</Title>
        <Description>
          In this example, the order is reversed. The smaller section (38.2%) comes first,
          followed by the larger section (61.8%).
        </Description>
        
        <div style={{ height: '300px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `${(1 - PHI_INVERSE) * 100}% ${PHI_INVERSE * 100}%`, height: '100%' }}>
            <ContentBox>
              <Label>Secondary Section (First)</Label>
              <Percentage>{((1 - PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
              <Explanation>This section is now displayed first</Explanation>
            </ContentBox>
            
            <ContentBox isPrimary>
              <Label>Primary Section (Second)</Label>
              <Percentage>{(PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section is now displayed second</Explanation>
            </ContentBox>
          </div>
        </div>
      </SectionContainer>
    </SectionContainer>
  );
};

export default GoldenSectionExample; 






