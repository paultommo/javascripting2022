import React from 'react'
import { Link } from 'gatsby'
import { Mail } from 'lucide-react'
import { InstagramIcon, LinkedInIcon } from './SocialIcons'
import LogoScript from './LogoScript'

function Footer({ logo }) {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-foot">
      <div className="pt-foot__inner">
        <div className="pt-foot__brand">
          {logo
            ? <img src={logo} alt="Paul Tomlinson" />
            : <LogoScript height={40} style={{ marginLeft: '-4px' }} strokeColor="#000" />}
          <div className="pt-foot__social">
            <a href="https://www.instagram.com/paultommmo" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="http://uk.linkedin.com/in/paulrtomlinson/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href="mailto:hello@paultommo.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-foot__col">
          <h4>Studio</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/portfolio/">Portfolio</Link></li>
          </ul>
        </div>

        <div className="pt-foot__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@paultommo.com">hello@paultommo.com</a></li>
            <li>
              <a href="https://maps.app.goo.gl/3q4WSbage9wozrrv6" target="_blank" rel="noreferrer">
                Hackney Bridge, London E15
              </a>
            </li>
          </ul>
        </div>

        <div className="pt-foot__news">
          <h4>Want to learn more?</h4>
          <a
            href="mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"
            className="pt-btn pt-btn--accent pt-btn--md"
          >
            <span>Let's have a chat</span>
          </a>
        </div>
      </div>

      <div className="pt-foot__bar">
        <div className="pt-foot__barInner">
          <span className="pt-foot__copy">© {year} Paul Tomlinson</span>
          <div className="pt-foot__legal">
            <Link to="/privacy/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
