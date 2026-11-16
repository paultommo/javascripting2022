import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Menu, X } from 'lucide-react'
import { InstagramIcon, LinkedInIcon } from './SocialIcons'
import Button from './ds/Button'
import LogoScript from './LogoScript'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about/' },
  { label: 'Portfolio', to: '/portfolio/' },
]

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! Let's have a chat"

function NavBar({ logo }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="pt-nav">
        <Link className="pt-nav__logo" to="/">
          {logo
            ? <img src={logo} alt="Paul Tomlinson" />
            : <LogoScript height={32} strokeColor="#000" />}
        </Link>

        <div className="pt-nav__links">
          {NAV_LINKS.map(l => (
            <Link key={l.to} className="pt-nav__link" activeClassName="pt-nav__link--active" to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="pt-nav__right">
          <div className="pt-nav__icons">
            <a href="https://www.instagram.com/paultommmo" target="_blank" rel="noreferrer" className="pt-nav__icon" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="http://uk.linkedin.com/in/paulrtomlinson/" target="_blank" rel="noreferrer" className="pt-nav__icon" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
          </div>
          <Button variant="primary" size="sm" href={CTA_HREF}>Let's chat</Button>
          <button className="pt-nav__burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`pt-drawer ${open ? 'pt-drawer--open' : ''}`} aria-hidden={!open}>
        <button className="pt-drawer__close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>
        <nav className="pt-drawer__nav">
          {NAV_LINKS.map(l => (
            <Link key={l.to} className="pt-drawer__link" to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Button variant="accent" size="lg" href={CTA_HREF} fullWidth>Let's have a chat</Button>
        </nav>
      </div>
      {open && <div className="pt-drawer__backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}

export default NavBar
