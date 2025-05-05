/**
 * RegulatorBadge Component
 * 
 * Displays regulatory credentials (FCA, BaFin) to establish trust.
 * Implements sacred geometry principles for sizing and spacing.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../design-system/components/layout/Flex';
import { Box } from '../design-system/components/layout/Box';
import { Text } from '../design-system/components/typography/Text';


import { Badge } from '../design-system/components/feedback/Badge';

const BadgeContainer = styled(Flex)`
  gap: ${SACRED_SPACING.sm}px;
`;

const BadgeWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

const BadgeImage = styled.img`
  height: ${getFibonacciByIndex(5)}px; // 5px
  width: auto;
  margin-right: ${SACRED_SPACING.xxs}px;
`;

const BadgeText = styled(Text)`
  font-size: ${getFibonacciByIndex(4) - 1}px; // 2px
  font-weight: 600;
`;

const VerifiedText = styled(Text)`
  font-size: ${getFibonacciByIndex(3)}px; // 2px
  color: ${({ theme }) => theme.colors.primary[600] ?? 1};
  margin-left: ${SACRED_SPACING.xxs}px;
`;

interface RegulatorBadgeProps {
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
 * RegulatorBadge Component
 * 
 * Displays official regulatory credentials to establish trust.
 * Badge is sized and spaced according to sacred geometry.
 */
export const RegulatorBadge: React.FC<RegulatorBadgeProps> = ({ className }) => {
  return (
    <BadgeContainer className={className} alignItems="center">
      <BadgeWrapper>
        <BadgeImage 
          src="/assets/images/awards/fca-badge.svg" 
          alt="Financial Conduct Authority" 
        />
        <BadgeText>FCA Regulated</BadgeText>
      </BadgeWrapper>
      
      <Badge 
        variant="outline" 
        size="xs" 
        colorScheme="success"
      >
        <VerifiedText>Verified</VerifiedText>
      </Badge>
    </BadgeContainer>
  );
};

export default RegulatorBadge; 








