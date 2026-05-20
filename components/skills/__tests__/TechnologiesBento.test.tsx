import React from 'react';
import { render, screen } from '@testing-library/react';
import TechnologiesBento from '../TechnologiesBento';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock the providers
jest.mock('@/app/providers', () => ({
  useLanguage: () => ({
    language: 'fr',
  }),
}));

describe('TechnologiesBento Component', () => {
  it('renders section title in French', () => {
    render(<TechnologiesBento />);
    expect(screen.getByText('Stack Technologique')).toBeInTheDocument();
  });

  it('renders section subtitle', () => {
    render(<TechnologiesBento />);
    expect(
      screen.getByText('Les technologies que je maîtrise')
    ).toBeInTheDocument();
  });

  it('renders technology cards', () => {
    render(<TechnologiesBento />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders multiple technology cards', () => {
    const { container } = render(<TechnologiesBento />);
    const cards = container.querySelectorAll('.bg-white.dark\\:bg-slate-800');
    expect(cards.length).toBeGreaterThan(5);
  });

  it('renders all unique technologies', () => {
    render(<TechnologiesBento />);
    // Check for technologies from different universes
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Arduino')).toBeInTheDocument();
    expect(screen.getByText('Shopify')).toBeInTheDocument();
  });
});
