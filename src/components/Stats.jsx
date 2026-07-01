import { stats } from '../data.js'

export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="container stats-row">
        {stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
