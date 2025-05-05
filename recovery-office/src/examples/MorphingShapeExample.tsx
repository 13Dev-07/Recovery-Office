/**
 * MorphingShape Example
 * 
 * This component demonstrates the MorphingShape animation component
 * which morphs between different SVG paths using sacred geometry principles.
 */

import * as React from 'react';
import { useState } from 'react';;
import { Box } from '../design-system/components/layout';
import { Button } from '../design-system/components/button';
import { Heading, Typography } from '../design-system/components/typography';
import { MorphingShape } from '../design-system/components/animation/MorphingShape';
import { PHI, PHI_INVERSE } from '../constants/sacred-geometry';

// Sample SVG paths for demonstration
const SAMPLE_PATHS = {
  // Circle path
  circle: "M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0",
  
  // Square path
  square: "M10,10 L90,10 L90,90 L10,90 Z",
  
  // Triangle path (equilateral)
  triangle: "M50,10 L90,85 L10,85 Z",
  
  // Star path (five-pointed)
  star: "M50,10 L61.8,35.5 L90,40.9 L70,61.5 L75.5,90 L50,76.5 L24.5,90 L30,61.5 L10,40.9 L38.2,35.5 Z",
  
  // Flower shape (based on golden ratio)
  flower: `M50,50 
    m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0
    m-15,-15 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0
    m0,30 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0
    m-15,-15 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0
    m0,30 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0`,
  
  // Spiral based on golden ratio
  spiral: `M50,50 
    m0,0 l${5*PHI_INVERSE},${5*PHI_INVERSE}
    l${8*PHI_INVERSE},${8*PHI_INVERSE} 
    l${13*PHI_INVERSE},${13*PHI_INVERSE} 
    l${21*PHI_INVERSE},${21*PHI_INVERSE} 
    l${34*PHI_INVERSE},${34*PHI_INVERSE}`
};

// Create an array of all paths for the cycling example
const allPaths = Object.values(SAMPLE_PATHS);

const MorphingShapeExample: React.FC = () => {
  // State to track active shape in the first example
  const [activeShape, setActiveShape] = useState<keyof typeof SAMPLE_PATHS>('circle');
  
  // State to track active index in the second example
  const [activeIndex, setActiveIndex] = useState(0);
  
  // State to track whether the auto-cycling example is enabled
  const [isCycling, setIsCycling] = useState(false);
  
  return (
    <Box p="lg">
      <Heading as="h1" mb="lg">MorphingShape Component Example</Heading>
      <Typography variant="body1" mb="xl">
        This example demonstrates the MorphingShape component which animates between 
        different SVG paths using sacred geometry principles for timing and easing.
      </Typography>
      
      <Box mb="xl">
        <Heading as="h2" mb="md">Basic Shape Morphing</Heading>
        <Typography variant="body2" mb="md">
          Click on any shape button to morph between different geometric forms.
          Each transition uses golden ratio timing for natural, pleasing animations.
        </Typography>
        
        <Box display="flex" flexDirection="row" gap="md" mb="lg">
          <Button 
            onClick={() => setActiveShape('circle')}
            variant={activeShape === 'circle' ? 'solid' : 'outline'}
          >
            Circle
          </Button>
          <Button 
            onClick={() => setActiveShape('square')}
            variant={activeShape === 'square' ? 'solid' : 'outline'}
          >
            Square
          </Button>
          <Button 
            onClick={() => setActiveShape('triangle')}
            variant={activeShape === 'triangle' ? 'solid' : 'outline'}
          >
            Triangle
          </Button>
          <Button 
            onClick={() => setActiveShape('star')}
            variant={activeShape === 'star' ? 'solid' : 'outline'}
          >
            Star
          </Button>
          <Button 
            onClick={() => setActiveShape('flower')}
            variant={activeShape === 'flower' ? 'solid' : 'outline'}
          >
            Flower
          </Button>
          <Button 
            onClick={() => setActiveShape('spiral')}
            variant={activeShape === 'spiral' ? 'solid' : 'outline'}
          >
            Spiral
          </Button>
        </Box>
        
        <Box 
          width="200px" 
          height="200px" 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="md"
          p="md"
          mb="xl"
        >
          <MorphingShape
            paths={[SAMPLE_PATHS[activeShape] ?? 1]}
            activeIndex={0}
            duration="slow"
            easing="goldenEaseInOut"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </Box>
      </Box>
      
      <Box mb="xl">
        <Heading as="h2" mb="md">Sequential Morphing</Heading>
        <Typography variant="body2" mb="md">
          This example allows you to progress through shapes in sequence.
        </Typography>
        
        <Box display="flex" flexDirection="row" gap="md" mb="lg">
          <Button 
            onClick={() => setActiveIndex(prev => (prev - 1 + allPaths.length) % allPaths.length)}
            variant="outline"
          >
            Previous
          </Button>
          <Typography variant="body1" alignSelf="center">
            Shape {activeIndex + 1} of {allPaths.length}
          </Typography>
          <Button 
            onClick={() => setActiveIndex(prev => (prev + 1) % allPaths.length)}
            variant="outline"
          >
            Next
          </Button>
        </Box>
        
        <Box 
          width="200px" 
          height="200px" 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="md"
          p="md"
          mb="xl"
        >
          <MorphingShape
            paths={allPaths}
            activeIndex={activeIndex}
            duration="slow"
            easing="goldenEaseInOut"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </Box>
      </Box>
      
      <Box mb="xl">
        <Heading as="h2" mb="md">Auto-Cycling Shapes</Heading>
        <Typography variant="body2" mb="md">
          This example demonstrates automatic cycling between shapes.
        </Typography>
        
        <Box display="flex" flexDirection="row" gap="md" mb="lg">
          <Button 
            onClick={() => setIsCycling(!isCycling)}
            variant={isCycling ? 'solid' : 'outline'}
          >
            {isCycling ? 'Stop Cycling' : 'Start Cycling'}
          </Button>
        </Box>
        
        <Box 
          width="200px" 
          height="200px" 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="md"
          p="md"
          mb="xl"
        >
          <MorphingShape
            paths={allPaths}
            loop={isCycling}
            loopInterval={2}
            duration="slow"
            easing="goldenEaseInOut"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MorphingShapeExample; 






