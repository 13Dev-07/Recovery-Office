/**
 * AspectRatio Component Example
 * 
 * This file demonstrates the usage of the AspectRatio component
 * with different ratios and sacred geometry configurations.
 */

import * as React from 'react';
import styled from 'styled-components';
import { AspectRatio } from '../design-system/components/layout/AspectRatio';
import { Box } from '../design-system/components/layout/Box';
import { Grid } from '../design-system/components/layout/Grid';
import { colors, spacing } from '../design-system/tokens';
import { PHI } from '../constants/sacred-geometry';

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

const ContentBox = styled(Box)<{ gradientStart?: string; gradientEnd?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.gradientStart && props.gradientEnd 
    ? `linear-gradient(${PHI * 100}deg, ${props.gradientStart} 0%, ${props.gradientEnd} 100%)`
    : colors.primary[100] ?? 1
  };
  border-radius: ${props => props.theme.radius.md}px;
  padding: ${spacing.md}px;
  color: ${colors.text.primary};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const Label = styled.h3`
  margin-bottom: ${spacing.sm}px;
  color: ${colors.primary[800] ?? 1};
`;

const Ratio = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${spacing.xs}px;
  color: ${colors.primary[700] ?? 1};
`;

const Explanation = styled.p`
  font-size: 14px;
  color: ${colors.text.secondary};
`;

/**
 * AspectRatioExample component
 * 
 * Demonstrates the usage of AspectRatio with different ratios and applications
 */
const AspectRatioExample: React.FC = () => {
  return (
    <Box p={spacing.xl}>
      <Title>AspectRatio Component</Title>
      <Description>
        The AspectRatio component maintains specific proportions for its children
        regardless of screen size. It implements sacred geometry principles by supporting
        Golden Ratio, golden rectangles, and other harmonious proportions.
      </Description>

      {/* Golden Ratio Examples */}
      <StyledSection>
        <Title>Golden Ratio Examples</Title>
        <Description>
          The Golden Ratio (1:1.618) creates a naturally harmonious rectangle. It's found
          throughout nature and is considered aesthetically pleasing to the human eye.
        </Description>
        
        <Grid templateColumns="1fr 1fr" gap={spacing.md} mb={spacing.lg}>
          {/* Golden Rectangle (Portrait) */}
          <Box>
            <Label>Golden Rectangle (Portrait)</Label>
            <Description>
              Width to height ratio of 1:1.618
            </Description>
            <AspectRatio 
              ratio="goldenRatio"
              mb={spacing.sm}
            >
              <ContentBox 
                gradientStart={colors.primary[100] ?? 1} 
                gradientEnd={colors.primary[300] ?? 1}
              >
                <Ratio>1:1.618</Ratio>
                <Explanation>
                  The perfect rectangle according to sacred geometry
                </Explanation>
              </ContentBox>
            </AspectRatio>
          </Box>
          
          {/* Golden Rectangle (Landscape) */}
          <Box>
            <Label>Golden Rectangle (Landscape)</Label>
            <Description>
              Width to height ratio of 1.618:1
            </Description>
            <AspectRatio 
              ratio="goldenRatioLandscape"
              mb={spacing.sm}
            >
              <ContentBox 
                gradientStart={colors.secondary[100] ?? 1} 
                gradientEnd={colors.secondary[300] ?? 1}
              >
                <Ratio>1.618:1</Ratio>
                <Explanation>
                  The sacred horizontal rectangle
                </Explanation>
              </ContentBox>
            </AspectRatio>
          </Box>
        </Grid>
      </StyledSection>

      {/* Common Media Ratios */}
      <StyledSection>
        <Title>Common Media Ratios</Title>
        <Description>
          AspectRatio supports common media aspect ratios for consistent display of images and videos.
        </Description>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={spacing.md}>
          {/* Square */}
          <Box>
            <Label>Square (1:1)</Label>
            <AspectRatio 
              ratio="square"
              mb={spacing.sm}
            >
              <ContentBox>
                <Ratio>1:1</Ratio>
                <Explanation>
                  Perfect square
                </Explanation>
              </ContentBox>
            </AspectRatio>
          </Box>
          
          {/* 4:3 Ratio */}
          <Box>
            <Label>Standard (4:3)</Label>
            <AspectRatio 
              ratio="4:3"
              mb={spacing.sm}
            >
              <ContentBox>
                <Ratio>4:3</Ratio>
                <Explanation>
                  Classic TV/monitor ratio
                </Explanation>
              </ContentBox>
            </AspectRatio>
          </Box>
          
          {/* 16:9 Ratio */}
          <Box>
            <Label>Widescreen (16:9)</Label>
            <AspectRatio 
              ratio="16:9"
              mb={spacing.sm}
            >
              <ContentBox>
                <Ratio>16:9</Ratio>
                <Explanation>
                  Modern widescreen format
                </Explanation>
              </ContentBox>
            </AspectRatio>
          </Box>
        </Grid>
      </StyledSection>

      {/* Custom Ratio */}
      <StyledSection>
        <Title>Custom Aspect Ratio</Title>
        <Description>
          You can also specify a custom aspect ratio using a number.
        </Description>
        
        <AspectRatio 
          ratio={1.5}
          maxWidth="600px"
          mb={spacing.sm}
        >
          <ContentBox 
            gradientStart={colors.accent.teal} 
            gradientEnd={colors.accent.lavender}
          >
            <Ratio>1.5:1</Ratio>
            <Explanation>
              Custom ratio of 1.5:1
            </Explanation>
          </ContentBox>
        </AspectRatio>
      </StyledSection>

      {/* Practical Application */}
      <StyledSection>
        <Title>Practical Applications</Title>
        <Description>
          AspectRatio is perfect for maintaining consistent proportions for images, videos,
          cards, and other media elements regardless of screen size.
        </Description>
        
        <Grid templateColumns="repeat(2, 1fr)" gap={spacing.md}>
          {/* Image Container */}
          <AspectRatio ratio="16:9">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Landscape"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '13px' 
              }}
            />
          </AspectRatio>
          
          {/* Video Placeholder */}
          <AspectRatio ratio="16:9">
            <ContentBox 
              gradientStart="#000000" 
              gradientEnd="#333333"
              style={{ color: colors.text.light }}
            >
              <Label style={{ color: 'white' }}>Video Placeholder</Label>
              <Explanation style={{ color: 'rgba(255,255,255,0.7)' }}>
                Videos maintain their aspect ratio across all screen sizes
              </Explanation>
            </ContentBox>
          </AspectRatio>
        </Grid>
      </StyledSection>
    </Box>
  );
};

export default AspectRatioExample; 






