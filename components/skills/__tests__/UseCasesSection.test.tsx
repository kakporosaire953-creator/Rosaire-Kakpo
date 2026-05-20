import React from 'react';
import { render, screen } from '@testing-library/react';
import UseCasesSection from '../UseCasesSection';

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

describe('UseCasesSection Component', () => {
  it('renders section title in French', () => {
    render(<UseCasesSection />);
    expect(screen.getByText('Ce que je peux construire')).toBeInTheDocument();
  });

  it('renders section subtitle', () => {
    render(<UseCasesSection />);
    expect(
      screen.getByText('Cas d\'usage et solutions que je propose')
    ).toBeInTheDocument();
  });

  it('renders all use cases', () => {
    render(<UseCasesSection />);
    expect(screen.getByText('Plateformes SaaS')).toBeInTheDocument();
    expect(screen.getByText('E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Applications Mobile')).toBeInTheDocument();
    expect(screen.getByText('Tableaux de Bord')).toBeInTheDocument();
    expect(screen.getByText('Systèmes IoT')).toBeInTheDocument();
    expect(screen.getByText('APIs Backend')).toBeInTheDocument();
  });

  it('renders use case descriptions', () => {
    render(<UseCasesSection />);
    expect(
      screen.getByText('Applications web scalables avec authentification et paiement')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Boutiques en ligne avec gestion d\'inventaire et paiement')
    ).toBeInTheDocument();
  });

  it('renders 6 use case cards', () => {
    const { container } = render(<UseCasesSection />);
    const cards = container.querySelectorAll('.bg-white.dark\\:bg-slate-800');
    expect(cards.length).toBe(6);
  });

  it('renders use case icons', () => {
    const { container } = render(<UseCasesSection />);
    const icons = container.querySelectorAll('.text-5xl');
    expect(icons.length).toBeGreaterThan(0);
  });
});
