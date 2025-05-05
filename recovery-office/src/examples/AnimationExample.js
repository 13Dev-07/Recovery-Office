"use strict";
/**
 * Animation Components Example
 *
 * This file showcases all animation components in the Recovery Office design system.
 * Each example demonstrates the proper usage and sacred geometry principles
 * incorporated into the animations.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var animation_1 = require("../design-system/components/animation");
var layout_1 = require("../design-system/components/layout");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var botanical_1 = require("../design-system/components/botanical");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Example SVG paths for Morph component
var morphPaths = [
    "M10,50 Q25,25 50,50 T90,50",
    "M10,50 Q50,10 50,50 T90,50",
    "M10,90 Q50,10 90,90",
];
/**
 * Animation Examples Component
 * Showcases the animation components with various configurations
 */
var AnimationExample = function () {
    // State for controlling animations visibility
    var _a = (0, react_1.useState)(true), showFade = _a[0], setShowFade = _a[1];
    var _b = (0, react_1.useState)(true), showScale = _b[0], setShowScale = _b[1];
    var _c = (0, react_1.useState)(true), showSlide = _c[0], setShowSlide = _c[1];
    var _d = (0, react_1.useState)(true), showSequence = _d[0], setShowSequence = _d[1];
    var _e = (0, react_1.useState)(0), morphPathIndex = _e[0], setMorphPathIndex = _e[1];
    // Toggle state functions
    var toggleFade = function () { return setShowFade(!showFade); };
    var toggleScale = function () { return setShowScale(!showScale); };
    var toggleSlide = function () { return setShowSlide(!showSlide); };
    var toggleSequence = function () { return setShowSequence(!showSequence); };
    // Cycle through morph paths every 3 seconds
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setMorphPathIndex(function (prevIndex) { return (prevIndex + 1) % morphPaths.length; });
        }, 3000);
        return function () { return clearInterval(interval); };
    }, []);
    return (<layout_1.Container maxWidth="lg" p={4}>
      <typography_1.Heading as="h1" mb={4}>Animation Components - Sacred Geometry Principles</typography_1.Heading>
      <typography_1.Paragraph mb={5}>
        Each animation in the Recovery Office design system follows sacred geometry principles,
        using the Golden Ratio (PHI = 1.618) and Fibonacci sequence for natural, harmonious motion.
        Timing, easing functions, and proportions are all derived from these mathematical constants.
      </typography_1.Paragraph>
      
      {/* Main content in GoldenSection layout */}
      <layout_1.GoldenSection direction="horizontal" mb={6}>
        <layout_1.Box p={4} bg="background.100" borderRadius="md">
          <typography_1.Heading as="h2" mb={4}>Animation Controls</typography_1.Heading>
          <button_1.ButtonGroup direction="vertical" spacing="sm" isEqual>
            <button_1.Button onClick={toggleFade} width="100%">
              {showFade ? 'Hide' : 'Show'} Fade Animation
            </button_1.Button>
            <button_1.Button onClick={toggleScale} width="100%">
              {showScale ? 'Hide' : 'Show'} Scale Animation
            </button_1.Button>
            <button_1.Button onClick={toggleSlide} width="100%">
              {showSlide ? 'Hide' : 'Show'} Slide Animation
            </button_1.Button>
            <button_1.Button onClick={toggleSequence} width="100%">
              {showSequence ? 'Hide' : 'Show'} Sequence Animation
            </button_1.Button>
          </button_1.ButtonGroup>
          
          {/* FibonacciSpiral decoration */}
          <layout_1.Box mt={6} textAlign="center">
            <botanical_1.FibonacciSpiral width={150} height={150} iterations={7} color="primary.500" opacity={0.2}/>
            <typography_1.Text mt={2} size="sm" textAlign="center">Fibonacci Spiral</typography_1.Text>
          </layout_1.Box>
        </layout_1.Box>
        
        <layout_1.Box p={4}>
          <typography_1.Heading as="h2" mb={4}>Animation Examples</typography_1.Heading>
          
          {/* FadeIn example */}
          <layout_1.Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <typography_1.Typography variant="h4" mb={3}>FadeIn Animation</typography_1.Typography>
            <animation_1.FadeIn isVisible={showFade} duration="normal" easing="standard" useGoldenRatio>
              <layout_1.Box p={3} bg="primary.100" borderRadius="md">
                <typography_1.Text>
                  FadeIn uses the Golden Ratio ({sacred_geometry_1.PHI.toFixed(3)}) to calculate natural timing.
                  Duration is multiplied by PHI_INVERSE ({sacred_geometry_1.PHI_INVERSE.toFixed(3)}) for 
                  balanced, harmonious motion.
                </typography_1.Text>
              </layout_1.Box>
            </animation_1.FadeIn>
          </layout_1.Box>
          
          {/* ScaleFade example */}
          <layout_1.Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <typography_1.Typography variant="h4" mb={3}>ScaleFade Animation</typography_1.Typography>
            <animation_1.ScaleFade isVisible={showScale} duration="normal" initialScale={sacred_geometry_1.PHI_INVERSE} easing="easeOut">
              <layout_1.Box p={3} bg="secondary.100" borderRadius="md">
                <typography_1.Text>
                  ScaleFade combines scaling and fading effects, using PHI_INVERSE ({sacred_geometry_1.PHI_INVERSE.toFixed(3)})
                  as the initial scale. This creates a natural feeling entrance animation based on the
                  Golden Ratio.
                </typography_1.Text>
              </layout_1.Box>
            </animation_1.ScaleFade>
          </layout_1.Box>
          
          {/* SlideIn example */}
          <layout_1.Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <typography_1.Typography variant="h4" mb={3}>SlideIn Animation</typography_1.Typography>
            <animation_1.SlideIn isVisible={showSlide} direction="up" distance={getFibonacciByIndex(7)} // 13px - Fibonacci number
     duration="normal" easing="standard">
              <layout_1.Box p={3} bg="accent.gold" color="text.dark" borderRadius="md">
                <typography_1.Text>
                  SlideIn uses Fibonacci numbers ({sacred_geometry_1.FIBONACCI.slice(0, 10).join(', ')}) for
                  natural distance measurements. The slide distance is {getFibonacciByIndex(7)}px, which
                  is the 7th Fibonacci number.
                </typography_1.Text>
              </layout_1.Box>
            </animation_1.SlideIn>
          </layout_1.Box>
          
          {/* Sequence example */}
          <layout_1.Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <typography_1.Typography variant="h4" mb={3}>Sequence Animation</typography_1.Typography>
            <animation_1.Sequence isVisible={showSequence} variant="slide-up" staggerDelay={0.1 * sacred_geometry_1.PHI_INVERSE} useFibonacciStagger duration={0.5}>
              {__spreadArray([], Array(5), true).map(function (_, i) { return (<layout_1.Box key={i} p={2} mb={2} bg={"primary.".concat((i + 3) * 100)} color="text.light" borderRadius="md">
                  <typography_1.Text>Sequence Item {i + 1}: Fibonacci stagger timing creates natural rhythm</typography_1.Text>
                </layout_1.Box>); })}
            </animation_1.Sequence>
          </layout_1.Box>
          
          {/* Morph example */}
          <layout_1.Box mb={5} p={3} border="1px solid" borderColor="background.200" borderRadius="md">
            <typography_1.Typography variant="h4" mb={3}>Morph Animation</typography_1.Typography>
            <layout_1.Box height="100px" display="flex" alignItems="center" justifyContent="center">
              <animation_1.Morph paths={morphPaths} activeIndex={morphPathIndex} duration="slow" easing="spring" strokeColor="primary.500" strokeWidth={3} width="70%" height="70px" viewBox="0 0 100 100" useGoldenRatio/>
            </layout_1.Box>
            <typography_1.Text mt={2} textAlign="center" size="sm">
              Morphing between paths with sacred timing (PHI-based ease)
            </typography_1.Text>
          </layout_1.Box>
        </layout_1.Box>
      </layout_1.GoldenSection>
      
      {/* ScrollReveal and ParallaxLayer effects */}
      <typography_1.Heading as="h2" mt={8} mb={4}>Scroll-Based Animation Effects</typography_1.Heading>
      <typography_1.Paragraph mb={6}>
        The following examples demonstrate scroll-based animations. Scroll down to see the effects. 
        These components use sacred geometry principles for timing and movement physics.
      </typography_1.Paragraph>
      
      <layout_1.Grid templateColumns="1fr" gap={6}>
        {/* ScrollReveal examples */}
        {__spreadArray([], Array(4), true).map(function (_, i) {
            var variants = ['fade', 'slide-up', 'slide-down', 'scale'];
            var colors = ['primary.100', 'secondary.100', 'accent.teal', 'accent.lavender'];
            return (<animation_1.ScrollReveal key={i} variant={variants[i % variants.length]} duration="normal" threshold={0.1} delay={0.1 * i * sacred_geometry_1.PHI_INVERSE} useGoldenRatio>
              <layout_1.Box p={5} bg={colors[i % colors.length]} borderRadius="md" height="200px" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <botanical_1.OliveBranch width={80} height={40} color="text.primary" opacity={0.7}/>
                <typography_1.Heading as="h3" mt={3}>ScrollReveal Example {i + 1}</typography_1.Heading>
                <typography_1.Text>
                  Reveals with "{variants[i % variants.length]}" animation
                  when scrolled into view
                </typography_1.Text>
              </layout_1.Box>
            </animation_1.ScrollReveal>);
        })}
        
        {/* ParallaxLayer example */}
        <layout_1.Box position="relative" height="400px" overflow="hidden" borderRadius="md" mt={8}>
          <layout_1.Box position="absolute" top={0} left={0} width="100%" height="100%" bg="background.200" zIndex={1}/>
          
          <animation_1.ParallaxLayer depth={sacred_geometry_1.PHI} // Golden Ratio
     direction="vertical" useGoldenRatioPhysics zIndex={2}>
            <layout_1.Box width="100%" display="flex" justifyContent="center" p={5}>
              <botanical_1.FlowerOfLife width={200} height={200} color="primary.300" opacity={0.7}/>
            </layout_1.Box>
          </animation_1.ParallaxLayer>
          
          <animation_1.ParallaxLayer depth={sacred_geometry_1.PHI * 2} direction="both" withRotation maxRotationAngle={3} useGoldenRatioPhysics zIndex={3}>
            <layout_1.Box position="absolute" top="20%" left="15%">
              <typography_1.Typography variant="h2" color="text.primary">
                Parallax Effect
              </typography_1.Typography>
            </layout_1.Box>
          </animation_1.ParallaxLayer>
          
          <animation_1.ParallaxLayer depth={sacred_geometry_1.PHI * 0.8} direction="horizontal" useGoldenRatioPhysics zIndex={2}>
            <layout_1.Box position="absolute" bottom="20%" right="10%">
              <typography_1.Typography variant="body1" color="text.primary">
                Based on Golden Ratio Physics
              </typography_1.Typography>
            </layout_1.Box>
          </animation_1.ParallaxLayer>
        </layout_1.Box>
      </layout_1.Grid>
      
      <layout_1.Box mt={8} pt={4} borderTop="1px solid" borderColor="background.200">
        <typography_1.Text textAlign="center" size="sm" color="text.secondary">
          These animations adhere to sacred geometry principles through the use of Fibonacci numbers,
          Golden Ratio (PHI = {sacred_geometry_1.PHI.toFixed(3)}), and harmonious timing based on natural mathematical constants.
        </typography_1.Text>
      </layout_1.Box>
    </layout_1.Container>);
};
exports.default = AnimationExample;
