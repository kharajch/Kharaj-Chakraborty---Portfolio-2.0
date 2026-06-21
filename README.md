# Kharaj Chakraborty's Portfolio 2.0 ✨

Welcome to the repository for my personal portfolio! This is a modern, highly interactive, and responsive portfolio built to showcase my web development skills, projects, and professional background.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=for-the-badge&logo=threedotjs)
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-Performance-black?style=for-the-badge&logo=vercel)
![Playwright](https://img.shields.io/badge/Playwright-E2E_Testing-green?style=for-the-badge&logo=playwright)

## 📌 Introduction

Hi there! I'm **Kharaj Chakraborty**, a passionate Full Stack AI Application Engineer and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence. This portfolio is designed to be a digital representation of my skills, featuring immersive 3D experiences, smooth animations, and clean code.

## 🚀 Key Features

- **Project Showcase Modal**: Click on any featured project card to open an immersive, split-column details overlay containing high-quality screenshots, categorized tech stack badges (Frontend, Backend, AI & Tools), detailed specifications, and repository/live actions.
- **Interactive Journey Timeline**: An accordion-style vertical journey timeline located in the About section. Details professional experience and educational background, featuring custom logo initials, date indicators, and smooth height expansion transitions.
- **Insights Blog Section**: Dedicated reading area containing tech articles on Web Architecture, AI Agents, and Scroll Animations, complete with custom high-fidelity banner graphics and reader modals.
- **Dynamic Contact Form Validation**: Features interactive inline validation (RFC 5322 email regex checks, length limits) with field success/error outlines, submit button loading spinner state triggers, input shake cues on invalid submissions, and self-drawing SVG checkmark animations on successful messages.
- **Consolidated Skills Filtering**: Merges 11 micro-categories into 5 primary filters (Languages, Frameworks, AI & Agents, Databases, Tools & Cloud) to prevent button wrap clutter and remove duplicate "AI" tags.
- **Immersive 3D Graphics**: Utilizing `three.js`, `@react-three/fiber`, and `@react-three/drei` for engaging backgrounds and interactive elements. Includes a **graceful fallback mechanism** that hides 3D elements on devices with limited WebGL support, ensuring accessibility.
- **Smooth Animations & Themes**: Powered by `framer-motion` and `gsap` for silky-smooth page transitions and element reveals. Features high-contrast dark, light, and cyber-red theme modes with optimized overlays.
- **End-to-End Testing**: Integrated **Playwright** suite verifying modal controls, inline form validation states, mobile layouts, and theme engine toggles.
- **Performance Optimized**: Leverages `next/font` for zero layout shift and optimized image scaling with the `sizes` attribute.
- **Professional Certifications**: Showcase verified credentials with interactive 3D cards. Supports both image-based badges and PDF certificate previews, with links redirecting to official verification pages.
- **Analytics & Monitoring**: Integrated **Vercel Analytics** for real-time performance monitoring.
- **SEO Optimized**: Dynamic `robots.txt`, `sitemap.xml`, OpenGraph metadata, and Google Search Console verification.

## 🛠️ Tech Stack

**Frontend Framework:** Next.js 16 (React 19)  
**Styling:** Global CSS with CSS Custom Properties  
**Testing:** Playwright  
**3D Graphics & Animations:**
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `framer-motion`
- `gsap`
- `react-spring`
- `react-flip-toolkit`

**Utilities:** `react-icons`, `react-scroll`, `react-parallax`, `react-tilt`

## 📖 Full Walkthrough (Installation & Setup)

Follow these steps to get a copy of the project up and running locally!

### 1. Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- `npm` or `yarn`
- [Git](https://git-scm.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/kharajch/Kharaj-Chakraborty---Portfolio-2.0.git
cd Kharaj-Chakraborty---Portfolio-2.0
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### 5. Run the Local Development Server

```bash
npm run dev
```

### 6. Run E2E Tests

Execute the Playwright test suite to verify the application:

```bash
# Ensure browsers are installed first
npx playwright install chromium

# Run the tests
npm test
```

## 📂 Project Structure Walkthrough

```text
Kharaj-Chakraborty---Portfolio-2.0/
├── public/                 # Static assets (images, icons)
│   └── images/
│       ├── blog/           # Generated abstract blog post banner graphics
│       └── projects/       # High-quality screenshots of featured works
├── tests/                  # Playwright E2E test suite (portfolio.spec.js)
├── planning/               # Project planning, task tracker, & canonical skills list
├── src/
│   ├── app/                # Next.js 16 App Router configuration
│   │   ├── globals.css     # Global Kinetic Noir Design System
│   │   ├── layout.js       # Root layout with metadata and analytics
│   │   └── page.js         # Main orchestrator mapping all page sections
│   ├── components/         # Reusable React components
│   │   ├── About/          # Info grids and expandable Journey Timeline
│   │   ├── Blog/           # Article display cards and reading modals
│   │   ├── Contact/        # EmailJS form with active inline validations
│   │   ├── Projects/       # Showcase cards and project detail overlays
│   │   └── ...
│   └── data/               # Static data modules
│       ├── projects.js     # Array storing projects detailed details
│       ├── timeline.js     # Array storing experience and education timeline data
│       ├── blog.js         # Array storing blog article paragraphs
│       ├── certifications.js # Array storing credentials metadata
│       └── skills.js       # Array storing icons and skill names
└── package.json            # Node module dependencies and scripts
```

## 📬 Contact & Links

- **GitHub:** [kharajch](https://github.com/kharajch)
- **Reach Out:** Connect with me through the enhanced Contact form directly in the app!

---

*Designed and developed with ❤️ by Kharaj Chakraborty*
