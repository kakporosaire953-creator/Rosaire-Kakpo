import { generatePageMetadata } from '@/lib/metadata';
import ProjectsClient from '@/components/projects/ProjectsClient';

export const metadata = generatePageMetadata(
  'Projets - Rosaire Kakpo',
  'Découvrez mes projets en web, mobile, e-commerce, IoT et backend.',
  '/projets'
);

export default function Projects() {
  return <ProjectsClient />;
}
