/**
 * FooterNewsletter Component
 * 
 * Newsletter signup form in the footer, implementing sacred geometry principles
 * for layout, spacing, and animations.
 */

import * as React from 'react';
import { useState } from 'react';;
import styled from 'styled-components';
import { Box } from '../design-system/components/layout/Box';
import { Input } from '../design-system/components/form/Input';
import { Button } from '../design-system/components/button/Button';
import { FormControl } from '../design-system/components/form/FormControl';
import { FormLabel } from '../design-system/components/form/FormLabel';
import { Text } from '../design-system/components/typography/Text';
import { Heading } from '../design-system/components/typography/Heading';
import { Alert } from '../design-system/components/feedback/Alert';

import { subscribeToNewsletter } from '../../services';
import { FadeIn } from "@animation/FadeIn";

const NewsletterForm = styled.form`
  margin-top: ${SACRED_SPACING.sm}px;
`;

const InputWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${SACRED_SPACING.sm}px;
  margin-top: ${SACRED_SPACING.md}px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

interface FooterNewsletterProps {
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * FooterNewsletter Component
 * 
 * Provides a newsletter subscription form in the footer.
 * Implements sacred geometry principles for spacing and animations.
 */
export const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  
  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setStatus('loading');
    setError('');
    
    try {
      await subscribeToNewsletter({
        email,
        consent: true,
      });
      
      setStatus('success');
      setEmail('');
      
      // Reset success status after a time based on sacred timing
      setTimeout(() => {
        setStatus('idle');
      }, SACRED_TIMING.slowest);
      
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to subscribe to newsletter');
    }
  };
  
  return (
    <Box className={className}>
      <Heading as="h4" fontfontSize="xs" mb={SACRED_SPACING.sm}>
        Newsletter
      </Heading>
      
      <Text color="text.inverse" opacity={0.8} mb={SACRED_SPACING.md}>
        Subscribe to receive updates and exclusive content based on the Golden Ratio of valuable insights.
      </Text>
      
      <NewsletterForm onSubmit={handleSubmit}>
        <FormControl id="newsletter-email">
          <FormLabel srOnly>Email Address</FormLabel>
          <InputWrapper>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              aria-label="Email address for newsletter"
              required
            />
            <Button 
              type="submit"
              variant="primary"
              size="md"
              isLoading={status === 'loading'}
              disabled={status === 'loading' || status === 'success'}
            >
              Subscribe
            </Button>
          </InputWrapper>
        </FormControl>
        
        {status === 'error' && (
          <FadeIn duration={SACRED_TIMING.medium}>
            <Alert 
              status="error" 
              title="Subscription Error" 
              mt={SACRED_SPACING.md}
              fontSize="sm"
            >
              {error || 'An error occurred. Please try again.'}
            </Alert>
          </FadeIn>
        )}
        
        {status === 'success' && (
          <FadeIn duration={SACRED_TIMING.medium}>
            <Alert 
              status="success" 
              title="Thank you for subscribing!" 
              mt={SACRED_SPACING.md}
              fontSize="sm"
            >
              Please check your inbox to confirm your subscription.
            </Alert>
          </FadeIn>
        )}
        
        <Text fontSize="xs" mt={SACRED_SPACING.md} opacity={0.7} color="text.inverse">
          We respect your privacy and will never share your information.
        </Text>
      </NewsletterForm>
    </Box>
  );
};

export default FooterNewsletter; 












