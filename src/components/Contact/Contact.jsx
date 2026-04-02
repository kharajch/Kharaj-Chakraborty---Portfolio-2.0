"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";
import { socialsData } from "@/data/socials";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS Integration - Replace with your actual keys
    try {
      // Import emailjs dynamically
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "kharajchakraborty@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
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
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="contact__bg-glow" />
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span className="contact__label">Get In Touch</span>
            <h2 className="section-title">
              Let&apos;s <span className="accent-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat!
            </p>
          </motion.div>

          <div className="contact__content">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name" className="contact__form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contact-email" className="contact__form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-subject" className="contact__form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact__form-input"
                  placeholder="Subject"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact__form-input contact__form-textarea"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="contact__status contact__status--success">
                  ✨ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="contact__status contact__status--error">
                  ❌ Failed to send message. Please try again or email me
                  directly.
                </p>
              )}
            </motion.form>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="contact__info">
              <div className="contact__info-card">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="contact__info-title">Email</h4>
                    <a
                      href="mailto:kharajchakraborty@gmail.com"
                      className="contact__info-value"
                    >
                      kharajchakraborty@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h4 className="contact__info-title">Address</h4>
                    <p className="contact__info-value">
                      Mathabhanga, Coochbehar,
                      <br />
                      West Bengal, India
                      <br />
                      PIN-736146
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact__socials">
                <h4 className="contact__socials-title">Find me on</h4>
                <div className="contact__socials-grid">
                  {socialsData.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
