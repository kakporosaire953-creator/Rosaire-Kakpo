import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectGrid from '../ProjectGrid';
import { Project } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock ProjectCard
jest.mock('../ProjectCard', () => {
  return function MockProjectCard({ project }: any) {
    return <div data-testid={`project-card-${project.slug}`}>{project.title}</div>;
  };
});

const mockProjects: Project[] = [
  {
    slug: 'project-1',
    title: 'Project 1',
    category: 'web',
    description: 'Description 1',
    context: 'Context 1',
    solution: 'Solution 1',
    technologies: ['React'],
    images: [],
    results: [],
    year: 2024,
    duration: '1 month',
    status: 'completed',
    links: {},
  },
  {
    slug: 'project-2',
    title: 'Project 2',
    category: 'mobile',
    description: 'Description 2',
    context: 'Context 2',
    solution: 'Solution 2',
    technologies: ['React Native'],
    images: [],
    results: [],
    year: 2024,
    duration: '2 months',
    status: 'completed',
    links: {},
  },
];

describe('ProjectGrid Component', () => {
  it('renders all projects', () => {
    render(<ProjectGrid projects={mockProjects} language="fr" />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<ProjectGrid projects={mockProjects} language="fr" />);
    expect(screen.getByTestId('project-card-project-1')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-project-2')).toBeInTheDocument();
  });

  it('renders empty state message when no projects', () => {
    render(<ProjectGrid projects={[]} language="fr" />);
    expect(
      screen.getByText('Aucun projet trouvé dans cette catégorie')
    ).toBeInTheDocument();
  });

  it('renders empty state message in English', () => {
    render(<ProjectGrid projects={[]} language="en" />);
    expect(
      screen.getByText('No projects found in this category')
    ).toBeInTheDocument();
  });

  it('renders correct number of project cards', () => {
    render(<ProjectGrid projects={mockProjects} language="fr" />);
    const cards = screen.getAllByTestId(/project-card-/);
    expect(cards.length).toBe(2);
  });
});
