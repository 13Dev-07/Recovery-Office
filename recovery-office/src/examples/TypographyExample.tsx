/**
 * Typography Components Example
 * 
 * This file demonstrates the usage of all typography components
 * in the Recovery Office design system and highlights the sacred
 * geometry principles applied in their implementation.
 */

import * as React from 'react';
import styled from 'styled-components';
import { 
  Typography,
  Heading,
  Text,
  Paragraph,
  Span
} from '../design-system/components/typography';
import { Box } from '../design-system/components/layout/Box';
import { Stack } from '../design-system/components/layout/Stack';
import { colors, spacing } from '../design-system/tokens';
import { PHI, PHI_INVERSE } from '../constants/sacred-geometry';

// Styled components for visualization
const StyledSection = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid ${colors.background[700] ?? 1};
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${spacing.md}px;
  color: ${colors.primary[800] ?? 1};
`;

const Description = styled.p`
  margin-bottom: ${spacing.lg}px;
  color: ${colors.text.primary};
`;

// Sample text
const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nulla, 
  eget consectetur nisl nisl eget aliquam. Nullam euismod, nisl eget aliquam ultricies.
`;

const goldenRatioParagraph = `
  The Golden Ratio (φ = 1.618...) appears in many aspects of nature and is considered
  one of the most aesthetically pleasing proportions. In the Recovery Office design system,
  we apply this sacred geometry principle to typography, spacing, and layout to create a
  harmonious and balanced visual experience.
`;

/**
 * TypographyExample component
 * 
 * Demonstrates the usage of all typography components
 */
