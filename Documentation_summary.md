# Recovery Office Website Rebuild - Documentation Guide

## Overview

This document serves as a guide to all the documentation created to help rebuild the Recovery Office website. Each document covers specific aspects of the project architecture, design principles, and component implementation. These documents should be used together to ensure consistent implementation of the sacred geometry principles that define the Recovery Office design language.

## Documentation Files

### 1. PROJECT_OVERVIEW.md

**Purpose**: Provides a high-level overview of the Recovery Office project, its mission, brand identity, and key components.

**Key Sections**:
- Project description and core mission
- Brand identity and color palette
- Sacred geometry implementation principles
- Technical stack overview
- Project structure and key components
- TypeScript and code organization

**When to Use**: Start with this document to understand the overall project before diving into specific components.

### 2. SACRED_GEOMETRY_GUIDE.md

**Purpose**: Explains the mathematical principles of sacred geometry used throughout the project.

**Key Sections**:
- Core sacred geometry principles (Golden Ratio, Fibonacci Sequence)
- Code implementations of sacred geometry constants
- Sacred geometry in animation
- Sacred geometry in layout
- Utility functions for implementing sacred geometry

**When to Use**: Reference this document when implementing any component to ensure it follows the sacred geometry principles.

### 3. BOTANICAL_COMPONENTS_GUIDE.md

**Purpose**: Details the implementation of botanical components that serve as visual elements throughout the site.

**Key Sections**:
- Botanical component types (OliveBranch, FlowerOfLife, etc.)
- Component architecture and interfaces
- Animation integration
- Positioning and layout integration
- Performance and accessibility considerations

**When to Use**: Consult this guide when implementing or using botanical components in the design.

### 4. ANIMATION_COMPONENTS_GUIDE.md

**Purpose**: Provides guidance on implementing the animation system that brings motion to the website.

**Key Sections**:
- Animation philosophy and principles
- Core animation components
- Animation constants and timing
- Implementation examples for FadeIn and ScrollReveal
- Animation hooks and utilities
- Performance optimization strategies
- Accessibility considerations

**When to Use**: Reference when implementing any animations or transitions.

### 5. BOOKING_SYSTEM_GUIDE.md

**Purpose**: Details the implementation of the multi-step booking system.

**Key Sections**:
- Booking system architecture
- State management approach
- Step-based navigation
- Form validation with Zod
- Mobile considerations
- Accessibility features

**When to Use**: Follow this guide when implementing the consultation booking feature.

### 6. PROJECT_STRUCTURE_GUIDE.md

**Purpose**: Outlines the recommended project structure and file organization.

**Key Sections**:
- Root directory structure
- Key directories explained
- File naming conventions
- Component file structure
- Export patterns
- Styled Components pattern
- Import organization

**When to Use**: Reference this guide when setting up the project structure or adding new files.

### 7. AI_REBUILD_PROMPT.md

**Purpose**: Provides a comprehensive prompt for an AI agent to rebuild the website from scratch.

**Key Sections**:
- Project overview and technical requirements
- Development sequence
- Core sacred geometry implementation
- Botanical components
- Animation components
- Design principles to follow
- Component best practices

**When to Use**: Use this as the initial prompt for the AI agent to begin rebuilding the project.

## How to Use These Documents Together

1. **Start with PROJECT_OVERVIEW.md** to understand the overall project goals and structure
2. **Review SACRED_GEOMETRY_GUIDE.md** to understand the mathematical foundation of the design system
3. **Follow PROJECT_STRUCTURE_GUIDE.md** to set up the initial project structure
4. **Begin implementation in this sequence**:
   - Implement sacred geometry constants (refer to SACRED_GEOMETRY_GUIDE.md)
   - Build the design system foundation (tokens, theme)
   - Create botanical components (refer to BOTANICAL_COMPONENTS_GUIDE.md)
   - Implement animation components (refer to ANIMATION_COMPONENTS_GUIDE.md)
   - Build core UI components
   - Implement the booking system (refer to BOOKING_SYSTEM_GUIDE.md)
   - Create page layouts and connect everything together

5. **Use AI_REBUILD_PROMPT.md** as the initial instruction for the AI agent

## Key Principles to Remember

Throughout the rebuild process, keep these core principles in mind:

1. **Sacred Geometry First**: All design decisions should be guided by sacred geometry principles
2. **Type Safety**: Use TypeScript interfaces consistently
3. **Component Composition**: Build complex components from smaller, reusable pieces
4. **Accessibility**: Ensure all components are accessible
5. **Performance**: Optimize animations and React rendering
6. **Documentation**: Document how sacred geometry is applied in each component

By following these documents and principles, the AI agent should be able to successfully rebuild the Recovery Office website while maintaining its unique sacred geometry-based design language. 