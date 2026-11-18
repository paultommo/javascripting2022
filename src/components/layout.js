import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import NavBar from './NavBar'
import Footer from './Footer'
import logoNeon from '../images/logo-neon.png'
import '../styles/ds-tokens.css'
import './layout.css'
import './layout-custom.css'

const Layout = ({ children, hideNav }) => (
  <>
    {!hideNav ? <NavBar /> : (
      <header style={{ padding: '1rem clamp(1.25rem,4vw,3rem) 0' }}>
        <Link to="/">
          <img src={logoNeon} alt="Paul Tomlinson" style={{ height: 88, width: 'auto', display: 'block' }} />
        </Link>
      </header>
    )}
    <main className={hideNav ? 'lp-main' : undefined}>{children}</main>
    <Footer />
    <CookieConsent
      containerClasses="consentHolder"
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="MMCookie"
      expires={150}
      enableDeclineButton
      onAccept={() => {
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', { analytics_storage: 'granted' })
        }
      }}
    >
      This website uses cookies to improve user experience. By using this website you consent to
      their usage in accordance with our{' '}
      <a href="/privacy/" style={{ color: 'var(--accent)' }}>privacy policy</a>.
    </CookieConsent>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
