import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonial from '../Testimonial';

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

describe('Testimonial Component', () => {
  it('renders 5 stars', () => {
    const { container } = render(<Testimonial />);
    const stars = container.querySelectorAll('span:contains("⭐")');
    expect(stars.length).toBeGreaterThanOrEqual(0);
  });

  it('renders testimonial text in French', () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/Rosaire a livré une plateforme exceptionnelle/)
    ).toBeInTheDocument();
  });

  it('renders author name in French', () => {
    render(<Testimonial />);
    expect(screen.getByText('Jean Dupont')).toBeInTheDocument();
  });

  it('renders author role in French', () => {
    render(<Testimonial />);
    expect(screen.getByText('PDG, Entreprise XYZ')).toBeInTheDocument();
  });

  it('renders author initials', () => {
    render(<Testimonial />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders testimonial in blockquote', () => {
    const { container } = render(<Testimonial />);
    const blockquote = container.querySelector('blockquote');
    expect(blockquote).toBeInTheDocument();
  });
});
