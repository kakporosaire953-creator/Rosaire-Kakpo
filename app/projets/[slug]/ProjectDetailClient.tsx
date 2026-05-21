'use client';

import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getProjectBySlug, getAdjacentProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ProjectHero from '@/components/project-detail/ProjectHero';
import ProjectContent from '@/components/project-detail/ProjectContent';
import ProjectNavigation from '@/components/project-detail/ProjectNavigation';
import ProjectCTA from '@/components/project-detail/ProjectCTA';
import { useLanguage } from '@/app/providers';

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <PageTransition>
      <Breadcrumb
        items={[
          {
            label: 'Projets',
            labelEn: 'Projects',
            href: '/projets',
          },
          {
            label: project.title,
            labelEn: project.title,
            href: `/projets/${project.slug}`,
          },
        ]}
      />
      <ProjectHero project={project} language={language} />
      <ProjectContent project={project} />
      <ProjectNavigation previousProject={previous} nextProject={next} />
      <ProjectCTA />
    </PageTransition>
  );
}
