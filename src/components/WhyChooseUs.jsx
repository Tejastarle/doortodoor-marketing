import { CheckCircle2 } from 'lucide-react'

const points = [
  'Field executives trained on product knowledge, pitch and objection handling',
  'Supervisors and team leads to review quality on the ground, every day',
  'App-based and sheet-based reporting with GPS-tagged visit proof',
  'City, area and society mapping before a single door is knocked',
  'Telecalling support to verify, follow up and convert captured leads',
]

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">Why Teams Choose Us</span>
          <h2>Structured field execution, not random door-knocking</h2>
          <p style={{ marginTop: 14, fontSize: 16.5 }}>
            We treat door-to-door marketing as a measurable customer acquisition
            process — with planning, training, execution and reporting built in
            from day one.
          </p>
          <ul className="check-list">
            {points.map((p) => (
              <li key={p}><CheckCircle2 size={18} /> {p}</li>
            ))}
          </ul>
        </div>
        <div className="split-media">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
            alt="Field marketing team reviewing the day's campaign plan"
          />
        </div>
      </div>
    </section>
  )
}
