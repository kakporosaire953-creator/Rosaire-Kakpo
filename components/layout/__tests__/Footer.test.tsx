import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

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

describe('Footer Component', () => {
  it('renders footer with all sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('Rosaire Kakpo')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Réseaux')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Compétences')).toBeInTheDocument();
    expect(screen.getByText('Projets')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    
    expect(screen.getByText('Cotonou, Bénin')).toBeInTheDocument();
    expect(screen.getByText('✓ Disponible')).toBeInTheDocument();
  });

  it('renders copyright information in French', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Tous droits réservés/)).toBeInTheDocument();
    expect(screen.getByText(/Conçu et développé par Rosaire Kakpo/)).toBeInTheDocument();
  });

  it('renders email link', () => {
    render(<Footer />);
    
    const emailLink = screen.getByText('contact@rosairekakpo.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@rosairekakpo.com');
  });

  it('renders availability badge', () => {
    render(<Footer />);
    
    expect(screen.getByText('✓ Disponible')).toBeInTheDocument();
  });
});
