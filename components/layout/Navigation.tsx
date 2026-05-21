'use client';

import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/lib/constants';

interface NavigationProps {
  pathname: string;
  language: 'fr' | 'en';
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function Navigation({
  pathname,
  language,
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const containerClass = mobile
    ? 'flex flex-col gap-2 py-2'
    : 'flex items-center gap-8';

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    const baseClass = mobile
      ? 'block px-4 py-2 rounded-md transition-colors'
      : 'transition-colors pb-1 border-b-2';

    return isActive
      ? `${baseClass} text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 font-semibold`
      : `${baseClass} text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent hover:border-slate-300 dark:hover:border-slate-700`;
  };

  return (
    <nav className={containerClass}>
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClass(link.href)}
          onClick={onNavigate}
        >
          {language === 'fr' ? link.label : link.labelEn}
        </Link>
      ))}
    </nav>
  );
}
