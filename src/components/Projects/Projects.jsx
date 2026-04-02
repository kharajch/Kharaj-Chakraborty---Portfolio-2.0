"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const [springs, api] = useSpring(() => ({
    transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    config: { mass: 1, tension: 170, friction: 26 },
  }));

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <animated.div
        className="project-card"
        style={springs}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-card__image-wrapper">
          <Image
            src={project.img}
            alt={project.name}
            width={600}
            height={340}
            className="project-card__image"
          />
          <div className="project-card__image-overlay">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__overlay-link"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        <div className="project-card__content">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__description">{project.details}</p>

          <div className="project-card__tags">
            {project.lang.map((lang) => (
              <span key={lang} className="project-card__tag">
                {lang}
              </span>
            ))}
          </div>

          <div className="project-card__actions">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </animated.div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__label">My Work</span>
          <h2 className="section-title">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for
            building great software.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
