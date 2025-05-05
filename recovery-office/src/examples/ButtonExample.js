"use strict";
/**
 * Button Example Component
 *
 * This component demonstrates the usage of Button, IconButton, and ButtonGroup
 * components from the design system, showcasing various variants, sizes, and states.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var button_1 = require("../design-system/components/button");
var layout_1 = require("../design-system/components/layout");
var typography_1 = require("../design-system/components/typography");
// Simple icon components for demonstration purposes
var PlusIcon = function () { return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>); };
var ArrowIcon = function () { return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>); };
var HeartIcon = function () { return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>); };
/**
 * ButtonExample Component showcasing Button components
 */
var ButtonExample = function () {
    return (<layout_1.Container maxWidth="lg" py="xl">
      <typography_1.Heading as="h1" mb="lg">Button Components</typography_1.Heading>
      <typography_1.Typography variant="body1" mb="xl">
        These button components implement sacred geometry principles for sizing, 
        proportions, and visual harmony.
      </typography_1.Typography>
      
      {/* Button Variants */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Button Variants</typography_1.Heading>
        <layout_1.Stack direction="horizontal" spacing="md">
          <button_1.Button variant="primary">Primary</button_1.Button>
          <button_1.Button variant="secondary">Secondary</button_1.Button>
          <button_1.Button variant="accent">Accent</button_1.Button>
          <button_1.Button variant="outline">Outline</button_1.Button>
          <button_1.Button variant="ghost">Ghost</button_1.Button>
          <button_1.Button variant="link">Link</button_1.Button>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Button Sizes */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Button Sizes</typography_1.Heading>
        <layout_1.Stack direction="horizontal" spacing="md" align="center">
          <button_1.Button size="sm">Small</button_1.Button>
          <button_1.Button size="md">Medium</button_1.Button>
          <button_1.Button size="lg">Large</button_1.Button>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Button States */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Button States</typography_1.Heading>
        <layout_1.Stack direction="horizontal" spacing="md">
          <button_1.Button>Default</button_1.Button>
          <button_1.Button isLoading>Loading</button_1.Button>
          <button_1.Button isDisabled>Disabled</button_1.Button>
          <button_1.Button isFullWidth>Full Width (in a Stack)</button_1.Button>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Buttons with Icons */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Buttons with Icons</typography_1.Heading>
        <layout_1.Stack direction="horizontal" spacing="md">
          <button_1.Button leftIcon={<PlusIcon />}>Add Item</button_1.Button>
          <button_1.Button rightIcon={<ArrowIcon />}>Next Step</button_1.Button>
          <button_1.Button leftIcon={<HeartIcon />} rightIcon={<HeartIcon />}>With Both Icons</button_1.Button>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Icon Buttons */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Icon Buttons</typography_1.Heading>
        <layout_1.Stack direction="horizontal" spacing="md" align="center">
          <button_1.IconButton icon={<PlusIcon />} aria-label="Add item" size="sm"/>
          <button_1.IconButton icon={<ArrowIcon />} aria-label="Go to next page" size="md"/>
          <button_1.IconButton icon={<HeartIcon />} aria-label="Like" size="lg"/>
          <button_1.IconButton icon={<PlusIcon />} aria-label="Add with round button" isRound variant="secondary"/>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Button Groups */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Button Groups</typography_1.Heading>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Spaced Group</typography_1.Heading>
        <button_1.ButtonGroup mb="md">
          <button_1.Button>Left</button_1.Button>
          <button_1.Button>Middle</button_1.Button>
          <button_1.Button>Right</button_1.Button>
        </button_1.ButtonGroup>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Attached Group</typography_1.Heading>
        <button_1.ButtonGroup mb="md" isAttached>
          <button_1.Button>Left</button_1.Button>
          <button_1.Button>Middle</button_1.Button>
          <button_1.Button>Right</button_1.Button>
        </button_1.ButtonGroup>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Equal Width Group</typography_1.Heading>
        <button_1.ButtonGroup mb="md" isEqual>
          <button_1.Button>First</button_1.Button>
          <button_1.Button>Second with longer text</button_1.Button>
          <button_1.Button>Third</button_1.Button>
        </button_1.ButtonGroup>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Vertical Group</typography_1.Heading>
        <button_1.ButtonGroup direction="vertical" isEqual width="200px">
          <button_1.Button>Top</button_1.Button>
          <button_1.Button>Middle</button_1.Button>
          <button_1.Button>Bottom</button_1.Button>
        </button_1.ButtonGroup>
      </layout_1.Box>
      
      {/* Button Use Cases */}
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Common Use Cases</typography_1.Heading>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Form Buttons</typography_1.Heading>
        <button_1.ButtonGroup mb="md">
          <button_1.Button variant="primary">Submit</button_1.Button>
          <button_1.Button variant="outline">Cancel</button_1.Button>
        </button_1.ButtonGroup>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Navigation</typography_1.Heading>
        <button_1.ButtonGroup mb="md">
          <button_1.Button leftIcon={<ArrowIcon style={{ transform: 'rotate(180deg)' }}/>} variant="ghost">
            Previous
          </button_1.Button>
          <button_1.Button rightIcon={<ArrowIcon />} variant="ghost">
            Next
          </button_1.Button>
        </button_1.ButtonGroup>
        
        <typography_1.Heading as="h3" variant="h6" mb="sm">Call to Action</typography_1.Heading>
        <button_1.Button size="lg" variant="accent" rightIcon={<ArrowIcon />} mb="md">
          Book Your Appointment
        </button_1.Button>
      </layout_1.Box>
    </layout_1.Container>);
};
exports.default = ButtonExample;
