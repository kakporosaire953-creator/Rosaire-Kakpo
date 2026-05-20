# Design Document: Portfolio Multi-Page Architecture

## Overview

This design transforms the portfolio from a single-page application into a multi-page Next.js application with dedicated routes for different sections. The architecture prioritizes SEO, user experience, and maintainability while preserving the existing design aesthetic and adding smooth transitions between pages.

**Technology Stack:**
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (existing)
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Data Storage**: JSON files or CMS (for projects)
- **Deployment**: Vercel

## Architecture

### High-Level Structure

```
App Router Structure:
├── app/
│   ├── layout.tsx (Root layout with header/footer)
│   ├── page.tsx (Home page)
│   ├── a-propos/
│   │   └── page.tsx (About page)
│   ├── competences/
│   │   └── page.tsx (Skills page)
│   ├── projets/
│   │   ├── page.tsx (Projects listing)
│   │   └── [slug]/
│   │       └── page.tsx (Project detail)
│   ├── parcours/
│   │   └── page.tsx (Journey/Timeline page)
│   └── contact/
│       └── page.tsx (Contact page)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── UniversesPreview.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── Testimonial.tsx
│   ├── about/
│   │   ├── BioSection.tsx
│   │   ├── Timeline.tsx
│   │   └── Gallery.tsx
│   ├── skills/
│   │   ├── UniverseCard.tsx
│   │   ├── TechnologiesBento.tsx
│   │   └── UseCasesSection.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── ProjectGrid.tsx
│   ├── project-detail/
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectContent.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectNavigation.tsx
│   │   └── ProjectCTA.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── ContactMethods.tsx
│   └── shared/
│       ├── PageTransition.tsx
│       ├── Breadcrumb.tsx
│       ├── AvailabilityBadge.tsx
│       └── Loader.tsx
├── lib/
│   ├── projects.ts (Project data and utilities)
│   ├── metadata.ts (SEO metadata generation)
│   └── constants.ts (Navigation, contact info, etc.)
├── data/
│   └── projects.json (Project data)
└── styles/
    └── globals.css (Global styles)
```

### Navigation Flow

```
Home (/)
├── → About (/a-propos)
├── → Skills (/competences)
├── → Projects (/projets)
│   └── → Project Detail (/projets/[slug])
│       └── → Next/Previous Project
├── → Journey (/parcours)
└── → Contact (/contact)
```

## Components and Interfaces

### Core Data Models

```typescript
// Project Data Structure
interface Project {
  slug: string;
  title: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'iot' | 'backend';
  description: string;
  context: string;
  solution: string;
  technologies: string[];
  images: string[];
  results: string[];
  testimonial?: {
    author: string;
    role: string;
    content: string;
  };
  links: {
    live?: string;
    github?: string;
  };
  year: number;
  duration: string;
  status: 'completed' | 'in-progress';
}

// Universe (Skill Domain)
interface Universe {
  id: string;
  name: string;
  description: string;
  icon: string;
  technologies: string[];
  useCases: string[];
  relatedProjects: string[]; // Project slugs
}

// Timeline Event
interface TimelineEvent {
  id: string;
  type: 'education' | 'certification' | 'event' | 'experience';
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

// Contact Form Data
interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}
```

### Layout Components

**Header Component**
- Logo/Name (clickable, links to home)
- Navigation Menu (responsive, hamburger on mobile)
- Language Switcher (FR/EN)
- Theme Toggle (Light/Dark)
- Availability Badge (discrete)

**Footer Component**
- Quick Links (all pages)
- Social Media Icons (GitHub, LinkedIn, Twitter)
- Email Contact
- Location (Cotonou, Bénin)
- Copyright
- Availability Badge
- Response Time Estimate

**Navigation Component**
- Active page highlighting
- Smooth scroll behavior
- Mobile hamburger menu with overlay
- Keyboard navigation support

### Page-Specific Components

**Home Page**
- Hero Section: Animated title, photo, availability badge
- Universes Preview: 3-4 clickable cards linking to skills page
- Featured Projects: 2-3 project cards with links to projects page
- Testimonial Section: Featured social proof
- CTA Button: Prominent link to contact page

