"use strict";
/**
 * Navigation Components Showcase
 *
 * This example demonstrates all the navigation components in the Recovery Office
 * design system. Each component is shown with its key features and properties.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../design-system/components/layout");
var typography_1 = require("../design-system/components/typography");
var navigation_1 = require("../design-system/components/navigation");
/**
 * Example Logo Component
 */
var Logo = function () { return (<layout_1.Box padding="sm">
    <typography_1.Typography variant="logo" as="span">
      Recovery Office
    </typography_1.Typography>
  </layout_1.Box>); };
/**
 * Example Navigation Items
 */
var navigationItems = [
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
var sideNavItems = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        isActive: true,
        icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    },
    {
        label: 'Services',
        path: '/services',
        icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>),
        subItems: [
            { label: 'Recovery Consultation', path: '/services/consultation' },
            { label: 'Asset Recovery', path: '/services/asset-recovery' },
            { label: 'Legal Support', path: '/services/legal-support' }
        ]
    },
    {
        label: 'Account',
        path: '/account',
        icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    },
    {
        label: 'Reports',
        path: '/reports',
        icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    }
];
/**
 * Example CTAs
 */
var ctaItems = [
    { label: 'Login', path: '/login' },
    { label: 'Book Consultation', path: '/book', isPrimary: true }
];
/**
 * Example Regulatory Badges
 */
var RegulatoryBadges = function () { return (<layout_1.Flex align="center" gap="sm">
    <layout_1.Box padding="xs" background="white" borderRadius="sm">
      <typography_1.Typography variant="caption">FCA Regulated</typography_1.Typography>
    </layout_1.Box>
    <layout_1.Box padding="xs" background="white" borderRadius="sm">
      <typography_1.Typography variant="caption">BaFin Authorized</typography_1.Typography>
    </layout_1.Box>
  </layout_1.Flex>); };
/**
 * Example breadcrumb items
 */
var breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Recovery Consultation', path: '/services/consultation', isActive: true }
];
/**
 * Navigation Components Showcase
 */
