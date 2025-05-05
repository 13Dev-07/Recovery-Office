"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var Box_1 = require("../design-system/components/layout/Box");
var Heading_1 = require("../design-system/components/typography/Heading");
var Text_1 = require("../design-system/components/typography/Text");
/**
 * Example component demonstrating the Testimonials component with various
 * configurations and layouts, all following sacred geometry principles.
 */
var TestimonialsExample = function () {
    // Sample testimonial data
    var testimonials = [
        {
            id: 'testimonial-1',
            content: "Working with the Recovery Office transformed my approach to wellness. Their integration of sacred geometry principles in treatment helped me find balance in ways I never thought possible.",
            author: "Sarah Johnson",
            authorRole: "Wellness Coach",
            rating: 5,
            authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#4a6eb3"
        },
        {
            id: 'testimonial-2',
            content: "I was skeptical about holistic approaches until I experienced the Recovery Office's methods. The attention to natural proportions and harmony in their therapy spaces creates a truly healing environment.",
            author: "Michael Chen",
            authorRole: "Software Engineer",
            rating: 5,
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#2a7d6f"
        },
        {
            id: 'testimonial-3',
            content: "After struggling with conventional therapy for years, the Recovery Office's approach was like a breath of fresh air. The golden ratio principles they apply helped me find harmony within myself.",
            author: "Emily Rodriguez",
            authorRole: "Teacher",
            rating: 4,
            authorImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#8a4d9e"
        },
        {
            id: 'testimonial-4',
            content: "The botanical elements and natural proportions used in their therapy rooms create a sense of peace that's hard to describe. It's more than just treatment; it's true healing.",
            author: "James Wilson",
            authorRole: "Architect",
            rating: 5,
            authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#b25a45"
        },
        {
            id: 'testimonial-5',
            content: "Their holistic approach to recovery goes beyond traditional methods. By incorporating natural patterns and sacred geometry, they address the whole person, not just symptoms.",
            author: "Olivia Park",
            authorRole: "Nutritionist",
            rating: 5,
            authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#4a6eb3"
        },
        {
            id: 'testimonial-6',
            content: "I've never experienced a therapeutic environment so intentionally designed. Every aspect feels harmonious and conducive to healing and self-discovery.",
            author: "David Thompson",
            authorRole: "Physical Therapist",
            rating: 4,
            authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            accentColor: "#2a7d6f"
        }
    ];
    return (<Box_1.Box>
      <Heading_1.Heading variant="h2" textAlign="center" mb={6}>
        Testimonials Component Examples
      </Heading_1.Heading>
      <Text_1.Text variant="body1" textAlign="center" mb={8} maxWidth="800px" mx="auto">
        These examples demonstrate the various layouts and configurations of the Testimonials component,
        all designed with sacred geometry principles for harmonious proportions and spacing.
      </Text_1.Text>

      {/* Example 1: Grid Layout */}
      <Box_1.Box mb={10}>
        <feature_sections_1.Testimonials title="What Our Clients Say" subtitle="Experiences from those who have embraced our sacred geometry approach" testimonials={testimonials} displayStyle="grid" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'topRight',
            opacity: 0.05,
            size: 'xl'
        }} cta={{
            label: 'Read More Testimonials',
            url: '/testimonials',
            variant: 'primary'
        }}/>
      </Box_1.Box>

      {/* Example 2: Carousel Layout */}
      <Box_1.Box mb={10} backgroundColor="#f8f9fa" py={8}>
        <feature_sections_1.Testimonials title="Client Experiences" subtitle="Swipe through stories of transformation and healing" testimonials={testimonials} displayStyle="carousel" backgroundColor="transparent" animated={true} botanical={{
            type: 'vesicaPiscis',
            position: 'bottomLeft',
            opacity: 0.07,
            size: 'lg'
        }} cta={{
            label: 'Share Your Story',
            url: '/contact',
            variant: 'secondary'
        }}/>
      </Box_1.Box>

      {/* Example 3: Featured Layout */}
      <Box_1.Box mb={10}>
        <feature_sections_1.Testimonials title="Featured Testimonials" subtitle="Highlighted experiences from our recovery community" testimonials={testimonials.slice(0, 3)} // First three testimonials
     displayStyle="featured" animated={true} botanical={{
            type: 'oliveBranch',
            position: 'bottomRight',
            opacity: 0.08,
            size: 'md'
        }} cta={{
            label: 'Begin Your Journey',
            url: '/booking',
            variant: 'accent'
        }}/>
      </Box_1.Box>
    </Box_1.Box>);
};
exports.default = TestimonialsExample;
