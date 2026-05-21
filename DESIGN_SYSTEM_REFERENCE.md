# Design System Reference Guide

## Color Palette

### Orange (Primary - CTAs, Badges, Highlights)
```css
--color-orange-50:  #FFF4E6   /* Lightest background */
--color-orange-100: #FFE0B2
--color-orange-200: #FED7AA
--color-orange-300: #FFB347
--color-orange-400: #FB923C
--color-orange-500: #F97316   /* PRIMARY */
--color-orange-600: #EA6C0A
--color-orange-700: #C2570A
--color-orange-800: #9A3412
--color-orange-900: #7C2D12   /* Darkest */
```

### Blue (Secondary - Hover, Tags, Icons)
```css
--color-blue-50:  #EFF6FF    /* Lightest background */
--color-blue-100: #DBEAFE
--color-blue-200: #BFDBFE
--color-blue-300: #93C5FD
--color-blue-400: #60A5FA
--color-blue-500: #3B82F6    /* PRIMARY */
--color-blue-600: #2563EB
--color-blue-700: #1D4ED8
--color-blue-800: #1E40AF
--color-blue-900: #1E3A8A    /* Darkest */
```

### Semantic Colors

#### Light Mode
```css
--bg-primary:       #FFFFFF      /* Main background */
--bg-secondary:     #F8FAFC      /* Secondary background */
--bg-tertiary:      #F1F5F9      /* Tertiary background */
--text-primary:     #0F172A      /* Main text */
--text-secondary:   #475569      /* Secondary text */
--text-tertiary:    #94A3B8      /* Tertiary text */
--accent-primary:   #F97316      /* Orange - CTAs */
--accent-secondary: #3B82F6      /* Blue - Hover/Tags */
--accent-gradient:  linear-gradient(135deg, #F97316 0%, #3B82F6 100%)
--border-color:     rgba(15, 23, 42, 0.08)
--border-accent:    rgba(249, 115, 22, 0.3)
```

#### Dark Mode
```css
--bg-primary:       #0B1120      /* Main background */
--bg-secondary:     #111827      /* Secondary background */
--bg-tertiary:      #1F2937      /* Tertiary background */
--text-primary:     #F8FAFC      /* Main text */
--text-secondary:   #CBD5E1      /* Secondary text */
--text-tertiary:    #64748B      /* Tertiary text */
--accent-primary:   #FB923C      /* Orange (lighter) */
--accent-secondary: #60A5FA      /* Blue (lighter) */
--border-color:     rgba(248, 250, 252, 0.08)
--border-accent:    rgba(251, 146, 60, 0.3)
```

## Typography

### Font Families
```typescript
// Display Font
--font-space-grotesk: Space Grotesk (400, 500, 600, 700)

// Mono Font
--font-dm-mono: DM Mono (400, 500)

// Fallback
System fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.
```

### Type Scale
```css
/* Hero Title */
font-size: 4rem (desktop) / 2.5rem (mobile)
font-weight: 700
letter-spacing: -0.03em
font-family: var(--font-space-grotesk)

/* Section Title (H2) */
font-size: 2.25rem
font-weight: 600
font-family: var(--font-space-grotesk)

/* Body Text */
font-size: 1rem
line-height: 1.7
font-weight: 400

/* Code/Badges */
font-size: 0.875rem
font-family: var(--font-dm-mono)
font-weight: 500
```

## Component Usage

### Buttons

#### Primary CTA (Orange)
```tsx
<button
  className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
  style={{ background: 'var(--accent-primary)' }}
>
  Voir mes projets →
</button>
```

#### Secondary Button (Blue Border)
```tsx
<button
  className="px-6 py-3 rounded-xl font-semibold border transition-all hover:scale-105"
  style={{ 
    borderColor: 'var(--border-accent)', 
    color: 'var(--accent-primary)' 
  }}
>
  Me contacter
</button>
```

### Badges

