"use strict";
/**
 * AspectRatio Component Example
 *
 * This file demonstrates the usage of the AspectRatio component
 * with different ratios and sacred geometry configurations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var AspectRatio_1 = require("../design-system/components/layout/AspectRatio");
var Box_1 = require("../design-system/components/layout/Box");
var Grid_1 = require("../design-system/components/layout/Grid");
var tokens_1 = require("../design-system/tokens");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Styled components for visualization
var StyledSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 50px;\n"], ["\n  padding: 20px;\n  margin-bottom: 50px;\n"])));
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-family: 'Playfair Display', serif;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.md, (_a = tokens_1.colors.primary[800]) !== null && _a !== void 0 ? _a : 1);
var Description = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.lg, tokens_1.colors.text.primary);
var ContentBox = (0, styled_components_1.default)(Box_1.Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  color: ", ";\n  box-shadow: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: ", ";\n  border-radius: ", "px;\n  padding: ", "px;\n  color: ", ";\n  box-shadow: ", ";\n"])), function (props) {
    var _a;
    return props.gradientStart && props.gradientEnd
        ? "linear-gradient(".concat(sacred_geometry_1.PHI * 100, "deg, ").concat(props.gradientStart, " 0%, ").concat(props.gradientEnd, " 100%)")
        : (_a = tokens_1.colors.primary[100]) !== null && _a !== void 0 ? _a : 1;
}, function (props) { return props.theme.radius.md; }, tokens_1.spacing.md, tokens_1.colors.text.primary, function (props) { return props.theme.shadows.sm; });
var Label = styled_components_1.default.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.sm, (_b = tokens_1.colors.primary[800]) !== null && _b !== void 0 ? _b : 1);
var Ratio = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: ", "px;\n  color: ", ";\n"], ["\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: ", "px;\n  color: ", ";\n"])), tokens_1.spacing.xs, (_c = tokens_1.colors.primary[700]) !== null && _c !== void 0 ? _c : 1);
var Explanation = styled_components_1.default.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n"], ["\n  font-size: 14px;\n  color: ", ";\n"])), tokens_1.colors.text.secondary);
/**
 * AspectRatioExample component
 *
 * Demonstrates the usage of AspectRatio with different ratios and applications
 */
