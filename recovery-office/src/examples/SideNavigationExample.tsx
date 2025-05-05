import * as React from 'react';
import styled from 'styled-components';

// Import components
import { SideNavigation } from '../design-system/components/navigation';
import { Section, SectionTitle, SectionContent } from '../design-system/components/layout/Section';

// Import sacred geometry constants
import { PHI, PHI_INVERSE, FIBONACCI } from '../constants/sacred-geometry';

/**
 * SideNavigationExample Component
 * 
 * This component demonstrates the SideNavigation component in various configurations,
 * showcasing its flexibility and adherence to sacred geometry principles.
 */
const SideNavigationExample: React.FC = () => {
  // Sample navigation items
  const mainNavItems = [
    {
      label: 'Home',
      path: '/',
      isActive: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Services',
      path: '/services',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      subItems: [
        {
          label: 'Recovery Consultation',
          path: '/services/recovery-consultation'
        },
        {
          label: 'Therapeutic Sessions',
          path: '/services/therapeutic-sessions'
        },
        {
          label: 'Botanical Therapy',
          path: '/services/botanical-therapy'
        }
      ]
    },
    {
      label: 'About Us',
      path: '/about',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Testimonials',
      path: '/testimonials',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3a2 2 0 012 2v4a2 2 0 01-2 2h-2l-3 3v-3H8a2 2 0 01-2-2V5a2 2 0 012-2h9zM8 17h2v3l3-3h4a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Options for different SideNavigation variants
  const variants = ['light', 'primary', 'secondary', 'dark', 'transparent'] as const;
  const botanicalTypes = ['oliveBranch', 'flowerOfLife', 'vesicaPiscis', 'fibonacciSpiral', 'oliveLeaf'] as const;

  return (
    <Section variant="light" fullWidth>
      <SectionTitle 
        title="SideNavigation Component" 
        subtitle="A showcase of different SideNavigation configurations with sacred geometry proportions"
        align="center"
        size="large"
      />
      
      <SectionContent>
        <ExamplesGrid>
          {/* Basic SideNavigation */}
          <ExampleCard>
            <ExampleTitle>Basic SideNavigation</ExampleTitle>
            <SideNavigation 
              items={mainNavItems.slice(0, 4)} 
              title="Main Navigation"
            />
            <Description>
              Default configuration with title and botanical decoration.
            </Description>
          </ExampleCard>
          
          {/* With Dividers */}
          <ExampleCard>
            <ExampleTitle>With Dividers</ExampleTitle>
            <SideNavigation 
              items={mainNavItems.slice(0, 4)} 
              title="Main Navigation"
              withDividers
            />
            <Description>
              SideNavigation with dividers between items for better visual separation.
            </Description>
          </ExampleCard>
          
          {/* Compact Style */}
          <ExampleCard>
            <ExampleTitle>Compact Style</ExampleTitle>
            <SideNavigation 
              items={mainNavItems} 
              title="Main Navigation"
              compact
            />
            <Description>
              Compact variant with reduced spacing, suitable for dense UIs.
            </Description>
          </ExampleCard>
          
          {/* Collapsible Navigation */}
          <ExampleCard>
            <ExampleTitle>Collapsible Navigation</ExampleTitle>
            <SideNavigation 
              items={mainNavItems} 
              title="Collapsible Nav"
              collapsible
              initiallyCollapsed={false}
            />
            <Description>
              Collapsible navigation with toggle button. Try clicking the + icon.
            </Description>
          </ExampleCard>
          
          {/* Without Animation */}
          <ExampleCard>
            <ExampleTitle>Without Animation</ExampleTitle>
            <SideNavigation 
              items={mainNavItems.slice(0, 4)} 
              title="Static Navigation"
              animated={false}
            />
            <Description>
              Static navigation without animation effects.
            </Description>
          </ExampleCard>
          
          {/* Without Botanical */}
          <ExampleCard>
            <ExampleTitle>Without Botanical</ExampleTitle>
            <SideNavigation 
              items={mainNavItems.slice(0, 4)} 
              title="Clean Navigation"
              withBotanical={false}
            />
            <Description>
              Clean navigation without botanical decorations.
            </Description>
          </ExampleCard>
          
          {/* Different Variants */}
          <ExampleCard>
            <ExampleTitle>Color Variants</ExampleTitle>
            <VariantsContainer>
              {variants.map((variant) => (
                <VariantItem key={variant}>
                  <VariantLabel>{variant}</VariantLabel>
                  <SideNavigation 
                    items={mainNavItems.slice(0, 2)} 
                    variant={variant}
                    compact
                  />
                </VariantItem>
              ))}
            </VariantsContainer>
            <Description>
              Different color variants to match various design requirements.
            </Description>
          </ExampleCard>
          
          {/* Different Botanical Types */}
          <ExampleCard>
            <ExampleTitle>Botanical Types</ExampleTitle>
            <VariantsContainer>
              {botanicalTypes.map((type) => (
                <VariantItem key={type}>
                  <VariantLabel>{type}</VariantLabel>
                  <SideNavigation 
                    items={mainNavItems.slice(0, 2)} 
                    botanicalType={type}
                    compact
                  />
                </VariantItem>
              ))}
            </VariantsContainer>
            <Description>
              Various botanical decoration types for different aesthetic feels.
            </Description>
          </ExampleCard>
        </ExamplesGrid>
      </SectionContent>
    </Section>
  );
};

// Styled components
const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${getFibonacciByIndex(8)}px; // 21px
  padding: ${getFibonacciByIndex(7)}px 0; // 13px
`;

const ExampleCard = styled.div`
  background-color: ${props => props.theme.colors.background.light};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  box-shadow: ${props => props.theme.shadows.sm};
  padding: ${getFibonacciByIndex(7)}px; // 13px
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(6)}px; // 8px
`;

const ExampleTitle = styled.h3`
  font-size: ${getFibonacciByIndex(7)}px; // 13px
  margin: 0 0 ${getFibonacciByIndex(5)}px 0; // 5px
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const Description = styled.p`
  font-size: ${getFibonacciByIndex(6)}px; // 8px
  color: ${props => props.theme.colors.text.secondary};
  margin: ${getFibonacciByIndex(5)}px 0 0 0; // 5px top margin
  line-height: 1.5;
`;

const VariantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(7)}px; // 13px
`;

const VariantItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

const VariantLabel = styled.span`
  font-size: ${getFibonacciByIndex(6)}px; // 8px
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 500;
`;

export default SideNavigationExample; 







