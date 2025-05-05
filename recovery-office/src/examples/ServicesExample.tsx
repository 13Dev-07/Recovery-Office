import * as React from 'react';
import { Services } from '../design-system/components/feature-sections';
import { Box } from '../design-system/components/layout/Box';
import { OliveBranch, FlowerOfLife, VesicaPiscis } from '../design-system/components/botanical';
import { Heading } from '../design-system/components/typography/Heading';
import { Text } from '../design-system/components/typography/Text';

/**
 * Example component demonstrating the Services component with various configurations.
 * Each example showcases a different layout option and style, all adhering to sacred geometry principles.
 */
const ServicesExample: React.FC = () => {
  // Example service data
  const therapyServices = [
    {
      id: 'holistic-counseling',
      title: 'Holistic Counseling',
      description: 'Integrated approach combining mental, physical, and spiritual aspects of wellbeing using sacred geometry principles.',
      icon: <FlowerOfLife size="sm" opacity={0.7} />,
      url: '/services/holistic-counseling',
      accentColor: '#4a6eb3',
      botanicalAccent: 'flowerOfLife' as const
    },
    {
      id: 'recovery-therapy',
      title: 'Recovery Therapy',
      description: 'Specialized therapeutic techniques to support recovery from trauma and addiction based on natural harmony.',
      icon: <OliveBranch size="sm" opacity={0.7} />,
      url: '/services/recovery-therapy',
      accentColor: '#2a7d6f',
      botanicalAccent: 'oliveBranch' as const
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness Practice',
      description: 'Cultivate present-moment awareness through practices aligned with sacred geometry and natural patterns.',
      icon: <VesicaPiscis size="sm" opacity={0.7} />,
      url: '/services/mindfulness',
      accentColor: '#8a4d9e',
      botanicalAccent: 'vesicaPiscis' as const
    }
  ];

  const educationServices = [
    {
      id: 'sacred-geometry-classes',
      title: 'Sacred Geometry Classes',
      description: 'Learn the principles of sacred geometry and how they relate to personal wellbeing and healing.',
      url: '/education/sacred-geometry',
      accentColor: '#4a6eb3'
    },
    {
      id: 'wellness-workshops',
      title: 'Wellness Workshops',
      description: 'Participate in hands-on workshops exploring holistic practices for mind-body balance.',
      url: '/education/workshops',
      accentColor: '#2a7d6f'
    },
    {
      id: 'recovery-education',
      title: 'Recovery Education',
      description: 'Educational programs on recovery principles and techniques for lasting transformation.',
      url: '/education/recovery',
      accentColor: '#8a4d9e'
    },
    {
      id: 'professional-training',
      title: 'Professional Training',
      description: 'Certification courses for professionals seeking to integrate sacred geometry into their practice.',
      url: '/education/professional',
      accentColor: '#b25a45'
    }
  ];

  const consultationServices = [
    {
      id: 'initial-consultation',
      title: 'Initial Consultation',
      description: 'A comprehensive assessment to understand your unique needs and create a personalized recovery plan.',
      content: (
        <Box mt={3} mb={3}>
          <Text variant="subtitle2" color="primary.main">60 minutes • $120</Text>
        </Box>
      ),
      url: '/booking/consultation',
      accentColor: '#4a6eb3'
    },
    {
      id: 'follow-up-session',
      title: 'Follow-Up Session',
      description: 'Continued therapeutic support to help you progress on your recovery journey.',
      content: (
        <Box mt={3} mb={3}>
          <Text variant="subtitle2" color="primary.main">45 minutes • $95</Text>
        </Box>
      ),
      url: '/booking/follow-up',
      accentColor: '#2a7d6f'
    }
  ];

  return (
    <Box>
      <Heading variant="h2" textAlign="center" mb={6}>
        Services Component Examples
      </Heading>
      <Text variant="body1" textAlign="center" mb={8} maxWidth="800px" mx="auto">
        These examples demonstrate the various layouts and configurations of the Services component,
        all designed with sacred geometry principles for harmonious proportions and spacing.
      </Text>

      {/* Example 1: Grid Layout */}
      <Box mb={10}>
        <Services
          title="Our Therapeutic Approaches"
          subtitle="Holistic healing methods based on sacred geometry principles"
          services={therapyServices}
          displayStyle="grid"
          columns={3}
          animated={true}
          botanical={{
            type: 'flowerOfLife',
            position: 'topRight',
            opacity: 0.05,
            size: 'xl'
          }}
          cta={{
            label: 'Explore All Services',
            url: '/services',
            variant: 'primary'
          }}
        />
      </Box>

      {/* Example 2: Featured Layout */}
      <Box mb={10} backgroundColor="#f8f9fa" py={8}>
        <Services
          title="Educational Offerings"
          subtitle="Learn and grow with our sacred geometry-based programs"
          services={educationServices}
          displayStyle="featured"
          backgroundColor="transparent"
          animated={true}
          botanical={{
            type: 'vesicaPiscis',
            position: 'bottomLeft',
            opacity: 0.07,
            size: 'lg'
          }}
          cta={{
            label: 'View All Programs',
            url: '/education',
            variant: 'secondary'
          }}
        />
      </Box>

      {/* Example 3: Alternating Layout */}
      <Box mb={10}>
        <Services
          title="Consultation Services"
          subtitle="Begin your healing journey with professional guidance"
          services={consultationServices}
          displayStyle="alternating"
          animated={true}
          botanical={{
            type: 'oliveBranch',
            position: 'bottomRight',
            opacity: 0.08,
            size: 'md'
          }}
          cta={{
            label: 'Schedule a Consultation',
            url: '/booking',
            variant: 'accent'
          }}
        />
      </Box>
    </Box>
  );
};

export default ServicesExample; 






