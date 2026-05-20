'use client';

import { useLanguage } from '@/app/providers';
import { TIMELINE_EVENTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Timeline() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Mon parcours' : 'My journey'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Formations, certifications et expériences marquantes'
              : 'Education, certifications and key experiences'}
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div key={event.id} variants={itemVariants}>
              <div className="flex gap-6">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {event.icon || '•'}
                  </div>
                  {index < TIMELINE_EVENTS.length - 1 && (
                    <div className="w-1 h-24 bg-blue-200 dark:bg-blue-900 mt-4"></div>
                  )}
                </div>

                {/* Event content */}
                <div className="flex-1 pb-8">
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === event.id ? null : event.id)
                    }
                    className="w-full text-left"
                  >
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {event.organization}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                          {event.date}
                        </span>
                      </div>

                      {/* Expanded content */}
                      {expandedId === event.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                        >
                          <p className="text-slate-600 dark:text-slate-400">
                            {event.description}
                          </p>
                        </motion.div>
                      )}

                      {/* Expand indicator */}
                      <div className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {expandedId === event.id
                          ? language === 'fr'
                            ? 'Masquer'
                            : 'Hide'
                          : language === 'fr'
                          ? 'Afficher plus'
                          : 'Show more'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
