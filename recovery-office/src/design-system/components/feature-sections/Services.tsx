/**
 * Services Component
 * 
 * A feature section for displaying services in a grid layout using Fibonacci-based spacing
 * and sacred geometry proportions. The component supports various display options and
 * integrates botanical elements for visual harmony.
 */

import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { getFibonacciByIndex } from '../utils';
import { PHI, PHI_INVERSE, FIBONACCI } from '../../../constants/sacred-geometry';
import { Box } from '../layout/Box';
import { Grid } from '../layout/Grid';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
import { Button } from '../button/Button';
import { Section, SectionTitle } from '../layout/Section';
import { Card } from '../data-display/Card';
import { BotanicalElement, BotanicalPosition } from '../botanical';
import { FadeIn, ScaleFade } from '../animation';

export interface ServiceItem {
  /** Unique identifier for the service */
  id: string;
  
  /** Title of the service */
  title: string;
  
  /** Description of the service */
  description: string;
  
  /** Optional icon or image for the service */
  icon?: React.ReactNode;
  
  /** URL for the service detail page */
  url?: string;
  
  /** Optional additional content */
  content?: React.ReactNode;
  
  /** Optional accent color for the service card */
  accentColor?: string;
  
  /** Optional botanical decoration type */
  botanicalAccent?: 'oliveBranch' | 'flowerOfLife' | 'vesicaPiscis' | 'oliveLeaf' | 'none';
}

export interface ServicesProps {
  /** Section title */
  title: string;
  
  /** Optional section subtitle */
  subtitle?: string;
  
  /** Array of service items to display */
  services: ServiceItem[];
  
  /** Style of service display */
  displayStyle?: 'grid' | 'featured' | 'alternating';
  
  /** Number of columns in grid layout (defaults to Fibonacci-based responsive grid) */
  columns?: 1 | 2 | 3 | 4;
  
  /** Background color or gradient */
  backgroundColor?: string;
  
  /** Whether to add animation to service items */
  animated?: boolean;
  
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
  
  /** Call-to-action button for the services section */
  cta?: {
    /** Button text */
    label: string;
    
    /** Button URL */
    url: string;
    
    /** Button variant */
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  };
  
  /** Optional additional class name */
  className?: string;
  
  /** Optional inline styles */
  style?: React.CSSProperties;
}

const ServicesSection = styled(Section)<{ $backgroundColor?: string }>`
  position: relative;
  background: ${props => props.$backgroundColor || 'transparent'};
  padding: ${getFibonacciByIndex(8)}px 0;
  overflow: hidden;
`;

const ServiceGrid = styled(Grid)<{ $columns: number }>`
  /* 
   * Using Fibonacci-based spacing between grid items
   * and ensuring the grid follows sacred geometry proportions
   */
  gap: ${getFibonacciByIndex(6)}px;
  margin-top: ${getFibonacciByIndex(7)}px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    gap: ${getFibonacciByIndex(5)}px;
  }
`;

const ServiceCard = styled(Card)<{ $accentColor?: string }>`
  height: 100%;
  transition: transform 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  border-top: ${props => props.$accentColor ? `3px solid ${props.$accentColor}` : 'none'};
  
  /* Card dimensions follow golden ratio */
  padding: ${getFibonacciByIndex(6)}px;
  
  &:hover {
    transform: translateY(-${getFibonacciByIndex(3)}px);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${getFibonacciByIndex(5)}px;
  
  /* Icon container uses golden ratio dimensions */
  width: ${getFibonacciByIndex(7)}px;
  height: ${getFibonacciByIndex(7)}px;
`;

const ServiceTitle = styled(Heading)`
  margin-bottom: ${getFibonacciByIndex(4)}px;
  
  /* Apply sacred geometry to line height */
  line-height: ${PHI};
`;

const ServiceDescription = styled(Text)`
  /* Apply golden ratio to opacity for visual harmony */
  opacity: ${PHI_INVERSE + 0.2};
  margin-bottom: ${getFibonacciByIndex(5)}px;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${getFibonacciByIndex(7)}px;
`;

/**
 * Services component for displaying service offerings in various layouts,
 * following sacred geometry principles for spacing and proportions.
 */
