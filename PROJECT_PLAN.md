# Adventure Portfolio Website - Implementation Plan

**Owner:** Marcin Skalski
**Site:** mskalski.netlify.app
**Focus:** Adventure photography/videography + sailing/skipper services

## Tech Stack

- **Framework:** Astro (static site generator)
- **Dependency Management:** mise
- **Hosting:** Netlify (free tier)
- **Video:** YouTube embeds
- **Social:** Instagram, YouTube

---

## Phase 0: Tooling & Project Setup

### Tasks

1. Create `.mise.toml` config
   - Node.js (latest LTS)
   - npm/pnpm

2. Install dependencies via mise

   ```bash
   mise install
   ```

3. Initialize Astro project

   ```bash
   npm create astro@latest . -- --template minimal --typescript strict
   ```

4. Project structure

   ```
   src/
   ├── components/     # Reusable components
   ├── layouts/        # Page layouts
   ├── pages/          # Routes
   ├── styles/         # Global styles
   └── content/        # Blog posts, trips
   public/
   ├── images/         # Static images
   └── fonts/          # Typography
   ```

5. Install additional dependencies

   ```bash
   npm install @astrojs/netlify
   npm install -D @astrojs/tailwind tailwindcss
   ```

6. Configure Astro for Netlify
   - Update `astro.config.mjs`
   - Add Netlify adapter

7. Git initialization
   ```bash
   git init
   git add .
   git commit -m "Initial project setup"
   ```

### Success Criteria

- [ ] mise manages Node/npm
- [ ] Astro dev server runs
- [ ] Git repo initialized
- [ ] Basic project structure created

---

## Phase 1: Core Components & Layout

### Tasks

1. **Typography setup**
   - Add Sofia Pro/Poppins fonts (or system fallbacks)
   - Create typography scale in CSS/Tailwind config
   - Font weights: 400, 500, 700
   - Font sizes: 13px, 14-20px, 28-36px, 40-42px
   - Line heights: 1.7 (body), 1.2-1.4 (headings)

2. **Color system**
   - Primary: #ffffff, #000000
   - Accent: #4d6198, #a4aec9
   - Optional: #cf2e2e, #ff6900, #32373c

3. **Grid system**
   - Mobile: 8-column, 6vw gutters
   - Tablet: 737-1024px breakpoint
   - Desktop: 24-column, 4vw gutters, 1025px+
   - Max width: 2400px

4. **Header component** (`Header.astro`)
   - Fixed positioning
   - Logo: "marcin•skalski" (18px, 700)
   - Nav links: Home, Trips, Sailing, Blog, About, Contact
   - Social icons: Instagram, YouTube
   - Mobile hamburger menu

5. **Footer component** (`Footer.astro`)
   - Minimal design
   - Social links
   - Copyright

6. **Base layout** (`Layout.astro`)
   - HTML structure
   - Meta tags (SEO)
   - Header + slot + Footer

### Success Criteria

- [x] Typography renders correctly
- [x] Header fixed and responsive
- [x] Footer displays
- [x] Base layout works

### Implementation Status

**Status:** ✅ COMPLETED

**Completed Tasks:**

1. ✅ Tailwind config updated with:
   - Typography scale (font sizes, weights, line heights)
   - Color system (primary, accent colors)
   - Grid system (mobile 8-col, desktop 24-col)
   - Custom breakpoints (tablet: 737px, desktop: 1025px)
   - Spacing utilities (gutters: 6vw mobile, 4vw desktop)
   - Max width: 2400px

2. ✅ Global styles created (`src/styles/global.css`):
   - Base styles with Tailwind layers
   - Typography defaults (body, headings)
   - Custom container and grid classes
   - Responsive spacing

3. ✅ Header component (`src/components/Header.astro`):
   - Fixed positioning with backdrop blur
   - Logo: "marcin•skalski" (18px, 700 weight)
   - Navigation: Home, Trips, Sailing, Blog, About, Contact
   - Social links: Instagram, YouTube with SVG icons
   - Mobile hamburger menu with toggle functionality
   - Responsive layout

4. ✅ Footer component (`src/components/Footer.astro`):
   - Minimal design with border separator
   - Copyright notice (dynamic year)
   - Social links (Instagram, YouTube)
   - Responsive flex layout

