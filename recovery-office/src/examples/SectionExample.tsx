import * as React from 'react';
import { 
  Section, 
  SectionTitle, 
  SectionContent 
} from '../design-system/components/layout/Section';
import { Text } from '../design-system/components/typography/Text';
import { Box } from '../design-system/components/layout/Box';
import { Card } from '../design-system/components/data-display/Card';
import { LeafPattern } from '../design-system/components/botanical/LeafPattern';

/**
 * Example demonstrating the Section, SectionTitle, and SectionContent components
 * with sacred geometry principles applied throughout
 */
const SectionExample: React.FC = () => {
  return (
    <div>
      {/* Primary Section Example */}
      <Section 
        variant="primary" 
        botanicalPosition="top-right"
        botanicalElement={<LeafPattern size="large" />}
      >
        <SectionTitle 
          title="Welcome to Recovery Office" 
          subtitle="Healing through sacred geometry and botanical harmony"
          align="center"
          size="large"
          decoratorBefore={<div style={{ width: '30px', height: '1px', backgroundColor: 'white' }} />}
          decoratorAfter={<div style={{ width: '30px', height: '1px', backgroundColor: 'white' }} />}
        />
        <SectionContent align="center">
          <Text>
            Our approach combines ancient wisdom with modern therapeutic techniques
            to create a harmonious healing environment for your recovery journey.
          </Text>
        </SectionContent>
      </Section>

      {/* Light Section with Multi-Column Content */}
      <Section variant="light">
        <SectionTitle 
          title="Our Healing Approach" 
          subtitle="Based on sacred geometry principles"
          align="left"
          size="medium"
        />
        <SectionContent 
          columns={3} 
          columnGap={5}
        >
          <Card title="Golden Ratio Therapy">
            <Text>
              Our therapeutic techniques are founded on the golden ratio (1:1.618),
              creating balanced and harmonious healing environments.
            </Text>
          </Card>
          
          <Card title="Fibonacci Sequence Healing">
            <Text>
              We incorporate the Fibonacci sequence in our treatment progressions,
              allowing for natural, organic growth in your recovery journey.
            </Text>
          </Card>
          
          <Card title="Botanical Integration">
            <Text>
              Healing plants and botanical elements are integrated throughout our
              practice, enhancing the natural flow of restorative energy.
            </Text>
          </Card>
        </SectionContent>
      </Section>

      {/* Secondary Section with Two Columns */}
      <Section variant="secondary">
        <SectionTitle 
          title="Research & Evidence" 
          align="center"
          size="medium"
        />
        <SectionContent columns={2} columnGap={8}>
          <Box>
            <Text variant="body1" style={{ color: 'white' }}>
              Our research has demonstrated that environments designed according to
              sacred geometry principles promote faster recovery and improved well-being
              outcomes across a variety of health conditions.
            </Text>
          </Box>
          <Box>
            <Text variant="body1" style={{ color: 'white' }}>
              In multiple clinical studies, patients experiencing spaces designed with
              PHI relationships showed measurably reduced stress levels and reported
              higher satisfaction with their treatment experience.
            </Text>
          </Box>
        </SectionContent>
      </Section>

      {/* Light Section with Full Width Content */}
      <Section variant="light">
        <SectionTitle 
          title="Begin Your Journey" 
          subtitle="Experience the difference of sacred geometry in recovery"
          align="center"
          size="medium"
        />
        <SectionContent fullWidth align="center">
          <Text variant="body1">
            Schedule a consultation to learn how our sacred geometry-based approach
            can be tailored to your specific recovery needs.
          </Text>
          <Box padding={5}>
            {/* Form component would go here */}
            <div style={{ 
              height: '200px', 
              border: '1px dashed #ccc', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Text>Contact Form Placeholder</Text>
            </div>
          </Box>
        </SectionContent>
      </Section>
    </div>
  );
};

export default SectionExample; 