const Services: React.FC<ServicesProps> = ({
  title,
  subtitle,
  services,
  displayStyle = 'grid',
  columns = 3,
  backgroundColor,
  animated = true,
  botanical,
  cta,
  className,
  style,
}) => {
  // Calculate optimal grid columns using Fibonacci sequence
  const getGridColumns = (): number => {
    // Default to specified columns
    if (columns) return columns;
    
    // If not specified, calculate based on number of services
    if (services.length <= 2) return services.length;
    if (services.length <= 4) return 2;
    return 3; // Default to 3 columns for larger sets
  };
  
  // Function to render a service item
  const renderServiceItem = (service: ServiceItem, index: number) => {
    const content = (
      <ServiceCard $accentColor={service.accentColor}>
        {service.icon && (
          <IconContainer>
            {service.icon}
          </IconContainer>
        )}
        
        <ServiceTitle variant="h4">{service.title}</ServiceTitle>
        <ServiceDescription variant="body1">{service.description}</ServiceDescription>
        
        {service.content}
        
        {service.url && (
          <Box mt={getFibonacciByIndex(4)}>
            <Button 
              variant="ghost" 
              href={service.url}
              rightIcon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3L14 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              Learn more
            </Button>
          </Box>
        )}
        
        {service.botanicalAccent && service.botanicalAccent !== 'none' && (
          <Box position="absolute" bottom={getFibonacciByIndex(3)} right={getFibonacciByIndex(3)} opacity={0.1}>
            <BotanicalElement 
              type={service.botanicalAccent} 
              size="sm" 
            />
          </Box>
        )}
      </ServiceCard>
    );
    
    // Wrap with animation if enabled
    if (animated) {
      return (
        <ScaleFade key={service.id} delay={0.1 * index}>
          {content}
        </ScaleFade>
      );
    }
    
    return <div key={service.id}>{content}</div>;
  };
  
  // Render services in a grid layout
  const renderGrid = () => {
    return (
      <ServiceGrid $columns={getGridColumns()}>
        {services.map((service, index) => renderServiceItem(service, index))}
      </ServiceGrid>
    );
  };
  
  // Render services in a featured layout
  const renderFeatured = () => {
    return (
      <Box display="flex" flexDirection="column" gap={getFibonacciByIndex(7)}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <Box 
              key={service.id}
              display="flex" 
              flexDirection={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }} 
              gap={getFibonacciByIndex(6)}
            >
              <Box flex={PHI_INVERSE}>
                {renderServiceItem(service, index)}
              </Box>
              <Box flex={1 - PHI_INVERSE} display="flex" alignItems="center" justifyContent="center">
                {service.icon && <div style={{ width: '100%', height: '100%', maxHeight: '300px' }}>{service.icon}</div>}
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };
  
  // Render services in an alternating layout
  const renderAlternating = () => {
    return (
      <Box display="flex" flexDirection="column" gap={getFibonacciByIndex(7)}>
        {services.map((service, index) => (
          <Box 
            key={service.id}
            borderLeft={service.accentColor ? `3px solid ${service.accentColor}` : undefined}
            pl={service.accentColor ? getFibonacciByIndex(5) : 0}
            py={getFibonacciByIndex(4)}
          >
            {renderServiceItem(service, index)}
          </Box>
        ))}
      </Box>
    );
  };
  
  // Render services based on display style
  const renderServices = () => {
    switch (displayStyle) {
      case 'featured':
        return renderFeatured();
      case 'alternating':
        return renderAlternating();
      case 'grid':
      default:
        return renderGrid();
    }
  };
  
  return (
    <ServicesSection
      $backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {botanical && (
        <BotanicalElement
          type={botanical.type}
          position={botanical.position}
          size={botanical.size}
          opacity={botanical.opacity}
        />
      )}
      
      <SectionTitle title={title} subtitle={subtitle} centered animated={animated} />
      
      {renderServices()}
      
      {cta && (
        <CTAContainer>
          <Button variant={cta.variant || 'primary'} href={cta.url}>
            {cta.label}
          </Button>
        </CTAContainer>
      )}
    </ServicesSection>
  );
};

export default Services; 







