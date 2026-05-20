'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { THEMES, type ThemeMode, applyTheme } from '@/lib/themes';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('dark');

  const handleThemeChange = (theme: ThemeMode) => {
    applyTheme(theme);
    setCurrentTheme(theme);
    setIsOpen(false);
  };

  const themeIcons: Record<ThemeMode, string> = {
    light: '☀️',
    dark: '🌙',
    cyberpunk: '⚡',
    glassmorphism: '🔮',
    matrix: '💚',
  };

  return (
    <div className="relative">
      {/* Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Changer de thème"
      >
        <span className="text-2xl">{themeIcons[currentTheme]}</span>
      </motion.button>

      {/* Theme Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-12 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-50"
          >
            <div className="space-y-1">
              {(Object.keys(THEMES) as ThemeMode[]).map((theme) => (
                <motion.button
                  key={theme}
                  onClick={() => handleThemeChange(theme)}
                  className={`w-full px-4 py-2 text-left rounded-lg transition-colors flex items-center gap-2 ${
                    currentTheme === theme
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span>{themeIcons[theme]}</span>
                  <span className="capitalize">{THEMES[theme].name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
