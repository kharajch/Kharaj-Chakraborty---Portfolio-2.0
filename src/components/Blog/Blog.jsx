"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaCalendarDays, FaClock, FaBookOpen } from "react-icons/fa6";
import Image from "next/image";
import { blogData } from "@/data/blog";
import BlogModal from "./BlogModal";
import "./Blog.css";

function BlogCard({ post, index, onOpen }) {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.2, 0, 0, 1] }}
      onClick={() => onOpen(post)}
    >
      <div className="blog-card__image-wrapper">
        <Image
          src={post.img}
          alt={post.title}
          width={400}
          height={240}
          className="blog-card__image"
        />
        <span className="blog-card__category">{post.category}</span>
        
        <div className="blog-card__overlay">
          <span className="blog-card__overlay-btn">
            <FaBookOpen />
            <span>Read Article</span>
          </span>
        </div>
      </div>

      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__meta-item">
            <FaCalendarDays />
            <span>{post.date}</span>
          </span>
          <span className="blog-card__meta-item">
            <FaClock />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__summary">{post.summary}</p>
        
        <button className="blog-card__link">
          <span>Read More</span>
          <span className="blog-card__link-arrow">→</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="blog section" id="blog" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="blog__label">Insights</span>
          <h2 className="section-title">
            My <span className="accent-text">Blog</span>
          </h2>
          <p className="section-subtitle">
            Exploring concepts in modern web architecture, AI development, and academic learning.
          </p>
        </motion.div>

        <div className="blog__grid">
          {blogData.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onOpen={setSelectedPost}
            />
          ))}
        </div>
      </div>

      {/* Blog Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