var AspectRatioExample = function () {
    var _a, _b, _c, _d;
    return (<Box_1.Box p={tokens_1.spacing.xl}>
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
        
        <Grid_1.Grid templateColumns="1fr 1fr" gap={tokens_1.spacing.md} mb={tokens_1.spacing.lg}>
          {/* Golden Rectangle (Portrait) */}
          <Box_1.Box>
            <Label>Golden Rectangle (Portrait)</Label>
            <Description>
              Width to height ratio of 1:1.618
            </Description>
            <AspectRatio_1.AspectRatio ratio="goldenRatio" mb={tokens_1.spacing.sm}>
              <ContentBox gradientStart={(_a = tokens_1.colors.primary[100]) !== null && _a !== void 0 ? _a : 1} gradientEnd={(_b = tokens_1.colors.primary[300]) !== null && _b !== void 0 ? _b : 1}>
                <Ratio>1:1.618</Ratio>
                <Explanation>
                  The perfect rectangle according to sacred geometry
                </Explanation>
              </ContentBox>
            </AspectRatio_1.AspectRatio>
          </Box_1.Box>
          
          {/* Golden Rectangle (Landscape) */}
          <Box_1.Box>
            <Label>Golden Rectangle (Landscape)</Label>
            <Description>
              Width to height ratio of 1.618:1
            </Description>
            <AspectRatio_1.AspectRatio ratio="goldenRatioLandscape" mb={tokens_1.spacing.sm}>
              <ContentBox gradientStart={(_c = tokens_1.colors.secondary[100]) !== null && _c !== void 0 ? _c : 1} gradientEnd={(_d = tokens_1.colors.secondary[300]) !== null && _d !== void 0 ? _d : 1}>
                <Ratio>1.618:1</Ratio>
                <Explanation>
                  The sacred horizontal rectangle
                </Explanation>
              </ContentBox>
            </AspectRatio_1.AspectRatio>
          </Box_1.Box>
        </Grid_1.Grid>
      </StyledSection>

      {/* Common Media Ratios */}
      <StyledSection>
        <Title>Common Media Ratios</Title>
        <Description>
          AspectRatio supports common media aspect ratios for consistent display of images and videos.
        </Description>
        
        <Grid_1.Grid templateColumns="repeat(3, 1fr)" gap={tokens_1.spacing.md}>
          {/* Square */}
          <Box_1.Box>
            <Label>Square (1:1)</Label>
            <AspectRatio_1.AspectRatio ratio="square" mb={tokens_1.spacing.sm}>
              <ContentBox>
                <Ratio>1:1</Ratio>
                <Explanation>
                  Perfect square
                </Explanation>
              </ContentBox>
            </AspectRatio_1.AspectRatio>
          </Box_1.Box>
          
          {/* 4:3 Ratio */}
          <Box_1.Box>
            <Label>Standard (4:3)</Label>
            <AspectRatio_1.AspectRatio ratio="4:3" mb={tokens_1.spacing.sm}>
              <ContentBox>
                <Ratio>4:3</Ratio>
                <Explanation>
                  Classic TV/monitor ratio
                </Explanation>
              </ContentBox>
            </AspectRatio_1.AspectRatio>
          </Box_1.Box>
          
          {/* 16:9 Ratio */}
          <Box_1.Box>
            <Label>Widescreen (16:9)</Label>
            <AspectRatio_1.AspectRatio ratio="16:9" mb={tokens_1.spacing.sm}>
              <ContentBox>
                <Ratio>16:9</Ratio>
                <Explanation>
                  Modern widescreen format
                </Explanation>
              </ContentBox>
            </AspectRatio_1.AspectRatio>
          </Box_1.Box>
        </Grid_1.Grid>
      </StyledSection>

      {/* Custom Ratio */}
      <StyledSection>
        <Title>Custom Aspect Ratio</Title>
        <Description>
          You can also specify a custom aspect ratio using a number.
        </Description>
        
        <AspectRatio_1.AspectRatio ratio={1.5} maxWidth="600px" mb={tokens_1.spacing.sm}>
          <ContentBox gradientStart={tokens_1.colors.accent.teal} gradientEnd={tokens_1.colors.accent.lavender}>
            <Ratio>1.5:1</Ratio>
            <Explanation>
              Custom ratio of 1.5:1
            </Explanation>
          </ContentBox>
        </AspectRatio_1.AspectRatio>
      </StyledSection>

      {/* Practical Application */}
      <StyledSection>
        <Title>Practical Applications</Title>
        <Description>
          AspectRatio is perfect for maintaining consistent proportions for images, videos,
          cards, and other media elements regardless of screen size.
        </Description>
        
        <Grid_1.Grid templateColumns="repeat(2, 1fr)" gap={tokens_1.spacing.md}>
          {/* Image Container */}
          <AspectRatio_1.AspectRatio ratio="16:9">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Landscape" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '13px'
        }}/>
          </AspectRatio_1.AspectRatio>
          
          {/* Video Placeholder */}
          <AspectRatio_1.AspectRatio ratio="16:9">
            <ContentBox gradientStart="#000000" gradientEnd="#333333" style={{ color: tokens_1.colors.text.light }}>
              <Label style={{ color: 'white' }}>Video Placeholder</Label>
              <Explanation style={{ color: 'rgba(255,255,255,0.7)' }}>
                Videos maintain their aspect ratio across all screen sizes
              </Explanation>
            </ContentBox>
          </AspectRatio_1.AspectRatio>
        </Grid_1.Grid>
      </StyledSection>
    </Box_1.Box>);
};
exports.default = AspectRatioExample;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
