"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaXmark, FaCalendarDays, FaClock } from "react-icons/fa6";
import Image from "next/image";
import "./BlogModal.css";

export default function BlogModal({ post, onClose }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
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

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="blog-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="blog-modal-window glass"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        onClick={handleContentClick}
      >
        {/* Close button */}
        <button className="blog-modal__close-btn" onClick={onClose} aria-label="Close article">
          <FaXmark />
        </button>

        <div className="blog-modal__scroll-container">
          <div className="blog-modal__header">
            <span className="blog-modal__category">{post.category}</span>
            <h2 className="blog-modal__title">{post.title}</h2>
            
            <div className="blog-modal__meta">
              <span className="blog-modal__meta-item">
                <FaCalendarDays />
                <span>{post.date}</span>
              </span>
              <span className="blog-modal__meta-item">
                <FaClock />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          <div className="blog-modal__image-wrapper">
            <Image
              src={post.img}
              alt={post.title}
              width={1000}
              height={500}
              priority
              className="blog-modal__image"
            />
          </div>

          <div className="blog-modal__content">
            {post.content.map((paragraph, index) => (
              <p key={index} className="blog-modal__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
