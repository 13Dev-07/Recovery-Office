"use strict";
/**
 * Typography Components Example
 *
 * This file demonstrates the usage of all typography components
 * in the Recovery Office design system and highlights the sacred
 * geometry principles applied in their implementation.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var typography_1 = require("../design-system/components/typography");
var Box_1 = require("../design-system/components/layout/Box");
var Stack_1 = require("../design-system/components/layout/Stack");
var tokens_1 = require("../design-system/tokens");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Styled components for visualization
var StyledSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 50px;\n  border-bottom: 1px solid ", ";\n"], ["\n  padding: 20px;\n  margin-bottom: 50px;\n  border-bottom: 1px solid ", ";\n"])), (_a = tokens_1.colors.background[700]) !== null && _a !== void 0 ? _a : 1);
var SectionTitle = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.md, (_b = tokens_1.colors.primary[800]) !== null && _b !== void 0 ? _b : 1);
var Description = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.lg, tokens_1.colors.text.primary);
// Sample text
var loremIpsum = "\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n  Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nulla, \n  eget consectetur nisl nisl eget aliquam. Nullam euismod, nisl eget aliquam ultricies.\n";
var goldenRatioParagraph = "\n  The Golden Ratio (\u03C6 = 1.618...) appears in many aspects of nature and is considered\n  one of the most aesthetically pleasing proportions. In the Recovery Office design system,\n  we apply this sacred geometry principle to typography, spacing, and layout to create a\n  harmonious and balanced visual experience.\n";
/**
 * TypographyExample component
 *
 * Demonstrates the usage of all typography components
 */
