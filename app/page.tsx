import { generatePageMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import UniversesPreview from '@/components/home/UniversesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonial from '@/components/home/Testimonial';
import BuildJourney from '@/components/stats/BuildJourney';

export const metadata = generatePageMetadata(
  'Rosaire Kakpo - Développeur Full Stack',
  'Portfolio de Rosaire Kakpo, développeur full stack spécialisé en web, mobile, e-commerce et IoT.',
  '/'
);

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <UniversesPreview />
      <FeaturedProjects />
      <BuildJourney />
      <Testimonial />
    </PageTransition>
  );
}
