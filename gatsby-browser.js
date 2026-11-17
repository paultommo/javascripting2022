/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// This will wrap the whole app in an apollo provider
export { wrapRootElement } from './src/apollo/wrap-root-element';

// Restore GA consent for returning visitors who already accepted
export const onClientEntry = () => {
  const hasConsented = document.cookie.split(';').some(c => c.trim() === 'MMCookie=true')
  if (hasConsented && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }
}