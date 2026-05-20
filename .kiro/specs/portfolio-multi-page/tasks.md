# Implementation Plan: Portfolio Multi-Page Architecture

## Overview

Transform the portfolio from a single-page application into a multi-page Next.js application with dedicated routes for different sections. The implementation follows a modular approach, starting with the core structure and layout components, then building each page incrementally with integrated testing.

## Tasks

- [x] 1. Set up project structure and core configuration
  - Create directory structure for pages, components, and utilities
  - Set up TypeScript configuration and type definitions
  - Create core data models and interfaces (Project, Universe, TimelineEvent, ContactFormData)
  - Set up project data file (data/projects.json) with sample projects
  - Create constants file with navigation, universes, and contact information
  - _Requirements: 12.1, 12.2_

- [ ]* 1.1 Write unit tests for data models and utilities
  - Test project data structure validation
  - Test data filtering and sorting utilities
  - _Requirements: 12.1_

- [x] 2. Create root layout with header and footer
  - Build Header component with logo, navigation menu, language switcher, and theme toggle
  - Build Footer component with quick links, social media, email, and location
  - Create Navigation component with active page highlighting and mobile hamburger menu
  - Set up root layout.tsx with header and footer
  - Implement theme context for light/dark mode switching
  - Implement language context for FR/EN switching
  - _Requirements: 1.1, 11.1, 11.2_

- [x]* 2.1 Write unit tests for layout components
  - Test Header renders all required elements
  - Test Navigation highlights active page
  - Test Footer displays all required information
  - Test theme toggle switches between light and dark modes
  - Test language switcher updates content
  - _Requirements: 1.1, 11.1, 11.2, 11.3, 11.4_

- [x]* 2.2 Write property test for navigation active state consistency
  - **Property 1: Navigation Active State Consistency**
  - **Validates: Requirements 1.3**

- [x]* 2.3 Write property test for theme toggle persistence
  - **Property 9: Theme Toggle Persistence**
  - **Validates: Requirements 11.4**

- [x]* 2.4 Write property test for language switch consistency
  - **Property 10: Language Switch Consistency**
  - **Validates: Requirements 11.3**

- [x] 3. Create shared components for page transitions and UI elements
  - Build PageTransition component with fade/slide animations
  - Build Loader component for page loading states
  - Build Breadcrumb component for deep page navigation
  - Build AvailabilityBadge component
  - Set up page transition context and hooks
  - _Requirements: 8.1, 8.2, 8.4_

- [x]* 3.1 Write unit tests for shared components
  - Test PageTransition animation completes within 500ms
  - Test Loader displays during page transitions
  - Test Breadcrumb displays correct navigation path
  - _Requirements: 8.1, 8.2, 8.4_

- [x]* 3.2 Write property test for page transition completion
  - **Property 4: Page Transition Completion**
  - **Validates: Requirements 8.5**

- [x] 4. Build home page with hero, universes preview, featured projects, and CTA
  - Create HeroSection component with animated title, photo, and availability badge
  - Create UniversesPreview component with 3-4 clickable universe cards
  - Create FeaturedProjects component with 2-3 featured project cards
  - Create Testimonial component for social proof
  - Build home page (app/page.tsx) assembling all components
  - Set up SEO metadata for home page
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 10.1, 10.2_

- [x]* 4.1 Write unit tests for home page components
  - Test HeroSection renders with correct content
  - Test UniversesPreview displays 3-4 cards with correct links
  - Test FeaturedProjects displays 2-3 projects with correct links
  - Test Testimonial displays social proof
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x]* 4.2 Write property test for SEO metadata uniqueness
  - **Property 7: SEO Metadata Uniqueness**
  - **Validates: Requirements 10.1, 10.2**

- [x] 5. Build about page with bio, timeline, gallery, and values
  - Create BioSection component with detailed biography
  - Create Timeline component with expandable timeline items
  - Create Gallery component for professional photos
  - Create ValuesSection component for work philosophy
  - Build about page (app/a-propos/page.tsx) assembling all components
  - Set up SEO metadata for about page
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 10.1, 10.2_

- [x]* 5.1 Write unit tests for about page components
  - Test BioSection renders with correct content
  - Test Timeline displays items and expands on click
  - Test Gallery displays photos
  - Test ValuesSection displays philosophy
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 6. Build skills page with universe cards, technologies bento, and use cases
  - Create UniverseCard component with expandable content
  - Create TechnologiesBento component with varied-size grid
  - Create UseCasesSection component with "What I can build"
  - Build skills page (app/competences/page.tsx) assembling all components
  - Implement tooltip for technology proficiency on hover
  - Set up SEO metadata for skills page
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 10.1, 10.2_

- [x]* 6.1 Write unit tests for skills page components
  - Test UniverseCard displays and expands correctly
  - Test TechnologiesBento renders all technologies
  - Test UseCasesSection displays use cases
  - Test tooltip appears on technology hover
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 7. Build projects page with filtering and project grid
  - Create ProjectFilter component with category buttons
  - Create ProjectCard component with title, category, technologies, and result
  - Create ProjectGrid component with responsive layout
  - Build projects page (app/projets/page.tsx) with filtering logic
  - Implement pagination or infinite scroll for large project lists
  - Set up SEO metadata for projects page
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 10.1, 10.2_

- [x]* 7.1 Write unit tests for projects page components
  - Test ProjectFilter updates grid when category changes
  - Test ProjectCard displays all required information
  - Test ProjectGrid renders all projects
  - Test pagination/infinite scroll works correctly
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x]* 7.2 Write property test for project filter accuracy
  - **Property 2: Project Filter Accuracy**
  - **Validates: Requirements 5.3, 12.4**

