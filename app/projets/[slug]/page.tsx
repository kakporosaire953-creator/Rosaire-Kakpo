import { generateProjectMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getProjectBySlug, getProjectSlugs, getAdjacentProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ProjectHero from '@/components/project-detail/ProjectHero';
import ProjectContent from '@/components/project-detail/ProjectContent';
import ProjectNavigation from '@/components/project-detail/ProjectNavigation';
import ProjectCTA from '@/components/project-detail/ProjectCTA';
import { Providers, useLanguage } from '@/app/providers';

// Disable static generation - use on-demand ISR instead
// export async function generateStaticParams() {
//   const slugs = getProjectSlugs();
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return generateProjectMetadata('Projet non trouvé', 'Le projet demandé n\'existe pas.', params.slug);
  }

  return generateProjectMetadata(project.title, project.description, params.slug, project.images[0]);
}

function ProjectDetailContent({ slug }: { slug: string }) {
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

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return (
    <Providers>
      <ProjectDetailContent slug={params.slug} />
    </Providers>
  );
}
