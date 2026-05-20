'use client';

import { useLanguage } from '@/app/providers';
import AvailabilityBadge from '@/components/shared/AvailabilityBadge';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
          <AvailabilityBadge />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight"
          variants={itemVariants}
        >
          {language === 'fr'
            ? 'Développeur Full Stack'
            : 'Full Stack Developer'}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {language === 'fr'
            ? 'Je transforme vos idées en solutions numériques innovantes. Web, Mobile, E-commerce, IoT et Backend.'
            : 'I transform your ideas into innovative digital solutions. Web, Mobile, E-commerce, IoT and Backend.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <a
            href="/projets"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Me contacter' : 'Contact me'}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
