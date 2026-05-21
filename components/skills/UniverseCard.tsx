'use client';

import { Universe } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Smartphone, ShoppingCart, Cpu, Server } from 'lucide-react';

interface UniverseCardProps {
  universe: Universe;
  language: 'fr' | 'en';
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Server: <Server className="w-8 h-8" />,
};

export default function UniverseCard({ universe, language }: UniverseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {universe.name}
                </h3>
                <p className="text-blue-100">{universe.description}</p>
              </div>
              <div className="text-white" style={{ color: 'var(--accent-secondary)' }}>
                {iconMap[universe.icon] || <Globe className="w-8 h-8" />}
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 border-t border-slate-200 dark:border-slate-700"
            >
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'fr' ? 'Technologies' : 'Technologies'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {universe.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'fr' ? 'Cas d\'usage' : 'Use cases'}
                </h4>
                <ul className="space-y-2">
                  {universe.useCases.map((useCase, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                        •
                      </span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Footer */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-medium text-sm">
            {isExpanded
              ? language === 'fr'
                ? 'Masquer'
                : 'Hide'
              : language === 'fr'
              ? 'Afficher plus'
              : 'Show more'}
          </div>
        </div>
      </button>
    </motion.div>
  );
}
