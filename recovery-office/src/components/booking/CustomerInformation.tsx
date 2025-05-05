import * as React from 'react';
import { useBooking } from '@context/BookingContext';

import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { z } from 'zod';


// Styled components using sacred geometry principles
const Container = styled.div`
  width: 100%;
  max-width: ${getFibonacciByIndex(12)}px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(6)}px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(3)}px;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${getFibonacciByIndex(10)}px, 1fr));
  gap: ${getFibonacciByIndex(5)}px;
`;

const Label = styled.label`
  font-size: ${getFibonacciByIndex(5)}px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.primary};
  font-weight: 500;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: ${getFibonacciByIndex(5)}px;
  border-radius: ${getFibonacciByIndex(3)}px;
  border: 1px solid ${(props: { theme: DefaultTheme; hasError?: boolean }) => 
    props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main};
  font-size: ${getFibonacciByIndex(5)}px;
  transition: all ${getFibonacciByIndex(5) * 10}ms ease;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 ${getFibonacciByIndex(2)}px ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[200]};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: ${getFibonacciByIndex(5)}px;
  border-radius: ${getFibonacciByIndex(3)}px;
  border: 1px solid ${(props: { theme: DefaultTheme; hasError?: boolean }) => 
    props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main};
  font-size: ${getFibonacciByIndex(5)}px;
  min-height: ${getFibonacciByIndex(9)}px;
  resize: vertical;
  transition: all ${getFibonacciByIndex(5) * 10}ms ease;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 ${getFibonacciByIndex(2)}px ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[200]};
  }
`;

const ErrorMessage = styled.span`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.error.main};
  font-size: ${getFibonacciByIndex(4)}px;
  margin-top: ${getFibonacciByIndex(2)}px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${getFibonacciByIndex(4)}px;
  margin-top: ${getFibonacciByIndex(4)}px;
  
  input {
    margin-top: ${getFibonacciByIndex(2)}px;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${getFibonacciByIndex(7)}px;
`;

