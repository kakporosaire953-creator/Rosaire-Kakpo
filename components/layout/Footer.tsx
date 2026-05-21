'use client';

import Link from 'next/link';
import { NAVIGATION_LINKS, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/app/providers';
import { Github, Linkedin, Twitter, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-white py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 font-space-grotesk bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Rosaire Kakpo
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {language === 'fr'
                ? 'Développeur Frontend spécialisé en solutions numériques pour l\'Afrique de l\'Ouest.'
                : 'Frontend Developer specialized in digital solutions for West Africa.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm font-medium"
                  >
                    {language === 'fr' ? link.label : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Réseaux' : 'Social'}
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-white rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-900 dark:text-white rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-400 dark:hover:bg-blue-400 text-slate-900 dark:text-white rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-green-500 dark:hover:bg-green-500 text-slate-900 dark:text-white rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                {CONTACT_INFO.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {language === 'fr' ? 'Disponible' : 'Available'}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400 gap-4">
            <p>
              © 2026 Rosaire Kakpo.{' '}
              {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <p className="text-center md:text-right">
              {language === 'fr'
                ? 'Conçu et développé avec ❤️ par Rosaire Kakpo'
                : 'Designed and developed with ❤️ by Rosaire Kakpo'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
