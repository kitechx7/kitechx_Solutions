import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'



const FEATURED_SERVICES = [
    {
    icon: '⚡',
    emoji: '🖥️',
    label: 'MERN Stack Development',
    category: 'Web Development',
    desc: 'Full-stack web apps built with MongoDB, Express, React & Node.js — fast, scalable, and modern. We architect solutions that grow with your business.',
    features: ['Custom React SPA & dashboards', 'RESTful & GraphQL APIs', 'MongoDB database design', 'Real-time features with Socket.io'],
    color: 'rgba(91,63,248,0.10)',
    bg: 'linear-gradient(135deg, #f0eeff 0%, #e8e0ff 100%)',
    imgBg: 'linear-gradient(145deg, #ede8ff, #d8d0ff)',
    image: '././public/mern-stack.jpeg',
  },
  {
    icon: '📈',
    emoji: '📊',
    label: 'SEO Optimization',
    category: 'Digital Marketing',
    desc: 'Dominate search rankings with our data-driven SEO strategies. From technical audits to link building — we deliver measurable organic growth.',
    features: ['Technical SEO audits', 'On-page & off-page optimization', 'Keyword research & strategy', 'Monthly analytics reporting'],
    color: 'rgba(0,196,154,0.10)',
    bg: 'linear-gradient(135deg, #e6fff9 0%, #d0fff0 100%)',
    imgBg: 'linear-gradient(145deg, #e0fff6, #c8ffec)',
    image: '././public/SEO.jpeg',
  },
  {
    icon: '🎨',
    emoji: '✏️',
    label: 'Graphics & Branding',
    category: 'Design',
    desc: 'Stunning logos, brand identities, UI/UX design, and marketing visuals that make your brand unforgettable and convert visitors into customers.',
    features: ['Logo & brand identity', 'UI/UX prototyping', 'Social media design kits', 'Print & marketing collateral'],
    color: 'rgba(255,60,120,0.08)',
    bg: 'linear-gradient(135deg, #fff0f5 0%, #ffe0ec 100%)',
    imgBg: 'linear-gradient(145deg, #ffe8f0, #ffd0e5)',
    image: '././public/graphics.jpeg',
  },
]

