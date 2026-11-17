import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Mail } from 'lucide-react'
import { InstagramIcon, LinkedInIcon } from './SocialIcons'
import logoNeon from '../images/logo-neon.png'

function GazettaForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.result === 'success') {
        setStatus('success')
      } else {
        setStatus('error')
        setMessage(data.msg || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error — please try again.')
    }
  }

  if (status === 'success') {
    return <p className="pt-foot__mc-success">Check your inbox — we've sent you a confirmation email. Click the link to complete your sign up.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="pt-foot__mc-form" noValidate>
      <div className="pt-foot__mc-row">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          required
          disabled={status === 'loading'}
          className="pt-foot__mc-input"
        />
        <button type="submit" disabled={status === 'loading'} className="pt-btn pt-btn--accent pt-btn--sm">
          {status === 'loading' ? '…' : 'Sign up'}
        </button>
      </div>
      {status === 'error' && <p className="pt-foot__mc-error">{message}</p>}
    </form>
  )

}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-foot">
      <div className="pt-foot__inner">
        <div className="pt-foot__brand">
          <img src={logoNeon} alt="Paul Tomlinson" style={{ height: 57, width: 'auto' }} />
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
          <h4>Sign up to the Gazetta</h4>
          <p className="pt-foot__news-copy">One real finding from a real audit, every week. See exactly where paid traffic stops turning into bookings.</p>
          <GazettaForm />
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
