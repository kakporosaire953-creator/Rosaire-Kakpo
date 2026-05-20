'use client';

import Link from 'next/link';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';

interface ProjectNavigationProps {
  previousProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Project */}
          {previousProject ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/projets/${previousProject.slug}`}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    ← {language === 'fr' ? 'Projet précédent' : 'Previous project'}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {previousProject.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          {/* Next Project */}
          {nextProject ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-right"
            >
              <Link href={`/projets/${nextProject.slug}`}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {language === 'fr' ? 'Projet suivant' : 'Next project'} →
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {nextProject.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
