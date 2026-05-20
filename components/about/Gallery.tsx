'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { language } = useLanguage();

  const photos = [
    { id: 1, title: language === 'fr' ? 'En train de coder' : 'Coding', emoji: '💻' },
    { id: 2, title: language === 'fr' ? 'Événement tech' : 'Tech event', emoji: '🎤' },
    { id: 3, title: language === 'fr' ? 'Collaboration' : 'Collaboration', emoji: '👥' },
    { id: 4, title: language === 'fr' ? 'Innovation' : 'Innovation', emoji: '🚀' },
    { id: 5, title: language === 'fr' ? 'Apprentissage' : 'Learning', emoji: '📚' },
    { id: 6, title: language === 'fr' ? 'Succès' : 'Success', emoji: '🏆' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Galerie' : 'Gallery'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Moments professionnels et réalisations'
              : 'Professional moments and achievements'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photos.map((photo) => (
            <motion.div key={photo.id} variants={itemVariants}>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{photo.emoji}</div>
                  <p className="text-white font-semibold">{photo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
