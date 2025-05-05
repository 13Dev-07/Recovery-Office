import * as React from 'react';
import { 
  Section, 
  SectionTitle, 
  SectionContent 
} from '../design-system/components/layout/Section';
import { Grid } from '../design-system/components/layout/Grid';
import { Box } from '../design-system/components/layout/Box';
import { Text } from '../design-system/components/typography/Text';
import { Card } from '../design-system/components/data-display/Card';
import { 
  LeafPattern,
  OliveLeaf,
  OliveBranch,
  FlowerOfLife
} from '../design-system/components/botanical';
import { PHI, PHI_INVERSE } from '../constants/sacred-geometry';

/**
 * Example demonstrating the botanical components with sacred geometry principles
 */
const BotanicalExample: React.FC = () => {
  return (
    <div>
      {/* Hero Section with LeafPattern */}
      <Section
        variant="primary"
        minHeight={50}
        botanicalPosition="center-right"
        botanicalElement={
          <LeafPattern 
            size="large" 
            density="high" 
            animated={true} 
            spiralArrangement={true}
            width={400}
            height={400}
          />
        }
      >
        <SectionTitle
          title="Botanical Elements"
          subtitle="Sacred geometry in nature"
          align="center"
          size="large"
        />
        <SectionContent align="center">
          <Text variant="body1" style={{ color: 'white', maxWidth: '600px', margin: '0 auto' }}>
            Our botanical components use mathematical principles found throughout
            nature to create harmonious, aesthetically pleasing visual elements.
            Each component is based on the golden ratio (PHI = {PHI.toFixed(3)}...)
            and Fibonacci sequence values.
          </Text>
        </SectionContent>
      </Section>

      {/* Components Showcase */}
      <Section variant="light">
        <SectionTitle
          title="Component Gallery"
          align="center"
          size="medium"
        />
        <SectionContent>
          <Grid columns={2} spacing={8}>
            {/* LeafPattern */}
            <Card title="LeafPattern">
              <Box padding={5} display="flex" justifyContent="center">
                <LeafPattern 
                  size="medium" 
                  density="medium" 
                  spiralArrangement={true}
                  width={200}
                  height={200}
                  color="#4a7c59"
                />
              </Box>
              <Text>
                The LeafPattern component arranges olive leaves in a spiral pattern 
                based on the golden angle (137.5°). This arrangement creates visually 
                pleasing patterns found throughout nature.
              </Text>
              <Text variant="caption">
                Props: size, density, spiralArrangement, animated, rotation
              </Text>
            </Card>

            {/* OliveLeaf */}
            <Card title="OliveLeaf">
              <Box padding={5} display="flex" justifyContent="center">
                <OliveLeaf
                  leafSize={2}
                  slenderness={0.3}
                  width={200}
                  height={200}
                  color="#4a7c59"
                />
              </Box>
              <Text>
                Each olive leaf is constructed using Bézier curves with control points 
                positioned according to golden ratio proportions, creating a naturally 
                harmonic shape.
              </Text>
              <Text variant="caption">
                Props: leafSize, slenderness, rotation, midribIntensity, mirror
              </Text>
            </Card>

            {/* OliveBranch */}
            <Card title="OliveBranch">
              <Box padding={5} display="flex" justifyContent="center">
                <OliveBranch
                  leafCount={5}
                  leafSize={1.2}
                  curvature={0.3}
                  width={200}
                  height={200}
                  color="#4a7c59"
                />
              </Box>
              <Text>
                The olive branch uses Fibonacci-based spacing to position leaves along
                a curved path. Leaf sizes decrease according to the golden ratio as they 
                approach the tip of the branch.
              </Text>
              <Text variant="caption">
                Props: leafCount, leafSize, curvature, includeOlives, mirror
              </Text>
            </Card>

            {/* FlowerOfLife */}
            <Card title="FlowerOfLife">
              <Box padding={5} display="flex" justifyContent="center">
                <FlowerOfLife
                  rings={3}
                  radius={10}
                  width={200}
                  height={200}
                  color="#4a7c59"
                />
              </Box>
              <Text>
                The Flower of Life is a sacred geometry pattern composed of multiple
                evenly-spaced, overlapping circles. This pattern is found throughout 
                ancient art and architecture.
              </Text>
              <Text variant="caption">
                Props: rings, radius, showSeedOfLife, showCenter, centerFill
              </Text>
            </Card>
          </Grid>
        </SectionContent>
      </Section>

      {/* Mathematical Principles */}
      <Section variant="secondary">
        <SectionTitle
          title="Sacred Geometry Principles"
          align="center"
          size="medium"
        />
        <SectionContent columns={3} columnGap={5}>
          <Card title="Golden Ratio" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text style={{ color: 'white' }}>
              The golden ratio (PHI = {PHI.toFixed(3)}...) is used throughout our botanical
              components for proportions, curves, and positioning. This ratio creates
              visually pleasing relationships found throughout nature.
            </Text>
          </Card>
          
          <Card title="Fibonacci Sequence" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text style={{ color: 'white' }}>
              The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...) guides spacing,
              counts, and rhythms in our components. This sequence closely approximates 
              golden ratio proportions and appears in natural growth patterns.
            </Text>
          </Card>
          
          <Card title="Golden Angle" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Text style={{ color: 'white' }}>
              The golden angle (137.5°) is derived from the golden ratio and creates
              optimal spacing in spiral arrangements. This angle appears in the arrangement
              of seeds in sunflowers, pinecones, and other natural forms.
            </Text>
          </Card>
        </SectionContent>
      </Section>
    </div>
  );
};

export default BotanicalExample; 






