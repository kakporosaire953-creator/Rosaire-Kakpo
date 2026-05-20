import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Timeline from '../Timeline';

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

describe('Timeline Component', () => {
  it('renders section title in French', () => {
    render(<Timeline />);
    expect(screen.getByText('Mon parcours')).toBeInTheDocument();
  });

  it('renders timeline events', () => {
    render(<Timeline />);
    expect(screen.getByText('Formation Google IT Support')).toBeInTheDocument();
    expect(screen.getByText('Certification freeCodeCamp')).toBeInTheDocument();
  });

  it('renders event dates', () => {
    render(<Timeline />);
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('renders event organizations', () => {
    render(<Timeline />);
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('freeCodeCamp')).toBeInTheDocument();
  });

  it('expands timeline item on click', () => {
    render(<Timeline />);
    const expandButtons = screen.getAllByText('Afficher plus');
    
    fireEvent.click(expandButtons[0]);
    
    expect(screen.getByText('Certification en support informatique')).toBeInTheDocument();
  });

  it('collapses timeline item on second click', () => {
    render(<Timeline />);
    const expandButtons = screen.getAllByText('Afficher plus');
    
    fireEvent.click(expandButtons[0]);
    expect(screen.getByText('Masquer')).toBeInTheDocument();
    
    fireEvent.click(expandButtons[0]);
    expect(screen.queryByText('Masquer')).not.toBeInTheDocument();
  });

  it('renders timeline dots', () => {
    const { container } = render(<Timeline />);
    const dots = container.querySelectorAll('.w-12.h-12.bg-blue-600');
    expect(dots.length).toBeGreaterThan(0);
  });
});
