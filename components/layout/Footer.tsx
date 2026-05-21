'use client';

import Link from 'next/link';
import { NAVIGATION_LINKS, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/app/providers';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Rosaire Kakpo</h3>
            <p className="text-slate-400 text-sm">
              {language === 'fr'
                ? 'Développeur Frontend spécialisé en web, mobile, e-commerce et solutions africaines.'
                : 'Frontend Developer specialized in web, mobile, e-commerce and African solutions.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {language === 'fr' ? link.label : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'fr' ? 'Réseaux' : 'Social'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={CONTACT_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{CONTACT_INFO.location}</li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-green-400 font-semibold">
                {language === 'fr' ? '✓ Disponible' : '✓ Available'}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>
              © 2026 Rosaire Kakpo.{' '}
              {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <p>
              {language === 'fr'
                ? 'Conçu et développé par Rosaire Kakpo'
                : 'Designed and developed by Rosaire Kakpo'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