#### Tech Badge (Blue)
```tsx
<span
  className="px-2 py-1 rounded text-xs font-medium"
  style={{
    background: 'var(--color-blue-50)',
    color: 'var(--color-blue-700)',
    border: '0.5px solid var(--color-blue-100)'
  }}
>
  React
</span>
```

#### Category Badge (Orange)
```tsx
<span
  className="px-3 py-1 rounded-full text-sm font-semibold"
  style={{
    background: 'var(--color-orange-50)',
    color: 'var(--color-orange-700)'
  }}
>
  Web
</span>
```

### Icons

#### Using Lucide React
```tsx
import { Globe, Smartphone, ShoppingCart, Cpu, Server } from 'lucide-react'

// Primary Icon (Blue)
<Globe className="w-6 h-6" style={{ color: 'var(--accent-secondary)' }} />

// Secondary Icon (Orange)
<Smartphone className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
```

### Cards

#### Project Card
```tsx
<div
  className="rounded-xl shadow-md hover:shadow-2xl transition-all border"
  style={{
    background: 'var(--bg-primary)',
    borderColor: 'var(--border-color)'
  }}
>
  {/* Content */}
</div>
```

#### Skill Card
```tsx
<div
  className="rounded-lg shadow-md border"
  style={{
    background: 'var(--bg-primary)',
    borderColor: 'var(--border-color)'
  }}
>
  {/* Content */}
</div>
```

## Dark Mode Implementation

### Enabling Dark Mode
```typescript
// Set data-theme attribute
document.documentElement.setAttribute('data-theme', 'dark')

// Or use CSS media query
@media (prefers-color-scheme: dark) {
  :root { /* dark mode variables */ }
}
```

### Persisting Theme
```typescript
// Save to localStorage
localStorage.setItem('theme-rk', 'dark')

// Retrieve on load
const saved = localStorage.getItem('theme-rk')
```

## Spacing Scale

```css
/* Tailwind spacing */
px-4   = 1rem
px-6   = 1.5rem
py-3   = 0.75rem
gap-2  = 0.5rem
gap-4  = 1rem
gap-6  = 1.5rem
mb-4   = 1rem
mb-8   = 2rem
```

## Border Radius

```css
rounded-lg   = 0.5rem
rounded-xl   = 0.75rem
rounded-full = 9999px
```

## Shadows

```css
shadow-md    = 0 4px 6px rgba(0, 0, 0, 0.1)
shadow-lg    = 0 10px 15px rgba(0, 0, 0, 0.1)
shadow-xl    = 0 20px 25px rgba(0, 0, 0, 0.1)
```

## Animations

### Fade In
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
```

### Stagger
```tsx
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}
```

### Hover Scale
```tsx
whileHover={{ scale: 1.05 }}
```

## Responsive Breakpoints

```css
/* Mobile First */
default     = 0px (mobile)
sm          = 640px
md          = 768px
lg          = 1024px
xl          = 1280px
2xl         = 1536px

/* Usage */
md:text-2xl = 2xl text on md and up
lg:grid-cols-3 = 3 columns on lg and up
```

## Accessibility

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--accent-secondary);
  outline-offset: 2px;
}
```

### Color Contrast
- Text on background: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### Alt Text
```tsx
<Image
  src="/image.jpg"
  alt="Descriptive text for screen readers"
  width={400}
  height={300}
/>
```

## Usage Examples

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center">
  {/* Gradient background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
      style={{ background: 'var(--color-orange-300)' }}
    />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
      style={{ background: 'var(--color-blue-300)' }}
    />
  </div>
  
  {/* Content */}
  <h1 style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
    Développeur Frontend
  </h1>
</section>
```

### Project Grid
```tsx
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  variants={stagger}
  initial="hidden"
  whileInView="visible"
>
  {projects.map(project => (
    <motion.div key={project.id} variants={fadeInUp}>
      <ProjectCard project={project} />
    </motion.div>
  ))}
</motion.div>
```

---

**Last Updated:** May 21, 2026
**Version:** 1.0
**Status:** Active
