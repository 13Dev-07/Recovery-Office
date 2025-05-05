/**
 * Button Example Component
 * 
 * This component demonstrates the usage of Button, IconButton, and ButtonGroup
 * components from the design system, showcasing various variants, sizes, and states.
 */

import * as React from 'react';
import { 
  Button, 
  IconButton, 
  ButtonGroup 
} from '../design-system/components/button';
import { Box, Container, Stack } from '../design-system/components/layout';
import { Typography, Heading } from '../design-system/components/typography';

// Simple icon components for demonstration purposes
const PlusIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * ButtonExample Component showcasing Button components
 */
const ButtonExample: React.FC = () => {
  return (
    <Container maxWidth="lg" py="xl">
      <Heading as="h1" mb="lg">Button Components</Heading>
      <Typography variant="body1" mb="xl">
        These button components implement sacred geometry principles for sizing, 
        proportions, and visual harmony.
      </Typography>
      
      {/* Button Variants */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Button Variants</Heading>
        <Stack direction="horizontal" spacing="md">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </Stack>
      </Box>
      
      {/* Button Sizes */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Button Sizes</Heading>
        <Stack direction="horizontal" spacing="md" align="center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Stack>
      </Box>
      
      {/* Button States */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Button States</Heading>
        <Stack direction="horizontal" spacing="md">
          <Button>Default</Button>
          <Button isLoading>Loading</Button>
          <Button isDisabled>Disabled</Button>
          <Button isFullWidth>Full Width (in a Stack)</Button>
        </Stack>
      </Box>
      
      {/* Buttons with Icons */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Buttons with Icons</Heading>
        <Stack direction="horizontal" spacing="md">
          <Button leftIcon={<PlusIcon />}>Add Item</Button>
          <Button rightIcon={<ArrowIcon />}>Next Step</Button>
          <Button leftIcon={<HeartIcon />} rightIcon={<HeartIcon />}>With Both Icons</Button>
        </Stack>
      </Box>
      
      {/* Icon Buttons */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Icon Buttons</Heading>
        <Stack direction="horizontal" spacing="md" align="center">
          <IconButton 
            icon={<PlusIcon />} 
            aria-label="Add item" 
            size="sm" 
          />
          <IconButton 
            icon={<ArrowIcon />} 
            aria-label="Go to next page" 
            size="md" 
          />
          <IconButton 
            icon={<HeartIcon />} 
            aria-label="Like" 
            size="lg" 
          />
          <IconButton 
            icon={<PlusIcon />} 
            aria-label="Add with round button" 
            isRound 
            variant="secondary" 
          />
        </Stack>
      </Box>
      
      {/* Button Groups */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Button Groups</Heading>
        
        <Heading as="h3" variant="h6" mb="sm">Spaced Group</Heading>
        <ButtonGroup mb="md">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        
        <Heading as="h3" variant="h6" mb="sm">Attached Group</Heading>
        <ButtonGroup mb="md" isAttached>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        
        <Heading as="h3" variant="h6" mb="sm">Equal Width Group</Heading>
        <ButtonGroup mb="md" isEqual>
          <Button>First</Button>
          <Button>Second with longer text</Button>
          <Button>Third</Button>
        </ButtonGroup>
        
        <Heading as="h3" variant="h6" mb="sm">Vertical Group</Heading>
        <ButtonGroup direction="vertical" isEqual width="200px">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Box>
      
      {/* Button Use Cases */}
      <Box mb="xl">
        <Heading as="h2" mb="md">Common Use Cases</Heading>
        
        <Heading as="h3" variant="h6" mb="sm">Form Buttons</Heading>
        <ButtonGroup mb="md">
          <Button variant="primary">Submit</Button>
          <Button variant="outline">Cancel</Button>
        </ButtonGroup>
        
        <Heading as="h3" variant="h6" mb="sm">Navigation</Heading>
        <ButtonGroup mb="md">
          <Button leftIcon={<ArrowIcon style={{ transform: 'rotate(180deg)' }} />} variant="ghost">
            Previous
          </Button>
          <Button rightIcon={<ArrowIcon />} variant="ghost">
            Next
          </Button>
        </ButtonGroup>
        
        <Heading as="h3" variant="h6" mb="sm">Call to Action</Heading>
        <Button 
          size="lg" 
          variant="accent" 
          rightIcon={<ArrowIcon />}
          mb="md"
        >
          Book Your Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default ButtonExample; 






