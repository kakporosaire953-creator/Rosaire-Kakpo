import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { usePathname } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock the providers
jest.mock('@/app/providers', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
  useLanguage: () => ({
    language: 'fr',
    toggleLanguage: jest.fn(),
  }),
}));

describe('Header Component', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByText('RK');
    expect(logo).toBeInTheDocument();
  });

  it('renders language switcher button', () => {
    render(<Header />);
    const langButton = screen.getByLabelText('Toggle language');
    expect(langButton).toBeInTheDocument();
    expect(langButton).toHaveTextContent('EN');
  });

  it('renders theme toggle button', () => {
    render(<Header />);
    const themeButton = screen.getByLabelText('Toggle theme');
    expect(themeButton).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Header />);
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Header />);
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
    
    // Initially, mobile menu should not be visible (only desktop menu is present)
    expect(screen.getAllByText('Accueil')).toHaveLength(1);
    
    // Click to open (both desktop and mobile menus are present)
    fireEvent.click(mobileMenuButton);
    expect(screen.getAllByText('Accueil')).toHaveLength(2);
    
    // Click to close (back to only desktop menu)
    fireEvent.click(mobileMenuButton);
    expect(screen.getAllByText('Accueil')).toHaveLength(1);
  });

  it('renders navigation links', () => {
    render(<Header />);
    // Desktop navigation should be visible
    const homeLink = screen.getAllByText('Accueil')[0];
    expect(homeLink).toBeInTheDocument();
  });
});
