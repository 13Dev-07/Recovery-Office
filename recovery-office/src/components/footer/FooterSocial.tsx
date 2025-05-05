/**
 * FooterSocial Component
 * 
 * Displays social media links in the footer using sacred geometry principles
 * for spacing and layout.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../design-system/components/layout/Flex';
import { IconButton } from '../design-system/components/button/IconButton';
import { SACRED_SPACING } from '../constants/sacred-geometry';
import { getFibonacciByIndex } from "@utils/sacredGeometry";

// Social media icons
import { 
  LinkedInIcon, 
  TwitterIcon, 
  FacebookIcon, 
  InstagramIcon 
} from '../design-system/icons';

const SocialWrapper = styled(Flex)`
  gap: ${SACRED_SPACING.md}px;
`;

const SocialButton = styled(IconButton)`
  color: ${props => props.theme.colors.text.inverse};
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
  
  &:hover, &:focus {
    opacity: 1;
    transform: translateY(-${SACRED_SPACING.xxs}px);
  }
`;

interface FooterSocialProps {
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Optional children to render
   */
  children?: React.ReactNode;
}

/**
 * FooterSocial Component
 * 
 * Displays social media links with proper spacing following sacred geometry principles.
 * Icons are properly sized based on Fibonacci sequence.
 */
export const FooterSocial: React.FC<FooterSocialProps> = ({ className }) => {
  // Social media platforms data
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon />, 
      href: 'https://linkedin.com/company/recovery-office',
      label: 'Visit Recovery Office LinkedIn page'
    },
    { 
      name: 'Twitter', 
      icon: <TwitterIcon />, 
      href: 'https://twitter.com/recoveryoffice',
      label: 'Visit Recovery Office Twitter page'
    },
    { 
      name: 'Facebook', 
      icon: <FacebookIcon />, 
      href: 'https://facebook.com/recoveryoffice',
      label: 'Visit Recovery Office Facebook page'
    },
    { 
      name: 'Instagram', 
      icon: <InstagramIcon />, 
      href: 'https://instagram.com/recoveryoffice',
      label: 'Visit Recovery Office Instagram page'
    }
  ];
  
  // Icon size based on Fibonacci sequence
  const iconSize = getFibonacciByIndex(5); // 5px
  
  return (
    <SocialWrapper className={className} alignItems="center">
      {socialLinks.map((social, index) => (
        <SocialButton
          key={index}
          as="a"
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          variant="ghost"
          icon={social.icon}
          title={social.name}
        />
      ))}
    </SocialWrapper>
  );
};

export default FooterSocial; 









