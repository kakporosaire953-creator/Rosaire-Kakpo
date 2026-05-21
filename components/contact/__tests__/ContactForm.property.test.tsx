import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import ContactForm from '../ContactForm';
import fc from 'fast-check';
import { ReactNode } from 'react';
import { createContext } from 'react';

jest.setTimeout(30000); // Set 30 seconds timeout for this suite

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

describe('ContactForm - Property-Based Tests', () => {
  it('should validate that all required fields must be filled before submission', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.oneof(fc.constant(''), fc.string().map(s => s.replace(/[^\x20-\x7E]/g, ''))),
          email: fc.oneof(fc.constant(''), fc.string().map(s => s.replace(/[^\x20-\x7E]/g, '').replace(/\s/g, ''))),
          message: fc.oneof(fc.constant(''), fc.string().map(s => s.replace(/[^\x20-\x7E]/g, ''))),
        }),
        async (data) => {
          try {
            cleanup();
            render(
              <MockLanguageProvider>
                <ContactForm />
              </MockLanguageProvider>
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
              // Should show at least one error after state update
              await waitFor(() => {
                const errorElements = screen.queryAllByText(/requis|invalide/i);
                expect(errorElements.length).toBeGreaterThan(0);
              });
            }
          } catch (err) {
            console.log('FAILED DATA [required fields]:', JSON.stringify(data));
            throw err;
          }
        }
      ),
      { numRuns: 20 }
    );
  });

  it('should validate email format consistently', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string().map(s => s.replace(/[^\x20-\x7E]/g, '').replace(/\s/g, '')),
        async (email) => {
          try {
            cleanup();
            render(
              <MockLanguageProvider>
                <ContactForm />
              </MockLanguageProvider>
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

            if (!isValidEmail) {
              await waitFor(() => {
                const errorElements = screen.queryAllByText(/requis|invalide/i);
                expect(errorElements.length).toBeGreaterThan(0);
              });
            }
          } catch (err) {
            console.log('FAILED DATA [email format]:', JSON.stringify(email));
            throw err;
          }
        }
      ),
      { numRuns: 20 }
    );
  });

  it('should clear form fields after successful submission', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.string({ minLength: 1 }).map(s => s.replace(/[^\x20-\x7E]/g, '').trim()),
          email: fc.emailAddress(),
          message: fc.string({ minLength: 1 }).map(s => s.replace(/[^\x20-\x7E]/g, '').trim()),
        }),
        async (data) => {
          cleanup();
          render(
            <MockLanguageProvider>
              <ContactForm />
            </MockLanguageProvider>
          );

          const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
          const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
          const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
          const submitButton = screen.getByRole('button', { name: 'Envoyer' });

          fireEvent.change(nameInput, { target: { value: data.name } });
          fireEvent.change(emailInput, { target: { value: data.email } });
          fireEvent.change(messageInput, { target: { value: data.message } });

          fireEvent.click(submitButton);

          const isValid =
            data.name.trim().length > 0 &&
            data.message.trim().length > 0 &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

          if (isValid) {
            await waitFor(() => {
              expect(nameInput.value).toBe('');
              expect(emailInput.value).toBe('');
              expect(messageInput.value).toBe('');
            });
          } else {
            await waitFor(() => {
              expect(emailInput.value).toBe(data.email);
            });
          }
        }
      ),
      { numRuns: 20 }
    );
  });

  it('should maintain form state consistency during user input', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string().map(s => s.replace(/[^\x20-\x7E]/g, '')),
          email: fc.string().map(s => s.replace(/[^\x20-\x7E]/g, '').replace(/\s/g, '')),
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
          message: fc.string().map(s => s.replace(/[^\x20-\x7E]/g, '')),
        }),
        (data) => {
          cleanup();
          render(
            <MockLanguageProvider>
              <ContactForm />
            </MockLanguageProvider>
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
        }
      ),
      { numRuns: 20 }
    );
  });
});
