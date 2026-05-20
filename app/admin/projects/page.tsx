'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import Link from 'next/link';

export default function AdminProjectsPage() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: language === 'fr' ? 'Portfolio V2' : 'Portfolio V2',
      status: 'En cours',
      statusEn: 'In Progress',
      progress: 75,
    },
    {
      id: 2,
      title: language === 'fr' ? 'Application E-commerce' : 'E-commerce App',
      status: 'Complété',
      statusEn: 'Completed',
      progress: 100,
    },
    {
      id: 3,
      title: language === 'fr' ? 'Système IoT' : 'IoT System',
      status: 'Planifié',
      statusEn: 'Planned',
      progress: 20,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-8"
          >
            <span>←</span>
            {language === 'fr' ? 'Retour au dashboard' : 'Back to dashboard'}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Gestion des projets' : 'Project Management'}
            </h1>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              {language === 'fr' ? '+ Nouveau projet' : '+ New project'}
            </button>
          </motion.div>

          {/* Projects List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {language === 'fr' ? project.status : project.statusEn}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-semibold transition-colors">
                      {language === 'fr' ? 'Éditer' : 'Edit'}
                    </button>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-semibold transition-colors">
                      {language === 'fr' ? 'Supprimer' : 'Delete'}
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {project.progress}% {language === 'fr' ? 'complété' : 'completed'}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center"
          >
            <p className="text-blue-800 dark:text-blue-200">
              {language === 'fr'
                ? '🚀 Fonctionnalités complètes à venir avec Supabase et Prisma'
                : '🚀 Full features coming with Supabase and Prisma'}
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
