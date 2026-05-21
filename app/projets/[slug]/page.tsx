import { generateProjectMetadata } from '@/lib/metadata';
import { getProjectBySlug } from '@/lib/projects';
import { Providers } from '@/app/providers';
import ProjectDetailClient from './ProjectDetailClient';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return generateProjectMetadata('Projet non trouvé', 'Le projet demandé n\'existe pas.', params.slug);
  }

  return generateProjectMetadata(project.title, project.description, params.slug, project.images[0]);
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return (
    <Providers>
      <ProjectDetailClient slug={params.slug} />
    </Providers>
  );
}
