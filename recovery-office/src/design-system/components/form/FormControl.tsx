/**
 * FormControl Component
 * 
 * A container component for form elements providing label, error message,
 * and helper text with consistent spacing based on sacred geometry principles.
 * 
 * The FormControl creates a harmonious layout for form fields using Fibonacci
 * spacing and proper alignment.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Box } from '../layout';
import { FormControlProps } from '../../types';
import { spacing } from '../../tokens';

import FormLabel from './FormLabel';
import FormError from './FormError';

/**
 * Generate size-specific spacing
 */
const getSizeSpacing = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return {
        labelSpacing: spacing.xxs, // 5px
        helperSpacing: spacing.xxs, // 5px
        errorSpacing: spacing.xxs,  // 5px
      };
    case 'lg':
      return {
        labelSpacing: spacing.sm,   // 13px
        helperSpacing: spacing.xs,  // 8px
        errorSpacing: spacing.xs,   // 8px
      };
    case 'md':
    default:
      return {
        labelSpacing: spacing.xs,   // 8px
        helperSpacing: spacing.xxs, // 5px
        errorSpacing: spacing.xxs,  // 5px
      };
  }
};

// Container for the form control with sacred proportions
const StyledFormControl = styled(Box)<{ isDisabled?: boolean }>`
  width: 100%;
  position: relative;
  
  ${props => props.isDisabled && `
    opacity: ${PHI_INVERSE}; // Use golden ratio inverse (0.618) for reduced opacity
    cursor: not-allowed;
  `}
`;

/**
 * FormControl Component with ref forwarding
 * 
 * Creates a container for form fields with properly spaced label and error
 */
export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ 
    id: idProp,
    isRequired = false,
    isDisabled = false,
    isInvalid = false,
    isValidating = false,
    label,
    errorMessage,
    helperText,
    size = 'md',
    children,
    ...rest 
  }, ref) => {
    // Generate an ID if one isn't provided
    const generatedId = React.useId();
    const id = idProp || generatedId;
    
    // Get spacing values based on size
    const { labelSpacing, helperSpacing, errorSpacing } = getSizeSpacing(size);
    
    // Clone the child element to pass down props
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          id,
          isRequired,
          isDisabled,
          isInvalid,
          isValidating,
          size,
        });
      }
      return child;
    });
    
    return (
      <StyledFormControl
        isDisabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {label && (
          <Box mb={labelSpacing} className="recovery-form-label-container">
            {typeof label === 'string' ? (
              <FormLabel 
                htmlFor={id}
                isRequired={isRequired}
                isDisabled={isDisabled}
                size={size}
              >
                {label}
              </FormLabel>
            ) : (
              label
            )}
          </Box>
        )}
        
        {childrenWithProps}
        
        {/* Helper text with sacred spacing */}
        {helperText && !isInvalid && (
          <Box 
            mt={helperSpacing}
            fontSize="sm"
            color="text.secondary"
            opacity={PHI_INVERSE} // Use golden ratio inverse for subtle text
          >
            {helperText}
          </Box>
        )}
        
        {/* Error message with sacred spacing */}
        {isInvalid && errorMessage && (
          <Box mt={errorSpacing}>
            {typeof errorMessage === 'string' ? (
              <FormError size={size}>{errorMessage}</FormError>
            ) : (
              errorMessage
            )}
          </Box>
        )}
      </StyledFormControl>
    );
  }
);

FormControl.displayName = 'FormControl';

export default FormControl; 







