# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router portfolio site. Application entrypoints live in `src/app/`, with `layout.js`, `page.js`, and global styles in `globals.css` and `page.module.css`. Reusable UI is organized by feature in `src/components/<Feature>/`, where each component typically sits beside its CSS file, for example `src/components/Hero/Hero.jsx` and `Hero.css`. Static content for projects, skills, and social links lives in `src/data/`. Runtime-served assets belong in `public/`; `assets/` contains source copies and should not replace `public/` paths without need.

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
- notes about environment variables such as EmailJS keys in `.env.local`.

## Data Files & Skills
Static content lives in `src/data/`. The canonical list of skills and badges is maintained in `skills.md` at the repository root. `src/data/skills.js` mirrors those categories (Programming Languages, Frontend Development & Design, Frameworks & Libraries, Databases, Hosting & Deployment, IDEs, Tools, AI Assistants, AI Tools, and Agentic AI Tools). When adding or removing a skill, update both `skills.md` and `src/data/skills.js` to keep them in sync.

## Configuration & Security Tips
Keep secrets in `.env.local` only. The contact form depends on EmailJS variables such as `NEXT_PUBLIC_EMAILJS_SERVICE_ID`; never hardcode credentials into components or data files.
