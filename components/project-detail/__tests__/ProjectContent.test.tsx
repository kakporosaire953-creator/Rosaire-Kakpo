import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectContent from '../ProjectContent';
import { Project } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock the providers
jest.mock('@/app/providers', () => ({
  useLanguage: () => ({
    language: 'fr',
  }),
}));

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  category: 'web',
  description: 'Test description',
  context: 'Test context',
  solution: 'Test solution',
  technologies: ['React', 'TypeScript'],
  images: [],
  results: ['Result 1', 'Result 2'],
  testimonial: {
    author: 'John Doe',
    role: 'CEO',
    content: 'Great work!',
  },
  year: 2024,
  duration: '3 months',
  status: 'completed',
  links: {},
};

describe('ProjectContent Component', () => {
  it('renders context section', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByText('Le contexte')).toBeInTheDocument();
    expect(screen.getByText('Test context')).toBeInTheDocument();
  });

  it('renders solution section', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByText('La solution')).toBeInTheDocument();
    expect(screen.getByText('Test solution')).toBeInTheDocument();
  });

  it('renders technologies section', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByText('Technologies utilisées')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders results section', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByText('Résultats')).toBeInTheDocument();
    expect(screen.getByText('Result 1')).toBeInTheDocument();
    expect(screen.getByText('Result 2')).toBeInTheDocument();
  });

  it('renders testimonial section', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByText('Témoignage')).toBeInTheDocument();
    expect(screen.getByText('Great work!')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('CEO')).toBeInTheDocument();
  });

  it('does not render results section if empty', () => {
    const projectWithoutResults = { ...mockProject, results: [] };
    render(<ProjectContent project={projectWithoutResults} />);
    expect(screen.queryByText('Résultats')).not.toBeInTheDocument();
  });

  it('does not render testimonial section if not provided', () => {
    const projectWithoutTestimonial = { ...mockProject, testimonial: undefined };
    render(<ProjectContent project={projectWithoutTestimonial} />);
    expect(screen.queryByText('Témoignage')).not.toBeInTheDocument();
  });
});
