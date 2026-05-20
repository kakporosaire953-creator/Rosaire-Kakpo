'use client';

import { useLanguage } from '@/app/providers';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function ContactMethods() {
  const { language } = useLanguage();

  const methods = [
    {
      icon: '💬',
      label: language === 'fr' ? 'WhatsApp' : 'WhatsApp',
      href: CONTACT_INFO.social.whatsapp,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    },
    {
      icon: '✉️',
      label: language === 'fr' ? 'Email' : 'Email',
      href: `mailto:${CONTACT_INFO.email}`,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: CONTACT_INFO.social.linkedin,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      href: CONTACT_INFO.social.github,
      color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
        {language === 'fr' ? 'Autres moyens de contact' : 'Other ways to reach me'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {methods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`${method.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}
          >
            <div className="text-4xl mb-3">{method.icon}</div>
            <p className="font-semibold">{method.label}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
