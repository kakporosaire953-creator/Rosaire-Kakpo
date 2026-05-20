'use client';

import { useLanguage } from '@/app/providers';
import { FAQ_ITEMS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQAccordion() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
        {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
      </h2>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
            initial={false}
            animate={{ backgroundColor: expandedId === index ? 'rgba(59, 130, 246, 0.05)' : 'transparent' }}
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
            >
              <span className="font-semibold text-slate-900 dark:text-white">
                {language === 'fr' ? item.question : item.questionEn}
              </span>
              <motion.svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: expandedId === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: expandedId === index ? 'auto' : 0,
                opacity: expandedId === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-400">
                  {language === 'fr' ? item.answer : item.answerEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
