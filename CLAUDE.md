# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm test` - Run Playwright E2E tests

## Project Architecture

This is a Next.js 16 portfolio application built with React 19 and featuring immersive 3D graphics.

### Tech Stack Highlights
- **Framework**: Next.js 16 with App Router (React 19)
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion, GSAP with ScrollTrigger, react-spring, react-flip-toolkit
- **Analytics**: Vercel Analytics integration
- **Testing**: Playwright
- **Contact Form**: EmailJS integration
- **Icons**: react-icons (both `react-icons/fa6` and `react-icons/si`)

### Key Architecture Patterns

#### App Router Structure
- `src/app/layout.js` - Root layout with site metadata, optimized font loading via `next/font`, and Vercel Analytics integration.
- `src/app/page.js` - Main page component that orchestrates all sections (Navbar, Hero, About, Skills, Certifications, Projects, Contact, Footer)
- `src/app/not-found.js` - Custom 404 page with GSAP/Framer Motion animations
- `src/app/robots.js` - Dynamic robots.txt generation
- `src/app/sitemap.js` - Dynamic sitemap generation

#### Component Organization
Components are modular and located in `src/components/`:
- **ThreeScene**: Manages the 3D background using React Three Fiber
- **Hero**: Top section with title, 3D overlay effects, and custom light theme gradient and glow overlays (`[data-theme='light']`) to optimize readability.
- **About**: Contains biography text and an interactive **Journey Timeline** (collapsible experience cards mapped from `src/data/timeline.js`)
- **Skills**: Animated skill cards. Uses consolidated **FILTER_GROUPS** grouping logic (5 categories) to filter cards smoothly using `react-flip-toolkit`
- **Certifications**: Professional credentials showcase with 3D tilt effects, sorted by impactfulness and categorized under 5 filters (All, AI & Gen AI, Prompt Engineering, Git & GitHub, Data Science & ML)
- **Projects**: Data-driven project grid. Click cards to open the **Project Showcase Modal** (`ProjectModal.jsx`) which displays screenshots, categorized tech stack arrays, feature checklists, and repository links
- **Contact**: EmailJS-integrated contact form featuring interactive validation (onBlur validations, email regex checking, error borders, loading spinners, form shakes on invalid submits, and self-drawing checkmark SVGs on successful sends)
- **Navbar**: Responsive navigation with mobile menu (featuring light theme container background overrides), theme switcher, and scroll detection.
- **Footer**: Site footer with social links

#### Animation System
- GSAP with ScrollTrigger for scroll-based animations
- Framer Motion for element transitions (height collapse accordion triggers, modal entrances, backdrop blurs)
- React-spring for physics-based animations
- React Flip Toolkit for FLIP transition layouts on skills filters
- All sections have `.section` class for consistent fade-in effects

#### Data Management
Static data is separated in `src/data/`:
- `projects.js` - Array of featured projects, containing long descriptions, feature strings, and categorized tech stacks
- `timeline.js` - Array of timeline nodes (experience/education) with date ranges and detail bullet arrays
- `certifications.js` - Array of professional certification objects. Uses PDF paths for previews and `credentialLink` for verification redirects. Supports branding assets like `google skills.png`.
- `skills.js` - Array of skill categories and icons. Keep in sync with `planning/skills.md`.
- `socials.js` - Social media links and icons

#### Planning & Documentation
The `planning/` directory contains project planning documents:
- `skills.md` - Canonical list of skills and badges (source of truth for `src/data/skills.js`)
- `prompt.txt` - AI prompt references
- `task.md` - Task tracking

#### Environment Setup
Required environment variables in `.env.local`:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - EmailJS service ID for the contact form
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `NEXT_PUBLIC_BASE_URL` - Base URL for SEO (robots.txt, sitemap, metadata)

#### 3D Integration
The ThreeScene component provides:
- Interactive 3D background using @react-three/fiber
- **Resilience**: WebGL support checks and Error Boundaries for graceful fallback.
- **Performance**: Low-power preference and performance-optimized GL settings.
- Custom geometries and materials
- Responsive canvas that adapts to screen size

#### Coding Style
- Modern React function components in JSX
- Double quotes, semicolons, 2-space indentation
- PascalCase for component folders/names, camelCase for variables/functions
- Use `@/*` import alias from `jsconfig.json` for code under `src/`
