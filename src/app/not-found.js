"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import "./not-found.css";

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${-(Math.random() * 20)}%`,
      size: Math.random() * 3 + 1,
      duration: `${Math.random() * 8 + 6}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <div className="notfound__particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="notfound__particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--duration": p.duration,
            "--delay": p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function NotFound() {
  const codeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 404 number punch-in
      gsap.fromTo(
        ".notfound__code",
        { opacity: 0, scale: 0.5, rotateX: -40 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      // Card slide up
      gsap.fromTo(
        ".notfound__card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6,
        }
      );

      // Corner decorations fade in
      gsap.fromTo(
        ".notfound__corner",
        { opacity: 0 },
        {
          opacity: 0.15,
          duration: 1.2,
          ease: "power2.out",
          delay: 1,
          stagger: 0.1,
        }
      );
    }, codeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="notfound" ref={codeRef}>
      {/* Ambient background */}
      <div className="notfound__bg-grid" />
      <div className="notfound__glow-orb notfound__glow-orb--primary" />
      <div className="notfound__glow-orb notfound__glow-orb--secondary" />
      <div className="notfound__glow-orb notfound__glow-orb--center" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Corner accents */}
      <div className="notfound__corner notfound__corner--tl" />
      <div className="notfound__corner notfound__corner--tr" />
      <div className="notfound__corner notfound__corner--bl" />
      <div className="notfound__corner notfound__corner--br" />

      {/* Main content */}
      <div className="notfound__content">
        {/* 404 Number */}
        <motion.div
          className="notfound__code-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          <h1 className="notfound__code">404</h1>
          <div className="notfound__code-shadow" />
        </motion.div>

        {/* Info Card */}
        <motion.div
          className="notfound__card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.2, 0, 0, 1] }}
        >
          <div className="notfound__card-shimmer" />

          <h2 className="notfound__title">Page Not Found</h2>
          <p className="notfound__description">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="notfound__actions">
            <Link href="/" className="notfound__btn notfound__btn--primary" id="back-home-btn">
              <HiArrowLeft className="notfound__btn-icon" />
              Back to Home
            </Link>
            <Link href="/#projects" className="notfound__btn notfound__btn--outline" id="view-projects-btn">
              <FiExternalLink className="notfound__btn-icon" />
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Breadcrumb hint */}
        <motion.div
          className="notfound__breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span>kharajch</span>
          <span className="notfound__breadcrumb-sep">/</span>
          <span className="notfound__breadcrumb-current">404</span>
        </motion.div>
      </div>
    </section>
  );
}
