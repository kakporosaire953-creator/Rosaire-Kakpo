import React from 'react';
import { render, screen } from '@testing-library/react';
import ValuesSection from '../ValuesSection';

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

describe('ValuesSection Component', () => {
  it('renders section title in French', () => {
    render(<ValuesSection />);
    expect(screen.getByText('Mes valeurs')).toBeInTheDocument();
  });

  it('renders section subtitle', () => {
    render(<ValuesSection />);
    expect(
      screen.getByText('Les principes qui guident mon travail')
    ).toBeInTheDocument();
  });

  it('renders all values', () => {
    render(<ValuesSection />);
    expect(screen.getByText('Qualité')).toBeInTheDocument();
    expect(screen.getByText('Ponctualité')).toBeInTheDocument();
    expect(screen.getByText('Communication')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Collaboration')).toBeInTheDocument();
    expect(screen.getByText('Croissance')).toBeInTheDocument();
  });

  it('renders value descriptions', () => {
    render(<ValuesSection />);
    expect(
      screen.getByText('Je m\'engage à livrer du code propre et performant')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Les délais sont respectés et les livrables sont à temps')
    ).toBeInTheDocument();
  });

  it('renders 6 value cards', () => {
    const { container } = render(<ValuesSection />);
    const cards = container.querySelectorAll('.bg-white.dark\\:bg-slate-800');
    expect(cards.length).toBe(6);
  });
});
