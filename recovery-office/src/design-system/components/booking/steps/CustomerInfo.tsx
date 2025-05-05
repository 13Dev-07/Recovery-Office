/**
 * CustomerInfo Component
 * 
 * Third step in the booking process where users enter their personal details.
 * Uses sacred geometry principles for layout and spacing.
 * Implements form validation with Zod.
 */

import * as React from 'react';
import { useEffect, useContext } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import { BookingContext } from '../state';
import { Text } from '../../typography/Text';
import { InputField } from '../../form/InputField';
import { PhoneInput } from '../../form/PhoneInput';
import { TextAreaField } from '../../form/TextAreaField';
import { Checkbox } from '../../form/Checkbox';

// Validation schema using Zod
const customerInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().optional(),
  notes: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
});

// Define the form values type
type CustomerInfoFormValues = z.infer<typeof customerInfoSchema>;

/**
 * CustomerInfo component for booking step 3
 */
export const CustomerInfo: React.FC = () => {
  const { state, dispatch } = useContext(BookingContext);
  
  // Initialize react-hook-form with Zod validation
  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<CustomerInfoFormValues>({
    resolver: zodResolver(customerInfoSchema),
    defaultValues: {
      firstName: state.customerInfo.firstName || '',
      lastName: state.customerInfo.lastName || '',
      email: state.customerInfo.email || '',
      phone: state.customerInfo.phone || '',
      address: state.customerInfo.address || '',
      notes: state.customerInfo.notes || '',
      acceptTerms: state.customerInfo.acceptTerms || false
    }
  });
  
  // Watch form values and update context when they change
  const formValues = watch();
  
  useEffect(() => {
    dispatch({ 
      type: 'SET_CUSTOMER_INFO', 
      payload: {
        ...state.customerInfo,
        ...formValues
      }
    });
  }, [formValues, dispatch]);
  
  // When form data changes, validate the step
  useEffect(() => {
    const isStepValid = Object.keys(errors).length === 0 && 
                        formValues.firstName && 
                        formValues.lastName && 
                        formValues.email && 
                        formValues.phone &&
                        formValues.acceptTerms;
    
    dispatch({ type: 'SET_STEP_VALID', payload: { step: 2, isValid: isStepValid } });
  }, [errors, formValues, dispatch]);
  
  return (
    <StepContainer>
      <StepHeader>
        <Text as="h3" variant="h5">
          Your Information
        </Text>
        <Text variant="body2" style={{ opacity: 0.8 }}>
          Please provide your contact details for your booking
        </Text>
      </StepHeader>
      
      <FormContainer>
        <FormRow>
          <FormColumn>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <InputField
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                  error={errors.firstName?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
          
          <FormColumn>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Last Name"
                  placeholder="Enter your last name"
                  required
                  error={errors.lastName?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Email Address"
                  placeholder="yourname@example.com"
                  type="email"
                  required
                  error={errors.email?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
          
          <FormColumn>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  label="Phone Number"
                  placeholder="(000) 000-0000"
                  required
                  error={errors.phone?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Address (Optional)"
                  placeholder="Enter your address"
                  error={errors.address?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <TextAreaField
                  label="Special Notes or Requests (Optional)"
                  placeholder="Any special requirements or information we should know about..."
                  rows={getFibonacciByIndex(5)} // 5 rows
                  error={errors.notes?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
        </FormRow>
        
        <FormRow>
          <FormColumn full>
            <Controller
              name="acceptTerms"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  label={
                    <>
                      I agree to the{' '}
                      <TermsLink href="/terms" target="_blank">
                        terms and conditions
                      </TermsLink>
                      {' '}and{' '}
                      <TermsLink href="/privacy" target="_blank">
                        privacy policy
                      </TermsLink>
                    </>
                  }
                  checked={value}
                  onChange={onChange}
                  error={errors.acceptTerms?.message}
                  {...field}
                />
              )}
            />
          </FormColumn>
        </FormRow>
      </FormContainer>
    </StepContainer>
  );
};

// Styled components with sacred geometry principles
const StepContainer = styled.div`
  width: 100%;
`;

const StepHeader = styled.div`
  margin-bottom: ${getFibonacciByIndex(7)}px; // 13px
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

const FormRow = styled.div`
  display: flex;
  gap: ${getFibonacciByIndex(5)}px; // 5px
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

interface FormColumnProps {
  full?: boolean;
}

const FormColumn = styled.div<FormColumnProps>`
  flex: ${props => props.full ? 1 : 0.5};
  min-width: 0; // Prevent overflow
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex: 1;
  }
`;

const TermsLink = styled.a`
  color: ${props => props.theme.colors.primary[500] ?? 1};
  text-decoration: underline;
  transition: color 0.2s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  
  &:hover {
    color: ${props => props.theme.colors.primary[700] ?? 1};
  }
  
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary[300] ?? 1};
  }
`;

export default CustomerInfo; 










