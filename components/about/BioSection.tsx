'use client';

import { useLanguage } from '@/app/providers';
import { motion } from 'framer-motion';

export default function BioSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            {language === 'fr' ? 'Qui suis-je?' : 'Who am I?'}
          </h2>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Je suis Rosaire Kakpo, un développeur full stack passionné par la création de solutions numériques innovantes. Basé à Cotonou, Bénin, je transforme les idées en produits fonctionnels et performants.'
                : 'I am Rosaire Kakpo, a passionate full stack developer dedicated to creating innovative digital solutions. Based in Cotonou, Benin, I transform ideas into functional and high-performing products.'}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Avec une expertise en web, mobile, e-commerce, IoT et backend, je maîtrise l\'ensemble de la stack technologique moderne. Mon approche combine rigueur technique et créativité pour livrer des solutions qui dépassent les attentes.'
                : 'With expertise in web, mobile, e-commerce, IoT, and backend development, I master the entire modern technology stack. My approach combines technical rigor with creativity to deliver solutions that exceed expectations.'}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Je crois en l\'importance de la communication claire, de la livraison à temps et de la qualité du code. Chaque projet est une opportunité d\'apprendre et de créer quelque chose d\'exceptionnel.'
                : 'I believe in the importance of clear communication, timely delivery, and code quality. Every project is an opportunity to learn and create something exceptional.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
