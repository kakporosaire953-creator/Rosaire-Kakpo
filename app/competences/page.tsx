import { generatePageMetadata } from '@/lib/metadata';
import { Providers } from '@/app/providers';
import SkillsClient from './SkillsClient';

export const metadata = generatePageMetadata(
  'Compétences - Rosaire Kakpo',
  'Découvrez mes compétences en web, mobile, e-commerce, IoT et backend.',
  '/competences'
);

export default function Skills() {
  return (
    <Providers>
      <SkillsClient />
    </Providers>
  );
}
