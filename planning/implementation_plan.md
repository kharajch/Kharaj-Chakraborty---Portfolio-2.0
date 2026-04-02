# Kharaj Chakraborty — Portfolio Website (2.0)

A modern, animated portfolio website built with Next.js, featuring a black/white/red theme with premium animations powered by Framer Motion, GSAP, and Three.js.

---

## User Review Required

> [!IMPORTANT]
> **Google Stitch Usage**: I'll use Google Stitch to prototype the UI design screens first, then implement the approved designs in code. This ensures the visual direction is right before coding.

> [!IMPORTANT]
> **GitHub Remote Repository**: I'll create the repo named `Kharaj Chakraborty---Portfolio (2.0)`. Please confirm your GitHub username is `kharajch` and that you're logged in via `gh` CLI, or provide a personal access token if needed.

> [!WARNING]
> **No Tailwind CSS**: Strictly vanilla CSS will be used. All styling will be custom-built with CSS custom properties, animations, and modern CSS features.

---

## Proposed Changes

### Phase 1: Google Stitch — UI Design Prototyping

Before writing code, I'll create screen designs in Google Stitch to establish the visual direction:

1. **Create a Stitch Project** — "Kharaj Portfolio 2.0"
2. **Create Design System** — Black/white/red color palette, modern typography (Inter/Outfit), rounded shapes
3. **Generate Screen Designs** for each section:
   - Hero/Home section with profile photo
   - About section
   - Skills grid
   - Projects showcase
   - Contact section
   - Navigation bar

---

### Phase 2: Project Setup

#### [NEW] Next.js Project Initialization
- Initialize Next.js 15 project with App Router in the Portfolio directory
- Configure `next.config.js` for image optimization and static assets
- Set up folder structure:

```
Portfolio/
├── assets/images/          # Existing assets (kept in place)
├── public/
│   ├── images/             # Copy assets here for Next.js
│   │   ├── kharaj.jpg
│   │   ├── favicon.ico
│   │   └── projects/
│   │       ├── Portfolio.png
│   │       ├── SongFindX.png
│   │       └── MindMatters.png
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout with metadata, fonts
│   │   ├── page.js         # Main page assembling all sections
│   │   └── globals.css     # Global styles & CSS custom properties
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── ThreeScene/
│   │   │   └── ThreeScene.jsx  # Three.js/R3F background
│   │   ├── AnimatedSection/
│   │   │   └── AnimatedSection.jsx  # Reusable scroll reveal wrapper
│   │   ├── CustomCursor/
│   │   │   ├── CustomCursor.jsx
│   │   │   └── CustomCursor.css
│   │   └── ParticleField/
│   │       └── ParticleField.jsx  # Three.js particle system
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useInView.js
│   └── data/
│       ├── skills.js       # Skills data extracted from README
│       ├── projects.js     # Projects data
│       └── socials.js      # Social links data
├── .gitignore
├── package.json
├── next.config.js
└── README.md
```

#### [NEW] Dependencies
```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "framer-motion": "^12",
    "gsap": "^3",
    "@react-three/fiber": "^9",
    "@react-three/drei": "^10",
    "three": "^0.170",
    "react-icons": "^5",
    "react-scroll": "^1",
    "react-tilt": "^1",
    "react-parallax": "^3",
    "@react-spring/web": "^9",
    "react-flip-toolkit": "^7"
  }
}
```

---

### Phase 3: Design System (Vanilla CSS)

#### [NEW] `globals.css` — Design Tokens & System

```css
/* Color Palette */
--color-bg-primary: #0a0a0a;        /* Deep black */
--color-bg-secondary: #111111;       /* Slightly lighter */
--color-bg-card: #1a1a1a;           /* Card backgrounds */
--color-text-primary: #ffffff;       /* White text */
--color-text-secondary: #a0a0a0;    /* Muted text */
--color-accent: #e63946;            /* Red accent */
--color-accent-hover: #ff4757;      /* Lighter red on hover */
--color-accent-glow: rgba(230,57,70,0.3); /* Red glow */
--color-border: rgba(255,255,255,0.08);

/* Typography — Google Fonts: Inter + Outfit */
/* Smooth animations, glassmorphism effects, gradients */
```

---

### Phase 4: Component Implementation

