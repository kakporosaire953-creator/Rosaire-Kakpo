'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';

export default function NowPage() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Ce que je fais maintenant' : 'What I\'m doing now'}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {language === 'fr'
                ? 'Mes projets actuels et apprentissages'
                : 'My current projects and learnings'}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Current Projects */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '🚀 Projets en cours' : '🚀 Current Projects'}
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Portfolio V2 Premium avec IA intégrée'
                      : 'Portfolio V2 Premium with integrated AI'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Intégration de Three.js pour visualisations 3D'
                      : 'Three.js integration for 3D visualizations'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Dashboard Admin avec Supabase et Prisma'
                      : 'Admin Dashboard with Supabase and Prisma'}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Learning */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '📚 En train d\'apprendre' : '📚 Currently Learning'}
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Advanced Three.js et React Three Fiber'
                      : 'Advanced Three.js and React Three Fiber'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Optimisation de performance et Web Vitals'
                      : 'Performance optimization and Web Vitals'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                  <span>
                    {language === 'fr'
                      ? 'Architecture scalable avec Supabase'
                      : 'Scalable architecture with Supabase'}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Focus */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '🎯 Focus' : '🎯 Focus'}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {language === 'fr'
                  ? 'Créer des expériences web exceptionnelles avec IA et 3D'
                  : 'Creating exceptional web experiences with AI and 3D'}
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                {language === 'fr'
                  ? 'Minimalisme premium + Intelligence = Portfolio qui se démarque'
                  : 'Premium minimalism + Intelligence = Portfolio that stands out'}
              </p>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              variants={itemVariants}
              className="text-center text-sm text-slate-500 dark:text-slate-400 mt-12"
            >
              {language === 'fr'
                ? 'Dernière mise à jour: 21 Mai 2026'
                : 'Last updated: May 21, 2026'}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
