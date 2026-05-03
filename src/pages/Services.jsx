import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const categories = [
  {
    id: 'automation',
    label: 'Automation',
    title: 'Industrial Automation Systems',
    desc: 'Design and integration of automation solutions for manufacturing and process industries.',
    items: [
      'PLCs & Programmable Controllers',
      'Variable Frequency Drives (VFDs)',
      'I/O Cards & Control Modules',
      'SCADA & HMI Systems',
      'Sensor Integration',
      'Electric Control Panels (PLC & PCC)',
    ],
  },
  {
    id: 'hydraulic',
    label: 'Hydraulic',
    title: 'Hydraulic System Engineering',
    desc: 'Development of customized hydraulic systems optimized for performance and durability.',
    items: [
      'Hydraulic Circuit Design',
      'Power Pack Engineering',
      'Manifold & Precision Assemblies',
      'Hydraulic Cylinders (Design, Mfg & Repair)',
      'Accumulators & Seal Kits',
      'Advanced Valves & Components',
    ],
  },
  {
    id: 'filtration',
    label: 'Filtration',
    title: 'Industrial Filtration Systems',
    desc: 'Solutions designed to protect hydraulic systems and ensure long-term operational reliability.',
    items: [
      'Air Filters & Filter Elements',
      'Return Line & Pressure Line Filters',
      'Oil Filtration Machines',
      'Breathers & Tank Monitoring',
      'Fluid Conditioning Systems',
      'Basket Strainer Filters',
    ],
  },
  {
    id: 'pneumatic',
    label: 'Pneumatic',
    title: 'Pneumatic Cylinders, Valves & Accessories',
    desc: 'Precision pneumatic components designed for efficient and reliable automation.',
    items: [
      'PRA Pneumatic Cylinders',
      'Directional Control Valves',
      'Air Preparation Units',
      'TC15 Valve Systems',
      'Rotary Compact Modules',
      'Bellows Actuators & Accessories',
    ],
  },
  {
    id: 'services',
    label: 'On-Site Services',
    title: 'On-Site Hydraulic & Engineering Services',
    desc: 'Comprehensive on-site services to ensure reliable operation and system performance.',
    items: [
      'Installation & Commissioning',
      'Hydraulic Troubleshooting',
      'Hydrojetting',
      'Hydraulic Circuit Designing',
      'Air Compressor Servicing',
      'On-Site Piping Solutions',
    ],
  },
  {
    id: 'solar',
    label: 'Solar & Electrical',
    title: 'Solar & Electric Panel Projects',
    desc: 'Sustainable energy and electrical control solutions for industrial and commercial applications.',
    items: [
      'Industrial Solar Projects',
      'Commercial Solar Projects',
      'Residential Solar Projects',
      'PLC Panels Design & Manufacturing',
      'PCC Panels',
      'Electrical System Integration',
    ],
  },
]

const productSections = [
  {
    title: 'Advanced Hydraulic Components',
    items: ['Sandwich Mobile Valve', 'Cartridge Valves', 'HDS34 Load Sensing Valves', 'QX Series Pumps', 'Compact Power Packs', 'Elevator Hydraulics'],
  },
  {
    title: 'Industrial Lubricants & Oils',
    items: ['Hydraulic Oils', 'Gear Oils', 'Compressor Oils', 'Chain Lubricants', 'Multipurpose Greases', 'Cutting & Grinding Fluids'],
  },
  {
    title: 'Monitoring & Diagnostic Tools',
    items: ['Pressure Gauges', 'Flow Transmitters', 'Temperature Sensors', 'Laser Particle Counter', 'Hand-Held Test Equipment', 'Clogging Indicators'],
  },
  {
    title: 'Piping & Fittings',
    items: ['Aluminium Pipes & Fittings', 'Special Hydraulic Fittings', 'Pipe Clamps', 'Flanges', 'Test Couplings', 'Minimess Hoses'],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('automation')
  const active = categories.find(c => c.id === activeTab)

  return (
    <div className="page services-page">

      {/* ── PAGE HERO ── */}
      <section className="page-hero noise">
        <div className="page-hero-bg">
          <div className="ph-grid" />
          <div className="ph-stripe" />
        </div>
        <div className="container page-hero-inner">
          <p className="tag anim-fade-up-d1">What We Offer</p>
          <h1 className="section-title anim-fade-up-d2">
            CORE<br /><span>CAPABILITIES</span><br />&amp; SERVICES
          </h1>
          <p className="section-desc anim-fade-up-d3">
            From design to commissioning, we deliver end-to-end industrial automation and hydraulic solutions.
          </p>
        </div>
      </section>

      {/* ── SERVICES TABS ── */}
      <section className="section services-tabs-section">
        <div className="container">
          <p className="tag">Our Expertise</p>
          <h2 className="section-title">SERVICE <span>AREAS</span></h2>
          <div className="divider" />

          {/* Tab bar */}
          <div className="tab-bar">
            {categories.map(c => (
              <button
                key={c.id}
                className={`tab-btn ${activeTab === c.id ? 'active' : ''}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="tab-content" key={activeTab}>
            <div className="tc-left">
              <h3 className="tc-title">{active.title}</h3>
              <div className="divider" />
              <p className="tc-desc">{active.desc}</p>
              <Link to="/contact" className="btn-red" style={{ marginTop: '32px' }}>
                Request This Service
              </Link>
            </div>
            <div className="tc-right">
              <ul className="tc-items">
                {active.items.map((item, i) => (
                  <li key={i} className="tc-item">
                    <div className="tc-item-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="section products-section">
        <div className="container">
          <p className="tag">Product Range</p>
          <h2 className="section-title">WHAT WE <span>SUPPLY</span></h2>
          <div className="divider" />
          <div className="products-grid">
            {productSections.map((ps, i) => (
              <div className="product-group" key={i}>
                <h3 className="pg-title">{ps.title}</h3>
                <ul className="pg-list">
                  {ps.items.map((item, j) => (
                    <li key={j} className="pg-item">
                      <span className="pg-arrow">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="section process-section noise">
        <div className="container">
          <p className="tag">How We Work</p>
          <h2 className="section-title">OUR <span>PROCESS</span></h2>
          <div className="divider" />
          <div className="process-steps">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your operational requirements, environment, and goals.' },
              { step: '02', title: 'Engineering Design', desc: 'Custom system architecture and circuit design tailored to your needs.' },
              { step: '03', title: 'Fabrication', desc: 'Precision manufacturing using industry-grade components and materials.' },
              { step: '04', title: 'Installation', desc: 'On-site installation by our experienced technical team.' },
              { step: '05', title: 'Commissioning', desc: 'Functional testing, validation, and operational sign-off.' },
              { step: '06', title: 'Support', desc: 'Preventive maintenance and ongoing technical assistance.' },
            ].map((s, i) => (
              <div className="process-step" key={i}>
                <div className="ps-number">{s.step}</div>
                <div className="ps-body">
                  <h4 className="ps-title">{s.title}</h4>
                  <p className="ps-desc">{s.desc}</p>
                </div>
                {i < 5 && <div className="ps-arrow">›</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
