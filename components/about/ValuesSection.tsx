'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function ValuesSection() {
  const { language } = useLanguage();

  const values = [
    {
      icon: '🎯',
      titleFr: 'Qualité',
      titleEn: 'Quality',
      descFr: 'Je m\'engage à livrer du code propre et performant',
      descEn: 'I commit to delivering clean and performant code',
    },
    {
      icon: '⏰',
      titleFr: 'Ponctualité',
      titleEn: 'Punctuality',
      descFr: 'Les délais sont respectés et les livrables sont à temps',
      descEn: 'Deadlines are met and deliverables are on time',
    },
    {
      icon: '💬',
      titleFr: 'Communication',
      titleEn: 'Communication',
      descFr: 'Une communication claire et régulière avec les clients',
      descEn: 'Clear and regular communication with clients',
    },
    {
      icon: '🚀',
      titleFr: 'Innovation',
      titleEn: 'Innovation',
      descFr: 'Je reste à jour avec les dernières technologies',
      descEn: 'I stay up-to-date with the latest technologies',
    },
    {
      icon: '🤝',
      titleFr: 'Collaboration',
      titleEn: 'Collaboration',
      descFr: 'Je travaille efficacement en équipe',
      descEn: 'I work effectively in teams',
    },
    {
      icon: '📈',
      titleFr: 'Croissance',
      titleEn: 'Growth',
      descFr: 'L\'apprentissage continu est au cœur de ma pratique',
      descEn: 'Continuous learning is at the heart of my practice',
    },
  ];

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Mes valeurs' : 'My values'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Les principes qui guident mon travail'
              : 'The principles that guide my work'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'fr' ? value.titleFr : value.titleEn}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {language === 'fr' ? value.descFr : value.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
