"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon, FiZap } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Certifications", to: "certifications" },
  { name: "Projects", to: "projects" },
  { name: "Blog", to: "blog" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Get initial theme from DOM attribute set by anti-flicker script
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    let nextTheme = "dark";
    if (theme === "dark") nextTheme = "light";
    else if (theme === "light") nextTheme = "cyber-red";
    else if (theme === "cyber-red") nextTheme = "dark";

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="navbar__container container">
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="navbar__logo"
          aria-label="Go to home"
        >
          <span className="navbar__logo-text">kharajch</span>
          <span className="navbar__logo-dot">.</span>
        </Link>

        <div className="navbar__right">
          <ul className="navbar__links">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  activeClass="navbar__link--active"
                  className="navbar__link"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch theme (current: ${theme})`}
          >
            {theme === "dark" && <FiMoon />}
            {theme === "light" && <FiSun />}
            {theme === "cyber-red" && <FiZap />}
          </button>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    spy={true}
                    activeClass="navbar__link--active"
                    className="navbar__mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
