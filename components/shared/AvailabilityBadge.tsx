'use client';

import { useLanguage } from '@/app/providers';

export default function AvailabilityBadge() {
  const { language } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
      <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse"></span>
      {language === 'fr' ? 'Disponible' : 'Available'}
    </div>
  );
}
