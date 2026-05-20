'use client';

import { motion } from 'framer-motion';

export default function HeroScene() {
  return (
    <motion.div
      className="w-full h-96 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        🎨
      </motion.div>
    </motion.div>
  );
}

