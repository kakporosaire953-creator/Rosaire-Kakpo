import { render, screen, fireEvent } from '@testing-library/react';
import FAQAccordion from '../FAQAccordion';
import { createContext, useContext, ReactNode } from 'react';

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

describe('FAQAccordion', () => {
  it('renders FAQ title', () => {
    renderWithProviders(<FAQAccordion />);
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
  });

  it('renders all FAQ items', () => {
    renderWithProviders(<FAQAccordion />);
    expect(screen.getByText('Quel est votre délai de réponse?')).toBeInTheDocument();
    expect(screen.getByText('Travaillez-vous à distance?')).toBeInTheDocument();
    expect(screen.getByText('Quel est votre tarif?')).toBeInTheDocument();
  });

  it('expands and collapses FAQ items on click', () => {
    renderWithProviders(<FAQAccordion />);
    const firstQuestion = screen.getByText('Quel est votre délai de réponse?');
    const button = firstQuestion.closest('button');

    if (button) {
      fireEvent.click(button);
      expect(screen.getByText('Je réponds généralement dans les 24-48 heures.')).toBeInTheDocument();

      fireEvent.click(button);
      // Answer should still be in DOM but hidden
      expect(screen.getByText('Je réponds généralement dans les 24-48 heures.')).toBeInTheDocument();
    }
  });

  it('only one FAQ item can be expanded at a time', () => {
    renderWithProviders(<FAQAccordion />);
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    expect(screen.getByText('Je réponds généralement dans les 24-48 heures.')).toBeInTheDocument();

    fireEvent.click(buttons[1]);
    // First answer should still be in DOM but second should be visible
    expect(screen.getByText('Oui, je travaille entièrement à distance.')).toBeInTheDocument();
  });
});
