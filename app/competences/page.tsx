import { generatePageMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import { Providers, useLanguage } from '@/app/providers';
import UniverseCard from '@/components/skills/UniverseCard';
import TechnologiesBento from '@/components/skills/TechnologiesBento';
import UseCasesSection from '@/components/skills/UseCasesSection';
import { UNIVERSES } from '@/lib/constants';

export const metadata = generatePageMetadata(
  'Compétences - Rosaire Kakpo',
  'Découvrez mes compétences en web, mobile, e-commerce, IoT et backend.',
  '/competences'
);

function SkillsContent() {
  const { language } = useLanguage();

  return (
    <PageTransition>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white text-center">
            {language === 'fr' ? 'Mes compétences' : 'My skills'}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez les domaines dans lesquels j\'excelle'
              : 'Discover the domains where I excel'}
          </p>

          {/* Universe Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {UNIVERSES.map((universe) => (
              <UniverseCard key={universe.id} universe={universe} language={language} />
            ))}
          </div>
        </div>
      </section>

      <TechnologiesBento />
      <UseCasesSection />
    </PageTransition>
  );
}

export default function Skills() {
  return (
    <Providers>
      <SkillsContent />
    </Providers>
  );
}
