"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck,
  FaCircleExclamation,
  FaRotateRight
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const validateField = (name, value) => {
    let error = "";
    if (!value || value.trim() === "") {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    
    if (name === "name") {
      if (value.trim().length < 2) {
        error = "Name must be at least 2 characters.";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name can only contain letters and spaces.";
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "subject") {
      if (value.trim().length < 3) {
        error = "Subject must be at least 3 characters.";
      }
    } else if (name === "message") {
      if (value.trim().length < 10) {
        error = "Message must be at least 10 characters.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on the fly if already touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched and run full validation
    const newTouched = { name: true, email: true, subject: true, message: true };
    setTouched(newTouched);

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);

    // If any error exists, prevent submission
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      // Trigger a shake trigger by toggling status briefly
      setStatus("invalid");
      setTimeout(() => setStatus(""), 1000);
      return;
    }

    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "kharajchakraborty@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({ name: "", email: "", subject: "", message: "" });
    setTouched({ name: false, email: false, subject: false, message: false });
    setStatus("");
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

  const formIsValid = 
    formData.name && formData.email && formData.subject && formData.message &&
    !errors.name && !errors.email && !errors.subject && !errors.message;

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
            {/* Form Area */}
            <motion.div variants={itemVariants} className="contact__form-container">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success Animation View */
                  <motion.div
                    key="success-card"
                    className="contact__success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-checkmark-wrapper">
                      <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="success-checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="success-checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>
                    <h3 className="contact__success-title">Message Sent!</h3>
                    <p className="contact__success-text">
                      Thank you for reaching out. Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                    <button onClick={handleReset} className="btn btn-primary contact__reset-btn">
                      <FaRotateRight />
                      <span>Send Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  /* Form Input View */
                  <motion.form
                    key="contact-form"
                    className={`contact__form ${status === "invalid" ? "contact__form--shake" : ""}`}
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Error Alerts */}
                    {status === "error" && (
                      <div className="contact__alert contact__alert--error">
                        <FaCircleExclamation />
                        <span>Failed to send message. Please check your network or try again.</span>
                      </div>
                    )}

                    <div className="contact__form-row">
                      {/* Name input */}
                      <div className="contact__form-group">
                        <label htmlFor="contact-name" className="contact__form-label">
                          Name
                        </label>
                        <div className="contact__input-wrapper">
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`contact__form-input ${
                              touched.name && errors.name ? "contact__form-input--error" : ""
                            } ${touched.name && !errors.name && formData.name ? "contact__form-input--success" : ""}`}
                            placeholder="Your Name"
                            disabled={status === "sending"}
                          />
                        </div>
                        <AnimatePresence>
                          {touched.name && errors.name && (
                            <motion.span
                              className="contact__input-error-msg"
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                            >
                              {errors.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email input */}
                      <div className="contact__form-group">
                        <label htmlFor="contact-email" className="contact__form-label">
                          Email
                        </label>
                        <div className="contact__input-wrapper">
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`contact__form-input ${
                              touched.email && errors.email ? "contact__form-input--error" : ""
                            } ${touched.email && !errors.email && formData.email ? "contact__form-input--success" : ""}`}
                            placeholder="your@email.com"
                            disabled={status === "sending"}
                          />
                        </div>
                        <AnimatePresence>
                          {touched.email && errors.email && (
                            <motion.span
                              className="contact__input-error-msg"
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                            >
                              {errors.email}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="contact__form-group">
                      <label htmlFor="contact-subject" className="contact__form-label">
                        Subject
                      </label>
                      <div className="contact__input-wrapper">
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className={`contact__form-input ${
                            touched.subject && errors.subject ? "contact__form-input--error" : ""
                          } ${touched.subject && !errors.subject && formData.subject ? "contact__form-input--success" : ""}`}
                          placeholder="Subject"
                          disabled={status === "sending"}
                        />
                      </div>
                      <AnimatePresence>
                        {touched.subject && errors.subject && (
                          <motion.span
                            className="contact__input-error-msg"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                          >
                            {errors.subject}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message input */}
                    <div className="contact__form-group">
                      <label htmlFor="contact-message" className="contact__form-label">
                        Message
                      </label>
                      <div className="contact__input-wrapper">
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          rows={6}
                          className={`contact__form-input contact__form-textarea ${
                            touched.message && errors.message ? "contact__form-input--error" : ""
                          } ${touched.message && !errors.message && formData.message ? "contact__form-input--success" : ""}`}
                          placeholder="Your message (min 10 characters)..."
                          disabled={status === "sending"}
                        />
                      </div>
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <motion.span
                            className="contact__input-error-msg"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                          >
                            {errors.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`btn btn-primary contact__submit-btn ${
                        status === "sending" ? "contact__submit-btn--sending" : ""
                      }`}
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <span className="contact__submit-spinner"></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

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
