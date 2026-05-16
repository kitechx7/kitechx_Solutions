import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <div className="logo-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6L3 12L8 18"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 6L21 12L16 18"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4L10 20"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="logo-wordmark">KITECHX</span>
            </Link>
            {/* rest of your footer-brand content */}
          </div>
          <p>
            Transforming ideas into powerful digital experiences. We engineer
            the future — one project at a time. Global reach, local heart.
          </p>
          <div className="footer-socials">
            {["IN", "FB", "IG", "TW", "YT"].map((s) => (
              <div key={s} className="social-btn">
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">MERN Stack Dev</a>
            </li>
            <li>
              <a href="#">SEO Services</a>
            </li>
            <li>
              <a href="#">Graphics Designing</a>
            </li>
            <li>
              <a href="#">AI Animated Videos</a>
            </li>
            <li>
              <a href="#">PHP / Laravel</a>
            </li>
            <li>
              <a href="#">WordPress</a>
            </li>
            <li>
              <a href="#">Deployment</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <span className="icon">📧</span>
            <span>muqadas@kitechxsolutions.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📍</span>
            <span>
              Lahore Cantt, Pakistan
              <br />
              Serving USA · UK · Europe · Middle East
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📞</span>
            <span>
              +92 334 4495146
              <br />
              +92 309 4477653
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KITECHX Agency. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
