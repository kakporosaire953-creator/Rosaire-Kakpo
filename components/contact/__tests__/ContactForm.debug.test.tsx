import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import ContactForm from '../ContactForm';
import { ReactNode } from 'react';
import { createContext } from 'react';

const MockLanguageContext = createContext({ language: 'fr' });
const MockLanguageProvider = ({ children }: { children: ReactNode }) => (
  <MockLanguageContext.Provider value={{ language: 'fr' }}>
    {children}
  </MockLanguageContext.Provider>
);

jest.mock('@/app/providers', () => ({
  useLanguage: () => ({ language: 'fr' }),
  useTheme: () => ({ theme: 'light' }),
}));

describe('Debug ContactForm', () => {
  afterEach(cleanup);

  it('debugs email with !', async () => {
    const { container } = render(
      <MockLanguageProvider>
        <ContactForm />
      </MockLanguageProvider>
    );

    const nameInput = screen.getByPlaceholderText('Votre nom') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('votre@email.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Décrivez votre projet...') as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: 'Envoyer' });

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: '!' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    console.log('--- Before Submit ---');
    console.log('DOM HTML:', container.innerHTML);

    fireEvent.click(submitButton);

    console.log('--- Immediately After Submit ---');
    console.log('DOM HTML:', container.innerHTML);

    try {
      await waitFor(() => {
        const errors = screen.queryAllByText(/requis|invalide/i);
        console.log('Inside waitFor, errors count:', errors.length);
        expect(errors.length).toBeGreaterThan(0);
      }, { timeout: 2000 });
    } catch (e) {
      console.log('--- Timeout HTML ---');
      console.log('DOM HTML:', container.innerHTML);
      throw e;
    }
  });
});
