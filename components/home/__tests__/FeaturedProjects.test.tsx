import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjects from '../FeaturedProjects';

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

describe('FeaturedProjects Component', () => {
  it('renders section title in French', () => {
    render(<FeaturedProjects />);
    expect(screen.getByText('Projets vedettes')).toBeInTheDocument();
  });

  it('renders section subtitle', () => {
    render(<FeaturedProjects />);
    expect(
      screen.getByText('Découvrez mes réalisations les plus remarquables')
    ).toBeInTheDocument();
  });

  it('renders featured projects', () => {
    render(<FeaturedProjects />);
    expect(screen.getByText('Plateforme E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Application Mobile')).toBeInTheDocument();
  });

  it('renders project categories', () => {
    render(<FeaturedProjects />);
    expect(screen.getByText('ecommerce')).toBeInTheDocument();
    expect(screen.getByText('mobile')).toBeInTheDocument();
  });

  it('renders project years', () => {
    render(<FeaturedProjects />);
    const years = screen.getAllByText('2024');
    expect(years.length).toBeGreaterThan(0);
  });

  it('renders project technologies', () => {
    render(<FeaturedProjects />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders view all projects link', () => {
    render(<FeaturedProjects />);
    const viewAllLink = screen.getByText('Voir tous les projets').closest('a');
    expect(viewAllLink).toHaveAttribute('href', '/projets');
  });

  it('renders project links with correct hrefs', () => {
    render(<FeaturedProjects />);
    const projectLinks = screen.getAllByText(/Plateforme E-commerce|Application Mobile/);
    projectLinks.forEach((link) => {
      const anchor = link.closest('a');
      expect(anchor?.getAttribute('href')).toMatch(/^\/projets\//);
    });
  });
});
