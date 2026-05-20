'use client';

import Link from 'next/link';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  language: 'fr' | 'en';
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link href={`/projets/${project.slug}`}>
        <div className="h-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700 group">
          {/* Project Image */}
          <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center overflow-hidden relative">
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
              📱
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Category and Year */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Key Result */}
            {project.results.length > 0 && (
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                ✓ {project.results[0]}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
