import { Link } from 'react-router-dom'
import './Home.css'

const industries = [
  { icon: '🏭', title: 'Cement Industry', desc: 'Automation and hydraulic systems for heavy-duty and continuous operations.' },
  { icon: '⚙️', title: 'Steel & Metal Processing', desc: 'Robust solutions designed for high-pressure and high-temperature environments.' },
  { icon: '⚡', title: 'Power & Energy', desc: 'Reliable automation support for power generation and auxiliary systems.' },
  { icon: '🔧', title: 'Manufacturing & OEMs', desc: 'Customized system integration aligned with machine and process requirements.' },
  { icon: '📦', title: 'Material Handling', desc: 'Automation solutions for conveyors, lifting systems, and bulk handling.' },
  { icon: '🔬', title: 'Process Industries', desc: 'System-driven automation for controlled and precision-based operations.' },
]

const partners = [
  'FUCHS', 'FREUDENBERG-NOK', 'STAUFF', 'KLEENOIL', 'Hydroline',
  'AVENTICS', 'HYDAC', 'BUCHER', 'Hengst'',
]

const stats = [
  { number: '6+', label: 'Industries Served' },
  { number: '15+', label: 'Brand Partners' },
  { number: '100%', label: 'Custom Solutions' },
  { number: '24/7', label: 'Technical Support' },
]

export default function Home() {
  return (
    <div className="page home-page">

      {/* ── HERO ── */}
      <section className="hero noise">
        <div className="hero-bg">
          <div className="hero-grid-lines" />
          <div className="hero-accent-circle" />
          <div className="hero-accent-bar" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="tag anim-fade-up-d1">Industrial Automation</p>
            <h1 className="hero-title anim-fade-up-d2">
              MECH<br />
              <span className="hero-title-red">MIND,</span><br />
              AUTO DRIVE
            </h1>
            <p className="hero-desc anim-fade-up-d3">
              Precision engineering solutions for industrial &amp; manufacturing environments.
              We design, integrate, and support automation and hydraulic systems built for long-term reliability.
            </p>
            <div className="hero-actions anim-fade-up-d4">
              <Link to="/services" className="btn-red">Explore Services</Link>
              <Link to="/contact" className="btn-ghost">Get In Touch</Link>
            </div>
          </div>

          <div className="hero-badge-stack anim-fade-up-d3">
            <div className="hero-badge">
              <div className="badge-num">Industry</div>
              <div className="badge-label">4.0 Ready</div>
            </div>
            <div className="hero-badge red">
              <div className="badge-num">ISO</div>
              <div className="badge-label">Compliant</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section about-snip">
        <div className="container about-snip-inner">
          <div className="about-snip-text">
            <p className="tag">Who We Are</p>
            <h2 className="section-title">ENGINEERING<br />PRECISION <span>REDEFINED</span></h2>
            <div className="divider" />
            <p className="section-desc">
              Mech Auto Dynamics is an industrial automation and services company focused on delivering
              system-driven engineering solutions for manufacturing and industrial environments.
              Our approach is rooted in engineering precision, practical application, and long-term system stability.
            </p>
            <Link to="/about" className="btn-red" style={{ marginTop: '32px' }}>Learn More</Link>
          </div>
          <div className="about-snip-visual">
            <div className="visual-card vc-1">
              <div className="vc-icon">⚙</div>
              <div className="vc-label">Hydraulic Systems</div>
            </div>
            <div className="visual-card vc-2">
              <div className="vc-icon">🔌</div>
              <div className="vc-label">Automation</div>
            </div>
            <div className="visual-card vc-3">
              <div className="vc-icon">🛠</div>
              <div className="vc-label">Maintenance</div>
            </div>
            <div className="visual-card vc-4">
              <div className="vc-icon">📊</div>
              <div className="vc-label">Industry 4.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section industries-section">
        <div className="container">
          <p className="tag">Our Reach</p>
          <h2 className="section-title">INDUSTRIES<br /><span>WE SERVE</span></h2>
          <div className="divider" />
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div className="industry-card" key={i}>
                <div className="industry-icon">{ind.icon}</div>
                <h3 className="industry-title">{ind.title}</h3>
                <p className="industry-desc">{ind.desc}</p>
                <div className="industry-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band noise">
        <div className="container cta-inner">
          <div>
            <h2 className="cta-title">READY TO BUILD<br /><span>RELIABLE SYSTEMS?</span></h2>
            <p className="cta-desc">Our engineers are ready to design custom solutions for your specific operational needs.</p>
          </div>
          <Link to="/contact" className="btn-red">Contact Us Today</Link>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="section partners-section">
        <div className="container">
          <p className="tag">Trusted Ecosystem</p>
          <h2 className="section-title">OUR <span>PARTNERS</span></h2>
          <div className="divider" />
          <div className="partners-track">
            {[...partners, ...partners].map((p, i) => (
              <div className="partner-chip" key={i}>{p}</div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
