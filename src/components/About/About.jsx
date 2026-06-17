"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaCode, FaGraduationCap, FaRocket, FaLaptopCode, FaChevronDown } from "react-icons/fa6";
import { timelineData } from "@/data/timeline";
import "./About.css";

const highlights = [
  { icon: FaCode, label: "10+", desc: "Projects Built", color: "#e63946" },
  { icon: FaLaptopCode, label: "5+", desc: "Technologies", color: "#6fd8cc" },
  { icon: FaGraduationCap, label: "CS", desc: "Student", color: "#ffb3b1" },
  { icon: FaRocket, label: "2+", desc: "Years Coding", color: "#e63946" },
];

const timelineIcons = {
  FaGraduationCap: FaGraduationCap,
  FaLaptopCode: FaLaptopCode,
  FaCode: FaCode,
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
    },
  };

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="about__bg-accent" />

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="about__header">
            <span className="about__label">About Me</span>
            <h2 className="section-title">
              Passionate About <span className="accent-text">Code</span>
            </h2>
          </motion.div>

          <div className="about__content">
            <motion.div variants={itemVariants} className="about__text-block">
              <p className="about__description">
                Hi there! I&apos;m <strong>Kharaj Chakraborty</strong>, a passionate
                AI Powered Full Stack Enthusiast and a Computer Science student at
                <span className="accent-text"> APC Roy Government College</span>.
              </p>
              <p className="about__description">
                I love building scalable web applications and exploring the
                depths of Computer Science & Artificial Intelligence. From crafting pixel-perfect UIs to
                architecting robust backend systems, I enjoy every aspect of the
                development process.
              </p>
              <p className="about__description">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, and continuously learning
                to stay at the forefront of web development.
              </p>

              <div className="about__tags">
                {[
                  "Full Stack",
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Python",
                ].map((tag) => (
                  <span key={tag} className="about__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about__visual">
              <div className="about__code-window">
                <div className="about__code-header">
                  <div className="about__code-dots">
                    <span className="about__code-dot about__code-dot--red" />
                    <span className="about__code-dot about__code-dot--yellow" />
                    <span className="about__code-dot about__code-dot--green" />
                  </div>
                  <span className="about__code-filename">kharaj.js</span>
                </div>
                <pre className="about__code-content">
                  <code>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-variable">developer</span> = {`{`}
                    {"\n"}
                    {"  "}name: <span className="code-string">&quot;Kharaj Chakraborty&quot;</span>,{"\n"}
                    {"  "}role: <span className="code-string">&quot;AI Powered Full Stack Enthusiast&quot;</span>,{"\n"}
                    {"  "}college: <span className="code-string">&quot;APC Roy Govt. College&quot;</span>,{"\n"}
                    {"  "}skills: [<span className="code-string">&quot;React&quot;</span>, <span className="code-string">&quot;Next.js&quot;</span>, <span className="code-string">&quot;Node.js&quot;</span>],{"\n"}
                    {"  "}passion: <span className="code-string">&quot;Building the web&quot;</span>,{"\n"}
                    {"  "}<span className="code-keyword">isAvailable</span>: <span className="code-boolean">true</span>{"\n"}
                    {`}`};
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="about__stats"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.desc}
                variants={itemVariants}
                className="about__stat-card"
              >
                <div
                  className="about__stat-icon"
                  style={{ color: item.color }}
                >
                  <item.icon />
                </div>
                <span className="about__stat-number">{item.label}</span>
                <span className="about__stat-desc">{item.desc}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants} className="about__timeline-section">
            <h3 className="about__timeline-heading">
              My <span className="accent-text">Journey</span>
            </h3>
            
            <div className="about__timeline">
              <div className="about__timeline-line" />
              
              {timelineData.map((item, index) => {
                const Icon = timelineIcons[item.icon] || FaCode;
                const isExpanded = expandedItem === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`about__timeline-item ${isExpanded ? "about__timeline-item--expanded" : ""}`}
                  >
                    {/* Timeline Node dot */}
                    <div className="about__timeline-node" style={{ border: `2px solid ${item.color}`, color: item.color }}>
                      <Icon />
                    </div>
                    
                    {/* Timeline Card */}
                    <div className="about__timeline-card" onClick={() => toggleItem(item.id)}>
                      <div className="about__timeline-card-header">
                        <div className="about__timeline-logo-wrapper" style={{ borderColor: item.color }}>
                          <span className="about__timeline-logo-text" style={{ color: item.color }}>{item.logoText}</span>
                        </div>
                        <div className="about__timeline-meta">
                          <span className="about__timeline-duration">{item.duration}</span>
                          <h4 className="about__timeline-title">{item.title}</h4>
                          <span className="about__timeline-org">{item.organization}</span>
                        </div>
                        <button 
                          className="about__timeline-expand-btn"
                          aria-expanded={isExpanded}
                          aria-label="Toggle details"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItem(item.id);
                          }}
                        >
                          <FaChevronDown className={`about__timeline-expand-icon ${isExpanded ? "about__timeline-expand-icon--active" : ""}`} />
                        </button>
                      </div>
                      
                      <p className="about__timeline-short-desc">{item.shortDesc}</p>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            className="about__timeline-details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ul className="about__timeline-details-list">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="about__timeline-detail-item">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
