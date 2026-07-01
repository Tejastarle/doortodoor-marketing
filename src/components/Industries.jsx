import { Building2 } from 'lucide-react'
import { industries } from '../data.js'

export default function Industries() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Industries We Serve</span>
          <h2>Built for teams that need real, local customer contact</h2>
          <p>From FMCG sampling to fintech merchant onboarding, our field teams adapt the pitch, script and reporting to your sector.</p>
        </div>
        <div className="pill-grid">
          {industries.map((ind) => (
            <span className="pill" key={ind}><Building2 size={15} /> {ind}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
