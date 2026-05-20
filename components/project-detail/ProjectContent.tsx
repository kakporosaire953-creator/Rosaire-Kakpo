'use client';

import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Context */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'fr' ? 'Le contexte' : 'The context'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.context}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'fr' ? 'La solution' : 'The solution'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'fr' ? 'Technologies utilisées' : 'Technologies used'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          {project.results.length > 0 && (
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'fr' ? 'Résultats' : 'Results'}
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-slate-600 dark:text-slate-400"
                  >
                    <span className="text-green-600 dark:text-green-400 font-bold mt-1">
                      ✓
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'fr' ? 'Témoignage' : 'Testimonial'}
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
                <blockquote className="text-lg text-slate-600 dark:text-slate-400 italic mb-4">
                  "{project.testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {project.testimonial.author}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
