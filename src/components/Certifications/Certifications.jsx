"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { FaArrowUpRightFromSquare, FaCertificate } from "react-icons/fa6";
import Image from "next/image";
import { certificationsData } from "@/data/certifications";
import PDFThumbnail from "./PDFThumbnail";
import "./Certifications.css";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "genai", label: "Gen AI" },
  { id: "ml", label: "Machine Learning" },
  { id: "responsible", label: "Responsible AI" },
  { id: "prompt", label: "Prompt Engineering" },
];

const matchesCategory = (cert, categoryId) => {
  if (categoryId === "all") return true;

  const name = cert.name.toLowerCase();
  const skills = cert.skills.map((s) => s.toLowerCase());

  const hasSkillOrName = (keywords) => {
    return keywords.some(
      (kw) => name.includes(kw) || skills.some((s) => s.includes(kw))
    );
  };

  switch (categoryId) {
    case "ai":
      return (
        hasSkillOrName([
          "artificial intelligence",
          "ai agents",
          "ai productivity",
          "accessible ai",
          "google gemini",
          "large language models",
          "llm",
          "notebooklm",
          "speech-capable generative ai",
          "ai accessibility",
          "ai basics",
        ]) || skills.some((s) => s === "artificial intelligence (ai)")
      );
    case "genai":
      return hasSkillOrName([
        "generative ai",
        "gen ai",
        "genai",
        "image generation",
        "copilot",
      ]);
    case "ml":
      return hasSkillOrName(["machine learning", "mlops"]);
    case "responsible":
      return hasSkillOrName(["responsible ai"]);
    case "prompt":
      return hasSkillOrName([
        "prompt engineering",
        "prompt design",
        "prompts",
        "prompting",
        "vertex ai",
      ]);
    default:
      return false;
  }
};

function CertificationCard({ cert, index }) {
  const [springs, api] = useSpring(() => ({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const isPDF = cert.img.toLowerCase().endsWith(".pdf");

  const getFallbackImage = (issuerName) => {
    const name = issuerName?.toLowerCase() || "";
    if (name.includes("google")) return "/images/google skills.png";
    if (name.includes("microsoft")) return "/images/microsoft learn.png";
    if (name.includes("simplilearn")) return "/images/simplilearn.png";
    return "/images/google skills.png"; // Default fallback
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    api.start({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      boxShadow: "0 12px 40px rgba(230,57,70,0.15)",
    });
  };

  const handleMouseLeave = () => {
    api.start({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
    >
      <animated.div
        className="certification-card"
        style={springs}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="certification-card__image-wrapper">
          {isPDF ? (
            <PDFThumbnail
              fileUrl={cert.img}
              alt={cert.name}
              className="certification-card__image"
              issuer={cert.issuer}
            />
          ) : (
            <Image
              src={cert.img === "/images/google skills.png" ? getFallbackImage(cert.issuer) : cert.img}
              alt={cert.name}
              width={600}
              height={340}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="certification-card__image"
            />
          )}
          <div className="certification-card__image-overlay">
            <a
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card__overlay-link"
            >
              <FaArrowUpRightFromSquare />
              <span>Verify Credential</span>
            </a>
          </div>
        </div>

        <div className="certification-card__content">
          <h3 className="certification-card__title">{cert.name}</h3>
          
          <div className="certification-card__issuer-date">
            <span className="certification-card__issuer">{cert.issuer}</span>
            <span className="certification-card__date">{cert.date}</span>
          </div>

          <div className="certification-card__id">
            <span>ID: {cert.credentialId}</span>
          </div>

          <div className="certification-card__tags">
            {cert.skills.map((skill) => (
              <span key={skill} className="certification-card__tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </animated.div>
    </motion.div>
  );
}

export default function Certifications() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCerts = useMemo(() => {
    return certificationsData.filter((cert) =>
      matchesCategory(cert, activeCategory)
    );
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleCount(6); // Reset pagination for the new category
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="certifications section" id="certifications" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="certifications__label">Certifications</span>
          <h2 className="section-title">
            Professional <span className="accent-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my continuous learning and verified expertise in various technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="certifications__filters">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`certifications__filter-btn ${
                activeCategory === category.id ? "certifications__filter-btn--active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div layout className="certifications__grid">
          <AnimatePresence mode="popLayout">
            {filteredCerts.slice(0, visibleCount).map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredCerts.length && (
          <div className="certifications__load-more-container">
            <button className="certifications__load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

