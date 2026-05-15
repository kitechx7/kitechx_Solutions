import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const FOUNDERS = [
  {
    name: "Muqadas Sharif",
    role: "Co-Founder & Strategist",
    initials: "MS",
    image: "https://your-image-url.com/muqadas.jpg",
  },
  {
    name: "Muhammad Ashir",
    role: "CTO & Architect",
    initials: "AS",
    image: "https://your-image-url.com/ashir.jpg",
  },
  {
    name: "Muhammad Moeez Asim",
    role: "CEO & Lead Developer",
    initials: "MA",
    image: "https://your-image-url.com/moeez.jpg",
  },
  {
    name: "Rizwan Ameen",
    role: "COO & Project Manager",
    initials: "RA",
    image: "https://your-image-url.com/rizwan.jpg",
  },
  {
    name: "Muhammad Shoaib Aslam",
    role: "Head of Design",
    initials: "SA",
    image: "https://your-image-url.com/shoaib.jpg",
  },
  {
    name: "Suleman Anjum",
    role: "Marketing Director",
    initials: "SU",
    image: "https://your-image-url.com/suleman.jpg",
  },
];

const VALUES = [
  {
    icon: "🚀",
    title: "Innovation First",
    desc: "We embrace cutting-edge tech and AI to deliver solutions that are ahead of the curve.",
  },
  {
    icon: "💎",
    title: "Quality Obsessed",
    desc: "Every pixel, every line of code — crafted with precision and professional excellence.",
  },
  {
    icon: "🤝",
    title: "Client-Centric",
    desc: "Your success is our mission. We build lasting partnerships, not just products.",
  },
  {
    icon: "⚡",
    title: "Speed & Agility",
    desc: "Rapid delivery without compromising on quality. We move fast and build smart.",
  },
  {
    icon: "🌍",
    title: "Global Mindset",
    desc: "Serving clients from Pakistan to USA, UK, Europe, and the Middle East.",
  },
  {
    icon: "🔒",
    title: "Integrity Always",
    desc: "Transparent communication, honest timelines, and trustworthy deliverables.",
  },
];

