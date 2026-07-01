import { NavLink } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { companyInfo } from '../data.js'

export default function CTASection() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2>Ready to reach real customers, door by door?</h2>
            <p>Tell us your city, audience and goal — we'll come back with a campaign plan and a team-size recommendation within 24 hours.</p>
          </div>
          <div className="cta-actions">
            <NavLink to="/contact" className="btn btn--primary">
              Get a Campaign Plan <ArrowRight size={16} />
            </NavLink>
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="btn btn--outline-dark">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
