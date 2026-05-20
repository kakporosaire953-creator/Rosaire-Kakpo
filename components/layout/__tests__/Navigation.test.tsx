import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: any) => (
    <a href={href}>{children}</a>
  );
});

describe('Navigation Component', () => {
  it('renders all navigation links', () => {
    render(
      <Navigation pathname="/" language="fr" />
    );
    
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Compétences')).toBeInTheDocument();
    expect(screen.getByText('Projets')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('highlights the active page', () => {
    const { container } = render(
      <Navigation pathname="/" language="fr" />
    );
    
    const homeLink = screen.getByText('Accueil').closest('a');
    expect(homeLink).toHaveClass('text-blue-600');
    expect(homeLink).toHaveClass('border-blue-600');
  });

  it('does not highlight inactive pages', () => {
    const { container } = render(
      <Navigation pathname="/" language="fr" />
    );
    
    const aboutLink = screen.getByText('À propos').closest('a');
    expect(aboutLink).toHaveClass('text-slate-600');
    expect(aboutLink).not.toHaveClass('text-blue-600');
  });

  it('renders English labels when language is en', () => {
    render(
      <Navigation pathname="/" language="en" />
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('applies mobile styles when mobile prop is true', () => {
    const { container } = render(
      <Navigation pathname="/" language="fr" mobile={true} />
    );
    
    const nav = container.firstChild;
    expect(nav).toHaveClass('flex-col');
    expect(nav).toHaveClass('gap-2');
  });

  it('calls onNavigate callback when provided', () => {
    const onNavigate = jest.fn();
    render(
      <Navigation pathname="/" language="fr" onNavigate={onNavigate} />
    );
    
    const link = screen.getByText('À propos').closest('a');
    link?.click();
    expect(onNavigate).toHaveBeenCalled();
  });
});
