/**
 * Navigation Components Showcase
 * 
 * This example demonstrates all the navigation components in the Recovery Office
 * design system. Each component is shown with its key features and properties.
 */

import * as React from 'react';
import { Box, Flex, Stack } from '../design-system/components/layout';
import { Typography, Heading } from '../design-system/components/typography';
import { Button } from '../design-system/components/button';
import {
  NavBar,
  Breadcrumbs,
  Link,
  StickyNavigation,
  SideNavigation,
  useAutoBreadcrumbs
} from '../design-system/components/navigation';
import { FlowerOfLife } from '../design-system/components/botanical';

/**
 * Example Logo Component
 */
const Logo: React.FC = () => (
  <Box padding="sm">
    <Typography variant="logo" as="span">
      Recovery Office
    </Typography>
  </Box>
);

/**
 * Example Navigation Items
 */
const navigationItems = [
  { label: 'Home', path: '/', isActive: true },
  { label: 'Services', path: '/services', subItems: [
    { label: 'Recovery Consultation', path: '/services/consultation' },
    { label: 'Asset Recovery', path: '/services/asset-recovery' },
    { label: 'Legal Support', path: '/services/legal-support' }
  ] },
  { label: 'About Us', path: '/about' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' }
];

/**
 * Example side navigation items with icons
 */
const sideNavItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
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
      { label: 'Recovery Consultation', path: '/services/consultation' },
      { label: 'Asset Recovery', path: '/services/asset-recovery' },
      { label: 'Legal Support', path: '/services/legal-support' }
    ]
  },
  {
    label: 'Account',
    path: '/account',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label: 'Reports',
    path: '/reports',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

/**
 * Example CTAs
 */
const ctaItems = [
  { label: 'Login', path: '/login' },
  { label: 'Book Consultation', path: '/book', isPrimary: true }
];

/**
 * Example Regulatory Badges
 */
const RegulatoryBadges: React.FC = () => (
  <Flex align="center" gap="sm">
    <Box padding="xs" background="white" borderRadius="sm">
      <Typography variant="caption">FCA Regulated</Typography>
    </Box>
    <Box padding="xs" background="white" borderRadius="sm">
      <Typography variant="caption">BaFin Authorized</Typography>
    </Box>
  </Flex>
);

/**
 * Example breadcrumb items
 */
const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Recovery Consultation', path: '/services/consultation', isActive: true }
];

/**
 * Navigation Components Showcase
 */
