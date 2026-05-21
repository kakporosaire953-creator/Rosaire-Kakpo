# Quick Fixes & Troubleshooting Guide

## Common Issues & Solutions

### 1. Icons Not Displaying

**Problem:** Icons show as text (e.g., "globe" instead of icon)

**Solution:**
```typescript
// ❌ WRONG - string icon name
icon: 'globe'

// ✅ CORRECT - PascalCase component name
icon: 'Globe'
```

**Files to check:**
- `lib/constants.ts` - UNIVERSES array
- `components/skills/UniverseCard.tsx` - Icon mapping
- `components/skills/UseCasesSection.tsx` - Icon components

---

### 2. Dark Mode Not Working

**Problem:** Dark mode toggle doesn't change colors

**Solution:**
```typescript
// Ensure data-theme attribute is set
document.documentElement.setAttribute('data-theme', 'dark')

// Check localStorage
localStorage.setItem('theme-rk', 'dark')

// Verify CSS variables in globals.css
[data-theme="dark"] {
  --bg-primary: #0B1120;
  /* ... other variables */
}
```

**Files to check:**
- `app/globals.css` - Dark mode variables
- `components/theme/ThemeSwitcher.tsx` - Theme toggle logic
- `lib/themes.ts` - Theme configuration

---

### 3. Images Not Loading

**Problem:** Project images show gradient placeholder

**Solution:**
1. Ensure images exist in `/public/projects/`
2. Use correct file paths in `data/projects.json`
3. Verify image format (JPG, PNG, WebP)
4. Check image dimensions (16:9 aspect ratio recommended)

**Example:**
```json
{
  "images": ["/projects/gbeto-cover.jpg"],
  "title": "Gbéto"
}
```

---

### 4. Build Fails with TypeScript Errors

**Problem:** `npm run build` fails

**Solution:**
```bash
# Check for errors
npm run lint

# Fix TypeScript issues
npm run build -- --debug

# Clear cache and rebuild
rm -rf .next
npm run build
```

---

### 5. Styling Not Applied

**Problem:** CSS variables not working

**Solution:**
```tsx
// ✅ CORRECT - Use CSS variables
style={{ color: 'var(--accent-primary)' }}

// ❌ WRONG - Direct color
style={{ color: '#F97316' }}

// ✅ CORRECT - Tailwind with CSS variables
className="text-orange-500 dark:text-orange-400"
```

---

### 6. Animations Not Smooth

**Problem:** Animations stutter or don't play

**Solution:**
```tsx
// Ensure Framer Motion is imported
import { motion } from 'framer-motion'

// Use proper animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// Apply to component
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={fadeInUp}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

### 7. Mobile Layout Broken

**Problem:** Layout looks wrong on mobile

**Solution:**
```tsx
// Use responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>

// Test breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
```

---

### 8. Performance Issues

**Problem:** Site loads slowly

**Solution:**
```bash
# Check bundle size
npm run build

# Optimize images
# - Use WebP format
# - Compress with TinyPNG or similar
# - Use Next.js Image component

# Enable caching
# - Set proper cache headers
# - Use Vercel's edge caching
```

---

### 9. Social Links Not Working

**Problem:** Social media links don't open

**Solution:**
```typescript
// Verify URLs in lib/constants.ts
export const CONTACT_INFO = {
  social: {
    github: 'https://github.com/kakporosaire953-creator',
    linkedin: 'https://linkedin.com/in/rosaire-kakpo',
    twitter: 'https://twitter.com/rosairekakpo',
    whatsapp: 'https://wa.me/22968812019',
  },
}

// Ensure links have target="_blank"
<a href={url} target="_blank" rel="noopener noreferrer">
  Link
</a>
```

---

### 10. Form Submission Issues

**Problem:** Contact form doesn't submit

**Solution:**
```typescript
// Check API endpoint
// File: app/api/contact/route.ts

// Verify form has proper attributes
<form method="POST" action="/api/contact">
  <input type="email" name="email" required />
  <textarea name="message" required />
  <button type="submit">Send</button>
</form>

// Check browser console for errors
// Verify CORS settings if needed
```

---

## Performance Optimization Checklist

### Image Optimization
- [ ] Use Next.js `<Image>` component
- [ ] Set proper width/height
- [ ] Use WebP format with fallback
- [ ] Lazy load images below fold
- [ ] Compress images (< 100KB each)

### Code Splitting
- [ ] Use dynamic imports for heavy components
- [ ] Lazy load routes
- [ ] Tree-shake unused code

### Caching
- [ ] Set proper cache headers
- [ ] Use Vercel's edge caching
- [ ] Cache API responses

### Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Track error rates
- [ ] Monitor performance metrics

---

## Testing Checklist

### Browser Testing
```bash
# Test in multiple browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# Test on mobile
- iOS Safari
- Chrome Mobile
- Firefox Mobile
```

### Device Testing
```bash
# Test on real devices
- iPhone 12/13/14
- Samsung Galaxy S21/S22
- iPad
- Desktop (1920x1080)
- Desktop (2560x1440)
```

### Functionality Testing
- [ ] All links work
- [ ] Forms submit
- [ ] Images load
- [ ] Animations play
- [ ] Dark mode works
- [ ] Responsive layout works

---

## Debugging Tips

### Check Console
```javascript
// Open browser DevTools (F12)
// Check Console tab for errors
// Check Network tab for failed requests
```

### Inspect Elements
```javascript
// Right-click element → Inspect
// Check computed styles
// Verify CSS variables are applied
// Check for conflicting styles
```

### React DevTools
```javascript
// Install React DevTools extension
// Check component props
// Check component state
// Check component hierarchy
```

### Network Tab
```javascript
// Check for failed requests
// Check response times
// Check file sizes
// Check caching headers
```

---

## Common Error Messages

### "Module not found"
```
Solution: Check import paths
- Verify file exists
- Check spelling
- Use correct relative paths
```

### "Cannot read property of undefined"
```
Solution: Check for null/undefined values
- Add null checks
- Use optional chaining (?.)
- Use nullish coalescing (??)
```

### "Hydration mismatch"
```
Solution: Ensure server and client render same content
- Remove useEffect-only content
- Use suppressHydrationWarning
- Check for date/time differences
```

### "CSS not applied"
```
Solution: Check CSS specificity
- Verify class names
- Check for conflicting styles
- Use !important if needed (last resort)
- Check media queries
```

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm test                 # Run tests
npm test -- --watch     # Run tests in watch mode

# Debugging
npm run build -- --debug # Build with debug info
npm run lint -- --fix    # Auto-fix linting issues

# Cleaning
rm -rf .next             # Clear Next.js cache
rm -rf node_modules      # Clear dependencies
npm install              # Reinstall dependencies
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Last Updated:** May 21, 2026
**Version:** 1.0
**Status:** Active