var NavigationComponentsShowcase = function () {
    return (<layout_1.Box width="100%">
      {/* Showcase Header */}
      <layout_1.Box backgroundColor="background.secondary" padding="lg" marginBottom="xl">
        <typography_1.Heading level={1} textAlign="center">Navigation Components</typography_1.Heading>
        <typography_1.Typography textAlign="center">
          All navigation components follow sacred geometry principles.
        </typography_1.Typography>
      </layout_1.Box>
      
      {/* Link Component */}
      <layout_1.Box marginBottom="xl" padding="lg">
        <typography_1.Heading level={2} marginBottom="md">Link Component</typography_1.Heading>
        <typography_1.Typography marginBottom="sm">
          The Link component provides various styling options for navigation links.
        </typography_1.Typography>
        
        <layout_1.Stack direction="row" spacing="md" align="center" wrap>
          <navigation_1.Link href="#" variant="primary">Primary Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="secondary">Secondary Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="accent">Accent Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="primary" isActive>Active Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="navigation" isNavLink>Navigation Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="footer">Footer Link</navigation_1.Link>
          <navigation_1.Link href="#" variant="primary" underline="always">Underlined Link</navigation_1.Link>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* Breadcrumbs Component */}
      <layout_1.Box marginBottom="xl" padding="lg" backgroundColor="background.light">
        <typography_1.Heading level={2} marginBottom="md">Breadcrumbs Component</typography_1.Heading>
        <typography_1.Typography marginBottom="sm">
          The Breadcrumbs component shows the user's current location within the site hierarchy.
        </typography_1.Typography>
        
        <layout_1.Stack spacing="lg">
          <layout_1.Box marginBottom="md">
            <typography_1.Typography variant="subtitle" marginBottom="xs">Standard Breadcrumbs:</typography_1.Typography>
            <navigation_1.Breadcrumbs items={breadcrumbItems}/>
          </layout_1.Box>
          
          <layout_1.Box marginBottom="md">
            <typography_1.Typography variant="subtitle" marginBottom="xs">With Botanical Separators:</typography_1.Typography>
            <navigation_1.Breadcrumbs items={breadcrumbItems} botanicalSeparator/>
          </layout_1.Box>
          
          <layout_1.Box marginBottom="md">
            <typography_1.Typography variant="subtitle" marginBottom="xs">Without Home Icon:</typography_1.Typography>
            <navigation_1.Breadcrumbs items={breadcrumbItems} showHomeIcon={false}/>
          </layout_1.Box>
        </layout_1.Stack>
      </layout_1.Box>
      
      {/* NavBar Component */}
      <layout_1.Box marginBottom="xl">
        <typography_1.Heading level={2} marginBottom="md" padding="lg">NavBar Component</typography_1.Heading>
        <typography_1.Typography marginBottom="sm" padding="lg">
          The NavBar component provides primary navigation for the website.
        </typography_1.Typography>
        
        <layout_1.Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <navigation_1.NavBar items={navigationItems} logo={<Logo />} ctas={ctaItems} isDesktop/>
        </layout_1.Box>
        
        <layout_1.Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <navigation_1.NavBar items={navigationItems} logo={<Logo />} ctas={ctaItems} showBotanical isDesktop/>
        </layout_1.Box>
        
        <layout_1.Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <navigation_1.NavBar items={navigationItems} logo={<Logo />} ctas={ctaItems} showRegulatoryBadges regulatoryBadges={<RegulatoryBadges />} isDesktop/>
        </layout_1.Box>
      </layout_1.Box>
      
      {/* StickyNavigation Component */}
      <layout_1.Box marginBottom="xl" padding="lg">
        <typography_1.Heading level={2} marginBottom="md">StickyNavigation Component</typography_1.Heading>
        <typography_1.Typography marginBottom="sm">
          The StickyNavigation component adds scroll-based behavior to the NavBar.
          (Scroll behavior can be seen when this component is used in actual pages)
        </typography_1.Typography>
        
        <layout_1.Box marginBottom="lg" border="1px solid" borderColor="border.light">
          <navigation_1.StickyNavigation items={navigationItems} logo={<Logo />} ctas={ctaItems} startTransparent={false} showScrollProgress scrollIndicatorShape="fibonacci" scrollIndicatorVariant="primary"/>
        </layout_1.Box>
        
        <layout_1.Box height="100px"/>
        
        <typography_1.Typography>
          Note: To see the full functionality of the StickyNavigation component, it needs to be used
          in a scrollable page environment.
        </typography_1.Typography>
      </layout_1.Box>
      
      {/* SideNavigation Component */}
      <layout_1.Box marginBottom="xl" padding="lg" backgroundColor="background.light">
        <typography_1.Heading level={2} marginBottom="md">SideNavigation Component</typography_1.Heading>
        <typography_1.Typography marginBottom="sm">
          The SideNavigation component provides vertical navigation options with sacred geometry principles.
        </typography_1.Typography>
        
        <layout_1.Flex direction="row" gap="xl" wrap="wrap">
          <layout_1.Box width="250px">
            <typography_1.Typography variant="subtitle" marginBottom="xs">Basic SideNavigation:</typography_1.Typography>
            <navigation_1.SideNavigation items={sideNavItems} title="Account Menu"/>
          </layout_1.Box>
          
          <layout_1.Box width="250px">
            <typography_1.Typography variant="subtitle" marginBottom="xs">With Dividers:</typography_1.Typography>
            <navigation_1.SideNavigation items={sideNavItems} title="Account Menu" withDividers/>
          </layout_1.Box>
          
          <layout_1.Box width="250px">
            <typography_1.Typography variant="subtitle" marginBottom="xs">Collapsible:</typography_1.Typography>
            <navigation_1.SideNavigation items={sideNavItems} title="Account Menu" collapsible initiallyCollapsed={false}/>
          </layout_1.Box>
          
          <layout_1.Box width="250px">
            <typography_1.Typography variant="subtitle" marginBottom="xs">Dark Variant:</typography_1.Typography>
            <navigation_1.SideNavigation items={sideNavItems} title="Account Menu" variant="dark"/>
          </layout_1.Box>
        </layout_1.Flex>
        
        <layout_1.Box marginTop="lg">
          <typography_1.Typography>
            For more detailed examples of the SideNavigation component, see the dedicated 
            <navigation_1.Link href="#" variant="primary" style={{ marginLeft: '5px' }}>SideNavigation example page</navigation_1.Link>.
          </typography_1.Typography>
        </layout_1.Box>
      </layout_1.Box>
      
      {/* Usage examples */}
      <layout_1.Box marginBottom="xl" padding="lg" backgroundColor="background.secondary">
        <typography_1.Heading level={2} marginBottom="md">Usage Examples</typography_1.Heading>
        
        <layout_1.Box backgroundColor="background.light" padding="lg" borderRadius="md" marginBottom="lg">
          <typography_1.Typography variant="code" as="pre" overflow="auto" maxWidth="100%">
        {"// Basic NavBar usage\nimport { NavBar } from 'src/design-system/components/navigation';\n\n<NavBar \n  items={navigationItems} \n  logo={<Logo />}\n  ctas={[{ label: 'Contact Us', path: '/contact', isPrimary: true }]}\n/>\n\n// StickyNavigation with scroll indicator\nimport { StickyNavigation } from 'src/design-system/components/navigation';\n\n<StickyNavigation\n  items={navigationItems}\n  logo={<Logo />}\n  startTransparent={true}\n  showScrollProgress={true}\n  scrollIndicatorShape=\"fibonacci\"\n/>\n\n// Side navigation with icons and collapsible behavior\nimport { SideNavigation } from 'src/design-system/components/navigation';\n\n<SideNavigation\n  items={sideNavItems}\n  title=\"Dashboard Navigation\"\n  collapsible={true}\n  withDividers={true}\n  withBotanical={true}\n/>\n\n// Auto-generated breadcrumbs with hook\nimport { Breadcrumbs, useAutoBreadcrumbs } from 'src/design-system/components/navigation';\n\nconst breadcrumbItems = useAutoBreadcrumbs({\n  '/': 'Home',\n  '/services': 'Services',\n  '/services/consultation': 'Recovery Consultation'\n});\n\n<Breadcrumbs \n  items={breadcrumbItems}\n  showHomeIcon={true}\n  botanicalSeparator={true}\n/>"}
          </typography_1.Typography>
        </layout_1.Box>
      </layout_1.Box>
    </layout_1.Box>);
};
exports.default = NavigationComponentsShowcase;
