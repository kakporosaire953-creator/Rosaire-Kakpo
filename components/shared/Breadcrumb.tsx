'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/providers';

interface BreadcrumbItem {
  label: string;
  labelEn: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { language } = useLanguage();

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
      <Link
        href="/"
        className="hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        {language === 'fr' ? 'Accueil' : 'Home'}
      </Link>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <span>/</span>
          {index === items.length - 1 ? (
            <span className="text-slate-900 dark:text-white font-medium">
              {language === 'fr' ? item.label : item.labelEn}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {language === 'fr' ? item.label : item.labelEn}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