const Button = styled.button<{ isPrimary?: boolean }>`
  padding: ${getFibonacciByIndex(4)}px ${getFibonacciByIndex(6)}px;
  background-color: ${(props: { theme: DefaultTheme; isPrimary?: boolean }) => 
    props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.background.default};
  color: ${(props: { theme: DefaultTheme; isPrimary?: boolean }) => 
    props.isPrimary ? 'white' : props.theme.colors.text.primary};
  border: 1px solid ${(props: { theme: DefaultTheme; isPrimary?: boolean }) => 
    props.isPrimary ? props.theme.colors.primary[500] : props.theme.colors.border.main};
  border-radius: ${getFibonacciByIndex(3)}px;
  font-size: ${getFibonacciByIndex(5)}px;
  cursor: pointer;
  transition: all ${getFibonacciByIndex(5) * 10}ms ease;
  
  &:hover {
    background-color: ${(props: { theme: DefaultTheme; isPrimary?: boolean }) => 
      props.isPrimary ? props.theme.colors.primary[600] : props.theme.colors.background.light};
    transform: scale(${1 + (1 / PHI) * 0.02});
  }
  
  &:disabled {
    background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.disabled};
    border-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

// Define validation schema using Zod
const customerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  address: z.string().optional(),
  notes: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
});

// Define the type based on the schema
type CustomerInfo = z.infer<typeof customerSchema>;

const CustomerInformation: React.FC = () => {
  const { 
    customerInfo, 
    setCustomerInfo, 
    currentStep, 
    setCurrentStep,
    completeBooking
  } = useBooking();
  
  // Initialize form state with existing data or defaults
  const [formData, setFormData] = useState<CustomerInfo>({
    firstName: customerInfo?.firstName || '',
    lastName: customerInfo?.lastName || '',
    email: customerInfo?.email || '',
    phone: customerInfo?.phone || '',
    address: customerInfo?.address || '',
    notes: customerInfo?.notes || '',
    termsAccepted: customerInfo?.termsAccepted || false
  });
  
  // State for tracking validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof CustomerInfo, boolean>>>({});
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof CustomerInfo]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Handle blur event for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate individual field
    validateField(name as keyof CustomerInfo);
  };
  
  // Validate a single field
  const validateField = (field: keyof CustomerInfo) => {
    try {
      // Create a partial schema for just this field
      const fieldSchema = z.object({ [field]: customerSchema.shape[field] });
      fieldSchema.parse({ [field]: formData[field] });
      
      // Clear error if validation passes
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
      
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set the error message for this field
        const fieldError = error.errors.find(e => e.path[0] === field);
        if (fieldError) {
          setErrors(prev => ({
            ...prev,
            [field]: fieldError.message
          }));
        }
      }
      
      return false;
    }
  };
  
  // Validate the entire form
  const validateForm = (): boolean => {
    try {
      customerSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to our error format
        const newErrors: Partial<Record<keyof CustomerInfo, string>> = {};
        
        error.errors.forEach(err => {
          const field = err.path[0] as keyof CustomerInfo;
          newErrors[field] = err.message;
        });
        
        setErrors(newErrors);
        
        // Mark all fields with errors as touched
        const newTouched: Partial<Record<keyof CustomerInfo, boolean>> = { ...touched };
        Object.keys(newErrors).forEach(key => {
          newTouched[key as keyof CustomerInfo] = true;
        });
        setTouched(newTouched);
      }
      
      return false;
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save customer information to context
      setCustomerInfo({
        ...formData
      });
      
      // Move to next step
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Handle back button click
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  
  // Get validation state for a field
  const getFieldError = (field: keyof CustomerInfo): string | undefined => {
    return touched[field] ? errors[field] : undefined;
  };
  
  return (
    <Container>
      <h2>Your Information</h2>
      <p>Please fill in your details to complete the booking.</p>
      
      <Form onSubmit={handleSubmit}>
        <FieldRow>
          <FieldGroup>
            <Label htmlFor="firstName">First Name*</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!getFieldError('firstName')}
            />
            {getFieldError('firstName') && (
              <ErrorMessage>{getFieldError('firstName')}</ErrorMessage>
            )}
          </FieldGroup>
          
          <FieldGroup>
            <Label htmlFor="lastName">Last Name*</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!getFieldError('lastName')}
            />
            {getFieldError('lastName') && (
              <ErrorMessage>{getFieldError('lastName')}</ErrorMessage>
            )}
          </FieldGroup>
        </FieldRow>
        
        <FieldRow>
          <FieldGroup>
            <Label htmlFor="email">Email*</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!getFieldError('email')}
            />
            {getFieldError('email') && (
              <ErrorMessage>{getFieldError('email')}</ErrorMessage>
            )}
          </FieldGroup>
          
          <FieldGroup>
            <Label htmlFor="phone">Phone*</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={!!getFieldError('phone')}
              placeholder="1234567890"
            />
            {getFieldError('phone') && (
              <ErrorMessage>{getFieldError('phone')}</ErrorMessage>
            )}
          </FieldGroup>
        </FieldRow>
        
        <FieldGroup>
          <Label htmlFor="address">Address (Optional)</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldGroup>
        
        <FieldGroup>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <TextArea
            id="notes"
            name="notes"
            value={formData.notes || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldGroup>
        
        <Checkbox>
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <Label htmlFor="termsAccepted">
            I agree to the terms and conditions*
            {getFieldError('termsAccepted') && (
              <ErrorMessage>{getFieldError('termsAccepted')}</ErrorMessage>
            )}
          </Label>
        </Checkbox>
        
        <ActionContainer>
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" isPrimary>
            Complete Booking
          </Button>
        </ActionContainer>
      </Form>
    </Container>
  );
};

export default CustomerInformation; 
















