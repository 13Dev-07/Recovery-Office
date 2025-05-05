/**
 * GoldenSection Component
 * 
 * Implements a layout based on the Golden Ratio (PHI = 1.618).
 * This component creates sections that follow the divine proportion,
 * creating aesthetically pleasing and harmonious layouts.
 * 
 * The component supports both horizontal and vertical golden sections,
 * as well as more complex sacred geometry patterns.
 */

import * as React from 'react';
import { Grid } from './Grid';
import Box from './Box';
import { GoldenSectionProps } from '../../types';
import { PHI, PHI_INVERSE } from '../../../constants/sacred-geometry';

/**
 * GoldenSection Component with ref forwarding
 * Creates layouts based on the divine proportion (Golden Ratio)
 */
export const GoldenSection = React.forwardRef<HTMLDivElement, GoldenSectionProps>(
  ({ 
    direction = 'horizontal',
    reverseOrder = false,
    children,
    ...rest 
  }, ref) => {
    // Determine if we're using horizontal or vertical layout
    const isHorizontal = direction === 'horizontal';
    
    // Split children into primary and secondary sections
    const childrenArray = React.Children.toArray(children);
    
    if (childrenArray.length !== 2) {
      console.warn('GoldenSection requires exactly two children for proper Golden Ratio implementation');
      return <Box ref={ref} {...rest}>{children}</Box>;
    }
    
    // Determine which child goes in which section
    const [primarySection, secondarySection] = reverseOrder 
      ? [childrenArray[1] ?? 1, childrenArray[0] ?? 1]
      : [childrenArray[0] ?? 1, childrenArray[1] ?? 1];
    
    // Set up grid properties based on direction
    const gridTemplateColumns = isHorizontal 
      ? `${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%` 
      : undefined;
      
    const gridTemplateRows = !isHorizontal 
      ? `${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%` 
      : undefined;
    
    return (
      <Grid
        templateColumns={gridTemplateColumns}
        templateRows={gridTemplateRows}
        ref={ref}
        {...rest}
      >
        <Box 
          className="golden-section-primary"
          width={isHorizontal ? '100%' : undefined}
          height={!isHorizontal ? '100%' : undefined}
        >
          {primarySection}
        </Box>
        <Box 
          className="golden-section-secondary"
          width={isHorizontal ? '100%' : undefined}
          height={!isHorizontal ? '100%' : undefined}
        >
          {secondarySection}
        </Box>
      </Grid>
    );
  }
);

GoldenSection.displayName = 'GoldenSection';

export default GoldenSection; 








