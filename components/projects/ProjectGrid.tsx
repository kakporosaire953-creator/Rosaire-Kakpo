'use client';

import { Project } from '@/lib/types';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
  language: 'fr' | 'en';
}

export default function ProjectGrid({ projects, language }: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {language === 'fr'
            ? 'Aucun projet trouvé dans cette catégorie'
            : 'No projects found in this category'}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
