# GEMINI.md

This file provides guidance to Gemini-based agents (Antigravity, Gemini Code Assist) when working with code in this repository.

## Common Commands

- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm test` - Run Playwright E2E tests

## Project Architecture

This is a Next.js 16 portfolio application built with React 19 and featuring immersive 3D graphics.

### Tech Stack Highlights
- **Framework**: Next.js 16 with App Router
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion, GSAP with ScrollTrigger, react-spring
- **Analytics**: Vercel Analytics integration
- **Testing**: Playwright
- **Contact Form**: EmailJS integration
- **Icons**: react-icons

### Key Architecture Patterns

#### App Router Structure
- `src/app/layout.js` - Root layout with site metadata (SEO, OpenGraph, Google Search Console verification). Uses `next/font` for optimized typography. Integrates `@vercel/analytics` for performance monitoring.
- `src/app/page.js` - Main page component that orchestrates all sections
- `src/app/not-found.js` - Custom 404 page with GSAP/Framer Motion animations
- `src/app/robots.js` - Dynamic robots.txt generation using `NEXT_PUBLIC_BASE_URL`
- `src/app/sitemap.js` - Dynamic sitemap generation using `NEXT_PUBLIC_BASE_URL`

#### Component Organization
Components are modular and located in `src/components/`:
- **ThreeScene**: Manages the 3D background using React Three Fiber
- **Hero**: Top section with title and 3D overlay effects
- **About**: Timeline and biography section
- **Skills**: Animated skill cards with react-tilt hover effects
- **Certifications**: Professional credentials showcase with 3D tilt effects
- **Projects**: Data-driven project grid mapping from `src/data/projects.js`
- **Contact**: EmailJS-integrated contact form
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site footer with social links

#### Animation System
- GSAP with ScrollTrigger for scroll-based animations
- Framer Motion for element transitions
- React-spring for physics-based animations (used in Project and Certification cards)
- All sections have `.section` class for consistent fade-in effects

#### Data Management
Static data is separated in `src/data/`:
- `projects.js` - Array of project objects
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
- **Resilience**: Proactive WebGL support check and `WebGLErrorBoundary` for graceful fallback on legacy hardware or resource-constrained environments.
- **Optimization**: Optimized rendering settings (`low-power`, disabled antialiasing) to minimize GPU load.
- Custom geometries and materials
- Responsive canvas that adapts to screen size

#### Coding Style
- Modern React function components in JSX
- Double quotes, semicolons, 2-space indentation
- PascalCase for component folders/names, camelCase for variables/functions
- Use `@/*` import alias from `jsconfig.json` for code under `src/`
