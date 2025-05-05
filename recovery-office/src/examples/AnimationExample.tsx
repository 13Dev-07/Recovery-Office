/**
 * Animation Components Example
 * 
 * This file showcases all animation components in the Recovery Office design system.
 * Each example demonstrates the proper usage and sacred geometry principles
 * incorporated into the animations.
 */

import * as React from 'react';
import { useState, useEffect } from 'react';;
import { 
  FadeIn, 
  ScaleFade, 
  SlideIn, 
  ScrollReveal,
  ParallaxLayer,
  Sequence,
  Morph
} from '../design-system/components/animation';
import { 
  Box, 
  Flex, 
  GoldenSection, 
  Container,
  Grid
} from '../design-system/components/layout';
import { 
  Typography, 
  Heading, 
  Text, 
  Paragraph 
} from '../design-system/components/typography';
import { 
  Button, 
  ButtonGroup 
} from '../design-system/components/button';
import { 
  OliveBranch, 
  FlowerOfLife, 
  FibonacciSpiral 
} from '../design-system/components/botanical';
import { PHI, PHI_INVERSE, FIBONACCI } from '../constants/sacred-geometry';

// Example SVG paths for Morph component
const morphPaths = [
  "M10,50 Q25,25 50,50 T90,50",
  "M10,50 Q50,10 50,50 T90,50",
  "M10,90 Q50,10 90,90",
];

/**
 * Animation Examples Component
 * Showcases the animation components with various configurations
 */
