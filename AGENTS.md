# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router portfolio site. Application entrypoints live in `src/app/`, with `layout.js`, `page.js`, and global styles in `globals.css` and `page.module.css`. Reusable UI is organized by feature in `src/components/<Feature>/`, where each component typically sits beside its CSS file, for example `src/components/Hero/Hero.jsx` and `Hero.css`. Static content for projects, skills, and social links lives in `src/data/`. Planning documents and the canonical skills list live in `planning/`. Runtime-served assets belong in `public/`; `assets/` contains source copies and should not replace `public/` paths without need.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.

There is currently no dedicated `test` or `lint` script in `package.json`. If you add either, document the command here and in `README.md`.

## Coding Style & Naming Conventions
Use modern React function components and keep component files in JSX. Follow the existing style: double quotes, semicolons, and 2-space indentation in JS/CSS files. Use PascalCase for component folders and component names (`ThreeScene.jsx`), camelCase for variables/functions, and lower-case data filenames (`projects.js`, `skills.js`). Prefer the configured `@/*` import alias from `jsconfig.json` for code under `src/`.

## Testing Guidelines
No automated test suite is configured yet. For UI changes, verify locally with `npm run dev` and do a production sanity check with `npm run build`. When adding tests, place them near the feature or under a dedicated `src/__tests__/` folder, and use clear names such as `Hero.test.jsx`.

## Commit & Pull Request Guidelines
Recent history mixes plain imperative commits (`Implement root layout metadata`) with conventional prefixes (`feat:`). Prefer short, imperative commit subjects and keep them scoped to one change. For pull requests, include:
- a brief summary of user-facing changes,
- linked issue or task reference when applicable,
- screenshots or short recordings for visual updates,
- notes about environment variables such as EmailJS keys and `NEXT_PUBLIC_BASE_URL` in `.env.local`.

## SEO & Metadata
The site includes comprehensive SEO setup:
- `src/app/layout.js` — Root metadata with OpenGraph, keywords, and Google Search Console verification.
- `src/app/robots.js` — Dynamic robots.txt generation using `NEXT_PUBLIC_BASE_URL`.
- `src/app/sitemap.js` — Dynamic sitemap generation using `NEXT_PUBLIC_BASE_URL`.
- `src/app/not-found.js` — Custom 404 page with GSAP/Framer Motion animations.
- `public/googlefa51c644e0f5dc14.html` — Google Search Console verification file.

## Data Files & Skills
Static content lives in `src/data/`. The canonical list of skills and badges is maintained in `planning/skills.md`. `src/data/skills.js` mirrors those categories (Programming Languages, Frontend Development & Design, Frameworks & Libraries, Backend & AI Frameworks, Databases, Hosting & Deployment, IDEs, Tools, AI Assistants, AI Tools, and Agentic AI Tools). When adding or removing a skill, update both `planning/skills.md` and `src/data/skills.js` to keep them in sync.

## Planning Documents
The `planning/` directory contains project planning and reference documents:
- `skills.md` — Canonical skills and badges list (source of truth for `src/data/skills.js`).
- `prompt.txt` — AI prompt references.
- `task.md` — Task tracking.

## Configuration & Security Tips
Keep secrets in `.env.local` only. The contact form depends on EmailJS variables such as `NEXT_PUBLIC_EMAILJS_SERVICE_ID`; the SEO system depends on `NEXT_PUBLIC_BASE_URL`. Never hardcode credentials into components or data files.
