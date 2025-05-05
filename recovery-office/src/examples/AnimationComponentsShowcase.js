"use strict";
/**
 * Animation Components Showcase
 *
 * This example demonstrates all the animation components in the Recovery Office
 * design system. Each component is shown with its key features and properties.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var layout_1 = require("../design-system/components/layout");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var animation_1 = require("../design-system/components/animation");
var botanical_1 = require("../design-system/components/botanical");
/**
 * Animation Components Showcase
 */
var AnimationComponentsShowcase = function () {
    // State for controlling animation visibility
    var _a = (0, react_1.useState)(true), showFade = _a[0], setShowFade = _a[1];
    var _b = (0, react_1.useState)(true), showScale = _b[0], setShowScale = _b[1];
    var _c = (0, react_1.useState)(true), showSlide = _c[0], setShowSlide = _c[1];
    var _d = (0, react_1.useState)(true), showSequence = _d[0], setShowSequence = _d[1];
    var _e = (0, react_1.useState)(0), morphIndex = _e[0], setMorphIndex = _e[1];
    // Toggle helpers
    var toggleFade = function () { return setShowFade(!showFade); };
    var toggleScale = function () { return setShowScale(!showScale); };
    var toggleSlide = function () { return setShowSlide(!showSlide); };
    var toggleSequence = function () { return setShowSequence(!showSequence); };
    var cycleMorph = function () { return setMorphIndex(function (prev) { return (prev + 1) % svgPaths.length; }); };
    // SVG paths for Morph component
    var svgPaths = [
        "M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50", // Circle
        "M10,10 L90,10 L90,90 L10,90 Z", // Square
        "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
        "M10,30 C10,10 90,10 90,30 C90,50 10,50 10,70 C10,90 90,90 90,70", // Wave
    ];
    return (<layout_1.Box p="lg">
      <typography_1.Heading as="h1" mb="lg">Animation Components Showcase</typography_1.Heading>
      <typography_1.Typography variant="body1" mb="xl">
        This showcase demonstrates the animation components included in the Recovery Office design system.
        All animations are based on sacred geometry principles for natural, harmonious movement.
      </typography_1.Typography>
      
      {/* FadeIn Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">FadeIn Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The FadeIn component gradually reveals its children with a fade animation.
        </typography_1.Typography>
        
        <button_1.Button onClick={toggleFade} mb="lg">
          {showFade ? "Hide" : "Show"} Content
        </button_1.Button>
        
        <animation_1.FadeIn isVisible={showFade} duration="slow" delay={0.2} easing="easeOut" scale={0.95}>
          <layout_1.Box p="lg" bg="primary.100" borderRadius="md">
            <typography_1.Typography variant="body1">
              This content fades in and out with golden ratio timing.
            </typography_1.Typography>
          </layout_1.Box>
        </animation_1.FadeIn>
      </layout_1.Box>
      
      {/* ScaleFade Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">ScaleFade Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The ScaleFade component combines scaling and fading for smooth entrance/exit animations.
        </typography_1.Typography>
        
        <button_1.Button onClick={toggleScale} mb="lg">
          {showScale ? "Hide" : "Show"} Content
        </button_1.Button>
        
        <animation_1.ScaleFade isVisible={showScale} duration="normal" delay={0.1} easing="standard">
          <layout_1.Box p="lg" bg="secondary.100" borderRadius="md">
            <typography_1.Typography variant="body1">
              This content scales and fades with the golden ratio for natural movement.
            </typography_1.Typography>
          </layout_1.Box>
        </animation_1.ScaleFade>
      </layout_1.Box>
      
      {/* SlideIn Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">SlideIn Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The SlideIn component animates content entering from a specific direction.
        </typography_1.Typography>
        
        <layout_1.Flex gap="md" mb="lg">
          <button_1.Button onClick={toggleSlide}>
            {showSlide ? "Hide" : "Show"} Content
          </button_1.Button>
          
          <button_1.Button onClick={function () { return setShowSlide(false); }} variant="outline">
            Hide All
          </button_1.Button>
        </layout_1.Flex>
        
        <layout_1.Flex gap="lg">
          <animation_1.SlideIn isVisible={showSlide} direction="up" duration="normal" delay={0}>
            <layout_1.Box p="md" bg="accent.gold" width="100px" height="100px" borderRadius="md">
              <typography_1.Typography variant="body2" color="white">Up</typography_1.Typography>
            </layout_1.Box>
          </animation_1.SlideIn>
          
          <animation_1.SlideIn isVisible={showSlide} direction="down" duration="normal" delay={0.1}>
            <layout_1.Box p="md" bg="accent.teal" width="100px" height="100px" borderRadius="md">
              <typography_1.Typography variant="body2" color="white">Down</typography_1.Typography>
            </layout_1.Box>
          </animation_1.SlideIn>
          
          <animation_1.SlideIn isVisible={showSlide} direction="left" duration="normal" delay={0.2}>
            <layout_1.Box p="md" bg="accent.copper" width="100px" height="100px" borderRadius="md">
              <typography_1.Typography variant="body2" color="white">Left</typography_1.Typography>
            </layout_1.Box>
          </animation_1.SlideIn>
          
          <animation_1.SlideIn isVisible={showSlide} direction="right" duration="normal" delay={0.3}>
            <layout_1.Box p="md" bg="accent.rose" width="100px" height="100px" borderRadius="md">
              <typography_1.Typography variant="body2" color="white">Right</typography_1.Typography>
            </layout_1.Box>
          </animation_1.SlideIn>
        </layout_1.Flex>
      </layout_1.Box>
      
      {/* Sequence Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">Sequence Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The Sequence component animates a sequence of children with staggered timing.
        </typography_1.Typography>
        
        <button_1.Button onClick={toggleSequence} mb="lg">
          {showSequence ? "Hide" : "Show"} Sequence
        </button_1.Button>
        
        <animation_1.Sequence isVisible={showSequence} variant="slide-up" staggerDelay={0.1} useFibonacciStagger={true} duration={0.5}>
          {Array.from({ length: 5 }).map(function (_, index) { return (<layout_1.Box key={index} mb="sm" p="md" bg={"primary.".concat((index + 3) * 100)} borderRadius="md">
              <typography_1.Typography variant="body2" color={index > 2 ? "white" : "black"}>
                Sequence Item {index + 1}
              </typography_1.Typography>
            </layout_1.Box>); })}
        </animation_1.Sequence>
      </layout_1.Box>
      
      {/* ScrollReveal Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">ScrollReveal Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The ScrollReveal component reveals content when it enters the viewport.
        </typography_1.Typography>
        
        <layout_1.Flex direction="column" gap="xl">
          <animation_1.ScrollReveal variant="fade" threshold={0.2}>
            <layout_1.Box p="lg" bg="background.100" borderRadius="md">
              <typography_1.Typography variant="body1">
                This content fades in when scrolled into view.
              </typography_1.Typography>
            </layout_1.Box>
          </animation_1.ScrollReveal>
          
          <animation_1.ScrollReveal variant="slide-up" threshold={0.2} delay={0.1}>
            <layout_1.Box p="lg" bg="background.200" borderRadius="md">
              <typography_1.Typography variant="body1">
                This content slides up when scrolled into view.
              </typography_1.Typography>
            </layout_1.Box>
          </animation_1.ScrollReveal>
          
          <animation_1.ScrollReveal variant="scale-fade" threshold={0.2} delay={0.2}>
            <layout_1.Box p="lg" bg="background.300" borderRadius="md">
              <typography_1.Typography variant="body1">
                This content scales and fades when scrolled into view.
              </typography_1.Typography>
            </layout_1.Box>
          </animation_1.ScrollReveal>
        </layout_1.Flex>
      </layout_1.Box>
      
      {/* ParallaxLayer Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">ParallaxLayer Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The ParallaxLayer component creates depth through parallax scrolling effects.
        </typography_1.Typography>
        
        <layout_1.Box position="relative" height="300px" overflow="hidden" borderRadius="md" bg="background.100">
          <animation_1.ParallaxLayer speed={0.2}>
            <layout_1.Box position="absolute" top="30%" left="20%" opacity={0.7}>
              <botanical_1.FlowerOfLife width={150} height={150} color="primary.300"/>
            </layout_1.Box>
          </animation_1.ParallaxLayer>
          
          <animation_1.ParallaxLayer speed={-0.3}>
            <layout_1.Box position="absolute" top="40%" left="60%" opacity={0.5}>
              <botanical_1.OliveBranch width={150} height={150} color="secondary.400"/>
            </layout_1.Box>
          </animation_1.ParallaxLayer>
          
          <layout_1.Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" p="lg" bg="white" borderRadius="md" boxShadow="md" width="70%" textAlign="center">
            <typography_1.Typography variant="body1">
              Scroll up and down to see the parallax effect
            </typography_1.Typography>
          </layout_1.Box>
        </layout_1.Box>
      </layout_1.Box>
      
      {/* Morph Component */}
      <layout_1.Box mb="xl" p="lg" border="1px solid" borderColor="gray.200" borderRadius="md">
        <typography_1.Heading as="h2" mb="md">Morph Component</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          The Morph component animates between SVG paths.
        </typography_1.Typography>
        
        <button_1.Button onClick={cycleMorph} mb="lg">
          Change Shape
        </button_1.Button>
        
        <layout_1.Box height="200px" width="200px" mx="auto">
          <animation_1.Morph paths={svgPaths} activeIndex={morphIndex} duration="slow" easing="standard" strokeColor="primary.500" strokeWidth={4} fill={true} fillColor="primary.100"/>
        </layout_1.Box>
      </layout_1.Box>
    </layout_1.Box>);
};
exports.default = AnimationComponentsShowcase;
