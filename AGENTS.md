# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router portfolio site. Application entrypoints live in `src/app/`, with `layout.js`, `page.js`, and global styles in `globals.css`. Reusable UI is organized by feature in `src/components/<Feature>/`, where each component typically sits beside its CSS file. 

Key features include:
* **Hero**: Dynamic top section with profile elements and 3D overlays.
* **About**: Timeline biography and an expandable accordion-style vertical Journey Timeline mapped from `src/data/timeline.js`.
* **Skills**: Animated skill cards with custom 5-group consolidated filtering logic.
* **Certifications**: Professional credentials showcase with 3D tilt effects.
* **Projects**: Featured projects grid mapped from `src/data/projects.js`, incorporating a detailed two-column Showcase Modal overlay (`ProjectModal.jsx`).
* **Blog**: Dynamic article cards grid mapped from `src/data/blog.js` with dedicated reading reader overlays (`BlogModal.jsx`).
* **Contact**: EmailJS-integrated contact form featuring interactive inline validation (error shake alerts, validation text, and checkmark SVGs).

Static data modules live in `src/data/`. Planning documents and task trackers are maintained in `planning/`. Runtime assets (including blog banners under `images/blog/`) live in `public/`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.
- `npm test` runs the Playwright E2E test suite.

## Coding Style & Naming Conventions
Use modern React function components and keep component files in JSX. Follow the existing style: double quotes, semicolons, and 2-space indentation in JS/CSS files. Use PascalCase for component folders and component names (`ThreeScene.jsx`), camelCase for variables/functions, and lower-case data filenames (`projects.js`, `timeline.js`, `blog.js`, `skills.js`). Prefer the configured `@/*` import alias from `jsconfig.json` for code under `src/`.

## Testing Guidelines
The project uses **Playwright** for End-to-End (E2E) testing. Tests are located in the `tests/` directory (e.g., [portfolio.spec.js](file:///K:/Codes/Web%20Devlopment/My%20Projects/Kharaj-Chakraborty---Portfolio-2.0/tests/portfolio.spec.js)). Before running tests, ensure browsers are installed via `npx playwright install chromium`. 

The test suite covers:
- Root page loading and navbar presence.
- Certifications lazy-loading pagination and category filters.
- Project Showcase details modal opening, content matching, and ESC/backdrop dismissals.
- Interactive Contact form validation (email checks, length warnings, and dynamic border transitions).
- Skills consolidated category filter updates.
- About Journey Timeline accordion expand/collapse toggles.
- Blog navigation and article reading modal launches.
- Theme engine shifts (Dark -> Light -> Cyber-Red).
- Mobile responsiveness configurations.

## Commit & Pull Request Guidelines
Recent history mixes plain imperative commits with conventional prefixes (`feat:`). Prefer short, imperative commit subjects and keep them scoped to one change.

## 3D Resilience & Graphics
The application includes a robust WebGL integration in `src/components/ThreeScene/`.
- **Fallback**: Proactive WebGL support checks hide 3D elements on unsupported devices.
- **Error Handling**: `WebGLErrorBoundary` prevents initialization crashes from breaking the UI.
- **Performance**: Optimized GL attributes for reduced resource consumption.

## SEO & Metadata
The site includes comprehensive SEO setup:
- `src/app/layout.js` — Root metadata with OpenGraph, keywords, and Google Search Console verification. Uses `next/font` for performance and integrates `@vercel/analytics` for performance monitoring.
- `src/app/robots.js` — Dynamic robots.txt generation using `NEXT_PUBLIC_BASE_URL`.
- `src/app/sitemap.js` — Dynamic sitemap generation using `NEXT_PUBLIC_BASE_URL`.
- `src/app/not-found.js` — Custom 404 page with GSAP/Framer Motion animations.

## Data Files & Skills
Static content lives in `src/data/`. The canonical list of skills and badges is maintained in `planning/skills.md`. `src/data/skills.js` mirrors those categories. `src/data/certifications.js` stores professional credentials, using PDF paths for previews and `credentialLink` for verification redirects. It also supports branding assets like `google skills.png`. When adding or removing a skill, update both `planning/skills.md` and `src/data/skills.js` to keep them in sync.

## Planning Documents
The `planning/` directory contains project planning and reference documents:
- `skills.md` — Canonical skills and badges list (source of truth for `src/data/skills.js`).
- `prompt.txt` — AI prompt references.
- `task.md` — Task tracking.

## Configuration & Security Tips
Keep secrets in `.env.local` only. The contact form depends on EmailJS variables; the SEO system depends on `NEXT_PUBLIC_BASE_URL`. Never hardcode credentials into components or data files.
