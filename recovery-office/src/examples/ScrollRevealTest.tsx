import * as React from 'react';
import { ScrollReveal } from '../animation';
import { Box } from '../design-system/components/layout';
import { Text } from '../design-system/components/typography';

/**
 * Test component for ScrollReveal
 * 
 * This component demonstrates the updated ScrollReveal component with different variants.
 */
const ScrollRevealTest: React.FC = () => {
  return (
    <Box p="2rem" display="flex" flexDirection="column" gap="2rem">
      <h1>ScrollReveal Component Test</h1>
      
      <ScrollReveal variant="fade" threshold={0.2}>
        <Box p="1rem" bg="#f5f5f5" borderRadius="0.5rem">
          <Text>This content fades in when scrolled into view</Text>
        </Box>
      </ScrollReveal>
      
      <ScrollReveal variant="slide-up" threshold={0.2} delay={0.1}>
        <Box p="1rem" bg="#e0e0e0" borderRadius="0.5rem">
          <Text>This content slides up when scrolled into view</Text>
        </Box>
      </ScrollReveal>
      
      <ScrollReveal variant="scale" threshold={0.2} delay={0.2}>
        <Box p="1rem" bg="#d0d0d0" borderRadius="0.5rem">
          <Text>This content scales in when scrolled into view</Text>
        </Box>
      </ScrollReveal>
      
      <ScrollReveal variant="scale-fade" threshold={0.2} delay={0.3}>
        <Box p="1rem" bg="#c0c0c0" borderRadius="0.5rem">
          <Text>This content scales and fades in when scrolled into view</Text>
        </Box>
      </ScrollReveal>
      
      <ScrollReveal as="section" variant="slide-left" threshold={0.2} delay={0.4}>
        <Box p="1rem" bg="#b0b0b0" borderRadius="0.5rem">
          <Text>This content slides in from the left with a custom element type (section)</Text>
        </Box>
      </ScrollReveal>
    </Box>
  );
};

export default ScrollRevealTest; 






