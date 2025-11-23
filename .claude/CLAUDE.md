# Adventure Portfolio Design Guidelines

## Typography

### Font Families

- Primary: Modern sans-serif (Sofia Pro, Poppins, or system fonts)
- Fallbacks: Helvetica, Arial, sans-serif
- Avoid: Serifs, script fonts

### Font Weights & Hierarchy

- **Logo/Brand**: 700 (bold) @ 18px
- **Headings**: 500-700 weight @ 28-42px
- **Body**: 400 (regular) @ 14-15px
- **Menu/Nav**: 400 weight @ 13px

### Font Sizes

- Small: 13px
- Medium: 14-20px
- Large: 28-36px
- XLarge: 40-42px

### Line Height

- Body text: 1.7
- Headings: 1.2-1.4

## Color Palette

### Core Colors

- **Primary Background**: #ffffff (white)
- **Primary Text**: #000000 (black)
- **Accent/Links**: #4d6198 (muted blue-grey)
- **Secondary Headings**: #a4aec9 (lighter blue-grey)

### Optional Accents

- Vivid red: #cf2e2e
- Luminous orange: #ff6900
- Dark grey: #32373c

### Design Philosophy

- Minimize color usage - let photography dominate
- High contrast (black on white, white on dark)
- Earth tones and neutrals
- Avoid vibrant/competing colors

## Layout

### Grid System

- **Mobile**: 8-column grid, 6vw gutters
- **Tablet**: 737-1024px breakpoint
- **Desktop**: 24-column grid, 4vw gutters, 1025px+
- **Max width**: 2400px

### Spacing Scale

- 0.44rem (smallest)
- 0.5-1em (small gaps)
- 1.25-2em (medium gaps)
- 4-6vw (large section padding)
- 5.06rem (largest)

### Image Spacing

- Between elements: 30px
- Image padding: 10px
- Vertical rhythm: 36px

## Design Patterns

### Hero Section

- Full-screen video/image backgrounds
- Full browser height images
- Minimal text overlays
- Video fallback to static images
- Dark/video-dominant aesthetic

### Navigation

- Fixed header positioning
- Horizontal alignment, center/right positioning
- Minimal, clean menu items
- Social links integration (Instagram, Facebook, etc.)
- Scroll-responsive behavior

### Image Galleries

- Full-bleed imagery
- Square thumbnails for gallery grids
- 3:2 aspect ratio for hero images (2250×1500px)
- Full browser height viewport images
- Staggered/overlapping layouts for visual rhythm

### Content Hierarchy

- Images first, text second
- Navigation overlays imagery
- Generous whitespace/breathing room
- Minimal text, maximum visual impact

### Buttons & CTAs

