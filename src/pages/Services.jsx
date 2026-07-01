import ServicesGrid from '../components/ServicesGrid.jsx'
import ProcessPath from '../components/ProcessPath.jsx'
import CTASection from '../components/CTASection.jsx'
import { kpis } from '../data.js'

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="breadcrumb">Home <b>/</b> Services</span>
          <h1>Complete Face-to-Face Marketing & Field Sales Services</h1>
          <p>Nine campaign types, one consistent process — planning, trained field teams, daily reporting and quality checks on every visit.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Process</span>
            <h2>The same six steps, every field day</h2>
          </div>
          <ProcessPath />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Measurement</span>
            <h2>Track the right KPI for your campaign type</h2>
            <p>Every campaign is judged on numbers that match its actual goal — not vanity metrics.</p>
          </div>
          <div className="table-wrap">
            <table className="kpi-table">
              <thead>
                <tr><th>Campaign Type</th><th>Recommended KPIs</th></tr>
              </thead>
              <tbody>
                {kpis.map((row) => (
                  <tr key={row.type}>
                    <td><strong>{row.type}</strong></td>
                    <td>{row.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
