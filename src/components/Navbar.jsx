import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { companyInfo } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"></span>
          DoorTo<span>Door</span>&nbsp;Marketing
        </NavLink>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="nav-phone" href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
            <Phone size={15} /> {companyInfo.phone}
          </a>
          <NavLink to="/contact" className="btn btn--primary">Get a Campaign Plan</NavLink>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`container mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
