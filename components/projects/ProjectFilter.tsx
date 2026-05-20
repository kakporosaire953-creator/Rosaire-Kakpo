'use client';

import { PROJECT_CATEGORIES } from '@/lib/constants';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  language: 'fr' | 'en';
}

export default function ProjectFilter({
  activeCategory,
  onCategoryChange,
  language,
}: ProjectFilterProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {PROJECT_CATEGORIES.map((category) => (
        <motion.button
          key={category.id}
          variants={itemVariants}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          {language === 'fr' ? category.label : category.labelEn}
        </motion.button>
      ))}
    </motion.div>
  );
}
