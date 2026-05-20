'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/providers';
import { UNIVERSES } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function UniversesPreview() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Mes univers' : 'My universes'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Découvrez les domaines dans lesquels j\'excelle'
              : 'Discover the domains where I excel'}
          </p>
        </motion.div>

        {/* Universes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {UNIVERSES.slice(0, 3).map((universe) => (
            <motion.div key={universe.id} variants={itemVariants}>
              <Link href="/competences">
                <div className="h-full p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-slate-200 dark:border-slate-700">
                  <div className="text-4xl mb-4">{universe.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {universe.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {universe.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {universe.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/competences"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Voir tous les univers' : 'View all universes'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
