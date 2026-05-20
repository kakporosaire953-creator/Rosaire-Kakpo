import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectNavigation from '../ProjectNavigation';
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
  description: 'Test',
  context: 'Test',
  solution: 'Test',
  technologies: [],
  images: [],
  results: [],
  year: 2024,
  duration: '1 month',
  status: 'completed',
  links: {},
};

describe('ProjectNavigation Component', () => {
  it('renders previous project link', () => {
    const previousProject = { ...mockProject, slug: 'previous', title: 'Previous Project' };
    render(
      <ProjectNavigation previousProject={previousProject} nextProject={null} />
    );
    expect(screen.getByText('Projet précédent')).toBeInTheDocument();
    expect(screen.getByText('Previous Project')).toBeInTheDocument();
  });

  it('renders next project link', () => {
    const nextProject = { ...mockProject, slug: 'next', title: 'Next Project' };
    render(
      <ProjectNavigation previousProject={null} nextProject={nextProject} />
    );
    expect(screen.getByText('Projet suivant')).toBeInTheDocument();
    expect(screen.getByText('Next Project')).toBeInTheDocument();
  });

  it('renders both navigation links', () => {
    const previousProject = { ...mockProject, slug: 'previous', title: 'Previous' };
    const nextProject = { ...mockProject, slug: 'next', title: 'Next' };
    render(
      <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
    );
    expect(screen.getByText('Projet précédent')).toBeInTheDocument();
    expect(screen.getByText('Projet suivant')).toBeInTheDocument();
  });

  it('renders correct href for previous project', () => {
    const previousProject = { ...mockProject, slug: 'previous-slug', title: 'Previous' };
    render(
      <ProjectNavigation previousProject={previousProject} nextProject={null} />
    );
    const link = screen.getByText('Previous').closest('a');
    expect(link).toHaveAttribute('href', '/projets/previous-slug');
  });

  it('renders correct href for next project', () => {
    const nextProject = { ...mockProject, slug: 'next-slug', title: 'Next' };
    render(
      <ProjectNavigation previousProject={null} nextProject={nextProject} />
    );
    const link = screen.getByText('Next').closest('a');
    expect(link).toHaveAttribute('href', '/projets/next-slug');
  });
});
