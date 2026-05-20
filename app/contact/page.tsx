import { generatePageMetadata } from '@/lib/metadata';
import PageTransition from '@/components/shared/PageTransition';
import ContactForm from '@/components/contact/ContactForm';
import ContactMethods from '@/components/contact/ContactMethods';
import ContactInfo from '@/components/contact/ContactInfo';
import FAQAccordion from '@/components/contact/FAQAccordion';

export const metadata = generatePageMetadata(
  'Contact - Rosaire Kakpo',
  'Contactez-moi pour discuter de votre projet.',
  '/contact'
);

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Travaillons ensemble
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Vous avez un projet en tête? Je serais ravi de discuter de vos idées et de voir comment je peux vous aider.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-16">
          <ContactInfo />
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <ContactMethods />
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Envoyez-moi un message
          </h2>
          <ContactForm />
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <FAQAccordion />
        </div>
      </div>
    </PageTransition>
  );
}
