import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '../Gallery';

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

describe('Gallery Component', () => {
  it('renders section title in French', () => {
    render(<Gallery />);
    expect(screen.getByText('Galerie')).toBeInTheDocument();
  });

  it('renders gallery subtitle', () => {
    render(<Gallery />);
    expect(
      screen.getByText('Moments professionnels et réalisations')
    ).toBeInTheDocument();
  });

  it('renders gallery items', () => {
    render(<Gallery />);
    expect(screen.getByText('En train de coder')).toBeInTheDocument();
    expect(screen.getByText('Événement tech')).toBeInTheDocument();
    expect(screen.getByText('Collaboration')).toBeInTheDocument();
  });

  it('renders all 6 gallery items', () => {
    render(<Gallery />);
    const items = screen.getAllByText(/En train de coder|Événement tech|Collaboration|Innovation|Apprentissage|Succès/);
    expect(items.length).toBe(6);
  });

  it('renders gallery with emojis', () => {
    const { container } = render(<Gallery />);
    const emojis = container.querySelectorAll('.text-6xl');
    expect(emojis.length).toBeGreaterThan(0);
  });
});
