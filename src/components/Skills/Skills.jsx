"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Flipper, Flipped } from "react-flip-toolkit";
import {
  SiC,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFigma,
  SiGoogle,
  SiFastapi,
  SiLangchain,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiOllama,
  SiN8N,
  SiHuggingface,
  SiNvidia,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiRender,
  SiRailway,
  SiVscodium,
  SiWindsurf,
  SiGit,
  SiGithub,
  SiPostman,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiAnthropic,
  SiGithubcopilot,
  SiPostgresql,
  SiLighthouse,
  SiSupabase,
} from "react-icons/si";
import { FaJava, FaCode, FaPalette, FaLayerGroup, FaDatabase, FaCloud, FaTerminal, FaWrench, FaRobot, FaWandMagicSparkles, FaServer } from "react-icons/fa6";
import { skillsData } from "@/data/skills";
import "./Skills.css";

const iconMap = {
  SiC: SiC,
  FaJava: FaJava,
  SiPython: SiPython,
  SiHtml5: SiHtml5,
  SiCss3: SiCss,
  SiJavascript: SiJavascript,
  SiFigma: SiFigma,
  SiGoogle: SiGoogle,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiReact: SiReact,
  SiNextdotjs: SiNextdotjs,
  SiTailwindcss: SiTailwindcss,
  SiFastapi: SiFastapi,
  SiLangchain: SiLangchain,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiVercel: SiVercel,
  SiNetlify: SiNetlify,
  SiRender: SiRender,
  SiRailway: SiRailway,
  SiVisualstudiocode: SiVscodium,
  SiCursor: SiVscodium,
  SiCodeium: SiWindsurf,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiPostman: SiPostman,
  SiDocker: SiDocker,
  SiMaildotru: SiGoogle,
  SiOpenai: SiOpenai,
  SiGithubcopilot: SiGithubcopilot,
  SiGooglegemini: SiGooglegemini,
  SiX: FaRobot,
  SiDeepseek: FaRobot,
  SiPerplexity: SiPerplexity,
  SiAnthropic: SiAnthropic,
  SiKimi: FaRobot,
  SiQwen: FaRobot,
  SiOllama: SiOllama,
  SiN8N: SiN8N,
  SiHuggingface: SiHuggingface,
  SiLmstudio: FaRobot,
  SiRobot: FaRobot,
  SiNvidia: SiNvidia,
  SiPostgresql: SiPostgresql,
  SiLighthouse: SiLighthouse,
  SiSupabase: SiSupabase,
  FaTerminal: FaTerminal,
};

const categoryIcons = {
  "Programming Languages": FaCode,
  "Frontend Development & Design": FaPalette,
  "Frameworks & Libraries": FaLayerGroup,
  "Backend & AI Frameworks": FaServer,
  "Databases": FaDatabase,
  "Hosting & Deployment": FaCloud,
  "IDEs": FaTerminal,
  "Tools": FaWrench,
  "AI Assistants": FaRobot,
  "Agentic AI Tools": FaWandMagicSparkles,
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(null);

  const displayedSkills = activeCategory
    ? skillsData.filter((s) => s.category === activeCategory)
    : skillsData;

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="skills__label">What I Know</span>
          <h2 className="section-title">
            My <span className="accent-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="skills__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            className={`skills__filter-btn ${!activeCategory ? "skills__filter-btn--active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              className={`skills__filter-btn ${activeCategory === cat.category ? "skills__filter-btn--active" : ""}`}
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.category ? null : cat.category
                )
              }
            >
              {cat.category.split(" ")[0]}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <Flipper flipKey={activeCategory || "all"}>
          <div className="skills__grid">
            {displayedSkills.map((category, catIndex) => {
              const CatIcon = categoryIcons[category.category] || FaCode;
              return (
                <Flipped key={category.category} flipId={category.category}>
                  <motion.div
                    className="skills__category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * catIndex, duration: 0.5 }}
                  >
                    <div className="skills__category-header">
                      <CatIcon className="skills__category-icon" />
                      <h3 className="skills__category-title">
                        {category.category}
                      </h3>
                    </div>
                    <div className="skills__items">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent =
                          iconMap[skill.icon] || FaCode;
                        return (
                          <motion.div
                            key={skill.name}
                            className="skills__item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : {}
                            }
                            transition={{
                              delay: 0.1 * catIndex + 0.05 * skillIndex,
                              duration: 0.4,
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <IconComponent className="skills__item-icon" />
                            <span className="skills__item-name">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </Flipped>
              );
            })}
          </div>
        </Flipper>
      </div>
    </section>
  );
}
