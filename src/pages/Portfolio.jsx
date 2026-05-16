import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const PROJECTS = [
  {
    id: 1,
    title: 'IJARA Trucking LLC',
    desc: 'Built a fully dynamic, SEO-optimized web platform for a USA-based trucking LLC — covering all 48 continental states. Features background video hero, smooth animations, mobile-first responsive design, and ranks on Page 1 of Google within days of launch.',
    category: 'Web Development',
    tech: ['React', 'Node.js', 'SEO', 'Video Background', 'Responsive Design'],
    emoji: '🚛',
    imgBg: 'linear-gradient(145deg, #1a1a2e, #16213e)',  /* dark bg — screenshot ke liye */
    image: '../../public/ijara-seo-proof.png',
    live: true,
    url: 'https://ijaratrans.com',
    year: '2025',
    proof: '🏆 Ranks #1 on Google',   /* YAHI missing tha */
  },
]

const CATEGORY_COLORS = {
  "Web Development": { bg: "#e1f5ee", text: "#0f6e56", dot: "#1d9e75" },
  Design: { bg: "#eeedfe", text: "#3c3489", dot: "#7f77dd" },
  "Digital Marketing": { bg: "#eaf3de", text: "#3b6d11", dot: "#639922" },
  "Backend Development": { bg: "#faeeda", text: "#854f0b", dot: "#ba7517" },
  "Video Production": { bg: "#fbeaf0", text: "#72243e", dot: "#d4537e" },
  "CMS Development": { bg: "#e6f1fb", text: "#0c447c", dot: "#378add" },
};

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-scale",
    );

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CategoryBadge({ category }) {
  const c = CATEGORY_COLORS[category] || {
    bg: "#f1efe8",
    text: "#5f5e5a",
    dot: "#888780",
  };
  return (
    <span
      className="portfolio-category-badge"
      style={{ background: c.bg, color: c.text }}
    >
      <span style={{ background: c.dot }} className="portfolio-badge-dot" />
      {category}
    </span>
  );
}

export default function Portfolio() {
  useScrollReveal();

  return (
    <main className="page-enter">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-grid" />
        <div className="portfolio-hero-content">
          <div className="section-tag">✦ Our Work</div>
          <h1>
            Projects That <span className="hero-highlight">Speak</span>
            <br />
            For Themselves
          </h1>
          <p>
            Real clients. Real results. Har project mein mehnat aur craft dono
            hain.
          </p>
          <div className="portfolio-hero-stats">
            <div className="hero-stat">
              <span className="stat-num">
                {PROJECTS.filter((p) => p.live).length}
              </span>
              <span className="stat-label">Live Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">2025</span>
              <span className="stat-label">Founded</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className="portfolio-main">
        <div className="section-header reveal">
          <div className="section-tag">✦ Case Studies</div>
          <h2 className="section-title">
            Our <span>Portfolio</span>
          </h2>
          <p>
            Har project ek story hai — collaboration, craft, aur results ki.
          </p>
        </div>

        {PROJECTS.length === 0 ? (
          <div className="portfolio-empty reveal">
            <span style={{ fontSize: "3rem" }}>🚀</span>
            <h3>Projects Coming Soon</h3>
            <p>Ham apna pehla project deploy kar rahe hain — stay tuned!</p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                className={`portfolio-card reveal stagger-${Math.min(i + 1, 6)}`}
              >
                {/* Image / Emoji Area */}
                <div
                  className="portfolio-card-image"
                  style={{ background: p.imgBg }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="portfolio-real-img"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="portfolio-emoji-wrap"
                    style={{ display: p.image ? "none" : "flex" }}
                  >
                    <span className="portfolio-emoji">{p.emoji}</span>
                  </div>

                  <div
                    className={`portfolio-live-badge ${p.live ? "badge-live" : "badge-soon"}`}
                  >
                    {p.live ? (
                      <>
                        <span className="live-dot" />
                        Live
                      </>
                    ) : (
                      <>⏳ Coming Soon</>
                    )}
                  </div>

                  {p.live && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-visit-overlay"
                    >
                      <span className="visit-icon">↗</span>
                      <span>Visit Site</span>
                    </a>
                  )}
                </div>

                {/* Card Body */}
                <div className="portfolio-card-body">
                  <div className="portfolio-card-top">
                    <CategoryBadge category={p.category} />
                    <span className="portfolio-year">{p.year}</span>
                  </div>

                  {/* Proof Badge */}
                  {p.proof && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "linear-gradient(135deg, #fff8e1, #fff3cd)",
                        border: "1px solid #f5a623",
                        color: "#854f0b",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        padding: "4px 10px",
                        borderRadius: "99px",
                        marginBottom: "0.75rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.proof}
                    </div>
                  )}
                  <h3 className="portfolio-card-title">{p.title}</h3>
                  <p className="portfolio-card-desc">{p.desc}</p>
                  <div className="portfolio-tech-list">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.live && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link-btn"
                    >
                      <span>View Live Site</span> <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="portfolio-cta">
        <div className="cta-box reveal">
          <div className="cta-tag">✦ Start a Project</div>
          <h2>
            Ready to Build <span>Yours?</span>
          </h2>
          <p>Aapka vision, hamari execution — milke kuch acha banate hain.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-cta-primary">
              Start Your Project →
            </Link>
            <Link to="/portfolio" className="btn-cta-ghost">
              See More Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
