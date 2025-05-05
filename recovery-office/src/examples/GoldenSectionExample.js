"use strict";
/**
 * GoldenSection Component Example
 *
 * This file demonstrates the usage of the GoldenSection component
 * with both horizontal and vertical layouts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var theme_1 = require("../design-system/theme");
// Component to avoid styled-components issues
var SectionContainer = function (_a) {
    var children = _a.children;
    return (<div style={{ padding: '20px', marginBottom: '50px' }}>
    {children}
  </div>);
};
var Title = function (_a) {
    var _b;
    var children = _a.children;
    return (<h2 style={{
            fontFamily: "'Playfair Display', serif",
            marginBottom: "".concat(sacred_geometry_1.SACRED_SPACING.md, "px"),
            color: (_b = theme_1.theme.colors.primary[800]) !== null && _b !== void 0 ? _b : 1
        }}>
    {children}
  </h2>);
};
var Description = function (_a) {
    var children = _a.children;
    return (<p style={{
            marginBottom: "".concat(sacred_geometry_1.SACRED_SPACING.lg, "px"),
            color: theme_1.theme.colors.text.primary
        }}>
    {children}
  </p>);
};
var ContentBox = function (_a) {
    var _b, _c;
    var isPrimary = _a.isPrimary, children = _a.children;
    return (<div style={{
            padding: "".concat(sacred_geometry_1.SACRED_SPACING.md, "px"),
            backgroundColor: isPrimary ? (_b = theme_1.theme.colors.primary[100]) !== null && _b !== void 0 ? _b : 1 : (_c = theme_1.theme.colors.secondary[100]) !== null && _c !== void 0 ? _c : 1,
            borderRadius: "".concat(theme_1.theme.radius.md, "px"),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
    {children}
  </div>);
};
var Label = function (_a) {
    var _b;
    var children = _a.children;
    return (<h3 style={{
            marginBottom: "".concat(sacred_geometry_1.SACRED_SPACING.sm, "px"),
            color: (_b = theme_1.theme.colors.primary[700]) !== null && _b !== void 0 ? _b : 1
        }}>
    {children}
  </h3>);
};
var Percentage = function (_a) {
    var _b;
    var children = _a.children;
    return (<div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: "".concat(sacred_geometry_1.SACRED_SPACING.xs, "px"),
            color: (_b = theme_1.theme.colors.primary[800]) !== null && _b !== void 0 ? _b : 1
        }}>
    {children}
  </div>);
};
var Explanation = function (_a) {
    var children = _a.children;
    return (<p style={{
            fontSize: '14px',
            color: theme_1.theme.colors.text.secondary
        }}>
    {children}
  </p>);
};
/**
 * GoldenSectionExample component
 *
 * Demonstrates the usage of GoldenSection in both horizontal and vertical layouts
 */
var GoldenSectionExample = function () {
    return (<SectionContainer>
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
          <div style={{ display: 'grid', gridTemplateColumns: "".concat(sacred_geometry_1.PHI_INVERSE * 100, "% ").concat((1 - sacred_geometry_1.PHI_INVERSE) * 100, "%"), height: '100%' }}>
            <ContentBox isPrimary>
              <Label>Primary Section</Label>
              <Percentage>{(sacred_geometry_1.PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the golden ratio (61.8%) of the width</Explanation>
            </ContentBox>
            
            <ContentBox>
              <Label>Secondary Section</Label>
              <Percentage>{((1 - sacred_geometry_1.PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
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
          <div style={{ display: 'grid', gridTemplateRows: "".concat(sacred_geometry_1.PHI_INVERSE * 100, "% ").concat((1 - sacred_geometry_1.PHI_INVERSE) * 100, "%"), height: '100%' }}>
            <ContentBox isPrimary>
              <Label>Primary Section</Label>
              <Percentage>{(sacred_geometry_1.PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section takes up the golden ratio (61.8%) of the height</Explanation>
            </ContentBox>
            
            <ContentBox>
              <Label>Secondary Section</Label>
              <Percentage>{((1 - sacred_geometry_1.PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
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
          <div style={{ display: 'grid', gridTemplateColumns: "".concat((1 - sacred_geometry_1.PHI_INVERSE) * 100, "% ").concat(sacred_geometry_1.PHI_INVERSE * 100, "%"), height: '100%' }}>
            <ContentBox>
              <Label>Secondary Section (First)</Label>
              <Percentage>{((1 - sacred_geometry_1.PHI_INVERSE) * 100).toFixed(1)}%</Percentage>
              <Explanation>This section is now displayed first</Explanation>
            </ContentBox>
            
            <ContentBox isPrimary>
              <Label>Primary Section (Second)</Label>
              <Percentage>{(sacred_geometry_1.PHI_INVERSE * 100).toFixed(1)}%</Percentage>
              <Explanation>This section is now displayed second</Explanation>
            </ContentBox>
          </div>
        </div>
      </SectionContainer>
    </SectionContainer>);
};
exports.default = GoldenSectionExample;
