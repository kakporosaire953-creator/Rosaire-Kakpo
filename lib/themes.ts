export type ThemeMode = 'light' | 'dark' | 'cyberpunk' | 'glassmorphism' | 'matrix';

export const THEMES = {
  light: {
    name: 'Light',
    colors: {
      bg: '#ffffff',
      text: '#000000',
      accent: '#3b82f6',
      secondary: '#6366f1',
    },
    css: `
      :root {
        --bg-primary: #ffffff;
        --bg-secondary: #f3f4f6;
        --text-primary: #000000;
        --text-secondary: #6b7280;
        --accent: #3b82f6;
        --accent-light: #dbeafe;
      }
    `,
  },
  dark: {
    name: 'Dark',
    colors: {
      bg: '#0f172a',
      text: '#ffffff',
      accent: '#3b82f6',
      secondary: '#6366f1',
    },
    css: `
      :root {
        --bg-primary: #0f172a;
        --bg-secondary: #1e293b;
        --text-primary: #ffffff;
        --text-secondary: #cbd5e1;
        --accent: #3b82f6;
        --accent-light: #1e3a8a;
      }
    `,
  },
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      bg: '#0a0e27',
      text: '#00ff88',
      accent: '#ff006e',
      secondary: '#00d9ff',
    },
    css: `
      :root {
        --bg-primary: #0a0e27;
        --bg-secondary: #1a1f3a;
        --text-primary: #00ff88;
        --text-secondary: #00d9ff;
        --accent: #ff006e;
        --accent-light: #ff1493;
      }
      * {
        text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
      }
    `,
  },
  glassmorphism: {
    name: 'Glassmorphism',
    colors: {
      bg: 'rgba(255, 255, 255, 0.1)',
      text: '#ffffff',
      accent: '#60a5fa',
      secondary: '#a78bfa',
    },
    css: `
      :root {
        --bg-primary: rgba(255, 255, 255, 0.1);
        --bg-secondary: rgba(255, 255, 255, 0.05);
        --text-primary: #ffffff;
        --text-secondary: #e0e7ff;
        --accent: #60a5fa;
        --accent-light: #93c5fd;
      }
      * {
        backdrop-filter: blur(10px);
      }
    `,
  },
  matrix: {
    name: 'Matrix',
    colors: {
      bg: '#000000',
      text: '#00ff00',
      accent: '#00ff00',
      secondary: '#00aa00',
    },
    css: `
      :root {
        --bg-primary: #000000;
        --bg-secondary: #001100;
        --text-primary: #00ff00;
        --text-secondary: #00cc00;
        --accent: #00ff00;
        --accent-light: #00aa00;
      }
      * {
        font-family: 'Courier New', monospace;
        text-shadow: 0 0 10px #00ff00;
        letter-spacing: 2px;
      }
    `,
  },
};

export function applyTheme(theme: ThemeMode) {
  const themeConfig = THEMES[theme];
  if (!themeConfig) return;

  // Apply CSS variables
  const style = document.createElement('style');
  style.textContent = themeConfig.css;
  document.head.appendChild(style);

  // Store preference
  localStorage.setItem('theme-mode', theme);
}

export function getTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem('theme-mode') as ThemeMode) || 'dark';
}
