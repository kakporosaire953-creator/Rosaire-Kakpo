import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../Breadcrumb';

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

describe('Breadcrumb Component', () => {
  const mockItems = [
    { label: 'Projets', labelEn: 'Projects', href: '/projets' },
    { label: 'Mon Projet', labelEn: 'My Project', href: '/projets/mon-projet' },
  ];

  it('renders home link', () => {
    render(<Breadcrumb items={mockItems} />);
    
    expect(screen.getByText('Accueil')).toBeInTheDocument();
  });

  it('renders all breadcrumb items', () => {
    render(<Breadcrumb items={mockItems} />);
    
    expect(screen.getByText('Projets')).toBeInTheDocument();
    expect(screen.getByText('Mon Projet')).toBeInTheDocument();
  });

  it('renders separators between items', () => {
    const { container } = render(<Breadcrumb items={mockItems} />);
    
    const separators = container.querySelectorAll('span');
    expect(separators.length).toBeGreaterThan(0);
  });

  it('makes last item non-clickable', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const lastItem = screen.getByText('Mon Projet');
    expect(lastItem.tagName).not.toBe('A');
  });

  it('makes non-last items clickable', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const firstItem = screen.getByText('Projets');
    expect(firstItem.tagName).toBe('A');
    expect(firstItem).toHaveAttribute('href', '/projets');
  });

  it('renders in English when language is en', () => {
    jest.resetModules();
    jest.mock('@/app/providers', () => ({
      useLanguage: () => ({
        language: 'en',
      }),
    }));
    
    const BreadcrumbEn = require('../Breadcrumb').default;
    render(<BreadcrumbEn items={mockItems} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders empty items array', () => {
    render(<Breadcrumb items={[]} />);
    
    expect(screen.getByText('Accueil')).toBeInTheDocument();
  });
});
