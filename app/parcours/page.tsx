import { generatePageMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import { TIMELINE_EVENTS } from '@/lib/constants';
import { motion } from 'framer-motion';

export const metadata = generatePageMetadata(
  'Parcours - Rosaire Kakpo',
  'Mon parcours professionnel, formations et certifications.',
  '/parcours'
);

export default function Journey() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Mon Parcours
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Une chronologie de mes formations, certifications et expériences marquantes.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className={`relative pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 mt-1" />

                {/* Content card */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getEventIcon(event.type)}</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {event.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {event.organization} • {event.date}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Intéressé par une collaboration?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Découvrez comment je peux contribuer à votre projet.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Me Contacter
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}

function getEventIcon(type: string): string {
  const icons: Record<string, string> = {
    education: '📚',
    certification: '🏆',
    event: '⚡',
    experience: '💼',
  };
  return icons[type] || '📌';
}
