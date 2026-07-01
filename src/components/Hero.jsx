import { NavLink } from 'react-router-dom'
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grain" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow eyebrow--light">Field Marketing, Done Right</span>
          <h1>
            Real customers. <em>Real doors.</em> Real conversations.
          </h1>
          <p>
            DoorToDoor Marketing plans and runs face-to-face field campaigns across
            homes, societies, shops and offices — so your brand gets heard before it
            gets scrolled past.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="btn btn--primary">
              Start a Campaign <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/services" className="btn btn--outline-dark">
              Explore Services
            </NavLink>
          </div>
          <ul className="hero-checks">
            <li><CheckCircle2 size={16} /> Face-to-face acquisition</li>
            <li><CheckCircle2 size={16} /> Trained, verified field teams</li>
            <li><CheckCircle2 size={16} /> Daily reporting & photo proof</li>
            <li><CheckCircle2 size={16} /> 80+ cities coverage</li>
          </ul>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80"
            alt="Field marketing executive greeting a customer at the doorstep"
            loading="eager"
          />
          <div className="hero-badge">
            <PhoneCall size={22} />
            <div>
              <strong>1,200+</strong>
              <span>Field Agents Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
