import { testimonials } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Client Feedback</span>
          <h2>What campaign partners say about working with us</h2>
        </div>
        <div className="grid grid--3">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="quote">"{t.quote}"</p>
              <div className="testimonial-foot">
                <div className="avatar"><img src={t.img} alt={t.name} /></div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
