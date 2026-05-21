'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';

interface Stat {
  label: string;
  labelEn: string;
  value: string | number;
  icon: string;
  color: string;
}

const STATS: Stat[] = [
  {
    label: 'Heures de code',
    labelEn: 'Hours of Code',
    value: '3000+',
    icon: '⌨️',
    color: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Projets terminés',
    labelEn: 'Projects Completed',
    value: '15+',
    icon: '🚀',
    color: 'from-purple-500 to-purple-600',
  },
  {
    label: 'Technologies',
    labelEn: 'Technologies',
    value: '20+',
    icon: '🛠️',
    color: 'from-green-500 to-green-600',
  },
  {
    label: 'Commits GitHub',
    labelEn: 'GitHub Commits',
    value: '1500+',
    icon: '📊',
    color: 'from-orange-500 to-orange-600',
  },
  {
    label: 'Années d\'expérience',
    labelEn: 'Years of Experience',
    value: '3+',
    icon: '📅',
    color: 'from-pink-500 to-pink-600',
  },
  {
    label: 'Clients satisfaits',
    labelEn: 'Happy Clients',
    value: '10+',
    icon: '😊',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function BuildJourney() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {language === 'fr' ? 'Mon Parcours' : 'My Journey'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Statistiques de mon évolution en tant que développeur'
              : 'Statistics of my evolution as a developer'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${stat.color} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm opacity-90">
                  {language === 'fr' ? stat.label : stat.labelEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            {language === 'fr' ? 'Jalons importants' : 'Key Milestones'}
          </h3>

          <div className="space-y-6">
            {[
              {
                year: '2019',
                title: language === 'fr' ? 'Début du voyage' : 'Journey Begins',
                desc: language === 'fr' ? 'Premiers pas en programmation' : 'First steps in programming',
              },
              {
                year: '2021',
                title: language === 'fr' ? 'Full-Stack' : 'Full-Stack',
                desc: language === 'fr' ? 'Maîtrise du full-stack' : 'Mastered full-stack development',
              },
              {
                year: '2023',
                title: language === 'fr' ? 'IA & ML' : 'AI & ML',
                desc: language === 'fr' ? 'Spécialisation en IA' : 'Specialized in AI & ML',
              },
              {
                year: '2024',
                title: language === 'fr' ? 'Entrepreneur' : 'Entrepreneur',
                desc: language === 'fr' ? 'Création de solutions innovantes' : 'Creating innovative solutions',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  {index < 3 && <div className="w-1 h-12 bg-blue-600 mt-2" />}
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
