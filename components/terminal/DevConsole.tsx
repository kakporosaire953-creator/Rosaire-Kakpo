'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/providers';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

const COMMANDS = {
  help: {
    fr: 'Commandes disponibles: help, projects, skills, contact, about, clear, easter',
    en: 'Available commands: help, projects, skills, contact, about, clear, easter',
  },
  projects: {
    fr: 'Mes projets: Portfolio IA, Applications Web, Solutions IoT, Outils IA',
    en: 'My projects: AI Portfolio, Web Apps, IoT Solutions, AI Tools',
  },
  skills: {
    fr: 'Compétences: React, Next.js, TypeScript, Node.js, Python, IA/ML, Docker',
    en: 'Skills: React, Next.js, TypeScript, Node.js, Python, AI/ML, Docker',
  },
  contact: {
    fr: 'Contact: email@rosairekakpo.com | LinkedIn | GitHub | WhatsApp',
    en: 'Contact: email@rosairekakpo.com | LinkedIn | GitHub | WhatsApp',
  },
  about: {
    fr: 'Développeur full-stack passionné par l\'IA, basé à Cotonou, Bénin',
    en: 'Full-stack developer passionate about AI, based in Cotonou, Benin',
  },
  easter: {
    fr: '🎉 Vous avez trouvé un easter egg! Bravo! 🎉',
    en: '🎉 You found an easter egg! Congrats! 🎉',
  },
};

export default function DevConsole() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: language === 'fr' ? 'Bienvenue dans la console Rosaire' : 'Welcome to Rosaire Console',
    },
    {
      type: 'output',
      content: language === 'fr' ? 'Tapez "help" pour les commandes' : 'Type "help" for commands',
    },
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();

    setLines((prev) => [...prev, { type: 'input', content: `$ ${command}` }]);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const response = COMMANDS[cmd as keyof typeof COMMANDS];

    if (response) {
      setLines((prev) => [
        ...prev,
        {
          type: cmd === 'easter' ? 'success' : 'output',
          content: response[language as 'fr' | 'en'],
        },
      ]);
    } else if (cmd === '') {
      // Empty command, do nothing
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: 'error',
          content: `Commande inconnue: ${command}`,
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      {/* Terminal Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-slate-900 text-green-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40 font-mono text-xl border border-green-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        &gt;_
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 w-96 h-[500px] bg-slate-900 text-green-400 rounded-lg shadow-2xl border border-green-400 flex flex-col z-40 font-mono"
          >
            {/* Header */}
            <div className="bg-slate-800 border-b border-green-400 p-3 flex justify-between items-center rounded-t-lg">
              <span className="text-sm">rosaire@portfolio:~$</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-green-400 hover:text-red-400 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${
                    line.type === 'input'
                      ? 'text-green-400'
                      : line.type === 'error'
                      ? 'text-red-400'
                      : line.type === 'success'
                      ? 'text-yellow-400'
                      : 'text-green-300'
                  }`}
                >
                  {line.type === 'input' && <span>{line.content}</span>}
                  {line.type !== 'input' && <span>{line.content}</span>}
                </motion.div>
              ))}
              <div ref={terminalRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-green-400 p-3 flex items-center gap-2"
            >
              <span className="text-green-400">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="help"
                className="flex-1 bg-transparent text-green-400 placeholder-green-700 focus:outline-none"
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
