import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock the providers
jest.mock('@/app/providers', () => ({
  useLanguage: () => ({
    language: 'fr',
  }),
}));

// Mock AvailabilityBadge
jest.mock('@/components/shared/AvailabilityBadge', () => {
  return function MockBadge() {
    return <div data-testid="availability-badge">Disponible</div>;
  };
});

describe('HeroSection Component', () => {
  it('renders availability badge', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('availability-badge')).toBeInTheDocument();
  });

  it('renders main title in French', () => {
    render(<HeroSection />);
    expect(screen.getByText('Développeur Frontend')).toBeInTheDocument();
  });

  it('renders subtitle in French', () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Je transforme vos idées en solutions numériques innovantes/)
    ).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText('Voir mes projets')).toBeInTheDocument();
    expect(screen.getByText('Me contacter')).toBeInTheDocument();
  });

  it('renders projects link with correct href', () => {
    render(<HeroSection />);
    const projectsLink = screen.getByText('Voir mes projets').closest('a');
    expect(projectsLink).toHaveAttribute('href', '/projets');
  });

  it('renders contact link with correct href', () => {
    render(<HeroSection />);
    const contactLink = screen.getByText('Me contacter').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders scroll indicator', () => {
    const { container } = render(<HeroSection />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
