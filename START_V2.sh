#!/bin/bash

# Portfolio V2 - Setup Script
# Ce script configure tout pour démarrer le développement V2

echo "🚀 Portfolio V2 - Setup"
echo "======================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node --version)${NC}"
echo -e "${GREEN}✓ npm $(npm --version)${NC}"
echo ""

# 1. Installer les dépendances V2
echo -e "${BLUE}1. Installer les dépendances V2...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation des dépendances${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dépendances installées${NC}"
echo ""

# 2. Créer le fichier .env.local
echo -e "${BLUE}2. Configurer les variables d'environnement...${NC}"
if [ ! -f .env.local ]; then
  cp .env.local.example .env.local
  echo -e "${GREEN}✓ Fichier .env.local créé${NC}"
  echo -e "${YELLOW}⚠️  IMPORTANT: Remplir les variables d'environnement dans .env.local${NC}"
  echo -e "${YELLOW}   - NEXT_PUBLIC_GROQ_API_KEY (https://console.groq.com)${NC}"
  echo -e "${YELLOW}   - NEXT_PUBLIC_SUPABASE_URL (optionnel pour Phase 4)${NC}"
  echo -e "${YELLOW}   - NEXT_PUBLIC_SUPABASE_ANON_KEY (optionnel pour Phase 4)${NC}"
else
  echo -e "${YELLOW}⚠️  .env.local existe déjà${NC}"
fi
echo ""

# 3. Vérifier la configuration TypeScript
echo -e "${BLUE}3. Vérifier la configuration TypeScript...${NC}"
if grep -q '"moduleResolution": "bundler"' tsconfig.json; then
    echo -e "${GREEN}✓ TypeScript configuré correctement${NC}"
else
    echo -e "${RED}❌ TypeScript mal configuré${NC}"
    exit 1
fi
echo ""

# 4. Vérifier le build
echo -e "${BLUE}4. Vérifier le build...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build réussi${NC}"
echo ""

# 5. Afficher les prochaines étapes
echo -e "${GREEN}🎉 Setup V2 terminé!${NC}"
echo ""

echo -e "${BLUE}📋 Prochaines étapes:${NC}"
echo "1. Éditer .env.local avec vos clés API"
echo "2. Lancer: npm run dev"
echo "3. Ouvrir: http://localhost:3000"
echo ""

echo -e "${BLUE}🔥 Features V2:${NC}"
echo "   - 🤖 Ask Rosaire AI (Chatbot avec Groq)"
echo "   - >_ Dev Console (Mode Terminal Hacker)"
echo "   - 🎨 Theme Switcher (5 thèmes)"
echo "   - 📊 Build Journey (Statistiques)"
echo ""

echo -e "${BLUE}📚 Documentation:${NC}"
echo "   - V2_ROADMAP.md - Roadmap complète"
echo "   - V2_SETUP.md - Guide d'installation"
echo "   - V2_IMPROVEMENTS.md - Améliorations"
echo "   - V2_FIXES_AND_SETUP.md - Corrections & setup"
echo "   - V2_ERROR_REPORT_AND_FIXES.md - Rapport d'erreurs"
echo ""

echo -e "${BLUE}💻 Commandes utiles:${NC}"
echo "   npm run dev          - Serveur de développement"
echo "   npm test             - Lancer les tests"
echo "   npm run build        - Builder pour production"
echo "   npx prisma studio   - Prisma Studio (Phase 4)"
echo ""

echo -e "${GREEN}Bon développement! 🚀${NC}"

