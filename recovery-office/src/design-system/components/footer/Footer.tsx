/**
 * Footer Component
 * 
 * A comprehensive footer component with support for links, newsletter signup,
 * and social media icons. Built with sacred geometry spacing and proportions.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';


import { Box } from '../layout/Box';
import { Container } from '../layout/Container';
import { Text } from '../typography/Text';
import { BotanicalElement, BotanicalPosition } from '../botanical';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';

export interface FooterLinkSection {
  /** Section title */
  title: string;
  
  /** List of links */
  links: {
    /** Link label */
    label: string;
    
    /** Link URL */
    url: string;
    
    /** Whether link opens in a new tab */
    external?: boolean;
  }[];
}

export interface FooterProps {
  /** Logo component or element */
  logo?: React.ReactNode;
  
  /** Company name */
  companyName: string;
  
  /** Copyright text */
  copyrightText?: string;
  
  /** Link sections in columns */
  linkSections?: FooterLinkSection[];
  
  /** Social media links */
  socialLinks?: {
    /** Platform name */
    platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'pinterest';
    
    /** URL to profile */
    url: string;
  }[];
  
  /** Whether to include newsletter signup */
  showNewsletter?: boolean;
  
  /** Newsletter section title */
  newsletterTitle?: string;
  
  /** Newsletter description */
  newsletterDescription?: string;
  
  /** Privacy policy link */
  privacyPolicyUrl?: string;
  
  /** Terms of service link */
  termsOfServiceUrl?: string;
  
  /** Botanical decoration configuration */
  botanical?: {
    /** Type of botanical element */
    type: 'oliveBranch' | 'flowerOfLife' | 'vesicaPiscis' | 'fibonacciSpiral' | 'oliveLeaf';
    
    /** Position of the botanical element */
    position: BotanicalPosition;
    
    /** Size of the botanical element */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    
    /** Opacity of the botanical element */
    opacity?: number;
  };
  
  /** Optional additional class name */
  className?: string;
  
  /** Optional inline styles */
  style?: React.CSSProperties;
}

// Main footer container with appropriate spacing and borders
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  padding: ${getFibonacciByIndex(7)}px 0 ${getFibonacciByIndex(5)}px;
  background-color: ${props => props.theme.colors.primary[900] ?? 1};
  color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

// Upper section with links and newsletter
const UpperSection = styled.div`
  display: grid;
  grid-template-columns: ${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%;
  gap: ${getFibonacciByIndex(6)}px;
  margin-bottom: ${getFibonacciByIndex(7)}px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${getFibonacciByIndex(7)}px;
  }
`;

// Lower section with logo, copyright, and social
const LowerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: ${getFibonacciByIndex(6)}px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

// Logo container with spacing
const LogoContainer = styled.div`
  margin-bottom: ${getFibonacciByIndex(5)}px;
  max-width: 120px;
`;

// Company name with appropriate typography
const CompanyName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: ${getFibonacciByIndex(3)}px;
`;

// Copyright text with reduced opacity using golden ratio
const Copyright = styled(Text)`
  opacity: ${PHI_INVERSE};
  margin-bottom: ${getFibonacciByIndex(6)}px;
`;

// Legal links with proper spacing
const LegalLinks = styled.div`
  display: flex;
  gap: ${getFibonacciByIndex(5)}px;
  margin-top: ${getFibonacciByIndex(4)}px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${getFibonacciByIndex(3)}px;
    align-items: center;
  }
`;

// Legal link styling
const LegalLink = styled.a`
  color: ${props => props.theme.colors.white};
  opacity: ${PHI_INVERSE};
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

/**
 * Footer component for website footers using sacred geometry principles.
 * Includes support for multiple link sections, newsletter signup, and social links.
 */
const Footer: React.FC<FooterProps> = ({
  logo,
  companyName,
  copyrightText = `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`,
  linkSections = [],
  socialLinks = [],
  showNewsletter = true,
  newsletterTitle = "Stay Updated",
  newsletterDescription = "Subscribe to our newsletter for the latest updates and exclusive content.",
  privacyPolicyUrl = "/privacy-policy",
  termsOfServiceUrl = "/terms-of-service",
  botanical,
  className,
  style,
}) => {
  return (
    <FooterContainer className={className} style={style}>
      {botanical && (
        <BotanicalElement
          type={botanical.type}
          position={botanical.position}
          size={botanical.size}
          opacity={botanical.opacity || 0.05}
        />
      )}
      
      <Container>
        <UpperSection>
          {linkSections.length > 0 && (
            <FooterLinks sections={linkSections} />
          )}
          
          {showNewsletter && (
            <FooterNewsletter
              title={newsletterTitle}
              description={newsletterDescription}
            />
          )}
        </UpperSection>
        
        <LowerSection>
          {logo && (
            <LogoContainer>
              {logo}
            </LogoContainer>
          )}
          
          <CompanyName>{companyName}</CompanyName>
          <Copyright>{copyrightText}</Copyright>
          
          {socialLinks.length > 0 && (
            <FooterSocial links={socialLinks} />
          )}
          
          <LegalLinks>
            {privacyPolicyUrl && (
              <LegalLink href={privacyPolicyUrl}>
                Privacy Policy
              </LegalLink>
            )}
            
            {termsOfServiceUrl && (
              <LegalLink href={termsOfServiceUrl}>
                Terms of Service
              </LegalLink>
            )}
          </LegalLinks>
        </LowerSection>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 








