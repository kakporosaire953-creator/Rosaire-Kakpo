import React from 'react';
import { render, screen } from '@testing-library/react';
import AvailabilityBadge from '../AvailabilityBadge';

// Mock the providers
jest.mock('@/app/providers', () => ({
  useLanguage: () => ({
    language: 'fr',
  }),
}));

describe('AvailabilityBadge Component', () => {
  it('renders availability badge in French', () => {
    render(<AvailabilityBadge />);
    
    expect(screen.getByText('Disponible')).toBeInTheDocument();
  });

  it('renders with correct styling classes', () => {
    const { container } = render(<AvailabilityBadge />);
    
    const badge = container.firstChild;
    expect(badge).toHaveClass('inline-flex');
    expect(badge).toHaveClass('bg-green-100');
    expect(badge).toHaveClass('text-green-800');
  });

  it('renders animated pulse indicator', () => {
    const { container } = render(<AvailabilityBadge />);
    
    const pulse = container.querySelector('.animate-pulse');
    expect(pulse).toBeInTheDocument();
  });

  it('renders availability badge in English when language is en', () => {
    jest.resetModules();
    jest.mock('@/app/providers', () => ({
      useLanguage: () => ({
        language: 'en',
      }),
    }));
    
    // Re-import after mock reset
    const AvailabilityBadgeEn = require('../AvailabilityBadge').default;
    render(<AvailabilityBadgeEn />);
    
    expect(screen.getByText('Available')).toBeInTheDocument();
  });
});
