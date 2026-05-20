import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectHero from '../ProjectHero';
import { Project } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  category: 'web',
  description: 'Test description',
  context: 'Test context',
  solution: 'Test solution',
  technologies: ['React'],
  images: [],
  results: [],
  year: 2024,
  duration: '3 months',
  status: 'completed',
  links: {},
};

describe('ProjectHero Component', () => {
  it('renders project title', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders project category', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('web')).toBeInTheDocument();
  });

  it('renders project year', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('renders project duration', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('3 months')).toBeInTheDocument();
  });

  it('renders project status in French', () => {
    render(<ProjectHero project={mockProject} language="fr" />);
    expect(screen.getByText('Complété')).toBeInTheDocument();
  });

  it('renders project status in English', () => {
    render(<ProjectHero project={mockProject} language="en" />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('renders in-progress status', () => {
    const inProgressProject = { ...mockProject, status: 'in-progress' as const };
    render(<ProjectHero project={inProgressProject} language="fr" />);
    expect(screen.getByText('En cours')).toBeInTheDocument();
  });
});
