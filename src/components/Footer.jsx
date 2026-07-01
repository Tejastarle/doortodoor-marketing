import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'
import { companyInfo } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-mark" aria-hidden="true"></span>
              DoorTo<span>Door</span>&nbsp;Marketing
            </div>
            <p>
              We plan and run face-to-face field campaigns — door-to-door outreach, product
              sampling, lead generation and merchant onboarding — backed by trained teams and
              daily, transparent reporting.
            </p>
          </div>

          <div>
            <h5>Company</h5>
            <ul className="footer-links">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Our Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><NavLink to="/services">Residential Campaigns</NavLink></li>
              <li><NavLink to="/services">Lead Generation</NavLink></li>
              <li><NavLink to="/services">Merchant Onboarding</NavLink></li>
              <li><NavLink to="/services">B2B Field Marketing</NavLink></li>
            </ul>
          </div>

          <div>
            <h5>Get in Touch</h5>
            <ul className="footer-contact">
              <li><Phone size={16} /> {companyInfo.phone}</li>
              <li><Mail size={16} /> {companyInfo.email}</li>
              <li><MapPin size={16} /> {companyInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DoorToDoor Marketing. All rights reserved.</span>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
