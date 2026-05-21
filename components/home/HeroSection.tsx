'use client';

import { useLanguage } from '@/app/providers';
import AvailabilityBadge from '@/components/shared/AvailabilityBadge';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
          <AvailabilityBadge />
        </motion.div>

        {/* Profile Photo */}
        <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full p-1">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-6xl md:text-7xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight font-space-grotesk"
          variants={itemVariants}
        >
          {language === 'fr'
            ? 'Développeur Frontend'
            : 'Frontend Developer'}
        </motion.h1>

        {/* Subtitle with African Focus */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {language === 'fr'
            ? 'Je construis des solutions numériques innovantes pour le marché béninois et ouest-africain. Spécialisé en Web3, E-commerce, Mobile Money et applications modernes.'
            : 'I build innovative digital solutions for the Beninese and West African market. Specialized in Web3, E-commerce, Mobile Money, and modern applications.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
          <a
            href="/projets"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            {language === 'fr' ? 'Me contacter' : 'Contact me'}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 mb-16" variants={itemVariants}>
          <a
            href="https://github.com/kakporosaire953-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/rosaire-kakpo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-900 dark:text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/rosairekakpo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-blue-400 dark:hover:bg-blue-400 text-slate-900 dark:text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/22968812019"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-green-500 dark:hover:bg-green-500 text-slate-900 dark:text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
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
