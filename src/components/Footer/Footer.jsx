"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import { socialsData } from "@/data/socials";
import "./Footer.css";

const quickLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="footer__logo"
            >
              <span className="footer__logo-text">kharajch</span>
              <span className="footer__logo-dot">.</span>
            </Link>
            <p className="footer__tagline">
              B.Sc. Computer Science | AI/ML &amp; Data Science
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul className="footer__links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="footer__link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__links-title">Follow Me</h4>
            <div className="footer__social-icons">
              {socialsData.slice(0, 6).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-icon"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright &copy; kharajch 2026. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FaHeart className="footer__heart" /> using Next.js &amp;
            React
          </p>
        </div>
      </div>
    </footer>
  );
}
