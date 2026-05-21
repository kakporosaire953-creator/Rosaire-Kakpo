'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import Link from 'next/link';

export default function BlogPostPage() {
  const { language } = useLanguage();

  // Mock data - en production, récupérer depuis une base de données
  const post = {
    title: 'Construire un Portfolio avec IA intégrée',
    titleEn: 'Building a Portfolio with Integrated AI',
    date: '2026-05-21',
    category: 'IA',
    categoryEn: 'AI',
    readTime: 8,
    content: `
      <h2>Introduction</h2>
      <p>
        Dans cet article, nous allons explorer comment intégrer une IA dans votre portfolio
        pour créer une expérience utilisateur exceptionnelle.
      </p>

      <h2>Pourquoi l'IA dans un portfolio?</h2>
      <p>
        L'IA permet de créer des interactions intelligentes avec vos visiteurs. Un chatbot
        peut répondre aux questions sur vos compétences, vos projets et vos services.
      </p>

      <h2>Groq API</h2>
      <p>
        Groq offre une API rapide et fiable pour les modèles de langage. Voici comment l'intégrer:
      </p>

      <h2>Implémentation</h2>
      <p>
        Nous utilisons Next.js avec TypeScript pour créer un chatbot robuste et performant.
      </p>

      <h2>Conclusion</h2>
      <p>
        L'IA dans un portfolio est un excellent moyen de se démarquer et de montrer votre expertise.
      </p>
    `,
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
            >
              <span>←</span>
              {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                {language === 'fr' ? post.category : post.categoryEn}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {new Date(post.date).toLocaleDateString(
                  language === 'fr' ? 'fr-FR' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {post.readTime} {language === 'fr' ? 'min' : 'min'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? post.title : post.titleEn}
            </h1>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
              <p>
                {language === 'fr'
                  ? 'Dans cet article, nous allons explorer comment intégrer une IA dans votre portfolio pour créer une expérience utilisateur exceptionnelle.'
                  : 'In this article, we will explore how to integrate AI into your portfolio to create an exceptional user experience.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                {language === 'fr' ? 'Pourquoi l\'IA?' : 'Why AI?'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'L\'IA permet de créer des interactions intelligentes avec vos visiteurs. Un chatbot peut répondre aux questions sur vos compétences, vos projets et vos services.'
                  : 'AI enables intelligent interactions with your visitors. A chatbot can answer questions about your skills, projects and services.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                {language === 'fr' ? 'Groq API' : 'Groq API'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Groq offre une API rapide et fiable pour les modèles de langage. Voici comment l\'intégrer dans votre application Next.js.'
                  : 'Groq provides a fast and reliable API for language models. Here\'s how to integrate it into your Next.js application.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                {language === 'fr' ? 'Implémentation' : 'Implementation'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Nous utilisons Next.js avec TypeScript pour créer un chatbot robuste et performant.'
                  : 'We use Next.js with TypeScript to create a robust and performant chatbot.'}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                {language === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'L\'IA dans un portfolio est un excellent moyen de se démarquer et de montrer votre expertise.'
                  : 'AI in a portfolio is an excellent way to stand out and showcase your expertise.'}
              </p>
            </div>
          </motion.article>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Articles similaires' : 'Related articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Link
                  key={i}
                  href="/blog"
                  className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {language === 'fr' ? 'Article ' + i : 'Article ' + i}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {language === 'fr'
                      ? 'Découvrez cet article intéressant...'
                      : 'Discover this interesting article...'}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
