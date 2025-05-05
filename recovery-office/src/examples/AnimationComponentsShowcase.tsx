/**
 * Animation Components Showcase
 * 
 * This example demonstrates all the animation components in the Recovery Office
 * design system. Each component is shown with its key features and properties.
 */

import * as React from 'react';
import { useState } from 'react';;
import { Box, Flex, Stack } from '../design-system/components/layout';
import { Typography, Heading } from '../design-system/components/typography';
import { Button } from '../design-system/components/button';
import { 
  FadeIn, 
  ScaleFade, 
  SlideIn, 
  ScrollReveal, 
  ParallaxLayer,
  Sequence,
  Morph
} from '../design-system/components/animation';
import { FlowerOfLife, OliveBranch } from '../design-system/components/botanical';

/**
 * Animation Components Showcase
 */
const AnimationComponentsShowcase: React.FC = () => {
  // State for controlling animation visibility
  const [showFade, setShowFade] = useState(true);
  const [showScale, setShowScale] = useState(true);
  const [showSlide, setShowSlide] = useState(true);
  const [showSequence, setShowSequence] = useState(true);
  const [morphIndex, setMorphIndex] = useState(0);
  
  // Toggle helpers
  const toggleFade = () => setShowFade(!showFade);
  const toggleScale = () => setShowScale(!showScale);
  const toggleSlide = () => setShowSlide(!showSlide);
  const toggleSequence = () => setShowSequence(!showSequence);
  const cycleMorph = () => setMorphIndex((prev) => (prev + 1) % svgPaths.length);
  
  // SVG paths for Morph component
  const svgPaths = [
    "M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50", // Circle
    "M10,10 L90,10 L90,90 L10,90 Z", // Square
    "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
    "M10,30 C10,10 90,10 90,30 C90,50 10,50 10,70 C10,90 90,90 90,70", // Wave
  ];
  
  return (
    <Box p="lg">
      <Heading as="h1" mb="lg">Animation Components Showcase</Heading>
      <Typography variant="body1" mb="xl">
        This showcase demonstrates the animation components included in the Recovery Office design system.
        All animations are based on sacred geometry principles for natural, harmonious movement.
      </Typography>
      
      {/* FadeIn Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">FadeIn Component</Heading>
        <Typography variant="body2" mb="md">
          The FadeIn component gradually reveals its children with a fade animation.
        </Typography>
        
        <Button onClick={toggleFade} mb="lg">
          {showFade ? "Hide" : "Show"} Content
        </Button>
        
        <FadeIn 
          isVisible={showFade} 
          duration="slow"
          delay={0.2}
          easing="easeOut"
          scale={0.95}
        >
          <Box p="lg" bg="primary.100" borderRadius="md">
            <Typography variant="body1">
              This content fades in and out with golden ratio timing.
            </Typography>
          </Box>
        </FadeIn>
      </Box>
      
      {/* ScaleFade Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">ScaleFade Component</Heading>
        <Typography variant="body2" mb="md">
          The ScaleFade component combines scaling and fading for smooth entrance/exit animations.
        </Typography>
        
        <Button onClick={toggleScale} mb="lg">
          {showScale ? "Hide" : "Show"} Content
        </Button>
        
        <ScaleFade 
          isVisible={showScale} 
          duration="normal"
          delay={0.1}
          easing="standard"
        >
          <Box p="lg" bg="secondary.100" borderRadius="md">
            <Typography variant="body1">
              This content scales and fades with the golden ratio for natural movement.
            </Typography>
          </Box>
        </ScaleFade>
      </Box>
      
      {/* SlideIn Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">SlideIn Component</Heading>
        <Typography variant="body2" mb="md">
          The SlideIn component animates content entering from a specific direction.
        </Typography>
        
        <Flex gap="md" mb="lg">
          <Button onClick={toggleSlide}>
            {showSlide ? "Hide" : "Show"} Content
          </Button>
          
          <Button onClick={() => setShowSlide(false)} variant="outline">
            Hide All
          </Button>
        </Flex>
        
        <Flex gap="lg">
          <SlideIn 
            isVisible={showSlide} 
            direction="up"
            duration="normal"
            delay={0}
          >
            <Box p="md" bg="accent.gold" width="100px" height="100px" borderRadius="md">
              <Typography variant="body2" color="white">Up</Typography>
            </Box>
          </SlideIn>
          
          <SlideIn 
            isVisible={showSlide} 
            direction="down"
            duration="normal"
            delay={0.1}
          >
            <Box p="md" bg="accent.teal" width="100px" height="100px" borderRadius="md">
              <Typography variant="body2" color="white">Down</Typography>
            </Box>
          </SlideIn>
          
          <SlideIn 
            isVisible={showSlide} 
            direction="left"
            duration="normal"
            delay={0.2}
          >
            <Box p="md" bg="accent.copper" width="100px" height="100px" borderRadius="md">
              <Typography variant="body2" color="white">Left</Typography>
            </Box>
          </SlideIn>
          
          <SlideIn 
            isVisible={showSlide} 
            direction="right"
            duration="normal"
            delay={0.3}
          >
            <Box p="md" bg="accent.rose" width="100px" height="100px" borderRadius="md">
              <Typography variant="body2" color="white">Right</Typography>
            </Box>
          </SlideIn>
        </Flex>
      </Box>
      
      {/* Sequence Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">Sequence Component</Heading>
        <Typography variant="body2" mb="md">
          The Sequence component animates a sequence of children with staggered timing.
        </Typography>
        
        <Button onClick={toggleSequence} mb="lg">
          {showSequence ? "Hide" : "Show"} Sequence
        </Button>
        
        <Sequence 
          isVisible={showSequence} 
          variant="slide-up"
          staggerDelay={0.1}
          useFibonacciStagger={true}
          duration={0.5}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Box 
              key={index}
              mb="sm" 
              p="md" 
              bg={`primary.${(index + 3) * 100}`} 
              borderRadius="md"
            >
              <Typography variant="body2" color={index > 2 ? "white" : "black"}>
                Sequence Item {index + 1}
              </Typography>
            </Box>
          ))}
        </Sequence>
      </Box>
      
      {/* ScrollReveal Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">ScrollReveal Component</Heading>
        <Typography variant="body2" mb="md">
          The ScrollReveal component reveals content when it enters the viewport.
        </Typography>
        
        <Flex direction="column" gap="xl">
          <ScrollReveal variant="fade" threshold={0.2}>
            <Box p="lg" bg="background.100" borderRadius="md">
              <Typography variant="body1">
                This content fades in when scrolled into view.
              </Typography>
            </Box>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-up" threshold={0.2} delay={0.1}>
            <Box p="lg" bg="background.200" borderRadius="md">
              <Typography variant="body1">
                This content slides up when scrolled into view.
              </Typography>
            </Box>
          </ScrollReveal>
          
          <ScrollReveal variant="scale-fade" threshold={0.2} delay={0.2}>
            <Box p="lg" bg="background.300" borderRadius="md">
              <Typography variant="body1">
                This content scales and fades when scrolled into view.
              </Typography>
            </Box>
          </ScrollReveal>
        </Flex>
      </Box>
      
      {/* ParallaxLayer Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">ParallaxLayer Component</Heading>
        <Typography variant="body2" mb="md">
          The ParallaxLayer component creates depth through parallax scrolling effects.
        </Typography>
        
        <Box position="relative" height="300px" overflow="hidden" borderRadius="md" bg="background.100">
          <ParallaxLayer speed={0.2}>
            <Box position="absolute" top="30%" left="20%" opacity={0.7}>
              <FlowerOfLife width={150} height={150} color="primary.300" />
            </Box>
          </ParallaxLayer>
          
          <ParallaxLayer speed={-0.3}>
            <Box position="absolute" top="40%" left="60%" opacity={0.5}>
              <OliveBranch width={150} height={150} color="secondary.400" />
            </Box>
          </ParallaxLayer>
          
          <Box 
            position="absolute" 
            top="50%" 
            left="50%" 
            transform="translate(-50%, -50%)"
            p="lg"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            width="70%"
            textAlign="center"
          >
            <Typography variant="body1">
              Scroll up and down to see the parallax effect
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* Morph Component */}
      <Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <Heading as="h2" mb="md">Morph Component</Heading>
        <Typography variant="body2" mb="md">
          The Morph component animates between SVG paths.
        </Typography>
        
        <Button onClick={cycleMorph} mb="lg">
          Change Shape
        </Button>
        
        <Box height="200px" width="200px" mx="auto">
          <Morph 
            paths={svgPaths}
            activeIndex={morphIndex}
            duration="slow"
            easing="standard"
            strokeColor="primary.500"
            strokeWidth={4}
            fill={true}
            fillColor="primary.100"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnimationComponentsShowcase; 






