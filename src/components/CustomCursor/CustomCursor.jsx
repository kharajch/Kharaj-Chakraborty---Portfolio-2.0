"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy spring for the inner dot
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 600, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 600, mass: 0.2 });

  // Floating lag spring for the outer ring
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    // Check if the device is mobile or has touch/no-hover capability
    const checkDevice = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(hasTouch);
      
      if (!hasTouch) {
        document.body.classList.add("has-custom-cursor");
      } else {
        document.body.classList.remove("has-custom-cursor");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Global delegation for clickable elements hover state
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = target.closest(
        "a, button, [role='button'], .navbar__link, .certifications__filter-btn, .project-card, .btn, input, textarea, select"
      );

      if (isClickable) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = target.closest(
        "a, button, [role='button'], .navbar__link, .certifications__filter-btn, .project-card, .btn, input, textarea, select"
      );

      if (isClickable) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isMobile, isVisible, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <div className={`custom-cursor-wrapper ${isVisible ? "visible" : ""}`}>
      {/* Outer Ring */}
      <motion.div
        className={`custom-cursor__ring ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className={`custom-cursor__dot ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