const TypographyExample: React.FC = () => {
  return (
    <Box p={spacing.xl}>
      <Typography variant="h1" mb={spacing.xl}>Typography Components</Typography>
      <Description>
        This example showcases all typography components in the Recovery Office design system
        and how they implement sacred geometry principles for harmonious text display.
      </Description>

      {/* Typography Component Variants */}
      <StyledSection>
        <SectionTitle>Typography Component Variants</SectionTitle>
        <Description>
          The Typography component unifies all text variants with a consistent API.
          Font sizes follow the Golden Ratio scale, and spacing is based on Fibonacci numbers.
        </Description>
        
        <Stack spacing="md">
          <Typography variant="display1">Display 1 (φ³ × base)</Typography>
          <Typography variant="display2">Display 2 (φ² × base)</Typography>
          <Typography variant="h1">Heading 1 (φ² × base)</Typography>
          <Typography variant="h2">Heading 2 (φ¹ × base)</Typography>
          <Typography variant="h3">Heading 3 (φ⁰·⁷⁵ × base)</Typography>
          <Typography variant="h4">Heading 4 (φ⁰·⁵ × base)</Typography>
          <Typography variant="h5">Heading 5 (φ⁰·²⁵ × base)</Typography>
          <Typography variant="h6">Heading 6 (φ⁰ × base)</Typography>
          <Typography variant="subtitle1">Subtitle 1 - Supporting headings with medium emphasis</Typography>
          <Typography variant="subtitle2">Subtitle 2 - Supporting headings with medium emphasis but smaller</Typography>
          <Typography variant="body1">Body 1 - Standard text for general content. {loremIpsum}</Typography>
          <Typography variant="body2">Body 2 - Smaller text for secondary content. {loremIpsum}</Typography>
          <Typography variant="button">Button Text - All Caps with Medium Weight</Typography>
          <Typography variant="caption">Caption - Small text for additional information</Typography>
          <Typography variant="overline">Overline - Small caps text that sits above a heading</Typography>
          <Typography variant="quote">
            "Sacred geometry ascribes symbolic and sacred meanings to certain geometric shapes and proportions.
            It is associated with the belief that a higher power created the universe according to a geometric plan."
          </Typography>
        </Stack>
      </StyledSection>

      {/* Heading Component */}
      <StyledSection>
        <SectionTitle>Heading Component</SectionTitle>
        <Description>
          The Heading component creates headings with golden ratio proportions for font sizing
          and spacing. The component supports different variants, display styles, and decorations.
        </Description>
        
        <Box mb={spacing.lg}>
          <Heading as="h1">Heading 1 - Standard</Heading>
          <Heading as="h1" display>Heading 1 - Display Style</Heading>
          <Heading as="h1" underlined>Heading 1 - With Underline (61.8% width)</Heading>
        </Box>
        
        <Box mb={spacing.lg}>
          <Heading as="h2">Heading 2 - Standard</Heading>
          <Heading as="h2" display>Heading 2 - Display Style</Heading>
          <Heading as="h2" underlined>Heading 2 - With Underline</Heading>
        </Box>
        
        <Stack direction="horizontal" spacing="md" shouldWrap>
          <Heading as="h3">Heading 3</Heading>
          <Heading as="h4">Heading 4</Heading>
          <Heading as="h5">Heading 5</Heading>
          <Heading as="h6">Heading 6</Heading>
        </Stack>
      </StyledSection>

      {/* Text Component */}
      <StyledSection>
        <SectionTitle>Text Component</SectionTitle>
        <Description>
          The Text component is used for general text content with various styling options.
          Line heights are based on the Golden Ratio (1.618) for optimal readability.
        </Description>
        
        <Stack spacing="md">
          <Text size="xl">Extra Large Text</Text>
          <Text size="lg">Large Text</Text>
          <Text size="md">Medium Text</Text>
          <Text size="base">Base Text (Default)</Text>
          <Text size="sm">Small Text</Text>
          <Text size="xs">Extra Small Text</Text>
          
          <Box mt={spacing.md} mb={spacing.md}>
            <Text weight="bold">Bold Text</Text> {' '}
            <Text weight="semiBold">Semi-Bold Text</Text> {' '}
            <Text weight="medium">Medium Text</Text> {' '}
            <Text weight="regular">Regular Text</Text> {' '}
            <Text weight="light">Light Text</Text>
          </Box>
          
          <Box>
            <Text italic>Italic Text</Text> {' '}
            <Text truncate maxWidth="200px">This text will truncate with an ellipsis when it overflows its container</Text>
          </Box>
          
          <Box>
            <Text noOfLines={2}>
              This text will be limited to 2 lines and will truncate with an ellipsis after that.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
              aliquam ultricies, nunc nisl ultricies nulla, eget consectetur nisl nisl eget aliquam.
            </Text>
          </Box>
        </Stack>
      </StyledSection>

      {/* Paragraph Component */}
      <StyledSection>
        <SectionTitle>Paragraph Component</SectionTitle>
        <Description>
          The Paragraph component is optimized for long-form text with golden ratio-based
          optimal reading width (65 × φ characters) and sacred spacing.
        </Description>
        
        <Paragraph>
          {goldenRatioParagraph}
        </Paragraph>
        
        <Paragraph dropCap>
          The divine proportion, or Golden Ratio, is a mathematical ratio that's commonly found
          in nature, art, and design. When used in design, it creates a sense of harmony and
          natural balance that's aesthetically pleasing to the eye. The Golden Ratio can be
          expressed as approximately 1:1.618 and is often represented by the Greek letter phi (φ).
        </Paragraph>
        
        <Paragraph hyphenate>
          This paragraph demonstrates hyphenation, which creates more balanced text blocks by
          breaking words at appropriate points. Hyphenation helps create more evenly distributed
          text, especially in narrower columns, and contributes to a more harmonious overall
          appearance of the text block. The spacing between lines (leading) is also based on the
          Golden Ratio for optimal readability.
        </Paragraph>
        
        <Paragraph indent>
          This paragraph demonstrates first-line indentation, a traditional typographic technique
          that helps readers identify the start of new paragraphs. The indentation follows Fibonacci
          spacing, creating a natural and harmonious visual rhythm in the text.
        </Paragraph>
      </StyledSection>

      {/* Span Component */}
      <StyledSection>
        <SectionTitle>Span Component</SectionTitle>
        <Description>
          The Span component is used for inline text styling within other text components.
        </Description>
        
        <Paragraph>
          This paragraph contains a <Span weight="bold">bold span</Span>, an{' '}
          <Span italic>italic span</Span>, and a{' '}
          <Span underline>underlined span</Span>. It also includes a{' '}
          <Span highlight>highlighted span</Span> and a{' '}
          <Span strikethrough>strikethrough span</Span>. You can also use{' '}
          <Span variant="monospace">monospace text</Span> for code, or{' '}
          <Span variant="smallcaps">small caps text</Span> for abbreviations. For emphasis, use{' '}
          <Span variant="accent">accent text</Span> or <Span variant="serif">serif text</Span>.
        </Paragraph>
        
        <Paragraph>
          You can also combine styles, like this{' '}
          <Span weight="bold" italic color="accent.teal">bold italic teal text</Span> or this{' '}
          <Span variant="monospace" highlight underline>highlighted underlined code</Span>.
        </Paragraph>
      </StyledSection>

      {/* Sacred Geometry Visualizations */}
      <StyledSection>
        <SectionTitle>Sacred Geometry in Typography</SectionTitle>
        <Description>
          This section visualizes how the Golden Ratio and Fibonacci sequence influence our typography.
        </Description>
        
        <Box position="relative" height="200px" width="100%" bg={colors.background[200] ?? 1} p={spacing.md} mb={spacing.lg}>
          <Text>Base Font Size (16px)</Text>
          
          {/* Golden Ratio Typography Scale Visualization */}
          <Box position="absolute" top="50px" left="20px" height="100px" width={`${16 * PHI * 4}px`} bg={colors.primary[300] ?? 1} opacity={0.3}>
            <Box position="absolute" top="0" left="0" height="100%" width={`${16}px`} bg={colors.primary[500] ?? 1}>
              <Text color="white" p="2px" fontSize="10px">1×</Text>
            </Box>
            <Box position="absolute" top="0" left={`${16}px`} height="100%" width={`${16 * PHI - 16}px`} bg={colors.primary[600] ?? 1}>
              <Text color="white" p="2px" fontSize="10px">φ</Text>
            </Box>
            <Box position="absolute" top="0" left={`${16 * PHI}px`} height="100%" width={`${16 * PHI * PHI - 16 * PHI * PHI}px`} bg={colors.primary[700] ?? 1}>
              <Text color="white" p="2px" fontSize="10px">φ²</Text>
            </Box>
            <Box position="absolute" top="0" left={`${16 * PHI * PHI}px`} height="100%" width={`${16 * PHI * PHI * PHI - 16 * PHI * PHI}px`} bg={colors.primary[800] ?? 1}>
              <Text color="white" p="2px" fontSize="10px">φ³</Text>
            </Box>
          </Box>
          
          <Text position="absolute" bottom="10px" left="20px">Font sizes grow by powers of φ (1.618)</Text>
        </Box>
        
        <Box position="relative" height="100px" width="100%" bg={colors.background[200] ?? 1} p={spacing.md}>
          <Text>Line Height Ratio: 1.618 (Golden Ratio)</Text>
          
          {/* Line Height Visualization */}
          <Box position="absolute" top="40px" left="20px" height="16px" width="300px" bg={colors.secondary[500] ?? 1}>
            <Text color="white" fontSize="10px">16px Font</Text>
          </Box>
          <Box position="absolute" top="40px" left="330px" height={`${16 * PHI}px`} width="300px" border={`1px solid ${colors.secondary[500] ?? 1}`}>
            <Text fontSize="10px">~26px Line Height (16px × φ)</Text>
          </Box>
        </Box>
      </StyledSection>
    </Box>
  );
};

export default TypographyExample; 






