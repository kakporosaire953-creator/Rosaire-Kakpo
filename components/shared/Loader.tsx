'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-950 bg-opacity-50 dark:bg-opacity-50 flex items-center justify-center z-50 pointer-events-none">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-spin"></div>
      </div>
    </div>
  );
}
