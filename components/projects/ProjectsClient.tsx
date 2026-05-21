'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/providers';
import { getAllProjects, getProjectsByCategory } from '@/lib/projects';
import PageTransition from '@/components/shared/PageTransition';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectGrid from '@/components/projects/ProjectGrid';

export default function ProjectsClient() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = activeCategory === 'all'
    ? getAllProjects()
    : getProjectsByCategory(activeCategory);

  return (
    <PageTransition>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Mes projets' : 'My projects'}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Découvrez mes réalisations et explorez mes domaines d\'expertise'
                : 'Discover my achievements and explore my areas of expertise'}
            </p>
          </div>

          {/* Filter */}
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            language={language}
          />

          {/* Project Grid */}
          <ProjectGrid projects={projects} language={language} />
        </div>
      </section>
    </PageTransition>
  );
}
