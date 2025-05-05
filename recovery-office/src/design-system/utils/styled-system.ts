/**
 * Styled System Utilities
 * 
 * This file provides utilities for creating styled components with a consistent API
 * for styling props, responsive values, and sacred geometry principles.
 */

import { css, FlattenSimpleInterpolation } from 'styled-components';
import { spacing } from '../tokens';
import { BoxStyleProps } from '../types/styled.types';

type StyleValue = string | number | undefined;
type StyleKey = keyof BoxStyleProps;
type SpacingToken = keyof typeof spacing;

/**
 * Process a style value, converting it to a proper CSS value
 * 
 * @param value - The value to process
 * @param tokenMap - Optional token map to look up values from
 * @returns Processed CSS value as a string
 */
const processValue = (value: StyleValue, tokenMap?: Record<string, any>): string => {
  if (value === undefined || value === null) {
    return '';
  }
  
  if (tokenMap && typeof value === 'string' && value in tokenMap) {
    return tokenMap[value as string];
  }
  
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return `${value}px`;
  }
  
  return String(value);
};

/**
 * Interface to map spacing properties to their CSS property names
 */
interface SpacingPropertiesMap {
  m: string;
  mt: string;
  mr: string;
  mb: string;
  ml: string;
  mx: string;
  my: string;
  p: string;
  pt: string;
  pr: string;
  pb: string;
  pl: string;
  px: string;
  py: string;
  [key: string]: string;
}

/**
 * Creates a styled-system component configuration with all the styling props
 * from BoxStyleProps interface.
 * 
 * This function handles spacing, layout, flexbox, grid, and other CSS properties
 * in a consistent way, accounting for responsive values and theme integration.
 * 
 * @returns A function that generates CSS from BoxStyleProps
 */
