import { services } from '../data.js'

export default function ServicesGrid({ limit }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <div className="grid grid--3">
      {items.map((s, i) => (
        <article className="service-card" key={s.id}>
          <span className="num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.summary}</p>
          <ul>
            {s.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
