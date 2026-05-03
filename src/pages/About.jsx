import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    number: '01',
    title: 'Engineering Precision',
    desc: 'Every solution is engineered to exact specifications, ensuring performance and longevity in the most demanding environments.',
  },
  {
    number: '02',
    title: 'System Reliability',
    desc: 'We build systems designed for continuous operation, minimizing downtime and maximizing production output.',
  },
  {
    number: '03',
    title: 'Client-Centric Design',
    desc: 'We work closely with clients to align solutions with their operational needs, safety standards, and production goals.',
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    desc: 'Our relationship extends beyond installation — we provide ongoing technical support and system optimization.',
  },
]

const timeline = [
  { year: '1784', era: 'Industry 1.0', desc: 'Water, Steam & Mechanical Production' },
  { year: '1870', era: 'Industry 2.0', desc: 'Electricity & Mass Production' },
  { year: '1969', era: 'Industry 3.0', desc: 'Electronics, IT & Automation' },
  { year: '2011', era: 'Industry 4.0', desc: 'Cyber-physical systems, IoT & Smart Factories' },
]

export default function About() {
  return (
    <div className="page about-page">

      {/* ── PAGE HERO ── */}
      <section className="page-hero noise">
        <div className="page-hero-bg">
          <div className="ph-grid" />
          <div className="ph-stripe" />
        </div>
        <div className="container page-hero-inner">
          <p className="tag anim-fade-up-d1">Our Story</p>
          <h1 className="section-title anim-fade-up-d2">
            ABOUT<br /><span>MECH AUTO</span><br />DYNAMICS
          </h1>
          <p className="section-desc anim-fade-up-d3">
            An industrial automation and services company focused on delivering
            system-driven engineering solutions for manufacturing and industrial environments.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section mission-section">
        <div className="container mission-inner">
          <div className="mission-text">
            <p className="tag">What Drives Us</p>
            <h2 className="section-title">MECH <span>MIND</span><br />AUTO DRIVE</h2>
            <div className="divider" />
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--gray-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              Mech Auto Dynamics is an industrial automation and services company focused on delivering
              system-driven engineering solutions for manufacturing and industrial environments.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--gray-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              We specialize in designing, integrating, and supporting automation and hydraulic systems
              that improve operational reliability, efficiency, and performance.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--gray-light)', lineHeight: 1.8 }}>
              With a strong understanding of industrial processes, we work closely with clients to
              develop customized solutions that align with their operational needs, safety standards,
              and production goals.
            </p>
            <Link to="/contact" className="btn-red" style={{ marginTop: '32px' }}>Work With Us</Link>
          </div>

          <div className="mission-badge-col">
            <div className="mission-badge">
              <div className="mb-top">SINCE</div>
              <div className="mb-num">2020</div>
              <div className="mb-sub">Industrial Excellence</div>
            </div>
            <div className="mission-quote">
              <div className="mq-mark">"</div>
              <p className="mq-text">
                Engineering precision, practical application, and long-term system stability — these are not just words. They are our operating principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section values-section">
        <div className="container">
          <p className="tag">Our Principles</p>
          <h2 className="section-title">CORE <span>VALUES</span></h2>
          <div className="divider" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-number">{v.number}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY 4.0 ── */}
      <section className="section industry4-section noise">
        <div className="container">
          <p className="tag">Future-Ready</p>
          <h2 className="section-title">INDUSTRIAL <span>4.0</span></h2>
          <div className="divider" />
          <div className="i4-content">
            <div className="i4-text">
              <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--gray-light)', lineHeight: 1.8, marginBottom: '16px' }}>
                Industry 4.0 refers to the modern transformation of manufacturing through automation,
                real-time data exchange, and intelligent systems — including cyber-physical systems,
                industrial IoT, cloud-based platforms, and data-driven analytics.
              </p>
              <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--gray-light)', lineHeight: 1.8 }}>
                By leveraging automation intelligence and advanced analytics, industries achieve safer
                operations, improved efficiency, and optimized decision-making through real-time
                monitoring, intelligent sensing, and system-driven control.
              </p>
            </div>
            <div className="i4-timeline">
              {timeline.map((t, i) => (
                <div className={`timeline-item ${t.year === '2011' ? 'current' : ''}`} key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-info">
                    <div className="timeline-era">{t.era}</div>
                    <div className="timeline-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
              <div className="timeline-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section clients-section">
        <div className="container">
          <p className="tag">Our Clientele</p>
          <h2 className="section-title">WHO WE <span>SERVE</span></h2>
          <div className="divider" />
          <div className="clients-grid">
            {['Caparo', 'BKT', 'JJF Castings', 'United Breweries (Heineken)'].map((c, i) => (
              <div className="client-card" key={i}>
                <div className="client-initial">{c[0]}</div>
                <div className="client-name">{c}</div>
              </div>
            ))}
          </div>
          <p className="clients-more">And many more industry leaders across sectors.</p>
        </div>
      </section>

    </div>
  )
}
