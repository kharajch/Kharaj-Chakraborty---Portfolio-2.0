"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  scale = 1,
  className = "",
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
    scale: scale !== 1 ? scale : undefined,
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.2, 0, 0, 1], // Custom premium cubic-bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
