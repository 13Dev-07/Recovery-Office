/**
 * Footer Component
 * 
 * Main footer component that implements sacred geometry principles.
 * Contains navigation links, newsletter signup, and social media links.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@design-system/components/layout/Box';
import { Container } from '@design-system/components/layout/Container';
import { Flex } from '@design-system/components/layout/Flex';
import { Grid } from '@design-system/components/layout/Grid';
import { Text } from '@design-system/components/typography/Text';
import { Heading } from '@design-system/components/typography/Heading';
import { Divider } from '@design-system/components/layout/Divider';
import { PHI, SACRED_SPACING } from '@constants/sacred-geometry';
import { VesicaPiscis } from '@design-system/botanical/VesicaPiscis';
import { colors } from '@design-system/tokens/colors';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterSocial } from './FooterSocial';
import { OliveBranch } from '@design-system/botanical/OliveBranch';

const FooterWrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary[900]};
  color: ${props => props.theme.colors.text.inverse};
  padding: ${SACRED_SPACING.xxl}px 0 ${SACRED_SPACING.xl}px;
`;

const BotanicalWrapper = styled(Box)`
  position: absolute;
  top: -${SACRED_SPACING.xl}px;
  right: ${SACRED_SPACING.xl}px;
  opacity: 0.1;
  transform: rotate(${180 / PHI}deg);
  z-index: 0;
`;

const FooterContent = styled(Container)`
  position: relative;
  z-index: 1;
`;

const BottomBar = styled(Flex)`
  margin-top: ${SACRED_SPACING.xl}px;
  padding-top: ${SACRED_SPACING.md}px;
  border-top: 1px solid ${props => props.theme.colors.primary[700]};
`;

const Logo = styled(Heading)`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${SACRED_SPACING.md}px;
`;

interface FooterProps {
  /**
   * Additional CSS class for the footer
   */
  className?: string;
}

/**
 * Footer Component
 * 
 * Main footer component with several sections laid out according to sacred geometry.
 * Includes company info, navigation links, newsletter signup and social media links.
 */
export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper className={className}>
      <BotanicalWrapper>
        <OliveBranch width={350} color={colors.primary[500]} />
      </BotanicalWrapper>
      
      <FooterContent>
        <Grid 
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: `${PHI - 1}fr ${2 - PHI}fr 1fr` // Golden ratio grid
          }}
          gap={{
            base: SACRED_SPACING.lg,
            md: SACRED_SPACING.xl
          }}
        >
          {/* Company Information */}
          <Box>
            <Logo as="h3">Recovery Office</Logo>
            <Text color="text.inverse" mb={SACRED_SPACING.md}>
              Professional financial recovery consultancy specialized in helping individuals 
              and businesses reclaim lost assets.
            </Text>
            <Text color="text.inverse" opacity={0.8}>
              Registered with the Financial Conduct Authority
            </Text>
            <Box mt={SACRED_SPACING.md}>
              <VesicaPiscis width={34} color={colors.primary[500]} opacity={0.6} />
            </Box>
          </Box>
          
          {/* Navigation Links */}
          <FooterLinks />
          
          {/* Newsletter Signup */}
          <FooterNewsletter />
        </Grid>
        
        <Divider my={SACRED_SPACING.xl} opacity={0.2} />
        
        {/* Social Media and Copyright */}
        <BottomBar 
          justifyContent="space-between" 
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          gap={SACRED_SPACING.md}
        >
          <Text color="text.inverse" opacity={0.7}>
            &copy; {currentYear} Recovery Office. All rights reserved.
          </Text>
          
          <FooterSocial />
        </BottomBar>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; 














