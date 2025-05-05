import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { PHI, SACRED_SPACING, FIBONACCI, SACRED_RADIUS } from '../../../constants/sacred-geometry';
import { getFibonacciByIndex } from '../../../utils/getFibonacciByIndex';
import { useBooking } from '../../../context/BookingContext';
import { ClientInformationData, validateClientInformation } from '../validation/clientInformation.schema';
import { ErrorMessage } from '../../../design-system/components/feedback/ErrorMessage';

/**
 * Client information form fields
 * 
 * @interface ClientFormData
 * @property {string} firstName - Client's first name
 * @property {string} lastName - Client's last name
 * @property {string} email - Client's email address
 * @property {string} phone - Client's phone number
 * @property {string} message - Additional message or details from client
 */
interface ClientFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Form field errors
 * Maps field names to error messages
 */
type FormErrors = Partial<Record<keyof ClientFormData, string>>;

/**
 * Props for the ClientInfo component
 * 
 * @interface ClientInfoProps
 * @property {ClientFormData} formData - Current form data
 * @property {(field: keyof ClientFormData, value: string) => void} onFieldChange - Handler for field changes
 * @property {FormErrors} errors - Form validation errors
 */
interface ClientInfoProps {
  formData: ClientFormData;
  onFieldChange: (field: keyof ClientFormData, value: string) => void;
  errors: FormErrors;
}

/**
 * Container for the client info component
 * Uses sacred spacing for margins
 */
const Container = styled.div`
  width: 100%;
  padding: ${SACRED_SPACING.md}px 0;
`;

/**
 * Title for the client info section
 * Uses golden ratio for line height
 */
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${SACRED_SPACING.lg}px;
  line-height: ${PHI};
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.dark};
`;

/**
 * Description for the client info section
 * Uses PHI for line height and margins
 */
const SectionDescription = styled.p`
  margin-bottom: ${SACRED_SPACING.xl}px;
  line-height: ${PHI};
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.main};
`;

/**
 * Form container with grid layout
 * Uses Fibonacci numbers for gaps
 */
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SACRED_SPACING.md}px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Form field group
 * Uses sacred spacing for margins
 */
const FormGroup = styled.div<{ fullWidth?: boolean }>`
  margin-bottom: ${SACRED_SPACING.md}px;
  grid-column: ${(props: { fullWidth?: boolean }) => props.fullWidth ? 'span 2' : 'span 1'};
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

/**
 * Form field label
 * Uses golden ratio for spacing and line height
 */
const Label = styled.label`
  display: block;
  margin-bottom: ${SACRED_SPACING.xs}px;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.dark};
  line-height: ${PHI};
`;

/**
 * Required field indicator
 * Uses accent color for visibility
 */
const Required = styled.span`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.accent.main};
  margin-left: ${SACRED_SPACING.xxs}px;
`;

/**
 * Input field
 * Uses sacred spacing and Fibonacci for dimensions
 */
const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: ${SACRED_SPACING.sm}px;
  font-size: 1rem;
  border-radius: ${SACRED_RADIUS.sm}px;
  border: 1px solid ${(props: { theme: DefaultTheme; hasError: boolean }) => 
    props.hasError ? props.theme.colors.error.main : props.theme.colors.border.main
  };
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background.light};
  transition: all ${getFibonacciByIndex(5) * 10}ms ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${(props: { theme: DefaultTheme; hasError: boolean }) => 
      props.hasError ? props.theme.colors.error.main : props.theme.colors.accent.main
    };
    box-shadow: 0 0 0 ${getFibonacciByIndex(3)}px ${(props: { theme: DefaultTheme; hasError: boolean }) => 
      props.hasError 
        ? `${props.theme.colors.error.main}33` // 20% opacity
        : `${props.theme.colors.accent.light}33`
    };
  }
`;

/**
 * Textarea for messages
 * Uses golden ratio for proportions
 */
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: ${getFibonacciByIndex(9)}px;
  line-height: ${PHI};
`;

/**
 * Privacy policy text
 * Uses sacred spacing and golden ratio
 */
const PrivacyText = styled.p`
  font-size: 0.75rem;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.light};
  margin-top: ${SACRED_SPACING.lg}px;
  line-height: ${PHI};
`;

/**
 * Privacy policy link
 * Uses accent color for visibility
 */
const PrivacyLink = styled.a`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.accent.main};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * ClientInfo component
 * Collects client information for booking
 * Implements sacred geometry principles throughout
 */
const ClientInfo: React.FC<ClientInfoProps> = ({
  formData,
  onFieldChange,
  errors,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onFieldChange(name as keyof ClientFormData, value);
  };
  
  return (
    <Container>
      <SectionTitle>Your Information</SectionTitle>
      <SectionDescription>
        Please provide your contact details. We'll use this information to confirm your booking and send important updates.
      </SectionDescription>
      
      <FormGrid>
        <FormGroup>
          <Label htmlFor="firstName">
            First Name <Required>*</Required>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            hasError={!!errors.firstName}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            required
          />
          {errors.firstName && (
            <ErrorMessage id="firstName-error">{errors.firstName}</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="lastName">
            Last Name <Required>*</Required>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            hasError={!!errors.lastName}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            required
          />
          {errors.lastName && (
            <ErrorMessage id="lastName-error">{errors.lastName}</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">
            Email <Required>*</Required>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            hasError={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <ErrorMessage id="email-error">{errors.email}</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="phone">
            Phone <Required>*</Required>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            hasError={!!errors.phone}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone && (
            <ErrorMessage id="phone-error">{errors.phone}</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup fullWidth>
          <Label htmlFor="message">
            Additional Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            hasError={!!errors.message}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <ErrorMessage id="message-error">{errors.message}</ErrorMessage>
          )}
        </FormGroup>
      </FormGrid>
      
      <PrivacyText>
        By submitting this form, you agree to our{' '}
        <PrivacyLink href="/privacy-policy">Privacy Policy</PrivacyLink> and{' '}
        <PrivacyLink href="/terms-of-service">Terms of Service</PrivacyLink>.
      </PrivacyText>
    </Container>
  );
};

export default ClientInfo; 