- Rounded pill style (9999px border radius)
- Dark backgrounds (#32373c) with white text
- Understated, non-competing with imagery
- Hover states: underlines for links

### Responsive Design

- Mobile-first approach
- Progressive enhancement
- Breakpoints: 736px, 1024px, 1025px+
- Flexible grid positioning
- Fixed headers on desktop

## Component Guidelines

### Logo

- Right or left alignment
- Clean, simple typography
- Bullet separators for multi-word (e.g., "ryan•mitchell•lives")
- Small size (18px, weight 700)

### Footer

- Minimal, unobtrusive
- Social media icons
- Copyright/contact info only

### Shop Integration

- Seamless cart functionality
- Non-intrusive commerce elements
- Maintains portfolio aesthetic

## Best Practices

1. **Imagery dominates** - text serves photography, not vice versa
2. **Whitespace is generous** - don't crowd content
3. **Typography is minimal** - clean, modern sans-serifs only
4. **Colors are neutral** - let photos provide color
5. **Navigation is subtle** - fixed, minimal, unobtrusive
6. **Mobile-first** - full-height images on all devices
7. **Performance** - optimize large hero images/videos
8. **Hierarchy clear** - images > headings > body text
9. **Consistent spacing** - use spacing scale systematically
10. **Accessibility** - maintain contrast ratios, readable font sizes

---

# Technical Documentation

## Tech Stack

- **Framework**: Astro v5.16.0 (static site generator)
- **Styling**: Tailwind CSS v3.4.18
- **Language**: TypeScript (strict mode)
- **Adapter**: @astrojs/netlify v6.6.2
- **Dependency Management**: mise
- **Hosting**: Netlify
- **Site URL**: https://mskalski.netlify.app

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable components (Header, Footer, Hero, Gallery, etc.)
│   ├── layouts/          # Page layouts (Layout, TripLayout, BlogLayout)
│   ├── pages/            # Routes (index, about, contact, sailing, trips, blog)
│   ├── content/          # Content collections (trips/, blog/)
│   │   ├── trips/        # Trip markdown files with frontmatter
│   │   ├── blog/         # Blog post markdown files
│   │   └── config.ts     # Content collection schemas
│   └── styles/           # Global styles (global.css)
├── public/               # Static assets (images, fonts)
├── dist/                 # Build output (generated)
├── .mise.toml            # Mise configuration
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── netlify.toml          # Netlify deployment config
```

## Development Workflow

### Initial Setup

```bash
# Install dependencies via mise
mise install

# Install npm packages
npm install
```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at http://localhost:4321 |
| `npm run build` | Build for production (outputs to dist/) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on codebase |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without changes |

### Mise Task Shortcuts

```bash
mise run dev           # Development server
mise run build         # Production build
mise run preview       # Preview build
mise run lint          # Linting
mise run format        # Code formatting
mise run format-check  # Formatting check
mise run check         # Combined lint + format-check
```

## Content Collections

### Trips Collection

Schema defined in `src/content/config.ts`:

```typescript
{
  title: string          // Trip name (required)
  location: string       // Geographic location (required)
  date: string          // Trip date (required)
  description: string   // Trip description (required)
  thumbnail: string     // Thumbnail image path (required)
  featured: boolean     // Feature on homepage (default: false)
  images: string[]      // Gallery images array (optional)
}
```

Example location: `src/content/trips/patagonia-2024/index.md`

### Blog Collection

Schema defined in `src/content/config.ts`:

```typescript
{
  title: string        // Post title (required)
  date: string        // Publication date (required)
  description: string // Meta description (required)
  image: string       // Hero image path (required)
  excerpt: string     // Short excerpt (optional)
}
```

Example location: `src/content/blog/patagonia-storm.md`

## Build & Deployment

### Build Process

```bash
npm run build
```

Generates:
- 14 static pages (1 home, 1 about, 1 contact, 1 sailing, 1 trips index, 5 trip pages, 1 blog index, 3 blog posts)
- Optimized assets in `dist/`
- Build time: ~1.5s

### Netlify Deployment

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Adapter**: @astrojs/netlify (static mode)
- **Forms**: Netlify Forms enabled on contact page
- **Redirects**: Handled by @astrojs/netlify plugin

## Verification Checklist

### Build Verification
- [ ] `npm run build` completes successfully
- [ ] All 14 pages generated without errors
- [ ] No TypeScript errors
- [ ] No linting errors (`npm run lint`)

### Responsive Design
- [ ] Mobile: 320px-736px (6vw gutters, 8-column grid)
- [ ] Tablet: 737px-1024px (transition breakpoint)
- [ ] Desktop: 1025px+ (4vw gutters, 24-column grid, max-width 2400px)

### Accessibility
- [ ] All images have descriptive alt text
- [ ] Keyboard navigation works (Tab, Escape)
- [ ] Focus states visible on all interactive elements
- [ ] Mobile menu accessible (44x44px touch target)
- [ ] ARIA labels on icons and controls
- [ ] Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- [ ] Form labels properly associated
- [ ] Color contrast meets WCAG 2.1 standards

### Performance
- [ ] Lazy loading on non-hero images
- [ ] Images use proper aspect ratios (3:2 for galleries)
- [ ] Minimal JavaScript (mobile menu + form only)
- [ ] CSS transitions hardware-accelerated
- [ ] No render-blocking resources

### Content
- [ ] All navigation links functional
- [ ] Trip cards link to detail pages
- [ ] Blog posts render correctly
- [ ] Contact form submits to Netlify Forms
- [ ] Social media links correct and working

## Common Tasks

### Adding a New Trip

1. Create directory: `src/content/trips/trip-name/`
2. Add `index.md` with frontmatter:
   ```yaml
   ---
   title: "Trip Name"
   location: "Location"
   date: "2024-01-01"
   description: "Trip description"
   thumbnail: "/images/trip-thumb.jpg"
   featured: false
   images:
     - "/images/trip-1.jpg"
     - "/images/trip-2.jpg"
   ---
   Trip story content here...
   ```
3. Add images to `public/images/`
4. Build verifies route generation

### Adding a New Blog Post

1. Create file: `src/content/blog/post-slug.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2024-01-01"
   description: "Meta description"
   image: "/images/blog-hero.jpg"
   excerpt: "Short excerpt"
   ---
   Post content here...
   ```
3. Build verifies route generation

### Updating Styles

- **Global styles**: `src/styles/global.css`
- **Tailwind config**: `tailwind.config.js`
- **Component styles**: Scoped `<style>` tags in `.astro` files

### Testing Locally

```bash
# Start dev server
npm run dev

# In another terminal, run build to verify
npm run build

# Preview production build
npm run preview
```

## Hero Images

**Optimal dimensions:**
- Desktop: 2400×1350 (WebP ~200KB, JPEG ~350KB)
- Mobile: 1200×1600 (WebP ~120KB, JPEG ~200KB)

**Usage:**
```astro
<Hero
  image="/images/hero-desktop.jpg"
  imageWebp="/images/hero-desktop.webp"
  imageMobile="/images/hero-mobile.jpg"
  imageMobileWebp="/images/hero-mobile.webp"
  alt="Descriptive alt text"
/>
```

Mobile images save ~65% bandwidth. All image props optional except `image` and `alt`.
