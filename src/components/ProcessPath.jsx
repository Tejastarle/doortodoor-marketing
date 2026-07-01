import { process } from '../data.js'

export default function ProcessPath() {
  return (
    <div className="path-wrap">
      <div className="path-line" aria-hidden="true"></div>
      <div className="path-steps">
        {process.map((step, i) => (
          <div className="path-step" key={step.title}>
            <div className="path-dot">{String(i + 1).padStart(2, '0')}</div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
