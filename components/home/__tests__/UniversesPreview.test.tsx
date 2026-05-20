import React from 'react';
import { render, screen } from '@testing-library/react';
import UniversesPreview from '../UniversesPreview';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
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

describe('UniversesPreview Component', () => {
  it('renders section title in French', () => {
    render(<UniversesPreview />);
    expect(screen.getByText('Mes univers')).toBeInTheDocument();
  });

  it('renders section subtitle', () => {
    render(<UniversesPreview />);
    expect(
      screen.getByText('Découvrez les domaines dans lesquels j\'excelle')
    ).toBeInTheDocument();
  });

  it('renders universe cards', () => {
    render(<UniversesPreview />);
    expect(screen.getByText('Applications Web')).toBeInTheDocument();
    expect(screen.getByText('Applications Mobile')).toBeInTheDocument();
    expect(screen.getByText('E-commerce')).toBeInTheDocument();
  });

  it('renders technologies for each universe', () => {
    render(<UniversesPreview />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders view all link', () => {
    render(<UniversesPreview />);
    const viewAllLink = screen.getByText('Voir tous les univers').closest('a');
    expect(viewAllLink).toHaveAttribute('href', '/competences');
  });

  it('renders universe cards with links to skills page', () => {
    render(<UniversesPreview />);
    const universeLinks = screen.getAllByText(/Applications Web|Applications Mobile|E-commerce/);
    universeLinks.forEach((link) => {
      const anchor = link.closest('a');
      expect(anchor).toHaveAttribute('href', '/competences');
    });
  });
});
