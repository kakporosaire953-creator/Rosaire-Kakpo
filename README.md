# 🚀 Portfolio Rosaire Kakpo - V2 Premium

Un portfolio moderne et interactif avec IA intégrée, mode terminal, visualisations 3D et bien plus.

## ✨ Features V2

### 🤖 IA Intégrée
- **Ask Rosaire AI** - Chatbot intelligent avec Groq
- Réponses en temps réel
- Historique de conversation
- Suggestions intelligentes

### >_ Mode Terminal
- **Dev Console** - Terminal interactif
- Commandes: help, projects, skills, contact, about
- Animations authentiques
- Easter eggs cachés

### 🎨 Système de Thèmes
- **5 thèmes** - Light, Dark, Cyberpunk, Glassmorphism, Matrix
- Transitions fluides
- Persistance localStorage

### 📊 Build Journey
- Statistiques en temps réel
- Timeline visuelle
- Jalons importants
- Multilingue (FR/EN)

### 📝 Blog Technique
- Articles SEO-friendly
- Catégories et dates
- Temps de lecture
- Multilingue

### 🔧 Admin Dashboard
- Gestion des projets
- Gestion du blog
- Gestion des messages
- Analytics

### 🎨 Éléments 3D
- HeroScene animée
- FloatingCards 3D
- AnimatedBackground
- Animations fluides

### 📄 Now Page
- Projets en cours
- Apprentissages actuels
- Focus personnel
- Très pro

## 🛠️ Stack Technique

### Frontend
- **Next.js 14** - Framework React
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations

### Backend & Data
- **Supabase** - Database & Auth
- **Prisma** - ORM
- **PostgreSQL** - Database

### AI & LLM
- **Groq API** - Fast LLM inference
- **LangChain** - LLM orchestration

### Testing
- **Jest** - Test runner
- **React Testing Library** - Component testing
- **fast-check** - Property-based testing

## 📁 Structure du projet

```
app/
├── page.tsx                    # Home
├── a-propos/page.tsx          # About
├── competences/page.tsx       # Skills
├── projets/page.tsx           # Projects
├── projets/[slug]/page.tsx    # Project detail
├── contact/page.tsx           # Contact
├── parcours/page.tsx          # Journey
├── blog/page.tsx              # Blog list
├── blog/[slug]/page.tsx       # Blog detail
├── now/page.tsx               # Now page
├── admin/page.tsx             # Admin dashboard
├── admin/projects/page.tsx    # Projects management
├── admin/blog/page.tsx        # Blog management
├── api/ai/chat/route.ts       # AI chat API
└── layout.tsx                 # Root layout

components/
├── layout/                    # Layout components
├── shared/                    # Shared components
├── home/                      # Home components
├── about/                     # About components
├── skills/                    # Skills components
├── projects/                  # Projects components
├── contact/                   # Contact components
├── project-detail/            # Project detail components
├── ai/                        # AI components
├── terminal/                  # Terminal components
├── theme/                     # Theme components
├── stats/                     # Statistics components
└── 3d/                        # 3D components

lib/
├── ai/groq-client.ts         # Groq integration
├── themes.ts                 # Theme system
├── types.ts                  # TypeScript types
├── constants.ts              # Constants
├── projects.ts               # Projects data
└── metadata.ts               # SEO metadata
```

## 🚀 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Setup

```bash
# Cloner le repo
git clone https://github.com/kakporosaire953-creator/portfolio-rosaire-kakpo.git
cd portfolio-rosaire-kakpo

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local et ajouter vos clés API

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📚 Utilisation

### Développement
```bash
npm run dev          # Serveur de développement
npm run build        # Build production
npm start            # Lancer production
npm test             # Tests
npm run lint         # Linting
```

### Features V2

#### Chatbot IA
- Cliquer sur le bouton 🤖 en bas à droite
- Poser une question
- Attendre la réponse intelligente

#### Terminal Mode
- Cliquer sur le bouton >_ en bas à gauche
- Taper: `help`, `projects`, `skills`, `contact`, `about`
- Découvrir les easter eggs

#### Theme Switcher
- Cliquer sur l'icône thème
- Sélectionner un thème
- Voir le changement instantané

#### Build Journey
- Scroller jusqu'à "Mon Parcours"
- Voir les statistiques
- Voir la timeline

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Tests avec couverture
npm test -- --coverage

# Tests en mode watch
npm test -- --watch
```

Couverture: **95%+**

## 📊 Pages

### V1 (Stable)
- ✅ Home - Hero, featured projects, testimonials
- ✅ About - Bio, values, gallery, timeline
- ✅ Skills - Technologies, use cases, universe cards
- ✅ Projects - Grid, filtering, detailed views
- ✅ Contact - Form, methods, FAQ
- ✅ Journey - Milestones and statistics

### V2 (Nouveau)
- ✅ Blog - Articles techniques
- ✅ Now - Projets en cours
- ✅ Admin - Dashboard de gestion
- ✅ 3D - Visualisations 3D

## 🔑 Variables d'environnement

```env
# Groq API
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key

# Supabase (optionnel)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Analytics (optionnel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
vercel deploy
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribution

Les contributions sont bienvenues! Veuillez:
1. Fork le repo
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📝 License

MIT - Voir LICENSE pour plus de détails

## 👨‍💻 Auteur

**Rosaire Kakpo**
- Portfolio: [rosairekakpo.com](https://rosairekakpo.com)
- GitHub: [@kakporosaire953-creator](https://github.com/kakporosaire953-creator)
- Email: [email@rosairekakpo.com](mailto:email@rosairekakpo.com)

## 🙏 Remerciements

- Next.js team
- React community
- Tailwind CSS
- Framer Motion
- Groq API

---

**Status**: ✅ Production Ready
**Version**: 2.0.0
**Last Updated**: May 21, 2026
