import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';
import fc from 'fast-check';
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
  render(<MockLanguageProvider>{component}</MockLanguageProvider>);
};

describe('ContactForm - Property-Based Tests', () => {
  it('should validate that all required fields must be filled before submission', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.oneof(fc.constant(''), fc.string()),
          email: fc.oneof(fc.constant(''), fc.string()),
          message: fc.oneof(fc.constant(''), fc.string()),
        })
      ),
      (data) => {
        const { unmount } = render(
          <LanguageProvider>
            <ContactForm />
          </LanguageProvider>
        );

        const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
        const submitButton = screen.getByRole('button', { name: 'Envoyer' });

        fireEvent.change(nameInput, { target: { value: data.name } });
        fireEvent.change(emailInput, { target: { value: data.email } });
        fireEvent.change(messageInput, { target: { value: data.message } });

        fireEvent.click(submitButton);

        const hasErrors =
          !data.name.trim() || !data.email.trim() || !data.message.trim() || !data.email.includes('@');

        if (hasErrors) {
          // Should show at least one error
          const errorElements = screen.queryAllByText(/requis|invalide/i);
          expect(errorElements.length).toBeGreaterThan(0);
        }

        unmount();
      }
    );
  });

  it('should validate email format consistently', () => {
    fc.assert(
      fc.property(fc.string(), (email) => {
        const { unmount } = render(
          <LanguageProvider>
            <ContactForm />
          </LanguageProvider>
        );

        const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
        const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
        const submitButton = screen.getByRole('button', { name: 'Envoyer' });

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });

        fireEvent.click(submitButton);

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail && email.trim()) {
          const errorElements = screen.queryAllByText(/invalide/i);
          expect(errorElements.length).toBeGreaterThan(0);
        }

        unmount();
      })
    );
  });

  it('should clear form fields after successful submission', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          email: fc.emailAddress(),
          message: fc.string({ minLength: 1 }),
        })
      ),
      async (data) => {
        const { unmount } = render(
          <LanguageProvider>
            <ContactForm />
          </LanguageProvider>
        );

        const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
        const submitButton = screen.getByRole('button', { name: 'Envoyer' });

        fireEvent.change(nameInput, { target: { value: data.name } });
        fireEvent.change(emailInput, { target: { value: data.email } });
        fireEvent.change(messageInput, { target: { value: data.message } });

        fireEvent.click(submitButton);

        await waitFor(() => {
          expect(nameInput.value).toBe('');
          expect(emailInput.value).toBe('');
          expect(messageInput.value).toBe('');
        });

        unmount();
      }
    );
  });

  it('should maintain form state consistency during user input', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string(),
          email: fc.string(),
          projectType: fc.oneof(
            fc.constant(''),
            fc.constant('web'),
            fc.constant('app'),
            fc.constant('ecommerce'),
            fc.constant('other')
          ),
          budget: fc.oneof(
            fc.constant(''),
            fc.constant('<1000'),
            fc.constant('1000-5000'),
            fc.constant('5000-10000'),
            fc.constant('>10000')
          ),
          message: fc.string(),
        })
      ),
      (data) => {
        const { unmount } = render(
          <LanguageProvider>
            <ContactForm />
          </LanguageProvider>
        );

        const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;

        fireEvent.change(nameInput, { target: { value: data.name } });
        fireEvent.change(emailInput, { target: { value: data.email } });
        fireEvent.change(messageInput, { target: { value: data.message } });

        // Verify form state matches input
        expect(nameInput.value).toBe(data.name);
        expect(emailInput.value).toBe(data.email);
        expect(messageInput.value).toBe(data.message);

        unmount();
      }
    );
  });
});
