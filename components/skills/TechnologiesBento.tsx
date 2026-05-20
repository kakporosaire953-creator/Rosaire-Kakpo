'use client';

import { useLanguage } from '@/app/providers';
import { UNIVERSES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TechnologiesBento() {
  const { language } = useLanguage();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  // Flatten all technologies
  const allTechs = Array.from(
    new Set(UNIVERSES.flatMap((u) => u.technologies))
  );

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Stack Technologique' : 'Technology Stack'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Les technologies que je maîtrise'
              : 'The technologies I master'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allTechs.map((tech) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              className="relative"
            >
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 cursor-pointer h-24 flex items-center justify-center text-center">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {tech}
                  </p>
                  {hoveredTech === tech && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-blue-600 dark:text-blue-400 mt-1"
                    >
                      {language === 'fr' ? 'Expert' : 'Expert'}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
