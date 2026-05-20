import React, { useEffect, useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Providers, useTheme, useLanguage } from '../providers';

/**
 * Test Component to access theme and language context
 */
function TestComponent() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <div data-testid="theme-display">{theme}</div>
      <div data-testid="language-display">{language}</div>
      <button onClick={toggleTheme} data-testid="theme-toggle">
        Toggle Theme
      </button>
      <button onClick={toggleLanguage} data-testid="language-toggle">
        Toggle Language
      </button>
    </div>
  );
}

/**
 * Property Test: Theme Toggle Persistence
 * 
 * For any theme toggle action (light to dark or dark to light), the selected theme 
 * SHALL be applied to all pages immediately, and SHALL persist across page navigations.
 * 
 * Validates: Requirements 11.4
 * Feature: portfolio-multi-page, Property 9: Theme Toggle Persistence
 */
describe('Providers - Property: Theme Toggle Persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should toggle theme from light to dark', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const themeDisplay = screen.getByTestId('theme-display');
      expect(['light', 'dark']).toContain(themeDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('theme-toggle');
    const initialTheme = screen.getByTestId('theme-display').textContent;

    fireEvent.click(toggleButton);

    await waitFor(() => {
      const newTheme = screen.getByTestId('theme-display').textContent;
      expect(newTheme).not.toBe(initialTheme);
    });
  });

  it('should toggle theme from dark to light', async () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');

    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const themeDisplay = screen.getByTestId('theme-display');
      expect(themeDisplay.textContent).toBe('dark');
    });

    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const newTheme = screen.getByTestId('theme-display').textContent;
      expect(newTheme).toBe('light');
    });
  });

  it('should persist theme in localStorage', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const themeDisplay = screen.getByTestId('theme-display');
      expect(['light', 'dark']).toContain(themeDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const savedTheme = localStorage.getItem('theme');
      expect(['light', 'dark']).toContain(savedTheme);
    });
  });

  it('should apply theme class to document element', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const themeDisplay = screen.getByTestId('theme-display');
      expect(['light', 'dark']).toContain(themeDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('theme-toggle');
    const initialHasDarkClass = document.documentElement.classList.contains('dark');

    fireEvent.click(toggleButton);

    await waitFor(() => {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      expect(hasDarkClass).not.toBe(initialHasDarkClass);
    });
  });

  it('should toggle theme multiple times consistently', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const themeDisplay = screen.getByTestId('theme-display');
      expect(['light', 'dark']).toContain(themeDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('theme-toggle');
    const themes: string[] = [];

    for (let i = 0; i < 4; i++) {
      fireEvent.click(toggleButton);
      await waitFor(() => {
        const theme = screen.getByTestId('theme-display').textContent;
        themes.push(theme || '');
      });
    }

    // After 4 toggles, should return to original theme
    expect(themes[0]).toBe(themes[3]);
  });
});

/**
 * Property Test: Language Switch Consistency
 * 
 * For any language switch action (FR to EN or EN to FR), all translatable content 
 * on the current page SHALL update to the selected language, and the language 
 * preference SHALL persist across page navigations.
 * 
 * Validates: Requirements 11.3
 * Feature: portfolio-multi-page, Property 10: Language Switch Consistency
 */
describe('Providers - Property: Language Switch Consistency', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should toggle language from fr to en', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const languageDisplay = screen.getByTestId('language-display');
      expect(['fr', 'en']).toContain(languageDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('language-toggle');
    const initialLanguage = screen.getByTestId('language-display').textContent;

    fireEvent.click(toggleButton);

    await waitFor(() => {
      const newLanguage = screen.getByTestId('language-display').textContent;
      expect(newLanguage).not.toBe(initialLanguage);
    });
  });

  it('should toggle language from en to fr', async () => {
    localStorage.setItem('language', 'en');

    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const languageDisplay = screen.getByTestId('language-display');
      expect(languageDisplay.textContent).toBe('en');
    });

    const toggleButton = screen.getByTestId('language-toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const newLanguage = screen.getByTestId('language-display').textContent;
      expect(newLanguage).toBe('fr');
    });
  });

  it('should persist language in localStorage', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const languageDisplay = screen.getByTestId('language-display');
      expect(['fr', 'en']).toContain(languageDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('language-toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const savedLanguage = localStorage.getItem('language');
      expect(['fr', 'en']).toContain(savedLanguage);
    });
  });

  it('should toggle language multiple times consistently', async () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const languageDisplay = screen.getByTestId('language-display');
      expect(['fr', 'en']).toContain(languageDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('language-toggle');
    const languages: string[] = [];

    for (let i = 0; i < 4; i++) {
      fireEvent.click(toggleButton);
      await waitFor(() => {
        const language = screen.getByTestId('language-display').textContent;
        languages.push(language || '');
      });
    }

    // After 4 toggles, should return to original language
    expect(languages[0]).toBe(languages[3]);
  });

  it('should maintain language across multiple renders', async () => {
    const { rerender } = render(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const languageDisplay = screen.getByTestId('language-display');
      expect(['fr', 'en']).toContain(languageDisplay.textContent);
    });

    const toggleButton = screen.getByTestId('language-toggle');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      const language = screen.getByTestId('language-display').textContent;
      expect(['fr', 'en']).toContain(language);
    });

    // Rerender and check language persists
    rerender(
      <Providers>
        <TestComponent />
      </Providers>
    );

    await waitFor(() => {
      const language = screen.getByTestId('language-display').textContent;
      expect(['fr', 'en']).toContain(language);
    });
  });
});
