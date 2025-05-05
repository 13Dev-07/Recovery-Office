"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var Box_1 = require("../design-system/components/layout/Box");
var Heading_1 = require("../design-system/components/typography/Heading");
var Text_1 = require("../design-system/components/typography/Text");
/**
 * Example component demonstrating the Team component with various
 * configurations and layouts, all following sacred geometry principles.
 */
var TeamExample = function () {
    // Sample team member data
    var teamMembers = [
        {
            id: 'member-1',
            name: 'Dr. Alexandra Reynolds',
            role: 'Lead Therapist & Founder',
            photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Dr. Reynolds has over 15 years of experience integrating sacred geometry principles into therapeutic practices. She founded the Recovery Office to create harmony between ancient wisdom and modern healing.',
            specialties: ['Holistic Therapy', 'Sacred Geometry', 'Trauma Recovery'],
            links: [
                { type: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
                { type: 'email', url: 'mailto:alexandra@recoveryoffice.com', label: 'Email Dr. Reynolds' }
            ],
            accentColor: '#4a6eb3',
            credentials: ['Ph.D. Psychology', 'Certified Holistic Practitioner']
        },
        {
            id: 'member-2',
            name: 'Michael Chang',
            role: 'Recovery Specialist',
            photoUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Specializing in addiction recovery through natural harmony principles, Michael brings a unique approach that combines Eastern philosophy with Western therapeutic techniques.',
            specialties: ['Addiction Recovery', 'Mindfulness', 'Group Therapy'],
            links: [
                { type: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
                { type: 'website', url: 'https://example.com', label: 'Personal Website' }
            ],
            accentColor: '#2a7d6f'
        },
        {
            id: 'member-3',
            name: 'Sarah Johnson',
            role: 'Wellness Coordinator',
            photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Sarah coordinates our holistic wellness programs, ensuring that sacred geometry principles are integrated into every aspect of the client experience from environment to treatment.',
            specialties: ['Program Development', 'Client Relations', 'Environmental Harmony'],
            links: [
                { type: 'twitter', url: 'https://twitter.com', label: 'Twitter Profile' },
                { type: 'email', url: 'mailto:sarah@recoveryoffice.com', label: 'Email Sarah' }
            ],
            accentColor: '#8a4d9e'
        },
        {
            id: 'member-4',
            name: 'Dr. James Wilson',
            role: 'Research Director',
            photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Dr. Wilson leads our research initiatives, studying the effects of sacred geometry and natural harmony on recovery outcomes and developing new therapeutic approaches.',
            specialties: ['Clinical Research', 'Therapeutic Innovation', 'Evidence-Based Practice'],
            links: [
                { type: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
                { type: 'website', url: 'https://example.com', label: 'Research Page' }
            ],
            accentColor: '#b25a45'
        },
        {
            id: 'member-5',
            name: 'Emma Rodriguez',
            role: 'Art Therapist',
            photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Emma specializes in using sacred geometry in art therapy, helping clients express themselves through creative processes aligned with natural patterns and proportions.',
            specialties: ['Art Therapy', 'Creative Expression', 'Visual Healing'],
            links: [
                { type: 'instagram', url: 'https://instagram.com', label: 'Instagram Profile' },
                { type: 'email', url: 'mailto:emma@recoveryoffice.com', label: 'Email Emma' }
            ],
            accentColor: '#4a6eb3'
        },
        {
            id: 'member-6',
            name: 'Daniel Park',
            role: 'Meditation Instructor',
            photoUrl: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            bio: 'Daniel teaches meditation techniques based on sacred geometry principles, helping clients find inner balance and harmony through mindfulness practices.',
            specialties: ['Meditation', 'Breathwork', 'Stress Reduction'],
            links: [
                { type: 'website', url: 'https://example.com', label: 'Meditation Resources' },
                { type: 'twitter', url: 'https://twitter.com', label: 'Twitter Profile' }
            ],
            accentColor: '#2a7d6f'
        }
    ];
    return (<Box_1.Box>
      <Heading_1.Heading variant="h2" textAlign="center" mb={6}>
        Team Component Examples
      </Heading_1.Heading>
      <Text_1.Text variant="body1" textAlign="center" mb={8} maxWidth="800px" mx="auto">
        These examples demonstrate the various layouts and configurations of the Team component,
        all designed with sacred geometry principles for harmonious proportions and spacing.
      </Text_1.Text>

      {/* Example 1: Grid Layout */}
      <Box_1.Box mb={10}>
        <feature_sections_1.Team title="Our Therapeutic Team" subtitle="Meet the professionals dedicated to your holistic recovery journey" members={teamMembers} displayStyle="grid" columns={3} showDetailedBio={false} animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'topRight',
            opacity: 0.05,
            size: 'xl'
        }} cta={{
            label: 'Join Our Team',
            url: '/careers',
            variant: 'primary'
        }}/>
      </Box_1.Box>

      {/* Example 2: List Layout */}
      <Box_1.Box mb={10} backgroundColor="#f8f9fa" py={8}>
        <feature_sections_1.Team title="Lead Practitioners" subtitle="Our specialists combine ancient wisdom with modern therapeutic techniques" members={teamMembers.slice(0, 3)} // First three team members
     displayStyle="list" showDetailedBio={true} backgroundColor="transparent" animated={true} botanical={{
            type: 'oliveBranch',
            position: 'bottomLeft',
            opacity: 0.07,
            size: 'lg'
        }} cta={{
            label: 'Schedule a Consultation',
            url: '/booking',
            variant: 'secondary'
        }}/>
      </Box_1.Box>

      {/* Example 3: Featured Layout */}
      <Box_1.Box mb={10}>
        <feature_sections_1.Team title="Leadership Team" subtitle="Guiding our practice with expertise and vision" members={teamMembers.slice(0, 3)} // First three team members for featured layout
     displayStyle="featured" showDetailedBio={true} animated={true} botanical={{
            type: 'vesicaPiscis',
            position: 'bottomRight',
            opacity: 0.06,
            size: 'lg'
        }} cta={{
            label: 'Learn About Our Approach',
            url: '/about',
            variant: 'outline'
        }}/>
      </Box_1.Box>
    </Box_1.Box>);
};
exports.default = TeamExample;
