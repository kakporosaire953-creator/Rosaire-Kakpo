'use client';

import { Project } from '@/lib/types';
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  project: Project;
  language: 'fr' | 'en';
}

export default function ProjectHero({ project, language }: ProjectHeroProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Info Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
              {project.year}
            </span>
            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
              {project.duration}
            </span>
            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
              {project.status === 'completed'
                ? language === 'fr'
                  ? 'Complété'
                  : 'Completed'
                : language === 'fr'
                ? 'En cours'
                : 'In progress'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>

          {/* Description */}
          <p className="text-xl text-blue-100 max-w-2xl">{project.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
