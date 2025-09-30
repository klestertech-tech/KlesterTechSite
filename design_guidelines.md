# Klester Tech Solar Website - Design Guidelines

## Design Approach: Reference-Based (Solar Industry Leaders)

**Primary References**: Tesla Energy (clean, tech-forward), Stripe (professional trust-building), Sunrun (solar-specific UX)

**Design Philosophy**: Professional sustainability - combining cutting-edge technology presentation with environmental consciousness and trust-building elements.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 142 71% 45% (vibrant teal-green, representing clean energy)
- Primary Hover: 142 71% 38%
- Secondary: 210 100% 45% (sky blue, solar/clean sky association)
- Neutral Gray: 220 9% 46%
- Background: 0 0% 100% (white)
- Text: 222 47% 11% (near-black)
- Success/Stats: 142 76% 36% (darker green for credibility)
- Accent: 38 92% 50% (warm orange for CTAs, sunset/energy)

**Dark Mode:**
- Primary: 142 84% 44%
- Background: 222 47% 11%
- Surface: 217 33% 17%
- Text: 210 40% 98%

### B. Typography

**Font Stack (Google Fonts):**
- Headings: 'Inter' (700, 600, 500) - modern, clean, professional
- Body: 'Inter' (400, 500) - consistent, highly readable
- Stats/Numbers: 'Space Grotesk' (700) - distinctive for impact metrics

**Scale:**
- Hero H1: text-5xl md:text-6xl lg:text-7xl font-bold
- Section H2: text-3xl md:text-4xl lg:text-5xl font-semibold
- Card H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small/Captions: text-sm

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Card gaps: gap-6 md:gap-8
- Component spacing: space-y-4 md:space-y-6

**Grid System:**
- Stats: grid-cols-2 md:grid-cols-4
- Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Products: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Portfolio: grid-cols-1 md:grid-cols-2 with featured project spanning full width

### D. Component Library

**Navigation:**
- Sticky header with blur backdrop (backdrop-blur-lg bg-white/90)
- Logo left, nav center/right, prominent "Get Free Quote" CTA button
- Mobile: hamburger menu with slide-in drawer

**Hero Sections:**
- Full-width image backgrounds with gradient overlays (from-primary/90 to-secondary/90)
- Centered content with max-w-4xl
- Dual CTA buttons (primary solid, secondary outline with blur backdrop)
- Home: Large hero with stats bar below (absolute positioned or separate section)

**Cards:**
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-lg hover:shadow-xl transition)
- White background with border (border border-gray-200)
- Icon top-left or centered, heading, description
- Hover: slight lift transform (-translate-y-1)

**Stats Display:**
- Large numbers (Space Grotesk, text-4xl md:text-5xl font-bold text-primary)
- Label below (text-sm text-gray-600)
- Grid layout with dividers between stats
- Animated counter effect on scroll (optional enhancement)

**Forms (Contact Page):**
- Two-column layout (form left, contact info right) on desktop
- Input fields: border-gray-300 focus:border-primary focus:ring-primary rounded-lg
- Dropdowns: Custom styled select with chevron icon
- Submit button: Full-width primary button with arrow icon
- Validation states with clear error messages

**Portfolio Cards:**
- Featured projects: Large image with overlay gradient containing stats
- Stats overlay: capacity, investment, savings in pill badges
- Gallery grid: Hover reveals project details
- Image aspect ratio: 16:9 for consistency

**Call-to-Action Sections:**
- Full-width colored backgrounds (bg-primary or bg-gradient-to-r)
- Centered content with strong contrast
- Single focused message with prominent button
- py-20 md:py-28 for breathing room

**Footer:**
- Multi-column layout (Company, Solutions, Resources, Contact)
- Newsletter signup with inline form
- Social media icons
- Copyright and certification badges (GSTIN)
- Background: bg-gray-900 text-gray-300

### E. Images

**Hero Images:**
- Home: Solar panel installation on modern building rooftop at golden hour, wide shot showing scale and professionalism
- About: Team of technicians installing solar panels, showing expertise
- Products: Close-up of high-tech solar panels with blue sky reflection
- Solutions: Split image showing residential/commercial installations
- Portfolio: Aerial view of large-scale solar farm installation
- Contact: Office building with solar installation

**Supporting Images:**
- Product cards: Product-specific imagery (water heater, inverter, street lights)
- Portfolio gallery: Actual project photos with before/after comparisons
- About page: Office location, team photos, manufacturing facility
- Icons throughout: Use Heroicons for consistency (sun, lightning-bolt, chart-bar, users)

### F. Interactions & Animations

**Minimal, Purposeful Animations:**
- Scroll-triggered fade-ins for sections (opacity + slight Y transform)
- Hover states: subtle scale/shadow changes (transform scale-105)
- Stats counter animation on viewport entry
- Smooth scrolling (scroll-behavior: smooth)
- Page transitions: Fade only, no complex animations
- Button states: Standard hover/active without custom interactions

### G. Responsive Strategy

**Breakpoints:**
- Mobile-first approach
- md: 768px (tablets)
- lg: 1024px (desktop)
- xl: 1280px (large screens)

**Key Adaptations:**
- Hero text scales down, buttons stack on mobile
- Multi-column grids collapse to single column
- Stats go from 4-column to 2-column on mobile
- Contact form stacks vertically on mobile
- Navigation converts to mobile drawer menu

---

## Page-Specific Guidelines

**Home**: Hero with image, stats bar, about preview (2-column with image), 6 benefits grid, CTA section with gradient background

**About**: Hero, company story with timeline/milestones, 4 missions in 2x2 grid, impact categories in 4-column layout, contact details in prominent footer-style section

**Products**: Hero, 6 products in card grid with icons and hover effects, advanced technologies section with badge-style presentation

**Solutions**: Hero, 4 solution types in large cards with benefit lists, 5-step process with numbered timeline/stepper component

**Portfolio**: Hero, 2 featured projects in spotlight cards with stats, gallery grid of 6 projects, impact statistics dashboard

**Contact**: Hero, two-column layout (form + info), map integration placeholder, business hours, multiple contact methods clearly displayed