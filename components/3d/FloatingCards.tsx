'use client';

import { motion } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  icon: string;
  color: string;
}

const CARDS: Card[] = [
  {
    id: 1,
    title: 'React',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Next.js',
    icon: '▲',
    color: 'from-slate-900 to-slate-700',
  },
  {
    id: 3,
    title: 'TypeScript',
    icon: '📘',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 4,
    title: 'Three.js',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Groq AI',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Tailwind',
    icon: '🎯',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function FloatingCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ y: -10, scale: 1.05 }}
          className={`bg-gradient-to-br ${card.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
        >
          <div className="text-4xl mb-3">{card.icon}</div>
          <h3 className="text-white font-bold text-lg">{card.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
}
