'use client';

import { useLanguage } from '@/app/providers';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const { language } = useLanguage();

  const infoItems = [
    {
      icon: '📍',
      label: language === 'fr' ? 'Localisation' : 'Location',
      value: CONTACT_INFO.location,
    },
    {
      icon: '⏱️',
      label: language === 'fr' ? 'Délai de réponse' : 'Response time',
      value: CONTACT_INFO.responseTime,
    },
    {
      icon: '✅',
      label: language === 'fr' ? 'Disponibilité' : 'Availability',
      value: CONTACT_INFO.availability,
    },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
        {language === 'fr' ? 'Informations pratiques' : 'Practical information'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
            <div className="text-3xl flex-shrink-0">{item.icon}</div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white mt-1">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
