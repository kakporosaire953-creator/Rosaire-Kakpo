import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import { Project } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: any) => (
    <a href={href}>{children}</a>
  );
});

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  category: 'web',
  description: 'A test project description',
  context: 'Test context',
  solution: 'Test solution',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  images: ['/test.jpg'],
  results: ['50% increase in performance'],
  year: 2024,
  duration: '3 months',
  status: 'completed',
  links: {
    live: 'https://example.com',
    github: 'https://github.com/example',
  },
};

describe('ProjectCard Component', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders project category', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('web')).toBeInTheDocument();
  });

  it('renders project year', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('renders first 3 technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  it('renders technology count badge for additional technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('renders first result', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('✓ 50% increase in performance')).toBeInTheDocument();
  });

  it('renders link to project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByText('Test Project').closest('a');
    expect(link).toHaveAttribute('href', '/projets/test-project');
  });
});
