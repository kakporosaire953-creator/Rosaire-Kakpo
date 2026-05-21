import { Universe, TimelineEvent } from './types';

export const NAVIGATION_LINKS = [
  { label: 'Accueil', href: '/', labelEn: 'Home' },
  { label: 'À propos', href: '/a-propos', labelEn: 'About' },
  { label: 'Compétences', href: '/competences', labelEn: 'Skills' },
  { label: 'Projets', href: '/projets', labelEn: 'Projects' },
  { label: 'Contact', href: '/contact', labelEn: 'Contact' },
];

export const UNIVERSES: Universe[] = [
  {
    id: 'web',
    name: 'Applications Web',
    description: 'Applications web modernes avec React, Next.js et TypeScript',
    icon: 'globe',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    useCases: ['Plateformes SaaS', 'Tableaux de bord', 'Progressive Web Apps'],
    relatedProjects: [],
  },
  {
    id: 'mobile',
    name: 'Applications Mobile',
    description: 'Applications mobiles natives et cross-platform',
    icon: 'smartphone',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    useCases: ['Applications iOS/Android', 'Applications cross-platform'],
    relatedProjects: [],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Solutions e-commerce complètes avec paiement intégré',
    icon: 'shopping-cart',
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
    useCases: ['Boutiques en ligne', 'Marketplaces', 'Systèmes de paiement'],
    relatedProjects: [],
  },
  {
    id: 'iot',
    name: 'IoT et Embarqué',
    description: 'Systèmes IoT et programmation embarquée',
    icon: 'cpu',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'C++'],
    useCases: ['Capteurs connectés', 'Domotique', 'Systèmes embarqués'],
    relatedProjects: [],
  },
  {
    id: 'backend',
    name: 'Backend et APIs',
    description: 'Architectures backend scalables et APIs robustes',
    icon: 'server',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'],
    useCases: ['APIs REST', 'Microservices', 'Bases de données'],
    relatedProjects: [],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '1',
    type: 'education',
    title: 'Formation Google IT Support',
    organization: 'Google',
    date: '2023',
    description: 'Certification en support informatique',
    icon: 'book',
  },
  {
    id: '2',
    type: 'certification',
    title: 'Certification freeCodeCamp',
    organization: 'freeCodeCamp',
    date: '2023',
    description: 'Développement web full-stack',
    icon: 'award',
  },
  {
    id: '3',
    type: 'event',
    title: 'Hackathon MIABE',
    organization: 'MIABE',
    date: '2024',
    description: 'Participation à un hackathon national',
    icon: 'zap',
  },
  {
    id: '4',
    type: 'event',
    title: 'Arduino Days 2026',
    organization: 'Arduino',
    date: '2026',
    description: 'Présentation de projets IoT',
    icon: 'cpu',
  },
];

export const CONTACT_INFO = {
  location: 'Cotonou, Bénin',
  availability: 'Disponible pour des projets',
  responseTime: '24-48 heures',
  email: 'contact@rosairekakpo.com',
  phone: '+229 68 81 20 19',
  social: {
    github: 'https://github.com/kakporosaire953-creator',
    linkedin: 'https://linkedin.com/in/rosaire-kakpo',
    twitter: 'https://twitter.com/rosairekakpo',
    whatsapp: 'https://wa.me/22968812019',
  },
};

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'Tous', labelEn: 'All' },
  { id: 'web', label: 'Web', labelEn: 'Web' },
  { id: 'mobile', label: 'Mobile', labelEn: 'Mobile' },
  { id: 'ecommerce', label: 'E-commerce', labelEn: 'E-commerce' },
  { id: 'iot', label: 'IoT', labelEn: 'IoT' },
  { id: 'backend', label: 'Backend', labelEn: 'Backend' },
];

export const FAQ_ITEMS = [
  {
    question: 'Quel est votre délai de réponse?',
    answer: 'Je réponds généralement dans les 24-48 heures.',
    questionEn: 'What is your response time?',
    answerEn: 'I typically respond within 24-48 hours.',
  },
  {
    question: 'Travaillez-vous à distance?',
    answer: 'Oui, je travaille entièrement à distance.',
    questionEn: 'Do you work remotely?',
    answerEn: 'Yes, I work entirely remotely.',
  },
  {
    question: 'Quel est votre tarif?',
    answer: 'Les tarifs dépendent de la complexité du projet. Contactez-moi pour un devis.',
    questionEn: 'What are your rates?',
    answerEn: 'Rates depend on project complexity. Contact me for a quote.',
  },
  {
    question: 'Acceptez-vous les petits projets?',
    answer: 'Oui, j\'accepte les projets de toutes tailles.',
    questionEn: 'Do you accept small projects?',
    answerEn: 'Yes, I accept projects of all sizes.',
  },
  {
    question: 'Offrez-vous du support après le lancement?',
    answer: 'Oui, je propose du support et de la maintenance après le lancement.',
    questionEn: 'Do you offer post-launch support?',
    answerEn: 'Yes, I offer support and maintenance after launch.',
  },
  {
    question: 'Quels sont vos technologies préférées?',
    answer: 'Je préfère React, Next.js, TypeScript et Tailwind CSS pour le web.',
    questionEn: 'What are your preferred technologies?',
    answerEn: 'I prefer React, Next.js, TypeScript, and Tailwind CSS for web.',
  },
];
