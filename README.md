# Kharaj Chakraborty's Portfolio 2.0 ✨

Welcome to the repository for my personal portfolio! This is a modern, highly interactive, and responsive portfolio built to showcase my web development skills, projects, and professional background.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=for-the-badge&logo=threedotjs)
![Playwright](https://img.shields.io/badge/Playwright-E2E_Testing-green?style=for-the-badge&logo=playwright)

## 📌 Introduction

Hi there! I'm **Kharaj Chakraborty**, a passionate Full Stack AI Application Engineer and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence. This portfolio is designed to be a digital representation of my skills, featuring immersive 3D experiences, smooth animations, and clean code.

## 🚀 Key Features

- **Immersive 3D Graphics**: Utilizing `three.js`, `@react-three/fiber`, and `@react-three/drei` for engaging backgrounds and interactive elements.
- **Smooth Animations**: Powered by `framer-motion` and `gsap` for silky-smooth page transitions and element reveals.
- **End-to-End Testing**: Integrated **Playwright** suite for verifying site stability and responsiveness.
- **Performance Optimized**: Leverages `next/font` for zero layout shift and optimized image scaling with the `sizes` attribute.
- **Professional Certifications**: Dedicated section for showcasing verified credentials with interactive 3D cards. Supports both image-based badges and direct PDF certificate previews.
- **Modular Architecture**: Built with scalable components inside Next.js 16 App Router.
- **Responsive Design**: Looks great and functions flawlessly on desktop, tablet, and mobile devices.
- **Contact Form Integration**: Fully functional contact form using `@emailjs/browser`.
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

### 5. Run the Local Development Server

Start the Next.js dev server to view the application locally:

```bash
npm run dev
# or 
yarn dev
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
├── tests/                  # Playwright E2E test suite
├── planning/               # Project planning & reference documents
├── src/
│   ├── app/                # Next.js 16 App Router configuration
│   │   ├── globals.css     # Global design system
│   │   ├── layout.js       # Root layout with next/font optimization
│   │   └── page.js         # Main entry UI page
│   ├── components/         # Reusable React components
│   │   ├── Certifications/ # Professional credentials showcase
│   │   ├── Projects/       # Dynamic grid mapping project data
│   │   └── ...
│   └── data/               # Static data structures
│       ├── projects.js     # Master array of all projects
│       ├── certifications.js # Array storing professional credentials
│       └── skills.js       # Array storing icons and skill names
└── package.json            # Node module dependencies and test scripts
```

## 📬 Contact & Links

- **GitHub:** [kharajch](https://github.com/kharajch)
- **Reach Out:** Feel free to connect with me through the form embedded directly into the portfolio application!

---

*Designed and developed with ❤️ by Kharaj Chakraborty*