**About Page**
- Bio Section: Detailed biography and philosophy
- Timeline: Interactive vertical timeline with expandable items
- Gallery: Professional photos in grid layout
- Values Section: Work philosophy and approach

**Skills Page**
- Universe Grid: Expandable cards for each domain
- Technologies Bento: Varied-size grid showing tech stack per universe
- Use Cases: "What I can build" section with examples
- Proficiency Indicators: Tooltips on hover

**Projects Page**
- Filter Buttons: Category filtering (All, Web, Mobile, E-commerce, IoT)
- Project Grid: Responsive grid of project cards
- Project Card: Title, category badge, technologies, key result, link
- Pagination/Infinite Scroll: For large project lists

**Project Detail Page**
- Hero Image: Large project showcase image
- Project Info: Year, category, duration, status badges
- Context Section: Problem statement
- Solution Section: What was built
- Technologies: Full stack with icons
- Gallery: Screenshots and images
- Results: Metrics and impact
- Testimonial: Client feedback (if available)
- Links: Live site and source code buttons
- Navigation: Previous/Next project links
- CTA: "Similar project? Contact me"
- Breadcrumb: Navigation path

**Contact Page**
- Contact Form: Name, email, project type, budget, message
- Form Validation: Real-time validation with error messages
- Success Message: Confirmation after submission
- Alternative Methods: WhatsApp, email, LinkedIn buttons
- FAQ Accordion: 5-6 common questions
- Contact Info: Location, availability, response time

### Shared Components

**Page Transition**
- Fade or slide animation between pages
- Subtle loader during navigation
- Auto scroll to top on page change
- Smooth 500ms transition

**Breadcrumb**
- Shows navigation path on deep pages
- Clickable links to parent pages
- Visible on project detail and other nested pages

**Availability Badge**
- Discrete badge showing current availability
- Appears in header and footer
- Updates based on availability status

**Loader**
- Subtle spinner or progress indicator
- Appears during page transitions
- Completes within 500ms

## Data Models

### Project Data Structure

Projects are stored in `data/projects.json` with the following structure:

```json
{
  "projects": [
    {
      "slug": "ecommerce-platform",
      "title": "E-commerce Platform",
      "category": "ecommerce",
      "description": "Full-stack e-commerce solution with payment integration",
      "context": "Client needed a scalable online store...",
      "solution": "Built a Next.js e-commerce platform with...",
      "technologies": ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      "images": ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
      "results": ["50% increase in sales", "99.9% uptime"],
      "testimonial": {
        "author": "John Doe",
        "role": "CEO",
        "content": "Rosaire delivered an exceptional platform..."
      },
      "links": {
        "live": "https://example.com",
        "github": "https://github.com/example"
      },
      "year": 2024,
      "duration": "3 months",
      "status": "completed"
    }
  ]
}
```

### Universe Data Structure

Universes are defined in `lib/constants.ts`:

