import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';
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

describe('ContactForm', () => {
  it('renders form fields', () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByPlaceholderText('Votre nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('votre@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Décrivez votre projet...')).toBeInTheDocument();
  });

  it('renders form labels', () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByText(/Nom/)).toBeInTheDocument();
    expect(screen.getByText(/Email/)).toBeInTheDocument();
    expect(screen.getByText('Type de projet')).toBeInTheDocument();
    expect(screen.getByText('Budget estimé')).toBeInTheDocument();
    expect(screen.getByText(/Message/)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByRole('button', { name: 'Envoyer' })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    renderWithProviders(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Envoyer' });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Le nom est requis')).toBeInTheDocument();
      expect(screen.getByText('L\'email est requis')).toBeInTheDocument();
      expect(screen.getByText('Le message est requis')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    renderWithProviders(<ContactForm />);
    const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Envoyer' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email invalide')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    renderWithProviders(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: 'Envoyer' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'I need a website' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Merci! Votre message a été envoyé avec succès.')).toBeInTheDocument();
    });
  });

  it('clears form after successful submission', async () => {
    renderWithProviders(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: 'Envoyer' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'I need a website' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(messageInput.value).toBe('');
    });
  });

  it('renders optional fields', () => {
    renderWithProviders(<ContactForm />);
    const projectTypeSelect = screen.getByDisplayValue('Sélectionnez un type') as HTMLSelectElement;
    const budgetSelect = screen.getByDisplayValue('Sélectionnez un budget') as HTMLSelectElement;

    expect(projectTypeSelect).toBeInTheDocument();
    expect(budgetSelect).toBeInTheDocument();
  });
});