const AnimationExample: React.FC = () => {
  // State for controlling animations visibility
  const [showFade, setShowFade] = useState(true);
  const [showScale, setShowScale] = useState(true);
  const [showSlide, setShowSlide] = useState(true);
  const [showSequence, setShowSequence] = useState(true);
  const [morphPathIndex, setMorphPathIndex] = useState(0);
  
  // Toggle state functions
  const toggleFade = () => setShowFade(!showFade);
  const toggleScale = () => setShowScale(!showScale);
  const toggleSlide = () => setShowSlide(!showSlide);
  const toggleSequence = () => setShowSequence(!showSequence);
  
  // Cycle through morph paths every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphPathIndex((prevIndex) => (prevIndex + 1) % morphPaths.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Container maxWidth="lg" p={4}>
      <Heading as="h1" mb={4}>Animation Components - Sacred Geometry Principles</Heading>
      <Paragraph mb={5}>
        Each animation in the Recovery Office design system follows sacred geometry principles,
        using the Golden Ratio (PHI = 1.618) and Fibonacci sequence for natural, harmonious motion.
        Timing, easing functions, and proportions are all derived from these mathematical constants.
      </Paragraph>
      
      {/* Main content in GoldenSection layout */}
      <GoldenSection direction="horizontal" mb={6}>
        <Box p={4} bg="background.100" borderRadius="md">
          <Heading as="h2" mb={4}>Animation Controls</Heading>
          <ButtonGroup direction="vertical" spacing="sm" isEqual>
            <Button onClick={toggleFade} width="100%">
              {showFade ? 'Hide' : 'Show'} Fade Animation
            </Button>
            <Button onClick={toggleScale} width="100%">
              {showScale ? 'Hide' : 'Show'} Scale Animation
            </Button>
            <Button onClick={toggleSlide} width="100%">
              {showSlide ? 'Hide' : 'Show'} Slide Animation
            </Button>
            <Button onClick={toggleSequence} width="100%">
              {showSequence ? 'Hide' : 'Show'} Sequence Animation
            </Button>
          </ButtonGroup>
          
          {/* FibonacciSpiral decoration */}
          <Box mt={6} textAlign="center">
            <FibonacciSpiral 
              width={150} 
              height={150} 
              iterations={7}
              color="primary.500"
              opacity={0.2}
            />
            <Text mt={2} size="sm" textAlign="center">Fibonacci Spiral</Text>
          </Box>
        </Box>
        
        <Box p={4}>
          <Heading as="h2" mb={4}>Animation Examples</Heading>
          
          {/* FadeIn example */}
          <Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <Typography variant="h4" mb={3}>FadeIn Animation</Typography>
            <FadeIn 
              isVisible={showFade}
              duration="normal"
              easing="standard"
              useGoldenRatio
            >
              <Box p={3} bg="primary.100" borderRadius="md">
                <Text>
                  FadeIn uses the Golden Ratio ({PHI.toFixed(3)}) to calculate natural timing.
                  Duration is multiplied by PHI_INVERSE ({PHI_INVERSE.toFixed(3)}) for 
                  balanced, harmonious motion.
                </Text>
              </Box>
            </FadeIn>
          </Box>
          
          {/* ScaleFade example */}
          <Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <Typography variant="h4" mb={3}>ScaleFade Animation</Typography>
            <ScaleFade 
              isVisible={showScale}
              duration="normal"
              initialScale={PHI_INVERSE}
              easing="easeOut"
            >
              <Box p={3} bg="secondary.100" borderRadius="md">
                <Text>
                  ScaleFade combines scaling and fading effects, using PHI_INVERSE ({PHI_INVERSE.toFixed(3)})
                  as the initial scale. This creates a natural feeling entrance animation based on the
                  Golden Ratio.
                </Text>
              </Box>
            </ScaleFade>
          </Box>
          
          {/* SlideIn example */}
          <Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <Typography variant="h4" mb={3}>SlideIn Animation</Typography>
            <SlideIn 
              isVisible={showSlide}
              direction="up"
              distance={getFibonacciByIndex(7)} // 13px - Fibonacci number
              duration="normal"
              easing="standard"
            >
              <Box p={3} bg="accent.gold" color="text.dark" borderRadius="md">
                <Text>
                  SlideIn uses Fibonacci numbers ({FIBONACCI.slice(0, 10).join(', ')}) for
                  natural distance measurements. The slide distance is {getFibonacciByIndex(7)}px, which
                  is the 7th Fibonacci number.
                </Text>
              </Box>
            </SlideIn>
          </Box>
          
          {/* Sequence example */}
          <Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <Typography variant="h4" mb={3}>Sequence Animation</Typography>
            <Sequence
              isVisible={showSequence}
              variant="slide-up"
              staggerDelay={0.1 * PHI_INVERSE}
              useFibonacciStagger
              duration={0.5}
            >
              {[...Array(5)].map((_, i) => (
                <Box 
                  key={i} 
                  p={2} 
                  mb={2} 
                  bg={`primary.${(i + 3) * 100}`} 
                  color="text.light"
                  borderRadius="md"
                >
                  <Text>Sequence Item {i + 1}: Fibonacci stagger timing creates natural rhythm</Text>
                </Box>
              ))}
            </Sequence>
          </Box>
          
          {/* Morph example */}
          <Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <Typography variant="h4" mb={3}>Morph Animation</Typography>
            <Box height="100px" display="flex" alignItems="center" justifyContent="center">
              <Morph
                paths={morphPaths}
                activeIndex={morphPathIndex}
                duration="slow"
                easing="spring"
                strokeColor="primary.500"
                strokeWidth={3}
                width="70%"
                height="70px"
                viewBox="0 0 100 100"
                useGoldenRatio
              />
            </Box>
            <Text mt={2} textAlign="center" size="sm">
              Morphing between paths with sacred timing (PHI-based ease)
            </Text>
          </Box>
        </Box>
      </GoldenSection>
      
      {/* ScrollReveal and ParallaxLayer effects */}
      <Heading as="h2" mt={8} mb={4}>Scroll-Based Animation Effects</Heading>
      <Paragraph mb={6}>
        The following examples demonstrate scroll-based animations. Scroll down to see the effects. 
        These components use sacred geometry principles for timing and movement physics.
      </Paragraph>
      
      <Grid templateColumns="1fr" gap={6}>
        {/* ScrollReveal examples */}
        {[...Array(4)].map((_, i) => {
          const variants = ['fade', 'slide-up', 'slide-down', 'scale'];
          const colors = ['primary.100', 'secondary.100', 'accent.teal', 'accent.lavender'];
          
          return (
            <ScrollReveal
              key={i}
              variant={variants[i % variants.length] as any}
              duration="normal"
              threshold={0.1}
              delay={0.1 * i * PHI_INVERSE}
              useGoldenRatio
            >
              <Box 
                p={5}
                bg={colors[i % colors.length]}
                borderRadius="md"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <OliveBranch width={80} height={40} color="text.primary" opacity={0.7} />
                <Heading as="h3" mt={3}>ScrollReveal Example {i + 1}</Heading>
                <Text>
                  Reveals with "{variants[i % variants.length]}" animation
                  when scrolled into view
                </Text>
              </Box>
            </ScrollReveal>
          );
        })}
        
        {/* ParallaxLayer example */}
        <Box position="relative" height="400px" overflow="hidden" borderRadius="md" mt={8}>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="background.200"
            zIndex={1}
          />
          
          <ParallaxLayer
            depth={PHI} // Golden Ratio
            direction="vertical"
            useGoldenRatioPhysics
            zIndex={2}
          >
            <Box 
              width="100%" 
              display="flex" 
              justifyContent="center" 
              p={5}
            >
              <FlowerOfLife
                width={200}
                height={200}
                color="primary.300"
                opacity={0.7}
              />
            </Box>
          </ParallaxLayer>
          
          <ParallaxLayer
            depth={PHI * 2}
            direction="both"
            withRotation
            maxRotationAngle={3}
            useGoldenRatioPhysics
            zIndex={3}
          >
            <Box 
              position="absolute" 
              top="20%" 
              left="15%"
            >
              <Typography variant="h2" color="text.primary">
                Parallax Effect
              </Typography>
            </Box>
          </ParallaxLayer>
          
          <ParallaxLayer
            depth={PHI * 0.8}
            direction="horizontal"
            useGoldenRatioPhysics
            zIndex={2}
          >
            <Box 
              position="absolute" 
              bottom="20%" 
              right="10%"
            >
              <Typography variant="body1" color="text.primary">
                Based on Golden Ratio Physics
              </Typography>
            </Box>
          </ParallaxLayer>
        </Box>
      </Grid>
      
      <Box mt={8} pt={4} borderTop="1px solid" borderColor="background.200">
        <Text textAlign="center" size="sm" color="text.secondary">
          These animations adhere to sacred geometry principles through the use of Fibonacci numbers,
          Golden Ratio (PHI = {PHI.toFixed(3)}), and harmonious timing based on natural mathematical constants.
        </Text>
      </Box>
    </Container>
  );
};

export default AnimationExample; 






