/**
 * ContactForm Section Component
 * 
 * Form section for the Contact page with Zod validation and sacred geometry principles.
 * Features responsive grid layout and validation feedback.
 */

import * as React from 'react';
import { Box } from '../design-system/components/layout';
import { Grid } from '../design-system/components/layout';
import { SectionTitle } from '../../../design-system/components/typography/SectionTitle';
import { OliveBranch } from '../design-system/botanical';
import { 
  FormControl, 
  FormLabel, 
  FormError,
  Input, 
  TextArea,
  Select,
  Checkbox
} from '../../../design-system/components/form';
import { Button } from '../design-system/components/button';
import { PHI } from '../../../constants/sacred-geometry';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '../../animation';

// Form validation schema using Zod
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please select a subject"),
  preferredContact: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Please select a preferred contact method" })
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to our privacy policy" })
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  /**
   * Function to handle form submission
   */
  onFormSubmit?: (data: ContactFormData) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  onFormSubmit 
}) => {
  // React Hook Form setup with Zod resolver
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      preferredContact: 'email',
      message: '',
      gdprConsent: false
    }
  });

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    try {
      if (onFormSubmit) {
        await onFormSubmit(data);
      } else {
        // Default handler if no custom handler provided
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000 * PHI)); // Golden ratio timing
        console.log('Form submitted:', data);
      }
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FadeIn>
      <Box>
        <SectionTitle 
          title="Send Us a Message" 
          subtitle="We'll respond within 24 hours"
          size="medium"
          align="left"
          decoratorBefore={<OliveBranch size="sm" opacity={0.3} />}
        />
        
        {isSubmitSuccessful ? (
          <Box 
            mt={4}
            p={4}
            borderRadius="8px"
            style={{
              backgroundColor: 'rgba(134, 179, 120, 0.1)',
              borderLeft: '4px solid #86b378'
            }}
          >
            <Box fontSize="lg" fontWeight="600" color="#86b378" mb={2}>
              Message Sent Successfully
            </Box>
            <Box>
              Thank you for reaching out to us. We'll get back to you within 24 hours.
            </Box>
            <Button 
              variant="outline" 
              size="medium" 
              mt={3}
              onClick={() => reset()}
            >
              Send Another Message
            </Button>
          </Box>
        ) : (
          <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
            <Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={`${PHI * 16}px`}>
              <FormControl isInvalid={!!errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input 
                  id="firstName" 
                  placeholder="Your first name" 
                  {...register('firstName')}
                />
                {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
              </FormControl>

              <FormControl isInvalid={!!errors.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input 
                  id="lastName" 
                  placeholder="Your last name" 
                  {...register('lastName')}
                />
                {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
              </FormControl>
            </Grid>

            <Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={`${PHI * 16}px`} mt={4}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                  id="email" 
                  placeholder="Your email address" 
                  type="email" 
                  {...register('email')}
                />
                {errors.email && <FormError>{errors.email.message}</FormError>}
              </FormControl>

              <FormControl isInvalid={!!errors.phone}>
                <FormLabel htmlFor="phone">Phone (Optional)</FormLabel>
                <Input 
                  id="phone" 
                  placeholder="Your phone number" 
                  {...register('phone')}
                />
                {errors.phone && <FormError>{errors.phone.message}</FormError>}
              </FormControl>
            </Grid>

            <Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={`${PHI * 16}px`} mt={4}>
              <FormControl isInvalid={!!errors.subject}>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Select 
                  id="subject" 
                  {...register('subject')}
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Book a Consultation</option>
                  <option value="services">Services Inquiry</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </Select>
                {errors.subject && <FormError>{errors.subject.message}</FormError>}
              </FormControl>

              <FormControl isInvalid={!!errors.preferredContact}>
                <FormLabel htmlFor="preferredContact">Preferred Contact Method</FormLabel>
                <Select 
                  id="preferredContact" 
                  {...register('preferredContact')}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </Select>
                {errors.preferredContact && <FormError>{errors.preferredContact.message}</FormError>}
              </FormControl>
            </Grid>

            <FormControl isInvalid={!!errors.message} mt={4}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextArea 
                id="message" 
                placeholder="How can we help you?" 
                rows={5} 
                {...register('message')}
              />
              {errors.message && <FormError>{errors.message.message}</FormError>}
            </FormControl>

            <FormControl isInvalid={!!errors.gdprConsent} mt={4}>
              <Box display="flex" alignItems="start">
                <Checkbox
                  id="gdprConsent"
                  {...register('gdprConsent')}
                  style={{ marginRight: '8px', marginTop: '4px' }}
                />
                <FormLabel htmlFor="gdprConsent" style={{ marginBottom: 0 }}>
                  I agree to the processing of my personal data in accordance with the 
                  <a href="/legal/privacy-policy" style={{ color: '#4a6eb3', marginLeft: '4px' }}>
                    Privacy Policy
                  </a>
                </FormLabel>
              </Box>
              {errors.gdprConsent && <FormError>{errors.gdprConsent.message}</FormError>}
            </FormControl>

            <Box mt={`${PHI * 24}px`}>
              <Button 
                type="submit" 
                variant="primary" 
                size="large"
                width="100%"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                aria-label="Submit contact form"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </FadeIn>
  );
};

export default ContactForm; 











