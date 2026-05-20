'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import Link from 'next/link';

export default function AdminDashboard() {
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

  const stats = [
    {
      label: language === 'fr' ? 'Projets' : 'Projects',
      value: '12',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: language === 'fr' ? 'Articles' : 'Articles',
      value: '8',
      icon: '📝',
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: language === 'fr' ? 'Messages' : 'Messages',
      value: '24',
      icon: '💬',
      color: 'from-green-500 to-green-600',
    },
    {
      label: language === 'fr' ? 'Visiteurs' : 'Visitors',
      value: '1.2K',
      icon: '👥',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Dashboard Admin' : 'Admin Dashboard'}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {language === 'fr'
                ? 'Gérez votre portfolio et votre contenu'
                : 'Manage your portfolio and content'}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg shadow-lg text-white`}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-sm opacity-90">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Management Sections */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Projects Management */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '📊 Projets' : '📊 Projects'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {language === 'fr'
                  ? 'Gérez vos projets et portfolios'
                  : 'Manage your projects and portfolios'}
              </p>
              <Link
                href="/admin/projects"
                className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Gérer les projets' : 'Manage projects'}
              </Link>
            </motion.div>

            {/* Blog Management */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '📝 Blog' : '📝 Blog'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {language === 'fr'
                  ? 'Créez et modifiez vos articles'
                  : 'Create and edit your articles'}
              </p>
              <Link
                href="/admin/blog"
                className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Gérer le blog' : 'Manage blog'}
              </Link>
            </motion.div>

            {/* Messages Management */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '💬 Messages' : '💬 Messages'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {language === 'fr'
                  ? 'Consultez les messages de contact'
                  : 'View contact messages'}
              </p>
              <Link
                href="/admin/messages"
                className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Voir les messages' : 'View messages'}
              </Link>
            </motion.div>

            {/* Analytics */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {language === 'fr' ? '📈 Analytics' : '📈 Analytics'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {language === 'fr'
                  ? 'Consultez vos statistiques'
                  : 'View your statistics'}
              </p>
              <Link
                href="/admin/analytics"
                className="inline-block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Voir les stats' : 'View stats'}
              </Link>
            </motion.div>
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
          >
            <p className="text-yellow-800 dark:text-yellow-200">
              {language === 'fr'
                ? '⚠️ Le dashboard admin est en développement. Les fonctionnalités seront disponibles prochainement.'
                : '⚠️ The admin dashboard is under development. Features will be available soon.'}
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
