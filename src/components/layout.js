import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from 'react-cookie-consent'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/ds-tokens.css'
import './layout.css'
import './layout-custom.css'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Footer />
    <CookieConsent
      containerClasses="consentHolder"
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="MMCookie"
      expires={150}
      enableDeclineButton
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
