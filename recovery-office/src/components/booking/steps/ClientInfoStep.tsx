/**
 * ClientInfoStep Component
 * 
 * The third step in the booking flow where users enter their personal information.
 * Uses sacred geometry principles for form layout and spacing.
 */

import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../../design-system/components/layout/Box';
import { Flex } from '../../../design-system/components/layout/Flex';
import { Grid } from '../../../design-system/components/layout/Grid';
import { Text } from '../../../design-system/components/typography/Text';
import { Heading } from '../../../design-system/components/typography/Heading';
import { Button } from '../../../design-system/components/button/Button';
import { Input } from '../../../design-system/components/form/Input';
import { TextArea } from '../../../design-system/components/form/TextArea';
import { ErrorMessage } from '../../../design-system/components/feedback/ErrorMessage';
import { useBooking } from '../../../context/BookingContext';
import { validateClientInfo } from '../validation/clientInfo.schema';
import { SACRED_SPACING, SACRED_RADIUS, PHI } from '../../../constants/sacred-geometry';
import { ClientInformationStepProps, ClientInformation } from '../../../types/booking.types';

// Extend BookingContextType to include setClientInfo method
interface ExtendedClientInformation extends ClientInformation {
  notes?: string;
  contactPreference?: string;
}

const FormGroup = styled(Box)`
  margin-bottom: ${SACRED_SPACING.md}px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${SACRED_SPACING.xs}px;
  font-weight: 500;
`;

const FormSection = styled(Box)`
  margin-bottom: ${SACRED_SPACING.lg}px;
  padding: ${SACRED_SPACING.md}px;
  border-radius: ${SACRED_RADIUS.md}px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${props => props.theme.colors.border.light};
`;

/**
 * ClientInfoStep Component
 */
export const ClientInfoStep: React.FC<ClientInformationStepProps> = ({ 
  onComplete,
  onBack,
  isLoading = false,
  className,
  initialData
}) => {
  // Get booking context with proper typings
  const { state, setClientInfo } = useBooking();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  // Initialize form state from initialData, context, or with default values
  const [formData, setFormData] = useState<ExtendedClientInformation>({
    firstName: initialData?.clientInfo?.firstName || state.clientInfo?.firstName || '',
    lastName: initialData?.clientInfo?.lastName || state.clientInfo?.lastName || '',
    email: initialData?.clientInfo?.email || state.clientInfo?.email || '',
    phone: initialData?.clientInfo?.phone || state.clientInfo?.phone || '',
    notes: initialData?.clientInfo?.notes || state.clientInfo?.notes || '',
    contactPreference: initialData?.clientInfo?.contactPreference || state.clientInfo?.contactPreference || 'email',
    preferredContactMethod: 'email', // Default value
    isNewClient: true // Default value
  });
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when it's changed
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      validateClientInfo(formData);
      
      // Update context with client info
      setClientInfo(formData);
      
      // Proceed to next step with client info data
      if (onComplete) {
        onComplete({ clientInfo: formData });
      }
    } catch (error: any) {
      // Handle validation errors
      if (error.errors && Array.isArray(error.errors)) {
        const newErrors: Record<string, string> = {};
        
        error.errors.forEach((err: any) => {
          if (err.path && err.path.length > 0) {
            newErrors[err.path[0]] = err.message;
          }
        });
        
        setFormErrors(newErrors);
      } else {
        // Generic error message
        setFormErrors({ form: error.message || 'Please check the form for errors.' });
      }
    }
  };
  
  return (
    <Box className={className}>
      <Heading as="h2" textAlign="center" marginBottom={`${SACRED_SPACING.md}px`}>
        Your Information
      </Heading>
      
      <Text textAlign="center" marginBottom={`${SACRED_SPACING.lg}px`}>
        Please provide your contact details so we can confirm your appointment.
      </Text>
      
      {formErrors.form && (
        <Box marginBottom={`${SACRED_SPACING.md}px`}>
          <ErrorMessage>{formErrors.form}</ErrorMessage>
        </Box>
      )}
      
      <form onSubmit={handleSubmit} noValidate>
        <FormSection>
          <Heading as="h3" marginBottom={`${SACRED_SPACING.md}px`}>
            Personal Details
          </Heading>
          
          <Grid templateColumns="repeat(2, 1fr)" gap={SACRED_SPACING.md}>
            <FormGroup>
              <FormLabel htmlFor="firstName">First Name *</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                aria-required="true"
                aria-invalid={!!formErrors.firstName}
                aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
              />
              {formErrors.firstName && (
                <ErrorMessage id="firstName-error">{formErrors.firstName}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="lastName">Last Name *</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                aria-required="true"
                aria-invalid={!!formErrors.lastName}
                aria-describedby={formErrors.lastName ? "lastName-error" : undefined}
              />
              {formErrors.lastName && (
                <ErrorMessage id="lastName-error">{formErrors.lastName}</ErrorMessage>
              )}
            </FormGroup>
          </Grid>
        </FormSection>
        
        <FormSection>
          <Heading as="h3" marginBottom={`${SACRED_SPACING.md}px`}>
            Contact Information
          </Heading>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address *</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
              aria-required="true"
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
            />
            {formErrors.email && (
              <ErrorMessage id="email-error">{formErrors.email}</ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="phone">Phone Number *</FormLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              required
              aria-required="true"
              aria-invalid={!!formErrors.phone}
              aria-describedby={formErrors.phone ? "phone-error" : undefined}
            />
            {formErrors.phone && (
              <ErrorMessage id="phone-error">{formErrors.phone}</ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="notes">Additional Notes</FormLabel>
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requests or information we should know?"
              aria-invalid={!!formErrors.notes}
              aria-describedby={formErrors.notes ? "notes-error" : undefined}
            />
            {formErrors.notes && (
              <ErrorMessage id="notes-error">{formErrors.notes}</ErrorMessage>
            )}
          </FormGroup>
        </FormSection>
        
        <Flex justifyContent="space-between" marginTop={`${SACRED_SPACING.lg}px`}>
          <Button 
            variant="outline" 
            onClick={onBack}
            isDisabled={isLoading}
          >
            Back
          </Button>
          
          <Button 
            type="submit"
            variant="primary"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Continue
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ClientInfoStep; 