5. ✅ Base layout (`src/layouts/Layout.astro`):
   - HTML structure with proper meta tags
   - SEO optimization (title, description, canonical URL)
   - Open Graph and Twitter Card meta tags
   - Header + slot + Footer integration
   - Global CSS import
   - Props for customizable title, description, image

6. ✅ Updated `index.astro` with new Layout
   - Using Layout component
   - Test content displaying correctly
   - Dev server verified working

**Files Created:**

- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/layouts/Layout.astro`

**Files Modified:**

- `tailwind.config.js`
- `src/pages/index.astro`

---

## Phase 2: Home Page & Trips Listing

### Tasks

1. **Hero component** (`Hero.astro`)
   - Full-screen image background
   - Minimal text overlay
   - Responsive heights (100vh)
   - Image optimization

2. **Home page** (`src/pages/index.astro`)
   - Hero section only
   - Minimal text overlay on hero
   - Optional: subtle CTA to explore trips/contact

3. **Trip grid component** (`TripGrid.astro`)
   - Square thumbnail layout
   - Trip title overlays
   - Hover effects
   - Links to individual trip pages
   - Responsive grid (1 col mobile, 2-3 col desktop)

4. **Trips listing page** (`src/pages/trips/index.astro`)
   - Trip grid component
   - Links to individual trip pages
   - Minimal intro text
   - Responsive layout

5. **Content structure for trips**

   ```
   src/content/
   └── trips/
       ├── config.ts          # Collection schema
       ├── patagonia-2024/
       │   ├── index.md       # Trip metadata
       │   └── images/        # Trip photos
       ├── iceland-2023/
       └── ...
   ```

6. **Placeholder content**
   - 3-5 sample trips with thumbnails
   - Sample hero image for home page

### Success Criteria

- [ ] Home page displays full-screen hero only
- [ ] Trips page displays trip grid
- [ ] Trip grid links route to individual trip pages
- [ ] Mobile responsive
- [ ] Navigation links to trips page

---

## Phase 3: Individual Trip Gallery Pages

### Tasks

1. **Gallery component** (`Gallery.astro`)
   - Full-bleed image display
   - 3:2 aspect ratio optimization
   - Lightbox/modal view (optional)
   - Image lazy loading
   - Navigation between images

2. **Trip page layout** (`src/layouts/TripLayout.astro`)
   - Hero image
   - Trip title, date, location
   - Photo gallery grid
   - Trip description/story
   - Back to trips link

3. **Dynamic routing** (`src/pages/trips/[slug].astro`)
   - getStaticPaths for all trips
   - Pull from content collection
   - Render gallery

4. **Image optimization**
   - Use Astro's Image component
   - Generate multiple sizes
   - WebP format

### Success Criteria

- [ ] Trip pages generate dynamically
- [ ] Galleries display properly
- [ ] Images optimized
- [ ] Navigation works

---

## Phase 4: Sailing/Skipper Page

### Tasks

1. **Sailing page** (`src/pages/sailing.astro`)
   - Hero: yacht/sailing photo
   - Section: Experience & credentials
   - Section: Services offered
   - Section: Yacht photos
   - CTA: Contact for booking

2. **Content structure**
   - Sailing experience text
   - Credentials list
   - Services description
   - 3-5 yacht photos

3. **Service cards component**
   - Clean layout
   - Service name
   - Brief description
   - Icons (optional)

### Success Criteria

- [ ] Sailing page displays
- [ ] Content sections clear
- [ ] Photos render
- [ ] CTA links to contact

---

## Phase 5: Blog Functionality

### Tasks

1. **Blog collection** (`src/content/blog/`)
   - config.ts schema (title, date, description, image)
   - Markdown files for posts

2. **Blog listing page** (`src/pages/blog/index.astro`)
   - Grid of blog posts
   - Post thumbnail
   - Title, date, excerpt
   - Link to full post

3. **Blog post layout** (`src/layouts/BlogLayout.astro`)
   - Hero image
   - Title, date
   - Markdown content rendering
   - Back to blog link

4. **Dynamic blog routes** (`src/pages/blog/[slug].astro`)
   - getStaticPaths
   - Render markdown

5. **Sample content**
   - 2-3 sample expedition stories

### Success Criteria

- [ ] Blog listing displays
- [ ] Individual posts render
- [ ] Markdown formatting works
- [ ] Images in posts display

---

## Phase 6: Contact Page

### Tasks

1. **Contact page** (`src/pages/contact.astro`)
   - Hero section
   - Contact form
   - Contact information
   - Social links

2. **Contact form component** (`ContactForm.astro`)
   - Fields: name, email, message
   - Validation (client-side)
   - Submit to Netlify Forms
   - Success/error messages

3. **Form styling**
   - Minimal design
   - Pill-shaped inputs
   - Submit button (#32373c background)

4. **Contact info section**
   - Email address
   - Instagram: https://www.instagram.com/marcinskalski_photo/
   - YouTube: https://www.youtube.com/@marcinskalski2201
   - Location (optional)

### Success Criteria

- [ ] Form displays correctly
- [ ] Netlify Forms integration works
- [ ] Validation works
- [ ] Contact info visible

---

## Phase 7: About Page

### Tasks

1. **About page** (`src/pages/about.astro`)
   - Hero: portrait or action shot
   - Bio section
   - Photography experience
   - Sailing/skipper experience
   - Equipment/skills
   - Social links

2. **Content scaffolding**
   - Write bio text (or placeholder)
   - Photography background
   - Sailing credentials
   - Skills list

3. **Photo sections**
   - 2-3 about photos
   - Action shots

### Success Criteria

- [ ] About page displays
- [ ] Bio content renders
- [ ] Photos display
- [ ] Links work

---

## Phase 8: Styling & Responsive Polish

### Tasks

1. **Mobile optimization**
   - Test all pages on mobile viewport
   - Adjust spacing (6vw gutters)
   - Fix navigation menu
   - Image sizing

2. **Desktop optimization**
   - Test on desktop (1025px+)
   - 24-column grid
   - Max width 2400px
   - Spacing adjustments (4vw gutters)

3. **Tablet breakpoint** (737-1024px)
   - Adjust layouts
   - Grid columns

4. **Polish**
   - Consistent spacing scale
   - Hover states
   - Transitions
   - Loading states

5. **Accessibility**
   - Alt text on images
   - ARIA labels
   - Keyboard navigation
   - Color contrast

6. **Performance**
   - Image optimization check
   - Lighthouse audit
   - Lazy loading
   - Minimal JavaScript

### Success Criteria

- [ ] Mobile responsive
- [ ] Desktop polished
- [ ] Tablet works
- [ ] Accessibility score >90
- [ ] Lighthouse >90

---

## Phase 9: Deployment

### Tasks

1. **Netlify setup**
   - Create Netlify account (if needed)
   - Connect GitHub repo

2. **Netlify configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18+

3. **Custom subdomain**
   - Configure: mskalski.netlify.app

4. **Forms setup**
   - Enable Netlify Forms
   - Test contact form submission

5. **Environment variables** (if needed)
   - Any API keys

6. **DNS/SSL**
   - Verify HTTPS works
   - Check subdomain

7. **Final testing**
   - Test all pages on production
   - Test forms
   - Test on mobile device
   - Test on different browsers

8. **Documentation**
   - README.md with setup instructions
   - Content guide for adding trips/blog posts

### Success Criteria

- [ ] Site live at mskalski.netlify.app
- [ ] All pages accessible
- [ ] Forms work
- [ ] HTTPS enabled
- [ ] Mobile works on real device

---

## Content TODO (Ongoing)

### Photography Content

- [ ] Curate best photos from each trip
- [ ] Organize by trip/expedition
- [ ] Write trip descriptions
- [ ] Optimize image sizes (2250×1500px for heroes)

### Written Content

- [ ] Bio/about text
- [ ] Sailing experience description
- [ ] Services offered text
- [ ] Blog post 1: [trip/expedition story]
- [ ] Blog post 2: [trip/expedition story]
- [ ] Blog post 3: [trip/expedition story]

### Media

- [ ] Profile/portrait photo
- [ ] Yacht photos
- [ ] Hero images for each page
- [ ] Social media icons (if custom)

---

## Future Enhancements (Post-Launch)

- Email newsletter signup
- E-commerce for print sales
- Client gallery login areas
- Booking calendar integration
- Multi-language support (Polish/English)
- Instagram feed integration
- Video portfolio page (YouTube gallery)
- Testimonials section
- Equipment/gear page

---

## Notes

- Design follows CLAUDE.md guidelines: image-first, minimal text, clean typography
- Mobile-first development approach
- Use mise for all dependency management
- Keep JavaScript minimal for performance
- Focus on photography - let images dominate
