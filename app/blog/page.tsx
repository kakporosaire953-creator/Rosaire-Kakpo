'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  category: string;
  categoryEn: string;
  slug: string;
  readTime: number;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Construire un Portfolio avec IA intégrée',
    titleEn: 'Building a Portfolio with Integrated AI',
    excerpt: 'Comment intégrer Groq et LangChain pour créer un chatbot intelligent...',
    excerptEn: 'How to integrate Groq and LangChain to create an intelligent chatbot...',
    date: '2026-05-21',
    category: 'IA',
    categoryEn: 'AI',
    slug: 'portfolio-ia-integree',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Three.js pour les débutants',
    titleEn: 'Three.js for Beginners',
    excerpt: 'Guide complet pour commencer avec Three.js et React Three Fiber...',
    excerptEn: 'Complete guide to get started with Three.js and React Three Fiber...',
    date: '2026-05-20',
    category: '3D',
    categoryEn: '3D',
    slug: 'threejs-debutants',
    readTime: 12,
  },
  {
    id: '3',
    title: 'Optimisation de performance Next.js',
    titleEn: 'Next.js Performance Optimization',
    excerpt: 'Techniques avancées pour optimiser votre application Next.js...',
    excerptEn: 'Advanced techniques to optimize your Next.js application...',
    date: '2026-05-19',
    category: 'Performance',
    categoryEn: 'Performance',
    slug: 'nextjs-performance',
    readTime: 10,
  },
];

export default function BlogPage() {
  const { language } = useLanguage();

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
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Blog Technique' : 'Technical Blog'}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {language === 'fr'
                ? 'Articles sur le développement web, IA et technologies modernes'
                : 'Articles about web development, AI and modern technologies'}
            </p>
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                        {language === 'fr' ? post.category : post.categoryEn}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(post.date).toLocaleDateString(
                          language === 'fr' ? 'fr-FR' : 'en-US',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                      {language === 'fr' ? post.title : post.titleEn}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {language === 'fr' ? post.excerpt : post.excerptEn}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                    >
                      {language === 'fr' ? 'Lire l\'article' : 'Read article'}
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="text-sm text-slate-500 dark:text-slate-400 md:text-right">
                    {post.readTime} {language === 'fr' ? 'min' : 'min'}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center"
          >
            <p className="text-slate-700 dark:text-slate-300">
              {language === 'fr'
                ? '📝 Plus d\'articles à venir bientôt...'
                : '📝 More articles coming soon...'}
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