```typescript
const UNIVERSES: Universe[] = [
  {
    id: 'web',
    name: 'Applications Web',
    description: 'Modern web applications with React, Next.js, and TypeScript',
    icon: 'globe',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    useCases: ['SaaS platforms', 'Dashboards', 'Progressive Web Apps'],
    relatedProjects: ['project-slug-1', 'project-slug-2']
  },
  // ... more universes
];
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property-Based Testing Overview

Property-based testing (PBT) validates software correctness by testing universal properties across many generated inputs. Each property is a formal specification that should hold for all valid inputs.

**Core Principles:**
1. **Universal Quantification**: Every property must contain an explicit "for all" statement
2. **Requirements Traceability**: Each property must reference the requirements it validates
3. **Executable Specifications**: Properties must be implementable as automated tests
4. **Comprehensive Coverage**: Properties should cover all testable acceptance criteria

### Correctness Properties

**Property 1: Navigation Active State Consistency**
*For any* page in the portfolio, the navigation menu SHALL highlight the link corresponding to the current page, and no other links SHALL be highlighted.
**Validates: Requirements 1.3**

**Property 2: Project Filter Accuracy**
*For any* category filter applied on the projects page, all displayed project cards SHALL have a category matching the selected filter, and no projects from other categories SHALL be displayed.
**Validates: Requirements 5.3, 12.4**

**Property 3: Project Detail Page Slug Resolution**
*For any* valid project slug in the URL, the project detail page SHALL load and display the correct project data matching that slug, and invalid slugs SHALL result in a 404 error.
**Validates: Requirements 6.1, 12.5**

**Property 4: Page Transition Completion**
*For any* navigation between pages, the page transition animation SHALL complete within 500ms, and the new page content SHALL be fully rendered and interactive after the transition.
**Validates: Requirements 8.5**

**Property 5: Responsive Layout Adaptation**
*For any* viewport size (mobile, tablet, desktop), the portfolio layout SHALL adapt appropriately, with all text readable, images properly sized, and navigation accessible without horizontal scrolling.
**Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5**

**Property 6: Form Validation Completeness**
*For any* contact form submission with missing or invalid required fields, the form SHALL display error messages for each invalid field and SHALL NOT submit the form.
**Validates: Requirements 7.2**

**Property 7: SEO Metadata Uniqueness**
*For any* page in the portfolio, the page title and meta description SHALL be unique and descriptive, and SHALL NOT be empty or generic.
**Validates: Requirements 10.1, 10.2**

**Property 8: Project Navigation Continuity**
*For any* project detail page, the previous and next project navigation links SHALL correctly point to adjacent projects in the project list, and SHALL not create broken links.
**Validates: Requirements 6.5**

**Property 9: Theme Toggle Persistence**
*For any* theme toggle action (light to dark or dark to light), the selected theme SHALL be applied to all pages immediately, and SHALL persist across page navigations.
**Validates: Requirements 11.4**

**Property 10: Language Switch Consistency**
*For any* language switch action (FR to EN or EN to FR), all translatable content on the current page SHALL update to the selected language, and the language preference SHALL persist across page navigations.
**Validates: Requirements 11.3**

## Error Handling

### Navigation Errors
- Invalid project slugs: Display 404 page with link back to projects
- Broken internal links: Gracefully handle with error boundary
- Network errors during page load: Show error message with retry option

### Form Errors
- Validation errors: Display inline error messages for each field
- Submission errors: Show error message with retry option
- Network errors: Display user-friendly error message

### Data Errors
- Missing project data: Display placeholder or skip in listings
- Missing images: Show fallback image or placeholder
- Malformed data: Log error and display safe default

### Responsive Design Errors
- Overflow content: Ensure no horizontal scrolling on any viewport
- Unreadable text: Maintain minimum font sizes across devices
- Inaccessible navigation: Ensure menu is always accessible

## Testing Strategy

### Unit Testing
- Test individual components in isolation
- Verify component rendering with different props
- Test event handlers and user interactions
- Test form validation logic
- Test data filtering and sorting logic
- Test utility functions and helpers

**Unit Test Examples:**
- Navigation component highlights active page correctly
- Project filter updates grid when category changes
- Form validation shows errors for invalid inputs
- Theme toggle switches between light and dark modes
- Language switcher updates content correctly

### Property-Based Testing
- Validate universal properties across many generated inputs
- Test navigation consistency across all pages
- Test responsive design across viewport sizes
- Test form validation with various input combinations
- Test project filtering with different category combinations
- Test page transitions complete within time limits
- Test SEO metadata is unique and non-empty
- Test theme and language persistence across navigations

**Property Test Configuration:**
- Minimum 100 iterations per property test
- Each property test references its design document property
- Tag format: `Feature: portfolio-multi-page, Property N: [property_text]`

### Integration Testing
- Test navigation between pages
- Test project detail page loads correct data from slug
- Test form submission end-to-end
- Test theme and language switching across multiple pages
- Test page transitions with animations

### Manual Testing Checklist
- [ ] Test all navigation links on each page
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test form submission with valid and invalid data
- [ ] Test theme toggle persistence
- [ ] Test language switcher
- [ ] Test project filtering
- [ ] Test project detail page navigation
- [ ] Test page transitions and animations
- [ ] Test SEO metadata in browser dev tools
- [ ] Test accessibility with keyboard navigation

