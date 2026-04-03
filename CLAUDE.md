# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm test` - Run tests (if tests are set up)
- `npm test -- filename.test.js` - Run a single test file

## Project Architecture

This is a Next.js 16 portfolio application built with React 19 and featuring immersive 3D graphics.

### Tech Stack Highlights
- **Framework**: Next.js 16 with App Router
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion, GSAP with ScrollTrigger, react-spring
- **Contact Form**: EmailJS integration
- **Icons**: react-icons

### Key Architecture Patterns

#### App Router Structure
- `src/app/layout.js` - Root layout with site metadata (SEO, OpenGraph)
- `src/app/page.js` - Main page component that orchestrates all sections

#### Component Organization
Components are modular and located in `src/components/`:
- **ThreeScene**: Manages the 3D background using React Three Fiber
- **Hero**: Top section with title and 3D overlay effects
- **About**: Timeline and biography section
- **Skills**: Animated skill cards with react-tilt hover effects
- **Projects**: Data-driven project grid mapping from `src/data/projects.js`
- **Contact**: EmailJS-integrated contact form
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site footer with social links

#### Animation System
- GSAP with ScrollTrigger for scroll-based animations
- Framer Motion for element transitions
- React-spring for physics-based animations
- All sections have `.section` class for consistent fade-in effects

#### Data Management
Static data is separated in `src/data/`:
- `projects.js` - Array of project objects (title, description, tech stack, image, demo link)
- `skills.js` - Array of skill names and icons
- `socials.js` - Social media links and icons

#### Environment Setup
Contact form requires EmailJS credentials in `.env.local`:
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

#### 3D Integration
The ThreeScene component provides:
- Interactive 3D background using @react-three/fiber
- Custom geometries and materials
- Responsive canvas that adapts to screen size