import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page contact-page">

      {/* ── PAGE HERO ── */}
      <section className="page-hero noise">
        <div className="page-hero-bg">
          <div className="ph-grid" />
          <div className="ph-stripe" />
        </div>
        <div className="container page-hero-inner">
          <p className="tag anim-fade-up-d1">Reach Out</p>
          <h1 className="section-title anim-fade-up-d2">
            LET'S BUILD<br /><span>RELIABLE</span><br />SYSTEMS TOGETHER
          </h1>
          <p className="section-desc anim-fade-up-d3">
            Have a project in mind? Our engineering team is ready to listen and deliver.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="section contact-main">
        <div className="container contact-grid">

          {/* Info Panel */}
          <div className="contact-info">
            <p className="tag">Our Details</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
              CONTACT <span>INFO</span>
            </h2>
            <div className="divider" />

            <div className="contact-info-items">
              <div className="ci-item">
                <div className="ci-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Z"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Email</div>
                  <a className="ci-value" href="mailto:info@mechautodynamics.com">info@mechautodynamics.com</a>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Phone</div>
                  <a className="ci-value" href="tel:+918875869539">+91 8875869539</a>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7Z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Address</div>
                  <div className="ci-value">
                    3rd Floor, TA-316 Capital High Street,<br />
                    Phoolbagh, Bhiwadi RIICO Industrial Area,<br />
                    Rajasthan – 301019
                  </div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Website</div>
                  <a className="ci-value" href="https://www.mechautodynamics.com" target="_blank" rel="noreferrer">
                    www.mechautodynamics.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick services */}
            <div className="contact-services-hint">
              <div className="csh-label">We specialize in</div>
              <div className="csh-chips">
                {['Hydraulic Systems', 'Automation', 'Power Packs', 'Filtration', 'Solar Projects', 'On-Site Services'].map(s => (
                  <span className="csh-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="fs-icon">✓</div>
                <h3 className="fs-title">Message Received!</h3>
                <p className="fs-desc">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button className="btn-red" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <select
                      className="form-input form-select"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option>Industrial Automation</option>
                      <option>Hydraulic System Engineering</option>
                      <option>Power Pack Integration</option>
                      <option>Filtration Systems</option>
                      <option>Pneumatic Components</option>
                      <option>Solar Projects</option>
                      <option>On-Site Services</option>
                      <option>Maintenance & Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project or requirements..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn-red form-submit">
                  Send Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-pin-icon">📍</div>
            <div className="map-text">
              <strong>Mech Auto Dynamics</strong>
              <span>Bhiwadi RIICO Industrial Area, Rajasthan</span>
              <a
                href="https://maps.google.com/?q=Bhiwadi+RIICO+Industrial+Area+Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="btn-red"
                style={{ marginTop: '16px', display: 'inline-flex' }}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