export default function Home() {
  return (
    <main className="page-enter">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="hero">
        {/* Background Video */}
        <div className="video-background">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="video-element"
            poster="/assets/hero-fallback.jpg" // High-res image shown while video loads
          >
            <source src="/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlays to ensure text readability */}
          <div className="video-overlay" />
          <div className="hero-pattern" />
        </div>

        <div className="hero-content">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">✦ Digital Innovation Agency — Est. 2024</div>
            <h1 className="hero-title">
              WE BUILD<br />
              <span className="highlight">TOMORROW'S</span><br />
              DIGITAL WORLD
            </h1>
            <p className="hero-subtitle">
              From code to cloud — KITECHX transforms your boldest ideas into
              powerful, scalable digital products that dominate markets across
              USA, UK, Europe &amp; the Middle East.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services →</Link>
              <Link to="/contact" className="btn-outline-white">Start a Project</Link>
            </div>
          </div>

          {/* RIGHT — decorative cards */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="hero-card hero-card-sm card-top">
                <div className="sm-label">Projects Done</div>
                <div className="sm-value" style={{ color: '#fff' }}>50+</div>
              </div>

              <div className="hero-card hero-card-main">
                <div className="card-icon">⚡</div>
                <h3>Full-Stack Digital Agency</h3>
                <p>Web · AI · SEO · Design · Marketing</p>
              </div>

              <div className="hero-card hero-card-sm card-bottom">
                <div className="sm-label">Happy Clients</div>
                <div className="sm-value">30+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { n: '50+', l: 'Projects Delivered' },
            { n: '30+', l: 'Happy Clients' },
            { n: '10+', l: 'Countries Served' },
            { n: '9',   l: 'Core Services' },
            { n: '6',   l: 'Expert Founders' },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      

      {/* SERVICES PREVIEW */}
      <section className="home-services">
        <div className="blob blob-teal" style={{ width: 600, height: 600, right: '-150px', top: '30%' }} />
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">✦ What We Offer</div>
          <h2 className="section-title">Services That <span>Drive Growth</span></h2>
          <p>From development to marketing — we're your full-stack digital partner.</p>
        </div>

               <div className="services-grid">
                  {FEATURED_SERVICES.map(s => (
                    <div key={s.label} className="svc-card">
                      {/* IMAGE AREA */}
                      <div className="svc-image-wrap">
                        {s.image ? (
                          <img
                            src={s.image}
                            alt={s.label}
                            className="svc-real-img"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.nextElementSibling.style.display = 'flex'
                            }}
                          />
                        ) : (
                          <div className="svc-image-bg" style={{ background: s.imgBg }}>
                            <span style={{ fontSize: '6rem' }}>{s.emoji}</span>
                          </div>
                        )}
                        <div className="svc-image-overlay" />
                        <span className="svc-image-tag">{s.category}</span>
                      </div>
        
                      {/* BODY */}
                      <div className="svc-body">
                        <div className="svc-icon-row">
                          <div className="svc-icon" style={{ background: s.color }}>
                            {s.icon}
                          </div>
                          <span className="svc-category">{s.category}</span>
                        </div>
        
                        <h3>{s.label}</h3>
                        <p>{s.desc}</p>
        
                        <div className="svc-features">
                          {s.features.map(f => (
                            <div key={f} className="svc-feature">
                              <span className="svc-feature-dot" />
                              {f}
                            </div>
                          ))}
                        </div>
        
                        <Link to="/contact" className="svc-cta">
                          Get a Quote →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

        <div className="explore-btn-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/services" className="btn-outline">
            Explore All 9 Services →
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
     {/* CTA SECTION */}
<section className="cta-section" style={{
  position: 'relative',
  overflow: 'hidden',
  padding: '100px 20px',
  background: 'linear-gradient(135deg, #f0eeff 0%, #f7f6ff 50%, #e8e4ff 100%)',
}}>

  {/* Blob accents */}
  <div className="blob blob-purple" style={{ width: 450, height: 450, top: '50%', left: '65%', transform: 'translate(-50%,-50%)', opacity: 0.18, filter: 'blur(90px)', background: '#5b3ff8' }} />
  <div className="blob blob-purple" style={{ width: 280, height: 280, top: '20%', left: '5%',  transform: 'translate(-50%,-50%)', opacity: 0.12, filter: 'blur(70px)', background: '#7c5cfa' }} />

  {/* Subtle grid overlay */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(91,63,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,63,248,0.04) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    zIndex: 0,
  }} />

  {/* Top border glow */}
  <div style={{
    position: 'absolute',
    top: 0, left: '10%', right: '10%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #5b3ff8, #7c5cfa, transparent)',
    zIndex: 1,
  }} />

  {/* CTA Box */}
  <div className="cta-box" style={{
    position: 'relative',
    zIndex: 2,
    maxWidth: '720px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '60px 40px',
    background: '#ffffff',
    border: '1px solid rgba(110,80,255,0.22)',
    borderRadius: '24px',
    boxShadow: '0 8px 48px rgba(91,63,248,0.10), 0 1px 0 rgba(255,255,255,0.9) inset',
  }}>

    {/* Badge */}
    <div style={{
      display: 'inline-block',
      padding: '6px 16px',
      background: '#f0eeff',
      border: '1px solid rgba(110,80,255,0.22)',
      borderRadius: '999px',
      fontSize: '12px',
      color: '#5b3ff8',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '24px',
      fontWeight: 600,
    }}>
      ✦ Let's Collaborate
    </div>

    {/* Heading */}
    <h2 style={{
      fontSize: 'clamp(2rem, 5vw, 3.2rem)',
      fontWeight: 800,
      color: '#0f0c22',
      lineHeight: 1.2,
      marginBottom: '16px',
      letterSpacing: '-0.5px',
    }}>
      Ready To{' '}
      <span style={{
        background: 'linear-gradient(90deg, #5b3ff8, #7c5cfa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Launch
      </span>{' '}
      Something Big?
    </h2>

    {/* Subtext */}
    <p style={{
      fontSize: '1.1rem',
      color: '#6b6589',
      maxWidth: '480px',
      margin: '0 auto 40px',
      lineHeight: 1.7,
    }}>
      Let's build something extraordinary together. Your vision, our execution — delivered with precision and creativity.
    </p>

    {/* Buttons */}
    <div className="cta-actions" style={{
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}>

      {/* Primary */}
      <Link to="/contact" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 32px',
        background: 'linear-gradient(135deg, #5b3ff8, #7c5cfa)',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '1rem',
        borderRadius: '12px',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(91,63,248,0.30)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        letterSpacing: '0.3px',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(91,63,248,0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.boxShadow = '0 4px 20px rgba(91,63,248,0.30)'; }}
      >
        Start Your Project →
      </Link>

      {/* Outline */}
      <Link to="/about" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 32px',
        background: 'transparent',
        color: '#5b3ff8',
        fontWeight: 600,
        fontSize: '1rem',
        borderRadius: '12px',
        textDecoration: 'none',
        border: '1.5px solid rgba(110,80,255,0.35)',
        transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
        letterSpacing: '0.3px',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = '#f0eeff'; e.currentTarget.style.borderColor = '#5b3ff8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(110,80,255,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        Learn About Us
      </Link>

    </div>
  </div>

  {/* Bottom border glow */}
  <div style={{
    position: 'absolute',
    bottom: 0, left: '10%', right: '10%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #7c5cfa, #5b3ff8, transparent)',
    zIndex: 1,
  }} />

</section>
    </main>
  )
}