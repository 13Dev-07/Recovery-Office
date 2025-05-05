/**
 * ContactInfo Section Component
 * 
 * Component for displaying office contact information with sacred geometry principles.
 * Features responsive layout and botanical elements.
 */

import * as React from 'react';
import { Box } from '../design-system/components/layout';
import { Card } from '../design-system/components/data-display';
import { SectionTitle } from '../../../design-system/components/typography/SectionTitle';
import { Text, Heading } from '../design-system/components/typography';
import { Button } from '../design-system/components/button';
import { VesicaPiscis } from '../design-system/botanical';
import { PHI } from '../../../constants/sacred-geometry';
import { FadeIn } from '../../animation';

// Office location data
export interface OfficeLocation {
  id: string;
  name: string;
  address: string[];
  email: string;
  phone: string;
  fax?: string;
  hours: {
    [key: string]: string;
  };
}

interface ContactInfoProps {
  /**
   * Office data to display
   */
  office?: OfficeLocation;
  /**
   * Social media links
   */
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

// Default office data
const defaultOffice: OfficeLocation = {
  id: 'main',
  name: 'Main Office',
  address: ['123 Harmony Way, Suite 618', 'Golden Springs, CA 91234'],
  email: 'info@recoveryoffice.com',
  phone: '(555) 123-4567',
  fax: '(555) 123-4568',
  hours: {
    'Monday - Friday': '9:00 AM - 6:00 PM',
    'Saturday': '10:00 AM - 3:00 PM',
    'Sunday': 'Closed'
  }
};

// Default social links
const defaultSocialLinks = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/recovery-office' },
  { platform: 'Twitter', url: 'https://twitter.com/recovery_office' },
  { platform: 'Instagram', url: 'https://instagram.com/recovery_office' }
];

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  office = defaultOffice,
  socialLinks = defaultSocialLinks
}) => {
  return (
    <FadeIn>
      <Box>
        <SectionTitle 
          title="Contact Information" 
          subtitle="Ways to reach us"
          size="medium"
          align="left"
          decoratorBefore={<VesicaPiscis size="sm" opacity={0.3} />}
        />
        
        <Box mt={4}>
          <Card
            elevation={2}
            padding={`${PHI * 24}px`}
            borderRadius="8px"
            style={{
              backgroundColor: 'white',
              borderLeft: `4px solid #4a6eb3`
            }}
          >
            <Box marginBottom={`${PHI * 24}px`}>
              <Heading as="h3" variant="h5" marginBottom={`${PHI * 8}px`}>
                {office.name}
              </Heading>
              {office.address.map((line, index) => (
                <Text key={`address-${index}`} variant="body2">
                  {line}{index < office.address.length - 1 ? <br /> : null}
                </Text>
              ))}
            </Box>
            
            <Box marginBottom={`${PHI * 24}px`}>
              <Heading as="h3" variant="h5" marginBottom={`${PHI * 8}px`}>
                Contact Details
              </Heading>
              <Box marginBottom={`${PHI * 8}px`}>
                <Text variant="subtitle2">Email:</Text>
                <Text variant="body2">
                  <a 
                    href={`mailto:${office.email}`} 
                    style={{ color: '#4a6eb3' }}
                    aria-label={`Email us at ${office.email}`}
                  >
                    {office.email}
                  </a>
                </Text>
              </Box>
              <Box marginBottom={`${PHI * 8}px`}>
                <Text variant="subtitle2">Phone:</Text>
                <Text variant="body2">
                  <a 
                    href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} 
                    style={{ color: '#4a6eb3' }}
                    aria-label={`Call us at ${office.phone}`}
                  >
                    {office.phone}
                  </a>
                </Text>
              </Box>
              {office.fax && (
                <Box>
                  <Text variant="subtitle2">Fax:</Text>
                  <Text variant="body2">{office.fax}</Text>
                </Box>
              )}
            </Box>
            
            <Box marginBottom={`${PHI * 24}px`}>
              <Heading as="h3" variant="h5" marginBottom={`${PHI * 8}px`}>
                Hours of Operation
              </Heading>
              {Object.entries(office.hours).map(([day, hours], index) => (
                <Box key={day} marginBottom={index === Object.keys(office.hours).length - 1 ? 0 : `${PHI * 4}px`}>
                  <Text variant="subtitle2" display="inline" marginRight={`${PHI * 8}px`}>
                    {day}:
                  </Text>
                  <Text variant="body2" display="inline">
                    {hours}
                  </Text>
                </Box>
              ))}
            </Box>
            
            {socialLinks.length > 0 && (
              <Box>
                <Heading as="h3" variant="h5" marginBottom={`${PHI * 8}px`}>
                  Follow Us
                </Heading>
                <Box 
                  display="flex" 
                  gap={`${PHI * 8}px`}
                  flexWrap="wrap"
                >
                  {socialLinks.map(link => (
                    <Button 
                      key={link.platform}
                      variant="outline" 
                      size="small"
                      as="a" 
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${link.platform}`}
                    >
                      {link.platform}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
          </Card>
        </Box>
      </Box>
    </FadeIn>
  );
};

export default ContactInfo; 