export default function About() {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section
        className="about-hero"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/k2.mp4" type="video/mp4" />
          <source src="../../assets/videos/hero-bg.webm" type="video/webm" />
        </video>

        Dark Overlay for readability
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.15) , rgba(200,190,255,0.25), rgba(150,80,255,0.35) 100%)",
            zIndex: 1,
          }}
        />

        {/* Existing decorative layers */}
        <div
          className="about-hero-pattern"
          style={{ position: "relative", zIndex: 2 }}
        />
        <div
          className="about-hero-glow"
          style={{ position: "relative", zIndex: 2 }}
        />

        {/* Content */}
        <div
          className="about-hero-content"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div className="section-tag">✦ Our Story</div>
          <h1>
            Building the <span>Future</span>, One Project at a Time
          </h1>
          <p>
            KITECHX is a full-service digital agency born in Lahore Cantt, with
            a global vision. Founded by six passionate technologists, we combine
            deep technical expertise with creative design thinking to deliver
            digital products that truly matter.
          </p>
        </div>
      </section>
      {/* FOUNDERS SECTION */}
      <section className="founders-section">
        <div
          className="blob blob-purple"
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "-100px",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="section-header"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="section-tag">✦ The Visionaries</div>
          <h2 className="section-title">
            Meet The <span>Founders</span>
          </h2>
          <p>
            Six talented minds united by one mission — to build extraordinary
            digital experiences.
          </p>
        </div>

        <div className="founders-grid">
          {FOUNDERS.map((f, i) => (
            <div
              key={f.name}
              className="founder-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="founder-avatar">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : null}
                <div
                  className="founder-initials"
                  style={{ display: f.image ? "none" : "flex" }}
                >
                  {f.initials}
                </div>
              </div>
              <div className="founder-name">{f.name}</div>
              <div className="founder-role">{f.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div
          className="blob blob-teal"
          style={{
            right: "-80px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 400,
            height: 400,
          }}
        />
        <div className="section-header">
          <div className="section-tag">✦ What We Stand For</div>
          <h2 className="section-title">
            Vision, Mission <span>&amp; Goals</span>
          </h2>
        </div>

        <div className="vm-grid">
          <div
            className="vm-card"
            style={{ "--vm-color": "rgba(91,63,248,0.08)" }}
          >
            <span className="vm-card-icon">🔭</span>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and innovative digital agency in South
              Asia and beyond — a global force that empowers businesses of all
              sizes to thrive in the digital era through world-class technology
              solutions.
            </p>
            <ul>
              <li>Lead the MERN ecosystem in Pakistan</li>
              <li>Deliver AI-powered solutions at scale</li>
              <li>Create 100+ digital success stories by 2026</li>
              <li>Be the go-to agency for startups and enterprises</li>
            </ul>
          </div>

          <div
            className="vm-card"
            style={{ "--vm-color": "rgba(0,196,154,0.07)" }}
          >
            <span className="vm-card-icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between great ideas and exceptional digital
              products. We are committed to delivering pixel-perfect,
              performance-driven, and scalable solutions that generate real ROI
              for our clients globally.
            </p>
            <ul>
              <li>Deliver projects on time, every time</li>
              <li>Maintain 100% client satisfaction rate</li>
              <li>Continuously upskill in emerging technologies</li>
              <li>Provide enterprise quality at accessible prices</li>
            </ul>
          </div>

          <div
            className="vm-card"
            style={{ "--vm-color": "rgba(255,60,120,0.07)" }}
          >
            <span className="vm-card-icon">🏆</span>
            <h3>Our Goals</h3>
            <p>
              Strategic, measurable targets that guide every decision at KITECHX
              — from the code we write to the partnerships we build.
            </p>
            <ul>
              <li>Expand to 10+ international markets</li>
              <li>Launch our own SaaS product by 2025</li>
              <li>Build a team of 25+ specialists</li>
              <li>Establish KITECHX Academy for dev training</li>
              <li>Achieve ISO-certified quality standards</li>
            </ul>
          </div>

          <div
            className="vm-card"
            style={{ "--vm-color": "rgba(245,166,35,0.07)" }}
          >
            <span className="vm-card-icon">⚗️</span>
            <h3>Our Approach</h3>
            <p>
              We follow an agile, client-first methodology that ensures
              transparency, speed, and quality at every stage of the development
              lifecycle.
            </p>
            <ul>
              <li>Discovery &amp; strategy sprint</li>
              <li>Design-first wireframing &amp; prototyping</li>
              <li>Agile development with weekly updates</li>
              <li>Rigorous QA, testing, and deployment</li>
              <li>Post-launch support &amp; growth hacking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-header">
          <div className="section-tag">✦ What Drives Us</div>
          <h2 className="section-title">
            Core <span>Values</span>
          </h2>
          <p>
            The principles that shape every project, every relationship, every
            line of code.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="reach-section">
        <div
          className="blob blob-purple"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 400,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            ✦ Global Impact
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            We Serve Clients <span>Worldwide</span>
          </h2>
          <p
            style={{
              color: "var(--clr-text-muted)",
              textAlign: "center",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
            }}
          >
            Headquartered in Lahore Cantt, Pakistan — delivering excellence
            across borders.
          </p>
          <div className="reach-countries">
            {[
              "🇵🇰 Pakistan",
              "🇺🇸 United States",
              "🇬🇧 United Kingdom",
              "🇩🇪 Germany",
              "🇫🇷 France",
              "🇦🇪 UAE",
              "🇸🇦 Saudi Arabia",
              "🇶🇦 Qatar",
              "🇮🇹 Italy",
              "🇳🇱 Netherlands",
            ].map((c) => (
              <div key={c} className="country-tag">
                {c}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/contact" className="btn-primary">
              Work With Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
