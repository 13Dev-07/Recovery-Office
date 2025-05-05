"use strict";
/**
 * MorphingShape Example
 *
 * This component demonstrates the MorphingShape animation component
 * which morphs between different SVG paths using sacred geometry principles.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var layout_1 = require("../design-system/components/layout");
var button_1 = require("../design-system/components/button");
var typography_1 = require("../design-system/components/typography");
var MorphingShape_1 = require("../design-system/components/animation/MorphingShape");
var sacred_geometry_1 = require("../constants/sacred-geometry");
// Sample SVG paths for demonstration
var SAMPLE_PATHS = {
    // Circle path
    circle: "M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0",
    // Square path
    square: "M10,10 L90,10 L90,90 L10,90 Z",
    // Triangle path (equilateral)
    triangle: "M50,10 L90,85 L10,85 Z",
    // Star path (five-pointed)
    star: "M50,10 L61.8,35.5 L90,40.9 L70,61.5 L75.5,90 L50,76.5 L24.5,90 L30,61.5 L10,40.9 L38.2,35.5 Z",
    // Flower shape (based on golden ratio)
    flower: "M50,50 \n    m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0\n    m-15,-15 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0\n    m0,30 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0\n    m-15,-15 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0\n    m0,30 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0",
    // Spiral based on golden ratio
    spiral: "M50,50 \n    m0,0 l".concat(5 * sacred_geometry_1.PHI_INVERSE, ",").concat(5 * sacred_geometry_1.PHI_INVERSE, "\n    l").concat(8 * sacred_geometry_1.PHI_INVERSE, ",").concat(8 * sacred_geometry_1.PHI_INVERSE, " \n    l").concat(13 * sacred_geometry_1.PHI_INVERSE, ",").concat(13 * sacred_geometry_1.PHI_INVERSE, " \n    l").concat(21 * sacred_geometry_1.PHI_INVERSE, ",").concat(21 * sacred_geometry_1.PHI_INVERSE, " \n    l").concat(34 * sacred_geometry_1.PHI_INVERSE, ",").concat(34 * sacred_geometry_1.PHI_INVERSE)
};
// Create an array of all paths for the cycling example
var allPaths = Object.values(SAMPLE_PATHS);
var MorphingShapeExample = function () {
    var _a;
    // State to track active shape in the first example
    var _b = (0, react_1.useState)('circle'), activeShape = _b[0], setActiveShape = _b[1];
    // State to track active index in the second example
    var _c = (0, react_1.useState)(0), activeIndex = _c[0], setActiveIndex = _c[1];
    // State to track whether the auto-cycling example is enabled
    var _d = (0, react_1.useState)(false), isCycling = _d[0], setIsCycling = _d[1];
    return (<layout_1.Box p="lg">
      <typography_1.Heading as="h1" mb="lg">MorphingShape Component Example</typography_1.Heading>
      <typography_1.Typography variant="body1" mb="xl">
        This example demonstrates the MorphingShape component which animates between 
        different SVG paths using sacred geometry principles for timing and easing.
      </typography_1.Typography>
      
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Basic Shape Morphing</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          Click on any shape button to morph between different geometric forms.
          Each transition uses golden ratio timing for natural, pleasing animations.
        </typography_1.Typography>
        
        <layout_1.Box display="flex" flexDirection="row" gap="md" mb="lg">
          <button_1.Button onClick={function () { return setActiveShape('circle'); }} variant={activeShape === 'circle' ? 'solid' : 'outline'}>
            Circle
          </button_1.Button>
          <button_1.Button onClick={function () { return setActiveShape('square'); }} variant={activeShape === 'square' ? 'solid' : 'outline'}>
            Square
          </button_1.Button>
          <button_1.Button onClick={function () { return setActiveShape('triangle'); }} variant={activeShape === 'triangle' ? 'solid' : 'outline'}>
            Triangle
          </button_1.Button>
          <button_1.Button onClick={function () { return setActiveShape('star'); }} variant={activeShape === 'star' ? 'solid' : 'outline'}>
            Star
          </button_1.Button>
          <button_1.Button onClick={function () { return setActiveShape('flower'); }} variant={activeShape === 'flower' ? 'solid' : 'outline'}>
            Flower
          </button_1.Button>
          <button_1.Button onClick={function () { return setActiveShape('spiral'); }} variant={activeShape === 'spiral' ? 'solid' : 'outline'}>
            Spiral
          </button_1.Button>
        </layout_1.Box>
        
        <layout_1.Box width="200px" height="200px" border="1px solid" borderColor="gray.200" borderRadius="md" p="md" mb="xl">
          <MorphingShape_1.MorphingShape paths={[(_a = SAMPLE_PATHS[activeShape]) !== null && _a !== void 0 ? _a : 1]} activeIndex={0} duration="slow" easing="goldenEaseInOut" fill="none" stroke="currentColor" strokeWidth={2}/>
        </layout_1.Box>
      </layout_1.Box>
      
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Sequential Morphing</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          This example allows you to progress through shapes in sequence.
        </typography_1.Typography>
        
        <layout_1.Box display="flex" flexDirection="row" gap="md" mb="lg">
          <button_1.Button onClick={function () { return setActiveIndex(function (prev) { return (prev - 1 + allPaths.length) % allPaths.length; }); }} variant="outline">
            Previous
          </button_1.Button>
          <typography_1.Typography variant="body1" alignSelf="center">
            Shape {activeIndex + 1} of {allPaths.length}
          </typography_1.Typography>
          <button_1.Button onClick={function () { return setActiveIndex(function (prev) { return (prev + 1) % allPaths.length; }); }} variant="outline">
            Next
          </button_1.Button>
        </layout_1.Box>
        
        <layout_1.Box width="200px" height="200px" border="1px solid" borderColor="gray.200" borderRadius="md" p="md" mb="xl">
          <MorphingShape_1.MorphingShape paths={allPaths} activeIndex={activeIndex} duration="slow" easing="goldenEaseInOut" fill="none" stroke="currentColor" strokeWidth={2}/>
        </layout_1.Box>
      </layout_1.Box>
      
      <layout_1.Box mb="xl">
        <typography_1.Heading as="h2" mb="md">Auto-Cycling Shapes</typography_1.Heading>
        <typography_1.Typography variant="body2" mb="md">
          This example demonstrates automatic cycling between shapes.
        </typography_1.Typography>
        
        <layout_1.Box display="flex" flexDirection="row" gap="md" mb="lg">
          <button_1.Button onClick={function () { return setIsCycling(!isCycling); }} variant={isCycling ? 'solid' : 'outline'}>
            {isCycling ? 'Stop Cycling' : 'Start Cycling'}
          </button_1.Button>
        </layout_1.Box>
        
        <layout_1.Box width="200px" height="200px" border="1px solid" borderColor="gray.200" borderRadius="md" p="md" mb="xl">
          <MorphingShape_1.MorphingShape paths={allPaths} loop={isCycling} loopInterval={2} duration="slow" easing="goldenEaseInOut" fill="none" stroke="currentColor" strokeWidth={2}/>
        </layout_1.Box>
      </layout_1.Box>
    </layout_1.Box>);
};
exports.default = MorphingShapeExample;
