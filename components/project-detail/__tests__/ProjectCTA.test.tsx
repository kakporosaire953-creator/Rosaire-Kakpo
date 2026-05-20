import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCTA from '../ProjectCTA';

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

describe('ProjectCTA Component', () => {
  it('renders CTA title in French', () => {
    render(<ProjectCTA />);
    expect(screen.getByText('Un projet similaire?')).toBeInTheDocument();
  });

  it('renders CTA description', () => {
    render(<ProjectCTA />);
    expect(
      screen.getByText(/Contactez-moi pour discuter de votre projet/)
    ).toBeInTheDocument();
  });

  it('renders contact button', () => {
    render(<ProjectCTA />);
    expect(screen.getByText('Me contacter')).toBeInTheDocument();
  });

  it('renders contact button with correct link', () => {
    render(<ProjectCTA />);
    const button = screen.getByText('Me contacter').closest('a');
    expect(button).toHaveAttribute('href', '/contact');
  });

  it('renders in English when language is en', () => {
    jest.resetModules();
    jest.mock('@/app/providers', () => ({
      useLanguage: () => ({
        language: 'en',
      }),
    }));

    const ProjectCTAEn = require('../ProjectCTA').default;
    render(<ProjectCTAEn />);

    expect(screen.getByText('A similar project?')).toBeInTheDocument();
    expect(screen.getByText('Contact me')).toBeInTheDocument();
  });
});
