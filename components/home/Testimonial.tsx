'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function Testimonial() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-6 italic">
            "{language === 'fr'
              ? 'Rosaire a livré une plateforme exceptionnelle. Son service était professionnel, réactif et dépassait nos attentes. Je recommande vivement ses services.'
              : 'Rosaire delivered an exceptional platform. His service was professional, responsive, and exceeded our expectations. I highly recommend his services.'}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                {language === 'fr' ? 'Jean Dupont' : 'John Doe'}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {language === 'fr' ? 'PDG, Entreprise XYZ' : 'CEO, Company XYZ'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
