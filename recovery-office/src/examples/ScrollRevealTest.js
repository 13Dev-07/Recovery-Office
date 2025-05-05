"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var animation_1 = require("../animation");
var layout_1 = require("../design-system/components/layout");
var typography_1 = require("../design-system/components/typography");
/**
 * Test component for ScrollReveal
 *
 * This component demonstrates the updated ScrollReveal component with different variants.
 */
var ScrollRevealTest = function () {
    return (<layout_1.Box p="2rem" display="flex" flexDirection="column" gap="2rem">
      <h1>ScrollReveal Component Test</h1>
      
      <animation_1.ScrollReveal variant="fade" threshold={0.2}>
        <layout_1.Box p="1rem" bg="#f5f5f5" borderRadius="0.5rem">
          <typography_1.Text>This content fades in when scrolled into view</typography_1.Text>
        </layout_1.Box>
      </animation_1.ScrollReveal>
      
      <animation_1.ScrollReveal variant="slide-up" threshold={0.2} delay={0.1}>
        <layout_1.Box p="1rem" bg="#e0e0e0" borderRadius="0.5rem">
          <typography_1.Text>This content slides up when scrolled into view</typography_1.Text>
        </layout_1.Box>
      </animation_1.ScrollReveal>
      
      <animation_1.ScrollReveal variant="scale" threshold={0.2} delay={0.2}>
        <layout_1.Box p="1rem" bg="#d0d0d0" borderRadius="0.5rem">
          <typography_1.Text>This content scales in when scrolled into view</typography_1.Text>
        </layout_1.Box>
      </animation_1.ScrollReveal>
      
      <animation_1.ScrollReveal variant="scale-fade" threshold={0.2} delay={0.3}>
        <layout_1.Box p="1rem" bg="#c0c0c0" borderRadius="0.5rem">
          <typography_1.Text>This content scales and fades in when scrolled into view</typography_1.Text>
        </layout_1.Box>
      </animation_1.ScrollReveal>
      
      <animation_1.ScrollReveal as="section" variant="slide-left" threshold={0.2} delay={0.4}>
        <layout_1.Box p="1rem" bg="#b0b0b0" borderRadius="0.5rem">
          <typography_1.Text>This content slides in from the left with a custom element type (section)</typography_1.Text>
        </layout_1.Box>
      </animation_1.ScrollReveal>
    </layout_1.Box>);
};
exports.default = ScrollRevealTest;
