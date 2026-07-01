import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import ProcessPath from '../components/ProcessPath.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Industries from '../components/Industries.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Field marketing services built around one door at a time</h2>
            <p>From residential outreach to B2B field visits, every campaign is planned, staffed and reported with the same discipline.</p>
          </div>
          <ServicesGrid limit={6} />
          <div className="text-center mt-lg">
            <NavLink to="/services" className="btn btn--ghost">
              View All Services <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How a Campaign Runs</span>
            <h2>From first plan to the last follow-up call</h2>
            <p>Six steps, repeated every single field day — so results stay consistent across cities and teams.</p>
          </div>
          <ProcessPath />
        </div>
      </section>

      <Industries />
      <Testimonials />
      <CTASection />
    </>
  )
}
