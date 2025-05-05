import * as React from 'react';
import { Contact } from '../design-system/components/feature-sections';
import { Box } from '../design-system/components/layout/Box';
import { Heading } from '../design-system/components/typography/Heading';
import { Text } from '../design-system/components/typography/Text';

/**
 * Example component demonstrating the Contact component with various 
 * configurations and layouts, all following sacred geometry principles.
 */
const ContactExample: React.FC = () => {
  // Mock form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted!', event);
    // In a real application, we would handle the form submission here
  };

  // Custom form fields for the second example
  const customFormFields = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter your full name',
      helpText: 'Please provide your full legal name'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email' as const,
      required: true,
      placeholder: 'your.email@example.com',
      helpText: 'We\'ll never share your email with anyone else'
    },
    {
      name: 'service',
      label: 'Service of Interest',
      type: 'text' as const,
      placeholder: 'Which service are you interested in?'
    },
    {
      name: 'message',
      label: 'Your Message',
      type: 'textarea' as const,
      required: true,
      placeholder: 'Please tell us how we can help you...',
      helpText: 'Be as specific as possible for the best response'
    }
  ];

  // Custom contact options for the third example
  const customContactOptions = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 1 12.16 16a6.981 6.981 0 0 1-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      ),
      label: 'Book a Session',
      value: 'Schedule your consultation online',
      url: '/booking'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9 12.66a1 1 0 010-1.32l1.28-1.44a1 1 0 00.12-1.17l-2-3.46a1 1 0 00-1.07-.48l-1.88.38a1 1 0 01-1.15-.66l-.61-1.83a1 1 0 00-.95-.68h-4a1 1 0 00-1 .68l-.56 1.83a1 1 0 01-1.15.66L5 4.79a1 1 0 00-1 .48L2 8.73a1 1 0 00.1 1.17l1.27 1.44a1 1 0 010 1.32L2.1 14.1a1 1 0 00-.1 1.17l2 3.46a1 1 0 001.07.48l1.88-.38a1 1 0 011.15.66l.61 1.83a1 1 0 00.95.68h4a1 1 0 00.95-.68l.61-1.83a1 1 0 011.15-.66l1.88.38a1 1 0 001.07-.48l2-3.46a1 1 0 00-.12-1.17l-1.3-1.44zM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 00-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 00-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 000-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 003.45-2L10.36 4h2.56l.38 1.14a3 3 0 003.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 000 3.98zm-6.77-6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      label: 'Support Hours',
      value: 'Monday-Friday: 9am-6pm EST'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
        </svg>
      ),
      label: 'Email Newsletter',
      value: 'Subscribe to our sacred geometry insights',
      url: '/newsletter'
    }
  ];

  return (
    <Box>
      <Heading variant="h2" textAlign="center" mb={6}>
        Contact Component Examples
      </Heading>
      <Text variant="body1" textAlign="center" mb={8} maxWidth="800px" mx="auto">
        These examples demonstrate the various layouts and configurations of the Contact component,
        all designed with sacred geometry principles for harmonious proportions and spacing.
      </Text>

      {/* Example 1: Default Split Layout */}
      <Box mb={10}>
        <Contact
          title="Get in Touch"
          subtitle="Reach out to us with any questions about our holistic services"
          layout="split"
          animated={true}
          botanical={{
            type: 'flowerOfLife',
            position: 'topRight',
            opacity: 0.05,
            size: 'xl'
          }}
          onSubmit={handleSubmit}
        />
      </Box>

      {/* Example 2: Stacked Layout with Custom Fields */}
      <Box mb={10} backgroundColor="#f8f9fa" py={8}>
        <Contact
          title="Schedule a Consultation"
          subtitle="Take the first step on your recovery journey"
          layout="stacked"
          formFields={customFormFields}
          submitText="Request Appointment"
          backgroundColor="transparent"
          animated={true}
          botanical={{
            type: 'vesicaPiscis',
            position: 'bottomLeft',
            opacity: 0.07,
            size: 'lg'
          }}
          onSubmit={handleSubmit}
        />
      </Box>

      {/* Example 3: Split Layout with Custom Contact Options */}
      <Box mb={10}>
        <Contact
          title="Support & Resources"
          subtitle="We're here to support your wellness journey"
          layout="split"
          contactOptions={customContactOptions}
          formAction="/api/contact"
          submitText="Send Request"
          animated={true}
          botanical={{
            type: 'oliveBranch',
            position: 'bottomRight',
            opacity: 0.06,
            size: 'md'
          }}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default ContactExample; 






