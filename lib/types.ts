// Project Data Structure
export interface Project {
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
export interface Universe {
  id: string;
  name: string;
  description: string;
  icon: string;
  technologies: string[];
  useCases: string[];
  relatedProjects: string[]; // Project slugs
}

// Timeline Event
export interface TimelineEvent {
  id: string;
  type: 'education' | 'certification' | 'event' | 'experience';
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}
