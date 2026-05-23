"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import { HiOutlineArrowDown } from "react-icons/hi";
import Image from "next/image";
import dynamic from "next/dynamic";
import "./Hero.css";

const ThreeScene = dynamic(
  () => import("@/components/ThreeScene/ThreeScene"),
  { ssr: false }
);

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    // Ensure DOM is fully painted before running animations
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Name reveal animation
        gsap.fromTo(
          ".hero__name-char",
          { opacity: 0, y: 80, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.04,
            delay: 0.3,
          }
        );

        // Tagline reveal
        gsap.fromTo(
          ".hero__tagline",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.2,
          }
        );

        // Bio reveal
        gsap.fromTo(
          ".hero__bio",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 1.5,
          }
        );
      }, heroRef);

      // Store ctx for cleanup
      heroRef._gsapCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(raf);
      if (heroRef._gsapCtx) {
        heroRef._gsapCtx.revert();
      }
    };
  }, []);

  const nameChars = "Kharaj Chakraborty".split("");

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Three.js Background */}
      <ThreeScene />

      {/* Gradient overlays */}
      <div className="hero__gradient-overlay" />
      <div className="hero__radial-glow" />

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text">
            <motion.div
              className="hero__greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="hero__greeting-line" />
              <span className="hero__greeting-text">Hello, I&apos;m</span>
            </motion.div>

            <h1 className="hero__name" ref={nameRef}>
              {nameChars.map((char, i) => (
                <span
                  key={i}
                  className={`hero__name-char ${char === " " ? "hero__name-space" : ""}`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="hero__tagline">
              Computer Science Student &amp;{" "}
              <span className="accent-text">AI Powered Full Stack Enthusiast</span>
            </p>

            <p className="hero__bio">
              Building scalable web applications and exploring the depths of
              Computer Science &amp; Artificial Intelligence at APC Roy Government College.
            </p>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="btn btn-primary hero__btn"
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="btn btn-outline hero__btn"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              className="hero__social-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <a
                href="https://github.com/kharajch"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__github-link"
              >
                <FaGithub />
                <span>github.com/kharajch</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <div className="hero__image-glow" />
            <div className="hero__image-ring" />
            <div className="hero__image-ring hero__image-ring--outer" />
            <div className="hero__image-container">
              <Image
                src="/images/kharaj.jpg"
                alt="Kharaj Chakraborty"
                width={380}
                height={380}
                priority
                className="hero__image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <Link to="about" smooth={true} duration={800} offset={-80}>
          <span className="hero__scroll-text">Scroll Down</span>
          <HiOutlineArrowDown className="hero__scroll-arrow" />
        </Link>
      </motion.div>
    </section>
  );
}
