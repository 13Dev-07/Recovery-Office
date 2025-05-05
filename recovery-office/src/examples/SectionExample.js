"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Section_1 = require("../design-system/components/layout/Section");
var Text_1 = require("../design-system/components/typography/Text");
var Box_1 = require("../design-system/components/layout/Box");
var Card_1 = require("../design-system/components/data-display/Card");
var LeafPattern_1 = require("../design-system/components/botanical/LeafPattern");
/**
 * Example demonstrating the Section, SectionTitle, and SectionContent components
 * with sacred geometry principles applied throughout
 */
var SectionExample = function () {
    return (<div>
      {/* Primary Section Example */}
      <Section_1.Section variant="primary" botanicalPosition="top-right" botanicalElement={<LeafPattern_1.LeafPattern size="large"/>}>
        <Section_1.SectionTitle title="Welcome to Recovery Office" subtitle="Healing through sacred geometry and botanical harmony" align="center" size="large" decoratorBefore={<div style={{ width: '30px', height: '1px', backgroundColor: 'white' }}/>} decoratorAfter={<div style={{ width: '30px', height: '1px', backgroundColor: 'white' }}/>}/>
        <Section_1.SectionContent align="center">
          <Text_1.Text>
            Our approach combines ancient wisdom with modern therapeutic techniques
            to create a harmonious healing environment for your recovery journey.
          </Text_1.Text>
        </Section_1.SectionContent>
      </Section_1.Section>

      {/* Light Section with Multi-Column Content */}
      <Section_1.Section variant="light">
        <Section_1.SectionTitle title="Our Healing Approach" subtitle="Based on sacred geometry principles" align="left" size="medium"/>
        <Section_1.SectionContent columns={3} columnGap={5}>
          <Card_1.Card title="Golden Ratio Therapy">
            <Text_1.Text>
              Our therapeutic techniques are founded on the golden ratio (1:1.618),
              creating balanced and harmonious healing environments.
            </Text_1.Text>
          </Card_1.Card>
          
          <Card_1.Card title="Fibonacci Sequence Healing">
            <Text_1.Text>
              We incorporate the Fibonacci sequence in our treatment progressions,
              allowing for natural, organic growth in your recovery journey.
            </Text_1.Text>
          </Card_1.Card>
          
          <Card_1.Card title="Botanical Integration">
            <Text_1.Text>
              Healing plants and botanical elements are integrated throughout our
              practice, enhancing the natural flow of restorative energy.
            </Text_1.Text>
          </Card_1.Card>
        </Section_1.SectionContent>
      </Section_1.Section>

      {/* Secondary Section with Two Columns */}
      <Section_1.Section variant="secondary">
        <Section_1.SectionTitle title="Research & Evidence" align="center" size="medium"/>
        <Section_1.SectionContent columns={2} columnGap={8}>
          <Box_1.Box>
            <Text_1.Text variant="body1" style={{ color: 'white' }}>
              Our research has demonstrated that environments designed according to
              sacred geometry principles promote faster recovery and improved well-being
              outcomes across a variety of health conditions.
            </Text_1.Text>
          </Box_1.Box>
          <Box_1.Box>
            <Text_1.Text variant="body1" style={{ color: 'white' }}>
              In multiple clinical studies, patients experiencing spaces designed with
              PHI relationships showed measurably reduced stress levels and reported
              higher satisfaction with their treatment experience.
            </Text_1.Text>
          </Box_1.Box>
        </Section_1.SectionContent>
      </Section_1.Section>

      {/* Light Section with Full Width Content */}
      <Section_1.Section variant="light">
        <Section_1.SectionTitle title="Begin Your Journey" subtitle="Experience the difference of sacred geometry in recovery" align="center" size="medium"/>
        <Section_1.SectionContent fullWidth align="center">
          <Text_1.Text variant="body1">
            Schedule a consultation to learn how our sacred geometry-based approach
            can be tailored to your specific recovery needs.
          </Text_1.Text>
          <Box_1.Box padding={5}>
            {/* Form component would go here */}
            <div style={{
            height: '200px',
            border: '1px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
              <Text_1.Text>Contact Form Placeholder</Text_1.Text>
            </div>
          </Box_1.Box>
        </Section_1.SectionContent>
      </Section_1.Section>
    </div>);
};
exports.default = SectionExample;
