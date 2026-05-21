'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/providers';
import { getFeaturedProjects } from '@/lib/projects';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const projects = getFeaturedProjects(3);

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Projets vedettes' : 'Featured projects'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'fr'
              ? 'Découvrez mes réalisations les plus remarquables'
              : 'Discover my most remarkable achievements'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Link href={`/projets/${project.slug}`}>
                <div className="h-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-4xl" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projets"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Voir tous les projets' : 'View all projects'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
