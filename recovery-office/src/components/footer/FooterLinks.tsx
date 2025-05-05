/**
 * FooterLinks Component
 * 
 * Displays navigation links in the footer following sacred geometry principles.
 * Links are organized into categories with proper spacing and layout.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Link } from '@design-system/components/navigation/Link';
import { Box } from '@design-system/components/layout/Box';
import { Grid } from '@design-system/components/layout/Grid';
import { Heading } from '@design-system/components/typography/Heading';
import { SACRED_SPACING, FIBONACCI } from '@constants/sacred-geometry';

const LinkGroup = styled(Box)`
  margin-bottom: ${SACRED_SPACING.lg}px;
`;

const LinkHeading = styled(Heading)`
  margin-bottom: ${SACRED_SPACING.md}px;
  font-size: ${getFibonacciByIndex(5)}px;
  font-weight: 500;
`;

const FooterLinkStyled = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.text.inverse};
  opacity: 0.8;
  font-size: ${getFibonacciByIndex(4)}px;
  margin-bottom: ${SACRED_SPACING.sm}px;
  transition: opacity 0.2s ease;
  
  &:hover, &:focus {
    opacity: 1;
    text-decoration: none;
  }
`;

interface FooterLinksProps {
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * FooterLinks Component
 * 
 * Displays navigation links organized in categories for the footer.
 * Links are spaced according to Fibonacci sequence values.
 */
export const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  // Link data organized by category
  const linkData = [
    {
      heading: 'Services',
      links: [
        { title: 'Investment Recovery', href: '/services/investment-recovery' },
        { title: 'Fraud Claims', href: '/services/fraud-claims' },
        { title: 'Financial Consultation', href: '/services/financial-consultation' },
        { title: 'Wealth Protection', href: '/services/wealth-protection' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { title: 'About Us', href: '/about' },
        { title: 'Our Team', href: '/about/team' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/contact' }
      ]
    }
  ];
  
  return (
    <Box className={className}>
      <Grid 
        templateColumns={{ 
          base: "1fr", 
          sm: "repeat(2, 1fr)" 
        }}
        gap={SACRED_SPACING.lg}
      >
        {linkData.map((category, index) => (
          <LinkGroup key={index}>
            <LinkHeading as="h4" size="xs">
              {category.heading}
            </LinkHeading>
            {category.links.map((link, linkIndex) => (
              <FooterLinkStyled 
                key={linkIndex} 
                href={link.href}
                aria-label={`Go to ${link.title}`}
              >
                {link.title}
              </FooterLinkStyled>
            ))}
          </LinkGroup>
        ))}
      </Grid>
    </Box>
  );
};

export default FooterLinks; 