- [x] 8. Build project detail page with dynamic routing
  - Create ProjectHero component with hero image and project info
  - Create ProjectContent component with context, solution, technologies, results
  - Create ProjectGallery component for screenshots
  - Create ProjectNavigation component for previous/next project links
  - Create ProjectCTA component for "similar project" call-to-action
  - Build project detail page (app/projets/[slug]/page.tsx) with dynamic routing
  - Implement generateStaticParams for static generation
  - Set up SEO metadata with structured data (Schema.org)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 10.1, 10.2, 10.4_

- [x]* 8.1 Write unit tests for project detail page components
  - Test ProjectHero displays correct project information
  - Test ProjectContent displays all sections
  - Test ProjectGallery displays images
  - Test ProjectNavigation links to correct projects
  - Test ProjectCTA displays call-to-action
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x]* 8.2 Write property test for project detail page slug resolution
  - **Property 3: Project Detail Page Slug Resolution**
  - **Validates: Requirements 6.1, 12.5**

- [x]* 8.3 Write property test for project navigation continuity
  - **Property 8: Project Navigation Continuity**
  - **Validates: Requirements 6.5**

- [x] 9. Build contact page with form, FAQ, and alternative contact methods
  - Create ContactForm component with validation and submission
  - Create FAQAccordion component with 5-6 common questions
  - Create ContactMethods component with WhatsApp, email, LinkedIn buttons
  - Create ContactInfo component with location, availability, response time
  - Build contact page (app/contact/page.tsx) assembling all components
  - Implement form validation with error messages
  - Set up form submission handler (email service integration)
  - Set up SEO metadata for contact page
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 10.1, 10.2_

- [x]* 9.1 Write unit tests for contact page components
  - Test ContactForm validates required fields
  - Test ContactForm shows error messages for invalid inputs
  - Test ContactForm submits valid data
  - Test FAQAccordion displays questions and expands on click
  - Test ContactMethods displays all contact options
  - Test ContactInfo displays location and availability
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x]* 9.2 Write property test for form validation completeness
  - **Property 6: Form Validation Completeness**
  - **Validates: Requirements 7.2**

- [x] 10. Build journey/timeline page (optional, can be merged with about)
  - Create TimelineEvent component with expandable details
  - Create JourneyTimeline component with vertical timeline layout
  - Build journey page (app/parcours/page.tsx) assembling timeline
  - Set up SEO metadata for journey page
  - _Requirements: 3.2_

- [x]* 10.1 Write unit tests for journey page components
  - Test TimelineEvent displays and expands correctly
  - Test JourneyTimeline renders all events in correct order
  - _Requirements: 3.2_

- [x] 11. Implement responsive design across all pages
  - Test all pages on mobile (375px), tablet (768px), and desktop (1920px) viewports
  - Ensure navigation menu collapses to hamburger on mobile
  - Ensure all text is readable and properly sized
  - Ensure images scale appropriately
  - Ensure no horizontal scrolling on any viewport
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x]* 11.1 Write property test for responsive layout adaptation
  - **Property 5: Responsive Layout Adaptation**
  - **Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5**

- [x] 12. Implement SEO optimization
  - Add unique title tags to all pages
  - Add unique meta descriptions to all pages
  - Add Open Graph tags for social sharing
  - Add structured data (Schema.org) to project detail pages
  - Create sitemap.xml with all routes
  - Create robots.txt with crawl rules
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x]* 12.1 Write unit tests for SEO metadata
  - Test all pages have unique title tags
  - Test all pages have unique meta descriptions
  - Test Open Graph tags are present and correct
  - Test project detail pages have Schema.org structured data
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 13. Implement page transitions and animations
  - Add fade/slide transition animations between pages
  - Add subtle loader indicator during page transitions
  - Implement auto scroll to top on page navigation
  - Ensure transitions complete within 500ms
  - _Requirements: 8.1, 8.2, 8.3, 8.5_

- [x]* 13.1 Write unit tests for page transition animations
  - Test transition animation plays on navigation
  - Test loader displays during transition
  - Test page scrolls to top after navigation
  - Test transition completes within 500ms
  - _Requirements: 8.1, 8.2, 8.3, 8.5_

- [x] 14. Checkpoint - Ensure all tests pass
  - Run all unit tests and verify they pass
  - Run all property-based tests and verify they pass
  - Fix any failing tests
  - Verify no console errors or warnings
  - _Requirements: All_

- [x] 15. Final integration and polish
  - Test all navigation links work correctly
  - Test all CTAs link to correct pages
  - Test form submission end-to-end
  - Test theme switching across all pages
  - Test language switching across all pages
  - Test page transitions are smooth
  - Verify responsive design on all viewports
  - _Requirements: All_

- [x] 16. Final checkpoint - Ensure all tests pass and application is ready
  - Run full test suite and verify all tests pass
  - Verify no console errors or warnings
  - Test application in production build
  - Verify SEO metadata is correct
  - Verify page performance is acceptable
  - _Requirements: All_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP, but are recommended for comprehensive testing
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties across many inputs
- Unit tests validate specific examples and edge cases
- Checkpoints ensure incremental validation and catch issues early
- All components should be built with TypeScript for type safety
- All styling should use Tailwind CSS for consistency
- All animations should use Framer Motion for smooth transitions
- All pages should be optimized for SEO with proper metadata
- All pages should be responsive and work on all device sizes

