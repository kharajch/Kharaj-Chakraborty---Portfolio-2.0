# Kharaj Chakraborty's Portfolio 2.0 ✨

Welcome to the repository for my personal portfolio! This is a modern, highly interactive, and responsive portfolio built to showcase my web development skills, projects, and professional background.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=for-the-badge&logo=threedotjs)

## 📌 Introduction

Hi there! I'm **Kharaj Chakraborty**, a passionate Full Stack AI Application Engineer and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence. This portfolio is designed to be a digital representation of my skills, featuring immersive 3D experiences, smooth animations, and clean code.

## 🚀 Key Features

- **Immersive 3D Graphics**: Utilizing `three.js`, `@react-three/fiber`, and `@react-three/drei` for engaging backgrounds and interactive elements.
- **Smooth Animations**: Powered by `framer-motion` and `gsap` for silky-smooth page transitions and element reveals.
- **Modular Architecture**: Built with scalable components inside Next.js 16 App Router.
- **Responsive Design**: Looks great and functions flawlessly on desktop, tablet, and mobile devices.
- **Contact Form Integration**: Fully functional contact form using `@emailjs/browser`.
- **SEO Optimized**: Dynamic `robots.txt`, `sitemap.xml`, OpenGraph metadata, and Google Search Console verification.
- **Custom 404 Page**: Animated not-found page with GSAP and Framer Motion effects.

## 🛠️ Tech Stack

**Frontend Framework:** Next.js 16 (React 19)
**Styling:** CSS Modules / Global CSS
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

Want to run this project locally, experiment with the code, or contribute? Follow these steps to get a copy of the project up and running!

### 1. Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- `npm` or `yarn` (comes with Node.js)
- [Git](https://git-scm.com/)

### 2. Clone the Repository

Open your terminal and run the following command to clone this repository:

```bash
git clone https://github.com/kharajch/Kharaj-Chakraborty---Portfolio-2.0.git
cd Kharaj-Chakraborty---Portfolio-2.0
```

### 3. Install Dependencies

Install all the required npm packages to get the project working:

```bash
npm install
# or
yarn install
```

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

- The **EmailJS** variables are required for the contact form to work.
- The **Base URL** is used by `robots.js`, `sitemap.js`, and `layout.js` for SEO metadata.

### 5. Run the Local Development Server

Start the Next.js dev server to view the application locally:

```bash
npm run dev
# or 
yarn dev
```

Navigate to `http://localhost:3000` in your web browser. The app will automatically reload if you change any of the source files.

## 📂 Project Structure Walkthrough

```text
Kharaj-Chakraborty---Portfolio-2.0/
├── public/                 # Static assets (images, icons, verification files)
│   ├── images/             # Project screenshots, favicons
│   └── googlefa51c644e0f5dc14.html  # Google Search Console verification
├── planning/               # Project planning & reference documents
│   ├── skills.md           # Canonical skills & badges list
│   ├── prompt.txt          # AI prompt references
│   └── task.md             # Task tracking
├── src/
│   ├── app/                # Next.js 16 App Router configuration
│   │   ├── globals.css     # Global stylesheets
│   │   ├── layout.js       # Root layout and site metadata (SEO, OpenGraph)
│   │   ├── page.js         # Main entry UI page
│   │   ├── page.module.css # Page-level CSS module
│   │   ├── not-found.js    # Custom 404 page with animations
│   │   ├── not-found.css   # 404 page styles
│   │   ├── robots.js       # Dynamic robots.txt generation
│   │   ├── sitemap.js      # Dynamic sitemap generation
│   │   └── favicon.ico     # Site favicon
│   ├── components/         # Reusable React components
│   │   ├── About/          # Provides timeline & biography
│   │   ├── Contact/        # Form logic utilizing EmailJS
│   │   ├── Footer/         # Page Footer
│   │   ├── Hero/           # Top fold showcasing title and 3D overlays
│   │   ├── Navbar/         # Site navigation & mobile menu
│   │   ├── Projects/       # Dynamic grid mapping project data
│   │   ├── Skills/         # Tilted, animated skill cards
│   │   └── ThreeScene/     # Contains 3D Fiber canvases and geometries
│   └── data/               # Static data structures feeding components
│       ├── projects.js     # Master array of all projects showcased
│       ├── skills.js       # Array storing icons and skill names
│       └── socials.js      # Social media links output
├── .env.local              # Environment variables (Ignored by Git)
├── next.config.mjs         # Image formats, strict mode config
├── jsconfig.json           # Path alias (@/*) configuration
└── package.json            # Node module dependencies and lifecycle scripts
```

## 📬 Contact & Links

- **GitHub:** [kharajch](https://github.com/kharajch)
- **Reach Out:** Feel free to connect with me through the form embedded directly into the portfolio application!

---

*Designed and developed with ❤️ by Kharaj Chakraborty*
