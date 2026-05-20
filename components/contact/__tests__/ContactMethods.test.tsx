import { render, screen } from '@testing-library/react';
import ContactMethods from '../ContactMethods';
import { ReactNode } from 'react';
import { createContext } from 'react';

// Create a mock language context for testing
const MockLanguageContext = createContext({ language: 'fr' });

const MockLanguageProvider = ({ children }: { children: ReactNode }) => (
  <MockLanguageContext.Provider value={{ language: 'fr' }}>
    {children}
  </MockLanguageContext.Provider>
);

// Mock the useLanguage hook
jest.mock('@/app/providers', () => ({
  useLanguage: () => ({ language: 'fr' }),
  useTheme: () => ({ theme: 'light' }),
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(<MockLanguageProvider>{component}</MockLanguageProvider>);
};

describe('ContactMethods', () => {
  it('renders contact methods title', () => {
    renderWithProviders(<ContactMethods />);
    expect(screen.getByText('Autres moyens de contact')).toBeInTheDocument();
  });

  it('renders all contact method buttons', () => {
    renderWithProviders(<ContactMethods />);
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders contact method links with correct href attributes', () => {
    renderWithProviders(<ContactMethods />);
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));

    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('href');

    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href');
  });

  it('renders contact method links with target="_blank"', () => {
    renderWithProviders(<ContactMethods />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.textContent !== 'Email') {
        expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });

  it('renders contact method icons', () => {
    renderWithProviders(<ContactMethods />);
    expect(screen.getByText('💬')).toBeInTheDocument();
    expect(screen.getByText('✉️')).toBeInTheDocument();
    expect(screen.getByText('💼')).toBeInTheDocument();
    expect(screen.getByText('🐙')).toBeInTheDocument();
  });
});
