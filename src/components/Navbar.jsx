import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
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

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/contact" className="nav-cta">
                Get Started →
              </Link>
            </li>
          </ul>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <Link
          to="/contact"
          className="mobile-nav-link mobile-cta"
          onClick={closeMenu}
        >
          Get Started →
        </Link>
      </div>
    </header>
  );
}
