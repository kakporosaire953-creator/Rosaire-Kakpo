import { render, screen } from '@testing-library/react';
import ContactInfo from '../ContactInfo';
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

describe('ContactInfo', () => {
  it('renders contact info title', () => {
    renderWithProviders(<ContactInfo />);
    expect(screen.getByText('Informations pratiques')).toBeInTheDocument();
  });

  it('renders all contact info items', () => {
    renderWithProviders(<ContactInfo />);
    expect(screen.getByText('Localisation')).toBeInTheDocument();
    expect(screen.getByText('Délai de réponse')).toBeInTheDocument();
    expect(screen.getByText('Disponibilité')).toBeInTheDocument();
  });

  it('renders contact info values', () => {
    renderWithProviders(<ContactInfo />);
    expect(screen.getByText('Cotonou, Bénin')).toBeInTheDocument();
    expect(screen.getByText('24-48 heures')).toBeInTheDocument();
    expect(screen.getByText('Disponible pour des projets')).toBeInTheDocument();
  });

  it('renders contact info icons', () => {
    renderWithProviders(<ContactInfo />);
    expect(screen.getByText('📍')).toBeInTheDocument();
    expect(screen.getByText('⏱️')).toBeInTheDocument();
    expect(screen.getByText('✅')).toBeInTheDocument();
  });

  it('renders three info items in a grid', () => {
    const { container } = renderWithProviders(<ContactInfo />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-3');
  });
});
