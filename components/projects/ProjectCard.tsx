'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/app/providers';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link href={`/projets/${project.slug}`}>
        <div className="h-full bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700 group hover:border-orange-500 dark:hover:border-orange-500">
          {/* Project Image - 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-orange-400 via-blue-400 to-blue-600 dark:from-orange-600 dark:via-blue-600 dark:to-blue-800 flex items-center justify-center overflow-hidden">
            {project.images && project.images[0] ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <Phone className="w-12 h-12 text-6xl group-hover:scale-110 transition-transform duration-300" />
            )}
            {/* Overlay Badge */}
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {project.year}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 text-orange-700 dark:text-orange-200 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-space-grotesk">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs font-medium font-dm-mono"
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
              <div className="flex items-start gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-orange-500 font-bold mt-0.5">✓</span>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {project.results[0]}
                </p>
              </div>
            )}

            {/* View Project Link */}
            <div className="mt-4 flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold group-hover:gap-3 transition-all">
              {language === 'fr' ? 'Voir le projet' : 'View project'}
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