var TypographyExample = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (<Box_1.Box p={tokens_1.spacing.xl}>
      <typography_1.Typography variant="h1" mb={tokens_1.spacing.xl}>Typography Components</typography_1.Typography>
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
        
        <Stack_1.Stack spacing="md">
          <typography_1.Typography variant="display1">Display 1 (φ³ × base)</typography_1.Typography>
          <typography_1.Typography variant="display2">Display 2 (φ² × base)</typography_1.Typography>
          <typography_1.Typography variant="h1">Heading 1 (φ² × base)</typography_1.Typography>
          <typography_1.Typography variant="h2">Heading 2 (φ¹ × base)</typography_1.Typography>
          <typography_1.Typography variant="h3">Heading 3 (φ⁰·⁷⁵ × base)</typography_1.Typography>
          <typography_1.Typography variant="h4">Heading 4 (φ⁰·⁵ × base)</typography_1.Typography>
          <typography_1.Typography variant="h5">Heading 5 (φ⁰·²⁵ × base)</typography_1.Typography>
          <typography_1.Typography variant="h6">Heading 6 (φ⁰ × base)</typography_1.Typography>
          <typography_1.Typography variant="subtitle1">Subtitle 1 - Supporting headings with medium emphasis</typography_1.Typography>
          <typography_1.Typography variant="subtitle2">Subtitle 2 - Supporting headings with medium emphasis but smaller</typography_1.Typography>
          <typography_1.Typography variant="body1">Body 1 - Standard text for general content. {loremIpsum}</typography_1.Typography>
          <typography_1.Typography variant="body2">Body 2 - Smaller text for secondary content. {loremIpsum}</typography_1.Typography>
          <typography_1.Typography variant="button">Button Text - All Caps with Medium Weight</typography_1.Typography>
          <typography_1.Typography variant="caption">Caption - Small text for additional information</typography_1.Typography>
          <typography_1.Typography variant="overline">Overline - Small caps text that sits above a heading</typography_1.Typography>
          <typography_1.Typography variant="quote">
            "Sacred geometry ascribes symbolic and sacred meanings to certain geometric shapes and proportions.
            It is associated with the belief that a higher power created the universe according to a geometric plan."
          </typography_1.Typography>
        </Stack_1.Stack>
      </StyledSection>

      {/* Heading Component */}
      <StyledSection>
        <SectionTitle>Heading Component</SectionTitle>
        <Description>
          The Heading component creates headings with golden ratio proportions for font sizing
          and spacing. The component supports different variants, display styles, and decorations.
        </Description>
        
        <Box_1.Box mb={tokens_1.spacing.lg}>
          <typography_1.Heading as="h1">Heading 1 - Standard</typography_1.Heading>
          <typography_1.Heading as="h1" display>Heading 1 - Display Style</typography_1.Heading>
          <typography_1.Heading as="h1" underlined>Heading 1 - With Underline (61.8% width)</typography_1.Heading>
        </Box_1.Box>
        
        <Box_1.Box mb={tokens_1.spacing.lg}>
          <typography_1.Heading as="h2">Heading 2 - Standard</typography_1.Heading>
          <typography_1.Heading as="h2" display>Heading 2 - Display Style</typography_1.Heading>
          <typography_1.Heading as="h2" underlined>Heading 2 - With Underline</typography_1.Heading>
        </Box_1.Box>
        
        <Stack_1.Stack direction="horizontal" spacing="md" shouldWrap>
          <typography_1.Heading as="h3">Heading 3</typography_1.Heading>
          <typography_1.Heading as="h4">Heading 4</typography_1.Heading>
          <typography_1.Heading as="h5">Heading 5</typography_1.Heading>
          <typography_1.Heading as="h6">Heading 6</typography_1.Heading>
        </Stack_1.Stack>
      </StyledSection>

      {/* Text Component */}
      <StyledSection>
        <SectionTitle>Text Component</SectionTitle>
        <Description>
          The Text component is used for general text content with various styling options.
          Line heights are based on the Golden Ratio (1.618) for optimal readability.
        </Description>
        
        <Stack_1.Stack spacing="md">
          <typography_1.Text size="xl">Extra Large Text</typography_1.Text>
          <typography_1.Text size="lg">Large Text</typography_1.Text>
          <typography_1.Text size="md">Medium Text</typography_1.Text>
          <typography_1.Text size="base">Base Text (Default)</typography_1.Text>
          <typography_1.Text size="sm">Small Text</typography_1.Text>
          <typography_1.Text size="xs">Extra Small Text</typography_1.Text>
          
          <Box_1.Box mt={tokens_1.spacing.md} mb={tokens_1.spacing.md}>
            <typography_1.Text weight="bold">Bold Text</typography_1.Text> {' '}
            <typography_1.Text weight="semiBold">Semi-Bold Text</typography_1.Text> {' '}
            <typography_1.Text weight="medium">Medium Text</typography_1.Text> {' '}
            <typography_1.Text weight="regular">Regular Text</typography_1.Text> {' '}
            <typography_1.Text weight="light">Light Text</typography_1.Text>
          </Box_1.Box>
          
          <Box_1.Box>
            <typography_1.Text italic>Italic Text</typography_1.Text> {' '}
            <typography_1.Text truncate maxWidth="200px">This text will truncate with an ellipsis when it overflows its container</typography_1.Text>
          </Box_1.Box>
          
          <Box_1.Box>
            <typography_1.Text noOfLines={2}>
              This text will be limited to 2 lines and will truncate with an ellipsis after that.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
              aliquam ultricies, nunc nisl ultricies nulla, eget consectetur nisl nisl eget aliquam.
            </typography_1.Text>
          </Box_1.Box>
        </Stack_1.Stack>
      </StyledSection>

      {/* Paragraph Component */}
      <StyledSection>
        <SectionTitle>Paragraph Component</SectionTitle>
        <Description>
          The Paragraph component is optimized for long-form text with golden ratio-based
          optimal reading width (65 × φ characters) and sacred spacing.
        </Description>
        
        <typography_1.Paragraph>
          {goldenRatioParagraph}
        </typography_1.Paragraph>
        
        <typography_1.Paragraph dropCap>
          The divine proportion, or Golden Ratio, is a mathematical ratio that's commonly found
          in nature, art, and design. When used in design, it creates a sense of harmony and
          natural balance that's aesthetically pleasing to the eye. The Golden Ratio can be
          expressed as approximately 1:1.618 and is often represented by the Greek letter phi (φ).
        </typography_1.Paragraph>
        
        <typography_1.Paragraph hyphenate>
          This paragraph demonstrates hyphenation, which creates more balanced text blocks by
          breaking words at appropriate points. Hyphenation helps create more evenly distributed
          text, especially in narrower columns, and contributes to a more harmonious overall
          appearance of the text block. The spacing between lines (leading) is also based on the
          Golden Ratio for optimal readability.
        </typography_1.Paragraph>
        
        <typography_1.Paragraph indent>
          This paragraph demonstrates first-line indentation, a traditional typographic technique
          that helps readers identify the start of new paragraphs. The indentation follows Fibonacci
          spacing, creating a natural and harmonious visual rhythm in the text.
        </typography_1.Paragraph>
      </StyledSection>

      {/* Span Component */}
      <StyledSection>
        <SectionTitle>Span Component</SectionTitle>
        <Description>
          The Span component is used for inline text styling within other text components.
        </Description>
        
        <typography_1.Paragraph>
          This paragraph contains a <typography_1.Span weight="bold">bold span</typography_1.Span>, an{' '}
          <typography_1.Span italic>italic span</typography_1.Span>, and a{' '}
          <typography_1.Span underline>underlined span</typography_1.Span>. It also includes a{' '}
          <typography_1.Span highlight>highlighted span</typography_1.Span> and a{' '}
          <typography_1.Span strikethrough>strikethrough span</typography_1.Span>. You can also use{' '}
          <typography_1.Span variant="monospace">monospace text</typography_1.Span> for code, or{' '}
          <typography_1.Span variant="smallcaps">small caps text</typography_1.Span> for abbreviations. For emphasis, use{' '}
          <typography_1.Span variant="accent">accent text</typography_1.Span> or <typography_1.Span variant="serif">serif text</typography_1.Span>.
        </typography_1.Paragraph>
        
        <typography_1.Paragraph>
          You can also combine styles, like this{' '}
          <typography_1.Span weight="bold" italic color="accent.teal">bold italic teal text</typography_1.Span> or this{' '}
          <typography_1.Span variant="monospace" highlight underline>highlighted underlined code</typography_1.Span>.
        </typography_1.Paragraph>
      </StyledSection>

      {/* Sacred Geometry Visualizations */}
      <StyledSection>
        <SectionTitle>Sacred Geometry in Typography</SectionTitle>
        <Description>
          This section visualizes how the Golden Ratio and Fibonacci sequence influence our typography.
        </Description>
        
        <Box_1.Box position="relative" height="200px" width="100%" bg={(_a = tokens_1.colors.background[200]) !== null && _a !== void 0 ? _a : 1} p={tokens_1.spacing.md} mb={tokens_1.spacing.lg}>
          <typography_1.Text>Base Font Size (16px)</typography_1.Text>
          
          {/* Golden Ratio Typography Scale Visualization */}
          <Box_1.Box position="absolute" top="50px" left="20px" height="100px" width={"".concat(16 * sacred_geometry_1.PHI * 4, "px")} bg={(_b = tokens_1.colors.primary[300]) !== null && _b !== void 0 ? _b : 1} opacity={0.3}>
            <Box_1.Box position="absolute" top="0" left="0" height="100%" width={"".concat(16, "px")} bg={(_c = tokens_1.colors.primary[500]) !== null && _c !== void 0 ? _c : 1}>
              <typography_1.Text color="white" p="2px" fontSize="10px">1×</typography_1.Text>
            </Box_1.Box>
            <Box_1.Box position="absolute" top="0" left={"".concat(16, "px")} height="100%" width={"".concat(16 * sacred_geometry_1.PHI - 16, "px")} bg={(_d = tokens_1.colors.primary[600]) !== null && _d !== void 0 ? _d : 1}>
              <typography_1.Text color="white" p="2px" fontSize="10px">φ</typography_1.Text>
            </Box_1.Box>
            <Box_1.Box position="absolute" top="0" left={"".concat(16 * sacred_geometry_1.PHI, "px")} height="100%" width={"".concat(16 * sacred_geometry_1.PHI * sacred_geometry_1.PHI - 16 * sacred_geometry_1.PHI * sacred_geometry_1.PHI, "px")} bg={(_e = tokens_1.colors.primary[700]) !== null && _e !== void 0 ? _e : 1}>
              <typography_1.Text color="white" p="2px" fontSize="10px">φ²</typography_1.Text>
            </Box_1.Box>
            <Box_1.Box position="absolute" top="0" left={"".concat(16 * sacred_geometry_1.PHI * sacred_geometry_1.PHI, "px")} height="100%" width={"".concat(16 * sacred_geometry_1.PHI * sacred_geometry_1.PHI * sacred_geometry_1.PHI - 16 * sacred_geometry_1.PHI * sacred_geometry_1.PHI, "px")} bg={(_f = tokens_1.colors.primary[800]) !== null && _f !== void 0 ? _f : 1}>
              <typography_1.Text color="white" p="2px" fontSize="10px">φ³</typography_1.Text>
            </Box_1.Box>
          </Box_1.Box>
          
          <typography_1.Text position="absolute" bottom="10px" left="20px">Font sizes grow by powers of φ (1.618)</typography_1.Text>
        </Box_1.Box>
        
        <Box_1.Box position="relative" height="100px" width="100%" bg={(_g = tokens_1.colors.background[200]) !== null && _g !== void 0 ? _g : 1} p={tokens_1.spacing.md}>
          <typography_1.Text>Line Height Ratio: 1.618 (Golden Ratio)</typography_1.Text>
          
          {/* Line Height Visualization */}
          <Box_1.Box position="absolute" top="40px" left="20px" height="16px" width="300px" bg={(_h = tokens_1.colors.secondary[500]) !== null && _h !== void 0 ? _h : 1}>
            <typography_1.Text color="white" fontSize="10px">16px Font</typography_1.Text>
          </Box_1.Box>
          <Box_1.Box position="absolute" top="40px" left="330px" height={"".concat(16 * sacred_geometry_1.PHI, "px")} width="300px" border={"1px solid ".concat((_j = tokens_1.colors.secondary[500]) !== null && _j !== void 0 ? _j : 1)}>
            <typography_1.Text fontSize="10px">~26px Line Height (16px × φ)</typography_1.Text>
          </Box_1.Box>
        </Box_1.Box>
      </StyledSection>
    </Box_1.Box>);
};
exports.default = TypographyExample;
var templateObject_1, templateObject_2, templateObject_3;
