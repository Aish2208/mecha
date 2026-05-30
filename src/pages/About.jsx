import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
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

       {/* ── MISSION ──  */}
         <section className="section mission-section">
         <div className="container mission-inner">

         <motion.div
           className="mission-text"
           initial={{ opacity: 0, x: -60 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
        <motion.p
           className="tag"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
          What Drives Us
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          MECH <span>MIND</span><br />
          AUTO DRIVE
        </motion.h2>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
  
        <motion.p
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--gray-light)',
            lineHeight: 1.8,
            marginBottom: '20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Mech Auto Dynamics is an industrial automation and services company focused on delivering
          system-driven engineering solutions for manufacturing and industrial environments.
        </motion.p>

        <motion.p
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--gray-light)',
            lineHeight: 1.8,
            marginBottom: '20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We specialize in designing, integrating, and supporting automation and hydraulic systems
          that improve operational reliability, efficiency, and performance.
        </motion.p>

        <motion.p
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--gray-light)',
            lineHeight: 1.8
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          With a strong understanding of industrial processes, we work closely with clients to
          develop customized solutions that align with their operational needs, safety standards,
          and production goals.
        </motion.p>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="btn-red"
            style={{ marginTop: '32px' }}
          >
            Work With Us
          </Link>
        </motion.div>
    </motion.div>

    <motion.div
      className="mission-badge-col"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mission-badge"
        whileHover={{
          scale: 1.05,
          y: -5
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-top">SINCE</div>
        <div className="mb-num">2020</div>
        <div className="mb-sub">Industrial Excellence</div>
      </motion.div>

      <motion.div
        className="mission-quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          y: -5
        }}
      >
        <div className="mq-mark">"</div>
        <p className="mq-text">
          Engineering precision, practical application, and long-term system stability — these are not just words. They are our operating principles.
        </p>
      </motion.div>
      </motion.div>

  </div>
</section>

      {/* ── VALUES ── */}
      <section className="section values-section">
      <div className="container">

      <motion.p
        className="tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Principles
      </motion.p>
  
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        CORE <span>VALUES</span>
      </motion.h2>
  
      <motion.div
        className="divider"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
  
    <div className="values-grid">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className="value-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="value-number"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.15
            }}
            viewport={{ once: true }}
          >
            {v.number}
          </motion.div>

          <h3 className="value-title">{v.title}</h3>

          <p className="value-desc">
            {v.desc}
          </p>
        </motion.div>
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

      <motion.p
        className="tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Clientele
      </motion.p>
  
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        WHO WE <span>SERVE</span>
      </motion.h2>
  
      <motion.div
        className="divider"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
  
      <div className="clients-grid">
        {['Caparo', 'BKT', 'JJF Castings', 'United Breweries (Heineken)'].map((c, i) => (
          <motion.div
            key={i}
            className="client-card"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut"
            }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <motion.div
            className="client-initial"
            whileHover={{
              rotate: 360
            }}
            transition={{
              duration: 0.6
            }}
          >
            {c[0]}
          </motion.div>

          <div className="client-name">{c}</div>
        </motion.div>
      ))}
    </div>

    <motion.p
      className="clients-more"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      And many more industry leaders across sectors.
    </motion.p>

  </div>
</section>

    </div>
  )
}
