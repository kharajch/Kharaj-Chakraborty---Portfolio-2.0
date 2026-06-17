"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare, FaXmark, FaCheck } from "react-icons/fa6";
import Image from "next/image";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Prevent closing when clicking inside the modal content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal-window glass"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        onClick={handleContentClick}
      >
        {/* Close Button */}
        <button className="project-modal__close-btn" onClick={onClose} aria-label="Close modal">
          <FaXmark />
        </button>

        <div className="project-modal__scroll-container">
          <div className="project-modal__grid">
            
            {/* Left Column: Image Media */}
            <div className="project-modal__media">
              <div className="project-modal__image-wrapper">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={800}
                  height={500}
                  priority
                  className="project-modal__image"
                />
              </div>
              
              {/* Action Buttons inside Media or as a footer */}
              <div className="project-modal__actions">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-modal__action-btn"
                >
                  <FaGithub />
                  <span>GitHub Repository</span>
                </a>
                {project.live && project.live !== "/not-available" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-modal__action-btn project-modal__action-btn--live"
                  >
                    <FaArrowUpRightFromSquare />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Info */}
            <div className="project-modal__info">
              <span className="project-modal__label">Featured Project</span>
              <h2 className="project-modal__title">{project.name}</h2>
              
              <div className="project-modal__divider"></div>

              {/* Description */}
              <div className="project-modal__section">
                <h3 className="project-modal__section-heading">Overview</h3>
                <p className="project-modal__description">
                  {project.longDescription || project.details}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="project-modal__section">
                  <h3 className="project-modal__section-heading">Key Features</h3>
                  <ul className="project-modal__features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="project-modal__feature-item">
                        <FaCheck className="project-modal__feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Categorized Tech Stack */}
              {project.techCategorized ? (
                <div className="project-modal__section">
                  <h3 className="project-modal__section-heading">Technologies Used</h3>
                  <div className="project-modal__tech-categories">
                    {Object.entries(project.techCategorized).map(([category, tags]) => (
                      <div key={category} className="project-modal__tech-category-group">
                        <span className="project-modal__tech-category-name">{category}</span>
                        <div className="project-modal__tech-tags">
                          {tags.map((tag) => (
                            <span key={tag} className="project-modal__tech-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Fallback to simple tags if no categorized tech stack exists
                <div className="project-modal__section">
                  <h3 className="project-modal__section-heading">Technologies</h3>
                  <div className="project-modal__tech-tags">
                    {project.lang.map((tag) => (
                      <span key={tag} className="project-modal__tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
