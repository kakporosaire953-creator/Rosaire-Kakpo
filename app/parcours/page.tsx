import { generatePageMetadata } from '@/lib/metadata';
import JourneyClient from '@/components/journey/JourneyClient';

export const metadata = generatePageMetadata(
  'Parcours - Rosaire Kakpo',
  'Mon parcours professionnel, formations et certifications.',
  '/parcours'
);

export default function Journey() {
  return <JourneyClient />;
}
