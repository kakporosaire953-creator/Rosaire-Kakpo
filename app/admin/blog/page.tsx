'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import Link from 'next/link';

export default function AdminBlogPage() {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: language === 'fr' ? 'Portfolio avec IA' : 'Portfolio with AI',
      status: 'Publié',
      statusEn: 'Published',
      date: '2026-05-21',
    },
    {
      id: 2,
      title: language === 'fr' ? 'Three.js pour débutants' : 'Three.js for Beginners',
      status: 'Brouillon',
      statusEn: 'Draft',
      date: '2026-05-20',
    },
    {
      id: 3,
      title: language === 'fr' ? 'Optimisation Next.js' : 'Next.js Optimization',
      status: 'Planifié',
      statusEn: 'Scheduled',
      date: '2026-05-25',
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
              {language === 'fr' ? 'Gestion du blog' : 'Blog Management'}
            </h1>
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
              {language === 'fr' ? '+ Nouvel article' : '+ New article'}
            </button>
          </motion.div>

          {/* Articles List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          article.status === 'Publié' || article.status === 'Published'
                            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            : article.status === 'Brouillon' || article.status === 'Draft'
                            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        }`}
                      >
                        {language === 'fr' ? article.status : article.statusEn}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(article.date).toLocaleDateString(
                          language === 'fr' ? 'fr-FR' : 'en-US'
                        )}
                      </span>
                    </div>
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
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg text-center"
          >
            <p className="text-purple-800 dark:text-purple-200">
              {language === 'fr'
                ? '📝 Éditeur complet à venir avec Supabase et Prisma'
                : '📝 Full editor coming with Supabase and Prisma'}
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