#### 1. Navbar
- Fixed/sticky transparent navbar with blur backdrop
- Logo (name) on the left, nav links on the right
- Smooth scroll to sections via `react-scroll`
- Hamburger menu for mobile
- Active section highlighting on scroll
- GSAP entrance animation

#### 2. Hero Section
- Full viewport height
- Three.js animated particle field background (R3F)
- Profile photo with animated border/glow effect
- Name with GSAP text reveal animation
- Tagline: "Computer Science Student & Fullstack Web Developer"
- CTA buttons (Contact Me, View Projects)
- Scroll indicator at bottom
- Framer Motion stagger animations for elements

#### 3. About Section
- Split layout: text content + visual element
- Bio text with Framer Motion reveal
- Key stats/highlights (animated counters)
- React Parallax background effect
- GSAP scroll-triggered animations

#### 4. Skills Section
- Categorized skill cards matching README categories:
  - Programming Languages (C, Java, Python)
  - Frontend Development & Design (HTML5, CSS3, JS, Figma, Google Stitch)
  - Frameworks & Libraries (Node.js, Express, React, Next.js, Tailwind)
  - Databases (MongoDB, MySQL)
  - Hosting & Deployment (Vercel, Netlify, Render, Railway)
  - IDEs (VS Code, Antigravity, Cursor, Windsurf)
  - Tools (Git, GitHub, Postman, MongoDB Compass, EmailJS)
  - AI Assistants (ChatGPT, Copilot, Gemini, Grok, DeepSeek, Perplexity, Claude, Kimi, Qwen)
  - Agentic AI Tools (Claude Code, OpenAI Codex, Gemini Code Assist, GitHub Copilot)
- React Tilt 3D hover effects on cards
- React Flip Toolkit for category switching animations
- Framer Motion stagger reveals
- Icon representation for each skill using react-icons

#### 5. Projects Section
- Project cards with hover expand effect
- Project images (from assets)
- Tech stack tags
- GitHub repo links
- React Spring hover animations
- Framer Motion layout animations
- Three projects: Portfolio, SongFindX, MindMatters

#### 6. Contact Section
- Contact info display (Address, Social links)
- Social media icons grid (from README)
- Email/contact CTA
- Framer Motion entrance animations
- Interactive map or location visual

#### 7. Footer
- Minimal footer with copyright
- Quick nav links
- Social icons
- "Made with ❤️" attribution

---

### Phase 5: Animation Strategy

| Library | Usage |
|---------|-------|
| **GSAP** | Text reveals, navbar entrance, scroll-triggered animations (ScrollTrigger), hero text animation |
| **Framer Motion** | Section entrances, stagger animations, layout transitions, page transitions, hover effects |
| **Three.js / R3F** | Hero background particle field, interactive 3D elements |
| **React Spring** | Physics-based hover animations on project cards |
| **React Tilt** | 3D tilt effect on skill cards |
| **React Parallax** | Parallax scrolling backgrounds between sections |
| **React Flip Toolkit** | Skill category switching animations |
| **React Scroll** | Smooth scrolling navigation |

---

### Phase 6: Git & Deployment

1. `git init` in project root
2. Create `.gitignore` with `node_modules`, `.next`, `.env`
3. Create remote repo: `Kharaj Chakraborty---Portfolio (2.0)`
4. Commit strategy:
   - Initial commit: Project setup
   - Design system & global styles
   - Component implementations (per section)
   - Animations & polish
   - Final commit

---

## Open Questions

> [!IMPORTANT]
> 1. **GitHub Auth**: Are you logged into GitHub CLI (`gh`)? I need this to create the remote repository. If not, should I skip remote creation and you'll do it manually?
> 2. **Contact Form**: Would you like a functional contact form (needs EmailJS setup) or just display contact info with social links?
> 3. **Email Address**: Should I include an email address in the contact section? If so, which one?
> 4. **Google Stitch**: Would you like me to prototype the UI in Stitch first, or should I go straight to coding since the design direction (black/white/red, modern) is clear?

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify no build errors
- Run `npm run dev` and visually verify in browser
- Check all sections render correctly
- Verify responsive design at mobile/tablet/desktop breakpoints

### Manual Verification
- Browser testing via browser subagent to capture screenshots
- Verify all animations are smooth
- Check all links work (GitHub repos, socials)
- Verify images load correctly
- Test navigation scroll behavior
- Lighthouse audit for performance
