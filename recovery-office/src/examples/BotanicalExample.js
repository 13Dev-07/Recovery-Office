"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Section_1 = require("../design-system/components/layout/Section");
var Grid_1 = require("../design-system/components/layout/Grid");
var Box_1 = require("../design-system/components/layout/Box");
var Text_1 = require("../design-system/components/typography/Text");
var Card_1 = require("../design-system/components/data-display/Card");
var botanical_1 = require("../design-system/components/botanical");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Example demonstrating the botanical components with sacred geometry principles
 */
var BotanicalExample = function () {
    return (<div>
      {/* Hero Section with LeafPattern */}
      <Section_1.Section variant="primary" minHeight={50} botanicalPosition="center-right" botanicalElement={<botanical_1.LeafPattern size="large" density="high" animated={true} spiralArrangement={true} width={400} height={400}/>}>
        <Section_1.SectionTitle title="Botanical Elements" subtitle="Sacred geometry in nature" align="center" size="large"/>
        <Section_1.SectionContent align="center">
          <Text_1.Text variant="body1" style={{ color: 'white', maxWidth: '600px', margin: '0 auto' }}>
            Our botanical components use mathematical principles found throughout
            nature to create harmonious, aesthetically pleasing visual elements.
            Each component is based on the golden ratio (PHI = {sacred_geometry_1.PHI.toFixed(3)}...)
            and Fibonacci sequence values.
          </Text_1.Text>
        </Section_1.SectionContent>
      </Section_1.Section>

      {/* Components Showcase */}
      <Section_1.Section variant="light">
        <Section_1.SectionTitle title="Component Gallery" align="center" size="medium"/>
        <Section_1.SectionContent>
          <Grid_1.Grid columns={2} spacing={8}>
            {/* LeafPattern */}
            <Card_1.Card title="LeafPattern">
              <Box_1.Box padding={5} display="flex" justifyContent="center">
                <botanical_1.LeafPattern size="medium" density="medium" spiralArrangement={true} width={200} height={200} color="#4a7c59"/>
              </Box_1.Box>
              <Text_1.Text>
                The LeafPattern component arranges olive leaves in a spiral pattern 
                based on the golden angle (137.5°). This arrangement creates visually 
                pleasing patterns found throughout nature.
              </Text_1.Text>
              <Text_1.Text variant="caption">
                Props: size, density, spiralArrangement, animated, rotation
              </Text_1.Text>
            </Card_1.Card>

            {/* OliveLeaf */}
            <Card_1.Card title="OliveLeaf">
              <Box_1.Box padding={5} display="flex" justifyContent="center">
                <botanical_1.OliveLeaf leafSize={2} slenderness={0.3} width={200} height={200} color="#4a7c59"/>
              </Box_1.Box>
              <Text_1.Text>
                Each olive leaf is constructed using Bézier curves with control points 
                positioned according to golden ratio proportions, creating a naturally 
                harmonic shape.
              </Text_1.Text>
              <Text_1.Text variant="caption">
                Props: leafSize, slenderness, rotation, midribIntensity, mirror
              </Text_1.Text>
            </Card_1.Card>

            {/* OliveBranch */}
            <Card_1.Card title="OliveBranch">
              <Box_1.Box padding={5} display="flex" justifyContent="center">
                <botanical_1.OliveBranch leafCount={5} leafSize={1.2} curvature={0.3} width={200} height={200} color="#4a7c59"/>
              </Box_1.Box>
              <Text_1.Text>
                The olive branch uses Fibonacci-based spacing to position leaves along
                a curved path. Leaf sizes decrease according to the golden ratio as they 
                approach the tip of the branch.
              </Text_1.Text>
              <Text_1.Text variant="caption">
                Props: leafCount, leafSize, curvature, includeOlives, mirror
              </Text_1.Text>
            </Card_1.Card>

            {/* FlowerOfLife */}
            <Card_1.Card title="FlowerOfLife">
              <Box_1.Box padding={5} display="flex" justifyContent="center">
                <botanical_1.FlowerOfLife rings={3} radius={10} width={200} height={200} color="#4a7c59"/>
              </Box_1.Box>
              <Text_1.Text>
                The Flower of Life is a sacred geometry pattern composed of multiple
                evenly-spaced, overlapping circles. This pattern is found throughout 
                ancient art and architecture.
              </Text_1.Text>
              <Text_1.Text variant="caption">
                Props: rings, radius, showSeedOfLife, showCenter, centerFill
              </Text_1.Text>
            </Card_1.Card>
          </Grid_1.Grid>
        </Section_1.SectionContent>
      </Section_1.Section>

      {/* Mathematical Principles */}
      <Section_1.Section variant="secondary">
        <Section_1.SectionTitle title="Sacred Geometry Principles" align="center" size="medium"/>
        <Section_1.SectionContent columns={3} columnGap={5}>
          <Card_1.Card title="Golden Ratio" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text_1.Text style={{ color: 'white' }}>
              The golden ratio (PHI = {sacred_geometry_1.PHI.toFixed(3)}...) is used throughout our botanical
              components for proportions, curves, and positioning. This ratio creates
              visually pleasing relationships found throughout nature.
            </Text_1.Text>
          </Card_1.Card>
          
          <Card_1.Card title="Fibonacci Sequence" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text_1.Text style={{ color: 'white' }}>
              The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...) guides spacing,
              counts, and rhythms in our components. This sequence closely approximates 
              golden ratio proportions and appears in natural growth patterns.
            </Text_1.Text>
          </Card_1.Card>
          
          <Card_1.Card title="Golden Angle" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text_1.Text style={{ color: 'white' }}>
              The golden angle (137.5°) is derived from the golden ratio and creates
              optimal spacing in spiral arrangements. This angle appears in the arrangement
              of seeds in sunflowers, pinecones, and other natural forms.
            </Text_1.Text>
          </Card_1.Card>
        </Section_1.SectionContent>
      </Section_1.Section>
    </div>);
};
exports.default = BotanicalExample;