const NavigationComponentsShowcase: React.FC = () => {
  return (
    <Box width="100%">
      {/* Showcase Header */}
      <Box 
        backgroundColor="background.secondary" 
        padding="lg" 
        marginBottom="xl"
      >
        <Heading level={1} textAlign="center">Navigation Components</Heading>
        <Typography textAlign="center">
          All navigation components follow sacred geometry principles.
        </Typography>
      </Box>
      
      {/* Link Component */}
      <Box marginBottom="xl" padding="lg">
        <Heading level={2} marginBottom="md">Link Component</Heading>
        <Typography marginBottom="sm">
          The Link component provides various styling options for navigation links.
        </Typography>
        
        <Stack direction="row" spacing="md" align="center" wrap>
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="accent">Accent Link</Link>
          <Link href="#" variant="primary" isActive>Active Link</Link>
          <Link href="#" variant="navigation" isNavLink>Navigation Link</Link>
          <Link href="#" variant="footer">Footer Link</Link>
          <Link href="#" variant="primary" underline="always">Underlined Link</Link>
        </Stack>
      </Box>
      
      {/* Breadcrumbs Component */}
      <Box marginBottom="xl" padding="lg" backgroundColor="background.light">
        <Heading level={2} marginBottom="md">Breadcrumbs Component</Heading>
        <Typography marginBottom="sm">
          The Breadcrumbs component shows the user's current location within the site hierarchy.
        </Typography>
        
        <Stack spacing="lg">
          <Box marginBottom="md">
            <Typography variant="subtitle" marginBottom="xs">Standard Breadcrumbs:</Typography>
            <Breadcrumbs items={breadcrumbItems} />
          </Box>
          
          <Box marginBottom="md">
            <Typography variant="subtitle" marginBottom="xs">With Botanical Separators:</Typography>
            <Breadcrumbs items={breadcrumbItems} botanicalSeparator />
          </Box>
          
          <Box marginBottom="md">
            <Typography variant="subtitle" marginBottom="xs">Without Home Icon:</Typography>
            <Breadcrumbs items={breadcrumbItems} showHomeIcon={false} />
          </Box>
        </Stack>
      </Box>
      
      {/* NavBar Component */}
      <Box marginBottom="xl">
        <Heading level={2} marginBottom="md" padding="lg">NavBar Component</Heading>
        <Typography marginBottom="sm" padding="lg">
          The NavBar component provides primary navigation for the website.
        </Typography>
        
        <Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <NavBar 
            items={navigationItems} 
            logo={<Logo />}
            ctas={ctaItems}
            isDesktop
          />
        </Box>
        
        <Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <NavBar 
            items={navigationItems} 
            logo={<Logo />}
            ctas={ctaItems}
            showBotanical
            isDesktop
          />
        </Box>
        
        <Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <NavBar 
            items={navigationItems} 
            logo={<Logo />}
            ctas={ctaItems}
            showRegulatoryBadges
            regulatoryBadges={<RegulatoryBadges />}
            isDesktop
          />
        </Box>
      </Box>
      
      {/* StickyNavigation Component */}
      <Box marginBottom="xl" padding="lg">
        <Heading level={2} marginBottom="md">StickyNavigation Component</Heading>
        <Typography marginBottom="sm">
          The StickyNavigation component adds scroll-based behavior to the NavBar.
          (Scroll behavior can be seen when this component is used in actual pages)
        </Typography>
        
        <Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <StickyNavigation
            items={navigationItems}
            logo={<Logo />}
            ctas={ctaItems}
            startTransparent={false}
            showScrollProgress
            scrollIndicatorShape="fibonacci"
            scrollIndicatorVariant="primary"
          />
        </Box>
        
        <Box height="100px" />
        
        <Typography>
          Note: To see the full functionality of the StickyNavigation component, it needs to be used
          in a scrollable page environment.
        </Typography>
      </Box>
      
      {/* SideNavigation Component */}
      <Box marginBottom="xl" padding="lg" backgroundColor="background.light">
        <Heading level={2} marginBottom="md">SideNavigation Component</Heading>
        <Typography marginBottom="sm">
          The SideNavigation component provides vertical navigation options with sacred geometry principles.
        </Typography>
        
        <Flex direction="row" gap="xl" wrap="wrap">
          <Box width="250px">
            <Typography variant="subtitle" marginBottom="xs">Basic SideNavigation:</Typography>
            <SideNavigation 
              items={sideNavItems} 
              title="Account Menu"
            />
          </Box>
          
          <Box width="250px">
            <Typography variant="subtitle" marginBottom="xs">With Dividers:</Typography>
            <SideNavigation 
              items={sideNavItems} 
              title="Account Menu"
              withDividers
            />
          </Box>
          
          <Box width="250px">
            <Typography variant="subtitle" marginBottom="xs">Collapsible:</Typography>
            <SideNavigation 
              items={sideNavItems} 
              title="Account Menu"
              collapsible
              initiallyCollapsed={false}
            />
          </Box>
          
          <Box width="250px">
            <Typography variant="subtitle" marginBottom="xs">Dark Variant:</Typography>
            <SideNavigation 
              items={sideNavItems} 
              title="Account Menu"
              variant="dark"
            />
          </Box>
        </Flex>
        
        <Box marginTop="lg">
          <Typography>
            For more detailed examples of the SideNavigation component, see the dedicated 
            <Link href="#" variant="primary" style={{ marginLeft: '5px' }}>SideNavigation example page</Link>.
          </Typography>
        </Box>
      </Box>
      
      {/* Usage examples */}
      <Box marginBottom="xl" padding="lg" backgroundColor="background.secondary">
        <Heading level={2} marginBottom="md">Usage Examples</Heading>
        
        <Box backgroundColor="background.light" padding="lg" borderRadius="md" marginBottom="lg">
          <Typography variant="code" as="pre" overflow="auto" maxWidth="100%">
{`// Basic NavBar usage
import { NavBar } from 'src/design-system/components/navigation';

<NavBar 
  items={navigationItems} 
  logo={<Logo />}
  ctas={[{ label: 'Contact Us', path: '/contact', isPrimary: true }]}
/>

// StickyNavigation with scroll indicator
import { StickyNavigation } from 'src/design-system/components/navigation';

<StickyNavigation
  items={navigationItems}
  logo={<Logo />}
  startTransparent={true}
  showScrollProgress={true}
  scrollIndicatorShape="fibonacci"
/>

// Side navigation with icons and collapsible behavior
import { SideNavigation } from 'src/design-system/components/navigation';

<SideNavigation
  items={sideNavItems}
  title="Dashboard Navigation"
  collapsible={true}
  withDividers={true}
  withBotanical={true}
/>

// Auto-generated breadcrumbs with hook
import { Breadcrumbs, useAutoBreadcrumbs } from 'src/design-system/components/navigation';

const breadcrumbItems = useAutoBreadcrumbs({
  '/': 'Home',
  '/services': 'Services',
  '/services/consultation': 'Recovery Consultation'
});

<Breadcrumbs 
  items={breadcrumbItems}
  showHomeIcon={true}
  botanicalSeparator={true}
/>`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationComponentsShowcase; 






