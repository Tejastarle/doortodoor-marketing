import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { companyInfo } from '../data.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', campaign: 'Lead Generation', message: '',
  })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is wired up yet. This opens the visitor's email client with
    // the form details pre-filled — swap this for an API call once you add one.
    const subject = encodeURIComponent(`Campaign enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCity: ${form.city}\nCampaign Type: ${form.campaign}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="breadcrumb">Home <b>/</b> Contact</span>
          <h1>Let's plan your first campaign</h1>
          <p>Share a few details about your goal and city — we'll get back with a suggested approach and team size within 24 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div className="form-card">
            {submitted && (
              <div className="form-success">
                Thanks! Your email client should have opened with your details filled in — just hit send.
              </div>
            )}
            <h2 style={{ fontSize: 22, marginBottom: 6 }}>Send Us a Message</h2>
            <p style={{ marginBottom: 24 }}>No obligation, no hard sell — just a straight answer on how we'd approach it.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="city">Target City</label>
                  <input id="city" name="city" value={form.city} onChange={handleChange} required placeholder="e.g. Mumbai" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="campaign">Campaign Type</label>
                <select id="campaign" name="campaign" value={form.campaign} onChange={handleChange}>
                  <option>Residential Door-to-Door</option>
                  <option>Lead Generation</option>
                  <option>Product Sampling</option>
                  <option>App Download Campaign</option>
                  <option>Merchant Onboarding</option>
                  <option>B2B Field Marketing</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Tell us about your goal</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="What are you trying to achieve, and by when?" />
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                Send Message <Send size={16} />
              </button>
              <p className="form-note">
                This demo form has no backend yet — submitting opens your email client with the
                details pre-filled. Connect it to a form service (e.g. Formspree) or your own API
                when you're ready to go live.
              </p>
            </form>
          </div>

          <div className="contact-info-card">
            <h3>Reach Us Directly</h3>
            <ul>
              <li>
                <div className="icon-badge"><Phone size={18} /></div>
                <div><strong>Call Us</strong><span>{companyInfo.phone}</span></div>
              </li>
              <li>
                <div className="icon-badge"><Mail size={18} /></div>
                <div><strong>Email Us</strong><span>{companyInfo.email}</span></div>
              </li>
              <li>
                <div className="icon-badge"><MapPin size={18} /></div>
                <div><strong>Headquarters</strong><span>{companyInfo.address}</span></div>
              </li>
              <li>
                <div className="icon-badge"><Clock size={18} /></div>
                <div><strong>Working Hours</strong><span>{companyInfo.hours}</span></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
