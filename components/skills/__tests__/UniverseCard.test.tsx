import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UniverseCard from '../UniverseCard';
import { Universe } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

const mockUniverse: Universe = {
  id: 'web',
  name: 'Applications Web',
  description: 'Applications web modernes',
  icon: '🌐',
  technologies: ['React', 'Next.js', 'TypeScript'],
  useCases: ['SaaS', 'Dashboards'],
  relatedProjects: [],
};

describe('UniverseCard Component', () => {
  it('renders universe name', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    expect(screen.getByText('Applications Web')).toBeInTheDocument();
  });

  it('renders universe description', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    expect(screen.getByText('Applications web modernes')).toBeInTheDocument();
  });

  it('renders universe icon', () => {
    const { container } = render(<UniverseCard universe={mockUniverse} language="fr" />);
    expect(container.textContent).toContain('🌐');
  });

  it('expands on click', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    const button = screen.getByText('Afficher plus').closest('button');
    
    fireEvent.click(button!);
    
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('collapses on second click', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    const button = screen.getByText('Afficher plus').closest('button');
    
    fireEvent.click(button!);
    expect(screen.getByText('Masquer')).toBeInTheDocument();
    
    fireEvent.click(button!);
    expect(screen.queryByText('Masquer')).not.toBeInTheDocument();
  });

  it('renders technologies when expanded', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    const button = screen.getByText('Afficher plus').closest('button');
    
    fireEvent.click(button!);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders use cases when expanded', () => {
    render(<UniverseCard universe={mockUniverse} language="fr" />);
    const button = screen.getByText('Afficher plus').closest('button');
    
    fireEvent.click(button!);
    
    expect(screen.getByText('SaaS')).toBeInTheDocument();
    expect(screen.getByText('Dashboards')).toBeInTheDocument();
  });

  it('renders in English when language is en', () => {
    render(<UniverseCard universe={mockUniverse} language="en" />);
    const button = screen.getByText('Show more').closest('button');
    
    fireEvent.click(button!);
    
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });
});
