import React from 'react'
import { Link } from 'gatsby'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'

export default function NotFoundPage() {
  return (
    <Layout>
      <SeoBasic
        title="Page not found"
        description="This page doesn't exist — but paultommo.com does."
      />
      <section className="sec sec--paper" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 20vw, 10rem)',
            fontWeight: 900, lineHeight: 1, color: 'var(--magenta)',
            letterSpacing: '-0.04em', marginBottom: 'var(--space-4)',
          }}>404</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', marginBottom: 'var(--space-4)' }}>
            Nothing here.
          </h1>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', marginBottom: 'var(--space-8)', lineHeight: 'var(--lh-relaxed)' }}>
            This page doesn't exist — but if you're trying to get more bookings from your paid traffic, you're in the right place.
          </p>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand)', fontWeight: 'var(--fw-semi)', textDecoration: 'none' }}>
            Go to the homepage <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  )
}
