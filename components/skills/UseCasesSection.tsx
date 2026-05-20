'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function UseCasesSection() {
  const { language } = useLanguage();

  const useCases = [
    {
      titleFr: 'Plateformes SaaS',
      titleEn: 'SaaS Platforms',
      descFr: 'Applications web scalables avec authentification et paiement',
      descEn: 'Scalable web applications with authentication and payment',
      icon: '☁️',
    },
    {
      titleFr: 'E-commerce',
      titleEn: 'E-commerce',
      descFr: 'Boutiques en ligne avec gestion d\'inventaire et paiement',
      descEn: 'Online stores with inventory management and payment',
      icon: '🛒',
    },
    {
      titleFr: 'Applications Mobile',
      titleEn: 'Mobile Apps',
      descFr: 'Applications iOS/Android natives ou cross-platform',
      descEn: 'Native or cross-platform iOS/Android applications',
      icon: '📱',
    },
    {
      titleFr: 'Tableaux de Bord',
      titleEn: 'Dashboards',
      descFr: 'Interfaces analytiques avec visualisation de données',
      descEn: 'Analytical interfaces with data visualization',
      icon: '📊',
    },
    {
      titleFr: 'Systèmes IoT',
      titleEn: 'IoT Systems',
      descFr: 'Capteurs connectés et domotique intelligente',
      descEn: 'Connected sensors and smart home automation',
      icon: '🔌',
    },
    {
      titleFr: 'APIs Backend',
      titleEn: 'Backend APIs',
      descFr: 'Services backend robustes et scalables',
      descEn: 'Robust and scalable backend services',
      icon: '⚙️',
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
            {language === 'fr' ? 'Ce que je peux construire' : 'What I can build'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Cas d\'usage et solutions que je propose'
              : 'Use cases and solutions I offer'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'fr' ? useCase.titleFr : useCase.titleEn}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {language === 'fr' ? useCase.descFr : useCase.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
