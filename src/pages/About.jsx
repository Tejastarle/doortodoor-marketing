import { CheckCircle2, Target, ShieldCheck, Users } from 'lucide-react'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTASection from '../components/CTASection.jsx'

const values = [
  { icon: Target, title: 'Outcome-Focused', text: 'Every campaign starts with a defined goal — leads, sign-ups, sales or awareness — not just "footfall".' },
  { icon: ShieldCheck, title: 'Verified Field Teams', text: 'ID-checked, uniformed, trained executives represent your brand the way you would want to be seen.' },
  { icon: Users, title: 'People-First', text: 'Field agents are treated as brand ambassadors, not day labour — that shows in how customers respond.' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="breadcrumb">Home <b>/</b> About Us</span>
          <h1>Built by people who still believe in the knock on the door</h1>
          <p>DoorToDoor Marketing exists because some conversations still work best face to face — and we've spent over a decade making those conversations count.</p>
        </div>
      </div>

      <Stats />

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
              alt="DoorToDoor Marketing field team briefing before a campaign"
            />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>From one city, one team — to 80+ cities of coordinated field execution</h2>
            <p style={{ marginTop: 14, fontSize: 16 }}>
              We started as a small residential outreach team helping a single FMCG
              brand get shelf visibility in new neighbourhoods. Over time, clients
              began asking for the same discipline in lead generation, merchant
              onboarding and B2B field visits — so we built the systems, training
              and reporting to support all of it, without losing the personal touch
              that makes door-to-door work in the first place.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} /> Independently trained field & supervisory network</li>
              <li><CheckCircle2 size={18} /> Daily, photo-verified reporting on every campaign</li>
              <li><CheckCircle2 size={18} /> Rapid deployment across new cities on request</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Believe</span>
            <h2>Values that shape every visit our teams make</h2>
          </div>
          <div className="grid grid--3">
            {values.map((v) => (
              <div className="service-card" key={v.title}>
                <div className="icon-badge"><v.icon size={20} /></div>
                <h3 style={{ marginTop: 16 }}>{v.title}</h3>
                <p style={{ marginTop: 10 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  )
}
