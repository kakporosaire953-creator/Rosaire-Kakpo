'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function ProjectCTA() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {language === 'fr'
            ? 'Un projet similaire?'
            : 'A similar project?'}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {language === 'fr'
            ? 'Contactez-moi pour discuter de votre projet et voir comment je peux vous aider.'
            : 'Contact me to discuss your project and see how I can help.'}
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            {language === 'fr' ? 'Me contacter' : 'Contact me'}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
