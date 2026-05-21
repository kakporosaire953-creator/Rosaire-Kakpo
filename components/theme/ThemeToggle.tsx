import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme-rk') as 'light' | 'dark' | null;
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved || prefers;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme-rk', next);
    if (!document.startViewTransition) {
      document.documentElement.setAttribute('data-theme', next);
      return;
    }
    document.startViewTransition(() => {
      document.documentElement.setAttribute('data-theme', next);
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer de thème"
      className="p-2 rounded-xl border transition-all hover:scale-110"
      style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />}
    </button>
  );
}
