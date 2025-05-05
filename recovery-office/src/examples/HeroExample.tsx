import * as React from 'react';
import { Hero } from '../design-system/components/feature-sections';
import { Box } from '../design-system/components/layout/Box';
import { Text } from '../design-system/components/typography/Text';
import { AspectRatio } from '../design-system/components/layout/AspectRatio';
import { FlowerOfLife, OliveBranch } from '../design-system/components/botanical';

// Sample background image URL
const heroBackgroundUrl = 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1920&q=80';

/**
 * Example demonstrating different Hero component configurations
 * with sacred geometry principles.
 */
const HeroExample: React.FC = () => {
  return (
    <div>
      {/* Standard Hero with background image */}
      <Hero
        heading="Discover Holistic Healing"
        subheading="Recovery Office provides therapeutic solutions guided by sacred geometry and natural harmony"
        background={{
          image: heroBackgroundUrl,
          overlay: 'rgba(21, 45, 85, 0.7)'
        }}
        align="center"
        minHeight="85vh"
        animated={true}
        botanical={{
          type: 'flowerOfLife',
          position: 'bottomRight',
          opacity: 0.15,
          animated: true
        }}
        buttons={[
          {
            label: 'Book a Consultation',
            variant: 'primary',
            href: '/booking',
          },
          {
            label: 'Learn More',
            variant: 'outline',
            href: '/about',
          }
        ]}
      >
        <Text variant="body1" style={{ maxWidth: '600px', margin: '0 auto', color: 'white' }}>
          Our approach integrates ancient wisdom with modern therapeutic techniques, 
          creating harmony and balance in both physical and mental well-being.
        </Text>
      </Hero>

      {/* Split Hero with image on right */}
      <Box mt={8} mb={8}>
        <Hero
          heading="Our Sacred Approach"
          subheading="Healing guided by golden ratio principles"
          background={{
            color: '#f8f9fa'
          }}
          minHeight="70vh"
          split={true}
          align="left"
          botanical={{
            type: 'oliveBranch',
            position: 'topLeft',
            opacity: 0.1
          }}
          buttons={[
            {
              label: 'Explore Services',
              variant: 'secondary',
              href: '/services',
            }
          ]}
          secondaryContent={
            <AspectRatio ratio={1} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1584814044760-6cfa339c12c3?auto=format&fit=crop&w=800&q=80" 
                alt="Holistic healing session" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AspectRatio>
          }
        >
          <Text variant="body1" style={{ opacity: 0.8 }}>
            Using principles derived from the golden ratio (Φ ≈ 1.618) and Fibonacci sequence,
            we create therapeutic environments and treatments that resonate with the natural
            patterns found throughout the universe and within our own bodies.
          </Text>
          <Box mt={4} display="flex" alignItems="center">
            <OliveBranch width={24} height={24} opacity={0.7} style={{ marginRight: '8px' }} />
            <Text variant="subtitle2">Harmony in every aspect of recovery</Text>
          </Box>
        </Hero>
      </Box>

      {/* Minimal Hero with gradient background */}
      <Hero
        heading="Ready to Begin Your Journey?"
        background={{
          color: 'linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%)'
        }}
        minHeight="50vh"
        align="center"
        animated={true}
        buttons={[
          {
            label: 'Schedule Now',
            variant: 'accent',
            href: '/contact',
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M20 12L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            iconPosition: 'right'
          }
        ]}
      >
        <Text variant="body2" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto' }}>
          Take the first step toward holistic recovery and wellness aligned with sacred principles.
        </Text>
      </Hero>

      {/* Right-aligned hero with botanical elements */}
      <Box mt={8}>
        <Hero
          heading="Therapeutic Education"
          subheading="Learn sacred geometry principles for self-healing"
          background={{
            color: '#f0f4f8'
          }}
          minHeight="60vh"
          align="right"
          split={true}
          reverseSplit={true}
          botanical={{
            type: 'vesicaPiscis',
            position: 'bottomLeft',
            size: 'xl',
            opacity: 0.08
          }}
          buttons={[
            {
              label: 'Browse Courses',
              variant: 'outline',
              href: '/education',
            }
          ]}
          secondaryContent={
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <FlowerOfLife 
                size="xl" 
                strokeWidth={0.5}
                primaryColor="#2a4073"
                secondaryColor="rgba(0,0,0,0)"
                opacity={0.8}
              />
            </Box>
          }
        >
          <Text variant="body1" style={{ opacity: 0.8 }}>
            Our educational programs teach the fundamental principles of sacred geometry
            and how to apply them for personal wellness and recovery.
          </Text>
        </Hero>
      </Box>
    </div>
  );
};

export default HeroExample; 






