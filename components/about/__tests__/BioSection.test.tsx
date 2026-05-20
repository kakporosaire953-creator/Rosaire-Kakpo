import React from 'react';
import { render, screen } from '@testing-library/react';
import BioSection from '../BioSection';

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

describe('BioSection Component', () => {
  it('renders section title in French', () => {
    render(<BioSection />);
    expect(screen.getByText('Qui suis-je?')).toBeInTheDocument();
  });

  it('renders bio content in French', () => {
    render(<BioSection />);
    expect(
      screen.getByText(/Je suis Rosaire Kakpo, un développeur full stack/)
    ).toBeInTheDocument();
  });

  it('renders multiple paragraphs', () => {
    const { container } = render(<BioSection />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(3);
  });

  it('renders bio with expertise information', () => {
    render(<BioSection />);
    expect(
      screen.getByText(/web, mobile, e-commerce, IoT et backend/)
    ).toBeInTheDocument();
  });

  it('renders bio with philosophy information', () => {
    render(<BioSection />);
    expect(
      screen.getByText(/communication claire, de la livraison à temps/)
    ).toBeInTheDocument();
  });
});