export const createStyledSystemComponent = () => (props: BoxStyleProps): FlattenSimpleInterpolation => {
  let styles = '';

  // Process margin and padding properties
  const spacingProperties: SpacingPropertiesMap = {
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    mx: 'margin-left/margin-right',
    my: 'margin-top/margin-bottom',
    p: 'padding',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    px: 'padding-left/padding-right',
    py: 'padding-top/padding-bottom',
  };

  Object.entries(spacingProperties).forEach(([prop, cssProps]) => {
    const propKey = prop as keyof typeof spacingProperties;
    if (props[propKey as StyleKey] !== undefined) {
      const value = processValue(props[propKey as StyleKey] as StyleValue, spacing);
      
      if (prop === 'mx') {
        styles += `
          margin-left: ${value};
          margin-right: ${value};
        `;
      } else if (prop === 'my') {
        styles += `
          margin-top: ${value};
          margin-bottom: ${value};
        `;
      } else if (prop === 'px') {
        styles += `
          padding-left: ${value};
          padding-right: ${value};
        `;
      } else if (prop === 'py') {
        styles += `
          padding-top: ${value};
          padding-bottom: ${value};
        `;
      } else {
        styles += `${cssProps}: ${value};`;
      }
    }
  });
  
  // Layout properties (width, height, display, etc.)
  if (props.width !== undefined) {
    styles += `width: ${processValue(props.width)};`;
  }
  
  if (props.height !== undefined) {
    styles += `height: ${processValue(props.height)};`;
  }
  
  if (props.minWidth !== undefined) {
    styles += `min-width: ${processValue(props.minWidth)};`;
  }
  
  if (props.minHeight !== undefined) {
    styles += `min-height: ${processValue(props.minHeight)};`;
  }
  
  if (props.maxWidth !== undefined) {
    styles += `max-width: ${processValue(props.maxWidth)};`;
  }
  
  if (props.maxHeight !== undefined) {
    styles += `max-height: ${processValue(props.maxHeight)};`;
  }
  
  if (props.display !== undefined) {
    styles += `display: ${props.display};`;
  }
  
  // Flexbox properties
  if (props.flexDirection !== undefined) {
    styles += `flex-direction: ${props.flexDirection};`;
  }
  
  if (props.flexWrap !== undefined) {
    styles += `flex-wrap: ${props.flexWrap};`;
  }
  
  if (props.alignItems !== undefined) {
    styles += `align-items: ${props.alignItems};`;
  }
  
  if (props.justifyContent !== undefined) {
    styles += `justify-content: ${props.justifyContent};`;
  }
  
  if (props.flex !== undefined) {
    styles += `flex: ${props.flex};`;
  }
  
  // Ensure flexGrow is part of FlexItemProps and BoxStyleProps
  if ((props as any).flexGrow !== undefined) {
    styles += `flex-grow: ${(props as any).flexGrow};`;
  }
  
  if ((props as any).flexShrink !== undefined) {
    styles += `flex-shrink: ${(props as any).flexShrink};`;
  }
  
  if ((props as any).flexBasis !== undefined) {
    styles += `flex-basis: ${processValue((props as any).flexBasis)};`;
  }
  
  if (props.justifySelf !== undefined) {
    styles += `justify-self: ${props.justifySelf};`;
  }
  
  if (props.alignSelf !== undefined) {
    styles += `align-self: ${props.alignSelf};`;
  }
  
  if ((props as any).order !== undefined) {
    styles += `order: ${(props as any).order};`;
  }
  
  // Grid properties
  if (props.gap !== undefined) {
    styles += `gap: ${processValue(props.gap, spacing)};`;
  }
  
  if ((props as any).gridGap !== undefined) {
    styles += `grid-gap: ${processValue((props as any).gridGap, spacing)};`;
  }
  
  if ((props as any).gridColumnGap !== undefined) {
    styles += `grid-column-gap: ${processValue((props as any).gridColumnGap, spacing)};`;
  }
  
  if ((props as any).gridRowGap !== undefined) {
    styles += `grid-row-gap: ${processValue((props as any).gridRowGap, spacing)};`;
  }
  
  if ((props as any).gridColumn !== undefined) {
    styles += `grid-column: ${(props as any).gridColumn};`;
  }
  
  if ((props as any).gridRow !== undefined) {
    styles += `grid-row: ${(props as any).gridRow};`;
  }
  
  if ((props as any).gridTemplateColumns !== undefined) {
    styles += `grid-template-columns: ${(props as any).gridTemplateColumns};`;
  }
  
  if ((props as any).gridTemplateRows !== undefined) {
    styles += `grid-template-rows: ${(props as any).gridTemplateRows};`;
  }
  
  if ((props as any).gridTemplateAreas !== undefined) {
    styles += `grid-template-areas: ${(props as any).gridTemplateAreas};`;
  }
  
  if ((props as any).gridArea !== undefined) {
    styles += `grid-area: ${(props as any).gridArea};`;
  }
  
  // Position properties
  if (props.position !== undefined) {
    styles += `position: ${props.position};`;
  }
  
  if (props.zIndex !== undefined) {
    styles += `z-index: ${props.zIndex};`;
  }
  
  if (props.top !== undefined) {
    styles += `top: ${processValue(props.top)};`;
  }
  
  if (props.right !== undefined) {
    styles += `right: ${processValue(props.right)};`;
  }
  
  if (props.bottom !== undefined) {
    styles += `bottom: ${processValue(props.bottom)};`;
  }
  
  if (props.left !== undefined) {
    styles += `left: ${processValue(props.left)};`;
  }
  
  // Color and background properties
  if (props.color !== undefined) {
    styles += `color: ${props.color};`;
  }
  
  if (props.bg !== undefined) {
    styles += `background-color: ${props.bg};`;
  }
  
  if (props.backgroundColor !== undefined) {
    styles += `background-color: ${props.backgroundColor};`;
  }
  
  if (props.opacity !== undefined) {
    styles += `opacity: ${props.opacity};`;
  }
  
  // Border properties
  if (props.border !== undefined) {
    styles += `border: ${props.border};`;
  }
  
  if (props.borderTop !== undefined) {
    styles += `border-top: ${props.borderTop};`;
  }
  
  if (props.borderRight !== undefined) {
    styles += `border-right: ${props.borderRight};`;
  }
  
  if (props.borderBottom !== undefined) {
    styles += `border-bottom: ${props.borderBottom};`;
  }
  
  if (props.borderLeft !== undefined) {
    styles += `border-left: ${props.borderLeft};`;
  }
  
  if (props.borderColor !== undefined) {
    styles += `border-color: ${props.borderColor};`;
  }
  
  if (props.borderRadius !== undefined) {
    styles += `border-radius: ${processValue(props.borderRadius)};`;
  }
  
  // Typography properties
  if ((props as any).fontSize !== undefined) {
    styles += `font-size: ${processValue((props as any).fontSize)};`;
  }
  
  if (props.fontWeight !== undefined) {
    styles += `font-weight: ${props.fontWeight};`;
  }
  
  if (props.lineHeight !== undefined) {
    styles += `line-height: ${props.lineHeight};`;
  }
  
  if (props.letterSpacing !== undefined) {
    styles += `letter-spacing: ${processValue(props.letterSpacing)};`;
  }
  
  if (props.textAlign !== undefined) {
    styles += `text-align: ${props.textAlign};`;
  }
  
  if (props.fontStyle !== undefined) {
    styles += `font-style: ${props.fontStyle};`;
  }
  
  // Other common properties
  if (props.overflow !== undefined) {
    styles += `overflow: ${props.overflow};`;
  }
  
  if ((props as any).overflowX !== undefined) {
    styles += `overflow-x: ${(props as any).overflowX};`;
  }
  
  if ((props as any).overflowY !== undefined) {
    styles += `overflow-y: ${(props as any).overflowY};`;
  }
  
  if ((props as any).visibility !== undefined) {
    styles += `visibility: ${(props as any).visibility};`;
  }
  
  if ((props as any).cursor !== undefined) {
    styles += `cursor: ${(props as any).cursor};`;
  }
  
  if ((props as any).whiteSpace !== undefined) {
    styles += `white-space: ${(props as any).whiteSpace};`;
  }
  
  if ((props as any).textDecoration !== undefined) {
    styles += `text-decoration: ${(props as any).textDecoration};`;
  }
  
  // Custom css prop for direct CSS injection
  if ((props as any).css) {
    return css`
      ${styles}
      ${(props as any).css}
    `;
  }

  return css`${styles}`;
};

export default createStyledSystemComponent; 





