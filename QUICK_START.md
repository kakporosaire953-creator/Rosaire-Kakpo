# Quick Start Guide

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **Home** - `/` - Portfolio homepage
- **About** - `/a-propos` - About me and my journey
- **Skills** - `/competences` - My skills and technologies
- **Projects** - `/projets` - My projects with filtering
- **Project Detail** - `/projets/[slug]` - Individual project pages
- **Contact** - `/contact` - Contact form and information
- **Journey** - `/parcours` - Timeline of my career

## Features

### Language Switching
Click the language toggle in the header to switch between French and English.

### Dark Mode
Click the theme toggle in the header to switch between light and dark modes.

### Project Filtering
On the projects page, click category buttons to filter projects.

### Contact Form
Fill out the contact form on the contact page. The form validates:
- Name (required)
- Email (required, must be valid)
- Project type (optional)
- Budget (optional)
- Message (required)

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run specific test
npm test -- components/home/__tests__/HeroSection.test.tsx
```

## Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Update Project Data
Edit `data/projects.json` to add or modify projects.

### Update Constants
Edit `lib/constants.ts` to update:
- Navigation links
- Universes
- Timeline events
- Contact information
- FAQ items

### Update Styles
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes in components

### Update Content
- Home page: `app/page.tsx` and `components/home/`
- About page: `app/a-propos/page.tsx` and `components/about/`
- Skills page: `app/competences/page.tsx` and `components/skills/`
- Projects page: `app/projets/page.tsx` and `components/projects/`
- Contact page: `app/contact/page.tsx` and `components/contact/`

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build
npm run build

# Deploy the .next folder and public folder
```

## Environment Variables

Create a `.env.local` file if needed:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Troubleshooting

### Tests failing
- Clear Jest cache: `npm test -- --clearCache`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Build errors
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### Styling issues
- Rebuild Tailwind: `npm run build`
- Check Tailwind config: `tailwind.config.ts`

## Performance Tips

1. **Images**: Optimize images before adding to `public/` folder
2. **Fonts**: Use system fonts or Google Fonts for better performance
3. **Code Splitting**: Next.js automatically code-splits pages
4. **Caching**: Configure caching headers in `next.config.js`

## SEO

- All pages have unique titles and descriptions
- Open Graph tags for social sharing
- Structured data (Schema.org) for rich snippets
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

## Support

For issues or questions:
1. Check the [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
2. Review component documentation in code comments
3. Check test files for usage examples

---

**Happy coding! 🚀**
