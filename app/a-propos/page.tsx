import { generatePageMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import BioSection from '@/components/about/BioSection';
import Timeline from '@/components/about/Timeline';
import Gallery from '@/components/about/Gallery';
import ValuesSection from '@/components/about/ValuesSection';

export const metadata = generatePageMetadata(
  'À propos - Rosaire Kakpo',
  'En savoir plus sur Rosaire Kakpo, son parcours et sa philosophie de travail.',
  '/a-propos'
);

export default function About() {
  return (
    <PageTransition>
      <BioSection />
      <Timeline />
      <Gallery />
      <ValuesSection />
    </PageTransition>
  );
}
